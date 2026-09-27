(()=>{var nS=Object.defineProperty;var iS=(s,e,t)=>e in s?nS(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Et=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var sS=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Ne=(s,e,t)=>iS(s,typeof e!="symbol"?e+"":e,t);function rS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Y_(){let s=qo("canvas");return s.style.display="block",s}function tl(...s){let e="THREE."+s.shift();Ko?Ko("log",e,...s):console.log(e,...s)}function q_(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Fe(...s){s=q_(s);let e="THREE."+s.shift();if(Ko)Ko("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=q_(s);let e="THREE."+s.shift();if(Ko)Ko("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hr(...s){let e=s.join(" ");e in Ag||(Ag[e]=!0,Fe(...s))}function K_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function is(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function Wd(s,e){return(s%e+e)%e}function aS(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lS(s,e,t){return s!==e?(t-s)/(e-s):0}function Qa(s,e,t){return(1-t)*s+t*e}function cS(s,e,t,n){return Qa(s,e,1-Math.exp(-t*n))}function uS(s,e=1){return e-Math.abs(Wd(s,e*2)-e)}function hS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pS(s,e){return s+Math.random()*(e-s)}function mS(s){return s*(.5-Math.random())}function gS(s){s!==void 0&&(Rg=s);let e=Rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _S(s){return s*ja}function xS(s){return s*Xr}function vS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function yS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function SS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function MS(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ts(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bS(){let s={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(i.r=Go(i.r),i.g=Go(i.g),i.b=Go(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?el:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cn]:{primaries:e,whitePoint:n,transfer:el,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Xf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function Kf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function nd(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){kr.fromArray(s,r);let a=i.x*Math.abs(kr.x)+i.y*Math.abs(kr.y)+i.z*Math.abs(kr.z),l=e.dot(kr),c=t.dot(kr),u=n.dot(kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function kS(s,e,t,n,i,r,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===vs,a),l===null)return null;Zc.copy(a),Zc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zc);return c<t.near||c>t.far?null:{distance:c,point:Zc.clone(),object:s}}function Jc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xc),s.getVertexPosition(l,Yc),s.getVertexPosition(c,qc);let u=kS(s,e,t,n,Xc,Yc,qc,Hg);if(u){let f=new F;fr.getBarycoord(Hg,Xc,Yc,qc,f),i&&(u.uv=fr.getInterpolatedAttribute(i,a,l,c,f,new ke)),r&&(u.uv1=fr.getInterpolatedAttribute(r,a,l,c,f,new ke)),o&&(u.normal=fr.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new F,materialIndex:0};fr.getNormal(Xc,Yc,qc,h.normal),u.face=h,u.barycoord=f}return u}function tu(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(vu.fromBufferAttribute(a,i),yu.fromBufferAttribute(a,r),t.distanceSqToSegment(vu,yu,ud,$g)>n)return;ud.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ud);if(!(c<e.near||c>e.far))return{distance:c,point:$g.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}function t_(s,e,t,n,i,r,o){let a=Sd.distanceSqToPoint(s);if(a<t){let l=new F;Sd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Yd(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}function no(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(s_(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(s_(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Hn(s){let e={};for(let t=0;t<s.length;t++){let n=no(s[t]);for(let i in n)e[i]=n[i]}return e}function s_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function WS(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}function hr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lu(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function qS(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function r_(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function KS(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function $_(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ZS(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function JS(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=$_(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=ZS(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function o_(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}function $S(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return xl;case"quaternion":return Vs;case"bool":case"boolean":return ks;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$S(s.type);if(s.times===void 0){let n=[],i=[];KS(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),lu(s.settings)&&(t.settings={inTangents:hr(s.settings.inTangents,Float32Array),outTangents:hr(s.settings.outTangents,Float32Array)}),t}function a_(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function QS(){this._document.hidden===!1&&this.reset()}function Jd(s,e,t,n){let i=lM(n);switch(t){case kd:return s*e;case Vu:return s*e/i.components*i.byteLength;case Hu:return s*e/i.components*i.byteLength;case yr:return s*e*2/i.components*i.byteLength;case Gu:return s*e*2/i.components*i.byteLength;case zd:return s*e*3/i.components*i.byteLength;case Ti:return s*e*4/i.components*i.byteLength;case Wu:return s*e*4/i.components*i.byteLength;case Ol:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yu:case Ku:return Math.max(s,16)*Math.max(e,8)/4;case Xu:case qu:return Math.max(s,8)*Math.max(e,8)/2;case Zu:case Ju:case ju:case Qu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $u:case zl:case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xh:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vl:case yh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lM(s){switch(s){case di:case Ud:return{byteLength:1,components:1};case aa:case Od:case Ln:return{byteLength:2,components:1};case ku:case zu:return{byteLength:2,components:4};case as:case Bu:case bi:return{byteLength:4,components:1};case Fd:case Bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var f_,Rd,d_,Al,p_,sa,vs,In,ki,zi,ra,Rl,Cd,Pd,m_,jr,g_,__,x_,v_,y_,S_,M_,b_,Id,Ld,T_,w_,E_,A_,R_,C_,P_,I_,L_,cu,uu,hu,Wo,fu,du,pu,mu,Nd,N_,D_,rs,Cl,Pl,Il,Qr,Ll,Nl,Dl,gd,U_,Dd,xr,eo,Uu,Ou,Ul,dr,Fi,Xo,en,Fu,to,tn,oa,os,di,Ud,Od,aa,Bu,as,bi,Ln,ku,zu,la,Fd,Bd,kd,zd,Ti,ms,vr,Vu,Hu,yr,Gu,Wu,Ol,Fl,Bl,kl,Xu,Yu,qu,Ku,Zu,Ju,$u,ju,Qu,zl,eh,th,nh,ih,sh,rh,oh,ah,lh,ch,uh,hh,fh,dh,ph,mh,gh,_h,xh,vh,Vl,yh,Gr,Wr,ou,_d,xd,vd,yd,O_,Vd,Hl,ca,F_,Sh,B_,ls,Ht,Cn,el,gt,au,k_,z_,V_,H_,Mh,G_,W_,bh,X_,Hd,Gd,ns,Yo,Ag,Ko,Z_,gs,Bn,Rg,ja,Xr,Xd,$d,ke,Si,jd,F,Gf,Cg,Qd,je,Wf,Pg,Ig,et,Co,gu,TS,Zo,wS,Yf,gn,ep,Mt,_u,hn,nl,xu,Du,tt,Po,$i,ES,AS,or,Uc,vi,Lg,Ng,Fs,il,RS,Dg,Io,Ps,Oc,Wa,CS,PS,Ug,Og,Fg,Bg,IS,Lo,qf,Gt,Rn,LS,Jo,J_,ar,Fc,Pe,kn,sl,Yr,ji,Is,Zf,Ls,No,Do,kg,Jf,$f,jf,Qf,ed,td,fr,fn,Ns,Qi,Bc,Uo,Oo,Fo,lr,cr,Br,Xa,kc,zc,kr,cn,Vc,NS,Kt,rl,ol,Dt,DS,Ya,id,ui,US,Oi,sd,Bo,yi,qa,bn,kt,pr,Qn,mr,rd,OS,FS,es,BS,hi,Ds,od,Hc,Gc,qr,zn,zg,zr,Wc,Vg,Xc,Yc,qc,ad,Kc,Hg,Zc,vt,Ka,Gg,Wg,zS,Xg,$c,ld,Yg,cd,al,$o,jo,qg,VS,ll,Bs,ko,Kg,jc,Zg,HS,Za,Ja,cl,Vr,GS,Qc,Qo,ea,vu,yu,Jg,$a,eu,ud,$g,Kr,jg,Qg,ul,hl,ta,e_,Sd,nu,iu,fl,dl,pl,gr,Su,ml,ss,gl,Zr,Mu,n_,i_,hd,fd,dd,_l,Jr,Xs,XS,YS,nn,na,Vn,Pn,bu,Tu,_s,wu,Eu,Au,Ru,fi,ks,xl,zs,Cu,Vs,Hs,_r,vl,ps,Pu,j_,Bi,Us,Md,Gs,zo,Iu,yl,$r,pd,l_,c_,ia,su,ru,ds,Sl,ur,u_,h_,un,bd,Ml,Td,bl,xs,wd,Ws,Tl,Mi,md,wl,Vo,Ho,Lu,Nu,El,Kd,eM,Zd,tM,nM,iM,sM,rM,oM,aM,Ed,Ct,OC,tp,Ad,np=Et(()=>{f_=0,Rd=1,d_=2,Al=1,p_=2,sa=3,vs=0,In=1,ki=2,zi=0,ra=1,Rl=2,Cd=3,Pd=4,m_=5,jr=100,g_=101,__=102,x_=103,v_=104,y_=200,S_=201,M_=202,b_=203,Id=204,Ld=205,T_=206,w_=207,E_=208,A_=209,R_=210,C_=211,P_=212,I_=213,L_=214,cu=0,uu=1,hu=2,Wo=3,fu=4,du=5,pu=6,mu=7,Nd=0,N_=1,D_=2,rs=0,Cl=1,Pl=2,Il=3,Qr=4,Ll=5,Nl=6,Dl=7,gd="attached",U_="detached",Dd=300,xr=301,eo=302,Uu=303,Ou=304,Ul=306,dr=1e3,Fi=1001,Xo=1002,en=1003,Fu=1004,to=1005,tn=1006,oa=1007,os=1008,di=1009,Ud=1010,Od=1011,aa=1012,Bu=1013,as=1014,bi=1015,Ln=1016,ku=1017,zu=1018,la=1020,Fd=35902,Bd=35899,kd=1021,zd=1022,Ti=1023,ms=1026,vr=1027,Vu=1028,Hu=1029,yr=1030,Gu=1031,Wu=1033,Ol=33776,Fl=33777,Bl=33778,kl=33779,Xu=35840,Yu=35841,qu=35842,Ku=35843,Zu=36196,Ju=37492,$u=37496,ju=37488,Qu=37489,zl=37490,eh=37491,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,uh=37817,hh=37818,fh=37819,dh=37820,ph=37821,mh=36492,gh=36494,_h=36495,xh=36283,vh=36284,Vl=36285,yh=36286,Gr=2300,Wr=2301,ou=2302,_d=2303,xd=2400,vd=2401,yd=2402,O_=2500,Vd=0,Hl=1,ca=2,F_=3200,Sh=0,B_=1,ls="",Ht="srgb",Cn="srgb-linear",el="linear",gt="srgb",au=7680,k_=519,z_=512,V_=513,H_=514,Mh=515,G_=516,W_=517,bh=518,X_=519,Hd=35044,Gd="300 es",ns=2e3,Yo=2001;Ag={},Ko=null;Z_={[cu]:uu,[hu]:pu,[fu]:mu,[Wo]:du,[uu]:cu,[pu]:hu,[mu]:fu,[du]:Wo},gs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rg=1234567,ja=Math.PI/180,Xr=180/Math.PI;Xd={DEG2RAD:ja,RAD2DEG:Xr,generateUUID:is,clamp:rt,euclideanModulo:Wd,mapLinear:aS,inverseLerp:lS,lerp:Qa,damp:cS,pingpong:uS,smoothstep:hS,smootherstep:fS,randInt:dS,randFloat:pS,randFloatSpread:mS,seededRandom:gS,degToRad:_S,radToDeg:xS,isPowerOfTwo:vS,ceilPowerOfTwo:yS,floorPowerOfTwo:SS,setQuaternionFromProperEuler:MS,normalize:St,denormalize:ts},$d=class $d{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$d.prototype.isVector2=!0;ke=$d,Si=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a;let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jd=class jd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=i+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jd.prototype.isVector3=!0;F=jd,Gf=new F,Cg=new Si,Qd=class Qd{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],A=i[4],v=i[7],S=i[2],b=i[5],w=i[8];return r[0]=o*_+a*M+l*S,r[3]=o*m+a*A+l*b,r[6]=o*g+a*v+l*w,r[1]=c*_+u*M+f*S,r[4]=c*m+u*A+f*b,r[7]=c*g+u*v+f*w,r[2]=h*_+d*M+p*S,r[5]=h*m+d*A+p*b,r[8]=h*g+d*v+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wf.makeScale(e,t)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wf.makeRotation(-e)),this}translate(e,t){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qd.prototype.isMatrix3=!0;je=Qd,Wf=new je,Pg=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et=bS();gu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Co===void 0&&(Co=qo("canvas")),Co.width=e.width,Co.height=e.height;let i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},TS=0,Zo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xf(i[o].image)):r.push(Xf(i[o]))}else r=Xf(i);n.url=r}return t||(e.images[this.uuid]=n),n}};wS=0,Yf=new F,gn=class s extends gs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Fi,i=Fi,r=tn,o=os,a=Ti,l=di,c=s.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=is(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Dd;gn.DEFAULT_ANISOTROPY=1;ep=class ep{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(d+1)/2,S=(g+1)/2,b=(u+h)/4,w=(f+_)/4,x=(p+m)/4;return A>v&&A>S?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=b/n,r=w/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=x/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;Mt=ep,_u=class extends gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new gn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nl=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},xu=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Du=class Du{constructor(e,t,n,i,r,o,a,l,c,u,f,h,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,f,h,d,p,_,m)}set(e,t,n,i,r,o,a,l,c,u,f,h,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Du().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Po.setFromMatrixColumn(e,0).length(),r=1/Po.setFromMatrixColumn(e,1).length(),o=1/Po.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,AS)}lookAt(e,t,n){let i=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),or.crossVectors(n,vi),or.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),or.crossVectors(n,vi)),or.normalize(),Uc.crossVectors(vi,or),i[0]=or.x,i[4]=Uc.x,i[8]=vi.x,i[1]=or.y,i[5]=Uc.y,i[9]=vi.y,i[2]=or.z,i[6]=Uc.z,i[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],A=n[7],v=n[11],S=n[15],b=i[0],w=i[4],x=i[8],T=i[12],R=i[1],D=i[5],P=i[9],N=i[13],L=i[2],B=i[6],G=i[10],z=i[14],Z=i[3],H=i[7],C=i[11],$=i[15];return r[0]=o*b+a*R+l*L+c*Z,r[4]=o*w+a*D+l*B+c*H,r[8]=o*x+a*P+l*G+c*C,r[12]=o*T+a*N+l*z+c*$,r[1]=u*b+f*R+h*L+d*Z,r[5]=u*w+f*D+h*B+d*H,r[9]=u*x+f*P+h*G+d*C,r[13]=u*T+f*N+h*z+d*$,r[2]=p*b+_*R+m*L+g*Z,r[6]=p*w+_*D+m*B+g*H,r[10]=p*x+_*P+m*G+g*C,r[14]=p*T+_*N+m*z+g*$,r[3]=M*b+A*R+v*L+S*Z,r[7]=M*w+A*D+v*B+S*H,r[11]=M*x+A*P+v*G+S*C,r[15]=M*T+A*N+v*z+S*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*d-c*h,A=a*d-c*f,v=a*h-l*f,S=o*d-c*u,b=o*h-l*u,w=o*f-a*u;return t*(_*M-m*A+g*v)-n*(p*M-m*S+g*b)+i*(p*A-_*S+g*w)-r*(p*v-_*b+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*a-n*o,A=t*l-i*o,v=t*c-r*o,S=n*l-i*a,b=n*c-r*a,w=i*c-r*l,x=u*_-f*p,T=u*m-h*p,R=u*g-d*p,D=f*m-h*_,P=f*g-d*_,N=h*g-d*m,L=M*N-A*P+v*D+S*R-b*T+w*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(a*N-l*P+c*D)*B,e[1]=(i*P-n*N-r*D)*B,e[2]=(_*w-m*b+g*S)*B,e[3]=(h*b-f*w-d*S)*B,e[4]=(l*R-o*N-c*T)*B,e[5]=(t*N-i*R+r*T)*B,e[6]=(m*v-p*w-g*A)*B,e[7]=(u*w-h*v+d*A)*B,e[8]=(o*P-a*R+c*x)*B,e[9]=(n*R-t*P-r*x)*B,e[10]=(p*b-_*v+g*M)*B,e[11]=(f*v-u*b-d*M)*B,e[12]=(a*T-o*D-l*x)*B,e[13]=(t*D-n*T+i*x)*B,e[14]=(_*A-p*S-m*M)*B,e[15]=(u*S-f*A+h*M)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,_=o*u,m=o*f,g=a*f,M=l*c,A=l*u,v=l*f,S=n.x,b=n.y,w=n.z;return i[0]=(1-(_+g))*S,i[1]=(d+v)*S,i[2]=(p-A)*S,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(h+g))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(p+A)*w,i[9]=(m-M)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Po.set(i[0],i[1],i[2]).length(),a=Po.set(i[4],i[5],i[6]).length(),l=Po.set(i[8],i[9],i[10]).length();r<0&&(o=-o),$i.copy(this);let c=1/o,u=1/a,f=1/l;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=u,$i.elements[5]*=u,$i.elements[6]*=u,$i.elements[8]*=f,$i.elements[9]*=f,$i.elements[10]*=f,t.setFromRotationMatrix($i),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=ns,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ns)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Yo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ns,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ns)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Yo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Du.prototype.isMatrix4=!0;tt=Du,Po=new F,$i=new tt,ES=new F(0,0,0),AS=new F(1,1,1),or=new F,Uc=new F,vi=new F,Lg=new tt,Ng=new Si,Fs=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fs.DEFAULT_ORDER="XYZ";il=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},RS=0,Dg=new F,Io=new Si,Ps=new tt,Oc=new F,Wa=new F,CS=new F,PS=new Si,Ug=new F(1,0,0),Og=new F(0,1,0),Fg=new F(0,0,1),Bg={type:"added"},IS={type:"removed"},Lo={type:"childadded",child:null},qf={type:"childremoved",child:null},Gt=class s extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new Fs,n=new Si,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new je}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Io.setFromAxisAngle(e,t),this.quaternion.multiply(Io),this}rotateOnWorldAxis(e,t){return Io.setFromAxisAngle(e,t),this.quaternion.premultiply(Io),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,t){return Dg.copy(e).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oc.copy(e):Oc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Wa,Oc,this.up):Ps.lookAt(Oc,Wa,this.up),this.quaternion.setFromRotationMatrix(Ps),i&&(Ps.extractRotation(i.matrixWorld),Io.setFromRotationMatrix(Ps),this.quaternion.premultiply(Io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IS),qf.child=e,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Rn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},LS={type:"move"},Jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Fc={h:0,s:0,l:0};Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Wd(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kf(o,r,e+1/3),this.g=Kf(o,r,e),this.b=Kf(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=J_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.workingToColorSpace(kn.copy(this),e),Math.round(rt(kn.r*255,0,255))*65536+Math.round(rt(kn.g*255,0,255))*256+Math.round(rt(kn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(kn.copy(this),t);let n=kn.r,i=kn.g,r=kn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Ht){et.workingToColorSpace(kn.copy(this),e);let t=kn.r,n=kn.g,i=kn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Fc);let n=Qa(ar.h,Fc.h,t),i=Qa(ar.s,Fc.s,t),r=Qa(ar.l,Fc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new Pe;Pe.NAMES=J_;sl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yr=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new F,Is=new F,Zf=new F,Ls=new F,No=new F,Do=new F,kg=new F,Jf=new F,$f=new F,jf=new F,Qf=new Mt,ed=new Mt,td=new Mt,fr=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ji.subVectors(e,t),i.cross(ji);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ji.subVectors(i,t),Is.subVectors(n,t),Zf.subVectors(e,t);let o=ji.dot(ji),a=ji.dot(Is),l=ji.dot(Zf),c=Is.dot(Is),u=Is.dot(Zf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ls.x),l.addScaledVector(o,Ls.y),l.addScaledVector(a,Ls.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Qf.setScalar(0),ed.setScalar(0),td.setScalar(0),Qf.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Qf,r.x),o.addScaledVector(ed,r.y),o.addScaledVector(td,r.z),o}static isFrontFacing(e,t,n,i){return ji.subVectors(n,t),Is.subVectors(e,t),ji.cross(Is).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),ji.cross(Is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;No.subVectors(i,n),Do.subVectors(r,n),Jf.subVectors(e,n);let l=No.dot(Jf),c=Do.dot(Jf);if(l<=0&&c<=0)return t.copy(n);$f.subVectors(e,i);let u=No.dot($f),f=Do.dot($f);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(No,o);jf.subVectors(e,r);let d=No.dot(jf),p=Do.dot(jf);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Do,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return kg.subVectors(r,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(kg,a);let g=1/(m+_+h);return o=_*g,a=h*g,t.copy(n).addScaledVector(No,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bc.copy(n.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),kc.subVectors(this.max,Xa),Uo.subVectors(e.a,Xa),Oo.subVectors(e.b,Xa),Fo.subVectors(e.c,Xa),lr.subVectors(Oo,Uo),cr.subVectors(Fo,Oo),Br.subVectors(Uo,Fo);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Br.z,Br.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Br.z,0,-Br.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Br.y,Br.x,0];return!nd(t,Uo,Oo,Fo,kc)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,Uo,Oo,Fo,kc))?!1:(zc.crossVectors(lr,cr),t=[zc.x,zc.y,zc.z],nd(t,Uo,Oo,Fo,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ns=[new F,new F,new F,new F,new F,new F,new F,new F],Qi=new F,Bc=new fn,Uo=new F,Oo=new F,Fo=new F,lr=new F,cr=new F,Br=new F,Xa=new F,kc=new F,zc=new F,kr=new F;cn=new F,Vc=new ke,NS=0,Kt=class extends gs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},rl=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ol=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},DS=new fn,Ya=new F,id=new F,ui=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):DS.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(id)),this.expandByPoint(Ya.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},US=0,Oi=new tt,sd=new Gt,Bo=new F,yi=new fn,qa=new fn,bn=new F,kt=class s extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rS(e)?ol:rl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qa.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(yi.min,qa.min),yi.expandByPoint(bn),bn.addVectors(yi.max,qa.max),yi.expandByPoint(bn)):(yi.expandByPoint(qa.min),yi.expandByPoint(qa.max))}yi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(e,c),bn.add(Bo)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new F,l[x]=new F;let c=new F,u=new F,f=new F,h=new ke,d=new ke,p=new ke,_=new F,m=new F;function g(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),a[x].add(_),a[T].add(_),a[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let R=M[x],D=R.start,P=R.count;for(let N=D,L=D+P;N<L;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let A=new F,v=new F,S=new F,b=new F;function w(x){S.fromBufferAttribute(i,x),b.copy(S);let T=a[x];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(b,T);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=M.length;x<T;++x){let R=M[x],D=R.start,P=R.count;for(let N=D,L=D+P;N<L;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Kt(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Qn=new F,mr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ts(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ts(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ts(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ts(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rd=new F,OS=new F,FS=new je,es=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=rd.subVectors(n,t).cross(OS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(rd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||FS.getNormalMatrix(e),i=this.coplanarPoint(rd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},BS=0,hi=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ra,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Ld,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=au,this.stencilZFail=au,this.stencilZPass=au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new es().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ds=new F,od=new F,Hc=new F,Gc=new F,qr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ds.copy(this.origin).addScaledVector(this.direction,t),Ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){od.copy(e).add(t).multiplyScalar(.5),Hc.copy(t).sub(e).normalize(),Gc.copy(this.origin).sub(od);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Hc),a=Gc.dot(this.direction),l=-Gc.dot(Hc),c=Gc.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(od).addScaledVector(Hc,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ds.subVectors(e.center,this.origin);let n=Ds.dot(this.direction),i=Ds.dot(Ds)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ds)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,A=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(u),w,x,T,R,D,P,N,L,B,G,z,Z;if(v>=S&&v>=b?(T=l,P=f,B=p,Z=g,l>=0?(w=c,x=u,R=h,D=d,N=_,L=m,G=M,z=A):(w=u,x=c,R=d,D=h,N=m,L=_,G=A,z=M)):S>=b?(T=c,P=h,B=_,Z=M,c>=0?(w=u,x=l,R=d,D=f,N=m,L=p,G=A,z=g):(w=l,x=u,R=f,D=d,N=p,L=m,G=g,z=A)):(T=u,P=d,B=m,Z=A,u>=0?(w=l,x=c,R=f,D=h,N=p,L=_,G=g,z=M):(w=c,x=l,R=h,D=f,N=_,L=p,G=M,z=g)),T===0)return null;let H=w/T,C=x/T,$=1/T,me=R-H*P,ye=D-C*P,Ie=N-H*B,Le=L-C*B,Xe=G-H*Z,J=z-C*Z,ee=Xe*Le-J*Ie,xe=me*J-ye*Xe,Ge=Ie*ye-Le*me;if(i){if(ee<0||xe<0||Ge<0)return null}else if((ee<0||xe<0||Ge<0)&&(ee>0||xe>0||Ge>0))return null;let ge=ee+xe+Ge;if(ge===0)return null;let Ve=$*(ee*P+xe*B+Ge*Z);return(ge>0?Ve<0:Ve>0)?null:this.at(Ve/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zg=new tt,zr=new qr,Wc=new ui,Vg=new F,Xc=new F,Yc=new F,qc=new F,ad=new F,Kc=new F,Hg=new F,Zc=new F,vt=class extends Gt{constructor(e=new kt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Kc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(ad.fromBufferAttribute(f,e),o?Kc.addScaledVector(ad,u):Kc.addScaledVector(ad.sub(t),u))}t.add(Kc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wc.copy(n.boundingSphere),Wc.applyMatrix4(r),zr.copy(e.ray).recast(e.near),!(Wc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Wc,Vg)===null||zr.origin.distanceToSquared(Vg)>(e.far-e.near)**2))&&(zg.copy(r).invert(),zr.copy(e.ray).applyMatrix4(zg),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,S=A;v<S;v+=3){let b=a.getX(v),w=a.getX(v+1),x=a.getX(v+2);i=Jc(this,g,e,n,c,u,f,b,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let M=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);i=Jc(this,o,e,n,c,u,f,M,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,S=A;v<S;v+=3){let b=v,w=v+1,x=v+2;i=Jc(this,g,e,n,c,u,f,b,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let M=m,A=m+1,v=m+2;i=Jc(this,o,e,n,c,u,f,M,A,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};Ka=new Mt,Gg=new Mt,Wg=new Mt,zS=new Mt,Xg=new tt,$c=new F,ld=new ui,Yg=new tt,cd=new qr,al=class extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$c),this.boundingBox.expandByPoint($c)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$c),this.boundingSphere.expandByPoint($c)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ld.copy(this.boundingSphere),ld.applyMatrix4(i),e.ray.intersectsSphere(ld)!==!1&&(Yg.copy(i).invert(),cd.copy(e.ray).applyMatrix4(Yg),!(this.boundingBox!==null&&cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===U_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Gg.fromBufferAttribute(i.attributes.skinIndex,e),Wg.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ka.copy(t),t.set(0,0,0,0)):(Ka.set(...t,1),t.set(0,0,0)),Ka.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Wg.getComponent(r);if(o!==0){let a=Gg.getComponent(r);Xg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zS.copy(Ka).applyMatrix4(Xg),o)}}return t.isVector4&&(t.w=Ka.w),t.applyMatrix4(this.bindMatrixInverse)}},$o=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jo=class extends gn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=en,u=en,f,h){super(null,o,a,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qg=new tt,VS=new tt,ll=class s{constructor(e=[],t=[]){this.uuid=is(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:VS;qg.multiplyMatrices(a,t[r]),qg.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new jo(t,e,e,Ti,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new $o),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Bs=class extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ko=new tt,Kg=new tt,jc=[],Zg=new fn,HS=new tt,Za=new vt,Ja=new ui,cl=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,HS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),Zg.copy(e.boundingBox).applyMatrix4(ko),this.boundingBox.union(Zg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),Ja.copy(e.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(Ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(n),e.ray.intersectsSphere(Ja)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ko),Kg.multiplyMatrices(n,ko),Za.matrixWorld=Kg,Za.raycast(e,jc);for(let o=0,a=jc.length;o<a;o++){let l=jc[o];l.instanceId=r,l.object=this,t.push(l)}jc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(i*this.count),i,this.count,Vu,bi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new ui,GS=new ke(.5,.5),Qc=new F,Qo=class{constructor(e=new es,t=new es,n=new es,i=new es,r=new es,o=new es){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ns,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],A=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,d-u,g-p,S-M).normalize(),i[1].setComponents(c+o,d+u,g+p,S+M).normalize(),i[2].setComponents(c+a,d+f,g+_,S+A).normalize(),i[3].setComponents(c-a,d-f,g-_,S-A).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,d-h,g-m,S-v).normalize();else if(i[4].setComponents(c-l,d-h,g-m,S-v).normalize(),t===ns)i[5].setComponents(c+l,d+h,g+m,S+v).normalize();else if(t===Yo)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);let t=GS.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qc.x=i.normal.x>0?e.max.x:e.min.x,Qc.y=i.normal.y>0?e.max.y:e.min.y,Qc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ea=class extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vu=new F,yu=new F,Jg=new tt,$a=new qr,eu=new ui,ud=new F,$g=new F,Kr=class extends Gt{constructor(e=new kt,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)vu.fromBufferAttribute(t,i-1),yu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vu.distanceTo(yu);e.setAttribute("lineDistance",new Dt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eu.copy(n.boundingSphere),eu.applyMatrix4(i),eu.radius+=r,e.ray.intersectsSphere(eu)===!1)return;Jg.copy(i).invert(),$a.copy(e.ray).applyMatrix4(Jg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),M=u.getX(_+1),A=tu(this,e,$a,l,g,M,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=tu(this,e,$a,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=tu(this,e,$a,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=tu(this,e,$a,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};jg=new F,Qg=new F,ul=class extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)jg.fromBufferAttribute(t,i),Qg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jg.distanceTo(Qg);e.setAttribute("lineDistance",new Dt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hl=class extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ta=class extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},e_=new tt,Sd=new qr,nu=new ui,iu=new F,fl=class extends Gt{constructor(e=new kt,t=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nu.copy(n.boundingSphere),nu.applyMatrix4(i),nu.radius+=r,e.ray.intersectsSphere(nu)===!1)return;e_.copy(i).invert(),Sd.copy(e.ray).applyMatrix4(e_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,_=d;p<_;p++){let m=c.getX(p);iu.fromBufferAttribute(f,m),t_(iu,m,l,i,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,_=d;p<_;p++)iu.fromBufferAttribute(f,p),t_(iu,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};dl=class extends gn{constructor(e=[],t=xr,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pl=class extends gn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gr=class extends gn{constructor(e,t,n=as,i,r,o,a=en,l=en,c,u=ms,f=1){if(u!==ms&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Su=class extends gr{constructor(e,t=as,n=xr,i,r,o=en,a=en,l,c=ms){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ml=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ss=class s extends kt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function p(_,m,g,M,A,v,S,b,w,x,T){let R=v/w,D=S/x,P=v/2,N=S/2,L=b/2,B=w+1,G=x+1,z=0,Z=0,H=new F;for(let C=0;C<G;C++){let $=C*D-N;for(let me=0;me<B;me++){let ye=me*R-P;H[_]=ye*M,H[m]=$*A,H[g]=L,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[g]=b>0?1:-1,u.push(H.x,H.y,H.z),f.push(me/w),f.push(1-C/x),z+=1}}for(let C=0;C<x;C++)for(let $=0;$<w;$++){let me=h+$+B*C,ye=h+$+B*(C+1),Ie=h+($+1)+B*(C+1),Le=h+($+1)+B*C;l.push(me,ye,Le),l.push(ye,Ie,Le),Z+=6}a.addGroup(d,Z,T),d+=Z,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},gl=class s extends kt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,u=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zr=class s extends kt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,_=[],m=n/2,g=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function M(){let v=new F,S=new F,b=0,w=(t-e)/n;for(let x=0;x<=r;x++){let T=[],R=x/r,D=R*(t-e)+e;for(let P=0;P<=i;P++){let N=P/i,L=N*l+a,B=Math.sin(L),G=Math.cos(L);S.x=D*B,S.y=-R*n+m,S.z=D*G,f.push(S.x,S.y,S.z),v.set(B,w,G).normalize(),h.push(v.x,v.y,v.z),d.push(N,1-R),T.push(p++)}_.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){let R=_[T][x],D=_[T+1][x],P=_[T+1][x+1],N=_[T][x+1];(e>0||T!==0)&&(u.push(R,D,N),b+=3),(t>0||T!==r-1)&&(u.push(D,P,N),b+=3)}c.addGroup(g,b,0),g+=b}function A(v){let S=p,b=new ke,w=new F,x=0,T=v===!0?e:t,R=v===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),p++;let D=p;for(let P=0;P<=i;P++){let L=P/i*l+a,B=Math.cos(L),G=Math.sin(L);w.x=T*G,w.y=m*R,w.z=T*B,f.push(w.x,w.y,w.z),h.push(0,R,0),b.x=B*.5+.5,b.y=G*.5*R+.5,d.push(b.x,b.y),p++}for(let P=0;P<i;P++){let N=S+P,L=D+P;v===!0?u.push(L,L+1,N):u.push(L+1,L,N),x+=3}c.addGroup(g,x,v===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ke:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],r=[],o=[],a=new F,l=new tt;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};n_=new F,i_=new F,hd=new Yd,fd=new Yd,dd=new Yd,_l=class extends Mu{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(i_.subVectors(i[0],i[1]).add(i[0]),c=i_);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(n_.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=n_),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),hd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,_,m),fd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,_,m),dd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),fd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),dd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(hd.calc(l),fd.calc(l),dd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Jr=class s extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let M=g*h-o;for(let A=0;A<c;A++){let v=A*f-r;p.push(v,-M,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let A=M+c*g,v=M+c*(g+1),S=M+1+c*(g+1),b=M+1+c*g;d.push(A,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};Xs={clone:no,merge:Hn},XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vn=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends Vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},bu=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tu=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};_s=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wu=class extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vd:r=e,a=2*t-n;break;case yd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vd:o=e,l=2*n-t;break;case yd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,A=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+M*o[c+S]+A*o[l+S]+v*o[f+S];return r}},Eu=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Au=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ru=class extends _s{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*h+p*2,M=f[g],A=f[g+1],v=e*h+p*2,S=u[v],b=u[v+1],w=JS(n,t,M,S,i);r[p]=$_(w,_,A,b,m)}return r}};fi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),lu(e.settings)&&(n.settings={inTangents:hr(e.settings.inTangents,Array),outTangents:hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ru(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case ou:t=this.InterpolantFactoryMethodSmooth;break;case _d:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return ou;case this.InterpolantFactoryMethodBezier:return _d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;lu(this.settings)&&(o_(this.settings.inTangents,e),o_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&oS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ou,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,lu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Wr;ks=class extends fi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Gr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;xl=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}};xl.prototype.ValueTypeName="color";zs=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}};zs.prototype.ValueTypeName="number";Cu=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Si.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vs=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Cu(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;Hs=class extends fi{constructor(e,t,n){super(e,t,n)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Gr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;_r=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}};_r.prototype.ValueTypeName="vector";vl=class{constructor(e="",t=-1,n=[],i=O_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=is(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jS(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(fi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=qS(l);l=r_(l,1,u),c=r_(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};ps={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(a_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!a_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};Pu=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j_=new Pu,Bi=class{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";Us={},Md=class extends Error{constructor(e,t){super(e),this.response=t}},Gs=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ps.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Us[e]!==void 0){Us[e].push({onLoad:t,onProgress:n,onError:i});return}Us[e]=[],Us[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Us[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,_=0,m=new ReadableStream({start(g){M();function M(){f.read().then(({done:A,value:v})=>{if(A)g.close();else{_+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let b=0,w=u.length;b<w;b++){let x=u[b];x.onProgress&&x.onProgress(S)}g.enqueue(v),M()}},A=>{g.error(A)})}}});return new Response(m)}else throw new Md(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ps.add(`file:${e}`,c);let u=Us[e];delete Us[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Us[e];if(u===void 0)throw this.manager.itemError(e),c;delete Us[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},zo=new WeakMap,Iu=class extends Bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ps.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=zo.get(o);f===void 0&&(f=[],zo.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=qo("img");function l(){u(),t&&t(this);let f=zo.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}zo.delete(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),ps.remove(`image:${e}`);let h=zo.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}zo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},yl=class extends Bi{constructor(e){super(e)}load(e,t,n,i){let r=new gn,o=new Iu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$r=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pd=new tt,l_=new F,c_=new F,ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;l_.setFromMatrixPosition(e.matrixWorld),t.position.copy(l_),c_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){pd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Yo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},su=new F,ru=new Si,ds=new F,Sl=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(su,ru,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,ds.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(su,ru,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,ds.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ur=new F,u_=new ke,h_=new ke,un=class extends Sl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,u_,h_),t.subVectors(h_,u_)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bd=class extends ia{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ml=class extends $r{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Td=class extends ia{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},bl=class extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends Sl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wd=class extends ia{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new wd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Tl=class extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Mi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},md=new WeakMap,wl=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ps.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{md.has(o)===!0?(i&&i(md.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ps.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),md.set(l,c),ps.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ps.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Vo=-90,Ho=1,Lu=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new un(Vo,Ho,e,t);i.layers=this.layers,this.add(i);let r=new un(Vo,Ho,e,t);r.layers=this.layers,this.add(r);let o=new un(Vo,Ho,e,t);o.layers=this.layers,this.add(o);let a=new un(Vo,Ho,e,t);a.layers=this.layers,this.add(a);let l=new un(Vo,Ho,e,t);l.layers=this.layers,this.add(l);let c=new un(Vo,Ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ns)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Nu=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},El=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=QS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Kd="\\[\\]\\.:\\/",eM=new RegExp("["+Kd+"]","g"),Zd="[^"+Kd+"]",tM="[^"+Kd.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",Zd),iM=/(WCOD+)?/.source.replace("WCOD",tM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zd),rM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zd),oM=new RegExp("^"+nM+iM+sM+rM+"$"),aM=["material","materials","bones","map"],Ed=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){let t=oM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);aM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ed;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];OC=new Float32Array(1),tp=class tp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};tp.prototype.isMatrix2=!0;Ad=tp;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function y0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function uM(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}function YT(s,e,t,n,i,r){let o=new Pe(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function p(M){let A=!1,v=d(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,A){let v=d(A);v&&(v.isCubeTexture||v.mapping===Ul)?(c===void 0&&(c=new vt(new ss(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:no(Ss.backgroundCube.uniforms),vertexShader:Ss.backgroundCube.vertexShader,fragmentShader:Ss.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(S0),c.material.toneMapped=et.getTransfer(v.colorSpace)!==gt,(u!==v||f!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new vt(new Jr(2,2),new nn({name:"BackgroundMaterial",uniforms:no(Ss.background.uniforms),vertexShader:Ss.background.vertexShader,fragmentShader:Ss.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(Th,qd(s)),t.buffers.color.setClear(Th.r,Th.g,Th.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function qT(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(D,P,N,L,B){let G=!1,z=f(D,L,N,P);r!==z&&(r=z,c(r.object)),G=d(D,L,N,B),G&&p(D,L,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(D,P,N,L),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function u(D){return s.deleteVertexArray(D)}function f(D,P,N,L){let B=L.wireframe===!0,G=n[P.id];G===void 0&&(G={},n[P.id]=G);let z=D.isInstancedMesh===!0?D.id:0,Z=G[z];Z===void 0&&(Z={},G[z]=Z);let H=Z[N.id];H===void 0&&(H={},Z[N.id]=H);let C=H[B];return C===void 0&&(C=h(l()),H[B]=C),C}function h(D){let P=[],N=[],L=[];for(let B=0;B<t;B++)P[B]=0,N[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,P,N,L){let B=r.attributes,G=P.attributes,z=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let $=B[H],me=G[H];if(me===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),$===void 0||$.attribute!==me||me&&$.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function p(D,P,N,L){let B={},G=P.attributes,z=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let $=G[H];$===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let me={};me.attribute=$,$&&$.data&&(me.data=$.data),B[H]=me,z++}r.attributes=B,r.attributesNum=z,r.index=L}function _(){let D=r.newAttributes;for(let P=0,N=D.length;P<N;P++)D[P]=0}function m(D){g(D,0)}function g(D,P){let N=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;N[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),B[D]!==P&&(s.vertexAttribDivisor(D,P),B[D]=P)}function M(){let D=r.newAttributes,P=r.enabledAttributes;for(let N=0,L=P.length;N<L;N++)P[N]!==D[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function A(D,P,N,L,B,G,z){z===!0?s.vertexAttribIPointer(D,P,N,B,G):s.vertexAttribPointer(D,P,N,L,B,G)}function v(D,P,N,L){_();let B=L.attributes,G=N.getAttributes(),z=P.defaultAttributeValues;for(let Z in G){let H=G[Z];if(H.location>=0){let C=B[Z];if(C===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let $=C.normalized,me=C.itemSize,ye=e.get(C);if(ye===void 0)continue;let Ie=ye.buffer,Le=ye.type,Xe=ye.bytesPerElement,J=Le===s.INT||Le===s.UNSIGNED_INT||C.gpuType===Bu;if(C.isInterleavedBufferAttribute){let ee=C.data,xe=ee.stride,Ge=C.offset;if(ee.isInstancedInterleavedBuffer){for(let ge=0;ge<H.locationSize;ge++)g(H.location+ge,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ge=0;ge<H.locationSize;ge++)A(H.location+ge,me/H.locationSize,Le,$,xe*Xe,(Ge+me/H.locationSize*ge)*Xe,J)}else{if(C.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)g(H.location+ee,C.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ee=0;ee<H.locationSize;ee++)A(H.location+ee,me/H.locationSize,Le,$,me*Xe,me/H.locationSize*ee*Xe,J)}}else if(z!==void 0){let $=z[Z];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(H.location,$);break;case 3:s.vertexAttrib3fv(H.location,$);break;case 4:s.vertexAttrib4fv(H.location,$);break;default:s.vertexAttrib1fv(H.location,$)}}}}M()}function S(){T();for(let D in n){let P=n[D];for(let N in P){let L=P[N];for(let B in L){let G=L[B];for(let z in G)u(G[z].object),delete G[z];delete L[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let N in P){let L=P[N];for(let B in L){let G=L[B];for(let z in G)u(G[z].object),delete G[z];delete L[B]}}delete n[D.id]}function w(D){for(let P in n){let N=n[P];for(let L in N){let B=N[L];if(B[D.id]===void 0)continue;let G=B[D.id];for(let z in G)u(G[z].object),delete G[z];delete B[D.id]}}}function x(D){for(let P in n){let N=n[P],L=D.isInstancedMesh===!0?D.id:0,B=N[L];if(B!==void 0){for(let G in B){let z=B[G];for(let Z in z)u(z[Z].object),delete z[Z];delete B[G]}delete N[L],Object.keys(N).length===0&&delete n[P]}}}function T(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function KT(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ZT(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ti&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==di&&w!==bi&&!x&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:b}}function JT(s){let e=this,t=null,n=0,i=!1,r=!1,o=new es,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,A=M*4,v=g.clippingState||null;l.value=v,v=u(p,h,A,d);for(let S=0;S!==A;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,v=d;A!==_;++A,v+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tw(s){let e=[],t=[],n=s,i=s-ha+1+$T;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),_=new Float32Array(d*h*f);for(let g=0;g<f;g++){let M=g%3*2/3-1,A=g>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];p.set(v,d*h*g);for(let S=0;S<h;S++){let b=u[S*2]*2-1,w=u[S*2+1]*2-1;g===0?io.set(1,w,b):g===1?io.set(-b,1,-w):g===2?io.set(-b,w,1):g===3?io.set(-1,w,-b):g===4?io.set(-b,-1,w):io.set(b,w,-1),io.toArray(_,(g*h+S)*d)}}let m=new kt;m.setAttribute("position",new Kt(p,d)),m.setAttribute("outputDirection",new Kt(_,d)),t.push(new vt(m,null)),n>ha&&n--}return{lodMeshes:t,sizeLods:e}}function e0(s,e,t){let n=new hn(s,e,t);return n.texture.mapping=Ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function nw(s,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function iw(s,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:jT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function t0(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function n0(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function sw(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Uu||d===Ou)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new Eh(p.height);return _.fromEquirectangularTexture(s,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Uu||d===Ou,_=d===xr||d===eo;if(p||_){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new da(s)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new da(s)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Uu?h.mapping=xr:d===Ou&&(h.mapping=eo),h}function l(h){let d=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function rw(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Hr("WebGLRenderer: "+n+" extension not supported."),i}}}function ow(s,e,t,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],s.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let M=d.array;_=d.version;for(let A=0,v=M.length;A<v;A+=3){let S=M[A+0],b=M[A+1],w=M[A+2];h.push(S,b,b,w,w,S)}}else{let M=p.array;_=p.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let S=A+0,b=A+1,w=A+2;h.push(S,b,b,w,w,S)}}let m=new(p.count>=65535?ol:rl)(h,1);m.version=_;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aw(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lw(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cw(s,e,t){let n=new WeakMap,i=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let v=a.attributes.position.count*A,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*S*4*f),w=new nl(b,v,S,f);w.type=bi,w.needsUpdate=!0;let x=A*4;for(let R=0;R<f;R++){let D=m[R],P=g[R],N=M[R],L=v*S*4*R;for(let B=0;B<D.count;B++){let G=B*x;d===!0&&(i.fromBufferAttribute(D,B),b[L+G+0]=i.x,b[L+G+1]=i.y,b[L+G+2]=i.z,b[L+G+3]=0),p===!0&&(i.fromBufferAttribute(P,B),b[L+G+4]=i.x,b[L+G+5]=i.y,b[L+G+6]=i.z,b[L+G+7]=0),_===!0&&(i.fromBufferAttribute(N,B),b[L+G+8]=i.x,b[L+G+9]=i.y,b[L+G+10]=i.z,b[L+G+11]=N.itemSize===4?i.w:1)}}h={count:f,texture:w,size:new ke(v,S)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function uw(s,e,t,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function fw(s,e,t,n,i,r){let o=new hn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new kt;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let u=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vt(c,u),h=new xs(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,M=[],A=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<M.length;b++){let w=M[b];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let S=o.width,b=o.height;M.length>0&&a===null&&(a=new hn(S,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new hn(S,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let x=M[w];x.setSize&&x.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===rs&&M.length===0)return!1;if(g=S,S!==null){let b=S.width,w=S.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return A===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=rs,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=m,_=!0;let b=o,w=a;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(v,w,b,S),T.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},et.getTransfer(d)===gt&&(u.defines.SRGB_TRANSFER="");let x=hw[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(g),v.render(f,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}function pa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=i0[i];if(r===void 0&&(r=new Float32Array(i),i0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function _n(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ch(s,e){let t=s0[e];t===void 0&&(t=new Int32Array(e),s0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function mw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function gw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function _w(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;a0.set(n),s.uniformMatrix2fv(this.addr,!1,a0),xn(t,n)}}function xw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;o0.set(n),s.uniformMatrix3fv(this.addr,!1,o0),xn(t,n)}}function vw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;r0.set(n),s.uniformMatrix4fv(this.addr,!1,r0),xn(t,n)}}function yw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function Mw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function bw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function Tw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ww(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function Ew(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function Aw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function Rw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cp.compareFunction=t.isReversedDepthBuffer()?bh:Mh,r=cp):r=M0,t.setTexture2D(e||r,i)}function Cw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||T0,i)}function Pw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||w0,i)}function Iw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||b0,i)}function Lw(s){switch(s){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return xw;case 35676:return vw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return bw;case 5125:return Tw;case 36294:return ww;case 36295:return Ew;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Nw(s,e){s.uniform1fv(this.addr,e)}function Dw(s,e){let t=pa(e,this.size,2);s.uniform2fv(this.addr,t)}function Uw(s,e){let t=pa(e,this.size,3);s.uniform3fv(this.addr,t)}function Ow(s,e){let t=pa(e,this.size,4);s.uniform4fv(this.addr,t)}function Fw(s,e){let t=pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bw(s,e){let t=pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kw(s,e){let t=pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zw(s,e){s.uniform1iv(this.addr,e)}function Vw(s,e){s.uniform2iv(this.addr,e)}function Hw(s,e){s.uniform3iv(this.addr,e)}function Gw(s,e){s.uniform4iv(this.addr,e)}function Ww(s,e){s.uniform1uiv(this.addr,e)}function Xw(s,e){s.uniform2uiv(this.addr,e)}function Yw(s,e){s.uniform3uiv(this.addr,e)}function qw(s,e){s.uniform4uiv(this.addr,e)}function Kw(s,e,t){let n=this.cache,i=e.length,r=Ch(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=cp:o=M0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Zw(s,e,t){let n=this.cache,i=e.length,r=Ch(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||T0,r[o])}function Jw(s,e,t){let n=this.cache,i=e.length,r=Ch(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||w0,r[o])}function $w(s,e,t){let n=this.cache,i=e.length,r=Ch(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||b0,r[o])}function jw(s){switch(s){case 5126:return Nw;case 35664:return Dw;case 35665:return Uw;case 35666:return Ow;case 35674:return Fw;case 35675:return Bw;case 35676:return kw;case 5124:case 35670:return zw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return Yw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return $w}}function l0(s,e){s.seq.push(e),s.map[e.id]=e}function Qw(s,e,t){let n=s.name,i=n.length;for(ap.lastIndex=0;;){let r=ap.exec(n),o=ap.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){l0(t,c===void 0?new up(a,s,e):new hp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new fp(a),l0(t,f)),t=f}}}function c0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function nE(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function iE(s){et._getMatrix(u0,et.workingColorSpace,s);let e=`mat3( ${u0.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case el:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function h0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nE(s.getShaderSource(e),a)}else return r}function sE(s,e){let t=iE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oE(s,e){let t=rE[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aE(){et.getLuminanceCoefficients(wh);let s=wh.x.toFixed(4),e=wh.y.toFixed(4),t=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function cE(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uE(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xl(s){return s!==""}function f0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function dp(s){return s.replace(hE,dE)}function dE(s,e){let t=st[e];if(t===void 0){let n=fE.get(e);if(n!==void 0)t=st[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dp(t)}function p0(s){return s.replace(pE,mE)}function mE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function m0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _E(s){return gE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function vE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}function SE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function bE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ME[s.combine]||"ENVMAP_BLENDING_NONE"}function TE(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wE(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_E(t),c=vE(t),u=SE(t),f=bE(t),h=TE(t),d=lE(t),p=cE(r),_=i.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xl).join(`
`),g.length>0&&(g+=`
`)):(m=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),g=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?st.tonemapping_pars_fragment:"",t.toneMapping!==rs?oE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,sE("linearToOutputTexel",t.outputColorSpace),aE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xl).join(`
`)),o=dp(o),o=f0(o,t),o=d0(o,t),a=dp(a),a=f0(a,t),a=d0(a,t),o=p0(o),a=p0(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=M+m+o,v=M+g+a,S=c0(i,i.VERTEX_SHADER,A),b=c0(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(D){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",B=P.trim(),G=N.trim(),z=L.trim(),Z=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,b);else{let C=h0(i,S,"vertex"),$=h0(i,b,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+C+`
`+$)}else B!==""?Fe("WebGLProgram: Program Info Log:",B):(G===""||z==="")&&(H=!1);H&&(D.diagnostics={runnable:Z,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(S),i.deleteShader(b),x=new fa(i,_),T=uE(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,eE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}function AE(s){return s===yr||s===zl||s===Vl}function RE(s,e,t,n,i,r){let o=new il,a=new pp,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,D,P,N){let L=D.fog,B=P.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||G,z),H=Z&&Z.mapping===Ul?Z.image.height:null,C=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=$!==void 0?$.length:0,ye=0;B.morphAttributes.position!==void 0&&(ye=1),B.morphAttributes.normal!==void 0&&(ye=2),B.morphAttributes.color!==void 0&&(ye=3);let Ie,Le,Xe,J;if(C){let Be=Ss[C];Ie=Be.vertexShader,Le=Be.fragmentShader}else{Ie=x.vertexShader,Le=x.fragmentShader;let Be=a.getVertexShaderStage(x),re=a.getFragmentShaderStage(x);a.update(x,Be,re),Xe=Be.id,J=re.id}let ee=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ge=P.isInstancedMesh===!0,ge=P.isBatchedMesh===!0,Ve=!!x.map,We=!!x.matcap,De=!!Z,Ke=!!x.aoMap,nt=!!x.lightMap,W=!!x.bumpMap&&x.wireframe===!1,lt=!!x.normalMap,Tt=!!x.displacementMap,Vt=!!x.emissiveMap,Ze=!!x.metalnessMap,_t=!!x.roughnessMap,k=x.anisotropy>0,Bt=x.clearcoat>0,Ye=x.dispersion>0,I=x.retroreflectivity>0,y=x.iridescence>0,V=x.sheen>0,Y=x.transmission>0,j=k&&!!x.anisotropyMap,ce=Bt&&!!x.clearcoatMap,oe=Bt&&!!x.clearcoatNormalMap,Q=Bt&&!!x.clearcoatRoughnessMap,ne=y&&!!x.iridescenceMap,fe=y&&!!x.iridescenceThicknessMap,Ee=V&&!!x.sheenColorMap,de=V&&!!x.sheenRoughnessMap,he=!!x.specularMap,le=!!x.specularColorMap,Ue=!!x.specularIntensityMap,He=Y&&!!x.transmissionMap,U=Y&&!!x.thicknessMap,ue=!!x.gradientMap,te=!!x.alphaMap,pe=x.alphaTest>0,ve=!!x.alphaHash,ie=!!x.extensions,ae=rs;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ae=s.toneMapping);let se={shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Le,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ge,batchingColor:ge&&P._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&P.instanceColor!==null,instancingMorph:Ge&&P.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:We,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:H,aoMap:Ke,lightMap:nt,bumpMap:W,normalMap:lt,displacementMap:Tt,emissiveMap:Vt,normalMapObjectSpace:lt&&x.normalMapType===B_,normalMapTangentSpace:lt&&x.normalMapType===Sh,packedNormalMap:lt&&x.normalMapType===Sh&&AE(x.normalMap.format),metalnessMap:Ze,roughnessMap:_t,anisotropy:k,anisotropyMap:j,clearcoat:Bt,clearcoatMap:ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:Q,dispersion:Ye,retroreflection:I,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:V,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:he,specularColorMap:le,specularIntensityMap:Ue,transmission:Y,transmissionMap:He,thicknessMap:U,gradientMap:ue,opaque:x.transparent===!1&&x.blending===ra&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:ve,combine:x.combine,mapUv:Ve&&p(x.map.channel),aoMapUv:Ke&&p(x.aoMap.channel),lightMapUv:nt&&p(x.lightMap.channel),bumpMapUv:W&&p(x.bumpMap.channel),normalMapUv:lt&&p(x.normalMap.channel),displacementMapUv:Tt&&p(x.displacementMap.channel),emissiveMapUv:Vt&&p(x.emissiveMap.channel),metalnessMapUv:Ze&&p(x.metalnessMap.channel),roughnessMapUv:_t&&p(x.roughnessMap.channel),anisotropyMapUv:j&&p(x.anisotropyMap.channel),clearcoatMapUv:ce&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(x.sheenRoughnessMap.channel),specularMapUv:he&&p(x.specularMap.channel),specularColorMapUv:le&&p(x.specularColorMap.channel),specularIntensityMapUv:Ue&&p(x.specularIntensityMap.channel),transmissionMapUv:He&&p(x.transmissionMap.channel),thicknessMapUv:U&&p(x.thicknessMap.channel),alphaMapUv:te&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(lt||k),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Ve||te),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ye,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(T,x),M(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=d[x.type],R;if(T){let D=Ss[T];R=Xs.clone(D.uniforms)}else R=x.uniforms;return R}function v(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new wE(s,T,x,i),c.push(R),u.set(T,R)),R}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:w}}function CE(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function PE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function g0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,m,g){let M=s[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},s[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=p,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=g),e++,M}function l(h,d,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let A=a(h,d,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):t.push(A)}function c(h,d,p,_,m,g){let M=a(h,d,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,d){t.length>1&&t.sort(h||PE),n.length>1&&n.sort(d||g0),i.length>1&&i.sort(d||g0)}function f(){for(let h=e,d=s.length;h<d;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:u}}function IE(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new _0,s.set(n,[o])):i>=r.length?(o=new _0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function LE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function NE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function UE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OE(s){let e=new LE,t=NE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new tt,o=new tt;function a(c){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,M=0,A=0,v=0,S=0,b=0,w=0,x=0,T=0,R=0;c.sort(UE);for(let P=0,N=c.length;P<N;P++){let L=c[P],B=L.color,G=L.intensity,z=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yr?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*G,f+=B.g*G,h+=B.b*G;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],G);R++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,$=t.get(L);$.shadowIntensity=C.intensity,$.shadowBias=C.bias,$.shadowNormalBias=C.normalBias,$.shadowRadius=C.radius,$.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=Z;let me=C.getViewportCount();for(let ye=0;ye<me;ye++)n.sunShadowMatrix[_+ye]=C.getMatrix(ye),n.sunShadowCascade[_+ye]=C._cascadeData[ye];_+=me,p++}n.sun[d]=H,d++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let C=L.shadow,$=t.get(L);$.shadowIntensity=C.intensity,$.shadowBias=C.bias,$.shadowNormalBias=C.normalBias,$.shadowRadius=C.radius,$.shadowMapSize=C.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(B).multiplyScalar(G),H.distance=z,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[M]=H;let C=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,C.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=C.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=C.intensity,$.shadowBias=C.bias,$.shadowNormalBias=C.normalBias,$.shadowRadius=C.radius,$.shadowMapSize=C.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=Z,w++}M++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(B).multiplyScalar(G),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=H,A++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let C=L.shadow,$=t.get(L);$.shadowIntensity=C.intensity,$.shadowBias=C.bias,$.shadowNormalBias=C.normalBias,$.shadowRadius=C.radius,$.shadowMapSize=C.mapSize,$.shadowCameraNear=C.camera.near,$.shadowCameraFar=C.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(G),H.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[v]=H,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=x,D.numLightProbes=R,n.version=DE++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let v=c[M];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),h++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function x0(s){let e=new OE(s),t=[],n=[],i=[];function r(h){f.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function FE(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new x0(s),e.set(i,[a])):r>=o.length?(a=new x0(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function HE(s,e,t){let n=new Qo,i=new ke,r=new ke,o=new Mt,a=new bu,l=new Tu,c={},u=t.maxTextureSize,f={[vs]:In,[In]:vs,[ki]:ki},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:BE,fragmentShader:kE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new kt;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let g=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===p_&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Al);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(zi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=g!==this.type;N&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let G=b[L],z=G.shadow;if(z===void 0){Fe("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Z=z.getFrameExtents();i.multiply(Z),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,z.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===sa){if(G.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new hn(i.x,i.y,{format:yr,type:Ln,minFilter:tn,magFilter:tn,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new gr(i.x,i.y,bi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=ms,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en}else G.isPointLight?(z.map=new Eh(i.x),z.map.depthTexture=new Su(i.x,as)):(z.map=new hn(i.x,i.y),z.map.depthTexture=new gr(i.x,i.y,as)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=ms,this.type===Al?(z.map.depthTexture.compareFunction=H?bh:Mh,z.map.depthTexture.minFilter=tn,z.map.depthTexture.magFilter=tn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let C=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,x);for(let $=0;$<C;$++){let me=z.getCamera($);if(G.isPointLight){let ye=z.camera,Ie=z.matrix,Le=G.distance||ye.far;Le!==ye.far&&(ye.far=Le,ye.updateProjectionMatrix()),Wl.setFromMatrixPosition(G.matrixWorld),ye.position.copy(Wl),lp.copy(ye.position),lp.add(zE[$]),ye.up.copy(VE[$]),ye.lookAt(lp),ye.updateMatrixWorld(),Ie.makeTranslation(-Wl.x,-Wl.y,-Wl.z),v0.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),z._frustum.setFromProjectionMatrix(v0,ye.coordinateSystem,ye.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,$),s.clear();else{$===0&&(s.setRenderTarget(z.map),s.clear());let ye=z.getViewport($);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),P.viewport(o)}n=z.getFrustum($),v(w,x,me,G,this.type)}z.isPointLightShadow!==!0&&this.type===sa&&M(z,x),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,R,D)};function M(b,w){let x=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new hn(i.x,i.y,{format:yr,type:Ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,x,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,x,d,_,null)}function A(b,w,x,T){let R=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=R.uuid,N=w.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let B=L[N];B===void 0&&(B=R.clone(),L[N]=B,w.addEventListener("dispose",S)),R=B}if(R.visible=w.visible,R.wireframe=w.wireframe,T===sa?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=s.properties.get(R);P.light=x}return R}function v(b,w,x,T,R){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===sa)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let N=e.update(b),L=b.material;if(Array.isArray(L)){let B=N.groups;for(let G=0,z=B.length;G<z;G++){let Z=B[G],H=L[Z.materialIndex];if(H&&H.visible){let C=A(b,H,T,R);b.onBeforeShadow(s,b,w,x,N,C,Z),s.renderBufferDirect(x,null,N,C,b,Z),b.onAfterShadow(s,b,w,x,N,C,Z)}}}else if(L.visible){let B=A(b,L,T,R);b.onBeforeShadow(s,b,w,x,N,B,null),s.renderBufferDirect(x,null,N,B,b,null),b.onAfterShadow(s,b,w,x,N,B,null)}}let P=b.children;for(let N=0,L=P.length;N<L;N++)v(P[N],w,x,T,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function GE(s,e){function t(){let U=!1,ue=new Mt,te=null,pe=new Mt(0,0,0,0);return{setMask:function(ve){te!==ve&&!U&&(s.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){U=ve},setClear:function(ve,ie,ae,se,Be){Be===!0&&(ve*=se,ie*=se,ae*=se),ue.set(ve,ie,ae,se),pe.equals(ue)===!1&&(s.clearColor(ve,ie,ae,se),pe.copy(ue))},reset:function(){U=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,te=null,pe=null,ve=null;return{setReversed:function(ie){if(ue!==ie){let ae=e.get("EXT_clip_control");ie?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;let se=ve;ve=null,this.setClear(se)}},getReversed:function(){return ue},setTest:function(ie){ie?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ie){te!==ie&&!U&&(s.depthMask(ie),te=ie)},setFunc:function(ie){if(ue&&(ie=Z_[ie]),pe!==ie){switch(ie){case cu:s.depthFunc(s.NEVER);break;case uu:s.depthFunc(s.ALWAYS);break;case hu:s.depthFunc(s.LESS);break;case Wo:s.depthFunc(s.LEQUAL);break;case fu:s.depthFunc(s.EQUAL);break;case du:s.depthFunc(s.GEQUAL);break;case pu:s.depthFunc(s.GREATER);break;case mu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ve!==ie&&(ve=ie,ue&&(ie=1-ie),s.clearDepth(ie))},reset:function(){U=!1,te=null,pe=null,ve=null,ue=!1}}}function i(){let U=!1,ue=null,te=null,pe=null,ve=null,ie=null,ae=null,se=null,Be=null;return{setTest:function(re){U||(re?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(re){ue!==re&&!U&&(s.stencilMask(re),ue=re)},setFunc:function(re,ze,Ae){(te!==re||pe!==ze||ve!==Ae)&&(s.stencilFunc(re,ze,Ae),te=re,pe=ze,ve=Ae)},setOp:function(re,ze,Ae){(ie!==re||ae!==ze||se!==Ae)&&(s.stencilOp(re,ze,Ae),ie=re,ae=ze,se=Ae)},setLocked:function(re){U=re},setClear:function(re){Be!==re&&(s.clearStencil(re),Be=re)},reset:function(){U=!1,ue=null,te=null,pe=null,ve=null,ie=null,ae=null,se=null,Be=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],_=null,m=!1,g=null,M=null,A=null,v=null,S=null,b=null,w=null,x=new Pe(0,0,0),T=0,R=!1,D=null,P=null,N=null,L=null,B=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let C=null,$={},me=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ie=new Mt().fromArray(me),Le=new Mt().fromArray(ye);function Xe(U,ue,te,pe){let ve=new Uint8Array(4),ie=s.createTexture();s.bindTexture(U,ie),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<te;ae++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ue+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return ie}let J={};J[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),o.setFunc(Wo),W(!1),lt(Rd),ee(s.CULL_FACE),Ke(zi);function ee(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ge(U,ue){return h[U]!==ue?(s.bindFramebuffer(U,ue),h[U]=ue,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function ge(U,ue){let te=p,pe=!1;if(U){te=d.get(ue),te===void 0&&(te=[],d.set(ue,te));let ve=U.textures;if(te.length!==ve.length||te[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,ae=ve.length;ie<ae;ie++)te[ie]=s.COLOR_ATTACHMENT0+ie;te.length=ve.length,pe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,pe=!0);pe&&s.drawBuffers(te)}function Ve(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let We={[jr]:s.FUNC_ADD,[g_]:s.FUNC_SUBTRACT,[__]:s.FUNC_REVERSE_SUBTRACT};We[x_]=s.MIN,We[v_]=s.MAX;let De={[y_]:s.ZERO,[S_]:s.ONE,[M_]:s.SRC_COLOR,[Id]:s.SRC_ALPHA,[R_]:s.SRC_ALPHA_SATURATE,[E_]:s.DST_COLOR,[T_]:s.DST_ALPHA,[b_]:s.ONE_MINUS_SRC_COLOR,[Ld]:s.ONE_MINUS_SRC_ALPHA,[A_]:s.ONE_MINUS_DST_COLOR,[w_]:s.ONE_MINUS_DST_ALPHA,[C_]:s.CONSTANT_COLOR,[P_]:s.ONE_MINUS_CONSTANT_COLOR,[I_]:s.CONSTANT_ALPHA,[L_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ke(U,ue,te,pe,ve,ie,ae,se,Be,re){if(U===zi){m===!0&&(xe(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),U!==m_){if(U!==g||re!==R){if((M!==jr||S!==jr)&&(s.blendEquation(s.FUNC_ADD),M=jr,S=jr),re)switch(U){case ra:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFunc(s.ONE,s.ONE);break;case Cd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",U);break}else switch(U){case ra:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cd:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pd:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",U);break}A=null,v=null,b=null,w=null,x.set(0,0,0),T=0,g=U,R=re}return}ve=ve||ue,ie=ie||te,ae=ae||pe,(ue!==M||ve!==S)&&(s.blendEquationSeparate(We[ue],We[ve]),M=ue,S=ve),(te!==A||pe!==v||ie!==b||ae!==w)&&(s.blendFuncSeparate(De[te],De[pe],De[ie],De[ae]),A=te,v=pe,b=ie,w=ae),(se.equals(x)===!1||Be!==T)&&(s.blendColor(se.r,se.g,se.b,Be),x.copy(se),T=Be),g=U,R=!1}function nt(U,ue){U.side===ki?xe(s.CULL_FACE):ee(s.CULL_FACE);let te=U.side===In;ue&&(te=!te),W(te),U.blending===ra&&U.transparent===!1?Ke(zi):Ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let pe=U.stencilWrite;a.setTest(pe),pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function W(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function lt(U){U!==f_?(ee(s.CULL_FACE),U!==P&&(U===Rd?s.cullFace(s.BACK):U===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),P=U}function Tt(U){U!==N&&(z&&s.lineWidth(U),N=U)}function Vt(U,ue,te){U?(ee(s.POLYGON_OFFSET_FILL),(L!==ue||B!==te)&&(L=ue,B=te,o.getReversed()&&(ue=-ue),s.polygonOffset(ue,te))):xe(s.POLYGON_OFFSET_FILL)}function Ze(U){U?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function _t(U){U===void 0&&(U=s.TEXTURE0+G-1),C!==U&&(s.activeTexture(U),C=U)}function k(U,ue,te){te===void 0&&(C===null?te=s.TEXTURE0+G-1:te=C);let pe=$[te];pe===void 0&&(pe={type:void 0,texture:void 0},$[te]=pe),(pe.type!==U||pe.texture!==ue)&&(C!==te&&(s.activeTexture(te),C=te),s.bindTexture(U,ue||J[U]),pe.type=U,pe.texture=ue)}function Bt(){let U=$[C];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ye(){try{s.compressedTexImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function y(){try{s.texSubImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function V(){try{s.texSubImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function ce(){try{s.texStorage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function oe(){try{s.texStorage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function Q(){try{s.texImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function ne(){try{s.texImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function fe(U){return f[U]!==void 0?f[U]:s.getParameter(U)}function Ee(U,ue){f[U]!==ue&&(s.pixelStorei(U,ue),f[U]=ue)}function de(U){Ie.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ie.copy(U))}function he(U){Le.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function le(U,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(U);pe===void 0&&(pe=s.getUniformBlockIndex(ue,U.name),te.set(U,pe))}function Ue(U,ue){let pe=c.get(ue).get(U);l.get(ue)!==pe&&(s.uniformBlockBinding(ue,pe,U.__bindingPointIndex),l.set(ue,pe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},C=null,$={},h={},d=new WeakMap,p=[],_=null,m=!1,g=null,M=null,A=null,v=null,S=null,b=null,w=null,x=new Pe(0,0,0),T=0,R=!1,D=null,P=null,N=null,L=null,B=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:xe,bindFramebuffer:Ge,drawBuffers:ge,useProgram:Ve,setBlending:Ke,setMaterial:nt,setFlipSided:W,setCullFace:lt,setLineWidth:Tt,setPolygonOffset:Vt,setScissorTest:Ze,activeTexture:_t,bindTexture:k,unbindTexture:Bt,compressedTexImage2D:Ye,compressedTexImage3D:I,texImage2D:Q,texImage3D:ne,pixelStorei:Ee,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:oe,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:de,viewport:he,reset:He}}function WE(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,y){return p?new OffscreenCanvas(I,y):qo("canvas")}function m(I,y,V){let Y=1,j=Ye(I);if((j.width>V||j.height>V)&&(Y=V/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ce=Math.floor(Y*j.width),oe=Math.floor(Y*j.height);h===void 0&&(h=_(ce,oe));let Q=y?_(ce,oe):h;return Q.width=ce,Q.height=oe,Q.getContext("2d").drawImage(I,0,0,ce,oe),Fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+oe+")."),Q}else return"data"in I&&Fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function g(I){return I.generateMipmaps}function M(I){s.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,y,V,Y,j,ce=!1){if(I!==null){if(s[I]!==void 0)return s[I];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe;Y&&(oe=e.get("EXT_texture_norm16"),oe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===s.RED&&(V===s.FLOAT&&(Q=s.R32F),V===s.HALF_FLOAT&&(Q=s.R16F),V===s.UNSIGNED_BYTE&&(Q=s.R8),V===s.UNSIGNED_SHORT&&oe&&(Q=oe.R16_EXT),V===s.SHORT&&oe&&(Q=oe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.R8UI),V===s.UNSIGNED_SHORT&&(Q=s.R16UI),V===s.UNSIGNED_INT&&(Q=s.R32UI),V===s.BYTE&&(Q=s.R8I),V===s.SHORT&&(Q=s.R16I),V===s.INT&&(Q=s.R32I)),y===s.RG&&(V===s.FLOAT&&(Q=s.RG32F),V===s.HALF_FLOAT&&(Q=s.RG16F),V===s.UNSIGNED_BYTE&&(Q=s.RG8),V===s.UNSIGNED_SHORT&&oe&&(Q=oe.RG16_EXT),V===s.SHORT&&oe&&(Q=oe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RG8UI),V===s.UNSIGNED_SHORT&&(Q=s.RG16UI),V===s.UNSIGNED_INT&&(Q=s.RG32UI),V===s.BYTE&&(Q=s.RG8I),V===s.SHORT&&(Q=s.RG16I),V===s.INT&&(Q=s.RG32I)),y===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),V===s.UNSIGNED_INT&&(Q=s.RGB32UI),V===s.BYTE&&(Q=s.RGB8I),V===s.SHORT&&(Q=s.RGB16I),V===s.INT&&(Q=s.RGB32I)),y===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),V===s.UNSIGNED_INT&&(Q=s.RGBA32UI),V===s.BYTE&&(Q=s.RGBA8I),V===s.SHORT&&(Q=s.RGBA16I),V===s.INT&&(Q=s.RGBA32I)),y===s.RGB&&(V===s.UNSIGNED_SHORT&&oe&&(Q=oe.RGB16_EXT),V===s.SHORT&&oe&&(Q=oe.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),y===s.RGBA){let ne=ce?el:et.getTransfer(j);V===s.FLOAT&&(Q=s.RGBA32F),V===s.HALF_FLOAT&&(Q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Q=ne===gt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&oe&&(Q=oe.RGBA16_EXT),V===s.SHORT&&oe&&(Q=oe.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(I,y){let V;return I?y===null||y===as||y===la?V=s.DEPTH24_STENCIL8:y===bi?V=s.DEPTH32F_STENCIL8:y===aa&&(V=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===as||y===la?V=s.DEPTH_COMPONENT24:y===bi?V=s.DEPTH_COMPONENT32F:y===aa&&(V=s.DEPTH_COMPONENT16),V}function b(I,y){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function w(I){let y=I.target;y.removeEventListener("dispose",w),T(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function x(I){let y=I.target;y.removeEventListener("dispose",x),D(y)}function T(I){let y=n.get(I);if(y.__webglInit===void 0)return;let V=I.source,Y=d.get(V);if(Y){let j=Y[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(I),Object.keys(Y).length===0&&d.delete(V)}n.remove(I)}function R(I){let y=n.get(I);s.deleteTexture(y.__webglTexture);let V=I.source,Y=d.get(V);delete Y[y.__cacheKey],o.memory.textures--}function D(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let j=0;j<y.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(y.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=I.textures;for(let Y=0,j=V.length;Y<j;Y++){let ce=n.get(V[Y]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(V[Y])}n.remove(I)}let P=0;function N(){P=0}function L(){return P}function B(I){P=I}function G(){let I=P;return I>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function z(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function Z(I,y){let V=n.get(I);if(I.isVideoTexture&&k(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let Y=I.image;if(Y===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,I,y);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function H(I,y){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){xe(V,I,y);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function C(I,y){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){xe(V,I,y);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function $(I,y){let V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Ge(V,I,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}let me={[dr]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[Xo]:s.MIRRORED_REPEAT},ye={[en]:s.NEAREST,[Fu]:s.NEAREST_MIPMAP_NEAREST,[to]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},Ie={[z_]:s.NEVER,[X_]:s.ALWAYS,[V_]:s.LESS,[Mh]:s.LEQUAL,[H_]:s.EQUAL,[bh]:s.GEQUAL,[G_]:s.GREATER,[W_]:s.NOTEQUAL};function Le(I,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===oa||y.magFilter===to||y.magFilter===os||y.minFilter===tn||y.minFilter===oa||y.minFilter===to||y.minFilter===os)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,me[y.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,me[y.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,me[y.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ye[y.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==to&&y.minFilter!==os||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(I,y){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",w));let Y=y.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let ce=z(y);if(ce!==I.__cacheKey){j[ce]===void 0&&(j[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[ce].usedTimes++;let oe=j[I.__cacheKey];oe!==void 0&&(j[I.__cacheKey].usedTimes--,oe.usedTimes===0&&R(y)),I.__cacheKey=ce,I.__webglTexture=j[ce].texture}return V}function J(I,y,V){return Math.floor(Math.floor(I/V)/y)}function ee(I,y,V,Y){let ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,V,Y,y.data);else{ce.sort((Ee,de)=>Ee.start-de.start);let oe=0;for(let Ee=1;Ee<ce.length;Ee++){let de=ce[oe],he=ce[Ee],le=de.start+de.count,Ue=J(he.start,y.width,4),He=J(de.start,y.width,4);he.start<=le+1&&Ue===He&&J(he.start+he.count-1,y.width,4)===Ue?de.count=Math.max(de.count,he.start+he.count-de.start):(++oe,ce[oe]=he)}ce.length=oe+1;let Q=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ee=0,de=ce.length;Ee<de;Ee++){let he=ce[Ee],le=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),He=le%y.width,U=Math.floor(le/y.width),ue=Ue,te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,He),t.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,He,U,ue,te,V,Y,y.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function xe(I,y,V){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);let j=Xe(I,y),ce=y.source;t.bindTexture(Y,I.__webglTexture,s.TEXTURE0+V);let oe=n.get(ce);if(ce.version!==oe.__version||j===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let te=et.getPrimaries(et.workingColorSpace),pe=y.colorSpace===ls?null:et.getPrimaries(y.colorSpace),ve=y.colorSpace===ls||te===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=m(y.image,!1,i.maxTextureSize);ne=Bt(y,ne);let fe=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),de=v(y.internalFormat,fe,Ee,y.normalized,y.colorSpace,y.isVideoTexture);Le(Y,y);let he,le=y.mipmaps,Ue=y.isVideoTexture!==!0,He=oe.__version===void 0||j===!0,U=ce.dataReady,ue=b(y,ne);if(y.isDepthTexture)de=S(y.format===vr,y.type),He&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,null));else if(y.isDataTexture)if(le.length>0){Ue&&He&&t.texStorage2D(s.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,fe,Ee,he.data):t.texImage2D(s.TEXTURE_2D,te,de,he.width,he.height,0,fe,Ee,he.data);y.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(s.TEXTURE_2D,ue,de,ne.width,ne.height),U&&ee(y,ne,fe,Ee)):t.texImage2D(s.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,de,le[0].width,le[0].height,ne.depth);for(let te=0,pe=le.length;te<pe;te++)if(he=le[te],y.format!==Ti)if(fe!==null)if(Ue){if(U)if(y.layerUpdates.size>0){let ve=Jd(he.width,he.height,y.format,y.type);for(let ie of y.layerUpdates){let ae=he.data.subarray(ie*ve/he.data.BYTES_PER_ELEMENT,(ie+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,ie,he.width,he.height,1,fe,ae)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,he.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,Ee,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,fe,Ee,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&He&&t.texStorage2D(s.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],y.format!==Ti?fe!==null?Ue?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(s.TEXTURE_2D,te,de,he.width,he.height,0,he.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,fe,Ee,he.data):t.texImage2D(s.TEXTURE_2D,te,de,he.width,he.height,0,fe,Ee,he.data)}else if(y.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,de,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){let te=Jd(ne.width,ne.height,y.format,y.type);for(let pe of y.layerUpdates){let ve=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,fe,Ee,ve)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(y.isData3DTexture)Ue?(He&&t.texStorage3D(s.TEXTURE_3D,ue,de,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)):t.texImage3D(s.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(y.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(s.TEXTURE_2D,ue,de,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let ve=0;ve<ue;ve++)t.texImage2D(s.TEXTURE_2D,ve,de,te,pe,0,fe,Ee,null),te>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let te=s.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),f.add(y),te.onpaint=pe=>{let ve=pe.changedElements;for(let ie of f)ve.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let ve=s.RGBA,ie=s.RGBA,ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,ie,ae,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(le.length>0){if(Ue&&He){let te=Ye(le[0]);t.texStorage2D(s.TEXTURE_2D,ue,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)he=le[te],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe,Ee,he):t.texImage2D(s.TEXTURE_2D,te,de,fe,Ee,he);y.generateMipmaps=!1}else if(Ue){if(He){let te=Ye(ne);t.texStorage2D(s.TEXTURE_2D,ue,de,te.width,te.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Ee,ne)}else t.texImage2D(s.TEXTURE_2D,0,de,fe,Ee,ne);g(y)&&M(Y),oe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ge(I,y,V){if(y.image.length!==6)return;let Y=Xe(I,y),j=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);let ce=n.get(j);if(j.version!==ce.__version||Y===!0){t.activeTexture(s.TEXTURE0+V);let oe=et.getPrimaries(et.workingColorSpace),Q=y.colorSpace===ls?null:et.getPrimaries(y.colorSpace),ne=y.colorSpace===ls||oe===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!fe&&!Ee?de[ie]=m(y.image[ie],!0,i.maxCubemapSize):de[ie]=Ee?y.image[ie].image:y.image[ie],de[ie]=Bt(y,de[ie]);let he=de[0],le=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),He=v(y.internalFormat,le,Ue,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ue=ce.__version===void 0||Y===!0,te=j.dataReady,pe=b(y,he);Le(s.TEXTURE_CUBE_MAP,y);let ve;if(fe){U&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,He,he.width,he.height);for(let ie=0;ie<6;ie++){ve=de[ie].mipmaps;for(let ae=0;ae<ve.length;ae++){let se=ve[ae];y.format!==Ti?le!==null?U?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,0,0,se.width,se.height,le,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,He,se.width,se.height,0,se.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,0,0,se.width,se.height,le,Ue,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae,He,se.width,se.height,0,le,Ue,se.data)}}}else{if(ve=y.mipmaps,U&&ue){ve.length>0&&pe++;let ie=Ye(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){U?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,le,Ue,de[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,de[ie].width,de[ie].height,0,le,Ue,de[ie].data);for(let ae=0;ae<ve.length;ae++){let Be=ve[ae].image[ie].image;U?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,0,0,Be.width,Be.height,le,Ue,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,He,Be.width,Be.height,0,le,Ue,Be.data)}}else{U?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,Ue,de[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,le,Ue,de[ie]);for(let ae=0;ae<ve.length;ae++){let se=ve[ae];U?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,0,0,le,Ue,se.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae+1,He,le,Ue,se.image[ie])}}}g(y)&&M(s.TEXTURE_CUBE_MAP),ce.__version=j.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ge(I,y,V,Y,j,ce){let oe=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),ne=v(V.internalFormat,oe,Q,V.normalized,V.colorSpace),fe=n.get(y),Ee=n.get(V);if(Ee.__renderTarget=y,!fe.__hasExternalTextures){let de=Math.max(1,y.width>>ce),he=Math.max(1,y.height>>ce);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,ne,de,he,y.depth,0,oe,Q,null):t.texImage2D(j,ce,ne,de,he,0,oe,Q,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),_t(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Ee.__webglTexture,0,Ze(y)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Ee.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(I,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),y.depthBuffer){let Y=y.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,ce=S(y.stencilBuffer,j),oe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(y),ce,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(y),ce,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ce,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,I)}else{let Y=y.textures;for(let j=0;j<Y.length;j++){let ce=Y[j],oe=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),ne=v(ce.internalFormat,oe,Q,ce.normalized,ce.colorSpace);_t(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(y),ne,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(y),ne,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ne,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(I,y,V){let Y=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y.depthTexture);let fe=r.convert(y.depthTexture.format),Ee=r.convert(y.depthTexture.type),de;y.depthTexture.format===ms?de=s.DEPTH_COMPONENT24:y.depthTexture.format===vr&&(de=s.DEPTH24_STENCIL8);for(let he=0;he<6;he++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,y.width,y.height,0,fe,Ee,null)}}else Z(y.depthTexture,0);let ce=j.__webglTexture,oe=Ze(y),Q=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ne=y.depthTexture.format===vr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ms)_t(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,ce,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,ce,0);else if(y.depthTexture.format===vr)_t(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,ce,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(I){let y=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Y}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)We(y.__webglFramebuffer[Y],I,Y);else{let Y=I.texture.mipmaps;Y&&Y.length>0?We(y.__webglFramebuffer[0],I,0):We(y.__webglFramebuffer,I,0)}else if(V){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ve(y.__webglDepthbuffer[Y],I,!1);else{let j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ce)}}else{let Y=I.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ve(y.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(I,y,V){let Y=n.get(I);y!==void 0&&ge(Y.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&De(I)}function nt(I){let y=I.texture,V=n.get(I),Y=n.get(y);I.addEventListener("dispose",x);let j=I.textures,ce=I.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,o.memory.textures++),ce){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let ne=0;ne<y.mipmaps.length;ne++)V.__webglFramebuffer[Q][ne]=s.createFramebuffer()}else V.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)V.__webglFramebuffer[Q]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(oe)for(let Q=0,ne=j.length;Q<ne;Q++){let fe=n.get(j[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&_t(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let ne=j[Q];V.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let fe=r.convert(ne.format,ne.colorSpace),Ee=r.convert(ne.type),de=v(ne.internalFormat,fe,Ee,ne.normalized,ne.colorSpace,I.isXRRenderTarget===!0),he=Ze(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,de,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)ge(V.__webglFramebuffer[Q][ne],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else ge(V.__webglFramebuffer[Q],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(y)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Q=0,ne=j.length;Q<ne;Q++){let fe=j[Q],Ee=n.get(fe),de=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Le(de,fe),ge(V.__webglFramebuffer,I,fe,s.COLOR_ATTACHMENT0+Q,de,0),g(fe)&&M(de)}t.unbindTexture()}else{let Q=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),Le(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)ge(V.__webglFramebuffer[ne],I,y,s.COLOR_ATTACHMENT0,Q,ne);else ge(V.__webglFramebuffer,I,y,s.COLOR_ATTACHMENT0,Q,0);g(y)&&M(Q),t.unbindTexture()}I.depthBuffer&&De(I)}function W(I){let y=I.textures;for(let V=0,Y=y.length;V<Y;V++){let j=y[V];if(g(j)){let ce=A(I),oe=n.get(j).__webglTexture;t.bindTexture(ce,oe),M(ce),t.unbindTexture()}}}let lt=[],Tt=[];function Vt(I){if(I.samples>0){if(_t(I)===!1){let y=I.textures,V=I.width,Y=I.height,j=s.COLOR_BUFFER_BIT,ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(I),Q=y.length>1;if(Q)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ne=I.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);let Ee=n.get(y[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,j,s.NEAREST),l===!0&&(lt.length=0,Tt.length=0,lt.push(s.COLOR_ATTACHMENT0+fe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(lt.push(ce),Tt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);let Ee=n.get(y[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ze(I){return Math.min(i.maxSamples,I.samples)}function _t(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(I){let y=o.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function Bt(I,y){let V=I.colorSpace,Y=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Cn&&V!==ls&&(et.getTransfer(V)===gt?(Y!==Ti||j!==di)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",V)),y}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=C,this.setTextureCube=$,this.rebindTextures=Ke,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XE(s,e){function t(n,i=ls){let r,o=et.getTransfer(i);if(n===di)return s.UNSIGNED_BYTE;if(n===ku)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ud)return s.BYTE;if(n===Od)return s.SHORT;if(n===aa)return s.UNSIGNED_SHORT;if(n===Bu)return s.INT;if(n===as)return s.UNSIGNED_INT;if(n===bi)return s.FLOAT;if(n===Ln)return s.HALF_FLOAT;if(n===kd)return s.ALPHA;if(n===zd)return s.RGB;if(n===Ti)return s.RGBA;if(n===ms)return s.DEPTH_COMPONENT;if(n===vr)return s.DEPTH_STENCIL;if(n===Vu)return s.RED;if(n===Hu)return s.RED_INTEGER;if(n===yr)return s.RG;if(n===Gu)return s.RG_INTEGER;if(n===Wu)return s.RGBA_INTEGER;if(n===Ol||n===Fl||n===Bl||n===kl)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xu||n===Yu||n===qu||n===Ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zu||n===Ju||n===$u||n===ju||n===Qu||n===zl||n===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zu||n===Ju)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ju)return r.COMPRESSED_R11_EAC;if(n===Qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zl)return r.COMPRESSED_RG11_EAC;if(n===eh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===fh||n===dh||n===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===_h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mh)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===vh||n===Vl||n===yh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function ZE(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,A,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===In&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===In&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),A=M.envMap,v=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(E0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JE(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=i[v.id];b===void 0&&(m(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(v,w);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let S=f();v.__bindingPointIndex=S;let b=s.createBuffer(),w=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=i[v.id],b=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,T=b.length;x<T;x++){let R=b[x];if(Array.isArray(R))for(let D=0,P=R.length;D<P;D++)d(R[D],x,D,w);else d(R,x,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,S,b,w){if(_(v,S,b,w)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let P=T[D],N=g(P);p(P,v.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function p(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,w){let x=v.value,T=S+"_"+b;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let R=w[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let S=v.uniforms,b=0,w=16;for(let T=0,R=S.length;T<R;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let P=0,N=D.length;P<N;P++){let L=D[P],B=Array.isArray(L.value)?L.value:[L.value];for(let G=0,z=B.length;G<z;G++){let Z=B[G],H=g(Z),C=b%w,$=C%H.boundary,me=C+$;b+=$,me!==0&&w-me<H.storage&&(b+=w-me),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=H.storage}}}let x=b%w;return x>0&&(b+=w-x),v.__size=b,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function A(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:A}}function jE(){return ys===null&&(ys=new jo($E,16,16,yr,Ln),ys.name="DFG_LUT",ys.minFilter=tn,ys.magFilter=tn,ys.wrapS=Fi,ys.wrapT=Fi,ys.generateMipmaps=!1,ys.needsUpdate=!0),ys}var hM,fM,dM,pM,mM,gM,_M,xM,vM,yM,SM,MM,bM,TM,wM,EM,AM,RM,CM,PM,IM,LM,NM,DM,UM,OM,FM,BM,kM,zM,VM,HM,GM,WM,XM,YM,qM,KM,ZM,JM,$M,jM,QM,eb,tb,nb,ib,sb,rb,ob,ab,lb,cb,ub,hb,fb,db,pb,mb,gb,_b,xb,vb,yb,Sb,Mb,bb,Tb,wb,Eb,Ab,Rb,Cb,Pb,Ib,Lb,Nb,Db,Ub,Ob,Fb,Bb,kb,zb,Vb,Hb,Gb,Wb,Xb,Yb,qb,Kb,Zb,Jb,$b,jb,Qb,eT,tT,nT,iT,sT,rT,oT,aT,lT,cT,uT,hT,fT,dT,pT,mT,gT,_T,xT,vT,yT,ST,MT,bT,TT,wT,ET,AT,RT,CT,PT,IT,LT,NT,DT,UT,OT,FT,BT,kT,zT,VT,HT,GT,WT,st,Se,Ss,Th,XT,S0,ha,$T,jT,QT,Gl,Q_,ip,sp,rp,op,ew,io,da,Eh,hw,M0,cp,b0,T0,w0,i0,s0,r0,o0,a0,up,hp,fp,ap,fa,eE,tE,u0,rE,wh,hE,fE,pE,gE,xE,yE,ME,EE,pp,mp,DE,BE,kE,zE,VE,v0,Wl,lp,YE,qE,gp,_p,KE,E0,$E,ys,Ah,ei=Et(()=>{np();np();hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:hM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:_M,aomap_pars_fragment:xM,batching_pars_vertex:vM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:bM,iridescence_fragment:TM,bumpmap_pars_fragment:wM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:CM,color_fragment:PM,color_pars_fragment:IM,color_pars_vertex:LM,color_vertex:NM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:OM,displacementmap_pars_vertex:FM,displacementmap_vertex:BM,emissivemap_fragment:kM,emissivemap_pars_fragment:zM,colorspace_fragment:VM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:ib,envmap_vertex:qM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:jM,lightmap_pars_fragment:QM,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:sb,lights_toon_pars_fragment:rb,lights_phong_fragment:ob,lights_phong_pars_fragment:ab,lights_physical_fragment:lb,lights_physical_pars_fragment:cb,lights_fragment_begin:ub,lights_fragment_maps:hb,lights_fragment_end:fb,lightprobes_pars_fragment:db,logdepthbuf_fragment:pb,logdepthbuf_pars_fragment:mb,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:_b,map_fragment:xb,map_pars_fragment:vb,map_particle_fragment:yb,map_particle_pars_fragment:Sb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:bb,morphinstance_vertex:Tb,morphcolor_vertex:wb,morphnormal_vertex:Eb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Rb,normal_fragment_begin:Cb,normal_fragment_maps:Pb,normal_pars_fragment:Ib,normal_pars_vertex:Lb,normal_vertex:Nb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Bb,opaque_fragment:kb,packing:zb,premultiplied_alpha_fragment:Vb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Wb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Jb,skinbase_vertex:$b,skinning_pars_vertex:jb,skinning_vertex:Qb,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:sT,transmission_fragment:rT,transmission_pars_fragment:oT,uv_pars_fragment:aT,uv_pars_vertex:lT,uv_vertex:cT,worldpos_vertex:uT,background_vert:hT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:_T,depth_frag:xT,distance_vert:vT,distance_frag:yT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:bT,linedashed_frag:TT,meshbasic_vert:wT,meshbasic_frag:ET,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:PT,meshnormal_vert:IT,meshnormal_frag:LT,meshphong_vert:NT,meshphong_frag:DT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:FT,meshtoon_frag:BT,points_vert:kT,points_frag:zT,shadow_vert:VT,shadow_frag:HT,sprite_vert:GT,sprite_frag:WT},Se={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ss={basic:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Hn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Hn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Hn([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Hn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Hn([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Hn([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Hn([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Hn([Se.lights,Se.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ss.physical={uniforms:Hn([Ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};Th={r:0,b:0,g:0},XT=new tt,S0=new je;S0.set(-1,0,0,0,1,0,0,0,1);ha=4,$T=6,jT=20,QT=256,Gl=new xs,Q_=new Pe,ip=null,sp=0,rp=0,op=!1,ew=new F,io=new F,da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=ew}=r;ip=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,sp,rp),this._renderer.xr.enabled=op,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ln,format:Ti,colorSpace:Cn,depthBuffer:!1},i=e0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tw(r)),this._blurMaterial=iw(r,e,t),this._ggxMaterial=nw(r,e,t)}return i}_compileMaterial(e){let t=new vt(new kt,e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,n,i,r){let l=new un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Q_),f.toneMapping=rs,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new ss,new zn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(Q_),g=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let S=this._cubeSize;ua(i,v*S,A>2?S:0,S,S),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===xr||e.mapping===eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ha?n-p+ha:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ua(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,Gl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ua(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,Gl)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],f=3*u*(i>this._lodMax-ha?i-this._lodMax+ha:0),h=4*(this._cubeSize-u);ua(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Gl)}};Eh=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ss(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:zi});r.uniforms.tEquirect.value=t;let o=new vt(i,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=tn),new Lu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};hw={[Cl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Il]:"CINEON_TONE_MAPPING",[Qr]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Dl]:"NEUTRAL_TONE_MAPPING",[Ll]:"CUSTOM_TONE_MAPPING"};M0=new gn,cp=new gr(1,1),b0=new nl,T0=new xu,w0=new dl,i0=[],s0=[],r0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);up=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lw(t.type)}},hp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jw(t.type)}},fp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},ap=/(\w+)(\])?(\[|\.)?/g;fa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Qw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};eE=37297,tE=0;u0=new je;rE={[Cl]:"Linear",[Pl]:"Reinhard",[Il]:"Cineon",[Qr]:"ACESFilmic",[Nl]:"AgX",[Dl]:"Neutral",[Ll]:"Custom"};wh=new F;hE=/^[ \t]*#include +<([\w\d./]+)>/gm;fE=new Map;pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;gE={[Al]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};xE={[xr]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE_UV"};yE={[eo]:"ENVMAP_MODE_REFRACTION"};ME={[Nd]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[D_]:"ENVMAP_BLENDING_ADD"};EE=0,pp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mp(e),t.set(e,n)),n}},mp=class{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}};DE=0;BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zE=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],VE=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],v0=new tt,Wl=new F,lp=new F;YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ml(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:YE,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_p=class extends gs{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new gp,g={},M=t.getContextAttributes(),A=null,v=null,S=[],b=[],w=new ke,x=null,T=null,R=new un;R.viewport=new Mt;let D=new un;D.viewport=new Mt;let P=[R,D],N=new Nu,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=S[J];return ee===void 0&&(ee=new Jo,S[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=S[J];return ee===void 0&&(ee=new Jo,S[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=S[J];return ee===void 0&&(ee=new Jo,S[J]=ee),ee.getHandSpace()};function G(J){let ee=b.indexOf(J.inputSource);if(ee===-1)return;let xe=S[ee];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||o),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Z);for(let J=0;J<S.length;J++){let ee=b[J];ee!==null&&(b[J]=null,S[J].disconnect(ee))}L=null,B=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(A),d=null,h=null,f=null,i=null,v=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?vr:ms,Ge=M.stencil?la:as);let Ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new hn(h.textureWidth,h.textureHeight,{format:Ti,type:di,depthTexture:new gr(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hn(d.framebufferWidth,d.framebufferHeight,{format:Ti,type:di,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let ee=0;ee<J.removed.length;ee++){let xe=J.removed[ee],Ge=b.indexOf(xe);Ge>=0&&(b[Ge]=null,S[Ge].disconnect(xe))}for(let ee=0;ee<J.added.length;ee++){let xe=J.added[ee],Ge=b.indexOf(xe);if(Ge===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=b.length){b.push(xe),Ge=Ve;break}else if(b[Ve]===null){b[Ve]=xe,Ge=Ve;break}if(Ge===-1)break}let ge=S[Ge];ge&&ge.connect(xe)}}let H=new F,C=new F;function $(J,ee,xe){H.setFromMatrixPosition(ee.matrixWorld),C.setFromMatrixPosition(xe.matrixWorld);let Ge=H.distanceTo(C),ge=ee.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,We=ge[14]/(ge[10]-1),De=ge[14]/(ge[10]+1),Ke=(ge[9]+1)/ge[5],nt=(ge[9]-1)/ge[5],W=(ge[8]-1)/ge[0],lt=(Ve[8]+1)/Ve[0],Tt=We*W,Vt=We*lt,Ze=Ge/(-W+lt),_t=Ze*-W;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(Ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ge[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let k=We+Ze,Bt=De+Ze,Ye=Tt-_t,I=Vt+(Ge-_t),y=Ke*De/Bt*k,V=nt*De/Bt*k;J.projectionMatrix.makePerspective(Ye,I,y,V,k,Bt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function me(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ee=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),N.near=D.near=R.near=ee,N.far=D.far=R.far=xe,(L!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,B=N.far),N.layers.mask=J.layers.mask|6,R.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let Ge=J.parent,ge=N.cameras;me(N,Ge);for(let Ve=0;Ve<ge.length;Ve++)me(ge[Ve],Ge);ge.length===2?$(N,R,D):N.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),ye(J,N,Ge)};function ye(J,ee,xe){xe===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return g[J]};let Ie=null;function Le(J,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){let xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ge=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,Ge=!0);for(let De=0;De<xe.length;De++){let Ke=xe[De],nt=null;if(d!==null)nt=d.getViewport(Ke);else{let lt=f.getViewSubImage(h,Ke);nt=lt.viewport,De===0&&(e.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(v))}let W=P[De];W===void 0&&(W=new un,W.layers.enable(De),W.viewport=new Mt,P[De]=W),W.matrix.fromArray(Ke.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Ke.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(nt.x,nt.y,nt.width,nt.height),De===0&&(N.matrix.copy(W.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ge===!0&&N.cameras.push(W)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let De=f.getDepthInformation(xe[0]);De&&De.isValid&&De.texture&&m.init(De,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<xe.length;De++){let Ke=xe[De].camera;if(Ke){let nt=g[Ke];nt||(nt=new ml,g[Ke]=nt);let W=f.getCameraImage(Ke);nt.sourceTexture=W}}}}for(let xe=0;xe<S.length;xe++){let Ge=b[xe],ge=S[xe];Ge!==null&&ge!==void 0&&ge.update(Ge,ee,c||o)}Ie&&Ie(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let Xe=new y0;Xe.setAnimationLoop(Le),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}},KE=new tt,E0=new je;E0.set(-1,0,0,0,1,0,0,0,1);$E=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ys=null;Ah=class{constructor(e={}){let{canvas:t=Y_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=di}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Wu,Gu,Hu]),g=new Set([di,as,aa,la,ku,zu]),M=new Uint32Array(4),A=new Int32Array(4),v=new F,S=null,b=null,w=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,P=null,N=null,L=null,B=null;this._outputColorSpace=Ht;let G=0,z=0,Z=null,H=-1,C=null,$=new Mt,me=new Mt,ye=null,Ie=new Pe(0),Le=0,Xe=t.width,J=t.height,ee=1,xe=null,Ge=null,ge=new Mt(0,0,Xe,J),Ve=new Mt(0,0,Xe,J),We=!1,De=new Qo,Ke=!1,nt=!1,W=new tt,lt=new F,Tt=new Mt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function _t(){return Z===null?ee:1}let k=n;function Bt(E,O){return t.getContext(E,O)}let Ye,I,y,V,Y,j,ce,oe,Q,ne,fe,Ee,de,he,le,Ue,He,U,ue,te,pe,ve,ie;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ze,!1),k===null){let O="webgl2";if(k=Bt(O,E),k===null)throw Bt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(E){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),qe("WebGLRenderer: "+E.message),E}function ae(){Ye=new rw(k),Ye.init(),pe=new XE(k,Ye),I=new ZT(k,Ye,e,pe),y=new GE(k,Ye),I.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),N=k.createFramebuffer(),L=k.createFramebuffer(),B=k.createFramebuffer(),V=new lw(k),Y=new CE,j=new WE(k,Ye,y,Y,I,pe,V),ce=new sw(R),oe=new uM(k),ve=new qT(k,oe),Q=new ow(k,oe,V,ve),ne=new uw(k,Q,oe,ve,V),U=new cw(k,I,j),le=new JT(Y),fe=new RE(R,ce,Ye,I,ve,le),Ee=new ZE(R,Y),de=new IE,he=new FE(Ye),He=new YT(R,ce,y,ne,p,l),Ue=new HE(R,ne,I),ie=new JE(k,V,I,y),ue=new KT(k,Ye,V),te=new aw(k,Ye,V),V.programs=fe.programs,R.capabilities=I,R.extensions=Ye,R.properties=Y,R.renderLists=de,R.shadowMap=Ue,R.state=y,R.info=V}_!==di&&(T=new fw(_,t.width,t.height,a,i,r));let se=new _p(R,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Xe,J,!1))},this.getSize=function(E){return E.set(Xe,J)},this.setSize=function(E,O,K=!0){if(se.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=E,J=O,t.width=Math.floor(E*ee),t.height=Math.floor(O*ee),K===!0&&(t.style.width=E+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Xe*ee,J*ee).floor()},this.setDrawingBufferSize=function(E,O,K){Xe=E,J=O,ee=K,t.width=Math.floor(E*K),t.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===di){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,O,K,X){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,O,K,X),y.viewport($.copy(ge).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,O,K,X){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,O,K,X),y.scissor(me.copy(Ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){y.setScissorTest(We=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Ge=E},this.getClearColor=function(E){return E.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,K=!0){let X=0;if(E){let q=!1;if(Z!==null){let _e=Z.texture.format;q=m.has(_e)}if(q){let _e=Z.texture.type,Te=g.has(_e),Me=He.getClearColor(),Re=He.getClearAlpha(),Oe=Me.r,it=Me.g,ft=Me.b;Te?(M[0]=Oe,M[1]=it,M[2]=ft,M[3]=Re,k.clearBufferuiv(k.COLOR,0,M)):(A[0]=Oe,A[1]=it,A[2]=ft,A[3]=Re,k.clearBufferiv(k.COLOR,0,A))}else X|=k.COLOR_BUFFER_BIT}O&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),He.dispose(),de.dispose(),he.dispose(),Y.dispose(),ce.dispose(),ne.dispose(),ve.dispose(),ie.dispose(),fe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ot),se.removeEventListener("sessionend",At),dt.stop()};function Be(E){E.preventDefault(),tl("WebGLRenderer: Context Lost."),D=!0}function re(){tl("WebGLRenderer: Context Restored."),D=!1;let E=V.autoReset,O=Ue.enabled,K=Ue.autoUpdate,X=Ue.needsUpdate,q=Ue.type;ae(),V.autoReset=E,Ue.enabled=O,Ue.autoUpdate=K,Ue.needsUpdate=X,Ue.type=q}function ze(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){let O=E.target;O.removeEventListener("dispose",Ae),$e(O)}function $e(E){on(E),Y.remove(E)}function on(E){let O=Y.get(E).programs;O!==void 0&&(O.forEach(function(K){fe.releaseProgram(K)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,X,q,_e){O===null&&(O=Vt);let Te=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=Mn(E,O,K,X,q);y.setMaterial(X,Te);let Re=K.index,Oe=1;if(X.wireframe===!0){if(Re=Q.getWireframeAttribute(K),Re===void 0)return;Oe=2}let it=K.drawRange,ft=K.attributes.position,Ce=it.start*Oe,xt=(it.start+it.count)*Oe;_e!==null&&(Ce=Math.max(Ce,_e.start*Oe),xt=Math.min(xt,(_e.start+_e.count)*Oe)),Re!==null?(Ce=Math.max(Ce,0),xt=Math.min(xt,Re.count)):ft!=null&&(Ce=Math.max(Ce,0),xt=Math.min(xt,ft.count));let ln=xt-Ce;if(ln<0||ln===1/0)return;ve.setup(q,X,Me,K,Re);let Ft,Rt=ue;if(Re!==null&&(Ft=oe.get(Re),Rt=te,Rt.setIndex(Ft)),q.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*_t()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(q.isLine){let Fn=X.linewidth;Fn===void 0&&(Fn=1),y.setLineWidth(Fn*_t()),q.isLineSegments?Rt.setMode(k.LINES):q.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else q.isPoints?Rt.setMode(k.POINTS):q.isSprite&&Rt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Fn=q._multiDrawStarts,be=q._multiDrawCounts,jn=q._multiDrawCount,mt=Re?oe.get(Re).bytesPerElement:1,Ui=Y.get(X).currentProgram.getUniforms();for(let fs=0;fs<jn;fs++)Ui.setValue(k,"_gl_DrawID",fs),Rt.render(Fn[fs]/mt,be[fs])}else if(q.isInstancedMesh)Rt.renderInstances(Ce,ln,q.count);else if(K.isInstancedBufferGeometry){let Fn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,be=Math.min(K.instanceCount,Fn);Rt.renderInstances(Ce,ln,be)}else Rt.render(Ce,ln)};function ct(E,O,K,X){P!==null&&E.isNodeMaterial&&P.setObject(X,E),Ke===!0&&le.setState(E,K,!1),E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,qt(E,O,X),E.side=vs,E.needsUpdate=!0,qt(E,O,X),E.side=ki):qt(E,O,X)}this.compile=function(E,O,K=null){K===null&&(K=E),P!==null&&P.renderStart(E,O,K),b=he.get(K),b.init(O),x.push(b),K.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),nt=this.localClippingEnabled,Ke=le.init(this.clippingPlanes,nt),Ke===!0&&le.setGlobalState(this.clippingPlanes,O),P!==null&&Ue.render(b.state.shadowsArray,K,O);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let _e=q.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){let Me=_e[Te];ct(Me,K,O,q),X.add(Me)}else ct(_e,K,O,q),X.add(_e)}),b=x.pop(),P!==null&&P.renderEnd(),X},this.compileAsync=function(E,O,K=null){let X=this.compile(E,O,K);return new Promise(q=>{function _e(){if(X.forEach(function(Te){let Re=Y.get(Te).currentProgram;(Re===void 0||Re.isReady())&&X.delete(Te)}),X.size===0){q(E);return}setTimeout(_e,10)}Ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ut=null;function Sn(E){Ut&&Ut(E)}function Ot(){dt.stop()}function At(){dt.start()}let dt=new y0;dt.setAnimationLoop(Sn),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){Ut=E,se.setAnimationLoop(E),E===null?dt.stop():dt.start()},se.addEventListener("sessionstart",Ot),se.addEventListener("sessionend",At),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(E,O);let K=se.enabled===!0&&se.isPresenting===!0,X=T!==null&&(Z===null||K)&&T.begin(R,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(O),O=se.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,Z),b=he.get(E,x.length),b.init(O),b.state.textureUnits=j.getTextureUnits(),x.push(b),W.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(W,ns,O.reversedDepth),nt=this.localClippingEnabled,Ke=le.init(this.clippingPlanes,nt),S=de.get(E,w.length),S.init(),w.push(S),se.enabled===!0&&se.isPresenting===!0){let Te=R.xr.getDepthSensingMesh();Te!==null&&Jn(Te,O,-1/0,R.sortObjects)}Jn(E,O,0,R.sortObjects),S.finish(),P!==null&&P.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(xe,Ge),Ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ze&&He.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&le.beginShadows();let q=b.state.shadowsArray;if(Ue.render(q,E,O),Ke===!0&&le.endShadows(),(X&&T.hasRenderPass())===!1){let Te=S.opaque,Me=S.transmissive;if(b.setupLights(),O.isArrayCamera){let Re=O.cameras;if(Me.length>0)for(let Oe=0,it=Re.length;Oe<it;Oe++){let ft=Re[Oe];On(Te,Me,E,ft)}Ze&&He.render(E);for(let Oe=0,it=Re.length;Oe<it;Oe++){let ft=Re[Oe];Lt(S,E,ft,ft.viewport)}}else Me.length>0&&On(Te,Me,E,O),Ze&&He.render(E),Lt(S,E,O)}Z!==null&&z===0&&(j.updateMultisampleRenderTarget(Z),j.updateRenderTargetMipmap(Z)),X&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),ve.resetDefaultState(),H=-1,C=null,x.pop(),x.length>0?(b=x[x.length-1],j.setTextureUnits(b.state.textureUnits),Ke===!0&&le.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,P!==null&&P.renderEnd()};function Jn(E,O,K,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(De)){X&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(W);let Te=ne.update(E),Me=E.material;Me.visible&&S.push(E,Te,Me,K,Tt.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(De))){let Te=ne.update(E),Me=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Tt.copy(Te.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(W)),Array.isArray(Me)){let Re=Te.groups;for(let Oe=0,it=Re.length;Oe<it;Oe++){let ft=Re[Oe],Ce=Me[ft.materialIndex];Ce&&Ce.visible&&S.push(E,Te,Ce,K,Tt.z,ft,O)}}else Me.visible&&S.push(E,Te,Me,K,Tt.z,null,O)}}let _e=E.children;for(let Te=0,Me=_e.length;Te<Me;Te++)Jn(_e[Te],O,K,X)}function Lt(E,O,K,X){let{opaque:q,transmissive:_e,transparent:Te}=E;b.setupLightsView(K),Ke===!0&&le.setGlobalState(R.clippingPlanes,K),X&&y.viewport($.copy(X)),q.length>0&&$n(q,O,K),_e.length>0&&$n(_e,O,K),Te.length>0&&$n(Te,O,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function On(E,O,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let Ce=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new hn(1,1,{generateMipmaps:!0,type:Ce?Ln:di,minFilter:os,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let _e=b.state.transmissionRenderTarget[X.id],Te=X.viewport||$;_e.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Re=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(Ie),Le=R.getClearAlpha(),Le<1&&R.setClearColor(16777215,.5),R.clear(),Ze&&He.render(K);let it=R.toneMapping;R.toneMapping=rs;let ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),Ke===!0&&le.setGlobalState(R.clippingPlanes,X),$n(E,K,X),j.updateMultisampleRenderTarget(_e),j.updateRenderTargetMipmap(_e),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let xt=0,ln=O.length;xt<ln;xt++){let Ft=O[xt],{object:Rt,geometry:Fn,material:be,group:jn}=Ft;if(be.side===ki&&Rt.layers.test(X.layers)){let mt=be.side;be.side=In,be.needsUpdate=!0,an(Rt,K,X,Fn,be,jn),be.side=mt,be.needsUpdate=!0,Ce=!0}}Ce===!0&&(j.updateMultisampleRenderTarget(_e),j.updateRenderTargetMipmap(_e))}R.setRenderTarget(Me,Re,Oe),R.setClearColor(Ie,Le),ft!==void 0&&(X.viewport=ft),R.toneMapping=it}function $n(E,O,K){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,_e=E.length;q<_e;q++){let Te=E[q],{object:Me,geometry:Re,group:Oe}=Te,it=Te.material;it.allowOverride===!0&&X!==null&&(it=X),Me.layers.test(K.layers)&&an(Me,O,K,Re,it,Oe)}}function an(E,O,K,X,q,_e){P!==null&&q.isNodeMaterial&&P.setObject(E,q),E.onBeforeRender(R,O,K,X,q,_e),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,O,K,X,E,_e),q.transparent===!0&&q.side===ki&&q.forceSinglePass===!1?(q.side=In,q.needsUpdate=!0,R.renderBufferDirect(K,O,X,q,E,_e),q.side=vs,q.needsUpdate=!0,R.renderBufferDirect(K,O,X,q,E,_e),q.side=ki):R.renderBufferDirect(K,O,X,q,E,_e),E.onAfterRender(R,O,K,X,q,_e)}function qt(E,O,K){O.isScene!==!0&&(O=Vt);let X=Y.get(E),q=b.state.lights,_e=b.state.shadowsArray,Te=q.state.version,Me=fe.getParameters(E,q.state,_e,O,K,b.state.lightProbeGridArray),Re=fe.getProgramCacheKey(Me),Oe=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let it=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ce.get(E.envMap||X.environment,it),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Ae),Oe=new Map,X.programs=Oe);let ft=Oe.get(Re);if(ft!==void 0){if(X.currentProgram===ft&&X.lightsStateVersion===Te)return hs(E,Me),ft}else Me.uniforms=fe.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,K,Me),E.onBeforeCompile(Me,R),ft=fe.acquireProgram(Me,Re),Oe.set(Re,ft),X.uniforms=Me.uniforms;let Ce=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=le.uniform),hs(E,Me),X.needsLights=Di(E),X.lightsStateVersion=Te,X.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.sunLights.value=q.state.sun,Ce.sunLightShadows.value=q.state.sunShadow,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.sunShadowMatrix.value=q.state.sunShadowMatrix,Ce.sunShadowCascade.value=q.state.sunShadowCascade,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotLightMatrix.value=q.state.spotLightMatrix,Ce.spotLightMap.value=q.state.spotLightMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=ft,X.uniformsList=null,ft}function mn(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=fa.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function hs(E,O){let K=Y.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function wo(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let K=0,X=E.length;K<X;K++){let q=E[K];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function Mn(E,O,K,X,q){O.isScene!==!0&&(O=Vt),j.resetTextureUnits();let _e=O.fog,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,Me=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:et.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=ce.get(X.envMap||Te,Re),it=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ft=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,ln=!!K.morphAttributes.color,Ft=rs;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ft=R.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Fn=Rt!==void 0?Rt.length:0,be=Y.get(X),jn=b.state.lights;if(Ke===!0&&(nt===!0||E!==C)){let Nt=E===C&&X.id===H;le.setState(X,E,Nt)}let mt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==jn.state.version||be.outputColorSpace!==Me||q.isBatchedMesh&&be.batching===!1||!q.isBatchedMesh&&be.batching===!0||q.isBatchedMesh&&be.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&be.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&be.instancing===!1||!q.isInstancedMesh&&be.instancing===!0||q.isSkinnedMesh&&be.skinning===!1||!q.isSkinnedMesh&&be.skinning===!0||q.isInstancedMesh&&be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&be.instancingMorph===!1&&q.morphTexture!==null||be.envMap!==Oe||X.fog===!0&&be.fog!==_e||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==it||be.vertexTangents!==ft||be.morphTargets!==Ce||be.morphNormals!==xt||be.morphColors!==ln||be.toneMapping!==Ft||be.morphTargetsCount!==Fn||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,be.__version=X.version);let Ui=be.currentProgram;mt===!0&&(Ui=qt(X,O,q),P&&X.isNodeMaterial&&P.onUpdateProgram(X,Ui,be));let fs=!1,ir=!1,Ao=!1,wt=Ui.getUniforms(),Qt=be.uniforms;if(y.useProgram(Ui.program)&&(fs=!0,ir=!0,Ao=!0),X.id!==H&&(H=X.id,ir=!0),be.needsLights){let Nt=wo(b.state.lightProbeGridArray,q);be.lightProbeGrid!==Nt&&(be.lightProbeGrid=Nt,ir=!0)}if(fs||C!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(k,"projectionMatrix",E.projectionMatrix),wt.setValue(k,"viewMatrix",E.matrixWorldInverse);let rr=wt.map.cameraPosition;rr!==void 0&&rr.setValue(k,lt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,ir=!0,Ao=!0)}if(be.needsLights&&(jn.state.sunShadowMap.length>0&&wt.setValue(k,"sunShadowMap",jn.state.sunShadowMap,j),jn.state.directionalShadowMap.length>0&&wt.setValue(k,"directionalShadowMap",jn.state.directionalShadowMap,j),jn.state.spotShadowMap.length>0&&wt.setValue(k,"spotShadowMap",jn.state.spotShadowMap,j),jn.state.pointShadowMap.length>0&&wt.setValue(k,"pointShadowMap",jn.state.pointShadowMap,j)),q.isSkinnedMesh){wt.setOptional(k,q,"bindMatrix"),wt.setOptional(k,q,"bindMatrixInverse");let Nt=q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),wt.setValue(k,"boneTexture",Nt.boneTexture,j))}q.isBatchedMesh&&(wt.setOptional(k,q,"batchingTexture"),wt.setValue(k,"batchingTexture",q._matricesTexture,j),wt.setOptional(k,q,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",q._indirectTexture,j),wt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",q._colorsTexture,j));let sr=K.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&U.update(q,K,Ui),(ir||be.receiveShadow!==q.receiveShadow)&&(be.receiveShadow=q.receiveShadow,wt.setValue(k,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(Qt.envMapIntensity.value=O.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=jE()),ir){if(wt.setValue(k,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&jt(Qt,Ao),_e&&X.fog===!0&&Ee.refreshFogUniforms(Qt,_e),Ee.refreshMaterialUniforms(Qt,X,ee,J,b.state.transmissionRenderTarget[E.id]),be.needsLights&&be.lightProbeGrid){let Nt=be.lightProbeGrid;Qt.probesSH.value=Nt.texture,Qt.probesMin.value.copy(Nt.boundingBox.min),Qt.probesMax.value.copy(Nt.boundingBox.max),Qt.probesResolution.value.copy(Nt.resolution)}fa.upload(k,mn(be),Qt,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(fa.upload(k,mn(be),Qt,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(k,"center",q.center),wt.setValue(k,"modelViewMatrix",q.modelViewMatrix),wt.setValue(k,"normalMatrix",q.normalMatrix),wt.setValue(k,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Nt=X.uniformsGroups;for(let rr=0,Ro=Nt.length;rr<Ro;rr++){let Eg=Nt[rr];ie.update(Eg,Ui),ie.bind(Eg,Ui)}}return Ui}function jt(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Di(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,O,K){let X=Y.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=O,Y.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let K=Y.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){Z=E,G=O,z=K;let X=null,q=!1,_e=!1;if(E){let Me=Y.get(E);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(k.FRAMEBUFFER,Me.__webglFramebuffer),$.copy(E.viewport),me.copy(E.scissor),ye=E.scissorTest,y.viewport($),y.scissor(me),y.setScissorTest(ye),H=-1;return}else if(Me.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(Me.__hasExternalTextures)j.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let it=E.depthTexture;if(Me.__boundDepthTexture!==it){if(it!==null&&Y.has(it)&&(E.width!==it.image.width||E.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}let Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);let Oe=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?X=Oe[O][K]:X=Oe[O],q=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?X=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[K]:X=Oe,$.copy(E.viewport),me.copy(E.scissor),ye=E.scissorTest}else $.copy(ge).multiplyScalar(ee).floor(),me.copy(Ve).multiplyScalar(ee).floor(),ye=We;if(K!==0&&(X=N),y.bindFramebuffer(k.FRAMEBUFFER,X)&&y.drawBuffers(E,X),y.viewport($),y.scissor(me),y.setScissorTest(ye),q){let Me=Y.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,K)}else if(_e){let Me=O;for(let Re=0;Re<E.textures.length;Re++){let Oe=Y.get(E.textures[Re]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,K,Me)}}else if(E!==null&&K!==0){let Me=Y.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Me.__webglTexture,K)}H=-1};function Eo(E){let O=Y.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=I.textureFormatReadable(E.format),O.__typeReadable=I.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,K,X,q,_e,Te,Me=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){y.bindFramebuffer(k.FRAMEBUFFER,Re);try{let Oe=E.textures[Me],it=Oe.format,ft=Oe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me);let Ce=Eo(Oe);if(Ce.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&K>=0&&K<=E.height-q&&k.readPixels(O,K,X,q,pe.convert(it),pe.convert(ft),_e)}finally{let Oe=Z!==null?Y.get(Z).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,X,q,_e,Te,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(O>=0&&O<=E.width-X&&K>=0&&K<=E.height-q){y.bindFramebuffer(k.FRAMEBUFFER,Re);let Oe=E.textures[Me],it=Oe.format,ft=Oe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me);let Ce=Eo(Oe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,xt),k.bufferData(k.PIXEL_PACK_BUFFER,_e.byteLength,k.STREAM_READ),k.readPixels(O,K,X,q,pe.convert(it),pe.convert(ft),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let ln=Z!==null?Y.get(Z).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,ln);let Ft=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await K_(k,Ft,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,xt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,_e),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(xt),k.deleteSync(Ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,K=0){let X=Math.pow(2,-K),q=Math.floor(E.image.width*X),_e=Math.floor(E.image.height*X),Te=O!==null?O.x:0,Me=O!==null?O.y:0;j.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Te,Me,q,_e),y.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,X=null,q=0,_e=0){let Te,Me,Re,Oe,it,ft,Ce,xt,ln,Ft=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(K!==null)Te=K.max.x-K.min.x,Me=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,it=K.min.y,ft=K.isBox3?K.min.z:0;else{let Qt=Math.pow(2,-q);Te=Math.floor(Ft.width*Qt),Me=Math.floor(Ft.height*Qt),E.isDataArrayTexture?Re=Ft.depth:E.isData3DTexture?Re=Math.floor(Ft.depth*Qt):Re=1,Oe=0,it=0,ft=0}X!==null?(Ce=X.x,xt=X.y,ln=X.z):(Ce=0,xt=0,ln=0);let Rt=pe.convert(O.format),Fn=pe.convert(O.type),be;O.isData3DTexture?(j.setTexture3D(O,0),be=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),be=k.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),be=k.TEXTURE_2D),y.activeTexture(k.TEXTURE0),y.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let jn=y.getParameter(k.UNPACK_ROW_LENGTH),mt=y.getParameter(k.UNPACK_IMAGE_HEIGHT),Ui=y.getParameter(k.UNPACK_SKIP_PIXELS),fs=y.getParameter(k.UNPACK_SKIP_ROWS),ir=y.getParameter(k.UNPACK_SKIP_IMAGES);y.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),y.pixelStorei(k.UNPACK_SKIP_ROWS,it),y.pixelStorei(k.UNPACK_SKIP_IMAGES,ft);let Ao=E.isDataArrayTexture||E.isData3DTexture,wt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Qt=Y.get(E),sr=Y.get(O),Nt=Y.get(Qt.__renderTarget),rr=Y.get(sr.__renderTarget);y.bindFramebuffer(k.READ_FRAMEBUFFER,Nt.__webglFramebuffer),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Ro=0;Ro<Re;Ro++)Ao&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,q,ft+Ro),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,_e,ln+Ro)),k.blitFramebuffer(Oe,it,Te,Me,Ce,xt,Te,Me,k.DEPTH_BUFFER_BIT,k.NEAREST);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Y.has(E)){let Qt=Y.get(E),sr=Y.get(O);y.bindFramebuffer(k.READ_FRAMEBUFFER,L),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,B);for(let Nt=0;Nt<Re;Nt++)Ao?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,q,ft+Nt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,q),wt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sr.__webglTexture,_e,ln+Nt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sr.__webglTexture,_e),q!==0?k.blitFramebuffer(Oe,it,Te,Me,Ce,xt,Te,Me,k.COLOR_BUFFER_BIT,k.NEAREST):wt?k.copyTexSubImage3D(be,_e,Ce,xt,ln+Nt,Oe,it,Te,Me):k.copyTexSubImage2D(be,_e,Ce,xt,Oe,it,Te,Me);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wt?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(be,_e,Ce,xt,ln,Te,Me,Re,Rt,Fn,Ft.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(be,_e,Ce,xt,ln,Te,Me,Re,Rt,Ft.data):k.texSubImage3D(be,_e,Ce,xt,ln,Te,Me,Re,Rt,Fn,Ft):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,_e,Ce,xt,Te,Me,Rt,Fn,Ft.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,_e,Ce,xt,Ft.width,Ft.height,Rt,Ft.data):k.texSubImage2D(k.TEXTURE_2D,_e,Ce,xt,Te,Me,Rt,Fn,Ft);y.pixelStorei(k.UNPACK_ROW_LENGTH,jn),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Ui),y.pixelStorei(k.UNPACK_SKIP_ROWS,fs),y.pixelStorei(k.UNPACK_SKIP_IMAGES,ir),_e===0&&O.generateMipmaps&&k.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){G=0,z=0,Z=null,y.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}});var ma,xp=Et(()=>{ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var wi,QE,vp,e1,Sr,ga=Et(()=>{ei();wi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},QE=new xs(-1,1,1,-1,0,1),vp=class extends kt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},e1=new vp,Sr=class{constructor(e){this._mesh=new vt(e1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,QE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Ih,A0=Et(()=>{ei();ga();Ih=class extends wi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xs.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Yl,Lh,R0=Et(()=>{ga();Yl=class extends wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Lh=class extends wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Nh,C0=Et(()=>{ei();xp();A0();R0();Nh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ih(ma),this.copyPass.material.blending=zi,this.timer=new El}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yl!==void 0&&(o instanceof Yl?n=!0:o instanceof Lh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Dh,P0=Et(()=>{ei();ga();Dh=class extends wi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}});var I0,L0=Et(()=>{ei();I0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var _a,N0=Et(()=>{ei();ga();xp();L0();_a=class s extends wi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:Ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new hn(r,o,{type:Ln,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new hn(r,o,{type:Ln,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=I0;this.highPassUniforms=Xs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xs.clone(ma.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,premultipliedAlpha:!0,blending:Rl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new zn,this._fsQuad=new Sr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new nn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};_a.BlurDirectionX=new ke(1,0);_a.BlurDirectionY=new ke(0,1)});var ql,D0=Et(()=>{ql={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var Uh,U0=Et(()=>{ei();ga();D0();Uh=class extends wi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xs.clone(ql.uniforms),this.material=new na({name:ql.name,uniforms:this.uniforms,vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader}),this._fsQuad=new Sr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ll&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function Ys(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function W0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var _i,Ql,Fp,Nn,zt,Hi,It,Ap,t1,n1,X0,i1,s1,vn,Zt,Ks,Xh,Ts,gi,Bp,Oh,Y0,Wn,r1,o1,O0,kp,ao,yp,zp,a1,l1,Xt,Ms,Rp,Vp,Ai,zh,q0,K0,Yh,ec,Z0,tc,c1,Fh,u1,Hp,br,Cp,J0,pi,Sp,F0,Bh,Gp,Wp,Tr,Xp,ti,Jt,Wt,lo,h1,Vh,Yp,$0,j0,Q0,Ri,f1,va,B0,Hh,Jl,d1,ex,qh,wr,so,p1,Pp,m1,k0,ya,Gh,Kh,Zh,tx,bs,nx,ix,g1,Ip,_1,x1,Sa,z0,v1,Vi,$l,Er,sc,Dn,y1,Lp,sx,S1,Gi,Np,rx,ox,Dp,ax,lx,M1,b1,T1,cx,w1,E1,ba,ux,A1,V0,Ei,Kl,xa,hx,fx,Pt,Zl,Mp,dx,px,H0,qs,R1,qp,nc,mi,Ma,pt,C1,P1,I1,L1,N1,D1,ro,co,mx,bp,Tp,Kp,ic,Gn,U1,Zp,O1,Jp,Mr,Up,$p,F1,B1,k1,jl,gx,_x,sn,jp,xx,z1,V1,Jh,vx,H1,Qp,em,G1,W1,X1,tm,ni,oo,kh,Y1,G0,q1,wp,Op,yx,K1,Wh,Z1,J1,Ep,Xn,$1,j1,Q1,eA,tA,nA,iA,sA,rA,oA,aA,lA,cA,uA,hA,fA,dA,pA,nm=Et(()=>{_i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ql={duration:.5,overwrite:!1,delay:0},Hi=1e8,It=1/Hi,Ap=Math.PI*2,t1=Ap/4,n1=0,X0=Math.sqrt,i1=Math.cos,s1=Math.sin,vn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Ks=function(e){return typeof e=="number"},Xh=function(e){return typeof e>"u"},Ts=function(e){return typeof e=="object"},gi=function(e){return e!==!1},Bp=function(){return typeof window<"u"},Oh=function(e){return Zt(e)||vn(e)},Y0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,r1=/random\([^)]+\)/g,o1=/,\s*/g,O0=/(?:-?\.?\d|\.)+/gi,kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zp=/[+-]=-?[.\d]+/,a1=/[^,'"\[\]\s]+/gi,l1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ai={},zh={},K0=function(e){return(zh=va(e,Ai))&&Xn},Yh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ec=function(e,t){return!t&&console.warn(e)},Z0=function(e,t){return e&&(Ai[e]=t)&&zh&&(zh[e]=t)||Ai},tc=function(){return 0},c1={suppressEvents:!0,isStart:!0,kill:!1},Fh={suppressEvents:!0,kill:!1},u1={suppressEvents:!0},Hp={},br=[],Cp={},pi={},Sp={},F0=30,Bh=[],Gp="",Wp=function(e){var t=e[0],n,i;if(Ts(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Bh.length;i--&&!Bh[i].targetTest(t););n=Bh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kp(e[i],n)))||e.splice(i,1);return e},Tr=function(e){return e._gsap||Wp(Gi(e))[0]._gsap},Xp=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Xh(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},lo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},h1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vh=function(){var e=br.length,t=br.slice(0),n,i;for(Cp={},br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yp=function(e){return!!(e._initted||e._startAt||e.add)},$0=function(e,t,n,i){br.length&&!Nn&&Vh(),e.render(t,n,i||!!(Nn&&t<0&&Yp(e))),br.length&&!Nn&&Vh()},j0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(a1).length<2?t:vn(e)?e.trim():e},Q0=function(e){return e},Ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},f1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},va=function(e,t){for(var n in t)e[n]=t[n];return e},B0=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ts(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Hh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Jl=function(e){var t=e.parent||Xt,n=e.keyframes?f1(Wn(e.keyframes)):Ri;if(gi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},d1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ex=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},qh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},so=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},p1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pp=function(e,t,n,i){return e._startAt&&(Nn?e._startAt.revert(Fh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},m1=function s(e){return!e||e._ts&&s(e.parent)},k0=function(e){return e._repeat?ya(e._tTime,e=e.duration()+e._rDelay)*e:0},ya=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Gh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kh=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},Zh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kh(e),n._dirty||so(n,e)),e},tx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gh(e.rawTime(),t),(!t._dur||sc(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),so(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},bs=function(e,t,n,i){return t.parent&&wr(t),t._start=Wt((Ks(n)?n:n||e!==Xt?Vi(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ex(e,t,"_first","_last",e._sort?"_start":0),Ip(t)||(e._recent=t),i||tx(e,t),e._ts<0&&Zh(e,e._tTime),e},nx=function(e,t){return(Ai.ScrollTrigger||Yh("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},ix=function(e,t,n,i,r){if($p(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&J0!==mi.frame)return br.push(e),e._lazy=[r,i],1},g1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ip=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_1=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&g1(e)&&!(!e._initted&&Ip(e))||(e._ts<0||e._dp._ts<0)&&!Ip(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=sc(0,e._tDur,t),u=ya(l,a),e._yoyo&&u&1&&(o=1-o),u!==ya(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Nn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&ix(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Pp(e,t,n,!0),e._onUpdate&&!n&&Ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&wr(e,1),!n&&!Nn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},x1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Sa=function(e,t,n,i){var r=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Wt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Zh(e,e._tTime=e._tDur*a),e.parent&&Kh(e),n||so(e.parent,e),e},z0=function(e){return e instanceof Gn?so(e):Sa(e,e._dur)},v1={_start:0,endTime:tc,totalDuration:tc},Vi=function s(e,t,n){var i=e.labels,r=e._recent||v1,o=e.duration()>=Hi?r.endTime(!1):e._dur,a,l,c;return vn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Wn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$l=function(e,t,n){var i=Ks(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gi(l.vars.inherit)&&l.parent;o.immediateRender=gi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new sn(t[0],o,t[r+1])},Er=function(e,t){return e||e===0?t(e):t},sc=function(e,t,n){return n<e?e:n>t?t:n},Dn=function(e,t){return!vn(e)||!(t=l1.exec(e))?"":t[1]},y1=function(e,t,n){return Er(n,function(i){return sc(e,t,i)})},Lp=[].slice,sx=function(e,t){return e&&Ts(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ts(e[0]))&&!e.nodeType&&e!==Ms},S1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return vn(i)&&!t||sx(i,1)?(r=n).push.apply(r,Gi(i)):n.push(i)})||n},Gi=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):vn(e)&&!n&&(Rp||!Ma())?Lp.call((t||Vp).querySelectorAll(e),0):Wn(e)?S1(e,n):sx(e)?Lp.call(e,0):e?[e]:[]},Np=function(e){return e=Gi(e)[0]||ec("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gi(t,n.querySelectorAll?n:n===e?ec("Invalid scope")||Vp.createElement("div"):e)}},rx=function(e){return e.sort(function(){return .5-Math.random()})},ox=function(e){if(Zt(e))return e;var t=Ts(e)?e:{each:e},n=ro(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return vn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,p){var _=(p||t).length,m=o[_],g,M,A,v,S,b,w,x,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!T){for(w=-Hi;w<(w=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=o[_]=[],g=l?Math.min(T,_)*u-.5:i%T,M=T===Hi?0:l?_*f/T-.5:i/T|0,w=0,x=Hi,b=0;b<_;b++)A=b%T-g,v=M-(b/T|0),m[b]=S=c?Math.abs(c==="y"?v:A):X0(A*A+v*v),S>w&&(w=S),S<x&&(x=S);i==="random"&&rx(m),m.max=w-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Dn(t.amount||t.each)||0,n=n&&_<0?D1(n):n}return _=(m[h]-m.min)/m.max||0,Wt(m.b+(n?n(_):_)*m.v)+m.u}},Dp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ks(n)?0:Dn(n))}},ax=function(e,t){var n=Wn(e),i,r;return!n&&Ts(e)&&(i=n=e.radius||Hi,e.values?(e=Gi(e.values),(r=!Ks(e[0]))&&(i*=i)):e=Dp(e.increment)),Er(t,n?Zt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Hi,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,r||u===o||Ks(o)?u:u+Dn(o)}:Dp(e))},lx=function(e,t,n,i){return Er(Wn(e)?!t:n===!0?!!(n=0):!i,function(){return Wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},M1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},b1=function(e,t){return function(n){return e(parseFloat(n))+(t||Dn(n))}},T1=function(e,t,n){return ux(e,t,0,1,n)},cx=function(e,t,n){return Er(n,function(i){return e[~~t(i)]})},w1=function s(e,t,n){var i=t-e;return Wn(e)?cx(e,s(0,e.length),t):Er(n,function(r){return(i+(r-e)%i)%i+e})},E1=function s(e,t,n){var i=t-e,r=i*2;return Wn(e)?cx(e,s(0,e.length-1),t):Er(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ba=function(e){return e.replace(r1,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(o1);return lx(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ux=function(e,t,n,i,r){var o=t-e,a=i-n;return Er(r,function(l){return n+((l-e)/o*a||0)})},A1=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=vn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Wn(e)&&!Wn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,r=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=va(Wn(e)?[]:{},e));if(!u){for(l in t)Zp.call(a,e,l,"get",t[l]);r=function(p){return em(p,a)||(o?e.p:e)}}}return Er(n,r)},V0=function(e,t,n){var i=e.labels,r=Hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ei=function(e,t,n){var i=e.vars,r=i[t],o=zt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&br.length&&Vh(),a&&(zt=a),u=l?r.apply(c,l):r.call(c),zt=o,u},Kl=function(e){return wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nn),e.progress()<1&&Ei(e,"onInterrupt"),e},hx=[],fx=function(e){if(e)if(e=!e.name&&e.default||e,Bp()||e.headless){var t=e.name,n=Zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:tc,render:em,add:Zp,kill:W1,modifier:G1,rawVars:0},o={targetTest:0,get:0,getSetter:Jh,aliases:{},register:0};if(Ma(),e!==i){if(pi[t])return;Ri(i,Ri(Hh(e,r),o)),va(i.prototype,va(r,Hh(e,o))),pi[i.prop=t]=i,e.targetTest&&(Bh.push(i),Hp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Z0(t,i),e.register&&e.register(Xn,i,ni)}else hx.push(e)},Pt=255,Zl={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Mp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},dx=function(e,t,n){var i=e?Ks(e)?[e>>16,e>>8&Pt,e&Pt]:0:Zl.black,r,o,a,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zl[e])i=Zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(O0),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Mp(l+1/3,r,o),i[1]=Mp(l,r,o),i[2]=Mp(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(kp),n&&i.length<4&&(i[3]=1),i}else i=e.match(O0)||Zl.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/Pt,o=i[1]/Pt,a=i[2]/Pt,f=Math.max(r,o,a),h=Math.min(r,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(o-a)/d+(o<a?6:0):f===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},px=function(e){var t=[],n=[],i=-1;return e.split(qs).forEach(function(r){var o=r.match(ao)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},H0=function(e,t,n){var i="",r=(e+i).match(qs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=dx(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=px(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qs,"1").split(ao),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(qs),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},qs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zl)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),R1=/hsl[a]?\(/,qp=function(e){var t=e.join(" "),n;if(qs.lastIndex=0,qs.test(t))return n=R1.test(t),e[1]=H0(e[1],n),e[0]=H0(e[0],n,px(e[1])),!0},mi=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,f,h,d,p=function _(m){var g=s()-i,M=m===!0,A,v,S,b;if((g>e||g<0)&&(n+=g-t),i+=g,S=i-n,A=S-o,(A>0||M)&&(b=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=A+(A>=r?4:r-A),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](S,h,b,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){q0&&(!Rp&&Bp()&&(Ms=Rp=window,Vp=Ms.document||{},Ai.gsap=Xn,(Ms.gsapVersions||(Ms.gsapVersions=[])).push(Xn.version),K0(zh||Ms.GreenSockGlobals||!Ms.gsap&&Ms||{}),hx.forEach(fx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},nc=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),nc=0,c=tc},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,g,M){var A=g?function(v,S,b,w){m(v,S,b,w),f.remove(A)}:m;return f.remove(m),a[M?"unshift":"push"](A),Ma(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),Ma=function(){return!nc&&mi.wake()},pt={},C1=/^[\d.\-M][\d.\-,\s]/,P1=/["']/g,I1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(P1,"").trim():+c,i=l.substr(a+1).trim();return t},L1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},N1=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[I1(t[1])]:L1(e).split(",").map(j0)):pt._CE&&C1.test(e)?pt._CE("",e):n},D1=function(e){return function(t){return 1-e(1-t)}},ro=function(e,t){return e&&(Zt(e)?e:pt[e]||N1(e))||t},co=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return ti(e,function(a){pt[a]=Ai[a]=r,pt[o=a.toLowerCase()]=n;for(var l in r)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=r[l]}),r},mx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Ap*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*s1((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mx(a);return r=Ap/r,l.config=function(c,u){return s(e,c,u)},l},Tp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:mx(n);return i.config=function(r){return s(e,r)},i};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;co(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;co("Elastic",bp("in"),bp("out"),bp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};co("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);co("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});co("Circ",function(s){return-(X0(1-s*s)-1)});co("Sine",function(s){return s===1?1:-i1(s*t1)+1});co("Back",Tp("in"),Tp("out"),Tp());pt.SteppedEase=pt.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((i*sc(0,o,a)|0)+r)*n}}};Ql.ease=pt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gp+=s+","+s+"Params,"});Kp=function(e,t){this.id=n1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xp,this.set=t?t.getSetter:Jh},ic=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sa(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),nc||mi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ma(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Zh(this,n),!r._dp||r.parent||tx(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+k0(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+k0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ya(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Gh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(sc(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Kh(this),p1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bs(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=u1);var i=Nn;return Nn=n,Yp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Nn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,z0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,z0(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vi(this,n),gi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gi(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-It)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Zt(n)?n:Q0,l=function(){var u=i.then;i.then=null,r&&r(),Zt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Kl(this)},s})();Ri(ic.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});Gn=(function(s){W0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gi(n.sortChildren),Xt&&bs(n.parent||Xt,Ys(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&nx(Ys(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return $l(0,arguments,this),this},t.from=function(i,r,o){return $l(1,arguments,this),this},t.fromTo=function(i,r,o,a){return $l(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Jl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new sn(i,r,Vi(this,o),1),this},t.call=function(i,r,o){return bs(this,sn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(i,o,Vi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Jl(o).immediateRender=gi(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,f){return a.startAt=o,Jl(a).immediateRender=gi(a.immediateRender),this.staggerTo(i,r,a,l,c,u,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,_,m,g,M,A,v,S,b,w;if(this!==Xt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,A=this._ts,g=!A,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(h=Wt(u%m),u===l?(_=this._repeat,h=c):(S=Wt(u/m),_=~~S,_&&_===S&&(h=c,_--),h>c&&(h=c)),S=ya(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),b&&_&1&&(h=c-h,w=1),_!==S&&!this._lock){var x=b&&S&1,T=x===(b&&_&1);if(_<S&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Wt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=x1(this,Wt(a),Wt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!S&&(Ei(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,o),h!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=-It);break}}d=p}else{d=this._last;for(var R=i<0?i:h;d;){if(p=d._prev,(d._act||R<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,o||Nn&&Yp(d)),h!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=R?-It:It);break}}d=p}}if(M&&!r&&(this.pause(),M.render(h>=a?0:-It)._zTime=h>=a?1:-1,this._ts))return this._start=v,Kh(this),this.render(i,r,o);this._onUpdate&&!r&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&wr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Ks(r)||(r=Vi(this,r,i)),!(i instanceof ic)){if(Wn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(vn(i))return this.addLabel(i,r);if(Zt(i))i=sn.delayedCall(0,i);else return this}return this!==i?bs(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return vn(i)?this.removeLabel(i):Zt(i)?this.killTweensOf(i):(i.parent===this&&qh(this,i),i===this._recent&&(this._recent=this._last),so(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Vi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=sn.delayedCall(0,r||tc,o);return a.data="isPause",this._hasPause=1,bs(this,a,Vi(this,i))},t.removePause=function(i){var r=this._first;for(i=Vi(this,i);r;)r._start===i&&r.data==="isPause"&&wr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Gi(i),l=this._first,c=Ks(r),u;l;)l instanceof sn?h1(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Vi(o,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=sn.to(o,Ri({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Sa(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},r));return h?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ri({startAt:{time:Vi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),V0(this,Vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),V0(this,Vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Wt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return so(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),so(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Hi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bs(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Sa(o,o===Xt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xt._ts&&($0(Xt,Gh(i,Xt)),J0=mi.frame),mi.frame>=F0){F0+=_i.autoSleep||120;var r=Xt._first;if((!r||!r._ts)&&_i.autoSleep&&mi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mi.sleep()}}},e})(ic);Ri(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});U1=function(e,t,n,i,r,o,a){var l=new ni(this._pt,e,t,0,1,Qp,null,r),c=0,u=0,f,h,d,p,_,m,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=ba(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(yp)||[];f=yp.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?lo(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=yp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zp.test(i)||g)&&(l.e=0),this._pt=l,l},Zp=function(e,t,n,i,r,o,a,l,c,u){Zt(i)&&(i=i(r||0,e,o));var f=e[t],h=n!=="get"?n:Zt(f)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Zt(f)?c?z1:xx:jp,p;if(vn(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(p=lo(h,i)+(Dn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Up)return!isNaN(h*i)&&i!==""?(p=new ni(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?H1:vx,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&Yh(t,i),U1.call(this,e,t,h,i,d,l||_i.stringFilter,c))},O1=function(e,t,n,i,r){if(Zt(e)&&(e=jl(e,r,t,n,i)),!Ts(e)||e.style&&e.nodeType||Wn(e)||Y0(e))return vn(e)?jl(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=jl(e[a],r,t,n,i);return o},Jp=function(e,t,n,i,r,o){var a,l,c,u;if(pi[e]&&(a=new pi[e]).init(r,a.rawVars?t[e]:O1(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ni(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==xa))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},$p=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,M=g&&g.data==="nested"?g.vars.targets:m,A=e._overwrite==="auto"&&!Fp,v=e.timeline,S=i.easeReverse||f,b,w,x,T,R,D,P,N,L,B,G,z,Z;if(v&&(!h||!r)&&(r="none"),e._ease=ro(r,Ql.ease),e._rEase=S&&(ro(S)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(N=m[0]?Tr(m[0]).harness:0,z=N&&i[N.prop],b=Hh(i,Hp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Fh:c1),_._lazy=0),o){if(wr(e._startAt=sn.set(m,Ri({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&gi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nn||!a&&!d)&&e._startAt.revert(Fh),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),x=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&gi(l),immediateRender:a,stagger:0,parent:g},b),z&&(x[N.prop]=z),wr(e._startAt=sn.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nn?e._startAt.revert(Fh):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&gi(l)||l&&!p,w=0;w<m.length;w++){if(R=m[w],P=R._gsap||Wp(m)[w]._gsap,e._ptLookup[w]=B={},Cp[P.id]&&br.length&&Vh(),G=M===m?w:M.indexOf(R),N&&(L=new N).init(R,z||b,e,G,M)!==!1&&(e._pt=T=new ni(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){B[H]=T}),L.priority&&(D=1)),!N||z)for(x in b)pi[x]&&(L=Jp(x,b,e,G,R,M))?L.priority&&(D=1):B[x]=T=Zp.call(e,R,x,"get",b[x],G,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(R,e._op[w]),A&&e._pt&&(Mr=e,Xt.killTweensOf(R,B,e.globalTime(t)),Z=!e.parent,Mr=0),e._pt&&l&&(Cp[P.id]=1)}D&&tm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&v.render(Hi,!0,!0)},F1=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Up=1,e.vars[t]="+=0",$p(e,a),Up=0,l?ec(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Jt(n)+Dn(f.e)),f.b&&(f.b=u.s+Dn(f.b))},B1=function(e,t){var n=e[0]?Tr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=va({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},k1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Wn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},jl=function(e,t,n,i,r){return Zt(e)?e.call(t,n,i,r):vn(e)&&~e.indexOf("random(")?ba(e):e},gx=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_x={};ti(gx+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return _x[s]=1});sn=(function(s){W0(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Jl(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Xt,M=(Wn(n)||Y0(n)?Ks(n[0]):"length"in i)?[n]:Gi(n),A,v,S,b,w,x,T,R;if(a._targets=M.length?Wp(M):ec("GSAP target "+n+" not found. https://gsap.com",!_i.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||h||Oh(c)||Oh(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Gn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),A.kill(),A.parent=A._dp=Ys(a),A._start=0,h||Oh(c)||Oh(u)){if(b=M.length,T=h&&ox(h),Ts(h))for(w in h)~gx.indexOf(w)&&(R||(R={}),R[w]=h[w]);for(v=0;v<b;v++)S=Hh(i,_x),S.stagger=0,D&&(S.easeReverse=D),R&&va(S,R),x=M[v],S.duration=+jl(c,Ys(a),v,x,M),S.delay=(+jl(u,Ys(a),v,x,M)||0)-a._delay,!h&&b===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),A.to(x,S,T?T(v,x,M):0),A._ease=pt.none;A.duration()?c=u=0:a.timeline=0}else if(p){Jl(Ri(A.vars.defaults,{ease:"none"})),A._ease=ro(p.ease||i.ease||"none");var P=0,N,L,B;if(Wn(p))p.forEach(function(G){return A.to(M,G,">")}),A.duration();else{S={};for(w in p)w==="ease"||w==="easeEach"||k1(w,p[w],S,p.easeEach);for(w in S)for(N=S[w].sort(function(G,z){return G.t-z.t}),P=0,v=0;v<N.length;v++)L=N[v],B={ease:L.e,duration:(L.t-(v?N[v-1].t:0))/100*c},B[w]=L.v,A.to(M,B,P),P+=B.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return d===!0&&!Fp&&(Mr=Ys(a),Xt.killTweensOf(M),Mr=0),bs(g,Ys(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Wt(g._time)&&gi(f)&&m1(Ys(a))&&g.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),m&&nx(Ys(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-It&&!u?l:i<It?0:i,h,d,p,_,m,g,M,A;if(!c)_1(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(h=Wt(f%_),f===l?(p=this._repeat,h=c):(m=Wt(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(h=c-h),m=ya(this._tTime,_),h===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(ix(this,u?i:h,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!r&&!m&&(Ei(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Pp(this,i,r,o),Ei(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ei(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Pp(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wr(this,1),!r&&!(u&&!a)&&(f||a||g)&&(Ei(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){nc||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$p(this,c),u=this._ease(c/this._dur),F1(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Zh(this,0),this.parent||ex(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Mr&&Mr.vars.overwrite!==!0)._first||Kl(this),this.parent&&o!==this.timeline.totalDuration()&&Sa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Gi(i):a,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!r||r==="all")&&d1(a,l))return r==="all"&&(this._pt=0),Kl(this);for(f=this._op=this._op||[],r!=="all"&&(vn(r)&&(_={},ti(r,function(M){return _[M]=1}),r=_),r=B1(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],r==="all"?(f[g]=r,p=h,d={}):(d=f[g]=f[g]||{},p=r);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&qh(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Kl(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return $l(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return $l(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Xt.killTweensOf(i,r,o)},e})(ic);Ri(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(s){sn[s]=function(){var e=new Gn,t=Lp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});jp=function(e,t,n){return e[t]=n},xx=function(e,t,n){return e[t](n)},z1=function(e,t,n,i){return e[t](i.fp,n)},V1=function(e,t,n){return e.setAttribute(t,n)},Jh=function(e,t){return Zt(e[t])?xx:Xh(e[t])&&e.setAttribute?V1:jp},vx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},H1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},em=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},G1=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},W1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},X1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tm=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},ni=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||vx,this.d=l||this,this.set=c||jp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=X1,this.m=n,this.mt=r,this.tween=i},s})();ti(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Hp[s]=1});Ai.TweenMax=Ai.TweenLite=sn;Ai.TimelineLite=Ai.TimelineMax=Gn;Xt=new Gn({sortChildren:!1,defaults:Ql,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=qp;oo=[],kh={},Y1=[],G0=0,q1=0,wp=function(e){return(kh[e]||Y1).map(function(t){return t()})},Op=function(){var e=Date.now(),t=[];e-G0>2&&(wp("matchMediaInit"),oo.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ms.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),wp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),G0=e,wp("matchMedia"))},yx=(function(){function s(t,n){this.selector=n&&Np(n),this.data=[],this._r=[],this.isReverted=!1,this.id=q1++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Zt(n)&&(r=i,i=n,n=Zt);var o=this,a=function(){var c=zt,u=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Np(r)),zt=o,f=i.apply(o,arguments),Zt(f)&&o._r.push(f),zt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=zt;zt=null,n(this),zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=oo.length;o--;)oo[o].id===this.id&&oo.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),K1=(function(){function s(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ts(n)||(n={matches:n});var o=new yx(0,r||this.scope),a=o.conditions={},l,c,u;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ms.matchMedia(n[c]),l&&(oo.indexOf(o)<0&&oo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Op):l.addEventListener("change",Op)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Wh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return fx(i)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){vn(e)&&(e=Gi(e)[0]);var r=Tr(e||{}).get,o=n?Q0:j0;return n==="native"&&(n=""),e&&(t?o((pi[t]&&pi[t].get||r)(e,t,n,i)):function(a,l,c){return o((pi[a]&&pi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Gi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var o=pi[t],a=Tr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;xa._pt=0,f.init(e,n?u+n:u,xa,0,[e]),f.render(1,f),xa._pt&&em(1,xa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Xn.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ro(e.ease,Ql.ease)),B0(Ql,e||{})},config:function(e){return B0(_i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!pi[a]&&!Ai[a]&&ec(t+" effect requires "+a+" plugin.")}),Sp[t]=function(a,l,c){return n(Gi(a),Ri(l||{},r),c)},o&&(Gn.prototype[t]=function(a,l,c){return this.add(Sp[t](a,Ts(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=ro(t)},parseEase:function(e,t){return arguments.length?ro(e,t):pt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),i,r;for(n.smoothChildTiming=gi(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&bs(n,i,i._start-i._delay),i=r;return bs(Xt,n,0),n},context:function(e,t){return e?new yx(e,t):zt},matchMedia:function(e){return new K1(e)},matchMediaRefresh:function(){return oo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Op()},addEventListener:function(e,t){var n=kh[e]||(kh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:w1,wrapYoyo:E1,distribute:ox,random:lx,snap:ax,normalize:T1,getUnit:Dn,clamp:y1,splitColor:dx,toArray:Gi,selector:Np,mapRange:ux,pipe:M1,unitize:b1,interpolate:A1,shuffle:rx},install:K0,effects:Sp,ticker:mi,updateRoot:Gn.updateRoot,plugins:pi,globalTimeline:Xt,core:{PropTween:ni,globals:Z0,Tween:sn,Timeline:Gn,Animation:ic,getCache:Tr,_removeLinkedListItem:qh,reverting:function(){return Nn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return Fp=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Wh[s]=sn[s]});mi.add(Gn.updateRoot);xa=Wh.to({},{duration:0});Z1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},J1=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Z1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ep=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(vn(r)&&(l={},ti(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}J1(a,r)}}}},Xn=Wh.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ep("roundProps",Dp),Ep("modifiers"),Ep("snap",ax))||Wh;sn.version=Gn.version=Xn.version="3.15.0";q0=1;Bp()&&Ma();$1=pt.Power0,j1=pt.Power1,Q1=pt.Power2,eA=pt.Power3,tA=pt.Power4,nA=pt.Linear,iA=pt.Quad,sA=pt.Cubic,rA=pt.Quart,oA=pt.Quint,aA=pt.Strong,lA=pt.Elastic,cA=pt.Back,uA=pt.SteppedEase,hA=pt.Bounce,fA=pt.Sine,dA=pt.Expo,pA=pt.Circ});var Sx,Ar,wa,lm,po,mA,Mx,cm,gA,Js,fo,Ea,Ta,bx,um,_A,xA,ws,sm,vA,yA,SA,MA,Ix,Lx,bA,TA,wA,EA,AA,RA,Yt,xi,CA,Nx,PA,Dx,Ux,rm,Ci,Tx,Aa,om,wx,Ex,Ox,Fx,Cr,Rr,Ax,IA,Pr,Zs,LA,Rx,NA,DA,$h,oc,Bx,kx,Cx,hm,am,ac,jh,im,UA,uo,rc,ho,zx,OA,FA,Px,BA,fm,Vx=Et(()=>{nm();gA=function(){return typeof window<"u"},Js={},fo=180/Math.PI,Ea=Math.PI/180,Ta=Math.atan2,bx=1e8,um=/([A-Z])/g,_A=/(left|right|width|margin|padding|x)/i,xA=/[\s,\(]\S/,ws={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ix=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bA=function(e,t,n){return e.style[t]=n},TA=function(e,t,n){return e.style.setProperty(t,n)},wA=function(e,t,n){return e._gsap[t]=n},EA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},AA=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},RA=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Yt="transform",xi=Yt+"Origin",CA=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Js&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ws[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Zs(i,a)}):this.tfm[e]=o.x?o[e]:Zs(i,e),e===xi&&(this.tfm.zOrigin=o.zOrigin);else return ws.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=Yt}(r||t)&&this.props.push(e,t,r[e])},Nx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},PA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(um,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=cm(),(!r||!r.isStart)&&!n[Yt]&&(Nx(n),i.zOrigin&&n[xi]&&(n[xi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dx=function(e,t){var n={target:e,props:[],revert:PA,save:CA};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rm=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},Ci=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(um,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Aa(t)||t,1)||""},Tx="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,n){var i=t||po,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Tx[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Tx[o]:"")+e},om=function(){gA()&&window.document&&(Sx=window,Ar=Sx.document,wa=Ar.documentElement,po=rm("div")||{style:{}},mA=rm("div"),Yt=Aa(Yt),xi=Yt+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ux=!!Aa("perspective"),cm=Xn.core.reverting,lm=1)},wx=function(e){var t=e.ownerSVGElement,n=rm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),wa.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),wa.removeChild(n),r},Ex=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ox=function(e){var t,n;try{t=e.getBBox()}catch{t=wx(e),n=1}return t&&(t.width||t.height)||n||(t=wx(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ex(e,["x","cx","x1"])||0,y:+Ex(e,["y","cy","y1"])||0,width:0,height:0}:t},Fx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ox(e))},Cr=function(e,t){if(t){var n=e.style,i;t in Js&&t!==xi&&(t=Yt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(um,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,i,r,o){var a=new ni(e._pt,t,n,0,1,o?Lx:Ix);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Ax={deg:1,rad:1,turn:1},IA={grid:1,flex:1},Pr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=po.style,l=_A.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,_,m,g;if(i===o||!r||Ax[i]||Ax[o])return r;if(o!=="px"&&!h&&(r=s(e,t,n,"px")),g=e.getCTM&&Fx(e),(d||o==="%")&&(Js[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Jt(d?r/p*f:r/100*p);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ar||!_.appendChild)&&(_=Ar.body),m=_._gsap,m&&d&&m.width&&l&&m.time===mi.time&&!m.uncache)return Jt(r/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,p=e[u],M?e.style[t]=M:Cr(e,t)}else(d||o==="%")&&!IA[Ci(_,"display")]&&(a.position=Ci(e,"position")),_===e&&(a.position="static"),_.appendChild(po),p=po[u],_.removeChild(po),a.position="absolute";return l&&d&&(m=Tr(_),m.time=mi.time,m.width=_[u]),Jt(h?p*r/f:p&&r?f/p*r:0)},Zs=function(e,t,n,i){var r;return lm||om(),t in ws&&t!=="transform"&&(t=ws[t],~t.indexOf(",")&&(t=t.split(",")[0])),Js[t]&&t!=="transform"?(r=ac(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:jh(Ci(e,xi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=$h[t]&&$h[t](e,t,n)||Ci(e,t)||Xp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Pr(e,t,r,n)+n:r},LA=function(e,t,n,i){if(!n||n==="none"){var r=Aa(t,e,1),o=r&&Ci(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Ci(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,Qp),l=0,c=0,u,f,h,d,p,_,m,g,M,A,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ci(e,t)||i,_?e.style[t]=_:Cr(e,t)),u=[n,i],qp(u),n=u[0],i=u[1],h=n.match(ao)||[],S=i.match(ao)||[],S.length){for(;f=ao.exec(i);)m=f[0],M=i.substring(l,f.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=lo(d,m)+v),g=parseFloat(m),A=m.substr((g+"").length),l=ao.lastIndex-A.length,A||(A=A||_i.units[t]||v,l===i.length&&(i+=A,a.e+=A)),v!==A&&(d=Pr(e,t,_,A)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Lx:Ix;return zp.test(i)&&(a.e=0),this._pt=a,a},Rx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rx[n]||n,t[1]=Rx[i]||i,t.join(" ")},DA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Js[a]&&(l=1,a=a==="transformOrigin"?xi:Yt),Cr(n,a);l&&(Cr(n,Yt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ac(n,1),o.uncache=1,Nx(i)))}},$h={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,DA);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},oc=[1,0,0,1,0,0],Bx={},kx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cx=function(e){var t=Ci(e,Yt);return kx(t)?oc:t.substr(7).match(kp).map(Jt)},hm=function(e,t){var n=e._gsap||Tr(e),i=e.style,r=Cx(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?oc:r):(r===oc&&!e.offsetParent&&e!==wa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,wa.appendChild(e)),r=Cx(e),l?i.display=l:Cr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):wa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},am=function(e,t,n,i,r,o){var a=e._gsap,l=r||hm(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],A=t.split(" "),v=parseFloat(A[0])||0,S=parseFloat(A[1])||0,b,w,x,T;n?l!==oc&&(w=d*m-p*_)&&(x=v*(m/w)+S*(-_/w)+(_*M-m*g)/w,T=v*(-p/w)+S*(d/w)-(d*M-p*g)/w,v=x,S=T):(b=Ox(e),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),S=b.y+(~(A[1]||A[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(g=v-c,M=S-u,a.xOffset=f+(g*d+M*_)-g,a.yOffset=h+(g*p+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[xi]="0px 0px",o&&(Rr(o,a,"xOrigin",c,v),Rr(o,a,"yOrigin",u,S),Rr(o,a,"xOffset",f,a.xOffset),Rr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},ac=function(e,t){var n=e._gsap||new Kp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,xi)||"0",u,f,h,d,p,_,m,g,M,A,v,S,b,w,x,T,R,D,P,N,L,B,G,z,Z,H,C,$,me,ye,Ie,Le;return u=f=h=_=m=g=M=A=v=0,d=p=1,n.svg=!!(e.getCTM&&Fx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),i.scale=i.rotate=i.translate="none"),w=hm(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),am(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,b=n.yOrigin||0,w!==oc&&(D=w[0],P=w[1],N=w[2],L=w[3],u=B=w[4],f=G=w[5],w.length===6?(d=Math.sqrt(D*D+P*P),p=Math.sqrt(L*L+N*N),_=D||P?Ta(P,D)*fo:0,M=N||L?Ta(N,L)*fo+_:0,M&&(p*=Math.abs(Math.cos(M*Ea))),n.svg&&(u-=S-(S*D+b*N),f-=b-(S*P+b*L))):(Le=w[6],ye=w[7],C=w[8],$=w[9],me=w[10],Ie=w[11],u=w[12],f=w[13],h=w[14],x=Ta(Le,me),m=x*fo,x&&(T=Math.cos(-x),R=Math.sin(-x),z=B*T+C*R,Z=G*T+$*R,H=Le*T+me*R,C=B*-R+C*T,$=G*-R+$*T,me=Le*-R+me*T,Ie=ye*-R+Ie*T,B=z,G=Z,Le=H),x=Ta(-N,me),g=x*fo,x&&(T=Math.cos(-x),R=Math.sin(-x),z=D*T-C*R,Z=P*T-$*R,H=N*T-me*R,Ie=L*R+Ie*T,D=z,P=Z,N=H),x=Ta(P,D),_=x*fo,x&&(T=Math.cos(x),R=Math.sin(x),z=D*T+P*R,Z=B*T+G*R,P=P*T-D*R,G=G*T-B*R,D=z,B=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Jt(Math.sqrt(D*D+P*P+N*N)),p=Jt(Math.sqrt(G*G+Le*Le)),x=Ta(B,G),M=Math.abs(x)>2e-4?x*fo:0,v=Ie?1/(Ie<0?-Ie:Ie):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kx(Ci(e,Yt)),z&&e.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Jt(d),n.scaleY=Jt(p),n.rotation=Jt(_)+a,n.rotationX=Jt(m)+a,n.rotationY=Jt(g)+a,n.skewX=M+a,n.skewY=A+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[xi]=jh(c)),n.xOffset=n.yOffset=0,n.force3D=_i.force3D,n.renderTransform=n.svg?OA:Ux?zx:UA,n.uncache=0,n},jh=function(e){return(e=e.split(" "))[0]+" "+e[1]},im=function(e,t,n){var i=Dn(t);return Jt(parseFloat(t)+parseFloat(Pr(e,"x",n+"px",i)))+i},UA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zx(e,t)},uo="0deg",rc="0px",ho=") ",zx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,M=n.target,A=n.zOrigin,v="",S=g==="auto"&&e&&e!==1||g===!0;if(A&&(f!==uo||u!==uo)){var b=parseFloat(u)*Ea,w=Math.sin(b),x=Math.cos(b),T;b=parseFloat(f)*Ea,T=Math.cos(b),o=im(M,o,w*T*-A),a=im(M,a,-Math.sin(b)*-A),l=im(M,l,x*T*-A+A)}m!==rc&&(v+="perspective("+m+ho),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||o!==rc||a!==rc||l!==rc)&&(v+=l!==rc||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ho),c!==uo&&(v+="rotate("+c+ho),u!==uo&&(v+="rotateY("+u+ho),f!==uo&&(v+="rotateX("+f+ho),(h!==uo||d!==uo)&&(v+="skew("+h+", "+d+ho),(p!==1||_!==1)&&(v+="scale("+p+", "+_+ho),M.style[Yt]=v||"translate(0, 0)"},OA=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,M=n.forceCSS,A=parseFloat(o),v=parseFloat(a),S,b,w,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ea,c*=Ea,S=Math.cos(l)*f,b=Math.sin(l)*f,w=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Ea,T=Math.tan(c-u),T=Math.sqrt(1+T*T),w*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),S*=T,b*=T)),S=Jt(S),b=Jt(b),w=Jt(w),x=Jt(x)):(S=f,x=h,b=w=0),(A&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(A=Pr(d,"x",o,"px"),v=Pr(d,"y",a,"px")),(p||_||m||g)&&(A=Jt(A+p-(p*S+_*w)+m),v=Jt(v+_-(p*b+_*x)+g)),(i||r)&&(T=d.getBBox(),A=Jt(A+i/100*T.width),v=Jt(v+r/100*T.height)),T="matrix("+S+","+b+","+w+","+x+","+A+","+v+")",d.setAttribute("transform",T),M&&(d.style[Yt]=T)},FA=function(e,t,n,i,r){var o=360,a=vn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?fo:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*bx)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*bx)%o-~~(c/o)*o)),e._pt=h=new ni(e._pt,t,n,i,c,vA),h.e=u,h.u="deg",e._props.push(n),h},Px=function(e,t){for(var n in t)e[n]=t[n];return e},BA=function(e,t,n){var i=Px({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Yt]=t,a=ac(n,1),Cr(n,Yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Yt],o[Yt]=t,a=ac(n,1),o[Yt]=c);for(l in Js)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=Dn(c),p=Dn(u),f=d!==p?Pr(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new ni(e._pt,a,l,f,h-f,sm),e._pt.u=p||0,e._props.push(l));Px(a,i)};ti("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});$h[e>1?"border"+s:s]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(p){return Zs(a,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});fm={name:"css",register:om,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,M,A,v,S,b,w,x,T;lm||om(),this.styles=this.styles||Dx(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(pi[_]&&Jp(_,t,n,i,e,r)))){if(d=typeof u,p=$h[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ba(u)),p)p(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",qs.lastIndex=0,qs.test(c)||(m=Dn(c),g=Dn(u),g?m!==g&&(c=Pr(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],vn(c)&&~c.indexOf("random(")&&(c=ba(c)),Dn(c+"")||c==="auto"||(c+=_i.units[_]||Dn(Zs(e,_))||""),(c+"").charAt(1)==="="&&(c=Zs(e,_))):c=Zs(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in ws&&(_==="autoAlpha"&&(h===1&&Zs(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Rr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ws[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Js,A){if(this.styles.save(_),T=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Ci(e,"perspective"),R?e.style.perspective=R:Cr(e,"perspective")}f=parseFloat(u)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||ac(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new ni(this._pt,a,Yt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new ni(this._pt,S,"scaleY",S.scaleY,(M?lo(S.scaleY,M+f):f)-S.scaleY||0,sm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(xi,0,a[xi]),u=NA(u),S.svg?am(e,u,0,b,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&Rr(this,S,"zOrigin",S.zOrigin,g),Rr(this,a,_,jh(c),jh(u)));continue}else if(_==="svgOrigin"){am(e,u,1,b,0,this);continue}else if(_ in Bx){FA(this,S,_,h,M?lo(h,M+u):u);continue}else if(_==="smoothOrigin"){Rr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){BA(this,u,e);continue}}else _ in a||(_=Aa(_)||_);if(A||(f||f===0)&&(h||h===0)&&!xA.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),g=Dn(u)||(_ in _i.units?_i.units[_]:m),m!==g&&(h=Pr(e,_,c,g)),this._pt=new ni(this._pt,A?S:a,_,h,(M?lo(h,M+f):f)-h,!A&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?MA:sm),this._pt.u=g||0,A&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=SA):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=yA);else if(_ in a)LA.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,r);else if(_!=="parseTransform"){Yh(_,u);continue}A||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}w&&tm(this)},render:function(e,t){if(t.tween._time||!cm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zs,aliases:ws,getSetter:function(e,t,n){var i=ws[t];return i&&i.indexOf(",")<0&&(t=i),t in Js&&t!==xi&&(e._gsap.x||Zs(e,"x"))?n&&Mx===n?t==="scale"?EA:wA:(Mx=n||{})&&(t==="scale"?AA:RA):e.style&&!Xh(e.style[t])?bA:~t.indexOf("-")?TA:Jh(e,t)},core:{_removeProperty:Cr,_getMatrix:hm}};Xn.utils.checkPrefix=Aa;Xn.core.getStyleSaver=Dx;(function(s,e,t,n){var i=ti(s+","+e+","+t,function(r){Js[r]=1});ti(e,function(r){_i.units[r]="deg",Bx[r]=1}),ws[i[13]]=s+","+e,ti(n,function(r){var o=r.split(":");ws[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_i.units[s]="px"});Xn.registerPlugin(fm)});var Tn,y2,Hx=Et(()=>{nm();Vx();Tn=Xn.registerPlugin(fm)||Xn,y2=Tn.core.Tween});function Gx(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function kA(s,e,t){return e&&Gx(s.prototype,e),t&&Gx(s,t),s}var Un,tf,zA,Pi,Ir,Lr,Ca,Xx,mo,Pa,Yx,$s,cs,qx,Kx,Zx,Ra,ot,us,cc,dm,VA,Qs,uc,si,ii,Qh,ef,pm,nf,Yn,dn,ri,HA,js,sf,lc,Wx,Jx,$x,$t,jx=Et(()=>{Kx=function(){return Un||typeof window<"u"&&(Un=window.gsap)&&Un.registerPlugin&&Un},Zx=1,Ra=[],ot=[],us=[],cc=Date.now,dm=function(e,t){return t},VA=function(){var e=Pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,us),ot=n,us=i,dm=function(o,a){return t[o](a)}},Qs=function(e,t){return~us.indexOf(e)&&us[us.indexOf(e)+1][t]},uc=function(e){return!!~Yx.indexOf(e)},si=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},ii=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qh="scrollLeft",ef="scrollTop",pm=function(){return $s&&$s.isPressed||ot.cache++},nf=function(e,t){var n=function i(r){if(r||r===0){Zx&&(Pi.history.scrollRestoration="manual");var o=$s&&$s.isPressed;r=i.v=Math.round(r)||($s&&$s.iOS?1:0),e(r),i.cacheID=ot.cache,o&&dm("ss",r)}else(t||ot.cache!==i.cacheID||dm("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Yn={s:Qh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nf(function(s){return arguments.length?Pi.scrollTo(s,dn.sc()):Pi.pageXOffset||Ir[Qh]||Lr[Qh]||Ca[Qh]||0})},dn={s:ef,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:nf(function(s){return arguments.length?Pi.scrollTo(Yn.sc(),s):Pi.pageYOffset||Ir[ef]||Lr[ef]||Ca[ef]||0})},ri=function(e,t){return(t&&t._ctx&&t._ctx.selector||Un.utils.toArray)(e)[0]||(typeof e=="string"&&Un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},HA=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},js=function(e,t){var n=t.s,i=t.sc;uc(e)&&(e=Ir.scrollingElement||Lr);var r=ot.indexOf(e),o=i===dn.sc?1:2;!~r&&(r=ot.push(e)-1),ot[r+o]||si(e,"scroll",pm);var a=ot[r+o],l=a||(ot[r+o]=nf(Qs(e,n),!0)||(uc(e)?i:nf(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Un.getProperty(e,"scrollBehavior")==="smooth"),l},sf=function(e,t,n){var i=e,r=e,o=cc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=cc();_||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},h=function(p){var _=a,m=r,g=cc();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},lc=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Jx=function(){Pa=Un.core.globals().ScrollTrigger,Pa&&Pa.core&&VA()},$x=function(e){return Un=e||Kx(),!tf&&Un&&typeof document<"u"&&document.body&&(Pi=window,Ir=document,Lr=Ir.documentElement,Ca=Ir.body,Yx=[Pi,Ir,Lr,Ca],zA=Un.utils.clamp,qx=Un.core.context||function(){},mo="onpointerenter"in Ca?"pointer":"mouse",Xx=$t.isTouch=Pi.matchMedia&&Pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,cs=$t.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zx=0},500),tf=1),Pa||Jx(),tf};Yn.op=dn;ot.cache=0;$t=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){tf||$x(Un)||console.warn("Please gsap.registerPlugin(Observer)"),Pa||Jx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,M=n.onDrag,A=n.onPress,v=n.onRelease,S=n.onRight,b=n.onLeft,w=n.onUp,x=n.onDown,T=n.onChangeX,R=n.onChangeY,D=n.onChange,P=n.onToggleX,N=n.onToggleY,L=n.onHover,B=n.onHoverEnd,G=n.onMove,z=n.ignoreCheck,Z=n.isNormalizer,H=n.onGestureStart,C=n.onGestureEnd,$=n.onWheel,me=n.onEnable,ye=n.onDisable,Ie=n.onClick,Le=n.scrollSpeed,Xe=n.capture,J=n.allowClicks,ee=n.lockAxis,xe=n.onLockAxis;this.target=a=ri(a)||Lr,this.vars=n,d&&(d=Un.utils.toArray(d)),i=i||1e-9,r=r||0,p=p||1,Le=Le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Pi.getComputedStyle(Ca).lineHeight)||22);var Ge,ge,Ve,We,De,Ke,nt,W=this,lt=0,Tt=0,Vt=n.passive||!u&&n.passive!==!1,Ze=js(a,Yn),_t=js(a,dn),k=Ze(),Bt=_t(),Ye=~o.indexOf("touch")&&!~o.indexOf("pointer")&&cs[0]==="pointerdown",I=uc(a),y=a.ownerDocument||Ir,V=[0,0,0],Y=[0,0,0],j=0,ce=function(){return j=cc()},oe=function(se,Be){return(W.event=se)&&d&&HA(se.target,d)||Be&&Ye&&se.pointerType!=="touch"||z&&z(se,Be)},Q=function(){W._vx.reset(),W._vy.reset(),ge.pause(),f&&f(W)},ne=function(){var se=W.deltaX=Wx(V),Be=W.deltaY=Wx(Y),re=Math.abs(se)>=i,ze=Math.abs(Be)>=i;D&&(re||ze)&&D(W,se,Be,V,Y),re&&(S&&W.deltaX>0&&S(W),b&&W.deltaX<0&&b(W),T&&T(W),P&&W.deltaX<0!=lt<0&&P(W),lt=W.deltaX,V[0]=V[1]=V[2]=0),ze&&(x&&W.deltaY>0&&x(W),w&&W.deltaY<0&&w(W),R&&R(W),N&&W.deltaY<0!=Tt<0&&N(W),Tt=W.deltaY,Y[0]=Y[1]=Y[2]=0),(We||Ve)&&(G&&G(W),Ve&&(m&&Ve===1&&m(W),M&&M(W),Ve=0),We=!1),Ke&&!(Ke=!1)&&xe&&xe(W),De&&($(W),De=!1),Ge=0},fe=function(se,Be,re){V[re]+=se,Y[re]+=Be,W._vx.update(se),W._vy.update(Be),c?Ge||(Ge=requestAnimationFrame(ne)):ne()},Ee=function(se,Be){ee&&!nt&&(W.axis=nt=Math.abs(se)>Math.abs(Be)?"x":"y",Ke=!0),nt!=="y"&&(V[2]+=se,W._vx.update(se,!0)),nt!=="x"&&(Y[2]+=Be,W._vy.update(Be,!0)),c?Ge||(Ge=requestAnimationFrame(ne)):ne()},de=function(se){if(!oe(se,1)){se=lc(se,u);var Be=se.clientX,re=se.clientY,ze=Be-W.x,Ae=re-W.y,$e=W.isDragging;W.x=Be,W.y=re,($e||(ze||Ae)&&(Math.abs(W.startX-Be)>=r||Math.abs(W.startY-re)>=r))&&(Ve||(Ve=$e?2:1),$e||(W.isDragging=!0),Ee(ze,Ae))}},he=W.onPress=function(ae){oe(ae,1)||ae&&ae.button||(W.axis=nt=null,ge.pause(),W.isPressed=!0,ae=lc(ae),lt=Tt=0,W.startX=W.x=ae.clientX,W.startY=W.y=ae.clientY,W._vx.reset(),W._vy.reset(),si(Z?a:y,cs[1],de,Vt,!0),W.deltaX=W.deltaY=0,A&&A(W))},le=W.onRelease=function(ae){if(!oe(ae,1)){ii(Z?a:y,cs[1],de,!0);var se=!isNaN(W.y-W.startY),Be=W.isDragging,re=Be&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),ze=lc(ae);!re&&se&&(W._vx.reset(),W._vy.reset(),u&&J&&Un.delayedCall(.08,function(){if(cc()-j>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(y.createEvent){var Ae=y.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,Pi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(Ae)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&Be&&!Z&&ge.restart(!0),Ve&&ne(),g&&Be&&g(W),v&&v(W,re)}},Ue=function(se){return se.touches&&se.touches.length>1&&(W.isGesturing=!0)&&H(se,W.isDragging)},He=function(){return(W.isGesturing=!1)||C(W)},U=function(se){if(!oe(se)){var Be=Ze(),re=_t();fe((Be-k)*Le,(re-Bt)*Le,1),k=Be,Bt=re,f&&ge.restart(!0)}},ue=function(se){if(!oe(se)){se=lc(se,u),$&&(De=!0);var Be=(se.deltaMode===1?l:se.deltaMode===2?Pi.innerHeight:1)*p;fe(se.deltaX*Be,se.deltaY*Be,0),f&&!Z&&ge.restart(!0)}},te=function(se){if(!oe(se)){var Be=se.clientX,re=se.clientY,ze=Be-W.x,Ae=re-W.y;W.x=Be,W.y=re,We=!0,f&&ge.restart(!0),(ze||Ae)&&Ee(ze,Ae)}},pe=function(se){W.event=se,L(W)},ve=function(se){W.event=se,B(W)},ie=function(se){return oe(se)||lc(se,u)&&Ie(W)};ge=W._dc=Un.delayedCall(h||.25,Q).pause(),W.deltaX=W.deltaY=0,W._vx=sf(0,50,!0),W._vy=sf(0,50,!0),W.scrollX=Ze,W.scrollY=_t,W.isDragging=W.isGesturing=W.isPressed=!1,qx(this),W.enable=function(ae){return W.isEnabled||(si(I?y:a,"scroll",pm),o.indexOf("scroll")>=0&&si(I?y:a,"scroll",U,Vt,Xe),o.indexOf("wheel")>=0&&si(a,"wheel",ue,Vt,Xe),(o.indexOf("touch")>=0&&Xx||o.indexOf("pointer")>=0)&&(si(a,cs[0],he,Vt,Xe),si(y,cs[2],le),si(y,cs[3],le),J&&si(a,"click",ce,!0,!0),Ie&&si(a,"click",ie),H&&si(y,"gesturestart",Ue),C&&si(y,"gestureend",He),L&&si(a,mo+"enter",pe),B&&si(a,mo+"leave",ve),G&&si(a,mo+"move",te)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=We=Ve=!1,W._vx.reset(),W._vy.reset(),k=Ze(),Bt=_t(),ae&&ae.type&&he(ae),me&&me(W)),W},W.disable=function(){W.isEnabled&&(Ra.filter(function(ae){return ae!==W&&uc(ae.target)}).length||ii(I?y:a,"scroll",pm),W.isPressed&&(W._vx.reset(),W._vy.reset(),ii(Z?a:y,cs[1],de,!0)),ii(I?y:a,"scroll",U,Xe),ii(a,"wheel",ue,Xe),ii(a,cs[0],he,Xe),ii(y,cs[2],le),ii(y,cs[3],le),ii(a,"click",ce,!0),ii(a,"click",ie),ii(y,"gesturestart",Ue),ii(y,"gestureend",He),ii(a,mo+"enter",pe),ii(a,mo+"leave",ve),ii(a,mo+"move",te),W.isEnabled=W.isPressed=W.isDragging=!1,ye&&ye(W))},W.kill=W.revert=function(){W.disable();var ae=Ra.indexOf(W);ae>=0&&Ra.splice(ae,1),$s===W&&($s=0)},Ra.push(W),Z&&uc(a)&&($s=W),W.enable(_)},kA(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();$t.version="3.15.0";$t.create=function(s){return new $t(s)};$t.register=$x;$t.getAll=function(){return Ra.slice()};$t.getById=function(s){return Ra.filter(function(e){return e.vars.id===s})[0]};Kx()&&Un.registerPlugin($t)});var we,Da,ut,bt,Ni,yt,Rm,yf,Tc,_c,fc,rf,qn,bf,Sm,ai,Qx,ev,Ua,gv,mm,_v,oi,Mm,xv,vv,Nr,bm,Cm,Oa,Pm,xc,Tm,gm,of,Kn,_m,Yi,dc,tv,nv,GA,iv,sv,Es,pc,yv,Sv,So,Mv,bv,WA,XA,As,af,Li,Zn,mc,go,hc,Ia,La,Tv,wv,Im,Lm,xo,vo,vc,yc,Sc,Mc,pn,Wi,Ba,Nm,yn,Xi,YA,rv,er,Sf,Ev,qA,Dm,KA,lf,En,wn,cf,ov,uf,Mf,mf,hf,gf,at,wm,wc,av,Na,xm,gc,Mo,ZA,Av,bo,Ii,Rv,Cv,Um,Pv,li,yo,lv,JA,Iv,cv,_o,Em,_f,bc,tr,Am,xf,$A,vm,jA,Fa,ff,QA,vf,uv,eR,hv,Lv,df,fv,Qe,dv,ym,pf,tR,Nv,nR,pv,mv,iR,Dv=Et(()=>{jx();of=1,Kn=Date.now,_m=Kn(),Yi=0,dc=0,tv=function(e,t,n){var i=Li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},nv=function(e,t){return t&&(!Li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},GA=function s(){return dc&&requestAnimationFrame(s)},iv=function(){return bf=1},sv=function(){return bf=0},Es=function(e){return e},pc=function(e){return Math.round(e*1e5)/1e5||0},yv=function(){return typeof window<"u"},Sv=function(){return we||yv()&&(we=window.gsap)&&we.registerPlugin&&we},So=function(e){return!!~Rm.indexOf(e)},Mv=function(e){return(e==="Height"?Pm:ut["inner"+e])||Ni["client"+e]||yt["client"+e]},bv=function(e){return Qs(e,"getBoundingClientRect")||(So(e)?function(){return vf.width=ut.innerWidth,vf.height=Pm,vf}:function(){return er(e)})},WA=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Qs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Mv(r):e["client"+r])||0}},XA=function(e,t){return!t||~us.indexOf(e)?bv(e):function(){return vf}},As=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Qs(e,n))?o()-bv(e)()[r]:So(e)?(Ni[n]||yt[n])-Mv(i):e[n]-e["offset"+i])},af=function(e,t){for(var n=0;n<Ua.length;n+=3)(!t||~t.indexOf(Ua[n+1]))&&e(Ua[n],Ua[n+1],Ua[n+2])},Li=function(e){return typeof e=="string"},Zn=function(e){return typeof e=="function"},mc=function(e){return typeof e=="number"},go=function(e){return typeof e=="object"},hc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ia=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},La=Math.abs,Tv="left",wv="top",Im="right",Lm="bottom",xo="width",vo="height",vc="Right",yc="Left",Sc="Top",Mc="Bottom",pn="padding",Wi="margin",Ba="Width",Nm="Height",yn="px",Xi=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},YA=function(e){var t=Xi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rv=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&Xi(e)[Sm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ev=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},qA=function(e){return function(t){return we.utils.snap(Ev(e),t)}},Dm=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},KA=function(e){return function(t,n){return Dm(Ev(e))(t,n.direction)}},lf=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},En=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ov={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uf={toggleActions:"play",anticipatePin:0},Mf={top:0,left:0,center:.5,bottom:1,right:1},mf=function(e,t){if(Li(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Mf?Mf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hf=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,d=r.fontWeight,p=bt.createElement("div"),_=So(n)||Qs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,A=M?c:u,v="border-color:"+A+";font-size:"+f+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===dn?Im:Lm)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],gf(p,0,i,M),p},gf=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ba]=1,r["border"+a+Ba]=0,r[n.p]=t+"px",we.set(e,r)},at=[],wm={},av=function(){return Kn()-Yi>34&&(wc||(wc=requestAnimationFrame(tr)))},Na=function(){(!oi||!oi.isPressed||oi.startX>yt.clientWidth)&&(ot.cache++,oi?wc||(wc=requestAnimationFrame(tr)):tr(),Yi||bo("scrollStart"),Yi=Kn())},xm=function(){vv=ut.innerWidth,xv=ut.innerHeight},gc=function(e){ot.cache++,(e===!0||!qn&&!_v&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Mm||vv!==ut.innerWidth||Math.abs(ut.innerHeight-xv)>ut.innerHeight*.25))&&yf.restart(!0)},Mo={},ZA=[],Av=function s(){return wn(Qe,"scrollEnd",s)||_o(!0)},bo=function(e){return Mo[e]&&Mo[e].map(function(t){return t()})||ZA},Ii=[],Rv=function(e){for(var t=0;t<Ii.length;t+=5)(!e||Ii[t+4]&&Ii[t+4].query===e)&&(Ii[t].style.cssText=Ii[t+1],Ii[t].getBBox&&Ii[t].setAttribute("transform",Ii[t+2]||""),Ii[t+3].uncache=1)},Cv=function(){return ot.forEach(function(e){return Zn(e)&&++e.cacheID&&(e.rec=e())})},Um=function(e,t){var n;for(ai=0;ai<at.length;ai++)n=at[ai],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));xc=!0,t&&Rv(t),t||bo("revert")},Pv=function(e,t){ot.cache++,(t||!li)&&ot.forEach(function(n){return Zn(n)&&n.cacheID++&&(n.rec=0)}),Li(e)&&(ut.history.scrollRestoration=Cm=e)},yo=0,JA=function(){if(lv!==yo){var e=lv=yo;requestAnimationFrame(function(){return e===yo&&_o(!0)})}},Iv=function(){yt.appendChild(Oa),Pm=!oi&&Oa.offsetHeight||ut.innerHeight,yt.removeChild(Oa)},cv=function(e){return Tc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(Ni=bt.documentElement,yt=bt.body,Rm=[ut,bt,Ni,yt],Yi&&!e&&!xc){En(Qe,"scrollEnd",Av);return}Iv(),li=Qe.isRefreshing=!0,xc||Cv();var n=bo("refreshInit");gv&&Qe.sort(),t||Um(),ot.forEach(function(i){Zn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),at.slice(0).forEach(function(i){return i.refresh()}),xc=!1,at.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Tm=1,cv(!0),at.forEach(function(i){var r=As(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),cv(!1),Tm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){Zn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pv(Cm,1),yf.pause(),yo++,li=2,tr(2),at.forEach(function(i){return Zn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),li=Qe.isRefreshing=!1,bo("refresh")},Em=0,_f=1,tr=function(e){if(e===2||!li&&!xc){Qe.isUpdating=!0,bc&&bc.update(0);var t=at.length,n=Kn(),i=n-_m>=50,r=t&&at[0].scroll();if(_f=Em>r?-1:1,li||(Em=r),i&&(Yi&&!bf&&n-Yi>200&&(Yi=0,bo("scrollEnd")),fc=_m,_m=n),_f<0){for(ai=t;ai-- >0;)at[ai]&&at[ai].update(0,i);_f=1}else for(ai=0;ai<t;ai++)at[ai]&&at[ai].update(0,i);Qe.isUpdating=!1}wc=0},Am=[Tv,wv,Lm,Im,Wi+Mc,Wi+vc,Wi+Sc,Wi+yc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xf=Am.concat([xo,vo,"boxSizing","max"+Ba,"max"+Nm,"position",Wi,pn,pn+Sc,pn+vc,pn+Mc,pn+yc]),$A=function(e,t,n){Fa(n);var i=e._gsap;if(i.spacerIsNative)Fa(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},vm=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Am.length,o=t.style,a=e.style,l;r--;)l=Am[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lm]=a[Im]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[xo]=Sf(e,Yn)+yn,o[vo]=Sf(e,dn)+yn,o[pn]=a[Wi]=a[wv]=a[Tv]="0",Fa(i),a[xo]=a["max"+Ba]=n[xo],a[vo]=a["max"+Nm]=n[vo],a[pn]=n[pn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},jA=/([A-Z])/g,Fa=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(jA,"-$1").toLowerCase())}},ff=function(e){for(var t=xf.length,n=e.style,i=[],r=0;r<t;r++)i.push(xf[r],n[xf[r]]);return i.t=e,i},QA=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},vf={left:0,top:0},uv=function(e,t,n,i,r,o,a,l,c,u,f,h,d,p){Zn(e)&&(e=e(l)),Li(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?mf("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,M;if(d&&d.seek(0),isNaN(e)||(e=+e),mc(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&gf(a,n,i,!0);else{Zn(t)&&(t=t(l));var A=(e||"0").split(" "),v,S,b,w;M=ri(t,l)||yt,v=er(M)||{},(!v||!v.left&&!v.top)&&Xi(M).display==="none"&&(w=M.style.display,M.style.display="block",v=er(M),w?M.style.display=w:M.style.removeProperty("display")),S=mf(A[0],v[i.d]),b=mf(A[1]||"0",n),e=v[i.p]-c[i.p]-u+S+r-b,a&&gf(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+n,T=o._isStart;m="scroll"+i.d2,gf(o,x,i,T&&x>20||!T&&(f?Math.max(yt[m],Ni[m]):o.parentNode[m])<=x+1),f&&(c=er(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+yn))}return d&&M&&(m=er(M),d.seek(h),g=er(M),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},eR=/(webkit|moz|length|cssText|inset)/i,hv=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===yt){e._stOrig=r.cssText,a=Xi(e);for(o in a)!+o&&!eR.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Lv=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},df=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},fv=function(e,t){var n=js(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,p={};c=c||n();var _=Lv(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&tr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=we.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},En(e,"wheel",n.wheelHandler),Qe.isTouch&&En(e,"touchmove",n.wheelHandler),r},Qe=(function(){function s(t,n){Da||s.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!dc){this.update=this.refresh=this.kill=Es;return}n=rv(Li(n)||mc(n)||n.nodeType?{trigger:n}:n,uf);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,d=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,M=r.onSnapComplete,A=r.once,v=r.snap,S=r.pinReparent,b=r.pinSpacer,w=r.containerAnimation,x=r.fastScrollEnd,T=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Yn:dn,D=!f&&f!==0,P=ri(n.scroller||ut),N=we.core.getCache(P),L=So(P),B=("pinType"in n?n.pinType:Qs(P,"pinType")||L&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=D&&n.toggleActions.split(" "),Z="markers"in n?n.markers:uf.markers,H=L?0:parseFloat(Xi(P)["border"+R.p2+Ba])||0,C=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(C)},me=WA(P,L,R),ye=XA(P,L),Ie=0,Le=0,Xe=0,J=js(P,R),ee,xe,Ge,ge,Ve,We,De,Ke,nt,W,lt,Tt,Vt,Ze,_t,k,Bt,Ye,I,y,V,Y,j,ce,oe,Q,ne,fe,Ee,de,he,le,Ue,He,U,ue,te,pe,ve;if(C._startClamp=C._endClamp=!1,C._dir=R,m*=45,C.scroller=P,C.scroll=w?w.time.bind(w):J,ge=J(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(gv=1,n.refreshPriority===-9999&&(bc=C)),N.tweenScroll=N.tweenScroll||{top:fv(P,dn),left:fv(P,Yn)},C.tweenTo=ee=N.tweenScroll[R.p],C.scrubDuration=function(re){Ue=mc(re)&&re,Ue?le?le.duration(re):le=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ue,paused:!0,onComplete:function(){return g&&g(C)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),de=0,l||(l=i.vars.id)),v&&((!go(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&we.set(L?[yt,Ni]:P,{scrollBehavior:"auto"}),ot.forEach(function(re){return Zn(re)&&re.target===(L?bt.scrollingElement||Ni:P)&&(re.smooth=!1)}),Ge=Zn(v.snapTo)?v.snapTo:v.snapTo==="labels"?qA(i):v.snapTo==="labelsDirectional"?KA(i):v.directional!==!1?function(re,ze){return Dm(v.snapTo)(re,Kn()-Le<500?0:ze.direction)}:we.utils.snap(v.snapTo),He=v.duration||{min:.1,max:2},He=go(He)?_c(He.min,He.max):_c(He,He),U=we.delayedCall(v.delay||Ue/2||.1,function(){var re=J(),ze=Kn()-Le<500,Ae=ee.tween;if((ze||Math.abs(C.getVelocity())<10)&&!Ae&&!bf&&Ie!==re){var $e=(re-We)/Ze,on=i&&!D?i.totalProgress():$e,ct=ze?0:(on-he)/(Kn()-fc)*1e3||0,Ut=we.utils.clamp(-$e,1-$e,La(ct/2)*ct/.185),Sn=$e+(v.inertia===!1?0:Ut),Ot,At,dt=v,Jn=dt.onStart,Lt=dt.onInterrupt,On=dt.onComplete;if(Ot=Ge(Sn,C),mc(Ot)||(Ot=Sn),At=Math.max(0,Math.round(We+Ot*Ze)),re<=De&&re>=We&&At!==re){if(Ae&&!Ae._initted&&Ae.data<=La(At-re))return;v.inertia===!1&&(Ut=Ot-$e),ee(At,{duration:He(La(Math.max(La(Sn-on),La(Ot-on))*.185/ct/.05||0)),ease:v.ease||"power3",data:La(At-re),onInterrupt:function(){return U.restart(!0)&&Lt&&Ia(C,Lt)},onComplete:function(){C.update(),Ie=J(),i&&!D&&(le?le.resetTo("totalProgress",Ot,i._tTime/i._tDur):i.progress(Ot)),de=he=i&&!D?i.totalProgress():C.progress,M&&M(C),On&&Ia(C,On)}},re,Ut*Ze,At-re-Ut*Ze),Jn&&Ia(C,Jn,ee.tween)}}else C.isActive&&Ie!==re&&U.restart(!0)}).pause()),l&&(wm[l]=C),h=C.trigger=ri(h||d!==!0&&d),ve=h&&h._gsap&&h._gsap.stRevert,ve&&(ve=ve(C)),d=d===!0?h:ri(d),Li(a)&&(a={targets:h,className:a}),d&&(p===!1||p===Wi||(p=!p&&d.parentNode&&d.parentNode.style&&Xi(d.parentNode).display==="flex"?!1:pn),C.pin=d,xe=we.core.getCache(d),xe.spacer?_t=xe.pinState:(b&&(b=ri(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),xe.spacerIsNative=!!b,b&&(xe.spacerState=ff(b))),xe.spacer=Ye=b||bt.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),xe.pinState=_t=ff(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),C.spacer=Ye=xe.spacer,Ee=Xi(d),ce=Ee[p+R.os2],y=we.getProperty(d),V=we.quickSetter(d,R.a,yn),vm(d,Ye,Ee),Bt=ff(d)),Z){Tt=go(Z)?rv(Z,ov):ov,W=hf("scroller-start",l,P,R,Tt,0),lt=hf("scroller-end",l,P,R,Tt,0,W),I=W["offset"+R.op.d2];var ie=ri(Qs(P,"content")||P);Ke=this.markerStart=hf("start",l,ie,R,Tt,I,0,w),nt=this.markerEnd=hf("end",l,ie,R,Tt,I,0,w),w&&(pe=we.quickSetter([Ke,nt],R.a,yn)),!B&&!(us.length&&Qs(P,"fixedMarkers")===!0)&&(YA(L?yt:P),we.set([W,lt],{force3D:!0}),Q=we.quickSetter(W,R.a,yn),fe=we.quickSetter(lt,R.a,yn))}if(w){var ae=w.vars.onUpdate,se=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){C.update(0,0,1),ae&&ae.apply(w,se||[])})}if(C.previous=function(){return at[at.indexOf(C)-1]},C.next=function(){return at[at.indexOf(C)+1]},C.revert=function(re,ze){if(!ze)return C.kill(!0);var Ae=re!==!1||!C.enabled,$e=qn;Ae!==C.isReverted&&(Ae&&(ue=Math.max(J(),C.scroll.rec||0),Xe=C.progress,te=i&&i.progress()),Ke&&[Ke,nt,W,lt].forEach(function(on){return on.style.display=Ae?"none":"block"}),Ae&&(qn=C,C.update(Ae)),d&&(!S||!C.isActive)&&(Ae?$A(d,Ye,_t):vm(d,Ye,Xi(d),oe)),Ae||C.update(Ae),qn=$e,C.isReverted=Ae)},C.refresh=function(re,ze,Ae,$e){if(!((qn||!C.enabled)&&!ze)){if(d&&re&&Yi){En(s,"scrollEnd",Av);return}!li&&$&&$(C),qn=C,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(_e){return _e.vars.immediateRender&&_e.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var on=me(),ct=ye(),Ut=w?w.duration():As(P,R),Sn=Ze<=.01||!Ze,Ot=0,At=$e||0,dt=go(Ae)?Ae.end:n.end,Jn=n.endTrigger||h,Lt=go(Ae)?Ae.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),On=C.pinnedContainer=n.pinnedContainer&&ri(n.pinnedContainer,C),$n=h&&Math.max(0,at.indexOf(C))||0,an=$n,qt,mn,hs,wo,Mn,jt,Di,Eo,E,O,K,X,q;for(Z&&go(Ae)&&(X=we.getProperty(W,R.p),q=we.getProperty(lt,R.p));an-- >0;)jt=at[an],jt.end||jt.refresh(0,1)||(qn=C),Di=jt.pin,Di&&(Di===h||Di===d||Di===On)&&!jt.isReverted&&(O||(O=[]),O.unshift(jt),jt.revert(!0,!0)),jt!==at[an]&&($n--,an--);for(Zn(Lt)&&(Lt=Lt(C)),Lt=tv(Lt,"start",C),We=uv(Lt,h,on,R,J(),Ke,W,C,ct,H,B,Ut,w,C._startClamp&&"_startClamp")||(d?-.001:0),Zn(dt)&&(dt=dt(C)),Li(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(Li(Lt)?Lt.split(" ")[0]:"")+dt:(Ot=mf(dt.substr(2),on),dt=Li(Lt)?Lt:(w?we.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,We):We)+Ot,Jn=h)),dt=tv(dt,"end",C),De=Math.max(We,uv(dt||(Jn?"100% 0":Ut),Jn,on,R,J()+Ot,nt,lt,C,ct,H,B,Ut,w,C._endClamp&&"_endClamp"))||-.001,Ot=0,an=$n;an--;)jt=at[an]||{},Di=jt.pin,Di&&jt.start-jt._pinPush<=We&&!w&&jt.end>0&&(qt=jt.end-(C._startClamp?Math.max(0,jt.start):jt.start),(Di===h&&jt.start-jt._pinPush<We||Di===On)&&isNaN(Lt)&&(Ot+=qt*(1-jt.progress)),Di===d&&(At+=qt));if(We+=Ot,De+=Ot,C._startClamp&&(C._startClamp+=Ot),C._endClamp&&!li&&(C._endClamp=De||-.001,De=Math.min(De,As(P,R))),Ze=De-We||(We-=.01)&&.001,Sn&&(Xe=we.utils.clamp(0,1,we.utils.normalize(We,De,ue))),C._pinPush=At,Ke&&Ot&&(qt={},qt[R.a]="+="+Ot,On&&(qt[R.p]="-="+J()),we.set([Ke,nt],qt)),d&&!(Tm&&C.end>=As(P,R)))qt=Xi(d),wo=R===dn,hs=J(),Y=parseFloat(y(R.a))+At,!Ut&&De>1&&(K=(L?bt.scrollingElement||Ni:P).style,K={style:K,value:K["overflow"+R.a.toUpperCase()]},L&&Xi(yt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+R.a.toUpperCase()]="scroll")),vm(d,Ye,qt),Bt=ff(d),mn=er(d,!0),Eo=B&&js(P,wo?Yn:dn)(),p?(oe=[p+R.os2,Ze+At+yn],oe.t=Ye,an=p===pn?Sf(d,R)+Ze+At:0,an&&(oe.push(R.d,an+yn),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=an+yn)),Fa(oe),On&&at.forEach(function(_e){_e.pin===On&&_e.vars.pinSpacing!==!1&&(_e._subPinOffset=!0)}),B&&J(ue)):(an=Sf(d,R),an&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=an+yn)),B&&(Mn={top:mn.top+(wo?hs-We:Eo)+yn,left:mn.left+(wo?Eo:hs-We)+yn,boxSizing:"border-box",position:"fixed"},Mn[xo]=Mn["max"+Ba]=Math.ceil(mn.width)+yn,Mn[vo]=Mn["max"+Nm]=Math.ceil(mn.height)+yn,Mn[Wi]=Mn[Wi+Sc]=Mn[Wi+vc]=Mn[Wi+Mc]=Mn[Wi+yc]="0",Mn[pn]=qt[pn],Mn[pn+Sc]=qt[pn+Sc],Mn[pn+vc]=qt[pn+vc],Mn[pn+Mc]=qt[pn+Mc],Mn[pn+yc]=qt[pn+yc],k=QA(_t,Mn,S),li&&J(0)),i?(E=i._initted,mm(1),i.render(i.duration(),!0,!0),j=y(R.a)-Y+Ze+At,ne=Math.abs(Ze-j)>1,B&&ne&&k.splice(k.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),mm(0)):j=Ze,K&&(K.value?K.style["overflow"+R.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+R.a));else if(h&&J()&&!w)for(mn=h.parentNode;mn&&mn!==yt;)mn._pinOffset&&(We-=mn._pinOffset,De-=mn._pinOffset),mn=mn.parentNode;O&&O.forEach(function(_e){return _e.revert(!1,!0)}),C.start=We,C.end=De,ge=Ve=li?ue:J(),!w&&!li&&(ge<ue&&J(ue),C.scroll.rec=0),C.revert(!1,!0),Le=Kn(),U&&(Ie=-1,U.restart(!0)),qn=0,i&&D&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(Sn||Xe!==C.progress||w||_||i&&!i._initted)&&(i&&!D&&(i._initted||Xe||i.vars.immediateRender!==!1)&&i.totalProgress(w&&We<-.001&&!Xe?we.utils.normalize(We,De,0):Xe,!0),C.progress=Sn||(ge-We)/Ze===Xe?0:Xe),d&&p&&(Ye._pinOffset=Math.round(C.progress*j)),le&&le.invalidate(),isNaN(X)||(X-=we.getProperty(W,R.p),q-=we.getProperty(lt,R.p),df(W,R,X),df(Ke,R,X-($e||0)),df(lt,R,q),df(nt,R,q-($e||0))),Sn&&!li&&C.update(),u&&!li&&!Vt&&(Vt=!0,u(C),Vt=!1)}},C.getVelocity=function(){return(J()-Ve)/(Kn()-fc)*1e3||0},C.endAnimation=function(){hc(C.callbackAnimation),i&&(le?le.progress(1):i.paused()?D||hc(i,C.direction<0,1):hc(i,i.reversed()))},C.labelToScroll=function(re){return i&&i.labels&&(We||C.refresh()||We)+i.labels[re]/i.duration()*Ze||0},C.getTrailing=function(re){var ze=at.indexOf(C),Ae=C.direction>0?at.slice(0,ze).reverse():at.slice(ze+1);return(Li(re)?Ae.filter(function($e){return $e.vars.preventOverlaps===re}):Ae).filter(function($e){return C.direction>0?$e.end<=We:$e.start>=De})},C.update=function(re,ze,Ae){if(!(w&&!Ae&&!re)){var $e=li===!0?ue:C.scroll(),on=re?0:($e-We)/Ze,ct=on<0?0:on>1?1:on||0,Ut=C.progress,Sn,Ot,At,dt,Jn,Lt,On,$n;if(ze&&(Ve=ge,ge=w?J():$e,v&&(he=de,de=i&&!D?i.totalProgress():ct)),m&&d&&!qn&&!of&&Yi&&(!ct&&We<$e+($e-Ve)/(Kn()-fc)*m?ct=1e-4:ct===1&&De>$e+($e-Ve)/(Kn()-fc)*m&&(ct=.9999)),ct!==Ut&&C.enabled){if(Sn=C.isActive=!!ct&&ct<1,Ot=!!Ut&&Ut<1,Lt=Sn!==Ot,Jn=Lt||!!ct!=!!Ut,C.direction=ct>Ut?1:-1,C.progress=ct,Jn&&!qn&&(At=ct&&!Ut?0:ct===1?1:Ut===1?2:3,D&&(dt=!Lt&&z[At+1]!=="none"&&z[At+1]||z[At],$n=i&&(dt==="complete"||dt==="reset"||dt in i))),T&&(Lt||$n)&&($n||f||!i)&&(Zn(T)?T(C):C.getTrailing(T).forEach(function(hs){return hs.endAnimation()})),D||(le&&!qn&&!of?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",ct,i._tTime/i._tDur):(le.vars.totalProgress=ct,le.invalidate().restart())):i&&i.totalProgress(ct,!!(qn&&(Le||re)))),d){if(re&&p&&(Ye.style[p+R.os2]=ce),!B)V(pc(Y+j*ct));else if(Jn){if(On=!re&&ct>Ut&&De+1>$e&&$e+1>=As(P,R),S)if(!re&&(Sn||On)){var an=er(d,!0),qt=$e-We;hv(d,yt,an.top+(R===dn?qt:0)+yn,an.left+(R===dn?0:qt)+yn)}else hv(d,Ye);Fa(Sn||On?k:Bt),ne&&ct<1&&Sn||V(Y+(ct===1&&!On?j:0))}}v&&!ee.tween&&!qn&&!of&&U.restart(!0),a&&(Lt||A&&ct&&(ct<1||!gm))&&Tc(a.targets).forEach(function(hs){return hs.classList[Sn||A?"add":"remove"](a.className)}),o&&!D&&!re&&o(C),Jn&&!qn?(D&&($n&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),o&&o(C)),(Lt||!gm)&&(c&&Lt&&Ia(C,c),G[At]&&Ia(C,G[At]),A&&(ct===1?C.kill(!1,1):G[At]=0),Lt||(At=ct===1?1:3,G[At]&&Ia(C,G[At]))),x&&!Sn&&Math.abs(C.getVelocity())>(mc(x)?x:2500)&&(hc(C.callbackAnimation),le?le.progress(1):hc(i,dt==="reverse"?1:!ct,1))):D&&o&&!qn&&o(C)}if(fe){var mn=w?$e/w.duration()*(w._caScrollDist||0):$e;Q(mn+(W._isFlipped?1:0)),fe(mn)}pe&&pe(-$e/w.duration()*(w._caScrollDist||0))}},C.enable=function(re,ze){C.enabled||(C.enabled=!0,En(P,"resize",gc),L||En(P,"scroll",Na),$&&En(s,"refreshInit",$),re!==!1&&(C.progress=Xe=0,ge=Ve=Ie=J()),ze!==!1&&C.refresh())},C.getTween=function(re){return re&&ee?ee.tween:le},C.setPositions=function(re,ze,Ae,$e){if(w){var on=w.scrollTrigger,ct=w.duration(),Ut=on.end-on.start;re=on.start+Ut*re/ct,ze=on.start+Ut*ze/ct}C.refresh(!1,!1,{start:nv(re,Ae&&!!C._startClamp),end:nv(ze,Ae&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(re){if(oe&&re){var ze=oe.indexOf(R.d)+1;oe[ze]=parseFloat(oe[ze])+re+yn,oe[1]=parseFloat(oe[1])+re+yn,Fa(oe)}},C.disable=function(re,ze){if(re!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,ze||le&&le.pause(),ue=0,xe&&(xe.uncache=1),$&&wn(s,"refreshInit",$),U&&(U.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!L)){for(var Ae=at.length;Ae--;)if(at[Ae].scroller===P&&at[Ae]!==C)return;wn(P,"resize",gc),L||wn(P,"scroll",Na)}},C.kill=function(re,ze){C.disable(re,ze),le&&!ze&&le.kill(),l&&delete wm[l];var Ae=at.indexOf(C);Ae>=0&&at.splice(Ae,1),Ae===ai&&_f>0&&ai--,Ae=0,at.forEach(function($e){return $e.scroller===C.scroller&&(Ae=1)}),Ae||li||(C.scroll.rec=0),i&&(i.scrollTrigger=null,re&&i.revert({kill:!1}),ze||i.kill()),Ke&&[Ke,nt,W,lt].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),bc===C&&(bc=0),d&&(xe&&(xe.uncache=1),Ae=0,at.forEach(function($e){return $e.pin===d&&Ae++}),Ae||(xe.spacer=0)),n.onKill&&n.onKill(C)},at.push(C),C.enable(!1,!1),ve&&ve(C),i&&i.add&&!Ze){var Be=C.update;C.update=function(){C.update=Be,ot.cache++,We||De||C.refresh()},we.delayedCall(.01,C.update),Ze=.01,We=De=0}else C.refresh();d&&JA()},s.register=function(n){return Da||(we=n||Sv(),yv()&&window.document&&s.enable(),Da=dc),Da},s.defaults=function(n){if(n)for(var i in n)uf[i]=n[i];return uf},s.disable=function(n,i){dc=0,at.forEach(function(o){return o[i?"kill":"disable"](n)}),wn(ut,"wheel",Na),wn(bt,"scroll",Na),clearInterval(rf),wn(bt,"touchcancel",Es),wn(yt,"touchstart",Es),lf(wn,bt,"pointerdown,touchstart,mousedown",iv),lf(wn,bt,"pointerup,touchend,mouseup",sv),yf.kill(),af(wn);for(var r=0;r<ot.length;r+=3)cf(wn,ot[r],ot[r+1]),cf(wn,ot[r],ot[r+2])},s.enable=function(){if(ut=window,bt=document,Ni=bt.documentElement,yt=bt.body,we){if(Tc=we.utils.toArray,_c=we.utils.clamp,bm=we.core.context||Es,mm=we.core.suppressOverwrites||Es,Cm=ut.history.scrollRestoration||"auto",Em=ut.pageYOffset||0,we.core.globals("ScrollTrigger",s),yt){dc=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",Iv(),GA(),$t.register(we),s.isTouch=$t.isTouch,Nr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mm=$t.isTouch===1,En(ut,"wheel",Na),Rm=[ut,bt,Ni,yt],we.matchMedia?(s.matchMedia=function(u){var f=we.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},we.addEventListener("matchMediaInit",function(){Cv(),Um()}),we.addEventListener("matchMediaRevert",function(){return Rv()}),we.addEventListener("matchMedia",function(){_o(0,1),bo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return xm(),xm})):console.warn("Requires GSAP 3.11.0 or later"),xm(),En(bt,"scroll",Na);var n=yt.hasAttribute("style"),i=yt.style,r=i.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(yt),dn.m=Math.round(a.top+dn.sc())||0,Yn.m=Math.round(a.left+Yn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),rf=setInterval(av,250),we.delayedCall(.5,function(){return of=0}),En(bt,"touchcancel",Es),En(yt,"touchstart",Es),lf(En,bt,"pointerdown,touchstart,mousedown",iv),lf(En,bt,"pointerup,touchend,mouseup",sv),Sm=we.utils.checkPrefix("transform"),xf.push(Sm),Da=Kn(),yf=we.delayedCall(.2,_o).pause(),Ua=[bt,"visibilitychange",function(){var u=ut.innerWidth,f=ut.innerHeight;bt.hidden?(Qx=u,ev=f):(Qx!==u||ev!==f)&&gc()},bt,"DOMContentLoaded",_o,ut,"load",_o,ut,"resize",gc],af(En),at.forEach(function(u){return u.enable(0,1)}),l=0;l<ot.length;l+=3)cf(wn,ot[l],ot[l+1]),cf(wn,ot[l],ot[l+2])}else if(bt){var c=function u(){s.enable(),bt.removeEventListener("DOMContentLoaded",u)};bt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(gm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(rf)||(rf=i)&&setInterval(av,i),"ignoreMobileResize"in n&&(Mm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(af(wn)||af(En,n.autoRefreshEvents||"none"),_v=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ri(n),o=ot.indexOf(r),a=So(r);~o&&ot.splice(o,a?6:2),i&&(a?us.unshift(ut,i,yt,i,Ni,i):us.unshift(r,i))},s.clearMatchMedia=function(n){at.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Li(n)?ri(n):n).getBoundingClientRect(),a=o[r?xo:vo]*i||0;return r?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},s.positionInViewport=function(n,i,r){Li(n)&&(n=ri(n));var o=n.getBoundingClientRect(),a=o[r?xo:vo],l=i==null?a/2:i in Mf?Mf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},s.killAll=function(n){if(at.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Mo.killAll||[];Mo={},i.forEach(function(r){return r()})}},s})();Qe.version="3.15.0";Qe.saveStyles=function(s){return s?Tc(s).forEach(function(e){if(e&&e.style){var t=Ii.indexOf(e);t>=0&&Ii.splice(t,5),Ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),bm())}}):Ii};Qe.revert=function(s,e){return Um(!s,e)};Qe.create=function(s,e){return new Qe(s,e)};Qe.refresh=function(s){return s?gc(!0):(Da||Qe.register())&&_o(!0)};Qe.update=function(s){return++ot.cache&&tr(s===!0?2:0)};Qe.clearScrollMemory=Pv;Qe.maxScroll=function(s,e){return As(s,e?Yn:dn)};Qe.getScrollFunc=function(s,e){return js(ri(s),e?Yn:dn)};Qe.getById=function(s){return wm[s]};Qe.getAll=function(){return at.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Yi};Qe.snapDirectional=Dm;Qe.addEventListener=function(s,e){var t=Mo[s]||(Mo[s]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(s,e){var t=Mo[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=we.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),r<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Zn(r)&&(r=r(),En(Qe,"refresh",function(){return r=e.batchMax()})),Tc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};dv=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ym=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===Ni&&s(yt,t)},pf={auto:1,scroll:1},tR=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||we.core.getCache(r),a=Kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==yt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(pf[(l=Xi(r)).overflowY]||pf[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!So(r)&&(pf[(l=Xi(r)).overflowY]||pf[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Nv=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&tR,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&En(bt,$t.eventTypes[0],mv,!1,!0)},onDisable:function(){return wn(bt,$t.eventTypes[0],mv,!0)}})},nR=/(input|label|select|textarea)/i,mv=function(e){var t=nR.test(e.target.tagName);(t||pv)&&(e._gsapAllow=!0,pv=t)},iR=function(e){go(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=ri(e.target)||Ni,u=we.core.globals().ScrollSmoother,f=u&&u.get(),h=Nr&&(e.content&&ri(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=js(c,dn),p=js(c,Yn),_=1,m=($t.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,M=Zn(i)?function(){return i(a)}:function(){return i||2.8},A,v,S=Nv(c,e.type,!0,r),b=function(){return v=!1},w=Es,x=Es,T=function(){l=As(c,dn),x=_c(Nr?1:0,l),n&&(w=_c(0,As(c,Yn))),A=yo},R=function(){h._gsap.y=pc(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(b);var Z=pc(a.deltaY/2),H=x(d.v-Z);if(h&&H!==d.v+d.offset){d.offset=H-d.v;var C=pc((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=ot.cache,tr()}return!0}d.offset&&R(),v=!0},P,N,L,B,G=function(){T(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return Nr&&z.type==="touchmove"&&D(z)||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){v=!1;var z=_;_=pc((ut.visualViewport&&ut.visualViewport.scale||1)/m),P.pause(),z!==_&&ym(c,_>1.01?!0:n?!1:"x"),N=p(),L=d(),T(),A=yo},e.onRelease=e.onGestureStart=function(z,Z){if(d.offset&&R(),!Z)B.restart(!0);else{ot.cache++;var H=M(),C,$;n&&(C=p(),$=C+H*.05*-z.velocityX/.227,H*=dv(p,C,$,As(c,Yn)),P.vars.scrollX=w($)),C=d(),$=C+H*.05*-z.velocityY/.227,H*=dv(d,C,$,As(c,dn)),P.vars.scrollY=x($),P.invalidate().duration(H).play(.01),(Nr&&P.vars.scrollY>=l||C>=l-1)&&we.to({},{onUpdate:G,duration:H})}o&&o(z)},e.onWheel=function(){P._ts&&P.pause(),Kn()-g>1e3&&(A=0,g=Kn())},e.onChange=function(z,Z,H,C,$){if(yo!==A&&T(),Z&&n&&p(w(C[2]===Z?N+(z.startX-z.x):p()+Z-C[1])),H){d.offset&&R();var me=$[2]===H,ye=me?L+z.startY-z.y:d()+H-$[1],Ie=x(ye);me&&ye!==Ie&&(L+=Ie-ye),d(Ie)}(H||Z)&&tr()},e.onEnable=function(){ym(c,n?!1:"x"),Qe.addEventListener("refresh",G),En(ut,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),S.enable()},e.onDisable=function(){ym(c,!0),wn(ut,"resize",G),Qe.removeEventListener("refresh",G),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Nr,Nr&&!d()&&d(1),Nr&&we.ticker.add(Es),B=a._dc,P=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lv(d,d(),function(){return P.pause()})},onUpdate:tr,onComplete:B.vars.onComplete}),a};Qe.sort=function(s){if(Zn(s))return at.sort(s);var e=ut.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),at.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(s){return new $t(s)};Qe.normalizeScroll=function(s){if(typeof s>"u")return oi;if(s===!0&&oi)return oi.enable();if(s===!1){oi&&oi.kill(),oi=s;return}var e=s instanceof $t?s:iR(s);return oi&&oi.target===e.target&&oi.kill(),So(e.target)&&(oi=e),e};Qe.core={_getVelocityProp:sf,_inputObserver:Nv,_scrollers:ot,_proxies:us,bridge:{ss:function(){Yi||bo("scrollStart"),Yi=Kn()},ref:function(){return qn}}};Sv()&&we.registerPlugin(Qe)});var Ec,Ac,Uv,Fm,sR,Ov,Rc,Fv,Bm,Om,rR,oR,Bv,Tf,aR,kv,zv,Vv,ka,km,lR,Hv,Gv,wf,Xv=Et(()=>{Uv=typeof Symbol=="function"?Symbol():"_split",sR=()=>Fm||wf.register(window.gsap),Ov=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Rc=s=>s?typeof s=="string"?Rc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...Rc(t)):e.push(t),e),[]):[s]:[],Fv=s=>Rc(s).filter(e=>e&&e.nodeType===1),Bm=[],Om=function(){},rR={add:s=>s()},oR=/\s+/g,Bv=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Tf={left:0,top:0,width:0,height:0},aR=(s,e)=>{for(;++e<s.length&&s[e]===Tf;);return s[e]||Tf},kv=({element:s,html:e,ariaL:t,ariaH:n})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},zv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||Bm),n=s.length,i,r,o,a;if(t.size)for(;--n>-1;){r=s[n];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},Vv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),ka=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),km=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+s,h+""),r!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},lR=(s,e,t,n)=>{let i=km("line",t,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},Hv=(s,e,t,n,i,r,o,a,l,c)=>{var u;let f=Array.from(s.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=e,m=s.getBoundingClientRect(),g=m,M=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",A=0,v=t.collection,S,b,w,x,T,R,D,P,N,L,B,G,z,Z,H,C,$,me;for(typeof d=="object"?(w=d.delimiter||d,b=d.replaceWith||""):b=d===""?"":d||" ",S=b!==" ";h<f.length;h++)if(x=f[h],x.nodeType===3){for(H=x.textContent||"",p?H=H.replace(oR," "):M&&(H=H.replace(/\n/g,b+`
`)),_&&(H=_(H,s)),x.textContent=H,T=b||w?H.split(w||b):H.match(a)||Bm,$=T[T.length-1],P=S?$.slice(-1)===" ":!$,$||T.pop(),g=m,D=S?T[0].charAt(0)===" ":!T[0],D&&ka(" ",s,x),T[0]||T.shift(),zv(T,l),r&&c||(x.textContent=""),N=1;N<=T.length;N++)if(C=T[N-1],!p&&M&&C.charAt(0)===`
`&&((u=x.previousSibling)==null||u.remove(),ka(document.createElement("br"),s,x),C=C.slice(1)),!p&&C==="")ka(b,s,x);else if(C===" ")s.insertBefore(document.createTextNode(" "),x);else{if(S&&C.charAt(0)===" "&&ka(" ",s,x),A&&N===1&&!D&&v.indexOf(A.parentNode)>-1?(R=v[v.length-1],R.appendChild(document.createTextNode(n?"":C))):(R=t(n?"":C),ka(R,s,x),A&&N===1&&!D&&R.insertBefore(A,R.firstChild)),n)for(B=Ov?zv([...Ov.segment(C)].map(ye=>ye.segment),l):C.match(a)||Bm,me=0;me<B.length;me++)R.appendChild(B[me]===" "?document.createTextNode(" "):n(B[me]));if(r&&c){if(H=x.textContent=H.substring(C.length+1,H.length),L=R.getBoundingClientRect(),L.top>g.top&&L.left<=g.left){for(G=s.cloneNode(),z=s.childNodes[0];z&&z!==R;)Z=z,z=z.nextSibling,G.appendChild(Z);s.parentNode.insertBefore(G,s),i&&Vv(G)}g=L}(N<T.length||P)&&ka(N>=T.length?" ":S&&C.slice(-1)===" "?" "+b:b,s,x)}s.removeChild(x),A=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(v.indexOf(x.previousSibling)>-1&&v[v.length-1].appendChild(x),A=x):(Hv(x,e,t,n,i,r,o,a,l,!0),A=0),i&&Vv(x))},Gv=class Wv{constructor(e,t){this.isSplit=!1,sR(),this.elements=Fv(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Uv])==null||a._data.orig.filter(({element:l})=>l===o).forEach(kv)),o[Uv]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,r=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(r,200)})},Om(this),this.split(t)}split(e){return(this._ctx||rR).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,d=f&&!h&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+Bv.source,"gu"):Bv,m=!!e.ignore&&Fv(e.ignore),{orig:g,animTime:M,obs:A}=this._data,v;(f||h||u)&&(this.elements.forEach((S,b)=>{g[b]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},n==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):n==="hidden"&&S.setAttribute("aria-hidden","true");let w=[],x=[],T=[],R=f?km("char",e,w):null,D=km("word",e,x),P,N,L,B;if(Hv(S,e,D,R,d,i&&(u||d),m,_,p,!1),u){let G=Rc(S.childNodes),z=lR(S,G,e,T),Z,H=[],C=0,$=G.map(Ie=>Ie.nodeType===1?Ie.getBoundingClientRect():Tf),me=Tf,ye;for(P=0;P<G.length;P++)Z=G[P],Z.nodeType===1&&(Z.nodeName==="BR"?((!P||G[P-1].nodeName!=="BR")&&(H.push(Z),z(C,P+1)),C=P+1,me=aR($,P)):(ye=$[P],P&&ye.top>me.top&&ye.left<me.left+me.width-1&&(z(C,P),C=P),me=ye));C<P&&z(C,P),H.forEach(Ie=>{var Le;return(Le=Ie.parentNode)==null?void 0:Le.removeChild(Ie)})}if(!h){for(P=0;P<x.length;P++)if(N=x[P],f||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!u){for(L=document.createElement("span"),L.style.whiteSpace="nowrap";N.firstChild;)L.appendChild(N.firstChild);N.replaceWith(L)}else N.replaceWith(...N.childNodes);else B=N.nextSibling,B&&B.nodeType===3&&(B.textContent=(N.textContent||"")+(B.textContent||""),N.remove());x.length=0,S.normalize()}this.lines.push(...T),this.words.push(...x),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let b=S.cloneNode();return S.replaceWith(b),b.appendChild(S),S.className&&(b.className=S.className.trim().split(" ").map(w=>w+"-mask").join(" ")),b.style.overflow="clip",b}))),this.isSplit=!0,Ac&&u&&a&&Ac.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=M?v.totalTime(M):v),u&&a&&this.elements.forEach((S,b)=>{g[b].width=S.offsetWidth,A&&A.observe(S)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Ac?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(kv),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new Wv(e,t)}static register(e){Ec=Ec||e||window.gsap,Ec&&(Rc=Ec.utils.toArray,Om=Ec.core.context||Om),!Fm&&window.innerWidth>0&&(Ac=document.fonts,Fm=!0)}};Gv.version="3.15.0";wf=Gv});function Zv(s,e,t){return Math.max(s,Math.min(e,t))}function cR(s,e,t){return(1-t)*s+t*e}function uR(s,e,t,n){return cR(s,e,1-Math.exp(-t*n))}function hR(s,e){return(s%e+e)%e}function dR(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}function qv(s,e){return s===1?mR:s===2?e:1}var Yv,fR,pR,Jv,mR,Dr,gR,Kv,$v,jv=Et(()=>{Yv="1.3.26";fR=class{constructor(){Ne(this,"isRunning",!1);Ne(this,"value",0);Ne(this,"from",0);Ne(this,"to",0);Ne(this,"currentTime",0);Ne(this,"lerp");Ne(this,"duration");Ne(this,"easing");Ne(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=Zv(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=uR(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};pR=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){Ne(this,"width",0);Ne(this,"height",0);Ne(this,"scrollHeight",0);Ne(this,"scrollWidth",0);Ne(this,"debouncedResize");Ne(this,"wrapperResizeObserver");Ne(this,"contentResizeObserver");Ne(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ne(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ne(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=dR(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Jv=class{constructor(){Ne(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},mR=100/6,Dr={passive:!1};gR=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Ne(this,"touchStart",{x:0,y:0});Ne(this,"lastDelta",{x:0,y:0});Ne(this,"window",{width:0,height:0});Ne(this,"emitter",new Jv);Ne(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ne(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ne(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ne(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s,i=qv(n,this.window.width),r=qv(n,this.window.height);e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Ne(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Dr),this.element.addEventListener("touchstart",this.onTouchStart,Dr),this.element.addEventListener("touchmove",this.onTouchMove,Dr),this.element.addEventListener("touchend",this.onTouchEnd,Dr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Dr),this.element.removeEventListener("touchstart",this.onTouchStart,Dr),this.element.removeEventListener("touchmove",this.onTouchMove,Dr),this.element.removeEventListener("touchend",this.onTouchEnd,Dr)}},Kv=s=>Math.min(1,1.001-2**(-10*s)),$v=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:M=!0,autoRaf:A=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:x=w,stopInertiaOnNavigate:T=!1,respectReducedMotion:R=!0}={}){Ne(this,"_isScrolling",!1);Ne(this,"_isStopped",!1);Ne(this,"_isLocked",!1);Ne(this,"_preventNextNativeScrollEvent",!1);Ne(this,"_resetVelocityTimeout",null);Ne(this,"_rafId",null);Ne(this,"_isDraggingSelection",!1);Ne(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ne(this,"isTouching");Ne(this,"isIos");Ne(this,"time",0);Ne(this,"userData",{});Ne(this,"lastVelocity",0);Ne(this,"velocity",0);Ne(this,"direction",0);Ne(this,"options");Ne(this,"targetScroll");Ne(this,"animatedScroll");Ne(this,"animate",new fR);Ne(this,"emitter",new Jv);Ne(this,"dimensions");Ne(this,"virtualScroll");Ne(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Ne(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ne(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Ne(this,"onClick",s=>{let e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ne(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ne(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ne(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ne(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Yv,window.lenis||(window.lenis={}),window.lenis.version=Yv,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Kv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:M,autoRaf:A,anchors:v,autoToggle:S,allowNestedScroll:b,naiveDimensions:x,stopInertiaOnNavigate:T,respectReducedMotion:R},this.dimensions=new pR(s,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new gR(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=s,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let p=null;if(typeof h=="string"?(p=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),p||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(p=h),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(A)?0:A)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=h-this.animatedScroll;p>this.limit/2?h-=this.limit:p<-this.limit/2&&(h+=this.limit)}}else h=Zv(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Kv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,u,f,h,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(s);if(i.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),u=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;f=s.scrollWidth,h=s.scrollHeight,d=s.clientWidth,p=s.clientHeight,a=f>d,l=h>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,g,M,A,v,S;if(_==="horizontal")m=Math.round(s.scrollLeft),g=f-d,M=e,A=r,v=a,S=c;else if(_==="vertical")m=Math.round(s.scrollTop),g=h-p,M=t,A=o,v=l,S=u;else return!1;return!S&&(m>=g||m<=0)?!0:(M>0?m<g:m>0)&&A&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?hR(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}}});function IR(){let s=SR.map(([r,o])=>new F(za(r),yR(o),0)),t=new _l(s,!1,"catmullrom",.5).getPoints(900),n=[],i=[];for(let r of t)(n.length===0||r.x>n[n.length-1]+1e-5)&&(n.push(r.x),i.push(r.y));return r=>{if(r<=n[0])return i[0];let o=n.length-1;if(r>=n[o])return i[o];let a=0,l=o;for(;l-a>1;){let u=a+l>>1;n[u]<=r?a=u:l=u}let c=(r-n[a])/(n[l]-n[a]);return i[a]+(i[l]-i[a])*c}}function LR(s){return TR+.09*(Math.exp(-s*26)+Math.exp(-(1-s)*26))}function NR(s){let e=0;for(let t of MR){let n=Math.abs(s-t)/bR;if(n>=1)continue;let i=n<zm?Math.sqrt(1-(n/zm)**2):0,r=1-Hm(zm,1,n);e+=sy*i*r}return e}function ry(s){let e=Hm(0,.085,s),t=1-Hm(.915,1,s),n=.62+.38*Math.pow(Math.min(e,t),.55);return wR*n}function DR(s,e,t,n,i){let r=i*i,o=r*i,a=-.5*o+r-.5*i,l=1.5*o-2.5*r+1,c=-1.5*o+2*r+.5*i,u=.5*o-.5*r;return[s[0]*a+e[0]*l+t[0]*c+n[0]*u,s[1]*a+e[1]*l+t[1]*c+n[1]*u]}function UR(s,e){let t=s.length,n=r=>s[(r%t+t)%t],i=[];for(let r=0;r<e;r++){let o=r/e*t,a=Math.floor(o);i.push(DR(n(a-1),n(a),n(a+1),n(a+2),o-a))}return i}function OR(s,e){let t=LR(s),n=Math.max(t+.28,e(Cf+s*(iy-Cf))),i=NR(s),r=t+i,o=Math.max(t+(n-t)*.58,r+.03),a=ry(s),l=.86+.1*(i/sy),c=o+Math.max(.03,(n-o)*.55);return{yBottom:r,yTop:n,yBelt:o,yRocker:t,points:[[0,t+i*.55],[a*l,r+.01],[a,o],[a*.97,c],[a*.72,n-.02],[0,n],[-a*.72,n-.02],[-a*.97,c],[-a,o],[-a*l,r+.01]]}}function VR(s){let{t:e,y:t,minY:n,belt:i,absZ:r,hw:o,top:a,rocker:l}=s;if(e>ER&&e<AR&&t>i+.008&&!(t>a-.06&&r<o*.6))return FR;let c=i+ty[0],u=i+ty[1];if(t>c&&t<u){if(e<RR)return BR;if(e>CR)return kR}return n<l+.13?zR:Rf}function HR(){let s=IR(),e=[];for(let l=0;l<Af;l++){let c=l/(Af-1),u=Cf+c*(iy-Cf),f=OR(c,s);e.push({t:c,x:u,yBelt:f.yBelt,yTop:f.yTop,yRocker:f.yRocker,hw:ry(c),pts:UR(f.points,qi)})}let t=[];for(let l of e)for(let[c,u]of l.pts)t.push(l.x,u,c);let n=[[],[],[],[],[]];for(let l=0;l<Af-1;l++){let c=e[l],u=e[l+1],f=(c.t+u.t)*.5,h=(c.yBelt+u.yBelt)*.5;for(let d=0;d<qi;d++){let p=(d+1)%qi,_=l*qi+d,m=(l+1)*qi+d,g=(l+1)*qi+p,M=l*qi+p,A=(c.pts[d][1]+c.pts[p][1]+u.pts[d][1]+u.pts[p][1])*.25,v=Math.min(c.pts[d][1],c.pts[p][1],u.pts[d][1],u.pts[p][1]),S=(c.pts[d][0]+c.pts[p][0]+u.pts[d][0]+u.pts[p][0])*.25,b=VR({t:f,y:A,minY:v,belt:h,rocker:(c.yRocker+u.yRocker)*.5,absZ:Math.abs(S),hw:(c.hw+u.hw)*.5,top:(c.yTop+u.yTop)*.5});n[b].push(_,g,m,_,M,g)}}let i=(l,c)=>{let u=e[l],f=l*qi,h=0,d=0;for(let[_,m]of u.pts)h+=m,d+=_;h/=qi,d/=qi;let p=t.length/3;t.push(u.x,h,d);for(let _=0;_<qi;_++){let m=(_+1)%qi,g=f+_,M=f+m,A=(t[g*3+1]-h)*(t[M*3+2]-d)-(t[g*3+2]-d)*(t[M*3+1]-h);n[Rf].push(p,g,M),A*c<0&&n[Rf].splice(n[Rf].length-3,3,p,M,g)}};i(0,-1),i(Af-1,1);let r=[],o=[];for(let l=0;l<n.length;l++){let c=r.length;for(let u of n[l])r.push(u);o.push([c,n[l].length,l])}let a=new kt;a.setAttribute("position",new Dt(t,3)),a.setIndex(r);for(let[l,c,u]of o)c>0&&a.addGroup(l,c,u);return a.computeVertexNormals(),a.computeBoundingBox(),a.computeBoundingSphere(),a}function GR(){let s=new Rn,e=new vt(new Zr(nr,nr,Ef,44,1,!1),new Vn({color:658190,roughness:.88,metalness:.02}));e.rotation.x=Math.PI/2,s.add(e);let t=new Vn({color:9345188,roughness:.36,metalness:.85}),n=new vt(new Zr(nr*.66,nr*.66,Ef*1.02,40),new Vn({color:1382429,roughness:.42,metalness:.8}));n.rotation.x=Math.PI/2,s.add(n);let i=new vt(new Zr(nr*.19,nr*.19,Ef*1.06,24),t);i.rotation.x=Math.PI/2,s.add(i);let r=new ss(nr*.11,nr*.92,.028);for(let o=0;o<5;o++){let a=new vt(r,t);a.rotation.z=o/5*Math.PI,a.position.z=Ef*.5,s.add(a)}return s}function Gm(){let s=new Rn,e=new Pn({color:WR.\u6D77\u6E7E\u84DD,metalness:.15,roughness:.34,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.5}),t=new Pn({color:1779766,metalness:.1,roughness:.07,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.6}),n=new Vn({color:725016,emissive:14478335,emissiveIntensity:2.4,roughness:.28,metalness:.1}),i=new Vn({color:1574404,emissive:16727314,emissiveIntensity:2,roughness:.32,metalness:.1}),r=new Vn({color:790292,roughness:.62,metalness:.5}),o=new vt(HR(),[e,t,n,i,r]);s.add(o);for(let u of[za(330),za(940)])for(let f of[ey,-ey]){let h=GR();h.position.set(u,nr,f),s.add(h)}for(let u of[1,-1]){let f=new vt(new ss(.17,.075,.14),e);f.position.set(za(452),1.02,u*1.03),f.rotation.z=.06*u,s.add(f)}s.updateMatrixWorld(!0);let a=new fn().setFromObject(s),l=a.getCenter(new F);s.position.set(-l.x,-a.min.y,-l.z);let c=new Rn;return c.add(s),{object:c,paintMaterial:e,glassMaterial:t,headMaterial:n,tailMaterial:i,trimMaterial:r,setPaint(u){e.color.setHex(u)}}}var Vm,ny,Qv,_R,xR,vR,za,yR,Cf,iy,SR,MR,bR,sy,TR,wR,nr,Ef,ey,Af,qi,ER,AR,ty,RR,CR,PR,Hm,zm,Rf,FR,BR,kR,zR,WR,oy=Et(()=>{ei();Vm=108,ny=1146,Qv=428,_R=146,xR=4.997,vR=1.455,za=s=>((s-Vm)/(ny-Vm)-.5)*xR,yR=s=>(Qv-s)/(Qv-_R)*vR,Cf=za(Vm),iy=za(ny),SR=[[132,296],[240,268],[424,240],[586,166],[814,154],[972,198],[1114,238],[1146,280]],MR=[.2139,.8015],bR=.084,sy=.52,TR=.2,wR=.985,nr=.335,Ef=.255,ey=.8,Af=100,qi=60,ER=.3,AR=.84,ty=[-.012,.072],RR=.03,CR=.97,PR=s=>s<0?0:s>1?1:s,Hm=(s,e,t)=>{let n=PR((t-s)/(e-s));return n*n*(3-2*n)};zm=.82;Rf=0,FR=1,BR=2,kR=3,zR=4;WR={\u6D77\u6E7E\u84DD:3104720,\u96C5\u7070:9278105,\u971E\u5149\u7D2B:7166630,\u94BB\u77F3\u9ED1:1382172}});function Wm(s,e){if(e===Vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===Hl){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ay=Et(()=>{ei()});function ly(s){let e=new Map,t=new Map,n=s.clone();return cy(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cy(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)cy(s.children[n],e.children[n],t)}var uy=Et(()=>{});function XR(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function rn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function KR(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vs})),s.DefaultMaterial}function To(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZR(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(h)}if(i){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function JR(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $R(s){let e,t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qm(t.attributes):e=s.indices+":"+qm(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qm(s.targets[n]);return e}function qm(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function _g(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jR(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function eC(s,e,t){let n=e.attributes,i=new fn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let u=_g(Va[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){let _=_g(Va[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ui;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function py(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=gg[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Rs(s,e),eC(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ZR(s,e.targets,t):s})}var Pf,ht,Km,Zm,Jm,$m,jm,Qm,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,If,ug,my,Cc,hy,hg,fg,dg,pg,Lf,YR,mg,Ki,Va,fy,dy,Xm,gg,Ur,qR,Ym,QR,xg,gy=Et(()=>{ei();ay();uy();Pf=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $m(t)}),this.register(function(t){return new jm(t)}),this.register(function(t){return new ag(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new cg(t)}),this.register(function(t){return new eg(t)}),this.register(function(t){return new tg(t)}),this.register(function(t){return new ng(t)}),this.register(function(t){return new ig(t)}),this.register(function(t){return new Jm(t)}),this.register(function(t){return new sg(t)}),this.register(function(t){return new Qm(t)}),this.register(function(t){return new og(t)}),this.register(function(t){return new rg(t)}),this.register(function(t){return new Km(t)}),this.register(function(t){return new If(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new If(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ug(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Mi.extractUrlBase(e);o=Mi.resolveURL(c,this.path)}else o=Mi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===my){try{o[ht.KHR_BINARY_GLTF]=new hg(e)}catch(f){i&&i(f);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case ht.KHR_MATERIALS_UNLIT:o[f]=new Zm;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[f]=new fg(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[f]=new dg;break;case ht.KHR_MESH_QUANTIZATION:o[f]=new pg;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Km=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Cn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ws(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bl(u),c.distance=f;break;case"spot":c=new Ml(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Rs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Zm=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return zn}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}},Jm=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},$m=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(r,r)}return Promise.all(i)}},jm=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Qm=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},eg=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},tg=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},ng=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],Cn),Promise.all(i)}},ig=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},sg=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],Cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}},rg=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},og=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return rn(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=rn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ag=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},lg=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},cg=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},If=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}},ug=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ki.TRIANGLES&&c.mode!==Ki.TRIANGLE_STRIP&&c.mode!==Ki.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let p of f){let _=new tt,m=new F,g=new Si,M=new F(1,1,1),A=new cl(p.geometry,p.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),A.setMatrixAt(S,_.compose(m,g,M));let v=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];A.instanceColor=new Bs(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let w=A.geometry;v=new kt,v.name=w.name;for(let x in w.attributes)v.setAttribute(x,w.attributes[x]);for(let x in w.morphAttributes)v.morphAttributes[x]=w.morphAttributes[x];w.index!==null&&v.setIndex(w.index),v.morphTargetsRelative=w.morphTargetsRelative;for(let x of w.groups)v.addGroup(x.start,x.count,x.materialIndex);w.boundingBox!==null&&(v.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(v.boundingSphere=w.boundingSphere.clone()),v.drawRange.start=w.drawRange.start,v.drawRange.count=w.drawRange.count,v.userData=Object.assign({},w.userData),A.geometry=v}let b=l[S];v.setAttribute(S,new Bs(b.array,b.itemSize,b.normalized))}Gt.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),d.push(A)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},my="glTF",Cc=12,hy={JSON:1313821514,BIN:5130562},hg=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Cc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==my)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Cc,r=new DataView(e,Cc),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===hy.JSON){let c=new Uint8Array(e,Cc+o,a);this.content=n.decode(c)}else if(l===hy.BIN){let c=Cc+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=gg[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=gg[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=Va[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},a,c,Cn,h)})})}},dg=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pg=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Lf=class extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,_=p-c,m=-2*d+3*h,g=d-h,M=1-m,A=g-h+f;for(let v=0;v!==a;v++){let S=o[_+v+a],b=o[_+v+l]*u,w=o[p+v+a],x=o[p+v]*u;r[v]=M*S+A*b+m*w+g*x}return r}},YR=new Si,mg=class extends Lf{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return YR.fromArray(r).normalize().toArray(r),r}},Ki={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fy={9728:en,9729:tn,9984:Fu,9985:oa,9986:to,9987:os},dy={33071:Fi,33648:Xo,10497:dr},Xm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qR={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Gr},Ym={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};QR=new tt,xg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new yl(this.options.manager):this.textureLoader=new wl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return To(r,a,i),Rs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Mi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Xm[i.type],a=Va[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Xm[i.type],c=Va[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(d&&d!==f){let g=Math.floor(h/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,A=t.cache.get(M);A||(_=new c(a,g*d,i.count*d/u),A=new pr(_,d/u),t.cache.add(M,A)),m=new mr(A,l,h%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new Kt(_,l,p);if(i.sparse!==void 0){let g=Xm.SCALAR,M=Va[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new M(o[1],A,i.sparse.count*g),b=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,x=S.length;w<x;w++){let T=S[w];if(m.setX(T,b[w*l]),l>=2&&m.setY(T,b[w*l+1]),l>=3&&m.setZ(T,b[w*l+2]),l>=4&&m.setW(T,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=fy[h.magFilter]||tn,u.minFilter=fy[h.minFilter]||os,u.wrapS=dy[h.wrapS]||dr,u.wrapT=dy[h.wrapT]||dr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==tn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(_){let m=new gn(_);m.needsUpdate=!0,h(m)}),t.load(Mi.resolveURL(f,r.path),p,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Rs(f,o),f.userData.mimeType=o.mimeType||jR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ta,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ea,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Vn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){let f=i[ht.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Cn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ht)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ki);let u=r.alphaMode||Ym.OPAQUE;if(u===Ym.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ym.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==zn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zn){let f=r.emissiveFactor;a.emissive=new Pe().setRGB(f[0],f[1],f[2],Cn)}return r.emissiveTexture!==void 0&&o!==zn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Rs(f,r),t.associations.set(f,{materials:e}),r.extensions&&To(i,f,r),f})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return py(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=$R(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=py(new kt,c,t),c.mode===Ki.TRIANGLE_STRIP?h=h.then(d=>Wm(d,Hl)):c.mode===Ki.TRIANGLE_FAN&&(h=h.then(d=>Wm(d,ca))),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?KR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,M=c[d];if(m.mode===Ki.TRIANGLES||m.mode===Ki.TRIANGLE_STRIP||m.mode===Ki.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&v?new al(_,M):new vt(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ki.LINES)g=new ul(_,M);else if(m.mode===Ki.LINE_STRIP)g=new Kr(_,M);else if(m.mode===Ki.LINE_LOOP)g=new hl(_,M);else if(m.mode===Ki.POINTS)g=new fl(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&JR(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Rs(g,r),m.extensions&&To(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&To(i,f[0],r),f[0];let h=new Rn;r.extensions&&To(i,h,r),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new un(Xd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new tt;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ll(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){let d=i.channels[f],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],p=f[2],_=f[3],m=f[4],g=[];for(let A=0,v=h.length;A<v;A++){let S=h[A],b=d[A],w=p[A],x=_[A],T=m[A];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,b,w,x,T);if(R)for(let D=0;D<R.length;D++)g.push(R[D])}let M=new vl(r,void 0,g);return Rs(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,QR)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,p=f[0];u.pivot=new F().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $o:c.length>1?u=new Rn:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Rs(u,r),r.extensions&&To(n,u,r),r.matrix!==void 0){let f=new tt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Rn;n.name&&(r.name=i.createUniqueName(n.name)),Rs(r,n),n.extensions&&To(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?r.add(ly(h)):r.add(h)}let c=u=>{let f=new Map;for(let[h,d]of i.associations)(h instanceof hi||h instanceof gn)&&f.set(h,d);return u.traverse(h=>{let d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ur[r.path]===Ur.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ur[r.path]){case Ur.weights:u=zs;break;case Ur.rotation:u=Vs;break;case Ur.translation:case Ur.scale:u=_r;break;default:n.itemSize===1?u=zs:u=_r;break}let f=i.interpolation!==void 0?qR[i.interpolation]:Wr,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+Ur[r.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_g(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vs?mg:Lf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function sC(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(u=>{let f=u.draco,h=new f.Decoder;try{let d=t(f,h,new Int8Array(l),c),p=d.attributes.map(_=>_.array.buffer);d.index&&p.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},p)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{f.destroy(h)}});break}};function t(o,a,l,c){let u=c.attributeIDs,f=c.attributeTypes,h,d,p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)h=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,h);else if(p===o.POINT_CLOUD)h=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let _={index:null,attributes:[]};for(let m in u){let g=self[f[m]],M,A;if(c.useUniqueIDs)A=u[m],M=a.GetAttributeByUniqueId(h,A);else{if(A=a.GetAttributeId(h,o[u[m]]),A===-1)continue;M=a.GetAttribute(h,A)}let v=i(o,a,h,m,g,M);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return p===o.TRIANGULAR_MESH&&(_.index=n(o,a,h)),o.destroy(h),_}function n(o,a,l){let u=l.num_faces()*3,f=u*4,h=o._malloc(f);a.GetTrianglesUInt32Array(l,f,h);let d=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:d,itemSize:1}}function i(o,a,l,c,u,f){let h=l.num_points(),d=f.num_components(),p=r(o,u),_=d*u.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,g=m/u.BYTES_PER_ELEMENT,M=h*_,A=h*m,v=o._malloc(M);a.GetAttributeDataArrayForAllPoints(l,f,p,M,v);let S=new u(o.HEAPF32.buffer,v,M/u.BYTES_PER_ELEMENT),b;if(_===m)b=S.slice();else{b=new u(A/u.BYTES_PER_ELEMENT);let w=0;for(let x=0,T=S.length;x<T;x++){for(let R=0;R<d;R++)b[w+R]=S[x*d+R];w+=g}}return o._free(v),{name:c,count:h,itemSize:d,array:b,stride:g}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var vg,tC,nC,iC,H2,Nf,_y=Et(()=>{ei();vg=new WeakMap,tC=new URL("../libs/draco/draco_decoder.wasm",__SU7_BASE__).toString(),nC=new URL("../libs/draco/draco_wasm_wrapper.js",__SU7_BASE__).toString(),iC=new URL("../libs/draco/draco_decoder.js",__SU7_BASE__).toString(),H2={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",__SU7_BASE__).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",__SU7_BASE__).toString()},Nf=class extends Bi{constructor(e){super(e),this.decoderPaths={js:nC,wasm:tC,dep_js:iC},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Mi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Mi.resolveURL("draco_decoder.wasm",e),t.dep_js=Mi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new Gs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ht,n).catch(n)}decodeDracoFile(e,t,n,i,r=Cn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(vg.has(e)){let l=vg.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),vg.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new kt;e.index&&t.setIndex(new Kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:l}=e.attributes[n],c;if(o===a)c=new Kt(r,o);else{let u=new pr(r,a);c=new mr(u,o,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ht)return;let n=new Pe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),et.colorSpaceToWorking(n,Ht),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Gs(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{let r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let o=sC.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});function dC(s){let e=new Map;return s.traverse(t=>{if(!t.isMesh||!t.geometry)return;let n=t.geometry,i=n.attributes.position;if(!i)return;let r=Array.isArray(t.material)?t.material:[t.material],o=(n.index?n.index.count:i.count)/3,a=n.groups&&n.groups.length?n.groups:null;if(!a){let l=r[0];l&&e.set(l,(e.get(l)||0)+o);return}for(let l of a){let c=r[l.materialIndex]||r[0];c&&e.set(c,(e.get(c)||0)+l.count/3)}}),e}function mC(s){let t=[...dC(s).entries()].filter(([r])=>pC(r)),n=t.filter(([r])=>lC.test(r.name||"")).sort((r,o)=>o[1]-r[1]);if(n.length)return n[0][0];let i=t.filter(([r])=>!cC.test(r.name||"")).sort((r,o)=>o[1]-r[1]);return i.length?i[0][0]:t.sort((r,o)=>o[1]-r[1])[0]?.[0]||null}function gC(s,e){let t=new Set;s.traverse(n=>{if(!n.isMesh)return;let i=Array.isArray(n.material)?n.material:[n.material];for(let r of i){if(!r||t.has(r.uuid))continue;t.add(r.uuid);let o=r.name||"",a=r===e,l=/glass|window|wind/i.test(o);if(a){r.roughness=Df.roughness,"clearcoat"in r&&(r.clearcoat=Df.clearcoat),"clearcoatRoughness"in r&&(r.clearcoatRoughness=Df.clearcoatRoughness),r.envMapIntensity=Df.envMapIntensity,r.transmission=0,r.needsUpdate=!0;continue}if(l){r.roughness=Math.max(r.roughness??.1,hC),r.transmission=0,r.envMapIntensity=fC,r.needsUpdate=!0;continue}typeof r.roughness=="number"&&(r.roughness=Math.max(r.roughness,uC)),r.transmission&&(r.transmission=0),r.needsUpdate=!0}})}function _C(s){s.updateMatrixWorld(!0);let t=new fn().setFromObject(s).getSize(new F);t.z>t.x?(s.rotation.y=-Math.PI/2,s.updateMatrixWorld(!0)):t.y>Math.max(t.x,t.z)&&(s.rotation.x=Math.PI/2,s.updateMatrixWorld(!0));let i=new fn().setFromObject(s).getSize(new F);s.scale.multiplyScalar(rC/Math.max(.001,i.x)),s.rotation.y+=oC,s.updateMatrixWorld(!0);let r=new fn().setFromObject(s),o=r.getCenter(new F);s.position.x-=o.x,s.position.y-=r.min.y,s.position.z-=o.z,s.updateMatrixWorld(!0)}async function xy(s,e){let t=new Nf;t.setDecoderPath(aC);let n=new Pf;n.setDRACOLoader(t);try{let i=await n.loadAsync(s,c=>{e&&c.lengthComputable&&c.total>0&&e(Math.min(1,c.loaded/c.total))});_C(i.scene);let r=mC(i.scene);gC(i.scene,r),i.scene.traverse(c=>{c.isMesh&&(c.frustumCulled=!1)});let o=new Rn;o.add(i.scene);let l=new fn().setFromObject(o).getSize(new F);return{object:o,paintMaterial:r,paintName:r?r.name||"(\u672A\u547D\u540D)":"(\u672A\u8BC6\u522B)",size:l,setPaint(c){r&&r.color.setHex(c)},dispose(){t.dispose()}}}catch(i){return t.dispose(),{error:i}}}var rC,oC,aC,lC,cC,Df,uC,hC,fC,pC,vy=Et(()=>{ei();gy();_y();rC=4.997,oC=Math.PI,aC="./runtime/draco/",lC=/(^|[\s._-])(car[._-]?body|body[._-]?paint|car[._-]?paint|paint|车身|车漆)([\s._-]|$)/i,cC=/glass|window|wind|screen|chrome|tire|tyre|wheel|rim|brake|caliper|light|lamp|logo|badge|plate|chepai|interior|inside|seat|floor|mirror|carpet|leather|plastic|rubber|shadow|radar|iron|black/i,Df={roughness:.26,clearcoat:1,clearcoatRoughness:.18,envMapIntensity:.85},uC=.14,hC=.13,fC=1.2;pC=s=>s&&!s.transparent&&s.opacity>=1});function Pc(s,e,t,n,i,r,o){let a=new zn;a.color.setHex(n).multiplyScalar(i);let l=new vt(new Jr(e,t),a);return l.position.set(r[0],r[1],r[2]),l.rotation.set(o[0],o[1],o[2]),s.add(l),l}function yy(s){let e=new Yr,t=new vt(new ss(1,1,1),new zn({color:1713462,side:In}));t.scale.set(26,12,26),t.position.y=4,e.add(t),Pc(e,26,8,16777215,1.95,[0,9.6,0],[Math.PI/2,0,0]),Pc(e,18,8,10473727,1.7,[-9.8,4.6,.5],[0,Math.PI/2,0]),Pc(e,18,8,16765608,1.15,[9.8,4.6,-.5],[0,-Math.PI/2,0]),Pc(e,13,2.6,54015,1.25,[0,3.4,-11],[0,0,0]),Pc(e,22,22,1055270,.7,[0,-.7,0],[-Math.PI/2,0,0]);let n=new da(s),i=n.fromScene(e,.04);return n.dispose(),e.traverse(r=>{r.isMesh&&(r.geometry.dispose(),r.material.dispose())}),i.texture}function Sy(){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d"),n=t.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);n.addColorStop(0,"rgb(255,255,255)"),n.addColorStop(.5,"rgb(196,196,196)"),n.addColorStop(.82,"rgb(58,58,58)"),n.addColorStop(1,"rgb(0,0,0)"),t.fillStyle=n,t.fillRect(0,0,512,512);let i=new pl(e);i.colorSpace=ls;let r=new vt(new gl(10,96),new Vn({color:263690,metalness:.94,roughness:.5,envMapIntensity:.3,alphaMap:i,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=-1,r}var My=Et(()=>{ei()});function by(){let s=null,e=null,t=!1;function n(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;s=new i,e=s.createGain(),e.gain.value=0,e.connect(s.destination);let r=s.sampleRate*4,o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0),l=0;for(let _=0;_<r;_++){let m=Math.random()*2-1;l=(l+.02*m)/1.02,a[_]=l*3.4}let c=s.createBufferSource();c.buffer=o,c.loop=!0;let u=s.createBiquadFilter();u.type="bandpass",u.frequency.value=430,u.Q.value=.7;let f=s.createGain();f.gain.value=.34,c.connect(u),u.connect(f),f.connect(e),c.start();let h=s.createGain();h.gain.value=.15,h.connect(e);for(let[_,m]of[[55,-6],[82.5,7],[110,3]]){let g=s.createOscillator();g.type="sine",g.frequency.value=_,g.detune.value=m;let M=s.createGain();M.gain.value=.5,g.connect(M),M.connect(h),g.start()}let d=s.createOscillator();d.frequency.value=.055;let p=s.createGain();return p.gain.value=.1,d.connect(p),p.connect(h.gain),d.start(),!0}return{get isOn(){return t},async toggle(){if(!s&&!n())return!1;s.state==="suspended"&&await s.resume(),t=!t;let i=s.currentTime;return e.gain.cancelScheduledValues(i),e.gain.setValueAtTime(e.gain.value,i),e.gain.linearRampToValueAtTime(t?.5:0,i+(t?2.2:1)),t},setIntensity(i){!s||!t||e.gain.setTargetAtTime(.34+i*.5,s.currentTime,.6)}}}var Ty=Et(()=>{});function vC(s,e){let t=Math.PI*2;return e+Math.round((s-e)/t)*t}function Ey(s,e,t={}){let n=t.onSelect||(()=>{}),i=e.map(P=>{let N=document.createElement("span");return N.className="tag",N.textContent=P,s.appendChild(N),N}),r=i.length,o=Math.PI*(3-Math.sqrt(5)),a=i.map((P,N)=>{let L=r===1?0:1-N/(r-1)*2,B=Math.sqrt(Math.max(0,1-L*L)),G=o*N;return{x:Math.cos(G)*B,y:L,z:Math.sin(G)*B}}),l=-.2,c=0,u=0,f=null,h=null,d=-1,p=1,_=1,m=200,g=new Array(r).fill(!1);function M(){let P=s.getBoundingClientRect();p=Math.max(1,P.width),_=Math.max(1,P.height),m=Math.max(70,Math.min(p,_)*.34)}function A(){let P=p/2,N=_/2,L=Math.cos(l),B=Math.sin(l),G=Math.cos(c),z=Math.sin(c);for(let Z=0;Z<r;Z++){let H=a[Z],C=H.x*G-H.z*z,$=H.x*z+H.z*G,me=H.y*L-$*B,Ie=(H.y*B+$*L+1)/2,Le=i[Z];Le.style.transform="translate3d("+(P+C*m).toFixed(2)+"px,"+(N+me*m).toFixed(2)+"px,0) translate(-50%,-50%) scale("+(.55+Ie*.75).toFixed(3)+")",Le.style.opacity=(.18+Ie*.82).toFixed(3),Le.style.zIndex=String(Math.round(Ie*100));let Xe=Ie<.38;Xe!==g[Z]&&(g[Z]=Xe,Le.classList.toggle("is-far",Xe))}}function v(P,N){u+=N*35e-5,u*=Math.exp(-P*3.2),f!==null?(c=wy(c,vC(c,h),4.6,P),l=wy(l,f,4.6,P)):c+=(.16+u)*P,A()}function S(P){let N=a[P];if(!N)return;let L=Math.sqrt(N.x*N.x+N.z*N.z);h=Math.atan2(N.x,N.z),f=Math.atan2(N.y,L)}function b(){f=null,h=null}let w=!1,x=0,T=-1,R=null;s.addEventListener("pointerdown",P=>{w=!0,x=0,R={x:P.clientX,y:P.clientY};let N=P.target&&P.target.closest?P.target.closest(".tag"):null;T=N?i.indexOf(N):-1,s.setPointerCapture&&s.setPointerCapture(P.pointerId)}),s.addEventListener("pointermove",P=>{if(!w||!R)return;let N=P.clientX-R.x,L=P.clientY-R.y;x+=Math.abs(N)+Math.abs(L),x>4&&b(),c+=N*.006,l=xC(l+L*.006,-1.2,1.2),R={x:P.clientX,y:P.clientY}});function D(){let P=x<6?T:-1;w=!1,R=null,T=-1,P>=0&&(d=P,i.forEach((N,L)=>N.classList.toggle("is-active",L===P)),S(P),n(P))}return s.addEventListener("pointerup",D),s.addEventListener("pointercancel",()=>{w=!1,R=null,T=-1}),M(),A(),{update:v,measure:M,focus:S,release:b,clearActive(){d=-1,i.forEach(P=>P.classList.remove("is-active"))},get active(){return d}}}var xC,wy,Ay=Et(()=>{xC=(s,e,t)=>s<e?e:s>t?t:s,wy=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t*n))});var DC=sS(()=>{ei();C0();P0();N0();U0();Hx();Dv();Xv();jv();oy();vy();My();Ty();Ay();Tn.registerPlugin(Qe,wf);window.__SU7_BOOTED__=!0;var yC="./assets/su7.glb",ci=window.matchMedia("(prefers-reduced-motion: reduce)").matches,SC=document.getElementById("stage"),Ry=document.getElementById("intro-bar"),Fr=new Ah({canvas:SC,antialias:!0,powerPreference:"high-performance"});Fr.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8));Fr.setSize(window.innerWidth,window.innerHeight,!1);Fr.toneMapping=Qr;Fr.toneMappingExposure=1.05;var Ji=new Yr;Ji.background=new Pe(263690);Ji.environment=yy(Fr);Ji.fog=new sl(263690,14,34);var Ga=new un(38,window.innerWidth/window.innerHeight,.1,120);Ji.add(Sy());var Xy=new Ws(14674687,1);Xy.position.set(4,7,5);Ji.add(Xy);var Yy=new Ws(3111935,.6);Yy.position.set(-6,3,-7);Ji.add(Yy);var qy=new Ws(10470655,.5);qy.position.set(-5,2.2,6);Ji.add(qy);Ji.add(new Tl(1450810,1.1));var Dc=new Nh(Fr);Dc.addPass(new Dh(Ji,Ga));var Ky=new _a(new ke(window.innerWidth,window.innerHeight),.16,.5,1.35);Dc.addPass(Ky);Dc.addPass(new Uh);var Uf=[{p:0,pos:[-5.8,3.2,7.2],look:[0,.8,0]},{p:.16,pos:[0,1.25,8.8],look:[0,.8,0]},{p:.32,pos:[6.4,1.5,-6.6],look:[0,.8,0]},{p:.48,pos:[-4.2,5.2,5.4],look:[0,.4,0]},{p:.64,pos:[-5.6,1.45,6],look:[-1.2,.72,2.4]},{p:.82,pos:[-6.4,1.6,-6.2],look:[0,.8,0]},{p:1,pos:[7.5,3.2,8],look:[0,.8,0]}],kf={p:0,x:0,y:0},zf=new F,Or=new F,MC=s=>s*s*(3-2*s),Of=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t*n));function bC(s){let e=Math.max(0,Math.min(1,s)),t=0;for(;t<Uf.length-2&&e>Uf[t+1].p;)t++;let n=Uf[t],i=Uf[t+1],r=i.p-n.p||1,o=MC(Math.max(0,Math.min(1,(e-n.p)/r)));for(let a=0;a<3;a++)zf.setComponent(a,n.pos[a]+(i.pos[a]-n.pos[a])*o),Or.setComponent(a,n.look[a]+(i.look[a]-n.look[a])*o)}var yg=null,Tg=0;ci||(yg=new $v({duration:1.15,smoothWheel:!0,autoRaf:!1}),yg.on("scroll",s=>{Tg=s.velocity||0,Qe.update()}),Tn.ticker.add(s=>yg.raf(s*1e3)),Tn.ticker.lagSmoothing(0));Tn.to(kf,{p:1,ease:"none",scrollTrigger:{trigger:document.documentElement,start:"top top",end:"bottom bottom",scrub:ci?!0:.7}});var Je={y:0,targetY:0,velocity:0,dragging:!1,lift:0,targetLift:0,lastX:0,lastY:0,pointerId:null},Cs={x:0,y:0,dampedX:0,dampedY:0},TC=window.matchMedia("(hover: hover) and (pointer: fine)").matches,wC="a, button, input, .tags, .swatch, .audio, .topbar";function Cy(s){return!!(s&&s.closest&&s.closest(wC))}if(TC){window.addEventListener("pointermove",e=>{ci||Je.dragging||(Cs.x=e.clientX/window.innerWidth*2-1,Cs.y=e.clientY/window.innerHeight*2-1)},{passive:!0}),window.addEventListener("pointerdown",e=>{e.button!==0||Cy(e.target)||(Je.dragging=!0,Je.velocity=0,Je.lastX=e.clientX,Je.lastY=e.clientY,Je.pointerId=e.pointerId,document.body.classList.add("is-dragging"))}),window.addEventListener("pointermove",e=>{if(!Je.dragging||e.pointerId!==Je.pointerId)return;let t=e.clientX-Je.lastX,n=e.clientY-Je.lastY;Je.lastX=e.clientX,Je.lastY=e.clientY,Je.targetY+=t*.008,Je.velocity=t*.008*.55,Je.targetLift=Math.max(-.35,Math.min(.35,Je.targetLift+n*.006))},{passive:!0});let s=e=>{!Je.dragging||e&&e.pointerId!==Je.pointerId||(Je.dragging=!1,Je.pointerId=null,document.body.classList.remove("is-dragging"))};window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s),window.addEventListener("dblclick",e=>{Cy(e.target)||(Je.targetY=Math.round(Je.y/(Math.PI*2))*Math.PI*2,Je.targetLift=0,Je.velocity=0)})}var EC={overall:{pos:[-5.8,3.2,7.2],look:[0,.8,0]},aero:{pos:[0,1.25,8.8],look:[0,.8,0]},front:{pos:[-6.2,2,5.4],look:[-2.2,.75,1.1]},rear:{pos:[6.4,2.1,-5.6],look:[2.2,.8,-1.1]},wheel:{pos:[-3.8,1.2,5.2],look:[-1.55,.45,1]},cabin:{pos:[-2.2,2.8,4.6],look:[.2,1,0]}},Py=[{label:"CLTC 700km",view:"overall"},{label:"0.195Cd",view:"aero"},{label:"5.28s",view:"rear"},{label:"\u6469\u5FB7\u7EB3\u5E73\u53F0",view:"wheel"},{label:"\u78B3\u5316\u7845",view:"rear"},{label:"\u6F8E\u6E43OS",view:"cabin"},{label:"Xiaomi Pilot",view:"front"},{label:"\u8D85\u7EA7\u7535\u673A",view:"rear"},{label:"\u524D\u53CC\u53C9\u81C2",view:"wheel"},{label:"\u540E\u4E94\u8FDE\u6746",view:"wheel"},{label:"\u70ED\u6CF5\u7A7A\u8C03",view:"cabin"},{label:"3000mm \u8F74\u8DDD",view:"overall"},{label:"517L \u540E\u5907\u7BB1",view:"rear"},{label:"V2L \u5BF9\u5916\u653E\u7535",view:"rear"}],An={w:0,px:0,py:0,pz:0,lx:0,ly:0,lz:0},Ha=0,wg=0,Zy=0,Iy=0;function AC(s){let e=EC[s];e&&(wg=Ha,Zy=performance.now()+1600,Je.targetY=Math.round(Je.y/(Math.PI*2))*Math.PI*2,Je.targetLift=0,Je.velocity=0,Tn.to(An,{w:1,px:e.pos[0],py:e.pos[1],pz:e.pos[2],lx:e.look[0],ly:e.look[1],lz:e.look[2],duration:ci?0:1.2,ease:"power2.inOut",overwrite:!0}))}function RC(){An.w<.001||Tn.to(An,{w:0,duration:ci?0:.9,ease:"power2.out",overwrite:!0})}var CC=document.getElementById("tags"),Hf=Ey(CC,Py.map(s=>s.label),{onSelect(s){let e=Py[s];e&&AC(e.view)}});Qe.create({trigger:document.documentElement,start:"top top",end:"bottom bottom",onUpdate:s=>{if(Ha=s.progress,Math.abs(Ha-Iy)>.012){Iy=Ha;let e=Math.PI*2,t=Math.round(Je.targetY/e)*e;Math.abs(Je.targetY-t)>.04&&(Je.targetY=t,Je.targetLift=0,Je.velocity=0)}if(performance.now()<Zy){wg=Ha;return}Math.abs(Ha-wg)>.02&&(RC(),Hf.release())}});document.querySelectorAll("[data-split]").forEach(s=>{new wf(s,{type:"lines",linesClass:"line"})});Tn.set(".line",{yPercent:118,opacity:0});Tn.set("[data-fade]",{y:22,opacity:0});function Jy(s,e){let t=s.querySelectorAll(".line"),n=s.querySelectorAll("[data-fade]"),i=Array.prototype.slice.call(t).concat(Array.prototype.slice.call(n));if(!i.length)return;if(ci||e){Tn.set(i,{yPercent:0,opacity:1,y:0});return}let r=Tn.timeline({defaults:{ease:"power3.out"}});t.length&&r.to(t,{yPercent:0,opacity:1,duration:1.05,stagger:.075},0),n.length&&r.to(n,{y:0,opacity:1,duration:.9,stagger:.055},.12)}var Vf=Tn.utils.toArray(".panel");Vf.forEach(s=>{Qe.create({trigger:s,start:"top 72%",once:!0,onEnter:()=>Jy(s,!1)})});Tn.utils.toArray("[data-count]").forEach(s=>{let e=parseFloat(s.dataset.count),t=parseInt(s.dataset.decimals||"0",10);if(ci){s.textContent=e.toFixed(t);return}let n={value:0};Qe.create({trigger:s,start:"top 85%",once:!0,onEnter:()=>Tn.to(n,{value:e,duration:1.6,ease:"power2.out",onUpdate:()=>{s.textContent=n.value.toFixed(t)}})})});var Zi=null;function $y(s){Zi&&Zi.setPaint&&Zi.setPaint(s)}document.querySelectorAll("[data-color]").forEach(s=>{s.addEventListener("click",()=>{let e=parseInt(s.dataset.color.replace("#",""),16);document.querySelectorAll("[data-color]").forEach(n=>{n.setAttribute("aria-pressed",String(n===s))});let t=document.querySelector("#paint-name");t&&(t.textContent=s.dataset.name),$y(e)})});var jy=by(),Ic=document.getElementById("audio-toggle");Ic&&Ic.addEventListener("click",async()=>{let s=await jy.toggle();Ic.setAttribute("aria-pressed",String(s)),Ic.dataset.state=s?"on":"off",Ic.querySelector(".audio__text").textContent=s?"\u5173\u95ED\u73AF\u5883\u97F3":"\u5F00\u542F\u73AF\u5883\u97F3"});var Ly=document.getElementById("hud-bar"),Ny=document.getElementById("hud-index"),Dy=document.getElementById("hud-label"),PC=["\u5E8F\u7AE0","\u8BBE\u8BA1","\u7A7A\u6C14\u52A8\u529B\u5B66","\u706F\u7EC4","\u6027\u80FD","\u8F66\u6F06","\u5173\u952E\u8BCD","\u5C3E\u58F0"];Vf.forEach((s,e)=>{Qe.create({trigger:s,start:"top 55%",end:"bottom 45%",onToggle:t=>{t.isActive&&(Ny&&(Ny.textContent=String(e+1).padStart(2,"0")+" / "+String(Vf.length).padStart(2,"0")),Dy&&(Dy.textContent=PC[e]||""))}})});var Qy=!1,Uy=document.getElementById("panel-tags");Uy&&Qe.create({trigger:Uy,start:"top 85%",end:"bottom 15%",onToggle:s=>{Qy=s.isActive,s.isActive&&Hf.measure()}});var Lc={t:0},Oy=performance.now(),Fy=0,By=document.querySelector(".scroll-hint"),Nc=new F,Ff=new F,ky=new F,zy=new F;function eS(){let s=performance.now(),e=Math.min((s-Oy)/1e3,.05);Oy=s,Lc.t+=e,bC(kf.p);let t=Math.max(1,Math.min(2.3,1.05/Ga.aspect));Nc.set(Or.x+(zf.x-Or.x)*t,Or.y+(zf.y-Or.y)*t,Or.z+(zf.z-Or.z)*t),Ff.copy(Or),An.w>.001&&(ky.set(An.lx+(An.px-An.lx)*t,An.ly+(An.py-An.ly)*t,An.lz+(An.pz-An.lz)*t),zy.set(An.lx,An.ly,An.lz),Nc.lerp(ky,An.w),Ff.lerp(zy,An.w));let n=ci?0:1,i=Je.dragging?0:1;if(Cs.dampedX=Of(Cs.dampedX,Cs.x*i,4,e),Cs.dampedY=Of(Cs.dampedY,Cs.y*i,4,e),Je.dragging||ci||(Je.velocity*=Math.exp(-e*2.1),Je.targetY+=Je.velocity),Je.y=Of(Je.y,Je.targetY,9,e),Je.lift=Of(Je.lift,Je.targetLift,6,e),Ga.position.set(Nc.x+Math.sin(Lc.t*.35)*.05*n-Cs.dampedX*.12,Nc.y+Math.sin(Lc.t*.5)*.03*n-Cs.dampedY*.07,Nc.z+Math.cos(Lc.t*.28)*.04*n),Ff.y+=Je.lift,Ga.lookAt(Ff),Zi){let r=ci?0:Math.sin(Lc.t*.22)*.012;Zi.object.rotation.y=Je.y+r}Qy&&Hf.update(e,Tg),Fy%8===0&&jy.setIntensity(Math.min(1,Math.abs(Tg)*.02)),Fy++,Ly&&(Ly.style.transform="scaleX("+kf.p.toFixed(4)+")"),By&&(By.style.opacity=String(Math.max(0,1-kf.p*10))),Dc.render(),requestAnimationFrame(eS)}requestAnimationFrame(eS);var Vy=0;function IC(){let s=window.innerWidth,e=window.innerHeight;Ga.aspect=s/e,Ga.updateProjectionMatrix(),Fr.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),Fr.setSize(s,e,!1),Dc.setSize(s,e),Ky.setSize(s,e),Hf.measure(),clearTimeout(Vy),Vy=setTimeout(()=>Qe.refresh(),220)}window.addEventListener("resize",IC);var Sg=document.getElementById("intro"),Hy=document.querySelector(".intro__note"),Bf=document.getElementById("model-note"),LC=Vf[0],Gy=900,Mg=0,Wy=!1;function bg(s){Mg=Math.max(Mg,Math.min(1,s)),Ry&&(Ry.style.transform="scaleX("+Mg.toFixed(3)+")")}function tS(){Wy||(Wy=!0,Jy(LC,!1),Sg&&(Tn.to(Sg,{opacity:0,duration:ci?0:.9,delay:ci?0:.15,onComplete:()=>{Sg.style.display="none"}}),Tn.to(".hud, .topbar, .scroll-hint, .drag-hint, .audio",{opacity:1,duration:ci?0:.9,delay:ci?0:.35})))}Tn.set([".hud",".topbar",".scroll-hint",".drag-hint",".audio"],{opacity:0});async function NC(){let s=performance.now();bg(.1);let e=location.protocol!=="file:",t=e?await Promise.race([xy(yC,i=>bg(.1+i*.8)),new Promise(i=>setTimeout(()=>i(null),2e4))]):null;if(t&&t.object){Zi=t,Ji.add(Zi.object);let i=document.querySelector('[data-color][aria-pressed="true"]');i&&$y(parseInt(i.dataset.color.replace("#",""),16)),document.documentElement.dataset.model="official",document.documentElement.dataset.paint=t.paintName||"",Bf&&(Bf.textContent="\u4E09\u7EF4\u8F66\u8EAB\u4F7F\u7528 assets/su7.glb \u6A21\u578B")}else Zi=Gm(),Ji.add(Zi.object),document.documentElement.dataset.model="procedural",Bf&&(Bf.textContent="\u4E09\u7EF4\u8F66\u8EAB\u7531\u4EE3\u7801\u7A0B\u5E8F\u5316\u751F\u6210"),Hy&&(Hy.textContent=e?"\u672A\u627E\u5230 assets/su7.glb\uFF0C\u5F53\u524D\u4F7F\u7528\u7A0B\u5E8F\u5316\u8F66\u8EAB":"\u672C\u5730\u6587\u4EF6\u6A21\u5F0F\uFF1A\u7A0B\u5E8F\u5316\u8F66\u8EAB\u3002\u8981\u770B\u5B98\u65B9\u8F66\u6A21\u8BF7\u53CC\u51FB start.cmd");let n=performance.now()-s;n<Gy&&await new Promise(i=>setTimeout(i,Gy-n)),bg(1),requestAnimationFrame(()=>setTimeout(tS,ci?0:220))}NC().catch(()=>{Zi||(Zi=Gm(),Ji.add(Zi.object)),tS()})});DC();})();
