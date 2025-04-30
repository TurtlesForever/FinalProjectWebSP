(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Br=[],Yt=()=>{},G_=()=>!1,Wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rc=t=>t.startsWith("onUpdate:"),ht=Object.assign,sc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Q_=Object.prototype.hasOwnProperty,Re=(t,e)=>Q_.call(t,e),oe=Array.isArray,$r=t=>fi(t)==="[object Map]",Go=t=>fi(t)==="[object Set]",ah=t=>fi(t)==="[object Date]",de=t=>typeof t=="function",$e=t=>typeof t=="string",rn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Cd=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),kd=Object.prototype.toString,fi=t=>kd.call(t),J_=t=>fi(t).slice(8,-1),Vd=t=>fi(t)==="[object Object]",ic=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Y_=/-(\w)/g,Ut=Qo(t=>t.replace(Y_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,br=Qo(t=>t.replace(X_,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),qa=Qo(t=>t?`on${Jo(t)}`:""),jn=(t,e)=>!Object.is(t,e),eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lh;const Yo=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?ny(r):oc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||De(t))return t}const Z_=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(t){const e={};return t.replace(ty,"").split(Z_).forEach(n=>{if(n){const r=n.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ac(t){let e="";if($e(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=ac(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=nc(ry);function Od(t){return!!t||t===""}function iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Xo(t[r],e[r]);return n}function Xo(t,e){if(t===e)return!0;let n=ah(t),r=ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?iy(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Xo(t[a],e[a]))return!1}}return String(t)===String(e)}function oy(t,e){return t.findIndex(n=>Xo(n,e))}const Nd=t=>!!(t&&t.__v_isRef===!0),wt=t=>$e(t)?t:t==null?"":oe(t)||De(t)&&(t.toString===kd||!de(t.toString))?Nd(t)?wt(t.value):JSON.stringify(t,xd,2):String(t),xd=(t,e)=>Nd(e)?xd(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ha(r,i)+" =>"]=s,n),{})}:Go(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ha(n))}:rn(e)?Ha(e):De(e)&&!oe(e)&&!Vd(e)?String(e):e,Ha=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Md{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ld(t){return new Md(t)}function Ud(){return gt}function ay(t,e=!1){gt&&gt.cleanups.push(t)}let Ve;const za=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),$d(this);const e=Ve,n=$t;Ve=this,$t=!0;try{return this.fn()}finally{qd(this),Ve=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uc(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let jd=0,Ms,Ls;function Bd(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Ms,Ms=t}function lc(){jd++}function cc(){if(--jd>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uc(r),ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Hd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys))return;t.globalVersion=Ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pl(t)){t.flags&=-3;return}const n=Ve,r=$t;Ve=t,$t=!0;try{$d(t);const s=t.fn(t._value);(e.version===0||jn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,$t=r,qd(t),t.flags&=-3}}function uc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const zd=[];function er(){zd.push($t),$t=!1}function tr(){const t=zd.pop();$t=t===void 0?!0:t}function ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Ys=0;class cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!$t||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new cy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Kd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){lc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cc()}}}function Kd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Kd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mo=new WeakMap,pr=Symbol(""),gl=Symbol(""),Xs=Symbol("");function at(t,e,n){if($t&&Ve){let r=mo.get(t);r||mo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hc),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,i){const a=mo.get(t);if(!a){Ys++;return}const l=c=>{c&&c.trigger()};if(lc(),e==="clear")a.forEach(l);else{const c=oe(t),h=c&&ic(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Xs||!rn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Xs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(pr)),$r(t)&&l(a.get(gl)));break;case"delete":c||(l(a.get(pr)),$r(t)&&l(a.get(gl)));break;case"set":$r(t)&&l(a.get(pr));break}}cc()}function uy(t,e){const n=mo.get(t);return n&&n.get(e)}function Dr(t){const e=Ae(t);return e===t?e:(at(e,"iterate",Xs),Mt(t)?e:e.map(lt))}function Zo(t){return at(t=Ae(t),"iterate",Xs),t}const hy={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,lt)},concat(...t){return Dr(this).concat(...t.map(e=>oe(e)?Dr(e):e))},entries(){return Ka(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return un(this,"find",t,e,lt,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wa(this,"includes",t)},indexOf(...t){return Wa(this,"indexOf",t)},join(t){return Dr(this).join(t)},lastIndexOf(...t){return Wa(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Ps(this,"pop")},push(...t){return Ps(this,"push",t)},reduce(t,...e){return uh(this,"reduce",t,e)},reduceRight(t,...e){return uh(this,"reduceRight",t,e)},shift(){return Ps(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Ps(this,"splice",t)},toReversed(){return Dr(this).toReversed()},toSorted(t){return Dr(this).toSorted(t)},toSpliced(...t){return Dr(this).toSpliced(...t)},unshift(...t){return Ps(this,"unshift",t)},values(){return Ka(this,"values",lt)}};function Ka(t,e,n){const r=Zo(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const fy=Array.prototype;function un(t,e,n,r,s,i){const a=Zo(t),l=a!==t&&!Mt(t),c=a[e];if(c!==fy[e]){const p=c.apply(t,i);return l?lt(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,lt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function uh(t,e,n,r){const s=Zo(t);let i=n;return s!==t&&(Mt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,lt(l),c,t)}),s[e](i,...r)}function Wa(t,e,n){const r=Ae(t);at(r,"iterate",Xs);const s=r[e](...n);return(s===-1||s===!1)&&pc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ps(t,e,n=[]){er(),lc();const r=Ae(t)[e].apply(t,n);return cc(),tr(),r}const dy=nc("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function py(t){rn(t)||(t=String(t));const e=Ae(this);return at(e,"has",t),e.hasOwnProperty(t)}class Gd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ay:Xd:i?Yd:Jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=hy[n]))return c;if(n==="hasOwnProperty")return py}const l=Reflect.get(e,n,je(e)?e:r);return(rn(n)?Wd.has(n):dy(n))||(s||at(e,"get",n),i)?l:je(l)?a&&ic(n)?l:l.value:De(l)?s?ep(l):di(l):l}}class Qd extends Gd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=_r(i);if(!Mt(r)&&!_r(r)&&(i=Ae(i),r=Ae(r)),!oe(e)&&je(i)&&!je(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&ic(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,je(e)?e:s);return e===Ae(s)&&(a?jn(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!Wd.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",oe(e)?"length":pr),Reflect.ownKeys(e)}}class gy extends Gd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const my=new Qd,_y=new gy,yy=new Qd(!0);const ml=t=>t,qi=t=>Reflect.getPrototypeOf(t);function vy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=$r(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?ml:e?_l:lt;return!e&&at(i,"iterate",c?gl:pr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Hi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ey(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);t||(jn(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=qi(a),h=e?ml:t?_l:lt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(Ae(s),"iterate",pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return t||(jn(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?ml:t?_l:lt;return!t&&at(c,"iterate",pr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ht(n,t?{add:Hi("add"),set:Hi("set"),delete:Hi("delete"),clear:Hi("clear")}:{add(s){!e&&!Mt(s)&&!_r(s)&&(s=Ae(s));const i=Ae(this);return qi(i).has.call(i,s)||(i.add(s),dn(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!_r(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=qi(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?jn(i,d)&&dn(a,"set",s,i):dn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=qi(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&dn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vy(s,t,e)}),n}function fc(t,e){const n=Ey(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Ty={get:fc(!1,!1)},Iy={get:fc(!1,!0)},wy={get:fc(!0,!1)};const Jd=new WeakMap,Yd=new WeakMap,Xd=new WeakMap,Ay=new WeakMap;function by(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ry(t){return t.__v_skip||!Object.isExtensible(t)?0:by(J_(t))}function di(t){return _r(t)?t:dc(t,!1,my,Ty,Jd)}function Zd(t){return dc(t,!1,yy,Iy,Yd)}function ep(t){return dc(t,!0,_y,wy,Xd)}function dc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Ry(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Bn(t){return _r(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function pc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function gc(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Dd(t,"__v_skip",!0),t}const lt=t=>De(t)?di(t):t,_l=t=>De(t)?ep(t):t;function je(t){return t?t.__v_isRef===!0:!1}function pi(t){return tp(t,!1)}function Sy(t){return tp(t,!0)}function tp(t,e){return je(t)?t:new Py(t,e)}class Py{constructor(e,n){this.dep=new hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||_r(e);e=r?e:Ae(e),jn(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function qr(t){return je(t)?t.value:t}const Cy={get:(t,e,n)=>e==="__v_raw"?t:qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return Bn(t)?t:new Proxy(t,Cy)}function ky(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Dy(t,n);return e}class Vy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uy(Ae(this._object),this._key)}}function Dy(t,e,n){const r=t[e];return je(r)?r:new Vy(t,e,n)}class Oy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Bd(this,!0),!0}get value(){const e=this.dep.track();return Hd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ny(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Oy(r,s,n)}const zi={},_o=new WeakMap;let ur;function xy(t,e=!1,n=ur){if(n){let r=_o.get(n);r||_o.set(n,r=[]),r.push(t)}}function My(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=H=>s?H:Mt(H)||s===!1||s===0?pn(H,1):pn(H);let d,p,m,v,C=!1,V=!1;if(je(t)?(p=()=>t.value,C=Mt(t)):Bn(t)?(p=()=>h(t),C=!0):oe(t)?(V=!0,C=t.some(H=>Bn(H)||Mt(H)),p=()=>t.map(H=>{if(je(H))return H.value;if(Bn(H))return h(H);if(de(H))return c?c(H,2):H()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){er();try{m()}finally{tr()}}const H=ur;ur=d;try{return c?c(t,3,[v]):t(v)}finally{ur=H}}:p=Yt,e&&s){const H=p,ne=s===!0?1/0:s;p=()=>pn(H(),ne)}const D=Ud(),$=()=>{d.stop(),D&&D.active&&sc(D.effects,d)};if(i&&e){const H=e;e=(...ne)=>{H(...ne),$()}}let j=V?new Array(t.length).fill(zi):zi;const B=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ne=d.run();if(s||C||(V?ne.some((ge,A)=>jn(ge,j[A])):jn(ne,j))){m&&m();const ge=ur;ur=d;try{const A=[ne,j===zi?void 0:V&&j[0]===zi?[]:j,v];c?c(e,3,A):e(...A),j=ne}finally{ur=ge}}}else d.run()};return l&&l(B),d=new Fd(p),d.scheduler=a?()=>a(B,!1):B,v=H=>xy(H,!1,d),m=d.onStop=()=>{const H=_o.get(d);if(H){if(c)c(H,4);else for(const ne of H)ne();_o.delete(d)}},e?r?B(!0):j=d.run():a?a(B.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function pn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))pn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(Go(t)||$r(t))t.forEach(r=>{pn(r,e,n)});else if(Vd(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gi(t,e,n,r){try{return r?t(...r):t()}catch(s){ea(s,e,n)}}function sn(t,e,n,r){if(de(t)){const s=gi(t,e,n,r);return s&&Cd(s)&&s.catch(i=>{ea(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function ea(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){er(),gi(i,null,10,[t,c,h]),tr();return}}Ly(t,n,s,r,a)}function Ly(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const mt=[];let Wt=-1;const Hr=[];let Dn=null,Nr=0;const rp=Promise.resolve();let yo=null;function ta(t){const e=yo||rp;return t?e.then(this?t.bind(this):t):e}function Uy(t){let e=Wt+1,n=mt.length;for(;e<n;){const r=e+n>>>1,s=mt[r],i=Zs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function mc(t){if(!(t.flags&1)){const e=Zs(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=Zs(n)?mt.push(t):mt.splice(Uy(e),0,t),t.flags|=1,sp()}}function sp(){yo||(yo=rp.then(op))}function Fy(t){oe(t)?Hr.push(...t):Dn&&t.id===-1?Dn.splice(Nr+1,0,t):t.flags&1||(Hr.push(t),t.flags|=1),sp()}function hh(t,e,n=Wt+1){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ip(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,r)=>Zs(n)-Zs(r));if(Hr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Nr=0;Nr<Dn.length;Nr++){const n=Dn[Nr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dn=null,Nr=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function op(t){try{for(Wt=0;Wt<mt.length;Wt++){const e=mt[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<mt.length;Wt++){const e=mt[Wt];e&&(e.flags&=-2)}Wt=-1,mt.length=0,ip(),yo=null,(mt.length||Hr.length)&&op()}}let At=null,ap=null;function vo(t){const e=At;return At=t,ap=t&&t.type.__scopeId||null,e}function lp(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Th(-1);const i=vo(e);let a;try{a=t(...s)}finally{vo(i),r._d&&Th(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Us(t,e){if(At===null)return t;const n=ia(At),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(er(),sn(c,n,8,[t.el,l,t,e]),tr())}}const jy=Symbol("_vte"),By=t=>t.__isTeleport;function _c(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_c(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function cp(t,e){return de(t)?ht({name:t.name},e,{setup:t}):t}function up(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Eo(t,e,n,r,s=!1){if(oe(t)){t.forEach((C,V)=>Eo(C,e&&(oe(e)?e[V]:e),n,r,s));return}if(Fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Eo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===Ce?()=>!1:C=>Re(m,C);if(h!=null&&h!==c&&($e(h)?(d[h]=null,v(h)&&(p[h]=null)):je(h)&&(h.value=null)),de(c))gi(c,l,12,[a,d]);else{const C=$e(c),V=je(c);if(C||V){const D=()=>{if(t.f){const $=C?v(c)?p[c]:d[c]:c.value;s?oe($)&&sc($,i):oe($)?$.includes(i)||$.push(i):C?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=a,v(c)&&(p[c]=a)):V&&(c.value=a,t.k&&(d[t.k]=a))};a?(D.id=-1,Pt(D,n)):D()}}}Yo().requestIdleCallback;Yo().cancelIdleCallback;const Fs=t=>!!t.type.__asyncLoader,hp=t=>t.type.__isKeepAlive;function $y(t,e){fp(t,"a",e)}function qy(t,e){fp(t,"da",e)}function fp(t,e,n=Xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hp(s.parent.vnode)&&Hy(r,e,n,s),s=s.parent}}function Hy(t,e,n,r){const s=na(e,t,r,!0);dp(()=>{sc(r[e],s)},n)}function na(t,e,n=Xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{er();const l=mi(n),c=sn(e,n,t,a);return l(),tr(),c});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=Xe)=>{(!ti||t==="sp")&&na(t,(...r)=>e(...r),n)},zy=In("bm"),yc=In("m"),Ky=In("bu"),Wy=In("u"),Gy=In("bum"),dp=In("um"),Qy=In("sp"),Jy=In("rtg"),Yy=In("rtc");function Xy(t,e=Xe){na("ec",t,e)}const Zy="components";function pp(t,e){return tv(Zy,t,!0,e)||t}const ev=Symbol.for("v-ndc");function tv(t,e,n=!0,r=!1){const s=At||Xe;if(s){const i=s.type;{const l=Hv(i,!1);if(l&&(l===e||l===Ut(e)||l===Jo(Ut(e))))return i}const a=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!a&&r?i:a}}function fh(t,e){return t&&(t[e]||t[Ut(e)]||t[Jo(Ut(e))])}function yl(t,e,n,r){let s;const i=n,a=oe(t);if(a||$e(t)){const l=a&&Bn(t);let c=!1;l&&(c=!Mt(t),t=Zo(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?lt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const vl=t=>t?Mp(t)?ia(t):vl(t.parent):null,js=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mp(t),$forceUpdate:t=>t.f||(t.f=()=>{mc(t.update)}),$nextTick:t=>t.n||(t.n=ta.bind(t.proxy)),$watch:t=>wv.bind(t)}),Ga=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),nv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=a[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ga(r,e))return a[e]=1,r[e];if(s!==Ce&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Ce&&Re(n,e))return a[e]=4,n[e];El&&(a[e]=0)}}const d=js[e];let p,m;if(d)return e==="$attrs"&&at(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ga(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ce&&Re(t,a)||Ga(e,a)||(l=i[0])&&Re(l,a)||Re(r,a)||Re(js,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function rv(t){const e=mp(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:C,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:j,destroyed:B,unmounted:H,render:ne,renderTracked:ge,renderTriggered:A,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:b,components:R,directives:T,filters:We}=e;if(h&&sv(h,r,null),a)for(const le in a){const _e=a[le];de(_e)&&(r[le]=_e.bind(n))}if(s){const le=s.call(n,n);De(le)&&(t.data=di(le))}if(El=!0,i)for(const le in i){const _e=i[le],Rt=de(_e)?_e.bind(n,n):de(_e.get)?_e.get.bind(n,n):Yt,Ft=!de(_e)&&de(_e.set)?_e.set.bind(n):Yt,Dt=Ct({get:Rt,set:Ft});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:xe=>Dt.value=xe})}if(l)for(const le in l)gp(l[le],r,n,le);if(c){const le=de(c)?c.call(n):c;Reflect.ownKeys(le).forEach(_e=>{to(_e,le[_e])})}d&&ph(d,t,"c");function ke(le,_e){oe(_e)?_e.forEach(Rt=>le(Rt.bind(n))):_e&&le(_e.bind(n))}if(ke(zy,p),ke(yc,m),ke(Ky,v),ke(Wy,C),ke($y,V),ke(qy,D),ke(Xy,_),ke(Yy,ge),ke(Jy,A),ke(Gy,j),ke(dp,H),ke(Qy,y),oe(w))if(w.length){const le=t.exposed||(t.exposed={});w.forEach(_e=>{Object.defineProperty(le,_e,{get:()=>n[_e],set:Rt=>n[_e]=Rt})})}else t.exposed||(t.exposed={});ne&&t.render===Yt&&(t.render=ne),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),y&&up(t)}function sv(t,e,n=Yt){oe(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(t,e,n){sn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if($e(t)){const i=e[t];de(i)&&Bs(s,i)}else if(de(t))Bs(s,t.bind(n));else if(De(t))if(oe(t))t.forEach(i=>gp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Bs(s,i,t)}}function mp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>To(c,h,a,!0)),To(c,e,a)),De(e)&&i.set(e,c),c}function To(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&To(t,i,n,!0),s&&s.forEach(a=>To(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=iv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const iv={data:gh,props:mh,emits:mh,methods:Vs,computed:Vs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Vs,directives:Vs,watch:av,provide:gh,inject:ov};function gh(t,e){return e?t?function(){return ht(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function ov(t,e){return Vs(Tl(t),Tl(e))}function Tl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?ht(Object.create(null),t,e):e}function mh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:ht(Object.create(null),dh(t),dh(e??{})):e}function av(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function _p(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lv=0;function cv(t,e){return function(r,s=null){de(r)||(r=ht({},r)),s!=null&&!De(s)&&(s=null);const i=_p(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:lv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&de(d.install)?(a.add(d),d.install(h,...p)):de(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||yt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,d,m),c=!0,h._container=d,d.__vue_app__=h,ia(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=gr;gr=h;try{return d()}finally{gr=p}}};return h}}let gr=null;function to(t,e){if(Xe){let n=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===n&&(n=Xe.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=Xe||At;if(r||gr){const s=gr?gr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function uv(){return!!(Xe||At||gr)}const yp={},vp=()=>Object.create(yp),Ep=t=>Object.getPrototypeOf(t)===yp;function hv(t,e,n,r=!1){const s={},i=vp();t.propsDefaults=Object.create(null),Tp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Zd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ra(t.emitsOptions,m))continue;const v=e[m];if(c)if(Re(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const C=Ut(m);s[C]=Il(c,l,C,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{Tp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=br(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Il(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&dn(t.attrs,"set","")}function Tp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(xs(c))continue;const h=e[c];let d;s&&Re(s,d=Ut(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ra(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(n),h=l||Ce;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Il(s,c,p,h[p],t,!Re(h,p))}}return a}function Il(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&de(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=mi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===br(n))&&(r=!0))}return r}const dv=new WeakMap;function Ip(t,e,n=!1){const r=n?dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!de(t)){const d=p=>{c=!0;const[m,v]=Ip(p,e,!0);ht(a,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,Br),Br;if(oe(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);_h(p)&&(a[p]=Ce)}else if(i)for(const d in i){const p=Ut(d);if(_h(p)){const m=i[d],v=a[p]=oe(m)||de(m)?{type:m}:ht({},m),C=v.type;let V=!1,D=!0;if(oe(C))for(let $=0;$<C.length;++$){const j=C[$],B=de(j)&&j.name;if(B==="Boolean"){V=!0;break}else B==="String"&&(D=!1)}else V=de(C)&&C.name==="Boolean";v[0]=V,v[1]=D,(V||Re(v,"default"))&&l.push(p)}}const h=[a,l];return De(t)&&r.set(t,h),h}function _h(t){return t[0]!=="$"&&!xs(t)}const wp=t=>t[0]==="_"||t==="$stable",vc=t=>oe(t)?t.map(Qt):[Qt(t)],pv=(t,e,n)=>{if(e._n)return e;const r=lp((...s)=>vc(e(...s)),n);return r._c=!1,r},Ap=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wp(s))continue;const i=t[s];if(de(i))e[s]=pv(s,i,r);else if(i!=null){const a=vc(i);e[s]=()=>a}}},bp=(t,e)=>{const n=vc(e);t.slots.default=()=>n},Rp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},gv=(t,e,n)=>{const r=t.slots=vp();if(t.vnode.shapeFlag&32){const s=e._;s?(Rp(r,e,n),n&&Dd(r,"_",s,!0)):Ap(e,r)}else e&&bp(t,e)},mv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Rp(s,e,n):(i=!e.$stable,Ap(e,s)),a=e}else e&&(bp(t,e),a={default:1});if(i)for(const l in s)!wp(l)&&a[l]==null&&delete s[l]},Pt=kv;function _v(t){return yv(t)}function yv(t,e){const n=Yo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Yt,insertStaticContent:C}=t,V=(E,I,S,N=null,L=null,x=null,W=void 0,z=null,q=!!I.dynamicChildren)=>{if(E===I)return;E&&!Cs(E,I)&&(N=O(E),xe(E,L,x,!0),E=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:F,ref:re,shapeFlag:Q}=I;switch(F){case sa:D(E,I,S,N);break;case yr:$(E,I,S,N);break;case Ja:E==null&&j(I,S,N,W);break;case xt:R(E,I,S,N,L,x,W,z,q);break;default:Q&1?ne(E,I,S,N,L,x,W,z,q):Q&6?T(E,I,S,N,L,x,W,z,q):(Q&64||Q&128)&&F.process(E,I,S,N,L,x,W,z,q,X)}re!=null&&L&&Eo(re,E&&E.ref,x,I||E,!I)},D=(E,I,S,N)=>{if(E==null)r(I.el=l(I.children),S,N);else{const L=I.el=E.el;I.children!==E.children&&h(L,I.children)}},$=(E,I,S,N)=>{E==null?r(I.el=c(I.children||""),S,N):I.el=E.el},j=(E,I,S,N)=>{[E.el,E.anchor]=C(E.children,I,S,N,E.el,E.anchor)},B=({el:E,anchor:I},S,N)=>{let L;for(;E&&E!==I;)L=m(E),r(E,S,N),E=L;r(I,S,N)},H=({el:E,anchor:I})=>{let S;for(;E&&E!==I;)S=m(E),s(E),E=S;s(I)},ne=(E,I,S,N,L,x,W,z,q)=>{I.type==="svg"?W="svg":I.type==="math"&&(W="mathml"),E==null?ge(I,S,N,L,x,W,z,q):y(E,I,L,x,W,z,q)},ge=(E,I,S,N,L,x,W,z)=>{let q,F;const{props:re,shapeFlag:Q,transition:Z,dirs:ae}=E;if(q=E.el=a(E.type,x,re&&re.is,re),Q&8?d(q,E.children):Q&16&&_(E.children,q,null,N,L,Qa(E,x),W,z),ae&&lr(E,null,N,"created"),A(q,E,E.scopeId,W,N),re){for(const pe in re)pe!=="value"&&!xs(pe)&&i(q,pe,null,re[pe],x,N);"value"in re&&i(q,"value",null,re.value,x),(F=re.onVnodeBeforeMount)&&Kt(F,N,E)}ae&&lr(E,null,N,"beforeMount");const se=vv(L,Z);se&&Z.beforeEnter(q),r(q,I,S),((F=re&&re.onVnodeMounted)||se||ae)&&Pt(()=>{F&&Kt(F,N,E),se&&Z.enter(q),ae&&lr(E,null,N,"mounted")},L)},A=(E,I,S,N,L)=>{if(S&&v(E,S),N)for(let x=0;x<N.length;x++)v(E,N[x]);if(L){let x=L.subTree;if(I===x||Dp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const W=L.vnode;A(E,W,W.scopeId,W.slotScopeIds,L.parent)}}},_=(E,I,S,N,L,x,W,z,q=0)=>{for(let F=q;F<E.length;F++){const re=E[F]=z?On(E[F]):Qt(E[F]);V(null,re,I,S,N,L,x,W,z)}},y=(E,I,S,N,L,x,W)=>{const z=I.el=E.el;let{patchFlag:q,dynamicChildren:F,dirs:re}=I;q|=E.patchFlag&16;const Q=E.props||Ce,Z=I.props||Ce;let ae;if(S&&cr(S,!1),(ae=Z.onVnodeBeforeUpdate)&&Kt(ae,S,I,E),re&&lr(I,E,S,"beforeUpdate"),S&&cr(S,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&d(z,""),F?w(E.dynamicChildren,F,z,S,N,Qa(I,L),x):W||_e(E,I,z,null,S,N,Qa(I,L),x,!1),q>0){if(q&16)b(z,Q,Z,S,L);else if(q&2&&Q.class!==Z.class&&i(z,"class",null,Z.class,L),q&4&&i(z,"style",Q.style,Z.style,L),q&8){const se=I.dynamicProps;for(let pe=0;pe<se.length;pe++){const Ee=se[pe],tt=Q[Ee],Ge=Z[Ee];(Ge!==tt||Ee==="value")&&i(z,Ee,tt,Ge,L,S)}}q&1&&E.children!==I.children&&d(z,I.children)}else!W&&F==null&&b(z,Q,Z,S,L);((ae=Z.onVnodeUpdated)||re)&&Pt(()=>{ae&&Kt(ae,S,I,E),re&&lr(I,E,S,"updated")},N)},w=(E,I,S,N,L,x,W)=>{for(let z=0;z<I.length;z++){const q=E[z],F=I[z],re=q.el&&(q.type===xt||!Cs(q,F)||q.shapeFlag&70)?p(q.el):S;V(q,F,re,null,N,L,x,W,!0)}},b=(E,I,S,N,L)=>{if(I!==S){if(I!==Ce)for(const x in I)!xs(x)&&!(x in S)&&i(E,x,I[x],null,L,N);for(const x in S){if(xs(x))continue;const W=S[x],z=I[x];W!==z&&x!=="value"&&i(E,x,z,W,L,N)}"value"in S&&i(E,"value",I.value,S.value,L)}},R=(E,I,S,N,L,x,W,z,q)=>{const F=I.el=E?E.el:l(""),re=I.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ae}=I;ae&&(z=z?z.concat(ae):ae),E==null?(r(F,S,N),r(re,S,N),_(I.children||[],S,re,L,x,W,z,q)):Q>0&&Q&64&&Z&&E.dynamicChildren?(w(E.dynamicChildren,Z,S,L,x,W,z),(I.key!=null||L&&I===L.subTree)&&Sp(E,I,!0)):_e(E,I,S,re,L,x,W,z,q)},T=(E,I,S,N,L,x,W,z,q)=>{I.slotScopeIds=z,E==null?I.shapeFlag&512?L.ctx.activate(I,S,N,W,q):We(I,S,N,L,x,W,q):vt(E,I,q)},We=(E,I,S,N,L,x,W)=>{const z=E.component=Fv(E,N,L);if(hp(E)&&(z.ctx.renderer=X),jv(z,!1,W),z.asyncDep){if(L&&L.registerDep(z,ke,W),!E.el){const q=z.subTree=yt(yr);$(null,q,I,S)}}else ke(z,E,I,S,L,x,W)},vt=(E,I,S)=>{const N=I.component=E.component;if(Pv(E,I,S))if(N.asyncDep&&!N.asyncResolved){le(N,I,S);return}else N.next=I,N.update();else I.el=E.el,N.vnode=I},ke=(E,I,S,N,L,x,W)=>{const z=()=>{if(E.isMounted){let{next:Q,bu:Z,u:ae,parent:se,vnode:pe}=E;{const nt=Pp(E);if(nt){Q&&(Q.el=pe.el,le(E,Q,W)),nt.asyncDep.then(()=>{E.isUnmounted||z()});return}}let Ee=Q,tt;cr(E,!1),Q?(Q.el=pe.el,le(E,Q,W)):Q=pe,Z&&eo(Z),(tt=Q.props&&Q.props.onVnodeBeforeUpdate)&&Kt(tt,se,Q,pe),cr(E,!0);const Ge=vh(E),Ot=E.subTree;E.subTree=Ge,V(Ot,Ge,p(Ot.el),O(Ot),E,L,x),Q.el=Ge.el,Ee===null&&Cv(E,Ge.el),ae&&Pt(ae,L),(tt=Q.props&&Q.props.onVnodeUpdated)&&Pt(()=>Kt(tt,se,Q,pe),L)}else{let Q;const{el:Z,props:ae}=I,{bm:se,m:pe,parent:Ee,root:tt,type:Ge}=E,Ot=Fs(I);cr(E,!1),se&&eo(se),!Ot&&(Q=ae&&ae.onVnodeBeforeMount)&&Kt(Q,Ee,I),cr(E,!0);{tt.ce&&tt.ce._injectChildStyle(Ge);const nt=E.subTree=vh(E);V(null,nt,S,N,E,L,x),I.el=nt.el}if(pe&&Pt(pe,L),!Ot&&(Q=ae&&ae.onVnodeMounted)){const nt=I;Pt(()=>Kt(Q,Ee,nt),L)}(I.shapeFlag&256||Ee&&Fs(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&E.a&&Pt(E.a,L),E.isMounted=!0,I=S=N=null}};E.scope.on();const q=E.effect=new Fd(z);E.scope.off();const F=E.update=q.run.bind(q),re=E.job=q.runIfDirty.bind(q);re.i=E,re.id=E.uid,q.scheduler=()=>mc(re),cr(E,!0),F()},le=(E,I,S)=>{I.component=E;const N=E.vnode.props;E.vnode=I,E.next=null,fv(E,I.props,N,S),mv(E,I.children,S),er(),hh(E),tr()},_e=(E,I,S,N,L,x,W,z,q=!1)=>{const F=E&&E.children,re=E?E.shapeFlag:0,Q=I.children,{patchFlag:Z,shapeFlag:ae}=I;if(Z>0){if(Z&128){Ft(F,Q,S,N,L,x,W,z,q);return}else if(Z&256){Rt(F,Q,S,N,L,x,W,z,q);return}}ae&8?(re&16&&Et(F,L,x),Q!==F&&d(S,Q)):re&16?ae&16?Ft(F,Q,S,N,L,x,W,z,q):Et(F,L,x,!0):(re&8&&d(S,""),ae&16&&_(Q,S,N,L,x,W,z,q))},Rt=(E,I,S,N,L,x,W,z,q)=>{E=E||Br,I=I||Br;const F=E.length,re=I.length,Q=Math.min(F,re);let Z;for(Z=0;Z<Q;Z++){const ae=I[Z]=q?On(I[Z]):Qt(I[Z]);V(E[Z],ae,S,null,L,x,W,z,q)}F>re?Et(E,L,x,!0,!1,Q):_(I,S,N,L,x,W,z,q,Q)},Ft=(E,I,S,N,L,x,W,z,q)=>{let F=0;const re=I.length;let Q=E.length-1,Z=re-1;for(;F<=Q&&F<=Z;){const ae=E[F],se=I[F]=q?On(I[F]):Qt(I[F]);if(Cs(ae,se))V(ae,se,S,null,L,x,W,z,q);else break;F++}for(;F<=Q&&F<=Z;){const ae=E[Q],se=I[Z]=q?On(I[Z]):Qt(I[Z]);if(Cs(ae,se))V(ae,se,S,null,L,x,W,z,q);else break;Q--,Z--}if(F>Q){if(F<=Z){const ae=Z+1,se=ae<re?I[ae].el:N;for(;F<=Z;)V(null,I[F]=q?On(I[F]):Qt(I[F]),S,se,L,x,W,z,q),F++}}else if(F>Z)for(;F<=Q;)xe(E[F],L,x,!0),F++;else{const ae=F,se=F,pe=new Map;for(F=se;F<=Z;F++){const Qe=I[F]=q?On(I[F]):Qt(I[F]);Qe.key!=null&&pe.set(Qe.key,F)}let Ee,tt=0;const Ge=Z-se+1;let Ot=!1,nt=0;const bn=new Array(Ge);for(F=0;F<Ge;F++)bn[F]=0;for(F=ae;F<=Q;F++){const Qe=E[F];if(tt>=Ge){xe(Qe,L,x,!0);continue}let Nt;if(Qe.key!=null)Nt=pe.get(Qe.key);else for(Ee=se;Ee<=Z;Ee++)if(bn[Ee-se]===0&&Cs(Qe,I[Ee])){Nt=Ee;break}Nt===void 0?xe(Qe,L,x,!0):(bn[Nt-se]=F+1,Nt>=nt?nt=Nt:Ot=!0,V(Qe,I[Nt],S,null,L,x,W,z,q),tt++)}const gs=Ot?Ev(bn):Br;for(Ee=gs.length-1,F=Ge-1;F>=0;F--){const Qe=se+F,Nt=I[Qe],Si=Qe+1<re?I[Qe+1].el:N;bn[F]===0?V(null,Nt,S,Si,L,x,W,z,q):Ot&&(Ee<0||F!==gs[Ee]?Dt(Nt,S,Si,2):Ee--)}}},Dt=(E,I,S,N,L=null)=>{const{el:x,type:W,transition:z,children:q,shapeFlag:F}=E;if(F&6){Dt(E.component.subTree,I,S,N);return}if(F&128){E.suspense.move(I,S,N);return}if(F&64){W.move(E,I,S,X);return}if(W===xt){r(x,I,S);for(let Q=0;Q<q.length;Q++)Dt(q[Q],I,S,N);r(E.anchor,I,S);return}if(W===Ja){B(E,I,S);return}if(N!==2&&F&1&&z)if(N===0)z.beforeEnter(x),r(x,I,S),Pt(()=>z.enter(x),L);else{const{leave:Q,delayLeave:Z,afterLeave:ae}=z,se=()=>r(x,I,S),pe=()=>{Q(x,()=>{se(),ae&&ae()})};Z?Z(x,se,pe):pe()}else r(x,I,S)},xe=(E,I,S,N=!1,L=!1)=>{const{type:x,props:W,ref:z,children:q,dynamicChildren:F,shapeFlag:re,patchFlag:Q,dirs:Z,cacheIndex:ae}=E;if(Q===-2&&(L=!1),z!=null&&Eo(z,null,S,E,!0),ae!=null&&(I.renderCache[ae]=void 0),re&256){I.ctx.deactivate(E);return}const se=re&1&&Z,pe=!Fs(E);let Ee;if(pe&&(Ee=W&&W.onVnodeBeforeUnmount)&&Kt(Ee,I,E),re&6)zt(E.component,S,N);else{if(re&128){E.suspense.unmount(S,N);return}se&&lr(E,null,I,"beforeUnmount"),re&64?E.type.remove(E,I,S,X,N):F&&!F.hasOnce&&(x!==xt||Q>0&&Q&64)?Et(F,I,S,!1,!0):(x===xt&&Q&384||!L&&re&16)&&Et(q,I,S),N&&Me(E)}(pe&&(Ee=W&&W.onVnodeUnmounted)||se)&&Pt(()=>{Ee&&Kt(Ee,I,E),se&&lr(E,null,I,"unmounted")},S)},Me=E=>{const{type:I,el:S,anchor:N,transition:L}=E;if(I===xt){An(S,N);return}if(I===Ja){H(E);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:W,delayLeave:z}=L,q=()=>W(S,x);z?z(E.el,x,q):q()}else x()},An=(E,I)=>{let S;for(;E!==I;)S=m(E),s(E),E=S;s(I)},zt=(E,I,S)=>{const{bum:N,scope:L,job:x,subTree:W,um:z,m:q,a:F}=E;yh(q),yh(F),N&&eo(N),L.stop(),x&&(x.flags|=8,xe(W,E,I,S)),z&&Pt(z,I),Pt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Et=(E,I,S,N=!1,L=!1,x=0)=>{for(let W=x;W<E.length;W++)xe(E[W],I,S,N,L)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),S=I&&I[jy];return S?m(S):I};let J=!1;const G=(E,I,S)=>{E==null?I._vnode&&xe(I._vnode,null,null,!0):V(I._vnode||null,E,I,null,null,null,S),I._vnode=E,J||(J=!0,hh(),ip(),J=!1)},X={p:V,um:xe,m:Dt,r:Me,mt:We,mc:_,pc:_e,pbc:w,n:O,o:t};return{render:G,hydrate:void 0,createApp:cv(G)}}function Qa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=On(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Sp(a,l)),l.type===sa&&(l.el=a.el)}}function Ev(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pp(e)}function yh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Tv=Symbol.for("v-scx"),Iv=()=>Xt(Tv);function Bs(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,l=ht({},n),c=e&&r||!e&&i!=="post";let h;if(ti){if(i==="sync"){const v=Iv();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Yt,v.resume=Yt,v.pause=Yt,v}}const d=Xe;l.call=(v,C,V)=>sn(v,d,C,V);let p=!1;i==="post"?l.scheduler=v=>{Pt(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,C)=>{C?v():mc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=My(t,e,l);return ti&&(h?h.push(m):c&&m()),m}function wv(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const a=mi(this),l=Cp(s,i.bind(r),n);return a(),l}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Av=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${br(e)}Modifiers`];function bv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&Av(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>$e(d)?d.trim():d)),a.number&&(s=n.map(go)));let l,c=r[l=qa(e)]||r[l=qa(Ut(e))];!c&&i&&(c=r[l=qa(br(e))]),c&&sn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(h,t,6,s)}}function Vp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!de(t)){const c=h=>{const d=Vp(h,e,!0);d&&(l=!0,ht(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):ht(a,i),De(t)&&r.set(t,a),a)}function ra(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,br(e))||Re(t,e))}function vh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:C,inheritAttrs:V}=t,D=vo(t);let $,j;try{if(n.shapeFlag&4){const H=s||r,ne=H;$=Qt(h.call(ne,H,d,p,v,m,C)),j=l}else{const H=e;$=Qt(H.length>1?H(p,{attrs:l,slots:a,emit:c}):H(p,null)),j=e.props?l:Rv(l)}}catch(H){$s.length=0,ea(H,t,1),$=yt(yr)}let B=$;if(j&&V!==!1){const H=Object.keys(j),{shapeFlag:ne}=B;H.length&&ne&7&&(i&&H.some(rc)&&(j=Sv(j,i)),B=Jr(B,j,!1,!0))}return n.dirs&&(B=Jr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&_c(B,n.transition),$=B,vo(D),$}const Rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},Sv=(t,e)=>{const n={};for(const r in t)(!rc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!ra(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Eh(r,a,h):!0:!!a;return!1}function Eh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ra(n,i))return!0}return!1}function Cv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dp=t=>t.__isSuspense;function kv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Fy(t)}const xt=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),yr=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),$s=[];let kt=null;function ut(t=!1){$s.push(kt=t?null:[])}function Vv(){$s.pop(),kt=$s[$s.length-1]||null}let ei=1;function Th(t,e=!1){ei+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function Op(t){return t.dynamicChildren=ei>0?kt||Br:null,Vv(),ei>0&&kt&&kt.push(t),t}function _t(t,e,n,r,s,i){return Op(ue(t,e,n,r,s,i,!0))}function Dv(t,e,n,r,s){return Op(yt(t,e,n,r,s,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Np=({key:t})=>t??null,no=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||je(t)||de(t)?{i:At,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&no(e),scopeId:ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return l?(Ec(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),ei>0&&!a&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const yt=Ov;function Ov(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ev)&&(t=yr),Io(t)){const l=Jr(t,e,!0);return n&&Ec(l,n),ei>0&&!i&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag=-2,l}if(zv(t)&&(t=t.__vccOpts),e){e=Nv(e);let{class:l,style:c}=e;l&&!$e(l)&&(e.class=ac(l)),De(c)&&(pc(c)&&!oe(c)&&(c=ht({},c)),e.style=oc(c))}const a=$e(t)?1:Dp(t)?128:By(t)?64:De(t)?4:de(t)?2:0;return ue(t,e,n,r,s,a,i,!0)}function Nv(t){return t?pc(t)||Ep(t)?ht({},t):t:null}function Jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Mv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Np(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(no(e)):[i,no(e)]:no(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&_c(d,c.clone(d)),d}function xp(t=" ",e=0){return yt(sa,null,t,e)}function xv(t="",e=!1){return e?(ut(),Dv(yr,null,t)):yt(yr,null,t)}function Qt(t){return t==null||typeof t=="boolean"?yt(yr):oe(t)?yt(xt,null,t.slice()):Io(t)?On(t):yt(sa,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function Ec(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ec(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ep(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[xp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ac([e.class,r.class]));else if(s==="style")e.style=oc([e.style,r.style]);else if(Wo(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){sn(t,e,7,[n,r])}const Lv=_p();let Uv=0;function Fv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Lv,i={uid:Uv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ip(r,s),emitsOptions:Vp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bv.bind(null,i),t.ce&&t.ce(i),i}let Xe=null,wo,wl;{const t=Yo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),wl=e("__VUE_SSR_SETTERS__",n=>ti=n)}const mi=t=>{const e=Xe;return wo(t),t.scope.on(),()=>{t.scope.off(),wo(e)}},Ih=()=>{Xe&&Xe.scope.off(),wo(null)};function Mp(t){return t.vnode.shapeFlag&4}let ti=!1;function jv(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=Mp(t);hv(t,r,i,e),gv(t,s,n);const a=i?Bv(t,e):void 0;return e&&wl(!1),a}function Bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nv);const{setup:r}=n;if(r){er();const s=t.setupContext=r.length>1?qv(t):null,i=mi(t),a=gi(r,t,0,[t.props,s]),l=Cd(a);if(tr(),i(),(l||t.sp)&&!Fs(t)&&up(t),l){if(a.then(Ih,Ih),e)return a.then(c=>{wh(t,c)}).catch(c=>{ea(c,t,0)});t.asyncDep=a}else wh(t,a)}else Lp(t)}function wh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=np(e)),Lp(t)}function Lp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=mi(t);er();try{rv(t)}finally{tr(),s()}}}const $v={get(t,e){return at(t,"get",""),t[e]}};function qv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$v),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(np(gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}})):t.proxy}function Hv(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function zv(t){return de(t)&&"__vccOpts"in t}const Ct=(t,e)=>Ny(t,e,ti);function Up(t,e,n){const r=arguments.length;return r===2?De(e)&&!oe(e)?Io(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),yt(t,e,n))}const Kv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{Al=Ah.createPolicy("vue",{createHTML:t=>t})}catch{}const Fp=Al?t=>Al.createHTML(t):t=>t,Wv="http://www.w3.org/2000/svg",Gv="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,bh=fn&&fn.createElement("template"),Qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(Wv,t):e==="mathml"?fn.createElementNS(Gv,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=Fp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jv=Symbol("_vtc");function Yv(t,e,n){const r=t[Jv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rh=Symbol("_vod"),Xv=Symbol("_vsh"),Zv=Symbol(""),eE=/(^|;)\s*display\s*:/;function tE(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ro(r,l,"")}else for(const a in e)n[a]==null&&ro(r,a,"");for(const a in n)a==="display"&&(i=!0),ro(r,a,n[a])}else if(s){if(e!==n){const a=r[Zv];a&&(n+=";"+a),r.cssText=n,i=eE.test(n)}}else e&&t.removeAttribute("style");Rh in t&&(t[Rh]=i?r.display:"",t[Xv]&&(r.display="none"))}const Sh=/\s*!important$/;function ro(t,e,n){if(oe(n))n.forEach(r=>ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nE(t,e);Sh.test(n)?t.setProperty(br(r),n.replace(Sh,""),"important"):t[r]=n}}const Ph=["Webkit","Moz","ms"],Ya={};function nE(t,e){const n=Ya[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return Ya[e]=r;r=Jo(r);for(let s=0;s<Ph.length;s++){const i=Ph[s]+r;if(i in t)return Ya[e]=i}return e}const Ch="http://www.w3.org/1999/xlink";function kh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ch,e.slice(6,e.length)):t.setAttributeNS(Ch,e,n):n==null||i&&!Od(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function Vh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Od(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function fr(t,e,n,r){t.addEventListener(e,n,r)}function rE(t,e,n,r){t.removeEventListener(e,n,r)}const Dh=Symbol("_vei");function sE(t,e,n,r,s=null){const i=t[Dh]||(t[Dh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=iE(e);if(r){const h=i[e]=lE(r,s);fr(t,l,h,c)}else a&&(rE(t,l,a,c),i[e]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function iE(t){let e;if(Oh.test(t)){e={};let r;for(;r=t.match(Oh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let Xa=0;const oE=Promise.resolve(),aE=()=>Xa||(oE.then(()=>Xa=0),Xa=Date.now());function lE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(cE(r,n.value),e,5,[r])};return n.value=t,n.attached=aE(),n}function cE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Yv(t,r,a):e==="style"?tE(t,n,r):Wo(e)?rc(e)||sE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hE(t,e,r,a))?(Vh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?Vh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kh(t,e,r,a))};function hE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nh(e)&&$e(n)?!1:e in t}const Ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>eo(e,n):e};function fE(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),bo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zr]=Ao(s);const i=r||s.props&&s.props.type==="number";fr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=go(l)),t[zr](l)}),n&&fr(t,"change",()=>{t.value=t.value.trim()}),e||(fr(t,"compositionstart",fE),fr(t,"compositionend",xh),fr(t,"change",xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[zr]=Ao(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?go(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},dE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Go(e);fr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?go(Ro(a)):Ro(a));t[zr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ta(()=>{t._assigning=!1})}),t[zr]=Ao(r)},mounted(t,{value:e}){Mh(t,e)},beforeUpdate(t,e,n){t[zr]=Ao(n)},updated(t,{value:e}){t._assigning||Mh(t,e)}};function Mh(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Go(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],l=Ro(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=oy(e,l)>-1}else a.selected=e.has(l);else if(Xo(Ro(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}const pE=["ctrl","shift","alt","meta"],gE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pE.some(n=>t[`${n}Key`]&&!e.includes(n))},jp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=gE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},mE=ht({patchProp:uE},Qv);let Lh;function _E(){return Lh||(Lh=_v(mE))}const Bp=(...t)=>{const e=_E().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,yE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function yE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vE(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $p;const oa=t=>$p=t,qp=Symbol();function bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qs||(qs={}));function EE(){const t=Ld(!0),e=t.run(()=>pi({}));let n=[],r=[];const s=gc({install(i){oa(s),s._a=i,i.provide(qp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Hp=()=>{};function Uh(t,e,n,r=Hp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ud()&&ay(s),s}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}const TE=t=>t(),Fh=Symbol(),Za=Symbol();function Rl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bl(s)&&bl(r)&&t.hasOwnProperty(n)&&!je(r)&&!Bn(r)?t[n]=Rl(s,r):t[n]=r}return t}const IE=Symbol();function wE(t){return!bl(t)||!Object.prototype.hasOwnProperty.call(t,IE)}const{assign:Vn}=Object;function AE(t){return!!(je(t)&&t.effect)}function bE(t,e,n,r){const{state:s,actions:i,getters:a}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=ky(n.state.value[t]);return Vn(d,i,Object.keys(a||{}).reduce((p,m)=>(p[m]=gc(Ct(()=>{oa(n);const v=n._s.get(t);return a[m].call(v,v)})),p),{}))}return c=zp(t,h,e,n,r,!0),c}function zp(t,e,n={},r,s,i){let a;const l=Vn({actions:{}},n),c={deep:!0};let h,d,p=[],m=[],v;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),pi({});let V;function D(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:qs.patchFunction,storeId:t,events:v}):(Rl(r.state.value[t],_),y={type:qs.patchObject,payload:_,storeId:t,events:v});const w=V=Symbol();ta().then(()=>{V===w&&(h=!0)}),d=!0,Or(p,y,r.state.value[t])}const $=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{Vn(b,w)})}:Hp;function j(){a.stop(),p=[],m=[],r._s.delete(t)}const B=(_,y="")=>{if(Fh in _)return _[Za]=y,_;const w=function(){oa(r);const b=Array.from(arguments),R=[],T=[];function We(le){R.push(le)}function vt(le){T.push(le)}Or(m,{args:b,name:w[Za],store:ne,after:We,onError:vt});let ke;try{ke=_.apply(this&&this.$id===t?this:ne,b)}catch(le){throw Or(T,le),le}return ke instanceof Promise?ke.then(le=>(Or(R,le),le)).catch(le=>(Or(T,le),Promise.reject(le))):(Or(R,ke),ke)};return w[Fh]=!0,w[Za]=y,w},H={_p:r,$id:t,$onAction:Uh.bind(null,m),$patch:D,$reset:$,$subscribe(_,y={}){const w=Uh(p,_,y.detached,()=>b()),b=a.run(()=>Bs(()=>r.state.value[t],R=>{(y.flush==="sync"?d:h)&&_({storeId:t,type:qs.direct,events:v},R)},Vn({},c,y)));return w},$dispose:j},ne=di(H);r._s.set(t,ne);const A=(r._a&&r._a.runWithContext||TE)(()=>r._e.run(()=>(a=Ld()).run(()=>e({action:B}))));for(const _ in A){const y=A[_];if(je(y)&&!AE(y)||Bn(y))i||(C&&wE(y)&&(je(y)?y.value=C[_]:Rl(y,C[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=B(y,_);A[_]=w,l.actions[_]=y}}return Vn(ne,A),Vn(Ae(ne),A),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:_=>{D(y=>{Vn(y,_)})}}),r._p.forEach(_=>{Vn(ne,a.run(()=>_({store:ne,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(ne.$state,C),h=!0,d=!0,ne}/*! #__NO_SIDE_EFFECTS__ */function RE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,l){const c=uv();return a=a||(c?Xt(qp,null):null),a&&oa(a),a=$p,a._s.has(t)||(s?zp(t,e,r,a):bE(t,r,a)),a._s.get(t)}return i.$id=t,i}const ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},SE={name:"App"},PE={id:"app"};function CE(t,e,n,r,s,i){const a=pp("router-view");return ut(),_t("div",PE,[e[0]||(e[0]=ue("h1",null,"Hello from App.vue",-1)),yt(a)])}const Kp=ls(SE,[["render",CE],["__scopeId","data-v-e2053939"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof document<"u";function Wp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Wp(t.default)}const be=Object.assign;function el(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Hs=()=>{},Ht=Array.isArray,Gp=/#/g,VE=/&/g,DE=/\//g,OE=/=/g,NE=/\?/g,Qp=/\+/g,xE=/%5B/g,ME=/%5D/g,Jp=/%5E/g,LE=/%60/g,Yp=/%7B/g,UE=/%7C/g,Xp=/%7D/g,FE=/%20/g;function Tc(t){return encodeURI(""+t).replace(UE,"|").replace(xE,"[").replace(ME,"]")}function jE(t){return Tc(t).replace(Yp,"{").replace(Xp,"}").replace(Jp,"^")}function Sl(t){return Tc(t).replace(Qp,"%2B").replace(FE,"+").replace(Gp,"%23").replace(VE,"%26").replace(LE,"`").replace(Yp,"{").replace(Xp,"}").replace(Jp,"^")}function BE(t){return Sl(t).replace(OE,"%3D")}function $E(t){return Tc(t).replace(Gp,"%23").replace(NE,"%3F")}function qE(t){return t==null?"":$E(t).replace(DE,"%2F")}function ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const HE=/\/$/,zE=t=>t.replace(HE,"");function tl(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=QE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ni(a)}}function KE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yr(e.matched[r],n.matched[s])&&Zp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!GE(t[n],e[n]))return!1;return!0}function GE(t,e){return Ht(t)?Bh(t,e):Ht(e)?Bh(e,t):t===e}function Bh(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function QE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function JE(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zE(t)}const YE=/^[^#]+#/;function XE(t,e){return t.replace(YE,"#")+e}function ZE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const aa=()=>({left:window.scrollX,top:window.scrollY});function eT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ZE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $h(t,e){return(history.state?history.state.position-e:-1)+t}const Pl=new Map;function tT(t,e){Pl.set(t,e)}function nT(t){const e=Pl.get(t);return Pl.delete(t),e}let rT=()=>location.protocol+"//"+location.host;function eg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),jh(c,"")}return jh(n,t)+r+s}function sT(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const v=eg(t,location),C=n.value,V=e.value;let D=0;if(m){if(n.value=v,e.value=m,a&&a===C){a=null;return}D=V?m.position-V.position:0}else r(v);s.forEach($=>{$(n.value,C,{delta:D,type:ri.pop,direction:D?D>0?zs.forward:zs.back:zs.unknown})})};function c(){a=n.value}function h(m){s.push(m);const v=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:aa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function qh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?aa():null}}function iT(t){const{history:e,location:n}=window,r={value:eg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:rT()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function a(c,h){const d=be({},e.state,qh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=be({},s.value,e.state,{forward:c,scroll:aa()});i(d.current,d,!0);const p=be({},qh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function oT(t){t=JE(t);const e=iT(t),n=sT(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:XE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function aT(t){return typeof t=="string"||t&&typeof t=="object"}function tg(t){return typeof t=="string"||typeof t=="symbol"}const ng=Symbol("");var Hh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hh||(Hh={}));function Xr(t,e){return be(new Error,{type:t,[ng]:!0},e)}function hn(t,e){return t instanceof Error&&ng in t&&(e==null||!!(t.type&e))}const zh="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},cT=/[.+*?^${}()[\]/\\]/g;function uT(t,e){const n=be({},lT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(cT,"\\$&"),v+=40;else if(m.type===1){const{value:C,repeatable:V,optional:D,regexp:$}=m;i.push({name:C,repeatable:V,optional:D});const j=$||zh;if(j!==zh){v+=10;try{new RegExp(`(${j})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+H.message)}}let B=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(B=D&&h.length<2?`(?:/${B})`:"/"+B),D&&(B+="?"),s+=B,v+=20,D&&(v+=-8),V&&(v+=-20),j===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",C=i[m-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:C,repeatable:V,optional:D}=v,$=C in h?h[C]:"";if(Ht($)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=Ht($)?$.join("/"):$;if(!j)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function hT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Kh(r))return 1;if(Kh(s))return-1}return s.length-r.length}function Kh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fT={type:0,value:""},dT=/[a-zA-Z0-9_]/;function pT(t){if(!t)return[[]];if(t==="/")return[[fT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:dT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function gT(t,e,n){const r=uT(pT(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mT(t,e){const n=[],r=new Map;e=Jh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const C=!v,V=Gh(p);V.aliasOf=v&&v.record;const D=Jh(e,p),$=[V];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of H)$.push(Gh(be({},V,{components:v?v.record.components:V.components,path:ne,aliasOf:v?v.record:V})))}let j,B;for(const H of $){const{path:ne}=H;if(m&&ne[0]!=="/"){const ge=m.record.path,A=ge[ge.length-1]==="/"?"":"/";H.path=m.record.path+(ne&&A+ne)}if(j=gT(H,m,D),v?v.alias.push(j):(B=B||j,B!==j&&B.alias.push(j),C&&p.name&&!Qh(j)&&a(p.name)),sg(j)&&c(j),V.children){const ge=V.children;for(let A=0;A<ge.length;A++)i(ge[A],j,v&&v.children[A])}v=v||j}return B?()=>{a(B)}:Hs}function a(p){if(tg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=vT(p,n);n.splice(m,0,p),p.record.name&&!Qh(p)&&r.set(p.record.name,p)}function h(p,m){let v,C={},V,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Xr(1,{location:p});D=v.record.name,C=be(Wh(m.params,v.keys.filter(B=>!B.optional).concat(v.parent?v.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Wh(p.params,v.keys.map(B=>B.name))),V=v.stringify(C)}else if(p.path!=null)V=p.path,v=n.find(B=>B.re.test(V)),v&&(C=v.parse(V),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!v)throw Xr(1,{location:p,currentLocation:m});D=v.record.name,C=be({},m.params,p.params),V=v.stringify(C)}const $=[];let j=v;for(;j;)$.unshift(j.record),j=j.parent;return{name:D,path:V,params:C,matched:$,meta:yT($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Wh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yT(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Jh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;rg(t,e[i])<0?r=i:n=i+1}const s=ET(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ET(t){let e=t;for(;e=e.parent;)if(sg(e)&&rg(t,e)===0)return e}function sg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function TT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qp," "),a=i.indexOf("="),l=ni(a<0?i:i.slice(0,a)),c=a<0?null:ni(i.slice(a+1));if(l in e){let h=e[l];Ht(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Yh(t){let e="";for(let n in t){const r=t[n];if(n=BE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&Sl(i)):[r&&Sl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wT=Symbol(""),Xh=Symbol(""),Ic=Symbol(""),ig=Symbol(""),Cl=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Xr(4,{from:n,to:e})):m instanceof Error?c(m):aT(m)?c(Xr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function nl(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Wp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Nn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=kE(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Nn(v,n,r,a,l,s)()}))}}return i}function Zh(t){const e=Xt(Ic),n=Xt(ig),r=Ct(()=>{const c=qr(t.to);return e.resolve(c)}),s=Ct(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Yr.bind(null,d));if(m>-1)return m;const v=ef(c[h-2]);return h>1&&ef(d)===v&&p[p.length-1].path!==v?p.findIndex(Yr.bind(null,c[h-2])):m}),i=Ct(()=>s.value>-1&&PT(n.params,r.value.params)),a=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&Zp(n.params,r.value.params));function l(c={}){if(ST(c)){const h=e[qr(t.replace)?"replace":"push"](qr(t.to)).catch(Hs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function AT(t){return t.length===1?t[0]:t}const bT=cp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zh,setup(t,{slots:e}){const n=di(Zh(t)),{options:r}=Xt(Ic),s=Ct(()=>({[tf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[tf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&AT(e.default(n));return t.custom?i:Up("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RT=bT;function ST(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function ef(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tf=(t,e,n)=>t??e??n,CT=cp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(Cl),s=Ct(()=>t.route||r.value),i=Xt(Xh,0),a=Ct(()=>{let h=qr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ct(()=>s.value.matched[a.value]);to(Xh,Ct(()=>a.value+1)),to(wT,l),to(Cl,s);const c=pi();return Bs(()=>[c.value,l.value,t.name],([h,d,p],[m,v,C])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!Yr(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return nf(n.default,{Component:m,route:h});const v=p.props[d],C=v?v===!0?h.params:typeof v=="function"?v(h):v:null,D=Up(m,be({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return nf(n.default,{Component:D,route:h})||D}}});function nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kT=CT;function VT(t){const e=mT(t.routes,t),n=t.parseQuery||TT,r=t.stringifyQuery||Yh,s=t.history,i=ks(),a=ks(),l=ks(),c=Sy(Cn);let h=Cn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=el.bind(null,O=>""+O),p=el.bind(null,qE),m=el.bind(null,ni);function v(O,J){let G,X;return tg(O)?(G=e.getRecordMatcher(O),X=J):X=O,e.addRoute(X,G)}function C(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,J){if(J=be({},J||c.value),typeof O=="string"){const S=tl(n,O,J.path),N=e.resolve({path:S.path},J),L=s.createHref(S.fullPath);return be(S,N,{params:m(N.params),hash:ni(S.hash),redirectedFrom:void 0,href:L})}let G;if(O.path!=null)G=be({},O,{path:tl(n,O.path,J.path).path});else{const S=be({},O.params);for(const N in S)S[N]==null&&delete S[N];G=be({},O,{params:p(S)}),J.params=p(J.params)}const X=e.resolve(G,J),Ie=O.hash||"";X.params=d(m(X.params));const E=KE(r,be({},O,{hash:jE(Ie),path:X.path})),I=s.createHref(E);return be({fullPath:E,hash:Ie,query:r===Yh?IT(O.query):O.query||{}},X,{redirectedFrom:void 0,href:I})}function j(O){return typeof O=="string"?tl(n,O,c.value.path):be({},O)}function B(O,J){if(h!==O)return Xr(8,{from:J,to:O})}function H(O){return A(O)}function ne(O){return H(be(j(O),{replace:!0}))}function ge(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let X=typeof G=="function"?G(O):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=j(X):{path:X},X.params={}),be({query:O.query,hash:O.hash,params:X.path!=null?{}:O.params},X)}}function A(O,J){const G=h=$(O),X=c.value,Ie=O.state,E=O.force,I=O.replace===!0,S=ge(G);if(S)return A(be(j(S),{state:typeof S=="object"?be({},Ie,S.state):Ie,force:E,replace:I}),J||G);const N=G;N.redirectedFrom=J;let L;return!E&&WE(r,X,G)&&(L=Xr(16,{to:N,from:X}),Dt(X,X,!0,!1)),(L?Promise.resolve(L):w(N,X)).catch(x=>hn(x)?hn(x,2)?x:Ft(x):_e(x,N,X)).then(x=>{if(x){if(hn(x,2))return A(be({replace:I},j(x.to),{state:typeof x.to=="object"?be({},Ie,x.to.state):Ie,force:E}),J||N)}else x=R(N,X,!0,I,Ie);return b(N,X,x),x})}function _(O,J){const G=B(O,J);return G?Promise.reject(G):Promise.resolve()}function y(O){const J=An.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function w(O,J){let G;const[X,Ie,E]=DT(O,J);G=nl(X.reverse(),"beforeRouteLeave",O,J);for(const S of X)S.leaveGuards.forEach(N=>{G.push(Nn(N,O,J))});const I=_.bind(null,O,J);return G.push(I),Et(G).then(()=>{G=[];for(const S of i.list())G.push(Nn(S,O,J));return G.push(I),Et(G)}).then(()=>{G=nl(Ie,"beforeRouteUpdate",O,J);for(const S of Ie)S.updateGuards.forEach(N=>{G.push(Nn(N,O,J))});return G.push(I),Et(G)}).then(()=>{G=[];for(const S of E)if(S.beforeEnter)if(Ht(S.beforeEnter))for(const N of S.beforeEnter)G.push(Nn(N,O,J));else G.push(Nn(S.beforeEnter,O,J));return G.push(I),Et(G)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),G=nl(E,"beforeRouteEnter",O,J,y),G.push(I),Et(G))).then(()=>{G=[];for(const S of a.list())G.push(Nn(S,O,J));return G.push(I),Et(G)}).catch(S=>hn(S,8)?S:Promise.reject(S))}function b(O,J,G){l.list().forEach(X=>y(()=>X(O,J,G)))}function R(O,J,G,X,Ie){const E=B(O,J);if(E)return E;const I=J===Cn,S=xr?history.state:{};G&&(X||I?s.replace(O.fullPath,be({scroll:I&&S&&S.scroll},Ie)):s.push(O.fullPath,Ie)),c.value=O,Dt(O,J,G,I),Ft()}let T;function We(){T||(T=s.listen((O,J,G)=>{if(!zt.listening)return;const X=$(O),Ie=ge(X);if(Ie){A(be(Ie,{replace:!0,force:!0}),X).catch(Hs);return}h=X;const E=c.value;xr&&tT($h(E.fullPath,G.delta),aa()),w(X,E).catch(I=>hn(I,12)?I:hn(I,2)?(A(be(j(I.to),{force:!0}),X).then(S=>{hn(S,20)&&!G.delta&&G.type===ri.pop&&s.go(-1,!1)}).catch(Hs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),_e(I,X,E))).then(I=>{I=I||R(X,E,!1),I&&(G.delta&&!hn(I,8)?s.go(-G.delta,!1):G.type===ri.pop&&hn(I,20)&&s.go(-1,!1)),b(X,E,I)}).catch(Hs)}))}let vt=ks(),ke=ks(),le;function _e(O,J,G){Ft(O);const X=ke.list();return X.length?X.forEach(Ie=>Ie(O,J,G)):console.error(O),Promise.reject(O)}function Rt(){return le&&c.value!==Cn?Promise.resolve():new Promise((O,J)=>{vt.add([O,J])})}function Ft(O){return le||(le=!O,We(),vt.list().forEach(([J,G])=>O?G(O):J()),vt.reset()),O}function Dt(O,J,G,X){const{scrollBehavior:Ie}=t;if(!xr||!Ie)return Promise.resolve();const E=!G&&nT($h(O.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return ta().then(()=>Ie(O,J,E)).then(I=>I&&eT(I)).catch(I=>_e(I,O,J))}const xe=O=>s.go(O);let Me;const An=new Set,zt={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:t,push:H,replace:ne,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:ke.add,isReady:Rt,install(O){const J=this;O.component("RouterLink",RT),O.component("RouterView",kT),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>qr(c)}),xr&&!Me&&c.value===Cn&&(Me=!0,H(s.location).catch(Ie=>{}));const G={};for(const Ie in Cn)Object.defineProperty(G,Ie,{get:()=>c.value[Ie],enumerable:!0});O.provide(Ic,J),O.provide(ig,Zd(G)),O.provide(Cl,c);const X=O.unmount;An.add(O),O.unmount=function(){An.delete(O),An.size<1&&(h=Cn,T&&T(),T=null,c.value=Cn,Me=!1,le=!1),X()}}};function Et(O){return O.reduce((J,G)=>J.then(()=>y(G)),Promise.resolve())}return zt}function DT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Yr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Yr(h,c))||s.push(c))}return[n,r,s]}const wc=RE("user",{state:()=>({currentUser:null}),actions:{async fetchCurrentUser(){try{const e=await(await fetch("/api/user")).json();this.currentUser=e}catch(t){console.error("Failed to fetch user:",t)}}}}),OT={data(){return{email:"",password:"",errorMessage:""}},methods:{async handleLogin(){await wc().login(this.email,this.password)?this.$router.push("/dashboard"):this.errorMessage="Invalid email or password"}}},NT={class:"login-container"},xT={key:0,class:"error"};function MT(t,e,n,r,s,i){const a=pp("router-link");return ut(),_t("div",NT,[ue("form",{onSubmit:e[2]||(e[2]=jp((...l)=>i.handleLogin&&i.handleLogin(...l),["prevent"]))},[Us(ue("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.email=l),type:"email",placeholder:"Email",required:""},null,512),[[bo,s.email]]),Us(ue("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",placeholder:"Password",required:""},null,512),[[bo,s.password]]),e[3]||(e[3]=ue("button",{type:"submit"},"Login",-1)),s.errorMessage?(ut(),_t("p",xT,wt(s.errorMessage),1)):xv("",!0)],32),yt(a,{to:"/register"},{default:lp(()=>e[4]||(e[4]=[xp("Don't have an account? Register here")])),_:1})])}const LT=ls(OT,[["render",MT],["__scopeId","data-v-7e4c37a0"]]),UT={class:"dashboard"},FT={key:0},jT={key:1},BT={__name:"Dashboard",setup(t){const e=wc(),n=Ct(()=>e.currentUser),r=pi(null);return yc(async()=>{n.value||await e.fetchCurrentUser();try{const s=await fetch(`/api/stats/${e.currentUser.id}`);r.value=await s.json()}catch(s){console.error("Failed to load stats:",s)}}),(s,i)=>{var a;return ut(),_t("div",UT,[ue("h1",null,"Welcome, "+wt(((a=n.value)==null?void 0:a.name)||"User")+"!",1),r.value?(ut(),_t("section",FT,[i[0]||(i[0]=ue("h2",null,"Your Stats",-1)),ue("ul",null,[ue("li",null,"Steps Today: "+wt(r.value.steps),1),ue("li",null,"Calories Burned: "+wt(r.value.calories),1),ue("li",null,"Workout Time: "+wt(r.value.minutes)+" minutes",1)])])):(ut(),_t("section",jT,i[1]||(i[1]=[ue("p",null,"Loading stats...",-1)])))])}}},$T=ls(BT,[["__scopeId","data-v-e4870a30"]]),qT=()=>{};var rf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},HT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,a||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new zT;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KT=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},So=function(t){return KT(t).replace(/\./g,"")},lg=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=()=>WT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof rf>"u")return;const t=rf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lg(t[1]);return e&&JSON.parse(e)},la=()=>{try{return qT()||GT()||QT()||JT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cg=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YT=t=>{const e=cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ug=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},hg=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[So(JSON.stringify(n)),So(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function tI(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return!tI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cI,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?uI(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new wn(s,l,r)}}function uI(t,e){return t.replace(hI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hI=/\{\$([^}]+)}/g;function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(sf(i)&&sf(a)){if(!vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rl),s.error===void 0&&(s.error=rl),s.complete===void 0&&(s.complete=rl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(t){return t===hr?void 0:t}function yI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const EI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},TI=ye.INFO,II={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},wI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=II[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=wI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const AI=(t,e)=>e.some(n=>t instanceof n);let of,af;function bI(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,kl=new WeakMap,dg=new WeakMap,sl=new WeakMap,bc=new WeakMap;function SI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n($n(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),bc.set(e,t),e}function PI(t){if(kl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});kl.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CI(t){Vl=t(Vl)}function kI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(il(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),$n(r)}:RI().includes(t)?function(...e){return t.apply(il(this),e),$n(fg.get(this))}:function(...e){return $n(t.apply(il(this),e))}}function VI(t){return typeof t=="function"?kI(t):(t instanceof IDBTransaction&&PI(t),AI(t,bI())?new Proxy(t,Vl):t)}function $n(t){if(t instanceof IDBRequest)return SI(t);if(sl.has(t))return sl.get(t);const e=VI(t);return e!==t&&(sl.set(t,e),bc.set(e,t)),e}const il=t=>bc.get(t);function DI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=$n(a);return r&&a.addEventListener("upgradeneeded",c=>{r($n(a.result),c.oldVersion,c.newVersion,$n(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const OI=["get","getKey","getAll","getAllKeys","count"],NI=["put","add","delete","clear"],ol=new Map;function lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=NI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||OI.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ol.set(e,i),i}CI(t=>({...t,get:(e,n,r)=>lf(e,n)||t.get(e,n,r),has:(e,n)=>!!lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",cf="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ac("@firebase/app"),LI="@firebase/app-compat",UI="@firebase/analytics-compat",FI="@firebase/analytics",jI="@firebase/app-check-compat",BI="@firebase/app-check",$I="@firebase/auth",qI="@firebase/auth-compat",HI="@firebase/database",zI="@firebase/data-connect",KI="@firebase/database-compat",WI="@firebase/functions",GI="@firebase/functions-compat",QI="@firebase/installations",JI="@firebase/installations-compat",YI="@firebase/messaging",XI="@firebase/messaging-compat",ZI="@firebase/performance",ew="@firebase/performance-compat",tw="@firebase/remote-config",nw="@firebase/remote-config-compat",rw="@firebase/storage",sw="@firebase/storage-compat",iw="@firebase/firestore",ow="@firebase/vertexai",aw="@firebase/firestore-compat",lw="firebase",cw="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="[DEFAULT]",uw={[Dl]:"fire-core",[LI]:"fire-core-compat",[FI]:"fire-analytics",[UI]:"fire-analytics-compat",[BI]:"fire-app-check",[jI]:"fire-app-check-compat",[$I]:"fire-auth",[qI]:"fire-auth-compat",[HI]:"fire-rtdb",[zI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[WI]:"fire-fn",[GI]:"fire-fn-compat",[QI]:"fire-iid",[JI]:"fire-iid-compat",[YI]:"fire-fcm",[XI]:"fire-fcm-compat",[ZI]:"fire-perf",[ew]:"fire-perf-compat",[tw]:"fire-rc",[nw]:"fire-rc-compat",[rw]:"fire-gcs",[sw]:"fire-gcs-compat",[iw]:"fire-fst",[aw]:"fire-fst-compat",[ow]:"fire-vertex","fire-js":"fire-js",[lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,hw=new Map,Nl=new Map;function uf(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Nl.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of Po.values())uf(n,t);for(const n of hw.values())uf(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new _i("app","Firebase",fw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=cw;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ol,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=ug()),!n)throw qn.create("no-options");const i=Po.get(s);if(i){if(vr(n,i.options)&&vr(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const a=new vI(s);for(const c of Nl.values())a.addComponent(c);const l=new dw(n,r,a);return Po.set(s,l),l}function gg(t=Ol){const e=Po.get(t);if(!e&&t===Ol&&ug())return pg();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=uw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Zr(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebase-heartbeat-database",gw=1,si="firebase-heartbeat-store";let al=null;function mg(){return al||(al=DI(pw,gw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(si)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),al}async function mw(t){try{const n=(await mg()).transaction(si),r=await n.objectStore(si).get(_g(t));return await n.done,r}catch(e){if(e instanceof wn)_n.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function hf(t,e){try{const r=(await mg()).transaction(si,"readwrite");await r.objectStore(si).put(e,_g(t)),await r.done}catch(n){if(n instanceof wn)_n.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=1024,yw=30;class vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ff();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>yw){const a=Iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ff(),{heartbeatsToSend:r,unsentEntries:s}=Ew(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _n.warn(n),""}}}function ff(){return new Date().toISOString().substring(0,10)}function Ew(t,e=_w){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function df(t){return So(JSON.stringify({version:2,heartbeats:t})).length}function Iw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t){Zr(new Er("platform-logger",e=>new xI(e),"PRIVATE")),Zr(new Er("heartbeat",e=>new vw(e),"PRIVATE")),Hn(Dl,cf,t),Hn(Dl,cf,"esm2017"),Hn("fire-js","")}ww("");var Aw="firebase",bw="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(Aw,bw,"app");var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,yg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function y(){}y.prototype=_.prototype,A.D=_.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),We=2;We<arguments.length;We++)T[We-2]=arguments[We];return _.prototype[b].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=A.g[0],y=A.g[1],b=A.g[2];var R=A.g[3],T=_+(R^y&(b^R))+w[0]+3614090360&4294967295;_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[3]+3250441966&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[7]+4249261313&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[11]+2304563134&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[15]+1236535329&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(b^R&(y^b))+w[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[0]+3921069994&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[4]+3889429448&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[8]+1163531501&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[12]+2368359562&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(y^b^R)+w[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[14]+4259657740&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[10]+3200236656&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[6]+76029189&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[2]+3299628645&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(b^(y|~R))+w[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[5]+4237533241&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[1]+2240044497&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[13]+1309151649&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var y=_-this.blockSize,w=this.B,b=this.h,R=0;R<_;){if(b==0)for(;R<=y;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<_;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<_;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var y=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=y&255,y/=256;for(this.u(A),A=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)A[y++]=this.g[_]>>>w&255;return A};function i(A,_){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=_(A)}function a(A,_){this.h=_;for(var y=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==_||(y[b]=R,w=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var _=[],y=1,w=0;A>=y;w++)_[w]=A/y|0,y*=4294967296;return new a(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),_);8>R?(R=h(Math.pow(_,R)),w=w.j(R).add(h(T))):(w=w.j(y),w=w.add(h(T)))}return w}var p=c(0),m=c(1),v=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-D(this).m();for(var A=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);A+=(0<=w?w:4294967296+w)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(V(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),y=this,w="";;){var b=H(y,_).g;y=$(y,b.j(_));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=b,C(y))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=$(this,A),V(A)?-1:C(A)?0:1};function D(A){for(var _=A.g.length,y=[],w=0;w<_;w++)y[w]=~A.g[w];return new a(y,~A.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0,b=0;b<=_;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,y[b]=T<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(A,_){return A.add(D(_))}t.j=function(A){if(C(this)||C(A))return p;if(V(this))return V(A)?D(this).j(D(A)):D(D(this).j(A));if(V(A))return D(this.j(D(A)));if(0>this.l(v)&&0>A.l(v))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,We=A.i(b)>>>16,vt=A.i(b)&65535;y[2*w+2*b]+=T*vt,j(y,2*w+2*b),y[2*w+2*b+1]+=R*vt,j(y,2*w+2*b+1),y[2*w+2*b+1]+=T*We,j(y,2*w+2*b+1),y[2*w+2*b+2]+=R*We,j(y,2*w+2*b+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new a(y,0)};function j(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function B(A,_){this.g=A,this.h=_}function H(A,_){if(C(_))throw Error("division by zero");if(C(A))return new B(p,p);if(V(A))return _=H(D(A),_),new B(D(_.g),D(_.h));if(V(_))return _=H(A,D(_)),new B(D(_.g),_.h);if(30<A.g.length){if(V(A)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=_;0>=w.l(A);)y=ne(y),w=ne(w);var b=ge(y,1),R=ge(w,1);for(w=ge(w,2),y=ge(y,2);!C(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(y),R=T),w=ge(w,1),y=ge(y,1)}return _=$(A,b.j(_)),new B(b,_)}for(b=p;0<=A.l(_);){for(y=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(y),T=R.j(_);V(T)||0<T.l(A);)y-=w,R=h(y),T=R.j(_);C(R)&&(R=m),b=b.add(R),A=$(A,T)}return new B(b,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&A.i(w);return new a(y,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|A.i(w);return new a(y,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^A.i(w);return new a(y,this.h^A.h)};function ne(A){for(var _=A.g.length+1,y=[],w=0;w<_;w++)y[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(y,A.h)}function ge(A,_){var y=_>>5;_%=32;for(var w=A.g.length-y,b=[],R=0;R<w;R++)b[R]=0<_?A.i(R+y)>>>_|A.i(R+y+1)<<32-_:A.i(R+y);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,zn=a}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vg,Ds,Eg,so,xl,Tg,Ig,wg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ki=="object"&&Ki];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var k=f++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,k){for(var K=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)K[Pe-2]=arguments[Pe];return u.prototype[P].apply(g,K)}}function V(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,k=g.length||0;o.length=P+k;for(let K=0;K<k;K++)o[P+K]=g[K]}else o.push(g)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ne=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ge(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let k=0;k<y.length;k++)f=y[k],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class We{constructor(){this.h=this.g=null}add(u,f){const g=vt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var vt=new $(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,_e=!1,Rt=new We,Ft=()=>{const o=l.Promise.resolve(void 0);le=()=>{o.then(Dt)}};var Dt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){R(f)}var u=vt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function zt(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ne){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Et[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&zt.aa.h.call(this)}}C(zt,Me);var Et={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(o,u,f,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o){this.src=o,this.g={},this.h=0}Ie.prototype.add=function(o,u,f,g,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var K=I(o,u,g,P);return-1<K?(u=o[K],f||(u.fa=!1)):(u=new G(u,this.src,k,!!g,P),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(g,P,1),k&&(X(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function I(o,u,f,g){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function L(o,u,f,g,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(o,u[k],f,g,P);return null}return f=ae(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!1,P):x(o,u,f,!1,g,P)}function x(o,u,f,g,P,k){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Pe=Q(o);if(Pe||(o[S]=Pe=new Ie(o)),f=Pe.add(u,f,g,K,k),f.proxy)return f;if(g=W(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)An||(P=K),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=re;return o}function z(o,u,f,g,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(o,u[k],f,g,P);else g=h(g)?!!g.capture:!!g,f=ae(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],f=I(k,f,g,P),-1<f&&(X(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,f,g,P)),(f=-1<o?u[o]:null)&&q(f))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])E(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Q(u))?(E(f,o),f.h==0&&(f.src=null,u[S]=null)):X(o)}}}function F(o){return o in N?N[o]:N[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new zt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&q(o),o=f.call(g,u)}return o}function Q(o){return o=o[S],o instanceof Ie?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function se(){xe.call(this),this.i=new Ie(this),this.M=this,this.F=null}C(se,xe),se.prototype[O]=!0,se.prototype.removeEventListener=function(o,u,f,g){z(this,o,u,f,g)};function pe(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var P=u;u=new Me(g,o),w(u,P)}if(P=!0,f)for(var k=f.length-1;0<=k;k--){var K=u.g=f[k];P=Ee(K,g,!0,u)&&P}if(K=u.g=o,P=Ee(K,g,!0,u)&&P,P=Ee(K,g,!1,u)&&P,f)for(k=0;k<f.length;k++)K=u.g=f[k],P=Ee(K,g,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)X(f[g]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},se.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ee(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==f){var Pe=K.listener,Je=K.ha||K.src;K.fa&&E(o.i,K),P=Pe.call(Je,g)!==!1&&P}}return P&&!g.defaultPrevented}function tt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ge(o){o.g=tt(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ot extends xe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){xe.call(this),this.h=o,this.g={}}C(nt,xe);var bn=[];function gs(o){ge(o.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),gs(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=l.JSON.stringify,Nt=l.JSON.parse,Si=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Pa(){}Pa.prototype.h=null;function mu(o){return o.h||(o.h=o.i())}function _u(){}var ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ca(){Me.call(this,"d")}C(Ca,Me);function ka(){Me.call(this,"c")}C(ka,Me);var sr={},yu=null;function Pi(){return yu=yu||new se}sr.La="serverreachability";function vu(o){Me.call(this,sr.La,o)}C(vu,Me);function _s(o){const u=Pi();pe(u,new vu(u))}sr.STAT_EVENT="statevent";function Eu(o,u){Me.call(this,sr.STAT_EVENT,o),this.stat=u}C(Eu,Me);function dt(o){const u=Pi();pe(u,new Eu(u,o))}sr.Ma="timingevent";function Tu(o,u){Me.call(this,sr.Ma,o),this.size=u}C(Tu,Me);function ys(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function vs(){this.g=!0}vs.prototype.xa=function(){this.g=!1};function b_(o,u,f,g,P,k){o.info(function(){if(o.g)if(k)for(var K="",Pe=k.split("&"),Je=0;Je<Pe.length;Je++){var we=Pe[Je].split("=");if(1<we.length){var rt=we[0];we=we[1];var st=rt.split("_");K=2<=st.length&&st[1]=="type"?K+(rt+"="+we+"&"):K+(rt+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+K})}function R_(o,u,f,g,P,k,K){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+k+" "+K})}function Pr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+P_(o,f)+(g?" "+g:"")})}function S_(o,u){o.info(function(){return"TIMEOUT: "+u})}vs.prototype.info=function(){};function P_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Qe(f)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function ki(){}C(ki,Pa),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Va=new ki;function Rn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wu}function wu(){this.i=null,this.g="",this.h=!1}var Au={},Da={};function Oa(o,u,f){o.L=1,o.v=Ni(ln(u)),o.m=f,o.P=!0,bu(o,null)}function bu(o,u){o.F=Date.now(),Vi(o),o.A=ln(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Fu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new wu,o.g=rh(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ot(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(bn[0]=P.toString()),P=bn);for(var k=0;k<P.length;k++){var K=L(f,P[k],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),_s(),b_(o.i,o.u,o.A,o.l,o.R,o.m)}Rn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)e:{const st=cn(this.g);var u=this.g.Ba();const Vr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||st!=4||u==7||(u==8||0>=Vr?_s(3):_s(2)),Na(this);var f=this.g.Z();this.X=f;t:if(Ru(this)){var g=Ku(this.g);o="";var P=g.length,k=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Es(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,R_(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Je=this.g;if((Pe=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Pe)){var we=Pe;break t}}we=null}if(f=we)Pr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,f);else{this.o=!1,this.s=3,dt(12),ir(this),Es(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<K.length;)if(jt=C_(this,K),jt==Da){st==4&&(this.s=4,dt(14),f=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Au){this.s=4,dt(15),Pr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Pr(this.i,this.l,jt,null),xa(this,jt);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||K.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Pr(this.i,this.l,K,"[Invalid Chunked Response]"),ir(this),Es(this);else if(0<K.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Ba(rt),rt.M=!0,dt(11))}}else Pr(this.i,this.l,K,null),xa(this,K);st==4&&ir(this),this.o&&!this.J&&(st==4?Zu(this.j,this):(this.o=!1,Vi(this)))}else K_(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),ir(this),Es(this)}}}catch{}finally{}};function Ru(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function C_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Da:(f=Number(u.substring(f,g)),isNaN(f)?Au:(g+=1,g+f>u.length?Da:(u=u.slice(g,g+f),o.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,ir(this)};function Vi(o){o.S=Date.now()+o.I,Su(o,o.I)}function Su(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ys(m(o.ba,o),u)}function Na(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Rn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(S_(this.i,this.A),this.L!=2&&(_s(),dt(17)),ir(this),this.s=2,Es(this)):Su(this,this.S-o)};function Es(o){o.j.G==0||o.J||Zu(o.j,o)}function ir(o){Na(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,gs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function xa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ma(f.h,o))){if(!o.K&&Ma(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ji(f),Ui(f);else break e;ja(f),dt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ys(m(f.Za,f),6e3));if(1>=ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((o.K||f.g==o)&&ji(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const rt=we[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const st=we[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const Vr=we[5];Vr!=null&&typeof Vr=="number"&&0<Vr&&(g=1.5*Vr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jt=o.g;if(jt){const $i=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var k=g.h;k.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(La(k,k.h),k.h=null))}if(g.D){const $a=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(g.ya=$a,Oe(g.I,g.D,$a))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=o;if(g.qa=nh(g,g.J?g.ia:null,g.W),K.K){Vu(g.h,K);var Pe=K,Je=g.L;Je&&(Pe.I=Je),Pe.B&&(Na(Pe),Vi(Pe)),g.g=K}else Yu(g);0<f.i.length&&Fi(f)}else we[0]!="stop"&&we[0]!="close"||ar(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ar(f,7):Fa(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}_s(4)}catch{}}var k_=class{constructor(o,u){this.g=o,this.map=u}};function Pu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ku(o){return o.h?1:o.g?o.g.size:0}function Ma(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function La(o,u){o.g?o.g.add(u):o.h=u}function Vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Pu.prototype.cancel=function(){if(this.i=Du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Du(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return V(o.i)}function V_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function D_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Ou(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=D_(o),g=V_(o),P=g.length,k=0;k<P;k++)u.call(void 0,g[k],f&&f[k],o)}var Nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var k=o[f].substring(0,g);P=o[f].substring(g+1)}else k=o[f];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,Di(this,o.j),this.o=o.o,this.g=o.g,Oi(this,o.s),this.l=o.l;var u=o.i,f=new ws;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),xu(this,f),this.m=o.m}else o&&(u=String(o).match(Nu))?(this.h=!1,Di(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Oi(this,u[4]),this.l=Ts(u[5]||"",!0),xu(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Is(u,Mu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Is(u,Mu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Is(f,f.charAt(0)=="/"?M_:x_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Is(f,U_)),o.join("")};function ln(o){return new or(o)}function Di(o,u,f){o.j=f?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Oi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function xu(o,u,f){u instanceof ws?(o.i=u,F_(o.i,o.h)):(f||(u=Is(u,L_)),o.i=new ws(u,o.h))}function Oe(o,u,f){o.i.set(u,f)}function Ni(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Is(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,N_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function N_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,x_=/[#\?:]/g,M_=/[#\?]/g,L_=/[#\?@]/g,U_=/#/g;function ws(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Sn(o){o.g||(o.g=new Map,o.h=0,o.i&&O_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ws.prototype,t.add=function(o,u){Sn(this),this.i=null,o=Cr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Lu(o,u){Sn(o),u=Cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Uu(o,u){return Sn(o),u=Cr(o,u),o.g.has(u)}t.forEach=function(o,u){Sn(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){Sn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=o[g];for(let k=0;k<P.length;k++)f.push(u[g])}return f},t.V=function(o){Sn(this);let u=[];if(typeof o=="string")Uu(this,o)&&(u=u.concat(this.g.get(Cr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Sn(this),this.i=null,o=Cr(this,o),Uu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Fu(o,u,f){Lu(o,u),0<f.length&&(o.i=null,o.g.set(Cr(o,u),V(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var P=k;K[g]!==""&&(P+="="+encodeURIComponent(String(K[g]))),o.push(P)}}return this.i=o.join("&")};function Cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function F_(o,u){u&&!o.j&&(Sn(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Lu(this,g),Fu(this,P,f))},o)),o.j=u}function j_(o,u){const f=new vs;if(l.Image){const g=new Image;g.onload=v(Pn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(Pn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(Pn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(Pn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function B_(o,u){const f=new vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Pn(f,"TestPingServer: ok",!0,u):Pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Pn(f,"TestPingServer: error",!1,u)})}function Pn(o,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function $_(){this.g=new Si}function q_(o,u,f){const g=f||"";try{Ou(o,function(P,k){let K=P;h(P)&&(K=Qe(P)),u.push(g+k+"="+encodeURIComponent(K))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function xi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(xi,Pa),xi.prototype.g=function(){return new Mi(this.l,this.j)},xi.prototype.i=function(o){return function(){return o}}({});function Mi(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Mi,se),t=Mi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,bs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ju(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ju(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?As(this):bs(this),this.readyState==3&&ju(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,As(this))},t.Qa=function(o){this.g&&(this.response=o,As(this))},t.ga=function(){this.g&&As(this)};function As(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function bs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bu(o){let u="";return ge(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ua(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Bu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Oe(o,u,f))}function Ue(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ue,se);var H_=/^https?$/i,z_=["POST","PUT"];t=Ue.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?mu(this.o):mu(Va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){$u(this,k);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(z_,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of f)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){$u(this,k)}};function $u(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qu(o),Li(o)}function qu(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pe(this,"complete"),pe(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},t.bb=function(){Hu(this)};function Hu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)tt(o.Ea,0,o);else if(pe(o,"readystatechange"),cn(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=K===0){var P=String(o.D).match(Nu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!H_.test(P?P.toLowerCase():"")}f=g}if(f)pe(o,"complete"),pe(o,"success");else{o.m=6;try{var k=2<cn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",qu(o)}}finally{Li(o)}}}}function Li(o,u){if(o.g){zu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||pe(o,"ready");try{f.onreadystatechange=g}catch{}}}function zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Nt(u)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function K_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var f=b(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[P]||[];u[P]=k,k.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Wu(o){this.Aa=0,this.i=[],this.j=new vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,o),this.cb=Rs("retryDelaySeedMs",1e4,o),this.Wa=Rs("forwardChannelMaxRetries",2,o),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pu(o&&o.concurrentRequestLimit),this.Da=new $_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=nh(this,null,this.W),Fi(this)};function Fa(o){if(Gu(o),o.G==3){var u=o.U++,f=ln(o.I);if(Oe(f,"SID",o.K),Oe(f,"RID",u),Oe(f,"TYPE","terminate"),Ss(o,f),u=new Rn(o,o.j,u),u.L=2,u.v=Ni(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vi(u)}th(o)}function Ui(o){o.g&&(Ba(o),o.g.cancel(),o.g=null)}function Gu(o){Ui(o),o.u&&(l.clearTimeout(o.u),o.u=null),ji(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Fi(o){if(!Cu(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||Ft(),_e||(le(),_e=!0),Rt.add(u,o),o.B=0}}function W_(o,u){return ku(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ys(m(o.Ga,o,u),eh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Rn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=_(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,P,u),f=ln(this.I),Oe(f,"RID",o),Oe(f,"CVER",22),this.D&&Oe(f,"X-HTTP-Session-Id",this.D),Ss(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(Bu(k)))+"&"+u:this.m&&Ua(f,this.m,k)),La(this.h,P),this.Ua&&Oe(f,"TYPE","init"),this.P?(Oe(f,"$req",u),Oe(f,"SID","null"),P.T=!0,Oa(P,f,null)):Oa(P,f,u),this.G=2}}else this.G==3&&(o?Qu(this,o):this.i.length==0||Cu(this.h)||Qu(this))};function Qu(o,u){var f;u?f=u.l:f=o.U++;const g=ln(o.I);Oe(g,"SID",o.K),Oe(g,"RID",f),Oe(g,"AID",o.T),Ss(o,g),o.m&&o.o&&Ua(g,o.m,o.o),f=new Rn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ju(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),La(o.h,f),Oa(f,g,u)}function Ss(o,u){o.H&&ge(o.H,function(f,g){Oe(u,g,f)}),o.l&&Ou({},function(f,g){Oe(u,g,f)})}function Ju(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const K=["count="+f];k==-1?0<f?(k=P[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Pe=!0;for(let Je=0;Je<f;Je++){let we=P[Je].g;const rt=P[Je].map;if(we-=k,0>we)k=Math.max(0,P[Je].g-100),Pe=!1;else try{q_(rt,K,"req"+we+"_")}catch{g&&g(rt)}}if(Pe){g=K.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Yu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||Ft(),_e||(le(),_e=!0),Rt.add(u,o),o.v=0}}function ja(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ys(m(o.Fa,o),eh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ys(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Ui(this),Xu(this))};function Ba(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Xu(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ln(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),Ss(o,u),o.m&&o.o&&Ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ni(ln(u)),f.m=null,f.P=!0,bu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Ui(this),ja(this),dt(19))};function ji(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Zu(o,u){var f=null;if(o.g==u){ji(o),Ba(o),o.g=null;var g=2}else if(Ma(o.h,u))f=u.D,Vu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=Pi(),pe(g,new Tu(g,f)),Fi(o)}else Yu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&W_(o,u)||g==2&&ja(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function eh(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ar(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const P=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Di(g,"https"),Ni(g),P?j_(g.toString(),f):B_(g.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),th(o),Gu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function th(o){if(o.G=0,o.ka=[],o.l){const u=Du(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function nh(o,u,f){var g=f instanceof or?ln(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),Oi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new or(null);g&&Di(k,g),u&&(k.g=u),P&&Oi(k,P),f&&(k.l=f),g=k}return f=o.D,u=o.ya,f&&u&&Oe(g,f,u),Oe(g,"VER",o.la),Ss(o,g),g}function rh(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new xi({eb:f})):new Ue(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bi(){}Bi.prototype.g=function(o,u){return new St(o,u)};function St(o,u){se.call(this),this.g=new Wu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}C(St,se),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Fa(this.g)},St.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new k_(u.Ya++,o)),u.G==3&&Fi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,St.aa.N.call(this)};function ih(o){Ca.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(ih,Ca);function oh(){ka.call(this),this.status=1}C(oh,ka);function kr(o){this.g=o}C(kr,sh),kr.prototype.ua=function(){pe(this.g,"a")},kr.prototype.ta=function(o){pe(this.g,new ih(o))},kr.prototype.sa=function(o){pe(this.g,new oh)},kr.prototype.ra=function(){pe(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,wg=function(){return new Bi},Ig=function(){return Pi()},Tg=sr,xl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,so=Ci,Iu.COMPLETE="complete",Eg=Iu,_u.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",se.prototype.listen=se.prototype.K,Ds=_u,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,vg=Ue}).apply(typeof Ki<"u"?Ki:typeof self<"u"?self:typeof window<"u"?window:{});const gf="@firebase/firestore",mf="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Ac("@firebase/firestore");function Mr(){return Tr.logLevel}function Y(t,...e){if(Tr.logLevel<=ye.DEBUG){const n=e.map(Sc);Tr.debug(`Firestore (${us}): ${t}`,...n)}}function yn(t,...e){if(Tr.logLevel<=ye.ERROR){const n=e.map(Sc);Tr.error(`Firestore (${us}): ${t}`,...n)}}function es(t,...e){if(Tr.logLevel<=ye.WARN){const n=e.map(Sc);Tr.warn(`Firestore (${us}): ${t}`,...n)}}function Sc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ag(t,r,n)}function Ag(t,e,n){let r=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ag(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Sw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pw{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class Cw{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kw{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Cw(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _f{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vw{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _f(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _f(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ml(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return me(r,s);{const i=Rg(),a=Ow(i.encode(yf(t,n)),i.encode(yf(e,n)));return a!==0?a:me(r,s)}}n+=r>65535?2:1}return me(t.length,e.length)}function yf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Ow(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=-62135596800,Ef=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ef);return new He(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<vf)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ef}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-vf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new He(0,0))}static max(){return new he(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Gt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),s=Gt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):Ml(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Ne extends Gt{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Gt{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return Nw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tf}static keyField(){return new Ze([Tf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ee(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ne.fromString(e))}static fromName(e){return new te(Ne.fromString(e).popFirst(5))}static empty(){return new te(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=-1;function xw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Gn(s,te.empty(),e)}function Mw(t){return new Gn(t.readTime,t.key,ii)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(he.min(),te.empty(),ii)}static max(){return new Gn(he.max(),te.empty(),ii)}}function Lw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Uw)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function jw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ca.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=-1;function ua(t){return t==null}function Co(t){return t===0&&1/t==-1/0}function Bw(t){return typeof t=="number"&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="";function $w(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=If(e)),e=qw(t.get(n),e);return If(e)}function qw(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Pg:n+="";break;default:n+=i}}return n}function If(t){return t+Pg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Af(this.data.getIterator())}getIteratorFrom(e){return new Af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ze(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kg("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Hw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=Hw.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="server_timestamp",Dg="__type__",Og="__previous_value__",Ng="__local_write_time__";function Cc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dg])===null||n===void 0?void 0:n.stringValue)===Vg}function ha(t){const e=t.mapValue.fields[Og];return Cc(e)?ha(e):e}function oi(t){const e=Qn(t.mapValue.fields[Ng].timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const ko="(default)";class ai{constructor(e,n){this.projectId=e,this.database=n||ko}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database===ko}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="__type__",Kw="__max__",Gi={mapValue:{}},Mg="__vector__",Vo="value";function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cc(t)?4:Gw(t)?9007199254740991:Ww(t)?10:11:ie(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qn(s.timestampValue),l=Qn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Fe(s.doubleValue),l=Fe(i.doubleValue);return a===l?Co(a)===Co(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wf(a)!==wf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!on(a[c],l[c])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function li(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Fe(i.integerValue||i.doubleValue),c=Fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bf(t.timestampValue,e.timestampValue);case 4:return bf(oi(t),oi(e));case 5:return Ml(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Jn(i),c=Jn(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=me(l[h],c[h]);if(d!==0)return d}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=me(Fe(i.latitude),Fe(a.latitude));return l!==0?l:me(Fe(i.longitude),Fe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},v=(l=p[Vo])===null||l===void 0?void 0:l.arrayValue,C=(c=m[Vo])===null||c===void 0?void 0:c.arrayValue,V=me(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Rf(v,C)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Gi.mapValue&&a===Gi.mapValue)return 0;if(i===Gi.mapValue)return 1;if(a===Gi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ml(c[p],d[p]);if(m!==0)return m;const v=ns(l[c[p]],h[d[p]]);if(v!==0)return v}return me(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{Pe:n})}}function bf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Qn(t),r=Qn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Rf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function rs(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ll(n.fields[a])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function io(t){switch(Yn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ha(t);return e?16+io(e):16;case 5:return 2*t.stringValue.length;case 6:return Jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+io(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return nr(r.fields,(i,a)=>{s+=i.length+io(a)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function Ul(t){return!!t&&"integerValue"in t}function kc(t){return!!t&&"arrayValue"in t}function Sf(t){return!!t&&"nullValue"in t}function Pf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oo(t){return!!t&&"mapValue"in t}function Ww(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[xg])===null||n===void 0?void 0:n.stringValue)===Mg}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Kw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ks(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){nr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ks(this.value))}}function Lg(t){const e=[];return nr(t.fields,(n,r)=>{const s=new Ze([n]);if(oo(r)){const i=Lg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,he.min(),he.min(),he.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,he.min(),he.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,he.min(),he.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.position=e,this.inclusive=n}}function Cf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(a.referenceValue),n.key):r=ns(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{}class qe extends Ug{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yw(e,n,r):n==="array-contains"?new eA(e,r):n==="in"?new tA(e,r):n==="not-in"?new nA(e,r):n==="array-contains-any"?new rA(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Xw(e,r):new Zw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ns(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Ug{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new an(e,n)}matches(e){return Fg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Fg(t){return t.op==="and"}function jg(t){return Jw(t)&&Fg(t)}function Jw(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Fl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(jg(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function Bg(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Bg(a,s.filters[l]),!0):!1}(t,e):void ie(19439)}function $g(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map($g).join(" ,")+"}"}(t):"Filter"}class Yw extends qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xw extends qe{constructor(e,n){super(e,"in",n),this.keys=qg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zw extends qe{constructor(e,n){super(e,"not-in",n),this.keys=qg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class eA extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kc(n)&&li(n.arrayValue,this.value)}}class tA extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class nA extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!li(this.value.arrayValue,n)}}class rA extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function Vf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new sA(t,e,n,r,s,i,a)}function Vc(t){const e=fe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.Ie=n}return e.Ie}function Dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function jl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function iA(t,e,n,r,s,i,a,l){return new fa(t,e,n,r,s,i,a,l)}function Hg(t){return new fa(t)}function Df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oA(t){return t.collectionGroup!==null}function Ws(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ze(Ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Oo(i,r))}),n.has(Ze.keyField().canonicalString())||e.Ee.push(new Oo(Ze.keyField(),r))}return e.Ee}function Zt(t){const e=fe(t);return e.de||(e.de=aA(e,Ws(t))),e.de}function aA(t,e){if(t.limitType==="F")return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)});const n=t.endAt?new Do(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Do(t.startAt.position,t.startAt.inclusive):null;return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bl(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Dc(Zt(t),Zt(e))&&t.limitType===e.limitType}function zg(t){return`${Vc(Zt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$g(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Cf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ws(r),s)||r.endAt&&!function(a,l,c){const h=Cf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ws(r),s))}(t,e)}function lA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kg(t){return(e,n)=>{let r=!1;for(const s of Ws(t)){const i=cA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cA(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ns(c,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new Le(te.comparator);function vn(){return uA}const Wg=new Le(te.comparator);function Os(...t){let e=Wg;for(const n of t)e=e.insert(n.key,n);return e}function Gg(t){let e=Wg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Gs()}function Qg(){return Gs()}function Gs(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const hA=new Le(te.comparator),fA=new ze(te.comparator);function ve(...t){let e=fA;for(const n of t)e=e.add(n);return e}const dA=new ze(me);function pA(){return dA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function Jg(t){return{integerValue:""+t}}function gA(t,e){return Bw(e)?Jg(e):Oc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this._=void 0}}function mA(t,e,n){return t instanceof No?function(s,i){const a={fields:{[Dg]:{stringValue:Vg},[Ng]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cc(i)&&(i=ha(i)),i&&(a.fields[Og]=i),{mapValue:a}}(n,e):t instanceof ci?Xg(t,e):t instanceof ui?Zg(t,e):function(s,i){const a=Yg(s,i),l=Of(a)+Of(s.Re);return Ul(a)&&Ul(s.Re)?Jg(l):Oc(s.serializer,l)}(t,e)}function _A(t,e,n){return t instanceof ci?Xg(t,e):t instanceof ui?Zg(t,e):n}function Yg(t,e){return t instanceof xo?function(r){return Ul(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class No extends ga{}class ci extends ga{constructor(e){super(),this.elements=e}}function Xg(t,e){const n=em(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends ga{constructor(e){super(),this.elements=e}}function Zg(t,e){let n=em(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class xo extends ga{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Of(t){return Fe(t.integerValue||t.doubleValue)}function em(t){return kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ci&&s instanceof ci||r instanceof ui&&s instanceof ui?ts(r.elements,s.elements,on):r instanceof xo&&s instanceof xo?on(r.Re,s.Re):r instanceof No&&s instanceof No}(t.transform,e.transform)}class vA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function tm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nc(t.key,qt.none()):new vi(t.key,t.data,qt.none());{const n=t.data,r=It.empty();let s=new ze(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rr(t.key,r,new Vt(s.toArray()),qt.none())}}function EA(t,e,n){t instanceof vi?function(s,i,a){const l=s.value.clone(),c=xf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,i,a){if(!ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=xf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(nm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof vi?function(i,a,l,c){if(!ao(i.precondition,a))return l;const h=i.value.clone(),d=Mf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(i,a,l,c){if(!ao(i.precondition,a))return l;const h=Mf(i.fieldTransforms,c,a),d=a.data;return d.setAll(nm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function TA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Yg(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,a)=>yA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vi extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xf(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,_A(a,l,n[s]))}return r}function Mf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,mA(i,a,e))}return r}class Nc extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IA extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=tm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Nf(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Nf(n,r))}}class xc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return hA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,Te;function RA(t){switch(t){case U.OK:return ie(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function rm(t){if(t===void 0)return yn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Be.OK:return U.OK;case Be.CANCELLED:return U.CANCELLED;case Be.UNKNOWN:return U.UNKNOWN;case Be.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Be.INTERNAL:return U.INTERNAL;case Be.UNAVAILABLE:return U.UNAVAILABLE;case Be.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Be.NOT_FOUND:return U.NOT_FOUND;case Be.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Be.ABORTED:return U.ABORTED;case Be.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Be.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:t})}}(Te=Be||(Be={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new zn([4294967295,4294967295],0);function Lf(t){const e=Rg().encode(t),n=new yg;return n.update(e),new Uint8Array(n.digest())}function Uf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([n,r],0),new zn([s,i],0)]}class Mc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ns(`Invalid padding: ${n}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=zn.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(zn.fromNumber(r)));return s.compare(SA)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Lf(e),[r,s]=Uf(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Mc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const n=Lf(e),[r,s]=Uf(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(he.min(),s,new Le(me),vn(),ve())}}class Ei{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ei(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class sm{constructor(e,n){this.targetId=e,this.Ce=n}}class im{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ff{constructor(){this.Fe=0,this.Me=jf(),this.xe=et.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ve(),n=ve(),r=ve();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new Ei(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=jf()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class PA{constructor(e){this.ze=e,this.je=new Map,this.He=vn(),this.Je=Qi(),this.Ye=Qi(),this.Ze=new Le(me)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(jl(i))if(r===0){const a=new te(i.path);this.tt(n,a,ct.newNoDocument(a,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const a=this.ut(n);if(a!==r){const l=this.ct(e),c=l?this.lt(l,e,a):1;if(c!==0){this.st(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Jn(r).toUint8Array()}catch(c){if(c instanceof kg)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Mc(a,s,i)}catch(c){return es(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&jl(l.target)){const c=new te(l.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,ct.newNoDocument(c,e))}i.Le&&(n.set(a,i.qe()),i.Qe())}});let r=ve();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new _a(e,n,this.Ze,this.He,r);return this.He=vn(),this.Je=Qi(),this.Ye=Qi(),this.Ze=new Le(me),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ff,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ze(me),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ze(me),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ff),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Qi(){return new Le(te.comparator)}function jf(){return new Le(te.comparator)}const CA={asc:"ASCENDING",desc:"DESCENDING"},kA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VA={and:"AND",or:"OR"};class DA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function Mo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function om(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OA(t,e){return Mo(t,e.toTimestamp())}function en(t){return Se(!!t,49232),he.fromTimestamp(function(n){const r=Qn(n);return new He(r.seconds,r.nanos)}(t))}function Lc(t,e){return ql(t,e).canonicalString()}function ql(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function am(t){const e=Ne.fromString(t);return Se(fm(e),10190,{key:e.toString()}),e}function Hl(t,e){return Lc(t.databaseId,e.path)}function ll(t,e){const n=am(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(cm(n))}function lm(t,e){return Lc(t.databaseId,e)}function NA(t){const e=am(t);return e.length===4?Ne.emptyPath():cm(e)}function zl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cm(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Bf(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function xA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Se(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?U.UNKNOWN:rm(h.code);return new ee(d,h.message||"")}(a);n=new im(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ll(t,r.document.name),i=en(r.document.updateTime),a=r.document.createTime?en(r.document.createTime):he.min(),l=new It({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new lo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ll(t,r.document),i=r.readTime?en(r.readTime):he.min(),a=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new lo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ll(t,r.document),i=r.removedTargetIds||[];n=new lo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new bA(s,i),l=r.targetId;n=new sm(l,a)}}return n}function MA(t,e){let n;if(e instanceof vi)n={update:Bf(t,e.key,e.value)};else if(e instanceof Nc)n={delete:Hl(t,e.key)};else if(e instanceof rr)n={update:Bf(t,e.key,e.data),updateMask:zA(e.fieldMask)};else{if(!(e instanceof IA))return ie(16599,{ft:e.type});n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof No)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ci)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ui)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw ie(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function LA(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?en(s.updateTime):en(i);return a.isEqual(he.min())&&(a=en(i)),new vA(a,s.transformResults||[])}(n,e))):[]}function UA(t,e){return{documents:[lm(t,e.path)]}}function FA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lm(t,s);const i=function(h){if(h.length!==0)return hm(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Ur(m.field),direction:$A(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=$l(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function jA(t){let e=NA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=um(p);return m instanceof an&&jg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(C){return new Oo(Fr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ua(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Do(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Do(v,m)}(n.endAt)),iA(e,s,a,i,l,"F",c,h)}function BA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>um(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function $A(t){return CA[t]}function qA(t){return kA[t]}function HA(t){return VA[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return Ze.fromServerFormat(t.fieldPath)}function hm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Pf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(Sf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(Sf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:qA(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>hm(s));return r.length===1?r[0]:{compositeFilter:{op:HA(n.op),filters:r}}}(t):ie(54877,{filter:t})}function zA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r,s,i=he.min(),a=he.min(),l=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.wt=e}}function WA(t){const e=jA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.yn=new QA}addToCollectionParentIndex(e,n){return this.yn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Gn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class QA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dm=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(dm,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new ss(0)}static ir(){return new ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="LruGarbageCollector",JA=1048576;function Hf([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class YA{constructor(e){this.cr=e,this.buffer=new ze(Hf),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){Y(qf,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?Y(qf,"Ignoring IndexedDB error during garbage collection: ",n):await hs(n)}await this.Ir(3e5)})}}class ZA{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ca.le);const r=new YA(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve($f)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$f):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Mr()<=ye.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function e0(t,e){return new ZA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Vt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Os();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=vn();const a=Gs(),l=function(){return Gs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof rr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qs(d.mutation,h,d.mutation.getFieldMask(),He.now())):a.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new n0(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Le((a,l)=>a-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Vt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Qg();d.forEach(m=>{if(!i.has(m)){const v=tm(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return te.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(dr());let l=ii,c=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ve())).next(d=>({batchId:l,changes:Gg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Os();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new fa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))});let l=Os();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Qs(d.mutation,h,Vt.empty(),He.now()),pa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return M.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:WA(s.bundledQuery),readTime:en(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.overlays=new Le(te.comparator),this.Or=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,a=new te(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new AA(n,r));let i=this.Or.get(n);i===void 0&&(i=ve(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.Nr=new ze(Ke.Br),this.Lr=new ze(Ke.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Ke(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new te(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Lr.forEachInRange([r,s],a=>{this.Qr(a),i.push(a.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new te(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=ve();return this.Lr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return te.comparator(e.key,n.key)||me(e.Gr,n.Gr)}static kr(e,n){return me(e.Gr,n.Gr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new ze(Ke.Br)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.zr=this.zr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Pc:this.Jn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],a=>{const l=this.jr(a.Gr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(me);return n.forEach(s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,a],l=>{r=r.add(l.Gr)})}),M.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new te(i),0);let l=new ze(me);return this.zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Gr)),!0)},a),M.resolve(this.Jr(l))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return M.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Ke(n,0),s=this.zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.Zr=e,this.docs=function(){return new Le(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const a=n.path,l=new te(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Lw(Mw(d),r)<=0||(s.has(d.key)||pa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}Xr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new c0(this)}getSize(e){return M.resolve(this.size)}}class c0 extends t0{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.persistence=e,this.ei=new Rr(n=>Vc(n),Dc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ti=0,this.ni=new Uc,this.targetCount=0,this.ri=ss.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),M.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.ar(n),M.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ei.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.ii={},this.overlays={},this.si=new ca(0),this.oi=!1,this.oi=!0,this._i=new o0,this.referenceDelegate=e(this),this.ai=new u0(this),this.indexManager=new GA,this.remoteDocumentCache=function(s){return new l0(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new KA(n),this.ci=new s0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new a0(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new h0(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return M.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class h0 extends Fw{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.Ti=new Uc,this.Ii=null}static Ei(e){return new Fc(e)}get di(){if(this.Ii)return this.Ii;throw ie(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=te.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return M.or([()=>M.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Lo{constructor(e,n){this.persistence=e,this.Ri=new Rr(r=>$w(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=e0(this,n)}static Ei(e,n){return new Lo(e,n)}li(){}hi(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return M.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,a=>this.gr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),M.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=io(e.data.value)),n}gr(e,n,r){return M.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return oI()?8:jw(ft())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new f0;return this.fs(e,n,a).next(l=>{if(i.result=l,this.Is)return this.gs(e,n,a,l.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(Mr()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),M.resolve()):(Mr()<=ye.DEBUG&&Y("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Mr()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):M.resolve())}Rs(e,n){if(Df(n))return M.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bl(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ve(...i);return this.As.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ps(n,l);return this.ys(n,h,a,c.readTime)?this.Rs(e,Bl(n,null,"F")):this.ws(e,h,n,c)}))})))}Vs(e,n,r,s){return Df(n)||s.isEqual(he.min())?M.resolve(null):this.As.getDocuments(e,r).next(i=>{const a=this.ps(n,i);return this.ys(n,a,r,s)?M.resolve(null):(Mr()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.ws(e,a,n,xw(s,ii)).next(l=>l))})}ps(e,n){let r=new ze(Kg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return Mr()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.As.getDocumentsMatchingQuery(e,n,Gn.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="LocalStore",p0=3e8;class g0{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Le(me),this.Ds=new Rr(i=>Vc(i),Dc),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r0(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function m0(t,e,n,r){return new g0(t,e,n,r)}async function gm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ve();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ms:h,removedBatchIds:a,addedBatchIds:l}))})})}function _0(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let v=M.resolve();return m.forEach(C=>{v=v.next(()=>d.getEntry(c,C)).next(V=>{const D=h.docVersions.get(C);Se(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function mm(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function y0(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.ai.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(et.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=p0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,v,d)&&l.push(n.ai.updateTargetData(i,v))});let c=vn(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(v0(i,a,e.documentUpdates).next(d=>{c=d.xs,h=d.Os})),!r.isEqual(he.min())){const d=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ss=s,i))}function v0(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=vn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Y(Bc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{xs:a,Os:s}})}function E0(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function T0(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.ai.allocateTargetId(r).next(a=>(s=new Fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=fe(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fs(a))throw a;Y(Bc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function zf(t,e,n){const r=fe(t);let s=he.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=fe(c),m=p.Ds.get(d);return m!==void 0?M.resolve(p.Ss.get(m)):p.ai.getTargetData(h,d)}(r,a,Zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.bs.getDocumentsMatchingQuery(a,e,n?s:he.min(),n?i:ve())).next(l=>(I0(r,lA(e),l),{documents:l,Ns:i})))}function I0(t,e,n){let r=t.vs.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Kf{constructor(){this.activeTargetIds=pA()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w0{constructor(){this.So=new Kf,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Kf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="ConnectivityMonitor";class Gf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){Y(Wf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){Y(Wf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function Wl(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="RestConnection",b0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class R0{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===ko?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const a=Wl(),l=this.$o(e,n.toUriEncodedString());Y(cl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(c,s,i),this.Ko(e,l,c,r).then(h=>(Y(cl,`Received RPC '${e}' ${a}: `,h),h),h=>{throw es(cl,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Wo(e,n,r,s,i,a){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=b0[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class P0 extends R0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=Wl();return new Promise((a,l)=>{const c=new vg;c.setWithCredentials(!0),c.listenOnce(Eg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case so.NO_ERROR:const d=c.getResponseJson();Y(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case so.TIMEOUT:Y(it,`RPC '${e}' ${i} timed out`),l(new ee(U.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const p=c.getStatus();if(Y(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf($)>=0?$:U.UNKNOWN}(v.status);l(new ee(C,v.message))}else l(new ee(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{s_:e,streamId:i,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{Y(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}a_(e,n,r){const s=Wl(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wg(),l=Ig(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(it,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,v=!1;const C=new S0({Go:D=>{v?Y(it,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Y(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(it,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},zo:()=>p.close()}),V=(D,$,j)=>{D.listen($,B=>{try{j(B)}catch(H){setTimeout(()=>{throw H},0)}})};return V(p,Ds.EventType.OPEN,()=>{v||(Y(it,`RPC '${e}' stream ${s} transport opened.`),C.t_())}),V(p,Ds.EventType.CLOSE,()=>{v||(v=!0,Y(it,`RPC '${e}' stream ${s} transport closed`),C.r_())}),V(p,Ds.EventType.ERROR,D=>{v||(v=!0,es(it,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.r_(new ee(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ds.EventType.MESSAGE,D=>{var $;if(!v){const j=D.data[0];Se(!!j,16349);const B=j,H=(B==null?void 0:B.error)||(($=B[0])===null||$===void 0?void 0:$.error);if(H){Y(it,`RPC '${e}' stream ${s} received error:`,H);const ne=H.status;let ge=function(y){const w=Be[y];if(w!==void 0)return rm(w)}(ne),A=H.message;ge===void 0&&(ge=U.INTERNAL,A="Unknown error status: "+ne+" with message "+H.message),v=!0,C.r_(new ee(ge,A)),p.close()}else Y(it,`RPC '${e}' stream ${s} received:`,j),C.i_(j)}}),V(l,Tg.STAT_EVENT,D=>{D.stat===xl.PROXY?Y(it,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===xl.NOPROXY&&Y(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return new DA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="PersistentStream";class ym{constructor(e,n,r,s,i,a,l,c){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new _m(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ee(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return Y(Qf,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(Y(Qf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C0 extends ym{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=xA(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?en(a.readTime):he.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=zl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=jl(c)?{documents:UA(i,c)}:{query:FA(i,c).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=om(i,a.resumeToken);const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){l.readTime=Mo(i,a.snapshotVersion.toTimestamp());const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=BA(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=zl(this.serializer),n.removeTarget=e,this.F_(n)}}class k0 extends ym{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=LA(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=zl(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MA(this.serializer,r))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{}class D0 extends V0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Qo(e,ql(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(U.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(e,ql(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(U.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class O0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(yn(n),this.ea=!1):Y("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="RemoteStore";class N0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(a=>{r.enqueueAndForget(async()=>{Sr(this)&&(Y(Ir,"Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.aa.add(4),await Ti(h),h.la.set("Unknown"),h.aa.delete(4),await va(h)}(this))})}),this.la=new O0(r,s)}}async function va(t){if(Sr(t))for(const e of t.ua)await e(!0)}async function Ti(t){for(const e of t.ua)await e(!1)}function vm(t,e){const n=fe(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),zc(n)?Hc(n):ds(n).b_()&&qc(n,e))}function $c(t,e){const n=fe(t),r=ds(n);n._a.delete(e),r.b_()&&Em(n,e),n._a.size===0&&(r.b_()?r.v_():Sr(n)&&n.la.set("Unknown"))}function qc(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).U_(e)}function Em(t,e){t.ha.Ke(e),ds(t).K_(e)}function Hc(t){t.ha=new PA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.la.ta()}function zc(t){return Sr(t)&&!ds(t).w_()&&t._a.size>0}function Sr(t){return fe(t).aa.size===0}function Tm(t){t.ha=void 0}async function x0(t){t.la.set("Online")}async function M0(t){t._a.forEach((e,n)=>{qc(t,e)})}async function L0(t,e){Tm(t),zc(t)?(t.la.ia(e),Hc(t)):t.la.set("Unknown")}async function U0(t,e,n){if(t.la.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s._a.delete(l),s.ha.removeTarget(l))}(t,e)}catch(r){Y(Ir,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(t,r)}else if(e instanceof lo?t.ha.Xe(e):e instanceof sm?t.ha.ot(e):t.ha.nt(e),!n.isEqual(he.min()))try{const r=await mm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.ha.It(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i._a.get(h);d&&i._a.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i._a.get(c);if(!d)return;i._a.set(c,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Em(i,c);const p=new Fn(d.target,c,h,d.sequenceNumber);qc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(Ir,"Failed to raise snapshot:",r),await Uo(t,r)}}async function Uo(t,e,n){if(!fs(e))throw e;t.aa.add(1),await Ti(t),t.la.set("Offline"),n||(n=()=>mm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(Ir,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await va(t)})}function Im(t,e){return e().catch(n=>Uo(t,n,e))}async function Ea(t){const e=fe(t),n=Xn(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Pc;for(;F0(e);)try{const s=await E0(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,j0(e,s)}catch(s){await Uo(e,s)}wm(e)&&Am(e)}function F0(t){return Sr(t)&&t.oa.length<10}function j0(t,e){t.oa.push(e);const n=Xn(t);n.b_()&&n.W_&&n.G_(e.mutations)}function wm(t){return Sr(t)&&!Xn(t).w_()&&t.oa.length>0}function Am(t){Xn(t).start()}async function B0(t){Xn(t).H_()}async function $0(t){const e=Xn(t);for(const n of t.oa)e.G_(n.mutations)}async function q0(t,e,n){const r=t.oa.shift(),s=xc.from(r,e,n);await Im(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function H0(t,e){e&&Xn(t).W_&&await async function(r,s){if(function(a){return RA(a)&&a!==U.ABORTED}(s.code)){const i=r.oa.shift();Xn(r).D_(),await Im(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),wm(t)&&Am(t)}async function Jf(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Y(Ir,"RemoteStore received new credentials");const r=Sr(n);n.aa.add(3),await Ti(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await va(n)}async function z0(t,e){const n=fe(t);e?(n.aa.delete(2),await va(n)):e||(n.aa.add(2),await Ti(n),n.la.set("Unknown"))}function ds(t){return t.Pa||(t.Pa=function(n,r,s){const i=fe(n);return i.Y_(),new C0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:x0.bind(null,t),Jo:M0.bind(null,t),Zo:L0.bind(null,t),Q_:U0.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),zc(t)?Hc(t):t.la.set("Unknown")):(await t.Pa.stop(),Tm(t))})),t.Pa}function Xn(t){return t.Ta||(t.Ta=function(n,r,s){const i=fe(n);return i.Y_(),new k0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:B0.bind(null,t),Zo:H0.bind(null,t),z_:$0.bind(null,t),j_:q0.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Ea(t)):(await t.Ta.stop(),t.oa.length>0&&(Y(Ir,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Kc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(t,e){if(yn("AsyncQueue",`${e}: ${t}`),fs(t))return new ee(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.Ia=new Le(te.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new is(e,n,Kr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class W0{constructor(){this.queries=Xf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Xf(),i.forEach((a,l)=>{for(const c of l.Ra)c.onError(r)})})(this,new ee(U.ABORTED,"Firestore shutting down"))}}function Xf(){return new Rr(t=>zg(t),da)}async function G0(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new K0,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Wc(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Gc(n)}async function Q0(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Ra.indexOf(e);a>=0&&(i.Ra.splice(a,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function J0(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Ra)l.pa(s)&&(r=!0);a.Aa=s}}r&&Gc(n)}function Y0(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Gc(t){t.fa.forEach(e=>{e.next()})}var Gl,Zf;(Zf=Gl||(Gl={})).ya="default",Zf.Cache="cache";class X0{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.key=e}}class Rm{constructor(e){this.key=e}}class Z0{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=ve(),this.mutatedKeys=ve(),this.Ua=Kg(e),this.Ka=new Kr(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Yf,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=pa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?C!==V&&(r.track({type:3,doc:v}),D=!0):this.ja(m,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.Ua(v,c)>0||h&&this.Ua(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(v?(a=a.add(v),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ka:a,za:r,ys:l,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const a=e.za.da();a.sort((d,p)=>function(v,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:D})}};return V(v)-V(C)}(d.type,p.type)||this.Ua(d.doc,p.doc)),this.Ha(r),s=s!=null&&s;const l=n&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,h=c!==this.Qa;return this.Qa=c,a.length!==0||h?{snapshot:new is(this.query,e.Ka,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Yf,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=ve(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new Rm(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new bm(r))}),n}Xa(e){this.qa=e.Ns,this.$a=ve();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return is.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Qc="SyncEngine";class eb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tb{constructor(e){this.key=e,this.tu=!1}}class nb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new Rr(l=>zg(l),da),this.iu=new Map,this.su=new Set,this.ou=new Le(te.comparator),this._u=new Map,this.au=new Uc,this.uu={},this.cu=new Map,this.lu=ss.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function rb(t,e,n=!0){const r=Dm(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Sm(r,e,n,!0),s}async function sb(t,e){const n=Dm(t);await Sm(n,e,!0,!1)}async function Sm(t,e,n,r){const s=await T0(t.localStore,Zt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ib(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&vm(t.remoteStore,s),l}async function ib(t,e,n,r,s){t.Pu=(p,m,v)=>async function(V,D,$,j){let B=D.view.Ga($);B.ys&&(B=await zf(V.localStore,D.query,!1).then(({documents:A})=>D.view.Ga(A,B)));const H=j&&j.targetChanges.get(D.targetId),ne=j&&j.targetMismatches.get(D.targetId)!=null,ge=D.view.applyChanges(B,V.isPrimaryClient,H,ne);return td(V,D.targetId,ge.Ya),ge.snapshot}(t,p,m,v);const i=await zf(t.localStore,e,!0),a=new Z0(e,i.Ns),l=a.Ga(i.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);td(t,n,h.Ya);const d=new eb(e,n,a);return t.ru.set(e,d),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),h.snapshot}async function ob(t,e,n){const r=fe(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(a=>!da(a,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$c(r.remoteStore,s.targetId),Ql(r,s.targetId)}).catch(hs)):(Ql(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function ab(t,e){const n=fe(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$c(n.remoteStore,r.targetId))}async function lb(t,e,n){const r=gb(t);try{const s=await function(a,l){const c=fe(a),h=He.now(),d=l.reduce((v,C)=>v.add(C.key),ve());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=vn(),V=ve();return c.Cs.getEntries(v,d).next(D=>{C=D,C.forEach(($,j)=>{j.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(D=>{p=D;const $=[];for(const j of l){const B=TA(j,p.get(j.key).overlayedDocument);B!=null&&$.push(new rr(j.key,B,Lg(B.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,$,l)}).next(D=>{m=D;const $=D.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(v,D.batchId,$)})}).then(()=>({batchId:m.batchId,changes:Gg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.uu[a.currentUser.toKey()];h||(h=new Le(me)),h=h.insert(l,c),a.uu[a.currentUser.toKey()]=h}(r,s.batchId,n),await Ii(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=Wc(s,"Failed to persist write");n.reject(i)}}async function Pm(t,e){const n=fe(t);try{const r=await y0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n._u.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?Se(a.tu,14607):s.removedDocuments.size>0&&(Se(a.tu,42227),a.tu=!1))}),await Ii(n,r,e)}catch(r){await hs(r)}}function ed(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,a)=>{const l=a.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=fe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Ra)m.ga(l)&&(h=!0)}),h&&Gc(c)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cb(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let a=new Le(te.comparator);a=a.insert(i,ct.newNoDocument(i,he.min()));const l=ve().add(i),c=new _a(he.min(),new Map,new Le(me),a,l);await Pm(r,c),r.ou=r.ou.remove(i),r._u.delete(e),Jc(r)}else await Kl(r.localStore,e,!1).then(()=>Ql(r,e,n)).catch(hs)}async function ub(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await _0(n.localStore,e);km(n,r,null),Cm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ii(n,s)}catch(s){await hs(s)}}async function hb(t,e,n){const r=fe(t);try{const s=await function(a,l){const c=fe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);km(r,e,n),Cm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ii(r,s)}catch(s){await hs(s)}}function Cm(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function km(t,e,n){const r=fe(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||Vm(t,r)})}function Vm(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&($c(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Jc(t))}function td(t,e,n){for(const r of n)r instanceof bm?(t.au.addReference(r.key,e),fb(t,r)):r instanceof Rm?(Y(Qc,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||Vm(t,r.key)):ie(19791,{Iu:r})}function fb(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(Y(Qc,"New document in limbo: "+n),t.su.add(r),Jc(t))}function Jc(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new te(Ne.fromString(e)),r=t.lu.next();t._u.set(r,new tb(n)),t.ou=t.ou.insert(n,r),vm(t.remoteStore,new Fn(Zt(Hg(n.path)),r,"TargetPurposeLimboResolution",ca.le))}}async function Ii(t,e,n){const r=fe(t),s=[],i=[],a=[];r.ru.isEmpty()||(r.ru.forEach((l,c)=>{a.push(r.Pu(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=jc.Ps(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.nu.Q_(s),await async function(c,h){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.ls,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.hs,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!fs(p))throw p;Y(Bc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.Ss.get(m),C=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(C);d.Ss=d.Ss.insert(m,V)}}}(r.localStore,i))}async function db(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Y(Qc,"User change. New user:",e.toKey());const r=await gm(n.localStore,e);n.currentUser=e,function(i,a){i.cu.forEach(l=>{l.forEach(c=>{c.reject(new ee(U.CANCELLED,a))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ii(n,r.Ms)}}function pb(t,e){const n=fe(t),r=n._u.get(e);if(r&&r.tu)return ve().add(r.key);{let s=ve();const i=n.iu.get(e);if(!i)return s;for(const a of i){const l=n.ru.get(a);s=s.unionWith(l.view.Wa)}return s}}function Dm(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cb.bind(null,e),e.nu.Q_=J0.bind(null,e.eventManager),e.nu.Tu=Y0.bind(null,e.eventManager),e}function gb(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ub.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hb.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return m0(this.persistence,new d0,e.initialUser,this.serializer)}Ru(e){return new pm(Fc.Ei,this.serializer)}Au(e){return new w0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class mb extends Fo{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Se(this.persistence.referenceDelegate instanceof Lo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new XA(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new pm(r=>Lo.Ei(r,n),this.serializer)}}class Jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ed(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=db.bind(null,this.syncEngine),await z0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new W0}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new P0(i)}(e.databaseInfo);return function(i,a,l,c){return new D0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new N0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ed(this.syncEngine,n,0),function(){return Gf.C()?new Gf:new A0}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new nb(s,i,a,l,c,h);return d&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);Y(Ir,"RemoteStore shutting down."),i.aa.add(5),await Ti(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jl.provider={build:()=>new Jl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class yb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vb(t);Y(Zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jf(e.remoteStore,s)),t._onlineComponents=e}async function vb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Zn,"Using user provided OfflineComponentProvider");try{await hl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await hl(t,new Fo)}}else Y(Zn,"Using default OfflineComponentProvider"),await hl(t,new mb(void 0));return t._offlineComponents}async function Om(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Zn,"Using user provided OnlineComponentProvider"),await nd(t,t._uninitializedComponentsProvider._online)):(Y(Zn,"Using default OnlineComponentProvider"),await nd(t,new Jl))),t._onlineComponents}function Eb(t){return Om(t).then(e=>e.syncEngine)}async function Tb(t){const e=await Om(t),n=e.eventManager;return n.onListen=rb.bind(null,e.syncEngine),n.onUnlisten=ob.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ab.bind(null,e.syncEngine),n}function Ib(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new _b({next:m=>{d.yu(),a.enqueueAndForget(()=>Q0(i,p)),m.fromCache&&c.source==="server"?h.reject(new ee(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new X0(l,d,{includeMetadataChanges:!0,Fa:!0});return G0(i,p)}(await Tb(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e,n){if(!n)throw new ee(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wb(t,e,n,r){if(e===!0&&r===!0)throw new ee(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sd(t){if(!te.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function id(t){if(te.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yc(t);throw new ee(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="firestore.googleapis.com",od=!0;class ad{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mm,this.ssl=od}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:od;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JA)throw new ee(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ta{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rw;switch(r.type){case"firstParty":return new kw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rd.get(n);r&&(Y("ComponentProvider","Removing Datastore"),rd.delete(n),r.terminate())}(this),Promise.resolve()}}function Ab(t,e,n,r={}){var s;const i=(t=wr(t,Ta))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Mm&&i.host!==l&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!vr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ot.MOCK_USER;else{h=ZT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ot(p)}t._authCredentials=new Sw(new bg(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Wn extends Ia{constructor(e,n,r){super(e,n,Hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new te(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function ld(t,e,...n){if(t=bt(t),xm("collection","path",e),t instanceof Ta){const r=Ne.fromString(e,...n);return id(r),new Wn(t,null,r)}{if(!(t instanceof Lt||t instanceof Wn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return id(r),new Wn(t.firestore,null,r)}}function Yl(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Sg.newId()),xm("doc","path",e),t instanceof Ta){const r=Ne.fromString(e,...n);return sd(r),new Lt(t,null,new te(r))}{if(!(t instanceof Lt||t instanceof Wn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return sd(r),new Lt(t.firestore,t instanceof Wn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="AsyncQueue";class ud{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new _m(this,"async_queue_retry"),this.ju=()=>{const r=ul();r&&Y(cd,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Kn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!fs(e))throw e;Y(cd,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,yn("INTERNAL UNHANDLED ERROR: ",hd(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=Kc.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ie(47125,{ec:hd(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function hd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class wi extends Ta{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ud(e),this._firestoreClient=void 0,await e}}}function bb(t,e){const n=typeof t=="object"?t:gg(),r=typeof t=="string"?t:ko,s=Rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=YT("firestore");i&&Ab(s,...i)}return s}function Lm(t){if(t._terminated)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Rb(t),t._firestoreClient}function Rb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new zw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Nm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(et.fromBase64String(e))}catch(n){throw new ee(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^__.*__$/;class Pb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vi(e,this.data,n,this.fieldTransforms)}}class Um{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{oc:t})}}class tu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return jo(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Fm(this.oc)&&Sb.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class Cb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}dc(e,n,r,s=!1){return new tu({oc:e,methodName:n,Ec:r,path:Ze.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jm(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new Cb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kb(t,e,n,r,s,i={}){const a=t.dc(i.merge||i.mergeFields?2:0,e,n,s);nu("Data must be an object, but it was:",a,r);const l=Bm(r,a);let c,h;if(i.merge)c=new Vt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Xl(e,p,n);if(!a.contains(m))throw new ee(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qm(d,m)||d.push(m)}c=new Vt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new Pb(new It(l),c,h)}class Aa extends Xc{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}function Vb(t,e,n,r){const s=t.dc(1,e,n);nu("Data must be an object, but it was:",s,r);const i=[],a=It.empty();nr(r,(c,h)=>{const d=ru(e,c,n);h=bt(h);const p=s.hc(d);if(h instanceof Aa)i.push(d);else{const m=ba(h,p);m!=null&&(i.push(d),a.set(d,m))}});const l=new Vt(i);return new Um(a,l,s.fieldTransforms)}function Db(t,e,n,r,s,i){const a=t.dc(1,e,n),l=[Xl(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Xl(e,i[m])),c.push(i[m+1]);const h=[],d=It.empty();for(let m=l.length-1;m>=0;--m)if(!qm(h,l[m])){const v=l[m];let C=c[m];C=bt(C);const V=a.hc(v);if(C instanceof Aa)h.push(v);else{const D=ba(C,V);D!=null&&(h.push(v),d.set(v,D))}}const p=new Vt(h);return new Um(d,p,a.fieldTransforms)}function ba(t,e){if($m(t=bt(t)))return nu("Unsupported field value:",e,t),Bm(t,e);if(t instanceof Xc)return function(r,s){if(!Fm(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=ba(l,s.Pc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Mo(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:om(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(a,l){return{mapValue:{fields:{[xg]:{stringValue:Mg},[Vo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Tc("VectorValues must only contain numeric values.");return Oc(l.serializer,h)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Yc(r)}`)}(t,e)}function Bm(t,e){const n={};return Cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(t,(r,s)=>{const i=ba(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $m(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Zc||t instanceof os||t instanceof Lt||t instanceof Xc||t instanceof eu)}function nu(t,e,n){if(!$m(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Yc(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Xl(t,e,n){if((e=bt(e))instanceof wa)return e._internalPath;if(typeof e=="string")return ru(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ob=new RegExp("[~\\*/\\[\\]]");function ru(t,e,n){if(e.search(Ob)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wa(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ee(U.INVALID_ARGUMENT,l+t+c)}function qm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nb extends Hm{data(){return super.data()}}function zm(t,e){return typeof e=="string"?ru(t,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mb{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return nr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Vo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Fe(a.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zc(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ha(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Se(fm(r),9688,{name:e});const s=new ai(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ub extends Hm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class co extends Ub{data(e={}){return super.data(e)}}class Fb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new co(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new co(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new co(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:jb(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}class Bb extends Mb{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function $b(t){t=wr(t,Ia);const e=wr(t.firestore,wi),n=Lm(e),r=new Bb(e);return xb(t._query),Ib(n,t._query).then(s=>new Fb(e,r,t,s))}function qb(t,e,n,...r){t=wr(t,Lt);const s=wr(t.firestore,wi),i=jm(s);let a;return a=typeof(e=bt(e))=="string"||e instanceof wa?Db(i,"updateDoc",t._key,e,n,r):Vb(i,"updateDoc",t._key,e),su(s,[a.toMutation(t._key,qt.exists(!0))])}function Hb(t){return su(wr(t.firestore,wi),[new Nc(t._key,qt.none())])}function zb(t,e){const n=wr(t.firestore,wi),r=Yl(t),s=Lb(t.converter,e);return su(n,[kb(jm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function su(t,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>lb(await Eb(r),s,i)),i.promise}(Lm(t),e)}(function(e,n=!0){(function(s){us=s})(cs),Zr(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new wi(new Pw(r.getProvider("auth-internal")),new Vw(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Hn(gf,mf,e),Hn(gf,mf,"esm2017")})();function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kb=Km,Wm=new _i("auth","Firebase",Km());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Ac("@firebase/auth");function Wb(t,...e){Bo.logLevel<=ye.WARN&&Bo.warn(`Auth (${cs}): ${t}`,...e)}function uo(t,...e){Bo.logLevel<=ye.ERROR&&Bo.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw ou(t,...e)}function tn(t,...e){return ou(t,...e)}function Gm(t,e,n){const r=Object.assign(Object.assign({},Kb()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return Gm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wm.create(t,...e)}function ce(t,e,...n){if(!t)throw ou(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function Tn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gb(){return fd()==="http:"||fd()==="https:"}function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gb()||rI()||"connection"in navigator)?navigator.onLine:!0}function Jb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=eI()||sI()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zb=new Ai(3e4,6e4);function lu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,s={}){return Jm(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=yi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return nI()||(h.referrerPolicy="no-referrer"),Qm.fetch()(await Ym(t,t.config.apiHost,n,l),h)})}async function Jm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yb),e);try{const s=new tR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Xi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Xi(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gm(t,d,h);En(t,d)}}catch(s){if(s instanceof wn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function eR(t,e,n,r,s={}){const i=await ps(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ym(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`;return Xb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class tR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Zb.get())})}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function $o(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rR(t,e=!1){const n=bt(t),r=await n.getIdToken(e),s=cu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(fl(s.auth_time)),issuedAtTime:Js(fl(s.iat)),expirationTime:Js(fl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=lg(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dd(t){const e=cu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&sR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,$o(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xm(i.providerUserInfo):[],l=aR(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function oR(t){const e=bt(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xm(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){const n=await Jm(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Ym(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qm.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cR(t,e){return ps(t,"POST","/v2/accounts:revokeToken",lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Wr;return r&&(ce(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rR(this,e)}reload(){return oR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await hi(this,nR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:H,isAnonymous:ne,providerData:ge,stsTokenManager:A}=n;ce(B&&A,e,"internal-error");const _=Wr.fromJSON(this.name,A);ce(typeof B=="string",e,"internal-error"),kn(p,e.name),kn(m,e.name),ce(typeof H=="boolean",e,"internal-error"),ce(typeof ne=="boolean",e,"internal-error"),kn(v,e.name),kn(C,e.name),kn(V,e.name),kn(D,e.name),kn($,e.name),kn(j,e.name);const y=new Bt({uid:B,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:ne,photoURL:C,phoneNumber:v,tenantId:V,stsTokenManager:_,createdAt:$,lastLoginAt:j});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(w=>Object.assign({},w))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wr;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wr;l.updateFromIdToken(r);const c=new Bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;function mn(t){Tn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zm.type="NONE";const gd=Zm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $o(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(mn(gd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(gd);const a=ho(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await $o(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,d)}else p=Bt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(o_(e))return"Webos";if(t_(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(s_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function e_(t=ft()){return/firefox\//i.test(t)}function t_(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(t=ft()){return/crios\//i.test(t)}function r_(t=ft()){return/iemobile/i.test(t)}function s_(t=ft()){return/android/i.test(t)}function i_(t=ft()){return/blackberry/i.test(t)}function o_(t=ft()){return/webos/i.test(t)}function uu(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uR(t=ft()){var e;return uu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hR(){return iI()&&document.documentMode===10}function a_(t=ft()){return uu(t)||s_(t)||o_(t)||i_(t)||/windows phone/i.test(t)||r_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e=[]){let n;switch(t){case"Browser":n=md(ft());break;case"Worker":n=`${md(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e={}){return ps(t,"GET","/v2/passwordPolicy",lu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=6;class gR{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:pR,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new fR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $o(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(mr(this));const n=e?bt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dR(this),n=new gR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hu(t){return bt(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _R(t){fu=t}function yR(t){return fu.loadJS(t)}function vR(){return fu.gapiScript}function ER(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vr(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function IR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wR(t,e,n){const r=hu(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=c_(e),{host:a,port:l}=AR(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(vr(h,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,bR()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AR(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yd(a)}}}function yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return eR(t,"POST","/v1/accounts:signInWithIdp",lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="http://localhost";class Ar extends u_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:RR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends h_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends bi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends bi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends bi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),a=vd(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vd(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ho(e,n,r,s)}}function f_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,i,e,r):i})}async function SR(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await hi(t,f_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const a=cu(i.idToken);ce(a,r,"internal-error");const{sub:l}=a;return ce(t.uid===l,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e,n=!1){if(Jt(t.app))return Promise.reject(mr(t));const r="signIn",s=await f_(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function kR(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function VR(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=1e3,OR=10;class p_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);hR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const NR=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const m_=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await xR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=du("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function LR(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function UR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jR(){return __()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firebaseLocalStorageDb",BR=1,Ko="firebaseLocalStorage",v_="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function $R(){const t=indexedDB.deleteDatabase(y_);return new Ri(t).toPromise()}function tc(){const t=indexedDB.open(y_,BR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ko,{keyPath:v_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ko)?e(r):(r.close(),await $R(),e(await tc()))})})}async function Ed(t,e,n){const r=Sa(t,!0).put({[v_]:e,value:n});return new Ri(r).toPromise()}async function qR(t,e){const n=Sa(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function Td(t,e){const n=Sa(t,!0).delete(e);return new Ri(n).toPromise()}const HR=800,zR=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(jR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UR(),!this.activeServiceWorker)return;this.sender=new MR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tc();return await Ed(e,zo,"1"),await Td(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ed(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Td(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new Ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const KR=E_;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t,e){return e?mn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends u_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GR(t){return CR(t.auth,new pu(t),t.bypassAuthState)}function QR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),PR(n,new pu(t),t.bypassAuthState)}async function JR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),SR(n,new pu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GR;case"linkViaPopup":case"linkViaRedirect":return JR;case"reauthViaPopup":case"reauthViaRedirect":return QR;default:En(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Ai(2e3,1e4);class jr extends T_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YR.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="pendingRedirect",fo=new Map;class ZR extends T_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=rS(e),r=nS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tS(t,e){fo.set(t._key(),e)}function nS(t){return mn(t._redirectPersistence)}function rS(t){return ho(XR,t.config.apiKey,t.name)}async function sS(t,e,n=!1){if(Jt(t.app))return Promise.reject(mr(t));const r=hu(t),s=WR(r,e),a=await new ZR(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=10*60*1e3;class oS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}}function Id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function hS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lS(t);for(const n of e)try{if(fS(n))return}catch{}En(t,"unauthorized-domain")}function fS(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!uS.test(n))return!1;if(cS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Ai(3e4,6e4);function wd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pS(t){return new Promise((e,n)=>{var r,s,i;function a(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(tn(t,"network-request-failed"))},timeout:dS.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)a();else{const l=ER("iframefcb");return nn()[l]=()=>{gapi.load?a():n(tn(t,"network-request-failed"))},yR(`${vR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw po=null,e})}let po=null;function gS(t){return po=po||pS(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new Ai(5e3,15e3),_S="__/auth/iframe",yS="emulator/auth/iframe",vS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,yS):`https://${t.config.authDomain}/${_S}`,r={apiKey:e.apiKey,appName:t.name,v:cs},s=ES.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yi(r).slice(1)}`}async function IS(t){const e=await gS(t),n=nn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{i(a)},mS.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AS=500,bS=600,RS="_blank",SS="http://localhost";class Ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PS(t,e,n,r=AS,s=bS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},wS),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ft().toLowerCase();n&&(l=n_(h)?RS:n),e_(h)&&(e=e||SS,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(uR(h)&&l!=="_self")return CS(e||"",l),new Ad(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Ad(p)}function CS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="__/auth/handler",VS="emulator/auth/handler",DS=encodeURIComponent("fac");async function bd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(e instanceof h_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",fI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof bi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${DS}=${encodeURIComponent(c)}`:"";return`${OS(t)}?${yi(l).slice(1)}${h}`}function OS({config:t}){return t.emulator?au(t,VS):`https://${t.authDomain}/${kS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="webStorageSupport";class NS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m_,this._completeRedirectFn=sS,this._overrideRedirectResult=tS}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await bd(e,n,r,Zl(),s);return PS(e,a,du())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bd(e,n,r,Zl(),s);return LR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IS(e),r=new oS(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dl];a!==void 0&&n(!!a),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a_()||t_()||uu()}}const xS=NS;var Rd="@firebase/auth",Sd="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function US(t){Zr(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(t)},h=new mR(r,s,i,c);return IR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Er("auth-internal",e=>{const n=hu(e.getProvider("auth").getImmediate());return(r=>new MS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Rd,Sd,LS(t)),Hn(Rd,Sd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=5*60,jS=hg("authIdTokenMaxAge")||FS;let Pd=null;const BS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jS)return;const s=n==null?void 0:n.token;Pd!==s&&(Pd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $S(t=gg()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TR(t,{popupRedirectResolver:xS,persistence:[KR,NR,m_]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=BS(i.toString());VR(n,a,()=>a(n.currentUser)),kR(n,l=>a(l))}}const s=cg("auth");return s&&wR(n,`http://${s}`),n}function qS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_R({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});US("Browser");const HS={apiKey:"your-api-key",authDomain:"your-auth-domain",projectId:"your-project-id",storageBucket:"your-storage-bucket",messagingSenderId:"your-msg-sender-id",appId:"your-app-id"},w_=pg(HS),Zi=bb(w_);$S(w_);const zS={data(){return{users:[],newUser:{username:"",password:"",role:"user"},selectedUser:null}},methods:{async fetchUsers(){const t=ld(Zi,"users"),e=await $b(t);this.users=e.docs.map(n=>({...n.data(),id:n.id}))},async addUser(){const{username:t,password:e,role:n}=this.newUser,r=await bcrypt.hash(e,10);await zb(ld(Zi,"users"),{username:t,password:r,role:n,friends:[]}),this.newUser={username:"",password:"",role:"user"},this.fetchUsers()},async updateUser(){if(this.selectedUser){const t=Yl(Zi,"users",this.selectedUser.id);await qb(t,{username:this.selectedUser.username,role:this.selectedUser.role}),this.selectedUser=null,this.fetchUsers()}},async deleteUser(t){const e=Yl(Zi,"users",t);await Hb(e),this.fetchUsers()},editUser(t){this.selectedUser={...t}}},created(){this.fetchUsers()}},KS=["onClick"],WS=["onClick"];function GS(t,e,n,r,s,i){return ut(),_t("div",null,[e[9]||(e[9]=ue("h2",null,"Admin Panel",-1)),ue("div",null,[e[6]||(e[6]=ue("h3",null,"Add New User",-1)),ue("form",{onSubmit:e[3]||(e[3]=jp((...a)=>i.addUser&&i.addUser(...a),["prevent"]))},[Us(ue("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.newUser.username=a),type:"text",placeholder:"Username",required:""},null,512),[[bo,s.newUser.username]]),Us(ue("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.newUser.password=a),type:"password",placeholder:"Password",required:""},null,512),[[bo,s.newUser.password]]),Us(ue("select",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.newUser.role=a)},e[4]||(e[4]=[ue("option",{value:"user"},"User",-1),ue("option",{value:"admin"},"Admin",-1)]),512),[[dE,s.newUser.role]]),e[5]||(e[5]=ue("button",{type:"submit"},"Add User",-1))],32)]),ue("div",null,[e[8]||(e[8]=ue("h3",null,"Users",-1)),ue("table",null,[e[7]||(e[7]=ue("thead",null,[ue("tr",null,[ue("th",null,"Username"),ue("th",null,"Role"),ue("th",null,"Actions")])],-1)),ue("tbody",null,[(ut(!0),_t(xt,null,yl(s.users,a=>(ut(),_t("tr",{key:a.id},[ue("td",null,wt(a.username),1),ue("td",null,wt(a.role),1),ue("td",null,[ue("button",{onClick:l=>i.editUser(a)},"Edit",8,KS),ue("button",{onClick:l=>i.deleteUser(a.id)},"Delete",8,WS)])]))),128))])])])])}const QS=ls(zS,[["render",GS],["__scopeId","data-v-8c048f9a"]]),JS={data(){return{friends:[]}},methods:{async fetchFriends(){const t=wc();await t.fetchFriends(),this.friends=t.friends}},created(){this.fetchFriends()}};function YS(t,e,n,r,s,i){return ut(),_t("div",null,[e[0]||(e[0]=ue("h2",null,"Your Friends' Activities",-1)),(ut(!0),_t(xt,null,yl(s.friends,a=>(ut(),_t("div",{key:a.id},[ue("h3",null,wt(a.username),1),(ut(!0),_t(xt,null,yl(a.activities,l=>(ut(),_t("div",{key:l.id},[ue("p",null,wt(l.type)+" - "+wt(l.duration)+" mins",1)]))),128))]))),128))])}const XS=ls(JS,[["render",YS]]),ZS={__name:"Stats",setup(t){const e=pi({steps:0,calories:0,minutes:0});return yc(async()=>{try{const n=await fetch("/api/stats/1");e.value=await n.json()}catch(n){console.error("Failed to load stats:",n)}}),(n,r)=>(ut(),_t("section",null,[r[0]||(r[0]=ue("h2",null,"Your Stats",-1)),ue("ul",null,[ue("li",null,"Steps Today: "+wt(e.value.steps),1),ue("li",null,"Calories Burned: "+wt(e.value.calories),1),ue("li",null,"Workout Time: "+wt(e.value.minutes)+" minutes",1)])]))}},eP=ls(ZS,[["__scopeId","data-v-624c3467"]]),tP=[{path:"/",component:LT},{path:"/dashboard",component:$T,meta:{requiresAuth:!0}},{path:"/admin",component:QS,meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/friends",component:XS,meta:{requiresAuth:!0}},{path:"/stats",component:eP,meta:{requiresAuth:!0}}],A_=VT({history:oT(),routes:tP});A_.beforeEach((t,e,n)=>{const r=!!localStorage.getItem("token"),s=localStorage.getItem("role");t.meta.requiresAuth&&!r?n("/"):t.meta.requiresAdmin&&s!=="admin"?n("/dashboard"):n()});const gu=Bp(Kp);console.log("Bootstrapping Vue app...");Bp(Kp).mount("#app");gu.use(EE());gu.use(A_);gu.mount("#app");
//# sourceMappingURL=index-BVLs_Pwh.js.map
