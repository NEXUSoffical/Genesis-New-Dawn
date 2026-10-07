var Nc=Object.defineProperty;var Uc=(a,e,t)=>e in a?Nc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var R=(a,e,t)=>Uc(a,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";import{s as rn,P as na}from"./ProfileManager-vr3li8HJ.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="186",Fc=0,Po=1,Bc=2,$s=1,Oc=2,jn=3,an=0,Zt=1,tt=2,Li=0,is=1,Io=2,Lo=3,Do=4,Gc=5,Ln=100,Hc=101,Vc=102,Wc=103,zc=104,qc=200,$c=201,Xc=202,Yc=203,Fl=204,Bl=205,Kc=206,Zc=207,Jc=208,Qc=209,jc=210,ed=211,td=212,id=213,nd=214,sa=0,ra=1,aa=2,as=3,oa=4,la=5,ca=6,da=7,Xa=0,sd=1,rd=2,xi=0,Ol=1,Gl=2,Hl=3,Vl=4,Wl=5,zl=6,ql=7,$l=300,on=301,On=302,xr=303,Sr=304,fr=306,os=1e3,Ii=1001,ha=1002,Pt=1003,ad=1004,gs=1005,Wt=1006,Mr=1007,nn=1008,jt=1009,Xl=1010,Yl=1011,ls=1012,Ya=1013,Mi=1014,bi=1015,wi=1016,Ka=1017,Za=1018,cs=1020,Kl=35902,Zl=35899,Jl=1021,Ql=1022,ci=1023,ki=1026,sn=1027,jl=1028,Ja=1029,ln=1030,Qa=1031,ja=1033,Xs=33776,Ys=33777,Ks=33778,Zs=33779,ua=35840,fa=35841,pa=35842,ma=35843,ga=36196,va=37492,ya=37496,ba=37488,_a=37489,js=37490,xa=37491,Sa=37808,Ma=37809,wa=37810,Ta=37811,Ea=37812,Aa=37813,Ca=37814,Ra=37815,Pa=37816,Ia=37817,La=37818,Da=37819,ka=37820,Na=37821,Ua=36492,Fa=36494,Ba=36495,Oa=36283,Ga=36284,er=36285,Ha=36286,od=3200,tr=0,ld=1,qi="",ni="srgb",ir="srgb-linear",nr="linear",st="srgb",wr=7680,cd=519,dd=512,hd=513,ud=514,eo=515,fd=516,pd=517,to=518,md=519,ec=35044,ko="300 es",_i=2e3,ds=2001;function gd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function sr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function vd(){const a=sr("canvas");return a.style.display="block",a}const No={};function rr(...a){const e="THREE."+a.shift();console.log(e,...a)}function tc(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ie(...a){a=tc(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ke(...a){a=tc(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Un(...a){const e=a.join(" ");e in No||(No[e]=!0,Ie(...a))}function yd(a,e,t){return new Promise(function(i,s){function n(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}const bd={[sa]:ra,[aa]:ca,[oa]:da,[as]:la,[ra]:sa,[ca]:aa,[da]:oa,[la]:as};class hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Va=180/Math.PI;function $i(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[a&255]+Gt[a>>8&255]+Gt[a>>16&255]+Gt[a>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Xe(a,e,t){return Math.max(e,Math.min(t,a))}function _d(a,e){return(a%e+e)%e}function Tr(a,e,t){return(1-t)*a+t*e}function vi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mo=class mo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,r=this.y-e.y;return this.x=n*i-r*s+e.x,this.y=n*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mo.prototype.isVector2=!0;let De=mo;class Hn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=n[r+0],m=n[r+1],g=n[r+2],v=n[r+3];if(u!==v||l!==d||c!==m||h!==g){let f=l*d+c*m+h*g+u*v;f<0&&(d=-d,m=-m,g=-g,v=-v,f=-f);let p=1-o;if(f<.9995){const x=Math.acos(f),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,l=l*p+d*o,c=c*p+m*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+m*o,h=h*p+g*o,u=u*p+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,n,r){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=n[r],d=n[r+1],m=n[r+2],g=n[r+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(n/2),d=l(i/2),m=l(s/2),g=l(n/2);switch(r){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(n-c)*m,this._z=(r-s)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(n+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(n-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(r-s)/m,this._x=(n+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+s*c-n*l,this._y=s*h+r*l+n*o-i*c,this._z=n*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,n=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,n=-n,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const go=class go{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,r=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),h=2*(o*t-n*s),u=2*(n*i-r*t);return this.x=t+l*c+r*u-o*h,this.y=i+l*h+o*c-n*u,this.z=s+l*u+n*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};go.prototype.isVector3=!0;let D=go;const Er=new D,Uo=new Hn,vo=class vo{constructor(e,t,i,s,n,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,o,l,c)}set(e,t,i,s,n,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=s[0],f=s[3],p=s[6],x=s[1],T=s[4],_=s[7],w=s[2],S=s[5],A=s[8];return n[0]=r*v+o*x+l*w,n[3]=r*f+o*T+l*S,n[6]=r*p+o*_+l*A,n[1]=c*v+h*x+u*w,n[4]=c*f+h*T+u*S,n[7]=c*p+h*_+u*A,n[2]=d*v+m*x+g*w,n[5]=d*f+m*T+g*S,n[8]=d*p+m*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*n*h+i*o*l+s*n*c-s*r*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*n,m=c*n-r*l,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*r)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*n-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,r,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Un("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return Un("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return Un("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vo.prototype.isMatrix3=!0;let Fe=vo;const Ar=new Fe,Fo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){const a={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,n,r){return this.enabled===!1||n===r||!n||!r||(this.spaces[n].transfer===st&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[n].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===st&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b))),s},workingToColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},colorSpaceToWorking:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,r){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,n){return Un("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,n)},toWorkingColorSpace:function(s,n){return Un("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[ir]:{primaries:e,whitePoint:i,transfer:nr,toXYZ:Fo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Fo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),a}const $e=xd();function Di(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let pn;class Sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pn===void 0&&(pn=sr("canvas")),pn.width=e.width,pn.height=e.height;const s=pn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=Di(n[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Md=0;class io{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?n.push(Cr(s[r].image)):n.push(Cr(s[r]))}else n=Cr(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function Cr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Sd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let wd=0;const Rr=new D;class zt extends hn{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Ii,s=Ii,n=Wt,r=nn,o=ci,l=jt,c=zt.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=$i(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=$l;zt.DEFAULT_ANISOTROPY=1;const yo=class yo{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,_=(m+1)/2,w=(p+1)/2,S=(h+d)/4,A=(u+v)/4,b=(g+f)/4;return T>_&&T>w?T<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(T),s=S/i,n=A/i):_>w?_<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(_),i=S/s,n=b/s):w<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(w),i=A/n,s=b/n),this.set(i,s,n,t),this}let x=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yo.prototype.isVector4=!0;let yt=yo;class Td extends hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},n=new zt(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new io(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Td{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ic extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ur=class ur{constructor(e,t,i,s,n,r,o,l,c,h,u,d,m,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,o,l,c,h,u,d,m,g,v,f)}set(e,t,i,s,n,r,o,l,c,h,u,d,m,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=n,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ur().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/mn.setFromMatrixColumn(e,0).length(),n=1/mn.setFromMatrixColumn(e,1).length(),r=1/mn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Oi.crossVectors(i,Jt),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Oi.crossVectors(i,Jt)),Oi.normalize(),vs.crossVectors(Jt,Oi),s[0]=Oi.x,s[4]=vs.x,s[8]=Jt.x,s[1]=Oi.y,s[5]=vs.y,s[9]=Jt.y,s[2]=Oi.z,s[6]=vs.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],f=i[10],p=i[14],x=i[3],T=i[7],_=i[11],w=i[15],S=s[0],A=s[4],b=s[8],E=s[12],P=s[1],I=s[5],k=s[9],B=s[13],L=s[2],H=s[6],Y=s[10],K=s[14],ne=s[3],G=s[7],$=s[11],Q=s[15];return n[0]=r*S+o*P+l*L+c*ne,n[4]=r*A+o*I+l*H+c*G,n[8]=r*b+o*k+l*Y+c*$,n[12]=r*E+o*B+l*K+c*Q,n[1]=h*S+u*P+d*L+m*ne,n[5]=h*A+u*I+d*H+m*G,n[9]=h*b+u*k+d*Y+m*$,n[13]=h*E+u*B+d*K+m*Q,n[2]=g*S+v*P+f*L+p*ne,n[6]=g*A+v*I+f*H+p*G,n[10]=g*b+v*k+f*Y+p*$,n[14]=g*E+v*B+f*K+p*Q,n[3]=x*S+T*P+_*L+w*ne,n[7]=x*A+T*I+_*H+w*G,n[11]=x*b+T*k+_*Y+w*$,n[15]=x*E+T*B+_*K+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],f=e[11],p=e[15],x=l*m-c*d,T=o*m-c*u,_=o*d-l*u,w=r*m-c*h,S=r*d-l*h,A=r*u-o*h;return t*(v*x-f*T+p*_)-i*(g*x-f*w+p*S)+s*(g*T-v*w+p*A)-n*(g*_-v*S+f*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-i*(n*h-o*l)+s*(n*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],f=e[14],p=e[15],x=t*o-i*r,T=t*l-s*r,_=t*c-n*r,w=i*l-s*o,S=i*c-n*o,A=s*c-n*l,b=h*v-u*g,E=h*f-d*g,P=h*p-m*g,I=u*f-d*v,k=u*p-m*v,B=d*p-m*f,L=x*B-T*k+_*I+w*P-S*E+A*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return e[0]=(o*B-l*k+c*I)*H,e[1]=(s*k-i*B-n*I)*H,e[2]=(v*A-f*S+p*w)*H,e[3]=(d*S-u*A-m*w)*H,e[4]=(l*P-r*B-c*E)*H,e[5]=(t*B-s*P+n*E)*H,e[6]=(f*_-g*A-p*T)*H,e[7]=(h*A-d*_+m*T)*H,e[8]=(r*k-o*P+c*b)*H,e[9]=(i*P-t*k-n*b)*H,e[10]=(g*S-v*_+p*x)*H,e[11]=(u*_-h*S-m*x)*H,e[12]=(o*E-r*I-l*b)*H,e[13]=(t*I-i*E+s*b)*H,e[14]=(v*T-g*w-f*x)*H,e[15]=(h*w-u*T+d*x)*H,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,r=e.x,o=e.y,l=e.z,c=n*r,h=n*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,r){return this.set(1,i,n,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,r=t._y,o=t._z,l=t._w,c=n+n,h=r+r,u=o+o,d=n*c,m=n*h,g=n*u,v=r*h,f=r*u,p=o*u,x=l*c,T=l*h,_=l*u,w=i.x,S=i.y,A=i.z;return s[0]=(1-(v+p))*w,s[1]=(m+_)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(m-_)*S,s[5]=(1-(d+p))*S,s[6]=(f+x)*S,s[7]=0,s[8]=(g+T)*A,s[9]=(f-x)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let r=mn.set(s[0],s[1],s[2]).length();const o=mn.set(s[4],s[5],s[6]).length(),l=mn.set(s[8],s[9],s[10]).length();n<0&&(r=-r),ri.copy(this);const c=1/r,h=1/o,u=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,s,n,r,o=_i,l=!1){const c=this.elements,h=2*n/(t-e),u=2*n/(i-s),d=(t+e)/(t-e),m=(i+s)/(i-s);let g,v;if(l)g=n/(r-n),v=r*n/(r-n);else if(o===_i)g=-(r+n)/(r-n),v=-2*r*n/(r-n);else if(o===ds)g=-r/(r-n),v=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,n,r,o=_i,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,v;if(l)g=1/(r-n),v=r/(r-n);else if(o===_i)g=-2/(r-n),v=-(r+n)/(r-n);else if(o===ds)g=-1/(r-n),v=-n/(r-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ur.prototype.isMatrix4=!0;let mt=ur;const mn=new D,ri=new mt,Ad=new D(0,0,0),Cd=new D(1,1,1),Oi=new D,vs=new D,Jt=new D,Oo=new mt,Go=new Hn;class Ni{constructor(e=0,t=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Go.setFromEuler(this),this.setFromQuaternion(Go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const Ho=new D,gn=new Hn,Ei=new mt,ys=new D,Wn=new D,Pd=new D,Id=new Hn,Vo=new D(1,0,0),Wo=new D(0,1,0),zo=new D(0,0,1),qo={type:"added"},Ld={type:"removed"},vn={type:"childadded",child:null},Pr={type:"childremoved",child:null};class It extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new Ni,i=new Hn,s=new D(1,1,1);function n(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis(zo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis(zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Wn,ys,this.up):Ei.lookAt(ys,Wn,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),gn.setFromRotationMatrix(Ei),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qo),vn.child=e,this.dispatchEvent(vn),vn.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qo),vn.child=e,this.dispatchEvent(vn),vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*s,n[13]+=i-n[1]*t-n[5]*i-n[9]*s,n[14]+=s-n[2]*t-n[6]*i-n[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Lr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=_d(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,r=2*i-n;this.r=Lr(r,n,e+1/3),this.g=Lr(r,n,e),this.b=Lr(r,n,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=ni){function i(n){n!==void 0&&parseFloat(n)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(n,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=nc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return $e.workingToColorSpace(Ht.copy(this),e),Math.round(Xe(Ht.r*255,0,255))*65536+Math.round(Xe(Ht.g*255,0,255))*256+Math.round(Xe(Ht.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,n=Ht.b,r=Math.max(i,s,n),o=Math.min(i,s,n);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(s-n)/u+(s<n?6:0);break;case s:l=(n-i)/u+2;break;case n:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ni){$e.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(bs);const i=Tr(Gi.h,bs.h,t),s=Tr(Gi.s,bs.s,t),n=Tr(Gi.l,bs.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Le;Le.NAMES=nc;class so{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ro extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ai=new D,Ai=new D,Dr=new D,Ci=new D,yn=new D,bn=new D,$o=new D,kr=new D,Nr=new D,Ur=new D,Fr=new yt,Br=new yt,Or=new yt;class ei{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){ai.subVectors(s,t),Ai.subVectors(i,t),Dr.subVectors(e,t);const r=ai.dot(ai),o=ai.dot(Ai),l=ai.dot(Dr),c=Ai.dot(Ai),h=Ai.dot(Dr),u=r*c-o*o;if(u===0)return n.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(r*h-o*l)*d;return n.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,s,n,r,o,l){return this.getBarycoord(e,t,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ci.x),l.addScaledVector(r,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,i,s,n,r){return Fr.setScalar(0),Br.setScalar(0),Or.setScalar(0),Fr.fromBufferAttribute(e,t),Br.fromBufferAttribute(e,i),Or.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Fr,n.x),r.addScaledVector(Br,n.y),r.addScaledVector(Or,n.z),r}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Ai.subVectors(e,t),ai.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ai.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let r,o;yn.subVectors(s,i),bn.subVectors(n,i),kr.subVectors(e,i);const l=yn.dot(kr),c=bn.dot(kr);if(l<=0&&c<=0)return t.copy(i);Nr.subVectors(e,s);const h=yn.dot(Nr),u=bn.dot(Nr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(yn,r);Ur.subVectors(e,n);const m=yn.dot(Ur),g=bn.dot(Ur);if(g>=0&&m<=g)return t.copy(n);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(bn,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return $o.subVectors(n,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector($o,o);const p=1/(f+v+d);return r=v*p,o=d*p,t.copy(i).addScaledVector(yn,r).addScaledVector(bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=n.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,oi):oi.fromBufferAttribute(n,r),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const s=e.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zn),xs.subVectors(this.max,zn),_n.subVectors(e.a,zn),xn.subVectors(e.b,zn),Sn.subVectors(e.c,zn),Hi.subVectors(xn,_n),Vi.subVectors(Sn,xn),Ki.subVectors(_n,Sn);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Ki.z,Ki.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Ki.z,0,-Ki.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Ki.y,Ki.x,0];return!Gr(t,_n,xn,Sn,xs)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,_n,xn,Sn,xs))?!1:(Ss.crossVectors(Hi,Vi),t=[Ss.x,Ss.y,Ss.z],Gr(t,_n,xn,Sn,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new D,new D,new D,new D,new D,new D,new D,new D],oi=new D,_s=new fs,_n=new D,xn=new D,Sn=new D,Hi=new D,Vi=new D,Ki=new D,zn=new D,xs=new D,Ss=new D,Zi=new D;function Gr(a,e,t,i,s){for(let n=0,r=a.length-3;n<=r;n+=3){Zi.fromArray(a,n);const o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mt=new D,Ms=new De;let kd=0;class Si extends hn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rc extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Nd=new fs,qn=new D,Hr=new D;class pr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nd.setFromPoints(e).getCenter(i);let s=0;for(let n=0,r=e.length;n<r;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qn.subVectors(e,this.center);const t=qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qn.copy(e.center).add(Hr)),this.expandByPoint(qn.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ud=0;const ii=new mt,Vr=new It,Mn=new D,Qt=new fs,$n=new fs,Nt=new D;class Ft extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?rc:sc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Fe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,n=e.length;s<n;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];Qt.setFromBufferAttribute(n),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,$n.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,$n.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint($n.min),Qt.expandByPoint($n.max))}Qt.getCenter(i);let s=0;for(let n=0,r=e.count;n<r;n++)Nt.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let n=0,r=t.length;n<r;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Mn.fromBufferAttribute(e,c),Nt.add(Mn)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Si(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new D,l[b]=new D;const c=new D,h=new D,u=new D,d=new De,m=new De,g=new De,v=new D,f=new D;function p(b,E,P){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,P),d.fromBufferAttribute(n,b),m.fromBufferAttribute(n,E),g.fromBufferAttribute(n,P),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(I),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(I),o[b].add(v),o[E].add(v),o[P].add(v),l[b].add(f),l[E].add(f),l[P].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,E=x.length;b<E;++b){const P=x[b],I=P.start,k=P.count;for(let B=I,L=I+k;B<L;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new D,_=new D,w=new D,S=new D;function A(b){w.fromBufferAttribute(s,b),S.copy(w);const E=o[b];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),_.crossVectors(S,E);const I=_.dot(l[b])<0?-1:1;r.setXYZW(b,T.x,T.y,T.z,I)}for(let b=0,E=x.length;b<E;++b){const P=x[b],I=P.start,k=P.count;for(let B=I,L=I+k;B<L;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new D,n=new D,r=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),r.fromBufferAttribute(t,f),h.subVectors(r,n),u.subVectors(s,n),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,n),u.subVectors(s,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new Si(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const $t=new D;class ar{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new Si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wr=new D,Bd=new D,Od=new Fe;class zi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wr.subVectors(i,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Wr),n=this.normal.dot(s);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Od.getNormalMatrix(e),s=this.coplanarPoint(Wr).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Gd=0;class Xi extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=is,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const o in n){const l=n[o];delete l.metadata,r.push(l)}return r}if(t){const n=s(e.textures),r=s(e.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ao extends Xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wn;const Xn=new D,Tn=new D,En=new D,An=new De,Yn=new De,ac=new mt,ws=new D,Kn=new D,Ts=new D,Xo=new De,zr=new De,Yo=new De;class oc extends It{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",wn===void 0){wn=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fd(t,5);wn.setIndex([0,1,2,0,2,3]),wn.setAttribute("position",new ar(i,3,0,!1)),wn.setAttribute("uv",new ar(i,2,3,!1))}this.geometry=wn,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tn.setFromMatrixScale(this.matrixWorld),ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),En.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tn.multiplyScalar(-En.z);const i=this.material.rotation;let s,n;i!==0&&(n=Math.cos(i),s=Math.sin(i));const r=this.center;Es(ws.set(-.5,-.5,0),En,r,Tn,s,n),Es(Kn.set(.5,-.5,0),En,r,Tn,s,n),Es(Ts.set(.5,.5,0),En,r,Tn,s,n),Xo.set(0,0),zr.set(1,0),Yo.set(1,1);let o=e.ray.intersectTriangle(ws,Kn,Ts,!1,Xn);if(o===null&&(Es(Kn.set(-.5,.5,0),En,r,Tn,s,n),zr.set(0,1),o=e.ray.intersectTriangle(ws,Ts,Kn,!1,Xn),o===null))return;const l=e.ray.origin.distanceTo(Xn);l<e.near||l>e.far||t.push({distance:l,point:Xn.clone(),uv:ei.getInterpolation(Xn,ws,Kn,Ts,Xo,zr,Yo,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Es(a,e,t,i,s,n){An.subVectors(a,t).addScalar(.5).multiply(i),s!==void 0?(Yn.x=n*An.x-s*An.y,Yn.y=s*An.x+n*An.y):Yn.copy(An),a.copy(e),a.x+=Yn.x,a.y+=Yn.y,a.applyMatrix4(ac)}const Pi=new D,qr=new D,As=new D,Cs=new D;class oo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qr.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(qr);const n=e.distanceTo(t)*.5,r=-this.direction.dot(As),o=Cs.dot(this.direction),l=-Cs.dot(As),c=Cs.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*l-o,d=r*o-l,g=n*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,m=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=n,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d=-n,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*n+o)),d=u>0?-n:Math.min(Math.max(-n,-l),n),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-n,-l),n),m=d*(d+2*l)+c):(u=Math.max(0,-(r*n+o)),d=u>0?n:Math.min(Math.max(-n,-l),n),m=-u*u+d*(d+2*l)+c);else d=r>0?-n:n,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qr).addScaledVector(As,d),m}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,n=e.radius*e.radius;if(s>n)return null;const r=Math.sqrt(n-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(n=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,n){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,m=e.z-r.z,g=t.x-r.x,v=t.y-r.y,f=t.z-r.z,p=i.x-r.x,x=i.y-r.y,T=i.z-r.z,_=Math.abs(l),w=Math.abs(c),S=Math.abs(h);let A,b,E,P,I,k,B,L,H,Y,K,ne;if(_>=w&&_>=S?(E=l,k=u,H=g,ne=p,l>=0?(A=c,b=h,P=d,I=m,B=v,L=f,Y=x,K=T):(A=h,b=c,P=m,I=d,B=f,L=v,Y=T,K=x)):w>=S?(E=c,k=d,H=v,ne=x,c>=0?(A=h,b=l,P=m,I=u,B=f,L=g,Y=T,K=p):(A=l,b=h,P=u,I=m,B=g,L=f,Y=p,K=T)):(E=h,k=m,H=f,ne=T,h>=0?(A=l,b=c,P=u,I=d,B=g,L=v,Y=p,K=x):(A=c,b=l,P=d,I=u,B=v,L=g,Y=x,K=p)),E===0)return null;const G=A/E,$=b/E,Q=1/E,Te=P-G*k,we=I-$*k,rt=B-G*H,ze=L-$*H,Ye=Y-G*ne,Z=K-$*ne,te=Ye*ze-Z*rt,be=Te*Z-we*Ye,Ue=rt*we-ze*Te;if(s){if(te<0||be<0||Ue<0)return null}else if((te<0||be<0||Ue<0)&&(te>0||be>0||Ue>0))return null;const ve=te+be+Ue;if(ve===0)return null;const He=Q*(te*k+be*H+Ue*ne);return(ve>0?He<0:He>0)?null:this.at(He/ve,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ko=new mt,Ji=new oo,Rs=new pr,Zo=new D,Ps=new D,Is=new D,Ls=new D,$r=new D,Ds=new D,Jo=new D,ks=new D;class se extends It{constructor(e=new Ft,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){Ds.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],u=n[l];h!==0&&($r.fromBufferAttribute(u,e),r?Ds.addScaledVector($r,h):Ds.addScaledVector($r.sub(t),h))}t.add(Ds)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(n),Ji.copy(e.ray).recast(e.near),!(Rs.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Rs,Zo)===null||Ji.origin.distanceToSquared(Zo)>(e.far-e.near)**2))&&(Ko.copy(n).invert(),Ji.copy(e.ray).applyMatrix4(Ko),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const n=this.geometry,r=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,u=n.attributes.normal,d=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=r[f.materialIndex],x=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let _=x,w=T;_<w;_+=3){const S=o.getX(_),A=o.getX(_+1),b=o.getX(_+2);s=Ns(this,p,e,i,c,h,u,S,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const x=o.getX(f),T=o.getX(f+1),_=o.getX(f+2);s=Ns(this,r,e,i,c,h,u,x,T,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=r[f.materialIndex],x=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let _=x,w=T;_<w;_+=3){const S=_,A=_+1,b=_+2;s=Ns(this,p,e,i,c,h,u,S,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const x=f,T=f+1,_=f+2;s=Ns(this,r,e,i,c,h,u,x,T,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Hd(a,e,t,i,s,n,r,o){let l;if(e.side===Zt?l=i.intersectTriangle(r,n,s,!0,o):l=i.intersectTriangle(s,n,r,e.side===an,o),l===null)return null;ks.copy(o),ks.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:a}}function Ns(a,e,t,i,s,n,r,o,l,c){a.getVertexPosition(o,Ps),a.getVertexPosition(l,Is),a.getVertexPosition(c,Ls);const h=Hd(a,e,t,i,Ps,Is,Ls,Jo);if(h){const u=new D;ei.getBarycoord(Jo,Ps,Is,Ls,u),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,u,new De)),n&&(h.uv1=ei.getInterpolatedAttribute(n,o,l,c,u,new De)),r&&(h.normal=ei.getInterpolatedAttribute(r,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Ps,Is,Ls,d.normal),h.face=d,h.barycoord=u}return h}class Vd extends zt{constructor(e=null,t=1,i=1,s,n,r,o,l,c=Pt,h=Pt,u,d){super(null,r,o,l,c,h,s,n,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qi=new pr,Wd=new De(.5,.5),Us=new D;class lo{constructor(e=new zi,t=new zi,i=new zi,s=new zi,n=new zi,r=new zi){this.planes=[e,t,i,s,n,r]}set(e,t,i,s,n,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){const s=this.planes,n=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],m=n[7],g=n[8],v=n[9],f=n[10],p=n[11],x=n[12],T=n[13],_=n[14],w=n[15];if(s[0].setComponents(c-r,m-h,p-g,w-x).normalize(),s[1].setComponents(c+r,m+h,p+g,w+x).normalize(),s[2].setComponents(c+o,m+u,p+v,w+T).normalize(),s[3].setComponents(c-o,m-u,p-v,w-T).normalize(),i)s[4].setComponents(l,d,f,_).normalize(),s[5].setComponents(c-l,m-d,p-f,w-_).normalize();else if(s[4].setComponents(c-l,m-d,p-f,w-_).normalize(),t===_i)s[5].setComponents(c+l,m+d,p+f,w+_).normalize();else if(t===ds)s[5].setComponents(l,d,f,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=Wd.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Us.x=s.normal.x>0?e.max.x:e.min.x,Us.y=s.normal.y>0?e.max.y:e.min.y,Us.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class co extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const or=new D,lr=new D,Qo=new mt,Zn=new oo,Fs=new pr,Xr=new D,jo=new D;class zd extends It{constructor(e=new Ft,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)or.fromBufferAttribute(t,s-1),lr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=or.distanceTo(lr);e.setAttribute("lineDistance",new ft(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Fs.radius+=n,e.ray.intersectsSphere(Fs)===!1)return;Qo.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Qo);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=m,f=g-1;v<f;v+=c){const p=h.getX(v),x=h.getX(v+1),T=Bs(this,e,Zn,l,p,x,v);T&&t.push(T)}if(this.isLineLoop){const v=h.getX(g-1),f=h.getX(m),p=Bs(this,e,Zn,l,v,f,g-1);p&&t.push(p)}}else{const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=m,f=g-1;v<f;v+=c){const p=Bs(this,e,Zn,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Bs(this,e,Zn,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Bs(a,e,t,i,s,n,r){const o=a.geometry.attributes.position;if(or.fromBufferAttribute(o,s),lr.fromBufferAttribute(o,n),t.distanceSqToSegment(or,lr,Xr,jo)>i)return;Xr.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Xr);if(!(c<e.near||c>e.far))return{distance:c,point:jo.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const el=new D,tl=new D;class lc extends zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)el.fromBufferAttribute(t,s),tl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+el.distanceTo(tl);e.setAttribute("lineDistance",new ft(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cc extends zt{constructor(e=[],t=on,i,s,n,r,o,l,c,h){super(e,t,i,s,n,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yi extends zt{constructor(e,t,i,s,n,r,o,l,c){super(e,t,i,s,n,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends zt{constructor(e,t,i=Mi,s,n,r,o=Pt,l=Pt,c,h=ki,u=1){if(h!==ki&&h!==sn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,n,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qd extends hs{constructor(e,t=Mi,i=on,s,n,r=Pt,o=Pt,l,c=ki){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,n,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dc extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pe extends Ft{constructor(e=1,t=1,i=1,s=1,n=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:r};const o=this;s=Math.floor(s),n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,r,n,0),g("z","y","x",1,-1,i,t,-e,r,n,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,n,4),g("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(v,f,p,x,T,_,w,S,A,b,E){const P=_/A,I=w/b,k=_/2,B=w/2,L=S/2,H=A+1,Y=b+1;let K=0,ne=0;const G=new D;for(let $=0;$<Y;$++){const Q=$*I-B;for(let Te=0;Te<H;Te++){const we=Te*P-k;G[v]=we*x,G[f]=Q*T,G[p]=L,c.push(G.x,G.y,G.z),G[v]=0,G[f]=0,G[p]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(Te/A),u.push(1-$/b),K+=1}}for(let $=0;$<b;$++)for(let Q=0;Q<A;Q++){const Te=d+Q+H*$,we=d+Q+H*($+1),rt=d+(Q+1)+H*($+1),ze=d+(Q+1)+H*$;l.push(Te,we,ze),l.push(we,rt,ze),ne+=6}o.addGroup(m,ne,E),m+=ne,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qe extends Ft{constructor(e=1,t=1,i=1,s=32,n=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),n=Math.floor(n);const h=[],u=[],d=[],m=[];let g=0;const v=[],f=i/2;let p=0;x(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(m,2));function x(){const _=new D,w=new D;let S=0;const A=(t-e)/i;for(let b=0;b<=n;b++){const E=[],P=b/n,I=P*(t-e)+e;for(let k=0;k<=s;k++){const B=k/s,L=B*l+o,H=Math.sin(L),Y=Math.cos(L);w.x=I*H,w.y=-P*i+f,w.z=I*Y,u.push(w.x,w.y,w.z),_.set(H,A,Y).normalize(),d.push(_.x,_.y,_.z),m.push(B,1-P),E.push(g++)}v.push(E)}for(let b=0;b<s;b++)for(let E=0;E<n;E++){const P=v[E][b],I=v[E+1][b],k=v[E+1][b+1],B=v[E][b+1];(e>0||E!==0)&&(h.push(P,I,B),S+=3),(t>0||E!==n-1)&&(h.push(I,k,B),S+=3)}c.addGroup(p,S,0),p+=S}function T(_){const w=g,S=new De,A=new D;let b=0;const E=_===!0?e:t,P=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,f*P,0),d.push(0,P,0),m.push(.5,.5),g++;const I=g;for(let k=0;k<=s;k++){const L=k/s*l+o,H=Math.cos(L),Y=Math.sin(L);A.x=E*Y,A.y=f*P,A.z=E*H,u.push(A.x,A.y,A.z),d.push(0,P,0),S.x=H*.5+.5,S.y=Y*.5*P+.5,m.push(S.x,S.y),g++}for(let k=0;k<s;k++){const B=w+k,L=I+k;_===!0?h.push(L,L+1,B):h.push(L+1,L,B),b+=3}c.addGroup(p,b,_===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cn extends Qe{constructor(e=1,t=1,i=32,s=1,n=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,n,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:r,thetaLength:o}}static fromJSON(e){return new cn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ho extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const n=[],r=[];o(s),c(i),h(),this.setAttribute("position",new ft(n,3)),this.setAttribute("normal",new ft(n.slice(),3)),this.setAttribute("uv",new ft(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new D,_=new D,w=new D;for(let S=0;S<t.length;S+=3)m(t[S+0],T),m(t[S+1],_),m(t[S+2],w),l(T,_,w,x)}function l(x,T,_,w){const S=w+1,A=[];for(let b=0;b<=S;b++){A[b]=[];const E=x.clone().lerp(_,b/S),P=T.clone().lerp(_,b/S),I=S-b;for(let k=0;k<=I;k++)k===0&&b===S?A[b][k]=E:A[b][k]=E.clone().lerp(P,k/I)}for(let b=0;b<S;b++)for(let E=0;E<2*(S-b)-1;E++){const P=Math.floor(E/2);E%2===0?(d(A[b][P+1]),d(A[b+1][P]),d(A[b][P])):(d(A[b][P+1]),d(A[b+1][P+1]),d(A[b+1][P]))}}function c(x){const T=new D;for(let _=0;_<n.length;_+=3)T.x=n[_+0],T.y=n[_+1],T.z=n[_+2],T.normalize().multiplyScalar(x),n[_+0]=T.x,n[_+1]=T.y,n[_+2]=T.z}function h(){const x=new D;for(let T=0;T<n.length;T+=3){x.x=n[T+0],x.y=n[T+1],x.z=n[T+2];const _=f(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;r.push(_,1-w)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const T=r[x+0],_=r[x+2],w=r[x+4],S=Math.max(T,_,w),A=Math.min(T,_,w);S>.9&&A<.1&&(T<.2&&(r[x+0]+=1),_<.2&&(r[x+2]+=1),w<.2&&(r[x+4]+=1))}}function d(x){n.push(x.x,x.y,x.z)}function m(x,T){const _=x*3;T.x=e[_+0],T.y=e[_+1],T.z=e[_+2]}function g(){const x=new D,T=new D,_=new D,w=new D,S=new De,A=new De,b=new De;for(let E=0,P=0;E<n.length;E+=9,P+=6){x.set(n[E+0],n[E+1],n[E+2]),T.set(n[E+3],n[E+4],n[E+5]),_.set(n[E+6],n[E+7],n[E+8]),S.set(r[P+0],r[P+1]),A.set(r[P+2],r[P+3]),b.set(r[P+4],r[P+5]),w.copy(x).add(T).add(_).divideScalar(3);const I=f(w);v(S,P+0,x,I),v(A,P+2,T,I),v(b,P+4,_,I)}}function v(x,T,_,w){w<0&&x.x===1&&(r[T]=x.x-1),_.x===0&&_.z===0&&(r[T]=w/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.vertices,e.indices,e.radius,e.detail)}}const Os=new D,Gs=new D,Yr=new D,Hs=new ei;class $d extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),n=Math.cos(Js*t),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:f,c:p}=Hs;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Hs.getNormal(Yr),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const T=(x+1)%3,_=u[x],w=u[T],S=Hs[h[x]],A=Hs[h[T]],b=`${_}_${w}`,E=`${w}_${_}`;E in d&&d[E]?(Yr.dot(d[E].normal)<=n&&(m.push(S.x,S.y,S.z),m.push(A.x,A.y,A.z)),d[E]=null):b in d||(d[b]={index0:c[x],index1:c[T],normal:Yr.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:f}=d[g];Os.fromBufferAttribute(o,v),Gs.fromBufferAttribute(o,f),m.push(Os.x,Os.y,Os.z),m.push(Gs.x,Gs.y,Gs.z)}this.setAttribute("position",new ft(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cr extends ho{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cr(e.radius,e.detail)}}class mr extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],v=[],f=[];for(let p=0;p<h;p++){const x=p*d-r;for(let T=0;T<c;T++){const _=T*u-n;g.push(_,-x,0),v.push(0,0,1),f.push(T/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const T=x+c*p,_=x+c*(p+1),w=x+1+c*(p+1),S=x+1+c*p;m.push(T,_,S),m.push(_,w,S)}this.setIndex(m),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class us extends Ft{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new D,d=new D,m=[],g=[],v=[],f=[];for(let p=0;p<=i;p++){const x=[],T=p/i,_=r+T*o,w=e*Math.cos(_),S=Math.sqrt(e*e-w*w);let A=0;p===0&&r===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let b=0;b<=t;b++){const E=b/t,P=s+E*n;u.x=-S*Math.cos(P),u.y=w,u.z=S*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(E+A,1-T),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const T=h[p][x+1],_=h[p][x],w=h[p+1][x],S=h[p+1][x+1];(p!==0||r>0)&&m.push(T,_,S),(p!==i-1||l<Math.PI)&&m.push(_,w,S)}this.setIndex(m),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dn extends Ft{constructor(e=1,t=.4,i=12,s=48,n=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:n,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new D,m=new D,g=new D;for(let v=0;v<=i;v++){const f=r+v/i*o;for(let p=0;p<=s;p++){const x=p/s*n;m.x=(e+t*Math.cos(f))*Math.cos(x),m.y=(e+t*Math.cos(f))*Math.sin(x),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let f=1;f<=s;f++){const p=(s+1)*v+f-1,x=(s+1)*(v-1)+f-1,T=(s+1)*(v-1)+f,_=(s+1)*v+f;l.push(p,x,_),l.push(x,T,_)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Gn(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(il(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(il(s[0])){const n=[];for(let r=0,o=s.length;r<o;r++)n[r]=s[r].clone();e[t][i]=n}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xt(a){const e={};for(let t=0;t<a.length;t++){const i=Gn(a[t]);for(const s in i)e[s]=i[s]}return e}function il(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Xd(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function hc(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Yd={clone:Gn,merge:Xt};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(s.value);break;case"v2":this.uniforms[i].value=new De().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jd extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nt extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ne extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jd extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gr extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class eh extends gr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Kr=new mt,nl=new D,sl=new D;class uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(nl),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth);const n=this._frameExtents,r=s?s.z/n.x:1,o=s?s.w/n.y:1,l=s?s.x/n.x:0,c=s?s.y/n.y:0;e.coordinateSystem===ds||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vs=new D,Ws=new Hn,fi=new D;let fc=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vs,Ws,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Ws,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vs,Ws,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Ws,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Wi=new D,rl=new De,al=new De;class Yt extends fc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,i,s,n,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;n+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class th extends uc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class es extends gr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class uo extends fc{constructor(e=-1,t=1,i=1,s=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,r=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ih extends uc{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dr extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fo extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cn=-90,Rn=1;class nh extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Cn,Rn,e,t);s.layers=this.layers,this.add(s);const n=new Yt(Cn,Rn,e,t);n.layers=this.layers,this.add(n);const r=new Yt(Cn,Rn,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Cn,Rn,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Cn,Rn,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Cn,Rn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,r,o,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sh extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ol=new mt;class rh{constructor(e,t,i=0,s=1/0){this.ray=new oo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ol),this}intersectObject(e,t=!0,i=[]){return Wa(e,this,i,t),i.sort(ll),i}intersectObjects(e,t=!0,i=[]){for(let s=0,n=e.length;s<n;s++)Wa(e[s],this,i,t);return i.sort(ll),i}}function ll(a,e){return a.distance-e.distance}function Wa(a,e,t,i){let s=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const n=a.children;for(let r=0,o=n.length;r<o;r++)Wa(n[r],e,t,!0)}}const bo=class bo{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=s,this}};bo.prototype.isMatrix2=!0;let cl=bo;class ah extends lc{constructor(e=10,t=10,i=4473924,s=8947848){i=new Le(i),s=new Le(s);const n=t/2,r=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=t;d++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===n?i:s;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const h=new Ft;h.setAttribute("position",new ft(l,3)),h.setAttribute("color",new ft(c,3));const u=new co({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function dl(a,e,t,i){const s=oh(i);switch(t){case Jl:return a*e;case jl:return a*e/s.components*s.byteLength;case Ja:return a*e/s.components*s.byteLength;case ln:return a*e*2/s.components*s.byteLength;case Qa:return a*e*2/s.components*s.byteLength;case Ql:return a*e*3/s.components*s.byteLength;case ci:return a*e*4/s.components*s.byteLength;case ja:return a*e*4/s.components*s.byteLength;case Xs:case Ys:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Zs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(a,16)*Math.max(e,8)/4;case ua:case pa:return Math.max(a,8)*Math.max(e,8)/2;case ga:case va:case ba:case _a:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ya:case js:case xa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fa:case Ba:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Oa:case Ga:return Math.ceil(a/4)*Math.ceil(e/4)*8;case er:case Ha:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oh(a){switch(a){case jt:case Xl:return{byteLength:1,components:1};case ls:case Yl:case wi:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case Mi:case Ya:case bi:return{byteLength:4,components:1};case Kl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pc(){let a=null,e=!1,t=null,i=null;function s(n,r){i=a.requestAnimationFrame(s),t(n,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function lh(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=a.HALF_FLOAT:m=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=a.SHORT;else if(c instanceof Uint32Array)m=a.UNSIGNED_INT;else if(c instanceof Int32Array)m=a.INT;else if(c instanceof Int8Array)m=a.BYTE;else if(c instanceof Uint8Array)m=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:n,update:r}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
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
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
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
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
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
#endif`,Mh=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ph=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lh=`#define PI 3.141592653589793
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
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`vec3 transformedNormal = objectNormal;
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
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
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
}`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tu=`#ifdef USE_ENVMAP
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
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,au=`PhysicalMaterial material;
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
#endif`,ou=`uniform sampler2D dfgLUT;
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
}`,lu=`
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,du=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bu=`#if defined( USE_POINTS_UV )
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
#endif`,_u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lu=`#ifdef USE_NORMALMAP
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
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yu=`float getShadowMask() {
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
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,yf=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,Af=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Rf=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,Lf=`#define PHONG
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
}`,Df=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Uf=`#define TOON
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
}`,Ff=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Hf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:ch,alphahash_pars_fragment:dh,alphamap_fragment:hh,alphamap_pars_fragment:uh,alphatest_fragment:fh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:gh,batching_pars_vertex:vh,batching_vertex:yh,begin_vertex:bh,beginnormal_vertex:_h,bsdfs:xh,iridescence_fragment:Sh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Th,clipping_planes_pars_vertex:Eh,clipping_planes_vertex:Ah,color_fragment:Ch,color_pars_fragment:Rh,color_pars_vertex:Ph,color_vertex:Ih,common:Lh,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Nh,displacementmap_vertex:Uh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Bh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Hh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Wh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:tu,envmap_vertex:qh,fog_vertex:$h,fog_pars_vertex:Xh,fog_fragment:Yh,fog_pars_fragment:Kh,gradientmap_pars_fragment:Zh,lightmap_pars_fragment:Jh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:jh,lights_pars_begin:eu,lights_toon_fragment:iu,lights_toon_pars_fragment:nu,lights_phong_fragment:su,lights_phong_pars_fragment:ru,lights_physical_fragment:au,lights_physical_pars_fragment:ou,lights_fragment_begin:lu,lights_fragment_maps:cu,lights_fragment_end:du,lightprobes_pars_fragment:hu,logdepthbuf_fragment:uu,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:vu,map_particle_fragment:yu,map_particle_pars_fragment:bu,metalnessmap_fragment:_u,metalnessmap_pars_fragment:xu,morphinstance_vertex:Su,morphcolor_vertex:Mu,morphnormal_vertex:wu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Eu,normal_fragment_begin:Au,normal_fragment_maps:Cu,normal_pars_fragment:Ru,normal_pars_vertex:Pu,normal_vertex:Iu,normalmap_pars_fragment:Lu,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Uu,opaque_fragment:Fu,packing:Bu,premultiplied_alpha_fragment:Ou,project_vertex:Gu,dithering_fragment:Hu,dithering_pars_fragment:Vu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:zu,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:$u,shadowmap_vertex:Xu,shadowmask_pars_fragment:Yu,skinbase_vertex:Ku,skinning_pars_vertex:Zu,skinning_vertex:Ju,skinnormal_vertex:Qu,specularmap_fragment:ju,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:df,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:vf,distance_vert:yf,distance_frag:bf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:Sf,linedashed_frag:Mf,meshbasic_vert:wf,meshbasic_frag:Tf,meshlambert_vert:Ef,meshlambert_frag:Af,meshmatcap_vert:Cf,meshmatcap_frag:Rf,meshnormal_vert:Pf,meshnormal_frag:If,meshphong_vert:Lf,meshphong_frag:Df,meshphysical_vert:kf,meshphysical_frag:Nf,meshtoon_vert:Uf,meshtoon_frag:Ff,points_vert:Bf,points_frag:Of,shadow_vert:Gf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:Wf},ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},gi={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};gi.physical={uniforms:Xt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const zs={r:0,b:0,g:0},zf=new mt,mc=new Fe;mc.set(-1,0,0,0,1,0,0,0,1);function qf(a,e,t,i,s,n){const r=new Le(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function m(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const _=x.backgroundBlurriness>0;T=e.get(T,_)}return T}function g(x){let T=!1;const _=m(x);_===null?f(r,o):_&&_.isColor&&(f(_,1),T=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(a.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(x,T){const _=m(T);_&&(_.isCubeTexture||_.mapping===fr)?(c===void 0&&(c=new se(new Pe(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Gn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mc),c.material.toneMapped=$e.getTransfer(_.colorSpace)!==st,(h!==_||u!==_.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new se(new mr(2,2),new Ti({name:"BackgroundMaterial",uniforms:Gn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$e.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=a.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,T){x.getRGB(zs,hc(a)),t.buffers.color.setClear(zs.r,zs.g,zs.b,T,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,T=1){r.set(x),o=T,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,f(r,o)},render:g,addToRenderList:v,dispose:p}}function $f(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=d(null);let n=s,r=!1;function o(I,k,B,L,H){let Y=!1;const K=u(I,L,B,k);n!==K&&(n=K,c(n.object)),Y=m(I,L,B,H),Y&&g(I,L,B,H),H!==null&&e.update(H,a.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,_(I,k,B,L),H!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return a.createVertexArray()}function c(I){return a.bindVertexArray(I)}function h(I){return a.deleteVertexArray(I)}function u(I,k,B,L){const H=L.wireframe===!0;let Y=i[k.id];Y===void 0&&(Y={},i[k.id]=Y);const K=I.isInstancedMesh===!0?I.id:0;let ne=Y[K];ne===void 0&&(ne={},Y[K]=ne);let G=ne[B.id];G===void 0&&(G={},ne[B.id]=G);let $=G[H];return $===void 0&&($=d(l()),G[H]=$),$}function d(I){const k=[],B=[],L=[];for(let H=0;H<t;H++)k[H]=0,B[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,k,B,L){const H=n.attributes,Y=k.attributes;let K=0;const ne=B.getAttributes();for(const G in ne)if(ne[G].location>=0){const Q=H[G];let Te=Y[G];if(Te===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),Q===void 0||Q.attribute!==Te||Te&&Q.data!==Te.data)return!0;K++}return n.attributesNum!==K||n.index!==L}function g(I,k,B,L){const H={},Y=k.attributes;let K=0;const ne=B.getAttributes();for(const G in ne)if(ne[G].location>=0){let Q=Y[G];Q===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));const Te={};Te.attribute=Q,Q&&Q.data&&(Te.data=Q.data),H[G]=Te,K++}n.attributes=H,n.attributesNum=K,n.index=L}function v(){const I=n.newAttributes;for(let k=0,B=I.length;k<B;k++)I[k]=0}function f(I){p(I,0)}function p(I,k){const B=n.newAttributes,L=n.enabledAttributes,H=n.attributeDivisors;B[I]=1,L[I]===0&&(a.enableVertexAttribArray(I),L[I]=1),H[I]!==k&&(a.vertexAttribDivisor(I,k),H[I]=k)}function x(){const I=n.newAttributes,k=n.enabledAttributes;for(let B=0,L=k.length;B<L;B++)k[B]!==I[B]&&(a.disableVertexAttribArray(B),k[B]=0)}function T(I,k,B,L,H,Y,K){K===!0?a.vertexAttribIPointer(I,k,B,H,Y):a.vertexAttribPointer(I,k,B,L,H,Y)}function _(I,k,B,L){v();const H=L.attributes,Y=B.getAttributes(),K=k.defaultAttributeValues;for(const ne in Y){const G=Y[ne];if(G.location>=0){let $=H[ne];if($===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const Q=$.normalized,Te=$.itemSize,we=e.get($);if(we===void 0)continue;const rt=we.buffer,ze=we.type,Ye=we.bytesPerElement,Z=ze===a.INT||ze===a.UNSIGNED_INT||$.gpuType===Ya;if($.isInterleavedBufferAttribute){const te=$.data,be=te.stride,Ue=$.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)p(G.location+ve,te.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<G.locationSize;ve++)f(G.location+ve);a.bindBuffer(a.ARRAY_BUFFER,rt);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,Te/G.locationSize,ze,Q,be*Ye,(Ue+Te/G.locationSize*ve)*Ye,Z)}else{if($.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<G.locationSize;te++)f(G.location+te);a.bindBuffer(a.ARRAY_BUFFER,rt);for(let te=0;te<G.locationSize;te++)T(G.location+te,Te/G.locationSize,ze,Q,Te*Ye,Te/G.locationSize*te*Ye,Z)}}else if(K!==void 0){const Q=K[ne];if(Q!==void 0)switch(Q.length){case 2:a.vertexAttrib2fv(G.location,Q);break;case 3:a.vertexAttrib3fv(G.location,Q);break;case 4:a.vertexAttrib4fv(G.location,Q);break;default:a.vertexAttrib1fv(G.location,Q)}}}}x()}function w(){E();for(const I in i){const k=i[I];for(const B in k){const L=k[B];for(const H in L){const Y=L[H];for(const K in Y)h(Y[K].object),delete Y[K];delete L[H]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;const k=i[I.id];for(const B in k){const L=k[B];for(const H in L){const Y=L[H];for(const K in Y)h(Y[K].object),delete Y[K];delete L[H]}}delete i[I.id]}function A(I){for(const k in i){const B=i[k];for(const L in B){const H=B[L];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const K in Y)h(Y[K].object),delete Y[K];delete H[I.id]}}}function b(I){for(const k in i){const B=i[k],L=I.isInstancedMesh===!0?I.id:0,H=B[L];if(H!==void 0){for(const Y in H){const K=H[Y];for(const ne in K)h(K[ne].object),delete K[ne];delete H[Y]}delete B[L],Object.keys(B).length===0&&delete i[k]}}}function E(){P(),r=!0,n!==s&&(n=s,c(n.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function Xf(a,e,t){let i;function s(l){i=l}function n(l,c){a.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,h){h!==0&&(a.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,i,1)}this.setMode=s,this.render=n,this.renderInstances=r,this.renderMultiDraw=o}function Yf(a,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==ci&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jt&&A!==bi&&!b&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),f=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=a.getParameter(a.MAX_SAMPLES),S=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:_,maxSamples:w,samples:S}}function Kf(a){const e=this;let t=null,i=0,s=!1,n=!1;const r=new zi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,p=a.get(u);if(!s||g===null||g.length===0||n&&!f)n?h(null):c();else{const x=n?0:i,T=x*4;let _=p.clippingState||null;l.value=_,_=h(g,d,T,m);for(let w=0;w!==T;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=m+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let T=0,_=m;T!==v;++T,_+=4)r.copy(u[T]).applyMatrix4(x,o),r.normal.toArray(f,_),f[_+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}const Dn=4,Zf=6,Jf=20,Qf=256,Jn=new uo,hl=new Le;let Zr=null,Jr=0,Qr=0,jr=!1;const jf=new D,ji=new D;class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,n={}){const{size:r=256,position:o=jf}=n;Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Jr,Qr),this._renderer.xr.enabled=jr,e.scissorTest=!1,Pn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===on||e.mapping===On?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:wi,format:ci,colorSpace:ir,depthBuffer:!1},s=fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ep(n)),this._blurMaterial=ip(n,e,t),this._ggxMaterial=tp(n,e,t)}return s}_compileMaterial(e){const t=new se(new Ft,e);this._renderer.compile(t,Jn)}_sceneToCubeUV(e,t,i,s,n){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(hl),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Pe,new ke({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let p=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,p=!0):(f.color.copy(hl),p=!0);for(let T=0;T<6;T++){const _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x+h[T],n.y,n.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y+h[T],n.z)):(l.up.set(0,c[T],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y,n.z+h[T]));const w=this._cubeSize;Pn(s,_*w,T>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=m,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===on||e.mapping===On;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const n=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=n;const o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;Pn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Jn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let n=1;n<s;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,n=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,m=u*d,{_lodMax:g}=this,v=this._sizeLods[i],f=3*v*(i>g-Dn?i-g+Dn:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Pn(n,f,p,3*v,2*v),s.setRenderTarget(n),s.render(o,Jn),l.envMap.value=n.texture,l.roughness.value=0,l.mipInt.value=g-i,Pn(e,f,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Jn)}_blur(e,t,i,s){const n=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,n,t,i,r),this._blurPass(n,e,i,i,r)}_blurPass(e,t,i,s,n){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=n,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-Dn?s-this._lodMax+Dn:0),d=4*(this._cubeSize-h);Pn(t,u,d,3*h,2*h),r.setRenderTarget(t),r.render(l,Jn)}}function ep(a){const e=[],t=[];let i=a;const s=a-Dn+1+Zf;for(let n=0;n<s;n++){const r=Math.pow(2,i);e.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,m=3,g=new Float32Array(m*d*u),v=new Float32Array(m*d*u);for(let p=0;p<u;p++){const x=p%3*2/3-1,T=p>2?0:-1,_=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];g.set(_,m*d*p);for(let w=0;w<d;w++){const S=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?ji.set(1,A,S):p===1?ji.set(-S,1,-A):p===2?ji.set(-S,A,1):p===3?ji.set(-1,A,-S):p===4?ji.set(-S,-1,A):ji.set(S,A,-1),ji.toArray(v,(p*d+w)*m)}}const f=new Ft;f.setAttribute("position",new Si(g,m)),f.setAttribute("outputDirection",new Si(v,m)),t.push(new se(f,null)),i>Dn&&i--}return{lodMeshes:t,sizeLods:e}}function fl(a,e,t){const i=new di(a,e,t);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pn(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function tp(a,e,t){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ip(a,e,t){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:Jf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vr(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function pl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ml(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gc extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),n=new Ti({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Li});n.uniforms.tEquirect.value=t;const r=new se(s,n),o=t.minFilter;return t.minFilter===nn&&(t.minFilter=Wt),new nh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const n=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(n)}}function np(a){let e=new WeakMap,t=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?r(d):n(d)}function n(d){if(d&&d.isTexture){const m=d.mapping;if(m===xr||m===Sr)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new gc(g.height);return v.fromEquirectangularTexture(a,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const m=d.mapping,g=m===xr||m===Sr,v=m===on||m===On;if(g||v){let f=t.get(d);const p=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ul(a)),f=g?i.fromEquirectangular(d,f):i.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new ul(a)),f=g?i.fromEquirectangular(d):i.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,m){return m===xr?d.mapping=on:m===Sr&&(d.mapping=On),d}function l(d){let m=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function sp(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Un("WebGLRenderer: "+i+" extension not supported."),s}}}function rp(a,e,t,i){const s={},n=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],a.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const x=m.array;v=m.version;for(let T=0,_=x.length;T<_;T+=3){const w=x[T+0],S=x[T+1],A=x[T+2];d.push(w,S,S,A,A,w)}}else{const x=g.array;v=g.version;for(let T=0,_=x.length/3-1;T<_;T+=3){const w=T+0,S=T+1,A=T+2;d.push(w,S,S,A,A,w)}}const f=new(g.count>=65535?rc:sc)(d,1);f.version=v;const p=n.get(u);p&&e.remove(p),n.set(u,f)}function h(u){const d=n.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ap(a,e,t){let i;function s(u){i=u}let n,r;function o(u){n=u.type,r=u.bytesPerElement}function l(u,d){a.drawElements(i,d,n,u*r),t.update(d,i,1)}function c(u,d,m){m!==0&&(a.drawElementsInstanced(i,d,n,u*r,m),t.update(d,i,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,n,u,0,m);let v=0;for(let f=0;f<m;f++)v+=d[f];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function op(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(n/3);break;case a.LINES:t.lines+=o*(n/2);break;case a.LINE_STRIP:t.lines+=o*(n-1);break;case a.LINE_LOOP:t.lines+=o*n;break;case a.POINTS:t.points+=o*n;break;default:Ke("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lp(a,e,t){const i=new WeakMap,s=new yt;function n(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let _=o.attributes.position.count*T,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const S=new Float32Array(_*w*4*u),A=new ic(S,_,w,u);A.type=bi,A.needsUpdate=!0;const b=T*4;for(let P=0;P<u;P++){const I=f[P],k=p[P],B=x[P],L=_*w*4*P;for(let H=0;H<I.count;H++){const Y=H*b;m===!0&&(s.fromBufferAttribute(I,H),S[L+Y+0]=s.x,S[L+Y+1]=s.y,S[L+Y+2]=s.z,S[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(k,H),S[L+Y+4]=s.x,S[L+Y+5]=s.y,S[L+Y+6]=s.z,S[L+Y+7]=0),v===!0&&(s.fromBufferAttribute(B,H),S[L+Y+8]=s.x,S[L+Y+9]=s.y,S[L+Y+10]=s.z,S[L+Y+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new De(_,w)},i.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:n}}function cp(a,e,t,i,s){let n=new WeakMap;function r(c){const h=s.render.frame,u=c.geometry,d=e.get(c,u);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;n.get(m)!==h&&(m.update(),n.set(m,h))}return d}function o(){n=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const dp={[Ol]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function hp(a,e,t,i,s,n){const r=new di(e,t,{type:a,depthBuffer:s,stencilBuffer:n,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ft;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));const h=new Jd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new se(c,h),d=new uo(-1,1,1,-1,0,1);let m=null,g=null,v=!1,f,p=null,x=[],T=!1;this.setSize=function(_,w){r.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let S=0;S<x.length;S++){const A=x[S];A.setSize&&A.setSize(_,w)}},this.setEffects=function(_){x=_,T=x.length>0&&x[0].isRenderPass===!0;const w=r.width,S=r.height;x.length>0&&o===null&&(o=new di(w,S,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new di(w,S,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){const b=x[A];b.setSize&&b.setSize(w,S)}},this.begin=function(_,w){if(v||_.toneMapping===xi&&x.length===0)return!1;if(p=w,w!==null){const S=w.width,A=w.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return T===!1&&_.setRenderTarget(r),f=_.toneMapping,_.toneMapping=xi,!0},this.hasRenderPass=function(){return T},this.end=function(_,w){_.toneMapping=f,v=!0;let S=r,A=o;for(let b=0;b<x.length;b++){const E=x[b];E.enabled!==!1&&(E.render(_,A,S,w),E.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(m!==_.outputColorSpace||g!==_.toneMapping){m=_.outputColorSpace,g=_.toneMapping,h.defines={},$e.getTransfer(m)===st&&(h.defines.SRGB_TRANSFER="");const b=dp[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const vc=new zt,za=new hs(1,1),yc=new ic,bc=new Ed,_c=new cc,gl=[],vl=[],yl=new Float32Array(16),bl=new Float32Array(9),_l=new Float32Array(4);function Vn(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let n=gl[s];if(n===void 0&&(n=new Float32Array(s),gl[s]=n),e!==0){i.toArray(n,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(n,o)}return n}function Lt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Dt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function yr(a,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function up(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function fp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2fv(this.addr,e),Dt(t,e)}}function pp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;a.uniform3fv(this.addr,e),Dt(t,e)}}function mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4fv(this.addr,e),Dt(t,e)}}function gp(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;_l.set(i),a.uniformMatrix2fv(this.addr,!1,_l),Dt(t,i)}}function vp(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;bl.set(i),a.uniformMatrix3fv(this.addr,!1,bl),Dt(t,i)}}function yp(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;yl.set(i),a.uniformMatrix4fv(this.addr,!1,yl),Dt(t,i)}}function bp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function _p(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2iv(this.addr,e),Dt(t,e)}}function xp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;a.uniform3iv(this.addr,e),Dt(t,e)}}function Sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4iv(this.addr,e),Dt(t,e)}}function Mp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function wp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2uiv(this.addr,e),Dt(t,e)}}function Tp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;a.uniform3uiv(this.addr,e),Dt(t,e)}}function Ep(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4uiv(this.addr,e),Dt(t,e)}}function Ap(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let n;this.type===a.SAMPLER_2D_SHADOW?(za.compareFunction=t.isReversedDepthBuffer()?to:eo,n=za):n=vc,t.setTexture2D(e||n,s)}function Cp(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bc,s)}function Rp(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_c,s)}function Pp(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yc,s)}function Ip(a){switch(a){case 5126:return up;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return yp;case 5124:case 35670:return bp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return Sp;case 5125:return Mp;case 36294:return wp;case 36295:return Tp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Lp(a,e){a.uniform1fv(this.addr,e)}function Dp(a,e){const t=Vn(e,this.size,2);a.uniform2fv(this.addr,t)}function kp(a,e){const t=Vn(e,this.size,3);a.uniform3fv(this.addr,t)}function Np(a,e){const t=Vn(e,this.size,4);a.uniform4fv(this.addr,t)}function Up(a,e){const t=Vn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Fp(a,e){const t=Vn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Bp(a,e){const t=Vn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Op(a,e){a.uniform1iv(this.addr,e)}function Gp(a,e){a.uniform2iv(this.addr,e)}function Hp(a,e){a.uniform3iv(this.addr,e)}function Vp(a,e){a.uniform4iv(this.addr,e)}function Wp(a,e){a.uniform1uiv(this.addr,e)}function zp(a,e){a.uniform2uiv(this.addr,e)}function qp(a,e){a.uniform3uiv(this.addr,e)}function $p(a,e){a.uniform4uiv(this.addr,e)}function Xp(a,e,t){const i=this.cache,s=e.length,n=yr(t,s);Lt(i,n)||(a.uniform1iv(this.addr,n),Dt(i,n));let r;this.type===a.SAMPLER_2D_SHADOW?r=za:r=vc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,n[o])}function Yp(a,e,t){const i=this.cache,s=e.length,n=yr(t,s);Lt(i,n)||(a.uniform1iv(this.addr,n),Dt(i,n));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||bc,n[r])}function Kp(a,e,t){const i=this.cache,s=e.length,n=yr(t,s);Lt(i,n)||(a.uniform1iv(this.addr,n),Dt(i,n));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||_c,n[r])}function Zp(a,e,t){const i=this.cache,s=e.length,n=yr(t,s);Lt(i,n)||(a.uniform1iv(this.addr,n),Dt(i,n));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||yc,n[r])}function Jp(a){switch(a){case 5126:return Lp;case 35664:return Dp;case 35665:return kp;case 35666:return Np;case 35674:return Up;case 35675:return Fp;case 35676:return Bp;case 5124:case 35670:return Op;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return zp;case 36295:return qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ip(t.type)}}class jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,r=s.length;n!==r;++n){const o=s[n];o.setValue(e,t[o.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function xl(a,e){a.seq.push(e),a.map[e.id]=e}function tm(a,e,t){const i=a.name,s=i.length;for(ea.lastIndex=0;;){const n=ea.exec(i),r=ea.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){xl(t,c===void 0?new Qp(o,a,e):new jp(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new em(o),xl(t,u)),t=u}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);tm(o,l,this)}const s=[],n=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):n.push(r);s.length>0&&(this.seq=s.concat(n))}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,r=t.length;n!==r;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Sl(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const im=37297;let nm=0;function sm(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let r=s;r<n;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Ml=new Fe;function rm(a){$e._getMatrix(Ml,$e.workingColorSpace,a);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(a)){case nr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function wl(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=(a.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+sm(a.getShaderSource(e),o)}else return n}function am(a,e){const t=rm(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const om={[Ol]:"Linear",[Gl]:"Reinhard",[Hl]:"Cineon",[Vl]:"ACESFilmic",[zl]:"AgX",[ql]:"Neutral",[Wl]:"Custom"};function lm(a,e){const t=om[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new D;function cm(){$e.getLuminanceCoefficients(qs);const a=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function hm(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function um(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=a.getActiveAttrib(e,s),r=n.name;let o=1;n.type===a.FLOAT_MAT2&&(o=2),n.type===a.FLOAT_MAT3&&(o=3),n.type===a.FLOAT_MAT4&&(o=4),t[r]={type:n.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ts(a){return a!==""}function Tl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(a){return a.replace(fm,mm)}const pm=new Map;function mm(a,e){let t=Ge[e];if(t===void 0){const i=pm.get(e);if(i!==void 0)t=Ge[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return qa(t)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(a){return a.replace(gm,vm)}function vm(a,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Cl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ym={[$s]:"SHADOWMAP_TYPE_PCF",[jn]:"SHADOWMAP_TYPE_VSM"};function bm(a){return ym[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _m={[on]:"ENVMAP_TYPE_CUBE",[On]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function xm(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_m[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sm={[On]:"ENVMAP_MODE_REFRACTION"};function Mm(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Sm[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wm={[Xa]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function Tm(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":wm[a.combine]||"ENVMAP_BLENDING_NONE"}function Em(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Am(a,e,t,i){const s=a.getContext(),n=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=bm(t),c=xm(t),h=Mm(t),u=Tm(t),d=Em(t),m=dm(t),g=hm(n),v=s.createProgram();let f,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(f=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==xi?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),r=qa(r),r=Tl(r,t),r=El(r,t),o=qa(o),o=Tl(o,t),o=El(o,t),r=Al(r),o=Al(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+f+r,_=x+p+o,w=Sl(s,s.VERTEX_SHADER,T),S=Sl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(a.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(S)||"",H=k.trim(),Y=B.trim(),K=L.trim();let ne=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,v,w,S);else{const $=wl(s,w,"vertex"),Q=wl(s,S,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+$+`
`+Q)}else H!==""?Ie("WebGLProgram: Program Info Log:",H):(Y===""||K==="")&&(G=!1);G&&(I.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Y,prefix:f},fragmentShader:{log:K,prefix:p}})}s.deleteShader(w),s.deleteShader(S),b=new Qs(s,v),E=um(s,v)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,im)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let Cm=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pm(e),t.set(e,i)),i}}class Pm{constructor(e){this.id=Cm++,this.code=e,this.usedTimes=0}}function Im(a){return a===ln||a===js||a===er}function Lm(a,e,t,i,s,n){const r=new no,o=new Rm,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,E,P,I,k,B){const L=I.fog,H=k.geometry,Y=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ne=e.get(b.envMap||Y,K),G=ne&&ne.mapping===fr?ne.image.height:null,$=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&Ie("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=Q!==void 0?Q.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let rt,ze,Ye,Z;if($){const dt=gi[$];rt=dt.vertexShader,ze=dt.fragmentShader}else{rt=b.vertexShader,ze=b.fragmentShader;const dt=o.getVertexShaderStage(b),je=o.getFragmentShaderStage(b);o.update(b,dt,je),Ye=dt.id,Z=je.id}const te=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,He=!!b.map,At=!!b.matcap,Ve=!!ne,Je=!!b.aoMap,ct=!!b.lightMap,qe=!!b.bumpMap&&b.wireframe===!1,gt=!!b.normalMap,kt=!!b.displacementMap,Kt=!!b.emissiveMap,vt=!!b.metalnessMap,xt=!!b.roughnessMap,F=b.anisotropy>0,Bt=b.clearcoat>0,it=b.dispersion>0,C=b.retroreflectivity>0,y=b.iridescence>0,O=b.sheen>0,z=b.transmission>0,X=F&&!!b.anisotropyMap,re=Bt&&!!b.clearcoatMap,ae=Bt&&!!b.clearcoatNormalMap,J=Bt&&!!b.clearcoatRoughnessMap,ee=y&&!!b.iridescenceMap,oe=y&&!!b.iridescenceThicknessMap,Ee=O&&!!b.sheenColorMap,he=O&&!!b.sheenRoughnessMap,le=!!b.specularMap,Ae=!!b.specularColorMap,Re=!!b.specularIntensityMap,Be=z&&!!b.transmissionMap,U=z&&!!b.thicknessMap,ce=!!b.gradientMap,j=!!b.alphaMap,de=b.alphaTest>0,me=!!b.alphaHash,ie=!!b.extensions;let Ce=xi;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ce=a.toneMapping);const Se={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:ze,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:te===null?a.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:At,envMap:Ve,envMapMode:Ve&&ne.mapping,envMapCubeUVHeight:G,aoMap:Je,lightMap:ct,bumpMap:qe,normalMap:gt,displacementMap:kt,emissiveMap:Kt,normalMapObjectSpace:gt&&b.normalMapType===ld,normalMapTangentSpace:gt&&b.normalMapType===tr,packedNormalMap:gt&&b.normalMapType===tr&&Im(b.normalMap.format),metalnessMap:vt,roughnessMap:xt,anisotropy:F,anisotropyMap:X,clearcoat:Bt,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:it,retroreflection:C,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:le,specularColorMap:Ae,specularIntensityMap:Re,transmission:z,transmissionMap:Be,thicknessMap:U,gradientMap:ce,opaque:b.transparent===!1&&b.blending===is&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:de,alphaHash:me,combine:b.combine,mapUv:He&&g(b.map.channel),aoMapUv:Je&&g(b.aoMap.channel),lightMapUv:ct&&g(b.lightMap.channel),bumpMapUv:qe&&g(b.bumpMap.channel),normalMapUv:gt&&g(b.normalMap.channel),displacementMapUv:kt&&g(b.displacementMap.channel),emissiveMapUv:Kt&&g(b.emissiveMap.channel),metalnessMapUv:vt&&g(b.metalnessMap.channel),roughnessMapUv:xt&&g(b.roughnessMap.channel),anisotropyMapUv:X&&g(b.anisotropyMap.channel),clearcoatMapUv:re&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(b.sheenRoughnessMap.channel),specularMapUv:le&&g(b.specularMap.channel),specularColorMapUv:Ae&&g(b.specularColorMap.channel),specularIntensityMapUv:Re&&g(b.specularIntensityMap.channel),transmissionMapUv:Be&&g(b.transmissionMap.channel),thicknessMapUv:U&&g(b.thicknessMap.channel),alphaMapUv:j&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(gt||F),vertexNormals:!!H.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(He||j),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||H.attributes.normal===void 0&&gt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ce,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:Kt&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tt,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ie&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&b.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function f(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)E.push(P),E.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(p(E,b),x(E,b),E.push(a.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function p(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function T(b){const E=m[b.type];let P;if(E){const I=gi[E];P=Yd.clone(I.uniforms)}else P=b.uniforms;return P}function _(b,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Am(a,E,b,s),c.push(P),h.set(E,P)),P}function w(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function S(b){o.remove(b)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:A}}function Dm(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function s(r,o,l){a.get(r)[o]=l}function n(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function km(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Rl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Pl(){const a=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function r(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,g,v,f,p){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:m,material:g,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:f,group:p},a[e]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=g,x.materialVariant=r(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=f,x.group=p),e++,x}function l(d,m,g,v,f,p,x){x.reversedDepth===!0&&(f=-f);const T=o(d,m,g,v,f,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(d,m,g,v,f,p){const x=o(d,m,g,v,f,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,m){t.length>1&&t.sort(d||km),i.length>1&&i.sort(m||Rl),s.length>1&&s.sort(m||Rl)}function u(){for(let d=e,m=a.length;d<m;d++){const g=a[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:l,unshift:c,finish:u,sort:h}}function Nm(){let a=new WeakMap;function e(i,s){const n=a.get(i);let r;return n===void 0?(r=new Pl,a.set(i,[r])):s>=n.length?(r=new Pl,n.push(r)):r=n[s],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Um(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function Fm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Bm=0;function Om(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gm(a){const e=new Um,t=Fm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,n=new mt,r=new mt;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,g=0,v=0,f=0,p=0,x=0,T=0,_=0,w=0,S=0,A=0,b=0,E=0,P=0;c.sort(Om);for(let k=0,B=c.length;k<B;k++){const L=c[k],H=L.color,Y=L.intensity,K=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ln?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*Y,u+=H.g*Y,d+=H.b*Y;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],Y);P++}else if(L.isSunLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Q=t.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=ne;const Te=$.getViewportCount();for(let we=0;we<Te;we++)i.sunShadowMatrix[v+we]=$.getMatrix(we),i.sunShadowCascade[v+we]=$._cascadeData[we];v+=Te,g++}i.sun[m]=G,m++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Q=t.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=L.shadow.matrix,w++}i.directional[f]=G,f++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(H).multiplyScalar(Y),G.distance=K,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[x]=G;const $=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,$.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[x]=$.matrix,L.castShadow){const Q=t.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=ne,A++}x++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(H).multiplyScalar(Y),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=G,T++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const $=L.shadow,Q=t.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=L.shadow.matrix,S++}i.point[p]=G,p++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(Y),G.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[_]=G,_++}}T>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.sunLength!==m||I.directionalLength!==f||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==T||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==b||I.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=f,i.spot.length=x,i.rectArea.length=T,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,I.sunLength=m,I.directionalLength=f,I.pointLength=p,I.spotLength=x,I.rectAreaLength=T,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=b,I.numLightProbes=P,i.version=Bm++)}function l(c,h){let u=0,d=0,m=0,g=0,v=0,f=0;const p=h.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){const _=c[x];if(_.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),u++}else if(_.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(_.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),r.identity(),n.copy(_.matrixWorld),n.premultiply(p),r.extractRotation(n),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),m++}else if(_.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:i}}function Il(a){const e=new Gm(a),t=[],i=[],s=[];function n(d){u.camera=d,t.length=0,i.length=0,s.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Hm(a){let e=new WeakMap;function t(s,n=0){const r=e.get(s);let o;return r===void 0?(o=new Il(a),e.set(s,[o])):n>=r.length?(o=new Il(a),r.push(o)):o=r[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`,zm=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],qm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ll=new mt,Qn=new D,ta=new D;function $m(a,e,t){let i=new lo;const s=new De,n=new De,r=new yt,o=new Qd,l=new jd,c={},h=t.maxTextureSize,u={[an]:Zt,[Zt]:an,[tt]:tt},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new se(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let p=this.type;this.render=function(S,A,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Oc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);const E=a.getRenderTarget(),P=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),k=a.state;k.setBlending(Li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){const Y=S[L],K=Y.shadow;if(K===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ne=K.getFrameExtents();s.multiply(ne),n.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(n.x=Math.floor(h/ne.x),s.x=n.x*ne.x,K.mapSize.x=n.x),s.y>h&&(n.y=Math.floor(h/ne.y),s.y=n.y*ne.y,K.mapSize.y=n.y));const G=a.state.buffers.depth.getReversed();if(K.camera._reversedDepth=G,K.map===null||B===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===jn){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new di(s.x,s.y,{format:ln,type:wi,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new hs(s.x,s.y,bi),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=ki,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Pt,K.map.depthTexture.magFilter=Pt}else Y.isPointLight?(K.map=new gc(s.x),K.map.depthTexture=new qd(s.x,Mi)):(K.map=new di(s.x,s.y),K.map.depthTexture=new hs(s.x,s.y,Mi)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=ki,this.type===$s?(K.map.depthTexture.compareFunction=G?to:eo,K.map.depthTexture.minFilter=Wt,K.map.depthTexture.magFilter=Wt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Pt,K.map.depthTexture.magFilter=Pt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const $=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Y.isPointLight!==!0&&K.updateMatrices(Y,b);for(let Q=0;Q<$;Q++){const Te=K.getCamera(Q);if(Y.isPointLight){const we=K.camera,rt=K.matrix,ze=Y.distance||we.far;ze!==we.far&&(we.far=ze,we.updateProjectionMatrix()),Qn.setFromMatrixPosition(Y.matrixWorld),we.position.copy(Qn),ta.copy(we.position),ta.add(zm[Q]),we.up.copy(qm[Q]),we.lookAt(ta),we.updateMatrixWorld(),rt.makeTranslation(-Qn.x,-Qn.y,-Qn.z),Ll.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ll,we.coordinateSystem,we.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)a.setRenderTarget(K.map,Q),a.clear();else{Q===0&&(a.setRenderTarget(K.map),a.clear());const we=K.getViewport(Q);r.set(n.x*we.x,n.y*we.y,n.x*we.z,n.y*we.w),k.viewport(r)}i=K.getFrustum(Q),_(A,b,Te,Y,this.type)}K.isPointLightShadow!==!0&&this.type===jn&&x(K,b),K.needsUpdate=!1}p=this.type,f.needsUpdate=!1,a.setRenderTarget(E,P,I)};function x(S,A){const b=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new di(s.x,s.y,{format:ln,type:wi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(A,null,b,d,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(A,null,b,m,v,null)}function T(S,A,b,E){let P=null;const I=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=b.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=P.uuid,B=A.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let H=L[B];H===void 0&&(H=P.clone(),L[B]=H,A.addEventListener("dispose",w)),P=H}if(P.visible=A.visible,P.wireframe=A.wireframe,E===jn?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=a.properties.get(P);k.light=b}return P}function _(S,A,b,E,P){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===jn)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const B=e.update(S),L=S.material;if(Array.isArray(L)){const H=B.groups;for(let Y=0,K=H.length;Y<K;Y++){const ne=H[Y],G=L[ne.materialIndex];if(G&&G.visible){const $=T(S,G,E,P);S.onBeforeShadow(a,S,A,b,B,$,ne),a.renderBufferDirect(b,null,B,$,S,ne),S.onAfterShadow(a,S,A,b,B,$,ne)}}}else if(L.visible){const H=T(S,L,E,P);S.onBeforeShadow(a,S,A,b,B,H,null),a.renderBufferDirect(b,null,B,H,S,null),S.onAfterShadow(a,S,A,b,B,H,null)}}const k=S.children;for(let B=0,L=k.length;B<L;B++)_(k[B],A,b,E,P)}function w(S){S.target.removeEventListener("dispose",w);for(const b in c){const E=c[b],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Xm(a,e){function t(){let U=!1;const ce=new yt;let j=null;const de=new yt(0,0,0,0);return{setMask:function(me){j!==me&&!U&&(a.colorMask(me,me,me,me),j=me)},setLocked:function(me){U=me},setClear:function(me,ie,Ce,Se,dt){dt===!0&&(me*=Se,ie*=Se,Ce*=Se),ce.set(me,ie,Ce,Se),de.equals(ce)===!1&&(a.clearColor(me,ie,Ce,Se),de.copy(ce))},reset:function(){U=!1,j=null,de.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,j=null,de=null,me=null;return{setReversed:function(ie){if(ce!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const Se=me;me=null,this.setClear(Se)}},getReversed:function(){return ce},setTest:function(ie){ie?te(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(ie){j!==ie&&!U&&(a.depthMask(ie),j=ie)},setFunc:function(ie){if(ce&&(ie=bd[ie]),de!==ie){switch(ie){case sa:a.depthFunc(a.NEVER);break;case ra:a.depthFunc(a.ALWAYS);break;case aa:a.depthFunc(a.LESS);break;case as:a.depthFunc(a.LEQUAL);break;case oa:a.depthFunc(a.EQUAL);break;case la:a.depthFunc(a.GEQUAL);break;case ca:a.depthFunc(a.GREATER);break;case da:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}de=ie}},setLocked:function(ie){U=ie},setClear:function(ie){me!==ie&&(me=ie,ce&&(ie=1-ie),a.clearDepth(ie))},reset:function(){U=!1,j=null,de=null,me=null,ce=!1}}}function s(){let U=!1,ce=null,j=null,de=null,me=null,ie=null,Ce=null,Se=null,dt=null;return{setTest:function(je){U||(je?te(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(je){ce!==je&&!U&&(a.stencilMask(je),ce=je)},setFunc:function(je,si,hi){(j!==je||de!==si||me!==hi)&&(a.stencilFunc(je,si,hi),j=je,de=si,me=hi)},setOp:function(je,si,hi){(ie!==je||Ce!==si||Se!==hi)&&(a.stencilOp(je,si,hi),ie=je,Ce=si,Se=hi)},setLocked:function(je){U=je},setClear:function(je){dt!==je&&(a.clearStencil(je),dt=je)},reset:function(){U=!1,ce=null,j=null,de=null,me=null,ie=null,Ce=null,Se=null,dt=null}}}const n=new t,r=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},m=new WeakMap,g=[],v=null,f=!1,p=null,x=null,T=null,_=null,w=null,S=null,A=null,b=new Le(0,0,0),E=0,P=!1,I=null,k=null,B=null,L=null,H=null;const Y=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=ne>=2);let $=null,Q={};const Te=a.getParameter(a.SCISSOR_BOX),we=a.getParameter(a.VIEWPORT),rt=new yt().fromArray(Te),ze=new yt().fromArray(we);function Ye(U,ce,j,de){const me=new Uint8Array(4),ie=a.createTexture();a.bindTexture(U,ie),a.texParameteri(U,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(U,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ce=0;Ce<j;Ce++)U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY?a.texImage3D(ce,0,a.RGBA,1,1,de,0,a.RGBA,a.UNSIGNED_BYTE,me):a.texImage2D(ce+Ce,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,me);return ie}const Z={};Z[a.TEXTURE_2D]=Ye(a.TEXTURE_2D,a.TEXTURE_2D,1),Z[a.TEXTURE_CUBE_MAP]=Ye(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[a.TEXTURE_2D_ARRAY]=Ye(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Z[a.TEXTURE_3D]=Ye(a.TEXTURE_3D,a.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(a.DEPTH_TEST),r.setFunc(as),qe(!1),gt(Po),te(a.CULL_FACE),Je(Li);function te(U){h[U]!==!0&&(a.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(a.disable(U),h[U]=!1)}function Ue(U,ce){return d[U]!==ce?(a.bindFramebuffer(U,ce),d[U]=ce,U===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ce),U===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(U,ce){let j=g,de=!1;if(U){j=m.get(ce),j===void 0&&(j=[],m.set(ce,j));const me=U.textures;if(j.length!==me.length||j[0]!==a.COLOR_ATTACHMENT0){for(let ie=0,Ce=me.length;ie<Ce;ie++)j[ie]=a.COLOR_ATTACHMENT0+ie;j.length=me.length,de=!0}}else j[0]!==a.BACK&&(j[0]=a.BACK,de=!0);de&&a.drawBuffers(j)}function He(U){return v!==U?(a.useProgram(U),v=U,!0):!1}const At={[Ln]:a.FUNC_ADD,[Hc]:a.FUNC_SUBTRACT,[Vc]:a.FUNC_REVERSE_SUBTRACT};At[Wc]=a.MIN,At[zc]=a.MAX;const Ve={[qc]:a.ZERO,[$c]:a.ONE,[Xc]:a.SRC_COLOR,[Fl]:a.SRC_ALPHA,[jc]:a.SRC_ALPHA_SATURATE,[Jc]:a.DST_COLOR,[Kc]:a.DST_ALPHA,[Yc]:a.ONE_MINUS_SRC_COLOR,[Bl]:a.ONE_MINUS_SRC_ALPHA,[Qc]:a.ONE_MINUS_DST_COLOR,[Zc]:a.ONE_MINUS_DST_ALPHA,[ed]:a.CONSTANT_COLOR,[td]:a.ONE_MINUS_CONSTANT_COLOR,[id]:a.CONSTANT_ALPHA,[nd]:a.ONE_MINUS_CONSTANT_ALPHA};function Je(U,ce,j,de,me,ie,Ce,Se,dt,je){if(U===Li){f===!0&&(be(a.BLEND),f=!1);return}if(f===!1&&(te(a.BLEND),f=!0),U!==Gc){if(U!==p||je!==P){if((x!==Ln||w!==Ln)&&(a.blendEquation(a.FUNC_ADD),x=Ln,w=Ln),je)switch(U){case is:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Io:a.blendFunc(a.ONE,a.ONE);break;case Lo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Do:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case is:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Lo:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}T=null,_=null,S=null,A=null,b.set(0,0,0),E=0,p=U,P=je}return}me=me||ce,ie=ie||j,Ce=Ce||de,(ce!==x||me!==w)&&(a.blendEquationSeparate(At[ce],At[me]),x=ce,w=me),(j!==T||de!==_||ie!==S||Ce!==A)&&(a.blendFuncSeparate(Ve[j],Ve[de],Ve[ie],Ve[Ce]),T=j,_=de,S=ie,A=Ce),(Se.equals(b)===!1||dt!==E)&&(a.blendColor(Se.r,Se.g,Se.b,dt),b.copy(Se),E=dt),p=U,P=!1}function ct(U,ce){U.side===tt?be(a.CULL_FACE):te(a.CULL_FACE);let j=U.side===Zt;ce&&(j=!j),qe(j),U.blending===is&&U.transparent===!1?Je(Li):Je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),n.setMask(U.colorWrite);const de=U.stencilWrite;o.setTest(de),de&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){I!==U&&(U?a.frontFace(a.CW):a.frontFace(a.CCW),I=U)}function gt(U){U!==Fc?(te(a.CULL_FACE),U!==k&&(U===Po?a.cullFace(a.BACK):U===Bc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),k=U}function kt(U){U!==B&&(K&&a.lineWidth(U),B=U)}function Kt(U,ce,j){U?(te(a.POLYGON_OFFSET_FILL),(L!==ce||H!==j)&&(L=ce,H=j,r.getReversed()&&(ce=-ce),a.polygonOffset(ce,j))):be(a.POLYGON_OFFSET_FILL)}function vt(U){U?te(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function xt(U){U===void 0&&(U=a.TEXTURE0+Y-1),$!==U&&(a.activeTexture(U),$=U)}function F(U,ce,j){j===void 0&&($===null?j=a.TEXTURE0+Y-1:j=$);let de=Q[j];de===void 0&&(de={type:void 0,texture:void 0},Q[j]=de),(de.type!==U||de.texture!==ce)&&($!==j&&(a.activeTexture(j),$=j),a.bindTexture(U,ce||Z[U]),de.type=U,de.texture=ce)}function Bt(){const U=Q[$];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{a.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function y(){try{a.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function O(){try{a.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function z(){try{a.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function re(){try{a.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ae(){try{a.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function J(){try{a.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ee(){try{a.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function oe(U){return u[U]!==void 0?u[U]:a.getParameter(U)}function Ee(U,ce){u[U]!==ce&&(a.pixelStorei(U,ce),u[U]=ce)}function he(U){rt.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function le(U){ze.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Ae(U,ce){let j=c.get(ce);j===void 0&&(j=new WeakMap,c.set(ce,j));let de=j.get(U);de===void 0&&(de=a.getUniformBlockIndex(ce,U.name),j.set(U,de))}function Re(U,ce){const de=c.get(ce).get(U);l.get(ce)!==de&&(a.uniformBlockBinding(ce,de,U.__bindingPointIndex),l.set(ce,de))}function Be(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,Q={},d={},m=new WeakMap,g=[],v=null,f=!1,p=null,x=null,T=null,_=null,w=null,S=null,A=null,b=new Le(0,0,0),E=0,P=!1,I=null,k=null,B=null,L=null,H=null,rt.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),n.reset(),r.reset(),o.reset()}return{buffers:{color:n,depth:r,stencil:o},enable:te,disable:be,bindFramebuffer:Ue,drawBuffers:ve,useProgram:He,setBlending:Je,setMaterial:ct,setFlipSided:qe,setCullFace:gt,setLineWidth:kt,setPolygonOffset:Kt,setScissorTest:vt,activeTexture:xt,bindTexture:F,unbindTexture:Bt,compressedTexImage2D:it,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:re,texStorage3D:ae,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:he,viewport:le,reset:Be}}function Ym(a,e,t,i,s,n,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,u=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return g?new OffscreenCanvas(C,y):sr("canvas")}function f(C,y,O){let z=1;const X=it(C);if((X.width>O||X.height>O)&&(z=O/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(z*X.width),ae=Math.floor(z*X.height);d===void 0&&(d=v(re,ae));const J=y?v(re,ae):d;return J.width=re,J.height=ae,J.getContext("2d").drawImage(C,0,0,re,ae),Ie("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+ae+")."),J}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function p(C){return C.generateMipmaps}function x(C){a.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function _(C,y,O,z,X,re=!1){if(C!==null){if(a[C]!==void 0)return a[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;z&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===a.RED&&(O===a.FLOAT&&(J=a.R32F),O===a.HALF_FLOAT&&(J=a.R16F),O===a.UNSIGNED_BYTE&&(J=a.R8),O===a.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),O===a.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),y===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.R8UI),O===a.UNSIGNED_SHORT&&(J=a.R16UI),O===a.UNSIGNED_INT&&(J=a.R32UI),O===a.BYTE&&(J=a.R8I),O===a.SHORT&&(J=a.R16I),O===a.INT&&(J=a.R32I)),y===a.RG&&(O===a.FLOAT&&(J=a.RG32F),O===a.HALF_FLOAT&&(J=a.RG16F),O===a.UNSIGNED_BYTE&&(J=a.RG8),O===a.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),O===a.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RG8UI),O===a.UNSIGNED_SHORT&&(J=a.RG16UI),O===a.UNSIGNED_INT&&(J=a.RG32UI),O===a.BYTE&&(J=a.RG8I),O===a.SHORT&&(J=a.RG16I),O===a.INT&&(J=a.RG32I)),y===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RGB8UI),O===a.UNSIGNED_SHORT&&(J=a.RGB16UI),O===a.UNSIGNED_INT&&(J=a.RGB32UI),O===a.BYTE&&(J=a.RGB8I),O===a.SHORT&&(J=a.RGB16I),O===a.INT&&(J=a.RGB32I)),y===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(J=a.RGBA16UI),O===a.UNSIGNED_INT&&(J=a.RGBA32UI),O===a.BYTE&&(J=a.RGBA8I),O===a.SHORT&&(J=a.RGBA16I),O===a.INT&&(J=a.RGBA32I)),y===a.RGB&&(O===a.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),O===a.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),O===a.UNSIGNED_INT_5_9_9_9_REV&&(J=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(J=a.R11F_G11F_B10F)),y===a.RGBA){const ee=re?nr:$e.getTransfer(X);O===a.FLOAT&&(J=a.RGBA32F),O===a.HALF_FLOAT&&(J=a.RGBA16F),O===a.UNSIGNED_BYTE&&(J=ee===st?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),O===a.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),O===a.UNSIGNED_SHORT_4_4_4_4&&(J=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(J=a.RGB5_A1)}return(J===a.R16F||J===a.R32F||J===a.RG16F||J===a.RG32F||J===a.RGBA16F||J===a.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(C,y){let O;return C?y===null||y===Mi||y===cs?O=a.DEPTH24_STENCIL8:y===bi?O=a.DEPTH32F_STENCIL8:y===ls&&(O=a.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===cs?O=a.DEPTH_COMPONENT24:y===bi?O=a.DEPTH_COMPONENT32F:y===ls&&(O=a.DEPTH_COMPONENT16),O}function S(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pt&&C.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),I(y)}function E(C){const y=i.get(C);if(y.__webglInit===void 0)return;const O=C.source,z=m.get(O);if(z){const X=z[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(C),Object.keys(z).length===0&&m.delete(O)}i.remove(C)}function P(C){const y=i.get(C);a.deleteTexture(y.__webglTexture);const O=C.source,z=m.get(O);delete z[y.__cacheKey],r.memory.textures--}function I(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let X=0;X<y.__webglFramebuffer[z].length;X++)a.deleteFramebuffer(y.__webglFramebuffer[z][X]);else a.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)a.deleteFramebuffer(y.__webglFramebuffer[z]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let z=0,X=O.length;z<X;z++){const re=i.get(O[z]);re.__webglTexture&&(a.deleteTexture(re.__webglTexture),r.memory.textures--),i.remove(O[z])}i.remove(C)}let k=0;function B(){k=0}function L(){return k}function H(C){k=C}function Y(){const C=k;return C>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function K(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ne(C,y){const O=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const z=C.image;if(z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,C,y);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+y)}function G(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){be(O,C,y);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+y)}function $(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){be(O,C,y);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+y)}function Q(C,y){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Ue(O,C,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+y)}const Te={[os]:a.REPEAT,[Ii]:a.CLAMP_TO_EDGE,[ha]:a.MIRRORED_REPEAT},we={[Pt]:a.NEAREST,[ad]:a.NEAREST_MIPMAP_NEAREST,[gs]:a.NEAREST_MIPMAP_LINEAR,[Wt]:a.LINEAR,[Mr]:a.LINEAR_MIPMAP_NEAREST,[nn]:a.LINEAR_MIPMAP_LINEAR},rt={[dd]:a.NEVER,[md]:a.ALWAYS,[hd]:a.LESS,[eo]:a.LEQUAL,[ud]:a.EQUAL,[to]:a.GEQUAL,[fd]:a.GREATER,[pd]:a.NOTEQUAL};function ze(C,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Mr||y.magFilter===gs||y.magFilter===nn||y.minFilter===Wt||y.minFilter===Mr||y.minFilter===gs||y.minFilter===nn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,Te[y.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,Te[y.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,Te[y.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,we[y.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pt||y.minFilter!==gs&&y.minFilter!==nn||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const z=y.source;let X=m.get(z);X===void 0&&(X={},m.set(z,X));const re=K(y);if(re!==C.__cacheKey){X[re]===void 0&&(X[re]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,O=!0),X[re].usedTimes++;const ae=X[C.__cacheKey];ae!==void 0&&(X[C.__cacheKey].usedTimes--,ae.usedTimes===0&&P(y)),C.__cacheKey=re,C.__webglTexture=X[re].texture}return O}function Z(C,y,O){return Math.floor(Math.floor(C/O)/y)}function te(C,y,O,z){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,O,z,y.data);else{re.sort((Ee,he)=>Ee.start-he.start);let ae=0;for(let Ee=1;Ee<re.length;Ee++){const he=re[ae],le=re[Ee],Ae=he.start+he.count,Re=Z(le.start,y.width,4),Be=Z(he.start,y.width,4);le.start<=Ae+1&&Re===Be&&Z(le.start+le.count-1,y.width,4)===Re?he.count=Math.max(he.count,le.start+le.count-he.start):(++ae,re[ae]=le)}re.length=ae+1;const J=t.getParameter(a.UNPACK_ROW_LENGTH),ee=t.getParameter(a.UNPACK_SKIP_PIXELS),oe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let Ee=0,he=re.length;Ee<he;Ee++){const le=re[Ee],Ae=Math.floor(le.start/4),Re=Math.ceil(le.count/4),Be=Ae%y.width,U=Math.floor(Ae/y.width),ce=Re,j=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(a.UNPACK_SKIP_ROWS,U),t.texSubImage2D(a.TEXTURE_2D,0,Be,U,ce,j,O,z,y.data)}C.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,J),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(a.UNPACK_SKIP_ROWS,oe)}}function be(C,y,O){let z=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=a.TEXTURE_3D);const X=Ye(C,y),re=y.source;t.bindTexture(z,C.__webglTexture,a.TEXTURE0+O);const ae=i.get(re);if(re.version!==ae.__version||X===!0){if(t.activeTexture(a.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const j=$e.getPrimaries($e.workingColorSpace),de=y.colorSpace===qi?null:$e.getPrimaries(y.colorSpace),me=y.colorSpace===qi||j===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=f(y.image,!1,s.maxTextureSize);ee=Bt(y,ee);const oe=n.convert(y.format,y.colorSpace),Ee=n.convert(y.type);let he=_(y.internalFormat,oe,Ee,y.normalized,y.colorSpace,y.isVideoTexture);ze(z,y);let le;const Ae=y.mipmaps,Re=y.isVideoTexture!==!0,Be=ae.__version===void 0||X===!0,U=re.dataReady,ce=S(y,ee);if(y.isDepthTexture)he=w(y.format===sn,y.type),Be&&(Re?t.texStorage2D(a.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(a.TEXTURE_2D,0,he,ee.width,ee.height,0,oe,Ee,null));else if(y.isDataTexture)if(Ae.length>0){Re&&Be&&t.texStorage2D(a.TEXTURE_2D,ce,he,Ae[0].width,Ae[0].height);for(let j=0,de=Ae.length;j<de;j++)le=Ae[j],Re?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(a.TEXTURE_2D,j,he,le.width,le.height,0,oe,Ee,le.data);y.generateMipmaps=!1}else Re?(Be&&t.texStorage2D(a.TEXTURE_2D,ce,he,ee.width,ee.height),U&&te(y,ee,oe,Ee)):t.texImage2D(a.TEXTURE_2D,0,he,ee.width,ee.height,0,oe,Ee,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Re&&Be&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,he,Ae[0].width,Ae[0].height,ee.depth);for(let j=0,de=Ae.length;j<de;j++)if(le=Ae[j],y.format!==ci)if(oe!==null)if(Re){if(U)if(y.layerUpdates.size>0){const me=dl(le.width,le.height,y.format,y.type);for(const ie of y.layerUpdates){const Ce=le.data.subarray(ie*me/le.data.BYTES_PER_ELEMENT,(ie+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,ie,le.width,le.height,1,oe,Ce)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,oe,le.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,j,he,le.width,le.height,ee.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?U&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,oe,Ee,le.data):t.texImage3D(a.TEXTURE_2D_ARRAY,j,he,le.width,le.height,ee.depth,0,oe,Ee,le.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Re&&Be&&t.texStorage2D(a.TEXTURE_2D,ce,he,Ae[0].width,Ae[0].height);for(let j=0,de=Ae.length;j<de;j++)le=Ae[j],y.format!==ci?oe!==null?Re?U&&t.compressedTexSubImage2D(a.TEXTURE_2D,j,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(a.TEXTURE_2D,j,he,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(a.TEXTURE_2D,j,he,le.width,le.height,0,oe,Ee,le.data)}else if(y.isDataArrayTexture)if(Re){if(Be&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,he,ee.width,ee.height,ee.depth),U)if(y.layerUpdates.size>0){const j=dl(ee.width,ee.height,y.format,y.type);for(const de of y.layerUpdates){const me=ee.data.subarray(de*j/ee.data.BYTES_PER_ELEMENT,(de+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,oe,Ee,me)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(y.isData3DTexture)Re?(Be&&t.texStorage3D(a.TEXTURE_3D,ce,he,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)):t.texImage3D(a.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(y.isFramebufferTexture){if(Be)if(Re)t.texStorage2D(a.TEXTURE_2D,ce,he,ee.width,ee.height);else{let j=ee.width,de=ee.height;for(let me=0;me<ce;me++)t.texImage2D(a.TEXTURE_2D,me,he,j,de,0,oe,Ee,null),j>>=1,de>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){const j=a.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),u.add(y),j.onpaint=de=>{const me=de.changedElements;for(const ie of u)me.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ee);else{const me=a.RGBA,ie=a.RGBA,Ce=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,me,ie,Ce,ee)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Re&&Be){const j=it(Ae[0]);t.texStorage2D(a.TEXTURE_2D,ce,he,j.width,j.height)}for(let j=0,de=Ae.length;j<de;j++)le=Ae[j],Re?U&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,oe,Ee,le):t.texImage2D(a.TEXTURE_2D,j,he,oe,Ee,le);y.generateMipmaps=!1}else if(Re){if(Be){const j=it(ee);t.texStorage2D(a.TEXTURE_2D,ce,he,j.width,j.height)}U&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,oe,Ee,ee)}else t.texImage2D(a.TEXTURE_2D,0,he,oe,Ee,ee);p(y)&&x(z),ae.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ue(C,y,O){if(y.image.length!==6)return;const z=Ye(C,y),X=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+O);const re=i.get(X);if(X.version!==re.__version||z===!0){t.activeTexture(a.TEXTURE0+O);const ae=$e.getPrimaries($e.workingColorSpace),J=y.colorSpace===qi?null:$e.getPrimaries(y.colorSpace),ee=y.colorSpace===qi||ae===J?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!oe&&!Ee?he[ie]=f(y.image[ie],!0,s.maxCubemapSize):he[ie]=Ee?y.image[ie].image:y.image[ie],he[ie]=Bt(y,he[ie]);const le=he[0],Ae=n.convert(y.format,y.colorSpace),Re=n.convert(y.type),Be=_(y.internalFormat,Ae,Re,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ce=re.__version===void 0||z===!0,j=X.dataReady;let de=S(y,le);ze(a.TEXTURE_CUBE_MAP,y);let me;if(oe){U&&ce&&t.texStorage2D(a.TEXTURE_CUBE_MAP,de,Be,le.width,le.height);for(let ie=0;ie<6;ie++){me=he[ie].mipmaps;for(let Ce=0;Ce<me.length;Ce++){const Se=me[Ce];y.format!==ci?Ae!==null?U?j&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Be,Se.width,Se.height,0,Se.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Se.width,Se.height,Ae,Re,Se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Be,Se.width,Se.height,0,Ae,Re,Se.data)}}}else{if(me=y.mipmaps,U&&ce){me.length>0&&de++;const ie=it(he[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,de,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){U?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Ae,Re,he[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,he[ie].width,he[ie].height,0,Ae,Re,he[ie].data);for(let Ce=0;Ce<me.length;Ce++){const dt=me[Ce].image[ie].image;U?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,dt.width,dt.height,Ae,Re,dt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Be,dt.width,dt.height,0,Ae,Re,dt.data)}}else{U?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Re,he[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Ae,Re,he[ie]);for(let Ce=0;Ce<me.length;Ce++){const Se=me[Ce];U?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ae,Re,Se.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Be,Ae,Re,Se.image[ie])}}}p(y)&&x(a.TEXTURE_CUBE_MAP),re.__version=X.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ve(C,y,O,z,X,re){const ae=n.convert(O.format,O.colorSpace),J=n.convert(O.type),ee=_(O.internalFormat,ae,J,O.normalized,O.colorSpace),oe=i.get(y),Ee=i.get(O);if(Ee.__renderTarget=y,!oe.__hasExternalTextures){const he=Math.max(1,y.width>>re),le=Math.max(1,y.height>>re);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?t.texImage3D(X,re,ee,he,le,y.depth,0,ae,J,null):t.texImage2D(X,re,ee,he,le,0,ae,J,null)}t.bindFramebuffer(a.FRAMEBUFFER,C),xt(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,z,X,Ee.__webglTexture,0,vt(y)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,z,X,Ee.__webglTexture,re),t.bindFramebuffer(a.FRAMEBUFFER,null)}function He(C,y,O){if(a.bindRenderbuffer(a.RENDERBUFFER,C),y.depthBuffer){const z=y.depthTexture,X=z&&z.isDepthTexture?z.type:null,re=w(y.stencilBuffer,X),ae=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;xt(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(y),re,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(y),re,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,re,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ae,a.RENDERBUFFER,C)}else{const z=y.textures;for(let X=0;X<z.length;X++){const re=z[X],ae=n.convert(re.format,re.colorSpace),J=n.convert(re.type),ee=_(re.internalFormat,ae,J,re.normalized,re.colorSpace);xt(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(y),ee,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(y),ee,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,ee,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function At(C,y,O){const z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y.depthTexture);const oe=n.convert(y.depthTexture.format),Ee=n.convert(y.depthTexture.type);let he;y.depthTexture.format===ki?he=a.DEPTH_COMPONENT24:y.depthTexture.format===sn&&(he=a.DEPTH24_STENCIL8);for(let le=0;le<6;le++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,y.width,y.height,0,oe,Ee,null)}}else ne(y.depthTexture,0);const re=X.__webglTexture,ae=vt(y),J=z?a.TEXTURE_CUBE_MAP_POSITIVE_X+O:a.TEXTURE_2D,ee=y.depthTexture.format===sn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===ki)xt(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,J,re,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,ee,J,re,0);else if(y.depthTexture.format===sn)xt(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,J,re,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,ee,J,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(C){const y=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)At(y.__webglFramebuffer[z],C,z);else{const z=C.texture.mipmaps;z&&z.length>0?At(y.__webglFramebuffer[0],C,0):At(y.__webglFramebuffer,C,0)}else if(O){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=a.createRenderbuffer(),He(y.__webglDepthbuffer[z],C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[z];a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,re)}}else{const z=C.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),He(y.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,re)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Je(C,y,O){const z=i.get(C);y!==void 0&&ve(z.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&Ve(C)}function ct(C){const y=C.texture,O=i.get(C),z=i.get(y);C.addEventListener("dispose",b);const X=C.textures,re=C.isWebGLCubeRenderTarget===!0,ae=X.length>1;if(ae||(z.__webglTexture===void 0&&(z.__webglTexture=a.createTexture()),z.__version=y.version,r.memory.textures++),re){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ee=0;ee<y.mipmaps.length;ee++)O.__webglFramebuffer[J][ee]=a.createFramebuffer()}else O.__webglFramebuffer[J]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[J]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(ae)for(let J=0,ee=X.length;J<ee;J++){const oe=i.get(X[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&xt(C)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<X.length;J++){const ee=X[J];O.__webglColorRenderbuffer[J]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const oe=n.convert(ee.format,ee.colorSpace),Ee=n.convert(ee.type),he=_(ee.internalFormat,oe,Ee,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),le=vt(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,le,he,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+J,a.RENDERBUFFER,O.__webglColorRenderbuffer[J])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),He(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(O.__webglFramebuffer[J][ee],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else ve(O.__webglFramebuffer[J],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,ee=X.length;J<ee;J++){const oe=X[J],Ee=i.get(oe);let he=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),ze(he,oe),ve(O.__webglFramebuffer,C,oe,a.COLOR_ATTACHMENT0+J,he,0),p(oe)&&x(he)}t.unbindTexture()}else{let J=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),ze(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(O.__webglFramebuffer[ee],C,y,a.COLOR_ATTACHMENT0,J,ee);else ve(O.__webglFramebuffer,C,y,a.COLOR_ATTACHMENT0,J,0);p(y)&&x(J),t.unbindTexture()}C.depthBuffer&&Ve(C)}function qe(C){const y=C.textures;for(let O=0,z=y.length;O<z;O++){const X=y[O];if(p(X)){const re=T(C),ae=i.get(X).__webglTexture;t.bindTexture(re,ae),x(re),t.unbindTexture()}}}const gt=[],kt=[];function Kt(C){if(C.samples>0){if(xt(C)===!1){const y=C.textures,O=C.width,z=C.height;let X=a.COLOR_BUFFER_BIT;const re=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=i.get(C),J=y.length>1;if(J)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),J){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(y[oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,O,z,0,0,O,z,X,a.NEAREST),l===!0&&(gt.length=0,kt.length=0,gt.push(a.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(re),kt.push(re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,kt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(y[oe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,Ee,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function xt(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=r.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Bt(C,y){const O=C.colorSpace,z=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ir&&O!==qi&&($e.getTransfer(O)===st?(z!==ci||X!==jt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",O)),y}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Je,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Km(a,e){function t(i,s=qi){let n;const r=$e.getTransfer(s);if(i===jt)return a.UNSIGNED_BYTE;if(i===Ka)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Kl)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return a.BYTE;if(i===Yl)return a.SHORT;if(i===ls)return a.UNSIGNED_SHORT;if(i===Ya)return a.INT;if(i===Mi)return a.UNSIGNED_INT;if(i===bi)return a.FLOAT;if(i===wi)return a.HALF_FLOAT;if(i===Jl)return a.ALPHA;if(i===Ql)return a.RGB;if(i===ci)return a.RGBA;if(i===ki)return a.DEPTH_COMPONENT;if(i===sn)return a.DEPTH_STENCIL;if(i===jl)return a.RED;if(i===Ja)return a.RED_INTEGER;if(i===ln)return a.RG;if(i===Qa)return a.RG_INTEGER;if(i===ja)return a.RGBA_INTEGER;if(i===Xs||i===Ys||i===Ks||i===Zs)if(r===st)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Xs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Xs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===fa||i===pa||i===ma)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===ua)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===va||i===ya||i===ba||i===_a||i===js||i===xa)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===ga||i===va)return r===st?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===ya)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===ba)return n.COMPRESSED_R11_EAC;if(i===_a)return n.COMPRESSED_SIGNED_R11_EAC;if(i===js)return n.COMPRESSED_RG11_EAC;if(i===xa)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sa||i===Ma||i===wa||i===Ta||i===Ea||i===Aa||i===Ca||i===Ra||i===Pa||i===Ia||i===La||i===Da||i===ka||i===Na)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Sa)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wa)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Aa)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ca)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===La)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return r===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Fa||i===Ba)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===Ua)return r===st?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oa||i===Ga||i===er||i===Ha)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===Oa)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Ga)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===er)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jm=`
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

}`;class Qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:Zm,fragmentShader:Jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends hn{constructor(e,t){super();const i=this;let s=null,n=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",f=new Qm,p={},x=t.getContextAttributes();let T=null,_=null;const w=[],S=[],A=new De;let b=null,E=null;const P=new Yt;P.viewport=new yt;const I=new Yt;I.viewport=new yt;const k=[P,I],B=new sh;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=w[Z];return te===void 0&&(te=new Ir,w[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=w[Z];return te===void 0&&(te=new Ir,w[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=w[Z];return te===void 0&&(te=new Ir,w[Z]=te),te.getHandSpace()};function Y(Z){const te=S.indexOf(Z.inputSource);if(te===-1)return;const be=w[te];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||r),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<w.length;Z++){const te=S[Z];te!==null&&(S[Z]=null,w[Z].disconnect(te))}L=null,H=null,f.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(T),m=null,d=null,u=null,s=null,_=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){n=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ue=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?sn:ki,Ue=x.stencil?cs:Mi);const He={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:n};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new di(d.textureWidth,d.textureHeight,{format:ci,type:jt,depthTexture:new hs(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new di(m.framebufferWidth,m.framebufferHeight,{format:ci,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(Z){for(let te=0;te<Z.removed.length;te++){const be=Z.removed[te],Ue=S.indexOf(be);Ue>=0&&(S[Ue]=null,w[Ue].disconnect(be))}for(let te=0;te<Z.added.length;te++){const be=Z.added[te];let Ue=S.indexOf(be);if(Ue===-1){for(let He=0;He<w.length;He++)if(He>=S.length){S.push(be),Ue=He;break}else if(S[He]===null){S[He]=be,Ue=He;break}if(Ue===-1)break}const ve=w[Ue];ve&&ve.connect(be)}}const G=new D,$=new D;function Q(Z,te,be){G.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);const Ue=G.distanceTo($),ve=te.projectionMatrix.elements,He=be.projectionMatrix.elements,At=ve[14]/(ve[10]-1),Ve=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],ct=(ve[9]-1)/ve[5],qe=(ve[8]-1)/ve[0],gt=(He[8]+1)/He[0],kt=At*qe,Kt=At*gt,vt=Ue/(-qe+gt),xt=vt*-qe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const F=At+vt,Bt=Ve+vt,it=kt-xt,C=Kt+(Ue-xt),y=Je*Ve/Bt*F,O=ct*Ve/Bt*F;Z.projectionMatrix.makePerspective(it,C,y,O,F,Bt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Te(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,be=Z.far;f.texture!==null&&(f.depthNear>0&&(te=f.depthNear),f.depthFar>0&&(be=f.depthFar)),B.near=I.near=P.near=te,B.far=I.far=P.far=be,(L!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,H=B.far),B.layers.mask=Z.layers.mask|6,P.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const Ue=Z.parent,ve=B.cameras;Te(B,Ue);for(let He=0;He<ve.length;He++)Te(ve[He],Ue);ve.length===2?Q(B,P,I):B.projectionMatrix.copy(P.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),we(Z,B,Ue)};function we(Z,te,be){be===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Va*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let rt=null;function ze(Z,te){if(h=te.getViewerPose(c||r),g=te,h!==null){const be=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ue=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let Ve=0;Ve<be.length;Ve++){const Je=be[Ve];let ct=null;if(m!==null)ct=m.getViewport(Je);else{const gt=u.getViewSubImage(d,Je);ct=gt.viewport,Ve===0&&(e.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(_))}let qe=k[Ve];qe===void 0&&(qe=new Yt,qe.layers.enable(Ve),qe.viewport=new yt,k[Ve]=qe),qe.matrix.fromArray(Je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ct.x,ct.y,ct.width,ct.height),Ve===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(qe)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Ve=u.getDepthInformation(be[0]);Ve&&Ve.isValid&&Ve.texture&&f.init(Ve,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ve=0;Ve<be.length;Ve++){const Je=be[Ve].camera;if(Je){let ct=p[Je];ct||(ct=new dc,p[Je]=ct);const qe=u.getCameraImage(Je);ct.sourceTexture=qe}}}}for(let be=0;be<w.length;be++){const Ue=S[be],ve=w[be];Ue!==null&&ve!==void 0&&ve.update(Ue,te,c||r)}rt&&rt(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ye=new pc;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(Z){rt=Z},this.dispose=function(){}}}const eg=new mt,xc=new Fe;xc.set(-1,0,0,0,1,0,0,0,1);function tg(a,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,hc(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,x,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(f,p):p.isMeshLambertMaterial?(n(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(f,p),u(f,p)):p.isMeshPhongMaterial?(n(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,_)):p.isMeshMatcapMaterial?(n(f,p),g(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),v(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,x,T):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Zt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Zt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=e.get(p),T=x.envMap,_=x.envMapRotation;T&&(f.envMap.value=T,f.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(xc),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,x,T){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=T*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const x=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(a,e,t,i){let s={},n={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const S=w.program;i.uniformBlockBinding(_,S)}function c(_,w){let S=s[_.id];S===void 0&&(f(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",x));const A=w.program;i.updateUBOMapping(_,A);const b=e.render.frame;n[_.id]!==b&&(d(_),n[_.id]=b)}function h(_){const w=u();_.__bindingPointIndex=w;const S=a.createBuffer(),A=_.__size,b=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,A,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,S),S}function u(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const w=s[_.id],S=_.uniforms,A=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let b=0,E=S.length;b<E;b++){const P=S[b];if(Array.isArray(P))for(let I=0,k=P.length;I<k;I++)m(P[I],b,I,A);else m(P,b,0,A)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(_,w,S,A){if(v(_,w,S,A)===!0){const b=_.__offset,E=_.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){const k=E[I],B=p(k);g(k,_.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,b,_.__data)}}function g(_,w,S){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,S)}function v(_,w,S,A){const b=_.value,E=w+"_"+S;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:ArrayBuffer.isView(b)?A[E]=b.slice():A[E]=b.clone(),!0;{const P=A[E];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(P.equals(b)===!1)return P.copy(b),!0}}return!1}function f(_){const w=_.uniforms;let S=0;const A=16;for(let E=0,P=w.length;E<P;E++){const I=Array.isArray(w[E])?w[E]:[w[E]];for(let k=0,B=I.length;k<B;k++){const L=I[k],H=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,K=H.length;Y<K;Y++){const ne=H[Y],G=p(ne),$=S%A,Q=$%G.boundary,Te=$+Q;S+=Q,Te!==0&&A-Te<G.storage&&(S+=A-Te),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=G.storage}}}const b=S%A;return b>0&&(S+=A-b),_.__size=S,_.__cache={},this}function p(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),w}function x(_){const w=_.target;w.removeEventListener("dispose",x);const S=r.indexOf(w.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(s[w.id]),delete s[w.id],delete n[w.id]}function T(){for(const _ in s)a.deleteBuffer(s[_]);r=[],s={},n={}}return{bind:l,update:c,dispose:T}}const ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function sg(){return pi===null&&(pi=new Vd(ng,16,16,ln,wi),pi.name="DFG_LUT",pi.minFilter=Wt,pi.magFilter=Wt,pi.wrapS=Ii,pi.wrapT=Ii,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class po{constructor(e={}){const{canvas:t=vd(),context:i=null,depth:s=!0,stencil:n=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=jt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const v=m,f=new Set([ja,Qa,Ja]),p=new Set([jt,Mi,ls,cs,Ka,Za]),x=new Uint32Array(4),T=new Int32Array(4),_=new D;let w=null,S=null;const A=[],b=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,k=null,B=null,L=null,H=null;this._outputColorSpace=ni;let Y=0,K=0,ne=null,G=-1,$=null;const Q=new yt,Te=new yt;let we=null;const rt=new Le(0);let ze=0,Ye=t.width,Z=t.height,te=1,be=null,Ue=null;const ve=new yt(0,0,Ye,Z),He=new yt(0,0,Ye,Z);let At=!1;const Ve=new lo;let Je=!1,ct=!1;const qe=new mt,gt=new D,kt=new yt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function xt(){return ne===null?te:1}let F=i;function Bt(M,N){return t.getContext(M,N)}let it,C,y,O,z,X,re,ae,J,ee,oe,Ee,he,le,Ae,Re,Be,U,ce,j,de,me,ie;try{const M={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",si,!1),F===null){const N="webgl2";if(F=Bt(N,M),F===null)throw Bt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(M){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",si,!1),Ke("WebGLRenderer: "+M.message),M}function Ce(){it=new sp(F),it.init(),de=new Km(F,it),C=new Yf(F,it,e,de),y=new Xm(F,it),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),B=F.createFramebuffer(),L=F.createFramebuffer(),H=F.createFramebuffer(),O=new op(F),z=new Dm,X=new Ym(F,it,y,z,C,de,O),re=new np(P),ae=new lh(F),me=new $f(F,ae),J=new rp(F,ae,O,me),ee=new cp(F,J,ae,me,O),U=new lp(F,C,X),Ae=new Kf(z),oe=new Lm(P,re,it,C,me,Ae),Ee=new tg(P,z),he=new Nm,le=new Hm(it),Be=new qf(P,re,y,ee,g,l),Re=new $m(P,ee,C),ie=new ig(F,O,C,y),ce=new Xf(F,it,O),j=new ap(F,it,O),O.programs=oe.programs,P.capabilities=C,P.extensions=it,P.properties=z,P.renderLists=he,P.shadowMap=Re,P.state=y,P.info=O}v!==jt&&(E=new hp(v,t.width,t.height,o,s,n));const Se=new jm(P,F);this.xr=Se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Ye,Z,!1))},this.getSize=function(M){return M.set(Ye,Z)},this.setSize=function(M,N,q=!0){if(Se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,Z=N,t.width=Math.floor(M*te),t.height=Math.floor(N*te),q===!0&&(t.style.width=M+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Ye*te,Z*te).floor()},this.setDrawingBufferSize=function(M,N,q){Ye=M,Z=N,te=q,t.width=Math.floor(M*q),t.height=Math.floor(N*q),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(v===jt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,N,q,V){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,N,q,V),y.viewport(Q.copy(ve).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,N,q,V){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,N,q,V),y.scissor(Te.copy(He).multiplyScalar(te).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(M){y.setScissorTest(At=M)},this.setOpaqueSort=function(M){be=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,q=!0){let V=0;if(M){let W=!1;if(ne!==null){const pe=ne.texture.format;W=f.has(pe)}if(W){const pe=ne.texture.type,ye=p.has(pe),fe=Be.getClearColor(),_e=Be.getClearAlpha(),Me=fe.r,Oe=fe.g,We=fe.b;ye?(x[0]=Me,x[1]=Oe,x[2]=We,x[3]=_e,F.clearBufferuiv(F.COLOR,0,x)):(T[0]=Me,T[1]=Oe,T[2]=We,T[3]=_e,F.clearBufferiv(F.COLOR,0,T))}else V|=F.COLOR_BUFFER_BIT}N&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",si,!1),Be.dispose(),he.dispose(),le.dispose(),z.dispose(),re.dispose(),ee.dispose(),me.dispose(),ie.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",xo),Se.removeEventListener("sessionend",So),Yi.stop()};function dt(M){M.preventDefault(),rr("WebGLRenderer: Context Lost."),I=!0}function je(){rr("WebGLRenderer: Context Restored."),I=!1;const M=O.autoReset,N=Re.enabled,q=Re.autoUpdate,V=Re.needsUpdate,W=Re.type;Ce(),O.autoReset=M,Re.enabled=N,Re.autoUpdate=q,Re.needsUpdate=V,Re.type=W}function si(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function hi(M){const N=M.target;N.removeEventListener("dispose",hi),Cc(N)}function Cc(M){Rc(M),z.remove(M)}function Rc(M){const N=z.get(M).programs;N!==void 0&&(N.forEach(function(q){oe.releaseProgram(q)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,q,V,W,pe){N===null&&(N=Kt);const ye=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=Lc(M,N,q,V,W);y.setMaterial(V,ye);let _e=q.index,Me=1;if(V.wireframe===!0){if(_e=J.getWireframeAttribute(q),_e===void 0)return;Me=2}const Oe=q.drawRange,We=q.attributes.position;let xe=Oe.start*Me,et=(Oe.start+Oe.count)*Me;pe!==null&&(xe=Math.max(xe,pe.start*Me),et=Math.min(et,(pe.start+pe.count)*Me)),_e!==null?(xe=Math.max(xe,0),et=Math.min(et,_e.count)):We!=null&&(xe=Math.max(xe,0),et=Math.min(et,We.count));const St=et-xe;if(St<0||St===1/0)return;me.setup(W,V,fe,q,_e);let pt,lt=ce;if(_e!==null&&(pt=ae.get(_e),lt=j,lt.setIndex(pt)),W.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*xt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(W.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),y.setLineWidth(Ot*xt()),W.isLineSegments?lt.setMode(F.LINES):W.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else W.isPoints?lt.setMode(F.POINTS):W.isSprite&&lt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,ge=W._multiDrawCounts,qt=W._multiDrawCount,Ze=_e?ae.get(_e).bytesPerElement:1,ti=z.get(V).currentProgram.getUniforms();for(let ui=0;ui<qt;ui++)ti.setValue(F,"_gl_DrawID",ui),lt.render(Ot[ui]/Ze,ge[ui])}else if(W.isInstancedMesh)lt.renderInstances(xe,St,W.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ge=Math.min(q.instanceCount,Ot);lt.renderInstances(xe,St,ge)}else lt.render(xe,St)};function _o(M,N,q,V){k!==null&&M.isNodeMaterial&&k.setObject(V,M),Je===!0&&Ae.setState(M,q,!1),M.transparent===!0&&M.side===tt&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,ms(M,N,V),M.side=an,M.needsUpdate=!0,ms(M,N,V),M.side=tt):ms(M,N,V)}this.compile=function(M,N,q=null){q===null&&(q=M),k!==null&&k.renderStart(M,N,q),S=le.get(q),S.init(N),b.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),M!==q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),ct=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,ct),Je===!0&&Ae.setGlobalState(this.clippingPlanes,N),k!==null&&Re.render(S.state.shadowsArray,q,N);const V=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const fe=pe[ye];_o(fe,q,N,W),V.add(fe)}else _o(pe,q,N,W),V.add(pe)}),S=b.pop(),k!==null&&k.renderEnd(),V},this.compileAsync=function(M,N,q=null){const V=this.compile(M,N,q);return new Promise(W=>{function pe(){if(V.forEach(function(ye){const _e=z.get(ye).currentProgram;(_e===void 0||_e.isReady())&&V.delete(ye)}),V.size===0){W(M);return}setTimeout(pe,10)}it.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let br=null;function Pc(M){br&&br(M)}function xo(){Yi.stop()}function So(){Yi.start()}const Yi=new pc;Yi.setAnimationLoop(Pc),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){br=M,Se.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},Se.addEventListener("sessionstart",xo),Se.addEventListener("sessionend",So),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(M,N);const q=Se.enabled===!0&&Se.isPresenting===!0,V=E!==null&&(ne===null||q)&&E.begin(P,ne);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(N),N=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,ne),S=le.get(M,b.length),S.init(N),S.state.textureUnits=X.getTextureUnits(),b.push(S),qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ve.setFromProjectionMatrix(qe,_i,N.reversedDepth),ct=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,ct),w=he.get(M,A.length),w.init(),A.push(w),Se.enabled===!0&&Se.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&_r(ye,N,-1/0,P.sortObjects)}_r(M,N,0,P.sortObjects),w.finish(),k!==null&&k.updateLights(S.state.lightsArray),P.sortObjects===!0&&w.sort(be,Ue),vt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,vt&&Be.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ae.beginShadows();const W=S.state.shadowsArray;if(Re.render(W,M,N),Je===!0&&Ae.endShadows(),(V&&E.hasRenderPass())===!1){const ye=w.opaque,fe=w.transmissive;if(S.setupLights(),N.isArrayCamera){const _e=N.cameras;if(fe.length>0)for(let Me=0,Oe=_e.length;Me<Oe;Me++){const We=_e[Me];wo(ye,fe,M,We)}vt&&Be.render(M);for(let Me=0,Oe=_e.length;Me<Oe;Me++){const We=_e[Me];Mo(w,M,We,We.viewport)}}else fe.length>0&&wo(ye,fe,M,N),vt&&Be.render(M),Mo(w,M,N)}ne!==null&&K===0&&(X.updateMultisampleRenderTarget(ne),X.updateRenderTargetMipmap(ne)),V&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),me.resetDefaultState(),G=-1,$=null,b.pop(),b.length>0?(S=b[b.length-1],X.setTextureUnits(S.state.textureUnits),Je===!0&&Ae.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,k!==null&&k.renderEnd()};function _r(M,N,q,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ve)){V&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qe);const ye=ee.update(M),fe=M.material;fe.visible&&w.push(M,ye,fe,q,kt.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ve))){const ye=ee.update(M),fe=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),kt.copy(ye.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(qe)),Array.isArray(fe)){const _e=ye.groups;for(let Me=0,Oe=_e.length;Me<Oe;Me++){const We=_e[Me],xe=fe[We.materialIndex];xe&&xe.visible&&w.push(M,ye,xe,q,kt.z,We,N)}}else fe.visible&&w.push(M,ye,fe,q,kt.z,null,N)}}const pe=M.children;for(let ye=0,fe=pe.length;ye<fe;ye++)_r(pe[ye],N,q,V)}function Mo(M,N,q,V){const{opaque:W,transmissive:pe,transparent:ye}=M;S.setupLightsView(q),Je===!0&&Ae.setGlobalState(P.clippingPlanes,q),V&&y.viewport(Q.copy(V)),W.length>0&&ps(W,N,q),pe.length>0&&ps(pe,N,q),ye.length>0&&ps(ye,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function wo(M,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){const xe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new di(1,1,{generateMipmaps:!0,type:xe?wi:jt,minFilter:nn,samples:Math.max(4,C.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const pe=S.state.transmissionRenderTarget[V.id],ye=V.viewport||Q;pe.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),_e=P.getActiveCubeFace(),Me=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(rt),ze=P.getClearAlpha(),ze<1&&P.setClearColor(16777215,.5),P.clear(),vt&&Be.render(q);const Oe=P.toneMapping;P.toneMapping=xi;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),Je===!0&&Ae.setGlobalState(P.clippingPlanes,V),ps(M,q,V),X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe),it.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let et=0,St=N.length;et<St;et++){const pt=N[et],{object:lt,geometry:Ot,material:ge,group:qt}=pt;if(ge.side===tt&&lt.layers.test(V.layers)){const Ze=ge.side;ge.side=Zt,ge.needsUpdate=!0,To(lt,q,V,Ot,ge,qt),ge.side=Ze,ge.needsUpdate=!0,xe=!0}}xe===!0&&(X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,_e,Me),P.setClearColor(rt,ze),We!==void 0&&(V.viewport=We),P.toneMapping=Oe}function ps(M,N,q){const V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,pe=M.length;W<pe;W++){const ye=M[W],{object:fe,geometry:_e,group:Me}=ye;let Oe=ye.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),fe.layers.test(q.layers)&&To(fe,N,q,_e,Oe,Me)}}function To(M,N,q,V,W,pe){k!==null&&W.isNodeMaterial&&k.setObject(M,W),M.onBeforeRender(P,N,q,V,W,pe),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(P,N,q,V,M,pe),W.transparent===!0&&W.side===tt&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,P.renderBufferDirect(q,N,V,W,M,pe),W.side=an,W.needsUpdate=!0,P.renderBufferDirect(q,N,V,W,M,pe),W.side=tt):P.renderBufferDirect(q,N,V,W,M,pe),M.onAfterRender(P,N,q,V,W,pe)}function ms(M,N,q){N.isScene!==!0&&(N=Kt);const V=z.get(M),W=S.state.lights,pe=S.state.shadowsArray,ye=W.state.version,fe=oe.getParameters(M,W.state,pe,N,q,S.state.lightProbeGridArray),_e=oe.getProgramCacheKey(fe);let Me=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=re.get(M.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",hi),Me=new Map,V.programs=Me);let We=Me.get(_e);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===ye)return Ao(M,fe),We}else fe.uniforms=oe.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,q,fe),M.onBeforeCompile(fe,P),We=oe.acquireProgram(fe,_e),Me.set(_e,We),V.uniforms=fe.uniforms;const xe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=Ae.uniform),Ao(M,fe),V.needsLights=kc(M),V.lightsStateVersion=ye,V.needsLights&&(xe.ambientLightColor.value=W.state.ambient,xe.lightProbe.value=W.state.probe,xe.sunLights.value=W.state.sun,xe.sunLightShadows.value=W.state.sunShadow,xe.directionalLights.value=W.state.directional,xe.directionalLightShadows.value=W.state.directionalShadow,xe.spotLights.value=W.state.spot,xe.spotLightShadows.value=W.state.spotShadow,xe.rectAreaLights.value=W.state.rectArea,xe.ltc_1.value=W.state.rectAreaLTC1,xe.ltc_2.value=W.state.rectAreaLTC2,xe.pointLights.value=W.state.point,xe.pointLightShadows.value=W.state.pointShadow,xe.hemisphereLights.value=W.state.hemi,xe.sunShadowMatrix.value=W.state.sunShadowMatrix,xe.sunShadowCascade.value=W.state.sunShadowCascade,xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,xe.spotLightMatrix.value=W.state.spotLightMatrix,xe.spotLightMap.value=W.state.spotLightMap,xe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=We,V.uniformsList=null,We}function Eo(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Qs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Ao(M,N){const q=z.get(M);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Ic(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=M.length;q<V;q++){const W=M[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Lc(M,N,q,V,W){N.isScene!==!0&&(N=Kt),X.resetTextureUnits();const pe=N.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,fe=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,_e=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Me=re.get(V.envMap||ye,_e),Oe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),xe=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let pt=xi;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pt=P.toneMapping);const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=lt!==void 0?lt.length:0,ge=z.get(V),qt=S.state.lights;if(Je===!0&&(ct===!0||M!==$)){const ht=M===$&&V.id===G;Ae.setState(V,M,ht)}let Ze=!1;V.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==qt.state.version||ge.outputColorSpace!==fe||W.isBatchedMesh&&ge.batching===!1||!W.isBatchedMesh&&ge.batching===!0||W.isBatchedMesh&&ge.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&ge.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&ge.instancing===!1||!W.isInstancedMesh&&ge.instancing===!0||W.isSkinnedMesh&&ge.skinning===!1||!W.isSkinnedMesh&&ge.skinning===!0||W.isInstancedMesh&&ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ge.instancingMorph===!1&&W.morphTexture!==null||ge.envMap!==Me||V.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Oe||ge.vertexTangents!==We||ge.morphTargets!==xe||ge.morphNormals!==et||ge.morphColors!==St||ge.toneMapping!==pt||ge.morphTargetsCount!==Ot||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ge.__version=V.version);let ti=ge.currentProgram;Ze===!0&&(ti=ms(V,N,W),k&&V.isNodeMaterial&&k.onUpdateProgram(V,ti,ge));let ui=!1,Ui=!1,un=!1;const at=ti.getUniforms(),_t=ge.uniforms;if(y.useProgram(ti.program)&&(ui=!0,Ui=!0,un=!0),V.id!==G&&(G=V.id,Ui=!0),ge.needsLights){const ht=Ic(S.state.lightProbeGridArray,W);ge.lightProbeGrid!==ht&&(ge.lightProbeGrid=ht,Ui=!0)}if(ui||$!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",M.projectionMatrix),at.setValue(F,"viewMatrix",M.matrixWorldInverse);const Bi=at.map.cameraPosition;Bi!==void 0&&Bi.setValue(F,gt.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Ui=!0,un=!0)}if(ge.needsLights&&(qt.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",qt.state.sunShadowMap,X),qt.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",qt.state.directionalShadowMap,X),qt.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",qt.state.spotShadowMap,X),qt.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",qt.state.pointShadowMap,X)),W.isSkinnedMesh){at.setOptional(F,W,"bindMatrix"),at.setOptional(F,W,"bindMatrixInverse");const ht=W.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),at.setValue(F,"boneTexture",ht.boneTexture,X))}W.isBatchedMesh&&(at.setOptional(F,W,"batchingTexture"),at.setValue(F,"batchingTexture",W._matricesTexture,X),at.setOptional(F,W,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",W._indirectTexture,X),at.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",W._colorsTexture,X));const Fi=q.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&U.update(W,q,ti),(Ui||ge.receiveShadow!==W.receiveShadow)&&(ge.receiveShadow=W.receiveShadow,at.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(_t.envMapIntensity.value=N.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=sg()),Ui){if(at.setValue(F,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&Dc(_t,un),pe&&V.fog===!0&&Ee.refreshFogUniforms(_t,pe),Ee.refreshMaterialUniforms(_t,V,te,Z,S.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const ht=ge.lightProbeGrid;_t.probesSH.value=ht.texture,_t.probesMin.value.copy(ht.boundingBox.min),_t.probesMax.value.copy(ht.boundingBox.max),_t.probesResolution.value.copy(ht.resolution)}Qs.upload(F,Eo(ge),_t,X)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qs.upload(F,Eo(ge),_t,X),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(F,"center",W.center),at.setValue(F,"modelViewMatrix",W.modelViewMatrix),at.setValue(F,"normalMatrix",W.normalMatrix),at.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const ht=V.uniformsGroups;for(let Bi=0,fn=ht.length;Bi<fn;Bi++){const Ro=ht[Bi];ie.update(Ro,ti),ie.bind(Ro,ti)}}return ti}function Dc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function kc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(M,N,q){const V=z.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=N,z.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const q=z.get(M);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,q=0){ne=M,Y=N,K=q;let V=null,W=!1,pe=!1;if(M){const fe=z.get(M);if(fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),Q.copy(M.viewport),Te.copy(M.scissor),we=M.scissorTest,y.viewport(Q),y.scissor(Te),y.setScissorTest(we),G=-1;return}else if(fe.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(fe.__hasExternalTextures)X.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&z.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}const _e=M.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(pe=!0);const Me=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Me[N])?V=Me[N][q]:V=Me[N],W=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?V=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Me)?V=Me[q]:V=Me,Q.copy(M.viewport),Te.copy(M.scissor),we=M.scissorTest}else Q.copy(ve).multiplyScalar(te).floor(),Te.copy(He).multiplyScalar(te).floor(),we=At;if(q!==0&&(V=B),y.bindFramebuffer(F.FRAMEBUFFER,V)&&y.drawBuffers(M,V),y.viewport(Q),y.scissor(Te),y.setScissorTest(we),W){const fe=z.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,q)}else if(pe){const fe=N;for(let _e=0;_e<M.textures.length;_e++){const Me=z.get(M.textures[_e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+_e,Me.__webglTexture,q,fe)}}else if(M!==null&&q!==0){const fe=z.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,q)}G=-1};function Co(M){const N=z.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=C.textureFormatReadable(M.format),N.__typeReadable=C.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,q,V,W,pe,ye,fe=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e){y.bindFramebuffer(F.FRAMEBUFFER,_e);try{const Me=M.textures[fe],Oe=Me.format,We=Me.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const xe=Co(Me);if(xe.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&q>=0&&q<=M.height-W&&F.readPixels(N,q,V,W,de.convert(Oe),de.convert(We),pe)}finally{const Me=ne!==null?z.get(ne).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,N,q,V,W,pe,ye,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e)if(N>=0&&N<=M.width-V&&q>=0&&q<=M.height-W){y.bindFramebuffer(F.FRAMEBUFFER,_e);const Me=M.textures[fe],Oe=Me.format,We=Me.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const xe=Co(Me);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(N,q,V,W,de.convert(Oe),de.convert(We),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const St=ne!==null?z.get(ne).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,St);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yd(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(et),F.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,q=0){const V=Math.pow(2,-q),W=Math.floor(M.image.width*V),pe=Math.floor(M.image.height*V),ye=N!==null?N.x:0,fe=N!==null?N.y:0;X.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ye,fe,W,pe),y.unbindTexture()},this.copyTextureToTexture=function(M,N,q=null,V=null,W=0,pe=0){let ye,fe,_e,Me,Oe,We,xe,et,St;const pt=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(q!==null)ye=q.max.x-q.min.x,fe=q.max.y-q.min.y,_e=q.isBox3?q.max.z-q.min.z:1,Me=q.min.x,Oe=q.min.y,We=q.isBox3?q.min.z:0;else{const _t=Math.pow(2,-W);ye=Math.floor(pt.width*_t),fe=Math.floor(pt.height*_t),M.isDataArrayTexture?_e=pt.depth:M.isData3DTexture?_e=Math.floor(pt.depth*_t):_e=1,Me=0,Oe=0,We=0}V!==null?(xe=V.x,et=V.y,St=V.z):(xe=0,et=0,St=0);const lt=de.convert(N.format),Ot=de.convert(N.type);let ge;N.isData3DTexture?(X.setTexture3D(N,0),ge=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),ge=F.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),ge=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const qt=y.getParameter(F.UNPACK_ROW_LENGTH),Ze=y.getParameter(F.UNPACK_IMAGE_HEIGHT),ti=y.getParameter(F.UNPACK_SKIP_PIXELS),ui=y.getParameter(F.UNPACK_SKIP_ROWS),Ui=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Me),y.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),y.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const un=M.isDataArrayTexture||M.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const _t=z.get(M),Fi=z.get(N),ht=z.get(_t.__renderTarget),Bi=z.get(Fi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,ht.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let fn=0;fn<_e;fn++)un&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(M).__webglTexture,W,We+fn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(N).__webglTexture,pe,St+fn)),F.blitFramebuffer(Me,Oe,ye,fe,xe,et,ye,fe,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||z.has(M)){const _t=z.get(M),Fi=z.get(N);y.bindFramebuffer(F.READ_FRAMEBUFFER,L),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let ht=0;ht<_e;ht++)un?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,W,We+ht):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,W),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fi.__webglTexture,pe,St+ht):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fi.__webglTexture,pe),W!==0?F.blitFramebuffer(Me,Oe,ye,fe,xe,et,ye,fe,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(ge,pe,xe,et,St+ht,Me,Oe,ye,fe):F.copyTexSubImage2D(ge,pe,xe,et,Me,Oe,ye,fe);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(ge,pe,xe,et,St,ye,fe,_e,lt,Ot,pt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(ge,pe,xe,et,St,ye,fe,_e,lt,pt.data):F.texSubImage3D(ge,pe,xe,et,St,ye,fe,_e,lt,Ot,pt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,xe,et,ye,fe,lt,Ot,pt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,xe,et,pt.width,pt.height,lt,pt.data):F.texSubImage2D(F.TEXTURE_2D,pe,xe,et,ye,fe,lt,Ot,pt);y.pixelStorei(F.UNPACK_ROW_LENGTH,qt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),y.pixelStorei(F.UNPACK_SKIP_PIXELS,ti),y.pixelStorei(F.UNPACK_SKIP_ROWS,ui),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Ui),pe===0&&N.generateMipmaps&&F.generateMipmap(ge),y.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){Y=0,K=0,ne=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class kn{constructor(e,t="Player"){R(this,"root");R(this,"headGroup");R(this,"torsoMesh");R(this,"headMesh");R(this,"leftArmGroup");R(this,"rightArmGroup");R(this,"leftLegGroup");R(this,"rightLegGroup");R(this,"toolAttachment");R(this,"leftArmMesh");R(this,"rightArmMesh");R(this,"leftLegMesh");R(this,"rightLegMesh");R(this,"hatMesh",null);R(this,"gearMesh",null);R(this,"nameTagSprite",null);R(this,"animTime",0);R(this,"toolSwingTime",0);R(this,"customization");const i={headColor:e.headColor||"#fdba74",torsoColor:e.torsoColor||"#1e293b",leftArmColor:e.leftArmColor||"#fdba74",rightArmColor:e.rightArmColor||"#fdba74",leftLegColor:e.leftLegColor||"#0f172a",rightLegColor:e.rightLegColor||"#0f172a",equippedHat:e.equippedHat||"none",equippedShirt:e.equippedShirt||"none",equippedPants:e.equippedPants||"none",equippedFace:e.equippedFace||"smile",equippedGear:e.equippedGear||"none"};this.customization=i,this.root=new Rt;const s=new Pe(2,2,1),n=this.createTorsoMaterials(i.equippedShirt,i.torsoColor);this.torsoMesh=new se(s,n),this.torsoMesh.position.y=3,this.torsoMesh.castShadow=!0,this.torsoMesh.receiveShadow=!0,this.root.add(this.torsoMesh),this.headGroup=new Rt,this.headGroup.position.set(0,1.625,0),this.torsoMesh.add(this.headGroup);const r=new Pe(1.25,1.25,1.25),o=this.createHeadMaterials(i.headColor,i.equippedFace);this.headMesh=new se(r,o),this.headMesh.castShadow=!0,this.headGroup.add(this.headMesh),this.leftArmGroup=new Rt,this.leftArmGroup.position.set(-1.5,1,0),this.torsoMesh.add(this.leftArmGroup);const l=new Pe(1,2,1);l.translate(0,-1,0);const c=new ke({color:i.leftArmColor});this.leftArmMesh=new se(l,c),this.leftArmGroup.add(this.leftArmMesh),this.rightArmGroup=new Rt,this.rightArmGroup.position.set(1.5,1,0),this.torsoMesh.add(this.rightArmGroup);const h=new ke({color:i.rightArmColor});this.rightArmMesh=new se(l.clone(),h),this.rightArmGroup.add(this.rightArmMesh),this.toolAttachment=new Rt,this.toolAttachment.position.set(0,-2,.4),this.rightArmGroup.add(this.toolAttachment),this.leftLegGroup=new Rt,this.leftLegGroup.position.set(-.5,-1,0),this.torsoMesh.add(this.leftLegGroup);const u=new Pe(1,2,1);u.translate(0,-1,0);const d=new ke({color:i.leftLegColor});this.leftLegMesh=new se(u,d),this.leftLegGroup.add(this.leftLegMesh),this.rightLegGroup=new Rt,this.rightLegGroup.position.set(.5,-1,0),this.torsoMesh.add(this.rightLegGroup);const m=new ke({color:i.rightLegColor});this.rightLegMesh=new se(u.clone(),m),this.rightLegGroup.add(this.rightLegMesh),this.applyHat(i.equippedHat),this.applyGear(i.equippedGear),this.createNameTag(t)}createHeadMaterials(e,t){const i=new ke({color:e}),s=new ke({map:this.generateFaceTexture(t,e),color:16777215,transparent:!1});return[i,i,i,i,s,i]}generateFaceTexture(e,t){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle="#111827",s.strokeStyle="#111827",s.lineWidth=14,s.lineCap="round",e==="zombie"){s.fillStyle="#0f172a",s.fillRect(52,68,52,44),s.fillRect(152,68,52,44),s.fillStyle="#ef4444",s.beginPath(),s.arc(78,90,16,0,Math.PI*2),s.arc(178,90,16,0,Math.PI*2),s.fill(),s.fillStyle="#fde047",s.beginPath(),s.arc(80,88,6,0,Math.PI*2),s.arc(180,88,6,0,Math.PI*2),s.fill(),s.strokeStyle="#052e16",s.lineWidth=10,s.beginPath(),s.moveTo(50,64),s.lineTo(105,80),s.moveTo(206,64),s.lineTo(151,80),s.stroke(),s.fillStyle="#450a0a",s.beginPath(),s.ellipse(128,162,55,32,0,0,Math.PI*2),s.fill(),s.fillStyle="#fef08a";for(let r=85;r<=165;r+=16)s.beginPath(),s.moveTo(r-6,138),s.lineTo(r+6,138),s.lineTo(r,152),s.fill(),s.beginPath(),s.moveTo(r-6,186),s.lineTo(r+6,186),s.lineTo(r,172),s.fill();s.strokeStyle="#14532d",s.lineWidth=6,s.beginPath(),s.moveTo(60,30),s.lineTo(110,45),s.stroke();for(let r=68;r<=102;r+=10)s.beginPath(),s.moveTo(r,28),s.lineTo(r+4,48),s.stroke()}else e==="serious"?(s.fillStyle="#0f172a",s.beginPath(),s.arc(75,95,14,0,Math.PI*2),s.arc(181,95,14,0,Math.PI*2),s.fill(),s.strokeStyle="#1e293b",s.lineWidth=10,s.beginPath(),s.moveTo(55,78),s.lineTo(100,88),s.moveTo(201,78),s.lineTo(156,88),s.stroke(),s.lineWidth=8,s.beginPath(),s.moveTo(95,150),s.lineTo(161,150),s.stroke()):e==="chill"?(s.beginPath(),s.arc(75,95,26,Math.PI,0,!1),s.stroke(),s.beginPath(),s.arc(181,95,26,Math.PI,0,!1),s.stroke(),s.beginPath(),s.arc(128,140,45,.2*Math.PI,.8*Math.PI,!1),s.stroke()):e==="epic_face"?(s.beginPath(),s.ellipse(75,90,24,34,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(181,90,24,34,0,0,Math.PI*2),s.fill(),s.fillStyle="#dc2626",s.beginPath(),s.arc(128,145,60,0,Math.PI,!1),s.fill(),s.stroke(),s.fillStyle="#ffffff",s.fillRect(80,145,96,18)):e==="mischief"?(s.beginPath(),s.moveTo(50,95),s.lineTo(95,95),s.stroke(),s.beginPath(),s.arc(180,90,20,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(140,150,36,.1*Math.PI,.6*Math.PI,!1),s.stroke()):(s.beginPath(),s.arc(75,90,18,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(181,90,18,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(128,135,48,.15*Math.PI,.85*Math.PI,!1),s.stroke());const n=new yi(i);return n.needsUpdate=!0,n}createTorsoMaterials(e,t){const i=new ke({color:t});if(!e||e==="none")return[i,i,i,i,i,i];const s=document.createElement("canvas");s.width=256,s.height=256;const n=s.getContext("2d");if(e==="synthetic_skin"){n.fillStyle="#0f172a",n.fillRect(0,0,256,256),n.fillStyle="#1e293b",n.strokeStyle="#38bdf8",n.lineWidth=4,n.strokeRect(20,20,100,100),n.strokeRect(136,20,100,100),n.strokeRect(30,140,196,90);const r=n.createRadialGradient(128,90,5,128,90,45);r.addColorStop(0,"#ffffff"),r.addColorStop(.3,"#38bdf8"),r.addColorStop(.8,"#0284c7"),r.addColorStop(1,"rgba(2, 132, 199, 0)"),n.fillStyle=r,n.beginPath(),n.arc(128,90,45,0,Math.PI*2),n.fill(),n.strokeStyle="#06b6d4",n.lineWidth=5,n.beginPath(),n.arc(128,90,22,0,Math.PI*2),n.stroke();const o=new yi(s);o.needsUpdate=!0;const l=new ke({map:o}),c=new ke({color:1976635});return[c,c,c,c,l,c]}else if(e==="starweaver_robes"){const r=n.createLinearGradient(0,0,256,256);r.addColorStop(0,"#1e1b4b"),r.addColorStop(.5,"#312e81"),r.addColorStop(1,"#4c1d95"),n.fillStyle=r,n.fillRect(0,0,256,256),n.strokeStyle="#facc15",n.lineWidth=6,n.strokeRect(16,16,224,224);const o=[[50,60],[90,100],[150,80],[200,130],[80,180],[170,200],[128,140]];n.strokeStyle="rgba(250, 204, 21, 0.6)",n.lineWidth=2,n.beginPath();for(let u=0;u<o.length-1;u++)n.moveTo(o[u][0],o[u][1]),n.lineTo(o[u+1][0],o[u+1][1]);n.stroke(),n.fillStyle="#ffffff",o.forEach(([u,d])=>{n.beginPath(),n.arc(u,d,4,0,Math.PI*2),n.fill()});const l=new yi(s);l.needsUpdate=!0;const c=new ke({map:l}),h=new ke({color:3223169});return[h,h,h,h,c,h]}else if(e==="tattered_zombie"){n.fillStyle="#1c1917",n.fillRect(0,0,256,256),n.fillStyle="#450a0a",n.beginPath(),n.arc(80,110,45,0,Math.PI*2),n.arc(175,160,55,0,Math.PI*2),n.fill(),n.fillStyle="#e2e8f0";for(let c=80;c<=150;c+=20)n.fillRect(60,c,50,8);n.fillStyle=t,n.beginPath(),n.moveTo(0,256);for(let c=0;c<=256;c+=32)n.lineTo(c+16,220),n.lineTo(c+32,256);n.fill();const r=new yi(s);r.needsUpdate=!0;const o=new ke({map:r}),l=new ke({color:1841431});return[l,l,l,l,o,l]}return[i,i,i,i,i,i]}applyCustomization(e){this.customization=e,this.torsoMesh.material=this.createTorsoMaterials(e.equippedShirt||"none",e.torsoColor||"#1e293b"),this.leftArmMesh.material.color.set(e.leftArmColor||"#fdba74"),this.rightArmMesh.material.color.set(e.rightArmColor||"#fdba74"),this.leftLegMesh.material.color.set(e.leftLegColor||"#0f172a"),this.rightLegMesh.material.color.set(e.rightLegColor||"#0f172a"),this.headMesh.material=this.createHeadMaterials(e.headColor||"#fdba74",e.equippedFace||"smile"),this.applyHat(e.equippedHat||"none"),this.applyGear(e.equippedGear||"none")}getCustomization(){return this.customization}applyHat(e){if(this.hatMesh&&(this.headGroup.remove(this.hatMesh),this.hatMesh=null),e!=="none"){if(this.hatMesh=new Rt,e==="classic_fedora"){const t=new se(new Qe(1.3,1.3,.1,16),new Ne({color:2042167}));t.position.y=.65;const i=new se(new Qe(.75,.85,.7,16),new Ne({color:1120295}));i.position.y=1;const s=new se(new Qe(.86,.86,.15,16),new Ne({color:14251782}));s.position.y=.75,this.hatMesh.add(t,i,s)}else if(e==="top_hat"){const t=new se(new Qe(1.2,1.2,.08,16),new Ne({color:1120295}));t.position.y=.65;const i=new se(new Qe(.7,.7,1.2,16),new Ne({color:2040877}));i.position.y=1.25;const s=new se(new Qe(.72,.72,.2,16),new Ne({color:14427686}));s.position.y=.78,this.hatMesh.add(t,i,s)}else if(e==="cyberpunk_visor"){const t=new se(new Pe(1.35,.35,.45),new nt({color:440020,emissive:440020,emissiveIntensity:.9,roughness:.1}));t.position.set(0,0,.55);const i=new se(new Pe(1.38,.18,1.38),new Ne({color:988970}));this.hatMesh.add(t,i)}else if(e==="eagle_eye"){const t=new se(new Pe(1.3,.25,.3),new Ne({color:7877903}));t.position.set(0,.05,.55);const i=new se(new Qe(.2,.2,.15,12),new nt({color:16096779,emissive:14251782,emissiveIntensity:.4}));i.rotation.x=Math.PI/2,i.position.set(-.35,.05,.7);const s=i.clone();s.position.x=.35,this.hatMesh.add(t,i,s)}else if(e==="viking_helmet"){const t=new se(new Qe(.75,.75,.45,12),new Ne({color:10265519}));t.position.y=.8;const i=new se(new cn(.2,.7,8),new Ne({color:16707722}));i.position.set(-.8,1,0),i.rotation.z=Math.PI/4;const s=i.clone();s.position.set(.8,1,0),s.rotation.z=-Math.PI/4,this.hatMesh.add(t,i,s)}else if(e==="halo"||e==="supporter_halo"){const t=new se(new dn(.8,.1,8,24),new ke({color:16436245}));t.rotation.x=Math.PI/2,t.position.y=1.35,this.hatMesh.add(t)}this.headGroup.add(this.hatMesh)}}applyGear(e){if(this.gearMesh&&(this.toolAttachment.remove(this.gearMesh),this.gearMesh=null),e!=="none"){if(this.gearMesh=new Rt,e==="sword"){const t=new se(new Qe(.08,.08,.6,8),new Ne({color:7877903})),i=new se(new Pe(.6,.1,.2),new Ne({color:16096779}));i.position.y=.3;const s=new se(new Pe(.25,1.8,.06),new Ne({color:3718648}));s.position.y=1.25,this.gearMesh.add(t,i,s),this.gearMesh.rotation.x=Math.PI/2}else if(e==="speed_coil"){const t=new se(new dn(.4,.1,8,16),new ke({color:41727})),i=new se(new Qe(.08,.08,.6,8),new Ne({color:1976635}));t.position.y=.3,this.gearMesh.add(i,t),this.gearMesh.rotation.x=Math.PI/2}else if(e==="axe"){const t=new se(new Qe(.08,.08,1.4,8),new Ne({color:9584654})),i=new se(new Pe(.5,.5,.12),new Ne({color:9741240}));i.position.set(.2,.5,0),this.gearMesh.add(t,i),this.gearMesh.rotation.x=Math.PI/2}else if(e==="pickaxe"){const t=new se(new Qe(.08,.08,1.5,8),new Ne({color:7877903})),i=new se(new Pe(1.2,.16,.14),new nt({color:3718648,metalness:.6,roughness:.3}));i.position.set(0,.65,0);const s=new se(new cn(.12,.3,4),new nt({color:165063}));s.position.set(-.65,.65,0),s.rotation.z=Math.PI/2;const n=s.clone();n.position.set(.65,.65,0),n.rotation.z=-Math.PI/2,this.gearMesh.add(t,i,s,n),this.gearMesh.rotation.x=Math.PI/2}else if(e.startsWith("block_")){const t=e.replace("block_",""),s={grass:2278750,stone:7893356,wood:7877903,leaves:1483594,brick:12131356,crystal:3718648,dirt:6634010,sand:16436245}[t]||3718648,n=new se(new Pe(.7,.7,.7),new Ne({color:s}));n.position.set(0,.3,0),this.gearMesh.add(n),this.gearMesh.rotation.x=Math.PI/4}else if(e==="wings"){const t=new se(new Pe(1.8,.8,.05),new Ne({color:3718648}));t.position.set(-1.2,.5,-.6),t.rotation.z=Math.PI/8;const i=t.clone();i.position.set(1.2,.5,-.6),i.rotation.z=-Math.PI/8,this.gearMesh.add(t,i),this.torsoMesh.add(this.gearMesh);return}this.toolAttachment.add(this.gearMesh)}}createNameTag(e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle="rgba(15, 23, 42, 0.75)",i.beginPath(),i.roundRect(8,8,240,48,16),i.fill(),i.font="bold 24px Inter, sans-serif",i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const s=new yi(t),n=new ao({map:s,depthTest:!0});this.nameTagSprite=new oc(n),this.nameTagSprite.position.set(0,3.2,0),this.nameTagSprite.scale.set(1.6,.4,1),this.torsoMesh.add(this.nameTagSprite)}setLocalPlayer(e){this.nameTagSprite&&(this.nameTagSprite.visible=!e),this.torsoMesh.visible=!0,this.headGroup.visible=!0,this.leftArmGroup.visible=!0,this.rightArmGroup.visible=!0,this.leftLegGroup.visible=!0,this.rightLegGroup.visible=!0}triggerToolSwing(){this.toolSwingTime=.35}updateAnimation(e,t,i,s,n){if(this.nameTagSprite&&n&&this.root.position.distanceTo(n)<3&&(this.nameTagSprite.visible=!1),this.animTime+=e*8,this.toolSwingTime>0){this.toolSwingTime-=e;const r=Math.max(0,this.toolSwingTime/.35);this.rightArmGroup.rotation.x=-Math.sin(r*Math.PI)*1.5}if(i)this.leftArmGroup.rotation.x=-Math.PI*.75,this.toolSwingTime<=0&&(this.rightArmGroup.rotation.x=-Math.PI*.75),this.leftLegGroup.rotation.x=Math.PI*.2,this.rightLegGroup.rotation.x=-Math.PI*.15,this.headGroup.rotation.x=s>0?-.2:.2;else if(t){const r=Math.sin(this.animTime)*.8;this.leftArmGroup.rotation.x=-r,this.toolSwingTime<=0&&(this.rightArmGroup.rotation.x=r),this.leftLegGroup.rotation.x=r,this.rightLegGroup.rotation.x=-r,this.torsoMesh.position.y=3+Math.abs(Math.sin(this.animTime*2))*.12,this.headGroup.rotation.x=0}else{const r=Math.sin(this.animTime*.35)*.05;this.leftArmGroup.rotation.x=r,this.toolSwingTime<=0&&(this.rightArmGroup.rotation.x=r),this.leftLegGroup.rotation.x=0,this.rightLegGroup.rotation.x=0,this.torsoMesh.position.y=3+r*.5,this.headGroup.rotation.x=0}}setFirstPerson(e){this.headGroup.visible=!e,this.torsoMesh.visible=!e,this.leftArmGroup.visible=!e,this.leftLegGroup.visible=!e,this.rightLegGroup.visible=!e,this.nameTagSprite&&(this.nameTagSprite.visible=!e),this.rightArmGroup.visible=!0}}const Sc={headColor:"#fdba74",torsoColor:"#1e293b",leftArmColor:"#fdba74",rightArmColor:"#fdba74",leftLegColor:"#0f172a",rightLegColor:"#0f172a",equippedHat:"none",equippedShirt:"none",equippedPants:"none",equippedFace:"smile",equippedGear:"none"},rg=["#facc15","#0284c7","#16a34a","#dc2626","#ffffff","#111827","#f97316","#a855f7","#ec4899","#78350f","#94a3b8","#334155","#10b981","#06b6d4","#fde047","#fdba74"];class ag{constructor(e){R(this,"canvas");R(this,"scene");R(this,"camera");R(this,"renderer");R(this,"avatar");R(this,"currentCustomization");R(this,"isDragging",!1);R(this,"prevMouseX",0);R(this,"avatarRotationY",0);R(this,"animId",0);R(this,"animate",()=>{this.animId=requestAnimationFrame(this.animate),this.isDragging||(this.avatarRotationY+=.004),this.avatar.root.rotation.y=this.avatarRotationY,this.avatar.updateAnimation(.016,!1,!1,0),this.renderer.render(this.scene,this.camera)});this.canvas=e,this.currentCustomization=this.loadCustomization(),this.scene=new ro,this.camera=new Yt(45,e.clientWidth/e.clientHeight,.1,100),this.camera.position.set(0,3,9.5),this.renderer=new po({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0;const t=new fo(16777215,.85);this.scene.add(t);const i=new dr(16777215,1.2);i.position.set(5,10,7),this.scene.add(i);const s=new se(new Qe(2.5,2.7,.3,32),new Ne({color:1976635}));s.position.y=-.15,this.scene.add(s),this.avatar=new kn(this.currentCustomization,"You"),this.scene.add(this.avatar.root),this.setupMouseEvents(),this.animate()}loadCustomization(){try{const e=localStorage.getItem("rbx_avatar_customization");if(e)return JSON.parse(e)}catch{}return{...Sc}}saveCustomization(){localStorage.setItem("rbx_avatar_customization",JSON.stringify(this.currentCustomization))}getCustomization(){return{...this.currentCustomization}}updatePartColor(e,t){this.currentCustomization[e]=t,this.avatar.applyCustomization(this.currentCustomization),this.saveCustomization()}updateHat(e){this.currentCustomization.equippedHat=e,this.avatar.applyHat(e),this.saveCustomization()}updateGear(e){this.currentCustomization.equippedGear=e,this.avatar.applyGear(e),this.saveCustomization()}updateShirt(e){this.currentCustomization.equippedShirt=e,this.avatar.applyCustomization(this.currentCustomization),this.saveCustomization()}updateFace(e){this.currentCustomization.equippedFace=e,this.avatar.applyCustomization(this.currentCustomization),this.saveCustomization()}setupMouseEvents(){this.canvas.addEventListener("mousedown",e=>{this.isDragging=!0,this.prevMouseX=e.clientX}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const t=e.clientX-this.prevMouseX;this.avatarRotationY+=t*.015,this.prevMouseX=e.clientX}),this.canvas.addEventListener("touchstart",e=>{e.touches.length>0&&(this.isDragging=!0,this.prevMouseX=e.touches[0].clientX)}),window.addEventListener("touchend",()=>{this.isDragging=!1}),window.addEventListener("touchmove",e=>{if(!this.isDragging||e.touches.length===0)return;const t=e.touches[0].clientX-this.prevMouseX;this.avatarRotationY+=t*.02,this.prevMouseX=e.touches[0].clientX})}resize(){if(!this.canvas)return;const e=this.canvas.clientWidth,t=this.canvas.clientHeight;e>0&&t>0&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t))}destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose()}}class og{constructor(e){R(this,"container");R(this,"escMenu",null);R(this,"chatMessagesEl",null);R(this,"chatInput",null);R(this,"playerCountEl",null);R(this,"timePillEl",null);R(this,"titleEl",null);R(this,"modeBtnEl",null);R(this,"studioActionsEl",null);R(this,"activeSlotIndex",0);R(this,"isStudioMode",!1);R(this,"isFlyActive",!1);R(this,"activeHotbarSet","build");R(this,"gameTitle","Genesis 3D");R(this,"onToolEquipped");R(this,"onChatSent");R(this,"onLeaveGame");R(this,"onToggleStudioMode");R(this,"onSaveMap");R(this,"onPublishMap");R(this,"onLoadMap");R(this,"onToggleFlyMode");R(this,"onSpawnNPC");R(this,"onSpawnItem");R(this,"onOpenInspector");R(this,"buildTools",[{id:"pickaxe",name:"Pickaxe",icon:"⛏️",key:"1"},{id:"axe",name:"Lumber Axe",icon:"🪓",key:"2"},{id:"sword",name:"Skyblade",icon:"⚔️",key:"3"},{id:"block_grass",name:"Grass",icon:"🟩",key:"4"},{id:"block_stone",name:"Stone",icon:"🪨",key:"5"},{id:"block_wood",name:"Wood",icon:"🪵",key:"6"},{id:"block_leaves",name:"Leaves",icon:"🍃",key:"7"},{id:"block_brick",name:"Brick",icon:"🧱",key:"8"},{id:"block_crystal",name:"Crystal",icon:"💎",key:"9"}]);R(this,"obbyTools",[{id:"pickaxe",name:"Erase / Pick",icon:"⛏️",key:"1"},{id:"block_lava",name:"Lava Hazard",icon:"🔥",key:"2"},{id:"block_bounce_pad",name:"Bounce Pad",icon:"🟢",key:"3"},{id:"block_speed_pad",name:"Speed Pad",icon:"🔵",key:"4"},{id:"block_checkpoint",name:"Checkpoint",icon:"🚩",key:"5"},{id:"block_finish_line",name:"Finish Line",icon:"🏆",key:"6"},{id:"block_gold",name:"Gold Block",icon:"🟡",key:"7"},{id:"block_obsidian",name:"Obsidian",icon:"🖤",key:"8"},{id:"block_neon_pink",name:"Neon Pink",icon:"💖",key:"9"}]);this.container=document.createElement("div"),this.container.id="rbx-hud-overlay",e.appendChild(this.container),this.render(),this.setupKeyboardShortcuts(),setTimeout(()=>this.equipSlot(0),100)}get currentTools(){return this.activeHotbarSet==="build"?this.buildTools:this.obbyTools}render(){var e,t,i,s,n,r,o,l,c,h,u,d,m,g,v;this.container.innerHTML=`
      <!-- MINECRAFT CROSSHAIR -->
      <div class="rbx-minecraft-crosshair">+</div>

      <!-- TOP BAR -->
      <div class="rbx-ingame-topbar">
        <div class="rbx-ingame-topbar-left">
          <button id="rbx-btn-menu" class="rbx-menu-btn" title="Menu (ESC)">
            <span>☰</span>
          </button>
          <span id="rbx-game-title-val" style="font-size: 14px; font-weight: 800; color: #fff; letter-spacing: 0.5px; font-family: 'Outfit', sans-serif;">
            ${this.gameTitle}
          </span>
          <div id="rbx-player-count-pill" class="rbx-player-count-badge">
            <span class="pulse-dot-green"></span>
            <span id="rbx-player-count-val">1 Online</span>
          </div>

          <!-- Studio Mode Switcher & Tools -->
          <button id="rbx-btn-mode-toggle" class="rbx-hud-pill-btn ${this.isStudioMode?"active-studio":""}">
            ${this.isStudioMode?"🛠️ Studio (Building)":"🎮 Play Mode"}
          </button>

            <button id="rbx-btn-spawn-npc" class="rbx-hud-pill-btn blue" title="Spawn a customizable Person / NPC">
              ➕ Person
            </button>
            <button id="rbx-btn-spawn-item" class="rbx-hud-pill-btn gold" title="Spawn an interactive Item / Object">
              ➕ Item
            </button>
            <button id="rbx-btn-open-inspector" class="rbx-hud-pill-btn cyan" title="Properties & Script Editor">
              📜 Scripts
            </button>
            <button id="rbx-btn-save-map" class="rbx-hud-pill-btn green" title="Save map draft locally">
              💾 Save
            </button>
            <button id="rbx-btn-publish-map" class="rbx-hud-pill-btn purple" title="Publish map to community">
              🚀 Publish
            </button>
            <button id="rbx-btn-load-map" class="rbx-hud-pill-btn" title="Load map template or draft">
              📂 Maps
            </button>
            <button id="rbx-btn-fly-toggle" class="rbx-hud-pill-btn ${this.isFlyActive?"active-fly":""}" title="Toggle Fly Mode (F key)">
              🪽 Fly: ${this.isFlyActive?"ON":"OFF (F)"}
            </button>
          </div>
        </div>

        <div class="rbx-ingame-topbar-right">
          <div id="rbx-time-pill" class="rbx-time-badge">
            <span id="rbx-time-icon">☀️</span>
            <span id="rbx-time-val">12:00 PM</span>
          </div>
          <button id="rbx-btn-quick-exit" class="rbx-hud-exit-btn">
            Exit to Hub
          </button>
        </div>
      </div>

      <!-- CHAT CONTAINER -->
      <div id="rbx-chat-box" class="rbx-chat-container">
        <div id="rbx-chat-messages" class="rbx-chat-messages">
          <div class="rbx-chat-line">
            <span class="rbx-chat-sender" style="color: #38bdf8;">[System]</span>
            <span class="rbx-chat-text">Welcome to Genesis 3D! Press TAB to switch Obby / Building blocks.</span>
          </div>
        </div>
        <div class="rbx-chat-input-wrap">
          <input type="text" id="rbx-chat-input" class="rbx-chat-input" placeholder="Type a message..." maxlength="120" />
        </div>
      </div>

      <!-- HOTBAR CONTROLS & PALETTE SWITCHER -->
      <div class="rbx-hotbar-container">
        <div class="rbx-hotbar-tabs">
          <button id="rbx-btn-tab-build" class="rbx-hotbar-tab ${this.activeHotbarSet==="build"?"active":""}">
            🧱 Standard Blocks
          </button>
          <button id="rbx-btn-tab-obby" class="rbx-hotbar-tab ${this.activeHotbarSet==="obby"?"active":""}">
            ⚡ Obby & Traps (TAB)
          </button>
        </div>

        <!-- 9-SLOT BACKPACK / HOTBAR -->
        <div class="rbx-backpack-hotbar" id="rbx-hotbar-slots">
          ${this.renderHotbarSlotsHtml()}
        </div>
      </div>

      <!-- SURVIVAL HEALTH BAR -->
      <div id="rbx-survival-hud" class="rbx-survival-bar" style="display: none; position: fixed; bottom: 84px; left: 50%; transform: translateX(-50%); background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(239, 68, 68, 0.6); border-radius: 20px; padding: 6px 16px; align-items: center; gap: 10px; z-index: 999; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);">
        <span style="font-size: 16px;">❤️</span>
        <div style="width: 180px; height: 12px; background: rgba(0, 0, 0, 0.6); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <div id="rbx-hp-fill" style="width: 100%; height: 100%; background: linear-gradient(90deg, #ef4444, #22c55e); transition: width 0.25s ease;"></div>
        </div>
        <span id="rbx-hp-text" style="color: #fff; font-size: 12px; font-weight: 800; min-width: 65px; font-family: monospace;">100 / 100</span>
      </div>

      <!-- ESC PAUSE MENU -->
      <div id="rbx-esc-modal" class="rbx-esc-menu-modal" style="display: none;">
        <div class="rbx-esc-card">
          <h3 id="rbx-esc-title">${this.gameTitle}</h3>
          <p style="text-align: center; color: var(--rbx-text-sub); font-size: 13px;">Session In Progress</p>
          <button id="rbx-btn-resume" class="rbx-esc-btn rbx-esc-resume">▶ Resume Game</button>
          <button id="rbx-btn-leave" class="rbx-esc-btn rbx-esc-leave">🚪 Return to Worlds Hub</button>
        </div>
      </div>
    `,this.escMenu=this.container.querySelector("#rbx-esc-modal"),this.chatMessagesEl=this.container.querySelector("#rbx-chat-messages"),this.chatInput=this.container.querySelector("#rbx-chat-input"),this.playerCountEl=this.container.querySelector("#rbx-player-count-val"),this.timePillEl=this.container.querySelector("#rbx-time-pill"),this.titleEl=this.container.querySelector("#rbx-game-title-val"),this.modeBtnEl=this.container.querySelector("#rbx-btn-mode-toggle"),this.studioActionsEl=this.container.querySelector("#rbx-studio-action-row"),(e=this.container.querySelector("#rbx-btn-menu"))==null||e.addEventListener("click",()=>this.toggleEscMenu()),(t=this.container.querySelector("#rbx-btn-resume"))==null||t.addEventListener("click",()=>this.toggleEscMenu(!1)),(i=this.container.querySelector("#rbx-btn-leave"))==null||i.addEventListener("click",()=>{this.onLeaveGame&&this.onLeaveGame()}),(s=this.container.querySelector("#rbx-btn-quick-exit"))==null||s.addEventListener("click",()=>{this.onLeaveGame&&this.onLeaveGame()}),(n=this.modeBtnEl)==null||n.addEventListener("click",()=>{this.onToggleStudioMode&&this.onToggleStudioMode(!this.isStudioMode)}),(r=this.container.querySelector("#rbx-btn-save-map"))==null||r.addEventListener("click",()=>{this.onSaveMap&&this.onSaveMap()}),(o=this.container.querySelector("#rbx-btn-publish-map"))==null||o.addEventListener("click",()=>{this.onPublishMap&&this.onPublishMap()}),(l=this.container.querySelector("#rbx-btn-load-map"))==null||l.addEventListener("click",()=>{this.onLoadMap&&this.onLoadMap()}),(c=this.container.querySelector("#rbx-btn-fly-toggle"))==null||c.addEventListener("click",()=>{this.onToggleFlyMode&&this.onToggleFlyMode()}),(h=this.container.querySelector("#rbx-btn-spawn-npc"))==null||h.addEventListener("click",()=>{this.onSpawnNPC&&this.onSpawnNPC()}),(u=this.container.querySelector("#rbx-btn-spawn-item"))==null||u.addEventListener("click",()=>{this.onSpawnItem&&this.onSpawnItem()}),(d=this.container.querySelector("#rbx-btn-open-inspector"))==null||d.addEventListener("click",()=>{this.onOpenInspector&&this.onOpenInspector()}),(m=this.container.querySelector("#rbx-btn-tab-build"))==null||m.addEventListener("click",()=>this.switchHotbarSet("build")),(g=this.container.querySelector("#rbx-btn-tab-obby"))==null||g.addEventListener("click",()=>this.switchHotbarSet("obby")),(v=this.chatInput)==null||v.addEventListener("keydown",f=>{if(f.key==="Enter"){const p=this.chatInput.value.trim();p&&this.onChatSent&&(this.onChatSent(p),this.chatInput.value="")}f.stopPropagation()}),this.bindSlotClickEvents()}renderHotbarSlotsHtml(){return this.currentTools.map((e,t)=>`
        <div class="rbx-hotbar-slot ${t===this.activeSlotIndex?"active":""}" data-index="${t}" title="${e.name} [${e.key}]">
          <span class="rbx-slot-key">${e.key}</span>
          <span class="rbx-slot-icon">${e.icon}</span>
          <span class="rbx-slot-name">${e.name}</span>
        </div>
      `).join("")}bindSlotClickEvents(){this.container.querySelectorAll(".rbx-hotbar-slot").forEach(t=>{t.addEventListener("click",()=>{const i=parseInt(t.getAttribute("data-index")||"0",10);this.equipSlot(i)})})}switchHotbarSet(e){this.activeHotbarSet=e;const t=this.container.querySelector("#rbx-btn-tab-build"),i=this.container.querySelector("#rbx-btn-tab-obby");e==="build"?(t==null||t.classList.add("active"),i==null||i.classList.remove("active")):(t==null||t.classList.remove("active"),i==null||i.classList.add("active"));const s=this.container.querySelector("#rbx-hotbar-slots");s&&(s.innerHTML=this.renderHotbarSlotsHtml(),this.bindSlotClickEvents(),this.equipSlot(this.activeSlotIndex))}toggleHotbarSet(){this.switchHotbarSet(this.activeHotbarSet==="build"?"obby":"build")}setStudioMode(e){this.isStudioMode=e,this.modeBtnEl&&(this.modeBtnEl.textContent=e?"🛠️ Studio (Building)":"🎮 Play Mode",this.modeBtnEl.className=`rbx-hud-pill-btn ${e?"active-studio":""}`),this.studioActionsEl&&(this.studioActionsEl.style.display=e?"flex":"none"),this.showToast(e?"🛠️ Studio Build Mode Activated! (Press F to Fly)":"🎮 Play Mode Activated!")}setFlyStatus(e){this.isFlyActive=e;const t=this.container.querySelector("#rbx-btn-fly-toggle");t&&(t.textContent=`🪽 Fly: ${e?"ON":"OFF (F)"}`,t.className=`rbx-hud-pill-btn ${e?"active-fly":""}`),this.showToast(e?"🪽 Fly Mode ON (Space/Shift to elevate)":"🪽 Fly Mode OFF")}setGameTitle(e){this.gameTitle=e,this.titleEl&&(this.titleEl.textContent=e);const t=this.container.querySelector("#rbx-esc-title");t&&(t.textContent=e)}showToast(e){const t=document.getElementById("rbx-hud-toast");t&&t.remove();const i=document.createElement("div");i.id="rbx-hud-toast",i.className="rbx-hud-toast",i.textContent=e,this.container.appendChild(i),setTimeout(()=>i.remove(),2500)}setupKeyboardShortcuts(){window.addEventListener("keydown",e=>{var i;if(document.activeElement===this.chatInput)return;e.code==="Escape"&&this.toggleEscMenu(),(e.code==="KeyT"||e.code==="Slash")&&(e.preventDefault(),(i=this.chatInput)==null||i.focus()),e.code==="Tab"&&(e.preventDefault(),this.toggleHotbarSet()),e.code==="KeyF"&&this.onToggleFlyMode&&this.onToggleFlyMode();const t=parseInt(e.key,10);!isNaN(t)&&t>=1&&t<=9&&this.equipSlot(t-1)})}equipSlot(e){const t=this.currentTools;if(e<0||e>=t.length)return;this.activeSlotIndex=e,this.container.querySelectorAll(".rbx-hotbar-slot").forEach((n,r)=>{r===e?n.classList.add("active"):n.classList.remove("active")});const s=t[e];this.onToolEquipped&&this.onToolEquipped(s)}setPlayerCount(e){this.playerCountEl&&(this.playerCountEl.textContent=`${e} Online`)}setTime(e,t){if(this.timePillEl){const i=t?"🌙":"☀️";this.timePillEl.innerHTML=`<span>${i}</span><span>${e}</span>`}}addChatMessage(e,t,i="#fff"){if(!this.chatMessagesEl)return;const s=document.createElement("div");s.className="rbx-chat-line",s.innerHTML=`<span class="rbx-chat-sender" style="color: ${i};">[${e}]</span> <span class="rbx-chat-text">${lg(t)}</span>`,this.chatMessagesEl.appendChild(s),this.chatMessagesEl.scrollTop=this.chatMessagesEl.scrollHeight}setSurvivalMode(e){const t=this.container.querySelector("#rbx-survival-hud");t&&(t.style.display=e?"flex":"none")}setHealth(e,t=100){const i=this.container.querySelector("#rbx-hp-fill"),s=this.container.querySelector("#rbx-hp-text"),n=Math.max(0,Math.min(100,Math.round(e/t*100)));i&&(i.style.width=`${n}%`),s&&(s.textContent=`${e} / ${t}`)}toggleEscMenu(e){if(!this.escMenu)return;const t=e!==void 0?e:this.escMenu.style.display==="none";this.escMenu.style.display=t?"flex":"none"}destroy(){this.container.remove()}}function lg(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}class cg{constructor(e,t,i){R(this,"scene");R(this,"channel",null);R(this,"localId");R(this,"localUsername");R(this,"localCustomization");R(this,"remotePlayers",new Map);R(this,"lastBroadcastTime",0);R(this,"broadcastIntervalMs",45);R(this,"onPlayerCountChange");R(this,"onRemoteBlockPlaced");R(this,"onRemoteBlockBroken");R(this,"onRemoteChat");this.scene=e,this.localUsername=t,this.localCustomization=i,this.localId=this.generateClientId(),this.initRealtime()}generateClientId(){return"pioneer_"+Math.random().toString(36).substring(2,9)}initRealtime(){this.channel=rn.channel("genesis_world_3d",{config:{presence:{key:this.localId},broadcast:{self:!1}}}),this.channel.on("presence",{event:"sync"},()=>{this.handlePresenceSync()}).on("presence",{event:"join"},({newPresences:e})=>{e.forEach(t=>{t.id!==this.localId&&this.spawnOrUpdateRemotePlayer(t)}),this.emitPlayerCount()}).on("presence",{event:"leave"},({leftPresences:e})=>{e.forEach(t=>{this.removeRemotePlayer(t.id)}),this.emitPlayerCount()}),this.channel.on("broadcast",{event:"player_transform"},({payload:e})=>{if(e.id===this.localId)return;const t=this.remotePlayers.get(e.id);t&&(t.targetPos.set(e.x,e.y,e.z),t.targetRotY=e.rotY,t.isMoving=e.isMoving,t.isJumping=e.isJumping,t.velocityY=e.velocityY,t.lastUpdate=performance.now(),e.equippedGear&&t.avatar.applyGear(e.equippedGear))}),this.channel.on("broadcast",{event:"block_placed"},({payload:e})=>{this.onRemoteBlockPlaced&&this.onRemoteBlockPlaced(e)}),this.channel.on("broadcast",{event:"block_broken"},({payload:e})=>{this.onRemoteBlockBroken&&this.onRemoteBlockBroken(e)}),this.channel.on("broadcast",{event:"player_chat"},({payload:e})=>{e.id!==this.localId&&this.onRemoteChat&&this.onRemoteChat(e)}),this.channel.subscribe(async e=>{e==="SUBSCRIBED"&&this.channel&&await this.channel.track({id:this.localId,username:this.localUsername,avatarConfig:this.localCustomization,onlineAt:new Date().toISOString()})})}handlePresenceSync(){if(!this.channel)return;const e=this.channel.presenceState(),t=new Set;for(const i in e)e[i].forEach(n=>{n.id!==this.localId&&(t.add(n.id),this.spawnOrUpdateRemotePlayer(n))});this.remotePlayers.forEach((i,s)=>{t.has(s)||this.removeRemotePlayer(s)}),this.emitPlayerCount()}spawnOrUpdateRemotePlayer(e){if(this.remotePlayers.has(e.id))return;const t=e.avatarConfig||{headColor:"#fdba74",torsoColor:"#1e293b",leftArmColor:"#fdba74",rightArmColor:"#fdba74",leftLegColor:"#0f172a",rightLegColor:"#0f172a",equippedHat:"none",equippedShirt:"synthetic_skin",equippedPants:"combat_pants",equippedFace:"smile",equippedGear:"none"},i=e.username||"Pioneer",s=new kn(t,i),n=new D(0,0,0);s.root.position.copy(n),this.scene.add(s.root),this.remotePlayers.set(e.id,{id:e.id,username:i,avatar:s,targetPos:n.clone(),targetRotY:0,isMoving:!1,isJumping:!1,velocityY:0,lastUpdate:performance.now()})}removeRemotePlayer(e){const t=this.remotePlayers.get(e);t&&(this.scene.remove(t.avatar.root),this.remotePlayers.delete(e))}emitPlayerCount(){const e=this.remotePlayers.size+1;this.onPlayerCountChange&&this.onPlayerCountChange(e)}broadcastTransform(e,t,i,s,n,r,o,l="none"){const c=performance.now();c-this.lastBroadcastTime<this.broadcastIntervalMs||(this.lastBroadcastTime=c,this.channel&&this.channel.send({type:"broadcast",event:"player_transform",payload:{id:this.localId,x:Math.round(e*100)/100,y:Math.round(t*100)/100,z:Math.round(i*100)/100,rotY:Math.round(s*100)/100,isMoving:n,isJumping:r,velocityY:Math.round(o*10)/10,equippedGear:l}}))}broadcastBlockPlaced(e,t,i,s,n){this.channel&&this.channel.send({type:"broadcast",event:"block_placed",payload:{vx:e,vy:t,vz:i,type:s,color:n}})}broadcastBlockBroken(e,t,i,s){this.channel&&this.channel.send({type:"broadcast",event:"block_broken",payload:{vx:e,vy:t,vz:i,color:s}})}broadcastChat(e){this.channel&&this.channel.send({type:"broadcast",event:"player_chat",payload:{id:this.localId,username:this.localUsername,text:e}})}update(e){this.remotePlayers.forEach(t=>{t.avatar.root.position.lerp(t.targetPos,Math.min(1,e*12));const i=t.avatar.root.rotation.y;let s=t.targetRotY-i;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;t.avatar.root.rotation.y+=s*Math.min(1,e*12),t.avatar.updateAnimation(e,t.isMoving,t.isJumping,t.velocityY)})}getPlayerCount(){return this.remotePlayers.size+1}getRemotePlayerAvatar(e){var t;return(t=this.remotePlayers.get(e))==null?void 0:t.avatar}destroy(){this.channel&&(this.channel.untrack(),this.channel.unsubscribe(),this.channel=null),this.remotePlayers.forEach(e=>{this.scene.remove(e.avatar.root)}),this.remotePlayers.clear()}}const bt=2;class dg{constructor(e){R(this,"scene");R(this,"blocks",new Map);R(this,"raycastableMeshes",[]);R(this,"materials",new Map);R(this,"blockGeometry");R(this,"selectionBox");this.scene=e,this.blockGeometry=new Pe(bt,bt,bt),this.initMaterials();const t=new $d(new Pe(bt+.04,bt+.04,bt+.04));this.selectionBox=new lc(t,new co({color:0,linewidth:2})),this.selectionBox.visible=!1,this.scene.add(this.selectionBox),this.generateTerrain()}getKey(e,t,i){return`${e},${t},${i}`}voxelToWorld(e,t,i){return new D(e*bt,t*bt+bt/2,i*bt)}worldToVoxel(e){return new D(Math.round(e.x/bt),Math.floor(e.y/bt),Math.round(e.z/bt))}generatePixelCanvas(e){const t=document.createElement("canvas");t.width=16,t.height=16;const i=t.getContext("2d");e(i);const s=new yi(t);return s.magFilter=Pt,s.minFilter=Pt,s}initMaterials(){const e=this.generatePixelCanvas(v=>{v.fillStyle="#653a1a",v.fillRect(0,0,16,16);for(let f=0;f<16;f++)for(let p=0;p<16;p++)Math.random()<.25&&(v.fillStyle=Math.random()<.5?"#532e14":"#794721",v.fillRect(f,p,1,1))}),t=this.generatePixelCanvas(v=>{v.fillStyle="#4ade80",v.fillRect(0,0,16,16);for(let f=0;f<16;f++)for(let p=0;p<16;p++)Math.random()<.35&&(v.fillStyle=Math.random()<.5?"#22c55e":"#16a34a",v.fillRect(f,p,1,1))}),i=this.generatePixelCanvas(v=>{v.fillStyle="#653a1a",v.fillRect(0,0,16,16);for(let f=0;f<16;f++)for(let p=3;p<16;p++)Math.random()<.2&&(v.fillStyle="#532e14",v.fillRect(f,p,1,1));v.fillStyle="#22c55e",v.fillRect(0,0,16,3);for(let f=0;f<16;f++){const p=Math.floor(Math.random()*3);v.fillRect(f,3,1,p)}}),s=this.generatePixelCanvas(v=>{v.fillStyle="#78716c",v.fillRect(0,0,16,16);for(let f=0;f<16;f++)for(let p=0;p<16;p++)Math.random()<.3&&(v.fillStyle=Math.random()<.5?"#57534e":"#a8a29e",v.fillRect(f,p,1,1))}),n=this.generatePixelCanvas(v=>{v.fillStyle="#78350f",v.fillRect(0,0,16,16);for(let f=0;f<16;f+=2)v.fillStyle="#92400e",v.fillRect(f,0,1,16);for(let f=0;f<20;f++)v.fillStyle="#451a03",v.fillRect(Math.floor(Math.random()*16),Math.floor(Math.random()*16),1,2)}),r=this.generatePixelCanvas(v=>{v.fillStyle="#b45309",v.fillRect(0,0,16,16),v.strokeStyle="#78350f",v.lineWidth=1.5,v.beginPath(),v.arc(8,8,5,0,Math.PI*2),v.stroke(),v.beginPath(),v.arc(8,8,2,0,Math.PI*2),v.stroke()}),o=this.generatePixelCanvas(v=>{v.fillStyle="#15803d",v.fillRect(0,0,16,16);for(let f=0;f<16;f++)for(let p=0;p<16;p++)Math.random()<.4&&(v.fillStyle=Math.random()<.5?"#166534":"#22c55e",v.fillRect(f,p,1,1))}),l=this.generatePixelCanvas(v=>{v.fillStyle="#cbd5e1",v.fillRect(0,0,16,16),v.fillStyle="#b91c1c",v.fillRect(1,1,6,2),v.fillRect(9,1,6,2),v.fillRect(1,9,6,2),v.fillRect(9,9,6,2),v.fillRect(5,5,6,2),v.fillRect(0,5,3,2),v.fillRect(13,5,3,2),v.fillRect(5,13,6,2),v.fillRect(0,13,3,2),v.fillRect(13,13,3,2)}),c=this.generatePixelCanvas(v=>{v.fillStyle="#0284c7",v.fillRect(0,0,16,16),v.fillStyle="#38bdf8",v.fillRect(3,3,10,10),v.fillStyle="#e0f2fe",v.fillRect(5,5,6,6),v.fillStyle="#ffffff",v.fillRect(7,7,2,2)}),h=new ke({map:i,side:tt}),u=new ke({map:t,side:tt}),d=new ke({map:e,side:tt});this.materials.set("grass",[h,h,u,d,h,h]),this.materials.set("dirt",new ke({map:e,side:tt})),this.materials.set("stone",new ke({map:s,side:tt}));const m=new ke({map:n,side:tt}),g=new ke({map:r,side:tt});this.materials.set("wood",[m,m,g,g,m,m]),this.materials.set("leaves",new ke({map:o,side:tt})),this.materials.set("brick",new ke({map:l,side:tt})),this.materials.set("crystal",new ke({map:c,side:tt})),this.materials.set("glass",new ke({color:13095678,transparent:!0,opacity:.55,side:tt})),this.materials.set("sand",new ke({color:16638023,side:tt})),this.materials.set("lava",new ke({color:16726784,side:tt})),this.materials.set("bounce_pad",new ke({color:2278750,side:tt})),this.materials.set("speed_pad",new ke({color:165063,side:tt})),this.materials.set("checkpoint",new ke({color:16436245,side:tt})),this.materials.set("finish_line",new ke({color:11032055,side:tt})),this.materials.set("gold",new ke({color:16638023,side:tt})),this.materials.set("obsidian",new ke({color:988970,side:tt})),this.materials.set("neon_pink",new ke({color:16020150,side:tt})),this.materials.set("neon_cyan",new ke({color:2282478,side:tt}))}getBlockColor(e){switch(e){case"grass":return 2278750;case"dirt":return 6634010;case"stone":return 7893356;case"wood":return 9584654;case"leaves":return 1483594;case"brick":return 12131356;case"crystal":return 3718648;case"glass":return 13095678;case"sand":return 16436245;case"lava":return 16726784;case"bounce_pad":return 4906624;case"speed_pad":return 3718648;case"checkpoint":return 16436245;case"finish_line":return 12616956;case"gold":return 16638023;case"obsidian":return 988970;case"neon_pink":return 16020150;case"neon_cyan":return 2282478}}setBlock(e,t,i,s){this.removeBlock(e,t,i);const n=this.materials.get(s)||this.materials.get("stone"),r=new se(this.blockGeometry,n),o=this.voxelToWorld(e,t,i);r.position.copy(o),r.castShadow=!0,r.receiveShadow=!0,r.userData={vx:e,vy:t,vz:i,type:s},this.scene.add(r),this.raycastableMeshes.push(r);let l;s==="crystal"?(l=new es(3718648,2,12),l.position.copy(o),this.scene.add(l)):s==="lava"?(l=new es(16726784,1.8,10),l.position.copy(o),this.scene.add(l)):s==="checkpoint"?(l=new es(16436245,1.5,8),l.position.copy(o),this.scene.add(l)):s==="finish_line"&&(l=new es(12616956,2.5,14),l.position.copy(o),this.scene.add(l));const c={type:s,mesh:r,light:l,vx:e,vy:t,vz:i};return this.blocks.set(this.getKey(e,t,i),c),c}removeBlock(e,t,i){const s=this.getKey(e,t,i),n=this.blocks.get(s);if(!n)return null;this.scene.remove(n.mesh),n.light&&this.scene.remove(n.light);const r=this.raycastableMeshes.indexOf(n.mesh);return r!==-1&&this.raycastableMeshes.splice(r,1),this.blocks.delete(s),{type:n.type,color:this.getBlockColor(n.type)}}getBlock(e,t,i){return this.blocks.get(this.getKey(e,t,i))}generateTerrain(){for(let i=-18;i<=18;i++)for(let s=-18;s<=18;s++){const n=Math.sqrt(i*i+s*s);let r=Math.round(Math.sin(i*.22)*1.6+Math.cos(s*.26)*1.6);n<6&&(r=0);for(let o=-2;o<=r;o++)if(o===r)this.setBlock(i,o,s,"grass");else if(o>=r-1)this.setBlock(i,o,s,"dirt");else{const l=Math.random()<.05&&n>7;this.setBlock(i,o,s,l?"crystal":"stone")}}[{x:8,z:8},{x:-9,z:10},{x:-11,z:-8},{x:12,z:-9},{x:15,z:2},{x:-14,z:2}].forEach(i=>{this.buildTree(i.x,i.z)})}buildTree(e,t){let i=0;for(let r=6;r>=-2;r--)if(this.getBlock(e,r,t)){i=r;break}const s=4;for(let r=1;r<=s;r++)this.setBlock(e,i+r,t,"wood");const n=i+s;for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++)for(let l=0;l<=1;l++)Math.abs(r)===2&&Math.abs(o)===2||r===0&&o===0&&l===0||this.setBlock(e+r,n+l,t+o,"leaves");for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)Math.abs(r)===1&&Math.abs(o)===1||this.setBlock(e+r,n+2,t+o,"leaves")}raycastTarget(e,t=16){const i=e.intersectObjects(this.raycastableMeshes,!1);if(i.length>0&&i[0].distance<=t){const s=i[0],n=s.object,r=n.userData;if(r&&s.face){const o=new D(r.vx,r.vy,r.vz),l=s.face.normal.clone();l.transformDirection(n.matrixWorld).round();const c=o.clone().add(l);return this.selectionBox.position.copy(n.position),this.selectionBox.visible=!0,{hit:!0,voxelPos:o,adjacentPos:c,type:r.type,mesh:n}}}return this.selectionBox.visible=!1,{hit:!1,voxelPos:new D,adjacentPos:new D}}hideSelection(){this.selectionBox.visible=!1}clearWorld(){this.blocks.forEach(e=>{this.scene.remove(e.mesh),e.light&&this.scene.remove(e.light)}),this.blocks.clear(),this.raycastableMeshes=[],this.hideSelection()}exportBlocks(){const e=[];return this.blocks.forEach(t=>{e.push({vx:t.vx,vy:t.vy,vz:t.vz,type:t.type})}),e}loadBlocks(e){this.clearWorld(),e.forEach(t=>{this.setBlock(t.vx,t.vy,t.vz,t.type)})}destroy(){this.clearWorld(),this.scene.remove(this.selectionBox)}}class hg{constructor(){R(this,"ctx",null)}initCtx(){try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}catch{return null}}playBlockBreak(e="grass"){const t=this.initCtx();if(!t)return;const i=t.currentTime,s=.18,n=Math.floor(t.sampleRate*s),r=t.createBuffer(1,n,t.sampleRate),o=r.getChannelData(0);for(let g=0;g<n;g++)o[g]=Math.random()*2-1;const l=t.createBufferSource();l.buffer=r;const c=t.createBiquadFilter();e==="stone"||e==="brick"?(c.type="highpass",c.frequency.setValueAtTime(800,i)):e==="wood"?(c.type="bandpass",c.frequency.setValueAtTime(450,i)):e==="crystal"?(c.type="bandpass",c.frequency.setValueAtTime(1400,i)):(c.type="lowpass",c.frequency.setValueAtTime(900,i));const h=t.createGain();h.gain.setValueAtTime(.35,i),h.gain.exponentialRampToValueAtTime(.001,i+s),l.connect(c),c.connect(h),h.connect(t.destination),l.start(i);const u=t.createOscillator(),d=t.createGain();u.type="sine";const m=e==="crystal"?520:e==="stone"?220:130;u.frequency.setValueAtTime(m,i),u.frequency.exponentialRampToValueAtTime(40,i+s),d.gain.setValueAtTime(.3,i),d.gain.exponentialRampToValueAtTime(.001,i+s),u.connect(d),d.connect(t.destination),u.start(i),u.stop(i+s)}playBlockPlace(e="grass"){const t=this.initCtx();if(!t)return;const i=t.currentTime,s=.12,n=t.createOscillator(),r=t.createGain();n.type="triangle";const o=e==="crystal"?440:e==="stone"?200:160;n.frequency.setValueAtTime(o,i),n.frequency.exponentialRampToValueAtTime(60,i+s),r.gain.setValueAtTime(.4,i),r.gain.exponentialRampToValueAtTime(.001,i+s),n.connect(r),r.connect(t.destination),n.start(i),n.stop(i+s)}playPickaxeClink(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(1400,t),i.frequency.exponentialRampToValueAtTime(900,t+.08),s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.001,t+.08),i.connect(s),s.connect(e.destination),i.start(t),i.stop(t+.08)}playSwing(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=.15,s=e.createOscillator(),n=e.createGain();s.type="sine",s.frequency.setValueAtTime(320,t),s.frequency.exponentialRampToValueAtTime(120,t+i),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+i),s.connect(n),n.connect(e.destination),s.start(t),s.stop(t+i)}playFootstep(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=.06,s=e.createOscillator(),n=e.createGain();s.type="triangle",s.frequency.setValueAtTime(120+Math.random()*30,t),s.frequency.exponentialRampToValueAtTime(40,t+i),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+i),s.connect(n),n.connect(e.destination),s.start(t),s.stop(t+i)}playChime(e){const t=this.initCtx();if(!t)return;const i=t.currentTime;(e?[440,330,220]:[330,440,660]).forEach((n,r)=>{const o=t.createOscillator(),l=t.createGain(),c=i+r*.18;o.type="sine",o.frequency.setValueAtTime(n,c),l.gain.setValueAtTime(.12,c),l.gain.exponentialRampToValueAtTime(.001,c+.6),o.connect(l),l.connect(t.destination),o.start(c),o.stop(c+.6)})}playLavaSizzle(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=.35,s=Math.floor(e.sampleRate*i),n=e.createBuffer(1,s,e.sampleRate),r=n.getChannelData(0);for(let h=0;h<s;h++)r[h]=(Math.random()*2-1)*(1-h/s);const o=e.createBufferSource();o.buffer=n;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,t),l.frequency.exponentialRampToValueAtTime(300,t+i);const c=e.createGain();c.gain.setValueAtTime(.25,t),c.gain.exponentialRampToValueAtTime(.01,t+i),o.connect(l),l.connect(c),c.connect(e.destination),o.start(t)}playBounce(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="triangle",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(650,t+.25),s.gain.setValueAtTime(.22,t),s.gain.exponentialRampToValueAtTime(.01,t+.3),i.connect(s),s.connect(e.destination),i.start(t),i.stop(t+.3)}playVictory(){const e=this.initCtx();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,n)=>{const r=e.createOscillator(),o=e.createGain(),l=t+n*.12;r.type="triangle",r.frequency.setValueAtTime(s,l),o.gain.setValueAtTime(.28,l),o.gain.exponentialRampToValueAtTime(.001,l+.45),r.connect(o),o.connect(e.destination),r.start(l),r.stop(l+.5)})}playCoin(){const e=this.initCtx();if(!e)return;const t=e.currentTime;[987.77,1318.51].forEach((s,n)=>{const r=e.createOscillator(),o=e.createGain(),l=t+n*.08;r.type="sine",r.frequency.setValueAtTime(s,l),o.gain.setValueAtTime(.2,l),o.gain.exponentialRampToValueAtTime(.001,l+.35),r.connect(o),o.connect(e.destination),r.start(l),r.stop(l+.35)})}playZombieGroan(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=.8,s=e.createOscillator(),n=e.createOscillator(),r=e.createGain(),o=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(85,t),s.frequency.exponentialRampToValueAtTime(55,t+i),n.type="sine",n.frequency.setValueAtTime(24,t),r.gain.setValueAtTime(45,t),n.connect(s.frequency),n.start(t),n.stop(t+i),o.gain.setValueAtTime(.25,t),o.gain.exponentialRampToValueAtTime(.001,t+i),s.connect(o),o.connect(e.destination),s.start(t),s.stop(t+i)}playZombieAttack(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(160,t),i.frequency.exponentialRampToValueAtTime(30,t+.2),s.gain.setValueAtTime(.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(e.destination),i.start(t),i.stop(t+.2)}playHeal(){const e=this.initCtx();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,n)=>{const r=e.createOscillator(),o=e.createGain(),l=t+n*.07;r.type="sine",r.frequency.setValueAtTime(s,l),o.gain.setValueAtTime(.2,l),o.gain.exponentialRampToValueAtTime(.001,l+.4),r.connect(o),o.connect(e.destination),r.start(l),r.stop(l+.45)})}playGunshot(){const e=this.initCtx();if(!e)return;const t=e.currentTime,i=.14,s=Math.floor(e.sampleRate*i),n=e.createBuffer(1,s,e.sampleRate),r=n.getChannelData(0);for(let c=0;c<s;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(e.sampleRate*.03));const o=e.createBufferSource();o.buffer=n;const l=e.createGain();l.gain.setValueAtTime(.5,t),l.gain.exponentialRampToValueAtTime(.001,t+i),o.connect(l),l.connect(e.destination),o.start(t)}}class ug{constructor(e){R(this,"scene");R(this,"particles",[]);R(this,"geoCache");this.scene=e,this.geoCache=new Pe(.35,.35,.35)}spawnBreakBurst(e,t){const i=typeof t=="string"?new Le(t).getHex():t,s=12;for(let n=0;n<s;n++){const r=new Ne({color:i,transparent:!0,opacity:.95}),o=new se(this.geoCache,r);o.position.set(e.x+(Math.random()-.5)*1.2,e.y+(Math.random()-.5)*1.2,e.z+(Math.random()-.5)*1.2);const l=new D((Math.random()-.5)*7,Math.random()*5+3,(Math.random()-.5)*7),c=new D((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12);this.scene.add(o),this.particles.push({mesh:o,vel:l,rotVel:c,life:0,maxLife:.55+Math.random()*.25})}}update(e){for(let i=this.particles.length-1;i>=0;i--){const s=this.particles[i];if(s.life+=e,s.life>=s.maxLife){this.scene.remove(s.mesh),s.mesh.material.dispose(),this.particles.splice(i,1);continue}s.vel.y+=-24*e,s.mesh.position.addScaledVector(s.vel,e),s.mesh.rotation.x+=s.rotVel.x*e,s.mesh.rotation.y+=s.rotVel.y*e,s.mesh.rotation.z+=s.rotVel.z*e;const n=s.life/s.maxLife,r=Math.max(.01,1-n);s.mesh.scale.set(r,r,r)}}clear(){this.particles.forEach(e=>{this.scene.remove(e.mesh),e.mesh.material.dispose()}),this.particles=[]}}class fg{constructor(e,t,i,s){R(this,"scene");R(this,"sunLight");R(this,"ambientLight");R(this,"audio");R(this,"sunMesh");R(this,"moonMesh");R(this,"celestialGroup");R(this,"time",.25);R(this,"dayDurationSec",240);R(this,"wasNight",!1);R(this,"skyNoon",new Le(7914991));R(this,"skyDusk",new Le(14251782));R(this,"skyNight",new Le(395539));R(this,"onTimeChange");this.scene=e,this.sunLight=t,this.ambientLight=i,this.audio=s,this.celestialGroup=new Rt,this.scene.add(this.celestialGroup),this.sunMesh=new se(new us(6,16,16),new ke({color:16775149})),this.sunMesh.position.set(0,160,0),this.celestialGroup.add(this.sunMesh),this.moonMesh=new se(new us(4.5,16,16),new ke({color:14742270})),this.moonMesh.position.set(0,-160,0),this.celestialGroup.add(this.moonMesh)}update(e,t){this.time=(this.time+e/this.dayDurationSec)%1,this.celestialGroup.position.x=t.x,this.celestialGroup.position.z=t.z;const i=this.time*Math.PI*2;this.celestialGroup.rotation.z=i;const s=Math.sin(i),n=s<0;n!==this.wasNight&&(this.wasNight=n,this.audio.playChime(n));let r,o,l;if(s>.3)r=this.skyNoon,o=1.3,l=.65;else if(s>0){const h=(.3-s)/.3;r=this.skyNoon.clone().lerp(this.skyDusk,h),o=1.3*(1-h)+.3*h,l=.65*(1-h)+.3*h}else if(s>-.2){const h=-s/.2;r=this.skyDusk.clone().lerp(this.skyNight,h),o=.2*(1-h),l=.3*(1-h)+.15*h}else r=this.skyNight,o=.15,l=.18;this.scene.background=r,this.scene.fog&&(this.scene.fog.color=r),this.sunLight.intensity=o,this.ambientLight.intensity=l;const c=new D;this.sunMesh.getWorldPosition(c),this.sunLight.position.copy(c),this.sunLight.target&&(this.sunLight.target.position.copy(t),this.sunLight.target.updateMatrixWorld()),this.onTimeChange&&this.onTimeChange(this.getTimeString(),n)}getTimeString(){const e=Math.floor(this.time*24*60),t=Math.floor(e/60),i=e%60,s=t<10?"0"+t:""+t,n=i<10?"0"+i:""+i;return`${s}:${n}`}isNight(){return this.wasNight}destroy(){this.scene.remove(this.celestialGroup)}}const ia="genesis_user_created_maps";function pg(){const a=[];for(let e=-3;e<=3;e++)for(let t=-3;t<=3;t++)a.push({vx:e,vy:0,vz:t,type:"grass"});for(let e=-15;e<=45;e+=2)for(let t=-15;t<=25;t+=2)(Math.abs(e)>3||Math.abs(t)>3)&&a.push({vx:e,vy:-3,vz:t,type:"lava"});a.push({vx:0,vy:1,vz:6,type:"stone"}),a.push({vx:2,vy:1,vz:9,type:"stone"}),a.push({vx:0,vy:2,vz:12,type:"brick"}),a.push({vx:-2,vy:2,vz:15,type:"brick"});for(let e=-2;e<=2;e++)for(let t=17;t<=20;t++)a.push({vx:e,vy:2,vz:t,type:"gold"});a.push({vx:0,vy:3,vz:18,type:"checkpoint"}),a.push({vx:0,vy:2,vz:23,type:"bounce_pad"}),a.push({vx:6,vy:8,vz:23,type:"neon_pink"}),a.push({vx:10,vy:9,vz:21,type:"neon_pink"}),a.push({vx:14,vy:10,vz:18,type:"neon_cyan"}),a.push({vx:17,vy:11,vz:15,type:"neon_cyan"});for(let e=12;e>=2;e-=2)a.push({vx:20,vy:11,vz:e,type:"speed_pad"});for(let e=18;e<=22;e++)for(let t=-2;t<=1;t++)a.push({vx:e,vy:11,vz:t,type:"gold"});a.push({vx:20,vy:12,vz:0,type:"checkpoint"});for(let e=23;e<=32;e++)a.push({vx:e,vy:11,vz:0,type:"crystal"}),e%3===0&&a.push({vx:e,vy:12,vz:0,type:"lava"});for(let e=34;e<=40;e++)for(let t=-3;t<=3;t++)a.push({vx:e,vy:12,vz:t,type:"obsidian"}),a.push({vx:e,vy:13,vz:t,type:"gold"});return a.push({vx:37,vy:14,vz:0,type:"finish_line"}),{id:"default_rainbow_obby",title:"🌈 Rainbow Lava Tower Obby",description:"Jump across stepping stones, launch off Super Bounce Pads, run down speed strips, and conquer the lava tightrope to reach the summit!",author:"Genesis Studio",createdAt:Date.now()-1e6,gameMode:"obby",spawnPoint:{x:0,y:3,z:0},blocks:a,likes:342,plays:1850,tags:["Obby","Parkour","Hardcore","Featured"]}}function mg(){const a=[];for(let e=-6;e<=6;e++)for(let t=-6;t<=6;t++){const i=e===-6||e===6||t===-6||t===6?"neon_cyan":"obsidian";a.push({vx:e,vy:0,vz:t,type:i})}for(let e=1;e<=8;e++)a.push({vx:-5,vy:e,vz:-5,type:"neon_pink"}),a.push({vx:-5,vy:e,vz:5,type:"neon_pink"});for(let e=1;e<=8;e++)a.push({vx:5,vy:e,vz:-5,type:"neon_cyan"}),a.push({vx:5,vy:e,vz:5,type:"neon_cyan"});a.push({vx:0,vy:1,vz:-4,type:"bounce_pad"}),a.push({vx:0,vy:1,vz:4,type:"bounce_pad"});for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++)a.push({vx:e,vy:8,vz:t,type:"glass"});return a.push({vx:0,vy:9,vz:0,type:"crystal"}),{id:"default_cyber_hangout",title:"🏙️ Cyber Neon Sky Hangout",description:"A vibrant cyberpunk skyline social lounge with rooftop bounce pads, glass sky bridges, and glowing crystal lounge lights.",author:"Nova (AI Mascot)",createdAt:Date.now()-5e5,gameMode:"hangout",spawnPoint:{x:0,y:3,z:0},blocks:a,likes:289,plays:1220,tags:["Hangout","Cyberpunk","Social","Chill"]}}function gg(){const a=[];for(let i=-24;i<=24;i++)for(let s=-26;s<=8;s++){const n=Math.abs(i)>=23||s===-26||s===8,r=Math.abs(i)<=2&&s>=-14&&s<=8,o=n?"obsidian":r?"stone":Math.abs(i)<6&&s<-10?"wood":"stone";a.push({vx:i,vy:0,vz:s,type:o})}for(let i=1;i<=6;i++){for(let s=-26;s<=8;s++)a.push({vx:-24,vy:i,vz:s,type:i===6&&s%2===0?"obsidian":"stone"}),a.push({vx:24,vy:i,vz:s,type:i===6&&s%2===0?"obsidian":"stone"});for(let s=-23;s<=23;s++)a.push({vx:s,vy:i,vz:-26,type:i===6&&s%2===0?"obsidian":"stone"});for(let s=-23;s<=23;s++)Math.abs(s)>4&&a.push({vx:s,vy:i,vz:8,type:i===6&&s%2===0?"obsidian":"stone"})}for(let i=-25;i<=7;i++)a.push({vx:-23,vy:5,vz:i,type:"obsidian"}),a.push({vx:23,vy:5,vz:i,type:"obsidian"});[{x:-24,z:-26},{x:24,z:-26},{x:-24,z:8},{x:24,z:8}].forEach(i=>{for(let s=1;s<=10;s++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){const o=Math.max(-24,Math.min(24,i.x+n)),l=Math.max(-26,Math.min(8,i.z+r));a.push({vx:o,vy:s,vz:l,type:"obsidian"})}for(let s=-2;s<=2;s++)for(let n=-2;n<=2;n++){const r=Math.max(-24,Math.min(24,i.x+s)),o=Math.max(-26,Math.min(8,i.z+n));a.push({vx:r,vy:11,vz:o,type:"stone"})}a.push({vx:i.x,vy:12,vz:i.z,type:i.z>0?"neon_pink":"neon_cyan"})});for(let i=-8;i<=8;i++)for(let s=-26;s<=-18;s++)Math.abs(i)===8||s===-26||s===-18?a.push({vx:i,vy:9,vz:s,type:"wood"}):a.push({vx:i,vy:9,vz:s,type:"glass"});for(let i=1;i<=8;i++)a.push({vx:-8,vy:i,vz:-18,type:"wood"}),a.push({vx:8,vy:i,vz:-18,type:"wood"}),a.push({vx:-8,vy:i,vz:-26,type:"wood"}),a.push({vx:8,vy:i,vz:-26,type:"wood"});a.push({vx:7,vy:1,vz:-22,type:"obsidian"}),a.push({vx:8,vy:1,vz:-22,type:"gold"}),a.push({vx:9,vy:1,vz:-22,type:"obsidian"}),a.push({vx:-7,vy:1,vz:-22,type:"brick"}),a.push({vx:-8,vy:1,vz:-22,type:"crystal"}),a.push({vx:-9,vy:1,vz:-22,type:"brick"}),a.push({vx:-4,vy:1,vz:9,type:"wood"}),a.push({vx:4,vy:1,vz:9,type:"wood"}),a.push({vx:-2,vy:1,vz:10,type:"wood"}),a.push({vx:2,vy:1,vz:10,type:"wood"}),a.push({vx:0,vy:1,vz:7,type:"speed_pad"}),a.push({vx:0,vy:1,vz:9,type:"speed_pad"}),a.push({vx:-22,vy:1,vz:6,type:"bounce_pad"}),a.push({vx:22,vy:1,vz:6,type:"bounce_pad"}),a.push({vx:-22,vy:1,vz:-24,type:"bounce_pad"}),a.push({vx:22,vy:1,vz:-24,type:"bounce_pad"});for(let i=-28;i<=28;i+=2)for(let s=12;s<=76;s+=2){const n=Math.hypot(i- -14,s-28)<5.2,r=Math.hypot(i-16,s-42)<5.8,o=Math.hypot(i- -6,s-60)<6.2;if(n||r||o)a.push({vx:i,vy:0,vz:s,type:"lava"});else{const l=Math.sin(i*12.9898+s*78.233)*43758.5453%1,c=l>.7?"stone":l>.35?"dirt":"obsidian";a.push({vx:i,vy:0,vz:s,type:c})}}for(let i=1;i<=7;i++)a.push({vx:-18,vy:i,vz:32,type:"brick"}),a.push({vx:-16,vy:i,vz:34,type:"obsidian"}),i<4&&a.push({vx:-17,vy:i,vz:33,type:"glass"});for(let i=1;i<=8;i++)a.push({vx:18,vy:i,vz:50,type:"stone"}),a.push({vx:16,vy:i,vz:52,type:"brick"});a.push({vx:-6,vy:1,vz:36,type:"wood"}),a.push({vx:-5,vy:1,vz:36,type:"obsidian"}),a.push({vx:5,vy:1,vz:36,type:"obsidian"}),a.push({vx:6,vy:1,vz:36,type:"wood"});for(let i=-4;i<=4;i++)for(let s=74;s<=78;s++)a.push({vx:i,vy:1,vz:s,type:"gold"});a.push({vx:0,vy:2,vz:76,type:"finish_line"});const t=[{id:"npc_commander_vance",name:"Commander Vance",type:"npc",position:{x:8,y:1,z:-20},avatarConfig:{headColor:"#fcd34d",torsoColor:"#1e293b",leftArmColor:"#fcd34d",rightArmColor:"#fcd34d",leftLegColor:"#0f172a",rightLegColor:"#0f172a",equippedHat:"cowboy",equippedShirt:"flannel",equippedPants:"blue_jeans",equippedFace:"serious",equippedGear:"none"},script:{behavior:"dialogue",dialogueText:"Pioneer! The perimeter breach alarms are blaring! Arm yourself with the Skyblade, defend the outpost barricades, and clear out the infected horde! See Medic Sarah if you're injured!",coinAmount:50}},{id:"npc_medic_sarah",name:"Medic Sarah",type:"npc",position:{x:-8,y:1,z:-20},avatarConfig:{headColor:"#fde68a",torsoColor:"#dc2626",leftArmColor:"#fde68a",rightArmColor:"#fde68a",leftLegColor:"#f8fafc",rightLegColor:"#f8fafc",equippedHat:"halo",equippedShirt:"genesis_hoodie",equippedPants:"blue_jeans",equippedFace:"smile",equippedGear:"none"},script:{behavior:"medic",dialogueText:"Emergency Medic Sarah reporting! Wounds treated and health fully restored to 100 HP! Stay sharp out there!",health:250,maxHealth:250}},{id:"npc_sgt_stone",name:"Sergeant Stone",type:"npc",position:{x:7,y:1,z:2},avatarConfig:{headColor:"#f59e0b",torsoColor:"#047857",leftArmColor:"#f59e0b",rightArmColor:"#f59e0b",leftLegColor:"#064e3b",rightLegColor:"#064e3b",equippedHat:"beanie",equippedShirt:"flannel",equippedPants:"blue_jeans",equippedFace:"serious",equippedGear:"sword"},script:{behavior:"dialogue",dialogueText:"Click on any zombie to strike them with your Skyblade! Headshots and melee strikes will take them down and earn you Genesis Coins!",coinAmount:30}},{id:"npc_zombie_shambler",name:"Rotten Shambler",type:"npc",position:{x:0,y:1,z:22},avatarConfig:{headColor:"#4d7c0f",torsoColor:"#1c1917",leftArmColor:"#4d7c0f",rightArmColor:"#4d7c0f",leftLegColor:"#374151",rightLegColor:"#374151",equippedHat:"none",equippedShirt:"tattered_zombie",equippedPants:"blue_jeans",equippedFace:"zombie",equippedGear:"none"},script:{behavior:"zombie",health:60,maxHealth:60,damageAmount:12,moveSpeed:5.5,detectionRange:30,coinAmount:25,dialogueText:"Grrrr... BRAAAINS!"}},{id:"npc_zombie_sprinter",name:"Infected Runner",type:"npc",position:{x:14,y:1,z:32},avatarConfig:{headColor:"#3f6212",torsoColor:"#7f1d1d",leftArmColor:"#3f6212",rightArmColor:"#3f6212",leftLegColor:"#1c1917",rightLegColor:"#1c1917",equippedHat:"none",equippedShirt:"tattered_zombie",equippedPants:"blue_jeans",equippedFace:"zombie",equippedGear:"none"},script:{behavior:"zombie",health:45,maxHealth:45,damageAmount:15,moveSpeed:8.5,detectionRange:35,coinAmount:35,dialogueText:"Screeechhh!"}},{id:"npc_zombie_toxic",name:"Toxic Ghoul",type:"npc",position:{x:-16,y:1,z:38},avatarConfig:{headColor:"#22c55e",torsoColor:"#064e3b",leftArmColor:"#22c55e",rightArmColor:"#22c55e",leftLegColor:"#022c22",rightLegColor:"#022c22",equippedHat:"none",equippedShirt:"tattered_zombie",equippedPants:"blue_jeans",equippedFace:"zombie",equippedGear:"none"},script:{behavior:"zombie",health:75,maxHealth:75,damageAmount:16,moveSpeed:6.2,detectionRange:30,coinAmount:40,dialogueText:"Hisssss... Poison!"}},{id:"npc_zombie_stalker",name:"Wasteland Stalker",type:"npc",position:{x:10,y:1,z:48},avatarConfig:{headColor:"#365314",torsoColor:"#451a03",leftArmColor:"#365314",rightArmColor:"#365314",leftLegColor:"#292524",rightLegColor:"#292524",equippedHat:"none",equippedShirt:"tattered_zombie",equippedPants:"blue_jeans",equippedFace:"zombie",equippedGear:"none"},script:{behavior:"zombie",health:65,maxHealth:65,damageAmount:18,moveSpeed:7.2,detectionRange:32,coinAmount:45}},{id:"npc_zombie_brute",name:"Mutant Zombie Brute (BOSS)",type:"npc",position:{x:0,y:1,z:62},avatarConfig:{headColor:"#14532d",torsoColor:"#0f172a",leftArmColor:"#14532d",rightArmColor:"#14532d",leftLegColor:"#000000",rightLegColor:"#000000",equippedHat:"none",equippedShirt:"tattered_zombie",equippedPants:"blue_jeans",equippedFace:"zombie",equippedGear:"none"},script:{behavior:"zombie",health:180,maxHealth:180,damageAmount:28,moveSpeed:4.8,detectionRange:40,coinAmount:150,dialogueText:"ROAAAARRRR! CRUSH HUMAN!"}},{id:"item_medkit_chest",name:"Medical Supply Crate",type:"item",itemType:"chest",position:{x:-12,y:1,z:-18},script:{behavior:"coin_reward",coinAmount:50}},{id:"item_ammo_depot",name:"Military Ammo Depot",type:"item",itemType:"chest",position:{x:12,y:1,z:-18},script:{behavior:"coin_reward",coinAmount:100}},{id:"item_wasteland_cache",name:"Wasteland Stash",type:"item",itemType:"chest",position:{x:-14,y:1,z:34},script:{behavior:"coin_reward",coinAmount:75}},{id:"item_bio_beacon",name:"Anti-Viral Decon Beacon",type:"item",itemType:"crystal",position:{x:0,y:1,z:-22},script:{behavior:"dialogue",dialogueText:"⚡ Biohazard Decontamination field active! Keeps the safehouse interior virus-free."}}];return{id:"default_zombie_survival",title:"🧟 Zombie Outpost: Dead Horizon",description:"Survive the relentless infected horde! Fortify your base, visit Medic Sarah for healing, speak to Commander Vance, stock up from supply chests, and fight off zombies in the apocalyptic wasteland!",author:"Genesis Studio",createdAt:Date.now()-25e4,gameMode:"survival",spawnPoint:{x:0,y:1,z:-10},blocks:a,entities:t,likes:512,plays:2840,tags:["Zombie","Survival","Horror","Apocalypse","PvP","Combat","Featured"]}}const en=class en{constructor(){R(this,"defaultMaps",[]);this.defaultMaps=[gg(),pg(),mg()]}static getInstance(){return en.instance||(en.instance=new en),en.instance}getAllMaps(){const e=this.getUserMaps();return[...this.defaultMaps,...e]}getUserMaps(){try{const e=localStorage.getItem(ia);if(e)return JSON.parse(e)}catch(e){console.warn("Failed to parse user maps from storage:",e)}return[]}getMapById(e){return this.getAllMaps().find(t=>t.id===e)}saveUserMap(e){const t=this.getUserMaps(),i=t.findIndex(s=>s.id===e.id);i>=0?t[i]=e:t.unshift(e),localStorage.setItem(ia,JSON.stringify(t))}deleteUserMap(e){const t=this.getUserMaps().filter(i=>i.id!==e);return localStorage.setItem(ia,JSON.stringify(t)),!0}exportMapFile(e){const t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s,n.download=`${e.title.toLowerCase().replace(/[^a-z0-9]/g,"_")}_map.json`,n.click(),URL.revokeObjectURL(s)}importMapFromJson(e){const t=JSON.parse(e);if(!t.id||!t.title||!Array.isArray(t.blocks))throw new Error("Invalid Map format");return t.id="imported_"+Date.now(),this.saveUserMap(t),t}async publishToCloud(e){try{const{error:t}=await rn.from("community_maps").insert([{id:e.id,title:e.title,description:e.description,author:e.author,game_mode:e.gameMode,spawn_point:e.spawnPoint,blocks:e.blocks,tags:e.tags,likes:e.likes,plays:e.plays}]);return t&&console.warn("Supabase community_maps insert notice (falling back to local):",t.message),!0}catch{return!0}}};R(en,"instance",null);let Ct=en;class vg{constructor(e,t){R(this,"audio");R(this,"activeSpeechBubbles",new Map);this.audio=t}showSpeechBubble(e,t,i=4){const s=e.uuid,n=this.activeSpeechBubbles.get(s);n&&(e.remove(n.sprite),this.activeSpeechBubbles.delete(s));const r=document.createElement("canvas");r.width=512,r.height=160;const o=r.getContext("2d");o.fillStyle="#ffffff",o.strokeStyle="#1e293b",o.lineWidth=6,o.beginPath(),o.roundRect(16,16,480,100,24),o.fill(),o.stroke(),o.beginPath(),o.moveTo(236,116),o.lineTo(256,148),o.lineTo(276,116),o.closePath(),o.fill(),o.stroke(),o.fillStyle="#0f172a",o.font="bold 28px Outfit, sans-serif",o.textAlign="center",o.textBaseline="middle";const l=t.length>50?t.substring(0,47)+"...":t;o.fillText(l,256,66);const c=new yi(r),h=new ao({map:c,depthTest:!1,transparent:!0}),u=new oc(h);u.scale.set(4,1.25,1),u.position.set(0,5.2,0),e.add(u),this.activeSpeechBubbles.set(s,{sprite:u,expireTime:performance.now()+i*1e3})}updateEntity(e,t,i,s,n,r){const o=t.position.distanceTo(n.position),l=e.script,c=this.activeSpeechBubbles.get(t.uuid);switch(c&&performance.now()>c.expireTime&&(t.remove(c.sprite),this.activeSpeechBubbles.delete(t.uuid)),l.behavior){case"dialogue":{if(o<8){const h=n.position.x-t.position.x,u=n.position.z-t.position.z;if(t.rotation.y=Math.atan2(h,u),o<4&&!this.activeSpeechBubbles.has(t.uuid)){const d=l.dialogueText||`Hello ${n.name}! Nice to meet you in Genesis!`;this.showSpeechBubble(t,d,5),this.audio.playSwing()}}i&&i.updateAnimation(s,!1,!1,0);break}case"follow":{if(o>2.8&&o<24){const h=n.position.clone().sub(t.position).normalize();t.rotation.y=Math.atan2(h.x,h.z);const u=7.5;t.position.x+=h.x*u*s,t.position.z+=h.z*u*s,i&&i.updateAnimation(s,!0,!1,0)}else i&&i.updateAnimation(s,!1,!1,0);break}case"patrol":{const u=performance.now()*.001,d=e.position.x+Math.sin(u*.8)*6,m=e.position.z+Math.cos(u*.8)*6,g=new D(d-t.position.x,0,m-t.position.z);g.lengthSq()>.1?(g.normalize(),t.rotation.y=Math.atan2(g.x,g.z),t.position.x+=g.x*4*s,t.position.z+=g.z*4*s,i&&i.updateAnimation(s,!0,!1,0)):i&&i.updateAnimation(s,!1,!1,0);break}case"guard":{if(o<8){const h=n.position.clone().sub(t.position).normalize();t.rotation.y=Math.atan2(h.x,h.z);const u=9;t.position.x+=h.x*u*s,t.position.z+=h.z*u*s,i&&i.updateAnimation(s,!0,!1,0),o<2&&(n.damage(10),this.audio.playLavaSizzle(),r.showToast(`⚔️ ${e.name} struck you for 10 damage!`),i&&i.triggerToolSwing())}else{const h=new D(e.position.x,e.position.y,e.position.z);if(t.position.distanceTo(h)>1){const u=h.clone().sub(t.position).normalize();t.rotation.y=Math.atan2(u.x,u.z),t.position.x+=u.x*4*s,t.position.z+=u.z*4*s,i&&i.updateAnimation(s,!0,!1,0)}else i&&i.updateAnimation(s,!1,!1,0)}break}case"zombie":{const h=l.detectionRange||26,u=l.moveSpeed||6.2,d=l.damageAmount||12;if(o<h){const m=n.position.clone().sub(t.position).normalize();t.rotation.y=Math.atan2(m.x,m.z),t.position.x+=m.x*u*s,t.position.z+=m.z*u*s,i&&(i.updateAnimation(s,!0,!1,0),i.leftArmGroup.rotation.x=-Math.PI*.48,i.rightArmGroup.rotation.x=-Math.PI*.48),Math.random()<.004&&this.audio.playZombieGroan(),o<2.2&&(n.damage(d),this.audio.playZombieAttack(),r.showToast(`🧟 ${e.name} attacked you for ${d} damage!`),i&&i.triggerToolSwing())}else i&&(i.updateAnimation(s,!1,!1,0),i.leftArmGroup.rotation.x=-Math.PI*.48,i.rightArmGroup.rotation.x=-Math.PI*.48);break}case"medic":{if(o<8){const h=n.position.x-t.position.x,u=n.position.z-t.position.z;t.rotation.y=Math.atan2(h,u)}i&&i.updateAnimation(s,!1,!1,0);break}case"custom_code":{l.customCode&&this.executeCustomSandbox(l.customCode,e,t,i,s,n,r);break}}}damageEntity(e,t){return e.script.health===void 0&&(e.script.health=e.script.maxHealth||60),e.script.health-=t,e.script.health<=0}handleInteraction(e,t,i,s){const n=e.script;if(n.behavior==="medic"){i.heal(100),this.audio.playHeal();const r=n.dialogueText||"Medkit applied! Health fully restored, get back out there!";this.showSpeechBubble(t,r,4.5),s.showToast('💉 Medic: "Health restored to 100!"')}else if(n.behavior==="zombie"){const o=this.damageEntity(e,25);this.audio.playZombieAttack(),s.spawnParticles&&s.spawnParticles(t.position,"#dc2626"),o?(i.giveCoins(n.coinAmount||25),this.audio.playZombieGroan(),s.showToast(`☠️ Defeated ${e.name}! +${n.coinAmount||25} Coins`),s.removeEntity&&s.removeEntity(e.id)):s.showToast(`⚔️ Struck ${e.name}! (${e.script.health} HP left)`)}else if(n.behavior==="dialogue"){const r=n.dialogueText||`Hey ${i.name}! Welcome to my world!`;this.showSpeechBubble(t,r,5),s.showToast(`💬 ${e.name}: "${r}"`),this.audio.playSwing()}else if(n.behavior==="coin_reward"){const r=n.coinAmount||20;i.giveCoins(r),s.showToast(`🪙 ${e.name} gave you ${r} Coins!`),this.showSpeechBubble(t,`Here's +${r} Coins! Enjoy!`,3.5),this.audio.playCoin()}else if(n.behavior==="teleport")n.teleportTarget&&(i.teleport(n.teleportTarget.x,n.teleportTarget.y,n.teleportTarget.z),s.showToast(`🌀 Teleported by ${e.name}!`),this.audio.playBounce());else if(n.behavior==="bounce")i.launch(26),s.showToast("🚀 Launched high into the sky!"),this.audio.playBounce();else if(n.behavior==="custom_code"&&n.customCode)try{const r={name:e.name,say:l=>{this.showSpeechBubble(t,l,4),s.showToast(`💬 ${e.name}: "${l}"`)},teleport:(l,c,h)=>t.position.set(l,c,h)};new Function("self","player","world",`
          try {
            ${n.customCode}
            if (typeof onInteract === 'function') {
              onInteract(player);
            }
          } catch(err) {
            world.showToast("Script error: " + err.message);
          }
        `)(r,i,s)}catch(r){s.showToast(`⚠️ Script compile error: ${r.message}`)}}executeCustomSandbox(e,t,i,s,n,r,o){try{const l={name:t.name,position:i.position,rotation:i.rotation,say:h=>this.showSpeechBubble(i,h,4),moveToward:(h,u,d=4)=>{const m=new D(h-i.position.x,0,u-i.position.z);m.lengthSq()>.05&&(m.normalize(),i.rotation.y=Math.atan2(m.x,m.z),i.position.x+=m.x*d*n,i.position.z+=m.z*d*n,s&&s.updateAnimation(n,!0,!1,0))}};new Function("self","player","world","dt",`
        ${e}
        if (typeof onTick === 'function') {
          onTick(dt);
        }
      `)(l,r,o,n)}catch{}}destroy(){this.activeSpeechBubbles.forEach(({sprite:e})=>{e.parent&&e.parent.remove(e)}),this.activeSpeechBubbles.clear()}}class yg{constructor(e,t){R(this,"container");R(this,"options");this.container=document.createElement("div"),this.container.id="rbx-script-inspector-modal",this.container.className="rbx-modal-backdrop",this.options=t,e.appendChild(this.container),this.render(),this.bindEvents()}render(){var s,n,r,o,l,c,h,u,d,m,g,v,f,p,x,T;const e=this.options.entity,t=e.type==="npc",i=e.script||{behavior:"dialogue"};this.container.innerHTML=`
      <div class="rbx-inspector-window">
        <!-- HEADER -->
        <div class="rbx-inspector-header">
          <div class="rbx-inspector-title">
            <span class="rbx-inspector-badge">${t?"👤 NPC / PERSON":"📦 INTERACTIVE ITEM"}</span>
            <h2>Studio Properties & Script Editor</h2>
          </div>
          <button class="rbx-inspector-close" id="rbx-inspector-close-btn">&times;</button>
        </div>

        <div class="rbx-inspector-body">
          <!-- LEFT PANEL: PROPERTIES -->
          <div class="rbx-inspector-left">
            <h3 class="rbx-inspector-section-label">General Properties</h3>

            <div class="rbx-inspector-field">
              <label>Entity Name</label>
              <input type="text" id="rbx-prop-name" value="${e.name}" class="rbx-inspector-input" />
            </div>

            <div class="rbx-inspector-field">
              <label>Entity Type</label>
              <div class="rbx-prop-type-badge">${t?"Blocky Avatar (Person)":e.itemType||"Custom Prop"}</div>
            </div>

            ${t?`
              <h3 class="rbx-inspector-section-label" style="margin-top: 14px;">Avatar Appearance</h3>
              <div class="rbx-inspector-grid2">
                <div class="rbx-inspector-field">
                  <label>Shirt / Top</label>
                  <select id="rbx-prop-shirt" class="rbx-inspector-select">
                    <option value="none" ${!((s=e.avatarConfig)!=null&&s.equippedShirt)||((n=e.avatarConfig)==null?void 0:n.equippedShirt)==="none"?"selected":""}>Default Tunic</option>
                    <option value="flannel" ${((r=e.avatarConfig)==null?void 0:r.equippedShirt)==="flannel"?"selected":""}>Pioneer Flannel</option>
                    <option value="genesis_hoodie" ${((o=e.avatarConfig)==null?void 0:o.equippedShirt)==="genesis_hoodie"?"selected":""}>Genesis Hoodie</option>
                    <option value="synthetic_skin" ${((l=e.avatarConfig)==null?void 0:l.equippedShirt)==="synthetic_skin"?"selected":""}>Cyber Synthetic Skin</option>
                    <option value="starweaver_robes" ${((c=e.avatarConfig)==null?void 0:c.equippedShirt)==="starweaver_robes"?"selected":""}>Starweaver Robes</option>
                  </select>
                </div>
                <div class="rbx-inspector-field">
                  <label>Hat / Accessory</label>
                  <select id="rbx-prop-hat" class="rbx-inspector-select">
                    <option value="none" ${!((h=e.avatarConfig)!=null&&h.equippedHat)||((u=e.avatarConfig)==null?void 0:u.equippedHat)==="none"?"selected":""}>None</option>
                    <option value="cowboy" ${((d=e.avatarConfig)==null?void 0:d.equippedHat)==="cowboy"?"selected":""}>Cowboy Hat</option>
                    <option value="halo" ${((m=e.avatarConfig)==null?void 0:m.equippedHat)==="halo"?"selected":""}>Golden Halo</option>
                    <option value="crown" ${((g=e.avatarConfig)==null?void 0:g.equippedHat)==="crown"?"selected":""}>Royal Crown</option>
                    <option value="top_hat" ${((v=e.avatarConfig)==null?void 0:v.equippedHat)==="top_hat"?"selected":""}>Gentleman Top Hat</option>
                    <option value="beanie" ${((f=e.avatarConfig)==null?void 0:f.equippedHat)==="beanie"?"selected":""}>Warm Beanie</option>
                  </select>
                </div>
              </div>
            `:`
              <h3 class="rbx-inspector-section-label" style="margin-top: 14px;">Item Object Type</h3>
              <select id="rbx-prop-itemtype" class="rbx-inspector-select">
                <option value="coin" ${e.itemType==="coin"?"selected":""}>🪙 Genesis Coin</option>
                <option value="chest" ${e.itemType==="chest"?"selected":""}>🎁 Treasure Chest</option>
                <option value="portal" ${e.itemType==="portal"?"selected":""}>🌀 Warp Teleport Portal</option>
                <option value="bounce_pad" ${e.itemType==="bounce_pad"?"selected":""}>🚀 Super Bounce Launcher</option>
                <option value="speed_pad" ${e.itemType==="speed_pad"?"selected":""}>⚡ Hyper Speed Strip</option>
                <option value="crystal" ${e.itemType==="crystal"?"selected":""}>💎 Glowing Mana Crystal</option>
              </select>
            `}

            <!-- BEHAVIOR PRESETS -->
            <h3 class="rbx-inspector-section-label" style="margin-top: 16px;">Behavior Preset</h3>
            <div class="rbx-inspector-field">
              <select id="rbx-prop-behavior" class="rbx-inspector-select">
                <option value="dialogue" ${i.behavior==="dialogue"?"selected":""}>💬 Interactive Dialogue / Speech</option>
                <option value="zombie" ${i.behavior==="zombie"?"selected":""}>🧟 Zombie Undead (Chases & Attacks)</option>
                <option value="medic" ${i.behavior==="medic"?"selected":""}>💉 Medic Doctor (Heals to 100 HP)</option>
                <option value="follow" ${i.behavior==="follow"?"selected":""}>🏃 Pet / Companion (Follows Player)</option>
                <option value="patrol" ${i.behavior==="patrol"?"selected":""}>🚶 Smooth Patrol / Wander</option>
                <option value="guard" ${i.behavior==="guard"?"selected":""}>⚔️ Guard / Enemy (Chases & Attacks)</option>
                <option value="coin_reward" ${i.behavior==="coin_reward"?"selected":""}>🪙 Coin Giver (Awards Coins)</option>
                <option value="teleport" ${i.behavior==="teleport"?"selected":""}>🌀 Teleporter Pad</option>
                <option value="bounce" ${i.behavior==="bounce"?"selected":""}>🚀 Super Bouncer Launcher</option>
                <option value="custom_code" ${i.behavior==="custom_code"?"selected":""}>💻 Custom Script (Roblox Lua / JS)</option>
              </select>
            </div>

            <!-- PARAMETERS BASED ON BEHAVIOR -->
            <div id="rbx-param-combat" class="rbx-behavior-param-group" style="display: ${i.behavior==="zombie"||i.behavior==="guard"?"block":"none"};">
              <div class="rbx-inspector-grid2">
                <div class="rbx-inspector-field">
                  <label>Health (HP)</label>
                  <input type="number" id="rbx-param-health" class="rbx-inspector-input" value="${i.health??i.maxHealth??60}" min="1" max="2000" />
                </div>
                <div class="rbx-inspector-field">
                  <label>Attack Damage</label>
                  <input type="number" id="rbx-param-damage" class="rbx-inspector-input" value="${i.damageAmount??12}" min="1" max="100" />
                </div>
              </div>
              <div class="rbx-inspector-grid2" style="margin-top: 6px;">
                <div class="rbx-inspector-field">
                  <label>Movement Speed</label>
                  <input type="number" id="rbx-param-speed" class="rbx-inspector-input" value="${i.moveSpeed??6}" min="1" max="30" step="0.5" />
                </div>
                <div class="rbx-inspector-field">
                  <label>Aggro Range</label>
                  <input type="number" id="rbx-param-range" class="rbx-inspector-input" value="${i.detectionRange??24}" min="5" max="80" />
                </div>
              </div>
            </div>

            <div id="rbx-param-dialogue" class="rbx-behavior-param-group" style="display: ${i.behavior==="dialogue"||i.behavior==="medic"?"block":"none"};">
              <label>Speech Bubble Text</label>
              <textarea id="rbx-param-dialogue-text" class="rbx-inspector-textarea" rows="2" placeholder="e.g. Welcome to my obstacle course! Watch out for the lava tightrope!">${i.dialogueText||""}</textarea>
            </div>

            <div id="rbx-param-coin" class="rbx-behavior-param-group" style="display: ${i.behavior==="coin_reward"||i.behavior==="zombie"?"block":"none"};">
              <label>Coins to Award / Bounty</label>
              <input type="number" id="rbx-param-coin-amount" class="rbx-inspector-input" value="${i.coinAmount||25}" min="1" max="1000" />
            </div>

            <div id="rbx-param-teleport" class="rbx-behavior-param-group" style="display: ${i.behavior==="teleport"?"block":"none"};">
              <label>Target Coordinates (X, Y, Z)</label>
              <div style="display: flex; gap: 6px;">
                <input type="number" id="rbx-tp-x" class="rbx-inspector-input" placeholder="X" value="${((p=i.teleportTarget)==null?void 0:p.x)||0}" />
                <input type="number" id="rbx-tp-y" class="rbx-inspector-input" placeholder="Y" value="${((x=i.teleportTarget)==null?void 0:x.y)||4}" />
                <input type="number" id="rbx-tp-z" class="rbx-inspector-input" placeholder="Z" value="${((T=i.teleportTarget)==null?void 0:T.z)||0}" />
              </div>
            </div>

            <div style="margin-top: 24px;">
              <button id="rbx-btn-delete-entity" class="rbx-btn-delete-entity">
                🗑️ Delete This ${t?"Person":"Item"}
              </button>
            </div>
          </div>

          <!-- RIGHT PANEL: SCRIPT EDITOR -->
          <div class="rbx-inspector-right">
            <div class="rbx-script-editor-bar">
              <span class="rbx-script-tag">Roblox Script Engine</span>
              <div style="display: flex; gap: 8px;">
                <select id="rbx-script-template-select" class="rbx-inspector-select-mini">
                  <option value="">Insert Code Template...</option>
                  <option value="zombie_ai">🧟 Zombie Aggro AI</option>
                  <option value="medic">💉 Field Medic Healer</option>
                  <option value="quest">Quest & Coin Giver</option>
                  <option value="teleport">Checkpoint Teleport</option>
                  <option value="bounce">Launch Bouncer</option>
                  <option value="bobbing">Floating Bob Animation</option>
                </select>
                <button id="rbx-btn-test-script" class="rbx-btn-test-script">▶ Test Action</button>
              </div>
            </div>

            <div class="rbx-code-editor-container">
              <textarea id="rbx-custom-code" class="rbx-code-editor" spellcheck="false" placeholder="// Write custom JavaScript/Roblox logic here...">${i.customCode||this.getDefaultScriptTemplate()}</textarea>
            </div>

            <div class="rbx-api-cheat-sheet">
              <strong>Available Script APIs:</strong>
              <code>self.say("Hello!")</code> •
              <code>player.giveCoins(20)</code> •
              <code>player.teleport(x, y, z)</code> •
              <code>player.launch(30)</code> •
              <code>world.playSound('coin')</code> •
              <code>world.showToast(msg)</code>
            </div>
          </div>
        </div>

        <!-- FOOTER ACTIONS -->
        <div class="rbx-inspector-footer">
          <button class="rbx-btn-inspector-cancel" id="rbx-inspector-cancel-btn">Cancel</button>
          <button class="rbx-btn-inspector-save" id="rbx-inspector-save-btn">💾 Save Entity & Apply Code</button>
        </div>
      </div>
    `}getDefaultScriptTemplate(){return`// Custom Entity Script
// Available objects: self, player, world, dt

function onInteract(player) {
  self.say("Hello " + player.name + "! Welcome to Genesis!");
  world.playSound("coin");
  player.giveCoins(15);
}

function onTick(dt) {
  // Runs every frame
  // self.moveToward(player.position.x, player.position.z, 3.5);
}`}bindEvents(){const e=this.container.querySelector("#rbx-inspector-close-btn"),t=this.container.querySelector("#rbx-inspector-cancel-btn"),i=this.container.querySelector("#rbx-inspector-save-btn"),s=this.container.querySelector("#rbx-btn-delete-entity"),n=this.container.querySelector("#rbx-prop-behavior"),r=this.container.querySelector("#rbx-script-template-select"),o=this.container.querySelector("#rbx-btn-test-script"),l=this.container.querySelector("#rbx-custom-code");e==null||e.addEventListener("click",()=>this.destroy()),t==null||t.addEventListener("click",()=>this.destroy()),n==null||n.addEventListener("change",()=>{const c=n.value,h=this.container.querySelector("#rbx-param-dialogue"),u=this.container.querySelector("#rbx-param-coin"),d=this.container.querySelector("#rbx-param-teleport"),m=this.container.querySelector("#rbx-param-combat");h&&(h.style.display=c==="dialogue"||c==="medic"?"block":"none"),u&&(u.style.display=c==="coin_reward"||c==="zombie"?"block":"none"),d&&(d.style.display=c==="teleport"?"block":"none"),m&&(m.style.display=c==="zombie"||c==="guard"?"block":"none")}),r==null||r.addEventListener("change",()=>{const c=r.value;c==="zombie_ai"?l.value=`// Zombie Aggro AI Script
function onTick(dt) {
  let dist = self.position.distanceTo(player.position);
  if (dist < 25) {
    self.lookAt(player.position.x, player.position.z);
    self.moveToward(player.position.x, player.position.z, 6.5);
    if (dist < 2.2) {
      player.damage(12);
      world.playSound("zombie_attack");
    }
  }
}

function onInteract(player) {
  world.playSound("zombie_groan");
  self.say("Grrrrrr... BRAINS!");
}`:c==="medic"?l.value=`// Field Medic Healer Script
function onInteract(player) {
  player.heal(100);
  world.playSound("heal");
  self.say("Medkit administered! You are back at full 100 HP!");
  world.showToast("💚 Fully restored to 100 HP!");
}`:c==="quest"?l.value=`function onInteract(player) {
  self.say("Pioneer! Take these coins for your bravery!");
  world.playSound("coin");
  player.giveCoins(50);
  world.showToast("⭐ Quest completed: +50 Coins!");
}`:c==="teleport"?l.value=`function onInteract(player) {
  self.say("Warping you forward!");
  world.playSound("bounce");
  player.teleport(0, 14, 25);
}`:c==="bounce"?l.value=`function onInteract(player) {
  world.playSound("bounce");
  player.launch(32);
  world.showToast("🚀 Super Launch!");
}`:c==="bobbing"&&(l.value=`let t = 0;
function onTick(dt) {
  t += dt;
  self.position.y += Math.sin(t * 3) * 0.02;
}`),r.value=""}),o==null||o.addEventListener("click",()=>{if(this.options.onTestScript){const c=this.collectUpdatedEntity();this.options.onTestScript(c)}}),s==null||s.addEventListener("click",()=>{confirm(`Delete ${this.options.entity.name}?`)&&(this.options.onDelete(this.options.entity.id),this.destroy())}),i==null||i.addEventListener("click",()=>{const c=this.collectUpdatedEntity();this.options.onSave(c),this.destroy()})}collectUpdatedEntity(){const e=this.options.entity,t=this.container.querySelector("#rbx-prop-name"),i=this.container.querySelector("#rbx-prop-behavior"),s=this.container.querySelector("#rbx-param-dialogue-text"),n=this.container.querySelector("#rbx-param-coin-amount"),r=this.container.querySelector("#rbx-param-health"),o=this.container.querySelector("#rbx-param-damage"),l=this.container.querySelector("#rbx-param-speed"),c=this.container.querySelector("#rbx-param-range"),h=this.container.querySelector("#rbx-tp-x"),u=this.container.querySelector("#rbx-tp-y"),d=this.container.querySelector("#rbx-tp-z"),m=this.container.querySelector("#rbx-custom-code"),g=this.container.querySelector("#rbx-prop-shirt"),v=this.container.querySelector("#rbx-prop-hat"),f=this.container.querySelector("#rbx-prop-itemtype"),p=(i==null?void 0:i.value)||"dialogue",x=e.avatarConfig?{...e.avatarConfig,equippedShirt:g?g.value:e.avatarConfig.equippedShirt,equippedHat:v?v.value:e.avatarConfig.equippedHat}:void 0,T=r&&parseInt(r.value,10)||60;return{...e,name:(t==null?void 0:t.value.trim())||e.name,itemType:f?f.value:e.itemType,avatarConfig:x,script:{behavior:p,dialogueText:(s==null?void 0:s.value.trim())||void 0,coinAmount:n?parseInt(n.value,10)||20:void 0,health:T,maxHealth:T,damageAmount:o?parseInt(o.value,10)||12:void 0,moveSpeed:l?parseFloat(l.value)||6:void 0,detectionRange:c?parseFloat(c.value)||24:void 0,teleportTarget:h&&u&&d?{x:parseFloat(h.value)||0,y:parseFloat(u.value)||4,z:parseFloat(d.value)||0}:void 0,customCode:(m==null?void 0:m.value.trim())||void 0}}}destroy(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.options.onClose()}}class Dl{constructor(e,t,i="Pioneer",s,n,r=!1){R(this,"container");R(this,"canvas");R(this,"scene");R(this,"camera");R(this,"renderer");R(this,"hud");R(this,"multiplayer");R(this,"voxelWorld");R(this,"voxelAudio",new hg);R(this,"voxelParticles");R(this,"dayNight");R(this,"raycaster",new rh);R(this,"currentTarget",{hit:!1,voxelPos:new D,adjacentPos:new D});R(this,"isFirstPerson",!1);R(this,"sunLight");R(this,"ambientLight");R(this,"footstepTimer",0);R(this,"playerAvatar");R(this,"playerPos",new D(0,0,0));R(this,"playerVelocityY",0);R(this,"isGrounded",!0);R(this,"playerSpeed",10);R(this,"playerHealth",100);R(this,"isMoving",!1);R(this,"isJumping",!1);R(this,"cameraDistance",8.5);R(this,"cameraPitch",.35);R(this,"cameraYaw",0);R(this,"isMouseDown",!1);R(this,"prevMousePos",{x:0,y:0});R(this,"keys",{});R(this,"adamAvatar",null);R(this,"eveAvatar",null);R(this,"adamPos",new D(14,0,-8));R(this,"evePos",new D(8,0,4));R(this,"scriptingEngine");R(this,"scriptedEntities",new Map);R(this,"inspectorModal",null);R(this,"coins",[]);R(this,"interactiveBlocks",[]);R(this,"spinnerObstacle",null);R(this,"campfireLight",null);R(this,"animId",0);R(this,"lastTime",0);R(this,"equippedTool",null);R(this,"onExitCallback");R(this,"activeMap",null);R(this,"activeCheckpoint",new D(0,4,0));R(this,"isStudioMode",!1);R(this,"isFlyMode",!1);R(this,"speedBoostTimer",0);R(this,"hasReachedFinish",!1);R(this,"animate",e=>{this.animId=requestAnimationFrame(this.animate);const t=Math.min(50,e-this.lastTime);this.lastTime=e;const i=t/1e3;this.updateMovement(i),this.updateWorld(i),this.voxelParticles.update(i),this.dayNight.update(i,this.playerPos),this.multiplayer.update(i),this.raycaster.setFromCamera(new De(0,0),this.camera),this.currentTarget=this.voxelWorld.raycastTarget(this.raycaster,14),this.renderer.render(this.scene,this.camera)});this.container=e,this.onExitCallback=s,this.canvas=document.createElement("canvas"),this.canvas.id="rbx-3d-canvas",this.container.appendChild(this.canvas),this.scene=new ro,this.scene.background=new Le(8900331);const o=new ah(300,60,165063,3359061);if(o.position.y=-6,this.scene.add(o),this.camera=new Yt(60,window.innerWidth/window.innerHeight,.1,500),this.renderer=new po({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!1,this.hud=new og(this.container),this.setupHUDCallbacks(),this.multiplayer=new cg(this.scene,i,t),this.setupMultiplayerCallbacks(),this.setupLighting(),this.dayNight=new fg(this.scene,this.sunLight,this.ambientLight,this.voxelAudio),this.dayNight.onTimeChange=(l,c)=>{this.hud.setTime(l,c)},this.voxelWorld=new dg(this.scene),this.voxelParticles=new ug(this.scene),n)this.loadCustomMap(n);else{this.buildWorld();const l=this.getGroundY(0,0);this.playerPos.set(0,l,0),this.activeCheckpoint.set(0,l,0)}r&&this.setStudioMode(!0),this.playerAvatar=new kn(t,i),this.playerAvatar.setLocalPlayer(!0),this.playerAvatar.root.position.copy(this.playerPos),this.scene.add(this.playerAvatar.root),this.scriptingEngine=new vg(this.scene,this.voxelAudio),n||(this.adamAvatar=new kn({headColor:"#facc15",torsoColor:"#16a34a",leftArmColor:"#facc15",rightArmColor:"#facc15",leftLegColor:"#78350f",rightLegColor:"#78350f",equippedHat:"none",equippedShirt:"flannel",equippedPants:"cargo_shorts",equippedFace:"smile",equippedGear:"axe"},"Adam (Founder)"),this.adamAvatar.root.position.copy(this.adamPos),this.scene.add(this.adamAvatar.root),this.eveAvatar=new kn({headColor:"#fdba74",torsoColor:"#ec4899",leftArmColor:"#fdba74",rightArmColor:"#fdba74",leftLegColor:"#0284c7",rightLegColor:"#0284c7",equippedHat:"halo",equippedShirt:"genesis_hoodie",equippedPants:"blue_jeans",equippedFace:"chill",equippedGear:"none"},"Eve (Founder)"),this.eveAvatar.root.position.copy(this.evePos),this.scene.add(this.eveAvatar.root),this.adamAvatar.root.userData={entityId:"npc_adam"},this.adamAvatar.torsoMesh.userData={entityId:"npc_adam"},this.scriptedEntities.set("npc_adam",{entity:{id:"npc_adam",name:"Adam (Founder)",type:"npc",position:{x:this.adamPos.x,y:this.adamPos.y,z:this.adamPos.z},script:{behavior:"dialogue",dialogueText:"Welcome to Genesis! Use Studio mode (TAB) to build anything and attach custom code!"}},mesh:this.adamAvatar.root,avatar:this.adamAvatar}),this.eveAvatar.root.userData={entityId:"npc_eve"},this.eveAvatar.torsoMesh.userData={entityId:"npc_eve"},this.scriptedEntities.set("npc_eve",{entity:{id:"npc_eve",name:"Eve (Founder)",type:"npc",position:{x:this.evePos.x,y:this.evePos.y,z:this.evePos.z},script:{behavior:"dialogue",dialogueText:"You can create your own NPCs, items, and script their behavior just like Roblox!"}},mesh:this.eveAvatar.root,avatar:this.eveAvatar})),this.setupInputEvents(),this.lastTime=performance.now(),this.animate(this.lastTime)}setupLighting(){this.ambientLight=new fo(16777215,.85),this.scene.add(this.ambientLight),this.sunLight=new dr(16775917,1.4),this.sunLight.position.set(40,70,30),this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const e=new eh(8900331,2263842,.5);this.scene.add(e)}buildWorld(){const e=new Pe(200,4,200),t=this.generateStudTexture();t.wrapS=os,t.wrapT=os,t.repeat.set(50,50);const i=new Ne({color:3706428,map:t}),s=new se(e,i);s.position.y=-2,s.receiveShadow=!0,this.scene.add(s);const n=new se(new Qe(4,4,.2,32),new Ne({color:9741240}));n.position.set(0,.1,0),n.receiveShadow=!0,this.scene.add(n),this.buildCabin(16,0,-12),this.buildCampfire(6,0,2),[[-12,-15],[-20,-8],[-15,12],[-22,20],[14,-25],[24,-18],[20,16],[28,6],[-8,26],[8,28]].forEach(([l,c])=>this.buildTree(l,0,c)),this.buildObbyCourse(-30,0,-5),[[0,1.5,-6],[6,1.5,-10],[-6,1.5,-6],[-30,3,-5],[-30,5,-12],[-30,7,-19],[-30,9,-26],[16,1.5,6],[20,1.5,12],[0,1.5,16]].forEach(([l,c,h])=>this.spawnCoin(l,c,h))}generateStudTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");return t.fillStyle="#388e3c",t.fillRect(0,0,64,64),t.fillStyle="#2e7d32",t.beginPath(),t.arc(32,32,14,0,Math.PI*2),t.fill(),t.fillStyle="#4caf50",t.beginPath(),t.arc(30,30,12,0,Math.PI*2),t.fill(),new yi(e)}buildTree(e,t,i){const s=new Rt;s.position.set(e,t,i);const n=new se(new Pe(1.6,5,1.6),new Ne({color:7877903}));n.position.y=2.5,n.castShadow=!0,n.receiveShadow=!0,s.add(n);const r=new se(new Pe(6,2.5,6),new Ne({color:1409085}));r.position.y=5.5,r.castShadow=!0,s.add(r);const o=new se(new Pe(4.5,2.2,4.5),new Ne({color:1483594}));o.position.y=7.5,o.castShadow=!0,s.add(o);const l=new se(new Pe(2.5,2,2.5),new Ne({color:2278750}));l.position.y=9.2,l.castShadow=!0,s.add(l),this.scene.add(s),this.interactiveBlocks.push({mesh:n,type:"tree"})}buildCabin(e,t,i){const s=new Rt;s.position.set(e,t,i);const n=new se(new Pe(10,6,8),new Ne({color:8736014}));n.position.y=3,n.castShadow=!0,n.receiveShadow=!0,s.add(n);const r=new se(new cn(8,3.5,4),new Ne({color:4528643}));r.position.y=7.5,r.rotation.y=Math.PI/4,r.castShadow=!0,s.add(r);const o=new se(new Pe(2,3.5,.2),new Ne({color:1976635}));o.position.set(0,1.75,4.05),s.add(o),this.scene.add(s)}buildCampfire(e,t,i){const s=new Rt;s.position.set(e,t,i);for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new se(new Pe(.8,.5,.8),new Ne({color:6583435}));h.position.set(Math.cos(c)*1.5,.25,Math.sin(c)*1.5),s.add(h)}const n=new se(new Qe(.15,.15,1.8,8),new Ne({color:7877903}));n.rotation.x=Math.PI/3,n.position.y=.5;const r=n.clone();r.rotation.z=Math.PI/3;const o=new se(new cn(.7,1.4,8),new ke({color:16347926}));o.position.y=.8,s.add(n,r,o),this.campfireLight=new es(16742144,3,18),this.campfireLight.position.set(0,1.5,0),s.add(this.campfireLight),this.scene.add(s)}buildObbyCourse(e,t,i){const s=new Rt,n=new se(new Pe(1.4,6,1.4),new nt({color:1976635,roughness:.7,emissive:165063,emissiveIntensity:.25}));n.position.set(e,t+3,i+4),n.castShadow=!0,s.add(n);const r=[3359061,1976635,3359061,1976635,3359061,988970];for(let c=0;c<6;c++){const h=new se(new Pe(3.6,.7,3.6),new nt({color:r[c],roughness:.6,emissive:3718648,emissiveIntensity:.2}));h.position.set(e,t+(c+1)*2.2,i-c*6),h.receiveShadow=!0,s.add(h)}const o=new se(new Qe(5,5.5,1,32),new nt({color:1976635,roughness:.5}));o.position.set(e,15,i-36),o.receiveShadow=!0,s.add(o),this.spinnerObstacle=new se(new Pe(8,.5,.5),new nt({color:16096779,emissive:14251782,emissiveIntensity:.5})),this.spinnerObstacle.position.set(e,16,i-36),s.add(this.spinnerObstacle);const l=new se(new cr(1.2,0),new nt({color:3718648,emissive:165063,emissiveIntensity:.8,roughness:.1}));l.position.set(e,17.5,i-36),l.rotation.y=Math.PI/4,s.add(l),this.scene.add(s)}spawnCoin(e,t,i){const s=new se(new Qe(.7,.7,.15,16),new nt({color:16436245,metalness:.9,roughness:.2,emissive:14251782,emissiveIntensity:.3}));s.rotation.x=Math.PI/2,s.position.set(e,t,i),s.castShadow=!0,this.scene.add(s),this.coins.push({mesh:s,baseY:t,isCollected:!1})}setupHUDCallbacks(){this.hud.onToolEquipped=e=>{this.equippedTool=e,e?(this.playerAvatar.applyGear(e.id),this.playerSpeed=e.id==="speed_coil"?22:10):(this.playerAvatar.applyGear("none"),this.playerSpeed=10)},this.hud.onLeaveGame=()=>{this.destroy(),this.onExitCallback&&this.onExitCallback()},this.hud.onToggleStudioMode=e=>this.setStudioMode(e),this.hud.onToggleFlyMode=()=>{this.isFlyMode=!this.isFlyMode,this.hud.setFlyStatus(this.isFlyMode)},this.hud.onSaveMap=()=>this.openSaveMapModal(),this.hud.onPublishMap=()=>this.openPublishMapModal(),this.hud.onLoadMap=()=>this.openLoadMapModal(),this.hud.onSpawnNPC=()=>this.spawnScriptedNPC(),this.hud.onSpawnItem=()=>this.spawnScriptedItem(),this.hud.onOpenInspector=()=>this.openScriptInspector()}setupMultiplayerCallbacks(){this.multiplayer.onPlayerCountChange=e=>{this.hud.setPlayerCount(e)},this.multiplayer.onRemoteBlockPlaced=e=>{this.voxelWorld.setBlock(e.vx,e.vy,e.vz,e.type),this.voxelAudio.playBlockPlace(e.type)},this.multiplayer.onRemoteBlockBroken=e=>{this.voxelWorld.removeBlock(e.vx,e.vy,e.vz);const t=this.voxelWorld.voxelToWorld(e.vx,e.vy,e.vz);this.voxelParticles.spawnBreakBurst(t,e.color),this.voxelAudio.playBlockBreak()},this.multiplayer.onRemoteChat=e=>{this.hud.addChatMessage(e.username,e.text,"#a855f7")},this.hud.onChatSent=e=>{this.hud.addChatMessage("You",e,"#38bdf8"),this.multiplayer.broadcastChat(e)}}getGroundY(e,t){const i=Math.round(e/bt),s=Math.round(t/bt);for(let n=12;n>=-3;n--)if(this.voxelWorld&&this.voxelWorld.getBlock(i,n,s))return(n+1)*bt;return 0}setupInputEvents(){window.addEventListener("keydown",e=>{var t,i;((t=e.target)==null?void 0:t.tagName)==="INPUT"||((i=e.target)==null?void 0:i.tagName)==="TEXTAREA"||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(e.code)&&e.preventDefault(),this.keys[e.code]=!0,e.code==="Space"&&this.isGrounded&&(this.playerVelocityY=14,this.isGrounded=!1,this.voxelAudio.playSwing()),e.code==="KeyV"&&(this.isFirstPerson=!this.isFirstPerson,this.cameraDistance=this.isFirstPerson?.5:9,this.playerAvatar.setFirstPerson(this.isFirstPerson)))}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),this.canvas.addEventListener("mousedown",e=>{if(this.isMouseDown=!0,this.prevMousePos={x:e.clientX,y:e.clientY},e.button===0){if(this.handleEntityClick(e.clientX,e.clientY)){this.playerAvatar.triggerToolSwing();return}this.playerAvatar.triggerToolSwing(),this.handleMineAction()}else e.button===2&&(this.playerAvatar.triggerToolSwing(),this.handlePlaceAction())}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),window.addEventListener("mousemove",e=>{if(!this.isMouseDown)return;const t=e.clientX-this.prevMousePos.x,i=e.clientY-this.prevMousePos.y;this.cameraYaw-=t*.005,this.cameraPitch=Math.max(.1,Math.min(1.15,this.cameraPitch+i*.005)),this.prevMousePos={x:e.clientX,y:e.clientY}}),this.canvas.addEventListener("wheel",e=>{this.cameraDistance=Math.max(3,Math.min(25,this.cameraDistance+e.deltaY*.01))}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}handleMineAction(){var e;if(!this.isStudioMode){this.voxelAudio.playSwing();return}if(this.currentTarget.hit){const{x:t,y:i,z:s}=this.currentTarget.voxelPos,n=this.voxelWorld.removeBlock(t,i,s);if(n){const r=this.voxelWorld.voxelToWorld(t,i,s);this.voxelParticles.spawnBreakBurst(r,n.color),this.voxelAudio.playBlockBreak(n.type),((e=this.equippedTool)==null?void 0:e.id)==="pickaxe"&&this.voxelAudio.playPickaxeClink(),this.multiplayer.broadcastBlockBroken(t,i,s,n.color)}}else this.voxelAudio.playSwing()}handlePlaceAction(){if(this.equippedTool&&this.currentTarget.hit&&this.equippedTool.id.startsWith("block_")){const e=this.equippedTool.id.replace("block_",""),t=this.currentTarget.adjacentPos,i=Math.round(this.playerPos.x/bt),s=Math.floor(this.playerPos.y/bt),n=Math.round(this.playerPos.z/bt);if(t.x===i&&(t.y===s||t.y===s+1||t.y===s+2)&&t.z===n)return;this.voxelWorld.setBlock(t.x,t.y,t.z,e),this.voxelAudio.playBlockPlace(e);const r=this.voxelWorld.getBlockColor(e);this.multiplayer.broadcastBlockPlaced(t.x,t.y,t.z,e,r)}}updateMovement(e){this.keys.ArrowLeft&&(this.cameraYaw+=2.6*e),this.keys.ArrowRight&&(this.cameraYaw-=2.6*e);const i=new D(0,0,0);if((this.keys.KeyW||this.keys.ArrowUp)&&(i.z-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(i.z+=1),this.keys.KeyA&&(i.x-=1),this.keys.KeyD&&(i.x+=1),this.isMoving=i.lengthSq()>0,this.isMoving){i.normalize(),i.applyAxisAngle(new D(0,1,0),this.cameraYaw),this.playerPos.x+=i.x*this.playerSpeed*e,this.playerPos.z+=i.z*this.playerSpeed*e;const s=Math.atan2(i.x,i.z);this.playerAvatar.root.rotation.y=s,this.isGrounded&&(this.footstepTimer+=e,this.footstepTimer>.32&&(this.footstepTimer=0,this.voxelAudio.playFootstep()))}if(this.isFlyMode)this.keys.Space&&(this.playerPos.y+=18*e),(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.playerPos.y-=18*e),this.playerVelocityY=0,this.isGrounded=!1;else{this.playerVelocityY-=32*e,this.playerPos.y+=this.playerVelocityY*e;const s=this.getGroundY(this.playerPos.x,this.playerPos.z);this.playerPos.y<=s&&(this.playerPos.y=s,this.playerVelocityY=0,this.isGrounded=!0)}if(this.isJumping=!this.isGrounded,this.speedBoostTimer>0&&(this.speedBoostTimer-=e,this.speedBoostTimer<=0&&(this.playerSpeed=10)),!this.isStudioMode){const s=Math.round(this.playerPos.x/bt),n=Math.round(this.playerPos.z/bt),r=Math.floor((this.playerPos.y+.1)/bt),o=this.voxelWorld.getBlock(s,r,n)||this.voxelWorld.getBlock(s,r-1,n);o&&(o.type==="lava"?(this.voxelAudio.playLavaSizzle(),this.voxelParticles.spawnBreakBurst(this.playerPos,16726784),this.respawnAtCheckpoint("🔥 Sizzled by Lava! Respawning...")):o.type==="bounce_pad"?(this.playerVelocityY=28,this.isGrounded=!1,this.voxelAudio.playBounce(),this.voxelParticles.spawnBreakBurst(this.playerPos,4906624),this.hud.showToast("🚀 Super Jump Launch!")):o.type==="speed_pad"?(this.speedBoostTimer=2.5,this.playerSpeed=24,this.voxelAudio.playSwing(),this.hud.showToast("⚡ Hyper Speed Boost!")):o.type==="checkpoint"?this.activeCheckpoint.distanceTo(this.playerPos)>4&&(this.activeCheckpoint.set(this.playerPos.x,this.playerPos.y+.5,this.playerPos.z),this.voxelAudio.playCoin(),this.hud.showToast("🚩 Checkpoint Saved!")):o.type==="finish_line"&&(this.hasReachedFinish||(this.hasReachedFinish=!0,this.voxelAudio.playVictory(),this.voxelParticles.spawnBreakBurst(this.playerPos,12616956),this.showVictoryModal()))),this.playerPos.y<-35&&this.respawnAtCheckpoint("☁️ Fell into the Void! Respawning...")}if(this.playerAvatar.root.position.copy(this.playerPos),this.playerAvatar.updateAnimation(e,this.isMoving,this.isJumping,this.playerVelocityY),this.multiplayer.broadcastTransform(this.playerPos.x,this.playerPos.y,this.playerPos.z,this.playerAvatar.root.rotation.y,this.isMoving,this.isJumping,this.playerVelocityY,this.equippedTool?this.equippedTool.id:"none"),this.isFirstPerson){this.camera.position.set(this.playerPos.x,this.playerPos.y+3.8,this.playerPos.z);const s=new D(-Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch),-Math.sin(this.cameraPitch),-Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch));this.camera.lookAt(this.camera.position.clone().add(s))}else{const s=this.playerPos.x+Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch)*this.cameraDistance,n=this.playerPos.y+Math.sin(this.cameraPitch)*this.cameraDistance+2,r=this.playerPos.z+Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch)*this.cameraDistance;this.camera.position.set(s,n,r),this.camera.lookAt(this.playerPos.x,this.playerPos.y+2,this.playerPos.z)}}updateWorld(e){this.spinnerObstacle&&(this.spinnerObstacle.rotation.y+=e*1.5),this.campfireLight&&(this.campfireLight.intensity=2.5+Math.sin(performance.now()*.01)*.8),this.coins.forEach(t=>{if(t.isCollected)return;t.mesh.rotation.z+=e*3,t.mesh.position.y=t.baseY+Math.sin(performance.now()*.004+t.baseY)*.2,this.playerPos.distanceTo(t.mesh.position)<2.2&&(t.isCollected=!0,this.scene.remove(t.mesh),this.voxelAudio.playSwing())}),this.scriptedEntities.forEach(t=>{this.scriptingEngine.updateEntity(t.entity,t.mesh,t.avatar,e,this.getPlayerAPI(),this.getWorldAPI()),t.avatar&&t.avatar.updateAnimation(e,!1,!1,0,this.camera.position)})}getPlayerHealth(){return this.playerHealth}setStudioMode(e){this.isStudioMode=e,this.hud.setStudioMode(e),e||(this.isFlyMode=!1,this.hud.setFlyStatus(!1))}loadCustomMap(e){this.activeMap=e,this.voxelWorld.loadBlocks(e.blocks),this.playerPos.set(e.spawnPoint.x,e.spawnPoint.y,e.spawnPoint.z),this.activeCheckpoint.copy(this.playerPos),this.playerAvatar&&this.playerAvatar.root.position.copy(this.playerPos),this.hud.setGameTitle(e.title),this.hasReachedFinish=!1,this.clearScriptedEntities(),e.entities&&e.entities.length>0&&e.entities.forEach(t=>{t.type==="npc"?this.spawnScriptedNPC(t):this.spawnScriptedItem(t.itemType||"portal",t)}),e.gameMode==="survival"?(this.scene.background=new Le(1574149),this.scene.fog=new so(1574149,.016),this.ambientLight&&this.ambientLight.color.set(8330525),this.sunLight&&(this.sunLight.color.set(15680580),this.sunLight.intensity=1.6),this.playerAvatar&&this.playerAvatar.applyGear("sword"),this.hud.setSurvivalMode(!0),this.hud.setHealth(this.playerHealth,100),this.hud.showToast("🧟 SURVIVAL: Defend the Outpost from the infected horde!")):(this.scene.background=new Le(8900331),this.scene.fog=null,this.ambientLight&&this.ambientLight.color.set(16777215),this.sunLight&&(this.sunLight.color.set(16775917),this.sunLight.intensity=1.4),this.hud.setSurvivalMode(!1),this.hud.showToast(`Loaded map: ${e.title}`))}respawnAtCheckpoint(e){this.playerPos.copy(this.activeCheckpoint),this.playerVelocityY=0,this.playerAvatar.root.position.copy(this.playerPos),this.hud.showToast(e)}showVictoryModal(){var s,n,r;const e=document.getElementById("rbx-victory-modal");e&&e.remove();const t=document.createElement("div");t.id="rbx-victory-modal",t.className="rbx-victory-overlay",t.innerHTML=`
      <div class="rbx-victory-card">
        <div class="rbx-victory-burst">🏆 ✨ 🌟</div>
        <h2 class="rbx-victory-title">COURSE CLEARED!</h2>
        <p class="rbx-victory-subtitle">
          Outstanding run! You conquered <strong>${((s=this.activeMap)==null?void 0:s.title)||"the Obstacle Course"}</strong>!
        </p>
        <div class="rbx-victory-stats">
          <div class="rbx-victory-stat-item">
            <span>Completion Bonus</span>
            <strong>+🪙 50 Coins</strong>
          </div>
          <div class="rbx-victory-stat-item">
            <span>Parkour Rank</span>
            <strong style="color: #facc15;">MASTER JUMPER</strong>
          </div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="rbx-btn-victory-replay" id="rbx-btn-replay">Play Again</button>
          <button class="rbx-btn-victory-edit" id="rbx-btn-edit-mode">🛠️ Open in Studio</button>
        </div>
      </div>
    `,this.container.appendChild(t);const i=parseInt(localStorage.getItem("rbx_player_coins")||"0",10);localStorage.setItem("rbx_player_coins",(i+50).toString()),(n=t.querySelector("#rbx-btn-replay"))==null||n.addEventListener("click",()=>{t.remove(),this.hasReachedFinish=!1,this.activeMap&&(this.playerPos.set(this.activeMap.spawnPoint.x,this.activeMap.spawnPoint.y,this.activeMap.spawnPoint.z),this.activeCheckpoint.copy(this.playerPos))}),(r=t.querySelector("#rbx-btn-edit-mode"))==null||r.addEventListener("click",()=>{t.remove(),this.hasReachedFinish=!1,this.setStudioMode(!0)})}openSaveMapModal(){var o,l,c,h;const e=document.getElementById("rbx-save-modal");e&&e.remove();const t=document.createElement("div");t.id="rbx-save-modal",t.className="rbx-studio-modal-overlay",t.innerHTML=`
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; margin: 0 0 14px 0;">💾 Save Map Blueprint</h3>
        <div class="rbx-studio-input-group">
          <label>Map Title</label>
          <input type="text" id="rbx-save-title" class="rbx-studio-input" value="${((o=this.activeMap)==null?void 0:o.title)||"My Awesome Obby"}" maxlength="40" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Description</label>
          <input type="text" id="rbx-save-desc" class="rbx-studio-input" value="${((l=this.activeMap)==null?void 0:l.description)||"A challenging parkour obstacle course with jump pads and lava hazards."}" maxlength="120" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Game Mode</label>
          <select id="rbx-save-mode" class="rbx-studio-input">
            <option value="obby">Obby / Parkour</option>
            <option value="hangout">Social Hangout</option>
            <option value="sandbox">Sandbox Creative</option>
          </select>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button id="rbx-btn-confirm-save" class="rbx-btn-victory-replay">Save Locally</button>
          <button id="rbx-btn-download-json" class="rbx-btn-victory-edit">⬇️ Export JSON</button>
          <button id="rbx-btn-close-save" class="rbx-btn-victory-edit" style="flex: 0 0 60px;">✕</button>
        </div>
      </div>
    `,this.container.appendChild(t);const i=t.querySelector("#rbx-btn-close-save");i==null||i.addEventListener("click",()=>t.remove());const s=t.querySelector("#rbx-save-title"),n=t.querySelector("#rbx-save-desc"),r=t.querySelector("#rbx-save-mode");(c=t.querySelector("#rbx-btn-confirm-save"))==null||c.addEventListener("click",()=>{var f,p;const u=s.value.trim()||"Custom Map",d=n.value.trim()||"",m=r.value,g=this.voxelWorld.exportBlocks(),v={id:((f=this.activeMap)==null?void 0:f.id)||"map_"+Date.now(),title:u,description:d,author:"You (Creator)",createdAt:Date.now(),gameMode:m,spawnPoint:{x:this.playerPos.x,y:this.playerPos.y,z:this.playerPos.z},blocks:g,entities:this.exportScriptedEntities(),likes:0,plays:0,tags:[m.toUpperCase(),"Player Creation"]};Ct.getInstance().saveUserMap(v),this.activeMap=v,this.hud.setGameTitle(u),t.remove(),this.hud.showToast(`✓ Saved "${u}" (${g.length} blocks, ${((p=v.entities)==null?void 0:p.length)||0} scripted entities)`)}),(h=t.querySelector("#rbx-btn-download-json"))==null||h.addEventListener("click",()=>{const u=this.voxelWorld.exportBlocks(),d={id:"map_"+Date.now(),title:s.value.trim()||"Custom Map",description:n.value.trim()||"",author:"You (Creator)",createdAt:Date.now(),gameMode:r.value,spawnPoint:{x:this.playerPos.x,y:this.playerPos.y,z:this.playerPos.z},blocks:u,entities:this.exportScriptedEntities(),likes:0,plays:0,tags:["Player Creation"]};Ct.getInstance().exportMapFile(d),this.hud.showToast("✓ Exported map JSON file with entities & scripts")})}openPublishMapModal(){var n,r,o,l;const e=document.getElementById("rbx-publish-modal");e&&e.remove();const t=document.createElement("div");t.id="rbx-publish-modal",t.className="rbx-studio-modal-overlay",t.innerHTML=`
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; margin: 0 0 8px 0; color: #c084fc;">
          🚀 Publish to Genesis Community
        </h3>
        <p style="font-size: 13px; color: var(--rbx-text-sub); margin: 0 0 16px 0;">
          Publish your game to the community hub so any player worldwide can play your map, conquer your obstacles, and like your creation!
        </p>
        <div class="rbx-studio-input-group">
          <label>Game Title</label>
          <input type="text" id="rbx-pub-title" class="rbx-studio-input" value="${((n=this.activeMap)==null?void 0:n.title)||"Tower of Neon Lava"}" maxlength="40" />
        </div>
        <div class="rbx-studio-input-group">
          <label>Game Description & Instructions</label>
          <input type="text" id="rbx-pub-desc" class="rbx-studio-input" value="${((r=this.activeMap)==null?void 0:r.description)||"Can you reach the top without touching the lava? Use jump pads and hit checkpoints!"}" maxlength="140" />
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button id="rbx-btn-do-publish" class="rbx-btn-victory-replay" style="background: linear-gradient(135deg, #a855f7, #6366f1); color: #fff;">
            🚀 Publish Game Now
          </button>
          <button id="rbx-btn-close-pub" class="rbx-btn-victory-edit" style="flex: 0 0 80px;">Cancel</button>
        </div>
      </div>
    `,this.container.appendChild(t),(o=t.querySelector("#rbx-btn-close-pub"))==null||o.addEventListener("click",()=>t.remove());const i=t.querySelector("#rbx-pub-title"),s=t.querySelector("#rbx-pub-desc");(l=t.querySelector("#rbx-btn-do-publish"))==null||l.addEventListener("click",async()=>{const c=i.value.trim()||"My Community Game",h=s.value.trim()||"",u=this.voxelWorld.exportBlocks(),d={id:"pub_"+Date.now(),title:c,description:h,author:"Community Pioneer",createdAt:Date.now(),gameMode:"obby",spawnPoint:{x:this.playerPos.x,y:this.playerPos.y,z:this.playerPos.z},blocks:u,entities:this.exportScriptedEntities(),likes:1,plays:0,tags:["Obby","Community Published"]};await Ct.getInstance().publishToCloud(d),Ct.getInstance().saveUserMap(d),t.remove(),this.hud.showToast(`🎉 "${c}" published to Community Hub!`)})}openLoadMapModal(){var n,r,o;const e=document.getElementById("rbx-load-modal");e&&e.remove();const t=Ct.getInstance().getAllMaps(),i=document.createElement("div");i.id="rbx-load-modal",i.className="rbx-studio-modal-overlay",i.innerHTML=`
      <div class="rbx-studio-modal-box">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; margin: 0 0 12px 0;">📂 Load Map / Template</h3>
        <p style="font-size: 13px; color: var(--rbx-text-sub); margin: 0 0 12px 0;">Select a map to immediately load into the 3D world:</p>
        
        <div class="rbx-map-list-grid">
          ${t.map(l=>`
            <div class="rbx-map-list-item">
              <div>
                <strong style="color: #fff; font-size: 14px;">${l.title}</strong>
                <div style="font-size: 11px; color: var(--rbx-text-sub); margin-top: 2px;">
                  By ${l.author} • ${l.blocks.length} Blocks • Mode: ${l.gameMode.toUpperCase()}
                </div>
              </div>
              <button class="rbx-btn-load-single rbx-hud-pill-btn green" data-map-id="${l.id}">Load ▶</button>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; gap: 8px; margin-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px;">
          <button id="rbx-btn-flat-baseplate" class="rbx-btn-victory-edit" style="font-size: 12px;">🟩 Clear to Baseplate</button>
          <button id="rbx-btn-import-json-btn" class="rbx-btn-victory-edit" style="font-size: 12px;">📂 Import JSON</button>
          <input type="file" id="rbx-file-input" accept=".json" style="display: none;" />
          <button id="rbx-btn-close-load" class="rbx-btn-victory-edit" style="flex: 0 0 60px;">✕</button>
        </div>
      </div>
    `,this.container.appendChild(i),(n=i.querySelector("#rbx-btn-close-load"))==null||n.addEventListener("click",()=>i.remove()),i.querySelectorAll(".rbx-btn-load-single").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-map-id"),h=Ct.getInstance().getMapById(c||"");h&&(this.loadCustomMap(h),i.remove())})}),(r=i.querySelector("#rbx-btn-flat-baseplate"))==null||r.addEventListener("click",()=>{this.voxelWorld.clearWorld();for(let l=-10;l<=10;l++)for(let c=-10;c<=10;c++)this.voxelWorld.setBlock(l,0,c,"grass");this.playerPos.set(0,2,0),this.activeCheckpoint.set(0,2,0),i.remove(),this.hud.showToast("Created clean baseplate")});const s=i.querySelector("#rbx-file-input");(o=i.querySelector("#rbx-btn-import-json-btn"))==null||o.addEventListener("click",()=>s.click()),s.addEventListener("change",l=>{var h;const c=(h=l.target.files)==null?void 0:h[0];if(c){const u=new FileReader;u.onload=d=>{var m;try{const g=Ct.getInstance().importMapFromJson((m=d.target)==null?void 0:m.result);this.loadCustomMap(g),i.remove()}catch{alert("Invalid map JSON file.")}},u.readAsText(c)}})}destroy(){cancelAnimationFrame(this.animId),this.inspectorModal&&(this.inspectorModal.destroy(),this.inspectorModal=null),this.scriptingEngine.destroy(),this.clearScriptedEntities(),this.multiplayer.destroy(),this.voxelWorld.destroy(),this.dayNight.destroy(),this.voxelParticles.clear(),this.renderer.dispose(),this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);const e=document.getElementById("rbx-hud-overlay");e&&e.parentNode&&e.parentNode.removeChild(e)}getPlayerAPI(){return{name:"Pioneer",position:this.playerPos,giveCoins:e=>{const i=parseInt(localStorage.getItem("rbx_player_coins")||"0",10)+e;localStorage.setItem("rbx_player_coins",i.toString()),this.hud.showToast(`+🪙 ${e} Coins added!`),this.voxelAudio.playCoin()},teleport:(e,t,i)=>{this.playerPos.set(e,t,i),this.playerVelocityY=0,this.playerAvatar.root.position.copy(this.playerPos)},launch:e=>{this.playerVelocityY=e,this.isGrounded=!1},damage:e=>{this.playerHealth=Math.max(0,this.playerHealth-e),this.hud.setHealth(this.playerHealth,100),this.hud.showToast(`💔 Took ${e} damage! (Health: ${this.playerHealth})`),this.playerHealth<=0&&(this.playerHealth=100,this.hud.setHealth(100,100),this.respawnAtCheckpoint("☠️ Defeated by infected horde! Respawning at base..."))},heal:e=>{this.playerHealth=Math.min(100,this.playerHealth+e),this.hud.setHealth(this.playerHealth,100),this.hud.showToast(`💚 Health restored (+${e} HP)! Health: ${this.playerHealth}`)},boostSpeed:e=>{this.speedBoostTimer=e,this.playerSpeed=22}}}getWorldAPI(){return{playSound:e=>{e==="coin"?this.voxelAudio.playCoin():e==="bounce"?this.voxelAudio.playBounce():e==="victory"?this.voxelAudio.playVictory():e==="lava"?this.voxelAudio.playLavaSizzle():e==="zombie_attack"?this.voxelAudio.playZombieAttack():e==="zombie_groan"?this.voxelAudio.playZombieGroan():e==="heal"?this.voxelAudio.playHeal():e==="gunshot"?this.voxelAudio.playGunshot():this.voxelAudio.playSwing()},showToast:e=>this.hud.showToast(e),getTime:()=>this.dayNight.getTimeString(),removeEntity:e=>this.removeScriptedEntity(e),spawnParticles:(e,t)=>this.voxelParticles.spawnBreakBurst(e,t)}}handleEntityClick(e,t){const i=new De(0,0);e!==void 0&&t!==void 0&&(i.x=e/window.innerWidth*2-1,i.y=-(t/window.innerHeight)*2+1),this.raycaster.setFromCamera(i,this.camera);const s=[];this.scriptedEntities.forEach(r=>{s.push(r.mesh)});const n=this.raycaster.intersectObjects(s,!0);if(n.length>0&&n[0].distance<18){let r=n[0].object,o=null;for(;r&&!o;){if(r.userData&&r.userData.entityId){o=r.userData.entityId;break}r=r.parent}if(o){const l=this.scriptedEntities.get(o);if(l)return this.isStudioMode?this.openScriptInspector(o):this.scriptingEngine.handleInteraction(l.entity,l.mesh,this.getPlayerAPI(),this.getWorldAPI()),!0}}return!1}spawnScriptedNPC(e){const t=new D(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),i=e!=null&&e.position?new D(e.position.x,e.position.y,e.position.z):this.playerPos.clone().add(t.multiplyScalar(4));if(!(e!=null&&e.position)){const c=this.getGroundY(i.x,i.z);i.y=c}const s=(e==null?void 0:e.id)||"npc_"+Date.now()+"_"+Math.floor(Math.random()*1e3),n=(e==null?void 0:e.avatarConfig)||{headColor:"#facc15",torsoColor:"#0284c7",leftArmColor:"#facc15",rightArmColor:"#facc15",leftLegColor:"#1e293b",rightLegColor:"#1e293b",equippedHat:"top_hat",equippedShirt:"genesis_hoodie",equippedPants:"blue_jeans",equippedFace:"chill",equippedGear:"none"},r=(e==null?void 0:e.name)||"Helper Pioneer",o=new kn(n,r);o.root.position.copy(i),this.scene.add(o.root);const l={id:s,name:r,type:"npc",position:{x:i.x,y:i.y,z:i.z},rotationY:0,avatarConfig:n,script:(e==null?void 0:e.script)||{behavior:"dialogue",dialogueText:`Hello! I am ${r}. Welcome to Genesis Studio!`}};return o.root.userData={entityId:s},o.torsoMesh.userData={entityId:s},this.scriptedEntities.set(s,{entity:l,mesh:o.root,avatar:o}),this.hud.showToast(`✨ Created Person: ${r}`),this.voxelAudio.playBlockPlace(),e||this.openScriptInspector(s),l}spawnScriptedItem(e="portal",t){const i=new D(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),s=t!=null&&t.position?new D(t.position.x,t.position.y,t.position.z):this.playerPos.clone().add(i.multiplyScalar(3.5));if(!(t!=null&&t.position)){const h=this.getGroundY(s.x,s.z);s.y=h+.5}const n=(t==null?void 0:t.id)||"item_"+Date.now()+"_"+Math.floor(Math.random()*1e3);let r,o="Warp Portal";if(e==="portal"){o="Warp Portal";const h=new dn(1.4,.25,16,32),u=new ke({color:11032055});r=new se(h,u),r.rotation.x=Math.PI/2}else if(e==="chest"){o="Treasure Chest";const h=new Pe(1.4,1.2,1.2),u=new ke({color:14251782});r=new se(h,u)}else if(e==="bounce_pad"){o="Super Launch Pad";const h=new Qe(1.8,1.8,.3,24),u=new ke({color:2278750});r=new se(h,u)}else if(e==="crystal"){o="Power Crystal";const h=new cr(1.2),u=new ke({color:3718648});r=new se(h,u)}else{o="Genesis Coin Prop";const h=new Qe(1,1,.2,24),u=new ke({color:16436245});r=new se(h,u)}const l=(t==null?void 0:t.name)||o;r.position.copy(s),r.userData={entityId:n},this.scene.add(r);const c={id:n,name:l,type:"item",itemType:e,position:{x:s.x,y:s.y,z:s.z},script:(t==null?void 0:t.script)||{behavior:e==="bounce_pad"?"bounce":e==="portal"?"teleport":"coin_reward",coinAmount:50,teleportTarget:{x:0,y:15,z:20}}};return this.scriptedEntities.set(n,{entity:c,mesh:r,avatar:null}),this.hud.showToast(`✨ Created Item: ${l}`),this.voxelAudio.playBlockPlace(),t||this.openScriptInspector(n),c}openScriptInspector(e){var i;this.inspectorModal&&(this.inspectorModal.destroy(),this.inspectorModal=null);let t;if(e&&(t=(i=this.scriptedEntities.get(e))==null?void 0:i.entity),!t){let s=1/0;this.scriptedEntities.forEach(n=>{const r=this.playerPos.distanceTo(n.mesh.position);r<s&&(s=r,t=n.entity)})}t||(t=this.spawnScriptedNPC()),this.inspectorModal=new yg(this.container,{entity:t,onSave:s=>{this.updateScriptedEntity(s),this.hud.showToast(`💾 Saved properties & scripts for ${s.name}`)},onDelete:s=>{this.removeScriptedEntity(s),this.hud.showToast("🗑️ Deleted entity")},onClose:()=>{this.inspectorModal=null},onTestScript:s=>{const n=this.scriptedEntities.get(s.id);n&&this.scriptingEngine.handleInteraction(s,n.mesh,this.getPlayerAPI(),this.getWorldAPI())}})}updateScriptedEntity(e){const t=this.scriptedEntities.get(e.id);t&&(t.entity=e,t.avatar&&e.avatarConfig&&t.avatar.applyCustomization(e.avatarConfig))}removeScriptedEntity(e){const t=this.scriptedEntities.get(e);t&&(this.scene.remove(t.mesh),this.scriptedEntities.delete(e))}clearScriptedEntities(){this.scriptedEntities.forEach(e=>{this.scene.remove(e.mesh)}),this.scriptedEntities.clear()}exportScriptedEntities(){const e=[];return this.scriptedEntities.forEach(t=>{e.push(t.entity)}),e}}class Mc{static getRenderer(){return this.sharedRenderer||(this.sharedRenderer=new po({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.sharedRenderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.sharedRenderer.shadowMap.enabled=!0),this.sharedRenderer}static createItem3DGroup(e){const t=new Rt;switch(e){case"synthetic_skin":{const i=new Pe(1.8,1.8,.9),s=document.createElement("canvas");s.width=256,s.height=256;const n=s.getContext("2d");n.fillStyle="#0f172a",n.fillRect(0,0,256,256),n.fillStyle="#1e293b",n.strokeStyle="#38bdf8",n.lineWidth=4,n.strokeRect(20,20,100,100),n.strokeRect(136,20,100,100),n.strokeRect(30,140,196,90);const r=n.createRadialGradient(128,90,5,128,90,45);r.addColorStop(0,"#ffffff"),r.addColorStop(.3,"#38bdf8"),r.addColorStop(.8,"#0284c7"),r.addColorStop(1,"rgba(2, 132, 199, 0)"),n.fillStyle=r,n.beginPath(),n.arc(128,90,45,0,Math.PI*2),n.fill(),n.strokeStyle="#06b6d4",n.lineWidth=5,n.beginPath(),n.arc(128,90,22,0,Math.PI*2),n.stroke();const o=new yi(s),l=new nt({map:o,roughness:.3,metalness:.7}),c=new nt({color:1976635,roughness:.4,metalness:.6}),h=new se(i,[c,c,c,c,l,c]);t.add(h);const u=new Pe(.5,.3,1),d=new nt({color:3718648,roughness:.2,metalness:.8}),m=new se(u,d);m.position.set(-1,.8,0);const g=m.clone();g.position.x=1,t.add(m,g);break}case"starweaver_robes":{const i=new Pe(1.8,1.8,.9),s=document.createElement("canvas");s.width=256,s.height=256;const n=s.getContext("2d"),r=n.createLinearGradient(0,0,256,256);r.addColorStop(0,"#1e1b4b"),r.addColorStop(.5,"#312e81"),r.addColorStop(1,"#4c1d95"),n.fillStyle=r,n.fillRect(0,0,256,256),n.strokeStyle="#facc15",n.lineWidth=6,n.strokeRect(16,16,224,224);const o=[[50,60],[90,100],[150,80],[200,130],[80,180],[170,200],[128,140]];n.strokeStyle="rgba(250, 204, 21, 0.6)",n.lineWidth=2,n.beginPath();for(let d=0;d<o.length-1;d++)n.moveTo(o[d][0],o[d][1]),n.lineTo(o[d+1][0],o[d+1][1]);n.stroke(),n.fillStyle="#ffffff",o.forEach(([d,m])=>{n.beginPath(),n.arc(d,m,4,0,Math.PI*2),n.fill()});const l=new yi(s),c=new nt({map:l,roughness:.5}),h=new nt({color:3223169,roughness:.5}),u=new se(i,[h,h,h,h,c,h]);t.add(u);break}case"cyberpunk_visor":{const i=new se(new Pe(1.2,1.2,1.2),new Ne({color:1976635})),s=new se(new Pe(1.35,.35,.45),new nt({color:440020,emissive:440020,emissiveIntensity:1,roughness:.1}));s.position.set(0,0,.55);const n=new se(new Pe(1.38,.18,1.38),new Ne({color:988970}));t.add(i,s,n);break}case"supporter_halo":case"halo":{const i=new se(new dn(1.1,.16,16,40),new nt({color:16436245,emissive:16436245,emissiveIntensity:.7,metalness:.8,roughness:.2}));i.rotation.x=Math.PI/2.3,t.add(i);const s=new se(new us(.25,16,16),new ke({color:16777215}));t.add(s);break}case"eagle_eye":{const i=new se(new Pe(1.2,1.2,1.2),new Ne({color:1976635})),s=new se(new Pe(1.3,.25,.3),new Ne({color:7877903}));s.position.set(0,.05,.55);const n=new se(new Qe(.22,.22,.18,16),new nt({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.7}));n.rotation.x=Math.PI/2,n.position.set(-.35,.05,.7);const r=n.clone();r.position.x=.35,t.add(i,s,n,r);break}case"viking_helmet":{const i=new se(new Pe(1.2,1.2,1.2),new Ne({color:1976635})),s=new se(new Qe(.75,.75,.5,16),new nt({color:10265519,metalness:.8,roughness:.3}));s.position.y=.75;const n=new se(new cn(.2,.75,12),new Ne({color:16707722}));n.position.set(-.85,.95,0),n.rotation.z=Math.PI/4;const r=n.clone();r.position.set(.85,.95,0),r.rotation.z=-Math.PI/4,t.add(i,s,n,r);break}case"classic_fedora":{const i=new se(new Pe(1.2,1.2,1.2),new Ne({color:1976635})),s=new se(new Qe(1.3,1.3,.1,24),new Ne({color:2042167}));s.position.y=.65;const n=new se(new Qe(.75,.85,.7,24),new Ne({color:1120295}));n.position.y=1;const r=new se(new Qe(.86,.86,.15,24),new Ne({color:14251782}));r.position.y=.75,t.add(i,s,n,r);break}case"sword":{const i=new se(new Qe(.08,.08,.7,12),new Ne({color:7877903})),s=new se(new Pe(.7,.12,.25),new nt({color:16096779,metalness:.9,roughness:.2}));s.position.y=.35;const n=new se(new Pe(.28,2.2,.08),new nt({color:3718648,emissive:165063,emissiveIntensity:.5,metalness:.8,roughness:.2}));n.position.y=1.45,t.add(i,s,n),t.rotation.z=-Math.PI/4;break}case"speed_coil":{const i=new se(new dn(.7,.16,16,32),new nt({color:41727,emissive:35071,emissiveIntensity:.7,metalness:.8,roughness:.2})),s=new se(new Qe(.1,.1,1.2,12),new nt({color:1976635,metalness:.6}));t.add(s,i),t.rotation.z=Math.PI/6;break}case"wings":{const i=new nt({color:3718648,emissive:959977,emissiveIntensity:.6,metalness:.5,roughness:.3}),s=new se(new Pe(1.6,.7,.08),i);s.position.set(-.9,0,0),s.rotation.z=Math.PI/6;const n=s.clone();n.position.x=.9,n.rotation.z=-Math.PI/6;const r=new se(new Pe(.4,.4,.2),new nt({color:988970,metalness:.8}));t.add(s,n,r);break}case"axe":{const i=new se(new Qe(.08,.08,1.8,12),new Ne({color:9584654})),s=new se(new Pe(.65,.6,.14),new nt({color:9741240,metalness:.85,roughness:.2}));s.position.set(.3,.65,0),t.add(i,s),t.rotation.z=-Math.PI/4;break}case"pickaxe":{const i=new se(new Qe(.08,.08,1.8,12),new Ne({color:7877903})),s=new se(new Pe(1.4,.18,.16),new nt({color:3718648,emissive:165063,emissiveIntensity:.4,metalness:.8}));s.position.set(0,.75,0),t.add(i,s),t.rotation.z=-Math.PI/4;break}default:{const i=new se(new Pe(1,1,1),new nt({color:3718648}));t.add(i)}}return t}static renderItemToCanvas(e,t){var w,S,A;const i=e.clientWidth||160,s=e.clientHeight||140,n=this.getRenderer();n.setSize(i,s,!1);const r=new ro,o=new Yt(40,i/s,.1,50);o.position.set(0,.6,3.8);const l=new fo(16777215,.9);r.add(l);const c=new dr(16777215,1.2);c.position.set(4,6,5),r.add(c);const h=new dr(3718648,.8);h.position.set(-4,-2,-3),r.add(h);const u=new se(new Qe(1.4,1.5,.15,24),new nt({color:988970,roughness:.8}));u.position.y=-1.1,r.add(u);const d=this.createItem3DGroup(t);r.add(d),n.render(r,o);const m=e.getContext("2d");m&&(e.width=i*(window.devicePixelRatio||1),e.height=s*(window.devicePixelRatio||1),m.drawImage(n.domElement,0,0,e.width,e.height));let g=0,v=0,f=0,p=0,x=!1,T=0;const _=()=>{x&&(g+=.015),v+=(g-v)*.1,p+=(f-p)*.1,d.rotation.y=v,d.rotation.x=p,n.render(r,o),m&&(m.clearRect(0,0,e.width,e.height),m.drawImage(n.domElement,0,0,e.width,e.height)),(x||Math.abs(g-v)>.001||Math.abs(f-p)>.001)&&(T=requestAnimationFrame(_))};(w=e.parentElement)==null||w.addEventListener("mouseenter",()=>{x=!0,cancelAnimationFrame(T),T=requestAnimationFrame(_)}),(S=e.parentElement)==null||S.addEventListener("mousemove",b=>{const E=e.getBoundingClientRect(),P=(b.clientX-E.left)/E.width*2-1;f=-((b.clientY-E.top)/E.height*2-1)*.4,g+=P*.05}),(A=e.parentElement)==null||A.addEventListener("mouseleave",()=>{x=!1,f=0,g=0})}static renderAllIn(e){e.querySelectorAll(".rbx-market-3d-canvas").forEach(i=>{const s=i.getAttribute("data-item-id");s&&this.renderItemToCanvas(i,s)})}}R(Mc,"sharedRenderer",null);const wc="genesis_stripe_config",Tc=[{id:"coins_400",name:"Pouch of Coins",coins:400,priceUsd:"£4.99",priceInCents:499,icon:"💰",description:"Perfect starter pack to acquire custom headgear or classic outfits.",paymentLink:"https://buy.stripe.com/8x2bJ2ekGeEqbkI0mQ0Ba00"},{id:"coins_1000",name:"Chest of Coins",coins:1e3,bonusText:"+150 Bonus",priceUsd:"£9.99",priceInCents:999,icon:"🪙",description:"Popular choice! Unlock elite 3D gear and rare character custom parts.",paymentLink:"https://buy.stripe.com/6oUcN6ccy53QfAYb1u0Ba01"},{id:"coins_2500",name:"Vault of Coins",coins:2500,bonusText:"+500 Bonus",priceUsd:"£19.99",priceInCents:1999,icon:"💎",description:"Substantial treasure chest for avid world builders and explorers.",paymentLink:"https://buy.stripe.com/aFacN62BY8g2coMedG0Ba02"},{id:"coins_6000",name:"Treasury of Genesis",coins:6e3,bonusText:"BEST VALUE",priceUsd:"£44.99",priceInCents:4499,icon:"👑",description:"The ultimate royal treasury. Unlock all legendary gear and future cosmetics.",paymentLink:"https://buy.stripe.com/dRm9AU90mdAmagE8Tm0Ba03"}];function hr(){try{const a=localStorage.getItem(wc);if(a){const e=JSON.parse(a);return{publishableKey:e.publishableKey||"",paymentMode:e.paymentMode||"payment_link",customLinks:e.customLinks||{}}}}catch(a){console.warn("Failed to parse Stripe config from localStorage:",a)}return{publishableKey:"",paymentMode:"payment_link",customLinks:{}}}function kl(a){const e=hr(),t={...e,...a,customLinks:{...e.customLinks,...a.customLinks||{}}};localStorage.setItem(wc,JSON.stringify(t))}function Nn(){const a=hr();return Tc.map(e=>{const t=a.customLinks[e.id],i=t&&t.trim().startsWith("http")?t.trim():null;return{...e,paymentLink:i||e.paymentLink||""}})}const tn=class tn{constructor(){R(this,"isProcessingCheckout",!1);R(this,"onCoinsAddedCallbacks",[])}static getInstance(){return tn.instance||(tn.instance=new tn),tn.instance}init(){const e=new URLSearchParams(window.location.search),t=e.get("payment_status"),i=e.get("session_id"),s=e.get("pack_id"),n=e.get("coins");if(t==="success"){let r=n?parseInt(n,10):0,o="Genesis Coin Pack";if(s){const c=Tc.find(h=>h.id===s);c&&(o=c.name,r||(r=c.coins))}r||(r=400);const l=`stripe_processed_${i||"generic_"+Date.now()}`;i&&localStorage.getItem(l)?console.log("Stripe session already processed:",i):(i&&localStorage.setItem(l,"true"),this.fulfillPurchase(r,o)),this.clearUrlParameters()}else t==="cancelled"&&(this.showToast("Payment was cancelled. No charges were made to your account."),this.clearUrlParameters())}onCoinsAdded(e){return this.onCoinsAddedCallbacks.push(e),()=>{this.onCoinsAddedCallbacks=this.onCoinsAddedCallbacks.filter(t=>t!==e)}}async startCheckout(e){if(this.isProcessingCheckout)return;this.isProcessingCheckout=!0;const t=na.getInstance().getProfile(),i=hr(),s=window.location.origin+window.location.pathname,n=i.customLinks[e.id],r=n&&n.trim().startsWith("http")?n.trim():e.paymentLink;if(r&&r.trim().startsWith("http")){this.isProcessingCheckout=!1,window.location.href=r.trim();return}try{this.showToast(`Connecting to Stripe for ${e.name}...`);const{data:o,error:l}=await rn.functions.invoke("create-checkout-session",{body:{packId:e.id,userId:(t==null?void 0:t.id)||"anonymous_player",userEmail:(t==null?void 0:t.email)||void 0,returnUrl:s}});if(!l&&(o!=null&&o.url)){window.location.href=o.url;return}}catch(o){console.warn("Supabase Edge Function not reachable or not yet deployed:",o)}this.isProcessingCheckout=!1,alert(`Stripe payment link is being connected for ${e.name}. Please check back in a moment!`)}fulfillPurchase(e,t){let i=0;const s=localStorage.getItem("rbx_player_coins");s&&(i=parseInt(s,10)||0);const n=i+e;localStorage.setItem("rbx_player_coins",n.toString());const r=na.getInstance();r.isAuthenticated()&&r.addCoins(e),this.onCoinsAddedCallbacks.forEach(o=>o(e,n)),this.showCelebrationModal(t,e,n)}showCelebrationModal(e,t,i){const s=document.getElementById("genesis-stripe-celebration");s&&s.remove();const n=document.createElement("div");n.id="genesis-stripe-celebration",n.className="stripe-modal-overlay",n.innerHTML=`
      <div class="stripe-celebration-card glass-panel">
        <div class="stripe-celebration-burst">✨ 🪙 ✨</div>
        <div class="stripe-badge-verified">✓ Verified Stripe Payment</div>
        <h2 class="stripe-celebration-title">Treasury Restocked!</h2>
        <p class="stripe-celebration-subtitle">
          Thank you for supporting <strong>Genesis</strong>! Your purchase of <em>${e}</em> was confirmed.
        </p>

        <div class="stripe-reward-box">
          <div class="stripe-reward-amount">+🪙 ${t.toLocaleString()}</div>
          <div class="stripe-reward-label">Coins Added to Your Wallet</div>
        </div>

        <div class="stripe-total-balance">
          Current Total Balance: <strong>🪙 ${i.toLocaleString()} Coins</strong>
        </div>

        <button class="stripe-btn-claim" id="stripe-claim-btn">
          Enter Atelier & Spend Coins ➔
        </button>
      </div>
    `,document.body.appendChild(n);try{const o=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99,1046.5].forEach((c,h)=>{const u=o.createOscillator(),d=o.createGain();u.type="triangle",u.frequency.setValueAtTime(c,o.currentTime+h*.1),d.gain.setValueAtTime(.3,o.currentTime+h*.1),d.gain.exponentialRampToValueAtTime(.001,o.currentTime+h*.1+.35),u.connect(d),d.connect(o.destination),u.start(o.currentTime+h*.1),u.stop(o.currentTime+h*.1+.4)})}catch{}const r=n.querySelector("#stripe-claim-btn");r==null||r.addEventListener("click",()=>{n.remove()})}openStripeModal(e){const t=document.getElementById("genesis-stripe-settings-modal");t&&t.remove();const i=Nn(),s=hr(),n=e||i[1],r=document.createElement("div");r.id="genesis-stripe-settings-modal",r.className="stripe-modal-overlay",r.innerHTML=`
      <div class="stripe-setup-card glass-panel">
        <button class="stripe-modal-close" id="stripe-close-btn">&times;</button>
        
        <div class="stripe-modal-header">
          <div class="stripe-logo-row">
            <span class="stripe-logo-text">stripe</span>
            <span class="stripe-checkout-tag">SECURE CHECKOUT</span>
          </div>
          <h2 class="stripe-modal-title">Purchase ${n.name}</h2>
          <p class="stripe-modal-desc">
            Directly support Genesis development and unlock exclusive 3D outfits and gear.
          </p>
        </div>

        <div class="stripe-summary-box">
          <div class="stripe-pack-preview">
            <span class="stripe-pack-icon">${n.icon}</span>
            <div>
              <div class="stripe-pack-name">${n.name}</div>
              <div class="stripe-pack-amount">🪙 ${n.coins.toLocaleString()} Genesis Coins</div>
            </div>
          </div>
          <div class="stripe-pack-price">${n.priceUsd}</div>
        </div>

        <!-- Stripe Direct Connect Form -->
        <div class="stripe-connect-section">
          <div class="stripe-section-label">⚙️ Stripe Payment Link Connection</div>
          <p class="stripe-section-hint">
            Paste your Stripe Payment Link for this pack below. (Create in <a href="https://dashboard.stripe.com/payment-links" target="_blank" rel="noopener">Stripe Dashboard ↗</a>).
          </p>
          <div class="stripe-input-group">
            <input 
              type="url" 
              id="stripe-link-input" 
              class="stripe-text-input" 
              placeholder="https://buy.stripe.com/..." 
              value="${s.customLinks[n.id]||""}"
            />
            <button class="stripe-btn-save" id="stripe-save-link-btn">Save Link</button>
          </div>
        </div>

        <div class="stripe-modal-actions">
          <button class="stripe-btn-simulate" id="stripe-simulate-btn" title="Simulates successful Stripe redirect for testing">
            ⚡ Test Payment Simulation (${n.priceUsd})
          </button>
          
          <button class="stripe-btn-checkout" id="stripe-direct-checkout-btn">
            Proceed to Stripe Checkout ➔
          </button>
        </div>

        <div class="stripe-modal-footer">
          <span>🔒 256-Bit SSL Encrypted</span>
          <span>•</span>
          <span>Apple Pay & Google Pay Supported</span>
          <span>•</span>
          <a href="https://stripe.com" target="_blank" rel="noopener" class="stripe-footer-link">Powered by Stripe</a>
        </div>
      </div>
    `,document.body.appendChild(r);const o=r.querySelector("#stripe-close-btn");o==null||o.addEventListener("click",()=>r.remove()),r.addEventListener("click",d=>{d.target===r&&r.remove()});const l=r.querySelector("#stripe-link-input"),c=r.querySelector("#stripe-save-link-btn");c==null||c.addEventListener("click",()=>{const d=l.value.trim(),m={...s.customLinks,[n.id]:d};kl({customLinks:m}),this.showToast(`✓ Saved Stripe Payment Link for ${n.name}`)});const h=r.querySelector("#stripe-direct-checkout-btn");h==null||h.addEventListener("click",()=>{const d=l.value.trim();d.startsWith("http")?(kl({customLinks:{...s.customLinks,[n.id]:d}}),window.location.href=d):alert('Please enter a valid Stripe Payment Link (e.g., https://buy.stripe.com/...) or click "Test Payment Simulation" to test the in-game flow!')});const u=r.querySelector("#stripe-simulate-btn");u==null||u.addEventListener("click",()=>{r.remove(),this.fulfillPurchase(n.coins,n.name)})}clearUrlParameters(){const e=window.location.origin+window.location.pathname;window.history.replaceState({},document.title,e)}showToast(e){const t=document.createElement("div");t.className="stripe-toast-notification",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),4e3)}};R(tn,"instance",null);let ns=tn;Nn();class bg{constructor(e="app"){R(this,"container");R(this,"currentTab","discover");R(this,"playerData");R(this,"avatarEditor",null);R(this,"active3DGame",null);R(this,"selectedBodyPart","torsoColor");R(this,"experiences",[{id:"genesis-3d",title:"Genesis: New Dawn (3D World)",tagline:"Flagship 3D Autonomous AI Civilization",description:"Explore the 3D living primeval forest. Guide pioneers Adam and Eve, chop timber, gather stone, construct dwellings around the campfire, and challenge the Ancient Monolith Trial.",thumbnail:"/Genesis-New-Dawn/background.jpg",category:"3D Simulation"},{id:"abyss",title:"Abyss: Deep Evolution",tagline:"Deep-Sea Ecosystem Simulation",description:"An autonomous deep-sea trench where bioluminescent aquatic creatures hunt, reproduce, and evolve through genetic mutation and natural selection.",thumbnail:"/Genesis-New-Dawn/abyss-banner.jpg",category:"Evolution Simulation",url:"/Genesis-New-Dawn/abyss.html"},{id:"merchant",title:"The Number Merchant",tagline:"Living Village Trade & Economy",description:"Run your merchant shop in a living oasis town. Balance fluctuating market supply and demand, trade potions and scrolls, and serve travelers.",thumbnail:"/Genesis-New-Dawn/merchant-banner.jpg",category:"Economy Simulation",url:"/Genesis-New-Dawn/merchant.html"},{id:"lexicon",title:"Lexicon Island",tagline:"Where Words Sculpt Reality",description:"An AI linguistic world simulation where sentences directly reshape terrain, rivers, weather, and flora across a living procedural archipelago.",thumbnail:"/Genesis-New-Dawn/lexicon_island_bg.jpg",category:"Language AI",url:"/Genesis-New-Dawn/lexicon.html"},{id:"genesis-2d",title:"Genesis: Classic 2D Simulation",tagline:"Original Procedural Sandbox Engine",description:"The real-time top-down civilization engine where founders Adam & Eve discover fire, domesticate wildlife, forge bronze tools, and build dynasties.",thumbnail:"/Genesis-New-Dawn/gameplay-preview.jpg",category:"Civilization AI",url:"classic-2d"},{id:"studio",title:"Genesis Studios Hub",tagline:"Creator & Developer Portal",description:"The official platform headquarters. Inspect architecture, explore autonomous world contracts, and access creator tools.",thumbnail:"/Genesis-New-Dawn/genesis-logo.jpg",category:"Developer Hub",url:"/Genesis-New-Dawn/studio.html"}]);R(this,"marketplaceItems",[{id:"synthetic_skin",name:"Synthetic Pioneer Chassis",type:"shirt",price:350,description:"Advanced biomechanical plating with glowing arc reactor designed for frontier exploration.",icon:"🦾"},{id:"supporter_halo",name:"Celestial Watcher Halo",type:"hat",price:400,description:"Radiant golden halo forged from pure solar starlight.",icon:"😇"},{id:"starweaver_robes",name:"Starweaver Silk Robes",type:"shirt",price:300,description:"Cosmic silk woven with stellar constellations and golden hem trim.",icon:"✨"},{id:"cyberpunk_visor",name:"Neural Cybernetic Visor",type:"hat",price:220,description:"Head-mounted neon digital HUD projecting real-time spatial diagnostics.",icon:"🥽"},{id:"eagle_eye",name:"Eagle Eye Recon Goggles",type:"hat",price:260,description:"Precision brass scouting goggles with dual amber glowing lenses.",icon:"🔍"},{id:"viking_helmet",name:"Pioneer Horned Helm",type:"hat",price:280,description:"Forged northern steel helmet with dual ceremonial ivory horns.",icon:"🪖"},{id:"classic_fedora",name:"Noir Pioneer Fedora",type:"hat",price:190,description:"Classic dark wool felt fedora trimmed with rich amber ribbon.",icon:"🎩"},{id:"sword",name:"Genesis Skyblade",type:"gear",price:320,description:"Crystalline blade honed from fallen meteoric shards.",icon:"⚔️"},{id:"speed_coil",name:"Cobalt Speed Coil",type:"gear",price:200,description:"Supercharged gravitational coil granting enhanced sprint speed.",icon:"⚡"},{id:"wings",name:"Aetheric Wings",type:"gear",price:550,description:"Holographic cybernetic wings that flare with azure energy.",icon:"🪽"},{id:"pickaxe",name:"Genesis Azure Pickaxe",type:"gear",price:240,description:"Supercharged gemstone mining pickaxe with tempered titanium tips.",icon:"⛏️"},{id:"axe",name:"Woodcutter Hatchet",type:"gear",price:180,description:"Polished iron forestry axe balanced for felling ancient timber.",icon:"🪓"}]);const t=document.getElementById(e);if(!t)throw new Error(`Mount element #${e} not found`);this.container=t,document.body.classList.add("rbx-mode"),this.playerData=this.loadPlayerData();const i=ns.getInstance();i.init(),i.onCoinsAdded((s,n)=>{if(this.playerData.coins=n,this.savePlayerData(),this.updateCoinDisplay(),this.currentTab==="marketplace"){const r=this.container.querySelector("#rbx-view-container");r&&this.renderMarketplaceView(r)}}),this.render()}loadPlayerData(){let e={...Sc},t=0,i=[];try{const n=localStorage.getItem("rbx_avatar_customization");n&&(e=JSON.parse(n));const r=localStorage.getItem("rbx_player_coins");r!==null&&(t=parseInt(r,10)||0);const o=localStorage.getItem("rbx_player_inventory");o&&(i=JSON.parse(o))}catch{}const s=na.getInstance().getProfile();return s&&typeof s.coins=="number"&&s.coins>t&&(t=s.coins),{username:"Pioneer",coins:t,avatar:e,inventory:i}}savePlayerData(){localStorage.setItem("rbx_avatar_customization",JSON.stringify(this.playerData.avatar)),localStorage.setItem("rbx_player_coins",this.playerData.coins.toString()),localStorage.setItem("rbx_player_inventory",JSON.stringify(this.playerData.inventory))}addCoins(e){this.playerData.coins+=e,this.savePlayerData(),this.updateCoinDisplay()}updateCoinDisplay(){const e=this.container.querySelector("#rbx-top-coin-count");e&&(e.textContent=this.playerData.coins.toLocaleString());const t=this.container.querySelector("#rbx-shop-balance-count");t&&(t.textContent=this.playerData.coins.toLocaleString())}showToast(e){const t=document.getElementById("rbx-toast");t&&t.remove();const i=document.createElement("div");i.id="rbx-toast",i.style.cssText=`
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      border: 1px solid #38bdf8;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6), 0 0 15px rgba(56,189,248,0.3);
      color: #fff;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 10px;
    `,i.innerHTML=e,document.body.appendChild(i),setTimeout(()=>i.remove(),4e3)}openBuyCoinsModal(e){var s;const t=document.getElementById("rbx-coin-modal");t&&t.remove();const i=document.createElement("div");i.id="rbx-coin-modal",i.className="rbx-coin-modal-overlay",i.innerHTML=`
      <div class="rbx-coin-modal-box">
        <button class="rbx-coin-modal-close" id="rbx-close-modal-btn">✕</button>
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="font-size: 40px; margin-bottom: 6px;">🪙</div>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800; color: #fff; margin: 0 0 6px;">
            Buy Genesis Coins
          </h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 0;">
            ${e?`You need <strong>🪙 ${e.toLocaleString()} more coins</strong> to purchase this item.`:"Purchase Genesis Coins to unlock exclusive 3D gear, hats, and cybernetic chassis."}
          </p>
          <div style="margin-top: 10px; display: inline-block; background: rgba(0,0,0,0.5); padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(250,204,21,0.3); color: #fde047; font-size: 13px;">
            Current Balance: <strong>🪙 ${this.playerData.coins.toLocaleString()}</strong>
          </div>
        </div>

        <div class="rbx-coin-packs-row">
          ${Nn().map(n=>`
            <div class="rbx-coin-pack-card" data-pack-id="${n.id}">
              ${n.bonusText?`<span class="rbx-pack-bonus">${n.bonusText}</span>`:""}
              <div class="rbx-pack-icon">${n.icon}</div>
              <div class="rbx-pack-coins">🪙 ${n.coins.toLocaleString()}</div>
              <div class="rbx-pack-name">${n.name}</div>
              <button class="rbx-btn-buy-coins" data-pack-id="${n.id}" data-pack-coins="${n.coins}" data-pack-name="${n.name}">
                Pay with Stripe (${n.priceUsd})
              </button>
            </div>
          `).join("")}
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 11px; color: var(--rbx-text-sub);">
          <span>🔒 Secured by <strong>Stripe</strong></span>
          <span>•</span>
          <span>Apple Pay & Google Pay Supported</span>
          <span>•</span>
          <span>Instant Digital Delivery</span>
        </div>
      </div>
    `,document.body.appendChild(i),(s=i.querySelector("#rbx-close-modal-btn"))==null||s.addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll(".rbx-btn-buy-coins").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-pack-id"),l=Nn().find(c=>c.id===r);l&&(i.remove(),ns.getInstance().startCheckout(l))})})}render(){this.container.innerHTML=`
      <!-- TOP NAVIGATION BAR -->
      <nav class="rbx-topbar">
        <div class="rbx-topbar-left">
          <button id="rbx-sidebar-toggle" class="rbx-hamburger" title="Toggle Sidebar">
            ☰
          </button>
          <div class="rbx-logo-brand" id="rbx-nav-logo">
            <div class="rbx-tilted-cube">✦</div>
            <span class="rbx-brand-title">Genesis<span>Worlds</span></span>
          </div>
          <div class="rbx-nav-tabs">
            <button class="rbx-nav-btn ${this.currentTab==="discover"?"active":""}" data-tab="discover">
              🌌 Worlds
            </button>
            <button class="rbx-nav-btn ${this.currentTab==="create"?"active":""}" data-tab="create">
              🛠️ Studio & Obbies
            </button>
            <button class="rbx-nav-btn ${this.currentTab==="avatar"?"active":""}" data-tab="avatar">
              👤 Avatar Customizer
            </button>
            <button class="rbx-nav-btn ${this.currentTab==="marketplace"?"active":""}" data-tab="marketplace">
              🏛️ Shop
            </button>
          </div>
        </div>

        <div class="rbx-search-box">
          <span class="rbx-search-icon">🔍</span>
          <input type="text" id="rbx-global-search" class="rbx-search-input" aria-label="Search worlds" />
        </div>

        <div class="rbx-topbar-right">
          <button class="rbx-coin-pill" id="rbx-top-coin-btn" title="Genesis Coins - Click to buy more">
            <span class="rbx-coin-icon">🪙</span>
            <span id="rbx-top-coin-count">${this.playerData.coins.toLocaleString()}</span>
            <span style="color: #22c55e; font-weight: 900; margin-left: 2px;">+</span>
          </button>
          <div class="rbx-avatar-header-badge" id="rbx-profile-header-btn">
            <div class="rbx-mini-avatar-head" style="background-color: ${this.playerData.avatar.headColor};">
              ✦
            </div>
            <span class="rbx-header-username">${this.playerData.username}</span>
          </div>
        </div>
      </nav>

      <!-- APP LAYOUT (SIDEBAR + MAIN CONTENT) -->
      <div class="rbx-app-layout">
        <!-- SIDEBAR -->
        <aside class="rbx-sidebar" id="rbx-sidebar">
          <button class="rbx-sidebar-btn ${this.currentTab==="discover"?"active":""}" data-tab="discover">
            <span class="rbx-sidebar-icon">🌌</span>
            <span>All Worlds</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab==="create"?"active":""}" data-tab="create">
            <span class="rbx-sidebar-icon">🛠️</span>
            <span>Studio & Obbies</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab==="avatar"?"active":""}" data-tab="avatar">
            <span class="rbx-sidebar-icon">👤</span>
            <span>Avatar</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab==="marketplace"?"active":""}" data-tab="marketplace">
            <span class="rbx-sidebar-icon">🏛️</span>
            <span>Shop</span>
          </button>

          <div class="rbx-sidebar-divider"></div>

          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/abyss.html'">
            <span class="rbx-sidebar-icon">🌊</span>
            <span>Abyss</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/merchant.html'">
            <span class="rbx-sidebar-icon">🪙</span>
            <span>Merchant</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/lexicon.html'">
            <span class="rbx-sidebar-icon">🏝️</span>
            <span>Lexicon</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/studio.html'">
            <span class="rbx-sidebar-icon">🛠️</span>
            <span>Studio</span>
          </button>
        </aside>

        <!-- MAIN VIEW CONTAINER -->
        <main class="rbx-main-content" id="rbx-view-container">
          <!-- Populated dynamically based on currentTab -->
        </main>
      </div>

      <!-- IN-GAME 3D CONTAINER -->
      <div id="rbx-game-container"></div>
    `,this.bindGlobalEvents(),this.renderCurrentView()}bindGlobalEvents(){var i,s,n;this.container.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-tab");o&&this.switchTab(o)})});const e=this.container.querySelector("#rbx-sidebar");(i=this.container.querySelector("#rbx-sidebar-toggle"))==null||i.addEventListener("click",()=>{e==null||e.classList.toggle("collapsed")}),(s=this.container.querySelector("#rbx-nav-logo"))==null||s.addEventListener("click",()=>{this.switchTab("discover")});const t=this.container.querySelector("#rbx-global-search");t==null||t.addEventListener("input",()=>{const r=t.value.toLowerCase().trim();this.container.querySelectorAll(".rbx-game-card").forEach(l=>{var u,d,m,g;const c=((d=(u=l.querySelector(".rbx-card-title"))==null?void 0:u.textContent)==null?void 0:d.toLowerCase())||"",h=((g=(m=l.querySelector(".rbx-card-desc"))==null?void 0:m.textContent)==null?void 0:g.toLowerCase())||"";c.includes(r)||h.includes(r)?l.style.display="flex":l.style.display="none"})}),(n=this.container.querySelector("#rbx-top-coin-btn"))==null||n.addEventListener("click",()=>{this.openBuyCoinsModal()})}switchTab(e){this.avatarEditor&&(this.avatarEditor.destroy(),this.avatarEditor=null),this.currentTab=e,this.container.querySelectorAll("[data-tab]").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),this.renderCurrentView()}renderCurrentView(){const e=this.container.querySelector("#rbx-view-container");e&&(this.currentTab==="discover"?this.renderDiscoverView(e):this.currentTab==="create"?this.renderCommunityStudioView(e):this.currentTab==="avatar"?this.renderAvatarEditorView(e):this.currentTab==="marketplace"&&this.renderMarketplaceView(e))}renderDiscoverView(e){var t;e.innerHTML=`
      <!-- HERO BANNER -->
      <div class="rbx-welcome-banner">
        <div class="rbx-welcome-left">
          <div class="rbx-avatar-banner-thumb" style="background: ${this.playerData.avatar.headColor};">
            ✦
          </div>
          <div class="rbx-welcome-text">
            <h1>Genesis Worlds</h1>
            <p>Step directly into autonomous simulations across primeval wilderness, deep ocean trenches, and living trading economies.</p>
          </div>
        </div>
        <button class="rbx-btn-play-massive" id="rbx-hero-launch-btn">
          <span class="rbx-play-icon">▶</span>
          <span>Play Genesis 3D</span>
        </button>
      </div>

      <!-- WORLDS GRID (Direct play on click) -->
      <div class="rbx-section-header">
        <h2 class="rbx-section-title">Ecosystem Worlds</h2>
      </div>

      <div class="rbx-experiences-grid">
        ${this.experiences.map(i=>`
          <div class="rbx-game-card" data-exp-id="${i.id}">
            <div class="rbx-card-thumb-wrap">
              <img src="${i.thumbnail}" alt="${i.title}" />
              <span class="rbx-badge-featured">${i.category}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${i.title}</h3>
              <p class="rbx-card-tagline">${i.tagline}</p>
              <p class="rbx-card-desc">${i.description}</p>
              <button class="rbx-card-play-btn" data-exp-id="${i.id}">
                ▶ Play World
              </button>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- FEATURED CREATOR EXPERIENCES & SURVIVAL ARENAS -->
      <div class="rbx-section-header" style="margin-top: 36px;">
        <div>
          <h2 class="rbx-section-title">🔥 Featured Studio Games & Survival Arenas</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 4px 0 0 0;">
            Created exclusively with our new Genesis Studio: fight the undead apocalypse, jump parkour obbies, or remix in Studio!
          </p>
        </div>
      </div>

      <div class="rbx-experiences-grid">
        ${Ct.getInstance().getAllMaps().slice(0,3).map(i=>{var c;const s=i.id==="default_zombie_survival"||((c=i.tags)==null?void 0:c.includes("Zombie")),n=s?"linear-gradient(135deg, #450a0a, #1c1917)":i.gameMode==="obby"?"linear-gradient(135deg, #1e1b4b, #0f172a)":"linear-gradient(135deg, #064e3b, #022c22)",r=s?"🧟 ☣️ ⚔️":i.gameMode==="obby"?"🏃 🔥":"🏙️ ✨",o=s?"background: #dc2626; color: #fff;":"",l=i.entities?i.entities.length:0;return`
          <div class="rbx-game-card">
            <div class="rbx-card-thumb-wrap" style="background: ${n}; display: flex; align-items: center; justify-content: center; font-size: 48px;">
              ${r}
              <span class="rbx-badge-featured" style="${o}">${s?"SURVIVAL APOCALYPSE":i.gameMode.toUpperCase()}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${i.title}</h3>
              <p class="rbx-card-tagline">By ${i.author} • ${i.blocks.length} Blocks ${l>0?`• 👥 ${l} Scripted NPCs/Items`:""}</p>
              <p class="rbx-card-desc">${i.description}</p>
              <div style="display: flex; gap: 8px; margin-top: auto;">
                <button class="rbx-card-play-btn rbx-btn-play-map" data-map-id="${i.id}" style="flex: 1.4; ${s?"background: linear-gradient(135deg, #dc2626, #991b1b);":""}">
                  ▶ ${s?"Play Survival":i.gameMode==="obby"?"Play Obby":"Play World"}
                </button>
                <button class="rbx-card-play-btn rbx-btn-edit-map" data-map-id="${i.id}" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
                  🛠️ Studio
                </button>
              </div>
            </div>
          </div>
        `}).join("")}
      </div>
    `,(t=e.querySelector("#rbx-hero-launch-btn"))==null||t.addEventListener("click",()=>{this.launchExperience(this.experiences[0])}),e.querySelectorAll(".rbx-game-card[data-exp-id], .rbx-card-play-btn[data-exp-id]").forEach(i=>{i.addEventListener("click",s=>{s.stopPropagation();const n=i.getAttribute("data-exp-id"),r=this.experiences.find(o=>o.id===n);r&&this.launchExperience(r)})}),e.querySelectorAll(".rbx-btn-play-map").forEach(i=>{i.addEventListener("click",s=>{s.stopPropagation();const n=i.getAttribute("data-map-id"),r=Ct.getInstance().getMapById(n||"");r&&this.launchCustomMap(r,!1)})}),e.querySelectorAll(".rbx-btn-edit-map").forEach(i=>{i.addEventListener("click",s=>{s.stopPropagation();const n=i.getAttribute("data-map-id"),r=Ct.getInstance().getMapById(n||"");r&&this.launchCustomMap(r,!0)})})}renderAvatarEditorView(e){e.innerHTML=`
      <div class="rbx-avatar-editor-container">
        <!-- 3D VIEWPORT -->
        <div class="rbx-avatar-viewport-panel">
          <h3>3D Avatar Preview</h3>
          <canvas id="rbx-avatar-viewport-canvas" class="rbx-avatar-3d-canvas"></canvas>
          <div class="rbx-viewport-hint">Drag to rotate 360°</div>
        </div>

        <!-- CUSTOMIZATION CONTROLS -->
        <div class="rbx-avatar-customizer-panel">
          <div>
            <h2 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800;">Avatar Customizer</h2>
            <p style="color: var(--rbx-text-sub); font-size: 13px; margin-top: 4px;">Customize body colors, headgear, and held gear for your 3D playable character.</p>
          </div>

          <!-- Body part tabs -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Select Body Part:</h4>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn active" data-part="torsoColor">Torso</button>
              <button class="rbx-bodypart-btn" data-part="headColor">Head</button>
              <button class="rbx-bodypart-btn" data-part="leftArmColor">Left Arm</button>
              <button class="rbx-bodypart-btn" data-part="rightArmColor">Right Arm</button>
              <button class="rbx-bodypart-btn" data-part="leftLegColor">Left Leg</button>
              <button class="rbx-bodypart-btn" data-part="rightLegColor">Right Leg</button>
            </div>
          </div>

          <!-- Color Swatches -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Color Palette:</h4>
            <div class="rbx-color-swatches-grid">
              ${rg.map(i=>`<div class="rbx-color-swatch" style="background-color: ${i};" data-color="${i}"></div>`).join("")}
            </div>
          </div>

          <!-- Chassis / Apparel (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Chassis & Robes:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Outfits in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${!this.playerData.avatar.equippedShirt||this.playerData.avatar.equippedShirt==="none"?"active":""}" data-shirt="none">Default Tunic</button>
              ${this.marketplaceItems.filter(i=>i.type==="shirt"&&this.playerData.inventory.includes(i.id)).map(i=>`
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedShirt===i.id?"active":""}" data-shirt="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Headgear / Visors (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Headgear & Optics:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Hats in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${!this.playerData.avatar.equippedHat||this.playerData.avatar.equippedHat==="none"?"active":""}" data-hat="none">None</button>
              ${this.marketplaceItems.filter(i=>i.type==="hat"&&this.playerData.inventory.includes(i.id)).map(i=>`
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedHat===i.id?"active":""}" data-hat="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Face expression (Free) -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Face Expression (Free):</h4>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace==="smile"?"active":""}" data-face="smile">Classic Smile 🙂</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace==="chill"?"active":""}" data-face="chill">Chill Expression 😎</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace==="mischief"?"active":""}" data-face="mischief">Smirk 😏</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace==="epic_face"?"active":""}" data-face="epic_face">Open Smile 😃</button>
            </div>
          </div>

          <!-- Relic gear (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Held Gear & Relics:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Gear in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${!this.playerData.avatar.equippedGear||this.playerData.avatar.equippedGear==="none"?"active":""}" data-gear="none">None</button>
              ${this.marketplaceItems.filter(i=>i.type==="gear"&&this.playerData.inventory.includes(i.id)).map(i=>`
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedGear===i.id?"active":""}" data-gear="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;const t=e.querySelector("#rbx-avatar-viewport-canvas");t&&(this.avatarEditor=new ag(t),setTimeout(()=>{var i;return(i=this.avatarEditor)==null?void 0:i.resize()},50)),e.querySelectorAll("[data-part]").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll("[data-part]").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.selectedBodyPart=i.getAttribute("data-part")})}),e.querySelectorAll("[data-color]").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-color");s&&this.avatarEditor&&(this.avatarEditor.updatePartColor(this.selectedBodyPart,s),this.playerData.avatar[this.selectedBodyPart]=s,this.savePlayerData())})}),e.querySelectorAll("[data-tab-jump]").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-tab-jump");s&&this.switchTab(s)})}),e.querySelectorAll("[data-shirt]").forEach(i=>{i.addEventListener("click",()=>{var n;e.querySelectorAll("[data-shirt]").forEach(r=>r.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-shirt");this.playerData.avatar.equippedShirt=s,(n=this.avatarEditor)==null||n.updateShirt(s),this.savePlayerData()})}),e.querySelectorAll("[data-hat]").forEach(i=>{i.addEventListener("click",()=>{var n;e.querySelectorAll("[data-hat]").forEach(r=>r.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-hat");this.playerData.avatar.equippedHat=s,(n=this.avatarEditor)==null||n.updateHat(s),this.savePlayerData()})}),e.querySelectorAll("[data-face]").forEach(i=>{i.addEventListener("click",()=>{var n;e.querySelectorAll("[data-face]").forEach(r=>r.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-face");this.playerData.avatar.equippedFace=s,(n=this.avatarEditor)==null||n.updateFace(s),this.savePlayerData()})}),e.querySelectorAll("[data-gear]").forEach(i=>{i.addEventListener("click",()=>{var n;e.querySelectorAll("[data-gear]").forEach(r=>r.classList.remove("active")),i.classList.add("active");const s=i.getAttribute("data-gear");this.playerData.avatar.equippedGear=s,(n=this.avatarEditor)==null||n.updateGear(s),this.savePlayerData()})})}renderMarketplaceView(e){e.innerHTML=`
      <!-- COIN TOP-UP BANNER -->
      <div class="rbx-coin-shop-banner">
        <div class="rbx-coin-shop-info">
          <div class="rbx-coin-shop-badge">🪙 Genesis Currency Store</div>
          <h3>Buy Genesis Coins</h3>
          <p>Purchase Genesis Coins to unlock exclusive 3D cybernetic chassis, celestial halos, wings, and legendary blades.</p>
          <div class="rbx-current-balance-tag">
            Your Wallet Balance: <strong>🪙 <span id="rbx-shop-balance-count">${this.playerData.coins.toLocaleString()}</span> Coins</strong>
          </div>
        </div>

        <div class="rbx-coin-packs-row">
          ${Nn().map(t=>`
            <div class="rbx-coin-pack-card" data-pack-id="${t.id}">
              ${t.bonusText?`<span class="rbx-pack-bonus">${t.bonusText}</span>`:""}
              <div class="rbx-pack-icon">${t.icon}</div>
              <div class="rbx-pack-coins">🪙 ${t.coins.toLocaleString()}</div>
              <div class="rbx-pack-name">${t.name}</div>
              <button class="rbx-btn-buy-coins" data-pack-id="${t.id}" data-pack-coins="${t.coins}" data-pack-name="${t.name}">
                Pay with Stripe (${t.priceUsd})
              </button>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- GEAR & OUTFITS STORE -->
      <div class="rbx-section-header">
        <div>
          <h2 class="rbx-section-title">Exclusive 3D Gear & Apparel</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin-top: 4px;">
            Spend your Genesis Coins to unlock permanent 3D items for your character. Hover or move your mouse to inspect any model in 360°.
          </p>
        </div>
      </div>

      <div class="rbx-marketplace-grid">
        ${this.marketplaceItems.map(t=>{const i=this.playerData.inventory.includes(t.id),s=t.type==="shirt"&&this.playerData.avatar.equippedShirt===t.id||t.type==="hat"&&this.playerData.avatar.equippedHat===t.id||t.type==="gear"&&this.playerData.avatar.equippedGear===t.id,n=t.type==="shirt"?"🦾 Chassis / Robe":t.type==="hat"?"👑 Headgear":"⚔️ Relic Gear";return`
            <div class="rbx-market-card" data-item-id="${t.id}">
              <div class="rbx-market-icon-box">
                <canvas class="rbx-market-3d-canvas" data-item-id="${t.id}" width="200" height="180"></canvas>
                <span class="rbx-3d-badge">✦ 3D Model</span>
                <span class="rbx-type-badge">${n}</span>
              </div>
              <div class="rbx-market-title">${t.name}</div>
              <div class="rbx-market-desc">${t.description}</div>
              <div class="rbx-market-price-pill">🪙 ${t.price} Coins</div>
              ${i?`
                <button class="rbx-btn-buy owned" data-action="equip" data-item-id="${t.id}" data-item-type="${t.type}">
                  ${s?"✓ Equipped":"Wear in Atelier"}
                </button>
              `:`
                <button class="rbx-btn-buy" data-action="buy" data-item-id="${t.id}" data-item-price="${t.price}" data-item-name="${t.name}" data-item-type="${t.type}">
                  Buy for 🪙 ${t.price}
                </button>
              `}
            </div>
          `}).join("")}
      </div>
    `,Mc.renderAllIn(e),e.querySelectorAll(".rbx-btn-buy-coins").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-pack-id"),n=Nn().find(r=>r.id===i);n&&ns.getInstance().startCheckout(n)})}),e.querySelectorAll(".rbx-btn-buy").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const s=t.getAttribute("data-action"),n=t.getAttribute("data-item-id"),r=t.getAttribute("data-item-type"),o=parseInt(t.getAttribute("data-item-price")||"0",10),l=t.getAttribute("data-item-name")||"Item";if(s==="equip"&&n&&r){r==="shirt"?this.playerData.avatar.equippedShirt=n:r==="hat"?this.playerData.avatar.equippedHat=n:r==="gear"&&(this.playerData.avatar.equippedGear=n),this.savePlayerData(),this.switchTab("avatar");return}s==="buy"&&n&&r&&(this.playerData.coins>=o?(this.playerData.coins-=o,this.playerData.inventory.includes(n)||this.playerData.inventory.push(n),r==="shirt"?this.playerData.avatar.equippedShirt=n:r==="hat"?this.playerData.avatar.equippedHat=n:r==="gear"&&(this.playerData.avatar.equippedGear=n),this.savePlayerData(),this.updateCoinDisplay(),this.showToast(`🎉 Purchased ${l}! It is now in your permanent wardrobe.`),this.renderMarketplaceView(e)):this.openBuyCoinsModal(o-this.playerData.coins))})})}launchExperience(e){if(e.url){if(e.url==="classic-2d"){const i=window.startClassic2D;typeof i=="function"&&i()}else window.location.href=e.url;return}const t=this.container.querySelector("#rbx-game-container");t&&(this.active3DGame&&(this.active3DGame.destroy(),this.active3DGame=null),t.innerHTML="",t.classList.add("active"),this.active3DGame=new Dl(t,this.playerData.avatar,this.playerData.username,()=>{this.active3DGame&&(this.active3DGame.destroy(),this.active3DGame=null),t.innerHTML="",t.classList.remove("active"),this.renderCurrentView()}))}launchCustomMap(e,t=!1){const i=this.container.querySelector("#rbx-game-container");i&&(this.active3DGame&&(this.active3DGame.destroy(),this.active3DGame=null),i.innerHTML="",i.classList.add("active"),this.active3DGame=new Dl(i,this.playerData.avatar,this.playerData.username,()=>{this.active3DGame&&(this.active3DGame.destroy(),this.active3DGame=null),i.innerHTML="",i.classList.remove("active"),this.renderCurrentView()},e,t))}renderCommunityStudioView(e){var s;const t=Ct.getInstance().getAllMaps(),i=Ct.getInstance().getUserMaps();e.innerHTML=`
      <!-- STUDIO HERO -->
      <div class="rbx-welcome-banner" style="background: linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(15, 23, 42, 0.9));">
        <div class="rbx-welcome-left">
          <div class="rbx-avatar-banner-thumb" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
            🛠️
          </div>
          <div class="rbx-welcome-text">
            <h1 style="font-family: 'Outfit', sans-serif;">Genesis Studio & Creator Hub</h1>
            <p>Design challenging parkour obbies, trap-filled lava towers, and social hangouts. Save locally or publish online for everyone to play!</p>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="rbx-btn-play-massive" id="rbx-btn-launch-empty-studio" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #000;">
            <span>🛠️ Launch Studio (New)</span>
          </button>
        </div>
      </div>

      <!-- TEMPLATES & COMMUNITY GAMES -->
      <div class="rbx-section-header" style="margin-top: 30px;">
        <div>
          <h2 class="rbx-section-title">Community Obbies & Creations</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 4px 0 0 0;">
            Play creations made by other players, or click "Edit in Studio" to remix and customize the obstacles!
          </p>
        </div>
      </div>

      <div class="rbx-experiences-grid">
        ${t.map(n=>{var u;const r=n.id==="default_zombie_survival"||((u=n.tags)==null?void 0:u.includes("Zombie")),o=r?"linear-gradient(135deg, #450a0a, #1c1917)":n.gameMode==="obby"?"linear-gradient(135deg, #1e1b4b, #0f172a)":"linear-gradient(135deg, #064e3b, #022c22)",l=r?"🧟 ☣️ ⚔️":n.gameMode==="obby"?"🏃 🔥":"🏙️ ✨",c=r?"background: #dc2626; color: #fff;":"",h=n.entities?n.entities.length:0;return`
          <div class="rbx-game-card">
            <div class="rbx-card-thumb-wrap" style="background: ${o}; display: flex; align-items: center; justify-content: center; font-size: 48px;">
              ${l}
              <span class="rbx-badge-featured" style="${c}">${r?"SURVIVAL APOCALYPSE":n.gameMode.toUpperCase()}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${n.title}</h3>
              <p class="rbx-card-tagline">By ${n.author} • ${n.blocks.length} Blocks ${h>0?`• 👥 ${h} Scripted NPCs/Items`:""}</p>
              <p class="rbx-card-desc">${n.description}</p>
              <div style="display: flex; gap: 8px; margin-top: auto;">
                <button class="rbx-card-play-btn rbx-btn-play-map" data-map-id="${n.id}" style="flex: 1.4; ${r?"background: linear-gradient(135deg, #dc2626, #991b1b);":""}">
                  ▶ ${r?"Play Survival":n.gameMode==="obby"?"Play Obby":"Play World"}
                </button>
                <button class="rbx-card-play-btn rbx-btn-edit-map" data-map-id="${n.id}" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
                  🛠️ Edit in Studio
                </button>
              </div>
            </div>
          </div>
        `}).join("")}
      </div>

      <!-- YOUR LOCAL DRAFTS -->
      <div class="rbx-section-header" style="margin-top: 40px;">
        <h2 class="rbx-section-title">Your Map Drafts (${i.length})</h2>
      </div>

      ${i.length===0?`
        <div style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15); border-radius: 16px; padding: 30px; text-align: center; color: var(--rbx-text-sub);">
          <div style="font-size: 32px; margin-bottom: 8px;">📐</div>
          <p style="margin: 0; font-size: 14px;">You haven't saved any maps yet. Click <strong>Launch Studio</strong> above to build and save your first custom world!</p>
        </div>
      `:`
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${i.map(n=>`
            <div class="rbx-map-list-item" style="background: rgba(15,23,42,0.8);">
              <div>
                <strong style="color: #fff; font-size: 15px;">${n.title}</strong>
                <div style="font-size: 12px; color: var(--rbx-text-sub); margin-top: 4px;">
                  Mode: ${n.gameMode.toUpperCase()} • ${n.blocks.length} Blocks • Saved on ${new Date(n.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="rbx-hud-pill-btn green rbx-btn-play-map" data-map-id="${n.id}">▶ Play</button>
                <button class="rbx-hud-pill-btn rbx-btn-edit-map" data-map-id="${n.id}">🛠️ Edit</button>
                <button class="rbx-hud-pill-btn rbx-btn-export-map" data-map-id="${n.id}">⬇️ Export</button>
                <button class="rbx-hud-pill-btn rbx-btn-delete-map" data-map-id="${n.id}" style="color: #f87171; border-color: rgba(239,68,68,0.3);">🗑️</button>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    `,(s=e.querySelector("#rbx-btn-launch-empty-studio"))==null||s.addEventListener("click",()=>{this.launchCustomMap(null,!0)}),e.querySelectorAll(".rbx-btn-play-map").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-map-id"),o=Ct.getInstance().getMapById(r||"");o&&this.launchCustomMap(o,!1)})}),e.querySelectorAll(".rbx-btn-edit-map").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-map-id"),o=Ct.getInstance().getMapById(r||"");o&&this.launchCustomMap(o,!0)})}),e.querySelectorAll(".rbx-btn-export-map").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-map-id"),o=Ct.getInstance().getMapById(r||"");o&&Ct.getInstance().exportMapFile(o)})}),e.querySelectorAll(".rbx-btn-delete-map").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-map-id");r&&confirm("Delete this map draft?")&&(Ct.getInstance().deleteUserMap(r),this.renderCommunityStudioView(e))})})}getActiveGame(){return this.active3DGame}}const Ut=class Ut{constructor(e=1337){R(this,"perm");R(this,"permMod12");this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;let i=e;for(let s=255;s>0;s--){i=i*1664525+1013904223>>>0;const n=i%(s+1),r=t[s];t[s]=t[n],t[n]=r}for(let s=0;s<512;s++)this.perm[s]=t[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(e,t){let i=0,s=0,n=0;const r=(e+t)*Ut.F2,o=Math.floor(e+r),l=Math.floor(t+r),c=(o+l)*Ut.G2,h=o-c,u=l-c,d=e-h,m=t-u;let g=0,v=0;d>m?(g=1,v=0):(g=0,v=1);const f=d-g+Ut.G2,p=m-v+Ut.G2,x=d-1+2*Ut.G2,T=m-1+2*Ut.G2,_=o&255,w=l&255,S=this.permMod12[_+this.perm[w]]*3,A=this.permMod12[_+g+this.perm[w+v]]*3,b=this.permMod12[_+1+this.perm[w+1]]*3;let E=.5-d*d-m*m;E>0&&(E*=E,i=E*E*(Ut.grad3[S]*d+Ut.grad3[S+1]*m));let P=.5-f*f-p*p;P>0&&(P*=P,s=P*P*(Ut.grad3[A]*f+Ut.grad3[A+1]*p));let I=.5-x*x-T*T;return I>0&&(I*=I,n=I*I*(Ut.grad3[b]*x+Ut.grad3[b+1]*T)),(70*(i+s+n)+1)*.5}fbm(e,t,i=4,s=.5,n=2){let r=0,o=1,l=1,c=0;for(let h=0;h<i;h++)r+=this.noise2D(e*o,t*o)*l,c+=l,l*=s,o*=n;return r/c}};R(Ut,"F2",.5*(Math.sqrt(3)-1)),R(Ut,"G2",(3-Math.sqrt(3))/6),R(Ut,"grad3",new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]));let ss=Ut;const Et=[{id:"wild_nourishment",name:"Edible Berries & Flora",era:"primeval",description:"Inspect unknown plants and discover that colorful wild berries provide sweet sustenance.",icon:"🫐",requiredResearch:15,researchProgress:0,prerequisites:[],unlocksBuildings:[],unlocksItems:["berries","wild_seeds"],discovered:!1},{id:"discovery_wood",name:"Discovery of Wood",era:"primeval",description:"Examine fallen tree branches and discover that dry wooden sticks are rigid tools and extensions of the hand.",icon:"🪵",requiredResearch:20,researchProgress:0,prerequisites:[],unlocksBuildings:[],unlocksItems:["stick"],discovered:!1},{id:"discovery_stone",name:"River Stones & Rocks",era:"primeval",description:"Pick up smooth, heavy river pebbles and discover hard mineral rocks that do not decay.",icon:"🪨",requiredResearch:25,researchProgress:0,prerequisites:[],unlocksBuildings:[],unlocksItems:["stone"],discovered:!1},{id:"discovery_flint",name:"Sharp Fracture & Flint",era:"primeval",description:"Accidentally crack hard rocks together and discover that mineral flint splits with razor-sharp cutting edges.",icon:"💎",requiredResearch:35,researchProgress:0,prerequisites:["discovery_stone"],requiredItems:{stone:1},unlocksBuildings:[],unlocksItems:["flint"],discovered:!1},{id:"discovery_sparks",name:"Percussion Sparks",era:"primeval",description:"Notice that striking flint violently against mineral rocks throws glowing, leaping sparks.",icon:"✨",requiredResearch:45,researchProgress:0,prerequisites:["discovery_flint","discovery_stone"],requiredItems:{flint:1,stone:1},unlocksBuildings:[],unlocksItems:[],discovered:!1},{id:"discovery_fire",name:"The Discovery of Fire",era:"primeval",description:"Catch a spark in dry tinder, blow gently, and witness the terrifying and miraculous birth of Fire.",icon:"🔥",requiredResearch:60,researchProgress:0,prerequisites:["discovery_sparks","discovery_wood"],requiredItems:{flint:1,stick:2},unlocksBuildings:[],unlocksItems:["firewood"],discovered:!1},{id:"contained_hearth",name:"Contained Campfire & Hearth",era:"primeval",description:"Realize that fire consumes the wild unless ringed with river stones, creating a safe radiant hearth for warmth and cooked food.",icon:"⛺",requiredResearch:75,researchProgress:0,prerequisites:["discovery_fire","discovery_stone"],requiredItems:{stick:4,stone:4},unlocksBuildings:["campfire"],unlocksItems:["cooked_food"],discovered:!1},{id:"flint_knapping",name:"Flint Knapping & Tools",era:"primeval",description:"Deliberately strike flint cores to knap durable chopping handaxes and spear points.",icon:"🪓",requiredResearch:90,researchProgress:0,prerequisites:["discovery_flint","discovery_wood"],requiredItems:{flint:2,stick:2},unlocksBuildings:[],unlocksItems:["stone_axe","flint_spear"],discovered:!1},{id:"primitive_shelter",name:"Thatch Lean-To Shelter",era:"primeval",description:"Lash sturdy wooden branches and leafy thatch together to shield against bitter night winds.",icon:"🛖",requiredResearch:110,researchProgress:0,prerequisites:["contained_hearth","flint_knapping"],requiredItems:{stick:6,wood_log:2},unlocksBuildings:["lean_to"],unlocksItems:[],discovered:!1},{id:"spear_hunting",name:"Spear Hunting & Stalking",era:"primeval",description:"Learn to track wild rabbit trails and stalk grazing deer silently before striking with a flint spear.",icon:"🏹",requiredResearch:120,researchProgress:0,prerequisites:["flint_knapping"],requiredItems:{flint:1,stick:1},unlocksBuildings:[],unlocksItems:["raw_meat","animal_hide","bone"],discovered:!1},{id:"meat_roasting",name:"Hearth Meat Roasting",era:"primeval",description:"Roast raw hunted game over campfire embers into succulent, hearty cooked meat that wards off starvation.",icon:"🍖",requiredResearch:135,researchProgress:0,prerequisites:["spear_hunting","contained_hearth"],requiredItems:{raw_meat:1,stick:1},unlocksBuildings:[],unlocksItems:["cooked_meat"],discovered:!1},{id:"fiber_weaving",name:"Fiber Weaving",era:"neolithic",description:"Weave tough plant fibers into baskets to carry vastly more forage.",icon:"🧺",requiredResearch:100,researchProgress:0,prerequisites:["primitive_shelter"],requiredItems:{stick:4,wild_seeds:2},unlocksBuildings:[],unlocksItems:["woven_basket"],discovered:!1},{id:"clay_shaping",name:"Clay Shaping & Pottery",era:"neolithic",description:"Scoop river clay and mold durable bowls and pots for storing water and seeds.",icon:"🏺",requiredResearch:120,researchProgress:0,prerequisites:["contained_hearth"],requiredItems:{clay:3},unlocksBuildings:["clay_kiln"],unlocksItems:["clay_bowl","clay_pot","mud_brick"],discovered:!1},{id:"wild_agriculture",name:"Wild Agriculture",era:"neolithic",description:"Plant collected seeds in tilled soil for renewable, stable nourishment.",icon:"🌾",requiredResearch:150,researchProgress:0,prerequisites:["flint_knapping","fiber_weaving"],requiredItems:{wild_seeds:4,stick:2},unlocksBuildings:["farm_plot"],unlocksItems:["harvested_wheat"],discovered:!1},{id:"mudbrick_architecture",name:"Mudbrick Shelters",era:"neolithic",description:"Sun-dry clay and silt bricks to build sturdy dwellings that withstand rain.",icon:"🏠",requiredResearch:200,researchProgress:0,prerequisites:["clay_shaping","primitive_shelter"],requiredItems:{mud_brick:8,wood_log:4},unlocksBuildings:["mud_hut","storage_barn"],unlocksItems:[],discovered:!1},{id:"wolf_domestication",name:"Canine Domestication",era:"neolithic",description:"Befriend forest wolves with roasted meat, forging humanity's earliest bond with loyal domestic dogs.",icon:"🐕",requiredResearch:220,researchProgress:0,prerequisites:["meat_roasting","primitive_shelter"],requiredItems:{cooked_meat:2},unlocksBuildings:[],unlocksItems:[],discovered:!1},{id:"animal_husbandry",name:"Animal Husbandry & Shepherding",era:"neolithic",description:"Erect fenced wooden paddocks to shelter wild sheep, shearing thick wool for warm garments.",icon:"🐑",requiredResearch:250,researchProgress:0,prerequisites:["wild_agriculture"],requiredItems:{stick:8,wild_seeds:4},unlocksBuildings:["animal_pen"],unlocksItems:["raw_wool"],discovered:!1},{id:"leather_tanning",name:"Leather Tanning",era:"bronze",description:"Cure and scrape animal hides using stone scrapers to produce durable, supple leather.",icon:"🥋",requiredResearch:280,researchProgress:0,prerequisites:["spear_hunting","clay_shaping"],requiredItems:{animal_hide:3},unlocksBuildings:[],unlocksItems:["tanned_leather"],discovered:!1},{id:"metallurgy_smelting",name:"Copper Smelting",era:"bronze",description:"Extract bright metal from raw ore in high-heat kilns to forge superior tools.",icon:"⚒️",requiredResearch:300,researchProgress:0,prerequisites:["clay_shaping","mudbrick_architecture"],requiredItems:{copper_ore:4,firewood:6},unlocksBuildings:["smelter","blacksmith"],unlocksItems:["copper_ingot","copper_axe"],discovered:!1},{id:"carpentry",name:"Carpentry & Joinery",era:"bronze",description:"Saw and smooth timber into interlocking planks for multi-room wooden cabins.",icon:"🪵",requiredResearch:350,researchProgress:0,prerequisites:["metallurgy_smelting"],requiredItems:{wood_log:10,copper_axe:1},unlocksBuildings:["thatched_cabin","timber_house"],unlocksItems:["timber_plank"],discovered:!1},{id:"stone_masonry",name:"Stonemasonry & Wells",era:"bronze",description:"Chisel boulders into square blocks to dig deep wells for fresh drinking water.",icon:"🪨",requiredResearch:400,researchProgress:0,prerequisites:["carpentry"],requiredItems:{stone:12,mud_brick:6},unlocksBuildings:["stone_well","masonry_house"],unlocksItems:["cut_stone"],discovered:!1},{id:"grain_milling",name:"Grain Milling & Baking",era:"medieval",description:"Harness wind and grinding stones to mill wheat into fine flour for hearty bread.",icon:"🍞",requiredResearch:500,researchProgress:0,prerequisites:["wild_agriculture","carpentry"],requiredItems:{harvested_wheat:8,timber_plank:6},unlocksBuildings:["windmill","bakery"],unlocksItems:["flour","bread"],discovered:!1},{id:"iron_working",name:"Iron Forging",era:"medieval",description:"Smelt iron ore at blistering temperatures for heavy-duty tools and durable gears.",icon:"🗡️",requiredResearch:600,researchProgress:0,prerequisites:["metallurgy_smelting"],requiredItems:{iron_ore:6,firewood:10},unlocksBuildings:["watchtower"],unlocksItems:["iron_ingot","iron_tools"],discovered:!1},{id:"commerce_and_markets",name:"Commerce & Marketplaces",era:"medieval",description:"Establish designated trading stalls with fixed weights and fair exchange of goods.",icon:"⚖️",requiredResearch:700,researchProgress:0,prerequisites:["grain_milling","iron_working"],requiredItems:{timber_plank:10,bread:5},unlocksBuildings:["market_stall"],unlocksItems:[],discovered:!1},{id:"river_fishing",name:"River Fishing & Trapping",era:"primeval",description:"Fashion woven wicker traps and bone hooks to catch freshwater fish swimming in rivers.",icon:"🐟",requiredResearch:60,researchProgress:0,prerequisites:["discovery_wood"],requiredItems:{stick:3},unlocksBuildings:[],unlocksItems:["fresh_fish","cooked_fish","fish_trap"],discovered:!1},{id:"bridge_engineering",name:"Bridge Engineering",era:"neolithic",description:"Construct sturdy timber footbridges across riverbeds to unite divided banks and expand exploration.",icon:"🌉",requiredResearch:180,researchProgress:0,prerequisites:["primitive_shelter"],requiredItems:{wood_log:4,stick:6},unlocksBuildings:["wooden_bridge"],unlocksItems:[],discovered:!1},{id:"tailoring_insulation",name:"Winter Cloaks & Insulation",era:"neolithic",description:"Stitch thick animal hides and wool fleece into insulated winter cloaks to brave freezing blizzards.",icon:"🧥",requiredResearch:240,researchProgress:0,prerequisites:["fiber_weaving"],requiredItems:{animal_hide:2,raw_wool:2},unlocksBuildings:[],unlocksItems:["winter_cloak"],discovered:!1},{id:"water_hydraulics",name:"Water Hydraulics & Watermills",era:"medieval",description:"Harness flowing river currents with rotating paddle wheels to automate flour milling without manual toil.",icon:"⚙️",requiredResearch:650,researchProgress:0,prerequisites:["grain_milling"],requiredItems:{timber_plank:8,stone:4},unlocksBuildings:["waterwheel"],unlocksItems:[],discovered:!1},{id:"horse_whispering",name:"Horse Whispering & Domestication",era:"neolithic",description:"Learn the calm gestures and sweet grains needed to approach wild horses, fashioning braided lassos and shelter paddocks.",icon:"🐎",requiredResearch:150,researchProgress:0,prerequisites:["animal_domestication"],requiredItems:{raw_wool:2,animal_hide:1},unlocksBuildings:["horse_stable"],unlocksItems:["braided_lasso"],discovered:!1},{id:"wheel_and_cart",name:"The Wheel & Cargo Carts",era:"bronze",description:"Carve solid wooden discs and axle joints to build 2-wheeled hauling carts that expand pioneer transport capacity tenfold.",icon:"🛒",requiredResearch:320,researchProgress:0,prerequisites:["primitive_shelter"],requiredItems:{wood_log:4,timber_plank:4},unlocksBuildings:[],unlocksItems:["cargo_cart"],discovered:!1},{id:"shipbuilding",name:"Shipbuilding & Coastal Docks",era:"bronze",description:"Hollow out buoyant timber hulls and erect wooden harbor piers to sail across rivers and ocean waters.",icon:"⛵",requiredResearch:380,researchProgress:0,prerequisites:["bridge_engineering"],requiredItems:{wood_log:5,timber_plank:4},unlocksBuildings:["dock_pier"],unlocksItems:["wooden_boat"],discovered:!1},{id:"written_language",name:"Written Language & Archives",era:"bronze",description:"Inscribe symbolic pictographs and script onto cured vellum scrolls, preserving generational knowledge in a Great Archive.",icon:"📜",requiredResearch:420,researchProgress:0,prerequisites:["clay_shaping"],requiredItems:{animal_hide:2,stick:4},unlocksBuildings:["great_library"],unlocksItems:["written_scroll"],discovered:!1},{id:"defensive_tactics",name:"Palisades, Shields & Sentinels",era:"bronze",description:"Construct sharpened timber palisades and lockable gates, outfitting courageous sentinels with shields and hunting bows.",icon:"🛡️",requiredResearch:350,researchProgress:0,prerequisites:["spear_hunting","flint_knapping"],requiredItems:{wood_log:6,animal_hide:2},unlocksBuildings:["timber_palisade","watch_gate"],unlocksItems:["wooden_shield","hunting_bow"],discovered:!1},{id:"aqueduct_engineering",name:"Stone Aqueduct Engineering",era:"medieval",description:"Engineer elevated stone arch channels to carry fresh river water miles inland to irrigate town fields and cisterns.",icon:"🏛️",requiredResearch:750,researchProgress:0,prerequisites:["masonry_construction","water_hydraulics"],requiredItems:{cut_stone:8,mud_brick:8},unlocksBuildings:["stone_aqueduct","water_cistern"],unlocksItems:[],discovered:!1},{id:"coin_minting",name:"Coin Minting & Banking",era:"renaissance",description:"Smelt gold ore into uniform coins, establishing a universal currency and banking treasury.",icon:"🪙",requiredResearch:900,researchProgress:0,prerequisites:["commerce_and_markets"],requiredItems:{gold_ore:4,cut_stone:12},unlocksBuildings:["mint_bank","town_hall"],unlocksItems:["gold_coin"],discovered:!1},{id:"civic_monuments",name:"Civic Fountains & Pavements",era:"renaissance",description:"Paved cobblestone boulevards and marble fountains that turn a settlement into a glorious metropolis.",icon:"🏛️",requiredResearch:1200,researchProgress:0,prerequisites:["coin_minting","stone_masonry"],requiredItems:{cut_stone:20,gold_coin:15},unlocksBuildings:["fountain"],unlocksItems:["fine_clothes"],discovered:!1}],_g=[{id:"craft_firewood",name:"Split Firewood",requiredTech:"contained_hearth",inputs:{wood_log:1},output:"firewood",outputCount:3,timeCost:4},{id:"craft_stone_axe",name:"Craft Stone Axe",requiredTech:"flint_knapping",inputs:{flint:1,stick:2},output:"stone_axe",outputCount:1,timeCost:4},{id:"craft_flint_spear",name:"Craft Flint Spear",requiredTech:"flint_knapping",inputs:{flint:2,stick:2},output:"flint_spear",outputCount:1,timeCost:5},{id:"craft_roast_meat",name:"Roast Hunted Meat",requiredTech:"meat_roasting",inputs:{raw_meat:1,firewood:1},output:"cooked_meat",outputCount:1,timeCost:4},{id:"craft_tanned_leather",name:"Tan Animal Hide",requiredTech:"leather_tanning",inputs:{animal_hide:2},output:"tanned_leather",outputCount:1,timeCost:5},{id:"craft_basket",name:"Weave Basket",requiredTech:"fiber_weaving",inputs:{stick:3,wild_seeds:2},output:"woven_basket",outputCount:1,timeCost:4},{id:"craft_mud_brick",name:"Bake Mud Brick",requiredTech:"clay_shaping",inputs:{clay:2,stick:1},output:"mud_brick",outputCount:2,timeCost:3},{id:"craft_clay_pot",name:"Throw Clay Pot",requiredTech:"clay_shaping",inputs:{clay:2},output:"clay_pot",outputCount:1,timeCost:3},{id:"craft_copper_ingot",name:"Smelt Copper",requiredTech:"metallurgy_smelting",inputs:{copper_ore:2,firewood:1},output:"copper_ingot",outputCount:1,timeCost:6},{id:"craft_copper_axe",name:"Forge Copper Axe",requiredTech:"metallurgy_smelting",inputs:{copper_ingot:2,stick:1},output:"copper_axe",outputCount:1,timeCost:5},{id:"craft_timber",name:"Saw Timber Planks",requiredTech:"carpentry",inputs:{wood_log:1},output:"timber_plank",outputCount:3,timeCost:3},{id:"craft_cut_stone",name:"Chisel Cut Stone",requiredTech:"stone_masonry",inputs:{stone:2},output:"cut_stone",outputCount:2,timeCost:4},{id:"craft_flour",name:"Mill Grain to Flour",requiredTech:"grain_milling",inputs:{harvested_wheat:2},output:"flour",outputCount:2,timeCost:3},{id:"craft_bread",name:"Bake Fresh Bread",requiredTech:"grain_milling",inputs:{flour:1,firewood:1},output:"bread",outputCount:2,timeCost:4},{id:"craft_iron_ingot",name:"Smelt Iron Ingot",requiredTech:"iron_working",inputs:{iron_ore:2,firewood:2},output:"iron_ingot",outputCount:1,timeCost:7},{id:"craft_iron_tools",name:"Forge Iron Tools",requiredTech:"iron_working",inputs:{iron_ingot:2,timber_plank:1},output:"iron_tools",outputCount:1,timeCost:6},{id:"craft_gold_coin",name:"Mint Gold Coins",requiredTech:"coin_minting",inputs:{gold_ore:1,firewood:1},output:"gold_coin",outputCount:5,timeCost:5},{id:"craft_fish_trap",name:"Weave Wicker Fish Trap",requiredTech:"river_fishing",inputs:{stick:4,wild_seeds:2},output:"fish_trap",outputCount:1,timeCost:4},{id:"cook_fish",name:"Roast River Fish",requiredTech:"contained_hearth",inputs:{fresh_fish:1,firewood:1},output:"cooked_fish",outputCount:1,timeCost:3},{id:"craft_winter_cloak",name:"Tailor Insulated Winter Cloak",requiredTech:"tailoring_insulation",inputs:{animal_hide:2,raw_wool:2},output:"winter_cloak",outputCount:1,timeCost:6},{id:"craft_braided_lasso",name:"Weave Braided Lasso",requiredTech:"horse_whispering",inputs:{raw_wool:2,animal_hide:1},output:"braided_lasso",outputCount:1,timeCost:4},{id:"craft_cargo_cart",name:"Assemble Cargo Cart",requiredTech:"wheel_and_cart",inputs:{wood_log:2,timber_plank:2},output:"cargo_cart",outputCount:1,timeCost:8},{id:"craft_wooden_boat",name:"Carve Wooden Boat",requiredTech:"shipbuilding",inputs:{wood_log:3,timber_plank:2},output:"wooden_boat",outputCount:1,timeCost:9},{id:"craft_written_scroll",name:"Inscribe Scroll",requiredTech:"written_language",inputs:{animal_hide:1,wild_seeds:1},output:"written_scroll",outputCount:1,timeCost:5},{id:"craft_wooden_shield",name:"Craft Wooden Shield",requiredTech:"defensive_tactics",inputs:{timber_plank:2,animal_hide:1},output:"wooden_shield",outputCount:1,timeCost:6},{id:"craft_hunting_bow",name:"Carve Hunting Bow",requiredTech:"defensive_tactics",inputs:{stick:3,raw_wool:1},output:"hunting_bow",outputCount:1,timeCost:5}],rs={campfire:{type:"campfire",name:"Contained Campfire & Hearth",description:"A ring of river stones containing glowing embers, providing radiant warmth and night light.",requiredTech:"contained_hearth",inputs:{stick:4,stone:4},workNeeded:25,maxWorkers:2,maxStorage:20,housingCapacity:0},lean_to:{type:"lean_to",name:"Thatched Lean-To",description:"Basic shelter shielding pioneers from cold and wind.",requiredTech:"primitive_shelter",inputs:{stick:8,wood_log:2},workNeeded:35,maxWorkers:2,maxStorage:30,housingCapacity:2},mud_hut:{type:"mud_hut",name:"Mudbrick Hut",description:"Durable residential hut allowing family expansion.",requiredTech:"mudbrick_architecture",inputs:{mud_brick:8,wood_log:3},workNeeded:60,maxWorkers:3,maxStorage:50,housingCapacity:4},farm_plot:{type:"farm_plot",name:"Irrigated Farm Plot",description:"Regularly produces abundant harvested wheat.",requiredTech:"wild_agriculture",inputs:{wild_seeds:4,stick:4},workNeeded:40,maxWorkers:2,maxStorage:60,production:{outputs:{harvested_wheat:4},interval:80}},clay_kiln:{type:"clay_kiln",name:"Clay Kiln",description:"Bakes bricks and pots quickly.",requiredTech:"clay_shaping",inputs:{clay:6,stone:4},workNeeded:50,maxWorkers:2,maxStorage:40},animal_pen:{type:"animal_pen",name:"Fenced Animal Pen",description:"Enclosed wooden paddock for domestic sheep, periodically producing harvested wool.",requiredTech:"animal_husbandry",inputs:{stick:10,wood_log:4},workNeeded:65,maxWorkers:2,maxStorage:60,production:{outputs:{raw_wool:2},interval:100}},storage_barn:{type:"storage_barn",name:"Storage Barn",description:"Massive central storage for settlement surplus.",requiredTech:"mudbrick_architecture",inputs:{mud_brick:12,wood_log:8},workNeeded:80,maxWorkers:4,maxStorage:300,housingCapacity:0},thatched_cabin:{type:"thatched_cabin",name:"Thatched Log Cabin",description:"Warm, comfortable timber home for growing families.",requiredTech:"carpentry",inputs:{timber_plank:10,stone:4},workNeeded:90,maxWorkers:3,maxStorage:80,housingCapacity:5},stone_well:{type:"stone_well",name:"Freshwater Well",description:"Infinite clean water source for hydration and farms.",requiredTech:"stone_masonry",inputs:{cut_stone:8,timber_plank:2},workNeeded:70,maxWorkers:2,maxStorage:50},smelter:{type:"smelter",name:"Foundry Smelter",description:"Smelts raw ores into copper and iron ingots.",requiredTech:"metallurgy_smelting",inputs:{stone:10,clay:6},workNeeded:100,maxWorkers:2,maxStorage:100},blacksmith:{type:"blacksmith",name:"Blacksmith Forge",description:"Forges metal tools, axes, and construction nails.",requiredTech:"metallurgy_smelting",inputs:{cut_stone:10,timber_plank:6,copper_ingot:2},workNeeded:120,maxWorkers:2,maxStorage:120},windmill:{type:"windmill",name:"Grain Windmill",description:"Automatically grinds wheat into flour.",requiredTech:"grain_milling",inputs:{timber_plank:16,cut_stone:6},workNeeded:140,maxWorkers:2,maxStorage:150,production:{inputs:{harvested_wheat:2},outputs:{flour:3},interval:60}},bakery:{type:"bakery",name:"Town Bakery",description:"Bakes golden loaves of bread in bulk.",requiredTech:"grain_milling",inputs:{cut_stone:12,mud_brick:8},workNeeded:120,maxWorkers:3,maxStorage:120,production:{inputs:{flour:2,firewood:1},outputs:{bread:4},interval:70}},timber_house:{type:"timber_house",name:"Timber Townhouse",description:"Spacious two-story residence for citizens.",requiredTech:"carpentry",inputs:{timber_plank:16,cut_stone:6},workNeeded:130,maxWorkers:3,maxStorage:100,housingCapacity:6},masonry_house:{type:"masonry_house",name:"Cobblestone Manor",description:"Luxurious stone home providing high happiness and safety.",requiredTech:"stone_masonry",inputs:{cut_stone:20,timber_plank:12},workNeeded:160,maxWorkers:4,maxStorage:150,housingCapacity:8},market_stall:{type:"market_stall",name:"Marketplace Plaza",description:"Hub for trade, exchange of commodities, and coin transactions.",requiredTech:"commerce_and_markets",inputs:{timber_plank:12,cut_stone:6},workNeeded:150,maxWorkers:4,maxStorage:400},mint_bank:{type:"mint_bank",name:"Mint & City Bank",description:"Mints coins, manages treasury loans, and stabilizes inflation.",requiredTech:"coin_minting",inputs:{cut_stone:24,timber_plank:16,copper_ingot:4},workNeeded:220,maxWorkers:3,maxStorage:500},town_hall:{type:"town_hall",name:"Grand City Hall",description:"Civic headquarters governing city expansion, taxes, and celebrations.",requiredTech:"coin_minting",inputs:{cut_stone:30,timber_plank:24,gold_coin:10},workNeeded:300,maxWorkers:5,maxStorage:1e3,housingCapacity:4},watchtower:{type:"watchtower",name:"Defense Watchtower",description:"Expands fog of war radius and safeguards citizens.",requiredTech:"iron_working",inputs:{timber_plank:14,cut_stone:8,iron_tools:1},workNeeded:110,maxWorkers:2,maxStorage:50},fountain:{type:"fountain",name:"Marble City Fountain",description:"Great civic monument bringing awe, pride, and high happiness to citizens.",requiredTech:"civic_monuments",inputs:{cut_stone:28,gold_coin:15},workNeeded:250,maxWorkers:4,maxStorage:50},ancestral_cairn:{type:"ancestral_cairn",name:"Ancestral Memorial Cairn",description:"A sacred stone cairn commemorating passed ancestors, bringing peace and reverence to family descendants.",requiredTech:"contained_hearth",inputs:{stone:6,wild_seeds:2},workNeeded:20,maxWorkers:2,maxStorage:20,housingCapacity:0},settlement_totem:{type:"settlement_totem",name:"Settlement Entrance Totem",description:"A hand-carved wooden gateway marking the territory and founding name of the pioneer village.",requiredTech:"primitive_shelter",inputs:{wood_log:2,stick:4},workNeeded:30,maxWorkers:2,maxStorage:10,housingCapacity:0},wooden_bridge:{type:"wooden_bridge",name:"Wooden River Footbridge",description:"Sturdy timber log walkway spanning over water, allowing pioneers, animals, and carts to cross rivers.",requiredTech:"bridge_engineering",inputs:{wood_log:3,stick:4},workNeeded:35,maxWorkers:2,maxStorage:0,housingCapacity:0},waterwheel:{type:"waterwheel",name:"River Waterwheel Mill",description:"A riverside water-powered mill whose rotating paddles harness water currents to automatically process harvested wheat into fine flour.",requiredTech:"water_hydraulics",inputs:{timber_plank:10,stone:6,iron_tools:1},workNeeded:90,maxWorkers:2,maxStorage:80,housingCapacity:0,production:{inputs:{harvested_wheat:1},outputs:{flour:2},interval:15}},horse_stable:{type:"horse_stable",name:"Equine Timber Stable",description:"A spacious wooden stable with hay mangers and stalls to shelter and breed domesticated horses.",requiredTech:"horse_whispering",inputs:{wood_log:6,timber_plank:4,raw_wool:2},workNeeded:50,maxWorkers:2,maxStorage:40,housingCapacity:0},dock_pier:{type:"dock_pier",name:"Shoreline Harbor Dock",description:"A weathered wooden boardwalk pier jutting out over water for mooring boats and embarking on voyages.",requiredTech:"shipbuilding",inputs:{timber_plank:6,wood_log:3},workNeeded:40,maxWorkers:2,maxStorage:40,housingCapacity:0},great_library:{type:"great_library",name:"Great Archive & Library",description:"A grand stone repository of scrolls, philosophy, and history, accelerating technological research.",requiredTech:"written_language",inputs:{cut_stone:12,timber_plank:8,written_scroll:2},workNeeded:120,maxWorkers:3,maxStorage:100,housingCapacity:0},timber_palisade:{type:"timber_palisade",name:"Sharpened Timber Palisade",description:"A sturdy wall of sharpened logs protecting the settlement perimeter from predators.",requiredTech:"defensive_tactics",inputs:{wood_log:2,stick:2},workNeeded:15,maxWorkers:1,maxStorage:0,housingCapacity:0},watch_gate:{type:"watch_gate",name:"Fortified Watch Gate",description:"A crenellated wooden gatehouse manned by settlement sentinels to monitor incoming travelers.",requiredTech:"defensive_tactics",inputs:{wood_log:4,timber_plank:2},workNeeded:35,maxWorkers:2,maxStorage:10,housingCapacity:0},stone_aqueduct:{type:"stone_aqueduct",name:"Stone Aqueduct Arch",description:"Elevated stone flume carrying fresh water from rivers to automatically irrigate nearby farm plots.",requiredTech:"aqueduct_engineering",inputs:{cut_stone:4,mud_brick:4},workNeeded:45,maxWorkers:2,maxStorage:0,housingCapacity:0},water_cistern:{type:"water_cistern",name:"Central Water Cistern",description:"A deep stone reservoir that stores fresh water, ensuring crops survive even in dry summers.",requiredTech:"aqueduct_engineering",inputs:{cut_stone:6,clay:4},workNeeded:50,maxWorkers:2,maxStorage:50,housingCapacity:0}},wt=16,li=32;class xg{constructor(e=42){R(this,"chunks",new Map);R(this,"buildings",new Map);R(this,"noiseGen");R(this,"resourceNoise");R(this,"oreNoise");R(this,"seed");R(this,"day",1);R(this,"timeOfDay",7);R(this,"season","Spring");R(this,"weather","Clear");R(this,"weatherTimer",180);R(this,"settlementName","Haven of Eden");R(this,"width",120);R(this,"height",80);R(this,"temperatureCelsius",18);R(this,"seasonProgress",0);R(this,"isSolsticeActive",!1);this.seed=e,this.noiseGen=new ss(e),this.resourceNoise=new ss(e+101),this.oreNoise=new ss(e+202);for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)this.getOrCreateChunk(t,i);this.carveSpawnClearing()}chunkKey(e,t){return`${e},${t}`}getOrCreateChunk(e,t){const i=this.chunkKey(e,t);let s=this.chunks.get(i);return s||(s=this.generateChunk(e,t),this.chunks.set(i,s)),s}generateChunk(e,t){const i=[];for(let s=0;s<wt;s++){i[s]=[];for(let n=0;n<wt;n++){const r=e*wt+s,o=t*wt+n,l=this.noiseGen.fbm(r*.035,o*.035,4,.5),c=this.noiseGen.fbm((r+500)*.03,(o+500)*.03,3,.5),h=this.resourceNoise.noise2D(r*.12,o*.12),u=this.oreNoise.noise2D(r*.15,o*.15);let d="grass",m=0,g=0,v=.05;l<.28?d="deep_water":l<.35?d="water":l<.39?c>.55&&h>.6?(d="clay_pit",m=15,g=25,v=.08):d="grass":l>.72?u>.85?(d="gold_vein",m=8,g=8,v=0):u>.72?(d="iron_vein",m=14,g=14,v=0):u>.6?(d="copper_vein",m=16,g=16,v=0):(d="stone_hill",m=30,g=40,v=.02):c>.65?(d="dense_forest",m=25,g=30,v=.1):c>.45?h>.5?(d="sparse_trees",m=12,g=16,v=.12):h<.25?(d="fertile_soil",m=10,g=15,v=.2):d="grass":(d="grass",h>.68&&(d="fertile_soil",m=8,g=12,v=.2)),i[s][n]={x:r,y:o,type:d,resourceAmount:m,maxResource:g,regrowthRate:v,elevation:l,moisture:c,isRevealed:!1,isInSight:!1}}}return{cx:e,cy:t,tiles:i}}carveSpawnClearing(){for(let e=-3;e<=3;e++)for(let t=-3;t<=3;t++){const i=this.getTile(e,t);i&&(Math.abs(e)<=1&&Math.abs(t)<=1?(i.type="grass",i.resourceAmount=0):e===2&&t===0?(i.type="fertile_soil",i.resourceAmount=12,i.maxResource=15):e===-2&&t===1?(i.type="sparse_trees",i.resourceAmount=10,i.maxResource=15):e===0&&t===3&&(i.type="water"))}}getTile(e,t){var l;const i=Math.floor(e/wt),s=Math.floor(t/wt),n=this.chunks.get(this.chunkKey(i,s));if(!n)return;const r=(e%wt+wt)%wt,o=(t%wt+wt)%wt;return(l=n.tiles[r])==null?void 0:l[o]}setTileType(e,t,i){const s=this.getTile(e,t);s&&(s.type=i)}isWalkable(e,t,i=!1){const s=this.getTile(e,t);return s?i&&(s.type==="water"||s.type==="deep_water")||s.building&&(s.building.type==="wooden_bridge"||s.building.type==="dock_pier")&&s.building.isCompleted||s.type==="water"&&this.season==="Winter"&&this.temperatureCelsius<-2?!0:s.type==="deep_water"||s.type==="water"?!1:s.building&&s.building.isCompleted?!!["campfire","farm_plot","fountain","ancestral_cairn","settlement_totem","wooden_bridge","dock_pier","watch_gate","stone_aqueduct"].includes(s.building.type):!0:!1}placeBuilding(e,t,i,s){const n=this.getTile(t,i);if(!n||n.building)return null;if(e==="wooden_bridge"){if(n.type!=="water")return null}else if(e==="dock_pier"){if(![this.getTile(t+1,i),this.getTile(t-1,i),this.getTile(t,i+1),this.getTile(t,i-1)].some(h=>h&&(h.type==="water"||h.type==="deep_water"))&&n.type!=="water")return null}else if(e==="waterwheel"){if(![this.getTile(t+1,i),this.getTile(t-1,i),this.getTile(t,i+1),this.getTile(t,i-1)].some(h=>h&&(h.type==="water"||h.type==="deep_water"))||n.type==="deep_water")return null}else if(n.type==="water"||n.type==="deep_water")return null;const r=rs[e],o={id:`bld_${Date.now()}_${Math.floor(Math.random()*1e3)}`,type:e,x:t,y:i,level:1,hp:100,maxHp:100,builderId:s,assignedWorkers:[],storage:{},maxStorage:r.maxStorage,progress:0,isCompleted:!1};return n.building=o,this.buildings.set(o.id,o),o}updateTimeAndWeather(e){this.timeOfDay+=e/60,this.timeOfDay>=24&&(this.timeOfDay-=24,this.day++,this.regrowResources());const t=["Spring","Summer","Autumn","Winter"],i=7,s=(this.day-1)%(i*4),n=Math.floor(s/i);this.season=t[n],this.seasonProgress=(s%i+this.timeOfDay/24)/i;const r=s===10||s===24;this.isSolsticeActive=r&&this.timeOfDay>=17.5&&this.timeOfDay<=22.5;const o={Spring:17,Summer:27,Autumn:10,Winter:-5},l={Spring:"Summer",Summer:"Autumn",Autumn:"Winter",Winter:"Spring"},c=o[this.season],h=o[l[this.season]],u=c+(h-c)*this.seasonProgress,m=Math.sin((this.timeOfDay-8)/24*Math.PI*2)*5;let g=0;if(this.weather==="Rain"?g=-3.5:this.weather==="Overcast"&&(g=-1.5),this.temperatureCelsius=Math.round((u+m+g)*10)/10,this.weatherTimer-=e,this.weatherTimer<=0){this.weatherTimer=180+Math.random()*300;const v=Math.random();v<.6?this.weather="Clear":v<.85?this.weather="Overcast":this.weather="Rain"}this.updateBuildingProductions()}regrowResources(){if(this.season!=="Winter")for(const e of this.chunks.values())for(let t=0;t<wt;t++)for(let i=0;i<wt;i++){const s=e.tiles[t][i];s.resourceAmount<s.maxResource&&(s.resourceAmount=Math.min(s.maxResource,s.resourceAmount+Math.ceil(s.regrowthRate*(this.weather==="Rain"?2:1))))}}updateBuildingProductions(){const e=this.weather==="Rain";for(const t of this.buildings.values()){if(!t.isCompleted)continue;if(t.meta=t.meta||{},t.type==="farm_plot"){let s=this.season==="Winter";if(s){for(const n of this.buildings.values())if(n.type==="campfire"&&n.isCompleted&&Math.hypot(n.x-t.x,n.y-t.y)<=3.5){s=!1;break}}if(!s){let n=!1;for(const o of this.buildings.values())if(o.type==="stone_aqueduct"&&o.isCompleted&&Math.hypot(o.x-t.x,o.y-t.y)<=4.5){n=!0;break}const r=e||n?4.2:2.2;t.meta.isIrrigated=n,t.meta.cropProgress=(t.meta.cropProgress||0)+r,t.meta.cropProgress<25?t.meta.cropStage="tilled":t.meta.cropProgress<60?t.meta.cropStage="seedling":t.meta.cropProgress<100?t.meta.cropStage="growing":(t.meta.cropStage="ripe",(t.storage.harvested_wheat||0)<6&&(t.storage.harvested_wheat=(t.storage.harvested_wheat||0)+2,t.storage.wild_seeds=(t.storage.wild_seeds||0)+1))}}t.type==="waterwheel"&&(t.meta.wheelRotation=((t.meta.wheelRotation||0)+.08)%(Math.PI*2),t.meta.prodTimer=(t.meta.prodTimer||0)+1,t.meta.prodTimer>=25&&(t.meta.prodTimer=0,(t.storage.harvested_wheat||0)>0&&(t.storage.harvested_wheat=(t.storage.harvested_wheat||0)-1,t.storage.flour=(t.storage.flour||0)+2)));const i=rs[t.type];if(i.production&&(t.meta.prodTimer=(t.meta.prodTimer||0)+1,t.meta.prodTimer>=i.production.interval)){t.meta.prodTimer=0;for(const[s,n]of Object.entries(i.production.outputs)){const r=s;t.storage[r]=(t.storage[r]||0)+(n||1)}}}}revealRadius(e,t,i){const s=i*i,n=Math.floor(e-i),r=Math.ceil(e+i),o=Math.floor(t-i),l=Math.ceil(t+i),c=Math.floor(n/wt),h=Math.floor(r/wt),u=Math.floor(o/wt),d=Math.floor(l/wt);for(let m=c;m<=h;m++)for(let g=u;g<=d;g++)this.getOrCreateChunk(m,g);for(let m=n;m<=r;m++)for(let g=o;g<=l;g++)if((m-e)*(m-e)+(g-t)*(g-t)<=s){const f=this.getTile(m,g);f&&(f.isRevealed=!0,f.isInSight=!0)}}resetSight(){for(const e of this.chunks.values())for(let t=0;t<wt;t++)for(let i=0;i<wt;i++)e.tiles[t][i].isInSight=!1}}class Sg{constructor(){R(this,"items",new Map);R(this,"treasuryCoins",0);R(this,"totalGdp",0);R(this,"transactionCount",0);R(this,"isCurrencyUnlocked",!1);this.initMarket()}initMarket(){const e=[{item:"berries",name:"Fresh Berries",category:"food",basePrice:1},{item:"raw_meat",name:"Raw Hunted Meat",category:"food",basePrice:3},{item:"cooked_meat",name:"Roast Steak",category:"food",basePrice:6},{item:"harvested_wheat",name:"Raw Wheat",category:"food",basePrice:2},{item:"flour",name:"Ground Flour",category:"food",basePrice:3},{item:"bread",name:"Baked Loaf",category:"food",basePrice:6},{item:"cooked_food",name:"Roast Food",category:"food",basePrice:3},{item:"animal_hide",name:"Animal Pelt",category:"material",basePrice:4},{item:"raw_wool",name:"Sheared Wool",category:"material",basePrice:4},{item:"bone",name:"Animal Bone",category:"material",basePrice:2},{item:"tanned_leather",name:"Tanned Leather",category:"material",basePrice:8},{item:"stick",name:"Wood Sticks",category:"material",basePrice:1},{item:"stone",name:"Rough Stone",category:"material",basePrice:1},{item:"flint",name:"Sharp Flint",category:"material",basePrice:2},{item:"clay",name:"River Clay",category:"material",basePrice:2},{item:"wood_log",name:"Hardwood Log",category:"material",basePrice:3},{item:"firewood",name:"Split Firewood",category:"material",basePrice:2},{item:"mud_brick",name:"Sun-Dried Brick",category:"construction",basePrice:3},{item:"timber_plank",name:"Milled Timber",category:"construction",basePrice:4},{item:"cut_stone",name:"Chiseled Stone",category:"construction",basePrice:5},{item:"copper_ore",name:"Copper Ore",category:"material",basePrice:4},{item:"copper_ingot",name:"Copper Ingot",category:"material",basePrice:9},{item:"iron_ore",name:"Iron Ore",category:"material",basePrice:6},{item:"iron_ingot",name:"Iron Ingot",category:"material",basePrice:14},{item:"gold_ore",name:"Gold Ore",category:"material",basePrice:12},{item:"stone_axe",name:"Stone Axe",category:"tool",basePrice:5},{item:"flint_spear",name:"Flint Spear",category:"tool",basePrice:6},{item:"woven_basket",name:"Woven Basket",category:"tool",basePrice:5},{item:"clay_pot",name:"Earthenware Pot",category:"tool",basePrice:4},{item:"copper_axe",name:"Bronze Axe",category:"tool",basePrice:16},{item:"iron_tools",name:"Iron Forged Tools",category:"tool",basePrice:24},{item:"fine_clothes",name:"Tailored Robes",category:"luxury",basePrice:35}];for(const t of e)this.items.set(t.item,{item:t.item,name:t.name,category:t.category,basePrice:t.basePrice,currentPrice:t.basePrice,supply:10,demand:10,totalVolumeTraded:0,history:[t.basePrice]})}registerSupply(e,t=1){const i=this.items.get(e);i&&(i.supply+=t)}registerDemand(e,t=1){const i=this.items.get(e);i&&(i.demand+=t)}executeTrade(e,t,i){const s=this.items.get(e);if(!s)return{success:!1,cost:0};const r=s.currentPrice*t;return this.isCurrencyUnlocked&&i<r?{success:!1,cost:r}:(s.supply=Math.max(1,s.supply-t),s.demand+=t,s.totalVolumeTraded+=t,this.transactionCount++,this.totalGdp+=r,{success:!0,cost:r})}updateMarketTicks(){for(const e of this.items.values()){const t=e.demand/Math.max(1,e.supply);let i=e.basePrice*Math.pow(t,.45);i=Math.max(Math.round(e.basePrice*.4),Math.min(Math.round(e.basePrice*4.5),Math.round(i))),e.currentPrice=Math.round(e.currentPrice*.85+i*.15),e.currentPrice<1&&(e.currentPrice=1),e.supply=Math.max(5,Math.round(e.supply*.95+2)),e.demand=Math.max(5,Math.round(e.demand*.95+2)),e.history.push(e.currentPrice),e.history.length>20&&e.history.shift()}}getPrice(e){var t;return((t=this.items.get(e))==null?void 0:t.currentPrice)??1}unlockCurrency(){this.isCurrencyUnlocked=!0,this.treasuryCoins=50}}function Mg(a){return a<3?"infant":a<13?"child":a<18?"apprentice":a<60?"adult":"elder"}function wg(){const a={id:"agent_adam",name:"Adam",gender:"male",age:20,lifeStage:"adult",x:0,y:0,vx:0,vy:0,facing:"down",color:"#38bdf8",avatarSeed:101,needs:{hunger:80,energy:90,warmth:85,social:75,curiosity:80,health:100},role:"Pioneer",inventory:{},maxCarryWeight:30,relationships:{},childrenIds:[],parentsIds:[],generation:1,memories:[{text:"Opened my eyes to a boundless expanse of green and water. I am Adam.",day:1,importance:10}],currentGoal:"Gaze in wonder at the virgin wilderness",currentAction:"Observing surroundings",activeThought:"The earth is cool beneath my bare feet. What are these tall green stalks and river stones?",thoughtTimer:12,speechBubble:{text:"Eve, our hands are empty, but the world is full of wonders. Let us explore carefully.",timer:8,isSpeech:!0},path:[],stateTimer:0,coins:0,knowledge:new Set},e={id:"agent_eve",name:"Eve",gender:"female",age:19,lifeStage:"adult",x:1,y:0,vx:0,vy:0,facing:"left",color:"#ec4899",avatarSeed:202,needs:{hunger:85,energy:95,warmth:85,social:80,curiosity:95,health:100},role:"Pioneer",inventory:{},maxCarryWeight:30,relationships:{},childrenIds:[],parentsIds:[],generation:1,memories:[{text:"Stood beside Adam under the open sky. I am Eve.",day:1,importance:10}],currentGoal:"Touch unfamiliar plants and examine the riverbank",currentAction:"Feeling morning breeze",activeThought:"I see bright colors in the foliage. We must look closer and learn their nature.",thoughtTimer:12,speechBubble:{text:"Walk beside me, Adam. Let us see what this living paradise holds.",timer:8,isSpeech:!0},path:[],stateTimer:0,coins:0,knowledge:new Set};return a.relationships[e.id]={targetId:e.id,affection:15,trust:20,lastInteracted:0,stage:"strangers"},a.spouseId=void 0,e.relationships[a.id]={targetId:a.id,affection:15,trust:20,lastInteracted:0,stage:"strangers"},e.spouseId=void 0,[a,e]}function Tg(a,e=0,t=0){const i="Seth",s="Miriam",n={id:`agent_${i.toLowerCase()}_${Date.now()}`,name:i,gender:"male",age:20,lifeStage:"adult",x:e,y:t,vx:0,vy:0,facing:"down",color:"#38bdf8",avatarSeed:Math.floor(Math.random()*1e3),needs:{hunger:85,energy:90,warmth:85,social:75,curiosity:80,health:100},role:"Pioneer",inventory:{},maxCarryWeight:30,relationships:{},childrenIds:[],parentsIds:[],generation:a,memories:[{text:"Awoke upon the ancestral earth. We carry on the flame.",day:1,importance:10}],currentGoal:"Honor the ancestral cairns and build anew",currentAction:"Reflecting at ancestral grounds",activeThought:"The elders have passed into the earth, but their legacy lives through us.",thoughtTimer:10,speechBubble:{text:"We must tend the hearth and honor those who came before us.",timer:7,isSpeech:!0},path:[],stateTimer:0,coins:0,knowledge:new Set(["wild_nourishment","discovery_wood","discovery_stone","discovery_flint","discovery_fire","contained_hearth"])},r={id:`agent_${s.toLowerCase()}_${Date.now()+1}`,name:s,gender:"female",age:19,lifeStage:"adult",x:e+1,y:t,vx:0,vy:0,facing:"down",color:"#f472b6",avatarSeed:Math.floor(Math.random()*1e3),needs:{hunger:85,energy:90,warmth:85,social:75,curiosity:80,health:100},role:"Pioneer",inventory:{},maxCarryWeight:30,relationships:{},childrenIds:[],parentsIds:[],generation:a,memories:[{text:`Stood beside ${i} before the ancient memorial cairns.`,day:1,importance:10}],currentGoal:"Explore the ancestral lands and gather sustenance",currentAction:"Examining surroundings",activeThought:"A new dawn rises over this settlement.",thoughtTimer:10,speechBubble:{text:`Together, ${i}, we shall rebuild the village.`,timer:7,isSpeech:!0},path:[],stateTimer:0,coins:0,knowledge:new Set(["wild_nourishment","discovery_wood","discovery_stone","discovery_flint","discovery_fire","contained_hearth"])};return n.relationships[r.id]={targetId:r.id,affection:35,trust:35,lastInteracted:0,stage:"friends"},r.relationships[n.id]={targetId:n.id,affection:35,trust:35,lastInteracted:0,stage:"friends"},[n,r]}const Ec=["Cain","Abel","Seth","Enoch","Jared","Noah","Kenan","Silas","Ethan","Lucas","Rowan","Felix","Leo"],Ac=["Awan","Azura","Naamah","Lydia","Chloe","Mara","Zara","Elena","Iris","Maya","Nora","Clara","Aria"];function Eg(a,e,t,i){const s=Math.random()>.5,n=s?Ec:Ac,r=n[Math.floor(Math.random()*n.length)],o=`agent_${r.toLowerCase()}_${Date.now()}`,l={id:o,name:r,gender:s?"male":"female",age:0,lifeStage:"infant",x:a.x,y:a.y,vx:0,vy:0,facing:"down",color:s?"#60a5fa":"#f472b6",avatarSeed:Math.floor(Math.random()*1e4),needs:{hunger:90,energy:100,warmth:90,social:90,curiosity:100,health:100},role:"Infant",inventory:{},maxCarryWeight:20,relationships:{[a.id]:{targetId:a.id,affection:95,trust:95,lastInteracted:0,stage:"friends"},[e.id]:{targetId:e.id,affection:95,trust:95,lastInteracted:0,stage:"friends"}},childrenIds:[],parentsIds:[a.id,e.id],generation:i,memories:[{text:`Born in our thriving settlement to ${a.name} and ${e.name}.`,day:t,importance:10}],currentGoal:"Resting safely in family crib",currentAction:"Babbling in crib",activeThought:"Warmth and soft voices all around me...",thoughtTimer:10,speechBubble:{text:"Goo... mama!",timer:6,isSpeech:!0},path:[],stateTimer:0,coins:5,knowledge:new Set([...a.knowledge,...e.knowledge])};return a.childrenIds.push(o),e.childrenIds.push(o),l}function Ag(a){var A;const e=Math.random()>.5,t=e?"male":"female",i=e?Ec:Ac,s=((A=a.name)==null?void 0:A.trim())||i[Math.floor(Math.random()*i.length)],n=["#38bdf8","#0ea5e9","#6366f1","#14b8a6","#06b6d4","#3b82f6","#10b981"],r=["#ec4899","#f43f5e","#a855f7","#fb7185","#d946ef","#fb923c","#e11d48"],o=e?n[Math.floor(Math.random()*n.length)]:r[Math.floor(Math.random()*r.length)],l=Math.floor(Math.random()*1e6),c=18+Math.floor(Math.random()*10),h=["Pioneer","Forager","Woodcutter","Builder","Farmer","Hunter","Smith","Scholar"],u=h[Math.floor(Math.random()*h.length)],d=a.x??0,m=a.y??0,g=a.generation??1,v=`agent_${s.toLowerCase().replace(/[^a-z0-9]/g,"")}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,f={hunger:75+Math.floor(Math.random()*20),energy:85+Math.floor(Math.random()*15),warmth:80+Math.floor(Math.random()*15),social:55+Math.floor(Math.random()*40),curiosity:65+Math.floor(Math.random()*35),health:95+Math.floor(Math.random()*5)},p=45+Math.floor(Math.random()*20),x=["The wind carries the scent of pine and water. A brand new world awaits me.","My hands are eager to work. What can I build for this community?","I feel a curious spark in my chest. So many wild mysteries to unravel.","The earth here is rich and fertile. We can cultivate greatness from this soil.","What remarkable people live in this valley? I must introduce myself.","A hearth, a roof, a song—simple wonders make life worth living."],T=x[Math.floor(Math.random()*x.length)],_=[`Greetings, friends! I am ${s}, ready to work with you all.`,`May our hearth never grow cold! I am ${s}.`,`The sun shines bright today! Pleased to meet you, I am ${s}.`,`I come seeking honest labor and fellowship. Call me ${s}.`,`What an untamed paradise this is! Hello everyone, I am ${s}.`],w=_[Math.floor(Math.random()*_.length)],S={id:v,name:s,gender:t,age:c,lifeStage:"adult",x:d,y:m,vx:0,vy:0,facing:"down",color:o,avatarSeed:l,needs:f,role:u,inventory:{},maxCarryWeight:p,relationships:{},childrenIds:[],parentsIds:[],generation:g,memories:[{text:`Arrived in this thriving land to forge my destiny as a ${u}.`,day:1,importance:10}],currentGoal:`Explore the settlement and contribute as a ${u}`,currentAction:"Greeting the community",activeThought:T,thoughtTimer:10,speechBubble:{text:w,timer:8,isSpeech:!0},path:[],stateTimer:0,coins:5+Math.floor(Math.random()*10),knowledge:new Set(["wild_nourishment","discovery_wood","discovery_stone","discovery_flint","discovery_fire","contained_hearth"])};if(u==="Forager"?S.inventory.woven_basket=1:u==="Builder"||u==="Smith"?S.inventory.stone_hammer=1:u==="Woodcutter"?S.inventory.stone_axe=1:u==="Hunter"?S.inventory.flint_spear=1:u==="Farmer"?S.inventory.wild_seeds=4:u==="Scholar"&&(S.inventory.written_scroll=1),a.existingAgents)for(const b of a.existingAgents)b.id!==S.id&&!b.isDeceased&&(S.relationships[b.id]={targetId:b.id,affection:25+Math.floor(Math.random()*15),trust:25+Math.floor(Math.random()*15),lastInteracted:0,stage:"friends"},b.relationships[S.id]={targetId:S.id,affection:25+Math.floor(Math.random()*15),trust:25+Math.floor(Math.random()*15),lastInteracted:0,stage:"friends"});return S}function ut(a,e,t=1){return(a.inventory[e]||0)>=t}function Tt(a,e,t=1){return Object.values(a.inventory).reduce((s,n)=>s+(n||0),0)+t>a.maxCarryWeight?!1:(a.inventory[e]=(a.inventory[e]||0)+t,!0)}function mi(a,e,t=1){return ut(a,e,t)?(a.inventory[e]=(a.inventory[e]||0)-t,a.inventory[e]<=0&&delete a.inventory[e],!0):!1}function In(a,e){return a.inventory[e]||0}class Cg{constructor(e,t,i,s){R(this,"world");R(this,"economy");R(this,"fauna");R(this,"soundEngine");R(this,"chronicles",[]);R(this,"onChronicle");this.world=e,this.economy=t,this.fauna=i,this.soundEngine=s}setFaunaManager(e){this.fauna=e}setSoundEngine(e){this.soundEngine=e}addChronicle(e,t,i,s){const n=Math.floor(this.world.timeOfDay),r=Math.floor((this.world.timeOfDay-n)*60),o=`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`,l={id:`chron_${Date.now()}_${Math.random()}`,day:this.world.day,timeStr:o,title:e,description:t,category:i,icon:s};this.chronicles.unshift(l),this.chronicles.length>80&&this.chronicles.pop(),this.onChronicle&&this.onChronicle(l)}updateAgents(e,t){const i=[];for(const s of e)this.updateAgentNeeds(s,t),this.updateAgentSpeechAndThoughts(s,t),this.updateAgentPathing(s,t),this.updatePregnancyGestation(s,e,i,t),s.activeTask?this.progressAgentTask(s,t):this.decideAgentGoal(s,e,i,t),this.world.revealRadius(s.x,s.y,6);return i}updateAgentNeeds(e,t){e.needs.hunger=Math.max(0,e.needs.hunger-.015*t),e.currentAction.toLowerCase().includes("rest")||e.currentAction.toLowerCase().includes("sleep")?e.needs.energy=Math.min(100,e.needs.energy+.12*t):e.needs.energy=Math.max(0,e.needs.energy-.012*t);const s=this.world.timeOfDay>20||this.world.timeOfDay<5.5,n=this.world.weather==="Rain",r=this.isNearWarmthSource(e.x,e.y),o=this.world.temperatureCelsius<6,l=this.world.temperatureCelsius<0;if((e.inventory.winter_cloak||0)>0&&(e.hasWinterCloak=!0),(e.inventory.cargo_cart||0)>0&&(e.hasCargoCart=!0,e.maxCarryWeight=80),r)e.needs.warmth=Math.min(100,e.needs.warmth+.35*t),e.isShivering=!1;else if(s||n||o){let h=(s?.04:0)+(n?.03:0);l?h+=.08:o&&(h+=.04),e.hasWinterCloak&&(h*=.25),e.needs.warmth=Math.max(10,e.needs.warmth-h*t),e.isShivering=o&&!e.hasWinterCloak&&e.needs.warmth<50,e.isShivering&&Math.random()<.003*t*60&&(e.activeThought="The bitter winter air freezes my breath... I must find warmth soon!")}else e.needs.warmth=Math.min(95,e.needs.warmth+.02*t),e.isShivering=!1;e.needs.social=Math.max(0,e.needs.social-.008*t),e.needs.hunger>50&&e.needs.energy>40&&(e.needs.curiosity=Math.min(100,e.needs.curiosity+.03*t)),e.huntCooldown&&e.huntCooldown>0&&(e.huntCooldown=Math.max(0,e.huntCooldown-t)),e.fishCooldown&&e.fishCooldown>0&&(e.fishCooldown=Math.max(0,e.fishCooldown-t)),e.age+=t/14400;const c=Mg(e.age);if(e.lifeStage||(e.lifeStage=c),e.lifeStage!==c){const h=e.lifeStage;if(e.lifeStage=c,c==="child"&&h==="infant")e.role="Child",this.setSpeech(e,"Look at me walk on my own! The world is so vast!",7),this.addChronicle(`Growth of ${e.name}`,`${e.name} has grown from infancy into a playful child of the settlement!`,"milestone","🌱");else if(c==="apprentice"&&h==="child"){e.role="Apprentice";const u=["farmer","builder","hunter","artisan"];e.apprenticeTrade=u[Math.floor(Math.random()*u.length)],this.setSpeech(e,`I am ready to learn the trade of a ${e.apprenticeTrade}!`,7),this.addChronicle(`Apprenticeship: ${e.name}`,`${e.name} has entered youth and begun apprenticeship as a ${e.apprenticeTrade}!`,"milestone","⚒️")}else c==="adult"&&h==="apprentice"?(e.role=e.apprenticeTrade==="farmer"?"Farmer":e.apprenticeTrade==="builder"?"Builder":e.apprenticeTrade==="hunter"?"Hunter":"Pioneer",this.setSpeech(e,"I have reached adulthood. I will work to build our homeland.",7),this.addChronicle(`Coming of Age: ${e.name}`,`${e.name} has reached full adulthood as a skilled ${e.role}!`,"milestone","🌟")):c==="elder"&&h==="adult"&&(e.role="Elder",this.setSpeech(e,"My hair turns silver like river frost. Let me share our people's wisdom.",8),this.addChronicle(`Venerable Elder ${e.name}`,`${e.name} has lived to see generations flourish and is now revered as an Elder.`,"milestone","👴"))}this.checkWinterInsulationDiscovery(e)}isNearWarmthSource(e,t){const i=Math.round(e),s=Math.round(t);for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++){const o=this.world.getTile(i+n,s+r);if(o&&o.building&&o.building.isCompleted){const l=o.building.type;if(["campfire","lean_to","mud_hut","thatched_cabin","timber_house","masonry_house","bakery"].includes(l))return!0}}return!1}updateAgentSpeechAndThoughts(e,t){e.speechBubble&&(e.speechBubble.timer-=t,e.speechBubble.timer<=0&&(e.speechBubble=void 0)),e.thoughtTimer-=t,e.thoughtTimer<=0&&(e.thoughtTimer=18+Math.random()*25,this.generateContextualThought(e))}generateContextualThought(e){if(e.activeTask){const o=e.activeTask.type,c={foraging:["I must gather what I can.","The earth provides.","So much to find here."],chopping:["Wood for the fire.","Swing hard, cut deep.","This tree will serve us well."],striking_fire:["Come on, catch a spark...","We need warmth.","Fire... dance for me."],building:["Laying the foundation.","It takes shape, slowly.","A shelter for the nights ahead."],researching:["There is so much to understand...","Ah, I see how it works now.","Knowledge is our greatest tool."],crafting:["My hands weave the materials.","Careful focus.","This will be useful."],resting:["Finally, some rest.","The ground is hard, but sleep is sweet.","I must recover my strength."],socializing:["It is good to not be alone.","We share our burdens.","Together, we endure."]}[o]||["I must focus on my task.","Work must be done."];e.activeThought=c[Math.floor(Math.random()*c.length)];return}const t=e.knowledge.has("discovery_wood"),i=e.knowledge.has("discovery_stone"),s=e.knowledge.has("discovery_fire"),n=this.world.timeOfDay,r=["The earth is vast and pristine. We must observe and understand its nature.","Every stone and branch holds a purpose if we look with patience.","I walk with bare feet upon a world that has never known footsteps.","The rhythm of sunrise and sunset teaches us when to work and when to rest.","Nature provides all we need, if only our minds can perceive it."];t||r.push("What are these tall living pillars stretching to the sky? Can their fallen limbs be held?"),i||r.push("The grey pebbles along the water... they are smooth and heavy. What are they?"),!s&&n>=18&&r.push("The shadows lengthen and the night air turns cold. Is there no warmth to drive back the darkness?"),s&&r.push("Fire... a sacred dancing spirit. It eats dry wood and gives us light and warmth."),e.activeThought=r[Math.floor(Math.random()*r.length)]}setSpeech(e,t,i=7){e.speechBubble={text:t,timer:i,isSpeech:!0}}updateAgentPathing(e,t){if(e.targetX===void 0||e.targetY===void 0)return;const i=e.targetX-e.x,s=e.targetY-e.y,n=Math.sqrt(i*i+s*s);if(n<.15){e.x=e.targetX,e.y=e.targetY,e.targetX=void 0,e.targetY=void 0,e.vx=0,e.vy=0;return}let o=e.currentAction.toLowerCase().includes("stalk")||e.currentAction.toLowerCase().includes("hunt")||e.currentGoal.toLowerCase().includes("track")?2.4:1.2;e.isRidingHorse?o*=2.2:e.isInBoat&&(o*=1.8);const l=this.world.getTile(Math.round(e.x),Math.round(e.y));((l==null?void 0:l.type)==="cobblestone_road"||(l==null?void 0:l.type)==="dirt_path")&&(o*=1.4);const c=Math.min(n,o*t);e.vx=i/n*c,e.vy=s/n*c,e.x+=e.vx,e.y+=e.vy,Math.abs(i)>Math.abs(s)?e.facing=i>0?"right":"left":e.facing=s>0?"down":"up"}setAgentMoveTarget(e,t,i){e.targetX=t,e.targetY=i}progressAgentTask(e,t){if(!e.activeTask)return;const i=e.activeTask;i.progress+=t;const s=Math.round(i.progress/i.duration*100);e.currentAction=`${i.name} (${s}%)`,i.progress>=i.duration&&(this.completeAgentTask(e,i),e.activeTask=void 0)}completeAgentTask(e,t){var i,s,n,r,o,l,c;if(t.name.includes("unfamiliar red berries")){const h=Et.find(u=>u.id==="wild_nourishment");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),Tt(e,"berries",3),Tt(e,"wild_seeds",2),this.setSpeech(e,"These red berries are juicy and sweet! They nourish our hunger and strength!",8),this.addChronicle("Discovery: Edible Berries",`${e.name} sampled wild berries and discovered they provide sweet nourishment.`,"discovery","🫐"))}else if(t.name.includes("fallen branches")||t.name.includes("tree trunk")){const h=Et.find(u=>u.id==="discovery_wood");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),Tt(e,"stick",3),(i=this.soundEngine)==null||i.playWoodThud(),this.setSpeech(e,"This fallen branch from the canopy is sturdy yet light. It is wood! We can hold and use it!",8),this.addChronicle("Discovery of Wood",`${e.name} discovered fallen branches and sticks can be gathered and used as tools.`,"discovery","🪵"))}else if(t.name.includes("heavy river stones")){const h=Et.find(u=>u.id==="discovery_stone");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),Tt(e,"stone",3),(s=this.soundEngine)==null||s.playFlintStrike(),this.setSpeech(e,"These cold, heavy river stones do not rot or bend. Stone!",8),this.addChronicle("Discovery of River Stones",`${e.name} discovered hard river stones from the waterbank.`,"discovery","🪨"))}else if(t.name.includes("Knocking two river stones")){const h=Et.find(u=>u.id==="discovery_flint");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),Tt(e,"flint",2),(n=this.soundEngine)==null||n.playFlintStrike(),this.setSpeech(e,"The rock fractured! Look at this razor-sharp shard! It can cut through anything!",8),this.addChronicle("Discovery of Flint & Sharp Edge",`${e.name} fractured a river stone and discovered razor-sharp flint shards.`,"discovery","💎"))}else if(t.name.includes("flint against stone")){const h=Et.find(u=>u.id==="discovery_sparks");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),(r=this.soundEngine)==null||r.playFlintStrike(),this.setSpeech(e,"Look! Leaping sparks of glowing light! Tiny burning stars from the rock!",8),this.addChronicle("Discovery of Percussion Sparks",`${e.name} struck flint violently against mineral rock and witnessed incandescent sparks!`,"discovery","✨"))}else if(t.name.includes("dry tinder nest")){const h=Et.find(u=>u.id==="discovery_fire");h&&(h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),(o=this.soundEngine)==null||o.playFireIgnite(),this.setSpeech(e,"FIRE! It lives! It breathes smoke, devours dry wood, and banishes the cold and dark!",9),this.addChronicle("THE DISCOVERY OF FIRE",`${e.name} caught a percussion spark in dry tinder and witnessed the miraculous birth of Fire!`,"discovery","🔥"))}else if(t.name.includes("safe hearth ring")){const h=Et.find(u=>u.id==="contained_hearth");if(h){h.discovered=!0,h.discoveredBy=e.name,h.discoveredAtDay=this.world.day,e.knowledge.add(h.id),this.setSpeech(e,"By surrounding the flame with river stones, it stays safe and will not escape into the forest! A contained hearth!",8),this.addChronicle("Contained Campfire Hearth",`${e.name} placed a circle of river stones to contain the fire safely.`,"discovery","⛺"),this.world.placeBuilding("campfire",Math.round(e.x),Math.round(e.y),e.id);const u=(l=this.world.getTile(Math.round(e.x),Math.round(e.y)))==null?void 0:l.building;u&&(u.isCompleted=!0)}}else if(t.type==="foraging"){if(t.name.includes("sweet berries"))Tt(e,"berries",2),Tt(e,"wild_seeds",1),e.currentAction="Picked sweet berries",this.economy.registerSupply("berries",2);else if(t.name.includes("kindling")||t.name.includes("dry sticks"))Tt(e,"stick",2),e.currentAction="Collected dry kindling",this.economy.registerSupply("stick",2);else if(t.name.includes("Chopping fallen timber"))Tt(e,"wood_log",1),e.currentAction="Gathered timber logs",this.economy.registerSupply("wood_log",1);else if(t.name.includes("river stones"))Tt(e,"stone",1),e.knowledge.has("discovery_flint")&&Math.random()<.5&&Tt(e,"flint",1),e.currentAction="Gathered river stones",this.economy.registerSupply("stone",1);else if(t.name.includes("clay"))Tt(e,"clay",2),e.currentAction="Dug river clay",this.economy.registerSupply("clay",2);else if(t.name.includes("Hunting")){if(this.fauna){const h=this.fauna.getNearestHuntable(e.x,e.y,3.5);if(h){h.health=0;const u=h.species==="deer",d=h.species==="sheep",m=u?3:d?2:1,g=u?2:1;Tt(e,"raw_meat",m),Tt(e,"animal_hide",g),Tt(e,"bone",u?2:1),d&&Tt(e,"raw_wool",1),this.economy.registerSupply("raw_meat",m),this.economy.registerSupply("animal_hide",g),(c=this.soundEngine)==null||c.playFlintStrike(),e.huntCooldown=20,this.setSpeech(e,`A clean strike! We brought down a wild ${h.species}!`,7),this.addChronicle(`Successful Hunt: ${h.species}`,`${e.name} hunted a wild ${h.species}, providing meat and hide for the settlement.`,"discovery","🏹")}else e.huntCooldown=15,this.setSpeech(e,"The wild game escaped into the underbrush! I must try another time.",5)}e.currentAction="Dressed and butchered wild game"}}else if(t.name.includes("Befriending forest wolf")){if(this.fauna&&ut(e,"cooked_meat",1)){mi(e,"cooked_meat",1);const h=this.fauna.getNearestTameableWolf(e.x,e.y,3);if(h){const u=e.gender==="male"?"Hunter":"Lupa";this.fauna.tameWolfIntoDog(h,e,u),this.setSpeech(e,`Look at him wag his tail! The forest wolf has become our loyal hound, ${u}!`,8),this.addChronicle("First Canine Domesticated",`${e.name} offered roasted meat to a wild wolf and welcomed domestic dog ${u} into mankind's companionship!`,"milestone","🐕")}}e.currentAction="Befriended loyal dog companion"}else t.type==="crafting"?e.currentAction=`Finished ${t.name}`:t.type==="researching"?e.currentAction="Reflecting on experiments":t.type==="building"&&(e.currentAction="Completed construction phase")}decideAgentGoal(e,t,i,s){if(e.stateTimer+=s,this.checkSettlementFounding(e),e.lifeStage==="infant"){this.handleInfantBehavior(e,t);return}if(e.lifeStage==="child"&&this.handleChildBehavior(e,t)||e.lifeStage==="elder"&&this.handleElderBehavior(e,t)||this.tryPrimitiveExplorationAndDiscovery(e))return;if(e.needs.hunger<65){if(this.tryEatFoodFromInventory(e))return;if(e.knowledge.has("wild_nourishment")){this.seekAndForageFood(e);return}}const n=this.world.timeOfDay,r=n>=21||n<5.5,o=e.needs.energy<25;if(r||o){this.seekShelterOrRest(e);return}const l=n>=19||n<6,c=e.needs.warmth<60;if(l&&c){this.seekShelterOrFire(e);return}if(!this.trySocializeOrProcreate(e,t,i,s)&&!this.tryInventOrExperiment(e)&&!this.tryWorkOnBuilding(e)&&!this.tryPlanNewBuilding(e)&&!this.tryCraftItems(e)&&!this.tryHuntingOrTaming(e)&&!this.tryRiverFishing(e)&&!this.tryBuildBridge(e)&&!this.trySolsticeCelebration(e)&&!this.tryHorseTamingOrMounting(e)&&!this.tryBoatNavigation(e)&&!this.tryGreatLibraryStudy(e)&&!this.trySentinelPatrol(e)){if(Math.random()<.15&&e.needs.hunger>60&&e.needs.energy>50){e.currentGoal="Contemplating nature",e.currentAction="Observing the horizon";return}this.gatherResourcesForSettlement(e)}}checkSettlementFounding(e){var t;if(this.world.buildings.size>=2){const i=Array.from(this.world.buildings.values()).some(r=>r.isCompleted&&["lean_to","mud_hut","thatched_cabin"].includes(r.type)),s=Array.from(this.world.buildings.values()).some(r=>r.isCompleted&&r.type==="campfire"),n=Array.from(this.world.buildings.values()).some(r=>r.type==="settlement_totem");if(i&&s&&!n){const r=Array.from(this.world.buildings.values()).find(h=>h.isCompleted&&["lean_to","mud_hut","thatched_cabin"].includes(h.type)),o=Math.round(r.x+2),l=Math.round(r.y),c=this.world.placeBuilding("settlement_totem",o,l,e.id);c&&(c.isCompleted=!0,c.meta={settlementName:"Haven of Eden",foundedDay:this.world.day}),this.world.settlementName="Haven of Eden",this.setSpeech(e,"Here by our shelter and fire, we consecrate Haven of Eden, our eternal homeland!",8),(t=this.soundEngine)==null||t.playWeddingChime(),this.addChronicle("Settlement Founded: Haven of Eden",`${e.name} and the pioneers raised an entrance totem and formally established Haven of Eden as mankind's first permanent settlement!`,"milestone","🏛️")}}}handleInfantBehavior(e,t){const i=this.findNearestBuilding(e.x,e.y,n=>n.isCompleted&&["lean_to","mud_hut","thatched_cabin","timber_house"].includes(n.type)),s=t.find(n=>e.parentsIds.includes(n.id)||n.gender==="female");if(i){if(Math.hypot(i.x-e.x,i.y-e.y)>1.2){e.currentGoal="Rest in family crib",e.currentAction="Resting in shelter crib",this.setAgentMoveTarget(e,i.x,i.y);return}}else if(s&&Math.hypot(s.x-e.x,s.y-e.y)>2){e.currentGoal="Stay close to mother",e.currentAction="Crawling near mother",this.setAgentMoveTarget(e,s.x,s.y);return}if(e.currentGoal="Rest in family crib",e.currentAction="Babbling peacefully in crib",Math.random()<.05&&!e.speechBubble){const n=["Goo... mama!","Da da!","Ba ba!","Ahhh...","Giggle!"];this.setSpeech(e,n[Math.floor(Math.random()*n.length)],4)}}handleChildBehavior(e,t){if(this.fauna&&Math.random()<.25){const s=this.fauna.animals.find(n=>n.species==="dog");if(s){if(Math.hypot(s.x-e.x,s.y-e.y)>2)return e.currentGoal=`Play with ${s.name||"companion dog"}`,e.currentAction=`Playing with ${s.name||"dog"} in meadow`,this.setAgentMoveTarget(e,s.x,s.y),!0;if(Math.random()<.15&&!e.speechBubble)return this.setSpeech(e,`Good doggy, ${s.name||"Hunter"}! Look at you wag your tail!`,5),!0}}const i=t.find(s=>e.parentsIds.includes(s.id)||s.lifeStage==="adult"&&s.id!==e.id);if(i&&Math.random()<.4){if(Math.hypot(i.x-e.x,i.y-e.y)>3)return e.currentGoal=`Watch ${i.name} work`,e.currentAction=`Following ${i.name} to learn crafts`,this.setAgentMoveTarget(e,i.x,i.y),!0;if(Math.random()<.08&&!e.speechBubble){const n=[`"${i.name}, how do river stones make sparks of fire?"`,'"Will I be strong enough to build a big cabin one day?"','"Look at that pretty bird singing in the tall trees!"','"Can I help you pick sweet red berries?"'];return this.setSpeech(e,n[Math.floor(Math.random()*n.length)],6),!0}}return Math.random()<.2?(e.currentGoal="Play in meadow",e.currentAction="Picking wildflowers and running",!0):!1}handleElderBehavior(e,t){var n,r;if(e.age>=75&&Math.random()<6e-4){const o=Math.round(e.x),l=Math.round(e.y),c=this.world.placeBuilding("ancestral_cairn",o,l,e.id);c&&(c.isCompleted=!0,c.meta={elderName:e.name,generation:e.generation,passedDay:this.world.day}),e.isDeceased=!0,e.deceasedDay=this.world.day,this.addChronicle(`Passing of Elder ${e.name}`,`Beloved Elder ${e.name} passed peacefully into eternal rest at age ${Math.floor(e.age)}. Descendants raised an Ancestral Memorial Cairn in their honor.`,"milestone","🕊️");const h=t.indexOf(e);return h>=0&&t.splice(h,1),!0}const i=this.world.timeOfDay>=19&&this.world.timeOfDay<21,s=this.isNearWarmthSource(e.x,e.y);if(i&&s&&Math.random()<.08&&!e.speechBubble){const o=['"Listen closely, young ones: long ago, our hands were empty until we struck river flint to kindle fire."','"Every tree and river has a spirit. Respect this earth, and it will always provide for our people."','"I remember when our settlement was only two souls beneath the vast sky. Look how we have grown."','"Keep the hearth flame burning bright, and no darkness will ever conquer our home."'];return this.setSpeech(e,o[Math.floor(Math.random()*o.length)],8),(n=this.soundEngine)==null||n.playFolkMelody(),!0}for(const o of this.world.buildings.values())if(o.type==="ancestral_cairn"&&o.isCompleted&&Math.hypot(o.x-e.x,o.y-e.y)<=2.5&&Math.random()<.08&&!e.speechBubble){const c=((r=o.meta)==null?void 0:r.elderName)||"our ancestors";return this.setSpeech(e,`We honor you, ${c}. Your legacy guides our children's footsteps.`,6),e.needs.social=Math.min(100,e.needs.social+20),!0}return!1}tryPrimitiveExplorationAndDiscovery(e){if(!e.knowledge.has("wild_nourishment")){const t=this.findNearestTileMatching(e.x,e.y,16,i=>i.type==="fertile_soil"&&i.resourceAmount>0);if(t)return Math.hypot(t.x-e.x,t.y-e.y)<=1.2?(e.activeTask={name:"Examining unfamiliar red berries",type:"foraging",progress:0,duration:8,targetX:t.x,targetY:t.y},e.currentAction="Inspecting wild red fruits"):(e.currentGoal="Approach unfamiliar red foliage",e.currentAction="Walking toward wild berry bush",this.setAgentMoveTarget(e,t.x,t.y)),!0}if(!e.knowledge.has("discovery_wood")){const t=this.findNearestTileMatching(e.x,e.y,16,i=>(i.type==="sparse_trees"||i.type==="dense_forest")&&i.resourceAmount>0);if(t)return Math.hypot(t.x-e.x,t.y-e.y)<=1.2?(e.activeTask={name:"Inspecting fallen branches & tree trunk",type:"foraging",progress:0,duration:10,targetX:t.x,targetY:t.y},e.currentAction="Touching tree bark and examining branches"):(e.currentGoal="Approach tall tree canopy",e.currentAction="Walking toward fallen timber",this.setAgentMoveTarget(e,t.x,t.y)),!0}if(!e.knowledge.has("discovery_stone")){const t=this.findNearestTileMatching(e.x,e.y,16,i=>i.type==="stone_hill"||i.type==="water");if(t)return Math.hypot(t.x-e.x,t.y-e.y)<=1.2?(e.activeTask={name:"Examining smooth heavy river stones",type:"foraging",progress:0,duration:10,targetX:t.x,targetY:t.y},e.currentAction="Picking up heavy river pebble"):(e.currentGoal="Examine grey stones by riverbank",e.currentAction="Walking toward stone deposit",this.setAgentMoveTarget(e,t.x,t.y)),!0}if(e.knowledge.has("discovery_stone")&&!e.knowledge.has("discovery_flint")){if(ut(e,"stone",1))return e.activeTask={name:"Knocking two river stones together",type:"researching",progress:0,duration:14},e.currentAction="Striking stones to test hardness",!0;{const t=this.findNearestTileMatching(e.x,e.y,16,i=>i.type==="stone_hill");if(t)return this.setAgentMoveTarget(e,t.x,t.y),e.currentAction="Searching for a river stone to examine",!0}}if(e.knowledge.has("discovery_flint")&&!e.knowledge.has("discovery_sparks")&&ut(e,"flint",1)&&ut(e,"stone",1))return e.activeTask={name:"Striking sharp flint against stone",type:"researching",progress:0,duration:14},e.currentAction="Striking flint at high velocity",!0;if(e.knowledge.has("discovery_sparks")&&e.knowledge.has("discovery_wood")&&!e.knowledge.has("discovery_fire")){const t=this.world.timeOfDay>=18||this.world.timeOfDay<5.5,i=e.needs.warmth<65||this.world.weather==="Rain";if((t||i||e.needs.curiosity>70)&&ut(e,"flint",1)&&ut(e,"stick",2))return e.activeTask={name:"Catching flint sparks in dry tinder nest",type:"striking_fire",progress:0,duration:22},e.currentAction="Blowing gently on warm smoky ember",this.setSpeech(e,"I see a faint wisp of smoke... breathe gently into the dry tinder nest!"),!0}return e.knowledge.has("discovery_fire")&&!e.knowledge.has("contained_hearth")&&(this.world.timeOfDay>=18||this.world.timeOfDay<5.5||e.needs.warmth<50)&&ut(e,"stone",4)&&ut(e,"stick",4)?(e.activeTask={name:"Arranging river stones into a safe hearth ring",type:"building",progress:0,duration:20},e.currentAction="Placing protective ring of river stones",!0):!1}tryEatFoodFromInventory(e){const t=["cooked_meat","cooked_fish","bread","cooked_food","fresh_fish","berries","raw_meat","harvested_wheat"];for(const i of t)if(ut(e,i,1)){mi(e,i,1);const s=i==="cooked_meat"?60:i==="cooked_fish"?55:i==="bread"?50:i==="cooked_food"?40:i==="fresh_fish"?35:i==="raw_meat"?30:25;return e.needs.hunger=Math.min(100,e.needs.hunger+s),(i==="cooked_meat"||i==="cooked_fish"||i==="cooked_food")&&(e.needs.warmth=Math.min(100,e.needs.warmth+25)),e.currentAction=`Eating ${i.replace("_"," ")}`,this.economy.registerDemand(i,1),!0}return!1}tryHuntingOrTaming(e){if(!this.fauna)return!1;if(e.knowledge.has("wolf_domestication")&&ut(e,"cooked_meat",1)){const t=this.fauna.getNearestTameableWolf(e.x,e.y,10);if(t)return Math.hypot(t.x-e.x,t.y-e.y)<=1.5?(e.activeTask={name:"Befriending forest wolf with roasted meat",type:"socializing",progress:0,duration:8,targetX:t.x,targetY:t.y},e.currentAction="Offering roast meat to cautious wolf",!0):(e.currentGoal="Approach wild wolf with food",e.currentAction="Walking gently toward wolf with meat",this.setAgentMoveTarget(e,t.x,t.y),!0)}if(e.knowledge.has("spear_hunting")&&(ut(e,"flint_spear",1)||ut(e,"stone_axe",1))){if(e.huntCooldown&&e.huntCooldown>0)return!1;if(e.needs.energy<30||e.needs.warmth<40)return e.huntChaseTimer=0,!1;if(e.needs.hunger<75||!ut(e,"cooked_meat",1)){const t=this.fauna.getNearestHuntable(e.x,e.y,14);if(t)return Math.hypot(t.x-e.x,t.y-e.y)<=2.2?(e.huntChaseTimer=0,t.vx*=.15,t.vy*=.15,t.state="grazing",e.activeTask={name:`Hunting ${t.species} with spear`,type:"foraging",progress:0,duration:1,targetX:t.x,targetY:t.y},e.currentAction=`Striking ${t.species} with spear`,!0):(e.huntChaseTimer=(e.huntChaseTimer||0)+.25,e.huntChaseTimer>=7?(e.huntChaseTimer=0,e.huntCooldown=25,e.targetX=void 0,e.targetY=void 0,this.setSpeech(e,`Whew... the wild ${t.species} darted into the thicket! I need to catch my breath.`,5),e.currentGoal="Catch breath",e.currentAction="Catching breath after chase",!0):(e.currentGoal=`Track wild ${t.species}`,e.currentAction=`Stalking ${t.species} through foliage`,this.setAgentMoveTarget(e,t.x,t.y),!0));e.huntChaseTimer=0}}return!1}tryRiverFishing(e){var s;if(!e.knowledge.has("river_fishing")){const n=this.findNearestTileMatching(e.x,e.y,8,r=>r.type==="water");if(n&&Math.hypot(n.x-e.x,n.y-e.y)<=1.6&&Math.random()<.25){e.knowledge.add("river_fishing");const o=Et.find(l=>l.id==="river_fishing");return o&&(o.discovered=!0),this.setSpeech(e,"Look! Silver trout leaping in the river current! We can fish here!",7),this.addChronicle("Discovery of River Fishing",`${e.name} discovered schools of freshwater fish swimming in the river, unlocking fishing traps and spears.`,"discovery","🐟"),!0}return!1}if(((s=e.activeTask)==null?void 0:s.type)==="foraging"||e.fishCooldown&&e.fishCooldown>0||In(e,"fresh_fish")>=2||e.needs.hunger>60)return!1;const i=this.findNearestTileMatching(e.x,e.y,14,n=>n.type==="water");return i?Math.hypot(i.x-e.x,i.y-e.y)<=1.6?(e.activeTask={name:"Spearfishing trout in riverbank",type:"foraging",progress:0,duration:7,targetX:i.x,targetY:i.y},e.currentAction="Spearfishing in shallow river water",this.soundEngine&&this.soundEngine.playRiverFishing&&this.soundEngine.playRiverFishing(),Tt(e,"fresh_fish",1),this.economy.registerSupply("fresh_fish",1),mi(e,"fresh_fish",1),e.needs.hunger=Math.min(100,e.needs.hunger+35),e.currentAction="Eating fresh catch by the riverbank",e.fishCooldown=30,!0):(e.currentGoal="Approach river to catch fish",e.currentAction="Walking to riverbank",this.setAgentMoveTarget(e,i.x,i.y),!0):!1}tryBuildBridge(e){if(!e.knowledge.has("bridge_engineering")){if(this.findNearestTileMatching(e.x,e.y,6,i=>i.type==="water")&&e.knowledge.has("primitive_shelter")&&Math.random()<.2){e.knowledge.add("bridge_engineering");const i=Et.find(s=>s.id==="bridge_engineering");return i&&(i.discovered=!0),this.setSpeech(e,"If we span timber logs across this water, we can cross to new horizons!",7),this.addChronicle("Invention of Bridge Engineering",`${e.name} conceived of timber footbridges to span rivers and cross into uncharted territory.`,"discovery","🌉"),!0}return!1}if(e.knowledge.has("bridge_engineering")&&ut(e,"wood_log",2)&&ut(e,"stick",3)){const t=Array.from(this.world.buildings.values()).some(n=>n.type==="campfire"&&n.builderId===e.id),i=Array.from(this.world.buildings.values()).some(n=>["lean_to","mud_hut","timber_house","stone_well"].includes(n.type)&&n.builderId===e.id);if(!t||!i)return!1;const s=this.findNearestTileMatching(e.x,e.y,12,n=>n.type==="water"&&!n.building);if(s){if(Array.from(this.world.buildings.values()).find(o=>o.type==="wooden_bridge"&&Math.hypot(o.x-s.x,o.y-s.y)<8))return!1;if(Math.hypot(s.x-e.x,s.y-e.y)<=1.8){const o=this.world.placeBuilding("wooden_bridge",s.x,s.y,e.id);if(o)return mi(e,"wood_log",2),mi(e,"stick",3),o.isCompleted=!0,this.setSpeech(e,"The bridge is laid! The river is conquered!",7),this.addChronicle("Wooden Bridge Constructed",`${e.name} constructed a timber footbridge across the river, opening passage to new lands.`,"construction","🌉"),!0}else return e.currentGoal="Approach river to lay bridge timbers",this.setAgentMoveTarget(e,s.x,s.y),!0}}return!1}checkWinterInsulationDiscovery(e){if(!e.knowledge.has("tailoring_insulation")&&this.world.temperatureCelsius<8&&(ut(e,"animal_hide",1)||ut(e,"raw_wool",1))){e.knowledge.add("tailoring_insulation");const t=Et.find(i=>i.id==="tailoring_insulation");t&&(t.discovered=!0),this.setSpeech(e,"The cold bites deep! By wrapping hides and wool fleece, we can insulate against the frost!",7),this.addChronicle("Invention of Winter Insulation",`${e.name} devised warm winter cloaks from animal hides and wool to endure freezing blizzards.`,"discovery","🧥")}}trySolsticeCelebration(e){if(!this.world.isSolsticeActive)return e.isDancingSolstice=!1,!1;const t=Array.from(this.world.buildings.values()).find(i=>i.isCompleted&&(i.type==="settlement_totem"||i.type==="campfire"));if(t)if(Math.hypot(t.x-e.x,t.y-e.y)<=3.5){if(e.isDancingSolstice=!0,e.currentGoal="Celebrate the Solstice Festival",e.currentAction="Dancing in the Solstice Circle! ✨",e.needs.curiosity=100,e.needs.social=100,Math.random()<.05){const s=this.world.season==="Summer"?"Summer Solstice":"Winter Solstice";this.setSpeech(e,`Rejoice! The ${s} brings renewal to our people!`,6)}return!0}else return e.currentGoal="Join the Solstice Dance",e.currentAction="Heading to the town totem for the festival",this.setAgentMoveTarget(e,t.x+(Math.random()-.5)*3,t.y+(Math.random()-.5)*3),!0;return!1}tryHorseTamingOrMounting(e){if(!this.fauna)return!1;if(!e.knowledge.has("horse_whispering")&&this.fauna.getNearestTameableHorse(e.x,e.y,8)&&e.knowledge.has("primitive_shelter")&&(ut(e,"raw_wool",1)||ut(e,"harvested_wheat",1))){e.knowledge.add("horse_whispering");const s=Et.find(n=>n.id==="horse_whispering");return s&&(s.discovered=!0),this.setSpeech(e,"With gentle words and sweet grain, these magnificent wild mustangs will carry our people!",7),this.addChronicle("Horse Domestication Discovered",`${e.name} discovered horse whispering, opening the era of equine travel and transport.`,"discovery","🐎"),!0}if(e.knowledge.has("horse_whispering")||(e.inventory.braided_lasso||0)>0){const i=this.fauna.getNearestTameableHorse(e.x,e.y,7);if(i)return Math.hypot(i.x-e.x,i.y-e.y)<=1.5?(this.fauna.tameHorse(i,e,"Bucephalus"),e.currentAction="Saddled and tamed a loyal horse!",this.setSpeech(e,"Steady now... we shall explore the world together!",6),this.addChronicle("Wild Mustang Tamed",`${e.name} tamed a magnificent wild horse to ride across the land.`,"milestone","🐎"),!0):(e.currentGoal="Approach wild horse gently",e.currentAction="Approaching mustang with sweet grain",this.setAgentMoveTarget(e,i.x,i.y),!0)}const t=this.fauna.animals.find(i=>i.species==="horse"&&i.ownerId===e.id);return t&&!e.isRidingHorse&&e.targetX!==void 0&&e.targetY!==void 0&&Math.hypot(e.targetX-e.x,e.targetY-e.y)>8&&Math.hypot(t.x-e.x,t.y-e.y)<=2?(e.isRidingHorse=!0,t.riderId=e.id,e.currentAction="Mounted on horseback!",!0):(e.isRidingHorse&&(e.targetX===void 0||e.targetY===void 0||Math.hypot(e.targetX-e.x,e.targetY-e.y)<1)&&Math.random()<.3&&(e.isRidingHorse=!1,t&&(t.riderId=void 0)),!1)}tryBoatNavigation(e){if(!e.knowledge.has("shipbuilding")&&(e.inventory.wood_log||0)>=3&&e.knowledge.has("bridge_engineering")&&this.findNearestTileMatching(e.x,e.y,6,n=>n.type==="water")&&Math.random()<.2){e.knowledge.add("shipbuilding");const n=Et.find(r=>r.id==="shipbuilding");return n&&(n.discovered=!0),this.setSpeech(e,"By hollowing out buoyant timber, we can construct boats to sail upon deep rivers and oceans!",7),this.addChronicle("Discovery of Shipbuilding",`${e.name} conceived of hollowed timber boats to sail upon open waters.`,"discovery","⛵"),!0}const t=this.world.getTile(Math.round(e.x),Math.round(e.y)),i=(t==null?void 0:t.type)==="water"||(t==null?void 0:t.type)==="deep_water";return(e.inventory.wooden_boat||0)>0&&i&&!e.isInBoat?(e.isInBoat=!0,e.currentAction="Sailing upon river waters in a wooden boat ⛵",!0):(e.isInBoat&&!i&&(e.isInBoat=!1,e.currentAction="Disembarked boat onto dry land"),!1)}tryGreatLibraryStudy(e){const t=Array.from(this.world.buildings.values()).find(i=>i.type==="great_library"&&i.isCompleted);if(!t)return!1;if(e.lifeStage==="adult"||e.lifeStage==="elder"){if(Math.hypot(t.x-e.x,t.y-e.y)<=2.5)return e.currentGoal="Study codices in the Great Archive",e.currentAction="Inscribing historical chronicles & philosophy",e.needs.curiosity=Math.min(100,e.needs.curiosity+.2),!0;if(Math.random()<.12)return e.currentGoal="Visit the Great Library",e.currentAction="Walking to the library to study scrolls",this.setAgentMoveTarget(e,t.x,t.y),!0}return!1}trySentinelPatrol(e){if((e.inventory.wooden_shield||0)>0||(e.inventory.hunting_bow||0)>0){const t=Array.from(this.world.buildings.values()).find(i=>(i.type==="watch_gate"||i.type==="timber_palisade")&&i.isCompleted);if(t){if(Math.hypot(t.x-e.x,t.y-e.y)<=2.5)return e.currentGoal="Guard settlement perimeter",e.currentAction="Standing sentinel watch with shield & bow 🛡️",!0;if(Math.random()<.15)return e.currentGoal="Patrol perimeter gate",e.currentAction="Walking to watch gate for perimeter patrol",this.setAgentMoveTarget(e,t.x,t.y),!0}}return!1}seekAndForageFood(e){e.currentGoal="Seek food";const t=this.findNearestTileMatching(e.x,e.y,16,i=>i.building&&i.building.isCompleted&&i.building.type==="farm_plot"?(i.building.storage.harvested_wheat||0)>0:i.type==="fertile_soil"&&i.resourceAmount>0);t?Math.hypot(t.x-e.x,t.y-e.y)<=1.2?(e.activeTask={name:"Foraging sweet berries",type:"foraging",progress:0,duration:8,targetX:t.x,targetY:t.y},e.currentAction="Picking berries from bush"):(e.currentAction="Walking to berry bush",this.setAgentMoveTarget(e,t.x,t.y)):this.wanderNearOrigin(e)}seekShelterOrRest(e){const t=this.world.timeOfDay,i=t>=21||t<5.5;e.currentGoal=i?"Sleeping until dawn":"Resting to restore energy";const s=this.findNearestBuilding(e.x,e.y,n=>n.isCompleted&&["lean_to","mud_hut","thatched_cabin","timber_house","masonry_house","campfire"].includes(n.type));s?Math.hypot(s.x-e.x,s.y-e.y)<=1.2?(e.currentAction=i?`Sleeping soundly in ${s.type.replace("_"," ")}`:`Resting peacefully near ${s.type.replace("_"," ")}`,e.needs.energy=Math.min(100,e.needs.energy+.08)):(e.currentAction=i?"Heading to shelter for the night":"Heading to shelter for rest",this.setAgentMoveTarget(e,s.x,s.y)):(e.currentAction=i?"Sleeping in soft meadow under stars":"Resting in the soft meadow",e.needs.energy=Math.min(100,e.needs.energy+.06))}seekShelterOrFire(e){e.currentGoal="Seek warmth from cold night";const t=this.findNearestBuilding(e.x,e.y,i=>i.isCompleted&&["campfire","lean_to","mud_hut","thatched_cabin","timber_house","masonry_house","bakery"].includes(i.type));t&&(Math.hypot(t.x-e.x,t.y-e.y)<=1.2?(e.currentAction=`Warming hands by the ${t.type.replace("_"," ")}`,e.needs.warmth=Math.min(100,e.needs.warmth+.3)):(e.currentAction="Walking toward warm hearthfire",this.setAgentMoveTarget(e,t.x,t.y)))}updatePregnancyGestation(e,t,i,s){var o;if(!e.isPregnant)return;const n=100/150*s,r=e.pregnancyProgress||0;if(e.pregnancyProgress=Math.min(100,r+n),r<25&&e.pregnancyProgress>=25){const l=t.find(c=>c.id===e.spouseId);this.setSpeech(e,"I felt our baby flutter for the first time! A new life grows inside!",7),l&&this.setSpeech(l,"Rest your feet, my love. I will gather sweet berries and firewood for our hearth.",7)}else if(r<65&&e.pregnancyProgress>=65){const l=t.find(c=>c.id===e.spouseId);this.setSpeech(e,"Our baby grows strong. Soon we will hold our little one under this wide sky.",7),l&&this.setSpeech(l,"Our shelter is warm and safe. We will welcome our child together!",7)}if(e.pregnancyProgress>=100){e.isPregnant=!1,e.pregnancyProgress=0;const l=t.find(u=>u.id===e.spouseId),c=Eg(e,l||e,this.world.day,e.generation+1);i.push(c),(o=this.soundEngine)==null||o.playBabyLullaby();const h=l?l.name:"partner";this.setSpeech(e,`${h}, look at our precious baby ${c.name}! A miracle in our family!`,8),l&&this.setSpeech(l,`Welcome to the world, little ${c.name}. Our home is yours forever!`,8),this.addChronicle(`Birth of ${c.name}`,`${e.name} and ${l?l.name:"her family"} welcomed newborn child ${c.name} into Genesis World!`,"birth","👶")}}trySocializeOrProcreate(e,t,i,s){var c;let n;if(e.spouseId?n=t.find(h=>h.id===e.spouseId):n=t.find(h=>h.id!==e.id&&h.age>=15&&h.gender!==e.gender&&(!h.spouseId||h.spouseId===e.id)),!n)return!1;e.relationships[n.id]||(e.relationships[n.id]={targetId:n.id,affection:15,trust:20,lastInteracted:0,stage:"strangers"}),n.relationships[e.id]||(n.relationships[e.id]={targetId:e.id,affection:15,trust:20,lastInteracted:0,stage:"strangers"});const r=e.relationships[n.id],o=n.relationships[e.id],l=Math.hypot(n.x-e.x,n.y-e.y);if(n.isPregnant&&(n.needs.hunger<70||ut(e,"berries",1))&&l<=2.8&&ut(e,"berries",1))return mi(e,"berries",1),Tt(n,"berries",1),n.needs.hunger=Math.min(100,n.needs.hunger+25),this.setSpeech(e,`Here, ${n.name}, sweet berries for you and our little one.`,6),!0;if(l<=2.8){const h=this.isNearWarmthSource(e.x,e.y);if(r.affection=Math.min(100,r.affection+(h?.35:.18)*s),r.trust=Math.min(100,r.trust+(h?.3:.15)*s),o.affection=r.affection,o.trust=r.trust,e.needs.social=Math.min(100,e.needs.social+.3*s),n.needs.social=Math.min(100,n.needs.social+.3*s),r.stage==="strangers"){if(r.affection>=30&&r.trust>=30)return r.stage="friends",o.stage="friends",this.setSpeech(e,`It is good to have you by my side, ${n.name}. We are no longer alone.`,7),this.setSpeech(n,`I feel the same, ${e.name}. Together we can face anything.`,7),this.addChronicle("Bonds of Companionship",`${e.name} and ${n.name} have formed a warm bond of friendship in the wilderness.`,"milestone","🤝"),!0;if(Math.random()<.03&&!e.speechBubble){const u=['"Greetings... It is comforting to see another person in this vast wild."','"The river is clear and the earth is rich. We can survive here."','"Let us share what we discover so neither of us goes cold or hungry."'];return this.setSpeech(e,u[Math.floor(Math.random()*u.length)],5),!0}}else if(r.stage==="friends"){if(ut(e,"berries",1)&&Math.random()<.05)return mi(e,"berries",1),Tt(n,"berries",1),r.affection=Math.min(100,r.affection+6),o.affection=r.affection,this.setSpeech(e,`Here, ${n.name}, fresh berries I gathered from the wild bushes.`,6),this.setSpeech(n,`Thank you, ${e.name}! Your thoughtfulness warms my heart.`,6),!0;if(r.affection>=55&&r.trust>=50)return r.stage="crush",o.stage="crush",this.setSpeech(e,`Whenever you smile at me, ${n.name}, my heart flutters.`,7),this.setSpeech(n,`I find myself looking for you among the tall trees, ${e.name}...`,7),this.addChronicle("Awakening of Affection",`A tender romantic affection has begun to blossom between ${e.name} and ${n.name}.`,"milestone","💕"),!0;if(Math.random()<.03&&!e.speechBubble){const u=[`"Working beside you makes the heaviest tasks feel light, ${n.name}."`,'"The hearth is peaceful tonight with you nearby."','"I am grateful that our paths crossed in this great wilderness."'];return this.setSpeech(e,u[Math.floor(Math.random()*u.length)],5),!0}}else if(r.stage==="crush"){if(r.affection>=78&&r.trust>=70)return r.stage="in_love",o.stage="in_love",this.setSpeech(e,`${n.name}, I love you with all my heart. Through every storm and season, I want to stand beside you.`,8),this.setSpeech(n,`And I love you, ${e.name}. In this vast world, you are my home.`,8),this.addChronicle("Declaration of True Love",`Under the open heavens, ${e.name} and ${n.name} confessed their deep love for one another!`,"milestone","💖"),!0;if(Math.random()<.04&&!e.speechBubble){const u=[`"Look at how the firelight shines in your eyes tonight, ${n.name}."`,'"Every time I hear your voice, this wild forest feels like home."','"Will you sit with me by the hearth tonight?"'];return this.setSpeech(e,u[Math.floor(Math.random()*u.length)],6),!0}}else if(r.stage==="in_love"){let u=!1;for(const d of this.world.buildings.values())if(d.isCompleted&&["lean_to","mud_hut","thatched_cabin","timber_house","masonry_house"].includes(d.type)){u=!0;break}if(u){if(r.affection>=88&&r.trust>=80)return r.stage="married",o.stage="married",e.spouseId=n.id,n.spouseId=e.id,(c=this.soundEngine)==null||c.playWeddingChime(),this.setSpeech(e,"By this hearth and under the stars, I take thee as my beloved spouse!",8),this.setSpeech(n,"I take thee as my spouse! Together we will build our home and raise our children!",8),this.addChronicle(`Sacred Union: ${e.name} & ${n.name}`,`By the hearth of their completed shelter, ${e.name} and ${n.name} united in sacred marriage!`,"milestone","💍"),!0}else if(Math.random()<.04&&!e.speechBubble)return this.setSpeech(e,`We must build a shelter, ${n.name}, so we have a true hearth to bind our lives together in marriage!`,6),!0}else if(r.stage==="married"){const u=e.gender==="female"?e:n.gender==="female"?n:null,d=e.gender==="male"?e:n.gender==="male"?n:null;if(u&&d&&!u.isPregnant){let m=0;for(const f of this.world.buildings.values())if(f.isCompleted){const p=rs[f.type];m+=p.housingCapacity||0}const g=t.length<Math.max(2,m),v=u.needs.hunger>55&&d.needs.hunger>55;if(g&&v&&Math.random()<.02)return u.isPregnant=!0,u.pregnancyProgress=0,this.setSpeech(u,`${d.name}, our love has borne fruit! I feel new life stirring within me!`,8),this.setSpeech(d,"A child! I will guard our home and gather everything you need, my love!",8),this.addChronicle(`A Family Begins: ${u.name} is Expecting`,`${u.name} and ${d.name} have conceived a child! A new generation will soon grace Genesis World.`,"birth","🤰"),!0}if(Math.random()<.03&&!e.speechBubble){const m=[`"${n.name}, our home is peaceful and filled with warmth."`,'"Building this life with you is the greatest blessing of my life."','"Together we are watching a whole world come alive."'];return this.setSpeech(e,m[Math.floor(Math.random()*m.length)],5),!0}}}return l>3&&l<22&&(r.stage==="crush"||r.stage==="in_love"||r.stage==="married")&&e.needs.hunger>55&&e.needs.energy>40&&Math.random()<.08?(e.currentGoal=`Spend time with ${n.name}`,e.currentAction=`Walking toward beloved ${n.name}`,this.setAgentMoveTarget(e,n.x,n.y),!0):!1}tryInventOrExperiment(e){if(e.needs.curiosity<50)return!1;for(const t of Et){if(t.discovered||!t.prerequisites.every(n=>{const r=Et.find(o=>o.id===n);return r&&r.discovered}))continue;let s=!0;if(t.requiredItems){for(const[n,r]of Object.entries(t.requiredItems))if(!ut(e,n,r)){s=!1;break}}if(s){e.activeTask={name:`Experimenting: ${t.name}`,type:"researching",progress:0,duration:16},e.currentAction=`Testing ideas for ${t.name}`;const n=2.5+Math.random()*2;if(t.researchProgress=(t.researchProgress||0)+n,e.needs.curiosity=Math.max(0,e.needs.curiosity-20),t.researchProgress>=t.requiredResearch){if(t.discovered=!0,t.discoveredBy=e.name,t.discoveredAtDay=this.world.day,e.knowledge.add(t.id),t.requiredItems)for(const[r,o]of Object.entries(t.requiredItems))mi(e,r,o);this.setSpeech(e,`Eureka! After deep study, I have unlocked ${t.name}!`,7),this.addChronicle(`Discovered: ${t.name}`,`${e.name} unlocked ${t.name} (${t.era.toUpperCase()} ERA).`,"discovery",t.icon),t.id==="coin_minting"&&(this.economy.unlockCurrency(),this.addChronicle("Currency & Market Economy Established","Gold coins are now minted! The barter age transitions into an official coin economy.","economy","🪙"))}else this.setSpeech(e,`Studying ${t.name}... Progress: ${t.researchProgress}/${t.requiredResearch}`,4);return!0}}return!1}tryWorkOnBuilding(e){const t=this.findNearestBuilding(e.x,e.y,n=>!n.isCompleted);if(!t)return!1;const i=Math.hypot(t.x-e.x,t.y-e.y),s=rs[t.type];return i<=1.5?(e.activeTask={name:`Assembling ${s.name}`,type:"building",progress:0,duration:12},t.progress+=15,t.progress>=100&&(t.isCompleted=!0,t.progress=100,this.setSpeech(e,`Finished building the ${s.name}!`,5),this.addChronicle(`Constructed ${s.name}`,`${e.name} finished building a ${s.name}.`,"construction","🏗️")),!0):(e.currentGoal=`Walk to ${s.name}`,e.currentAction="Moving to construction site",this.setAgentMoveTarget(e,t.x,t.y),!0)}tryPlanNewBuilding(e){const t=this.world.timeOfDay,i=t>=18||t<5.5,s=["campfire","lean_to","farm_plot","clay_kiln","mud_hut","storage_barn","thatched_cabin","stone_well","smelter","blacksmith","windmill","bakery","timber_house","market_stall","mint_bank","town_hall"];for(const n of s){if(n==="campfire"&&!i&&this.world.weather!=="Rain"&&e.needs.warmth>55)continue;const r=rs[n];if(r.requiredTech){const c=Et.find(h=>h.id===r.requiredTech);if(!c||!c.discovered)continue}let o=0;for(const c of this.world.buildings.values())c.type===n&&o++;const l=["campfire","lean_to","clay_kiln","smelter","blacksmith","windmill","bakery","market_stall","mint_bank","town_hall"].includes(n)?1:3;if(o<l){let c=!0;for(const[h,u]of Object.entries(r.inputs))if(!ut(e,h,u)){c=!1;break}if(c){const h=this.findNearbyEmptyTile(Math.round(e.x),Math.round(e.y),4);if(h){for(const[u,d]of Object.entries(r.inputs))mi(e,u,d);return this.world.placeBuilding(n,h.x,h.y,e.id),this.setSpeech(e,`Laying out the ground for a ${r.name}!`),!0}}}}return!1}tryCraftItems(e){for(const t of _g){if(t.requiredTech){const s=Et.find(n=>n.id===t.requiredTech);if(!s||!s.discovered)continue}let i=!0;for(const[s,n]of Object.entries(t.inputs))if(!ut(e,s,n)){i=!1;break}if(i&&In(e,t.output)<2){e.activeTask={name:`Crafting ${t.name}`,type:"crafting",progress:0,duration:Math.max(8,t.timeCost*2)};for(const[s,n]of Object.entries(t.inputs))mi(e,s,n);return Tt(e,t.output,t.outputCount),this.economy.registerSupply(t.output,t.outputCount),this.setSpeech(e,`Working on ${t.name}...`),!0}}return!1}gatherResourcesForSettlement(e){const t=e.knowledge.has("discovery_wood"),i=e.knowledge.has("discovery_stone"),s=e.knowledge.has("discovery_flint");if(!t&&!i){this.wanderNearOrigin(e);return}if(Object.values(e.inventory).reduce((d,m)=>d+(m||0),0)+2>e.maxCarryWeight){this.wanderNearOrigin(e);return}const r=t&&In(e,"stick")<12,o=t&&In(e,"wood_log")<6,l=i&&In(e,"stone")<10,c=s&&In(e,"flint")<4;if(!r&&!o&&!l&&!c){this.wanderNearOrigin(e);return}let h="stick";o?h="wood_log":r?h="stick":l?h="stone":c&&(h="flint");const u=this.findNearestTileMatching(e.x,e.y,16,d=>h==="stick"||h==="wood_log"?(d.type==="sparse_trees"||d.type==="dense_forest")&&d.resourceAmount>0:h==="stone"||h==="flint"?(d.type==="stone_hill"||d.type==="grass")&&d.resourceAmount>0:!1);if(u)if(Math.hypot(u.x-e.x,u.y-e.y)<=1.2){let m="Examining river stones";h==="stick"&&(m="Searching brush for dry sticks"),h==="wood_log"&&(m="Chopping fallen timber for logs"),e.activeTask={name:m,type:"foraging",progress:0,duration:h==="wood_log"?14:10,targetX:u.x,targetY:u.y},e.currentAction=`Gathering ${h.replace("_"," ")}`}else e.currentGoal=`Search for ${h}`,e.currentAction="Walking toward natural resources",this.setAgentMoveTarget(e,u.x,u.y);else this.wanderNearOrigin(e)}wanderNearOrigin(e){if(!e.targetX||Math.random()<.03){const t=Math.random()*Math.PI*2,i=2+Math.random()*4,s=Math.round(e.x+Math.cos(t)*i),n=Math.round(e.y+Math.sin(t)*i);this.world.isWalkable(s,n)&&(this.setAgentMoveTarget(e,s,n),e.currentAction="Walking through the meadow")}}findNearestTileMatching(e,t,i,s){let n=null,r=1/0;const o=Math.floor(e-i),l=Math.ceil(e+i),c=Math.floor(t-i),h=Math.ceil(t+i);for(let u=o;u<=l;u++)for(let d=c;d<=h;d++){const m=this.world.getTile(u,d);if(m&&s(m)){const g=(u-e)*(u-e)+(d-t)*(d-t);g<r&&(r=g,n=m)}}return n}findNearestBuilding(e,t,i){let s=null,n=1/0;for(const r of this.world.buildings.values())if(i(r)){const o=(r.x-e)*(r.x-e)+(r.y-t)*(r.y-t);o<n&&(n=o,s=r)}return s}findNearbyEmptyTile(e,t,i){for(let s=1;s<=i;s++)for(let n=-s;n<=s;n++)for(let r=-s;r<=s;r++){const o=e+n,l=t+r,c=this.world.getTile(o,l);if(c&&c.type==="grass"&&!c.building)return{x:o,y:l}}return null}}class Rg{constructor(e){R(this,"x",0);R(this,"y",0);R(this,"zoom",1.6);R(this,"targetZoom",1.6);R(this,"followTarget");R(this,"isDragging",!1);R(this,"lastMouseX",0);R(this,"lastMouseY",0);R(this,"onTap");this.canvas=e,this.setupListeners()}setupListeners(){this.canvas.addEventListener("wheel",r=>{r.preventDefault();const o=r.deltaY<0?1.15:.87;this.targetZoom=Math.max(.6,Math.min(3.5,this.targetZoom*o))},{passive:!1}),this.canvas.addEventListener("mousedown",r=>{(r.button===0||r.button===1)&&(this.isDragging=!0,this.lastMouseX=r.clientX,this.lastMouseY=r.clientY,this.followTarget=void 0)}),window.addEventListener("mousemove",r=>{if(this.isDragging){const o=(r.clientX-this.lastMouseX)/(32*this.zoom),l=(r.clientY-this.lastMouseY)/(32*this.zoom);this.x-=o,this.y-=l,this.lastMouseX=r.clientX,this.lastMouseY=r.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1});let e=0,t=0,i=0,s=0,n=!1;this.canvas.addEventListener("touchstart",r=>{r.preventDefault(),r.touches.length===1?(this.isDragging=!0,this.lastMouseX=r.touches[0].clientX,this.lastMouseY=r.touches[0].clientY,i=r.touches[0].clientX,s=r.touches[0].clientY,t=performance.now(),n=!1,this.followTarget=void 0):r.touches.length===2&&(this.isDragging=!1,n=!0,e=Math.hypot(r.touches[0].clientX-r.touches[1].clientX,r.touches[0].clientY-r.touches[1].clientY))},{passive:!1}),this.canvas.addEventListener("touchmove",r=>{if(r.preventDefault(),r.touches.length===1&&this.isDragging){Math.hypot(r.touches[0].clientX-i,r.touches[0].clientY-s)>8&&(n=!0);const l=(r.touches[0].clientX-this.lastMouseX)/(32*this.zoom),c=(r.touches[0].clientY-this.lastMouseY)/(32*this.zoom);this.x-=l,this.y-=c,this.lastMouseX=r.touches[0].clientX,this.lastMouseY=r.touches[0].clientY}else if(r.touches.length===2){n=!0;const o=Math.hypot(r.touches[0].clientX-r.touches[1].clientX,r.touches[0].clientY-r.touches[1].clientY);if(e>0){const l=o/e;this.targetZoom=Math.max(.6,Math.min(3.5,this.targetZoom*l)),e=o}}},{passive:!1}),this.canvas.addEventListener("touchend",r=>{if(this.isDragging&&!n&&r.changedTouches.length===1&&performance.now()-t<350&&this.onTap){const l=this.screenToWorld(r.changedTouches[0].clientX,r.changedTouches[0].clientY,32);this.onTap(l.x,l.y)}this.isDragging=!1,e=0},{passive:!1})}zoomIn(){this.targetZoom=Math.min(3.5,this.targetZoom*1.35)}zoomOut(){this.targetZoom=Math.max(.6,this.targetZoom*.74)}update(e){if(this.zoom+=(this.targetZoom-this.zoom)*Math.min(1,e*10),this.followTarget){const t=this.followTarget.x,i=this.followTarget.y;this.x+=(t-this.x)*Math.min(1,e*5),this.y+=(i-this.y)*Math.min(1,e*5)}}worldToScreen(e,t,i){const s=this.canvas.width/2,n=this.canvas.height/2,r=s+(e-this.x)*i*this.zoom,o=n+(t-this.y)*i*this.zoom;return{x:r,y:o}}screenToWorld(e,t,i){const s=this.canvas.width/2,n=this.canvas.height/2,r=this.x+(e-s)/(i*this.zoom),o=this.y+(t-n)/(i*this.zoom);return{x:r,y:o}}panTo(e,t){this.followTarget=void 0,this.x=e,this.y=t}}class Pg{constructor(e,t,i){R(this,"ctx");R(this,"particles",[]);R(this,"animTimer",0);R(this,"godInteractions",[]);this.canvas=e,this.camera=t,this.world=i;const s=e.getContext("2d",{alpha:!1});if(!s)throw new Error("Could not obtain 2D canvas context");this.ctx=s,this.resizeCanvas(),window.addEventListener("resize",()=>this.resizeCanvas())}resizeCanvas(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addParticle(e,t,i,s=1,n=.5){for(let r=0;r<s;r++){const o=Math.random()*Math.PI*2,l=(.2+Math.random()*.8)*n;this.particles.push({x:e,y:t,vx:Math.cos(o)*l,vy:Math.sin(o)*l-.35,life:1,maxLife:.8+Math.random()*1.2,color:i,size:1.5+Math.random()*2.5})}}render(e,t,i=.016,s=[]){this.animTimer+=i;for(const f of this.godInteractions)f.timer-=i;this.godInteractions=this.godInteractions.filter(f=>f.timer>0);const n=this.ctx,r=this.canvas.width,o=this.canvas.height,l=this.camera.zoom,c=li*l;n.fillStyle="#101712",n.fillRect(0,0,r,o);const h=r/2,u=o/2,d=Math.floor(this.camera.x-h/c)-2,m=Math.ceil(this.camera.x+h/c)+2,g=Math.floor(this.camera.y-u/c)-2,v=Math.ceil(this.camera.y+u/c)+2;for(let f=d;f<=m;f++)for(let p=g;p<=v;p++){const x=this.world.getTile(f,p);if(!x||!x.isRevealed)continue;const T=this.camera.worldToScreen(f,p,li);this.renderTerrainBase(n,x,T.x,T.y,c)}for(let f=d;f<=m;f++)for(let p=g;p<=v;p++){const x=this.world.getTile(f,p);if(!x||!x.isRevealed)continue;const T=this.camera.worldToScreen(f,p,li);this.renderTerrainFeature(n,x,T.x,T.y,c)}for(const f of this.world.buildings.values()){if(f.x<d||f.x>m||f.y<g||f.y>v)continue;const p=this.world.getTile(f.x,f.y);if(!p||!p.isRevealed)continue;const x=this.camera.worldToScreen(f.x,f.y,li);this.renderBuildingRealistic(n,f,x.x,x.y,c)}for(const f of s){const p=this.world.getTile(Math.round(f.x),Math.round(f.y));if(!p||!p.isRevealed)continue;const x=this.camera.worldToScreen(f.x,f.y,li);this.renderFauna(n,f,x.x,x.y,c)}for(const f of e){const p=this.world.getTile(Math.round(f.x),Math.round(f.y));if(!p||!p.isRevealed)continue;const x=this.camera.worldToScreen(f.x,f.y,li),T=f.id===t;this.renderAgentRealistic(n,f,x.x,x.y,c,T)}this.updateAndRenderParticles(n,i),this.renderAtmosphericLighting(n,r,o),this.renderSoftFogOfWar(n,d,m,g,v,c);for(const f of e){const p=this.camera.worldToScreen(f.x,f.y,li);f.speechBubble&&this.renderMultiLineSpeechBubble(n,f.speechBubble.text,p.x+c*.5,p.y-c*.4,f.speechBubble.isSpeech,f.color)}}triggerGodInteractionAt(e,t,i){const s=Math.floor(e),n=Math.floor(t);console.log(`[GodMode] Clicked at worldX: ${e}, worldY: ${t}. TileX: ${s}, TileY: ${n}`);for(const o of i)if(Math.hypot(o.x+.5-e,o.y+.5-t)<=1.3){console.log(`[GodMode] Agent ${o.name} clicked! Waving!`),this.godInteractions.push({x:o.x,y:o.y,timer:1.5,type:"wave",agentId:o.id});return}const r=this.world.getTile(s,n);r?(console.log(`[GodMode] Tile clicked type: ${r.type}`),r.type==="water"||r.type==="deep_water"?this.godInteractions.push({x:r.x,y:r.y,timer:.5,type:"splash"}):(r.type==="dense_forest"||r.type==="sparse_trees")&&this.godInteractions.push({x:r.x,y:r.y,timer:.8,type:"wiggle"})):console.log(`[GodMode] No tile found at ${s}, ${n}`)}renderTerrainBase(e,t,i,s,n){const r=this.world.season,o=r==="Winter",l=r==="Autumn",c=r==="Summer",h=o&&this.world.temperatureCelsius<-1;if(t.type==="water"||t.type==="deep_water"){const m=t.type==="deep_water";if(h&&!m){const x=e.createLinearGradient(i,s,i+n,s+n);x.addColorStop(0,"#cce7f5"),x.addColorStop(.5,"#a5d4e8"),x.addColorStop(1,"#8fc8df"),e.fillStyle=x,e.fillRect(i,s,n+.5,n+.5),e.strokeStyle="rgba(255, 255, 255, 0.7)",e.lineWidth=1,e.beginPath(),e.moveTo(i+n*.2,s),e.lineTo(i+n*.45,s+n*.5),e.lineTo(i+n*.8,s+n*.85),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.5)",e.beginPath(),e.arc(i+n*.45,s+n*.5,n*.08,0,Math.PI*2),e.fill();return}const g=e.createLinearGradient(i,s,i+n,s+n);m?(g.addColorStop(0,o?"#0c2233":"#0f2b3e"),g.addColorStop(1,o?"#081724":"#0b2030")):(g.addColorStop(0,o?"#153f54":"#1d5169"),g.addColorStop(1,o?"#0f3243":"#164357")),e.fillStyle=g,e.fillRect(i,s,n+.5,n+.5);const v=Math.sin(this.animTimer*1.5+t.x*.8+t.y*.4)*.08,f=Math.cos(this.animTimer*1.2-t.x*.5+t.y*.7)*.06;e.fillStyle=`rgba(164, 235, 255, ${.12+v+f})`,e.beginPath(),e.ellipse(i+n*(.3+v),s+n*(.4+f),n*.35,n*.12,.3,0,Math.PI*2),e.fill();const p=this.godInteractions.find(x=>x.type==="splash"&&x.x===t.x&&x.y===t.y);if(p){const x=p.timer/.5;e.strokeStyle=`rgba(255, 255, 255, ${x})`,e.lineWidth=2+(1-x)*4,e.beginPath(),e.arc(i+n*.5,s+n*.5,n*.1+(1-x)*n*.4,0,Math.PI*2),e.stroke()}return}if(t.type==="fertile_soil"){if(o){e.fillStyle="#e2e8f0",e.fillRect(i,s,n+.5,n+.5),e.fillStyle="#301f14",e.fillRect(i+n*.15,s+n*.3,n*.7,n*.12);return}e.fillStyle="#301f14",e.fillRect(i,s,n+.5,n+.5),e.fillStyle="rgba(26, 16, 10, 0.45)";for(let m=0;m<3;m++)e.fillRect(i+n*.1,s+n*(.2+m*.28),n*.8,n*.1);return}if(t.type==="clay_pit"){if(e.fillStyle=o?"#804229":"#6e341b",e.fillRect(i,s,n+.5,n+.5),o){e.fillStyle="rgba(240, 248, 255, 0.6)",e.fillRect(i+n*.1,s+n*.1,n*.3,n*.2);return}e.fillStyle="rgba(154, 82, 49, 0.5)",e.beginPath(),e.arc(i+n*.4,s+n*.45,n*.25,0,Math.PI*2),e.fill();return}if(t.type==="stone_hill"||t.type==="copper_vein"||t.type==="iron_vein"||t.type==="gold_vein"){e.fillStyle=o?"#5a656e":"#40494f",e.fillRect(i,s,n+.5,n+.5),o&&(e.fillStyle="#f1f5f9",e.fillRect(i+n*.1,s+n*.08,n*.4,n*.15));return}const u=Math.sin(t.x*12.9898+t.y*78.233)*43758.5453,d=u-Math.floor(u);if(o){d>.65?e.fillStyle="#f8fafc":d>.35?e.fillStyle="#f1f5f9":e.fillStyle="#e2e8f0",e.fillRect(i,s,n+.5,n+.5),d>.75&&n>16&&(e.fillStyle="rgba(255, 255, 255, 0.9)",e.beginPath(),e.arc(i+n*.3,s+n*.3,n*.05,0,Math.PI*2),e.arc(i+n*.7,s+n*.65,n*.04,0,Math.PI*2),e.fill());return}if(l){d>.65?e.fillStyle="#5c5328":d>.35?e.fillStyle="#6b5d2c":e.fillStyle="#4f4722",e.fillRect(i,s,n+.5,n+.5),d>.5&&n>16&&(e.fillStyle=d>.75?"#c2410c":"#b45309",e.beginPath(),e.arc(i+n*.35,s+n*.4,n*.06,0,Math.PI*2),e.fill());return}c?d>.65?e.fillStyle="#3a692e":d>.35?e.fillStyle="#487d39":e.fillStyle="#3f7331":d>.65?e.fillStyle="#2f5b2b":d>.35?e.fillStyle="#396b34":e.fillStyle="#346130",e.fillRect(i,s,n+.5,n+.5),d>.55&&n>16&&(e.fillStyle=c?"rgba(90, 160, 70, 0.45)":"rgba(76, 140, 70, 0.5)",e.fillRect(i+n*.25,s+n*.3,n*.08,n*.2),e.fillRect(i+n*.65,s+n*.6,n*.08,n*.2),d>.85&&(e.fillStyle=d>.94?"#fef08a":d>.89?"#f472b6":"#a855f7",e.beginPath(),e.arc(i+n*.3,s+n*.3,n*.06,0,Math.PI*2),e.fill()))}renderTerrainFeature(e,t,i,s,n){const r=i+n*.5,o=s+n*.5;if(t.type==="dense_forest"||t.type==="sparse_trees"){const c=t.type==="dense_forest"?1.05:.85;e.fillStyle="rgba(10, 18, 12, 0.45)",e.beginPath(),e.ellipse(r+n*.15,o+n*.25,n*.35*c,n*.2*c,.3,0,Math.PI*2),e.fill(),e.fillStyle="#452b1b",e.fillRect(r-n*.08*c,o,n*.16*c,n*.35*c);const h=this.world.season,u=h==="Winter",d=h==="Autumn",m=h==="Summer";if(u){e.strokeStyle="#3e2718",e.lineWidth=Math.max(1.5,n*.05*c),e.beginPath(),e.moveTo(r,o),e.lineTo(r-n*.18*c,o-n*.22*c),e.moveTo(r,o),e.lineTo(r+n*.18*c,o-n*.22*c),e.moveTo(r,o),e.lineTo(r,o-n*.3*c),e.stroke(),e.fillStyle="#f8fafc",e.beginPath(),e.arc(r-n*.18*c,o-n*.24*c,n*.08*c,0,Math.PI*2),e.arc(r+n*.18*c,o-n*.24*c,n*.08*c,0,Math.PI*2),e.arc(r,o-n*.32*c,n*.1*c,0,Math.PI*2),e.fill();return}const g=this.godInteractions.find(_=>_.type==="wiggle"&&_.x===t.x&&_.y===t.y),v=g?Math.sin(g.timer*35)*n*.12*(g.timer/.8):0,f=Math.sin(this.animTimer*1.8+t.x*.6)*n*.04+v;let p="#1c4521",x="#2d6a33",T="#4c9954";d?(p="#78350f",x="#c2410c",T="#f59e0b"):m&&(p="#16421a",x="#28632e",T="#42934b"),e.fillStyle=p,e.beginPath(),e.arc(r-n*.12*c+f*.5,o-n*.05*c,n*.3*c,0,Math.PI*2),e.arc(r+n*.12*c+f*.5,o-n*.05*c,n*.3*c,0,Math.PI*2),e.arc(r+f*.5,o-n*.25*c,n*.32*c,0,Math.PI*2),e.fill(),e.fillStyle=x,e.beginPath(),e.arc(r-n*.08*c+f,o-n*.12*c,n*.26*c,0,Math.PI*2),e.arc(r+n*.08*c+f,o-n*.12*c,n*.26*c,0,Math.PI*2),e.arc(r+f,o-n*.32*c,n*.28*c,0,Math.PI*2),e.fill(),e.fillStyle=T,e.beginPath(),e.arc(r-n*.1*c+f,o-n*.28*c,n*.18*c,0,Math.PI*2),e.fill();return}if(t.type==="stone_hill"||t.type==="copper_vein"||t.type==="iron_vein"||t.type==="gold_vein"){if(e.fillStyle="rgba(12, 16, 20, 0.4)",e.beginPath(),e.ellipse(r+n*.12,o+n*.2,n*.38,n*.22,.2,0,Math.PI*2),e.fill(),e.fillStyle="#555f69",e.beginPath(),e.moveTo(r-n*.38,o+n*.15),e.lineTo(r-n*.25,o-n*.28),e.lineTo(r+n*.15,o-n*.35),e.lineTo(r+n*.38,o-n*.05),e.lineTo(r+n*.28,o+n*.25),e.lineTo(r-n*.15,o+n*.28),e.closePath(),e.fill(),e.fillStyle="#7a8793",e.beginPath(),e.moveTo(r-n*.25,o-n*.28),e.lineTo(r+n*.15,o-n*.35),e.lineTo(r+n*.05,o-n*.08),e.lineTo(r-n*.2,o-n*.02),e.closePath(),e.fill(),e.strokeStyle="#323940",e.lineWidth=1.5,e.beginPath(),e.moveTo(r-n*.05,o-n*.15),e.lineTo(r+n*.1,o+n*.18),e.stroke(),t.type==="gold_vein"){const l=(Math.sin(this.animTimer*3+t.x)+1)*.5;e.fillStyle=`rgba(250, 204, 21, ${.7+l*.3})`,e.beginPath(),e.arc(r-n*.08,o-n*.1,n*.07,0,Math.PI*2),e.arc(r+n*.15,o+n*.05,n*.06,0,Math.PI*2),e.fill()}else t.type==="copper_vein"?(e.fillStyle="#d97706",e.beginPath(),e.arc(r-n*.1,o+n*.05,n*.07,0,Math.PI*2),e.arc(r+n*.12,o-n*.12,n*.06,0,Math.PI*2),e.fill()):t.type==="iron_vein"&&(e.fillStyle="#94a3b8",e.beginPath(),e.arc(r,o,n*.07,0,Math.PI*2),e.fill());return}t.type==="fertile_soil"&&t.resourceAmount>0&&(e.fillStyle="rgba(20, 15, 10, 0.35)",e.beginPath(),e.ellipse(r,o+n*.18,n*.28,n*.14,0,0,Math.PI*2),e.fill(),e.fillStyle="#26572b",e.beginPath(),e.arc(r,o,n*.22,0,Math.PI*2),e.fill(),e.fillStyle="#dc2626",e.beginPath(),e.arc(r-n*.09,o-n*.04,n*.06,0,Math.PI*2),e.arc(r+n*.08,o-n*.08,n*.06,0,Math.PI*2),e.arc(r+n*.02,o+n*.07,n*.06,0,Math.PI*2),e.fill())}renderBuildingRealistic(e,t,i,s,n){var l,c;const r=i+n*.5,o=s+n*.5;if(!t.isCompleted){e.strokeStyle="#b45309",e.lineWidth=2,e.strokeRect(i+n*.15,s+n*.15,n*.7,n*.7),e.beginPath(),e.moveTo(i+n*.15,s+n*.15),e.lineTo(i+n*.85,s+n*.85),e.moveTo(i+n*.85,s+n*.15),e.lineTo(i+n*.15,s+n*.85),e.stroke(),e.fillStyle="rgba(0, 0, 0, 0.75)",e.fillRect(i+n*.1,s-n*.18,n*.8,n*.14),e.fillStyle="#10b981",e.fillRect(i+n*.12,s-n*.16,n*.76*(t.progress/100),n*.1);return}switch(t.type){case"campfire":{e.fillStyle="#22252a",e.beginPath(),e.arc(r,o,n*.32,0,Math.PI*2),e.fill();const h=8;for(let m=0;m<h;m++){const g=m/h*Math.PI*2,v=r+Math.cos(g)*n*.28,f=o+Math.sin(g)*n*.25;e.fillStyle=m%2===0?"#64748b":"#475569",e.beginPath(),e.arc(v,f,n*.08,0,Math.PI*2),e.fill()}e.strokeStyle="#3a2312",e.lineWidth=Math.max(3,n*.1),e.beginPath(),e.moveTo(r-n*.18,o+n*.12),e.lineTo(r+n*.18,o-n*.12),e.moveTo(r+n*.18,o+n*.12),e.lineTo(r-n*.18,o-n*.12),e.stroke(),e.fillStyle="#ea580c",e.beginPath(),e.arc(r,o,n*.14,0,Math.PI*2),e.fill();const u=Math.sin(this.animTimer*14+t.x)*n*.06,d=n*.35+u;e.fillStyle="#f97316",e.beginPath(),e.moveTo(r-n*.12,o+n*.05),e.quadraticCurveTo(r-n*.16,o-d*.4,r,o-d),e.quadraticCurveTo(r+n*.16,o-d*.4,r+n*.12,o+n*.05),e.closePath(),e.fill(),e.fillStyle="#fef08a",e.beginPath(),e.moveTo(r-n*.06,o),e.quadraticCurveTo(r-n*.08,o-d*.3,r,o-d*.65),e.quadraticCurveTo(r+n*.08,o-d*.3,r+n*.06,o),e.closePath(),e.fill(),Math.random()<.25&&this.addParticle(t.x+.5,t.y+.4,"#fb923c",1,.35);break}case"lean_to":{e.fillStyle="rgba(10, 14, 18, 0.45)",e.beginPath(),e.ellipse(r+n*.15,o+n*.3,n*.42,n*.22,.2,0,Math.PI*2),e.fill(),e.strokeStyle="#54341b",e.lineWidth=3,e.beginPath(),e.moveTo(i+n*.15,s+n*.8),e.lineTo(i+n*.5,s+n*.15),e.lineTo(i+n*.85,s+n*.8),e.stroke(),e.fillStyle="#a16207",e.beginPath(),e.moveTo(i+n*.12,s+n*.8),e.lineTo(i+n*.5,s+n*.15),e.lineTo(i+n*.88,s+n*.8),e.closePath(),e.fill(),e.fillStyle="#ca8a04";for(let h=0;h<4;h++)e.fillRect(i+n*(.2+h*.15),s+n*(.35+h*.1),n*.1,n*.04);break}case"mud_hut":case"thatched_cabin":case"timber_house":case"masonry_house":{const h=t.type==="masonry_house";e.fillStyle="rgba(10, 14, 18, 0.45)",e.beginPath(),e.ellipse(r+n*.15,o+n*.4,n*.48,n*.25,.15,0,Math.PI*2),e.fill(),e.fillStyle=h?"#57606a":t.type==="timber_house"?"#5a381e":"#8c4820",e.fillRect(i+n*.12,s+n*.28,n*.76,n*.62),e.fillStyle=h?"#2c333a":"#381c0b",e.beginPath(),e.moveTo(i+n*.05,s+n*.32),e.lineTo(r,s-n*.08),e.lineTo(i+n*.95,s+n*.32),e.closePath(),e.fill(),e.fillStyle="#fef08a",e.fillRect(i+n*.25,s+n*.48,n*.18,n*.18),e.strokeStyle="#1e293b",e.lineWidth=1.5,e.strokeRect(i+n*.25,s+n*.48,n*.18,n*.18),e.fillStyle="#261408",e.fillRect(i+n*.54,s+n*.52,n*.22,n*.38);break}case"farm_plot":{e.fillStyle="#261408",e.fillRect(i+n*.05,s+n*.05,n*.9,n*.9),e.fillStyle="#1c0e05";for(let u=0;u<3;u++)e.fillRect(i+n*.1,s+n*(.18+u*.28),n*.8,n*.06);const h=((l=t.meta)==null?void 0:l.cropStage)||"growing";if(h==="seedling"){e.fillStyle="#4ade80";for(let u=0;u<3;u++)for(let d=0;d<4;d++)e.beginPath(),e.arc(i+n*(.2+d*.2),s+n*(.24+u*.28),n*.04,0,Math.PI*2),e.fill()}else if(h==="growing"){e.fillStyle="#16a34a";for(let u=0;u<3;u++){const d=Math.sin(this.animTimer*2+u)*n*.03;e.fillRect(i+n*.15+d,s+n*(.2+u*.26),n*.7,n*.12)}}else if(h==="ripe"){e.fillStyle="#f59e0b";for(let u=0;u<3;u++){const d=Math.sin(this.animTimer*2.5+u*1.2)*n*.04;e.fillRect(i+n*.12+d,s+n*(.18+u*.26),n*.76,n*.15),e.fillStyle="#fbbf24";for(let m=0;m<4;m++)e.fillRect(i+n*(.16+m*.2)+d,s+n*(.15+u*.26),n*.08,n*.08);e.fillStyle="#f59e0b"}}break}case"ancestral_cairn":{e.fillStyle="rgba(10, 15, 20, 0.45)",e.beginPath(),e.ellipse(i+n*.5,s+n*.78,n*.38,n*.18,0,0,Math.PI*2),e.fill(),e.fillStyle="#64748b",e.beginPath(),e.arc(i+n*.38,s+n*.65,n*.18,0,Math.PI*2),e.arc(i+n*.62,s+n*.65,n*.18,0,Math.PI*2),e.fill(),e.fillStyle="#94a3b8",e.beginPath(),e.arc(i+n*.5,s+n*.5,n*.16,0,Math.PI*2),e.fill(),e.fillStyle="#cbd5e1",e.beginPath(),e.arc(i+n*.5,s+n*.35,n*.12,0,Math.PI*2),e.fill();const h=.5+.5*Math.sin(this.animTimer*4);e.fillStyle=`rgba(245, 158, 11, ${.5*h})`,e.beginPath(),e.arc(i+n*.5,s+n*.26,n*.1,0,Math.PI*2),e.fill(),e.fillStyle="#f472b6",e.beginPath(),e.arc(i+n*.36,s+n*.72,n*.04,0,Math.PI*2),e.arc(i+n*.64,s+n*.72,n*.04,0,Math.PI*2),e.fill();break}case"settlement_totem":{e.fillStyle="#52341d",e.fillRect(i+n*.2,s+n*.2,n*.14,n*.75),e.fillRect(i+n*.66,s+n*.2,n*.14,n*.75),e.fillStyle="#6b4226",e.fillRect(i+n*.12,s+n*.2,n*.76,n*.14),e.fillStyle="#fbbf24",e.beginPath(),e.arc(i+n*.5,s+n*.16,n*.1,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.font=`bold ${Math.max(7,Math.floor(n*.14))}px Outfit, sans-serif`,e.textAlign="center",e.fillText("EDEN",i+n*.5,s+n*.31);break}case"animal_pen":{e.fillStyle="#452b1b",e.fillRect(i+n*.08,s+n*.08,n*.84,n*.84),e.fillStyle="rgba(234, 179, 8, 0.2)",e.fillRect(i+n*.15,s+n*.15,n*.7,n*.7),e.strokeStyle="#854d0e",e.lineWidth=2,e.strokeRect(i+n*.08,s+n*.08,n*.84,n*.84),e.fillStyle="#713f12",e.fillRect(i+n*.05,s+n*.05,n*.1,n*.1),e.fillRect(i+n*.85,s+n*.05,n*.1,n*.1),e.fillRect(i+n*.05,s+n*.85,n*.1,n*.1),e.fillRect(i+n*.85,s+n*.85,n*.1,n*.1);break}case"wooden_bridge":{e.fillStyle="#3a2312",e.fillRect(i,s+n*.1,n,n*.8),e.fillStyle="#5c3a21";for(let h=0;h<5;h++)e.fillRect(i+h*(n*.2)+1,s+n*.12,n*.18,n*.76);e.fillStyle="#78350f",e.fillRect(i,s+n*.1,n,n*.08),e.fillRect(i,s+n*.82,n,n*.08),e.fillStyle="#d97706",e.fillRect(i+2,s+n*.08,n*.08,n*.12),e.fillRect(i+n-n*.1,s+n*.08,n*.08,n*.12),e.fillRect(i+2,s+n*.8,n*.08,n*.12),e.fillRect(i+n-n*.1,s+n*.8,n*.08,n*.12);break}case"waterwheel":{e.fillStyle="#475569",e.fillRect(i+n*.1,s+n*.25,n*.8,n*.7),e.fillStyle="#3e2718",e.beginPath(),e.moveTo(i+n*.05,s+n*.28),e.lineTo(i+n*.5,s+n*.05),e.lineTo(i+n*.95,s+n*.28),e.closePath(),e.fill();const h=((c=t.meta)==null?void 0:c.wheelRotation)||0,u=i+n*.5,d=s+n*.62,m=n*.32;e.save(),e.translate(u,d),e.rotate(h),e.strokeStyle="#78350f",e.lineWidth=2.5,e.beginPath(),e.arc(0,0,m,0,Math.PI*2),e.stroke(),e.fillStyle="#451a03",e.beginPath(),e.arc(0,0,m*.25,0,Math.PI*2),e.fill(),e.fillStyle="#92400e";for(let v=0;v<6;v++)e.rotate(Math.PI/3),e.fillRect(-m*.1,0,m*.2,m);e.restore();const g=Math.sin(this.animTimer*6)*n*.04;e.fillStyle="rgba(255, 255, 255, 0.7)",e.beginPath(),e.arc(u+g,s+n*.9,n*.12,0,Math.PI*2),e.arc(u-n*.15,s+n*.88,n*.08,0,Math.PI*2),e.fill();break}case"horse_stable":{e.fillStyle="#78350f",e.fillRect(i+n*.1,s+n*.2,n*.8,n*.65),e.fillStyle="#92400e",e.beginPath(),e.moveTo(i+n*.05,s+n*.22),e.lineTo(i+n*.5,s+n*.05),e.lineTo(i+n*.95,s+n*.22),e.fill(),e.fillStyle="#facc15",e.fillRect(i+n*.2,s+n*.55,n*.35,n*.22),e.strokeStyle="#e2e8f0",e.lineWidth=2,e.beginPath(),e.arc(i+n*.5,s+n*.18,n*.06,.2,Math.PI-.2),e.stroke();break}case"dock_pier":{e.fillStyle="#5c3a21",e.fillRect(i+n*.1,s+n*.15,n*.8,n*.7),e.strokeStyle="#3e2412",e.lineWidth=1.5;for(let h=.25;h<.85;h+=.15)e.beginPath(),e.moveTo(i+n*.1,s+n*h),e.lineTo(i+n*.9,s+n*h),e.stroke();e.fillStyle="#1c1917",e.fillRect(i+n*.15,s+n*.2,n*.1,n*.12),e.fillRect(i+n*.75,s+n*.2,n*.1,n*.12);break}case"great_library":{e.fillStyle="#cbd5e1",e.fillRect(i+n*.1,s+n*.2,n*.8,n*.7),e.fillStyle="#94a3b8",e.beginPath(),e.moveTo(i+n*.05,s+n*.22),e.lineTo(i+n*.5,s+n*.02),e.lineTo(i+n*.95,s+n*.22),e.fill(),e.fillStyle="#f8fafc",e.fillRect(i+n*.2,s+n*.22,n*.08,n*.65),e.fillRect(i+n*.46,s+n*.22,n*.08,n*.65),e.fillRect(i+n*.72,s+n*.22,n*.08,n*.65),e.fillStyle="#38bdf8",e.beginPath(),e.arc(i+n*.5,s+n*.14,n*.05,0,Math.PI*2),e.fill();break}case"timber_palisade":{e.fillStyle="#78350f";for(let h=.15;h<=.85;h+=.22)e.beginPath(),e.moveTo(i+n*h,s+n*.85),e.lineTo(i+n*h,s+n*.25),e.lineTo(i+n*(h+.08),s+n*.1),e.lineTo(i+n*(h+.16),s+n*.25),e.lineTo(i+n*(h+.16),s+n*.85),e.fill();e.fillStyle="#92400e",e.fillRect(i+n*.1,s+n*.5,n*.8,n*.08);break}case"watch_gate":{e.fillStyle="#5c3a21",e.fillRect(i+n*.15,s+n*.1,n*.7,n*.8),e.fillStyle="#1c1917",e.beginPath(),e.arc(i+n*.5,s+n*.6,n*.2,Math.PI,0),e.lineTo(i+n*.7,s+n*.9),e.lineTo(i+n*.3,s+n*.9),e.fill();const h=Math.sin(this.animTimer*12)*n*.03;e.fillStyle="#f59e0b",e.beginPath(),e.arc(i+n*.5+h,s+n*.08,n*.06,0,Math.PI*2),e.fill();break}case"stone_aqueduct":{e.fillStyle="#94a3b8",e.fillRect(i+n*.1,s+n*.18,n*.8,n*.2),e.fillRect(i+n*.18,s+n*.38,n*.14,n*.52),e.fillRect(i+n*.68,s+n*.38,n*.14,n*.52),e.fillStyle="rgba(0, 0, 0, 0.25)",e.beginPath(),e.arc(i+n*.5,s+n*.55,n*.22,Math.PI,0),e.fill(),e.fillStyle="#38bdf8",e.fillRect(i+n*.12,s+n*.2,n*.76,n*.08);break}case"water_cistern":{e.fillStyle="#64748b",e.beginPath(),e.arc(i+n*.5,s+n*.5,n*.38,0,Math.PI*2),e.fill(),e.fillStyle="#0284c7",e.beginPath(),e.arc(i+n*.5,s+n*.5,n*.3,0,Math.PI*2),e.fill(),e.strokeStyle="#bae6fd",e.lineWidth=1.5;const h=this.animTimer*.5%1;e.beginPath(),e.arc(i+n*.5,s+n*.5,n*.28*h,0,Math.PI*2),e.stroke();break}default:e.fillStyle="#475569",e.fillRect(i+n*.15,s+n*.15,n*.7,n*.7)}if(this.world.isSolsticeActive&&t.type==="settlement_totem"){const h=Math.sin(this.animTimer*4);e.fillStyle="#f43f5e",e.beginPath(),e.arc(i+n*.25,s+n*.25+h,n*.06,0,Math.PI*2),e.arc(i+n*.75,s+n*.25-h,n*.06,0,Math.PI*2),e.fill(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(i+n*.5,s+n*.1+h*.5,n*.07,0,Math.PI*2),e.fill()}this.world.season==="Winter"&&t.type!=="campfire"&&t.type!=="wooden_bridge"&&(e.fillStyle="rgba(241, 245, 249, 0.85)",e.fillRect(i+n*.1,s+n*.05,n*.8,n*.1))}renderAgentRealistic(e,t,i,s,n,r){var A,b,E,P;const o=t.lifeStage==="infant"||t.age<3,l=!o&&(t.lifeStage==="child"||t.age<13),c=!o&&!l&&(t.lifeStage==="apprentice"||t.age<18),h=t.lifeStage==="elder"||t.age>=60,u=o?.52:l?.68:c?.85:1,d=n/32*u,m=t.currentAction.toLowerCase().includes("sleep"),v=(t.isShivering||t.needs.warmth<25)&&!m?Math.sin(this.animTimer*45)*1.3*d:0,f=i+n*.5+v,p=s+n*.5;e.fillStyle="rgba(8, 14, 18, 0.45)",e.beginPath(),e.ellipse(f,p+10*d,(o?5:8)*d,(o?3:4)*d,0,0,Math.PI*2),e.fill();const x=!m&&(t.vx!==0||t.vy!==0),T=x?Math.sin(this.animTimer*(l?14:10)):0,_=x?Math.abs(Math.sin(this.animTimer*(l?14:10)))*2*d:0;if(r&&(e.strokeStyle="#38bdf8",e.lineWidth=2,e.setLineDash([4,4]),e.beginPath(),e.arc(f,p,18*d,0,Math.PI*2),e.stroke(),e.setLineDash([])),!o){e.fillStyle="#52341d";const I=x?T*4*d:0,k=x?-T*4*d:0;e.fillRect(f-5*d,p+5*d+I-_,3.5*d,6*d),e.fillRect(f+1.5*d,p+5*d+k-_,3.5*d,6*d)}if(o?(e.fillStyle="#fed7aa",e.beginPath(),e.roundRect(f-5*d,p-6*d-_,10*d,12*d,5*d),e.fill(),e.fillStyle="#fdba74",e.fillRect(f-5*d,p-1*d-_,10*d,2*d)):t.hasWinterCloak?(e.fillStyle="#3e2723",e.beginPath(),e.roundRect(f-7*d,p-5*d-_,14*d,13*d,4*d),e.fill(),e.fillStyle="#f1f5f9",e.beginPath(),e.ellipse(f,p-4*d-_,6.5*d,2.5*d,0,0,Math.PI*2),e.fill(),e.fillStyle="#f59e0b",e.fillRect(f-2*d,p-3*d-_,4*d,2*d),e.fillStyle="#1c1917",e.fillRect(f-6*d,p+2*d-_,12*d,2*d)):(e.fillStyle=h?t.gender==="male"?"#334155":"#475569":t.gender==="male"?"#4a3320":"#883a54",e.beginPath(),e.roundRect(f-6*d,p-4*d-_,12*d,12*d,3*d),e.fill(),e.fillStyle="#22150c",e.fillRect(f-6*d,p+2*d-_,12*d,2*d)),t.isPregnant){const I=t.facing==="left"?-3.5*d:t.facing==="right"?3.5*d:0;e.fillStyle="#9b3d5b",e.beginPath(),e.arc(f+I,p+1*d-_,5*d,0,Math.PI*2),e.fill();const k=.5+.5*Math.sin(this.animTimer*3.5);e.fillStyle=`rgba(244, 114, 182, ${.28*k})`,e.beginPath(),e.arc(f+I,p+1*d-_,7*d,0,Math.PI*2),e.fill()}if(!o){e.fillStyle="#d4a373";const I=x?-T*4*d:0;e.fillRect(f-8.5*d,p-3*d+I-_,2.8*d,8*d);const k=this.godInteractions.find(B=>B.type==="wave"&&B.agentId===t.id);if(k){const B=Math.sin(k.timer*25)*1.5*d;e.fillRect(f+5.7*d,p-8*d-B-_,2.8*d,8*d)}else e.fillRect(f+5.7*d,p-3*d-I-_,2.8*d,8*d);if(h&&(e.fillStyle="#5c3a21",e.fillRect(f+8*d,p-10*d-_,2*d,22*d),e.fillStyle="#92400e",e.beginPath(),e.arc(f+9*d,p-10*d-_,2.5*d,0,Math.PI*2),e.fill()),(t.inventory.wooden_shield||0)>0&&(e.fillStyle="#78350f",e.beginPath(),e.ellipse(f-9*d,p+1*d-_,4.5*d,7*d,0,0,Math.PI*2),e.fill(),e.strokeStyle="#e2e8f0",e.lineWidth=1.4*d,e.stroke(),e.fillStyle="#f59e0b",e.beginPath(),e.arc(f-9*d,p+1*d-_,1.8*d,0,Math.PI*2),e.fill()),(t.inventory.hunting_bow||0)>0&&(e.strokeStyle="#5c3a21",e.lineWidth=1.8*d,e.beginPath(),e.arc(f+4*d,p-1*d-_,8*d,-Math.PI*.4,Math.PI*.4),e.stroke()),t.hasCargoCart){const B=t.facing==="left"?1:-1,L=f+B*12*d,H=p+4*d-_;e.fillStyle="#854d0e",e.fillRect(L-5*d,H-5*d,10*d,8*d),e.strokeStyle="#451a03",e.lineWidth=2*d,e.beginPath(),e.arc(L,H+4*d,4.5*d,0,Math.PI*2),e.stroke(),e.strokeStyle="#78350f",e.lineWidth=1.5*d,e.beginPath(),e.moveTo(L-B*5*d,H),e.lineTo(f,p+2*d-_),e.stroke()}t.isInBoat&&(e.fillStyle="#5c3a21",e.beginPath(),e.ellipse(f,p+8*d-_,14*d,5*d,0,0,Math.PI*2),e.fill(),e.strokeStyle="#3e2412",e.lineWidth=1.5,e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.65)",e.beginPath(),e.arc(f,p+10*d-_,16*d,.2,Math.PI-.2),e.stroke())}e.fillStyle="#e8be99",e.beginPath(),e.arc(f,p-9*d-_,(o?4.2:5)*d,0,Math.PI*2),e.fill(),(l||o)&&(e.fillStyle="rgba(244, 114, 182, 0.45)",e.beginPath(),e.arc(f-3*d,p-8*d-_,1.4*d,0,Math.PI*2),e.arc(f+3*d,p-8*d-_,1.4*d,0,Math.PI*2),e.fill());const w=h?"#e2e8f0":t.gender==="male"?"#2b1a11":"#5a2215";if(o?(e.fillStyle=w,e.beginPath(),e.arc(f,p-12*d-_,2.5*d,0,Math.PI*2),e.fill()):t.gender==="male"?(e.fillStyle=w,e.beginPath(),e.arc(f,p-10*d-_,5.2*d,Math.PI*.9,Math.PI*2.1),e.fill(),h?(e.fillStyle="#f1f5f9",e.fillRect(f-3.5*d,p-6*d-_,7*d,5.5*d)):!l&&t.age>=18&&e.fillRect(f-3*d,p-6*d-_,6*d,2.5*d)):(e.fillStyle=w,e.beginPath(),e.arc(f,p-10*d-_,5.4*d,Math.PI*.8,Math.PI*2.2),e.fill(),e.fillRect(f-6*d,p-8*d-_,2.5*d,(h?6:8)*d),e.fillRect(f+3.5*d,p-8*d-_,2.5*d,(h?6:8)*d)),m){e.strokeStyle="#2b1a11",e.lineWidth=1.4*d,e.beginPath(),e.moveTo(f-3.5*d,p-8.5*d-_),e.lineTo(f-.8*d,p-8.5*d-_),e.moveTo(f+.8*d,p-8.5*d-_),e.lineTo(f+3.5*d,p-8.5*d-_),e.stroke();const I=(this.animTimer*1.5+t.x*.3)%2,k=I*14*d,B=Math.max(0,1-I/2);e.fillStyle=`rgba(186, 230, 253, ${B})`,e.font=`bold ${Math.max(9,Math.floor(10*d))}px Outfit, sans-serif`,e.textAlign="left",e.fillText("z",f+6*d+I*3,p-14*d-k),e.fillText("Z",f+11*d+I*4,p-20*d-k*1.3)}else{e.fillStyle="#1e1b18";const I=t.facing==="left"?-1.5*d:t.facing==="right"?1.5*d:0;e.fillRect(f-2.5*d+I,p-9.5*d-_,1.6*d,1.8*d),e.fillRect(f+1*d+I,p-9.5*d-_,1.6*d,1.8*d)}if(this.world.temperatureCelsius<5&&!m){const I=(this.animTimer*1.6+t.x*.4)%2.6;if(I<1.1){const k=I/1.1,B=(1-k)*.4,L=k*10*d,H=t.facing==="left"?-1:1;e.fillStyle=`rgba(241, 245, 249, ${B})`,e.beginPath(),e.arc(f+H*(5*d+L),p-8*d-L*.4-_,2.2*d*(1+k*.9),0,Math.PI*2),e.fill()}}if((t.isShivering||t.needs.warmth<25)&&!m&&(e.fillStyle="rgba(186, 230, 253, 0.9)",e.font=`${Math.max(8,Math.floor(9*d))}px Outfit, sans-serif`,e.textAlign="center",e.fillText("🥶",f+9*d,p-14*d-_)),t.activeTask){const I=t.activeTask,k=Math.min(1,I.progress/Math.max(1,I.duration)),B=10*d,L=p-22*d-_;e.strokeStyle="rgba(0, 0, 0, 0.6)",e.lineWidth=3.5,e.beginPath(),e.arc(f,L,B,0,Math.PI*2),e.stroke(),e.strokeStyle="#38bdf8",e.lineWidth=3.5,e.beginPath(),e.arc(f,L,B,-Math.PI/2,-Math.PI/2+Math.PI*2*k),e.stroke(),e.fillStyle="#f8fafc",e.font=`600 ${Math.max(9,Math.floor(9*d))}px Inter, sans-serif`,e.textAlign="center",e.shadowColor="rgba(0, 0, 0, 0.9)",e.shadowBlur=4,e.fillText(I.name,f,L-12*d),e.shadowBlur=0}else{const I=t.spouseId?" 💍":"";e.fillStyle="#ffffff",e.font=`600 ${Math.max(10,Math.floor(10*d))}px Outfit, sans-serif`,e.textAlign="center",e.shadowColor="rgba(0, 0, 0, 0.9)",e.shadowBlur=4,e.fillText(`${t.name}${I}`,f,p-17*d-_),e.shadowBlur=0}if(t.isPregnant){const I=Math.min(100,Math.round(t.pregnancyProgress||0)),k=p-(t.activeTask?36:28)*d-_;e.fillStyle="rgba(23, 15, 30, 0.88)",e.beginPath(),e.roundRect(f-28*d,k-7*d,56*d,14*d,6*d),e.fill(),e.strokeStyle="#ec4899",e.lineWidth=1.2,e.stroke(),e.fillStyle="#fdf2f8",e.font=`bold ${Math.max(8,Math.floor(8.5*d))}px Inter, sans-serif`,e.textAlign="center",e.fillText(`🤰 Expecting ${I}%`,f,k+3.5*d)}if(Object.values(t.relationships||{}).some(I=>I.stage==="crush"||I.stage==="in_love"||I.stage==="married")&&((A=t.speechBubble)!=null&&A.text.toLowerCase().includes("love")||(b=t.speechBubble)!=null&&b.text.toLowerCase().includes("heart")||(E=t.speechBubble)!=null&&E.text.toLowerCase().includes("flutter")||(P=t.speechBubble)!=null&&P.text.toLowerCase().includes("spouse")||t.spouseId&&!m&&Math.sin(this.animTimer+t.x)>.6)){const I=(this.animTimer*1.4+t.x*.7)%2,k=I*18*d,B=Math.max(0,1-I/2),L=Math.sin(this.animTimer*3+t.x)*4*d;e.fillStyle=`rgba(244, 63, 94, ${B})`,e.font=`${Math.max(9,Math.floor(10*d))}px Outfit, sans-serif`,e.textAlign="center",e.fillText("💖",f+11*d+L,p-14*d-k)}if(t.isDancingSolstice){const I=this.animTimer*4+t.x*2,k=14*d,B=f+Math.cos(I)*k,L=p-12*d+Math.sin(I)*(k*.4);e.fillStyle="#facc15",e.font=`${Math.max(8,Math.floor(9*d))}px Outfit, sans-serif`,e.textAlign="center",e.fillText("✨",B,L)}}renderMultiLineSpeechBubble(e,t,i,s,n,r){e.font="500 12px Inter, sans-serif";const o=220,l=14,c=10,h=16,u=t.split(" "),d=[];let m="";for(const T of u){const _=m?`${m} ${T}`:T;e.measureText(_).width>o-l*2&&m?(d.push(m),m=T):m=_}m&&d.push(m);let g=0;for(const T of d){const _=e.measureText(T).width;_>g&&(g=_)}const v=Math.max(120,g+l*2),f=d.length*h+c*2,p=i-v/2,x=s-f-8;e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowBlur=8,e.shadowOffsetY=4,e.fillStyle=n?"rgba(15, 23, 42, 0.95)":"rgba(24, 18, 38, 0.95)",e.beginPath(),e.roundRect(p,x,v,f,10),e.fill(),e.fillStyle=n?r:"#a855f7",e.fillRect(p+10,x,v-20,2),e.shadowBlur=0,e.shadowOffsetY=0,e.strokeStyle="rgba(255, 255, 255, 0.15)",e.lineWidth=1,e.stroke(),e.fillStyle=n?"rgba(15, 23, 42, 0.95)":"rgba(24, 18, 38, 0.95)",e.beginPath(),e.moveTo(i-6,x+f),e.lineTo(i,x+f+7),e.lineTo(i+6,x+f),e.fill(),e.fillStyle="#f8fafc",e.textAlign="center";for(let T=0;T<d.length;T++)e.fillText(d[T],i,x+c+12+T*h)}renderAtmosphericLighting(e,t,i){const s=this.world.timeOfDay;let n=0;if(s>=21.5||s<4?n=.88:s>=18&&s<21.5?n=(s-18)/3.5*.88:s>=4&&s<7.5&&(n=(1-(s-4)/3.5)*.88),this.world.weather==="Rain"&&(n=Math.min(.88,n+.22)),!(n<=.04)){e.save(),e.fillStyle=`rgba(6, 10, 22, ${n})`,e.fillRect(0,0,t,i),e.globalCompositeOperation="destination-out";for(const r of this.world.buildings.values())if(r.isCompleted&&["campfire","bakery","blacksmith","town_hall"].includes(r.type)){const o=this.camera.worldToScreen(r.x+.5,r.y+.5,li),l=(r.type==="campfire"?140:180)*this.camera.zoom,c=e.createRadialGradient(o.x,o.y,8,o.x,o.y,l);c.addColorStop(0,"rgba(0, 0, 0, 1.0)"),c.addColorStop(.5,"rgba(0, 0, 0, 0.7)"),c.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=c,e.beginPath(),e.arc(o.x,o.y,l,0,Math.PI*2),e.fill()}e.restore()}}renderSoftFogOfWar(e,t,i,s,n,r){e.fillStyle="#060a14";for(let o=t;o<=i;o++)for(let l=s;l<=n;l++){const c=this.world.getTile(o,l);if(!c||!c.isRevealed){const h=this.camera.worldToScreen(o,l,li);e.fillRect(h.x,h.y,r+1,r+1)}}}updateAndRenderParticles(e,t){const i=li*this.camera.zoom,s=this.world.season;if(this.particles.length<80){const n=Math.floor(-this.camera.x/i),r=n+Math.ceil(this.canvas.width/i)+4,o=Math.floor(-this.camera.y/i);if(s==="Winter"||this.world.temperatureCelsius<2){if(Math.random()<.35){const l=n+Math.random()*(r-n),c=o-2+Math.random()*2;this.particles.push({x:l,y:c,vx:-.3+Math.sin(this.animTimer*1.5+l)*.4,vy:.9+Math.random()*.8,life:1,maxLife:3.5+Math.random()*2,color:"rgba(255, 255, 255, 0.85)",size:1.4+Math.random()*2})}}else if(s==="Autumn"&&Math.random()<.2){const l=n+Math.random()*(r-n),c=o-2+Math.random()*2,h=["#f97316","#eab308","#dc2626","#d97706","#fbbf24"];this.particles.push({x:l,y:c,vx:-.5+Math.sin(this.animTimer*2.2+l)*.6,vy:.6+Math.random()*.6,life:1,maxLife:4+Math.random()*2.5,color:h[Math.floor(Math.random()*h.length)],size:2+Math.random()*2})}}for(let n=this.particles.length-1;n>=0;n--){const r=this.particles[n];if(r.life-=t/r.maxLife,r.life<=0){this.particles.splice(n,1);continue}r.x+=r.vx*t,r.y+=r.vy*t;const o=this.camera.worldToScreen(r.x,r.y,li);e.fillStyle=r.color,e.globalAlpha=Math.max(0,Math.min(1,r.life)),e.beginPath(),e.arc(o.x,o.y,r.size*(i/32),0,Math.PI*2),e.fill()}e.globalAlpha=1}renderFauna(e,t,i,s,n){const r=i+n*.5,o=s+n*.5,l=n/32,c=t.state==="sleeping",h=!c&&(t.vx!==0||t.vy!==0),u=t.facing==="left"?-1:1,d=h&&t.species==="rabbit"?Math.abs(Math.sin(this.animTimer*12))*4*l:0,m=h?Math.sin(this.animTimer*10)*3*l:0;e.save(),e.translate(r,o),e.scale(u,1),e.fillStyle="rgba(8, 14, 18, 0.35)",e.beginPath();const g=t.species==="rabbit"?5:t.species==="sheep"?9:11;if(e.ellipse(0,7*l,g*l,3.5*l,0,0,Math.PI*2),e.fill(),t.species==="rabbit")e.fillStyle="#d4b895",e.beginPath(),e.ellipse(-1*l,2*l-d,6*l,4.5*l,-.1,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(-7*l,1*l-d,2.2*l,0,Math.PI*2),e.fill(),e.fillStyle="#e6cca8",e.beginPath(),e.arc(4*l,-1*l-d,3.8*l,0,Math.PI*2),e.fill(),e.fillStyle="#d4b895",e.beginPath(),e.ellipse(2.5*l,-7*l-d,1.6*l,4.2*l,.2,0,Math.PI*2),e.fill(),e.fillStyle="#fbcfe8",e.beginPath(),e.ellipse(2.5*l,-7*l-d,.8*l,3*l,.2,0,Math.PI*2),e.fill(),e.fillStyle=c?"#4a3728":"#1e1b18",e.fillRect(4.5*l,-2*l-d,1.2*l,c?.8*l:1.2*l);else if(t.species==="deer")e.fillStyle="#8b5a2b",e.fillRect(-6*l,2*l+m,1.8*l,7*l),e.fillRect(4*l,2*l-m,1.8*l,7*l),e.beginPath(),e.ellipse(0,0,9*l,5*l,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.ellipse(-9*l,-1*l,2.5*l,2*l,.3,0,Math.PI*2),e.fill(),e.fillStyle="#9c6633",e.beginPath(),e.moveTo(4*l,-2*l),e.lineTo(8*l,-9*l),e.lineTo(12*l,-7*l),e.lineTo(6*l,2*l),e.fill(),e.beginPath(),e.arc(10*l,-8*l,3.2*l,0,Math.PI*2),e.fill(),e.strokeStyle="#52341d",e.lineWidth=1.4*l,e.beginPath(),e.moveTo(9*l,-11*l),e.lineTo(8*l,-16*l),e.lineTo(6*l,-18*l),e.moveTo(8*l,-14*l),e.lineTo(11*l,-17*l),e.stroke(),e.fillStyle="#111827",e.fillRect(10.5*l,-9*l,1.4*l,1.4*l);else if(t.species==="wolf")e.fillStyle="#475569",e.fillRect(-6*l,3*l+m,2.2*l,6*l),e.fillRect(4*l,3*l-m,2.2*l,6*l),e.beginPath(),e.ellipse(0,0,9.5*l,5.5*l,0,0,Math.PI*2),e.fill(),e.fillStyle="#64748b",e.beginPath(),e.arc(5*l,-2*l,4.5*l,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(9*l,-4*l,3.5*l,0,Math.PI*2),e.fill(),e.fillStyle="#334155",e.beginPath(),e.moveTo(8*l,-7*l),e.lineTo(10*l,-11*l),e.lineTo(12*l,-7*l),e.fill(),e.strokeStyle="#475569",e.lineWidth=3.2*l,e.beginPath(),e.moveTo(-9*l,0),e.quadraticCurveTo(-14*l,4*l,-13*l,7*l),e.stroke(),e.fillStyle="#fbbf24",e.fillRect(9.5*l,-5*l,1.5*l,1.5*l);else if(t.species==="dog"){e.fillStyle="#b45309",e.fillRect(-5*l,3*l+m,2.2*l,6*l),e.fillRect(4*l,3*l-m,2.2*l,6*l),e.beginPath(),e.ellipse(0,0,8.5*l,5*l,0,0,Math.PI*2),e.fill(),e.fillStyle="#dc2626",e.fillRect(5*l,-4*l,2.5*l,6*l),e.fillStyle="#d97706",e.beginPath(),e.arc(8.5*l,-3*l,3.6*l,0,Math.PI*2),e.fill(),e.fillStyle="#92400e",e.beginPath(),e.ellipse(7*l,-2*l,1.8*l,3.2*l,.4,0,Math.PI*2),e.fill();const v=Math.sin(this.animTimer*16)*4*l;e.strokeStyle="#b45309",e.lineWidth=2.8*l,e.beginPath(),e.moveTo(-8*l,0),e.quadraticCurveTo(-12*l,-4*l+v,-10*l,-8*l+v),e.stroke(),e.fillStyle="#1e1b18",e.fillRect(9.2*l,-4*l,1.4*l,1.4*l)}else if(t.species==="sheep")e.fillStyle="#1f2937",e.fillRect(-5*l,3*l+m,2*l,5*l),e.fillRect(4*l,3*l-m,2*l,5*l),e.fillStyle="#f8fafc",e.beginPath(),e.arc(-4*l,0,5.5*l,0,Math.PI*2),e.arc(1*l,-1*l,6.2*l,0,Math.PI*2),e.arc(5*l,0,5*l,0,Math.PI*2),e.fill(),e.fillStyle="#374151",e.beginPath(),e.arc(8*l,-1*l,3.2*l,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.beginPath(),e.arc(8*l,-4*l,1.8*l,0,Math.PI*2),e.fill(),e.fillStyle="#e5e7eb",e.fillRect(8.5*l,-2*l,1.2*l,1.2*l);else if(t.species==="horse"){const v="#78350f",f="#1c1917";e.fillStyle=v;const p=h?Math.sin(this.animTimer*12)*4*l:0;e.fillRect(-7*l,3*l+p,2.4*l,8*l),e.fillRect(5*l,3*l-p,2.4*l,8*l),e.fillStyle="#1c1917",e.fillRect(-7*l,9*l+p,2.6*l,2.2*l),e.fillRect(5*l,9*l-p,2.6*l,2.2*l),e.fillStyle=v,e.beginPath(),e.ellipse(0,0,11*l,6*l,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(3*l,-2*l),e.lineTo(8*l,-11*l),e.lineTo(13*l,-8*l),e.lineTo(7*l,3*l),e.fill(),e.beginPath(),e.arc(11*l,-10*l,3.8*l,0,Math.PI*2),e.fill(),e.fillStyle="#451a03",e.fillRect(12*l,-10*l,3.8*l,2.8*l),e.fillStyle=v,e.beginPath(),e.moveTo(9*l,-13*l),e.lineTo(10.5*l,-17*l),e.lineTo(12*l,-13*l),e.fill(),e.fillStyle=f,e.beginPath(),e.moveTo(4*l,-2*l),e.lineTo(9*l,-11*l),e.lineTo(6*l,-7*l),e.fill();const x=Math.sin(this.animTimer*8)*3*l;e.strokeStyle=f,e.lineWidth=3.2*l,e.beginPath(),e.moveTo(-11*l,-1*l),e.quadraticCurveTo(-15*l,4*l+x,-13*l,10*l+x),e.stroke(),(t.isSaddled||t.isDomesticated)&&(e.fillStyle="#dc2626",e.fillRect(-3*l,-6*l,8*l,3.5*l),e.fillStyle="#271206",e.fillRect(-1*l,-7*l,5*l,2.5*l)),e.fillStyle="#111827",e.fillRect(11.2*l,-11*l,1.4*l,1.4*l)}e.restore(),t.name&&t.isDomesticated&&(e.fillStyle="#38bdf8",e.font=`600 ${Math.max(9,Math.floor(9*l))}px Outfit, sans-serif`,e.textAlign="center",e.shadowColor="rgba(0, 0, 0, 0.9)",e.shadowBlur=3,e.fillText(`🐕 ${t.name}`,r,o-14*l),e.shadowBlur=0)}}const Ig="modulepreload",Lg=function(a){return"/Genesis-New-Dawn/"+a},Nl={},Dg=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Lg(l),l in Nl)return;Nl[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Ig,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,m)=>{u.addEventListener("load",d),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return s.then(r=>{for(const o of r||[])o.status==="rejected"&&n(o.reason);return e().catch(n)})};class Bn{static async getCurrentUser(){var t;const{data:{session:e}}=await rn.auth.getSession();return this.cachedUser=((t=e==null?void 0:e.user)==null?void 0:t.email)||null,this.cachedUser}static getCachedUser(){return this.cachedUser}static async logout(){this.cachedUser=null,await rn.auth.signOut()}}R(Bn,"cachedUser",null);const kg=Object.freeze(Object.defineProperty({__proto__:null,AuthManager:Bn},Symbol.toStringTag,{value:"Module"}));class Vt{constructor(){R(this,"autoSaveTimer",0);R(this,"AUTO_SAVE_INTERVAL",15)}static getStorageKey(){return`genesis_world_save_${Bn.getCachedUser()||"guest"}_v1`}static hasSaveData(){try{return localStorage.getItem(Vt.getStorageKey())!==null}catch{return!1}}static async syncCloudSave(){const e=Bn.getCachedUser();if(e)try{const{data:t,error:i}=await rn.from("user_saves").select("save_state, updated_at").eq("user_id",e).single();if(i||!t){console.log("No cloud save found or error fetching:",i);return}const s=t.save_state,n=localStorage.getItem(Vt.getStorageKey());let r=!0;if(n)try{JSON.parse(n).timestamp>=s.timestamp&&(r=!1)}catch{}r?(console.log("Cloud save is newer, syncing to local storage..."),localStorage.setItem(Vt.getStorageKey(),JSON.stringify(s))):console.log("Local save is up to date with cloud.")}catch(t){console.error("Failed to sync cloud save:",t)}}static saveState(e,t,i,s,n=[],r=!1){try{const o=Array.from(e.buildings.values()),l=[],c=[];for(const f of e.chunks.values())for(let p=0;p<16;p++)for(let x=0;x<16;x++){const T=f.tiles[p][x];T.isRevealed&&l.push([T.x,T.y]),(T.resourceAmount!==T.maxResource||T.building)&&c.push({x:T.x,y:T.y,type:T.type,resourceAmount:T.resourceAmount})}const h=s.map(f=>({...f,knowledge:Array.from(f.knowledge)})),u=Et.map(f=>({id:f.id,discovered:f.discovered,researchProgress:f.researchProgress,discoveredBy:f.discoveredBy,discoveredAtDay:f.discoveredAtDay})),d=Array.from(t.items.entries()),m={version:1,timestamp:Date.now(),world:{seed:e.seed,day:e.day,timeOfDay:e.timeOfDay,season:e.season,weather:e.weather,buildings:o,revealedCoords:l,modifiedTiles:c},agents:h,animals:n,technologies:u,economy:{items:d,treasuryCoins:t.treasuryCoins,totalGdp:t.totalGdp,transactionCount:t.transactionCount,isCurrencyUnlocked:t.isCurrencyUnlocked},chronicles:i.chronicles,hasSpawnedCustomCharacter:r},g=JSON.stringify(m);localStorage.setItem(Vt.getStorageKey(),g);const v=Bn.getCachedUser();return v&&rn.from("user_saves").upsert({user_id:v,save_state:m}).then(({error:f})=>{f&&console.warn("Failed to upload save to cloud:",f.message)}),!0}catch(o){return console.error("Failed to save simulation state:",o),!1}}static loadState(e,t,i){try{const s=localStorage.getItem(Vt.getStorageKey());if(!s)return null;const n=JSON.parse(s);if(!n||!n.world||!n.agents)return null;if(e.seed=n.world.seed||e.seed,e.day=n.world.day||1,e.timeOfDay=n.world.timeOfDay||7,e.season=n.world.season||"Spring",e.weather=n.world.weather||"Clear",e.buildings.clear(),n.world.buildings)for(const d of n.world.buildings){e.buildings.set(d.id,d);const m=e.getTile(d.x,d.y);m&&(m.building=d)}if(n.world.revealedCoords)for(const[d,m]of n.world.revealedCoords){const g=e.getTile(d,m);g&&(g.isRevealed=!0)}if(n.world.modifiedTiles)for(const d of n.world.modifiedTiles){const m=e.getTile(d.x,d.y);m&&(m.type=d.type,m.resourceAmount=d.resourceAmount)}if(n.technologies)for(const d of n.technologies){const m=Et.find(g=>g.id===d.id);m&&(m.discovered=d.discovered,m.researchProgress=d.researchProgress,m.discoveredBy=d.discoveredBy,m.discoveredAtDay=d.discoveredAtDay)}n.economy&&(n.economy.items&&(t.items=new Map(n.economy.items)),t.treasuryCoins=n.economy.treasuryCoins||0,t.totalGdp=n.economy.totalGdp||0,t.transactionCount=n.economy.transactionCount||0,t.isCurrencyUnlocked=!!n.economy.isCurrencyUnlocked),n.chronicles&&Array.isArray(n.chronicles)&&(i.chronicles=n.chronicles);const r=n.agents.map(d=>{const m=d.maxCarryWeight||30;return{...d,knowledge:new Set(d.knowledge||[]),maxCarryWeight:Math.max(m,45+Math.floor(Math.random()*20))}}),o=n.animals||[],l=Date.now(),c=Math.max(0,l-(n.timestamp||l)),h=Math.floor(c/1e3),u=!!n.hasSpawnedCustomCharacter||localStorage.getItem("genesis_custom_pioneer_spawned")==="true";return{agents:r,animals:o,elapsedSeconds:h,hasSpawnedCustomCharacter:u}}catch(s){return console.error("Failed to parse and load Genesis save data:",s),null}}static exportSaveFile(e,t,i,s,n=[],r=!1){this.saveState(e,t,i,s,n,r);const o=localStorage.getItem(Vt.getStorageKey());if(!o)return;const l=new Blob([o],{type:"application/json"}),c=URL.createObjectURL(l),h=document.createElement("a");h.href=c,h.download=`genesis_civilization_day_${e.day}_${Date.now()}.json`,h.click(),URL.revokeObjectURL(c)}static importSaveFile(e,t,i){const s=new FileReader;s.onload=n=>{var r;try{const o=(r=n.target)==null?void 0:r.result,l=JSON.parse(o);if(!l.world||!l.agents){i("Invalid Genesis world file format.");return}localStorage.setItem(Vt.getStorageKey(),o),t()}catch(o){i(`Corrupted save file: ${(o==null?void 0:o.message)||"unknown error"}`)}},s.readAsText(e)}update(e,t,i,s,n,r=[],o=!1){this.autoSaveTimer+=e,this.autoSaveTimer>=this.AUTO_SAVE_INTERVAL&&(this.autoSaveTimer=0,Vt.saveState(t,i,s,n,r,o))}}class Ng{constructor(e,t,i,s,n,r,o,l=!1){R(this,"container");R(this,"selectedAgentId","agent_adam");R(this,"openTab","none");R(this,"simSpeed",1);R(this,"isCinematic",!1);R(this,"isMinimapDragging",!1);R(this,"hasSpawnedCharacter",!1);this.world=e,this.economy=t,this.aiEngine=i,this.camera=s,this.soundEngine=n,this.onAwakenDynasty=r,this.onSpawnCharacter=o,this.hasSpawnedCharacter=l||localStorage.getItem("genesis_custom_pioneer_spawned")==="true",this.container=document.getElementById("app")||document.body,this.mountDOM(),this.bindEvents(),this.hasSpawnedCharacter&&this.updateSpawnLockUI()}setCustomCharacterSpawned(e){this.hasSpawnedCharacter=e,this.updateSpawnLockUI()}getCustomCharacterSpawned(){return this.hasSpawnedCharacter}updateSpawnLockUI(){const e=document.getElementById("btn-spawn-pioneer-top"),t=document.getElementById("btn-quick-spawn-inspector"),i=document.getElementById("tab-spawn-btn"),s=document.getElementById("spawn-modal");this.hasSpawnedCharacter&&(e&&e.remove(),t&&t.remove(),i&&i.remove(),s&&s.remove(),this.openTab==="spawn"&&(this.openTab="none"))}setCamera(e){this.camera=e}getSimSpeed(){return this.simSpeed}getSelectedAgentId(){return this.selectedAgentId}setSelectedAgentId(e){this.selectedAgentId=e}mountDOM(){this.container.innerHTML=`
      <div id="canvas-container">
        <canvas id="game-canvas"></canvas>
      </div>

      <!-- Top Navigation Bar -->
      <header id="top-bar" class="glass-panel">
        <button id="btn-logout" class="nav-tab-btn" title="Logout" style="margin-left: auto; padding: 4px 10px; font-size: 11px;">🚪 Logout</button>
        <button id="btn-premium-shop" class="nav-tab-btn" title="Cosmetics Store" style="margin-left: 8px; padding: 4px 10px; font-size: 11px; background: linear-gradient(135deg, #14F195, #9945FF); color: black; font-weight: bold;">🛒 Premium Store</button>
        <button id="btn-connect-wallet" class="nav-tab-btn" title="Connect Wallet" style="margin-left: 8px; padding: 4px 10px; font-size: 11px; background: #9945FF; color: white;">🪙 Connect Solana</button>
        <div class="brand-section">
          <div class="brand-logo">🌍</div>
          <div>
            <div class="brand-title">GENESIS: NEW DAWN</div>
            <div class="brand-subtitle" style="font-size: 10px; color: var(--text-muted); letter-spacing: 0.5px;">AUTONOMOUS AI EXPANDING CIVILIZATION</div>
          </div>
          <div id="era-badge" class="era-badge">PRIMEVAL ERA</div>
        </div>

        <div class="time-section">
          <div class="time-pill">
            <span id="sun-moon-icon">☀️</span>
            <span id="time-display">07:00</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="day-display">Day 1</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="season-display" style="color: var(--accent-emerald); font-weight: 600;">🌸 Spring</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="temp-display" style="color: #38bdf8; font-weight: 600;">🌡️ 18°C</span>
          </div>
        </div>

        <div class="stats-section">
          <div class="stat-chip" title="Real-time Civilization Auto-saving Active" style="border-color: rgba(52, 211, 153, 0.4);">
            <span style="display:inline-block; width: 6px; height: 6px; border-radius: 50%; background: #34d399; margin-right: 4px; box-shadow: 0 0 8px #34d399;"></span>
            <span style="font-size: 10px; color: #34d399; font-weight: 600;">SAVED</span>
          </div>
          <div class="stat-chip" id="gaze-timer-chip" title="Watcher's Gaze: Logging in for 1 min every 48 hours keeps pioneers alive!" style="border-color: rgba(56, 189, 248, 0.4);">
            <span style="font-size: 10px;">👁️</span>
            <span id="gaze-timer-val" style="font-size: 10px; color: #38bdf8; font-weight: 600;">GAZE: 48h</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">👥</span>
            <span id="pop-count">2</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">🪙</span>
            <span id="treasury-count">0</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">📈</span>
            <span id="gdp-count">GDP 0</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">🏛️</span>
            <span id="buildings-count">0 Bldgs</span>
          </div>
          <button id="btn-spawn-pioneer-top" class="spawn-top-btn" title="Spawn a new character into the world anytime!">
            <span style="font-size: 13px;">➕</span>
            <span>Spawn Pioneer</span>
          </button>
          <button id="btn-export-save" class="nav-tab-btn" title="Download Civilization Backup File (.json)" style="padding: 4px 10px; font-size: 11px; margin-left: 4px;">💾 Backup</button>
          <button id="btn-import-save" class="nav-tab-btn" title="Restore Civilization Backup (.json)" style="padding: 4px 10px; font-size: 11px;">📂 Load</button>
          <button id="btn-audio-toggle" class="nav-tab-btn" title="Toggle Soundscape Audio" style="padding: 4px 10px; font-size: 11px; margin-left: 4px;">🔊 Audio: ON</button>
          <input type="file" id="file-import-save" accept=".json" style="display: none;" />
        </div>
      </header>

      <!-- Natural Passing 48h Memorial Banner -->
      <div id="natural-passing-banner" class="glass-panel" style="display: none; position: fixed; top: 70px; left: 50%; transform: translateX(-50%); z-index: 1000; padding: 18px 26px; text-align: center; border: 1px solid rgba(239, 68, 68, 0.6); background: rgba(15, 23, 42, 0.94); border-radius: 12px; box-shadow: 0 10px 35px rgba(0,0,0,0.85); max-width: 520px;">
        <div style="font-size: 26px; margin-bottom: 6px;">🪦</div>
        <div style="font-weight: 700; color: #f87171; font-size: 16px; margin-bottom: 6px;">NATURAL CAUSES: 48 HOURS UNATTENDED</div>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
          The founders have passed away peacefully of natural causes after 2 days without the Watcher's presence. Ancestral memorial cairns mark where they once walked.
        </div>
        <button id="btn-awaken-dynasty" style="background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 12px;">
          🌱 Awaken Next Generation (Gen 2)
        </button>
      </div>

      <!-- Left Panel: Agent Inspector -->
      <aside id="agent-inspector" class="glass-panel">
        <div class="mobile-inspector-bar">
          <div class="mobile-drag-pill"></div>
          <button id="btn-close-mobile-inspector" class="mobile-inspector-close-btn">✕ Close</button>
        </div>
        <div class="section-label" style="display: flex; justify-content: space-between; align-items: center;">
          <span>CITIZENS OF THE EXPEDITION</span>
          <button id="btn-quick-spawn-inspector" class="quick-spawn-btn" title="Spawn a new pioneer">➕ Spawn</button>
        </div>
        <div id="agent-selector-pills" class="agent-selector-pills"></div>

        <div class="agent-header">
          <div id="agent-avatar" class="agent-avatar">👤</div>
          <div>
            <div id="agent-name" class="agent-name">Adam</div>
            <div id="agent-meta" class="agent-meta">Pioneer • Age 20 • Gen 1</div>
          </div>
        </div>

        <div class="needs-grid">
          <div class="need-row">
            <div class="need-label-row">
              <span>Hunger</span>
              <span id="val-hunger">80%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-hunger" class="need-bar-fill fill-hunger" style="width: 80%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Energy</span>
              <span id="val-energy">90%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-energy" class="need-bar-fill fill-energy" style="width: 90%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Warmth</span>
              <span id="val-warmth">85%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-warmth" class="need-bar-fill fill-warmth" style="width: 85%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Social</span>
              <span id="val-social">75%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-social" class="need-bar-fill fill-social" style="width: 75%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Curiosity</span>
              <span id="val-curiosity">80%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-curiosity" class="need-bar-fill fill-curiosity" style="width: 80%;"></div>
            </div>
          </div>
        </div>

        <div class="agent-thought-card">
          <div class="thought-title">
            <span>🧠</span> ACTIVE THOUGHT
          </div>
          <div id="agent-thought" class="thought-text">"Where am I? The earth is raw and untouched."</div>
          <div id="agent-action" class="action-status">Current: Looking around</div>
        </div>

        <!-- Romance, Courtship & Family Card -->
        <div class="agent-romance-card">
          <div class="romance-header">
            <div class="romance-title">
              <span>❤️</span> RELATIONSHIP & FAMILY
            </div>
            <div id="romance-stage-badge" class="romance-stage-badge">STRANGERS</div>
          </div>
          <div id="romance-partner-name" class="romance-partner-text">Partner: Seeking Companion</div>
          
          <div class="romance-bars-container">
            <div class="need-row">
              <div class="need-label-row">
                <span style="font-size: 10px;">Affection</span>
                <span id="val-affection" style="font-size: 10px;">15%</span>
              </div>
              <div class="need-bar-bg" style="height: 4px;">
                <div id="bar-affection" class="need-bar-fill" style="width: 15%; background: linear-gradient(90deg, #f43f5e, #fda4af);"></div>
              </div>
            </div>
            <div class="need-row">
              <div class="need-label-row">
                <span style="font-size: 10px;">Trust</span>
                <span id="val-trust" style="font-size: 10px;">20%</span>
              </div>
              <div class="need-bar-bg" style="height: 4px;">
                <div id="bar-trust" class="need-bar-fill" style="width: 20%; background: linear-gradient(90deg, #0ea5e9, #7dd3fc);"></div>
              </div>
            </div>
          </div>

          <!-- Pregnancy Gestation Live Meter -->
          <div id="romance-pregnancy-panel" style="display: none; margin-top: 4px; padding: 6px 8px; background: rgba(244, 63, 94, 0.12); border: 1px solid rgba(244, 114, 182, 0.3); border-radius: 6px;">
            <div style="display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: #f472b6;">
              <span id="gestation-label">🤰 Gestation Progress</span>
              <span id="val-gestation">0%</span>
            </div>
            <div class="need-bar-bg" style="height: 5px; margin-top: 4px;">
              <div id="bar-gestation" class="need-bar-fill" style="width: 0%; background: linear-gradient(90deg, #f43f5e, #f472b6);"></div>
            </div>
          </div>
        </div>

        <div class="inventory-section">
          <div class="section-label">BACKPACK INVENTORY</div>
          <div id="inventory-grid" class="inventory-grid"></div>
        </div>

        <button id="track-agent-btn" class="track-btn">
          <span>🎯</span> Track Agent Camera
        </button>
      </aside>

      <!-- Right Tab Bar -->
      <nav id="right-panel-tabs">
        <button id="tab-spawn-btn" class="tab-btn spawn-tab-highlight" title="Spawn New Pioneer (Click anytime!)">➕</button>
        <button id="tab-codex-btn" class="tab-btn" title="Inventions & Tech Codex">💡</button>
        <button id="tab-economy-btn" class="tab-btn" title="Market Economy & Prices">⚖️</button>
        <button id="tab-chronicles-btn" class="tab-btn" title="History Chronicles">📜</button>
        <button id="tab-dynasty-btn" class="tab-btn" title="Civilization Dynasty & Family Tree">🌳</button>
        <button id="tab-cinematic-btn" class="tab-btn" title="Cinematic Terrarium Mode (Press 'C')">🎥</button>
      </nav>

      <!-- Spawn Pioneer Drawer Modal -->
      <div id="spawn-modal" class="drawer-modal glass-panel spawn-drawer">
        <div class="modal-header">
          <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px;">➕</span>
            <span>SPAWN NEW PIONEER</span>
          </div>
          <button class="close-btn" data-close="spawn">✕</button>
        </div>
        <p style="font-size: 12px; color: var(--text-muted); line-height: 1.5; margin: 0;">
          Give your pioneer a name. <strong style="color: #34d399;">Everything else is completely random and simulated</strong>: gender, genetics, appearance, starting vocation, constitution, personality, and birthplace.
        </p>

        <div class="spawn-form-group" style="margin-top: 8px;">
          <label class="spawn-form-label">PIONEER NAME</label>
          <div style="display: flex; gap: 8px;">
            <input type="text" id="spawn-input-name" class="spawn-text-input" placeholder="Enter name (e.g. Silas, Freya)..." maxlength="18" autofocus />
            <button id="btn-spawn-random-name" class="spawn-sub-btn" title="Suggest Random Name">🎲 Suggest</button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          <button id="btn-confirm-spawn" class="spawn-submit-btn">
            ✨ Bring Pioneer To Life
          </button>
          <button id="btn-instant-random-spawn" class="spawn-instant-btn">
            ⚡ Quick Spawn (Simulate All Including Name)
          </button>
        </div>
      </div>

      <!-- Tech Codex Drawer Modal -->
      <div id="codex-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">💡 TECHNOLOGY TREE & CODEX</div>
          <button class="close-btn" data-close="codex">✕</button>
        </div>
        <div id="tech-list" class="tech-list"></div>
      </div>

      <!-- Economy Drawer Modal -->
      <div id="economy-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">⚖️ MARKETPLACE & COMMODITIES</div>
          <button class="close-btn" data-close="economy">✕</button>
        </div>
        <p style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
          Real-time dynamic commodity pricing determined by supply, demand, and city trading activity.
        </p>
        <table class="market-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Supply</th>
              <th>Demand</th>
            </tr>
          </thead>
          <tbody id="market-tbody"></tbody>
        </table>
      </div>

      <!-- History Chronicles Modal -->
      <div id="chronicles-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">📜 CIVILIZATION CHRONICLES</div>
          <button class="close-btn" data-close="chronicles">✕</button>
        </div>
        <div id="chronicles-full-list" style="display: flex; flex-direction: column; gap: 8px;"></div>
      </div>

      <!-- Dynasty & Family Tree Modal -->
      <div id="dynasty-modal" class="drawer-modal glass-panel dynasty-drawer">
        <div class="modal-header">
          <div class="modal-title">🌳 CIVILIZATION DYNASTY & LINEAGE</div>
          <button class="close-btn" data-close="dynasty">✕</button>
        </div>
        <div id="dynasty-summary-bar" class="dynasty-summary-bar"></div>
        <div id="dynasty-tree-container" class="dynasty-tree-container"></div>
      </div>

      <!-- Premium Token Shop Modal -->
      <div id="shop-modal" class="fullscreen-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title" style="background: linear-gradient(135deg, #14F195, #9945FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 24px;">🛒 COSMETICS & SUPPORTER STORE</div>
          <button class="close-btn" data-close="shop" style="font-size: 24px; padding: 10px;">✕</button>
        </div>
        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.5; margin-bottom: 24px; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;">
          Burn <strong style="color: #9945FF;">$GENESIS</strong> to unlock exclusive visual themes and supporter perks. All items are purely cosmetic and do not affect the autonomous simulation math.
        </p>
        <div class="shop-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px;">
          
          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <img src="shop/shop_cyberpunk_hud.jpg" alt="Cyberpunk Theme" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🎨 Cyberpunk HUD Theme</div>
              <div style="font-size: 14px; color: var(--text-muted);">Reskin your game UI with neon scanlines.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">50M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <img src="shop/shop_eagle_eye.jpg" alt="Eagle-Eye Camera" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🦅 Eagle-Eye Camera</div>
              <div style="font-size: 14px; color: var(--text-muted);">Unlock ultra-wide zoom-out from the clouds.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">100M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <img src="shop/shop_supporter_halo.jpg" alt="Supporter Halo" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">👑 Supporter Halo</div>
              <div style="font-size: 14px; color: var(--text-muted);">A golden halo over your custom pioneers.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">50M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <img src="shop/shop_synthetic_skin.jpg" alt="Synthetic Pioneer Skin" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🤖 Synthetic Pioneer Skin</div>
              <div style="font-size: 14px; color: var(--text-muted);">Turn your pioneers into polished chrome synthetics.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">75M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <img src="shop/shop_starweaver_robes.jpg" alt="Starweaver Robes" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🌌 Starweaver Robes</div>
              <div style="font-size: 14px; color: var(--text-muted);">Equip your lineage with celestial garments.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">75M $GENESIS</button>
          </div>

        </div>
      </div>

      <!-- Bottom Chronicles Active Ticker -->
      <footer id="chronicles-bar" class="glass-panel">
        <div class="chronicle-active-entry">
          <span class="chronicle-badge">LATEST CHRONICLE</span>
          <span id="latest-chronicle-text">Adam and Eve have awakened in an untamed paradise.</span>
        </div>
        <button id="view-chronicles-btn" class="chronicle-log-btn">View Full History 📜</button>
      </footer>

      <!-- Radar Minimap Container -->
      <div id="minimap-panel" class="glass-panel" title="Click or drag on radar to pan world camera">
        <div class="minimap-header">
          <span id="minimap-settlement-title">🏕️ Eden Wilds</span>
          <span id="minimap-coords" style="font-size: 10px; color: var(--text-muted);">60, 40</span>
        </div>
        <canvas id="minimap-canvas" width="168" height="112"></canvas>
      </div>

      <!-- Cinematic Terrarium Overlay -->
      <div id="cinematic-overlay" class="cinematic-overlay">
        <div id="cinematic-exit-pill" class="cinematic-exit-pill">🎥 Cinematic Terrarium • Press 'C' or Esc to Exit</div>
      </div>

      <!-- Mobile Floating Quick Controls -->
      <div id="mobile-floating-controls">
        <button id="btn-toggle-inspector-mobile" class="mobile-float-btn" title="Inspect Pioneer">
          <span>👤</span>
          <span class="mobile-btn-label">Pioneer</span>
        </button>
        <button id="btn-mobile-minimap-toggle" class="mobile-float-btn" title="Toggle Radar">
          <span>🗺️</span>
          <span class="mobile-btn-label">Radar</span>
        </button>
      </div>

      <!-- Mobile On-Screen Zoom Controls -->
      <div id="mobile-zoom-controls">
        <button id="btn-mobile-zoom-in" class="mobile-zoom-btn" title="Zoom In">➕</button>
        <button id="btn-mobile-zoom-out" class="mobile-zoom-btn" title="Zoom Out">➖</button>
      </div>
    `}bindEvents(){var m,g,v,f,p,x,T,_,w,S,A,b,E,P,I,k,B,L,H,Y,K,ne;(m=document.getElementById("btn-logout"))==null||m.addEventListener("click",()=>{Dg(()=>Promise.resolve().then(()=>kg),void 0).then(G=>{G.AuthManager.logout(),window.location.reload()})}),(g=document.getElementById("btn-premium-shop"))==null||g.addEventListener("click",()=>{this.toggleTab("shop")}),document.querySelectorAll(".btn-buy-premium").forEach(G=>{G.addEventListener("click",()=>{alert("The token has not been minted yet! Minting soon...")})}),(v=document.getElementById("btn-connect-wallet"))==null||v.addEventListener("click",async()=>{try{const G=window.solana;if(G&&G.isPhantom){const $=await G.connect(),Q=document.getElementById("btn-connect-wallet");Q&&(Q.textContent=`🪙 ${$.publicKey.toString().slice(0,4)}...${$.publicKey.toString().slice(-4)}`,Q.style.background="#14F195",Q.style.color="#000"),console.log("Connected to Solana:",$.publicKey.toString())}else window.open("https://phantom.app/","_blank")}catch(G){console.error("Wallet connection failed:",G)}}),(f=document.getElementById("tab-spawn-btn"))==null||f.addEventListener("click",()=>this.toggleTab("spawn")),(p=document.getElementById("tab-codex-btn"))==null||p.addEventListener("click",()=>this.toggleTab("codex")),(x=document.getElementById("tab-economy-btn"))==null||x.addEventListener("click",()=>this.toggleTab("economy")),(T=document.getElementById("tab-chronicles-btn"))==null||T.addEventListener("click",()=>this.toggleTab("chronicles")),(_=document.getElementById("tab-dynasty-btn"))==null||_.addEventListener("click",()=>this.toggleTab("dynasty")),(w=document.getElementById("tab-cinematic-btn"))==null||w.addEventListener("click",()=>this.toggleCinematicMode()),(S=document.getElementById("cinematic-exit-pill"))==null||S.addEventListener("click",()=>this.toggleCinematicMode()),(A=document.getElementById("view-chronicles-btn"))==null||A.addEventListener("click",()=>this.toggleTab("chronicles")),(b=document.getElementById("btn-spawn-pioneer-top"))==null||b.addEventListener("click",()=>this.toggleTab("spawn")),(E=document.getElementById("btn-quick-spawn-inspector"))==null||E.addEventListener("click",()=>this.toggleTab("spawn"));const e=["Seth","Miriam","Noah","Leah","Silas","Chloe","Ethan","Freya","Caleb","Naomi","Enoch","Hannah","Ezra","Ruth","Lucas","Zara","Jared","Iris","Felix","Aria","Rowan","Maya","Kenan","Elena"],t=()=>e[Math.floor(Math.random()*e.length)],i=document.getElementById("spawn-input-name"),s=document.getElementById("btn-spawn-random-name");s==null||s.addEventListener("click",()=>{i&&(i.value=t(),i.focus(),i.select())});const n=G=>{if(this.hasSpawnedCharacter){alert("Under any circumstances, only 1 character can ever be spawned in this world."),this.toggleTab("none");return}const $=(G==null?void 0:G.trim())||(i==null?void 0:i.value.trim())||t();this.onSpawnCharacter&&this.onSpawnCharacter($),i&&(i.value=""),this.toggleTab("none")};(P=document.getElementById("btn-confirm-spawn"))==null||P.addEventListener("click",()=>{n()}),i==null||i.addEventListener("keydown",G=>{G.key==="Enter"&&n()}),(I=document.getElementById("btn-instant-random-spawn"))==null||I.addEventListener("click",()=>{n(t())}),window.addEventListener("keydown",G=>{if(G.key==="c"||G.key==="C"){if(G.target.tagName==="INPUT")return;this.toggleCinematicMode()}else G.key==="Escape"&&(this.isCinematic?this.toggleCinematicMode():this.openTab!=="none"&&this.toggleTab("none"))});const r=document.getElementById("minimap-canvas");if(r){const G=$=>{var Ye;const Q=r.getBoundingClientRect(),Te=$.clientX-Q.left,we=$.clientY-Q.top,rt=(Te/r.clientWidth-.5)*this.world.width,ze=(we/r.clientHeight-.5)*this.world.height;(Ye=this.camera)==null||Ye.panTo(Math.max(-this.world.width/2,Math.min(this.world.width/2,rt)),Math.max(-this.world.height/2,Math.min(this.world.height/2,ze)))};r.addEventListener("mousedown",$=>{this.isMinimapDragging=!0,G($)}),window.addEventListener("mousemove",$=>{this.isMinimapDragging&&G($)}),window.addEventListener("mouseup",()=>{this.isMinimapDragging=!1})}document.querySelectorAll(".close-btn").forEach(G=>{G.addEventListener("click",()=>this.toggleTab("none"))}),(k=document.getElementById("track-agent-btn"))==null||k.addEventListener("click",()=>{var $;const G=($=window.agents)==null?void 0:$.find(Q=>Q.id===this.selectedAgentId);G&&this.camera&&(this.camera.followTarget=G)}),(B=document.getElementById("btn-export-save"))==null||B.addEventListener("click",()=>{var Q;const G=window.agents||[],$=((Q=window.fauna)==null?void 0:Q.animals)||[];Vt.exportSaveFile(this.world,this.economy,this.aiEngine,G,$)});const o=document.getElementById("btn-import-save"),l=document.getElementById("file-import-save");o&&l&&(o.addEventListener("click",()=>l.click()),l.addEventListener("change",G=>{var Q;const $=(Q=G.target.files)==null?void 0:Q[0];$&&Vt.importSaveFile($,()=>{alert("Civilization save restored successfully! Refreshing world..."),window.location.reload()},Te=>alert(Te))}));const c=document.getElementById("btn-audio-toggle");c&&c.addEventListener("click",()=>{if(this.soundEngine){const G=this.soundEngine.toggleMute();c.textContent=G?"🔊 Audio: ON":"🔇 Audio: OFF",c.style.opacity=G?"1.0":"0.6"}});const h=document.getElementById("btn-awaken-dynasty");h&&h.addEventListener("click",()=>{this.onAwakenDynasty&&this.onAwakenDynasty()});const u=document.getElementById("agent-inspector");(L=document.getElementById("btn-toggle-inspector-mobile"))==null||L.addEventListener("click",()=>{this.toggleTab("none"),u==null||u.classList.toggle("mobile-open")}),(H=document.getElementById("btn-close-mobile-inspector"))==null||H.addEventListener("click",()=>{u==null||u.classList.remove("mobile-open")}),(Y=document.getElementById("btn-mobile-zoom-in"))==null||Y.addEventListener("click",G=>{var $;G.stopPropagation(),($=this.camera)==null||$.zoomIn()}),(K=document.getElementById("btn-mobile-zoom-out"))==null||K.addEventListener("click",G=>{var $;G.stopPropagation(),($=this.camera)==null||$.zoomOut()});const d=document.getElementById("minimap-panel");(ne=document.getElementById("btn-mobile-minimap-toggle"))==null||ne.addEventListener("click",()=>{d==null||d.classList.toggle("mobile-open")})}toggleCinematicMode(){this.isCinematic=!this.isCinematic,document.body.classList.toggle("cinematic-active",this.isCinematic);const e=document.getElementById("tab-cinematic-btn");e&&e.classList.toggle("active",this.isCinematic)}toggleTab(e){var t,i,s,n,r,o,l,c,h,u,d,m,g,v,f,p,x,T,_,w,S,A,b;if(this.openTab=this.openTab===e?"none":e,this.openTab!=="none"&&((t=document.getElementById("agent-inspector"))==null||t.classList.remove("mobile-open")),(i=document.getElementById("spawn-modal"))==null||i.classList.remove("open"),(s=document.getElementById("codex-modal"))==null||s.classList.remove("open"),(n=document.getElementById("economy-modal"))==null||n.classList.remove("open"),(r=document.getElementById("chronicles-modal"))==null||r.classList.remove("open"),(o=document.getElementById("dynasty-modal"))==null||o.classList.remove("open"),(l=document.getElementById("shop-modal"))==null||l.classList.remove("open"),(c=document.getElementById("tab-spawn-btn"))==null||c.classList.remove("active"),(h=document.getElementById("tab-codex-btn"))==null||h.classList.remove("active"),(u=document.getElementById("tab-economy-btn"))==null||u.classList.remove("active"),(d=document.getElementById("tab-chronicles-btn"))==null||d.classList.remove("active"),(m=document.getElementById("tab-dynasty-btn"))==null||m.classList.remove("active"),this.openTab==="spawn"){if(this.hasSpawnedCharacter){this.openTab="none",this.updateSpawnLockUI();return}(g=document.getElementById("spawn-modal"))==null||g.classList.add("open"),(v=document.getElementById("tab-spawn-btn"))==null||v.classList.add("active");const E=document.getElementById("spawn-input-name");if(E){const P=["Seth","Miriam","Noah","Leah","Silas","Chloe","Ethan","Freya","Caleb","Naomi","Enoch","Hannah","Ezra","Ruth","Lucas","Zara"];E.value=P[Math.floor(Math.random()*P.length)],setTimeout(()=>{E.focus(),E.select()},50)}}else this.openTab==="codex"?((f=document.getElementById("codex-modal"))==null||f.classList.add("open"),(p=document.getElementById("tab-codex-btn"))==null||p.classList.add("active"),this.renderTechList()):this.openTab==="economy"?((x=document.getElementById("economy-modal"))==null||x.classList.add("open"),(T=document.getElementById("tab-economy-btn"))==null||T.classList.add("active"),this.renderEconomyTable()):this.openTab==="chronicles"?((_=document.getElementById("chronicles-modal"))==null||_.classList.add("open"),(w=document.getElementById("tab-chronicles-btn"))==null||w.classList.add("active"),this.renderChroniclesFull()):this.openTab==="dynasty"?((S=document.getElementById("dynasty-modal"))==null||S.classList.add("open"),(A=document.getElementById("tab-dynasty-btn"))==null||A.classList.add("active"),this.renderDynastyTree(window.agents||[])):this.openTab==="shop"&&((b=document.getElementById("shop-modal"))==null||b.classList.add("open"))}update(e,t=[]){if(this.hasSpawnedCharacter||e.some(S=>S.id!=="agent_adam"&&S.id!=="agent_eve"&&(!S.parentsIds||S.parentsIds.length===0))){if(!this.hasSpawnedCharacter){this.hasSpawnedCharacter=!0;try{localStorage.setItem("genesis_custom_pioneer_spawned","true")}catch{}}this.updateSpawnLockUI()}const s=Math.floor(this.world.timeOfDay),n=Math.floor((this.world.timeOfDay-s)*60),r=this.world.timeOfDay>=20||this.world.timeOfDay<5.5,o=document.getElementById("sun-moon-icon");o&&(o.textContent=r?"🌙":"☀️");const l=document.getElementById("time-display");l&&(l.textContent=`${s.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`);const c=document.getElementById("day-display");c&&(c.textContent=`Day ${this.world.day}`);const h=document.getElementById("season-display");if(h){const S=this.world.season,A=this.world.isSolsticeActive?`✨ ${S==="Summer"?"Summer Solstice":"Winter Solstice"} Festival ✨`:S==="Spring"?"🌸 Spring":S==="Summer"?"☀️ Summer":S==="Autumn"?"🍂 Autumn":"❄️ Winter";h.textContent=A,h.style.color=this.world.isSolsticeActive?"#facc15":S==="Winter"?"#7dd3fc":S==="Autumn"?"#fb923c":S==="Summer"?"#facc15":"#34d399"}const u=document.getElementById("temp-display");if(u){const S=Math.round(this.world.temperatureCelsius??18),A=S<=0?"🥶":S<10?"❄️":S>25?"🔥":"🌡️";u.textContent=`${A} ${S}°C`,u.style.color=S<=0?"#38bdf8":S<10?"#93c5fd":S>25?"#f87171":"#34d399"}const d=document.getElementById("pop-count"),m=e.filter(S=>!S.isDeceased).length;d&&(d.textContent=`${m} Pioneers`);const g=e.length>0&&e.every(S=>S.isDeceased),v=document.getElementById("natural-passing-banner"),f=document.getElementById("gaze-timer-val");v&&(v.style.display=g?"block":"none"),f&&(g?(f.textContent="PASSED (2d)",f.style.color="#ef4444"):(f.textContent="GAZE: 48h ACTIVE",f.style.color="#38bdf8"));const p=document.getElementById("treasury-count");p&&(p.textContent=this.economy.isCurrencyUnlocked?`${this.economy.treasuryCoins} Coins`:"Barter Age");const x=document.getElementById("gdp-count");x&&(x.textContent=`GDP ${this.economy.totalGdp}`);const T=document.getElementById("buildings-count");T&&(T.textContent=`${this.world.buildings.size} Structures`);const _=document.getElementById("era-badge");if(_){const S=this.determineCurrentEra();_.textContent=`${S.toUpperCase()} ERA`}this.updateCitizenPills(e);const w=e.find(S=>S.id===this.selectedAgentId)||e[0];if(w&&(this.selectedAgentId=w.id,this.updateAgentInspector(w,e)),this.aiEngine.chronicles.length>0){const S=this.aiEngine.chronicles[0],A=document.getElementById("latest-chronicle-text");A&&(A.textContent=`[${S.timeStr}] ${S.title}: ${S.description}`)}this.updateMinimap(e,t),this.openTab==="economy"?this.renderEconomyTable():this.openTab==="dynasty"&&this.renderDynastyTree(e)}determineCurrentEra(){const e=Et.filter(t=>t.discovered);return e.some(t=>t.era==="renaissance")?"renaissance":e.some(t=>t.era==="medieval")?"medieval":e.some(t=>t.era==="bronze")?"bronze":e.some(t=>t.era==="neolithic")?"neolithic":"primeval"}updateCitizenPills(e){const t=document.getElementById("agent-selector-pills");if(t)if(t.children.length!==e.length){t.innerHTML="";for(const i of e){const s=document.createElement("div");s.className=`agent-pill ${i.id===this.selectedAgentId?"active":""}`,s.textContent=`${i.gender==="male"?"♂":"♀"} ${i.name}`,s.addEventListener("click",()=>{this.selectedAgentId=i.id,this.camera&&(this.camera.followTarget=i)}),t.appendChild(s)}}else e.forEach((i,s)=>{const n=t.children[s];n&&(i.id===this.selectedAgentId?n.classList.add("active"):n.classList.remove("active"))})}updateAgentInspector(e,t=[]){const i=document.getElementById("agent-name");i&&(i.textContent=e.name);const s=e.lifeStage||"adult",n={infant:{label:"INFANT (CRIB)",icon:"🍼",color:"#f472b6"},child:{label:"CHILD (PLAYFUL)",icon:"🌱",color:"#facc15"},apprentice:{label:`APPRENTICE (${(e.apprenticeTrade||"CRAFTER").toUpperCase()})`,icon:"⚒️",color:"#38bdf8"},adult:{label:`ADULT (${e.role.toUpperCase()})`,icon:"🌟",color:"#34d399"},elder:{label:"VENERABLE ELDER",icon:"👴",color:"#c084fc"}},r=n[s]||n.adult,o=document.getElementById("agent-meta");if(o)if(e.isDeceased)o.innerHTML=`<span style="color: #ef4444; font-weight: 700;">🪦 ANCESTRAL SPIRIT</span> • Passed Day ${e.deceasedDay||"?"}`;else{const w=[];e.isRidingHorse&&w.push("🐎 Mounted"),e.isInBoat&&w.push("⛵ Sailing"),e.hasCargoCart&&w.push("🛒 Cart"),(e.inventory.wooden_shield||0)>0&&w.push("🛡️ Shield");const S=w.length>0?` • <span style="color: #facc15;">${w.join(" ")}</span>`:"";o.innerHTML=`<span style="color: ${r.color}; font-weight: 700;">${r.icon} ${r.label}</span> • Age ${Math.floor(e.age)} • Gen ${e.generation}${S}`}const l=document.getElementById("agent-avatar");if(l){let w=e.gender==="male"?"🧔":"👩";e.isDeceased?w="🪦":e.isRidingHorse?w="🏇":e.isInBoat?w="🛶":(e.inventory.wooden_shield||0)>0?w="🛡️":s==="infant"?w="👶":s==="child"?w=e.gender==="male"?"👦":"👧":s==="elder"&&(w="👴"),l.textContent=w,l.style.background=`linear-gradient(135deg, ${e.color}, #6366f1)`}const c=(w,S)=>{const A=document.getElementById(`bar-${w}`),b=document.getElementById(`val-${w}`);A&&(A.style.width=`${Math.round(S)}%`),b&&(b.textContent=`${Math.round(S)}%`)};c("hunger",e.needs.hunger),c("energy",e.needs.energy),c("warmth",e.needs.warmth),c("social",e.needs.social),c("curiosity",e.needs.curiosity);const h=document.getElementById("agent-thought");h&&(h.textContent=`"${e.activeThought}"`);const u=document.getElementById("agent-action");u&&(u.textContent=`Current: ${e.currentAction}`);let d=e.spouseId?t.find(w=>w.id===e.spouseId):void 0;d||(d=t.find(w=>w.id!==e.id&&w.gender!==e.gender));const m=d?e.relationships[d.id]:void 0,g=document.getElementById("romance-partner-name");g&&(e.spouseId&&d?g.textContent=`Partner: Married to ${d.name} 💍`:d?g.textContent=`Partner: ${d.name} (${d.gender==="male","Pioneer"})`:g.textContent="Partner: Solitary Pioneer");const v=document.getElementById("romance-stage-badge");if(v){const w=(m==null?void 0:m.stage)||"strangers",S={strangers:{label:"STRANGERS",color:"#94a3b8",bg:"rgba(148, 163, 184, 0.15)"},friends:{label:"FRIENDS 🤝",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)"},crush:{label:"CRUSH 💕",color:"#f472b6",bg:"rgba(244, 114, 182, 0.2)"},in_love:{label:"IN LOVE 💖",color:"#ec4899",bg:"rgba(236, 72, 153, 0.25)"},married:{label:"MARRIED 💍",color:"#fbbf24",bg:"rgba(251, 191, 36, 0.2)"}},A=S[w]||S.strangers;v.textContent=A.label,v.style.color=A.color,v.style.background=A.bg,v.style.borderColor=A.color}c("affection",(m==null?void 0:m.affection)||0),c("trust",(m==null?void 0:m.trust)||0);const f=document.getElementById("romance-pregnancy-panel"),p=document.getElementById("gestation-label"),x=document.getElementById("val-gestation"),T=document.getElementById("bar-gestation");if(f&&p&&x&&T)if(e.isPregnant){const w=Math.round(e.pregnancyProgress||0);f.style.display="block",p.textContent="🤰 Expecting Mother (Gestation)",x.textContent=`${w}%`,T.style.width=`${w}%`}else if(d&&d.isPregnant){const w=Math.round(d.pregnancyProgress||0);f.style.display="block",p.textContent=`🤰 Spouse ${d.name} Expecting`,x.textContent=`${w}%`,T.style.width=`${w}%`}else f.style.display="none";const _=document.getElementById("inventory-grid");if(_){_.innerHTML="";const w=Object.entries(e.inventory);if(w.length===0)_.innerHTML='<div style="grid-column: span 4; font-size: 11px; color: var(--text-muted); text-align: center; padding: 6px;">Empty pack</div>';else for(const[S,A]of w){if(!A||A<=0)continue;const b=document.createElement("div");b.className="inventory-slot",b.innerHTML=`
            <div class="inv-icon">${this.getItemIcon(S)}</div>
            <div class="inv-count">${A}x</div>
          `,b.title=`${S.replace("_"," ")} (${A})`,_.appendChild(b)}}}getItemIcon(e){return{berries:"🫐",stick:"🪵",stone:"🪨",flint:"💎",clay:"🧱",wood_log:"🌲",firewood:"🔥",stone_axe:"🪓",flint_spear:"🗡️",woven_basket:"🧺",clay_pot:"🏺",mud_brick:"🧱",harvested_wheat:"🌾",flour:"🌾",bread:"🍞",copper_ore:"🪨",copper_ingot:"🥉",copper_axe:"🪓",iron_ore:"⛏️",iron_ingot:"🥈",iron_tools:"⚒️",gold_ore:"✨",gold_coin:"🪙",timber_plank:"🪵",cut_stone:"🏛️"}[e]||"📦"}renderTechList(){const e=document.getElementById("tech-list");if(e){e.innerHTML="";for(const t of Et){const i=document.createElement("div");i.className=`tech-card ${t.discovered?"discovered":""}`,i.innerHTML=`
        <div class="tech-icon">${t.icon}</div>
        <div class="tech-info">
          <div class="tech-name">${t.name} <span style="font-size: 10px; color: var(--text-muted);">[${t.era.toUpperCase()}]</span></div>
          <div class="tech-desc">${t.description}</div>
          <div class="tech-status" style="color: ${t.discovered?"var(--accent-emerald)":"var(--text-muted)"};">
            ${t.discovered?`✓ Discovered by ${t.discoveredBy||"Pioneers"}`:"🔒 Awaiting Experimentation"}
          </div>
        </div>
      `,e.appendChild(i)}}}renderEconomyTable(){const e=document.getElementById("market-tbody");if(e){e.innerHTML="";for(const t of this.economy.items.values()){const i=document.createElement("tr");i.innerHTML=`
        <td>${this.getItemIcon(t.item)} ${t.name}</td>
        <td class="price-tag">${t.currentPrice} ${this.economy.isCurrencyUnlocked?"🪙":"Val"}</td>
        <td style="color: var(--accent-emerald);">${t.supply}</td>
        <td style="color: var(--accent-pink);">${t.demand}</td>
      `,e.appendChild(i)}}}renderChroniclesFull(){const e=document.getElementById("chronicles-full-list");if(e){e.innerHTML="";for(const t of this.aiEngine.chronicles){const i=document.createElement("div");i.style.cssText=`
        padding: 10px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        display: flex;
        align-items: flex-start;
        gap: 10px;
      `,i.innerHTML=`
        <div style="font-size: 20px;">${t.icon}</div>
        <div>
          <div style="font-size: 13px; font-weight: 700;">Day ${t.day} • ${t.timeStr} - ${t.title}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">${t.description}</div>
        </div>
      `,e.appendChild(i)}}}renderDynastyTree(e){const t=document.getElementById("dynasty-summary-bar"),i=document.getElementById("dynasty-tree-container");if(!t||!i)return;const s=e.filter(h=>!h.isDeceased),n=e.filter(h=>h.isDeceased),r=Math.max(...e.map(h=>h.generation||1),1),o=e.filter(h=>!!h.spouseId).length/2;t.innerHTML=`
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${s.length}</span>
        <span class="dynasty-stat-lbl">Living Citizens</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">Gen ${r}</span>
        <span class="dynasty-stat-lbl">Generations</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${Math.floor(o)}</span>
        <span class="dynasty-stat-lbl">Unions 💍</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${n.length}</span>
        <span class="dynasty-stat-lbl">Ancestral Cairns 🪦</span>
      </div>
    `,i.innerHTML="";const l={};for(const h of e){const u=h.generation||1;l[u]||(l[u]=[]),l[u].push(h)}const c=Object.keys(l).map(Number).sort((h,u)=>h-u);for(const h of c){const u=l[h],d=document.createElement("div");d.className="dynasty-gen-section";const m=document.createElement("div");m.className="dynasty-gen-title",m.innerHTML=h===1?"👑 GENERATION 1: FOUNDERS OF EDEN":`🌱 GENERATION ${h}: EXPANSION & BLOODLINE`,d.appendChild(m);const g=document.createElement("div");g.className="dynasty-cards-grid";for(const v of u){const f=document.createElement("div");f.className=`dynasty-card ${v.id===this.selectedAgentId?"active":""} ${v.isDeceased?"deceased":""}`;const p=v.lifeStage||"adult";let x="🌟 ADULT";v.isDeceased?x="🪦 ANCESTOR":p==="infant"?x="🍼 INFANT":p==="child"?x="🌱 CHILD":p==="apprentice"?x=`⚒️ APPRENTICE (${v.apprenticeTrade||"CRAFT"})`:p==="elder"&&(x="👴 ELDER");let T=v.gender==="male"?"🧔":"👩";v.isDeceased?T="🪦":p==="infant"?T="👶":p==="child"?T=v.gender==="male"?"👦":"👧":p==="elder"&&(T="👴");const _=v.spouseId?e.find(S=>S.id===v.spouseId):void 0;let w="Unwed";if(v.spouseId&&_)w=`💍 Wed to ${_.name}`;else if(v.parentsIds&&v.parentsIds.length>0){const S=e.filter(A=>v.parentsIds.includes(A.id));w=S.length>0?`👶 Child of ${S.map(A=>A.name).join(" & ")}`:"Line of Eden"}f.innerHTML=`
          <div class="dynasty-card-header">
            <div class="dynasty-avatar" style="background: linear-gradient(135deg, ${v.color}, #6366f1);">${T}</div>
            <div class="dynasty-card-title">
              <div class="dynasty-name">${v.name}</div>
              <div class="dynasty-role">${v.role} • Age ${Math.floor(v.age)}</div>
            </div>
          </div>
          <div class="dynasty-badge ${v.isDeceased?"badge-deceased":""}">${x}</div>
          <div class="dynasty-spouse">${w}</div>
          <div class="dynasty-action">${v.isDeceased?`Memorial Cairn Day ${v.deceasedDay||"?"}`:v.currentAction}</div>
        `,f.addEventListener("click",()=>{this.selectedAgentId=v.id,this.camera&&(this.camera.panTo(v.x,v.y),v.isDeceased||(this.camera.followTarget=v)),this.renderDynastyTree(e)}),g.appendChild(f)}d.appendChild(g),i.appendChild(d)}}updateMinimap(e,t=[]){var v;const i=document.getElementById("minimap-canvas");if(!i)return;const s=i.getContext("2d");if(!s)return;const n=i.width,r=i.height,o=this.world.width/2,l=this.world.height/2,c=f=>(f+o)/this.world.width*n,h=f=>(f+l)/this.world.height*r,u=Math.max(1,1/this.world.width*n),d=Math.max(1,1/this.world.height*r);s.fillStyle="#0f241a",s.fillRect(0,0,n,r);for(const f of this.world.chunks.values())for(let p=0;p<16;p++)for(let x=0;x<16;x++){const T=(v=f.tiles[p])==null?void 0:v[x];if(!T)continue;const _=c(T.x),w=h(T.y);_<-2||_>n+2||w<-2||w>r+2||(T.type==="water"||T.type==="deep_water"?(s.fillStyle="#1e3a8a",s.fillRect(_,w,u+.5,d+.5)):T.type==="dense_forest"||T.type==="sparse_trees"?(s.fillStyle="#143823",s.fillRect(_,w,u+.5,d+.5)):T.type==="dirt_path"||T.type==="cobblestone_road"?(s.fillStyle="#78350f",s.fillRect(_,w,u+.5,d+.5)):T.type==="farm_wheat"&&(s.fillStyle="#ca8a04",s.fillRect(_,w,u+.5,d+.5)))}for(const f of this.world.buildings.values()){const p=c(f.x),x=h(f.y);f.type==="settlement_totem"?(s.fillStyle="#fbbf24",s.beginPath(),s.arc(p,x,3.5,0,Math.PI*2),s.fill()):f.type==="ancestral_cairn"?(s.fillStyle="#c084fc",s.beginPath(),s.arc(p,x,3,0,Math.PI*2),s.fill()):f.type==="wooden_bridge"?(s.fillStyle="#b45309",s.fillRect(p-1.5,x-1.5,3,3)):f.type==="waterwheel"?(s.fillStyle="#38bdf8",s.beginPath(),s.arc(p,x,2.5,0,Math.PI*2),s.fill()):f.type==="great_library"?(s.fillStyle="#c084fc",s.fillRect(p-2,x-2,4,4)):f.type==="horse_stable"?(s.fillStyle="#92400e",s.fillRect(p-2,x-2,4,4)):f.type==="dock_pier"?(s.fillStyle="#78350f",s.fillRect(p-1.5,x-1.5,3,3)):f.type==="timber_palisade"?(s.fillStyle="#451a03",s.fillRect(p-1,x-1,2,2)):f.type==="watch_gate"?(s.fillStyle="#f59e0b",s.fillRect(p-2,x-2,4,4)):f.type==="stone_aqueduct"?(s.fillStyle="#38bdf8",s.fillRect(p-1.5,x-1.5,3,3)):f.type==="water_cistern"?(s.fillStyle="#0284c7",s.beginPath(),s.arc(p,x,3,0,Math.PI*2),s.fill()):(s.fillStyle="#f59e0b",s.fillRect(p-1.5,x-1.5,3,3))}for(const f of t){const p=c(f.x),x=h(f.y);f.species==="sheep"?(s.fillStyle="#f8fafc",s.fillRect(p-1,x-1,2,2)):f.species==="dog"?(s.fillStyle="#eab308",s.fillRect(p-1,x-1,2,2)):f.species==="horse"?(s.fillStyle="#b45309",s.fillRect(p-1.5,x-1.5,3,3)):f.species==="wolf"&&(s.fillStyle="#ef4444",s.fillRect(p-1,x-1,2,2))}for(const f of e){if(f.isDeceased)continue;const p=c(f.x),x=h(f.y);f.id===this.selectedAgentId&&(s.strokeStyle="#ffffff",s.lineWidth=1,s.beginPath(),s.arc(p,x,4.5,0,Math.PI*2),s.stroke());let T=f.gender==="male"?"#38bdf8":"#f472b6";f.lifeStage==="infant"||f.lifeStage==="child"?T="#facc15":f.lifeStage==="elder"&&(T="#e2e8f0"),s.fillStyle=T,s.beginPath(),s.arc(p,x,2.5,0,Math.PI*2),s.fill()}if(this.camera){const f=this.camera.canvas.width,p=this.camera.canvas.height,x=f/2/(32*this.camera.zoom),T=p/2/(32*this.camera.zoom),_=c(this.camera.x-x),w=h(this.camera.y-T),S=x*2/this.world.width*n,A=T*2/this.world.height*r;s.strokeStyle="rgba(255, 255, 255, 0.85)",s.lineWidth=1.2,s.strokeRect(_,w,S,A)}const m=document.getElementById("minimap-settlement-title");m&&(m.textContent=this.world.settlementName?`🏛️ ${this.world.settlementName}`:"🏕️ Eden Wilds");const g=document.getElementById("minimap-coords");g&&this.camera&&(g.textContent=`${Math.round(this.camera.x)}, ${Math.round(this.camera.y)}`)}}class Ug{constructor(e){R(this,"animals",[]);R(this,"spawnTimer",0);R(this,"MAX_ANIMALS",24);this.world=e,this.spawnInitialWildlife()}spawnInitialWildlife(){for(let i=0;i<4;i++){const s=(Math.random()-.5)*16+(Math.random()>.5?6:-6),n=(Math.random()-.5)*16+(Math.random()>.5?6:-6);this.animals.push(this.createAnimal("rabbit",s,n))}for(let i=0;i<3;i++){const s=(Math.random()-.5)*20+8,n=(Math.random()-.5)*20-8;this.animals.push(this.createAnimal("deer",s,n))}for(let i=0;i<2;i++){const s=-10+(Math.random()-.5)*6,n=8+(Math.random()-.5)*6;this.animals.push(this.createAnimal("sheep",s,n))}for(let i=0;i<2;i++){const s=14+(Math.random()-.5)*8,n=10+(Math.random()-.5)*8;this.animals.push(this.createAnimal("horse",s,n))}const e=Math.random()>.5?14:-14,t=Math.random()>.5?12:-12;this.animals.push(this.createAnimal("wolf",e,t))}createAnimal(e,t,i,s){const n=`fauna_${e}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,r=e==="rabbit"?10:e==="sheep"?25:e==="deer"?35:e==="wolf"?40:e==="horse"?65:35;return{id:n,species:e,x:t,y:i,vx:0,vy:0,health:r,maxHealth:r,facing:Math.random()>.5?"left":"right",state:"grazing",stateTimer:Math.random()*5,hunger:80,isDomesticated:e==="dog",tameProgress:e==="dog"?100:0,name:s||(e==="dog"?"Rover":void 0),hasWool:e==="sheep"?!0:void 0,isSaddled:!1}}update(e,t){const i=this.world.timeOfDay>=21||this.world.timeOfDay<5.5;for(let s=this.animals.length-1;s>=0;s--){const n=this.animals[s];if(n.stateTimer-=e,n.health<=0){this.animals.splice(s,1);continue}if(n.species==="dog"&&n.ownerId){this.updateDogBehavior(n,t,i,e);continue}if(n.species==="horse"){if(n.riderId){const r=t.find(o=>o.id===n.riderId);if(r&&r.isRidingHorse){n.x=r.x,n.y=r.y+.1,n.facing=r.facing==="left"?"left":"right",n.state="following_owner";continue}else n.riderId=void 0}if(n.isDomesticated&&n.ownerId&&!n.riderId){const r=t.find(o=>o.id===n.ownerId);if(r){if(Math.hypot(r.x-n.x,r.y-n.y)>3.5){const l=Math.atan2(r.y-n.y,r.x-n.x);n.vx=Math.cos(l)*1.8,n.vy=Math.sin(l)*1.8}else n.vx=0,n.vy=0;n.x+=n.vx*e,n.y+=n.vy*e;continue}}}if(i&&n.state!=="fleeing"){n.state="sleeping",n.vx=0,n.vy=0;continue}if((n.species==="rabbit"||n.species==="deer"||n.species==="sheep")&&n.state!=="fleeing"){const r=this.findNearestThreat(n,t);if(r){n.state="fleeing",n.stateTimer=n.species==="sheep"?1.8:n.species==="rabbit"?2.2:3;const o=Math.atan2(n.y-r.y,n.x-r.x),l=n.species==="rabbit"?2.2:n.species==="deer"?2.5:1;n.vx=Math.cos(o)*l,n.vy=Math.sin(o)*l,n.facing=n.vx>=0?"right":"left"}}if(n.species==="wolf"){const r=this.isNearFire(n.x,n.y);if(r){n.state="fleeing",n.stateTimer=5;const o=Math.atan2(n.y-r.y,n.x-r.x);n.vx=Math.cos(o)*2.8,n.vy=Math.sin(o)*2.8}else if(n.state!=="fleeing"&&n.stateTimer<=0){const o=this.findNearestPrey(n);if(o)if(n.state="hunting",Math.hypot(o.x-n.x,o.y-n.y)<=.8)o.health-=15,n.stateTimer=3,n.state="grazing";else{const c=Math.atan2(o.y-n.y,o.x-n.x);n.vx=Math.cos(c)*2.2,n.vy=Math.sin(c)*2.2}else this.setRandomWander(n,1)}}n.stateTimer<=0&&(n.state==="fleeing"?(n.state="grazing",n.vx=0,n.vy=0,n.stateTimer=n.species==="sheep"?4:3):Math.random()<.6?(n.state="grazing",n.vx=0,n.vy=0,n.stateTimer=4+Math.random()*6):this.setRandomWander(n,n.species==="rabbit"?1:.7)),n.x+=n.vx*e,n.y+=n.vy*e,Math.abs(n.vx)>.1&&(n.facing=n.vx>=0?"right":"left")}this.spawnTimer+=e,this.spawnTimer>=60&&this.animals.length<this.MAX_ANIMALS&&(this.spawnTimer=0,this.spawnAmbientWildAnimal())}updateDogBehavior(e,t,i,s){const n=t.find(o=>o.id===e.ownerId);if(!n)return;const r=Math.hypot(n.x-e.x,n.y-e.y);if(i){if(e.state="sleeping",r>1.2){const o=Math.atan2(n.y-e.y,n.x-e.x);e.x+=Math.cos(o)*2*s,e.y+=Math.sin(o)*2*s}else e.vx=0,e.vy=0;return}if(r>2.5){e.state="following_owner";const o=Math.atan2(n.y-e.y,n.x-e.x);e.vx=Math.cos(o)*2.2,e.vy=Math.sin(o)*2.2,e.x+=e.vx*s,e.y+=e.vy*s,e.facing=e.vx>=0?"right":"left"}else e.state="wandering",e.vx=0,e.vy=0}findNearestThreat(e,t){const i=e.species==="rabbit"?2.8:e.species==="sheep"?2.2:3.8;for(const s of t)if(Math.hypot(s.x-e.x,s.y-e.y)<=i)return s;for(const s of this.animals)if(s.species==="wolf"&&Math.hypot(s.x-e.x,s.y-e.y)<=i)return s;return null}findNearestPrey(e){let t=null,i=8;for(const s of this.animals)if(s.species==="rabbit"||s.species==="deer"){const n=Math.hypot(s.x-e.x,s.y-e.y);n<i&&(i=n,t=s)}return t}isNearFire(e,t){for(const i of this.world.buildings.values())if(i.type==="campfire"&&i.isCompleted&&Math.hypot(i.x-e,i.y-t)<=5)return i;return null}setRandomWander(e,t){e.state="wandering";const i=Math.random()*Math.PI*2;e.vx=Math.cos(i)*t,e.vy=Math.sin(i)*t,e.stateTimer=2+Math.random()*3}spawnAmbientWildAnimal(){const e=["rabbit","deer","sheep","wolf"],t=[.45,.3,.15,.1];let i=Math.random(),s="rabbit";for(let c=0;c<t.length;c++){if(i<t[c]){s=e[c];break}i-=t[c]}const n=Math.random()*Math.PI*2,r=16+Math.random()*12,o=Math.cos(n)*r,l=Math.sin(n)*r;this.animals.push(this.createAnimal(s,o,l))}getNearestHuntable(e,t,i=12){let s=null,n=i;for(const r of this.animals){if(r.isDomesticated)continue;const o=Math.hypot(r.x-e,r.y-t);o<n&&(n=o,s=r)}return s}getNearestTameableWolf(e,t,i=8){for(const s of this.animals)if(s.species==="wolf"&&!s.isDomesticated&&Math.hypot(s.x-e,s.y-t)<=i)return s;return null}tameWolfIntoDog(e,t,i){return e.species="dog",e.isDomesticated=!0,e.tameProgress=100,e.ownerId=t.id,e.name=i,e.state="following_owner",e}getNearestTameableHorse(e,t,i=10){for(const s of this.animals)if(s.species==="horse"&&!s.isDomesticated&&Math.hypot(s.x-e,s.y-t)<=i)return s;return null}tameHorse(e,t,i){return e.isDomesticated=!0,e.tameProgress=100,e.ownerId=t.id,e.isSaddled=!0,e.name=i||"Shadowfax",e.state="following_owner",e}}class Fg{constructor(){R(this,"ctx",null);R(this,"isMuted",!1);R(this,"masterGain",null);R(this,"windGain",null);R(this,"rainGain",null);R(this,"campfireGain",null);R(this,"nightCricketsGain",null);R(this,"birdTimer",3);R(this,"animalSoundTimer",6)}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupWindAmbient(),this.setupRainAmbient(),this.setupCampfireAmbient()}catch(e){console.warn("Web Audio API not supported or blocked:",e)}}toggleMute(){if(this.init(),this.isMuted=!this.isMuted,this.masterGain&&this.ctx){const e=this.isMuted?0:.35;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.1)}return!this.isMuted}getIsMuted(){return this.isMuted}setupWindAmbient(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);let s=0;for(let c=0;c<e;c++){const h=Math.random()*2-1;s=(s+.02*h)/1.02,i[c]=s*3.5}const n=this.ctx.createBufferSource();n.buffer=t,n.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(320,this.ctx.currentTime);const o=this.ctx.createOscillator();o.frequency.setValueAtTime(.18,this.ctx.currentTime);const l=this.ctx.createGain();l.gain.setValueAtTime(140,this.ctx.currentTime),o.connect(l),l.connect(r.frequency),o.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(.14,this.ctx.currentTime),n.connect(r),r.connect(this.windGain),this.windGain.connect(this.masterGain),n.start()}setupRainAmbient(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=t,s.loop=!0;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(950,this.ctx.currentTime),n.Q.setValueAtTime(.8,this.ctx.currentTime),this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(0,this.ctx.currentTime),s.connect(n),n.connect(this.rainGain),this.rainGain.connect(this.masterGain),s.start()}setupCampfireAmbient(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++){const o=Math.random()<.003;i[r]=o?(Math.random()*2-1)*2:Math.random()*.2-.1}const s=this.ctx.createBufferSource();s.buffer=t,s.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(600,this.ctx.currentTime),this.campfireGain=this.ctx.createGain(),this.campfireGain.gain.setValueAtTime(0,this.ctx.currentTime),s.connect(n),n.connect(this.campfireGain),this.campfireGain.connect(this.masterGain),s.start()}update(e,t,i,s,n=[]){if(!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,o=e.timeOfDay,l=o>=20.5||o<5.5,c=o>=5.5&&o<9,h=o>=9&&o<19.5;if(this.rainGain){const u=e.weather==="Rain"?.22:0;this.rainGain.gain.setTargetAtTime(u,r,.4)}if(this.windGain){const d=e.season==="Winter"||e.temperatureCelsius<0?.28:e.weather==="Rain"?.2:.12;this.windGain.gain.setTargetAtTime(d,r,.5)}if(this.nightCricketsGain){const u=l&&e.weather!=="Rain"?.05:0;this.nightCricketsGain.gain.setTargetAtTime(u,r,.5)}if(this.campfireGain){let u=999;for(const m of e.buildings.values())if(m.type==="campfire"&&m.isCompleted){const g=Math.hypot(m.x-t,m.y-i);g<u&&(u=g)}const d=u<10?Math.max(0,(1-u/10)*.25):0;this.campfireGain.gain.setTargetAtTime(d,r,.3)}(c||h)&&e.weather!=="Rain"&&(this.birdTimer-=s,this.birdTimer<=0&&(this.playBirdChirp(),this.birdTimer=4+Math.random()*8)),this.animalSoundTimer-=s,this.animalSoundTimer<=0&&(this.animalSoundTimer=8+Math.random()*14,this.triggerAmbientAnimalCall(n,l))}triggerAmbientAnimalCall(e,t){if(e.length===0)return;if(t&&e.some(n=>n.species==="wolf"&&!n.isDomesticated)&&Math.random()<.65){this.playWolfHowl();return}const i=e[Math.floor(Math.random()*e.length)];i&&(i.species==="dog"?this.playDogBark():i.species==="sheep"?this.playSheepBaa():i.species==="deer"&&this.playDeerCall())}playBirdChirp(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine";const s=2600+Math.random()*800;e.frequency.setValueAtTime(s,i),e.frequency.exponentialRampToValueAtTime(s+600,i+.08),e.frequency.exponentialRampToValueAtTime(s+200,i+.16),t.gain.setValueAtTime(.01,i),t.gain.linearRampToValueAtTime(.06,i+.04),t.gain.exponentialRampToValueAtTime(.001,i+.22),e.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.25)}playWolfHowl(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(220,i),e.frequency.exponentialRampToValueAtTime(330,i+.8),e.frequency.exponentialRampToValueAtTime(293,i+1.8),e.frequency.exponentialRampToValueAtTime(180,i+2.8),t.gain.setValueAtTime(.001,i),t.gain.linearRampToValueAtTime(.08,i+.7),t.gain.setTargetAtTime(.001,i+2,.4),e.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+3)}playDogBark(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=(t,i)=>{if(!this.ctx||!this.masterGain)return;const s=this.ctx.createOscillator(),n=this.ctx.createGain(),r=this.ctx.currentTime+t;s.type="sawtooth",s.frequency.setValueAtTime(360*i,r),s.frequency.exponentialRampToValueAtTime(140*i,r+.12);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(1200,r),n.gain.setValueAtTime(.07,r),n.gain.exponentialRampToValueAtTime(.001,r+.14),s.connect(o),o.connect(n),n.connect(this.masterGain),s.start(r),s.stop(r+.15)};e(0,1),e(.18,1.15)}playSheepBaa(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(185,i);const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(700,i),s.Q.setValueAtTime(3,i);const n=this.ctx.createOscillator();n.frequency.setValueAtTime(6,i);const r=this.ctx.createGain();r.gain.setValueAtTime(12,i),n.connect(r),r.connect(e.frequency),n.start(i),t.gain.setValueAtTime(.01,i),t.gain.linearRampToValueAtTime(.08,i+.1),t.gain.setTargetAtTime(.001,i+.5,.2),e.connect(s),s.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.9)}playDeerCall(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(135,i),e.frequency.linearRampToValueAtTime(95,i+.4),t.gain.setValueAtTime(.01,i),t.gain.linearRampToValueAtTime(.05,i+.15),t.gain.exponentialRampToValueAtTime(.001,i+.45),e.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.5)}playFlintStrike(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="square",e.frequency.setValueAtTime(1900+Math.random()*400,i),e.frequency.exponentialRampToValueAtTime(400,i+.05),t.gain.setValueAtTime(.12,i),t.gain.exponentialRampToValueAtTime(.001,i+.06),e.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.07)}playWoodThud(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(160,i),e.frequency.exponentialRampToValueAtTime(60,i+.12),t.gain.setValueAtTime(.15,i),t.gain.exponentialRampToValueAtTime(.001,i+.15),e.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.16)}playFireIgnite(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(80,i),e.frequency.exponentialRampToValueAtTime(260,i+.3);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(450,i),t.gain.setValueAtTime(.01,i),t.gain.linearRampToValueAtTime(.12,i+.2),t.gain.exponentialRampToValueAtTime(.001,i+.7),e.connect(s),s.connect(t),t.connect(this.masterGain),e.start(i),e.stop(i+.75)}playWeddingChime(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=[523.25,659.25,783.99,1046.5],t=this.ctx.currentTime;e.forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain(),o=t+s*.12;n.type="sine",n.frequency.setValueAtTime(i,o),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.12,o+.04),r.gain.exponentialRampToValueAtTime(1e-4,o+1.2),n.connect(r),r.connect(this.masterGain),n.start(o),n.stop(o+1.3)})}playBabyLullaby(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=[659.25,880,1174.66],t=this.ctx.currentTime;e.forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain(),o=t+s*.18;n.type="triangle",n.frequency.setValueAtTime(i,o),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+1.6),n.connect(r),r.connect(this.masterGain),n.start(o),n.stop(o+1.7)})}playFolkMelody(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=[293.66,369.99,440,493.88,587.33],t=this.ctx.currentTime;e.forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain(),o=t+s*.28;n.type="sine",n.frequency.setValueAtTime(i,o),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.12,o+.08),r.gain.exponentialRampToValueAtTime(1e-4,o+1.8),n.connect(r),r.connect(this.masterGain),n.start(o),n.stop(o+1.9)})}playRiverFishing(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(320,e+.16),i.gain.setValueAtTime(.18,e),i.gain.exponentialRampToValueAtTime(.001,e+.16),t.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.17);const s=Math.floor(this.ctx.sampleRate*.2),n=this.ctx.createBuffer(1,s,this.ctx.sampleRate),r=n.getChannelData(0);for(let h=0;h<s;h++)r[h]=(Math.random()*2-1)*Math.exp(-h/(s*.25));const o=this.ctx.createBufferSource();o.buffer=n;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1400,e),l.Q.setValueAtTime(2.5,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.14,e),c.gain.exponentialRampToValueAtTime(.001,e+.2),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(e)}playHorseGallop(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[0,.12].forEach(t=>{if(!this.ctx||!this.masterGain)return;const i=this.ctx.createOscillator(),s=this.ctx.createGain(),n=e+t;i.type="triangle",i.frequency.setValueAtTime(160,n),i.frequency.exponentialRampToValueAtTime(70,n+.06),s.gain.setValueAtTime(.18,n),s.gain.exponentialRampToValueAtTime(.001,n+.07),i.connect(s),s.connect(this.masterGain),i.start(n),i.stop(n+.08)})}playSolsticeBoneFlute(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[392,466.16,523.25,587.33,698.46,783.99].forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain(),o=e+s*.26;n.type="sine",n.frequency.setValueAtTime(i,o);const l=this.ctx.createOscillator(),c=this.ctx.createGain();if(l.frequency.setValueAtTime(5.5,o),c.gain.setValueAtTime(6,o),l.connect(c),c.connect(n.frequency),l.start(o),l.stop(o+.45),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.14,o+.06),r.gain.exponentialRampToValueAtTime(1e-4,o+.5),n.connect(r),r.connect(this.masterGain),n.start(o),n.stop(o+.52),s===0||s===3){const h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type="sine",h.frequency.setValueAtTime(110,o),h.frequency.exponentialRampToValueAtTime(45,o+.25),u.gain.setValueAtTime(.22,o),u.gain.exponentialRampToValueAtTime(.001,o+.28),h.connect(u),u.connect(this.masterGain),h.start(o),h.stop(o+.3)}})}playSentinelHorn(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.linearRampToValueAtTime(330,e+.2);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(650,e),i.gain.setValueAtTime(.01,e),i.gain.linearRampToValueAtTime(.18,e+.15),i.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(s),s.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+1.3)}playOarRowing(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=Math.floor(this.ctx.sampleRate*.35),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<t;l++)s[l]=(Math.random()*2-1)*Math.sin(l/t*Math.PI);const n=this.ctx.createBufferSource();n.buffer=i;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(800,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(r),r.connect(o),o.connect(this.masterGain),n.start(e)}playPioneerSpawnChime(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain(),o=e+s*.11;n.type="triangle",n.frequency.setValueAtTime(i,o),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.18,o+.04),r.gain.exponentialRampToValueAtTime(1e-4,o+.7),n.connect(r),r.connect(this.masterGain),n.start(o),n.stop(o+.75)})}}class Ul{constructor(){R(this,"world");R(this,"economy");R(this,"fauna");R(this,"soundEngine");R(this,"aiEngine");R(this,"persistence");R(this,"camera");R(this,"renderer");R(this,"hud");R(this,"agents");R(this,"simSpeed",1);R(this,"lastTime",0);R(this,"marketTimer",0);R(this,"hasSpawnedCustomCharacter",!1);this.world=new xg(1337),this.economy=new Sg,this.fauna=new Ug(this.world),this.soundEngine=new Fg,this.aiEngine=new Cg(this.world,this.economy,this.fauna,this.soundEngine),this.persistence=new Vt;const e=Vt.loadState(this.world,this.economy,this.aiEngine);if(e&&e.agents&&e.agents.length>0){this.agents=e.agents,e.animals&&e.animals.length>0&&(this.fauna.animals=e.animals);const s=this.agents.some(n=>n.id!=="agent_adam"&&n.id!=="agent_eve"&&(!n.parentsIds||n.parentsIds.length===0));if(this.hasSpawnedCustomCharacter=s||!!e.hasSpawnedCustomCharacter||localStorage.getItem("genesis_custom_pioneer_spawned")==="true",this.hasSpawnedCustomCharacter)try{localStorage.setItem("genesis_custom_pioneer_spawned","true")}catch{}if(e.elapsedSeconds>=48*3600){const n=[];for(const o of this.agents)if(!o.isDeceased){o.isDeceased=!0,o.needs.health=0,o.deceasedDay=this.world.day,n.push(o.name);const l=this.world.placeBuilding("ancestral_cairn",Math.round(o.x),Math.round(o.y),o.id);l&&(l.isCompleted=!0)}const r=(e.elapsedSeconds/86400).toFixed(1);this.aiEngine.addChronicle("Tragic Passing: 2 Days Unattended",`After ${r} days without the Watcher's presence, ${n.join(" and ")} passed away of natural causes. Ancestral memorial cairns mark where they once walked.`,"milestone","🪦")}else if(e.elapsedSeconds>15){const n=Math.floor(e.elapsedSeconds/60),r=(e.elapsedSeconds/3600).toFixed(1),o=n<60?`${n}m`:`${r}h`;this.aiEngine.addChronicle("Civilization Re-awoken",`The world safely persevered during ${o} of absence. State restored.`,"milestone","⏳");const l=Math.min(e.elapsedSeconds/60,24*60);this.world.updateTimeAndWeather(l)}}else this.agents=wg(),this.aiEngine.addChronicle("Genesis: The First Spark","Adam and Eve take their first steps upon this untouched earth.","milestone","🌱");window.agents=this.agents,window.fauna=this.fauna,window.addEventListener("beforeunload",()=>{Vt.saveState(this.world,this.economy,this.aiEngine,this.agents,this.fauna.animals,this.hasSpawnedCustomCharacter)}),this.hud=new Ng(this.world,this.economy,this.aiEngine,void 0,this.soundEngine,()=>{const s=Tg(2,0,0);this.agents.push(...s),window.agents=this.agents,this.camera.followTarget=s[0],this.camera.x=s[0].x,this.camera.y=s[0].y,this.aiEngine.addChronicle("A New Era Dawns (Gen 2)","Seth and Miriam take up the sacred mantle of their ancestors, continuing the settlement in their honor.","milestone","🌅")},s=>{this.spawnNewPioneer(s)},this.hasSpawnedCustomCharacter),this.hasSpawnedCustomCharacter&&this.hud.setCustomCharacterSpawned(!0);const t=()=>{this.soundEngine.init(),window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t);const i=document.getElementById("game-canvas");this.camera=new Rg(i),this.hud.setCamera(this.camera),this.renderer=new Pg(i,this.camera,this.world),this.camera.followTarget=this.agents[0],this.camera.x=this.agents[0].x,this.camera.y=this.agents[0].y,this.setupCanvasInteractions(i),requestAnimationFrame(s=>this.loop(s))}setupCanvasInteractions(e){const t=(i,s)=>{this.renderer.triggerGodInteractionAt(i,s,this.agents);for(const n of this.agents)if(Math.hypot(n.x+.5-i,n.y+.5-s)<=1.3){this.hud.setSelectedAgentId(n.id),this.camera.followTarget=n;const o=document.getElementById("agent-inspector");o&&window.innerWidth<=768&&o.classList.add("mobile-open");return}};this.camera.onTap=(i,s)=>{t(i,s)},e.addEventListener("click",i=>{if(this.camera.isDragging)return;const s=e.getBoundingClientRect(),n=i.clientX-s.left,r=i.clientY-s.top,o=this.camera.screenToWorld(n,r,32);t(o.x,o.y)})}loop(e){this.lastTime===0&&(this.lastTime=e);const t=Math.min(100,e-this.lastTime);this.lastTime=e;const i=t/1e3*this.simSpeed;if(this.simSpeed>0){const s=this.aiEngine.updateAgents(this.agents,i);s.length>0&&(this.agents.push(...s),window.agents=this.agents),this.fauna.update(i,this.agents);const n=i/60;this.world.updateTimeAndWeather(n),this.marketTimer+=i,this.marketTimer>=10&&(this.marketTimer=0,this.economy.updateMarketTicks()),this.persistence.update(i,this.world,this.economy,this.aiEngine,this.agents,this.fauna.animals,this.hasSpawnedCustomCharacter)}this.camera.update(t/1e3),this.renderer.render(this.agents,this.hud.getSelectedAgentId(),t/1e3,this.fauna.animals),this.soundEngine.update(this.world,this.camera.x,this.camera.y,i,this.fauna.animals),this.hud.update(this.agents,this.fauna.animals),requestAnimationFrame(s=>this.loop(s))}spawnNewPioneer(e){const t=this.agents.some(c=>c.id!=="agent_adam"&&c.id!=="agent_eve"&&(!c.parentsIds||c.parentsIds.length===0));if(this.hasSpawnedCustomCharacter||t||localStorage.getItem("genesis_custom_pioneer_spawned")==="true"){alert("Under any circumstances, only 1 character can ever be spawned per person. Your 1 character limit has already been reached."),this.hasSpawnedCustomCharacter=!0,this.hud.setCustomCharacterSpawned(!0);return}this.hasSpawnedCustomCharacter=!0;try{localStorage.setItem("genesis_custom_pioneer_spawned","true")}catch{}this.hud.setCustomCharacterSpawned(!0);const i=this.camera?{x:Math.round(this.camera.x),y:Math.round(this.camera.y)}:{x:0,y:0};let s=i.x,n=i.y,r=!1;for(let c=0;c<30&&!r;c++){const h=Math.random()*Math.PI*2,u=2+Math.random()*12,d=Math.round(i.x+Math.cos(h)*u),m=Math.round(i.y+Math.sin(h)*u),g=this.world.getTile(d,m);g&&g.type!=="water"&&g.type!=="deep_water"&&(s=d,n=m,r=!0)}const o=Math.max(1,...this.agents.map(c=>c.generation||1)),l=Ag({name:e,x:s,y:n,generation:o,existingAgents:this.agents});this.agents.push(l),window.agents=this.agents,Vt.saveState(this.world,this.economy,this.aiEngine,this.agents,this.fauna.animals,this.hasSpawnedCustomCharacter),this.camera&&(this.camera.followTarget=l,this.camera.x=l.x,this.camera.y=l.y),this.hud.setSelectedAgentId(l.id),this.soundEngine.init(),this.soundEngine.playPioneerSpawnChime(),this.aiEngine.addChronicle("New Pioneer Welcomed",`${l.name} (${l.gender==="male"?"♂":"♀"} ${l.role}) has emerged onto these fertile lands to forge their destiny with our settlement!`,"milestone","✨")}}const Bg=async()=>{if(new URLSearchParams(window.location.search).get("portal")==="1"){const e=new bg("app");window.robloxPortal=e,window.startClassic2D=()=>new Ul;return}try{await Bn.getCurrentUser()&&await Vt.syncCloudSave()}catch{}new Ul};Bg();
