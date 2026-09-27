/* ---------------------------------------------------------------------------
   Web Audio 环境音。
   完全用振荡器和噪声合成，不加载任何音频文件。浏览器禁止自动播放，所以
   默认关闭，必须由用户点击按钮才启动。
   --------------------------------------------------------------------------- */

export function createAmbient() {
  let ctx = null;
  let master = null;
  let on = false;

  function build() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return false;

    ctx = new AudioCtx();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    /* 低频风声：白噪声积分成棕噪声后再带通 */
    const frames = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < frames; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.4;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 430;
    noiseFilter.Q.value = 0.7;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.34;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();

    /* 低频嗡鸣：三个略微失谐的正弦叠出缓慢拍频 */
    const humGain = ctx.createGain();
    humGain.gain.value = 0.15;
    humGain.connect(master);

    for (const [freq, detune] of [[55, -6], [82.5, 7], [110, 3]]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.detune.value = detune;
      const gain = ctx.createGain();
      gain.gain.value = 0.5;
      osc.connect(gain);
      gain.connect(humGain);
      osc.start();
    }

    /* 极慢的呼吸起伏 */
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.055;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.1;
    lfo.connect(lfoGain);
    lfoGain.connect(humGain.gain);
    lfo.start();

    return true;
  }

  return {
    get isOn() {
      return on;
    },
    async toggle() {
      if (!ctx && !build()) return false;
      if (ctx.state === 'suspended') await ctx.resume();
      on = !on;
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(on ? 0.5 : 0, now + (on ? 2.2 : 1));
      return on;
    },
    setIntensity(level) {
      if (!ctx || !on) return;
      master.gain.setTargetAtTime(0.34 + level * 0.5, ctx.currentTime, 0.6);
    },
  };
}
