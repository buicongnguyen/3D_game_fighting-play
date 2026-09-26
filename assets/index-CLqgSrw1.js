(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="180",Hd=0,yl=1,Gd=2,xu=1,vu=2,Xn=3,Jn=0,Ft=1,Jt=2,Yn=0,ms=1,Fo=2,Ml=3,Sl=4,Vd=5,Ri=100,Wd=101,jd=102,Xd=103,qd=104,Kd=200,Yd=201,$d=202,Jd=203,Oo=204,zo=205,Zd=206,Qd=207,ef=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,Bo=0,Ho=1,Go=2,vs=3,Vo=4,Wo=5,jo=6,Xo=7,_u=0,cf=1,lf=2,ui=0,yu=1,Mu=2,Su=3,wu=4,Eu=5,Tu=6,Fc=7,wl="attached",hf="detached",Au=300,_s=301,ys=302,qo=303,Ko=304,La=306,Ni=1e3,hi=1001,_a=1002,jt=1003,Ru=1004,nr=1005,Dt=1006,ua=1007,In=1008,Nn=1009,Cu=1010,Pu=1011,pr=1012,Oc=1013,Ui=1014,Sn=1015,wn=1016,zc=1017,Bc=1018,mr=1020,Iu=35902,Lu=35899,Du=1021,Nu=1022,Zt=1023,gr=1026,br=1027,Da=1028,Hc=1029,Uu=1030,Gc=1031,Vc=1033,da=33776,fa=33777,pa=33778,ma=33779,Yo=35840,$o=35841,Jo=35842,Zo=35843,Qo=36196,ec=37492,tc=37496,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,cc=37814,lc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,bc=36494,xc=36495,vc=36283,_c=36284,yc=36285,Mc=36286,uf=2200,df=2201,ff=2202,xr=2300,vr=2301,Ba=2302,hs=2400,us=2401,ya=2402,Wc=2500,pf=2501,mf=0,ku=1,Sc=2,gf=3200,bf=3201,Fu=0,xf=1,ci="",Tt="srgb",Kt="srgb-linear",Ma="linear",ht="srgb",Vi=7680,El=519,vf=512,_f=513,yf=514,Ou=515,Mf=516,Sf=517,wf=518,Ef=519,wc=35044,Tl=35048,Al="300 es",Ln=2e3,Sa=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const ar=Math.PI/180,Ms=180/Math.PI;function un(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function jc(r,e){return(r%e+e)%e}function Tf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Af(r,e,t){return r!==e?(t-r)/(e-r):0}function or(r,e,t){return(1-t)*r+t*e}function Rf(r,e,t,n){return or(r,e,1-Math.exp(-t*n))}function Cf(r,e=1){return e-Math.abs(jc(r,e*2)-e)}function Pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function If(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Df(r,e){return r+Math.random()*(e-r)}function Nf(r){return r*(.5-Math.random())}function Uf(r){r!==void 0&&(Rl=r);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kf(r){return r*ar}function Ff(r){return r*Ms}function Of(r){return(r&r-1)===0&&r!==0}function zf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*p,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*p,o*l);break;case"ZYZ":r.set(c*p,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ps={DEG2RAD:ar,RAD2DEG:Ms,generateUUID:un,clamp:Ke,euclideanModulo:jc,mapLinear:Tf,inverseLerp:Af,lerp:or,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:If,randInt:Lf,randFloat:Df,randFloatSpread:Nf,seededRandom:Uf,degToRad:kf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:zf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:Hf,normalize:ut,denormalize:vn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],p=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=b;return}if(u!==b||c!==f||l!==d||h!==p){let g=1-o;const m=c*f+l*d+h*p+u*b,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const y=Math.sqrt(v),M=Math.atan2(y,m*_);g=Math.sin(g*M)/y,o=Math.sin(o*M)/y}const x=o*_;if(c=c*g+f*x,l=l*g+d*x,h=h*g+p*x,u=u*g+b*x,g===1-o){const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-o*d,e[t+2]=l*p+h*d+o*f-c*u,e[t+3]=h*p-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new R,Cl=new Xt;class je{constructor(e,t,n,i,s,a,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=i[0],g=i[3],m=i[6],_=i[1],v=i[4],x=i[7],y=i[2],M=i[5],A=i[8];return s[0]=a*b+o*_+c*y,s[3]=a*g+o*v+c*M,s[6]=a*m+o*x+c*A,s[1]=l*b+h*_+u*y,s[4]=l*g+h*v+u*M,s[7]=l*m+h*x+u*A,s[2]=f*b+d*_+p*y,s[5]=f*g+d*v+p*M,s[8]=f*m+d*x+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/p;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=d*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new je;function zu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gf(){const r=_r("canvas");return r.style.display="block",r}const Pl={};function yr(r){r in Pl||(Pl[r]=!0,console.warn(r))}function Vf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Il=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const r={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Kt]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}const tt=Wf();function $n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class jf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=_r("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Va(i[a].image)):s.push(Va(i[a]))}else s=Va(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Va(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qf=0;const Wa=new R;class Rt extends Bi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=hi,i=hi,s=Dt,a=In,o=Zt,c=Nn,l=Rt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=un(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Au;Rt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],b=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(d+1)/2,y=(m+1)/2,M=(h+f)/4,A=(u+b)/4,P=(p+g)/4;return v>x&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=A/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=M/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=P/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-b)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Rt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Kf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Ir.subVectors(this.max,Gs),ji.subVectors(e.a,Gs),Xi.subVectors(e.b,Gs),qi.subVectors(e.c,Gs),Qn.subVectors(Xi,ji),ei.subVectors(qi,Xi),bi.subVectors(ji,qi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-bi.z,bi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!ja(t,ji,Xi,qi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,ji,Xi,qi,Ir))?!1:(Lr.crossVectors(Qn,ei),t=[Lr.x,Lr.y,Lr.z],ja(t,ji,Xi,qi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new R,new R,new R,new R,new R,new R,new R,new R],fn=new R,Pr=new En,ji=new R,Xi=new R,qi=new R,Qn=new R,ei=new R,bi=new R,Gs=new R,Ir=new R,Lr=new R,xi=new R;function ja(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xi.fromArray(r,s);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const $f=new En,Vs=new R,Xa=new R;class en{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Xa)),this.expandByPoint(Vs.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new R,qa=new R,Dr=new R,ti=new R,Ka=new R,Nr=new R,Ya=new R;class ki{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=ti.dot(this.direction),c=-ti.dot(Dr),l=ti.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const b=1/h;u*=b,f*=b,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qa).addScaledVector(Dr,f),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){Ka.subVectors(t,e),Nr.subVectors(n,e),Ya.crossVectors(Ka,Nr);let a=this.direction.dot(Ya),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const c=o*this.direction.dot(Nr.crossVectors(ti,Nr));if(c<0)return null;const l=o*this.direction.dot(Ka.cross(ti));if(l<0||c+l>a)return null;const h=-o*ti.dot(Ya);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,a,o,c,l,h,u,f,d,p,b,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,f,d,p,b,g)}set(e,t,n,i,s,a,o,c,l,h,u,f,d,p,b,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,p=l*h,b=l*u;t[0]=f+b*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,p=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,b=o*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-b*u}else if(e.order==="XZY"){const f=a*c,d=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,Zf)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(n,sn)),ni.normalize(),Ur.crossVectors(sn,ni),i[0]=ni.x,i[4]=Ur.x,i[8]=sn.x,i[1]=ni.y,i[5]=Ur.y,i[9]=sn.y,i[2]=ni.z,i[6]=Ur.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],_=n[3],v=n[7],x=n[11],y=n[15],M=i[0],A=i[4],P=i[8],E=i[12],S=i[1],I=i[5],N=i[9],O=i[13],z=i[2],j=i[6],W=i[10],te=i[14],G=i[3],ue=i[7],ve=i[11],Me=i[15];return s[0]=a*M+o*S+c*z+l*G,s[4]=a*A+o*I+c*j+l*ue,s[8]=a*P+o*N+c*W+l*ve,s[12]=a*E+o*O+c*te+l*Me,s[1]=h*M+u*S+f*z+d*G,s[5]=h*A+u*I+f*j+d*ue,s[9]=h*P+u*N+f*W+d*ve,s[13]=h*E+u*O+f*te+d*Me,s[2]=p*M+b*S+g*z+m*G,s[6]=p*A+b*I+g*j+m*ue,s[10]=p*P+b*N+g*W+m*ve,s[14]=p*E+b*O+g*te+m*Me,s[3]=_*M+v*S+x*z+y*G,s[7]=_*A+v*I+x*j+y*ue,s[11]=_*P+v*N+x*W+y*ve,s[15]=_*E+v*O+x*te+y*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],b=e[7],g=e[11],m=e[15];return p*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+b*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+g*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+m*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],b=e[13],g=e[14],m=e[15],_=u*g*l-b*f*l+b*c*d-o*g*d-u*c*m+o*f*m,v=p*f*l-h*g*l-p*c*d+a*g*d+h*c*m-a*f*m,x=h*b*l-p*u*l+p*o*d-a*b*d-h*o*m+a*u*m,y=p*u*c-h*b*c-p*o*f+a*b*f+h*o*g-a*u*g,M=t*_+n*v+i*x+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(b*f*s-u*g*s-b*i*d+n*g*d+u*i*m-n*f*m)*A,e[2]=(o*g*s-b*c*s+b*i*l-n*g*l-o*i*m+n*c*m)*A,e[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*A,e[4]=v*A,e[5]=(h*g*s-p*f*s+p*i*d-t*g*d-h*i*m+t*f*m)*A,e[6]=(p*c*s-a*g*s-p*i*l+t*g*l+a*i*m-t*c*m)*A,e[7]=(a*f*s-h*c*s+h*i*l-t*f*l-a*i*d+t*c*d)*A,e[8]=x*A,e[9]=(p*u*s-h*b*s-p*n*d+t*b*d+h*n*m-t*u*m)*A,e[10]=(a*b*s-p*o*s+p*n*l-t*b*l-a*n*m+t*o*m)*A,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*A,e[12]=y*A,e[13]=(h*b*i-p*u*i+p*n*f-t*b*f-h*n*g+t*u*g)*A,e[14]=(p*o*i-a*b*i-p*n*c+t*b*c+a*n*g-t*o*g)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,p=s*u,b=a*h,g=a*u,m=o*u,_=c*l,v=c*h,x=c*u,y=n.x,M=n.y,A=n.z;return i[0]=(1-(b+m))*y,i[1]=(d+x)*y,i[2]=(p-v)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(f+m))*M,i[6]=(g+_)*M,i[7]=0,i[8]=(p+v)*A,i[9]=(g-_)*A,i[10]=(1-(f+b))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const l=1/s,h=1/a,u=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ln,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,b;if(c)p=s/(a-s),b=a*s/(a-s);else if(o===Ln)p=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Sa)p=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ln,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,b;if(c)p=1/(a-s),b=a/(a-s);else if(o===Ln)p=-2/(a-s),b=-(a+s)/(a-s);else if(o===Sa)p=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new R,pn=new ke,Jf=new R(0,0,0),Zf=new R(1,1,1),ni=new R,Ur=new R,sn=new R,Dl=new ke,Nl=new Xt;class Un{constructor(e=0,t=0,n=0,i=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qf=0;const Ul=new R,Yi=new Xt,Hn=new ke,kr=new R,Ws=new R,ep=new R,tp=new Xt,kl=new R(1,0,0),Fl=new R(0,1,0),Ol=new R(0,0,1),zl={type:"added"},np={type:"removed"},$i={type:"childadded",child:null},$a={type:"childremoved",child:null};class xt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new R,t=new Un,n=new Xt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new je}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ws,kr,this.up):Hn.lookAt(kr,Ws,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(np),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new R,Gn=new R,Ja=new R,Vn=new R,Ji=new R,Zi=new R,Bl=new R,Za=new R,Qa=new R,eo=new R,to=new Ze,no=new Ze,io=new Ze;class _n{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mn.subVectors(i,t),Gn.subVectors(n,t),Ja.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Gn),c=mn.dot(Ja),l=Gn.dot(Gn),h=Gn.dot(Ja),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(to,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Gn.subVectors(e,t),mn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ji.subVectors(i,n),Zi.subVectors(s,n),Za.subVectors(e,n);const c=Ji.dot(Za),l=Zi.dot(Za);if(c<=0&&l<=0)return t.copy(n);Qa.subVectors(e,i);const h=Ji.dot(Qa),u=Zi.dot(Qa);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ji,a);eo.subVectors(e,s);const d=Ji.dot(eo),p=Zi.dot(eo);if(p>=0&&d<=p)return t.copy(s);const b=d*l-c*p;if(b<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Zi,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Bl.subVectors(s,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Bl,o);const m=1/(g+b+f);return a=b*m,o=f*m,t.copy(n).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function so(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=jc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return tt.workingToColorSpace(kt.copy(this),e),Math.round(Ke(kt.r*255,0,255))*65536+Math.round(Ke(kt.g*255,0,255))*256+Math.round(Ke(kt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Tt){tt.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Fr);const n=or(ii.h,Fr.h,t),i=or(ii.s,Fr.s,t),s=or(ii.l,Fr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new he;he.NAMES=Gu;let ip=0;class Dn extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=un(),this.name="",this.type="Material",this.blending=ms,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=zo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hn extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qn=sp();function sp(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function rp(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ke(r,-65504,65504),qn.floatView[0]=r;const e=qn.uint32View[0],t=e>>23&511;return qn.baseTable[t]+((e&8388607)>>qn.shiftTable[t])}function ap(r){const e=r>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[e]+(r&1023)]+qn.exponentTable[e],qn.floatView[0]}class op{static toHalfFloat(e){return rp(e)}static fromHalfFloat(e){return ap(e)}}const Et=new R,Or=new ie;let cp=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class Vu extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lp=0;const cn=new ke,ro=new xt,Qi=new R,rn=new En,js=new En,It=new R;class at extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Wu:Vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(rn.min,js.min),rn.expandByPoint(It),It.addVectors(rn.max,js.max),rn.expandByPoint(It)):(rn.expandByPoint(js.min),rn.expandByPoint(js.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),It.add(Qi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,f=new ie,d=new ie,p=new ie,b=new R,g=new R;function m(P,E,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,S),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),o[P].add(b),o[E].add(b),o[S].add(b),c[P].add(g),c[E].add(g),c[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,E=_.length;P<E;++P){const S=_[P],I=S.start,N=S.count;for(let O=I,z=I+N;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new R,x=new R,y=new R,M=new R;function A(P){y.fromBufferAttribute(i,P),M.copy(y);const E=o[P];v.copy(E),v.sub(y.multiplyScalar(y.dot(E))).normalize(),x.crossVectors(M,E);const I=x.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,E=_.length;P<E;++P){const S=_[P],I=S.start,N=S.count;for(let O=I,z=I+N;O<z;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new St(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new ke,vi=new ki,zr=new en,Gl=new R,Br=new R,Hr=new R,Gr=new R,ao=new R,Vr=new R,Vl=new R,Wr=new R;class Qe extends xt{constructor(e=new at,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(ao.fromBufferAttribute(u,e),a?Vr.addScaledVector(ao,h):Vr.addScaledVector(ao.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(zr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(zr,Gl)===null||vi.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){const g=f[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,y=v;x<y;x+=3){const M=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);i=jr(this,m,e,n,l,h,u,M,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){const _=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);i=jr(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){const g=f[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,y=v;x<y;x+=3){const M=x,A=x+1,P=x+2;i=jr(this,m,e,n,l,h,u,M,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){const _=g,v=g+1,x=g+2;i=jr(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function hp(r,e,t,n,i,s,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Jn,o),c===null)return null;Wr.copy(o),Wr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:r}}function jr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Br),r.getVertexPosition(c,Hr),r.getVertexPosition(l,Gr);const h=hp(r,e,t,n,Br,Hr,Gr,Vl);if(h){const u=new R;_n.getBarycoord(Vl,Br,Hr,Gr,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,c,l,u,new ie)),s&&(h.uv1=_n.getInterpolatedAttribute(s,o,c,l,u,new ie)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};_n.getNormal(Br,Hr,Gr,f.normal),h.face=f,h.barycoord=u}return h}class Zn extends at{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function p(b,g,m,_,v,x,y,M,A,P,E){const S=x/A,I=y/P,N=x/2,O=y/2,z=M/2,j=A+1,W=P+1;let te=0,G=0;const ue=new R;for(let ve=0;ve<W;ve++){const Me=ve*I-O;for(let We=0;We<j;We++){const nt=We*S-N;ue[b]=nt*_,ue[g]=Me*v,ue[m]=z,l.push(ue.x,ue.y,ue.z),ue[b]=0,ue[g]=0,ue[m]=M>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(We/A),u.push(1-ve/P),te+=1}}for(let ve=0;ve<P;ve++)for(let Me=0;Me<A;Me++){const We=f+Me+j*ve,nt=f+Me+j*(ve+1),lt=f+(Me+1)+j*(ve+1),st=f+(Me+1)+j*ve;c.push(We,nt,st),c.push(nt,lt,st),G+=6}o.addGroup(d,G,E),d+=G,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=Ss(r[t]);for(const i in n)e[i]=n[i]}return e}function up(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ju(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Fi={clone:Ss,merge:Ht};var dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new R,Wl=new ie,jl=new ie;class Wt extends Xu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,jl),t.subVectors(jl,Wl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class pp extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(es,ts,e,t);i.layers=this.layers,this.add(i);const s=new Wt(es,ts,e,t);s.layers=this.layers,this.add(s);const a=new Wt(es,ts,e,t);a.layers=this.layers,this.add(a);const o=new Wt(es,ts,e,t);o.layers=this.layers,this.add(o);const c=new Wt(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new Wt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qu extends Rt{constructor(e=[],t=_s,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mp extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Yn});s.uniforms.tEquirect.value=t;const a=new Qe(i,s),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Dt),new pp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class dt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,n),m=this._getHandJoint(l,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new qc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ku extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new R;class Kc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xl=new R,ql=new Ze,Kl=new Ze,xp=new R,Yl=new ke,Xr=new R,co=new en,$l=new ke,lo=new ki;class vp extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wl,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1&&($l.copy(i).invert(),lo.copy(e.ray).applyMatrix4($l),!(this.boundingBox!==null&&lo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ql.fromBufferAttribute(i.attributes.skinIndex,e),Kl.fromBufferAttribute(i.attributes.skinWeight,e),Xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Kl.getComponent(s);if(a!==0){const o=ql.getComponent(s);Yl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xp.copy(Xl).applyMatrix4(Yl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yu extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tr extends Rt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=jt,h=jt,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new ke,_p=new ke;class Yc{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:_p;Jl.multiplyMatrices(o,t[s]),Jl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tr(t,e,e,Zt,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yu),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class wa extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new ke,Zl=new ke,qr=[],Ql=new En,yp=new ke,Xs=new Qe,qs=new en;class ws extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Ql.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Ql)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),qs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ns),Zl.multiplyMatrices(n,ns),Xs.matrixWorld=Zl,Xs.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const c=qr[a];c.instanceId=s,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(i*this.count),i,this.count,Da,Sn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ho=new R,Mp=new R,Sp=new je;class Ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ho.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new en,wp=new ie(.5,.5),Kr=new R;class Na{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,s=new Ei,a=new Ei){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],_=s[12],v=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-a,d-h,m-p,y-_).normalize(),i[1].setComponents(l+a,d+h,m+p,y+_).normalize(),i[2].setComponents(l+o,d+u,m+b,y+v).normalize(),i[3].setComponents(l-o,d-u,m-b,y-v).normalize(),n)i[4].setComponents(c,f,g,x).normalize(),i[5].setComponents(l-c,d-f,m-g,y-x).normalize();else if(i[4].setComponents(l-c,d-f,m-g,y-x).normalize(),t===Ln)i[5].setComponents(l+c,d+f,m+g,y+x).normalize();else if(t===Sa)i[5].setComponents(c,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=wp.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Is extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new R,Ta=new R,eh=new ke,Ks=new ki,Yr=new en,uo=new R,th=new R;class Hi extends xt{constructor(e=new at,t=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ea.fromBufferAttribute(t,i-1),Ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(Ta);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;eh.copy(i).invert(),Ks.copy(e.ray).applyMatrix4(eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=d,g=p-1;b<g;b+=l){const m=h.getX(b),_=h.getX(b+1),v=$r(this,e,Ks,c,m,_,b);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(p-1),g=h.getX(d),m=$r(this,e,Ks,c,b,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let b=d,g=p-1;b<g;b+=l){const m=$r(this,e,Ks,c,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){const b=$r(this,e,Ks,c,p-1,d,p-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $r(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ea.fromBufferAttribute(o,i),Ta.fromBufferAttribute(o,s),t.distanceSqToSegment(Ea,Ta,uo,th)>n)return;uo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(uo);if(!(l<e.near||l>e.far))return{distance:l,point:th.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const nh=new R,ih=new R;class Ep extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tp extends Hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Aa extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new ke,Ec=new ki,Jr=new en,Zr=new R;class Tc extends xt{constructor(e=new at,t=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;sh.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,b=d;p<b;p++){const g=l.getX(p);Zr.fromBufferAttribute(u,g),rh(Zr,g,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,b=d;p<b;p++)Zr.fromBufferAttribute(u,p),rh(Zr,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rh(r,e,t,n,i,s,a){const o=Ec.distanceSqToPoint(r);if(o<t){const c=new R;Ec.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ap extends Rt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $u extends Rt{constructor(e,t,n=Ui,i,s,a,o=jt,c=jt,l,h=gr,u=1){if(h!==gr&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ju extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $c extends at{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const b=[],g=n/2;let m=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function _(){const x=new R,y=new R;let M=0;const A=(t-e)/n;for(let P=0;P<=s;P++){const E=[],S=P/s,I=S*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,z=O*c+o,j=Math.sin(z),W=Math.cos(z);y.x=I*j,y.y=-S*n+g,y.z=I*W,u.push(y.x,y.y,y.z),x.set(j,A,W).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-S),E.push(p++)}b.push(E)}for(let P=0;P<i;P++)for(let E=0;E<s;E++){const S=b[E][P],I=b[E+1][P],N=b[E+1][P+1],O=b[E][P+1];(e>0||E!==0)&&(h.push(S,I,O),M+=3),(t>0||E!==s-1)&&(h.push(I,N,O),M+=3)}l.addGroup(m,M,0),m+=M}function v(x){const y=p,M=new ie,A=new R;let P=0;const E=x===!0?e:t,S=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;const I=p;for(let N=0;N<=i;N++){const z=N/i*c+o,j=Math.cos(z),W=Math.sin(z);A.x=E*W,A.y=g*S,A.z=E*j,u.push(A.x,A.y,A.z),f.push(0,S,0),M.x=j*.5+.5,M.y=W*.5*S+.5,d.push(M.x,M.y),p++}for(let N=0;N<i;N++){const O=y+N,z=I+N;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),P+=3}l.addGroup(m,P,x===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new ie:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],s=[],a=[],o=new R,c=new ke;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ke(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ke(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends kn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rp extends Jc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Qr=new R,fo=new Zc,po=new Zc,mo=new Zc;class Cp extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Qr.subVectors(i[0],i[1]).add(i[0]),l=Qr);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Qr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),b=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);b<1e-4&&(b=1),p<1e-4&&(p=b),g<1e-4&&(g=b),fo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,b,g),po.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,b,g),mo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,b,g)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),po.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),mo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(fo.calc(c),po.calc(c),mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ah(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Pp(r,e){const t=1-r;return t*t*e}function Ip(r,e){return 2*(1-r)*r*e}function Lp(r,e){return r*r*e}function cr(r,e,t,n){return Pp(r,e)+Ip(r,t)+Lp(r,n)}function Dp(r,e){const t=1-r;return t*t*t*e}function Np(r,e){const t=1-r;return 3*t*t*r*e}function Up(r,e){return 3*(1-r)*r*r*e}function kp(r,e){return r*r*r*e}function lr(r,e,t,n,i){return Dp(r,e)+Np(r,t)+Up(r,n)+kp(r,i)}class Zu extends kn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,i.x,s.x,a.x,o.x),lr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fp extends kn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,i.x,s.x,a.x,o.x),lr(e,i.y,s.y,a.y,o.y),lr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qu extends kn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Op extends kn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends kn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(cr(e,i.x,s.x,a.x),cr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends kn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(cr(e,i.x,s.x,a.x),cr(e,i.y,s.y,a.y),cr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ah(o,c.x,l.x,h.x,u.x),ah(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Ra=Object.freeze({__proto__:null,ArcCurve:Rp,CatmullRomCurve3:Cp,CubicBezierCurve:Zu,CubicBezierCurve3:Fp,EllipseCurve:Jc,LineCurve:Qu,LineCurve3:Op,QuadraticBezierCurve:ed,QuadraticBezierCurve3:Qc,SplineCurve:td});class zp extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ra[i.type]().fromJSON(i))}return this}}class oh extends zp{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qu(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ed(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Zu(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new td(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Jc(e,t,n,i,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nd extends oh{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new oh().fromJSON(i))}return this}}function Bp(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=id(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=jp(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=r[f],p=r[f+1];d<o&&(o=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Mr(s,a,t,o,c,l,0),a}function id(r,e,t,n,i){let s;if(i===nm(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=ch(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=ch(a/n|0,r[a],r[a+1],s);return s&&Es(s,s.next)&&(wr(s),s=s.next),s}function Oi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Es(t,t.next)||Mt(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&$p(r,n,i,s);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?Gp(r,n,i,s):Hp(r)){e.push(c.i,r.i,l.i),wr(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=Vp(Oi(r),e),Mr(r,e,t,n,i,s,2)):a===2&&Wp(r,e,t,n,i,s):Mr(Oi(r),e,t,n,i,s,1);break}}}function Hp(r){const e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),f=Math.max(i,s,a),d=Math.max(o,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ir(i,o,s,c,a,l,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gp(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,f=a.y,d=Math.min(o,c,l),p=Math.min(h,u,f),b=Math.max(o,c,l),g=Math.max(h,u,f),m=Ac(d,p,e,t,n),_=Ac(b,g,e,t,n);let v=r.prevZ,x=r.nextZ;for(;v&&v.z>=m&&x&&x.z<=_;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ir(o,h,c,u,l,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=b&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ir(o,h,c,u,l,f,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ir(o,h,c,u,l,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=b&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ir(o,h,c,u,l,f,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vp(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Es(n,i)&&rd(n,t,t.next,i)&&Sr(n,i)&&Sr(i,n)&&(e.push(n.i,t.i,i.i),wr(t),wr(t.next),t=r=i),t=t.next}while(t!==r);return Oi(t)}function Wp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qp(a,o)){let c=ad(a,o);a=Oi(a,a.next),c=Oi(c,c.next),Mr(a,e,t,n,i,s,0),Mr(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function jp(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=id(r,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Zp(l))}i.sort(Xp);for(let s=0;s<i.length;s++)t=qp(i[s],t);return t}function Xp(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function qp(r,e){const t=Kp(r,e);if(!t)return e;const n=ad(t,r);return Oi(n,n.next),Oi(t,t.next)}function Kp(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Es(r,t))return t;do{if(Es(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&sd(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Sr(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Yp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Yp(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function $p(r,e,t,n){let i=r;do i.z===0&&(i.z=Ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Jp(i)}function Jp(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Ac(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Zp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function sd(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function ir(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&sd(r,e,t,n,i,s,a,o)}function Qp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!em(r,e)&&(Sr(r,e)&&Sr(e,r)&&tm(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||Es(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Es(r,e){return r.x===e.x&&r.y===e.y}function rd(r,e,t,n){const i=ta(Mt(r,e,t)),s=ta(Mt(r,e,n)),a=ta(Mt(t,n,r)),o=ta(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&ea(r,t,e)||s===0&&ea(r,n,e)||a===0&&ea(t,r,n)||o===0&&ea(t,e,n))}function ea(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ta(r){return r>0?1:r<0?-1:0}function em(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Sr(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function tm(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ad(r,e){const t=Rc(r.i,r.x,r.y),n=Rc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ch(r,e,t,n){const i=Rc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class im{static triangulate(e,t,n=2){return Bp(e,t,n)}}class ds{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ds.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];lh(e),hh(n,e);let a=e.length;t.forEach(lh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,hh(n,t[c]);const o=im.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function lh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function hh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class el extends at{constructor(e=new nd([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:sm;let v,x=!1,y,M,A,P;m&&(v=m.getSpacedPoints(h),x=!0,f=!1,y=m.computeFrenetFrames(h,!1),M=new R,A=new R,P=new R),f||(g=0,d=0,p=0,b=0);const E=o.extractPoints(l);let S=E.shape;const I=E.holes;if(!ds.isClockWise(S)){S=S.reverse();for(let Q=0,$=I.length;Q<$;Q++){const Y=I[Q];ds.isClockWise(Y)&&(I[Q]=Y.reverse())}}function O(Q){const Y=10000000000000001e-36;let K=Q[0];for(let de=1;de<=Q.length;de++){const se=de%Q.length,fe=Q[se],Ge=fe.x-K.x,He=fe.y-K.y,C=Ge*Ge+He*He,w=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(K.x),Math.abs(K.y)),F=Y*w*w;if(C<=F){Q.splice(se,1),de--;continue}K=fe}}O(S),I.forEach(O);const z=I.length,j=S;for(let Q=0;Q<z;Q++){const $=I[Q];S=S.concat($)}function W(Q,$,Y){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,Y)}const te=S.length;function G(Q,$,Y){let K,de,se;const fe=Q.x-$.x,Ge=Q.y-$.y,He=Y.x-Q.x,C=Y.y-Q.y,w=fe*fe+Ge*Ge,F=fe*C-Ge*He;if(Math.abs(F)>Number.EPSILON){const V=Math.sqrt(w),Z=Math.sqrt(He*He+C*C),X=$.x-Ge/V,Ce=$.y+fe/V,le=Y.x-C/Z,Te=Y.y+He/Z,Ae=((le-X)*C-(Te-Ce)*He)/(fe*C-Ge*He);K=X+fe*Ae-Q.x,de=Ce+Ge*Ae-Q.y;const re=K*K+de*de;if(re<=2)return new ie(K,de);se=Math.sqrt(re/2)}else{let V=!1;fe>Number.EPSILON?He>Number.EPSILON&&(V=!0):fe<-Number.EPSILON?He<-Number.EPSILON&&(V=!0):Math.sign(Ge)===Math.sign(C)&&(V=!0),V?(K=-Ge,de=fe,se=Math.sqrt(w)):(K=fe,de=Ge,se=Math.sqrt(w/2))}return new ie(K/se,de/se)}const ue=[];for(let Q=0,$=j.length,Y=$-1,K=Q+1;Q<$;Q++,Y++,K++)Y===$&&(Y=0),K===$&&(K=0),ue[Q]=G(j[Q],j[Y],j[K]);const ve=[];let Me,We=ue.concat();for(let Q=0,$=z;Q<$;Q++){const Y=I[Q];Me=[];for(let K=0,de=Y.length,se=de-1,fe=K+1;K<de;K++,se++,fe++)se===de&&(se=0),fe===de&&(fe=0),Me[K]=G(Y[K],Y[se],Y[fe]);ve.push(Me),We=We.concat(Me)}let nt;if(g===0)nt=ds.triangulateShape(j,I);else{const Q=[],$=[];for(let Y=0;Y<g;Y++){const K=Y/g,de=d*Math.cos(K*Math.PI/2),se=p*Math.sin(K*Math.PI/2)+b;for(let fe=0,Ge=j.length;fe<Ge;fe++){const He=W(j[fe],ue[fe],se);Ie(He.x,He.y,-de),K===0&&Q.push(He)}for(let fe=0,Ge=z;fe<Ge;fe++){const He=I[fe];Me=ve[fe];const C=[];for(let w=0,F=He.length;w<F;w++){const V=W(He[w],Me[w],se);Ie(V.x,V.y,-de),K===0&&C.push(V)}K===0&&$.push(C)}}nt=ds.triangulateShape(Q,$)}const lt=nt.length,st=p+b;for(let Q=0;Q<te;Q++){const $=f?W(S[Q],We[Q],st):S[Q];x?(A.copy(y.normals[0]).multiplyScalar($.x),M.copy(y.binormals[0]).multiplyScalar($.y),P.copy(v[0]).add(A).add(M),Ie(P.x,P.y,P.z)):Ie($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<te;$++){const Y=f?W(S[$],We[$],st):S[$];x?(A.copy(y.normals[Q]).multiplyScalar(Y.x),M.copy(y.binormals[Q]).multiplyScalar(Y.y),P.copy(v[Q]).add(A).add(M),Ie(P.x,P.y,P.z)):Ie(Y.x,Y.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){const $=Q/g,Y=d*Math.cos($*Math.PI/2),K=p*Math.sin($*Math.PI/2)+b;for(let de=0,se=j.length;de<se;de++){const fe=W(j[de],ue[de],K);Ie(fe.x,fe.y,u+Y)}for(let de=0,se=I.length;de<se;de++){const fe=I[de];Me=ve[de];for(let Ge=0,He=fe.length;Ge<He;Ge++){const C=W(fe[Ge],Me[Ge],K);x?Ie(C.x,C.y+v[h-1].y,v[h-1].x+Y):Ie(C.x,C.y,u+Y)}}}q(),ee();function q(){const Q=i.length/3;if(f){let $=0,Y=te*$;for(let K=0;K<lt;K++){const de=nt[K];Ee(de[2]+Y,de[1]+Y,de[0]+Y)}$=h+g*2,Y=te*$;for(let K=0;K<lt;K++){const de=nt[K];Ee(de[0]+Y,de[1]+Y,de[2]+Y)}}else{for(let $=0;$<lt;$++){const Y=nt[$];Ee(Y[2],Y[1],Y[0])}for(let $=0;$<lt;$++){const Y=nt[$];Ee(Y[0]+te*h,Y[1]+te*h,Y[2]+te*h)}}n.addGroup(Q,i.length/3-Q,0)}function ee(){const Q=i.length/3;let $=0;ye(j,$),$+=j.length;for(let Y=0,K=I.length;Y<K;Y++){const de=I[Y];ye(de,$),$+=de.length}n.addGroup(Q,i.length/3-Q,1)}function ye(Q,$){let Y=Q.length;for(;--Y>=0;){const K=Y;let de=Y-1;de<0&&(de=Q.length-1);for(let se=0,fe=h+g*2;se<fe;se++){const Ge=te*se,He=te*(se+1),C=$+K+Ge,w=$+de+Ge,F=$+de+He,V=$+K+He;$e(C,w,F,V)}}}function Ie(Q,$,Y){c.push(Q),c.push($),c.push(Y)}function Ee(Q,$,Y){gt(Q),gt($),gt(Y);const K=i.length/3,de=_.generateTopUV(n,i,K-3,K-2,K-1);L(de[0]),L(de[1]),L(de[2])}function $e(Q,$,Y,K){gt(Q),gt($),gt(K),gt($),gt(Y),gt(K);const de=i.length/3,se=_.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);L(se[0]),L(se[1]),L(se[3]),L(se[1]),L(se[2]),L(se[3])}function gt(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function L(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ra[i.type]().fromJSON(i)),new el(n,e.options)}}const sm={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(s,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],b=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-u),new ie(f,1-p),new ie(b,1-m)]:[new ie(o,1-c),new ie(h,1-u),new ie(d,1-p),new ie(g,1-m)]}};function rm(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ls extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){const _=m*f-a;for(let v=0;v<l;v++){const x=v*u-s;p.push(x,-_,0),b.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){const v=_+l*m,x=_+l*(m+1),y=_+1+l*(m+1),M=_+1+l*m;d.push(v,x,M),d.push(x,y,M)}this.setIndex(d),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class tl extends at{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/i,d=new R,p=new ie;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){const m=s+g/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<i;b++){const g=b*(n+1);for(let m=0;m<n;m++){const _=m+g,v=_,x=_+n+1,y=_+n+2,M=_+1;o.push(v,x,M),o.push(x,y,M)}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fi extends at{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let x=0;m===0&&a===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const M=y/t;u.x=-e*Math.cos(i+M*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+M*s)*Math.sin(a+v*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),g.push(M+x,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const v=h[m][_+1],x=h[m][_],y=h[m+1][_],M=h[m+1][_+1];(m!==0||a>0)&&d.push(v,x,M),(m!==n-1||c<Math.PI)&&d.push(x,y,M)}this.setIndex(d),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nl extends at{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const b=p/i*s,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const b=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;a.push(b,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class il extends at{constructor(e=new Qc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,l=new ie;let h=new R;const u=[],f=[],d=[],p=[];b(),this.setIndex(p),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function b(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),_(),m()}function g(v){h=e.getPointAt(v/t,h);const x=a.normals[v],y=a.binormals[v];for(let M=0;M<=i;M++){const A=M/i*Math.PI*2,P=Math.sin(A),E=-Math.cos(A);c.x=E*x.x+P*y.x,c.y=E*x.y+P*y.y,c.z=E*x.z+P*y.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){const y=(i+1)*(v-1)+(x-1),M=(i+1)*v+(x-1),A=(i+1)*v+x,P=(i+1)*(v-1)+x;p.push(y,M,P),p.push(M,A,P)}}function _(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)l.x=v/t,l.y=x/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new il(new Ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class am extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qt extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class om extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function na(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function lm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function hm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function od(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ar{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class um extends Ar{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hs,endingEnd:hs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case us:s=e,o=2*t-n;break;case ya:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case us:a=e,c=2*n-t;break;case ya:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,_=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*b+.5*p,x=d*g-d*b;for(let y=0;y!==o;++y)s[y]=m*a[h+y]+_*a[l+y]+v*a[c+y]+x*a[u+y];return s}}class cd extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}}class dm extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new um(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&lm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const b=t[u+p];if(b!==t[f+p]||b!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=vr;class Ds extends Tn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=xr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}ld.prototype.ValueTypeName="color";class Ts extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}Ts.prototype.ValueTypeName="number";class fm extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Xt.slerpFlat(s,0,a,l-o,a,l,c);return s}}class As extends Tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new fm(this.times,this.values,this.getValueSize(),e)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Tn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=xr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}Rs.prototype.ValueTypeName="vector";class Cc{constructor(e="",t=-1,n=[],i=Wc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mm(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=hm(c);c=uh(c,1,h),l=uh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ts(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,b){if(d.length!==0){const g=[],m=[];od(d,g,m,p),g.length!==0&&b.push(new u(f,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let b=0;b<f[p].morphTargets.length;b++)d[f[p].morphTargets[b]]=-1;for(const b in d){const g=[],m=[];for(let _=0;_!==f[p].morphTargets.length;++_){const v=f[p];g.push(v.time),m.push(v.morphTarget===b?1:0)}i.push(new Ts(".morphTargetInfluence["+b+"]",g,m))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(Rs,d+".position",f,"pos",i),n(As,d+".quaternion",f,"rot",i),n(Rs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function pm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return ld;case"quaternion":return As;case"bool":case"boolean":return Ds;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pm(r.type);if(r.times===void 0){const t=[],n=[];od(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Kn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gm{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bm=new gm;class Us{constructor(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class xm extends Error{constructor(e,t){super(e),this.response=t}}class hd extends Us{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Kn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let b=0;const g=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:x})=>{if(v)m.close();else{b+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:d});for(let M=0,A=h.length;M<A;M++){const P=h[M];P.onProgress&&P.onProgress(y)}m.enqueue(x),_()}},v=>{m.error(v)})}}});return new Response(g)}else throw new xm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Kn.add(`file:${e}`,l);const h=Wn[e];delete Wn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class vm extends Us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=is.get(a);u===void 0&&(u=[],is.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=_r("img");function c(){h(),t&&t(this);const u=is.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}is.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Kn.remove(`image:${e}`);const f=is.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class _m extends Us{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,a=new vm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ua extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ym extends Ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const go=new ke,dh=new R,fh=new R;class sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mm extends sl{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sm extends Ua{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ph=new ke,Ys=new R,bo=new R;class wm extends sl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),bo.copy(n.position),bo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bo),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph,n.coordinateSystem,n.reversedDepth)}}class ud extends Ua{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ka extends Xu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Em extends sl{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dd extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tm extends at{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const xo=new WeakMap;class Am extends Us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(xo.has(a)===!0)i&&i(xo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),xo.set(c,l),Kn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Rm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Pm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Xt.multiplyQuaternionsFlat(e,a,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const rl="\\[\\]\\.:\\/",Im=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",Lm="[^"+rl.replace("\\.","")+"]",Dm=/((?:WC+[\/:])*)/.source.replace("WC",al),Nm=/(WCOD+)?/.source.replace("WCOD",Lm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),Fm=new RegExp("^"+Dm+Nm+Um+km+"$"),Om=["material","materials","bones","map"];class zm{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){const t=Fm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Om.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=zm;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:hs,endingEnd:hs};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=df,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Wc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===ff;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===uf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=us,i.endingEnd=us):(e?i.endingStart=this.zeroSlopeAtStart?us:hs:i.endingStart=ya,t?i.endingEnd=this.zeroSlopeAtEnd?us:hs:i.endingEnd=ya)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const Hm=new Float32Array(1);class Gm extends Bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const b=t&&t._propertyBindings[u].binding.parsedPath;p=new Pm(ct.create(n,d,b),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new cd(new Float32Array(2),new Float32Array(2),1,Hm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Cc.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Wc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Bm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Cc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function mh(r,e,t,n){const i=Vm(n);switch(t){case Du:return r*e;case Da:return r*e/i.components*i.byteLength;case Hc:return r*e/i.components*i.byteLength;case Uu:return r*e*2/i.components*i.byteLength;case Gc:return r*e*2/i.components*i.byteLength;case Nu:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case Vc:return r*e*4/i.components*i.byteLength;case da:case fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:case Zo:return Math.max(r,16)*Math.max(e,8)/4;case Yo:case Jo:return Math.max(r,8)*Math.max(e,8)/2;case Qo:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case gc:case bc:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vc:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(r){switch(r){case Nn:case Cu:return{byteLength:1,components:1};case pr:case Pu:case wn:return{byteLength:2,components:1};case zc:case Bc:return{byteLength:2,components:4};case Ui:case Oc:case Sn:return{byteLength:4,components:1};case Iu:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wm(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const b=u[d];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,rg=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cb=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,hb=`#define NORMAL
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
}`,ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,db=`#define PHONG
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
}`,fb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,gb=`#define TOON
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
}`,bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xb=`uniform float size;
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
}`,vb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mb=`uniform float rotation;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:jm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Km,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Jm,aomap_pars_fragment:Zm,batching_pars_vertex:Qm,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:ag,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:hg,color_pars_fragment:ug,color_pars_vertex:dg,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:bg,displacementmap_vertex:xg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:Ag,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Ug,lights_pars_begin:kg,lights_toon_fragment:Og,lights_toon_pars_fragment:zg,lights_phong_fragment:Bg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Wg,lights_fragment_maps:jg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Jg,map_pars_fragment:Zg,map_particle_fragment:Qg,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:c0,normal_fragment_maps:l0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:b0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:k0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:z0,uv_pars_fragment:B0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:V0,background_vert:W0,background_frag:j0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:K0,cube_frag:Y0,depth_vert:$0,depth_frag:J0,distanceRGBA_vert:Z0,distanceRGBA_frag:Q0,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:sb,meshbasic_frag:rb,meshlambert_vert:ab,meshlambert_frag:ob,meshmatcap_vert:cb,meshmatcap_frag:lb,meshnormal_vert:hb,meshnormal_frag:ub,meshphong_vert:db,meshphong_frag:fb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:bb,points_vert:xb,points_frag:vb,shadow_vert:_b,shadow_frag:yb,sprite_vert:Mb,sprite_frag:Sb},me={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Pn={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new he(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new he(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Pn.physical={uniforms:Ht([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ia={r:0,b:0,g:0},yi=new Un,wb=new ke;function Eb(r,e,t,n,i,s,a){const o=new he(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function b(v){let x=!1;const y=p(v);y===null?m(o,c):y&&y.isColor&&(m(y,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,x){const y=p(x);y&&(y.isCubeTexture||y.mapping===La)?(h===void 0&&(h=new Qe(new Zn(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ss(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(yi)),h.material.toneMapped=tt.getTransfer(y.colorSpace)!==ht,(u!==y||f!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qe(new Ls(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ss(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(ia,ju(r)),n.buffers.color.setClear(ia.r,ia.g,ia.b,x,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(o,c)},render:b,addToRenderList:g,dispose:_}}function Tb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(S,I,N,O,z){let j=!1;const W=u(O,N,I);s!==W&&(s=W,l(s.object)),j=d(S,O,N,z),j&&p(S,O,N,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(S,I,N,O),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,I,N){const O=N.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let j=z[I.id];j===void 0&&(j={},z[I.id]=j);let W=j[O];return W===void 0&&(W=f(c()),j[O]=W),W}function f(S){const I=[],N=[],O=[];for(let z=0;z<t;z++)I[z]=0,N[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,I,N,O){const z=s.attributes,j=I.attributes;let W=0;const te=N.getAttributes();for(const G in te)if(te[G].location>=0){const ve=z[G];let Me=j[G];if(Me===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function p(S,I,N,O){const z={},j=I.attributes;let W=0;const te=N.getAttributes();for(const G in te)if(te[G].location>=0){let ve=j[G];ve===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),z[G]=Me,W++}s.attributes=z,s.attributesNum=W,s.index=O}function b(){const S=s.newAttributes;for(let I=0,N=S.length;I<N;I++)S[I]=0}function g(S){m(S,0)}function m(S,I){const N=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;N[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),z[S]!==I&&(r.vertexAttribDivisor(S,I),z[S]=I)}function _(){const S=s.newAttributes,I=s.enabledAttributes;for(let N=0,O=I.length;N<O;N++)I[N]!==S[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function v(S,I,N,O,z,j,W){W===!0?r.vertexAttribIPointer(S,I,N,z,j):r.vertexAttribPointer(S,I,N,O,z,j)}function x(S,I,N,O){b();const z=O.attributes,j=N.getAttributes(),W=I.defaultAttributeValues;for(const te in j){const G=j[te];if(G.location>=0){let ue=z[te];if(ue===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const ve=ue.normalized,Me=ue.itemSize,We=e.get(ue);if(We===void 0)continue;const nt=We.buffer,lt=We.type,st=We.bytesPerElement,q=lt===r.INT||lt===r.UNSIGNED_INT||ue.gpuType===Oc;if(ue.isInterleavedBufferAttribute){const ee=ue.data,ye=ee.stride,Ie=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee,ee.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let Ee=0;Ee<G.locationSize;Ee++)v(G.location+Ee,Me/G.locationSize,lt,ve,ye*st,(Ie+Me/G.locationSize*Ee)*st,q)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee,ue.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<G.locationSize;ee++)g(G.location+ee);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let ee=0;ee<G.locationSize;ee++)v(G.location+ee,Me/G.locationSize,lt,ve,Me*st,Me/G.locationSize*ee*st,q)}}else if(W!==void 0){const ve=W[te];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(G.location,ve);break;case 3:r.vertexAttrib3fv(G.location,ve);break;case 4:r.vertexAttrib4fv(G.location,ve);break;default:r.vertexAttrib1fv(G.location,ve)}}}}_()}function y(){P();for(const S in n){const I=n[S];for(const N in I){const O=I[N];for(const z in O)h(O[z].object),delete O[z];delete I[N]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const N in I){const O=I[N];for(const z in O)h(O[z].object),delete O[z];delete I[N]}delete n[S.id]}function A(S){for(const I in n){const N=n[I];if(N[S.id]===void 0)continue;const O=N[S.id];for(const z in O)h(O[z].object),delete O[z];delete N[S.id]}}function P(){E(),a=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function Ab(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let b=0;b<u;b++)p+=h[b]*f[b];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Zt&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:M}}function Cb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ei,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):l();else{const _=s?0:n,v=_*4;let x=m.clippingState||null;c.value=x,x=h(p,f,v,d);for(let y=0;y!==v;++y)x[y]=t[y];m.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const b=u!==null?u.length:0;let g=null;if(b!==0){if(g=c.value,p!==!0||g===null){const m=d+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==b;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Pb(r){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=_s:o===Ko&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Ko)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new mp(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const fs=4,gh=[.125,.215,.35,.446,.526,.582],Ci=20,vo=new ka,bh=new he;let _o=null,yo=0,Mo=0,So=!1;const Ti=(1+Math.sqrt(5))/2,ss=1/Ti,xh=[new R(-Ti,ss,0),new R(Ti,ss,0),new R(-ss,0,Ti),new R(ss,0,Ti),new R(0,Ti,-ss),new R(0,Ti,ss),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ib=new R;class Pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ib}=s;_o=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,yo,Mo),this._renderer.xr.enabled=So,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:wn,format:Zt,colorSpace:Kt,depthBuffer:!1},i=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lb(s)),this._blurMaterial=Db(s,e,t)}return i}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i,s){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bh),u.toneMapping=ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const b=new hn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Qe(new Zn,b);let m=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,m=!0):(b.color.copy(bh),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[v],s.y,s.z)):x===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[v]));const y=this._cubeSize;sa(i,x*y,v>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xh[(i-s-1)%xh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),b=s/p,g=isFinite(s)?1+Math.floor(h*b):Ci;g>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);const m=[];let _=0;for(let A=0;A<Ci;++A){const P=A/b,E=Math.exp(-P*P/2);m.push(E),A===0?_+=E:A<g&&(_+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const x=this._sizeLods[i],y=3*x*(i>v-fs?i-v+fs:0),M=4*(this._cubeSize-x);sa(t,y,M,3*x,2*x),c.setRenderTarget(t),c.render(u,vo)}}function Lb(r){const e=[],t=[],n=[];let i=r;const s=r-fs+1+gh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-fs?c=gh[a-r+fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,b=3,g=2,m=1,_=new Float32Array(b*p*d),v=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let M=0;M<d;M++){const A=M%3*2/3-1,P=M>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(E,b*p*M),v.set(f,g*p*M);const S=[M,M,M,M,M,M];x.set(S,m*p*M)}const y=new at;y.setAttribute("position",new St(_,b)),y.setAttribute("uv",new St(v,g)),y.setAttribute("faceIndex",new St(x,m)),e.push(y),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(r,e,t){const n=new dn(r,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Db(r,e,t){const n=new Float32Array(Ci),i=new R(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function _h(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function yh(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nb(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===Ko,h=c===_s||c===ys;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Pc(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Pc(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ub(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kb(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let b=0;if(d!==null){const _=d.array;b=d.version;for(let v=0,x=_.length;v<x;v+=3){const y=_[v+0],M=_[v+1],A=_[v+2];f.push(y,M,M,A,A,y)}}else if(p!==void 0){const _=p.array;b=p.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const y=v+0,M=v+1,A=v+2;f.push(y,M,M,A,A,y)}}else return;const g=new(zu(f)?Wu:Vu)(f,1);g.version=b;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fb(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(f,d,p,b){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],b[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,b,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*b[_];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ob(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zb(r,e,t){const n=new WeakMap,i=new Ze;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),p===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*y*4*u),A=new Bu(M,x,y,u);A.type=Sn,A.needsUpdate=!0;const P=v*4;for(let S=0;S<u;S++){const I=g[S],N=m[S],O=_[S],z=x*y*4*S;for(let j=0;j<I.count;j++){const W=j*P;d===!0&&(i.fromBufferAttribute(I,j),M[z+W+0]=i.x,M[z+W+1]=i.y,M[z+W+2]=i.z,M[z+W+3]=0),p===!0&&(i.fromBufferAttribute(N,j),M[z+W+4]=i.x,M[z+W+5]=i.y,M[z+W+6]=i.z,M[z+W+7]=0),b===!0&&(i.fromBufferAttribute(O,j),M[z+W+8]=i.x,M[z+W+9]=i.y,M[z+W+10]=i.z,M[z+W+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ie(x,y)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<l.length;b++)d+=l[b];const p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Bb(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const pd=new Rt,Mh=new $u(1,1),md=new Bu,gd=new Yf,bd=new qu,Sh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function ks(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sh[i];if(s===void 0&&(s=new Float32Array(i),Sh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fa(r,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function Wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function jb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ah.set(n),r.uniformMatrix2fv(this.addr,!1,Ah),Pt(t,n)}}function Xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Th.set(n),r.uniformMatrix3fv(this.addr,!1,Th),Pt(t,n)}}function qb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Eh.set(n),r.uniformMatrix4fv(this.addr,!1,Eh),Pt(t,n)}}function Kb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function $b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function Zb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function nx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mh.compareFunction=Ou,s=Mh):s=pd,t.setTexture2D(e||s,i)}function ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gd,i)}function sx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bd,i)}function rx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||md,i)}function ax(r){switch(r){case 5126:return Hb;case 35664:return Gb;case 35665:return Vb;case 35666:return Wb;case 35674:return jb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Kb;case 35667:case 35671:return Yb;case 35668:case 35672:return $b;case 35669:case 35673:return Jb;case 5125:return Zb;case 36294:return Qb;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(r,e){r.uniform1fv(this.addr,e)}function cx(r,e){const t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function lx(r,e){const t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function hx(r,e){const t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function ux(r,e){const t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dx(r,e){const t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fx(r,e){const t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function px(r,e){r.uniform1iv(this.addr,e)}function mx(r,e){r.uniform2iv(this.addr,e)}function gx(r,e){r.uniform3iv(this.addr,e)}function bx(r,e){r.uniform4iv(this.addr,e)}function xx(r,e){r.uniform1uiv(this.addr,e)}function vx(r,e){r.uniform2uiv(this.addr,e)}function _x(r,e){r.uniform3uiv(this.addr,e)}function yx(r,e){r.uniform4uiv(this.addr,e)}function Mx(r,e,t){const n=this.cache,i=e.length,s=Fa(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pd,s[a])}function Sx(r,e,t){const n=this.cache,i=e.length,s=Fa(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gd,s[a])}function wx(r,e,t){const n=this.cache,i=e.length,s=Fa(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bd,s[a])}function Ex(r,e,t){const n=this.cache,i=e.length,s=Fa(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||md,s[a])}function Tx(r){switch(r){case 5126:return ox;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return bx;case 5125:return xx;case 36294:return vx;case 36295:return _x;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function Rh(r,e){r.seq.push(e),r.map[e.id]=e}function Px(r,e,t){const n=r.name,i=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),a=wo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rh(t,l===void 0?new Ax(o,r,e):new Rx(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Cx(o),Rh(t,u)),t=u}}}class ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Px(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ch(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ix=37297;let Lx=0;function Dx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ph=new je;function Nx(r){tt._getMatrix(Ph,tt.workingColorSpace,r);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case Ma:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ih(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Dx(r.getShaderSource(e),o)}else return s}function Ux(r,e){const t=Nx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kx(r,e){let t;switch(e){case yu:t="Linear";break;case Mu:t="Reinhard";break;case Su:t="Cineon";break;case wu:t="ACESFilmic";break;case Tu:t="AgX";break;case Fc:t="Neutral";break;case Eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ra=new R;function Fx(){tt.getLuminanceCoefficients(ra);const r=ra.x.toFixed(4),e=ra.y.toFixed(4),t=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function zx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function sr(r){return r!==""}function Lh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace(Hx,Vx)}const Gx=new Map;function Vx(r,e){let t=qe[e];if(t===void 0){const n=Gx.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(r){return r.replace(Wx,jx)}function jx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _s:case ys:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case lf:e="ENVMAP_BLENDING_ADD";break}return e}function $x(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Xx(t),l=qx(t),h=Kx(t),u=Yx(t),f=$x(t),d=Ox(t),p=zx(s),b=i.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(g=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?qe.tonemapping_pars_fragment:"",t.toneMapping!==ui?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ic(a),a=Lh(a,t),a=Dh(a,t),o=Ic(o),o=Lh(o,t),o=Dh(o,t),a=Nh(a),o=Nh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+g+a,x=_+m+o,y=Ch(i,i.VERTEX_SHADER,v),M=Ch(i,i.FRAGMENT_SHADER,x);i.attachShader(b,y),i.attachShader(b,M),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function A(I){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(b)||"",O=i.getShaderInfoLog(y)||"",z=i.getShaderInfoLog(M)||"",j=N.trim(),W=O.trim(),te=z.trim();let G=!0,ue=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,y,M);else{const ve=Ih(i,y,"vertex"),Me=Ih(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+ve+`
`+Me)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(W===""||te==="")&&(ue=!1);ue&&(I.diagnostics={runnable:G,programLog:j,vertexShader:{log:W,prefix:g},fragmentShader:{log:te,prefix:m}})}i.deleteShader(y),i.deleteShader(M),P=new ga(i,b),E=Bx(i,b)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(b,Ix)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=M,this}let Zx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ev(e),t.set(e,n)),n}}class ev{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function tv(r,e,t,n,i,s,a){const o=new Hu,c=new Qx,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,N,O){const z=N.fog,j=O.geometry,W=E.isMeshStandardMaterial?N.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),G=te&&te.mapping===La?te.image.height:null,ue=p[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=ve!==void 0?ve.length:0;let We=0;j.morphAttributes.position!==void 0&&(We=1),j.morphAttributes.normal!==void 0&&(We=2),j.morphAttributes.color!==void 0&&(We=3);let nt,lt,st,q;if(ue){const ot=Pn[ue];nt=ot.vertexShader,lt=ot.fragmentShader}else nt=E.vertexShader,lt=E.fragmentShader,c.update(E),st=c.getVertexShaderID(E),q=c.getFragmentShaderID(E);const ee=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,$e=!!E.map,gt=!!E.matcap,L=!!te,Q=!!E.aoMap,$=!!E.lightMap,Y=!!E.bumpMap,K=!!E.normalMap,de=!!E.displacementMap,se=!!E.emissiveMap,fe=!!E.metalnessMap,Ge=!!E.roughnessMap,He=E.anisotropy>0,C=E.clearcoat>0,w=E.dispersion>0,F=E.iridescence>0,V=E.sheen>0,Z=E.transmission>0,X=He&&!!E.anisotropyMap,Ce=C&&!!E.clearcoatMap,le=C&&!!E.clearcoatNormalMap,Te=C&&!!E.clearcoatRoughnessMap,Ae=F&&!!E.iridescenceMap,re=F&&!!E.iridescenceThicknessMap,xe=V&&!!E.sheenColorMap,Fe=V&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,ge=!!E.specularColorMap,Xe=!!E.specularIntensityMap,D=Z&&!!E.transmissionMap,ce=Z&&!!E.thicknessMap,pe=!!E.gradientMap,Se=!!E.alphaMap,ae=E.alphaTest>0,J=!!E.alphaHash,Re=!!E.extensions;let Ve=ui;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const bt={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:lt,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Kt,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:gt,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:G,aoMap:Q,lightMap:$,bumpMap:Y,normalMap:K,displacementMap:f&&de,emissiveMap:se,normalMapObjectSpace:K&&E.normalMapType===xf,normalMapTangentSpace:K&&E.normalMapType===Fu,metalnessMap:fe,roughnessMap:Ge,anisotropy:He,anisotropyMap:X,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:w,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:V,sheenColorMap:xe,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:ge,specularIntensityMap:Xe,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:ae,alphaHash:J,combine:E.combine,mapUv:$e&&b(E.map.channel),aoMapUv:Q&&b(E.aoMap.channel),lightMapUv:$&&b(E.lightMap.channel),bumpMapUv:Y&&b(E.bumpMap.channel),normalMapUv:K&&b(E.normalMap.channel),displacementMapUv:de&&b(E.displacementMap.channel),emissiveMapUv:se&&b(E.emissiveMap.channel),metalnessMapUv:fe&&b(E.metalnessMap.channel),roughnessMapUv:Ge&&b(E.roughnessMap.channel),anisotropyMapUv:X&&b(E.anisotropyMap.channel),clearcoatMapUv:Ce&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(E.sheenRoughnessMap.channel),specularMapUv:Pe&&b(E.specularMap.channel),specularColorMapUv:ge&&b(E.specularColorMap.channel),specularIntensityMapUv:Xe&&b(E.specularIntensityMap.channel),transmissionMapUv:D&&b(E.transmissionMap.channel),thicknessMapUv:ce&&b(E.thicknessMap.channel),alphaMapUv:Se&&b(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(K||He),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&($e||Se),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:We,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ht,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jt,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(S,E),v(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const S=p[E.type];let I;if(S){const N=Pn[S];I=Fi.clone(N.uniforms)}else I=E.uniforms;return I}function y(E,S){let I;for(let N=0,O=h.length;N<O;N++){const z=h[N];if(z.cacheKey===S){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Jx(r,S,E,s),h.push(I)),I}function M(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:P}}function nv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,p,b,g){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:b,group:g},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=b,m.group=g),e++,m}function o(u,f,d,p,b,g){const m=a(u,f,d,p,b,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,p,b,g){const m=a(u,f,d,p,b,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||iv),n.length>1&&n.sort(f||kh),i.length>1&&i.sort(f||kh)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function sv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fh,r.set(n,[a])):i>=s.length?(a=new Fh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new he};break;case"SpotLight":t={position:new R,direction:new R,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function av(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ov=0;function cv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lv(r){const e=new rv,t=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,s=new ke,a=new ke;function o(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,_=0,v=0,x=0,y=0,M=0,A=0;l.sort(cv);for(let E=0,S=l.length;E<S;E++){const I=l[E],N=I.color,O=I.intensity,z=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*O,u+=N.g*O,f+=N.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);A++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,G=t.get(I);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=I.shadow.matrix,_++}n.directional[d]=W,d++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(O),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[b]=W;const te=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,te.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[b]=te.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=j,x++}b++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const te=I.shadow,G=t.get(I);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=I.shadow.matrix,v++}n.point[p]=W,p++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[m]=W,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==b||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,P.directionalLength=d,P.pointLength=p,P.spotLength=b,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=y,P.numLightProbes=A,n.version=ov++)}function c(l,h){let u=0,f=0,d=0,p=0,b=0;const g=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const v=l[m];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Oh(r){const e=new lv(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function hv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Oh(r),e.set(i,[o])):s>=a.length?(o=new Oh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fv(r,e,t){let n=new Na;const i=new ie,s=new ie,a=new Ze,o=new om({depthPacking:bf}),c=new cm,l={},h=t.maxTextureSize,u={[Jn]:Ft,[Ft]:Jn,[Jt]:Jt},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new at;p.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Qe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let m=this.type;this.render=function(M,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const E=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Yn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==Xn&&this.type===Xn,z=m===Xn&&this.type!==Xn;for(let j=0,W=M.length;j<W;j++){const te=M[j],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ue=G.getFrameExtents();if(i.multiply(ue),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ue.x),i.x=s.x*ue.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ue.y),i.y=s.y*ue.y,G.mapSize.y=s.y)),G.map===null||O===!0||z===!0){const Me=this.type!==Xn?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new dn(i.x,i.y,Me),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ve=G.getViewportCount();for(let Me=0;Me<ve;Me++){const We=G.getViewport(Me);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),N.viewport(a),G.updateMatrices(te,Me),n=G.getFrustum(),x(A,P,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Xn&&_(G,P),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(E,S,I)};function _(M,A){const P=e.update(b);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new dn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,b,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(A,null,P,d,b,null)}function v(M,A,P,E){let S=null;const I=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=S.uuid,O=A.uuid;let z=l[N];z===void 0&&(z={},l[N]=z);let j=z[O];j===void 0&&(j=S.clone(),z[O]=j,A.addEventListener("dispose",y)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Xn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=r.properties.get(S);N.light=P}return S}function x(M,A,P,E,S){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Xn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const O=e.update(M),z=M.material;if(Array.isArray(z)){const j=O.groups;for(let W=0,te=j.length;W<te;W++){const G=j[W],ue=z[G.materialIndex];if(ue&&ue.visible){const ve=v(M,ue,E,S);M.onBeforeShadow(r,M,A,P,O,ve,G),r.renderBufferDirect(P,null,O,ve,M,G),M.onAfterShadow(r,M,A,P,O,ve,G)}}}else if(z.visible){const j=v(M,z,E,S);M.onBeforeShadow(r,M,A,P,O,j,null),r.renderBufferDirect(P,null,O,j,M,null),M.onAfterShadow(r,M,A,P,O,j,null)}}const N=M.children;for(let O=0,z=N.length;O<z;O++)x(N[O],A,P,E,S)}function y(M){M.target.removeEventListener("dispose",y);for(const P in l){const E=l[P],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const pv={[Bo]:Ho,[Go]:jo,[Vo]:Xo,[vs]:Wo,[Ho]:Bo,[jo]:Go,[Xo]:Vo,[Wo]:vs};function mv(r,e){function t(){let D=!1;const ce=new Ze;let pe=null;const Se=new Ze(0,0,0,0);return{setMask:function(ae){pe!==ae&&!D&&(r.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){D=ae},setClear:function(ae,J,Re,Ve,bt){bt===!0&&(ae*=Ve,J*=Ve,Re*=Ve),ce.set(ae,J,Re,Ve),Se.equals(ce)===!1&&(r.clearColor(ae,J,Re,Ve),Se.copy(ce))},reset:function(){D=!1,pe=null,Se.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,pe=null,Se=null,ae=null;return{setReversed:function(J){if(ce!==J){const Re=e.get("EXT_clip_control");J?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=J;const Ve=ae;ae=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(J){J?ee(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(J){pe!==J&&!D&&(r.depthMask(J),pe=J)},setFunc:function(J){if(ce&&(J=pv[J]),Se!==J){switch(J){case Bo:r.depthFunc(r.NEVER);break;case Ho:r.depthFunc(r.ALWAYS);break;case Go:r.depthFunc(r.LESS);break;case vs:r.depthFunc(r.LEQUAL);break;case Vo:r.depthFunc(r.EQUAL);break;case Wo:r.depthFunc(r.GEQUAL);break;case jo:r.depthFunc(r.GREATER);break;case Xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=J}},setLocked:function(J){D=J},setClear:function(J){ae!==J&&(ce&&(J=1-J),r.clearDepth(J),ae=J)},reset:function(){D=!1,pe=null,Se=null,ae=null,ce=!1}}}function i(){let D=!1,ce=null,pe=null,Se=null,ae=null,J=null,Re=null,Ve=null,bt=null;return{setTest:function(ot){D||(ot?ee(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!D&&(r.stencilMask(ot),ce=ot)},setFunc:function(ot,On,An){(pe!==ot||Se!==On||ae!==An)&&(r.stencilFunc(ot,On,An),pe=ot,Se=On,ae=An)},setOp:function(ot,On,An){(J!==ot||Re!==On||Ve!==An)&&(r.stencilOp(ot,On,An),J=ot,Re=On,Ve=An)},setLocked:function(ot){D=ot},setClear:function(ot){bt!==ot&&(r.clearStencil(ot),bt=ot)},reset:function(){D=!1,ce=null,pe=null,Se=null,ae=null,J=null,Re=null,Ve=null,bt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,b=!1,g=null,m=null,_=null,v=null,x=null,y=null,M=null,A=new he(0,0,0),P=0,E=!1,S=null,I=null,N=null,O=null,z=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=te>=2);let ue=null,ve={};const Me=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),nt=new Ze().fromArray(Me),lt=new Ze().fromArray(We);function st(D,ce,pe,Se){const ae=new Uint8Array(4),J=r.createTexture();r.bindTexture(D,J),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<pe;Re++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ce+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return J}const q={};q[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(vs),Y(!1),K(yl),ee(r.CULL_FACE),Q(Yn);function ee(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ie(D,ce){return u[D]!==ce?(r.bindFramebuffer(D,ce),u[D]=ce,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(D,ce){let pe=d,Se=!1;if(D){pe=f.get(ce),pe===void 0&&(pe=[],f.set(ce,pe));const ae=D.textures;if(pe.length!==ae.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Re=ae.length;J<Re;J++)pe[J]=r.COLOR_ATTACHMENT0+J;pe.length=ae.length,Se=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Se=!0);Se&&r.drawBuffers(pe)}function $e(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const gt={[Ri]:r.FUNC_ADD,[Wd]:r.FUNC_SUBTRACT,[jd]:r.FUNC_REVERSE_SUBTRACT};gt[Xd]=r.MIN,gt[qd]=r.MAX;const L={[Kd]:r.ZERO,[Yd]:r.ONE,[$d]:r.SRC_COLOR,[Oo]:r.SRC_ALPHA,[nf]:r.SRC_ALPHA_SATURATE,[ef]:r.DST_COLOR,[Zd]:r.DST_ALPHA,[Jd]:r.ONE_MINUS_SRC_COLOR,[zo]:r.ONE_MINUS_SRC_ALPHA,[tf]:r.ONE_MINUS_DST_COLOR,[Qd]:r.ONE_MINUS_DST_ALPHA,[sf]:r.CONSTANT_COLOR,[rf]:r.ONE_MINUS_CONSTANT_COLOR,[af]:r.CONSTANT_ALPHA,[of]:r.ONE_MINUS_CONSTANT_ALPHA};function Q(D,ce,pe,Se,ae,J,Re,Ve,bt,ot){if(D===Yn){b===!0&&(ye(r.BLEND),b=!1);return}if(b===!1&&(ee(r.BLEND),b=!0),D!==Vd){if(D!==g||ot!==E){if((m!==Ri||x!==Ri)&&(r.blendEquation(r.FUNC_ADD),m=Ri,x=Ri),ot)switch(D){case ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFunc(r.ONE,r.ONE);break;case Ml:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,y=null,M=null,A.set(0,0,0),P=0,g=D,E=ot}return}ae=ae||ce,J=J||pe,Re=Re||Se,(ce!==m||ae!==x)&&(r.blendEquationSeparate(gt[ce],gt[ae]),m=ce,x=ae),(pe!==_||Se!==v||J!==y||Re!==M)&&(r.blendFuncSeparate(L[pe],L[Se],L[J],L[Re]),_=pe,v=Se,y=J,M=Re),(Ve.equals(A)===!1||bt!==P)&&(r.blendColor(Ve.r,Ve.g,Ve.b,bt),A.copy(Ve),P=bt),g=D,E=!1}function $(D,ce){D.side===Jt?ye(r.CULL_FACE):ee(r.CULL_FACE);let pe=D.side===Ft;ce&&(pe=!pe),Y(pe),D.blending===ms&&D.transparent===!1?Q(Yn):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Se=D.stencilWrite;o.setTest(Se),Se&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(D){S!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),S=D)}function K(D){D!==Hd?(ee(r.CULL_FACE),D!==I&&(D===yl?r.cullFace(r.BACK):D===Gd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),I=D}function de(D){D!==N&&(W&&r.lineWidth(D),N=D)}function se(D,ce,pe){D?(ee(r.POLYGON_OFFSET_FILL),(O!==ce||z!==pe)&&(r.polygonOffset(ce,pe),O=ce,z=pe)):ye(r.POLYGON_OFFSET_FILL)}function fe(D){D?ee(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=r.TEXTURE0+j-1),ue!==D&&(r.activeTexture(D),ue=D)}function He(D,ce,pe){pe===void 0&&(ue===null?pe=r.TEXTURE0+j-1:pe=ue);let Se=ve[pe];Se===void 0&&(Se={type:void 0,texture:void 0},ve[pe]=Se),(Se.type!==D||Se.texture!==ce)&&(ue!==pe&&(r.activeTexture(pe),ue=pe),r.bindTexture(D,ce||q[D]),Se.type=D,Se.texture=ce)}function C(){const D=ve[ue];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(D){nt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Fe(D){lt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),lt.copy(D))}function Pe(D,ce){let pe=l.get(ce);pe===void 0&&(pe=new WeakMap,l.set(ce,pe));let Se=pe.get(D);Se===void 0&&(Se=r.getUniformBlockIndex(ce,D.name),pe.set(D,Se))}function ge(D,ce){const Se=l.get(ce).get(D);c.get(ce)!==Se&&(r.uniformBlockBinding(ce,Se,D.__bindingPointIndex),c.set(ce,Se))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ue=null,ve={},u={},f=new WeakMap,d=[],p=null,b=!1,g=null,m=null,_=null,v=null,x=null,y=null,M=null,A=new he(0,0,0),P=0,E=!1,S=null,I=null,N=null,O=null,z=null,nt.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ye,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:$e,setBlending:Q,setMaterial:$,setFlipSided:Y,setCullFace:K,setLineWidth:de,setPolygonOffset:se,setScissorTest:fe,activeTexture:Ge,bindTexture:He,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:F,texImage2D:Ae,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:ge,texStorage2D:le,texStorage3D:Te,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Ce,scissor:xe,viewport:Fe,reset:Xe}}function gv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return d?new OffscreenCanvas(C,w):_r("canvas")}function b(C,w,F){let V=1;const Z=He(C);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(V*Z.width),Ce=Math.floor(V*Z.height);u===void 0&&(u=p(X,Ce));const le=w?p(X,Ce):u;return le.width=X,le.height=Ce,le.getContext("2d").drawImage(C,0,0,X,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Ce+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,w,F,V,Z=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=w;if(w===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),w===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),w===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),w===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),w===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),w===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),w===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),w===r.RGBA){const Ce=Z?Ma:tt.getTransfer(V);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=Ce===ht?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,w){let F;return C?w===null||w===Ui||w===mr?F=r.DEPTH24_STENCIL8:w===Sn?F=r.DEPTH32F_STENCIL8:w===pr&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===mr?F=r.DEPTH_COMPONENT24:w===Sn?F=r.DEPTH_COMPONENT32F:w===pr&&(F=r.DEPTH_COMPONENT16),F}function y(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Dt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function M(C){const w=C.target;w.removeEventListener("dispose",M),P(w),w.isVideoTexture&&h.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),S(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const F=C.source,V=f.get(F);if(V){const Z=V[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(C),Object.keys(V).length===0&&f.delete(F)}n.remove(C)}function E(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const F=C.source,V=f.get(F);delete V[w.__cacheKey],a.memory.textures--}function S(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(w.__webglFramebuffer[V]))for(let Z=0;Z<w.__webglFramebuffer[V].length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[V][Z]);else r.deleteFramebuffer(w.__webglFramebuffer[V]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[V])}else{if(Array.isArray(w.__webglFramebuffer))for(let V=0;V<w.__webglFramebuffer.length;V++)r.deleteFramebuffer(w.__webglFramebuffer[V]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let V=0;V<w.__webglColorRenderbuffer.length;V++)w.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[V]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const F=C.textures;for(let V=0,Z=F.length;V<Z;V++){const X=n.get(F[V]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(C)}let I=0;function N(){I=0}function O(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function j(C,w){const F=n.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const V=C.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,C,w);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+w)}function W(C,w){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){q(F,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+w)}function te(C,w){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){q(F,C,w);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+w)}function G(C,w){const F=n.get(C);if(C.version>0&&F.__version!==C.version){ee(F,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+w)}const ue={[Ni]:r.REPEAT,[hi]:r.CLAMP_TO_EDGE,[_a]:r.MIRRORED_REPEAT},ve={[jt]:r.NEAREST,[Ru]:r.NEAREST_MIPMAP_NEAREST,[nr]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[ua]:r.LINEAR_MIPMAP_NEAREST,[In]:r.LINEAR_MIPMAP_LINEAR},Me={[vf]:r.NEVER,[Ef]:r.ALWAYS,[_f]:r.LESS,[Ou]:r.LEQUAL,[yf]:r.EQUAL,[wf]:r.GEQUAL,[Mf]:r.GREATER,[Sf]:r.NOTEQUAL};function We(C,w){if(w.type===Sn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Dt||w.magFilter===ua||w.magFilter===nr||w.magFilter===In||w.minFilter===Dt||w.minFilter===ua||w.minFilter===nr||w.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ue[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ue[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ue[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ve[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jt||w.minFilter!==nr&&w.minFilter!==In||w.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function nt(C,w){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",M));const V=w.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const X=z(w);if(X!==C.__cacheKey){Z[X]===void 0&&(Z[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[X].usedTimes++;const Ce=Z[C.__cacheKey];Ce!==void 0&&(Z[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(w)),C.__cacheKey=X,C.__webglTexture=Z[X].texture}return F}function lt(C,w,F){return Math.floor(Math.floor(C/F)/w)}function st(C,w,F,V){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,F,V,w.data);else{X.sort((re,xe)=>re.start-xe.start);let Ce=0;for(let re=1;re<X.length;re++){const xe=X[Ce],Fe=X[re],Pe=xe.start+xe.count,ge=lt(Fe.start,w.width,4),Xe=lt(xe.start,w.width,4);Fe.start<=Pe+1&&ge===Xe&&lt(Fe.start+Fe.count-1,w.width,4)===ge?xe.count=Math.max(xe.count,Fe.start+Fe.count-xe.start):(++Ce,X[Ce]=Fe)}X.length=Ce+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),Ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let re=0,xe=X.length;re<xe;re++){const Fe=X[re],Pe=Math.floor(Fe.start/4),ge=Math.ceil(Fe.count/4),Xe=Pe%w.width,D=Math.floor(Pe/w.width),ce=ge,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Xe,D,ce,pe,F,V,w.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function q(C,w,F){let V=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(V=r.TEXTURE_3D);const Z=nt(C,w),X=w.source;t.bindTexture(V,C.__webglTexture,r.TEXTURE0+F);const Ce=n.get(X);if(X.version!==Ce.__version||Z===!0){t.activeTexture(r.TEXTURE0+F);const le=tt.getPrimaries(tt.workingColorSpace),Te=w.colorSpace===ci?null:tt.getPrimaries(w.colorSpace),Ae=w.colorSpace===ci||le===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=b(w.image,!1,i.maxTextureSize);re=Ge(w,re);const xe=s.convert(w.format,w.colorSpace),Fe=s.convert(w.type);let Pe=v(w.internalFormat,xe,Fe,w.colorSpace,w.isVideoTexture);We(V,w);let ge;const Xe=w.mipmaps,D=w.isVideoTexture!==!0,ce=Ce.__version===void 0||Z===!0,pe=X.dataReady,Se=y(w,re);if(w.isDepthTexture)Pe=x(w.format===br,w.type),ce&&(D?t.texStorage2D(r.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,xe,Fe,null));else if(w.isDataTexture)if(Xe.length>0){D&&ce&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,Xe[0].width,Xe[0].height);for(let ae=0,J=Xe.length;ae<J;ae++)ge=Xe[ae],D?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,Fe,ge.data):t.texImage2D(r.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,xe,Fe,ge.data);w.generateMipmaps=!1}else D?(ce&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,re.width,re.height),pe&&st(w,re,xe,Fe)):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,xe,Fe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){D&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Pe,Xe[0].width,Xe[0].height,re.depth);for(let ae=0,J=Xe.length;ae<J;ae++)if(ge=Xe[ae],w.format!==Zt)if(xe!==null)if(D){if(pe)if(w.layerUpdates.size>0){const Re=mh(ge.width,ge.height,w.format,w.type);for(const Ve of w.layerUpdates){const bt=ge.data.subarray(Ve*Re/ge.data.BYTES_PER_ELEMENT,(Ve+1)*Re/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Ve,ge.width,ge.height,1,xe,bt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,re.depth,xe,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Pe,ge.width,ge.height,re.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,re.depth,xe,Fe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Pe,ge.width,ge.height,re.depth,0,xe,Fe,ge.data)}else{D&&ce&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,Xe[0].width,Xe[0].height);for(let ae=0,J=Xe.length;ae<J;ae++)ge=Xe[ae],w.format!==Zt?xe!==null?D?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,Fe,ge.data):t.texImage2D(r.TEXTURE_2D,ae,Pe,ge.width,ge.height,0,xe,Fe,ge.data)}else if(w.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Pe,re.width,re.height,re.depth),pe)if(w.layerUpdates.size>0){const ae=mh(re.width,re.height,w.format,w.type);for(const J of w.layerUpdates){const Re=re.data.subarray(J*ae/re.data.BYTES_PER_ELEMENT,(J+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,xe,Fe,Re)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Fe,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,xe,Fe,re.data);else if(w.isData3DTexture)D?(ce&&t.texStorage3D(r.TEXTURE_3D,Se,Pe,re.width,re.height,re.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Fe,re.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,xe,Fe,re.data);else if(w.isFramebufferTexture){if(ce)if(D)t.texStorage2D(r.TEXTURE_2D,Se,Pe,re.width,re.height);else{let ae=re.width,J=re.height;for(let Re=0;Re<Se;Re++)t.texImage2D(r.TEXTURE_2D,Re,Pe,ae,J,0,xe,Fe,null),ae>>=1,J>>=1}}else if(Xe.length>0){if(D&&ce){const ae=He(Xe[0]);t.texStorage2D(r.TEXTURE_2D,Se,Pe,ae.width,ae.height)}for(let ae=0,J=Xe.length;ae<J;ae++)ge=Xe[ae],D?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,xe,Fe,ge):t.texImage2D(r.TEXTURE_2D,ae,Pe,xe,Fe,ge);w.generateMipmaps=!1}else if(D){if(ce){const ae=He(re);t.texStorage2D(r.TEXTURE_2D,Se,Pe,ae.width,ae.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Fe,re)}else t.texImage2D(r.TEXTURE_2D,0,Pe,xe,Fe,re);g(w)&&m(V),Ce.__version=X.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ee(C,w,F){if(w.image.length!==6)return;const V=nt(C,w),Z=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);const X=n.get(Z);if(Z.version!==X.__version||V===!0){t.activeTexture(r.TEXTURE0+F);const Ce=tt.getPrimaries(tt.workingColorSpace),le=w.colorSpace===ci?null:tt.getPrimaries(w.colorSpace),Te=w.colorSpace===ci||Ce===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!Ae&&!re?xe[J]=b(w.image[J],!0,i.maxCubemapSize):xe[J]=re?w.image[J].image:w.image[J],xe[J]=Ge(w,xe[J]);const Fe=xe[0],Pe=s.convert(w.format,w.colorSpace),ge=s.convert(w.type),Xe=v(w.internalFormat,Pe,ge,w.colorSpace),D=w.isVideoTexture!==!0,ce=X.__version===void 0||V===!0,pe=Z.dataReady;let Se=y(w,Fe);We(r.TEXTURE_CUBE_MAP,w);let ae;if(Ae){D&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Xe,Fe.width,Fe.height);for(let J=0;J<6;J++){ae=xe[J].mipmaps;for(let Re=0;Re<ae.length;Re++){const Ve=ae[Re];w.format!==Zt?Pe!==null?D?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,0,0,Ve.width,Ve.height,Pe,ge,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,Xe,Ve.width,Ve.height,0,Pe,ge,Ve.data)}}}else{if(ae=w.mipmaps,D&&ce){ae.length>0&&Se++;const J=He(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(re){D?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Pe,ge,xe[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,xe[J].width,xe[J].height,0,Pe,ge,xe[J].data);for(let Re=0;Re<ae.length;Re++){const bt=ae[Re].image[J].image;D?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,0,0,bt.width,bt.height,Pe,ge,bt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,Xe,bt.width,bt.height,0,Pe,ge,bt.data)}}else{D?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,ge,xe[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Pe,ge,xe[J]);for(let Re=0;Re<ae.length;Re++){const Ve=ae[Re];D?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,0,0,Pe,ge,Ve.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,Xe,Pe,ge,Ve.image[J])}}}g(w)&&m(r.TEXTURE_CUBE_MAP),X.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ye(C,w,F,V,Z,X){const Ce=s.convert(F.format,F.colorSpace),le=s.convert(F.type),Te=v(F.internalFormat,Ce,le,F.colorSpace),Ae=n.get(w),re=n.get(F);if(re.__renderTarget=w,!Ae.__hasExternalTextures){const xe=Math.max(1,w.width>>X),Fe=Math.max(1,w.height>>X);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Te,xe,Fe,w.depth,0,Ce,le,null):t.texImage2D(Z,X,Te,xe,Fe,0,Ce,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),se(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,Z,re.__webglTexture,0,de(w)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,Z,re.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(C,w,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer){const V=w.depthTexture,Z=V&&V.isDepthTexture?V.type:null,X=x(w.stencilBuffer,Z),Ce=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=de(w);se(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,X,w.width,w.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,X,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,X,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,C)}else{const V=w.textures;for(let Z=0;Z<V.length;Z++){const X=V[Z],Ce=s.convert(X.format,X.colorSpace),le=s.convert(X.type),Te=v(X.internalFormat,Ce,le,X.colorSpace),Ae=de(w);F&&se(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,Te,w.width,w.height):se(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,Te,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Te,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(w.depthTexture);V.__renderTarget=w,(!V.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const Z=V.__webglTexture,X=de(w);if(w.depthTexture.format===gr)se(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(w.depthTexture.format===br)se(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function $e(C){const w=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),V){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=V}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=C.texture.mipmaps;V&&V.length>0?Ee(w.__webglFramebuffer[0],C):Ee(w.__webglFramebuffer,C)}else if(F){w.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[V]),w.__webglDepthbuffer[V]===void 0)w.__webglDepthbuffer[V]=r.createRenderbuffer(),Ie(w.__webglDepthbuffer[V],C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ie(w.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(C,w,F){const V=n.get(C);w!==void 0&&ye(V.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&$e(C)}function L(C){const w=C.texture,F=n.get(C),V=n.get(w);C.addEventListener("dispose",A);const Z=C.textures,X=C.isWebGLCubeRenderTarget===!0,Ce=Z.length>1;if(Ce||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=w.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Te=0;Te<w.mipmaps.length;Te++)F.__webglFramebuffer[le][Te]=r.createFramebuffer()}else F.__webglFramebuffer[le]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)F.__webglFramebuffer[le]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let le=0,Te=Z.length;le<Te;le++){const Ae=n.get(Z[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Te=Z[le];F.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ae=s.convert(Te.format,Te.colorSpace),re=s.convert(Te.type),xe=v(Te.internalFormat,Ae,re,Te.colorSpace,C.isXRRenderTarget===!0),Fe=de(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,xe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,F.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),We(r.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ye(F.__webglFramebuffer[le][Te],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else ye(F.__webglFramebuffer[le],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,Te=Z.length;le<Te;le++){const Ae=Z[le],re=n.get(Ae);let xe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,re.__webglTexture),We(xe,Ae),ye(F.__webglFramebuffer,C,Ae,r.COLOR_ATTACHMENT0+le,xe,0),g(Ae)&&m(xe)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,V.__webglTexture),We(le,w),w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ye(F.__webglFramebuffer[Te],C,w,r.COLOR_ATTACHMENT0,le,Te);else ye(F.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,le,0);g(w)&&m(le),t.unbindTexture()}C.depthBuffer&&$e(C)}function Q(C){const w=C.textures;for(let F=0,V=w.length;F<V;F++){const Z=w[F];if(g(Z)){const X=_(C),Ce=n.get(Z).__webglTexture;t.bindTexture(X,Ce),m(X),t.unbindTexture()}}}const $=[],Y=[];function K(C){if(C.samples>0){if(se(C)===!1){const w=C.textures,F=C.width,V=C.height;let Z=r.COLOR_BUFFER_BIT;const X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(C),le=w.length>1;if(le)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const re=n.get(w[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,F,V,0,0,F,V,Z,r.NEAREST),c===!0&&($.length=0,Y.length=0,$.push(r.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&($.push(X),Y.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Y)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const re=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function de(C){return Math.min(i.maxSamples,C.samples)}function se(C){const w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fe(C){const w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Ge(C,w){const F=C.colorSpace,V=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Kt&&F!==ci&&(tt.getTransfer(F)===ht?(V!==Zt||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function He(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=gt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=se}function bv(r,e){function t(n,i=ci){let s;const a=tt.getTransfer(i);if(n===Nn)return r.UNSIGNED_BYTE;if(n===zc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return r.BYTE;if(n===Pu)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===Oc)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Sn)return r.FLOAT;if(n===wn)return r.HALF_FLOAT;if(n===Du)return r.ALPHA;if(n===Nu)return r.RGB;if(n===Zt)return r.RGBA;if(n===gr)return r.DEPTH_COMPONENT;if(n===br)return r.DEPTH_STENCIL;if(n===Da)return r.RED;if(n===Hc)return r.RED_INTEGER;if(n===Uu)return r.RG;if(n===Gc)return r.RG_INTEGER;if(n===Vc)return r.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===$o||n===Jo||n===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qo||n===ec)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===bc||n===xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gc)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===_c||n===yc||n===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`;class _v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nt({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends Bi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const b=typeof XRWebGLBinding<"u",g=new _v,m={},_=t.getContextAttributes();let v=null,x=null;const y=[],M=[],A=new ie;let P=null;const E=new Wt;E.viewport=new Ze;const S=new Wt;S.viewport=new Ze;const I=[E,S],N=new Rm;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=y[q];return ee===void 0&&(ee=new oo,y[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=y[q];return ee===void 0&&(ee=new oo,y[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=y[q];return ee===void 0&&(ee=new oo,y[q]=ee),ee.getHandSpace()};function j(q){const ee=M.indexOf(q.inputSource);if(ee===-1)return;const ye=y[ee];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",te);for(let q=0;q<y.length;q++){const ee=M[q];ee!==null&&(M[q]=null,y[q].disconnect(ee))}O=null,z=null,g.reset();for(const q in m)delete m[q];e.setRenderTarget(v),d=null,f=null,u=null,i=null,x=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",W),i.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?br:gr,Ie=_.stencil?mr:Ui);const $e={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer($e),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new dn(f.textureWidth,f.textureHeight,{format:Zt,type:Nn,depthTexture:new $u(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new dn(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(q){for(let ee=0;ee<q.removed.length;ee++){const ye=q.removed[ee],Ie=M.indexOf(ye);Ie>=0&&(M[Ie]=null,y[Ie].disconnect(ye))}for(let ee=0;ee<q.added.length;ee++){const ye=q.added[ee];let Ie=M.indexOf(ye);if(Ie===-1){for(let $e=0;$e<y.length;$e++)if($e>=M.length){M.push(ye),Ie=$e;break}else if(M[$e]===null){M[$e]=ye,Ie=$e;break}if(Ie===-1)break}const Ee=y[Ie];Ee&&Ee.connect(ye)}}const G=new R,ue=new R;function ve(q,ee,ye){G.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const Ie=G.distanceTo(ue),Ee=ee.projectionMatrix.elements,$e=ye.projectionMatrix.elements,gt=Ee[14]/(Ee[10]-1),L=Ee[14]/(Ee[10]+1),Q=(Ee[9]+1)/Ee[5],$=(Ee[9]-1)/Ee[5],Y=(Ee[8]-1)/Ee[0],K=($e[8]+1)/$e[0],de=gt*Y,se=gt*K,fe=Ie/(-Y+K),Ge=fe*-Y;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ge),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const He=gt+fe,C=L+fe,w=de-Ge,F=se+(Ie-Ge),V=Q*L/C*He,Z=$*L/C*He;q.projectionMatrix.makePerspective(w,F,V,Z,He,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Me(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,ye=q.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),N.near=S.near=E.near=ee,N.far=S.far=E.far=ye,(O!==N.near||z!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,z=N.far),N.layers.mask=q.layers.mask|6,E.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const Ie=q.parent,Ee=N.cameras;Me(N,Ie);for(let $e=0;$e<Ee.length;$e++)Me(Ee[$e],Ie);Ee.length===2?ve(N,E,S):N.projectionMatrix.copy(E.projectionMatrix),We(q,N,Ie)};function We(q,ee,ye){ye===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(q){return m[q]};let nt=null;function lt(q,ee){if(h=ee.getViewerPose(l||a),p=ee,h!==null){const ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ie=!1;ye.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let L=0;L<ye.length;L++){const Q=ye[L];let $=null;if(d!==null)$=d.getViewport(Q);else{const K=u.getViewSubImage(f,Q);$=K.viewport,L===0&&(e.setRenderTargetTextures(x,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(x))}let Y=I[L];Y===void 0&&(Y=new Wt,Y.layers.enable(L),Y.viewport=new Ze,I[L]=Y),Y.matrix.fromArray(Q.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set($.x,$.y,$.width,$.height),L===0&&(N.matrix.copy(Y.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(Y)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();const L=u.getDepthInformation(ye[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<ye.length;L++){const Q=ye[L].camera;if(Q){let $=m[Q];$||($=new Ju,m[Q]=$);const Y=u.getCameraImage(Q);$.sourceTexture=Y}}}}for(let ye=0;ye<y.length;ye++){const Ie=M[ye],Ee=y[ye];Ie!==null&&Ee!==void 0&&Ee.update(Ie,ee,l||a)}nt&&nt(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const st=new fd;st.setAnimationLoop(lt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const Mi=new Un,Mv=new ke;function Sv(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ju(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ft&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ft&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),v=_.envMap,x=_.envMapRotation;v&&(g.envMap.value=v,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(Mi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=i[_.id];x===void 0&&(p(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",g));const y=v.program;n.updateUBOMapping(_,y);const M=e.render.frame;s[_.id]!==M&&(f(_),s[_.id]=M)}function h(_){const v=u();_.__bindingPointIndex=v;const x=r.createBuffer(),y=_.__size,M=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,y,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=i[_.id],x=_.uniforms,y=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,A=x.length;M<A;M++){const P=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,S=P.length;E<S;E++){const I=P[E];if(d(I,M,E,y)===!0){const N=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let j=0;j<O.length;j++){const W=O[j],te=b(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+z,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,z),z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,v,x,y){const M=_.value,A=v+"_"+x;if(y[A]===void 0)return typeof M=="number"||typeof M=="boolean"?y[A]=M:y[A]=M.clone(),!0;{const P=y[A];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return y[A]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function p(_){const v=_.uniforms;let x=0;const y=16;for(let A=0,P=v.length;A<P;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,I=E.length;S<I;S++){const N=E[S],O=Array.isArray(N.value)?N.value:[N.value];for(let z=0,j=O.length;z<j;z++){const W=O[z],te=b(W),G=x%y,ue=G%te.boundary,ve=G+ue;x+=ue,ve!==0&&y-ve<te.storage&&(x+=y-ve),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=te.storage}}}const M=x%y;return M>0&&(x+=y-M),_.__size=x,_.__cache={},this}function b(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Ev{constructor(e={}){const{canvas:t=Gf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),b=new Int32Array(4);let g=null,m=null;const _=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Tt;let M=0,A=0,P=null,E=-1,S=null;const I=new Ze,N=new Ze;let O=null;const z=new he(0);let j=0,W=t.width,te=t.height,G=1,ue=null,ve=null;const Me=new Ze(0,0,W,te),We=new Ze(0,0,W,te);let nt=!1;const lt=new Na;let st=!1,q=!1;const ee=new ke,ye=new R,Ie=new Ze,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function gt(){return P===null?G:1}let L=n;function Q(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const U="webgl2";if(L=Q(U,T),L===null)throw Q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,Y,K,de,se,fe,Ge,He,C,w,F,V,Z,X,Ce,le,Te,Ae,re,xe,Fe,Pe,ge,Xe;function D(){$=new Ub(L),$.init(),Pe=new bv(L,$),Y=new Rb(L,$,e,Pe),K=new mv(L,$),Y.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),de=new Ob(L),se=new nv,fe=new gv(L,$,K,se,Y,Pe,de),Ge=new Pb(x),He=new Nb(x),C=new Wm(L),ge=new Tb(L,C),w=new kb(L,C,de,ge),F=new Bb(L,w,C,de),re=new zb(L,Y,fe),le=new Cb(se),V=new tv(x,Ge,He,$,Y,ge,le),Z=new Sv(x,se),X=new sv,Ce=new hv($),Ae=new Eb(x,Ge,He,K,F,d,c),Te=new fv(x,F,Y),Xe=new wv(L,de,Y,K),xe=new Ab(L,$,de),Fe=new Fb(L,$,de),de.programs=V.programs,x.capabilities=Y,x.extensions=$,x.properties=se,x.renderLists=X,x.shadowMap=Te,x.state=K,x.info=de}D();const ce=new yv(x,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(W,te,!1))},this.getSize=function(T){return T.set(W,te)},this.setSize=function(T,U,B=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,te=U,t.width=Math.floor(T*G),t.height=Math.floor(U*G),B===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*G,te*G).floor()},this.setDrawingBufferSize=function(T,U,B){W=T,te=U,G=B,t.width=Math.floor(T*B),t.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,U,B,H){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,U,B,H),K.viewport(I.copy(Me).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,U,B,H){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,U,B,H),K.scissor(N.copy(We).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){K.setScissorTest(nt=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,B=!0){let H=0;if(T){let k=!1;if(P!==null){const oe=P.texture.format;k=oe===Vc||oe===Gc||oe===Hc}if(k){const oe=P.texture.type,be=oe===Nn||oe===Ui||oe===pr||oe===mr||oe===zc||oe===Bc,we=Ae.getClearColor(),_e=Ae.getClearAlpha(),Ue=we.r,Be=we.g,De=we.b;be?(p[0]=Ue,p[1]=Be,p[2]=De,p[3]=_e,L.clearBufferuiv(L.COLOR,0,p)):(b[0]=Ue,b[1]=Be,b[2]=De,b[3]=_e,L.clearBufferiv(L.COLOR,0,b))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),B&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),X.dispose(),Ce.dispose(),se.dispose(),Ge.dispose(),He.dispose(),F.dispose(),ge.dispose(),Xe.dispose(),V.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",An),ce.removeEventListener("sessionend",ml),mi.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=de.autoReset,U=Te.enabled,B=Te.autoUpdate,H=Te.needsUpdate,k=Te.type;D(),de.autoReset=T,Te.enabled=U,Te.autoUpdate=B,Te.needsUpdate=H,Te.type=k}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){const U=T.target;U.removeEventListener("dispose",J),Re(U)}function Re(T){Ve(T),se.remove(T)}function Ve(T){const U=se.get(T).programs;U!==void 0&&(U.forEach(function(B){V.releaseProgram(B)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,H,k,oe){U===null&&(U=Ee);const be=k.isMesh&&k.matrixWorld.determinant()<0,we=Ud(T,U,B,H,k);K.setMaterial(H,be);let _e=B.index,Ue=1;if(H.wireframe===!0){if(_e=w.getWireframeAttribute(B),_e===void 0)return;Ue=2}const Be=B.drawRange,De=B.attributes.position;let Je=Be.start*Ue,ft=(Be.start+Be.count)*Ue;oe!==null&&(Je=Math.max(Je,oe.start*Ue),ft=Math.min(ft,(oe.start+oe.count)*Ue)),_e!==null?(Je=Math.max(Je,0),ft=Math.min(ft,_e.count)):De!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,De.count));const wt=ft-Je;if(wt<0||wt===1/0)return;ge.setup(k,H,we,B,_e);let vt,mt=xe;if(_e!==null&&(vt=C.get(_e),mt=Fe,mt.setIndex(vt)),k.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*gt()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(k.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*gt()),k.isLineSegments?mt.setMode(L.LINES):k.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else k.isPoints?mt.setMode(L.POINTS):k.isSprite&&mt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,_t=k._multiDrawCounts,rt=k._multiDrawCount,tn=_e?C.get(_e).bytesPerElement:1,Gi=se.get(H).currentProgram.getUniforms();for(let nn=0;nn<rt;nn++)Gi.setValue(L,"_gl_DrawID",nn),mt.render(Ne[nn]/tn,_t[nn])}else if(k.isInstancedMesh)mt.renderInstances(Je,wt,k.count);else if(B.isInstancedBufferGeometry){const Ne=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,Ne);mt.renderInstances(Je,wt,_t)}else mt.render(Je,wt)};function bt(T,U,B){T.transparent===!0&&T.side===Jt&&T.forceSinglePass===!1?(T.side=Ft,T.needsUpdate=!0,Cr(T,U,B),T.side=Jn,T.needsUpdate=!0,Cr(T,U,B),T.side=Jt):Cr(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),m=Ce.get(B),m.init(U),v.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==B&&T.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const H=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let be=0;be<oe.length;be++){const we=oe[be];bt(we,B,k),H.add(we)}else bt(oe,B,k),H.add(oe)}),m=v.pop(),H},this.compileAsync=function(T,U,B=null){const H=this.compile(T,U,B);return new Promise(k=>{function oe(){if(H.forEach(function(be){se.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){k(T);return}setTimeout(oe,10)}$.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ot=null;function On(T){ot&&ot(T)}function An(){mi.stop()}function ml(){mi.start()}const mi=new fd;mi.setAnimationLoop(On),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(T){ot=T,ce.setAnimationLoop(T),T===null?mi.stop():mi.start()},ce.addEventListener("sessionstart",An),ce.addEventListener("sessionend",ml),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,P),m=Ce.get(T,v.length),m.init(U),v.push(m),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(ee,Ln,U.reversedDepth),q=this.localClippingEnabled,st=le.init(this.clippingPlanes,q),g=X.get(T,_.length),g.init(),_.push(g),ce.enabled===!0&&ce.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Oa(oe,U,-1/0,x.sortObjects)}Oa(T,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ue,ve),$e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$e&&Ae.addToRenderList(g,T),this.info.render.frame++,st===!0&&le.beginShadows();const B=m.state.shadowsArray;Te.render(B,T,U),st===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,k=g.transmissive;if(m.setupLights(),U.isArrayCamera){const oe=U.cameras;if(k.length>0)for(let be=0,we=oe.length;be<we;be++){const _e=oe[be];bl(H,k,T,_e)}$e&&Ae.render(T);for(let be=0,we=oe.length;be<we;be++){const _e=oe[be];gl(g,T,_e,_e.viewport)}}else k.length>0&&bl(H,k,T,U),$e&&Ae.render(T),gl(g,T,U);P!==null&&A===0&&(fe.updateMultisampleRenderTarget(P),fe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,U),ge.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],st===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Oa(T,U,B,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||lt.intersectsSprite(T)){H&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const be=F.update(T),we=T.material;we.visible&&g.push(T,be,we,B,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||lt.intersectsObject(T))){const be=F.update(T),we=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ie.copy(be.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ee)),Array.isArray(we)){const _e=be.groups;for(let Ue=0,Be=_e.length;Ue<Be;Ue++){const De=_e[Ue],Je=we[De.materialIndex];Je&&Je.visible&&g.push(T,be,Je,B,Ie.z,De)}}else we.visible&&g.push(T,be,we,B,Ie.z,null)}}const oe=T.children;for(let be=0,we=oe.length;be<we;be++)Oa(oe[be],U,B,H)}function gl(T,U,B,H){const k=T.opaque,oe=T.transmissive,be=T.transparent;m.setupLightsView(B),st===!0&&le.setGlobalState(x.clippingPlanes,B),H&&K.viewport(I.copy(H)),k.length>0&&Rr(k,U,B),oe.length>0&&Rr(oe,U,B),be.length>0&&Rr(be,U,B),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function bl(T,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new dn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?wn:Nn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=m.state.transmissionRenderTarget[H.id],be=H.viewport||I;oe.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),_e=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(z),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Ae.render(B);const Be=x.toneMapping;x.toneMapping=ui;const De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),st===!0&&le.setGlobalState(x.clippingPlanes,H),Rr(T,B,H),fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ft=0,wt=U.length;ft<wt;ft++){const vt=U[ft],mt=vt.object,Ne=vt.geometry,_t=vt.material,rt=vt.group;if(_t.side===Jt&&mt.layers.test(H.layers)){const tn=_t.side;_t.side=Ft,_t.needsUpdate=!0,xl(mt,B,H,Ne,_t,rt),_t.side=tn,_t.needsUpdate=!0,Je=!0}}Je===!0&&(fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe))}x.setRenderTarget(we,_e,Ue),x.setClearColor(z,j),De!==void 0&&(H.viewport=De),x.toneMapping=Be}function Rr(T,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,oe=T.length;k<oe;k++){const be=T[k],we=be.object,_e=be.geometry,Ue=be.group;let Be=be.material;Be.allowOverride===!0&&H!==null&&(Be=H),we.layers.test(B.layers)&&xl(we,U,B,_e,Be,Ue)}}function xl(T,U,B,H,k,oe){T.onBeforeRender(x,U,B,H,k,oe),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,U,B,H,T,oe),k.transparent===!0&&k.side===Jt&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,x.renderBufferDirect(B,U,H,k,T,oe),k.side=Jn,k.needsUpdate=!0,x.renderBufferDirect(B,U,H,k,T,oe),k.side=Jt):x.renderBufferDirect(B,U,H,k,T,oe),T.onAfterRender(x,U,B,H,k,oe)}function Cr(T,U,B){U.isScene!==!0&&(U=Ee);const H=se.get(T),k=m.state.lights,oe=m.state.shadowsArray,be=k.state.version,we=V.getParameters(T,k.state,oe,U,B),_e=V.getProgramCacheKey(we);let Ue=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?He:Ge).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",J),Ue=new Map,H.programs=Ue);let Be=Ue.get(_e);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===be)return _l(T,we),Be}else we.uniforms=V.getUniforms(T),T.onBeforeCompile(we,x),Be=V.acquireProgram(we,_e),Ue.set(_e,Be),H.uniforms=we.uniforms;const De=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=le.uniform),_l(T,we),H.needsLights=Fd(T),H.lightsStateVersion=be,H.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function vl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ga.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function _l(T,U){const B=se.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ud(T,U,B,H,k){U.isScene!==!0&&(U=Ee),fe.resetTextureUnits();const oe=U.fog,be=H.isMeshStandardMaterial?U.environment:null,we=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt,_e=(H.isMeshStandardMaterial?He:Ge).get(H.envMap||be),Ue=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,ft=!!B.morphAttributes.color;let wt=ui;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(wt=x.toneMapping);const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=vt!==void 0?vt.length:0,Ne=se.get(H),_t=m.state.lights;if(st===!0&&(q===!0||T!==S)){const Ot=T===S&&H.id===E;le.setState(H,T,Ot)}let rt=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_t.state.version||Ne.outputColorSpace!==we||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==_e||H.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==le.numPlanes||Ne.numIntersection!==le.numIntersection)||Ne.vertexAlphas!==Ue||Ne.vertexTangents!==Be||Ne.morphTargets!==De||Ne.morphNormals!==Je||Ne.morphColors!==ft||Ne.toneMapping!==wt||Ne.morphTargetsCount!==mt)&&(rt=!0):(rt=!0,Ne.__version=H.version);let tn=Ne.currentProgram;rt===!0&&(tn=Cr(H,U,k));let Gi=!1,nn=!1,Hs=!1;const yt=tn.getUniforms(),an=Ne.uniforms;if(K.useProgram(tn.program)&&(Gi=!0,nn=!0,Hs=!0),H.id!==E&&(E=H.id,nn=!0),Gi||S!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",T.projectionMatrix),yt.setValue(L,"viewMatrix",T.matrixWorldInverse);const Yt=yt.map.cameraPosition;Yt!==void 0&&Yt.setValue(L,ye.setFromMatrixPosition(T.matrixWorld)),Y.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,nn=!0,Hs=!0)}if(k.isSkinnedMesh){yt.setOptional(L,k,"bindMatrix"),yt.setOptional(L,k,"bindMatrixInverse");const Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),yt.setValue(L,"boneTexture",Ot.boneTexture,fe))}k.isBatchedMesh&&(yt.setOptional(L,k,"batchingTexture"),yt.setValue(L,"batchingTexture",k._matricesTexture,fe),yt.setOptional(L,k,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",k._indirectTexture,fe),yt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",k._colorsTexture,fe));const on=B.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&re.update(k,B,tn),(nn||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,yt.setValue(L,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=_e,an.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),nn&&(yt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&kd(an,Hs),oe&&H.fog===!0&&Z.refreshFogUniforms(an,oe),Z.refreshMaterialUniforms(an,H,G,te,m.state.transmissionRenderTarget[T.id]),ga.upload(L,vl(Ne),an,fe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ga.upload(L,vl(Ne),an,fe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(L,"center",k.center),yt.setValue(L,"modelViewMatrix",k.modelViewMatrix),yt.setValue(L,"normalMatrix",k.normalMatrix),yt.setValue(L,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ot=H.uniformsGroups;for(let Yt=0,za=Ot.length;Yt<za;Yt++){const gi=Ot[Yt];Xe.update(gi,tn),Xe.bind(gi,tn)}}return tn}function kd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Fd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,U,B){const H=se.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),se.get(T.texture).__webglTexture=U,se.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const B=se.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Od=L.createFramebuffer();this.setRenderTarget=function(T,U=0,B=0){P=T,M=U,A=B;let H=!0,k=null,oe=!1,be=!1;if(T){const _e=se.get(T);if(_e.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(_e.__hasExternalTextures)fe.rebindTextures(T,se.get(T.texture).__webglTexture,se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&se.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);const Be=se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?k=Be[U][B]:k=Be[U],oe=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?k=se.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[B]:k=Be,I.copy(T.viewport),N.copy(T.scissor),O=T.scissorTest}else I.copy(Me).multiplyScalar(G).floor(),N.copy(We).multiplyScalar(G).floor(),O=nt;if(B!==0&&(k=Od),K.bindFramebuffer(L.FRAMEBUFFER,k)&&H&&K.drawBuffers(T,k),K.viewport(I),K.scissor(N),K.setScissorTest(O),oe){const _e=se.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,B)}else if(be){const _e=U;for(let Ue=0;Ue<T.textures.length;Ue++){const Be=se.get(T.textures[Ue]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,B,_e)}}else if(T!==null&&B!==0){const _e=se.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(T,U,B,H,k,oe,be,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(_e=_e[be]),_e){K.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Ue=T.textures[we],Be=Ue.format,De=Ue.type;if(!Y.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&B>=0&&B<=T.height-k&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,B,H,k,Pe.convert(Be),Pe.convert(De),oe))}finally{const Ue=P!==null?se.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,H,k,oe,be,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(_e=_e[be]),_e)if(U>=0&&U<=T.width-H&&B>=0&&B<=T.height-k){K.bindFramebuffer(L.FRAMEBUFFER,_e);const Ue=T.textures[we],Be=Ue.format,De=Ue.type;if(!Y.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,B,H,k,Pe.convert(Be),Pe.convert(De),0);const ft=P!==null?se.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,ft);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vf(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Je),L.deleteSync(wt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,B=0){const H=Math.pow(2,-B),k=Math.floor(T.image.width*H),oe=Math.floor(T.image.height*H),be=U!==null?U.x:0,we=U!==null?U.y:0;fe.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,be,we,k,oe),K.unbindTexture()};const zd=L.createFramebuffer(),Bd=L.createFramebuffer();this.copyTextureToTexture=function(T,U,B=null,H=null,k=0,oe=null){oe===null&&(k!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let be,we,_e,Ue,Be,De,Je,ft,wt;const vt=T.isCompressedTexture?T.mipmaps[oe]:T.image;if(B!==null)be=B.max.x-B.min.x,we=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,Be=B.min.y,De=B.isBox3?B.min.z:0;else{const on=Math.pow(2,-k);be=Math.floor(vt.width*on),we=Math.floor(vt.height*on),T.isDataArrayTexture?_e=vt.depth:T.isData3DTexture?_e=Math.floor(vt.depth*on):_e=1,Ue=0,Be=0,De=0}H!==null?(Je=H.x,ft=H.y,wt=H.z):(Je=0,ft=0,wt=0);const mt=Pe.convert(U.format),Ne=Pe.convert(U.type);let _t;U.isData3DTexture?(fe.setTexture3D(U,0),_t=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(fe.setTexture2DArray(U,0),_t=L.TEXTURE_2D_ARRAY):(fe.setTexture2D(U,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gi=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),Hs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const yt=T.isDataArrayTexture||T.isData3DTexture,an=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const on=se.get(T),Ot=se.get(U),Yt=se.get(on.__renderTarget),za=se.get(Ot.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,Yt.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,za.__webglFramebuffer);for(let gi=0;gi<_e;gi++)yt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,se.get(T).__webglTexture,k,De+gi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,se.get(U).__webglTexture,oe,wt+gi)),L.blitFramebuffer(Ue,Be,be,we,Je,ft,be,we,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||se.has(T)){const on=se.get(T),Ot=se.get(U);K.bindFramebuffer(L.READ_FRAMEBUFFER,zd),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bd);for(let Yt=0;Yt<_e;Yt++)yt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,k,De+Yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,k),an?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,oe,wt+Yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,oe),k!==0?L.blitFramebuffer(Ue,Be,be,we,Je,ft,be,we,L.COLOR_BUFFER_BIT,L.NEAREST):an?L.copyTexSubImage3D(_t,oe,Je,ft,wt+Yt,Ue,Be,be,we):L.copyTexSubImage2D(_t,oe,Je,ft,Ue,Be,be,we);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else an?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(_t,oe,Je,ft,wt,be,we,_e,mt,Ne,vt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,oe,Je,ft,wt,be,we,_e,mt,vt.data):L.texSubImage3D(_t,oe,Je,ft,wt,be,we,_e,mt,Ne,vt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,oe,Je,ft,be,we,mt,Ne,vt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,oe,Je,ft,vt.width,vt.height,mt,vt.data):L.texSubImage2D(L.TEXTURE_2D,oe,Je,ft,be,we,mt,Ne,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Hs),oe===0&&U.generateMipmaps&&L.generateMipmap(_t),K.unbindTexture()},this.initRenderTarget=function(T){se.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){M=0,A=0,P=null,K.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Gt=[{id:"first-light",season:"spring",title:"A valley worth saving",operation:"FIRST LIGHT",place:"Kawabe foothills",x:-143,z:4,y:10,hour:7.7,color:"#d9e7b1",briefing:"The valley went silent three days ago. Now the Black Meridian occupies its homes. Two civilian engineers and a missing commando are alive inside the old supply depot. Bring them home. Find out why Meridian came.",radio:"Wren, this is Atlas. You are above the cloud line. Three rooftop sentries control the courtyard. Take the high ground away from them, then bring our people home.",discovery:"The transfer orders mention four seasonal relay sites — and a weapon called HELIOS. This was never an occupation. The valley is a testing ground.",ending:"The engineers are safe. Voss gives you a torn map of the eastern relay. Summer brings the next opening.",civilians:["Rin · radio engineer","Hana · field medic"],ally:"Voss · missing commando",boss:{name:"VARG",title:"Depot warden",weapon:"rifle",health:640,armor:.55,color:"#dfad75",windup:1.25,cooldown:3.4,shots:4,damage:12,range:120,callout:"The warden is in the courtyard. His armor opens after each burst. Aim for the helmet or strike while he cools down."}},{id:"silent-current",season:"summer",title:"Under a burning sky",operation:"SILENT CURRENT",place:"Takamori relay",x:151,z:-80,y:24,hour:16.4,color:"#aee3cb",briefing:"A stolen river transmitter is sending targeting data out of Hoshi Valley. Rail Marshal Mara carries its command codes aboard an armed shuttle crossing the southern viaduct. Neutralize her and her escorts, free the prisoners near Takamori, and recover the relay dossier and HELIOS prototype.",radio:"Atlas to Wren. The eastern relay is active. More patrols this time. A quiet approach will keep the prisoners out of the crossfire.",discovery:"The relay logs reveal a buyer — and an evacuation order that leaves every civilian behind. The autumn archive holds the launch codes.",ending:"Mara's escort is gone. The relay falls silent. Your rescued team uses her command codes to trace an archive convoy heading north, toward the red forest.",civilians:["Yuna · resistance scout","Mei · communications officer"],ally:"Hale · recon commando",boss:{name:"MARA",title:"Rail marshal",weapon:"sniper",health:700,armor:.6,color:"#d8988d",windup:1.65,cooldown:3.8,shots:1,damage:42,range:210,train:!0,callout:"Mara commands the armored shuttle on the southern railway. Follow the convoy signal. When her targeting line turns red, move out of her sightline."},train:{escorts:3,speed:7,title:"MERIDIAN ARMORED SHUTTLE"}},{id:"red-leaves",season:"autumn",title:"What the forest remembers",operation:"RED LEAVES",place:"Northern archive",x:-108,z:-119,y:14,hour:17,color:"#efbb7f",briefing:"Meridian hid its records beneath the autumn canopy. The archive holds names, launch codes, and proof of what happened here. Rescue the witnesses and recover the records before the valley freezes.",radio:"The forest is beautiful from up here, Wren. Keep it that way. Watch the archive roof; their marksmen can see the entire approach.",discovery:"HELIOS is ready. A final command post above the shrine can erase every trace of the occupation. We have one winter window to stop it.",ending:"The witnesses are aboard. The launch codes are yours. One final flight, into the snow.",civilians:["Aya · archive keeper","Sora · mountain guide"],ally:"Reed · signals commando",boss:{name:"KOBRA",title:"Blade captain",weapon:"sword",health:760,armor:.65,color:"#d6ab72",windup:.95,cooldown:2.8,shots:3,damage:16,range:95,callout:"Kobra leads the archive guard. He rushes anyone on the ground and throws blades at low-flying targets. Keep moving during his wind-up."}},{id:"white-horizon",season:"winter",title:"Leave no one behind",operation:"WHITE HORIZON",place:"Helios command post",x:135,z:-174,y:30,hour:9,color:"#c6d9f3",briefing:"Snow has closed the roads. Your kite is the last way in. Free the remaining prisoners, seize the command dossier, and extract the HELIOS core. This valley has waited long enough for its spring.",radio:"All callsigns, final operation. Wren is inbound above the ridge. Bring everyone home. That is the mission.",discovery:"Launch authorization revoked. The HELIOS network is dark. All that remains is getting your people out.",ending:"The last kite rises over Hoshi Valley. Below, the prison gates stand open. When the snow melts, the people will plant again. And this time, the sky belongs to them.",civilians:["Nari · valley doctor","Emi · resistance leader"],ally:"Stone · squad commander",boss:{name:"AEGIS",title:"HELIOS director",weapon:"laser",health:960,armor:.5,color:"#8de4db",windup:1.7,cooldown:3.6,shots:2,damage:30,range:165,callout:"Aegis carries a live HELIOS emitter. Break his armor, then expect a faster second phase. His charged beam locks onto a position; boost sideways before it fires."}}],Ca=[{id:"sniper",name:"M-82 Longwatch",short:"LONGWATCH",kind:"Precision rifle",mag:6,reserve:42,damage:110,cooldown:1.05,reload:2.2,range:650,noise:45,zoom:5,color:"#dcdfb5"},{id:"rifle",name:"AR-4 Carbine",short:"CARBINE",kind:"Assault rifle",mag:30,reserve:150,damage:32,cooldown:.13,reload:1.6,range:180,noise:60,zoom:1.7,color:"#e5debd"},{id:"bow",name:"Whisper bow",short:"WHISPER",kind:"Silent / recoverable arrows",mag:1,reserve:24,damage:110,cooldown:.9,reload:.7,range:100,noise:3,zoom:2.5,color:"#aedac3"},{id:"knife",name:"Field knife",short:"FIELD KNIFE",kind:"Silent / close quarters",mag:1/0,reserve:0,damage:160,cooldown:.55,reload:0,range:3.4,noise:2,zoom:1.15,color:"#bbd6dd"},{id:"rocket",name:"R-7 Thunder",short:"THUNDER",kind:"Rocket / 8 m blast radius",mag:1,reserve:5,damage:200,cooldown:1.3,reload:2.5,range:350,noise:120,zoom:1.5,color:"#e8b59a"},{id:"laser",name:"HELIOS prototype",short:"HELIOS",kind:"Recovered energy weapon",mag:24,reserve:96,damage:70,cooldown:.22,reload:1.8,range:300,noise:25,zoom:2,color:"#96e9e1",locked:!0}];function xd(r,e){const t=[{id:"overwatch",text:"Neutralize rooftop overwatch",count:r.overwatch,total:3},{id:"civilians",text:"Free the civilian prisoners",count:r.civilians,total:2},{id:"ally",text:"Rescue the missing commando",count:r.ally,total:1},{id:"documents",text:"Recover the command dossier",count:r.documents,total:1},{id:"laser",text:"Secure the HELIOS prototype",count:r.laser,total:1}];return e?.boss&&t.push({id:"boss",text:`Defeat ${e.boss.name} · ${e.boss.title}`,count:r.boss||0,total:1}),e?.train&&t.push({id:"train",text:"Eliminate the train's armed escorts",count:r.train||0,total:e.train.escorts}),t}const zh=()=>({overwatch:0,civilians:0,ally:0,documents:0,laser:0,boss:0,train:0}),li=(r,e)=>xd(r,e).every(t=>t.count>=t.total),Bh=()=>Ca.map(r=>({ammo:r.mag,reserve:r.reserve,unlocked:!r.locked}));function Tv(r,e){if(!Number.isFinite(e.mag))return 0;const t=Math.max(0,Math.min(e.mag-r.ammo,r.reserve));return r.ammo+=t,r.reserve-=t,t}function Av(r,e,t=!1){return e>r.range?0:r.damage*(t?1.8:1)*(r.id==="rifle"?Math.max(.55,1-e/350):1)}const Hh=()=>({version:1,unlocked:0,completed:[],best:{}});function Gh(r){try{const e=JSON.parse(r);if(e.version!==1||!Number.isInteger(e.unlocked))return Hh();const t={};for(let n=0;n<Gt.length;n++){const i=e.best?.[n];i&&["score","kills","silent","health","time"].every(s=>Number.isFinite(i[s])&&i[s]>=0)&&i.health<=100&&i.silent<=i.kills&&(t[n]=Object.fromEntries(["score","kills","silent","health","time"].map(s=>[s,i[s]])))}return{version:1,unlocked:Math.max(0,Math.min(3,e.unlocked)),completed:Array.isArray(e.completed)?[...new Set(e.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<4))]:[],best:t}}catch{return Hh()}}function Rv(r,e,t){const n=structuredClone(r);n.unlocked=Math.min(3,Math.max(n.unlocked,e+1)),n.completed.includes(e)||n.completed.push(e);const i=Math.max(0,2500+t.kills*100+t.silent*100+Math.round(t.health*10)-Math.floor(t.time*2));return(!n.best[e]||i>n.best[e].score)&&(n.best[e]={...t,score:i}),{save:n,score:i}}const Cv="1.3.0",ne=r=>document.getElementById(r),pt=(r,e=!0)=>ne(r).classList.toggle("hidden",!e),$t=(r,e=2)=>String(Math.round(r)).padStart(e,"0"),Pv=["✿","☀","❧","❄"],Iv=["M3 12h28l3-2h5M10 12v5h4l2-5M20 9h10M24 9V7h-7v2M3 12v4h6","M3 11h25l5 2h7M8 11v5h4l1-5M19 12l2 7h5l-3-7M3 11v4h4","M13 3Q31 12 13 22L19 12Z M7 12h30l-4-3m4 3-4 3","M7 17l7-5 19-8-12 13-7 1M11 9l8 12","M3 9h31v7H3zM7 16v4h5v-4M30 9V6h5v13h-5M16 9V6h6v3","M4 10h26l8 4-8 3H4zM12 17v5h5v-5M18 7v13M23 7v13M28 7v13"],Eo=()=>`<div class="manual-grid">${[["Move / strafe","W A S D"],["Look","MOUSE"],["Climb / jump","SPACE"],["Descend","CTRL / Q"],["Deploy / fold kite","G"],["Boost / sprint","SHIFT"],["Aim / sniper scope","HOLD RMB"],["Fire / silent takedown","LMB"],["Scope magnification","SCROLL"],["Select weapon","1–6"],["Reload","R"],["Rescue / collect / extract","E"],["Crouch / quiet movement","HOLD C"],["Mark hostiles","F"],["Pause / release mouse","ESC"],["Field manual","H"]].map(([r,e])=>`<div><span>${r}</span><kbd>${e}</kbd></div>`).join("")}</div>`;class Lv{constructor(){this.time=0,this.radioUntil=0,this.toastUntil=0,this.markerClock=0,this.hitUntil=0,this.lastWeapon="",ne("build-version").textContent=`BUILD ${Cv}`,ne("deploy").onclick=()=>this.deploySelected(),ne("continue-operation").onclick=()=>this.game.resume(),ne("briefing").onclick=()=>this.briefing(),ne("help-menu").onclick=()=>this.manual(),ne("sound-menu").onclick=()=>{this.game.sound.unlock(),ne("sound-menu").textContent=this.game.sound.toggle()?"♫":"×"},ne("quick-help").innerHTML=`<h3>FIELD MANUAL</h3>${Eo()}<p>Start with the rooftop sentries. Descend into the courtyard; doors face south. Press H to close.</p>`,ne("weapon-slots").innerHTML=Ca.map((e,t)=>`<div class="weapon-slot" title="${t+1} · ${e.name}"><small>${t+1}</small><svg viewBox="0 0 44 26"><path d="${Iv[t]}"/></svg></div>`).join(""),this.map=ne("minimap").getContext("2d"),ne("overlay").addEventListener("keydown",e=>{if(e.code!=="Tab")return;const t=[...ne("panel").querySelectorAll("button:not(:disabled), select, a[href]")],n=t.indexOf(document.activeElement);e.shiftKey&&n<=0?(e.preventDefault(),t.at(-1)?.focus()):!e.shiftKey&&n===t.length-1&&(e.preventDefault(),t[0]?.focus())})}loading(e,t){ne("load-progress").style.width=`${e*100}%`,ne("load-label").textContent=t,ne("load-percent").textContent=`${Math.round(e*100)}%`}showMenu(){pt("loading",!1),pt("hud",!1),pt("overlay",!1),pt("quick-help",!1),pt("menu"),ne("menu").inert=!1,this.renderMenu(),ne("deploy").focus()}renderMenu(){const e=document.activeElement?.hasAttribute("data-chapter"),t=this.game,n=Gt[t.selected];ne("preview-number").textContent=`${$t(t.selected+1)} / 04`,ne("preview-title").textContent=n.operation,ne("preview-place").textContent=n.place,ne("preview-season").textContent=n.season.slice(0,3).toUpperCase(),ne("scene-caption").textContent=`${n.season.toUpperCase()} / ${n.operation}`,ne("campaign-progress").textContent=`${$t(t.save.completed.length)} / 04 OPERATIONS COMPLETE`;const i=t.selected>t.save.unlocked,s=t.suspended&&t.selected===t.index;ne("deploy").disabled=i,ne("deploy").innerHTML=`${i?"OPERATION LOCKED":s?"RESUME OPERATION":t.suspended?"BEGIN NEW OPERATION":t.save.completed.includes(t.selected)?"REPLAY OPERATION":t.selected?"CONTINUE CAMPAIGN":"BEGIN OPERATION"} <span>↗</span>`,pt("continue-operation",t.suspended&&!s),ne("continue-operation").textContent=`RESUME ${t.mission.operation} ↗`,pt("operation-note",t.suspended),ne("operation-note").textContent=`${t.mission.operation} is paused in this tab. Starting a new operation or reloading the page resets it.`,ne("preview-state").textContent=i?"COMPLETE PREVIOUS OPERATION":s?"OPERATION PAUSED / READY TO RESUME":"READY FOR INSERTION",ne("chapters").innerHTML=Gt.map((a,o)=>`<button class="chapter ${t.selected===o?"active":""}" data-chapter="${o}" aria-pressed="${t.selected===o}" style="--season:${a.color}"><span class="number">${$t(o+1)}</span><span class="season-symbol">${Pv[o]}</span><small>${a.season.toUpperCase()} / CHAPTER ${$t(o+1)}</small><b>${a.operation}</b><span class="chapter-state">${t.save.completed.includes(o)?"✓ OPERATION COMPLETE":o>t.save.unlocked?"LOCKED · PREVIEW THEATER":"READY FOR INSERTION"}</span><span class="chapter-arrow">${t.selected===o?"↗":"+"}</span></button>`).join(""),document.querySelectorAll("[data-chapter]").forEach(a=>a.onclick=()=>t.select(Number(a.dataset.chapter))),e&&document.querySelector(`[data-chapter="${t.selected}"]`)?.focus()}deploySelected(){const e=this.game;e.suspended&&e.selected===e.index?e.resume():e.start()}resetMission(){this.toastUntil=this.radioUntil=this.hitUntil=0,this.markerClock=0;for(const e of["toast","radio","hit-marker"])pt(e,!1);ne("markers").innerHTML=""}showPlay(){pt("menu",!1),pt("overlay",!1),pt("quick-help",!1),pt("hud"),ne("hud-operation").textContent=this.game.mission.operation,ne("hud-location").textContent=this.game.mission.place.toUpperCase(),this.renderObjectives(),this.weapon()}panel(e){ne("panel").innerHTML=e,pt("overlay"),ne("menu").inert=!0,(ne("panel").querySelector(".primary:not(:disabled)")||ne("panel").querySelector("button:not(:disabled), select"))?.focus()}closePanel(){pt("overlay",!1),ne("menu").inert=!1,ne("briefing").focus()}briefing(){const e=this.game,t=Gt[e.selected];this.panel(`<div class="eyebrow">CLASSIFIED / KESTREL EYES ONLY</div><h2>${t.operation}</h2><div class="subtitle">${t.season.toUpperCase()} · ${t.place.toUpperCase()}</div><p>${t.briefing}</p><div class="panel-rule"></div><div class="intel-list">01 &nbsp; Eliminate three rooftop sentries.<br>02 &nbsp; Free two civilians and one commando.<br>03 &nbsp; Recover the dossier and HELIOS prototype.<br>04 &nbsp; Defeat ${t.boss.name}, the ${t.boss.title.toLowerCase()}.<br>${t.train?"05 &nbsp; Eliminate three escorts aboard the moving shuttle.<br>":""}${t.train?"06":"05"} &nbsp; Extract when the rescued team reaches the south beacon.</div><p>Insert 87 metres above the valley. Use your Longwatch scope, clear the high positions, then descend. Every marked building has a ground-level entrance on its south side.</p><p>${t.boss.callout}${t.train?" The shuttle repeats its southern route. Follow the convoy bearing, lead moving targets, or land on a coach roof.":""}</p><div class="panel-actions"><button class="primary" id="brief-deploy" ${e.selected>e.save.unlocked?"disabled":""}>DEPLOY KESTREL <span>↗</span></button><button class="text-button" id="close-panel">BACK TO CAMPAIGN</button></div>`),e.suspended&&e.selected===e.index&&(ne("brief-deploy").innerHTML="RESUME OPERATION <span>↗</span>"),ne("brief-deploy").onclick=()=>this.deploySelected(),ne("close-panel").onclick=()=>this.closePanel()}manual(){this.panel(`<div class="eyebrow">KESTREL DIVISION / FIELD MANUAL</div><h2>Know your way in.</h2><p>A desktop keyboard and mouse are required. Click the scene to capture the mouse. Hold the right mouse button to aim; your sniper scope can zoom from 3× to 12×.</p>${Eo()}<p>Land within 3 m of a surface before folding the kite. Crouch to reduce detection. Knives and arrows are quiet. Recover arrows and ammunition from defeated enemies.</p><p>Boss armor opens after a volley; helmet shots bypass it. Move when the targeting line appears. At half health, bosses lose their armor and attack faster. In summer, track the shuttle by its bearing: defeat Mara and all three armed escorts. The train repeats its route and supports rooftop boarding.</p><div class="panel-actions"><button class="primary" id="close-panel">UNDERSTOOD <span>↗</span></button></div>`),ne("close-panel").onclick=()=>this.closePanel()}showPause(){pt("quick-help",!1),ne("hud").classList.remove("scoped"),pt("scope",!1),this.panel(`<div class="eyebrow">UPLINK ON HOLD</div><h2>Take a breath, Wren.</h2><div class="subtitle">${this.game.mission.operation} / OPERATION PAUSED</div><p>You can return to the campaign and resume this operation in the same tab. Restarting, starting another operation, or reloading the page resets it. Completed operations save after extraction.</p>${Eo()}<div class="settings-row"><label for="quality">Rendering quality</label><select id="quality"><option value="low">Performance</option><option value="medium">Balanced</option><option value="high">High fidelity</option></select><button id="audio-toggle" class="text-button">AUDIO ${this.game.sound.enabled?"ON":"OFF"}</button></div><div class="panel-actions"><button class="primary" id="resume">RESUME OPERATION <span>↗</span></button><button class="text-button" id="restart">RESTART</button><button class="text-button" id="return-menu">CAMPAIGN</button></div>`),ne("resume").onclick=()=>this.game.resume(),ne("restart").onclick=()=>this.game.start(this.game.index),ne("return-menu").onclick=()=>this.game.menu(),ne("quality").value=this.game.renderer.qualityName,ne("quality").onchange=e=>this.game.setQuality(e.target.value),ne("audio-toggle").onclick=()=>{ne("audio-toggle").textContent=`AUDIO ${this.game.sound.toggle()?"ON":"OFF"}`}}showDebrief(e){const t=this.game,n=t.index===3;pt("quick-help",!1),pt("scope",!1),ne("hud").classList.remove("scoped"),this.panel(`<div class="eyebrow">${e?"EXTRACTION CONFIRMED":"KESTREL SIGNAL LOST"}</div><h2>${e?n?"The sky belongs to them.":"Everyone comes home.":"One more flight."}</h2><div class="subtitle">${t.mission.operation} / ${e?"COMPLETE":"RETRY OPERATION"}</div><p>${e?t.mission.ending:"Atlas has lost your signal. Reinsert above the valley, clear the rooftop sentries, and use cover between attacks. Field medical kits restore health and armor."}</p><div class="debrief-stats"><div><b>${$t(t.kills)}</b><small>HOSTILES NEUTRALIZED</small></div><div><b>${$t(t.silent)}</b><small>SILENT TAKEDOWNS</small></div><div><b>${e?t.score.toLocaleString():`${Math.floor(t.elapsed/60)}:${$t(t.elapsed%60)}`}</b><small>${e?"OPERATION SCORE":"TIME IN THE FIELD"}</small></div></div><p>${e?`Three people rescued. Command dossier recovered. HELIOS secured. Priority target eliminated.${t.mission.train?" Armed convoy neutralized.":""}`:"Your completed seasonal operations remain saved."}</p><div class="panel-actions"><button class="primary" id="debrief-next">${e?n?"RETURN TO THE VALLEY":"NEXT OPERATION":"REINSERT"} <span>↗</span></button><button class="text-button" id="return-menu">CAMPAIGN</button></div>`),ne("debrief-next").onclick=()=>{e&&n?this.game.menu():e?(t.selected=t.index+1,t.menu(),this.briefing()):t.start(t.index)},ne("return-menu").onclick=()=>t.menu()}toggleHelp(){ne("quick-help").classList.toggle("hidden")}renderObjectives(){const e=xd(this.game.progress,this.game.mission);ne("objective-list").innerHTML=e.map(t=>`<div class="objective ${t.count>=t.total?"done":""}"><i>${t.count>=t.total?"✓":"◇"}</i><span>${t.text}</span><small>${t.count}/${t.total}</small></div>`).join(""),ne("objective-total").textContent=`${e.filter(t=>t.count>=t.total).length} / ${e.length}`,this.evacuation()}evacuation(){const e=this.game,t=e.captives.filter(a=>a.arrived).length,n=e.captives.filter(a=>a.rescued&&!a.arrived).length,i=li(e.progress,e.mission),s=i&&t===3;ne("rescue-status").textContent=`TEAM ${t}/3 ABOARD · ${n?`${n} EN ROUTE`:t===3?"TEAM SECURE":"FREE THE PRISONERS"}`,ne("extract-objective").classList.toggle("ready",s),ne("extract-objective").textContent=s?"▽ Land at the south beacon · E to extract":i?"◇ South beacon · waiting for the team":"◇ Complete objectives, then extract south"}weapon(){const e=this.game,t=e.weapon;ne("weapon-kind").textContent=t.kind.toUpperCase(),ne("weapon-name").textContent=t.short,ne("ammo").textContent=Number.isFinite(e.slot.ammo)?$t(e.slot.ammo):"∞",ne("reserve").textContent=$t(e.slot.reserve,3),ne("weapon-extra").textContent=t.id==="sniper"?"VARIABLE OPTIC / 3×–12×":t.id==="knife"?"CLOSE QUARTERS / SILENT":t.id==="bow"?"SILENT / RECOVERABLE ARROWS":t.id==="rocket"?"EXPLOSIVE / 8 M BLAST RADIUS":t.id==="laser"?"HELIOS / ENERGY CELL SYSTEM":"SELECT FIRE / AUTOMATIC",[...ne("weapon-slots").children].forEach((n,i)=>{n.classList.toggle("active",i===e.weaponIndex),n.classList.toggle("locked",!e.inventory[i].unlocked)})}toast(e,t=3){ne("toast").textContent=e,this.toastUntil=this.time+t*1e3,pt("toast")}radio(e,t,n=9){ne("radio-name").textContent=e,ne("radio-text").textContent=t,this.radioUntil=this.time+n*1e3,pt("radio")}hitMarker(e){this.hitUntil=this.time+180,ne("hit-marker").style.color=e?"#efc590":"#dce6ad",pt("hit-marker")}update(e){this.time+=e*1e3;const t=this.game,n=this.time,i=t.aiming&&t.weapon.id==="sniper";ne("hud").classList.toggle("scoped",i),pt("scope",i);const s=(Math.round(-t.yaw*180/Math.PI)%360+360)%360;ne("heading").textContent=`${$t(s,3)}°`;const a=["N","NE","E","SE","S","SW","W","NW"];document.querySelectorAll(".compass-ticks span").forEach((l,h)=>{l.textContent=a[(Math.round(s/45)+[-2,-1,1,2][h]+8)%8]}),ne("alert-label").textContent=t.alert>=.99?"ENGAGED":t.alert>.2?"SUSPICIOUS":t.crouched?"LOW PROFILE":"UNDETECTED",ne("alert-label").style.color=t.alert>.2?"#efb18c":"#dce6ad";const o=Math.floor(t.world.hour);ne("hud-season").textContent=`${t.mission.season.toUpperCase()} / ${$t(o)}:${$t((t.world.hour-o)*60)}`,ne("flight-status").textContent=t.flying?"KESTREL ONLINE":t.crouched?"STEALTH APPROACH":"ON FOOT",ne("altitude").textContent=$t(Math.max(0,t.pos.y-t.ground()),3),ne("movement-status").textContent=t.flying?t.speed>1?"CRUISE":"HOVER":t.crouched?"CROUCH":"GROUNDED",ne("health-value").textContent=Math.ceil(t.health),ne("armor-value").textContent=Math.ceil(t.armor),ne("health-bar").style.width=`${t.health}%`,ne("armor-bar").style.width=`${t.armor}%`,ne("damage-overlay").style.opacity=t.damageFlash,ne("reload-state").textContent=t.reloadTime>0?`RELOAD ${t.reloadTime.toFixed(1)}`:"READY",this.encounters(),n>this.toastUntil&&pt("toast",!1),n>this.radioUntil&&pt("radio",!1),n>this.hitUntil&&pt("hit-marker",!1);const c=t.nearestInteractable();if(pt("interact",!!c),c&&(ne("interact").querySelector("span").textContent=c.name),this.markerClock-=e,this.markerClock<=0&&(this.markerClock=.1,this.evacuation(),this.markers(),this.drawMap(),i)){const l=t.aimTarget();ne("scope-data").textContent=`${t.zoom}× / ${l?`${Math.round(l.distance)} M`:"RANGE —"}`}}markers(){const e=this.game;let t="";const n=(i,s,a,o)=>{if(a!=="boss-marker"&&i.distanceTo(e.pos)>250)return;const c=i.clone().project(e.camera);c.z<-1||c.z>1||Math.abs(c.x)>.96||Math.abs(c.y)>.9||(t+=`<div class="world-marker ${a}" style="left:${(c.x*.5+.5)*100}%;top:${(-c.y*.5+.5)*100}%"><span class="diamond">${o}</span><small>${s}</small></div>`)};for(const i of e.enemies)i.alive&&i.root.visible&&(i.boss||i.trainEscort&&i.pos.distanceTo(e.pos)<260||i.marked>0||e.aiming&&i.pos.distanceTo(e.pos)<260&&e.clearLine(e.camera.position,i.pos.clone().add(new R(0,1.65,0))))&&n(i.pos.clone().add(new R(0,2.5*i.root.scale.y,0)),`${i.boss?i.boss.name:i.trainEscort?"TRAIN GUARD":i.overwatch?"OVERWATCH":i.type.toUpperCase()} / ${Math.round(i.pos.distanceTo(e.pos))} M`,i.boss?"boss-marker":"",i.boss?"◆":"⌄");if(!e.aiming){for(const i of e.captives)i.rescued?i.arrived||n(i.root.position.clone().add(new R(0,2.5,0)),"TEAMMATE / EN ROUTE","friendly","◇"):n(i.cell.interact.clone().add(new R(0,6.5,0)),i.commando?"COMMANDO":"PRISONER","friendly","◇");for(const i of e.items)!i.collected&&i.objective&&n(i.pos.clone().add(new R(0,8,0)),i.type==="laser"?"HELIOS":"DOSSIER","objective-marker","◇");e.mission.train&&(e.progress.train<e.mission.train.escorts||!e.progress.boss)&&n(e.railway.cars[1].obj.position.clone().add(new R(0,8,0)),"INTERCEPT CONVOY","boss-marker","◇"),li(e.progress,e.mission)&&n(e.camp.extract.clone().add(new R(0,3,0)),"EXTRACTION","friendly","▽")}ne("markers").innerHTML=t}drawMap(){const e=this.game,t=this.map,n=210,i=172,s=70;t.fillStyle="#102721",t.fillRect(0,0,n,i);const a=(d,p)=>[n/2+(d-e.camp.x)/s*91,i/2+(p-e.camp.z)/s*80];t.strokeStyle="#a8c7a31c",t.lineWidth=.5;for(let d=0;d<8;d++)t.beginPath(),t.moveTo(d*30,0),t.lineTo(d*30,i),t.stroke(),t.beginPath(),t.moveTo(0,d*28),t.lineTo(n,d*28),t.stroke();t.strokeStyle="#acc49d55";const[o,c]=a(e.camp.x-34,e.camp.z-34);t.strokeRect(o,c,68/s*91,68/s*80);for(const d of e.forts.buildings){const[p,b]=a(d.x,d.z);t.fillStyle="#73876b66",t.fillRect(p-d.w/s*45.5,b-d.d/s*40,d.w/s*91,d.d/s*80)}for(const d of e.enemies)if(d.alive&&d.root.visible&&(d.boss||d.marked>0||d.overwatch||d.alerted)){const[p,b]=a(d.pos.x,d.pos.z);t.fillStyle=d.overwatch?"#ecb589":"#de8867",t.fillRect(p-1.7,b-1.7,3.4,3.4)}for(const d of e.captives)if(!d.arrived){const p=d.rescued?d.root.position:d.cell,[b,g]=a(p.x,p.z);t.fillStyle="#acd9b9",t.beginPath(),t.arc(b,g,2,0,6.28),t.fill()}for(const d of e.items)if(!d.collected&&d.objective){const[p,b]=a(d.pos.x,d.pos.z);t.strokeStyle="#e0dca2",t.strokeRect(p-2,b-2,4,4)}const[l,h]=a(e.camp.extract.x,e.camp.extract.z);if(t.strokeStyle=li(e.progress,e.mission)?"#d8ecb1":"#a5bd8c66",t.beginPath(),t.arc(l,h,4,0,6.28),t.stroke(),e.mission.train){const d=e.railway.cars[1].obj.position,[p,b]=a(d.x,d.z),g=Math.max(12,Math.min(n-12,p)),m=Math.max(12,Math.min(i-12,b));t.fillStyle="#edb994",t.fillRect(g-5,m-3,10,6),t.font="8px monospace",t.fillText("RAIL",Math.min(n-28,g-10),Math.min(i-3,m+13))}const[u,f]=a(e.pos.x,e.pos.z);t.save(),t.translate(Math.max(7,Math.min(n-7,u)),Math.max(7,Math.min(i-7,f))),t.rotate(-e.yaw),t.fillStyle="#ecf2cb",t.beginPath(),t.moveTo(0,-5),t.lineTo(-3.5,4),t.lineTo(0,2),t.lineTo(3.5,4),t.closePath(),t.fill(),t.restore()}encounters(){const e=this.game,t=e.encounters.boss;if(pt("boss-hud",!!t?.alive&&t.root.visible&&t.pos.distanceTo(e.pos)<230),t?.alive){const n=t.bossState;ne("boss-name").textContent=`${t.boss.name} / ${t.boss.title.toUpperCase()}`,ne("boss-phase").textContent=`PHASE ${n.phase} / ${Math.ceil(t.hp)} HP`,ne("boss-health").style.width=`${100*t.hp/t.maxHp}%`,ne("boss-hud").classList.toggle("charging",n.stage==="charging"||n.stage==="firing"),ne("boss-status").textContent=n.stage==="charging"?`TARGET LOCK · MOVE TO EVADE / ${n.charge.toFixed(1)} S`:n.stage==="firing"?"VOLLEY INCOMING · KEEP MOVING":n.exposed>0?"COOLING DOWN · ARMOR OPEN / ATTACK NOW":n.phase===2?"ARMOR BROKEN · AGGRESSIVE PHASE":"ARMORED · HELMET SHOTS BYPASS ARMOR"}if(pt("train-hud",!!e.mission.train),e.mission.train){const n=e.railway.cars[1].obj.position,i=n.clone().sub(e.pos),s=(Math.atan2(i.x,-i.z)*180/Math.PI+360)%360;ne("train-distance").textContent=`${Math.round(i.length())} M / BEARING ${$t(s,3)}°`,ne("train-status").textContent=`${e.progress.train}/${e.mission.train.escorts} ESCORTS · ${e.progress.boss?"MARSHAL DOWN":"MARSHAL ABOARD"}`,ne("train-speed").textContent=`${Math.round(Math.abs(e.railway.train.v)*3.6)} KM/H · REPEATING SOUTHERN ROUTE`}}}const ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Dv=new ka(-1,1,1,-1,0,1);class Nv extends at{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const Uv=new Nv;class cl{constructor(e){this._mesh=new Qe(Uv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vd extends Fs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fi.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new cl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vh extends Fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class kv extends Fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vd(ba),this.copyPass.material.blending=Yn,this.clock=new Cm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vh!==void 0&&(a instanceof Vh?n=!0:a instanceof kv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ov extends Fs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const zv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Cs extends Fs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,a,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new dn(s,a,{type:wn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new dn(s,a,{type:wn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=zv;this.highPassUniforms=Fi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fi.clone(ba.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,blending:Fo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new cl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Cs.BlurDirectionX=new ie(1,0);Cs.BlurDirectionY=new ie(0,1);const aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Bv extends Fs{constructor(){super(),this.uniforms=Fi.clone(aa.uniforms),this.material=new am({name:aa.name,uniforms:this.uniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader}),this._fsQuad=new cl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Eu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const xa={low:{name:"Low",dpr:1,maxPixels:13e5,shadow:1024,shadowRange:30,bloom:!0,bloomHalf:!0,msaa:0,grass:.3,trees:.6,terrainStep:3,clouds:3,env:!0,propDist:80,buildDist:300,propShadows:!1},medium:{name:"Medium",dpr:1.25,maxPixels:26e5,shadow:2048,shadowRange:42,bloom:!0,bloomHalf:!1,msaa:4,grass:.65,trees:.85,terrainStep:2,clouds:4,env:!0,propDist:150,buildDist:520,propShadows:!0},high:{name:"High",dpr:2,maxPixels:5e6,shadow:4096,shadowRange:55,bloom:!0,bloomHalf:!1,msaa:4,grass:1,trees:1,terrainStep:2,clouds:5,env:!0,propDist:240,buildDist:900,propShadows:!0}};function Hv(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100}function Gv(r){const e=(()=>{try{return localStorage.getItem("kitefall-quality")}catch{return null}})();if(e&&xa[e])return e;let t="";try{const n=r.getExtension("WEBGL_debug_renderer_info");t=n?r.getParameter(n.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER)}catch{}return/SwiftShader|llvmpipe|Software|Basic Render/i.test(t)||Hv()?"low":/RTX|Radeon RX|Apple M[2-9]|Arc/i.test(t)?"high":"medium"}const Vv={uniforms:{tDiffuse:{value:null},uVibrance:{value:.22},uSaturation:{value:1.06},uWarm:{value:.03},uVignette:{value:.28},uNight:{value:0},uFade:{value:0},uFadeColor:{value:new he(725028)},uUnder:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVibrance, uSaturation, uWarm, uVignette, uNight, uFade, uUnder, uTime;
    uniform vec3 uFadeColor;
    varying vec2 vUv;
    void main() {
      // under water the picture sways a little, like looking through moving water
      vec2 wob = vec2(sin(vUv.y * 21.0 + uTime * 1.9), cos(vUv.x * 17.0 + uTime * 1.5)) * 0.0022 * uUnder;
      vec4 c = texture2D(tDiffuse, vUv + wob);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      float mx = max(col.r, max(col.g, col.b)), mn = min(col.r, min(col.g, col.b));
      float sat = (mx - mn) / (mx + 1e-4);
      col = mix(vec3(l), col, uSaturation + uVibrance * (1.0 - sat));
      col *= vec3(1.0 + uWarm, 1.0 + uWarm * 0.35, 1.0 - uWarm * 0.6);
      // Night: cool the shadows but keep lamp light warm.
      col = mix(col, col * vec3(0.86, 0.94, 1.12), uNight * (1.0 - smoothstep(0.4, 1.6, l)));
      vec2 q = vUv - 0.5;
      col = mix(col, col * vec3(0.62, 0.96, 1.02) + vec3(0.0, 0.012, 0.018), uUnder * 0.75);
      col *= 1.0 - (uVignette + uUnder * 0.35) * smoothstep(0.35, 0.95, dot(q, q) * 2.2);
      col = mix(col, uFadeColor, uFade);
      gl_FragColor = vec4(max(col, 0.0), c.a);
    }`};class Wv{constructor(e,t){this.renderer=new Ev({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1});const n=this.renderer.getContext();this.qualityName=t||Gv(n),this.q=xa[this.qualityName];const i=this.renderer;i.outputColorSpace=Tt,i.toneMapping=Fc,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=vu,this.scale=1,this.frameTimes=[],this.composer=null,this.buildComposer(),this.resize(),window.addEventListener("resize",()=>this.resize())}setQuality(e){if(xa[e]){this.qualityName=e,this.q=xa[e];try{localStorage.setItem("kitefall-quality",e)}catch{}this.buildComposer(),this.resize()}}buildComposer(){const e=this.grade&&Fi.clone(Object.fromEntries(Object.entries(this.grade.uniforms).filter(([s])=>s!=="tDiffuse"))),t=this.q,n=this.renderer.getSize(new ie),i=new dn(Math.max(1,n.x),Math.max(1,n.y),{type:wn,samples:Math.min(t.msaa,this.renderer.capabilities.maxSamples||0)});if(this.composer?.dispose(),this.bloom?.dispose(),this.grade?.dispose(),this.output?.dispose(),this.composer=new Fv(this.renderer,i),this.renderPass=new Ov(null,null),this.composer.addPass(this.renderPass),this.bloom=new Cs(new ie(256,256),.42,.55,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.grade=new vd(Vv),e)for(const[s,a]of Object.entries(e))s!=="tDiffuse"&&(this.grade.uniforms[s].value=a.value);this.composer.addPass(this.grade),this.output=new Bv,this.composer.addPass(this.output)}resize(){const e=window.innerWidth,t=window.innerHeight;let n=Math.min(window.devicePixelRatio||1,this.q.dpr)*this.scale;e*t*n*n>this.q.maxPixels&&(n=Math.sqrt(this.q.maxPixels/(e*t))),this.pixelRatio=Math.max(.5,n),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(e,t),this.q.bloomHalf&&this.bloom.resolution.set(e/2,t/2),this.onResize?.(e,t)}track(e){if(this.fixedScale||(this.frameTimes.push(e),this.frameTimes.length<90))return;const n=[...this.frameTimes].sort((s,a)=>s-a)[45];this.frameTimes.length=0;const i=1/50;n>i*1.25&&this.scale>.62?(this.scale=Math.max(.62,this.scale-.1),this.resize()):n<i*.7&&this.scale<1&&(this.scale=Math.min(1,this.scale+.05),this.resize())}render(e,t){this.renderPass.scene=e,this.renderPass.camera=t,this.composer.render()}}function Wh(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new at;let l=0;for(let h=0;h<r.length;++h){const u=r[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<r.length;++f){const d=r[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(const h in s){const u=jh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][f]);const p=jh(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function jh(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new St(a,t,n);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){const b=h.getComponent(f,p);o.setComponent(f+u,p,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Xh(r,e){if(e===mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Sc||e===ku){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Sc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class jv extends Us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $v(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new h_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=hr.extractUrlBase(e);a=hr.resolveURL(l,this.path)}else a=hr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new hd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_d){try{a[Ye.KHR_BINARY_GLTF]=new u_(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new w_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new Kv;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new d_(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new f_;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new p_;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Xv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qv{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new dd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ud(h),l.distance=u;break;case"spot":l=new Sm(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Rn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Kv{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const i=[];e.color=new he(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class Yv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $v{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(s)}}class Jv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Zv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Qv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class e_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(o[0],o[1],o[2],Kt),Promise.all(s)}}class n_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class i_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(o[0],o[1],o[2],Kt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(s)}}class s_{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class o_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class c_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class l_{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class h_{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ln.TRIANGLES&&l.mode!==ln.TRIANGLE_STRIP&&l.mode!==ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const p of u){const b=new ke,g=new R,m=new Xt,_=new R(1,1,1),v=new ws(p.geometry,p.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(g,m,_));for(const x in c)if(x==="_COLOR_0"){const y=c[x];v.instanceColor=new wa(y.array,y.itemSize,y.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);xt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const _d="glTF",$s=12,qh={JSON:1313821514,BIN:5130562};class u_{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$s,s=new DataView(e,$s);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===qh.JSON){const l=new Uint8Array(e,$s+a,o);this.content=n.decode(l)}else if(c===qh.BIN){const l=$s+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class d_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Lc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Lc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=bs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const b=d.attributes[p],g=c[p];g!==void 0&&(b.normalized=g)}u(d)},o,l,Kt,f)})})}}class f_{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class p_{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class yd extends Ar{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,b=p-l,g=-2*d+3*f,m=d-f,_=1-g,v=m-f+u;for(let x=0;x!==o;x++){const y=a[b+x+o],M=a[b+x+c]*h,A=a[p+x+o],P=a[p+x]*h;s[x]=_*y+v*M+g*A+m*P}return s}}const m_=new Xt;class g_ extends yd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return m_.fromArray(s).normalize().toArray(s),s}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kh={9728:jt,9729:Dt,9984:Ru,9985:ua,9986:nr,9987:In},Yh={33071:hi,33648:_a,10497:Ni},To={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b_={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},Ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),r.DefaultMaterial}function Si(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function v_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function __(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y_(r){let e;const t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ro(t.attributes):e=r.indices+":"+Ro(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ro(r.targets[n]);return e}function Ro(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Dc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const S_=new ke;class w_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new _m(this.options.manager):this.textureLoader=new Am(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Si(s,o,i),Rn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(hr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=To[i.type],o=bs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new St(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=To[i.type],l=bs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let b,g;if(d&&d!==u){const m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(_);v||(b=new l(o,m*d,i.count*d/h),v=new bp(b,d/h),t.cache.add(_,v)),g=new Kc(v,c,f%d/h,p)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),g=new St(b,c,p);if(i.sparse!==void 0){const m=To.SCALAR,_=bs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,y=new _(a[1],v,i.sparse.count*m),M=new l(a[2],x,i.sparse.count*c);o!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,P=y.length;A<P;A++){const E=y[A];if(g.setX(E,M[A*c]),c>=2&&g.setY(E,M[A*c+1]),c>=3&&g.setZ(E,M[A*c+2]),c>=4&&g.setW(E,M[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Kh[f.magFilter]||Dt,h.minFilter=Kh[f.minFilter]||In,h.wrapS=Yh[f.wrapS]||Ni,h.wrapT=Yh[f.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(b){const g=new Rt(b);g.needsUpdate=!0,f(g)}),t.load(hr.resolveURL(u,s.path),p,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Rn(u,a),u.userData.mimeType=a.mimeType||M_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Aa,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Is,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return qt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Kt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Jt);const h=s.alphaMode||Ao.OPAQUE;if(h===Ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ao.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==hn){const u=s.emissiveFactor;o.emissive=new he().setRGB(u[0],u[1],u[2],Kt)}return s.emissiveTexture!==void 0&&a!==hn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Rn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Si(i,u,s),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return $h(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=y_(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=$h(new at,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?x_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const b=h[d],g=a[d];let m;const _=l[d];if(g.mode===ln.TRIANGLES||g.mode===ln.TRIANGLE_STRIP||g.mode===ln.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new vp(b,_):new Qe(b,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ln.TRIANGLE_STRIP?m.geometry=Xh(m.geometry,ku):g.mode===ln.TRIANGLE_FAN&&(m.geometry=Xh(m.geometry,Sc));else if(g.mode===ln.LINES)m=new Ep(b,_);else if(g.mode===ln.LINE_STRIP)m=new Hi(b,_);else if(g.mode===ln.LINE_LOOP)m=new Tp(b,_);else if(g.mode===ln.POINTS)m=new Tc(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&__(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Rn(m,s),g.extensions&&Si(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Si(i,u[0],s),u[0];const f=new dt;s.extensions&&Si(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ps.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ka(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new ke;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],b=d.target,g=b.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],b=u[3],g=u[4],m=[];for(let v=0,x=f.length;v<x;v++){const y=f[v],M=d[v],A=p[v],P=b[v],E=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,M,A,P,E);if(S)for(let I=0;I<S.length;I++)m.push(S[I])}const _=new Cc(s,void 0,m);return Rn(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,S_)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Yu:l.length>1?h=new dt:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Rn(h,s),s.extensions&&Si(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new dt;n.name&&(s.name=i.createUniqueName(n.name)),Rn(s,n),n.extensions&&Si(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Dn||f instanceof Rt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];ri[s.path]===ri.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ri[s.path]){case ri.weights:l=Ts;break;case ri.rotation:l=As;break;case ri.translation:case ri.scale:l=Rs;break;default:switch(n.itemSize){case 1:l=Ts;break;case 2:case 3:default:l=Rs;break}break}const h=i.interpolation!==void 0?b_[i.interpolation]:vr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+ri[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Dc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof As?g_:yd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function E_(r,e,t){const n=e.attributes,i=new En;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=Dc(bs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,c=new R;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const b=Dc(bs[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new en;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function $h(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Lc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return tt.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Rn(r,e),E_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?v_(r,e.targets,t):r})}var T_=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var _=new Uint8Array(m.length),v=0;v<m.length;++v){var x=m.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var y=0,v=0;v<m.length;++v)_[y++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,y)}function c(m,_,v,x,y,M,A){var P=m.exports.sbrk,E=x+3&-4,S=P(E*y),I=P(M.length),N=new Uint8Array(m.exports.memory.buffer);N.set(M,I);var O=_(S,x,y,I,M.length);if(O==0&&A&&A(S,E,y),v.set(N.subarray(S,S+x*y)),P(S-P(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var _={object:new Worker(m),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function p(m){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),y=u.length;y<m;++y)u[y]=d(x);for(var y=m;y<u.length;++y)u[y].object.postMessage({});u.length=m,URL.revokeObjectURL(x)}function b(m,_,v,x,y){for(var M=u[0],A=1;A<u.length;++A)u[A].pending<M.pending&&(M=u[A]);return new Promise(function(P,E){var S=new Uint8Array(v),I=++f;M.pending+=m,M.requests[I]={resolve:P,reject:E},M.object.postMessage({id:I,count:m,size:_,source:S,mode:x,filter:y},[S.buffer])})}function g(m){var _=m.data;if(!_.id)return self.close();self.ready.then(function(v){try{var x=new Uint8Array(_.count*_.size);c(v,v.exports[_.mode],x,_.count,_.size,_.source,v.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:_.id,count:_.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,_,v,x,y){c(s,s.exports.meshopt_decodeVertexBuffer,m,_,v,x,s.exports[l[y]])},decodeIndexBuffer:function(m,_,v,x){c(s,s.exports.meshopt_decodeIndexBuffer,m,_,v,x)},decodeIndexSequence:function(m,_,v,x){c(s,s.exports.meshopt_decodeIndexSequence,m,_,v,x)},decodeGltfBuffer:function(m,_,v,x,y,M){c(s,s.exports[h[y]],m,_,v,x,s.exports[l[M]])},decodeGltfBufferAsync:function(m,_,v,x,y){return u.length>0?b(m,_,v,h[x],l[y]):a.then(function(){var M=new Uint8Array(m*_);return c(s,s.exports[h[x]],M,m,_,v,s.exports[l[y]]),M})}}})();function A_(r){const e=new Map,t=new Map,n=r.clone();return Md(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Md(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Md(r.children[n],e.children[n],t)}const va=.006,Jh=.006,Zh=5e-4,Sd=2e-4,oa=new R;function R_(r){r.updateMatrixWorld(!0);const e=new ke().copy(r.matrixWorld).invert(),t=[],n=[];return r.traverse(i=>{if(!i.isMesh||i.isSkinnedMesh||i.isInstancedMesh||Array.isArray(i.material))return;const s=i.geometry,a=s?.attributes.position;if(!a||s.groups?.length>1)return;const o=new ke().multiplyMatrices(e,i.matrixWorld),c={mesh:i,geo:s,M:o,mat:i.material?.name||"",index:t.length,world:[]};t.push(c);const l=a.count,h=new Float64Array(l*3);for(let d=0;d<l;d++)oa.fromBufferAttribute(a,d).applyMatrix4(o),h[d*3]=oa.x,h[d*3+1]=oa.y,h[d*3+2]=oa.z;c.world=h;const u=s.index,f=u?u.count:l;for(let d=0;d+2<f;d+=3){const p=u?u.getX(d):d,b=u?u.getX(d+1):d+1,g=u?u.getX(d+2):d+2,m=h[p*3],_=h[p*3+1],v=h[p*3+2],x=h[b*3]-m,y=h[b*3+1]-_,M=h[b*3+2]-v,A=h[g*3]-m,P=h[g*3+1]-_,E=h[g*3+2]-v;let S=y*E-M*P,I=M*A-x*E,N=x*P-y*A;const O=Math.hypot(S,I,N);if(O<1e-9)continue;S/=O,I/=O,N/=O;const z=h[b*3],j=h[b*3+1],W=h[b*3+2],te=h[g*3],G=h[g*3+1],ue=h[g*3+2];n.push({prim:c.index,v:[p,b,g],n:[S,I,N],d:S*m+I*_+N*v,area:O/2,box:[Math.min(m,z,te),Math.min(_,j,G),Math.min(v,W,ue),Math.max(m,z,te),Math.max(_,j,G),Math.max(v,W,ue)]})}}),{prims:t,tris:n}}function C_(r,e,t){const n=[],i=s=>(t[0]-e[0])*(s[1]-e[1])-(t[1]-e[1])*(s[0]-e[0]);for(let s=0;s<r.length;s++){const a=r[s],o=r[(s+1)%r.length],c=i(a),l=i(o);if(c>=0&&n.push(a),c>=0!=l>=0){const h=c/(c-l);n.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return n}const Co=r=>{let e=0;for(let t=0;t<r.length;t++){const n=r[t],i=r[(t+1)%r.length];e+=n[0]*i[1]-i[0]*n[1]}return e/2};function P_(r,e,t){const[n,i,s]=e.n;let a,o,c;Math.abs(i)<.9?(a=-s,o=0,c=n):(a=0,o=s,c=-i);const l=Math.hypot(a,o,c);a/=l,o/=l,c/=l;const h=i*c-s*o,u=s*a-n*c,f=n*o-i*a,d=g=>g.v.map(m=>{const _=r[g.prim].world,v=_[m*3],x=_[m*3+1],y=_[m*3+2];return[v*a+x*o+y*c,v*h+x*u+y*f]});let p=d(e),b=d(t);Co(p)<0&&p.reverse(),Co(b)<0&&b.reverse();for(let g=0;g<3&&p.length;g++)p=C_(p,b[g],b[(g+1)%3]);return p.length>=3?Math.abs(Co(p)):0}const I_=.03;function L_(r,e=va){const{prims:t,tris:n}=R_(r);for(const h of n)h.nk=((Math.round(h.n[0]*64)+64)*129+Math.round(h.n[1]*64)+64)*129+Math.round(h.n[2]*64)+64;const i=(h,u=0)=>h.nk*1e7+Math.floor(h.d/(e*2))+u+5e6,s=new Map;for(const h of n){const u=i(h);let f=s.get(u);f||s.set(u,f=[]),f.push(h)}const a=[],o=(h,u)=>{if(h.prim===u.prim||t[h.prim].mat===t[u.prim].mat||h.n[0]*u.n[0]+h.n[1]*u.n[1]+h.n[2]*u.n[2]<.9995||Math.abs(h.d-u.d)>=e)return;const f=h.box,d=u.box;if(f[0]>d[3]+e||d[0]>f[3]+e||f[1]>d[4]+e||d[1]>f[4]+e||f[2]>d[5]+e||d[2]>f[5]+e)return;const p=P_(t,h,u);p>Sd*.05&&a.push({t1:h,t2:u,area:p})},c=h=>{const u=new Map;for(const f of h){const d=t[f.prim].mat;let p=u.get(d);p||u.set(d,p=[]),p.push(f)}return u},l=new Map;for(const[h,u]of s)l.set(h,c(u));for(const[h,u]of s){const f=l.get(h),d=l.get(i(u[0],1)),p=[...f.keys()];for(let b=0;b<p.length;b++)for(let g=b+1;g<p.length;g++)for(const m of f.get(p[b]))for(const _ of f.get(p[g]))o(m,_);if(d){for(const[b,g]of f)for(const[m,_]of d)if(b!==m)for(const v of g)for(const x of _)o(v,x)}}return{prims:t,tris:n,buckets:s,pairs:a,planeKey:i}}function D_(r){const{prims:e,tris:t,pairs:n}=L_(r,I_);if(!n.some(x=>Math.abs(x.t1.d-x.t2.d)<va))return 0;const i=new Set;for(const x of n)i.add(x.t1),i.add(x.t2);const s=new Map,a=x=>{let y=x;for(;s.get(y)!==y;)y=s.get(y);let M=x;for(;s.get(M)!==y;){const A=s.get(M);s.set(M,y),M=A}return y},o=(x,y)=>{const M=a(x),A=a(y);M!==A&&s.set(M,A)},c=(x,y)=>{const M=e[x].world;return`${Math.round(M[y*3]*1e4)},${Math.round(M[y*3+1]*1e4)},${Math.round(M[y*3+2]*1e4)}`},l=x=>x.prim*3e6+x.nk,h=new Set;for(const x of i)h.add(l(x));const u=new Map;for(const x of t){const y=l(x);if(!h.has(y))continue;let M=u.get(y);M||u.set(y,M=[]),M.push(x)}for(const x of u.values()){x.sort((y,M)=>y.d-M.d);for(let y=0,M=1;M<=x.length;M++){if(M<x.length&&x[M].d-x[M-1].d<Zh)continue;const A=x.slice(y,M);if(y=M,!A.some(E=>i.has(E)))continue;const P=new Map;for(const E of A){s.set(E,E);for(const S of E.v){const I=c(E.prim,S),N=P.get(I);N?o(N,E):P.set(I,E)}}}}const f=new Map;for(const[x]of s){const y=a(x);let M=f.get(y);M||f.set(y,M={id:f.size,tris:[],area:0,dA:0,n:y.n,prim:y.prim,off:0}),M.tris.push(x),M.area+=x.area,M.dA+=x.d*x.area}for(const x of f.values())x.d=x.dA/x.area;const d=new Map;for(const{t1:x,t2:y,area:M}of n){const A=f.get(a(x)),P=f.get(a(y));if(!A||!P||A===P)continue;const[E,S]=A.id<P.id?[A,P]:[P,A],I=E.id*1e6+S.id;let N=d.get(I);N||d.set(I,N={a:E,b:S,area:0}),N.area+=M}const p=[];for(const x of d.values()){if(x.area<Sd)continue;const y=x.a.d-x.b.d;let M,A;if(Math.abs(y)>=va)[M,A]=y>0?[x.a,x.b]:[x.b,x.a];else if(Math.abs(y)>=Zh)[M,A]=y>0?[x.a,x.b]:[x.b,x.a];else{const P=x.area/x.a.area,E=x.area/x.b.area;[M,A]=P>E*1.02||Math.abs(P-E)<=E*.02&&x.a.area<=x.b.area?[x.a,x.b]:[x.b,x.a]}p.push({front:M,back:A,gap:Math.max(0,M.d-A.d)})}if(!p.length)return 0;for(let x=0;x<10;x++){let y=!1;for(const M of p){const A=M.back.off+Jh-M.gap;A>M.front.off+1e-6&&(M.front.off=Math.min(A,Jh*4),y=!0)}if(!y)break}const b=new Map,g=new je;let m=0;const _=new Map,v=new Map;for(const x of t){let y=v.get(x.prim);y||v.set(x.prim,y=[]),y.push(x)}for(const x of f.values()){if(x.off<=0)continue;m++;const y=e[x.prim];g.setFromMatrix4(y.M).invert();const M=new R(x.n[0]*x.off,x.n[1]*x.off,x.n[2]*x.off).applyMatrix3(g);let A=b.get(y.geo);A||b.set(y.geo,A=new Map);const P=new Set;for(const I of x.tris)for(const N of I.v)P.add(N);const E=I=>{const N=A.get(I);(!N||N.mag<x.off)&&A.set(I,{x:M.x,y:M.y,z:M.z,mag:x.off})};for(const I of P)E(I);let S=_.get(x.prim);if(!S){S=new Map;for(const N of v.get(x.prim)||[])for(const O of N.v){let z=S.get(O);z||S.set(O,z=[]),z.push(N)}_.set(x.prim,S),S.byPos=new Map;const I=y.geo.attributes.position.count;for(let N=0;N<I;N++){const O=c(x.prim,N);let z=S.byPos.get(O);z||S.byPos.set(O,z=[]),z.push(N)}}for(const I of P)for(const N of S.byPos.get(c(x.prim,I))||[]){if(P.has(N))continue;(S.get(N)||[]).some(z=>z.n[0]*x.n[0]+z.n[1]*x.n[1]+z.n[2]*x.n[2]>.999&&Math.abs(z.d-x.d)<va)||E(N)}}for(const[x,y]of b){const M=x.attributes.position;for(const[A,P]of y)M.setXYZ(A,M.getX(A)+P.x,M.getY(A)+P.y,M.getZ(A)+P.z);M.isInterleavedBufferAttribute?M.data.needsUpdate=!0:M.needsUpdate=!0,x.computeBoundingBox(),x.computeBoundingSphere()}return m}const N_=["Window glow","Lamp glass","Lamp star","Lantern glow","Street glow","Porch glass","Headlamp glass","Tamo glow","Garland glow"];class U_{constructor(e="./models/"){this.base=e,this.loader=new jv,this.loader.setMeshoptDecoder(T_),this.cache=new Map,this.missing=new Set,this.glow=new Map}async load(e,t){let n=0;await Promise.all(e.map(async i=>{await this.get(i),t?.(++n/e.length,i)}))}get(e){return this.cache.has(e)||this.cache.set(e,new Promise(t=>{this.loader.load(`${this.base}${e}.glb`,n=>{this.prepare(e,n),t(n)},void 0,()=>{this.missing.add(e),t(null)})})),this.cache.get(e)}prepare(e,t){if(t.scene.traverse(n=>{if(n.isMesh){n.castShadow=!0,n.receiveShadow=!0;for(const i of[n.material].flat())n.geometry.attributes.color&&(i.vertexColors=!0),N_.includes(i.name)&&(this.glow.has(i.name)||this.glow.set(i.name,new Set),this.glow.get(i.name).add(i),(!i.emissive||i.emissive.getHex()===0)&&(i.emissive=new he("#ffb347")),i.userData.baseEmissive=i.emissive.clone(),i.emissiveIntensity=0)}}),t.scene.userData.rigged=t.animations.length>0,t.scene.userData.name=e,!t.scene.userData.rigged&&!e.startsWith("kf-")){const n=performance.now();try{t.scene.userData.coplanarFixed=D_(t.scene)}catch(i){console.warn(`coplanar fix skipped for ${e}`,i)}this.coplanarMs=(this.coplanarMs||0)+performance.now()-n}}clone(e){const t=this.resolved?.get(e);if(!t)return null;const n=t.animations.length?A_(t.scene):t.scene.clone(!0);return n.userData.clips=t.animations,n.userData.model=e,n}async finalize(){this.resolved=new Map;for(const[e,t]of this.cache){const n=await t;n&&this.resolved.set(e,n)}}has(e){return this.resolved?.has(e)??!1}gltf(e){return this.resolved?.get(e)??null}parts(e){const t=this.gltf(e);if(!t)return[];const n=[];return t.scene.updateMatrixWorld(!0),t.scene.traverse(i=>{i.isMesh&&!i.isSkinnedMesh&&n.push({geometry:i.geometry,material:i.material,matrix:i.matrixWorld.clone(),name:i.name,parent:i.parent?.name})}),n}setGlow(e,t,n){const i=this.glow.get(e);if(i)for(const s of i)n&&s.emissive.set(n),s.emissiveIntensity=t}}function wd(r,e=[2,2,2],t="#d9745a"){const n=new dt,i=new Qe(new Zn(...e),new qt({color:t,roughness:.7}));return i.position.y=e[1]/2,i.castShadow=i.receiveShadow=!0,n.add(i),n.userData.placeholder=r,n}function k_(r,e,t,n,i){const s=i*i,a=s*i;return .5*(2*e+(-r+t)*i+(2*r-5*e+4*t-n)*s+(-r+3*e-3*t+n)*a)}class Ed{constructor(e,t=1){this.dims=e[0].length;const n=[],i=e.length;for(let s=0;s<i-1;s++){const a=e[Math.max(s-1,0)],o=e[s],c=e[s+1],l=e[Math.min(s+2,i-1)],h=Math.hypot(c[0]-o[0],c[1]-o[1]),u=Math.max(2,Math.ceil(h/t));for(let f=0;f<u;f++){const d=f/u,p=[];for(let b=0;b<this.dims;b++)p.push(k_(a[b],o[b],c[b],l[b],d));n.push(p)}}n.push([...e[i-1]]),this.pts=n,this.len=[0];for(let s=1;s<n.length;s++)this.len.push(this.len[s-1]+Math.hypot(n[s][0]-n[s-1][0],n[s][1]-n[s-1][1]));this.length=this.len[this.len.length-1],this.cell=16,this.grid=new Map;for(let s=0;s<n.length-1;s++){const[a,o]=n[s],[c,l]=n[s+1],h=Math.floor(Math.min(a,c)/this.cell),u=Math.floor(Math.max(a,c)/this.cell),f=Math.floor(Math.min(o,l)/this.cell),d=Math.floor(Math.max(o,l)/this.cell);for(let p=h;p<=u;p++)for(let b=f;b<=d;b++){const g=p*73856093^b*19349663;let m=this.grid.get(g);m||this.grid.set(g,m=[]),m.push(s)}}}at(e){e=Math.max(0,Math.min(this.length,e));let t=0,n=this.len.length-1;for(;n-t>1;){const l=t+n>>1;this.len[l]<=e?t=l:n=l}const i=this.pts[t],s=this.pts[n],a=this.len[n]-this.len[t]||1,o=(e-this.len[t])/a,c={x:i[0]+(s[0]-i[0])*o,z:i[1]+(s[1]-i[1])*o,tx:(s[0]-i[0])/a,tz:(s[1]-i[1])/a};return this.dims>2&&(c.y=i[2]+(s[2]-i[2])*o),c}nearest(e,t,n=1/0){const i=this.cell,s=Math.min(Math.ceil(n/i),64),a=Math.floor(e/i),o=Math.floor(t/i);let c=null;const l=g=>{const[m,_]=this.pts[g],[v,x]=this.pts[g+1],y=v-m,M=x-_,A=y*y+M*M||1e-9;let P=((e-m)*y+(t-_)*M)/A;P=P<0?0:P>1?1:P;const E=m+y*P,S=_+M*P,I=Math.hypot(e-E,t-S);(!c||I<c.d)&&(c={d:I,i:g,t:P,px:E,pz:S})};if(Number.isFinite(n)){const g=new Set;for(let m=a-s;m<=a+s;m++)for(let _=o-s;_<=o+s;_++){const v=this.grid.get(m*73856093^_*19349663);if(v)for(const x of v)g.has(x)||(g.add(x),l(x))}if(!c||c.d>n)return null}else for(let g=0;g<this.pts.length-1;g++)l(g);const h=this.pts[c.i],u=this.pts[c.i+1],f=this.len[c.i+1]-this.len[c.i]||1,d=(u[0]-h[0])/f,p=(u[1]-h[1])/f,b={d:c.d,s:this.len[c.i]+f*c.t,x:c.px,z:c.pz,tx:d,tz:p,side:Math.sign(d*(t-c.pz)-p*(e-c.px))};return this.dims>2&&(b.y=h[2]+(u[2]-h[2])*c.t),b}}const Os=(r,e,t)=>r<e?e:r>t?t:r,Qt=(r,e,t)=>r+(e-r)*t;function it(r,e,t){const n=Os((t-r)/(e-r),0,1);return n*n*(3-2*n)}function Td(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ai=(()=>{const r=Td(1337),e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){const n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return new Uint8Array([...e,...e])})(),F_=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function O_(r,e){const t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n,a=t&255,o=n&255,c=_=>_*_*_*(_*(_*6-15)+10),l=(_,v,x)=>{const y=F_[_&7];return y[0]*v+y[1]*x},h=ai[ai[a]+o],u=ai[ai[a]+o+1],f=ai[ai[a+1]+o],d=ai[ai[a+1]+o+1],p=c(i),b=c(s),g=Qt(l(h,i,s),l(f,i-1,s),p),m=Qt(l(u,i,s-1),l(d,i-1,s-1),p);return Qt(g,m,b)*.7071}function xn(r,e,t=4){let n=0,i=.5,s=1;for(let a=0;a<t;a++)n+=i*O_(r*s,e*s),s*=2.03,i*=.5;return n}const z_=0,yn=16,Bt=15.7,rs={minX:-200,maxX:200,minZ:-215,maxZ:185},bn={minX:-320,maxX:320,minZ:-330,maxZ:300},B_=[[34,-300],[30,-240],[22,-190],[8,-148],[-4,-108],[-3,-62],[3,-22],[11,18],[13,55],[6,95],[0,120],[-7,150],[-18,200],[-26,260],[-30,320]],Pi=new Ed(B_,1);function ur(r){return 7+Math.min(1,Math.max(0,(r+200)/360))*4.6}function H_(r){return r>92&&r<150?12:r>-90&&r<70?18:11}const G_=[[-262,34],[-228,58],[-196,82],[-164,102],[-130,116],[-98,119.5],[-70,120],[-50,120],[0,120],[50,120],[74,118],[102,108],[126,92],[143,72],[156,44],[165,6],[169,-34],[168,-80],[161,-126],[152,-170],[144,-216],[136,-262]],At=new Ed(G_,1),Cn={west:At.nearest(-186,88).s,east:At.nearest(150,-192).s},Vt={x0:-52,x1:52,z:120,brokenSpan:[0,14]},V_=[-35,-21,-7,7,21,35],xs={station:{x:-98},millIsland:{x:.6,z:-45},pen:{x:150,z:-38},halt:{x:143,z:72},shrineStairsBase:{x:62},bearSpot:{x:62,z:-121.2},forestHearth:{x:53,z:-121}},ll=[{kind:"disc",x:-98,z:116,r:34,f:26,t:16},{kind:"disc",x:-60,z:140,r:12,f:14,t:16.2},{kind:"disc",x:-50,z:121,r:7,f:10,t:15.7},{kind:"disc",x:50,z:121,r:7,f:10,t:15.7},{kind:"disc",x:-160,z:92,r:16,f:16,t:15.9},{kind:"disc",x:-45,z:15,r:48,f:26,t:3},{kind:"disc",x:-22,z:-45,r:9,f:8,t:1},{kind:"disc",x:115,z:8,r:38,f:26,t:21},{kind:"disc",x:150,z:-38,r:20,f:14,t:22},{kind:"disc",x:143,z:72,r:12,f:14,t:16},{kind:"disc",x:62,z:-156,r:13,f:14,t:24},{kind:"ramp",ax:62,az:-122,bx:62,bz:-140,ha:12,hb:24,w:3.2,f:5},{kind:"disc",x:62,z:-116,r:8,f:10,t:12},{kind:"ramp",ax:-86,az:100,bx:-60,bz:64,ha:15.6,hb:3.6,w:3,f:9},{kind:"landslide"}],Pa=[];for(const[r,e,t]of[[0,-73.5,3.2],[1,-85,4],[2,-96.5,4.8]])for(const[n,i]of[[0,-2],[1,9],[2,20],[3,31]])Pa.push({id:`paddy${r}${n}`,x:e,z:i+r%2*1.5,w:10.2,d:9.6,t:t+n*.12});for(const r of Pa)ll.push({kind:"rect",x:r.x,z:r.z,hw:r.w/2+.7,hd:r.d/2+.7,f:2.5,t:r.t-.05});const W_=[{kind:"disc",x:.6,z:-45,r:4.2,f:2.4,t:1.25},{kind:"disc",x:-6.5,z:-22,r:2.6,f:2.8,t:.25},{kind:"disc",x:-12.2,z:-45,r:1.6,f:1.8,t:-1.6},{kind:"rect",x:-9.6,z:-45,hw:1.1,hd:1.9,f:1.2,t:1.1},{kind:"ramp",ax:-16,az:-112,bx:8,bz:-112,ha:-.9,hb:-.9,w:3,f:3,onlyBelow:!0}],Ad=[{id:"station",model:"station",x:-98,z:109.4,rot:0},{id:"platform",model:"platform",x:-98,z:115.15,rot:0,y:yn-0},{id:"engineShed",model:"engine-shed",x:-164,z:84,rot:30},{id:"cottage",model:"signal-cottage",x:-60,z:140,rot:90},{id:"kw1",model:"kawabe-house-a",x:-56,z:48,rot:90},{id:"kw2",model:"kawabe-shop",x:-56,z:33,rot:90},{id:"kw3",model:"kawabe-house-a",x:-56,z:18,rot:90},{id:"kw4",model:"kawabe-house-b",x:-58,z:1,rot:90},{id:"kw5",model:"kawabe-house-a",x:-34,z:52,rot:-90},{id:"kw6",model:"kawabe-house-b",x:-33,z:12,rot:-90},{id:"kw7",model:"kawabe-house-a",x:-34,z:-13,rot:-90},{id:"kw8",model:"kawabe-shop",x:-56,z:-16,rot:90},{id:"otaHouse",model:"kawabe-house-b",x:-40,z:-47,rot:90},{id:"mill",model:"mill",x:-17.6,z:-45,rot:0,y:1},{id:"boathouse",model:"boathouse",x:-12.5,z:-6,rot:90,y:1.2},{id:"belltower",model:"belltower",x:115,z:-4,rot:0},{id:"bakery",model:"bakery",x:98,z:14,rot:90},{id:"tk1",model:"takamori-house-a",x:132,z:12,rot:-90},{id:"tk2",model:"takamori-house-b",x:101,z:-14,rot:90},{id:"tk3",model:"takamori-house-a",x:131,z:-18,rot:-90},{id:"tk4",model:"takamori-house-b",x:117,z:30,rot:180},{id:"tk5",model:"takamori-house-a",x:95,z:34,rot:145},{id:"tk6",model:"takamori-house-b",x:138,z:34,rot:215},{id:"haltPlatform",model:"platform",x:141.2,z:73.4,rot:-122,y:yn},{id:"shrine",model:"shrine",x:62,z:-158,rot:0},{id:"torii",model:"torii",x:62,z:-113.5,rot:0},{id:"toriiTop",model:"torii",x:62,z:-144.5,rot:0}],j_=[{id:"forest",name:"Forest Lamp",model:"star-lamp",x:71,z:-152,rot:0,chapter:3},{id:"mill",name:"Mill Lamp",model:"star-lamp",x:1.2,z:-45.6,rot:-90,chapter:1,y:1.25},{id:"orchard",name:"Orchard Lamp",model:null,building:"belltower",chapter:2},{id:"viaduct",name:"Viaduct Lamp",model:"lamp-viaduct",x:0,z:123,rot:0,y:Bt,chapter:4}],X_=[{w:2.6,pts:[[-104,104],[-92,98],[-80,88],[-68,74],[-56,60],[-47,46],[-45,20],[-45,-10],[-42,-28],[-30,-40],[-22,-45]]},{w:2,pts:[[-78,124],[-68,128],[-58,131.5],[-53.2,136.5],[-53,140]]},{w:1.8,pts:[[-45,30],[-30,30],[-16,30],[-3,30]]},{w:1.6,pts:[[-45,-2],[-30,-4],[-18,-6]]},{w:1.5,pts:[[-42,-28],[-48,-62],[-44,-92],[-30,-106],[-16,-112]]},{w:1.4,pts:[[-44,-92],[-52,-128],[-50,-158]]},{w:2.2,pts:[[26,30],[44,28],[66,22],[88,14],[104,6],[115,6]]},{w:2,pts:[[115,6],[128,0],[140,-18],[150,-30]]},{w:2,pts:[[115,6],[120,28],[132,48],[142,64]]},{w:1.8,pts:[[104,6],[92,-18],[82,-40],[84,-66],[85,-82]]},{w:1.5,pts:[[85,-82],[82,-98],[72,-110],[62,-118]]},{w:1.3,pts:[[62,-118],[40,-114],[18,-112],[6,-112]]}],q_=[[3.6,-111.7],[1.3,-112.5],[-1,-111.8],[-3.3,-112.6],[-5.6,-111.9],[-7.9,-112.6],[-10.2,-111.9]],K_=[{x:-1.8,z:30,rot:90,n:2},{x:25.2,z:30,rot:-90,n:2},{x:-7.5,z:-1.5,rot:90,n:1}],as={x0:50,x1:96,z0:-72,z1:-30,spacing:7.5},Y_=[[60,-62],[78,-66],[92,-50],[56,-38],[74,-34]],$_={z:-80,x0:6,x1:178,gateX:85,gateW:4},J_=[[-98,114,22],[-60,140,12],[-45,20,50],[-18,-44,14],[0,-45,6],[-12,-6,9],[115,8,40],[150,-38,22],[143,72,14],[62,-156,16],[62,-128,10],[-164,84,18],[53,-121,6],[-50,-161,7],[24.5,30,8],[1,30,8],[-85,14.5,25]],Lt={x:-50,z:-168,y:7.7,x0:-12,x1:12,y0:-6,y1:12,run:12.5,rise:9,head:9.4,hc:2.6,w0:3,wmax:7.8},Oe=Lt,Z_=[["rock",-2.78,4.85,.7,2.07],["rock",-4.92,6.17,.62,3.07],["rock",-.18,3.15,1.18,1.79],["rock",2.01,2.42,1.09,1.51],["rock",-3.09,1.07,.96,1.37],["rock",3.53,6.83,.8,3.47],["rock",4.31,8.01,.38,3.63],["rock",2.17,6.19,.52,2.61],["rock",-.86,7.55,.61,3.23],["rock",3.08,.65,.84,1.51],["rock",2.79,-2.37,.83,1.61],["rock",.41,.36,1.06,1.7],["rock",.46,-.76,.95,1.55],["rock",-2.15,-2.17,.98,1.97],["rock",5.2,-.85,.69,1.34],["rock",-3.18,-2.47,.77,1.19],["rock",-3.32,-2.03,.95,2.01],["rock",-3.01,.02,.96,1.47],["rock",2.07,-2.24,1.12,1.88],["rock",-.06,-2.55,.79,1.47],["log",1.2,8.6,4.37,-2,1.2,.78,.42],["log",-6.2,-2.4,.52,4.6,-1,1,.36],["log",5.5,5,2.49,1.8,.6,.46,.28],["stump",-8.8,8.5,.4,8]],Q_=[["tree-cedar",3.2,10.9,1,13],["tree-cedar",-5.8,11.6,1.05,0],["tree-maple",.2,12.9,1,0],["tree-cedar",7.4,11.4,1.1,0],["tree-cedar",-2.4,15.6,1.2,0],["tree-pine",10.8,14.2,1,0],["tree-maple",-10.2,13.2,.95,0],["tree-cedar",-11.2,7.2,1,0],["tree-maple",-13.6,2.6,.9,0],["tree-cedar",11.6,7.8,1.05,0],["tree-maple",13.8,2.8,.85,0],["tree-cedar",12.4,4.4,.95,0],["bush-a",-9.6,4.2,1,0],["bush-b",9.9,6,.9,0],["bush-a",9.4,1.4,.8,0],["bush-b",-9.2,9.4,.9,0]],Ia=(r,e,t)=>.5*Math.sin(r*1.31+e*.47+t)+.35*Math.sin(r*.53-e*1.19+t*2.3)+.15*Math.sin((r+e)*2.03+t*.7);function dr(r){const e=Os(r/Oe.run,0,1);return Oe.rise*(.4*e*e*(3-2*e)+.6*e)}const ey=r=>Oe.w0+(Oe.wmax-Oe.w0)*Math.sin(Os((r+2)/10,0,1)*Math.PI/2)**1.3,ty=r=>ey(r)*(1+.08*Ia(r*.55,0,7)),ny=r=>Oe.head-Oe.hc*(r/Oe.wmax)*(r/Oe.wmax);function hl(r,e){const t=Math.abs(r)/ty(e);if(t>=1)return 0;let n=(.7+3.1*Os((e+1.5)/(Oe.head+1.5),0,1)**1.2)*it(-2.5,-.5,e);const i=ny(r);return e>i&&(n*=Math.max(0,1-(e-i)/.7)),n*(1-t**4)}function ul(r,e){return 1.6*Math.max(0,1-Math.hypot(r/8.5,(e-.2)/(e<.2?5:3.6)))**1.4*(1+.3*Ia(r*.45,e*.5,4))}const iy=(r,e)=>hl(r,e)>.12||ul(r,e)>.12;function sy(r,e){const t=hl(r,e),n=ul(r,e),i=it(.05,.5,t+n);return dr(e)-t+n+i*(.16*Ia(r*.75,e*.7,3)+.08*Ia(r*1.7,e*1.5,9))}const di=[],Mn=[];for(let r=0;r<45;r++)di.push(Oe.x0+(Oe.x1-Oe.x0)*r/44);for(let r=0;r<21;r++)Mn.push(Oe.y0+(6.2-Oe.y0)*r/20);for(let r=1;r<13;r++)Mn.push(6.2+.35*r);for(let r=1;r<4;r++)Mn.push(10.4+(Oe.y1-10.4)*r/3);const Ii=di.length,ry=di[1]-di[0],rr=new Float64Array(Ii*Mn.length);for(let r=0;r<Mn.length;r++)for(let e=0;e<Ii;e++)rr[r*Ii+e]=sy(di[e],Mn[r]);function Rd(r,e){if(!(r>=Oe.x0&&r<=Oe.x1&&e>=Oe.y0&&e<=Oe.y1))return null;const t=Math.min(Ii-2,Math.floor((r-Oe.x0)/ry));let n=0;for(;n<Mn.length-2&&e>Mn[n+1];)n++;const i=(r-di[t])/(di[t+1]-di[t]),s=(e-Mn[n])/(Mn[n+1]-Mn[n]),a=n*Ii+t,o=rr[a],c=rr[a+1],l=rr[a+Ii],h=rr[a+Ii+1];return i>=s?o+(c-o)*i+(h-c)*s:o+(h-l)*i+(l-o)*s}const Js=(r,e)=>({x:Oe.x+r,z:Oe.z-e});function Qh(r,e){const t=Rd(r-Oe.x,Oe.z-e);return t===null?null:Oe.y+t}const eu=22,tu=10,Po=44,ay=.14;function oy(r,e){let t=0;const n=Math.floor(r/e)*e;for(const i of[n-e,n]){const s=dr(i),a=dr(i+e);for(let o=1;o<12;o++){const c=o/12;t=Math.max(t,dr(i+e*c)-Qt(s,a,c))}}return t}function cy(r,e,t){const n=t*Math.SQRT2+.15,i=.25;let s=1/0;for(let a=Math.max(Oe.y0,e-n);a<=Math.min(Oe.y1,e+n);a+=i){const o=Math.sqrt(Math.max(0,n*n-(a-e)*(a-e)));for(let c=Math.max(Oe.x0,r-o);c<=Math.min(Oe.x1,r+o);c+=i){if(hl(c,a)<=.02&&ul(c,a)<=.02)continue;const l=Rd(c,a);l<s&&(s=l)}}return s-ay}function ly(r,e,t,n=2){const i=e-Oe.x,s=Oe.z-t,a=Math.max(0,Math.abs(i)-Oe.x1),o=Math.max(0,Oe.y0-s);if(a>=eu||o>=tu||s>Po+20)return r;const c=.02*a*a;let l=Oe.y+dr((s-c)*Oe.run/(Oe.run+.8*a))+.08+oy(s,n);s>Oe.y1&&(l+=.07*(s-Oe.y1)-1.8*it(Oe.y1,Oe.y1+16,s)*(i/18)**2);const h=Math.max(a,o,s-Oe.y1);h>0&&(l+=it(0,6,h)*(1.1*xn(e/19+4,t/19-1)+.35*xn(e/6.5-2,t/6.5+5))),s>Oe.y1&&(l=Math.max(l,r));const u=(1-it(0,eu,a))*(1-it(0,tu,o))*(1-it(Po,Po+20,s));let f=Qt(r,l,u);return i>Oe.x0+.01&&i<Oe.x1-.01&&s>Oe.y0+.01&&s<Oe.y1-.01&&(f=Math.min(f,Oe.y+cy(i,s,n))),f}function Cd(r,e,t,n,i){if(e.kind==="landslide")return ly(r,t,n,i);if(e.kind==="rect"){const b=Math.abs(t-e.x)-e.hw,g=Math.abs(n-e.z)-e.hd,m=Math.max(b,g);if(m>=e.f)return r;const _=1-it(0,e.f,m);return Qt(r,e.t,_)}if(e.kind==="disc"){const b=Math.hypot(t-e.x,n-e.z);if(b>=e.r+e.f)return r;const g=1-it(e.r,e.r+e.f,b);return e.onlyBelow&&r>=e.t?r:Qt(r,e.t,g)}const s=e.bx-e.ax,a=e.bz-e.az,o=s*s+a*a;let c=((t-e.ax)*s+(n-e.az)*a)/o;const l=Os(c,0,1),h=e.ax+s*l,u=e.az+a*l,f=Math.hypot(t-h,n-u)+Math.max(0,Math.abs(c-l)*Math.sqrt(o));if(f>=e.w+e.f)return r;const d=Qt(e.ha,e.hb,l);if(e.onlyBelow&&r>=d)return r;const p=1-it(e.w,e.w+e.f,f);return Qt(r,d,p)}function hy(r,e,t=2){let n=3+19*it(10,94,r);n+=10*it(-92,-215,e)*(.75+.5*xn(r/70+3,e/70)),n=Qt(n,15.5+3*xn(r/50,e/50+7),it(88,112,e)*(1-it(-130,-170,r))),n+=13*it(-72,-175,r)*(.65+.5*xn(r/45-5,e/45)),n+=2.6*xn(r/64,e/64)+.55*xn(r/17+11,e/17-4);const i=r/196,s=(e+15)/206,a=Math.sqrt(Math.sqrt(i*i*i*i+s*s*s*s))+.06*xn(r/45+20,e/45-9);if(a>.84){let c=it(.84,1.12,a)*(30+22*xn(r/38-3,e/38+5));const l=1-Math.abs(xn(r/110+7,e/110-2)*2);c+=it(1.08,1.55,a)*(70+95*l*l);const h=e<-150?Qt(8,34,(e+148)/-152):e>130?Qt(-4,-30,(e-130)/190):null;h!==null&&(c*=1-.9*(1-it(16,120,Math.abs(r-h)))),n+=c}for(const c of ll)n=Cd(n,c,r,e,t);if(!(r>Vt.x0+4&&r<Vt.x1-4&&Math.abs(e-Vt.z)<14)){const c=At.nearest(r,e,26);if(c&&c.s>Cn.west-2&&c.s<Cn.east+2){const l=yn-.42,h=1-it(3.4,3.4+16,c.d);n=Qt(n,l,h)}}return n}function uy(r,e,t=2){let n=hy(r,e,t);const i=Pi.nearest(r,e,60);if(i){const s=ur(i.z),a=Math.min(46,H_(i.z)+Math.max(0,n-22)*1.6),o=-2.4+2.62*it(s*.25,s+1.6,i.d),c=it(s-1.2,s+a,i.d);n=Qt(o,Math.max(n,.22),c)}for(const s of W_)n=Cd(n,s,r,e,t);return n}class dl{constructor(e=2,t=bn,n=uy){this.step=e,this.x0=t.minX,this.z0=t.minZ,this.nx=Math.floor((t.maxX-t.minX)/e)+1,this.nz=Math.floor((t.maxZ-t.minZ)/e)+1,this.h=new Float32Array(this.nx*this.nz);for(let i=0;i<this.nz;i++){const s=this.z0+i*e;for(let a=0;a<this.nx;a++)this.h[i*this.nx+a]=n(this.x0+a*e,s,e)}}static fromArray(e,t){const n=Object.create(dl.prototype);return Object.assign(n,e),n.h=t,n}get(e,t){return e=e<0?0:e>=this.nx?this.nx-1:e,t=t<0?0:t>=this.nz?this.nz-1:t,this.h[t*this.nx+e]}meshHeightAt(e,t){const n=(e-this.x0)/this.step,i=(t-this.z0)/this.step,s=Math.floor(n),a=Math.floor(i),o=n-s,c=i-a,l=this.get(s,a),h=this.get(s+1,a),u=this.get(s,a+1),f=this.get(s+1,a+1);return o+c<=1?l+(h-l)*o+(u-l)*c:f+(u-f)*(1-o)+(h-f)*(1-c)}heightAt(e,t){const n=this.meshHeightAt(e,t),i=Qh(e,t);return i!==null&&i>n?i:n}visibleHeights(){const e=Float32Array.from(this.h),t=Math.max(0,Math.floor((Lt.x+Lt.x0-this.x0)/this.step)),n=Math.min(this.nx-1,Math.ceil((Lt.x+Lt.x1-this.x0)/this.step)),i=Math.max(0,Math.floor((Lt.z-Lt.y1-this.z0)/this.step)),s=Math.min(this.nz-1,Math.ceil((Lt.z-Lt.y0-this.z0)/this.step));for(let a=i;a<=s;a++)for(let o=t;o<=n;o++){const c=Qh(this.x0+o*this.step,this.z0+a*this.step);c!==null&&c>e[a*this.nx+o]&&(e[a*this.nx+o]=c)}return e}normalAt(e,t){const n=this.step*.5,i=this.heightAt(e+n,t)-this.heightAt(e-n,t),s=this.heightAt(e,t+n)-this.heightAt(e,t-n),a=-i,o=2*n,c=-s,l=Math.hypot(a,o,c);return{nx:a/l,ny:o/l,nz:c/l}}slopeAt(e,t){const n=this.normalAt(e,t);return Math.acos(Os(n.ny,-1,1))*180/Math.PI}}const zs={spring:{grass:["#5db53a","#8ec84a","#3d9636"],dirt:"#c08f58",sand:"#d5bf8f",rock:"#a29a8e",forest:"#4f7f2c",leaves:"#7cc646",needles:"#3c7f3a",maple:"#98d04c",blossom:"#ffadc9",peachLeaves:"#6cbc42",snow:0,grassDensity:1,bareTrees:!1,particles:"petals",sky:{zenith:"#2f86ea",horizon:"#bfe5ff"},fog:"#b9dcff",sunTint:"#fff1d8"},summer:{grass:["#48a837","#72bd40","#2d8633"],dirt:"#b98552",sand:"#d8c28e",rock:"#a0978a",forest:"#3d7229",leaves:"#3f9e38",needles:"#2f7436",maple:"#52ad3c",blossom:"#5fae3e",peachLeaves:"#4aa83a",snow:0,grassDensity:1.15,bareTrees:!1,particles:"fireflies",sky:{zenith:"#1f7ae8",horizon:"#a6dbff"},fog:"#aad6ff",sunTint:"#fff4dd"},autumn:{grass:["#b8b04a","#d6a442","#8f9c3b"],dirt:"#ad774a",sand:"#dcc088",rock:"#9c9184",forest:"#8a6a2e",leaves:"#ee9a2a",needles:"#3b6c35",maple:"#e23b28",blossom:"#e8672c",peachLeaves:"#d9a232",snow:0,grassDensity:.85,bareTrees:!1,particles:"leaves",sky:{zenith:"#2f7fd8",horizon:"#ffdcab"},fog:"#f2d9b8",sunTint:"#ffe3b4"},winter:{grass:["#eef3fa","#e3ebf6","#d6e2f0"],dirt:"#9c8a78",sand:"#d9d6cc",rock:"#8f8c88",forest:"#e8eef7",leaves:"#3f6a44",needles:"#2c5a3a",maple:"#3f6a44",blossom:"#3f6a44",peachLeaves:"#3f6a44",snow:1,grassDensity:0,bareTrees:!0,particles:"snow",sky:{zenith:"#4d8fdc",horizon:"#dcecff"},fog:"#d8e8fb",sunTint:"#fff2e6"}},ca=[{h:0,zenith:"#050b1f",horizon:"#0f1f45",fog:"#0d1a38",sun:"#9fb8ff",sunI:.55,hemi:.3,env:.22,stars:1,seasonSky:0,night:1},{h:4.8,zenith:"#060d24",horizon:"#14264f",fog:"#122347",sun:"#9fb8ff",sunI:.5,hemi:.3,env:.18,stars:1,seasonSky:0,night:1},{h:6,zenith:"#2a55a8",horizon:"#ffb07a",fog:"#e9b08a",sun:"#ffb27a",sunI:1.2,hemi:.45,env:.4,stars:.2,seasonSky:.2,night:.35},{h:7.5,zenith:"#3b86e6",horizon:"#ffe0bb",fog:"#f4dcc0",sun:"#ffd9a8",sunI:2.6,hemi:.8,env:.7,stars:0,seasonSky:.7,night:0},{h:10,zenith:"#ffffff",horizon:"#ffffff",fog:"#ffffff",sun:"#ffffff",sunI:3.3,hemi:1,env:.85,stars:0,seasonSky:1,night:0},{h:15,zenith:"#ffffff",horizon:"#ffffff",fog:"#ffffff",sun:"#ffffff",sunI:3.3,hemi:1,env:.85,stars:0,seasonSky:1,night:0},{h:17.2,zenith:"#3a7fe0",horizon:"#ffd08c",fog:"#f7cf98",sun:"#ffc27a",sunI:3,hemi:.85,env:.75,stars:0,seasonSky:.55,night:0},{h:18.4,zenith:"#2b5cb8",horizon:"#ff9a52",fog:"#e59a66",sun:"#ff9448",sunI:2,hemi:.6,env:.5,stars:.05,seasonSky:.15,night:.2},{h:19.3,zenith:"#132c66",horizon:"#3b4f8a",fog:"#2a3a6a",sun:"#8aa4ff",sunI:.5,hemi:.32,env:.28,stars:.6,seasonSky:0,night:.8},{h:20.5,zenith:"#050b1f",horizon:"#0f1f45",fog:"#0d1a38",sun:"#9fb8ff",sunI:.55,hemi:.3,env:.22,stars:1,seasonSky:0,night:1},{h:24,zenith:"#050b1f",horizon:"#0f1f45",fog:"#0d1a38",sun:"#9fb8ff",sunI:.55,hemi:.3,env:.22,stars:1,seasonSky:0,night:1}];function os(r){const e=parseInt(r.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}const Io=(r,e,t)=>r.map((n,i)=>n+(e[i]-n)*t),dy=r=>{const e=Math.min(1,Math.max(0,r));return e*e*(3-2*e)},fy=(r,e)=>r.map((t,n)=>t*e[n]);function py(r,e="summer"){const t=({spring:52,summer:64,autumn:44,winter:30}[e]??55)*Math.PI/180,n=(r-5.6)/13.4*Math.PI,i=Math.sin(Math.min(Math.max(n,-.3),Math.PI+.3))*t,s=Math.cos(i);return{x:Math.cos(n)*s,y:Math.sin(i),z:Math.sin(n)*s*.8+.2*s}}function my(r,e){e=(e%24+24)%24;let t=0;for(;t<ca.length-2&&ca[t+1].h<=e;)t++;const n=ca[t],i=ca[t+1],s=(e-n.h)/(i.h-n.h||1),a=s*s*(3-2*s),o=zs[r],c=S=>Io(os(n[S]),os(i[S]),a),l=S=>n[S]+(i[S]-n[S])*a,h=l("seasonSky"),u=(S,I)=>Io(S,I,h),f=u(c("zenith"),os(o.sky.zenith)),d=u(c("horizon"),os(o.sky.horizon)),p=u(c("fog"),os(o.fog)),b=l("night"),g=dy((b-.3)/.4),m=fy(c("sun"),Io(os(o.sunTint),[1,1,1],g)),_=r==="winter"?.9:1,v=py(e,r),x={x:-.45,y:.72,z:.52},y=v.x+(x.x-v.x)*g,M=Math.max(v.y,.1)+(x.y-Math.max(v.y,.1))*g,A=v.z+(x.z-v.z)*g,P=Math.hypot(y,M,A),E=g<=0?v:g>=1?x:{x:y/P,y:M/P,z:A/P};return{hour:e,season:r,night:b,zenith:f,horizon:d,fog:p,sunColor:m,sunIntensity:l("sunI")*_,hemi:l("hemi"),env:l("env"),stars:l("stars"),sunDir:v,lightDir:E}}function gy(r=256){const e=new Uint8Array(r*r*4),t=(s,a)=>{const o=new Float32Array(s*s);let c=a*9301+49297;for(let l=0;l<o.length;l++)c=(c*9301+49297)%233280,o[l]=c/233280;return(l,h)=>{const u=Math.floor(l),f=Math.floor(h),d=l-u,p=h-f,b=d*d*(3-2*d),g=p*p*(3-2*p),m=(M,A)=>o[(A%s+s)%s*s+(M%s+s)%s],_=m(u,f),v=m(u+1,f),x=m(u,f+1),y=m(u+1,f+1);return _+(v-_)*b+(x-_)*g+(_-v-x+y)*b*g}},n=[[4,1],[8,2],[16,3],[32,4]].map(([s,a])=>{const o=[t(s,a),t(s*2,a+10),t(s*4,a+20)];return(c,l)=>o[0](c*s,l*s)*.57+o[1](c*s*2,l*s*2)*.29+o[2](c*s*4,l*s*4)*.14});for(let s=0;s<r;s++)for(let a=0;a<r;a++){const o=a/r,c=s/r,l=(s*r+a)*4;for(let h=0;h<4;h++)e[l+h]=Math.max(0,Math.min(255,n[h](o,c)*255))}const i=new Tr(e,r,r,Zt);return i.wrapS=i.wrapT=Ni,i.magFilter=Dt,i.minFilter=In,i.generateMipmaps=!0,i.anisotropy=4,i.needsUpdate=!0,i}const oi=r=>new he(r);class by{constructor(e,t=20){this.x0=rs.minX-t,this.z0=rs.minZ-t,this.w=Math.ceil(rs.maxX-rs.minX+t*2),this.h=Math.ceil(rs.maxZ-rs.minZ+t*2),this.data=new Uint8Array(this.w*this.h*4);const n=this.data;for(let i=0;i<this.h;i++)for(let s=0;s<this.w;s++){const a=this.x0+s+.5,o=this.z0+i+.5,c=e.heightAt(a,o),l=(i*this.w+s)*4,h=1-Zs(.25,.85,c);n[l+1]=h*255;const u=e.slopeAt(a,o);n[l+3]=Math.max(0,1-h*1.3-Zs(28,38,u))*255}for(const i of X_)this.paintPolyline(i.pts,i.w);this.texture=new Tr(n,this.w,this.h,Zt),this.texture.magFilter=Dt,this.texture.minFilter=Dt,this.texture.needsUpdate=!0}paintPolyline(e,t){for(let n=0;n<e.length-1;n++){const[i,s]=e[n],[a,o]=e[n+1],c=t/2+1.6,l=Math.floor(Math.min(i,a)-c-this.x0),h=Math.ceil(Math.max(i,a)+c-this.x0),u=Math.floor(Math.min(s,o)-c-this.z0),f=Math.ceil(Math.max(s,o)+c-this.z0),d=a-i,p=o-s,b=d*d+p*p||1;for(let g=Math.max(0,u);g<=Math.min(this.h-1,f);g++)for(let m=Math.max(0,l);m<=Math.min(this.w-1,h);m++){const _=this.x0+m+.5,v=this.z0+g+.5;let x=((_-i)*d+(v-s)*p)/b;x=x<0?0:x>1?1:x;const y=Math.hypot(_-(i+d*x),v-(s+p*x)),M=Math.sin(_*.9+v*.4)*.25+Math.sin(v*1.3-_*.2)*.2,A=1-Zs(t/2-.4+M,t/2+.9+M,y);if(A<=0)continue;const P=(g*this.w+m)*4;this.data[P]=Math.max(this.data[P],A*255),this.data[P+3]=Math.min(this.data[P+3],(1-A)*255)}}}paintRect(e,t,n,i,s,a,o,c=1){const l=s*Math.PI/180,h=Math.cos(l),u=Math.sin(l),f=Math.hypot(n,i)+c+1;for(let d=Math.floor(t-f-this.z0);d<=Math.ceil(t+f-this.z0);d++)if(!(d<0||d>=this.h))for(let p=Math.floor(e-f-this.x0);p<=Math.ceil(e+f-this.x0);p++){if(p<0||p>=this.w)continue;const b=this.x0+p+.5-e,g=this.z0+d+.5-t,m=b*h-g*u,_=b*u+g*h,v=Math.abs(m)-n,x=Math.abs(_)-i,y=Math.max(v,x),M=1-Zs(0,c,y);if(M<=0)continue;const A=(d*this.w+p)*4+a;this.data[A]=this.data[A]+(o*255-this.data[A])*M}this.texture.needsUpdate=!0}paintDisc(e,t,n,i,s,a=1.5){for(let o=Math.floor(t-n-a-this.z0);o<=Math.ceil(t+n+a-this.z0);o++)if(!(o<0||o>=this.h))for(let c=Math.floor(e-n-a-this.x0);c<=Math.ceil(e+n+a-this.x0);c++){if(c<0||c>=this.w)continue;const l=Math.hypot(this.x0+c+.5-e,this.z0+o+.5-t),h=1-Zs(n,n+a,l);if(h<=0)continue;const u=(o*this.w+c)*4+i;this.data[u]=this.data[u]+(s*255-this.data[u])*h}this.texture.needsUpdate=!0}sample(e,t,n){const i=Math.floor(e-this.x0),s=Math.floor(t-this.z0);return i<0||s<0||i>=this.w||s>=this.h?0:this.data[(s*this.w+i)*4+n]/255}}function Zs(r,e,t){const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)}class xy{constructor(e,t,n){this.grid=t,this.splat=n,this.noise=gy(256),this.uniforms={uSplat:{value:n.texture},uSplatOrigin:{value:new ie(n.x0,n.z0)},uSplatSize:{value:new ie(n.w,n.h)},uNoise:{value:this.noise},uGrassA:{value:new he},uGrassB:{value:new he},uGrassC:{value:new he},uDirt:{value:new he},uSand:{value:new he},uRock:{value:new he},uForest:{value:new he},uSnow:{value:0},uMountain:{value:new he("#3f6b4a")}};const i=new qt({roughness:.94,metalness:0,envMapIntensity:.35});i.onBeforeCompile=s=>{Object.assign(s.uniforms,this.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying vec3 vWNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNormal = normalize(mat3(modelMatrix) * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
          varying vec3 vWPos; varying vec3 vWNormal;
          uniform sampler2D uSplat, uNoise; uniform vec2 uSplatOrigin, uSplatSize;
          uniform vec3 uGrassA, uGrassB, uGrassC, uDirt, uSand, uRock, uForest, uMountain; uniform float uSnow;`).replace("#include <map_fragment>",`
          vec2 suv = (vWPos.xz - uSplatOrigin) / uSplatSize;
          float inside = step(0.0, suv.x) * step(suv.x, 1.0) * step(0.0, suv.y) * step(suv.y, 1.0);
          vec4 sp = texture2D(uSplat, suv) * inside;
          vec4 n1 = texture2D(uNoise, vWPos.xz * 0.006);
          vec4 n2 = texture2D(uNoise, vWPos.xz * 0.031);
          vec4 n3 = texture2D(uNoise, vWPos.xz * 0.21);
          vec4 n4 = texture2D(uNoise, vWPos.xz * 1.37);
          vec4 n5 = texture2D(uNoise, vWPos.xz * vec2(4.1, 2.3));
          float slope = 1.0 - clamp(vWNormal.y, 0.0, 1.0);
          vec3 g = mix(uGrassA, uGrassB, smoothstep(0.38, 0.66, n1.r));
          g = mix(g, uGrassC, smoothstep(0.42, 0.9, n2.g) * 0.45);
          g *= 0.86 + 0.2 * n3.b;
          g *= 0.9 + 0.14 * n4.r + 0.1 * (n5.g - 0.5);
          vec3 col = mix(g, uForest * (0.85 + 0.3 * n2.r), sp.b);
          // mountains outside the valley: darker forest with rocky tops
          float mountain = 1.0 - inside;
          mountain = max(mountain, smoothstep(34.0, 60.0, vWPos.y));
          col = mix(col, uMountain * (0.8 + 0.35 * n1.g), mountain * 0.85);
          vec3 dirt = uDirt * (0.82 + 0.3 * n3.r) * (0.9 + 0.22 * n4.g);
          dirt = mix(dirt, dirt * 1.25, smoothstep(0.62, 0.7, n5.b)); // pebbles
          col = mix(col, dirt, sp.r);
          col = mix(col, uSand * (0.9 + 0.2 * n3.g), sp.g * (1.0 - sp.r));
          float rockAt = mix(0.30, 0.5, mountain);
          float rock = smoothstep(rockAt, rockAt + 0.12, slope + (n2.b - 0.5) * 0.14);
          vec3 rk = uRock * (0.72 + 0.42 * n2.b) * (0.86 + 0.24 * n3.a) * (0.9 + 0.18 * n4.b);
          rk = mix(rk, rk * 0.72, smoothstep(0.55, 0.62, n4.a)); // cracks and strata
          col = mix(col, rk, rock);
          col = mix(col, col * vec3(0.52, 0.66, 0.7), smoothstep(0.15, -1.6, vWPos.y));
          float snowCap = smoothstep(120.0, 170.0, vWPos.y + n1.a * 30.0);
          float snow = max(uSnow * (1.0 - sp.r * 0.45) * smoothstep(0.08, 0.02, slope * (1.0 - n2.a * 0.3)), snowCap * smoothstep(0.4, 0.2, slope));
          snow *= smoothstep(-0.2, 0.4, vWPos.y);
          col = mix(col, vec3(0.93, 0.96, 1.0) * (0.95 + 0.08 * n3.r), snow);
          diffuseColor.rgb *= col;
        `)},this.material=i,this.group=new dt,this.group.name="terrain",this.buildChunks(64),e.add(this.group)}buildChunks(e){const t=this.grid,n=t.nx,i=t.nz;for(let s=0;s<i-1;s+=e)for(let a=0;a<n-1;a+=e){const o=Math.min(e,n-1-a),c=Math.min(e,i-1-s),l=(o+1)*(c+1),h=new Float32Array(l*3),u=new Float32Array(l*3);let f=0;for(let m=0;m<=c;m++)for(let _=0;_<=o;_++){const v=a+_,x=s+m;h[f*3]=t.x0+v*t.step,h[f*3+1]=t.get(v,x),h[f*3+2]=t.z0+x*t.step;const y=t.get(v+1,x)-t.get(v-1,x),M=t.get(v,x+1)-t.get(v,x-1),A=Math.hypot(y,2*t.step,M);u[f*3]=-y/A,u[f*3+1]=2*t.step/A,u[f*3+2]=-M/A,f++}const d=new(l>65535?Uint32Array:Uint16Array)(o*c*6);let p=0;for(let m=0;m<c;m++)for(let _=0;_<o;_++){const v=m*(o+1)+_,x=v+1,y=v+(o+1),M=y+1;d[p++]=v,d[p++]=y,d[p++]=x,d[p++]=x,d[p++]=y,d[p++]=M}const b=new at;b.setAttribute("position",new St(h,3)),b.setAttribute("normal",new St(u,3)),b.setIndex(new St(d,1)),b.computeBoundingSphere(),b.computeBoundingBox();const g=new Qe(b,this.material);g.receiveShadow=!0,g.name="terrain-chunk",this.group.add(g)}}setSeason(e){const t=zs[e],n=this.uniforms;n.uGrassA.value.copy(oi(t.grass[0])),n.uGrassB.value.copy(oi(t.grass[1])),n.uGrassC.value.copy(oi(t.grass[2])),n.uDirt.value.copy(oi(t.dirt)),n.uSand.value.copy(oi(t.sand)),n.uRock.value.copy(oi(t.rock)),n.uForest.value.copy(oi(t.forest)),n.uMountain.value.copy(oi(e==="autumn"?"#6f6a34":e==="winter"?"#c9d6e6":"#3f6b44")),n.uSnow.value=t.snow}}function vy(r){const e=new Uint16Array(r.nx*r.nz);for(let n=0;n<e.length;n++)e[n]=op.toHalfFloat(r.h[n]);const t=new Tr(e,r.nx,r.nz,Da,wn);return t.magFilter=Dt,t.minFilter=Dt,t.needsUpdate=!0,t.userData.xform=new Ze(r.x0-r.step/2,r.z0-r.step/2,1/(r.nx*r.step),1/(r.nz*r.step)),t}const _y=`
  attribute vec2 flow;
  varying vec3 vWPos;
  varying vec2 vFlow;
  #include <fog_pars_vertex>
  void main() {
    vFlow = flow;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWPos = wp.xyz;
    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`,yy=`
  uniform float uTime, uNight, uSunVis, uIce;
  uniform vec3 uShallow, uDeep, uZenith, uHorizon, uSunDir, uSunColor, uFoam;
  uniform sampler2D uHeight, uNoise;
  uniform vec4 uHX;
  uniform vec4 uLamps[4];
  uniform vec3 uLampColor;
  varying vec3 vWPos;
  varying vec2 vFlow;
  #include <fog_pars_fragment>
  float ground(vec2 xz) { return texture2D(uHeight, (xz - uHX.xy) * uHX.zw).r; }
  void main() {
    float depth = vWPos.y - ground(vWPos.xz);
    if (depth < -0.05) discard;
    if (cameraPosition.y < vWPos.y) {
      // underside: the sky shows through a bright window overhead; outside it the surface mirrors the depths
      vec3 Vu = normalize(vWPos - cameraPosition);
      vec2 rip = texture2D(uNoise, vWPos.xz * 0.21 + vFlow * uTime * 0.25).rg - 0.5;
      float up = clamp(Vu.y + (rip.x + rip.y) * 0.08, 0.0, 1.0);
      float win = smoothstep(0.6, 0.78, up);
      vec3 skyc = mix(uHorizon, uZenith, 0.55) * (1.25 - uNight * 0.6) + uSunColor * uSunVis * 0.35;
      vec3 deepc = mix(uDeep, uShallow, 0.35) * 0.75;
      float glint = pow(max(0.0, texture2D(uNoise, vWPos.xz * 0.6 - vec2(uTime * 0.08, uTime * 0.05)).b - 0.55), 2.0) * 6.0;
      vec3 colU = mix(deepc, skyc, win) + skyc * glint * win * (1.0 - uNight);
      gl_FragColor = vec4(colU, mix(0.9, 0.7, win));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
      return;
    }
    vec2 flow = vFlow;
    float speed = 0.55;
    float ph0 = fract(uTime * 0.18), ph1 = fract(uTime * 0.18 + 0.5);
    float wb = abs(ph0 - 0.5) * 2.0;
    vec2 base = vWPos.xz * 0.09;
    vec2 sA = texture2D(uNoise, base - flow * ph0 * speed * 3.0).rg - 0.5;
    vec2 sB = texture2D(uNoise, base - flow * ph1 * speed * 3.0 + 0.37).rg - 0.5;
    vec2 slope = mix(sA, sB, wb);
    slope += (texture2D(uNoise, vWPos.xz * 0.37 - flow * uTime * 0.35).ba - 0.5) * 0.55;
    slope += (texture2D(uNoise, vWPos.xz * 1.1 + vec2(uTime * 0.05, -uTime * 0.04)).rg - 0.5) * 0.25;
    vec3 N = normalize(vec3(-slope.x * 0.55, 1.0, -slope.y * 0.55));
    vec3 V = normalize(cameraPosition - vWPos);
    float ndv = max(dot(N, V), 0.0);
    float fres = 0.03 + 0.97 * pow(1.0 - ndv, 5.0);
    vec3 R = reflect(-V, N);
    vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.5));
    float spec = pow(max(dot(R, uSunDir), 0.0), 220.0) * 9.0 + pow(max(dot(R, uSunDir), 0.0), 24.0) * 0.25;
    float dk = smoothstep(0.0, 2.3, depth);
    vec3 body = mix(uShallow, uDeep, dk);
    vec3 col = mix(body, sky, fres * 0.8) + uSunColor * spec * uSunVis;
    // warm lamp reflections: vertical streaks under each lit lamp
    vec3 lampAdd = vec3(0.0);
    for (int i = 0; i < 4; i++) {
      vec4 L = uLamps[i];
      if (L.w <= 0.0) continue;
      vec2 d = vWPos.xz - L.xz;
      vec3 toCam = normalize(cameraPosition - vec3(L.x, 0.0, L.z));
      vec2 side = normalize(vec2(-toCam.z, toCam.x));
      float across = abs(dot(d, side));
      float along = dot(d, normalize(toCam.xz));
      float streak = exp(-across * across * 0.9) * smoothstep(-2.0, 1.5, along) * exp(-max(along, 0.0) * 0.05);
      float rip = 0.6 + 0.8 * texture2D(uNoise, vWPos.xz * 0.6 + vec2(0.0, uTime * 0.3)).r;
      lampAdd += uLampColor * streak * rip * L.w * 1.4;
    }
    col += lampAdd;
    float fn = texture2D(uNoise, vWPos.xz * 0.42 - flow * uTime * 0.5).r;
    float fn2 = texture2D(uNoise, vWPos.xz * 1.3 - flow * uTime * 0.8).g;
    float foam = smoothstep(0.42, 0.05, depth - fn * 0.28) * smoothstep(0.25, 0.6, fn2 + 0.25);
    col = mix(col, uFoam, foam * 0.85);
    if (uIce > 0.001) {
      // winter: a sheet of milky blue ice with snow drifting in from the banks, fine cracks and a cold sheen
      float n1 = texture2D(uNoise, vWPos.xz * 0.045).r;
      float n2 = texture2D(uNoise, vWPos.xz * 0.21 + 0.31).g;
      float n3 = texture2D(uNoise, vWPos.xz * 0.9 + 0.7).b;
      float cr = texture2D(uNoise, vWPos.xz * 0.35 + 0.13).a;
      float crack = smoothstep(0.035, 0.0, abs(cr - 0.5)) * smoothstep(0.35, 0.6, n1);
      vec3 ice = mix(vec3(0.46, 0.66, 0.80), vec3(0.80, 0.90, 0.97), smoothstep(0.25, 0.8, n1));
      ice = mix(ice, vec3(0.34, 0.54, 0.70), smoothstep(0.6, 2.2, depth) * 0.35);   // darker where it's deep
      float snow = smoothstep(0.5, 0.78, n2 + (1.0 - smoothstep(0.0, 1.4, depth)) * 0.45);
      ice = mix(ice, vec3(0.96, 0.98, 1.0), snow);
      ice = mix(ice, ice * 0.72, crack * (1.0 - snow));
      float fresI = 0.04 + 0.96 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
      vec3 skyI = mix(uHorizon, uZenith, 0.5);
      float glint = pow(max(dot(reflect(-V, vec3(0.0, 1.0, 0.0)), uSunDir), 0.0), 80.0) * (0.6 + n3);
      ice = mix(ice, skyI, fresI * 0.4 * (1.0 - snow)) + uSunColor * glint * 1.6 * uSunVis * (1.0 - snow);
      ice *= mix(1.0, 0.2, uNight);
      ice += lampAdd * 0.55;
      col = mix(col, ice, uIce);
    }
    float alpha = mix(0.5, 0.94, smoothstep(0.0, 1.4, depth));
    alpha = max(alpha, foam * 0.9);
    alpha = max(alpha, fres * 0.9) * smoothstep(-0.05, 0.08, depth);
    alpha = mix(alpha, smoothstep(-0.05, 0.05, depth), uIce);
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`;class My{constructor(e,t,n,i){this.uniforms=Fi.merge([me.fog,{uTime:{value:0},uNight:{value:0},uSunVis:{value:1},uIce:{value:0},uShallow:{value:new he("#37c4c0")},uDeep:{value:new he("#145f8f")},uZenith:{value:new he},uHorizon:{value:new he},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new he},uFoam:{value:new he("#f2fbff")},uHeight:{value:n},uNoise:{value:i},uHX:{value:n.userData.xform},uLamps:{value:[new Ze,new Ze,new Ze,new Ze]},uLampColor:{value:new he("#ffb44a")}}]),this.uniforms.uHeight.value=n,this.uniforms.uNoise.value=i,this.material=new Nt({uniforms:this.uniforms,vertexShader:_y,fragmentShader:yy,transparent:!0,depthWrite:!1,fog:!0,side:Jt}),this.mesh=new Qe(this.buildStrip(),this.material),this.mesh.renderOrder=2,this.mesh.name="river",e.add(this.mesh)}buildStrip(){const n=Math.ceil(Pi.length/2)+1,i=new Float32Array(n*15*3),s=new Float32Array(n*15*2);let a=0;for(let l=0;l<n;l++){const h=Pi.at(l*2),u=ur(h.z)+7,f=-h.tz,d=h.tx;for(let p=0;p<=14;p++){const b=p/14*2-1;i[a*3]=h.x+f*u*b,i[a*3+1]=z_,i[a*3+2]=h.z+d*u*b;const g=1-b*b*.7;s[a*2]=h.tx*g,s[a*2+1]=h.tz*g,a++}}const o=[];for(let l=0;l<n-1;l++)for(let h=0;h<14;h++){const u=l*15+h,f=u+1,d=u+14+1,p=d+1;o.push(u,f,d,f,p,d)}const c=new at;return c.setAttribute("position",new St(i,3)),c.setAttribute("flow",new St(s,2)),c.setIndex(o),c.computeBoundingSphere(),c}setIce(e){this.iceTarget=e?1:0,this.iceSnap!==!1&&(this.uniforms.uIce.value=this.iceTarget,this.iceSnap=!1)}update(e,t,n=[]){const i=this.uniforms;i.uTime.value+=e,i.uIce.value+=((this.iceTarget||0)-i.uIce.value)*(1-Math.exp(-e*1.5));const s=t.state;i.uZenith.value.copy(t.uniforms.uZenith.value),i.uHorizon.value.copy(t.uniforms.uHorizon.value),i.uSunDir.value.copy(t.uniforms.uSunDir.value),i.uSunColor.value.copy(t.uniforms.uSunColor.value),i.uSunVis.value=t.uniforms.uSunVis.value,i.uNight.value=s.night,i.uShallow.value.set("#37c4c0").lerp(new he("#0b2a3a"),s.night),i.uDeep.value.set("#12608f").lerp(new he("#030d1c"),s.night),i.uFoam.value.set("#f2fbff").multiplyScalar(1-s.night*.75);for(let a=0;a<4;a++){const o=n[a];o?i.uLamps.value[a].set(o.x,o.y,o.z,o.intensity*s.night):i.uLamps.value[a].w=0}}}const Qs=r=>new he().setRGB(r[0],r[1],r[2],Tt),nu=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // far plane: drawn last, only where nothing else is
    #ifdef USE_REVERSED_DEPTH_BUFFER
      gl_Position = vec4(p.xy, 0.0, p.w);
    #else
      gl_Position = p.xyww;
    #endif
  }`,iu=`
  uniform vec3 uZenith, uHorizon, uSunDir, uSunColor, uMoonDir, uCloudLit, uCloudShade;
  uniform float uTime, uStars, uNight, uCover, uSunVis;
  uniform int uOct;
  varying vec3 vDir;
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float s = 0., a = .5;
    for (int i = 0; i < 6; i++) { if (i >= uOct) break; s += a * vnoise(p); p = p * 2.07 + vec2(1.7, 9.2); a *= .5; }
    return s;
  }
  void main() {
    vec3 d = normalize(vDir);
    float y = d.y;
    float t = pow(clamp(y, 0., 1.), 0.42);
    vec3 col = mix(uHorizon, uZenith, t);
    // warm horizon glow toward the sun at low sun angles
    float sd = max(dot(d, uSunDir), 0.);
    float low = 1. - smoothstep(0.05, 0.45, uSunDir.y);
    col += uSunColor * pow(sd, 6.) * 0.35 * low * (1. - uNight) * smoothstep(-0.2, 0.25, y + 0.1);
    col = mix(col, uHorizon * 0.85, smoothstep(0.0, -0.25, y));
    // sun disc + halo (HDR, feeds bloom)
    col += uSunColor * (pow(sd, 32.) * 0.35 + pow(sd, 400.) * 1.2) * uSunVis;
    col += uSunColor * smoothstep(0.99955, 0.9998, sd) * 18. * uSunVis;
    // night sky: stars + milky way + moon
    if (uStars > 0.01) {
      vec3 sp = d * 180.;
      vec3 cell = floor(sp);
      float h = hash13(cell);
      vec3 f = fract(sp) - 0.5 - (vec3(hash13(cell + 3.1), hash13(cell + 7.7), hash13(cell + 1.3)) - .5) * .6;
      float star = step(0.972, h) * smoothstep(0.22, 0.0, length(f));
      float tw = 0.6 + 0.4 * sin(uTime * (1.5 + h * 4.) + h * 60.);
      vec3 sc = mix(vec3(1., .85, .7), vec3(.75, .85, 1.), hash13(cell + 5.));
      float band = exp(-pow(dot(d, normalize(vec3(0.5, 0.35, -0.8))), 2.) * 9.);
      float mw = band * smoothstep(0.35, 0.85, fbm(d.xz / (abs(d.y) + .3) * 3.)) ;
      col += (sc * star * tw * (1.2 + band * 1.5) + vec3(.35, .4, .75) * mw * 0.22) * uStars * smoothstep(-0.05, 0.2, y);
      float md = dot(d, normalize(uMoonDir));
      col += vec3(1.0, .96, .88) * smoothstep(0.99935, 0.99955, md) * 3.0 * uStars;
      col += vec3(.45, .55, .9) * pow(max(md, 0.), 200.) * 0.5 * uStars;
    }
    // clouds: a painted cumulus deck, lit toward the sun, darker undersides
    if (y > 0.0) {
      vec2 uv = d.xz / (y + 0.12) * 1.25 + vec2(uTime * 0.006, uTime * 0.002);
      float n = fbm(uv * 1.1);
      float n2 = fbm(uv * 1.1 + uSunDir.xz * 0.12);
      float c = smoothstep(0.62 - uCover * 0.35, 0.86 - uCover * 0.2, n);
      float lit = clamp(0.55 + (n - n2) * 5.0, 0., 1.);
      vec3 cc = mix(uCloudShade, uCloudLit, lit);
      cc += uSunColor * pow(sd, 10.) * 0.35 * (1. - c) * (1. - uNight);
      col = mix(col, cc, c * smoothstep(0.0, 0.14, y) * 0.95);
    }
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;class Sy{constructor(e,t,n){this.scene=e,this.renderer=t,this.uniforms={uZenith:{value:new he},uHorizon:{value:new he},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new he(1,1,1)},uMoonDir:{value:new R(-.45,.62,.52)},uCloudLit:{value:new he(1,1,1)},uCloudShade:{value:new he(.7,.75,.85)},uTime:{value:0},uStars:{value:0},uNight:{value:0},uCover:{value:.45},uSunVis:{value:1},uOct:{value:n.clouds}};const i=new Nt({uniforms:this.uniforms,vertexShader:nu,fragmentShader:iu,side:Ft,depthWrite:!1,fog:!1});this.mesh=new Qe(new fi(4e3,48,24),i),this.mesh.renderOrder=100,this.mesh.frustumCulled=!1,e.add(this.mesh),this.sun=new dd(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.035,this.setShadow(n),e.add(this.sun,this.sun.target),this.hemi=new ym(12574719,7044924,1),e.add(this.hemi),e.fog=new qc(12574719,.0014),this.envScene=new Ku,this.envSky=new Qe(new fi(100,32,16),new Nt({uniforms:{...this.uniforms,uOct:{value:2},uStars:{value:0}},vertexShader:nu,fragmentShader:iu,side:Ft,depthWrite:!1})),this.envScene.add(this.envSky),this.pmrem=new Pc(t),this.envRT=null,this.lastEnvKey="",this.state=null}setShadow(e){const t=this.sun.shadow;t.mapSize.set(e.shadow,e.shadow),t.map?.dispose(),t.map=null;const n=e.shadowRange;Object.assign(t.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:420}),t.camera.updateProjectionMatrix(),this.shadowRange=n}update(e,t,n,i,s=.45){const a=my(t,n);this.state=a;const o=this.uniforms;o.uTime.value+=e,o.uZenith.value.copy(Qs(a.zenith)),o.uHorizon.value.copy(Qs(a.horizon)),o.uSunDir.value.set(a.sunDir.x,a.sunDir.y,a.sunDir.z).normalize(),o.uSunColor.value.copy(Qs(a.sunColor)),o.uStars.value=a.stars,o.uNight.value=a.night,o.uSunVis.value=Ps.smoothstep(a.sunDir.y,-.04,.03)*(1-a.night),o.uCover.value=s;const c=o.uHorizon.value;o.uCloudLit.value.setRGB(1,1,1).lerp(o.uSunColor.value,.35).multiplyScalar(1-a.night*.85),o.uCloudShade.value.copy(c).lerp(o.uZenith.value,.35).multiplyScalar(.92),this.mesh.position.copy(i);const l=new R(a.lightDir.x,Math.max(a.lightDir.y,.1),a.lightDir.z).normalize();this.sun.color.copy(Qs(a.sunColor)),this.sun.intensity=a.sunIntensity;const h=this.shadowRange*2/this.sun.shadow.mapSize.x,u=i.clone(),f=new ke().lookAt(new R,l.clone().negate(),new R(0,1,0)),d=f.clone().invert();u.applyMatrix4(d),u.x=Math.round(u.x/h)*h,u.y=Math.round(u.y/h)*h,u.applyMatrix4(f),this.sun.target.position.copy(u),this.sun.position.copy(u).addScaledVector(l,200),this.sun.target.updateMatrixWorld(),this.hemi.color.copy(o.uZenith.value).lerp(new he(1,1,1),.35),this.hemi.groundColor.setRGB(.36,.34,.22).multiplyScalar(1-a.night*.7),this.hemi.intensity=a.hemi*1.25,this.scene.fog.color.copy(Qs(a.fog)),this.scene.fog.density=.0012+a.night*6e-4,this.scene.environmentIntensity=a.env;const p=`${t}:${Math.round(n*12)}`,b=performance.now();if(p!==this.lastEnvKey&&(b-(this.lastEnvAt||0)>120||p.split(":")[0]!==this.lastEnvKey.split(":")[0])){this.lastEnvAt=b,this.lastEnvKey=p,this.envSky.material.uniforms.uStars.value=0;const g=this.pmrem.fromScene(this.envScene,0,.1,1e3);this.envRT?.dispose(),this.envRT=g,this.scene.environment=g.texture}return a}}function wy(r,e,t){const n=2*e.step,i=Lt.x+Lt.x0-n,s=Lt.x+Lt.x1+n,a=Lt.z-Lt.y1-n,o=Lt.z-Lt.y0+n,c=(l,h)=>t[Math.min(e.nz-1,Math.max(0,h))*e.nx+Math.min(e.nx-1,Math.max(0,l))];for(const l of r.group.children){const h=l.geometry.boundingBox;if(!h||h.max.x<i||h.min.x>s||h.max.z<a||h.min.z>o)continue;const u=l.geometry.attributes.position,f=l.geometry.attributes.normal;for(let d=0;d<u.count;d++){const p=u.getX(d),b=u.getZ(d);if(p<i||p>s||b<a||b>o)continue;const g=Math.round((p-e.x0)/e.step),m=Math.round((b-e.z0)/e.step),_=c(g+1,m)-c(g-1,m),v=c(g,m+1)-c(g,m-1),x=Math.hypot(_,2*e.step,v);f.setXYZ(d,-_/x,2*e.step/x,-v/x)}f.needsUpdate=!0}}class Ey{constructor(e,t,n){this.scene=e;const i=performance.now();this.grid=new dl(n.terrainStep),this.splat=new by(this.grid),this.bakeMs=performance.now()-i;const s=this.grid.visibleHeights();this.heightTex=vy({...this.grid,h:s}),this.sky=new Sy(e,t,n),this.terrain=new xy(e,this.grid,this.splat),wy(this.terrain,this.grid,s),this.water=new My(e,this.grid,this.heightTex,this.terrain.noise),this.season=null,this.hour=10,this.lamps=[],this.seasonHooks=[]}heightAt(e,t){return this.grid.heightAt(e,t)}setSeason(e){if(e!==this.season){this.season=e,this.frozen=e==="winter",this.water.setIce?.(this.frozen),this.terrain.setSeason(e);for(const t of this.seasonHooks)t(e);this.onSeason?.(e)}}update(e,t){(this.focus??=new R).copy(t);const n=this.sky.update(e,this.season,this.hour,t);return this.water.update(e,this.sky,this.lamps),n}}const cs=8,su=(r,e)=>r*73856093^e*19349663;class Li{constructor(){this.items=[],this.grid=new Map,this.nextId=1,this.stamp=0,this.scratch=[]}_insert(e){const t=e.kind==="box"?Math.hypot(e.hw,e.hd):e.r,n=Math.floor((e.x-t)/cs),i=Math.floor((e.x+t)/cs),s=Math.floor((e.z-t)/cs),a=Math.floor((e.z+t)/cs);e.cells=[];for(let o=n;o<=i;o++)for(let c=s;c<=a;c++){const l=su(o,c);this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(e),e.cells.push(l)}}box(e,t,n,i,s,a,o,c={}){const l=(s||0)*Math.PI/180,h={id:this.nextId++,kind:"box",x:e,z:t,hw:n,hd:i,c:Math.cos(l),s:Math.sin(l),y0:a,y1:o,enabled:!0,...c};return this.items.push(h),this._insert(h),h}cylinder(e,t,n,i,s,a={}){const o={id:this.nextId++,kind:"cyl",x:e,z:t,r:n,y0:i,y1:s,enabled:!0,...a};return this.items.push(o),this._insert(o),o}remove(e){if(e){e.enabled=!1;for(const t of e.cells){const n=this.grid.get(t),i=n.indexOf(e);i>=0&&n.splice(i,1)}}}enable(e){!e||e.enabled||(e.enabled=!0,this._insert(e))}move(e,t,n,i,s){this.remove(e),e.x=t,e.z=n,i!==void 0&&(e.y0=i,e.y1=s),e.enabled=!0,this._insert(e)}near(e,t){const n=this.scratch;n.length=0;const i=++this.stamp,s=Math.floor(e/cs),a=Math.floor(t/cs);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=this.grid.get(su(s+o,a+c));if(l)for(const h of l)h.enabled&&h._stamp!==i&&(h._stamp=i,n.push(h))}return n}static local(e,t,n){const i=t-e.x,s=n-e.z;return[i*e.c-s*e.s,i*e.s+s*e.c]}static contains(e,t,n,i=0){if(e.kind==="cyl")return Math.hypot(t-e.x,n-e.z)<e.r+i;const[s,a]=Li.local(e,t,n);return Math.abs(s)<e.hw+i&&Math.abs(a)<e.hd+i}groundAt(e,t,n,i=.5,s=0){let a=null;for(const o of[...this.near(e,t)])!o.walkable||o.y1>n+i||Li.contains(o,e,t,s)&&(!a||o.y1>a.y)&&(a={y:o.y1,item:o});return a}resolve(e,t,n,i,s,a=.5){let o=null;for(let c=0;c<3;c++){let l=!1;for(const h of[...this.near(e,t)]){if(h.y1<=i+a||h.y0>=i+s)continue;if(h.kind==="cyl"){const v=e-h.x,x=t-h.z,y=Math.hypot(v,x),M=h.r+n;y<M&&(e=h.x+(y>1e-6?v/y:1)*M,t=h.z+(y>1e-6?x/y:0)*M,l=!0,o=h);continue}const[u,f]=Li.local(h,e,t),d=h.hw+n-Math.abs(u),p=h.hd+n-Math.abs(f);if(d<=0||p<=0)continue;let b=u,g=f;const m=Math.abs(u)-h.hw,_=Math.abs(f)-h.hd;if(m>0&&_>0){const v=Math.hypot(m,_);if(v>=n)continue;const x=n/v;b=Math.sign(u)*(h.hw+m*x),g=Math.sign(f)*(h.hd+_*x)}else d<p?b=Math.sign(u||1)*(h.hw+n):g=Math.sign(f||1)*(h.hd+n);e=h.x+b*h.c+g*h.s,t=h.z-b*h.s+g*h.c,l=!0,o=h}if(!l)break}return{x:e,z:t,hit:o}}raycast(e,t,n,i,s,a,o=null){const c=i-e,l=s-t,h=a-n,u=Math.max(1,Math.ceil(Math.hypot(c,h)/4)),f=new Set;let d=1;for(let p=0;p<=u;p++){const b=p/u,g=e+c*b,m=n+h*b;for(const _ of this.near(g,m)){if(f.has(_)||!_.blocksView||o&&_.id!==void 0&&o.has(_.id))continue;f.add(_);let v=0,x=d;const y=(M,A,P,E)=>{if(Math.abs(A)<1e-9)return M>=P&&M<=E;let S=(P-M)/A,I=(E-M)/A;return S>I&&([S,I]=[I,S]),v=Math.max(v,S),x=Math.min(x,I),v<=x};if(y(t,l,_.y0,_.y1)){if(_.kind==="box"){const[M,A]=Li.local(_,e,n);if(!y(M,c*_.c-h*_.s,-_.hw-.15,_.hw+.15)||!y(A,c*_.s+h*_.c,-_.hd-.15,_.hd+.15))continue}else{const M=e-_.x,A=n-_.z,P=c*c+h*h,E=2*(M*c+A*h),S=M*M+A*A-(_.r+.15)**2;if(P<1e-9){if(S>0)continue}else{const I=E*E-4*P*S;if(I<0)continue;v=Math.max(v,(-E-Math.sqrt(I))/(2*P)),x=Math.min(x,(-E+Math.sqrt(I))/(2*P))}}v<=x&&v>=0&&v<=d&&(d=v)}}}return d}}const Di={uTime:{value:0},uSnow:{value:0},uWind:{value:1}},ru=new WeakSet;function zi(r,{wind:e=0,snow:t=1}={}){if(!r||ru.has(r)||!r.isMeshStandardMaterial)return r;ru.add(r);const n=r.onBeforeCompile;return r.onBeforeCompile=(i,s)=>{n?.(i,s),i.uniforms.uTime=Di.uTime,i.uniforms.uSnow=Di.uSnow,i.uniforms.uWind=Di.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime, uWind;
        varying vec3 vSnowN;
        varying float vSnowH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          mat4 im = mat4(1.0);
          #ifdef USE_INSTANCING
            im = instanceMatrix;
          #endif
          vec3 base = (modelMatrix * im * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vSnowN = normalize(mat3(modelMatrix * im) * objectNormal);
          vSnowH = (modelMatrix * im * vec4(transformed, 1.0)).y;
          ${e?`
          float hgt = max(transformed.y - ${e===1?"1.4":"0.0"}, 0.0);
          float ph = base.x * 0.21 + base.z * 0.17;
          float sway = sin(uTime * 1.35 + ph) * 0.6 + sin(uTime * 2.7 + ph * 1.7) * 0.25;
          float amt = ${e===1?"0.022":"0.12"} * uWind * hgt * ${e===1?"1.0":"hgt * 2.5"};
          transformed.x += sway * amt;
          transformed.z += cos(uTime * 1.1 + ph) * amt * 0.6;`:""}
        }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uSnow;
        varying vec3 vSnowN;
        varying float vSnowH;`).replace("#include <color_fragment>",`#include <color_fragment>
        ${t?`{
          float up = smoothstep(0.35, 0.75, vSnowN.y);
          float s = uSnow * up * smoothstep(-0.2, 0.3, vSnowH);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.96, 1.0), s * 0.92);
        }`:""}`)},r.customProgramCacheKey=()=>`fx${e}${t}`,r.needsUpdate=!0,r}const Pd=new Set(["tree-broadleaf-a","tree-broadleaf-b","tree-maple","tree-sakura","tree-peach","tree-chestnut"]),Ty=[{name:"kawabe",w:(r,e)=>1-it(60,110,Math.hypot(r+45,e-20)),mix:{"tree-sakura":3.5,"tree-broadleaf-a":3,"tree-maple":2,"tree-pine":1.2}},{name:"north",w:(r,e)=>it(-80,-110,e),mix:{"tree-cedar":3,"tree-maple":3,"tree-broadleaf-b":2.5,"tree-chestnut":1.2,"tree-broadleaf-a":1}},{name:"west",w:(r,e)=>it(-95,-140,r),mix:{"tree-pine":3,"tree-broadleaf-a":3,"tree-cedar":2,"tree-sakura":.8}},{name:"east",w:(r,e)=>it(140,165,r),mix:{"tree-broadleaf-b":3,"tree-cedar":3,"tree-sakura":1.2}},{name:"takamori",w:(r,e)=>1-it(45,90,Math.hypot(r-115,e-8)),mix:{"tree-sakura":3,"tree-broadleaf-b":3,"tree-maple":1}},{name:"gorge",w:(r,e)=>it(95,130,e),mix:{"tree-pine":4,"tree-broadleaf-a":2,"tree-maple":1}},{name:"meadow",w:()=>.25,mix:{"tree-broadleaf-a":3,"tree-broadleaf-b":2,"tree-sakura":1}}];function Ay(r,e){let t=0;for(const i in r)t+=r[i];let n=e*t;for(const i in r)if(n-=r[i],n<=0)return i;return Object.keys(r)[0]}function Nc(r,e){const t=r/196,n=(e+15)/206;return Math.sqrt(Math.sqrt(t**4+n**4))}function au(r,e){let t=.05;t=Math.max(t,.8*it(-85,-115,e)),t=Math.max(t,.62*it(-100,-150,r)),t=Math.max(t,.55*it(145,170,r)),t=Math.max(t,.5*it(128,150,e));const n=Nc(r,e);return t=Math.max(t,.75*it(.86,.96,n)*(1-it(1.3,1.5,n))),t*=.45+1*it(-.25,.3,xn(r/55+4,e/55-8)),Math.min(1,t)}function Ry(r,e,t){for(const n of Ad)if(Math.hypot(r-n.x,e-n.z)<t+8)return!0;return!1}function Cy(r,e,t=1){const n=Td(20260926),i=[],s=[],a=[],o=[],c=[],l=[],h=(f,d,p=0)=>{for(const[m,_,v]of J_)if(Math.hypot(f-m,d-_)<v+p)return!0;if(Ry(f,d,p))return!0;const b=At.nearest(f,d,12);if(b&&b.d<7+p)return!0;const g=Pi.nearest(f,d,40);return!!(g&&g.d<ur(g.z)+3+p)},u=6.2/Math.sqrt(Math.max(.35,t));for(let f=bn.minZ+20;f<bn.maxZ-20;f+=u)for(let d=bn.minX+20;d<bn.maxX-20;d+=u){const p=d+(n()-.5)*u*.9,b=f+(n()-.5)*u*.9,g=au(p,b);if(n()>g)continue;const _=r(p,b);if(_<.9||_>175)continue;const v=Nc(p,b)>.97;if(!v&&(!e(p,b)||h(p,b)))continue;let x=null,y=-1;for(const A of Ty){const P=A.w(p,b);P>y&&(y=P,x=A.mix)}v&&(x={"tree-cedar":3,"tree-pine":1.5,"tree-broadleaf-b":1});const M=Ay(x,n());i.push({model:M,x:p,y:_,z:b,rot:n()*360,s:.8+n()*.45+(v?.25:0),far:v})}for(let f=as.x0;f<=as.x1;f+=as.spacing)for(let d=as.z0;d<=as.z1;d+=as.spacing){const p=f+(n()-.5)*1.2,b=d+(n()-.5)*1.2;e(p,b)&&i.push({model:"tree-peach",x:p,y:r(p,b),z:b,rot:n()*360,s:.95+n()*.15,orchard:!0})}for(const[f,d]of[[78,-104],[91,-118],[70,-97],[96,-106]])i.push({model:"tree-chestnut",x:f,y:r(f,d),z:d,rot:n()*360,s:1.05,story:"chestnut"});for(let f=0;f<5200*t;f++){const d=bn.minX+60+n()*(bn.maxX-bn.minX-120),p=bn.minZ+60+n()*(bn.maxZ-bn.minZ-120);if(Nc(d,p)>.95)continue;const b=r(d,p),g=n(),m=Pi.nearest(d,p,30),_=m?m.d-ur(m.z):99;if(_>-1.5&&_<3.5&&b>-.35&&b<.9){h(d,p,-8)||c.push({model:"reeds",x:d,y:Math.max(b,-.2),z:p,rot:n()*360,s:.8+n()*.5});continue}if(b<1||!e(d,p)||h(d,p,-4))continue;const v=au(d,p);if(g<.18){const x=.55+n()*.9;s.push({model:["rock-a","rock-b","rock-c"][Math.floor(n()*3)],x:d,y:b-.2*x,z:p,rot:n()*360,s:x,sy:.55+n()*.25})}else g<.45?a.push({model:n()<.8?n()<.5?"bush-a":"bush-b":"hydrangea",x:d,y:b,z:p,rot:n()*360,s:.8+n()*.6}):v<.4&&o.push({model:n()<.55?"flowers-a":"flowers-b",x:d,y:b,z:p,rot:n()*360,s:.8+n()*.5})}for(let f=0;f<260;f++){const d=n()*Pi.length,p=Pi.at(d);if(p.z<-200||p.z>180)continue;const b=n()<.5?-1:1,g=ur(p.z)-1.5-n()*2.5,m=p.x-p.tz*g*b,_=p.z+p.tx*g*b;Math.hypot(m-xs.millIsland.x,_-xs.millIsland.z)<7||Math.abs(_+112)<5||Math.abs(_-30)<6||l.push({model:"lilypads",x:m,y:.02,z:_,rot:n()*360,s:.7+n()*.6})}return{trees:i,rocks:s,bushes:a,flowers:o,reeds:c,lilies:l}}const Py={"kawabe-house-a":[7,6,7.2],"kawabe-house-b":[9,7,6.8],"kawabe-shop":[6,6,5.5],boathouse:[6,8,4.5],mill:[8,7,7.5],"star-lamp":[2.2,2.2,9.5],"takamori-house-a":[8,7,8.5],"takamori-house-b":[6,6,6],bakery:[9,7,7.5],belltower:[5,5,17],station:[14,6,6.5],platform:[30,4.5,.95],"signal-cottage":[7,6,6],"engine-shed":[10,18,7.5],shrine:[6,7,6.5],torii:[5,.8,5],"stone-lantern":[.9,.9,1.8],"lamp-viaduct":[2.2,2.2,9],"tunnel-portal":[9,4,9]},Iy={"signal-cottage":{depth:2,floor:.42},"kawabe-house-b":{depth:1.3,floor:.45},"takamori-house-b":{depth:1.5,floor:.4},station:{depth:2.4,floor:.15},bakery:{depth:.9,floor:.2},shrine:{depth:1.2,floor:.9}},gn=r=>r*Math.PI/180,ou=r=>r<=0?0:r>=1?1:r*r*(3-2*r);class Ly{constructor(e,t,n,i,s){this.lightPool=s,this.cullList=[],this.scene=e,this.assets=t,this.world=n,this.colliders=i,this.group=new dt,this.group.name="structures",e.add(this.group),this.byId=new Map,this.nodes={},this.lamps=new Map,this.solids={},this.worldBuild()}model(e,t,n){const i=this.assets.clone(e);return i?(i.traverse(s=>{s.isMesh&&zi(s.material)}),i):wd(e,t||[2,2,2],n)}groundFor(e,t,n,i,s){const a=gn(s),o=Math.cos(a),c=Math.sin(a);let l=-1e9,h=1e9;for(const[u,f]of[[-n/2,-i/2],[n/2,-i/2],[-n/2,i/2],[n/2,i/2],[0,0]]){const d=this.world.heightAt(e+u*o+f*c,t-u*c+f*o);l=Math.max(l,d),h=Math.min(h,d)}return l-h<.9?l-.08:this.world.heightAt(e,t)}place(e,t,n,i,s=0,a,o={}){const c=Py[t]||[2,2,2],l=this.model(t,c,o.color),h=a??this.groundFor(n,i,c[0],c[1],s);l.position.set(n,h,i),l.rotation.y=gn(s),l.name=e,this.group.add(l);const u={id:e,name:t,obj:l,x:n,z:i,y:h,rot:s,fp:c};if(this.byId.set(e,u),!o.noCull&&t!=="belltower"&&this.cullList.push({obj:l,x:n,z:i,prop:!1}),o.collide!==!1){const[f,d,p]=c,b=o.shrink??.94,g=Iy[t],m=gn(s),_=Math.sin(m),v=Math.cos(m),x=g?g.depth/2:0;if(u.solid=this.colliders.box(n-_*x,i-v*x,f*b/2,(d*b-(g?.depth||0))/2,s,h-1,h+p,{blocksView:p>3,id:e}),g){const y=d/2-g.depth/2;u.porch=this.colliders.box(n+_*y,i+v*y,f*.46,g.depth/2,s,h-1,h+g.floor,{walkable:!0,surface:"wood"})}}if(o.clearGrass!==!1){this.world.splat.paintRect(n,i,c[0]/2+.6,c[1]/2+.6,s,3,0,1.2);const f=gn(s);this.world.splat.paintDisc(n+Math.sin(f)*(c[1]/2+1.2),i+Math.cos(f)*(c[1]/2+1.2),1.6,0,.8,1.2)}return u}worldBuild(){for(const e of Ad){const t={};if((e.model==="platform"||e.model==="belltower")&&Object.assign(t,{collide:!1}),this.place(e.id,e.model,e.x,e.z,e.rot,e.y,t),e.model==="belltower"&&this.towerColliders(this.byId.get(e.id)),e.model==="platform"){const n=this.byId.get(e.id);n.solid=this.colliders.box(e.x,e.z,15,2.2,e.rot,n.y-2,n.y+.95,{walkable:!0,surface:"stone"})}}this.findNodes(),this.placeLamps(),this.placeDocks(),this.placeStones(),this.placeDressing(),this.placeLandslide()}placeLandslide(){const e=Lt,t=this.model("landslide",[24,9,18],"#a06a3a");t.position.set(e.x,e.y,e.z),t.name="landslide",this.group.add(t),this.nodes.landslide=t,this.cullList.push({obj:t,x:e.x,z:e.z-3,prop:!1});const n=this.world.terrain.material,i=new qt({name:"Turf",roughness:n.roughness,metalness:0,envMapIntensity:n.envMapIntensity,vertexColors:!0});i.onBeforeCompile=n.onBeforeCompile;const s=new Set;t.traverse(b=>{b.isMesh&&(b.material.name==="Turf"?(b.material=i,b.castShadow=!1):b.material.name==="Turf lip"&&(s.add(b.material),b.material.envMapIntensity=n.envMapIntensity))});const a=[],o=Js(0,5);for(const[b,g,m,_,v]of Q_){const x=this.assets.clone(b);if(!x)continue;const{x:y,z:M}=Js(g,m),A=this.world.heightAt(y,M)-.2*_,P=new dt;if(P.position.set(y,A,M),v){const E=new R(o.x-y,0,o.z-M).normalize();P.quaternion.setFromAxisAngle(new R(E.z,0,-E.x),gn(v))}x.rotation.y=(g*1.7+m*2.9)%(Math.PI*2),x.scale.setScalar(_),P.add(x),this.group.add(P),this.cullList.push({obj:P,x:y,z:M,prop:!1}),Pd.has(b)&&x.traverse(E=>{E.isMesh&&["Leaves","Maple leaves","Blossom"].includes(E.material.name)&&a.push(E)}),b.startsWith("tree")&&(this.colliders.cylinder(y,M,.38*_,A-1,A+5,{id:"tree"}),this.world.splat.paintDisc(y,M,1.6*_,3,0,1.2),this.world.splat.paintDisc(y,M,2.4*_,2,.75,2))}const c=b=>{const g=zs[b];if(!g)return;const m=new he(g.grass[0]).lerp(new he(g.grass[1]),.5).multiplyScalar(.72);for(const _ of s)_.color.copy(m);for(const _ of a)_.visible=!g.bareTrees};this.world.seasonHooks?.push(c),this.world.season&&c(this.world.season);for(const b of Z_){if(b[0]==="rock"||b[0]==="stump"){const[S,I,N,O,z]=b,j=Js(I,N);this.colliders.cylinder(j.x,j.z,O,e.y+z-3,e.y+z,{walkable:!0,surface:S==="rock"?"stone":"wood",id:"slide-"+S});continue}const[,g,m,_,v,x,y,M]=b,A=Math.hypot(v-g,x-m),P=Math.max(1,Math.ceil(A/.6)),E=Math.atan2(x-m,v-g)*180/Math.PI;for(let S=0;S<P;S++){const I=(S+.5)/P,N=Js(g+(v-g)*I,m+(x-m)*I),O=e.y+_+(y-_)*I+M*.9;this.colliders.box(N.x,N.z,A/P/2+.02,M*.85,E,O-2*M-.4,O,{walkable:!0,surface:"wood",id:"slide-log"})}}const l=this.world.splat,h=.5,u=4,f=Math.round((e.x1-e.x0)/h)+1,d=Math.round((e.y1-e.y0)/h)+1,p=[];for(let b=0;b<d;b++)for(let g=0;g<f;g++)iy(e.x0+g*h,e.y0+b*h)&&p.push([e.x0+g*h,e.y0+b*h]);for(let b=Math.floor(e.z-e.y1-u);b<=Math.ceil(e.z-e.y0+u);b++)for(let g=Math.floor(e.x+e.x0-u);g<=Math.ceil(e.x+e.x1+u);g++){const m=g-l.x0,_=b-l.z0;if(m<0||_<0||m>=l.w||_>=l.h)continue;const v=g+.5-e.x,x=e.z-(b+.5);let y=u*u;for(const[P,E]of p){const S=(P-v)**2+(E-x)**2;S<y&&(y=S)}const M=Math.sqrt(y),A=(_*l.w+m)*4;l.data[A+3]*=ou((M-1.5)/2.2),x<3&&(l.data[A]=Math.max(l.data[A],200*(1-ou((M-.3)/2.4))))}for(const[b,g,m]of[[-5.5,3.2,.6],[-8,2.2,.45]]){const _=Js(0,b);l.paintDisc(_.x,_.z,g,0,m,2.5)}l.texture.needsUpdate=!0}towerColliders(e){const t=e.y+11;this.gallery={x:e.x,z:e.z,y:t},e.solid=this.colliders.box(e.x,e.z,2.5,2.5,0,e.y-1,t,{walkable:!0,surface:"wood",blocksView:!0,id:"belltower"}),this.colliders.box(e.x,e.z,1.35,1.35,0,t,e.y+17,{blocksView:!0,id:"belltowerShaft"});for(const[n,i,s,a]of[[0,-2.55,2.7,.15],[0,2.55,2.7,.15],[-2.55,0,.15,2.7],[2.55,0,.15,2.7]])this.colliders.box(e.x+n,e.z+i,s,a,0,t,t+2.6,{id:"railing"})}findNodes(){const e=this.byId.get("mill")?.obj;this.nodes.millWheel=e?.getObjectByName("Wheel")||null;const t=this.byId.get("belltower")?.obj;this.nodes.bell=t?.getObjectByName("Bell")||null;const n=this.byId.get("cottage")?.obj;if(this.nodes.chestLid=n?.getObjectByName("ChestLid")||null,this.nodes.porchFlame=n?.getObjectByName("PorchFlame")||null,this.nodes.chest=n?.getObjectByName("Chest")||null,this.nodes.shrineBoard=this.byId.get("shrine")?.obj.getObjectByName("Noticeboard")||null,e){const i=this.byId.get("mill");this.colliders.box(i.x+5.4,i.z,.8,3.2,0,i.y-2,i.y+5,{id:"millWheel"})}}placeLamps(){for(const e of j_){let t,n;if(e.building?(n=this.byId.get(e.building),t=n?.obj):(n=this.place(`lamp-${e.id}`,e.model,e.x,e.z,e.rot,e.y,{collide:!1,clearGrass:e.id!=="viaduct",noCull:!0}),t=n.obj,this.colliders.cylinder(e.x,e.z,1.15,n.y-1,n.y+9,{blocksView:!0,id:`lamp-${e.id}`})),!t)continue;t.updateMatrixWorld(!0);const i=t.getObjectByName("Flame"),s=new R;i?i.getWorldPosition(s):s.copy(t.position).add(new R(0,e.building?15.5:7.6,0));const a=new Set;t.traverse(c=>{if(c.isMesh)for(const l of[c.material].flat())(l.name==="Lamp glass"||l.name==="Lamp star")&&(c.userData.ownMat||(c.material=Array.isArray(c.material)?c.material.map(h=>h.clone()):c.material.clone(),c.userData.ownMat=!0))}),t.traverse(c=>{if(c.isMesh)for(const l of[c.material].flat())(l.name==="Lamp glass"||l.name==="Lamp star")&&(l.emissive=new he(l.name==="Lamp star"?"#ffd35a":"#ffb13d"),l.emissiveIntensity=0,a.add(l))});const o={...e,flame:s,obj:t,mats:[...a],lit:0,target:0,intensity:0};o.light=this.lightPool?.add({pos:s,intensity:()=>o.intensity,range:34}),this.lamps.set(e.id,o)}}placeDocks(){for(const e of K_){const t=gn(e.rot),n=Math.sin(t),i=Math.cos(t);for(let s=0;s<e.n;s++){const a=e.x+n*(s*4+2),o=e.z+i*(s*4+2),c=this.model("dock",[2.6,.2,4],"#8a6440");c.position.set(a,.72,o),c.rotation.y=t,this.group.add(c),this.colliders.box(a,o,1.3,2.05,e.rot,-3,.72,{walkable:!0,surface:"wood"})}}}placeStones(){q_.forEach(([e,t],n)=>{const i=this.model(n%2?"stepping-stone-b":"stepping-stone",[1.4,1.4,1.2],"#8d8a84");i.position.set(e,0,t),i.rotation.y=n*1.7,this.group.add(i),this.colliders.cylinder(e,t,.68,-2,.35,{walkable:!0,surface:"stone",id:`stone${n}`})})}placeDressing(){const e=xs,t={x:-8.8,z:-45},n=this.model("drawbridge",[1.8,.3,6],"#8a6440");n.position.set(t.x,1.15,t.z),n.rotation.y=gn(90),this.group.add(n),this.nodes.drawbridge=n.getObjectByName("Deck")||n,this.solids.drawbridge=this.colliders.box(t.x+3,t.z,3.1,.95,0,-2,1.2,{walkable:!0,surface:"wood",enabled:!0}),this.colliders.remove(this.solids.drawbridge);const i=this.model("ferry",[2.4,1,5.2],"#9a6b45");i.position.set(5.6,0,30),i.rotation.y=gn(90),this.group.add(i),this.nodes.ferry=i;const s=this.model("rowboat",[1.4,.6,3.4],"#b8553a");s.position.set(-6.8,.02,-4),s.rotation.y=gn(20),this.group.add(s),this.nodes.rowboat=s;const a=this.byId.get("boathouse");a&&a.y;const o=[[-17.2,-12.4,1],[-18.6,-13.6,2],[-20.2,-14.4,3]];this.crateTop=null;for(const[d,p,b]of o){const g=this.world.heightAt(d,p);for(let m=0;m<b;m++){const _=this.model("crate",[1,1,1],"#a0703f");_.position.set(d,g+m*1,p),_.rotation.y=gn(12*b+m*7),this.group.add(_)}this.colliders.box(d,p,.52,.52,12*b,g-.5,g+b*1,{walkable:!0,surface:"wood"}),this.crateTop={x:d,z:p,y:g+b*1}}for(const[d,p,b]of[["hearthShrine",e.forestHearth.x,e.forestHearth.z]]){const g=this.model("hearth",[1.4,1.4,1.2],"#6d6259");g.position.set(p,this.world.heightAt(p,b),b),this.group.add(g),this.nodes[d]=g,this.colliders.cylinder(p,b,.8,g.position.y-1,g.position.y+.6,{id:d})}this.nodes.scarecrows=Y_.map(([d,p],b)=>{const g=this.model("scarecrow",[.8,.4,1.9],"#c89b4a");return g.position.set(d,this.world.heightAt(d,p),p),g.rotation.y=b*1.3,this.group.add(g),this.colliders.cylinder(d,p,.3,g.position.y,g.position.y+1.9),{obj:g,bell:g.getObjectByName("Bell"),x:d,z:p,y:g.position.y}});const c=this.model("sheep-pen",[10,10,1.2],"#9a7a50");c.position.set(e.pen.x,this.world.heightAt(e.pen.x,e.pen.z),e.pen.z),this.group.add(c),this.nodes.pen=c,this.nodes.penGate=c.getObjectByName("Gate");for(let d=0;d<20;d++){const p=d/20*Math.PI*2,b=e.pen.x+Math.sin(p)*5,g=e.pen.z+Math.cos(p)*5;Math.abs(p)<.35||Math.abs(p-Math.PI*2)<.35||this.colliders.cylinder(b,g,.55,c.position.y-1,c.position.y+1.3)}const l=$_;for(let d=l.x0;d<=l.x1;d+=2){if(Math.abs(d-l.gateX)<l.gateW/2)continue;const p=this.world.heightAt(d,l.z);if(p<.5)continue;const b=this.model("fence-wood",[2,.2,1.2],"#8f6a42");b.position.set(d,p,l.z),this.group.add(b)}const h=l.x0-10;this.solids.fence=this.colliders.box((h+l.gateX-l.gateW/2)/2,l.z,(l.gateX-l.gateW/2-h)/2,.3,0,-5,60),this.colliders.box((l.gateX+l.gateW/2+l.x1)/2,l.z,(l.x1-l.gateX-l.gateW/2)/2,.3,0,-5,60),this.solids.orchardGate=this.colliders.box(l.gateX,l.z,l.gateW/2,.35,0,-5,60,{id:"orchardGate"});const u=this.model("fence-wood",[l.gateW,.2,1.4],"#b0463a");u.position.set(l.gateX,this.world.heightAt(l.gateX,l.z),l.z),u.scale.set(l.gateW/2,1.2,1),this.group.add(u),this.nodes.orchardGate=u;for(let d=0;d<4;d++){const p=this.model("shrine-stairs",[4,4.5,3],"#9d968c");p.position.set(e.shrineStairsBase.x,12+d*3,-124.25-d*4.5),this.group.add(p)}this.solids.bear=this.colliders.box(e.bearSpot.x,e.bearSpot.z,6.5,1.6,0,0,40,{id:"bear"});for(const d of[-1,1]){this.colliders.box(e.bearSpot.x+d*6.8,e.bearSpot.z-12,.4,12,0,0,60,{id:"shrineHedge"});for(let p=0;p<12;p++){const b=e.bearSpot.x+d*6.8,g=e.bearSpot.z-1-p*2,m=this.model("fence-bamboo",[2,.2,1.2],"#8f9a4a");m.position.set(b,this.world.heightAt(b,g),g),m.rotation.y=Math.PI/2,this.group.add(m)}}const f=[["street-lamp",-47.5,40,90],["street-lamp",-47.5,5,90],["street-lamp",-42.5,-20,-90],["street-lamp",-84,94,40],["bench",-50,26,90],["postbox",-49.5,24,90],["well",-40,22,0],["market-stall",-49,-24,90],["market-stall",-41,40,-90],["barrel",-27,-38,0],["barrel",-26,-39.2,0],["sacks",-24.5,-38.5,30],["cart",-30,-48,70],["noren-lantern",-52,33,0],["street-lamp",108,0,0],["street-lamp",122,12,180],["bench",112,12,180],["bench",118,12,180],["flowerpot",103,8,0],["flowerpot",103,20,0],["festival-stall",108,20,180],["haybale",140,-48,20],["haybale",142,-46,50],["signpost",26,25,90],["signpost",-44,64,0],["laundry-line",-60,10,90],["bench",-92,118.5,0],["bench",-104,118.5,0],["street-lamp",-110,118,0],["street-lamp",140,69,0],["bench",144,70,-120],["stone-lantern",58.5,-118,0],["stone-lantern",65.5,-118,0],["stone-lantern",58,-150,0],["stone-lantern",66,-150,0],["signpost",84,-76,0],["log",-38,-94,60],["stump",-52,-70,0],["fence-bamboo",-64,132,0],["fence-bamboo",-64,134,0],["flowerpot",-55,137,0],["barrel",-155,96,0],["crate",-153,97,20]];for(const[d,p,b,g]of f){const m=this.world.heightAt(p,b),_=this.model(d,[.8,.8,1.4],"#9a7a50");_.position.set(p,m,b),_.rotation.y=gn(g),this.group.add(_),this.cullList.push({obj:_,x:p,z:b,prop:!0}),["flowerpot","noren-lantern","laundry-line"].includes(d)||this.colliders.cylinder(p,b,d==="well"||d==="market-stall"||d==="festival-stall"?1.1:.4,m-.5,m+1.6),this.world.splat.paintDisc(p,b,.8,3,.2,.8)}}cull(e,t){const n=this.world.focus;n&&(n.x-e.x)**2+(n.z-e.z)**2<225&&(e=n);const i=l=>Math.min(l-12,l*.94)**2,s=t.propDist*t.propDist,a=t.buildDist*t.buildDist,o=i(t.propDist),c=i(t.buildDist);for(const l of this.cullList){const h=(l.x-e.x)**2+(l.z-e.z)**2;l.obj.visible=l.obj.visible?h<(l.prop?s:a):h<(l.prop?o:c)}if(!t.propShadows&&!this.propShadowsOff){this.propShadowsOff=!0;for(const l of this.cullList)l.prop&&l.obj.traverse(h=>{h.isMesh&&(h.castShadow=!1)})}}setLamp(e,t,n=!1){const i=this.lamps.get(e);i&&(i.target=t?1:0,n&&(i.lit=i.target))}update(e,t){for(const n of this.lamps.values()){n.lit+=(n.target-n.lit)*(1-Math.exp(-e*2.2));const i=.92+.08*Math.sin(performance.now()*.011+n.flame.x),s=n.lit*i;for(const a of n.mats)a.emissiveIntensity=s*(a.name==="Lamp star"?3.2:4.5);n.intensity=s*(8+55*t)}}lampReflections(){return[...this.lamps.values()].filter(e=>e.lit>.05).map(e=>({x:e.flame.x,y:e.flame.y,z:e.flame.z,intensity:e.lit}))}}const cu=.7175,lu={station:At.nearest(xs.station.x+6,119.5).s,halt:At.nearest(xs.halt.x,xs.halt.z).s,westPortal:Cn.west,viaductWest:At.nearest(Vt.x0,Vt.z).s};function Lo(r,e){const t=[],n=[],i=[[-.035,0],[.035,0],[.035,.1],[.05,.1],[.05,.14],[-.05,.14],[-.05,.1],[-.035,.1]];let s=0;for(const o of[-1,1]){const c=t.length/3;s=0;for(let h=r;h<=e+.001;h+=1){const u=At.at(h),f=-u.tz,d=u.tx,p=u.x+f*cu*o,b=u.z+d*cu*o;for(const[g,m]of i)t.push(p+f*g,yn-.14+m,b+d*g);s++}const l=i.length;for(let h=0;h<s-1;h++)for(let u=0;u<l;u++){const f=c+h*l+u,d=c+h*l+(u+1)%l,p=f+l,b=d+l;n.push(f,p,d,d,p,b)}}const a=new at;return a.setAttribute("position",new et(t,3)),a.setIndex(n),a.computeVertexNormals(),a}function Dy(r,e,t){const n=[],i=[],s=[],a=[-1.9,-1.35,1.35,1.9],o=[-.62,-.3,-.3,-.62];let c=0;for(let h=r;h<=e+.001;h+=1){const u=At.at(h),f=-u.tz,d=u.tx,p=t(u.x,u.z);for(let b=0;b<4;b++){n.push(u.x+f*a[b],yn+o[b]+(p?.18:0),u.z+d*a[b]);const g=.85+(Math.sin(h*12.9898+b*78.233)*43758.5453%1+1)%1*.2;s.push(g,g,g)}c++}for(let h=0;h<c-1;h++)for(let u=0;u<3;u++){const f=h*4+u,d=f+1,p=f+4,b=p+1;i.push(f,p,d,d,p,b)}const l=new at;return l.setAttribute("position",new et(n,3)),l.setAttribute("color",new et(s,3)),l.setIndex(i),l.computeVertexNormals(),l}class hu{constructor(e,t,n){this.obj=e,this.length=t,this.kind=n,this.wheels=[],e.traverse(i=>{/^Wheel\d$/.test(i.name)&&this.wheels.push(i)}),this.rod=e.getObjectByName("Rod"),this.rodBase=this.rod?this.rod.position.clone():null,this.smoke=e.getObjectByName("Smoke"),this.garland=e.getObjectByName("Garland"),this.cab=e.getObjectByName("Cab"),this.seats=[1,2,3,4].map(i=>e.getObjectByName(`Seat${i}`)).filter(Boolean)}}class Ny{constructor(e,t,n,i,s){this.lightPool=s,this.scene=e,this.assets=t,this.world=n,this.colliders=i,this.group=new dt,this.group.name="railway",e.add(this.group),this.repaired=!1;const a=Cn.west-20,o=Cn.east+20,c=(p,b)=>p>Vt.x0&&p<Vt.x1&&Math.abs(b-Vt.z)<4,l=(p,b)=>c(p,b)&&p>Vt.brokenSpan[0]+.2&&p<Vt.brokenSpan[1]-.2,h=At.nearest(Vt.brokenSpan[0],Vt.z).s,u=At.nearest(Vt.brokenSpan[1],Vt.z).s,f=new qt({color:"#8e8a86",metalness:.75,roughness:.38});this.rails=[Lo(a,h),Lo(u,o)].map(p=>new Qe(p,f)),this.gapRails=new Qe(Lo(h,u),f),this.gapRails.visible=!1;for(const p of[...this.rails,this.gapRails])p.castShadow=!0,p.receiveShadow=!0,this.group.add(p);const d=new qt({color:"#8d857b",roughness:.95,vertexColors:!0});zi(d);for(const[p,b]of[[a,h-1],[u+1,o]]){const g=new Qe(Dy(p,b,c),d);g.receiveShadow=!0,this.group.add(g)}this.placeSleepers(a,o,l),this.placeViaduct(),this.placePortals();for(let p=a;p<o;p+=2){const b=At.at(p);c(b.x,b.z)||this.world.splat.paintDisc(b.x,b.z,2.2,3,0,1.5)}this.cars=[],this.train={s:lu.westPortal-6,v:0,target:null,dir:1,visible:!0},this.buildTrain(2)}placeSleepers(e,t,n){const i=this.assets.parts("sleeper"),s=[];for(let o=e;o<=t;o+=.62){const c=At.at(o);s.push({p:c,gap:n(c.x,c.z)})}const a=o=>(i.length?i:[{geometry:new Zn(2.3,.15,.24).translate(0,-.075,0),material:new qt({color:"#6b4a33",roughness:.9}),matrix:new ke}]).map(l=>{const h=new ws(l.geometry,l.material,o.length),u=new ke,f=new Xt;return o.forEach((d,p)=>{f.setFromAxisAngle(xt.DEFAULT_UP,Math.atan2(d.p.tx,d.p.tz)+Math.PI/2),u.compose(new R(d.p.x,yn-.14,d.p.z),f,new R(1,1,1)).multiply(l.matrix),h.setMatrixAt(p,u)}),h.receiveShadow=!0,h.castShadow=!1,this.group.add(h),h});a(s.filter(o=>!o.gap)),this.gapSleepers=a(s.filter(o=>o.gap)),this.gapSleepers.forEach(o=>{o.visible=!1})}model(e,t,n){const i=this.assets.clone(e);return i?(i.traverse(s=>{s.isMesh&&zi(s.material)}),i):wd(e,t,n)}placeViaduct(){const e=Vt;for(const[i,s]of[[e.x0+5,0],[e.x1-5,180]]){const a=this.model("viaduct-abutment",[10,5.5,1],"#a79f94");a.position.set(i,Bt,e.z),a.rotation.y=s*Math.PI/180,this.group.add(a)}for(const i of V_){const s=i===(e.brokenSpan[0]+e.brokenSpan[1])/2,a=this.model(s?"viaduct-broken":"viaduct-span",[14,5.5,1],"#a79f94");if(a.position.set(i,Bt,e.z),this.group.add(a),s){this.brokenSpan=a;const c=this.model("viaduct-repair",[14,5.5,.6],"#c79a5b");c.position.set(i,Bt,e.z),c.visible=!1,this.group.add(c),this.repair=c,this.beams=[1,2,3].map(l=>c.getObjectByName(`Beam${l}`)).filter(Boolean),this.scaffold=c.getObjectByName("Scaffold")}const o=i+7;o<e.x1-6&&this.colliders.box(o,e.z,1.3,2.9,0,-5,Bt-1.5)}const[t,n]=e.brokenSpan;this.deckWest=this.colliders.box((e.x0+t)/2,e.z,(t-e.x0)/2,2.35,0,Bt-1.5,Bt,{walkable:!0,surface:"stone"}),this.deckEast=this.colliders.box((n+e.x1)/2,e.z,(e.x1-n)/2,2.35,0,Bt-1.5,Bt,{walkable:!0,surface:"stone"}),this.deckGap=this.colliders.box((t+n)/2,e.z,(n-t)/2,2.35,0,Bt-1.5,Bt,{walkable:!0,surface:"wood"}),this.colliders.remove(this.deckGap);for(const i of[-1,1])this.colliders.box(0,e.z+i*2.6,(e.x1-e.x0)/2,.3,0,Bt-.5,Bt+3,{id:"parapet"});this.gapBarriers=[t-.3,n+.3].map(i=>this.colliders.box(i,e.z,.3,2.3,0,Bt-.5,Bt+3,{id:"gap"}))}placePortals(){for(const[e,t]of[[Cn.west,-1],[Cn.east,1]]){const n=At.at(e),i=this.model("tunnel-portal",[9,4,9],"#8f8b86");i.position.set(n.x,yn,n.z),i.rotation.y=Math.atan2(-n.tx*t,-n.tz*t),this.group.add(i)}}buildTrain(e){for(const n of this.cars)this.group.remove(n.obj);for(const n of this.colliderCars||[])this.colliders.remove(n);this.cars=[];const t=this.model("kobo",[2.6,3.6,7.2],"#d63a2a");this.cars.push(new hu(t,7.2,"loco"));for(let n=0;n<e;n++)this.cars.push(new hu(this.model("coach",[2.6,3.4,9.5],"#1f8f8a"),9.5,"coach"));for(const n of this.cars)this.group.add(n.obj);this.headPos??=new R,this.headSrc||(this.headSrc=this.lightPool?.add({pos:this.headPos,intensity:()=>this.headI||0,range:22,color:"#ffe2a8"})),this.colliderCars=this.cars.map(()=>this.colliders.box(0,0,1.3,4.5,0,yn-1,yn+3.6,{id:"train"}))}setFestival(e){for(const t of this.cars)t.garland&&(t.garland.visible=e)}setRepaired(e,t=3){this.repaired=e,this.repair&&(this.repair.visible=e||t>0),this.beams?.forEach((n,i)=>{n.visible=i<t}),this.scaffold&&(this.scaffold.visible=!e),this.gapRails.visible=e,this.gapSleepers.forEach(n=>{n.visible=e}),e?(this.colliders.enable(this.deckGap),this.gapBarriers.forEach(n=>this.colliders.remove(n))):(this.colliders.remove(this.deckGap),this.gapBarriers.forEach(n=>this.colliders.enable(n)))}goTo(e,t=9){this.train.target=e,this.train.cruise=t}placeAt(e){this.train.s=e,this.train.v=0,this.train.target=null}startPatrol(e=7){this.patrol={min:Cn.west+34,max:At.nearest(156,44).s,speed:e},this.placeAt(At.nearest(-35,120).s),this.train.v=e,this.goTo(this.patrol.max,e),this.turnWait=0}update(e,t){const n=this.train;if(this.patrol&&n.target===null&&(this.turnWait=(this.turnWait||0)-e,this.turnWait<=0&&this.goTo(n.s>(this.patrol.min+this.patrol.max)/2?this.patrol.min:this.patrol.max,this.patrol.speed)),n.target!==null){const c=n.target-n.s,l=Math.sign(c),h=Math.sqrt(2*1.2*Math.abs(c)),u=l*Math.min(n.cruise,h);n.v+=Math.max(-1.6*e*60/60,Math.min(1.6*e,u-n.v)),Math.abs(c)<.05&&Math.abs(n.v)<.15&&(n.s=n.target,n.v=0,n.target=null,this.turnWait=2,this.onArrive?.(n.s),this.onArriveAny?.(n.s))}else n.v*=Math.exp(-e*3);if(!this.repaired){const c=lu.viaductWest+38;n.s>c&&(n.s=c,n.v=0)}const i=n.s;n.s+=n.v*e,n.target!==null&&(n.target-i)*(n.target-n.s)<=0&&(n.s=n.target,n.v=0,n.target=null,this.turnWait=2,this.onArrive?.(n.s),this.onArriveAny?.(n.s));let s=n.s;const a=1;this.cars.forEach((c,l)=>{const h=At.at(s-c.length/2),u=At.at(s-c.length/2-2),f=At.at(s-c.length/2+2);c.obj.position.set(h.x,yn,h.z),c.obj.rotation.y=Math.atan2(f.x-u.x,f.z-u.z)*a;const d=s-c.length<Cn.west-3||s>Cn.east+3+c.length;c.obj.visible=!d;const p=this.colliderCars[l];d?this.colliders.remove(p):this.colliders.move(p,h.x,h.z),p.c=Math.cos(c.obj.rotation.y),p.s=Math.sin(c.obj.rotation.y),c.obj.updateMatrixWorld(!0);const b=c.kind==="loco"?.65:.45,g=n.s/b;for(const m of c.wheels)m.rotation.x=g;c.rod&&c.rodBase&&c.rod.position.set(c.rodBase.x,c.rodBase.y+.22-.22*Math.cos(g),c.rodBase.z-.22*Math.sin(g)),s-=c.length+(l===0?0:.3)});const o=this.cars[0].obj;this.headPos.set(0,2,7).applyMatrix4(o.matrixWorld),this.headI=o.visible&&t>.3?18*t:0,this.smokeRate=Math.min(1,Math.abs(n.v)/5)*.8+.2}smokePoint(e=new R){const t=this.cars[0];return t.smoke?t.smoke.getWorldPosition(e):e.copy(t.obj.position).add(new R(0,3.8,0))}}const Uy={spring:{h:.38,color:"#8fd34e",bund:"#6e9c3a",water:!0,harvested:!1},summer:{h:.95,color:"#3f9e3a",bund:"#58903a",water:!0,harvested:!1},autumn:{h:1,color:"#e6b33e",bund:"#9a8446",water:!1,harvested:!0},winter:{h:.18,color:"#b99a62",bund:"#8f8068",water:!1,harvested:!0}};function ky(){const r=[],e=[],t=[];let n=0;for(let s=0;s<7;s++){const a=s/7*Math.PI*2+s*.37,o=.45+s%3*.08,c=.03,l=.12+s%2*.08,h=Math.cos(a),u=Math.sin(a),f=-u,d=h;for(let p=0;p<=3;p++){const b=p/3,g=c*(1-b*.7),m=h*l*b*b,_=u*l*b*b,v=o*b;r.push(m-f*g,v,_-d*g,m+f*g,v,_+d*g),t.push(0,b,1,b)}for(let p=0;p<3;p++){const b=n+p*2;e.push(b,b+1,b+2,b+1,b+3,b+2)}n+=8}const i=new at;return i.setAttribute("position",new et(r,3)),i.setAttribute("uv",new et(t,2)),i.setIndex(e),i.computeVertexNormals(),i}class Fy{constructor(e,t,n){this.group=new dt,this.group.name="paddies",e.add(this.group),this.waterMat=new qt({color:"#2f6f86",roughness:.03,metalness:.62,transparent:!0,opacity:.9,envMapIntensity:1.8}),this.riceMat=zi(new qt({color:"#8fd34e",roughness:.75,side:Jt}),{wind:2});const i=this.bundMat=zi(new qt({color:"#7f8f3c",roughness:.95})),s=[],a=[],o=[];for(const l of Pa){const h=l.t,u=new Ls(l.w,l.d).rotateX(-Math.PI/2).translate(l.x,h+.08,l.z);a.push(u);const f=.55,d=.34;for(const[p,b,g,m]of[[0,-l.d/2,l.w+f,f],[0,l.d/2,l.w+f,f],[-l.w/2,0,f,l.d],[l.w/2,0,f,l.d]]){const _=new Zn(g,d,m,Math.max(1,Math.round(g/1.5)),1,Math.max(1,Math.round(m/1.5))),v=_.attributes.position;for(let x=0;x<v.count;x++)v.getY(x)>0&&(v.setX(x,v.getX(x)*(g>m?1:.7)),v.setZ(x,v.getZ(x)*(m>g?1:.7)));_.translate(l.x+p,h+d/2-.05,l.z+b),s.push(_.toNonIndexed())}for(let p=.6;p<l.w-.3;p+=.62)for(let b=.55;b<l.d-.3;b+=.58)o.push({x:l.x-l.w/2+p+Math.sin(p*7+b)*.05,z:l.z-l.d/2+b,y:h+.02,paddy:l.id,rot:(p*13.7+b*7.1)%6.28});n.splat.paintRect(l.x,l.z,l.w/2+.6,l.d/2+.6,0,3,0,.8)}this.water=new Qe(Wh(a),this.waterMat),this.water.receiveShadow=!0,this.water.renderOrder=1,this.bunds=new Qe(Wh(s.map(l=>(l.deleteAttribute("uv"),l))),i),this.bunds.receiveShadow=!0,this.bunds.castShadow=!0,this.rice=new ws(ky(),this.riceMat,o.length),this.riceRecords=o,this.rice.receiveShadow=!0,this.group.add(this.water,this.bunds,this.rice),this.hay=new dt;const c=Pa.filter((l,h)=>h%3!==1);this.harvestedIds=new Set(c.map(l=>l.id));for(const l of c.slice(0,5))for(let h=0;h<2;h++){const u=t.clone("haybale");u&&(u.position.set(l.x-2+h*3.6,l.t,l.z+(h?1.4:-1.2)),u.rotation.y=h*1.3+l.x,this.hay.add(u))}this.group.add(this.hay)}setSeason(e){const t=Uy[e];this.riceMat.color.set(t.color),this.bundMat.color.set(t.bund);const n=new ke,i=new Xt,s=new R(0,1,0);let a=0;for(const o of this.riceRecords){const l=t.harvested&&this.harvestedIds.has(o.paddy)?e==="winter"?.16:.22:t.h;i.setFromAxisAngle(s,o.rot),n.compose(new R(o.x,o.y,o.z),i,new R(1,l,1)),this.rice.setMatrixAt(a++,n)}this.rice.count=a,this.rice.instanceMatrix.needsUpdate=!0,this.water.visible=t.water,this.hay.visible=e==="autumn"}}const Id={Leaves:"leaves",Needles:"needles","Maple leaves":"maple",Blossom:"blossom"},uu=new Set(["Leaves","Maple leaves","Blossom"]),ps=new ke,du=new Xt,fu=new R,Uc=new R,Do=new en,ls=new R,er=new R,No=new R,Ld=new R(0,1,0),pu=r=>Math.max(r*.07,12);class Oy{constructor(e,t,n,i,s){this.model=n,this.records=i,this.opts=s;const a=s.lod&&t.has(s.lod)?t.parts(s.lod):null;this.near=this.build(e,t.parts(n),i.length,!1,s.wind),this.far=a?this.build(e,a,i.length,!1,s.wind):null,this.shadow=s.castShadow?this.buildShadow(e,a||t.parts(n),i.length):null,this.state=new Uint8Array(i.length);const o=new En;t.gltf(n).scene.updateMatrixWorld(!0),o.setFromObject(t.gltf(n).scene),this.height=o.max.y,this.radius=Math.max(o.max.x-o.min.x,o.max.z-o.min.z,o.max.y)*.6,this.matrices=i.map(c=>(du.setFromAxisAngle(xt.DEFAULT_UP,c.rot*Math.PI/180),fu.set(c.s,c.s*(c.sy??1),c.s),Uc.set(c.x,c.y,c.z),new ke().compose(Uc,du,fu))),this.dirty=!0}build(e,t,n,i,s){return t.map(a=>{const o=a.material,c=Id[o.name]!==void 0;zi(o,{wind:c?s:0});const l=new ws(a.geometry,o,n);return l.instanceMatrix.setUsage(Tl),l.count=0,l.frustumCulled=!1,l.castShadow=i,l.receiveShadow=!0,l.userData.partMatrix=a.matrix,l.userData.materialName=o.name,l.name=`${this.model}:${o.name}`,e.add(l),l})}buildShadow(e,t,n){return t.map(i=>{const s=new hn({colorWrite:!1,depthWrite:!1,depthTest:!1}),a=new ws(i.geometry,s,n);return a.instanceMatrix.setUsage(Tl),a.count=0,a.frustumCulled=!1,a.castShadow=!0,a.receiveShadow=!1,a.userData.partMatrix=i.matrix,a.userData.materialName=i.material.name,a.name=`${this.model}:shadow`,e.add(a),a})}updateShadow(e,t,n){if(!this.shadow)return;const i=new Array(this.shadow.length).fill(0);No.copy(n).normalize(),ls.crossVectors(Ld,No).normalize(),er.crossVectors(No,ls);const s=ls.dot(e),a=er.dot(e);for(let o=0;o<this.records.length;o++){const c=this.records[o],l=t+this.radius*c.s+6,h=ls.x*c.x+ls.y*c.y+ls.z*c.z,u=er.x*c.x+er.y*(c.y+this.height*c.s*.5)+er.z*c.z;if(Math.abs(h-s)>l||Math.abs(u-a)>l)continue;const f=this.matrices[o];for(let d=0;d<this.shadow.length;d++){const p=this.shadow[d];ps.multiplyMatrices(f,p.userData.partMatrix),ps.toArray(p.instanceMatrix.array,i[d]*16),i[d]++}}this.shadow.forEach((o,c)=>{o.count=i[c],o.instanceMatrix.needsUpdate=!0})}update(e,t,n,i,s=e){const a=new Array(this.near.length).fill(0),o=this.far?new Array(this.far.length).fill(0):null,c=this.opts.maxDist??i,l=this.state,h=pu(c),u=pu(n);for(let f=0;f<this.records.length;f++){const d=this.records[f],p=Math.hypot(d.x-e.x,d.z-e.z);let b=l[f];if(b&2?p<c-h&&(b&=-3):p>c&&(b|=2),b&1?p<n-u&&(b&=-2):p>n&&(b|=1),l[f]=b,b&2||(Do.center.set(d.x,d.y+this.height*d.s*.5,d.z),Do.radius=this.radius*d.s+Math.hypot(d.x-s.x,d.y-s.y,d.z-s.z)*.045+.6,!t.intersectsSphere(Do)))continue;const g=!(b&1)||!this.far||d.story,m=g?this.near:this.far,_=g?a:o,v=this.matrices[f];for(let x=0;x<m.length;x++){const y=m[x];ps.multiplyMatrices(v,y.userData.partMatrix),ps.toArray(y.instanceMatrix.array,_[x]*16),_[x]++}}this.near.forEach((f,d)=>{f.count=a[d],f.instanceMatrix.needsUpdate=!0}),this.far?.forEach((f,d)=>{f.count=o[d],f.instanceMatrix.needsUpdate=!0})}meshes(){return[...this.near,...this.far??[]]}shadowMeshes(){return this.shadow??[]}}class zy{constructor(e,t,n,i){this.group=new dt,this.group.name="foliage",e.add(this.group),this.sets=[],this.nearDist=i.trees>=1?120:i.trees>=.85?95:70,this.maxDist=1400;const s=(a,o)=>{const c=new Map;for(const l of a)t.has(l.model)&&(c.has(l.model)||c.set(l.model,[]),c.get(l.model).push(l));for(const[l,h]of c)this.sets.push(new Oy(this.group,t,l,h,typeof o=="function"?o(l):o))};s(n.trees,a=>({lod:`${a}-lod`,castShadow:!0,wind:1})),s(n.bushes,{castShadow:!0,wind:1,maxDist:160}),s(n.rocks,{castShadow:!0,wind:0,maxDist:320}),s(n.flowers,{castShadow:!1,wind:2,maxDist:90}),s(n.reeds,{castShadow:!1,wind:2,maxDist:110}),s(n.lilies,{castShadow:!1,wind:0,maxDist:120}),this.frustum=new Na,this.shadowFocus=new R(1e9,0,0),this.shadowDir=new R(0,1,0),this.shadowRange=i.shadowRange,this.scene=e,this.lastPos=new R(1e9,0,0),this.lastQuat=new Xt,this.season=null}updateShadows(e){(this.lodFocus??=new R).copy(e),this.sun??=this.scene.children.find(n=>n.isDirectionalLight&&n.castShadow)||null;const t=this.sun?Uc.subVectors(this.sun.position,this.sun.target.position).normalize():Ld;if(!(e.distanceToSquared(this.shadowFocus)<16&&t.dot(this.shadowDir)>.9995)){this.shadowFocus.copy(e),this.shadowDir.copy(t);for(const n of this.sets)n.updateShadow(e,this.shadowRange,t)}}update(e,t=!1){if(!(e.position.distanceToSquared(this.lastPos)>.25||Math.abs(e.quaternion.dot(this.lastQuat))<.9998)&&!t)return;this.lastPos.copy(e.position),this.lastQuat.copy(e.quaternion),e.updateMatrixWorld(),ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(ps);const i=this.lodFocus,s=e.position,a=i&&(i.x-s.x)**2+(i.z-s.z)**2<225?i:s;for(const o of this.sets)o.update(a,this.frustum,this.nearDist,this.maxDist,s)}setSeason(e){this.season=e;const t=zs[e],n=new Set;for(const i of this.sets){const s=Pd.has(i.model);for(const a of i.meshes()){const o=a.userData.materialName,c=Id[o];c&&!n.has(a.material)&&(n.add(a.material),a.material.color.set(i.model==="tree-peach"&&o==="Leaves"?t.peachLeaves:t[c])),a.visible=!(t.bareTrees&&s&&uu.has(o)),o==="Peach"&&(a.visible=e==="summer"),(i.model.startsWith("flowers")||i.model==="lilypads")&&(a.visible=e!=="winter")}for(const a of i.shadowMeshes()){const o=a.userData.materialName;a.visible=!(t.bareTrees&&s&&uu.has(o))&&(o!=="Peach"||e==="summer")}}}}function By(r=6,e=3){const t=[],n=[],i=[];let s=0;for(let o=0;o<r;o++){const c=o/r*Math.PI*2+Math.random()*.8,l=.04+Math.random()*.1,h=.22+Math.random()*.22,u=.035+Math.random()*.02,f=.08+Math.random()*.16,d=Math.cos(c)*l,p=Math.sin(c)*l,b=Math.cos(c),g=Math.sin(c),m=-g,_=b;for(let v=0;v<=e;v++){const x=v/e,y=u*(1-x*.92),M=d+b*f*x*x,A=p+g*f*x*x,P=h*x;t.push(M-m*y,P,A-_*y,M+m*y,P,A+_*y),n.push(0,x,1,x)}for(let v=0;v<e;v++){const x=s+v*2;i.push(x,x+1,x+2,x+1,x+3,x+2)}s+=(e+1)*2}const a=new at;return a.setAttribute("position",new et(t,3)),a.setAttribute("uv",new et(n,2)),a.setAttribute("normal",new et(new Array(t.length).fill(0).map((o,c)=>c%3===1?1:0),3)),a.setIndex(i),a}class Hy{constructor(e,t,n,i,s){const a=s.grass>=1?72:s.grass>=.6?60:44,o=Math.round(a*a*(s.grass>=1?6.2:s.grass>=.6?4.2:2.6)),c=new Tm().copy(By()),l=new Float32Array(o*3);for(let u=0;u<o;u++)l[u*3]=Math.random()*a,l[u*3+1]=Math.random()*a,l[u*3+2]=Math.random();c.setAttribute("aOffset",new wa(l,3)),c.instanceCount=o,c.boundingSphere=new en(new R,1e6),this.uniforms={uCenter:{value:new R},uTile:{value:a},uHeight:{value:t},uHX:{value:t.userData.xform},uSplat:{value:n.texture},uSplatOrigin:{value:new ie(n.x0,n.z0)},uSplatSize:{value:new ie(n.w,n.h)},uNoise:{value:i},uDensity:{value:1},uGrassA:{value:new he},uGrassB:{value:new he},uGrassC:{value:new he},uTip:{value:new he},uPlayer:{value:new R(0,-100,0)}};const h=new qt({roughness:.85,side:Jt});h.onBeforeCompile=u=>{Object.assign(u.uniforms,this.uniforms,{uTime:Di.uTime,uWind:Di.uWind}),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
          attribute vec3 aOffset;
          uniform vec3 uCenter, uPlayer; uniform float uTile, uTime, uWind, uDensity;
          uniform sampler2D uHeight, uSplat, uNoise; uniform vec4 uHX; uniform vec2 uSplatOrigin, uSplatSize;
          uniform vec3 uGrassA, uGrassB, uGrassC, uTip;
          varying vec3 vGrassCol;`).replace("#include <begin_vertex>",`
          vec2 world = uCenter.xz + mod(aOffset.xy - uCenter.xz + uTile * 0.5, uTile) - uTile * 0.5;
          float gy = texture2D(uHeight, (world - uHX.xy) * uHX.zw).r;
          vec4 sp = texture2D(uSplat, (world - uSplatOrigin) / uSplatSize);
          float dist = length(world - uCenter.xz);
          float fade = 1.0 - smoothstep(uTile * 0.32, uTile * 0.5, dist);
          float keep = step(aOffset.z, sp.a * uDensity * (1.0 - sp.b * 0.55));
          vec4 nz = texture2D(uNoise, world * 0.03);
          float scale = keep * fade * (0.7 + 0.5 * nz.r) * (0.85 + 0.3 * aOffset.z);
          float ang = aOffset.z * 40.0;
          float c = cos(ang), s = sin(ang);
          vec3 transformed = vec3(position.x * c - position.z * s, position.y, position.x * s + position.z * c) * scale;
          float tip = uv.y;
          // wind: rolling gusts plus flutter, and blades part around the player
          float gust = texture2D(uNoise, world * 0.02 - vec2(uTime * 0.05, uTime * 0.02)).g;
          float bend = (sin(uTime * 1.8 + world.x * 0.35 + world.y * 0.22) * 0.5 + gust * 1.2) * uWind;
          transformed.x += bend * 0.16 * tip * tip;
          transformed.z += bend * 0.06 * tip * tip;
          vec2 away = world - uPlayer.xz;
          float pd = length(away);
          transformed.xz += normalize(away + 1e-4) * (1.0 - smoothstep(0.2, 1.1, pd)) * 0.35 * tip * step(abs(gy - uPlayer.y), 1.5);
          transformed.xz += world;
          transformed.y += gy - 0.02;
          vec3 g = mix(uGrassA, uGrassB, smoothstep(0.38, 0.66, texture2D(uNoise, world * 0.006).r));
          g = mix(g, uGrassC, smoothstep(0.42, 0.9, texture2D(uNoise, world * 0.031).g) * 0.45);
          vGrassCol = mix(g * 0.72, mix(g, uTip, 0.35) * 1.12, tip);
        `).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);"),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGrassCol;`).replace("#include <map_fragment>","diffuseColor.rgb *= vGrassCol;")},this.mesh=new Qe(c,h),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.name="grass",e.add(this.mesh)}setSeason(e){const t=zs[e],n=this.uniforms;n.uGrassA.value.set(t.grass[0]),n.uGrassB.value.set(t.grass[1]),n.uGrassC.value.set(t.grass[2]),n.uTip.value.set(e==="autumn"?"#f1d27a":e==="spring"?"#d8f07a":"#b9e36a"),n.uDensity.value=t.grassDensity,this.mesh.visible=t.grassDensity>0}update(e,t){this.uniforms.uCenter.value.copy(e),t&&this.uniforms.uPlayer.value.copy(t)}}const Gy=["mika","tamo","genzo","rin","ota","hana","villager-man","villager-woman","villager-kid"],Vy=["fox","bear","sheep","chicken","crow","rabbit","crab","fish-trout","fish-koi","fish-starfin","cat","duck","deer"],Wy=["kawabe-house-a","kawabe-house-b","kawabe-shop","boathouse","mill","drawbridge","star-lamp","takamori-house-a","takamori-house-b","bakery","belltower","station","platform","signal-cottage","engine-shed","shrine","torii","stone-lantern","shrine-stairs"],jy=["viaduct-span","viaduct-abutment","viaduct-broken","viaduct-repair","lamp-viaduct","sleeper","kobo","coach","ferry","rowboat","dock","stepping-stone","stepping-stone-b","lantern-boat","landslide","tunnel-portal"],mu=["tree-broadleaf-a","tree-broadleaf-b","tree-cedar","tree-pine","tree-maple","tree-sakura","tree-peach","tree-chestnut"],Xy=[...mu,...mu.map(r=>`${r}-lod`),"bush-a","bush-b","hydrangea","rock-a","rock-b","rock-c","reeds","lilypads","flowers-a","flowers-b","mushrooms","log","stump","beehive-branch","grass-tuft"],qy=["star-kite","hand-lantern","fishing-rod","hammer","hearth","crate","barrel","sacks","fence-wood","fence-bamboo","wall-stone","bench","well","market-stall","street-lamp","postbox","signpost","cart","haybale","scarecrow","sheep-pen","laundry-line","flowerpot","noren-lantern","fireworks-rack","festival-stall"],Ky=["cog","peach","chestnut","mushroom-item","honeycomb","journal-page","fallen-star","peach-bun","plate-trout","bowl-chestnuts","timber","iron-bolts","key"],Yy=["interior-cottage","interior-bakery","interior-mill","interior-station","keepsake-photo","keepsake-recipe","keepsake-float","keepsake-ticket"],$y=["music-box","golden-acorn","star-compass","star-tree","gift-lure","gift-radish","gift-buns","gift-cap","gift-pinecone","gift-honey"],Jy=[...["wren","rifle","sniper","shotgun","knife","sword","varg","mara","kobra","aegis"].map(r=>`kf-${r}`),...["rifle","sniper","shotgun","knife","sword","bow","rocket","laser"].map(r=>`kf-weapon-${r}`),"kf-kestrel","kf-prison","kf-archive","kf-lab","kf-barracks","kf-storage","kf-relay","kf-security","kf-tower-11","kf-tower-15","kf-tower-19","kf-medical","kf-ammo","kf-bunk","kf-desk","kf-workbench","kf-gate","kf-wall"],Zy=[...Gy,...Vy,...Wy,...jy,...Xy,...qy,...Ky,...Yy,...$y,...Jy],Qy=1.35,eM=6,tM=8;class nM{constructor(e,t=3){this.lights=[],this.slots=[];for(let n=0;n<t;n++){const i=new ud("#ffb84d",0,30,1.5);i.castShadow=!1,e.add(i),this.lights.push(i),this.slots.push({light:i,src:null,next:null,leaving:!1,w:0,I:0,score:0})}this.sources=new Set,this.lastT=null}add(e){const t={range:30,color:"#ffb84d",...e};return this.sources.add(t),t}remove(e){this.sources.delete(e)}weigh(e,t){if(!this.sources.has(e))return{I:0,score:0};const n=typeof e.intensity=="function"?e.intensity():e.intensity;if(!(n>.01))return{I:0,score:0};const i=e.pos.distanceToSquared(t),s=1-Ps.smoothstep(Math.sqrt(i),e.range*2.4,e.range*3);return s<=0?{I:0,score:0}:{I:n*s,score:n*s/(1+i/(e.range*e.range))}}update(e,t){const n=performance.now()/1e3;t===void 0&&(t=this.lastT===null?1:Math.min(.1,Math.max(0,n-this.lastT))),this.lastT=n;const i=new Set;for(const a of this.slots){if(a.next&&i.add(a.next),!a.src)continue;i.add(a.src);const o=this.weigh(a.src,e);a.score=o.score,o.score>0?a.I=o.I:a.leaving=!0}const s=[];for(const a of this.sources){if(i.has(a))continue;const o=this.weigh(a,e);o.score>0&&s.push({s:a,score:o.score})}s.sort((a,o)=>o.score-a.score);for(const a of s){let o=this.slots.find(c=>!c.src&&!c.next);if(!o){let c=null;for(const l of this.slots)l.src&&!l.next&&!l.leaving&&(!c||l.score<c.score)&&(c=l);if(!c||a.score<=c.score*Qy)break;c.leaving=!0,o=c}o.src?o.next=a.s:Object.assign(o,{src:a.s,w:0,leaving:!1,I:this.weigh(a.s,e).I})}for(const a of this.slots){const o=a.light;if(a.src&&(a.w=a.leaving?Math.max(0,a.w-t*tM):Math.min(1,a.w+t*eM),a.leaving&&a.w<=0)){const c=a.next;Object.assign(a,{src:c,next:null,leaving:!1,w:0,I:c?this.weigh(c,e).I:0})}if(!a.src){o.intensity=0;continue}o.position.copy(a.src.pos),o.color.set(a.src.color),o.distance=a.src.range,o.intensity=a.I*a.w*a.w*(3-2*a.w)}}}class iM{constructor(e,t){this.canvas=e,this.game=t,this.keys=new Set,this.pressed=new Set,this.fire=!1,this.aim=!1,this.locked=!1,this.dx=0,this.dy=0,addEventListener("keydown",n=>{t.mode!=="playing"||n.target.matches("input, select, textarea")||(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),this.keys.has(n.code)||this.pressed.add(n.code),this.keys.add(n.code),n.code==="Escape"&&t.mode==="playing"&&t.pause())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.clear(),t.mode==="playing"&&t.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&t.mode==="playing"&&t.pause()}),e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("mousedown",n=>{if(t.mode==="playing"){if(!this.locked){this.lock();return}n.button===0&&(this.fire=!0),n.button===2&&(this.aim=!0)}}),addEventListener("mouseup",n=>{n.button===0&&(this.fire=!1),n.button===2&&(this.aim=!1)}),addEventListener("mousemove",n=>{this.locked&&(this.dx+=n.movementX,this.dy+=n.movementY)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,this.locked||(this.clear(),t.mode==="playing"&&t.pause())}),document.addEventListener("pointerlockerror",()=>this.captureFailed()),e.addEventListener("wheel",n=>{t.mode!=="playing"||!n.deltaY||(n.preventDefault(),this.aim&&t.weapon.id==="sniper"?t.zoom=Math.max(3,Math.min(12,t.zoom-Math.sign(n.deltaY))):t.cycleWeapon(Math.sign(n.deltaY)))},{passive:!1})}captureFailed(){this.game.mode!=="playing"||document.pointerLockElement===this.canvas||(this.game.pause(),this.game.ui.toast("Mouse capture was declined. Select Resume to try again."))}lock(){try{this.canvas.requestPointerLock()?.catch(()=>this.captureFailed())}catch{this.captureFailed()}}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}clear(){this.keys.clear(),this.pressed.clear(),this.fire=!1,this.aim=!1,this.dx=this.dy=0}end(){this.pressed.clear(),this.dx=this.dy=0}}class sM{constructor(){this.enabled=!0}unlock(){try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.32:0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let a=0;a<t;a++)i[a]=Math.random()*2-1;this.noise=n,this.wind=this.ctx.createBufferSource(),this.wind.buffer=n,this.wind.loop=!0;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=350,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.04,this.wind.connect(s).connect(this.windGain).connect(this.master),this.wind.start()}this.ctx.resume().catch(()=>{})}catch{this.ctx?.close().catch(()=>{}),this.ctx=this.master=this.windGain=null}}toggle(){return this.enabled=!this.enabled,this.master&&(this.master.gain.value=this.enabled?.32:0),this.enabled}tone(e,t=.15,n=.2,i="sine",s=e){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=i,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(1,s),a+t),c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(c).connect(this.master),o.onended=()=>{o.disconnect(),c.disconnect()},o.start(a),o.stop(a+t)}burst(e,t,n){if(!this.ctx||!this.enabled)return;const i=this.ctx.currentTime,s=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();s.buffer=this.noise,a.type="lowpass",a.frequency.value=n,o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(.001,i+e),s.connect(a).connect(o).connect(this.master),s.onended=()=>{s.disconnect(),a.disconnect(),o.disconnect()},s.start(i),s.stop(i+e)}shot(e){e==="laser"?this.tone(1300,.22,.24,"sawtooth",140):e==="knife"||e==="bow"?this.burst(.12,.16,900):(this.burst(e==="rocket"?.8:.24,.9,e==="sniper"?1700:2400),this.tone(120,.22,.35,"triangle",30))}pickup(){this.tone(660,.18,.18),setTimeout(()=>this.tone(990,.3,.15),110)}hit(){this.tone(90,.15,.3,"triangle",30)}update(e,t){this.windGain&&this.windGain.gain.setTargetAtTime(t?.03+Math.min(100,e)*.0012:.025,this.ctx.currentTime,.3)}}let Bs=null;function rM(r){Bs=r}function fl(r){const e=Bs.clone(r);if(!e)throw new Error(`Required Blender model missing: ${r}`);return e}function Dd(r,e,t=!1){const n=new dt;n.name=`${t?"Wren":"Meridian"}-${e}`;const i=fl(r);n.add(i);const s=o=>["L","R"].map(c=>i.getObjectByName(`${o}_${c}`)),a=fr(e);return a.position.set(.3,1.03,-.45),n.add(a),n.userData={blender:!0,model:r,visual:i,weapon:a,legs:s("Leg"),knees:s("Knee"),arms:s("Arm"),elbows:s("Elbow"),head:i.getObjectByName("Head"),armorPlates:i.getObjectByName("ArmorPlates"),phase:Math.random()*Math.PI*2},n}const Nd=new R(0,-.284,.055);function aM(r,e,t){const n=e.position.clone(),i=Nd.clone(),a=new R(t*.35,1.8,.03).sub(r.position),o=a.clone().normalize(),c=Math.min(a.length(),n.length()+i.length()-.001),l=new R(t,-.15,.05);l.addScaledVector(o,-l.dot(o)).normalize();const h=Ps.clamp((n.lengthSq()+c*c-i.lengthSq())/(2*n.length()*c),-1,1),u=o.clone().multiplyScalar(n.length()*h).addScaledVector(l,n.length()*Math.sqrt(1-h*h));r.quaternion.setFromUnitVectors(n.normalize(),u.clone().normalize());const f=o.multiplyScalar(c).sub(u).applyQuaternion(r.quaternion.clone().invert());e.quaternion.setFromUnitVectors(i.normalize(),f.normalize())}const Uo=new Map;function pi(r,e=0,t=!1){const n=`${r}:${e}:${t}`;return Uo.has(n)||Uo.set(n,new qt({color:r,roughness:e?.38:.78,metalness:e,...t?{emissive:r,emissiveIntensity:1.7}:{}})),Uo.get(n)}const oM=new Zn(1,1,1),cM=new fi(1,12,8),lM=new $c(1,1,1,10);function tr(r){if(!r)return;r.userData.mixer?.stopAllAction(),r.userData.mixer?.uncacheRoot(r);const e=new Set;r.traverse(t=>{t.userData.ownsGeometry&&t.geometry.dispose(),t.userData.ownsMaterial&&t.material.dispose(),t.skeleton&&e.add(t.skeleton)}),e.forEach(t=>t.dispose())}function ze(r,e,t,n,i=0,s=!1){const a=new Qe(oM,pi(n,i,s));return a.scale.set(...e),a.position.set(...t),a.castShadow=a.receiveShadow=!0,r.add(a),a}function ko(r,e,t,n){const i=new Qe(cM,pi(n));return i.scale.set(...e),i.position.set(...t),i.castShadow=!0,r.add(i),i}function Ai(r,e,t,n,i,s=0){const a=new Qe(lM,pi(i,.5));return a.scale.set(e,t,e),a.position.set(...n),a.rotation.x=s,a.castShadow=!0,r.add(a),a}function fr(r){if(Bs)return fl(`kf-weapon-${r}`);const e=new dt;e.name=`weapon-${r}`;const t="#222d32",n="#6e7d7e",i="#59635a";if(r==="knife"||r==="sword"){ze(e,[.07,.09,.23],[0,0,.06],"#343c3b");const s=ze(e,[.045,.13,r==="sword"?1:.38],[0,.015,r==="sword"?-.54:-.26],"#bacace",.85);s.rotation.z=-.1,ze(e,[.15,.035,.035],[0,0,-.08],n,.5)}else if(r==="bow"){const s=new Qc(new R(0,-.55,-.25),new R(0,0,-.6),new R(0,.55,-.25));e.add(new Qe(new il(s,16,.026,5,!1),pi("#474e42",.4)));const a=new at().setFromPoints([new R(0,-.55,-.25),new R(0,0,.06),new R(0,.55,-.25)]);e.add(new Hi(a,new Is({color:"#c6d0b8"}))),e.children[0].userData.ownsGeometry=!0,e.children[1].userData.ownsGeometry=!0,e.children[1].userData.ownsMaterial=!0,ze(e,[.018,.018,.85],[0,0,-.38],"#cdb68c")}else if(r==="rocket")Ai(e,.14,1.2,[0,.035,-.25],i,Math.PI/2),Ai(e,.175,.14,[0,.035,-.85],t,Math.PI/2),ze(e,[.09,.22,.1],[0,-.16,.05],t),ze(e,[.07,.13,.15],[0,.21,-.22],n);else{const s=r==="sniper",a=r==="laser";ze(e,[.16,.16,s?.62:.47],[0,0,-.18],a?"#d1dbca":t,.45),ze(e,[.11,.12,.3],[0,-.025,.23],i,.2),ze(e,[.08,.24,.12],[0,-.13,.04],t);const o=ze(e,[.085,.22,.13],[0,-.16,-.18],i,.4);o.rotation.x=-.12,Ai(e,s?.031:.037,s?.68:.3,[0,.02,s?-.78:-.52],n,Math.PI/2),Ai(e,.045,.13,[0,.02,s?-1.1:-.68],t,Math.PI/2),Ai(e,s?.066:.038,s?.31:.12,[0,.15,-.13],t,Math.PI/2);const c=Ai(e,s?.056:.03,.012,[0,.15,s?-.29:-.2],"#64beb9",Math.PI/2);if(c.material=pi("#64beb9",.6,!0),a)for(let l=0;l<4;l++)ze(e,[.18,.04,.025],[0,.045,-.2-l*.07],"#73e7db",.3,!0)}return e}function Er(r="rifle",e=!1){if(Bs)return Dd(`kf-${e?"wren":r}`,r,e);const t=new dt;t.name=`${e?"Wren":"Meridian"}-${r}`;const n=e?"#465b52":r==="sniper"?"#6e7462":r==="sword"?"#665653":"#505e65",i=e?"#202f2e":"#2e363b",s=e?"#a9ddca":"#d98467",a="#bc9377";ze(t,[.53,.57,.3],[0,1.22,0],n),ze(t,[.56,.4,.35],[0,1.28,-.02],i,.15),ze(t,[.44,.1,.34],[0,.94,0],"#222c2e");for(const u of[-.17,0,.17])ze(t,[.13,.18,.1],[u,1.16,-.23],n);ze(t,[.29,.45,.2],[0,1.28,.25],n),ze(t,[.07,.15,.035],[-.2,1.47,-.215],s,.2);const o=new dt;o.position.y=1.63,t.add(o),ko(o,[.19,.235,.18],[0,0,0],a),ko(o,[.215,.14,.205],[0,.12,.008],i),ze(o,[.37,.075,.07],[0,.02,-.172],"#151f24",.4);for(const u of[-.09,.09])ze(o,[.135,.045,.025],[u,.028,-.215],e?"#9ccebf":"#c49979",.7);ze(o,[.26,.11,.07],[0,-.13,-.14],n),ze(o,[.085,.1,.09],[-.205,0,0],"#1d272c"),Ai(t,.009,.42,[-.18,1.65,.26],"#263235");const c=[],l=[];for(const u of[-1,1]){const f=new dt;f.position.set(u*.16,.93,0),t.add(f),c.push(f),ze(f,[.22,.46,.24],[0,-.22,0],n),ze(f,[.235,.16,.09],[0,-.43,-.12],i),ze(f,[.18,.36,.2],[0,-.63,0],n),ze(f,[.23,.16,.34],[0,-.85,-.065],"#242c2d",.2);const d=new dt;d.position.set(u*.36,1.47,0),t.add(d),l.push(d),ze(d,[.22,.27,.23],[0,-.1,0],n),ze(d,[.235,.11,.245],[0,-.02,0],i),ze(d,[.16,.32,.18],[0,-.36,-.08],n),ko(d,[.095,.105,.095],[0,-.54,-.14],"#283531"),d.rotation.x=-.55}const h=fr(r);return h.position.set(.3,1.03,-.45),t.add(h),t.userData={legs:c,arms:l,head:o,weapon:h,phase:Math.random()*6.28},t}function hM(r){if(Bs){const i=Dd(`kf-${r.name.toLowerCase()}`,r.weapon);return i.name=`${r.name} / ${r.title}`,i.scale.setScalar(1.2),i}const e=Er(r.weapon);e.name=`${r.name} / ${r.title}`,e.scale.setScalar(1.2);const t=new dt;e.add(t),ze(t,[.69,.52,.12],[0,1.28,-.25],"#34403f",.65);for(const i of[-1,1])ze(t,[.3,.24,.35],[i*.43,1.52,0],r.color,.5),ze(e,[.07,.32,.08],[i*.23,1.22,-.32],r.color,.3,!0);ze(e.userData.head,[.1,.24,.3],[0,.2,.015],r.color,.6),ze(e,[.42,.62,.18],[0,1.1,.4],"#263532",.45);const n=ze(e,[.16,.19,.06],[0,1.32,-.34],r.color,.4,!0);return e.userData.armorPlates=t,e.userData.core=n,e}function la(r,e,t=0,n=!1){const{legs:i,arms:s,phase:a}=r.userData;if(r.userData.blender){const{knees:o,elbows:c}=r.userData;i.forEach((h,u)=>{const f=Math.sin(e*9+a+u*Math.PI);h.rotation.x=n?-.22-u*.1:-f*Math.min(.6,t*.15),o[u].rotation.x=n?.3:Math.max(0,-f)*Math.min(.7,t*.16)}),s.forEach((h,u)=>{n?aM(h,c[u],u===0?-1:1):(h.rotation.set(-.75+Math.sin(e*9+a+u*Math.PI)*Math.min(.06,t*.015),0,u?-.25:0),c[u].rotation.set(-.55,0,0))});const l=r.userData.weapon;n?(l.position.set(.29,1.02,.5),l.rotation.set(-Math.PI/2,0,.12)):(r.updateMatrixWorld(!0),l.position.copy(r.worldToLocal(c[0].localToWorld(Nd.clone()))).add(new R(0,.14,-.03)),l.rotation.set(0,0,0));return}i.forEach((o,c)=>{o.rotation.x=n?.23+c*.15:Math.sin(e*9+a+c*Math.PI)*Math.min(.65,t*.15)}),s.forEach((o,c)=>{o.rotation.x=n?-2.5:-.6+Math.sin(e*9+a+c*Math.PI)*Math.min(.14,t*.025)})}function uM(){if(Bs){const i=fl("kf-kestrel");return i.userData.blender=!0,i.userData.rotors=["L_0","L_1","R_0","R_1"].map(s=>i.getObjectByName(`Rotor_${s}`)),i}const r=new dt;r.name="Kestrel K-9 kite drone";const e=new nd;e.moveTo(0,-2.1),e.lineTo(3.8,.55),e.lineTo(1.15,1.2),e.lineTo(0,.65),e.lineTo(-1.15,1.2),e.lineTo(-3.8,.55),e.closePath();const t=new Qe(new el(e,{depth:.07,bevelEnabled:!1}),pi("#344a45",.35));t.rotation.x=Math.PI/2,t.position.y=3,t.castShadow=!0,r.add(t),ze(r,[.5,.26,1.55],[0,2.95,-.15],"#202f30",.65),ze(r,[.19,.025,1.1],[0,3.095,-.25],"#cadcb4",.3);const n=[];for(const i of[-1,1]){const s=ze(r,[2.9,.025,.09],[i*1.7,3.04,-.1],"#d2c9a0");s.rotation.y=i*-.39;for(const o of[-.35,.75]){const c=i*(o<0?1.5:2.8),l=new Qe(new nl(.47,.065,6,20),pi("#1f2c2c",.6));l.rotation.x=Math.PI/2,l.position.set(c,3.09,o),r.add(l);const h=new dt;h.position.copy(l.position),ze(h,[.86,.025,.07],[0,0,0],"#7c9187",.5),ze(h,[.07,.025,.86],[0,0,0],"#7c9187",.5),r.add(h),n.push(h),ze(r,[.07,.05,.06],[c,3.12,o+.47],i<0?"#e09171":"#9fe7c8",.4,!0)}const a=new at().setFromPoints([new R(i*1.2,2.97,-.25),new R(i*.4,1.77,-.05),new R(i*1.1,2.97,.8)]);r.add(new Hi(a,new Is({color:"#97a99d"})))}return r.userData.rotors=n,r}function dM(r,e,t=!1){if(t)return Er("rifle",!0);const n=r.clone(e);if(!n)return Er("knife",!0);n.userData.forwardZ=1;const i=new En().setFromObject(n),s=i.max.y-i.min.y;if(n.scale.setScalar(1.72/Math.max(.1,s)),n.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),n.userData.clips?.length){const a=new Gm(n),o=n.userData.clips.find(l=>/idle/i.test(l.name))||n.userData.clips[0];a.clipAction(o).play(),n.userData.mixer=a;const c=n.userData.clips.find(l=>/^walk$/i.test(l.name));n.userData.idleAction=a.clipAction(o),n.userData.walkAction=c?a.clipAction(c):null,n.userData.walking=!1}return n}function gu(r,e){const t=r.userData;if(!t.walkAction||t.walking===e)return;const n=t.walking?t.walkAction:t.idleAction,i=e?t.walkAction:t.idleAction;n.fadeOut(.18),i.reset().setEffectiveWeight(1).fadeIn(.18).play(),t.walking=e}function ha(r,e,t,n=4,i="#d9dfc1"){const s=document.createElement("canvas");s.width=512,s.height=128;const a=s.getContext("2d");a.fillStyle="#243432",a.fillRect(0,0,512,128),a.fillStyle=i,a.font="600 37px monospace",a.textAlign="center",a.fillText(e,256,78),a.fillRect(18,20,6,88),a.fillRect(488,20,6,88);const o=new Ap(s);o.colorSpace=Tt;const c=new Qe(new Ls(n,n/4),new qt({map:o,roughness:.8}));return c.position.set(...t),r.add(c),c}class fM{constructor(e){this.game=e,this.scene=e.scene,this.world=e.world,this.colliders=e.colliders,this.buildings=[],this.camps=[],this.rotating=[],this.root=new dt,this.root.name="Meridian occupation sites",this.scene.add(this.root),Gt.forEach((t,n)=>this.buildCamp(t,n)),this.root.traverse(t=>{t.isMesh&&t.material.isMeshStandardMaterial&&!t.material.map&&zi(t.material)}),this.batchStaticMeshes()}batchStaticMeshes(){this.root.updateMatrixWorld(!0);const e=new Map;this.root.traverse(t=>{if(!t.isMesh||t.isSkinnedMesh||Array.isArray(t.material))return;for(let i=t;i&&i!==this.root;i=i.parent)if(i.userData.dynamic)return;const n=`${t.geometry.uuid}:${t.material.uuid}`;e.has(n)||e.set(n,[]),e.get(n).push(t)});for(const t of e.values()){if(t.length<2)continue;const n=new ws(t[0].geometry,t[0].material,t.length);n.castShadow=t[0].castShadow,n.receiveShadow=!0,t.forEach((i,s)=>{n.setMatrixAt(s,i.matrixWorld),i.removeFromParent()}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),this.root.add(n)}}solid(e,t,n,i,s=!1,a=!0){const o=a?ze(e,t,n,i):null,c=e.position,l=this.colliders.box(c.x+n[0],c.z+n[2],t[0]/2,t[2]/2,0,c.y+n[1]-t[1]/2,c.y+n[1]+t[1]/2,{walkable:s,blocksView:!0});return{mesh:o,collider:l}}building(e,t,n,i,s,a,o){const c={"DETENTION / 01":"prison","COMMAND ARCHIVE":"archive","HELIOS / RESEARCH":"lab",BARRACKS:"barracks",STORAGE:"storage","RELAY CONTROL":"relay",SECURITY:"security"},l=this.game.assets.clone(`kf-${c[o]}`);if(!l)throw new Error(`Missing Blender building: ${o}`);l.position.set(e.x+t,e.y,e.z+n),this.root.add(l);const h=(b,g,m=!1)=>this.solid(l,b,g,null,m,!1),u=h([i,.45,s],[0,.15,0],!0);h([i,a,.4],[0,a/2,-s/2]);for(const b of[-1,1])h([.4,a,s],[b*i/2,a/2,0]),h([(i-3)/2,a,.4],[b*(i+3)/4,a/2,s/2]);h([3,a-2.7,.4],[0,2.7+(a-2.7)/2,s/2]),h([i+.65,.35,s+.65],[0,a+.12,0],!0),h([3,.2,1.2],[0,.05,s/2+.7],!0);const f=l.getObjectByName("Roof"),d=l.getObjectByName("RoofDetail");f.userData.dynamic=d.userData.dynamic=!0,ha(l,o,[0,3.25,s/2+.24],Math.min(5,i-1)),this.world.splat.paintRect(l.position.x,l.position.z,i/2+1.8,s/2+1.8,0,3,0,1);const p={g:l,roof:f,roofDetail:d,x:l.position.x,z:l.position.z,y:e.y,w:i,d:s,h:a,floor:u.collider,top:e.y+a+.295};return this.buildings.push(p),p}tower(e,t,n,i,s){const a=this.game.assets.clone(`kf-tower-${i}`);if(!a)throw new Error(`Missing Blender watchtower: ${i}`);a.position.set(e.x+t,e.y,e.z+n),this.root.add(a),this.solid(a,[5.2,.7,5.2],[0,i,0],null,!0,!1);for(const o of[-2,2])for(const c of[-2,2])this.solid(a,[.35,i,.35],[o,i/2,c],null,!1,!1);return ha(a,`WATCH ${s}`,[0,i-1,2.16],3),this.world.splat.paintDisc(a.position.x,a.position.z,4,3,0,1),new R(a.position.x,e.y+i+.35,a.position.z)}prop(e,t,n,i,s=1,a=0){const o=this.game.assets.clone(e);if(o)return o.position.set(t,n,i),o.scale.setScalar(s),o.rotation.y=a,this.root.add(o),o}furnishing(e,t,n){const i=this.game.assets.clone(t);return i.position.set(...n),e.add(i),i}perimeter(e,t,n,i,s=0){const a=Math.round(i/4),o=i/a;for(let c=0;c<a;c++){const l=-i/2+o*(c+.5),h=this.furnishing(e,"kf-wall",[t+Math.cos(s)*l,0,n-Math.sin(s)*l]);h.rotation.y=s,h.scale.x=o/4}}buildCamp(e,t){const n={...e,index:t,towers:[],cells:[],items:[],buildings:[]};this.camps.push(n),this.world.splat.paintRect(e.x,e.z,34,34,0,3,0,4),this.world.splat.paintRect(e.x,e.z,33,33,0,0,.85,4);const i=this.building(e,-15,-10,14,12,5.3,"DETENTION / 01"),s=this.building(e,14,-10,12,11,7.6,"COMMAND ARCHIVE","#aaac94"),a=this.building(e,14,15,12,10,5.4,"HELIOS / RESEARCH","#899d98");this.building(e,-15,16,12,10,5.5,"BARRACKS"),this.building(e,-14,-28,10,7,4.2,"STORAGE","#9b9c84"),this.building(e,1,-28,10,7,8.3,"RELAY CONTROL","#657e76"),this.building(e,-26,28,6,5,3.8,"SECURITY"),n.towers.push(this.tower(e,-29,-27,19,"A"),this.tower(e,28,-27,15,"B"),this.tower(e,28,28,11,"C")),n.archive=s,n.lab=a,n.prison=i;const o=new dt;o.position.set(e.x,e.y,e.z),this.root.add(o);for(const d of[-34,34])this.solid(o,[.45,2.4,68],[d,1.2,0],null,!1,!1),this.perimeter(o,d,0,68,Math.PI/2);this.solid(o,[68,2.4,.45],[0,1.2,-34],null,!1,!1),this.perimeter(o,0,-34,68);for(const d of[-1,1])this.solid(o,[29,2.4,.45],[d*19.5,1.2,34],null,!1,!1),this.perimeter(o,d*19.5,34,29);ha(o,"BLACK MERIDIAN",[0,5.1,33.9],7);for(const d of[-5,5])ze(o,[.3,5.7,.3],[d,2.85,34],"#465f55");for(let d=0;d<3;d++){const p=-19.4+d*4.4,b=-12,g=this.game.assets.clone("kf-gate");g.userData.dynamic=!0,g.position.set(e.x+p,e.y,e.z-8.2),this.root.add(g);const m=this.colliders.box(e.x+p,e.z-8.2,1.85,.12,0,e.y+.3,e.y+3,{blocksView:!0});n.cells.push({x:e.x+p,y:e.y+.4,z:e.z+b,interact:new R(e.x+p,e.y+1.2,e.z-7.7),bars:g,gate:m}),this.furnishing(i.g,"kf-bunk",[p+15,0,-4.4])}this.furnishing(s.g,"kf-desk",[0,0,-2.3]);const c=this.prop("journal-page",s.x,e.y+1.3,s.z-2.2,.7);c&&(c.userData.dynamic=!0),n.items.push({type:"documents",name:"Command dossier",pos:new R(s.x,e.y+1.3,s.z-2.2),mesh:c,objective:!0}),this.furnishing(a.g,"kf-workbench",[0,0,-1.8]),n.items.push({type:"laser",name:"HELIOS weapon case",pos:new R(a.x,e.y+1.5,a.z-1.8),objective:!0});for(const[d,p]of[[-27,9],[24,3],[-24,-22],[7,26],[-8,22],[22,-20]])this.prop("crate",e.x+d,e.y+.1,e.z+p,.9),this.prop("barrel",e.x+d+1.5,e.y+.1,e.z+p+.5,.85),this.colliders.box(e.x+d,e.z+p,.65,.65,0,e.y,e.y+1.2,{walkable:!0,blocksView:!0});for(const[d,p,b]of[[-15,17,"health"],[14,17,"ammo"],[-27,7,"ammo"],[6,29,"health"],[-14,-28,"rocket"],[14,-8,"bow"]]){const g=new R(e.x+d,e.y+.6,e.z+p),m=this.game.assets.clone(b==="health"?"kf-medical":"kf-ammo");m.userData.dynamic=!0,m.position.copy(g),this.root.add(m),n.items.push({type:b,name:b==="health"?"Field medical kit":b==="ammo"?"Ammunition cache":`${b==="rocket"?"R-7 rockets":"Whisper arrows"}`,pos:g,mesh:m})}const l=new dt;l.userData.dynamic=!0,l.position.set(e.x+1,e.y+11,e.z-28),this.root.add(l);const h=new Qe(new fi(1.5,16,8,0,Math.PI*2,0,.8),pi("#b1b8a0",.5));h.rotation.x=.8,l.add(h),this.rotating.push(l),ze(o,[.18,13,.18],[1,6.5,-28],"#6f8271",.5);for(const[d,p]of[[-6,-20],[6,20],[-6,32]])ze(o,[.15,6,.15],[d,3,p],"#455e52",.5),ze(o,[.9,.2,.45],[d,6,p],"#c6dfbd",.3,!0);n.extract=new R(e.x,this.world.heightAt(e.x,e.z+44)+.2,e.z+44);const u=new Qe(new tl(3.8,4,48),new hn({color:"#b8dabc",transparent:!0,opacity:.75,side:Jt,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.copy(n.extract),this.root.add(u),n.ring=u;const f=ha(this.root,"EXTRACTION",[e.x,n.extract.y+.04,e.z+44],5);f.rotation.x=-Math.PI/2}update(e,t){this.rotating.forEach(n=>{n.rotation.y+=t*.3})}}class pM{constructor(e,t,n,i=42){this.colliders=e,this.ground=t,this.center=n,this.radius=i,this.size=i*2+1,this.cells=new Map}clear(){this.cells.clear()}cell(e,t){if(Math.abs(e)>this.radius||Math.abs(t)>this.radius)return null;const n=(t+this.radius)*this.size+e+this.radius;if(!this.cells.has(n)){const i=this.center.x+e,s=this.center.z+t,a=this.ground(i,s,this.center.y+.4),o=this.colliders.resolve(i,s,.43,a,1.85).hit;this.cells.set(n,{id:n,x:e,z:t,y:a,blocked:o,px:i,pz:s})}return this.cells.get(n)}nearest(e,t=!1){const n=a=>t?Math.max(-this.radius,Math.min(this.radius,Math.round(a))):Math.round(a),i=n(e.x-this.center.x),s=n(e.z-this.center.z);for(let a=0;a<=3;a++){let o=null,c=1/0;for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++){const u=this.cell(i+h,s+l),f=(u?.px-e.x)**2+(u?.pz-e.z)**2;u&&!u.blocked&&f<c&&(o=u,c=f)}if(o)return o}return null}find(e,t){const n=Math.abs(t.x-this.center.x)>this.radius||Math.abs(t.z-this.center.z)>this.radius,i=this.nearest(e),s=this.nearest(t,!0);if(!i||!s&&!n)return[];const a=s||{x:t.x-this.center.x,z:t.z-this.center.z},o=b=>(b.px-t.x)**2+(b.pz-t.z)**2;let c=i;const l=new Map([[i.id,0]]),h=new Map,u=new Set,f=[{cell:i,f:0}];let d;for(;f.length;){let b=0;for(let m=1;m<f.length;m++)f[m].f<f[b].f&&(b=m);const g=f.splice(b,1)[0].cell;if(!u.has(g.id)){if(n&&o(g)<o(c)&&(c=g),g.id===s?.id){d=g;break}u.add(g.id);for(let m=-1;m<=1;m++)for(let _=-1;_<=1;_++){if(!_&&!m)continue;const v=this.cell(g.x+_,g.z+m);if(!v||v.blocked||u.has(v.id)||Math.abs(v.y-g.y)>.65||_&&m&&[this.cell(g.x+_,g.z),this.cell(g.x,g.z+m)].some(y=>!y||y.blocked||Math.abs(y.y-g.y)>.65||Math.abs(y.y-v.y)>.65))continue;const x=l.get(g.id)+Math.hypot(_,m);x>=(l.get(v.id)??1/0)||(l.set(v.id,x),h.set(v.id,g),f.push({cell:v,f:x+Math.hypot(v.x-a.x,v.z-a.z)}))}}}if(!d&&n&&(d=c),!d)return[];const p=[];for(;d.id!==i.id;)p.push({x:d.px,y:d.y,z:d.pz}),d=h.get(d.id);return p.reverse()}}const jn=(r=0,e=0,t=0)=>new R(r,e,t);function mM(r,e,t){return!r.boss||t||r.bossState.phase===2||r.bossState.exposed>0?e:e*r.boss.armor}class gM{constructor(e){this.game=e}reset(){const e=this.game;this.tell&&(e.scene.remove(this.tell),this.tell.geometry.dispose(),this.tell.material.dispose()),this.tell=new Hi(new at().setFromPoints([jn(),jn()]),new Is({color:"#fa9b77",transparent:!0,opacity:.85,depthTest:!0})),this.tell.visible=!1,this.tell.frustumCulled=!1,e.scene.add(this.tell),e.railway.startPatrol(e.mission.train?.speed||6);for(const[i,s]of e.railway.cars.entries()){const a=e.railway.colliderCars[i];a.walkable=a.blocksView=!0,a.hd=s.length/2,i>0&&(a.y1=yn+3.68,s.deck||(s.deck=ze(s.obj,[2.5,.1,7.8],[0,3.63,0],"#354946",.45)))}const t=e.mission.boss;this.boss=e.spawnEnemy(jn(e.mission.x,e.mission.y+.375,e.mission.z+12),t.weapon,!1,40,!!t.train,{boss:t}),this.boss.attack=2,this.boss.bossState={phase:1,stage:"guard",charge:0,exposed:0,shots:0,shotWait:0,lock:null},t.train&&(this.boss.trainSlot={car:1,offset:jn(0,3.7,1.1)});const n=[[1,-.25,-2.8],[2,.3,2.4],[2,-.3,-2.4]];for(let i=0;i<(e.mission.train?.escorts||0);i++){const[s,a,o]=n[i],c=e.spawnEnemy(jn(),i===1?"sniper":"rifle",!1,30+i,!0);c.trainEscort=!0,c.trainSlot={car:s,offset:jn(a,3.7,o)}}this.updateTrain(0)}updateTrain(e){const t=this.game,n=t.railway;let i,s;if(!t.flying&&(t.velocityY||0)<=0){const a=n.colliderCars.findIndex(o=>o.enabled&&Math.abs(t.pos.y-o.y1)<.25&&Li.contains(o,t.pos.x,t.pos.z));a>=0&&(i=n.cars[a].obj,s=i.worldToLocal(t.pos.clone()))}n.update(e,t.lightingNight||0),i&&t.pos.copy(i.localToWorld(s));for(const a of t.enemies){if(!a.trainSlot)continue;const o=n.cars[a.trainSlot.car].obj;a.pos.copy(o.localToWorld(a.trainSlot.offset.clone())),a.home.copy(a.pos),a.root.visible=o.visible,a.alerted||(a.root.rotation.y=o.rotation.y+Math.PI)}for(const a of t.items)if(a.trainSlot&&!a.collected){const o=n.cars[a.trainSlot.car].obj;a.pos.copy(o.localToWorld(a.trainSlot.offset.clone())),a.mesh.position.copy(a.pos),a.mesh.visible=o.visible}}updateBoss(e,t){const n=this.game,i=e.boss,s=e.bossState;e.hp<=e.maxHp/2&&s.phase===1&&(s.phase=2,n.ui.radio(`${i.name} / ARMOR BREACH`,"Armor broken. Target is entering an aggressive second phase. Keep moving between attacks.")),s.exposed=Math.max(0,s.exposed-t),e.root.userData.armorPlates.visible=s.phase===1&&s.exposed===0;const a=e.pos.clone().add(jn(0,1.65*e.root.scale.y,0));if(this.tell.visible=!1,s.shots>0){if(s.shotWait-=t,s.shotWait<=0){s.shotWait=.18;const o=s.lock.clone().sub(a),c=Math.min(i.range,o.length()),l=o.normalize(),h=a.clone().addScaledVector(l,c),u=new ki(a,l),f=n.pos.clone().add(jn(0,n.crouched?.9:1.25,0)),d=n.colliders.raycast(a.x,a.y,a.z,h.x,h.y,h.z);h.lerpVectors(a,h,Math.min(d,n.terrainHit(a,h))),n.trace(a,h,i.color,.25),n.sound.shot(i.weapon==="sword"?"bow":i.weapon),l.dot(f.clone().sub(a))>=0&&f.distanceTo(a)<=c+.5&&u.distanceToPoint(f)<.75&&n.clearLine(a,f)&&n.damagePlayer(i.damage),s.shots--,s.shots||(s.stage="recovering",s.exposed=2.2,e.attack=i.cooldown*(s.phase===2?.7:1))}return}if(s.charge>0){s.charge=Math.max(0,s.charge-t);const o=this.tell.geometry.attributes.position;o.setXYZ(0,a.x,a.y,a.z),o.setXYZ(1,s.lock.x,s.lock.y,s.lock.z),o.needsUpdate=!0,this.tell.visible=e.root.visible,this.tell.material.color.set(s.charge<.5?"#ff6856":i.color),s.charge===0&&(s.stage="firing",s.shots=i.shots,s.shotWait=0);return}s.exposed===0&&(s.stage="guard"),e.alerted&&e.sees&&e.attack<=0&&e.pos.distanceTo(n.pos)<i.range&&(s.stage="charging",s.charge=i.windup*(s.phase===2?.75:1),s.lock=n.pos.clone().add(jn(0,n.crouched?.9:1.25,0)),n.sound.tone(360,.2,.1,"sine",780))}defeated(e){const t=this.game;e.trainEscort&&t.progress.train++,e.boss&&(this.tell.visible=!1,t.progress.boss=1,t.inventory[0].reserve+=12,t.inventory[4].reserve+=2,t.ui.weapon(),t.ui.radio("ATLAS / PRIORITY TARGET DOWN",`${e.boss.name} is down. Longwatch reserve +12, rockets +2. Finish the remaining objectives and bring the team home.`)),e.trainEscort&&t.progress.train===t.mission.train.escorts&&t.ui.radio("ATLAS / CONVOY","All armed escorts are neutralized. The shuttle is clear. Check the remaining objectives before extraction."),(e.boss||e.trainEscort)&&t.ui.renderObjectives()}}const Le=(r=0,e=0,t=0)=>new R(r,e,t),wi=Ps.clamp,bu="kitefall-campaign-v1";class bM{constructor(e,t){this.canvas=e,this.ui=t,t.game=this;const n=new URLSearchParams(location.search);let i="medium";try{i=localStorage.getItem("kitefall-quality")||"medium"}catch{}const s=n.get("quality")||i,a=["low","medium","high"].includes(s)?s:"medium";this.renderer=new Wv(e,a),this.renderer.grade.uniforms.uSaturation.value=.92,this.renderer.grade.uniforms.uVibrance.value=.12,this.renderer.grade.uniforms.uVignette.value=.36,this.scene=new Ku,this.camera=new Wt(62,innerWidth/innerHeight,.12,4600),this.renderer.onResize=(o,c)=>{this.camera.aspect=o/c,this.camera.updateProjectionMatrix()},this.assets=new U_,this.controls=new iM(e,this),this.sound=new sM,this.mode="loading",this.suspended=!1,this.time=0,this.sceneTime=0,this.index=0,this.selected=0,this.yaw=0,this.pitch=-.65,this.zoom=5,this.pos=Le(-143,97,92),this.velocityY=0,this.flying=!0,this.health=100,this.armor=100,this.weaponIndex=0,this.inventory=Bh(),this.progress=zh(),this.enemies=[],this.captives=[],this.items=[],this.effects=[],this.projectiles=[],this.alert=0,this.elapsed=0,this.kills=0,this.silent=0,this.cooldown=0,this.reloadTime=0,this.scanTime=0,this.damageFlash=0,this.aiming=!1,this.crouched=!1;try{this.save=Gh(localStorage.getItem(bu))}catch{this.save=Gh(null)}this.selected=this.save.unlocked,this.frame=this.frame.bind(this)}get weapon(){return Ca[this.weaponIndex]}get slot(){return this.inventory[this.weaponIndex]}get mission(){return Gt[this.index]}async load(){if(this.ui.loading(.03,"Surveying Hoshi Valley"),Gt.forEach(n=>ll.push({kind:"rect",x:n.x,z:n.z,hw:36,hd:37,f:12,t:n.y})),await new Promise(n=>requestAnimationFrame(n)),this.world=new Ey(this.scene,this.renderer.renderer,this.renderer.q),await this.assets.load(Zy,n=>this.ui.loading(.08+n*.66,"Preparing valley assets")),await this.assets.finalize(),this.assets.missing.size)throw new Error(`Missing assets: ${[...this.assets.missing].join(", ")}`);rM(this.assets),this.ui.loading(.76,"Building occupation sites"),this.colliders=new Li,this.lights=new nM(this.scene,3),this.structures=new Ly(this.scene,this.assets,this.world,this.colliders,this.lights),this.railway=new Ny(this.scene,this.assets,this.world,this.colliders,this.lights),this.railway.setRepaired(!0),this.encounters=new gM(this),this.paddies=new Fy(this.scene,this.assets,this.world),this.forts=new fM(this),this.ui.loading(.84,"Planting the four seasons"),await new Promise(n=>requestAnimationFrame(n));const t=Cy((n,i)=>this.world.heightAt(n,i),(n,i)=>!Gt.some(s=>Math.abs(s.x-n)<40&&Math.abs(s.z-i)<42)&&this.world.splat.sample(n,i,0)<.12&&this.world.splat.sample(n,i,3)>.1&&this.world.grid.slopeAt(n,i)<36,this.renderer.q.trees);for(const n of Object.keys(t))t[n]=t[n].filter(i=>!Gt.some(s=>Math.abs(s.x-i.x)<38&&Math.abs(s.z-i.z)<39));this.foliage=new zy(this.scene,this.assets,t,this.renderer.q);for(const n of t.trees)!n.far&&n.s>.7&&this.colliders.cylinder(n.x,n.z,.38*n.s,n.y-1,n.y+5,{blocksView:!0,surface:"wood"});this.grass=new Hy(this.scene,this.world.heightTex,this.world.splat,this.world.terrain.noise,this.renderer.q),this.player=Er("sniper",!0),this.scene.add(this.player),this.drone=uM(),this.scene.add(this.drone),this.hand=new dt,this.camera.add(this.hand),this.scene.add(this.camera),this.updateWeaponModel(),this.makeWeather(),this.select(this.selected),this.prepareMission(this.selected),this.mode="menu",this.ui.loading(1,"Ready for insertion"),this.ui.showMenu(),this.last=performance.now(),requestAnimationFrame(this.frame),window.__KITEFALL_READY__=!0,new URLSearchParams(location.search).has("qa")&&this.attachQA()}setSeason(e,t){this.world.hour=t,this.world.setSeason(e),this.foliage.setSeason(e),this.grass.setSeason(e),this.paddies.setSeason(e),Di.uSnow.value=zs[e].snow,this.weather.material.color.set(e==="winter"?"#e4eeff":e==="autumn"?"#e4a564":e==="spring"?"#ffcecb":"#dceda9"),this.weather.material.size=e==="winter"?.12:e==="summer"?.06:.16}select(e){this.selected=wi(e,0,3);const t=Gt[this.selected];this.setSeason(t.season,t.hour),this.ui.renderMenu()}prepareMission(e){this.index=e;const t=Gt[e];this.camp=this.forts.camps[e],this.navigation=new pM(this.colliders,(s,a,o)=>this.ground(s,a,o),t),this.pos.set(t.x-3,t.y+87,t.z+88),this.yaw=-.035,this.pitch=-.7,this.zoom=5,this.health=100,this.armor=100,this.flying=!0,this.velocityY=0,this.aiming=!1,this.crouched=!1,this.progress=zh(),this.inventory=Bh(),this.weaponIndex=0,this.reloadTime=this.cooldown=0,this.elapsed=0,this.kills=this.silent=this.alert=this.scanTime=this.damageFlash=0,this.extractionTime=0,this.enemies.forEach(s=>{this.scene.remove(s.root),tr(s.root)}),this.captives.forEach(s=>{this.scene.remove(s.root),tr(s.root)}),this.effects.forEach(s=>this.disposeEffect(s)),this.effects=[],this.projectiles.forEach(s=>{this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose()}),this.projectiles=[],this.items.filter(s=>s.dynamic).forEach(s=>{this.scene.remove(s.mesh),tr(s.mesh)}),this.enemies=[],this.captives=[],this.camp.cells.forEach(s=>{s.bars.visible=!0,s.gate.enabled||this.colliders.enable(s.gate)}),this.items=this.camp.items.map(s=>({...s,collected:!1})),this.items.forEach(s=>{s.mesh&&(s.mesh.visible=!0)}),this.camp.towers.forEach((s,a)=>this.spawnEnemy(s,"sniper",!0,a)),[[-5,-18],[4,-4],[-5,8],[5,28],[23,16],[-26,18],[-25,-2],[25,-8],[-7,-30],[18,29],[5,12],[-27,-19],[23,-19],[-7,24],[6,-18],[30,5]].slice(0,10+e*2).forEach(([s,a],o)=>this.spawnEnemy(Le(t.x+s,t.y+.4,t.z+a),["rifle","shotgun","knife","rifle","sword"][o%5],!1,o+3)),this.spawnEnemy(Le(this.camp.archive.x+2,this.camp.archive.top,this.camp.archive.z),"rifle",!1,20,!0),this.camp.cells.forEach((s,a)=>{const o=dM(this.assets,a===0?"rin":"hana",a===2);o.position.set(s.x,s.y,s.z),this.scene.add(o),this.captives.push({root:o,cell:s,name:a<2?t.civilians[a]:t.ally,commando:a===2,rescued:!1,arrived:!1,waypoint:0})});const i=this.items.find(s=>s.type==="laser");i.mesh=fr("laser"),i.mesh.position.copy(i.pos),i.mesh.rotation.y=Math.PI/2,i.dynamic=!0,this.scene.add(i.mesh),this.encounters.reset(),this.setSeason(t.season,t.hour),this.updateWeaponModel(),this.updateCamera(1),this.ui.renderObjectives()}spawnEnemy(e,t,n,i,s=!1,a={}){const o=a.boss?hM(a.boss):Er(t);o.position.copy(e),o.rotation.y=Math.PI+i*.54,this.scene.add(o);const c={root:o,pos:o.position,home:e.clone(),type:t,overwatch:n,roof:n||s,hp:a.boss?.health||(t==="sword"?135:100),maxHp:a.boss?.health||(t==="sword"?135:100),boss:a.boss,alive:!0,suspicion:0,alerted:!1,attack:1+i*.17,decision:i*.04,seed:i,move:0,marked:0};return this.enemies.push(c),c}start(e=this.selected,t=!0){if(e>this.save.unlocked){this.ui.toast("Complete the previous operation to unlock this chapter.");return}this.prepareMission(e),this.suspended=!1,this.mode="playing",this.controls.clear(),this.ui.resetMission(),this.ui.showPlay(),this.sound.unlock(),t&&this.controls.lock(),this.ui.radio("ATLAS / COMMAND",`${this.mission.radio} ${this.mission.boss.callout}`,20)}pause(){this.mode==="playing"&&(this.mode="paused",this.controls.clear(),document.exitPointerLock?.(),this.ui.showPause())}resume(){this.mode!=="paused"&&!(this.mode==="menu"&&this.suspended)||(this.selected=this.index,this.setSeason(this.mission.season,this.mission.hour),this.suspended=!1,this.controls.clear(),this.mode="playing",this.updateCamera(1),this.ui.showPlay(),this.controls.lock())}menu(){(this.mode==="playing"||this.mode==="paused")&&(this.suspended=!0),this.mode="menu",this.controls.clear(),document.exitPointerLock?.(),this.select(this.selected),this.ui.showMenu()}cycleWeapon(e){for(let t=1;t<=6;t++){const n=(this.weaponIndex+t*e+60)%6;if(this.inventory[n].unlocked){this.equip(n);break}}}equip(e){if(!this.inventory[e]?.unlocked){this.ui.toast("Recover HELIOS from the research building.");return}e!==this.weaponIndex&&(this.weaponIndex=e,this.reloadTime=0,this.cooldown=Math.max(this.cooldown,.15),this.updateWeaponModel(),this.ui.weapon())}updateWeaponModel(){if(!this.player)return;const e=this.player.userData.weapon;this.player.remove(e),tr(e);const t=fr(this.weapon.id);t.position.set(.3,1.03,-.45),this.player.add(t),this.player.userData.weapon=t,tr(this.hand),this.hand.clear();const n=fr(this.weapon.id);n.position.set(.26,-.28,-.48),n.scale.setScalar(.7),this.hand.add(n),ze(this.hand,[.11,.11,.3],[.27,-.39,-.3],"#475b4f")}reload(){this.reloadTime>0||this.slot.ammo>=this.weapon.mag||this.slot.reserve<=0||(this.reloadTime=this.weapon.reload,this.sound.tone(260,.14,.12,"square",180))}ground(e=this.pos.x,t=this.pos.z,n=this.pos.y){const i=Math.max(this.world.frozen?.1:.05,this.world.heightAt(e,t)),s=this.colliders.groundAt(e,t,n,.5);return Math.max(i,s?.y??-999)}toggleFlight(){if(this.flying){const e=this.ground();if(this.pos.y-e>3){this.ui.toast("Hold Ctrl or Q to descend. Fold the kite within 3 m of a surface.");return}this.flying=!1,this.ui.toast("Kite folded · quiet approach")}else{const e=this.pos.clone().add(Le(0,1.8,0));if(!this.clearLine(e,e.clone().add(Le(0,5,0)))){this.ui.toast("Move outside before deploying the kite.");return}this.flying=!0,this.pos.y+=2,this.velocityY=0,this.ui.toast("Kestrel deployed · Space to climb")}}movePlayer(e){const t=this.controls;this.aiming=t.aim,this.crouched=!this.flying&&t.down("KeyC");const n=.0018*(this.aiming?1/(this.weapon.id==="sniper"?this.zoom*.6:1.8):1);this.yaw-=t.dx*n,this.pitch=wi(this.pitch-t.dy*n,-1.48,1.35);const i=Le(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),s=Le(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=Le().addScaledVector(i,Number(t.down("KeyW"))-Number(t.down("KeyS"))).addScaledVector(s,Number(t.down("KeyD"))-Number(t.down("KeyA")));a.lengthSq()&&a.normalize();const o=t.down("ShiftLeft")||t.down("ShiftRight"),c=this.flying?o?29:17:this.crouched?2.4:o?9:5.4,l=this.pos.clone();this.pos.addScaledVector(a,c*e*(this.aiming?.35:1)),this.pos.x=wi(this.pos.x,-225,215),this.pos.z=wi(this.pos.z,-228,204);const h=this.colliders.resolve(this.pos.x,this.pos.z,this.flying?3.2:.36,this.pos.y,this.flying?3.6:this.crouched?1.15:1.85);this.pos.x=h.x,this.pos.z=h.z;const u=this.ground();if(this.flying){const d=(Number(t.down("Space"))-Number(t.down("ControlLeft")||t.down("ControlRight")||t.down("KeyQ")))*(o?26:14)*e;if(d>0){const p=this.pos.clone().add(Le(0,3.4,0)),b=p.clone().add(Le(0,d+.35,0));this.clearLine(p,b)&&(this.pos.y+=d)}else this.pos.y+=d;this.pos.y=wi(this.pos.y,u+.15,190)}else{t.hit("Space")&&this.pos.y<=u+.1&&(this.velocityY=6),this.velocityY-=e*18;const f=this.pos.y+this.velocityY*e;this.velocityY>0&&!this.clearLine(this.pos.clone().add(Le(0,1.8,0)),Le(this.pos.x,f+1.8,this.pos.z))?this.velocityY=0:this.pos.y=f,this.pos.y<=u&&(this.pos.y=u,this.velocityY=0)}t.hit("KeyG")&&this.toggleFlight(),t.hit("KeyR")&&this.reload(),t.hit("KeyE")&&this.interact(),t.hit("KeyF")&&this.scan(),t.hit("KeyH")&&this.ui.toggleHelp();for(let f=1;f<=6;f++)t.hit(`Digit${f}`)&&this.equip(f-1);this.speed=Math.hypot(this.pos.x-l.x,this.pos.z-l.z)/e,this.player.position.copy(this.pos),this.player.rotation.y=this.yaw,this.player.scale.y=this.crouched?.73:1,la(this.player,this.time,this.speed,this.flying),this.drone.position.copy(this.pos),this.drone.position.y+=Math.sin(this.time*1.6)*.06,this.drone.rotation.set(a.length()?-.03:0,this.yaw,Math.sin(this.time*.9)*.018),this.drone.userData.rotors.forEach(f=>{f.rotation.y+=e*60})}updateCamera(e){this.interior=this.forts.buildings.find(c=>Math.abs(this.pos.x-c.x)<c.w/2&&Math.abs(this.pos.z-c.z)<c.d/2&&this.pos.y<c.y+c.h-1);const t=this.aiming||!!this.interior,n=this.pos.clone().add(Le(0,this.crouched?1.2:1.63,0));this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=this.camera.getWorldDirection(Le()),s=this.flying?2.3:.65,a=t?n:n.clone().addScaledVector(i,this.flying?-11:-5.8).add(Le(Math.cos(this.yaw)*s,.6,-Math.sin(this.yaw)*s));if(!t){const c=this.colliders.raycast(n.x,n.y,n.z,a.x,a.y,a.z);a.lerpVectors(n,a,Math.max(.04,c-.06)),a.y=Math.max(a.y,this.world.heightAt(a.x,a.z)+.35)}this.camera.position.copy(a);const o=this.aiming?62/(this.weapon.id==="sniper"?this.zoom:this.weapon.zoom):62;this.camera.fov=Ps.lerp(this.camera.fov,o,Math.min(1,e*16)),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.player.visible=!t,this.drone.visible=this.flying&&!t,this.hand.visible=t&&!(this.aiming&&this.weapon.id==="sniper"),this.hand.position.y=Math.sin(this.time*7)*.006*Math.min(1,this.speed)-(this.reloadTime>0?.3:0)}clearLine(e,t){if(this.colliders.raycast(e.x,e.y,e.z,t.x,t.y,t.z)<1-1e-6)return!1;const n=Math.max(1,Math.ceil(e.distanceTo(t)/3));for(let i=1;i<n;i++){const s=i/n,a=e.x+(t.x-e.x)*s,o=e.z+(t.z-e.z)*s;if(e.y+(t.y-e.y)*s<this.world.heightAt(a,o)+.08)return!1}return!0}terrainHit(e,t){const n=e.distanceTo(t),i=Math.ceil(n/1.5);for(let s=1;s<=i;s++){const a=s/i,o=e.clone().lerp(t,a);if(o.y<Math.max(0,this.world.heightAt(o.x,o.z))){let c=(s-1)/i,l=a;for(let h=0;h<12;h++){const u=(c+l)/2;o.lerpVectors(e,t,u),o.y<Math.max(0,this.world.heightAt(o.x,o.z))?l=u:c=u}return c}}return 1}weaponRay(){const e=this.pos.clone().add(Le(0,this.crouched?1.2:1.63,0)),t=this.weapon.id==="knife"?e:this.camera.position.clone(),n=this.camera.getWorldDirection(Le());return t.addScaledVector(n,Math.max(0,n.dot(e.clone().sub(t)))),new ki(t,n)}aimTarget(e=this.weaponRay()){const t=this.pos.clone().add(Le(0,this.crouched?1.2:1.63,0)),{origin:n,direction:i}=e;let s=null;for(const a of this.enemies)if(!(!a.alive||!a.root.visible))for(const[o,c,l]of[[1.64,.28,!0],[.98,.51,!1],[.43,.34,!1]]){const h=e.intersectSphere(new en(a.pos.clone().add(Le(0,o*a.root.scale.y,0)),c*a.root.scale.y),Le());if(!h||i.dot(h.clone().sub(t))<=0)continue;const u=h.distanceTo(t),f=h.distanceTo(n);u>this.weapon.range||s&&f>s.rayDistance||this.clearLine(n,h)&&this.clearLine(t,h)&&(s={enemy:a,point:h,distance:u,rayDistance:f,headshot:l})}return s}fire(){if(this.mode!=="playing"||this.cooldown>0||this.reloadTime>0)return;if(this.slot.ammo<=0){this.reload(),this.slot.reserve||(this.cooldown=.4,this.ui.toast("Out of ammunition · find a supply crate or change weapon"));return}const e=this.weapon;this.slot.ammo--,this.cooldown=e.cooldown,this.sound.shot(e.id);const t=this.weaponRay(),{origin:n,direction:i}=t,s=this.aimTarget(t);let a=s?.point.clone()||n.clone().addScaledVector(i,e.range);const o=Math.min(this.colliders.raycast(n.x,n.y,n.z,a.x,a.y,a.z),this.terrainHit(n,a));a.lerpVectors(n,a,o);const c=this.pos.clone().add(Le(0,this.crouched?1.1:1.4,0)),l=e.id==="knife"?n.clone():c.clone().addScaledVector(i,.65),h=this.colliders.raycast(c.x,c.y,c.z,l.x,l.y,l.z);e.id!=="knife"&&l.lerpVectors(c,l,Math.max(0,h-.02));const u=this.clearLine(l,a);if(e.id==="rocket"){const f=new Qe(new fi(.11,8,6),new hn({color:"#ffce85"}));f.position.copy(l),this.scene.add(f),this.projectiles.push({mesh:f,velocity:a.clone().sub(l).normalize().multiplyScalar(72),life:6,travel:0,range:e.range})}else{const f=Math.min(this.colliders.raycast(l.x,l.y,l.z,a.x,a.y,a.z),this.terrainHit(l,a));if(a.lerpVectors(l,a,f),e.id!=="knife"&&this.trace(l,a,e.id==="laser"?"#7bfff2":e.id==="bow"?"#bcb08b":"#ffe1a1",e.id==="laser"?.2:.09),s&&u&&o>=1-1e-6&&s.distance<=e.range){if(this.damageEnemy(s.enemy,Av(e,s.distance,s.headshot),e.noise<=3,s.headshot),this.ui.hitMarker(s.headshot),e.id==="bow"){const d=this.drop("arrow",s.enemy.pos.clone().add(Le(0,.3,0)));s.enemy.trainSlot&&(d.trainSlot={car:s.enemy.trainSlot.car,offset:s.enemy.trainSlot.offset.clone().add(Le(0,.3,0))})}}else o<1&&this.spark(a,"#ffdc98",4)}for(const f of this.enemies)f.alive&&f.pos.distanceTo(this.pos)<e.noise&&(f.alerted=!0,f.suspicion=1,f.lastKnown=this.pos.clone());this.pitch=wi(this.pitch+(e.id==="sniper"?.009:e.id==="rifle"?.003:.001),-1.48,1.35),this.slot.ammo<=0&&this.slot.reserve>0&&e.id==="bow"&&this.reload(),this.ui.weapon()}damageEnemy(e,t,n,i=!1){if(e.alive){if(e.hp=Math.max(0,e.hp-mM(e,t,i)),e.marked=10,this.spark(e.pos.clone().add(Le(0,1.3,0)),"#e9ca98",5),e.hp>0){e.alerted=!0,e.suspicion=1,e.lastKnown=this.pos.clone();return}if(e.alive=!1,e.fall=.65,this.kills++,n&&this.silent++,this.encounters?.defeated(e),e.overwatch?(this.progress.overwatch++,this.ui.renderObjectives(),this.ui.toast(`Overwatch neutralized · ${this.progress.overwatch}/3`),this.progress.overwatch===3&&this.ui.radio("ATLAS / COMMAND","The rooftops are clear. Descend and fold your kite near the ground. The prison entrance faces the courtyard.")):this.ui.toast(`${n?"Silent takedown":i?"Precision takedown":"Hostile neutralized"} · ${this.kills} total`,1.7),e.roof||this.drop(e.seed%4===0?"health":"ammo",e.pos.clone().add(Le(0,.3,0))),!n)for(const s of this.enemies)s.alive&&s.pos.distanceTo(e.pos)<17&&this.clearLine(s.pos.clone().add(Le(0,1.6*s.root.scale.y,0)),e.pos.clone().add(Le(0,1,0)))&&(s.alerted=!0,s.suspicion=1,s.lastKnown=e.pos.clone())}}damagePlayer(e){if(this.mode!=="playing")return;const t=Math.min(this.armor,e*.65);this.armor-=t,this.health=Math.max(0,this.health-e+t),this.damageFlash=.65,this.sound.hit(),this.health<=0&&(this.mode="dead",this.suspended=!1,this.controls.clear(),document.exitPointerLock?.(),this.ui.showDebrief(!1))}updateEnemies(e){let t=0;for(const n of this.enemies){if(!n.alive){n.fall>0&&(n.fall=Math.max(0,n.fall-e),n.root.rotation.z=(1-n.fall/.65)*1.5);continue}if(!n.root.visible)continue;n.marked=Math.max(0,n.marked-e),n.attack-=e,n.decision-=e;const i=this.pos.clone().sub(n.pos),s=i.length(),a=Math.hypot(i.x,i.z);if(n.decision<=0){n.decision=.24;const l=Le(-Math.sin(n.root.rotation.y),0,-Math.cos(n.root.rotation.y)),h=a<10||l.dot(i.clone().setY(0).normalize())>(n.alerted?-.7:.15),u=n.boss?n.alerted?n.boss.range:Math.min(85,n.boss.range):n.type==="sniper"?n.alerted?160:100:this.crouched?24:this.flying?82:55;n.sees=s<u&&h&&this.clearLine(n.pos.clone().add(Le(0,1.6*n.root.scale.y,0)),this.pos.clone().add(Le(0,1.3,0))),n.sees&&(n.lastKnown=this.pos.clone()),n.suspicion=wi(n.suspicion+(n.sees?this.crouched?.14:.25:-.075),0,1),n.suspicion>=1&&(n.alerted=!0),n.suspicion<=0&&(n.alerted=!1)}if(t=Math.max(t,n.suspicion),n.boss&&(this.encounters.updateBoss(n,e),this.mode!=="playing"))break;let o;const c=n.type==="knife"||n.type==="sword";if(n.alerted){o=n.lastKnown||n.home;const l=o.clone().sub(n.pos);if(n.root.rotation.y=Math.atan2(-l.x,-l.z),!n.boss&&n.sees&&n.attack<=0&&s<(c?2.6:n.type==="shotgun"?34:150)&&this.clearLine(n.pos.clone().add(Le(0,1.4,0)),this.pos.clone().add(Le(0,1.2,0)))){n.attack=c?.95:n.type==="sniper"?3.1:1.35;const h=c||Math.random()<(this.speed>12?.22:this.crouched?.32:.57);if(c||this.trace(n.pos.clone().add(Le(0,1.4,0)),this.pos.clone().add(Le(h?0:1.3,1.2,0)),"#ff9872",.14),h&&this.damagePlayer(c?17:n.type==="sniper"?24:n.type==="shotgun"?18:10),s<45&&this.sound.burst(.08,.13,1300),this.mode!=="playing")break}}else o=n.home.clone().add(Le(Math.sin(this.time*.2+n.seed)*3.3,0,Math.cos(this.time*.17+n.seed)*3));if(n.move=0,!n.roof&&(!n.boss||n.bossState.stage==="guard")&&(!n.alerted||!n.sees||a>(c?1.8:16))){for(n.pathTime=(n.pathTime||0)-e,this.navigation&&n.pathTime<=0&&(n.pathTime=1.2+n.seed*.03,n.path=this.navigation.find(n.pos,o));n.path?.length&&Math.hypot(n.path[0].x-n.pos.x,n.path[0].z-n.pos.z)<.15;)n.path.shift();const l=this.navigation?n.path?.[0]:o,h=l?Le(l.x-n.pos.x,0,l.z-n.pos.z):Le(),u=h.length();if(u>.01){h.normalize();const f=n.alerted?c?4.3:2.6:1.15,d=Math.min(u,e*f),p=n.pos.x+h.x*d,b=n.pos.z+h.z*d,g=this.colliders.resolve(p,b,.34,n.pos.y,1.85),m=this.ground(g.x,g.z,n.pos.y);Math.abs(m-n.pos.y)<1&&(n.pos.set(g.x,m,g.z),n.move=f),n.alerted||(n.root.rotation.y=Math.atan2(-h.x,-h.z))}}la(n.root,this.time,n.move)}this.alert=t}scan(){if(this.scanTime>0){this.ui.toast(`Recon pulse recharging · ${Math.ceil(this.scanTime)} s`);return}this.scanTime=12;let e=0;for(const t of this.enemies)t.alive&&t.pos.distanceTo(this.pos)<250&&(t.marked=9,e++);this.sound.tone(460,.7,.14,"sine",920),this.ui.toast(`Recon pulse · ${e} hostile signatures marked`)}nearestInteractable(){const e=this.pos.clone().add(Le(0,1.2,0));let t=null;const n=(i,s,a,o,c=3.4)=>{const l=e.distanceTo(a);l>c||t&&l>=t.distance||!this.clearLine(e,a)||(t={type:i,object:s,pos:a,name:o,distance:l})};for(const i of this.captives)i.rescued||n("rescue",i,i.cell.interact,`Free ${i.name}`,3.6);for(const i of this.items)i.collected||n("item",i,i.pos,i.name,3.2);return n("extract",this.camp,this.camp.extract.clone().add(Le(0,1,0)),li(this.progress,this.mission)?this.captives.every(i=>i.arrived)?"Extract the team":"Extraction · waiting for the rescued team":"Extraction · objectives incomplete",4.8),t}interact(){const e=this.nearestInteractable();if(!e){this.ui.toast("Move closer to a prisoner, document, or supply case.");return}if(e.type==="rescue"){const t=e.object;t.rescued=!0,t.cell.bars.visible=!1,this.colliders.remove(t.cell.gate),this.navigation.clear(),this.progress[t.commando?"ally":"civilians"]++,this.sound.pickup(),this.ui.radio(t.name.toUpperCase(),t.commando?"Thought you would never find us. I will guide the civilians to extraction. Get those documents.":"You came back for us. We will follow the corridor to the extraction beacon. Thank you, Wren.")}else if(e.type==="item"){const t=e.object;if(t.type==="health"&&this.health>=100&&this.armor>=100){this.ui.toast("Health and armor are already full.");return}t.collected=!0,t.mesh&&(t.mesh.visible=!1),t.type==="documents"?(this.progress.documents=1,this.ui.radio("DOSSIER / DECRYPTED",this.mission.discovery,12)):t.type==="laser"?(this.progress.laser=1,this.inventory[5].unlocked=!0,this.equip(5),this.ui.radio("ATLAS / COMMAND","HELIOS secured. Its power cells are live. You can use it, Wren.")):t.type==="health"?(this.health=Math.min(100,this.health+55),this.armor=Math.min(100,this.armor+45),this.ui.toast("Field treatment · health +55 / armor +45")):t.type==="rocket"?(this.inventory[4].reserve+=3,this.ui.toast("R-7 Thunder · +3 rockets")):t.type==="bow"||t.type==="arrow"?(this.inventory[2].reserve+=t.type==="arrow"?1:8,this.ui.toast("Whisper arrows recovered")):(this.inventory.forEach((n,i)=>{i!==3&&n.unlocked&&(n.reserve+=i===4?1:i===2?4:Ca[i].mag*2)}),this.ui.toast("Ammunition replenished")),this.sound.pickup()}else{if(!li(this.progress,this.mission)){this.ui.toast("Complete every objective, including the priority targets, before extraction.");return}if(this.flying||this.pos.y-this.ground()>1){this.ui.toast("Land and fold the kite to signal extraction.");return}if(!this.captives.every(t=>t.arrived)){this.ui.toast("Wait for all three rescued teammates to reach the beacon.");return}this.finish();return}this.ui.renderObjectives(),this.ui.weapon(),li(this.progress,this.mission)&&this.ui.radio("ATLAS / EXTRACTION","All objectives secured. Return to the green beacon outside the south gate, land, and signal extraction.")}drop(e,t){const n=e==="health"?"kf-medical":e==="ammo"?"kf-ammo":null,i=n&&this.assets?.has(n)?this.assets.clone(n):new dt;i.position.copy(t),i.userData.model?i.scale.setScalar(.5):ze(i,[.38,.2,.25],[0,0,0],e==="health"?"#e3dbc2":"#d4b887"),this.scene.add(i);const s={type:e,name:e==="health"?"Field medical kit":e==="arrow"?"Recover arrow":"Collect enemy ammunition",pos:t,mesh:i,dynamic:!0};return this.items.push(s),s}updateCaptives(e){for(const t of this.captives){if(gu(t.root,t.rescued&&!t.arrived),t.root.userData.mixer?.update(e),!t.rescued||t.arrived)continue;const n=[Le(t.cell.x,t.cell.y,this.mission.z-5.5),Le(this.mission.x-15,t.cell.y,this.mission.z-5.5),Le(this.mission.x-15,t.cell.y,this.mission.z-1),Le(this.mission.x,t.cell.y,this.mission.z+1),this.camp.extract.clone()],s=n[Math.min(t.waypoint,n.length-1)].clone().sub(t.root.position).setY(0),a=s.length();if(a>.7){s.normalize(),t.root.position.addScaledVector(s,Math.min(a,e*3.1));const o=t.root.userData.forwardZ||-1;t.root.rotation.y=Math.atan2(s.x*o,s.z*o),t.root.position.y=this.ground(t.root.position.x,t.root.position.z,t.root.position.y),t.commando&&la(t.root,this.time,3)}else t.waypoint<n.length-1?t.waypoint++:(t.arrived=!0,gu(t.root,!1),t.root.visible=!1,this.captives.every(o=>o.arrived)&&this.ui.radio("ATLAS / EXTRACTION","All three teammates are aboard. Secure any remaining objectives, then signal extraction at the beacon."))}}finish(){if(this.mode!=="playing"||!li(this.progress,this.mission)||!this.captives.every(n=>n.arrived))return;const{save:e,score:t}=Rv(this.save,this.index,{kills:this.kills,silent:this.silent,health:this.health,time:this.elapsed});this.save=e,this.score=t;try{localStorage.setItem(bu,JSON.stringify(e))}catch{this.ui.toast("Browser storage unavailable. Campaign progress will last for this session.")}this.mode="complete",this.suspended=!1,this.controls.clear(),document.exitPointerLock?.(),this.sound.pickup(),this.ui.showDebrief(!0)}trace(e,t,n,i){const s=new at().setFromPoints([e,t]),a=new Is({color:n,transparent:!0,opacity:.9}),o=new Hi(s,a);this.scene.add(o),this.effects.push({mesh:o,life:i,maxLife:i})}spark(e,t,n=10){const i=new Float32Array(n*3),s=[];for(let l=0;l<n;l++)i.set([e.x,e.y,e.z],l*3),s.push(Le((Math.random()-.5)*8,Math.random()*7,(Math.random()-.5)*8));const a=new at;a.setAttribute("position",new St(i,3));const o=new Aa({color:t,size:.12,transparent:!0,depthWrite:!1}),c=new Tc(a,o);this.scene.add(c),this.effects.push({mesh:c,velocities:s,life:.6,maxLife:.6})}explode(e){this.spark(e,"#ffb16a",60),this.sound.burst(.65,.8,600);const t=new Qe(new fi(1,16,10),new hn({color:"#ffd89a",transparent:!0,opacity:.6,wireframe:!0,depthWrite:!1}));t.position.copy(e),this.scene.add(t),this.effects.push({mesh:t,life:.5,maxLife:.5,blast:!0});for(const i of this.enemies){const s=i.pos.distanceTo(e);i.alive&&s<8&&this.clearLine(e.clone().add(Le(0,.25,0)),i.pos.clone().add(Le(0,1,0)))&&this.damageEnemy(i,230*(1-s/10),!1)}const n=this.pos.distanceTo(e);n<7&&this.clearLine(e.clone().add(Le(0,.25,0)),this.pos.clone().add(Le(0,1,0)))&&this.damagePlayer(80*(1-n/7))}disposeEffect(e){this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}updateEffects(e){this.effects=this.effects.filter(t=>{if(t.life-=e,t.life<=0)return this.disposeEffect(t),!1;if(t.mesh.material.opacity=t.life/t.maxLife,t.blast&&t.mesh.scale.setScalar((1-t.life/t.maxLife)*8+.3),t.velocities){const n=t.mesh.geometry.attributes.position;t.velocities.forEach((i,s)=>{i.y-=e*12,n.setXYZ(s,n.getX(s)+i.x*e,n.getY(s)+i.y*e,n.getZ(s)+i.z*e)}),n.needsUpdate=!0}return!0}),this.projectiles=this.projectiles.filter(t=>{if(this.mode!=="playing")return!0;const n=t.mesh.position.clone(),i=Math.min(t.velocity.length()*e,t.range-t.travel),s=t.velocity.clone().normalize();t.mesh.position.addScaledVector(s,i),t.life-=e,t.travel+=i;const a=t.mesh.position;let o=Math.min(this.colliders.raycast(n.x,n.y,n.z,a.x,a.y,a.z),this.terrainHit(n,a));const c=new ki(n,s);for(const l of this.enemies){if(!l.alive||!l.root.visible)continue;const h=l.root.scale.y,u=new en(l.pos.clone().add(Le(0,h,0)),.7*h),f=u.containsPoint(n)?n:c.intersectSphere(u,Le());f&&i>0&&(o=Math.min(o,n.distanceTo(f)/i))}if(o<1||t.life<=0||t.travel>=t.range){const l=n.clone().lerp(a,Math.max(0,o-.02/Math.max(i,.02)));return this.explode(l),this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),!1}return this.trace(n,t.mesh.position,"#cbb79a",.2),!0})}makeWeather(){const t=new Float32Array(960);for(let i=0;i<320;i++)t.set([(Math.random()-.5)*100,Math.random()*55,(Math.random()-.5)*100],i*3);const n=new at;n.setAttribute("position",new St(t,3)),this.weather=new Tc(n,new Aa({color:"#ffcddd",size:.15,transparent:!0,opacity:.62,depthWrite:!1})),this.weather.frustumCulled=!1,this.scene.add(this.weather)}updateWeather(e){this.weather.position.set(this.camera.position.x,this.camera.position.y-25,this.camera.position.z);const t=this.weather.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,(t.getY(n)-e*(this.world.season==="winter"?2.4:1.1)+55)%55),t.setX(n,(t.getX(n)+e*Math.sin(n+this.time)*.2+150)%100-50);t.needsUpdate=!0}setQuality(e){this.renderer.setQuality(e),this.world.sky.setShadow(this.renderer.q),this.foliage.shadowRange=this.renderer.q.shadowRange,this.foliage.shadowFocus.set(1e9,0,0),this.ui.toast(`${e[0].toUpperCase()+e.slice(1)} rendering quality`)}step(e){this.mode==="playing"&&(this.encounters?.updateTrain(e),this.elapsed+=e,this.cooldown=Math.max(0,this.cooldown-e),this.scanTime=Math.max(0,this.scanTime-e),this.damageFlash=Math.max(0,this.damageFlash-e),this.reloadTime>0&&(this.reloadTime-=e,this.reloadTime<=0&&(Tv(this.slot,this.weapon),this.ui.weapon())),this.movePlayer(e),this.mode==="playing"&&(this.updateCamera(e),this.controls.fire&&this.fire(),this.updateEnemies(e),this.mode==="playing"&&(this.updateCaptives(e),this.updateEffects(e))))}advance(e){for(let t=Math.min(e,.2);t>1e-6&&this.mode==="playing";){const n=Math.min(t,.02);this.step(n),this.controls.end(),t-=n}}frame(e){const t=Math.max(.001,(e-this.last)/1e3);this.last=e;const n=Math.min(t,.2);if(this.sceneTime+=n,this.mode==="playing")this.time+=n,this.advance(n),this.mode==="playing"&&this.ui.update(n);else if(this.mode==="menu"){const a=Gt[this.selected],o=this.sceneTime*.035;this.camera.position.set(a.x+76+Math.sin(o)*7,a.y+58,a.z+100+Math.cos(o)*6),this.camera.lookAt(a.x-6,a.y+6,a.z-14),this.camera.fov=52,this.camera.updateProjectionMatrix(),this.player.position.set(a.x+53,a.y+38,a.z+73),this.player.rotation.y=-.65,this.player.scale.y=1,this.player.visible=!0,la(this.player,this.sceneTime,0,!0),this.drone.position.copy(this.player.position),this.drone.rotation.y=-.65,this.drone.visible=!0,this.drone.userData.rotors.forEach(c=>{c.rotation.y+=n*50}),this.hand.visible=!1}this.sound.update(this.pos.y-this.ground(),this.mode==="playing");const i=this.mode==="menu"?Le(Gt[this.selected].x,Gt[this.selected].y+3,Gt[this.selected].z):Le(this.pos.x,this.ground(),this.pos.z);Di.uTime.value+=n;const s=this.world.update(n,i);this.structures.update(n,s.night),this.lightingNight=s.night,this.mode==="menu"&&!this.suspended&&this.encounters.updateTrain(n),this.lights.update(this.camera.position,n),this.assets.setGlow("Window glow",.18+s.night*2),this.world.lamps=this.structures.lampReflections(),this.forts.update(this.pos,n),this.foliage.update(this.camera),this.foliage.updateShadows(i),this.grass.update(this.camera.position,i),this.updateWeather(n),this.cullClock=(this.cullClock||0)-n,this.cullClock<=0&&(this.cullClock=.4,this.structures.cull(this.camera.position,this.renderer.q)),this.renderer.grade.uniforms.uNight.value=s.night,this.renderer.renderer.info.autoReset=!1,this.renderer.renderer.info.reset(),this.renderer.render(this.scene,this.camera),this.renderer.track(t),this.fps=Math.round(1/t),this.controls.end(),requestAnimationFrame(this.frame)}attachQA(){window.__KITEFALL__=this,window.__QA__={start:(e=0)=>{this.save.unlocked=3,this.start(e,!1)},teleport:(e,t,n,i=!1)=>{this.pos.set(e,t,n),this.flying=i,this.velocityY=0,this.updateCamera(1)},aim:e=>{const t=this.enemies[e],n=t.pos.clone().add(Le(0,1.15*t.root.scale.y,0)).sub(this.pos.clone().add(Le(0,1.63,0))).normalize();this.yaw=Math.atan2(-n.x,-n.z),this.pitch=Math.asin(n.y),this.controls.aim=!0,this.aiming=!0,this.updateCamera(1)},state:()=>({mode:this.mode,index:this.index,season:this.world.season,position:this.pos.toArray(),flying:this.flying,health:this.health,armor:this.armor,weapon:this.weapon.id,ammo:this.slot.ammo,reserve:this.slot.reserve,enemies:this.enemies.filter(e=>e.alive).length,progress:{...this.progress},objectivesComplete:li(this.progress,this.mission),boss:this.encounters.boss&&{name:this.encounters.boss.boss.name,health:this.encounters.boss.hp,phase:this.encounters.boss.bossState.phase},train:{position:this.railway.cars[1].obj.position.toArray(),speed:this.railway.train.v,remaining:this.enemies.filter(e=>e.trainEscort&&e.alive).length},buildings:this.forts.buildings.length,models:this.assets.resolved.size,draws:this.renderer.renderer.info.render.calls,fps:this.fps,save:this.save})}}}function pl(r){console.error(r);const e=document.getElementById("fatal");e.textContent=`KITEFALL could not complete the uplink.

${r?.message||r}

Use a desktop browser with WebGL 2 and hardware acceleration. If this occurred during loading, reload the page.`;const t=document.createElement("button");t.textContent="RETRY UPLINK",t.onclick=()=>location.reload(),e.append(t),e.classList.remove("hidden")}addEventListener("error",r=>pl(r.error||r.message));addEventListener("unhandledrejection",r=>pl(r.reason));try{const r=new Lv;await new bM(document.getElementById("game"),r).load()}catch(r){pl(r)}
