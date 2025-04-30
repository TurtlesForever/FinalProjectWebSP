(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},qr=[],Yt=()=>{},G_=()=>!1,Go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sc=t=>t.startsWith("onUpdate:"),ft=Object.assign,ic=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Q_=Object.prototype.hasOwnProperty,Re=(t,e)=>Q_.call(t,e),ae=Array.isArray,Hr=t=>di(t)==="[object Map]",Qo=t=>di(t)==="[object Set]",lh=t=>di(t)==="[object Date]",de=t=>typeof t=="function",$e=t=>typeof t=="string",rn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",kd=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),Vd=Object.prototype.toString,di=t=>Vd.call(t),J_=t=>di(t).slice(8,-1),Dd=t=>di(t)==="[object Object]",oc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Y_=/-(\w)/g,Ut=Jo(t=>t.replace(Y_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,Rr=Jo(t=>t.replace(X_,"-$1").toLowerCase()),Yo=Jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=Jo(t=>t?`on${Yo(t)}`:""),jn=(t,e)=>!Object.is(t,e),no=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Od=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ch;const Xo=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ac(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?ny(r):ac(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||De(t))return t}const Z_=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(t){const e={};return t.replace(ty,"").split(Z_).forEach(n=>{if(n){const r=n.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lc(t){let e="";if($e(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=lc(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=rc(ry);function Nd(t){return!!t||t===""}function iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zo(t[r],e[r]);return n}function Zo(t,e){if(t===e)return!0;let n=lh(t),r=lh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?iy(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Zo(t[o],e[o]))return!1}}return String(t)===String(e)}function oy(t,e){return t.findIndex(n=>Zo(n,e))}const xd=t=>!!(t&&t.__v_isRef===!0),yt=t=>$e(t)?t:t==null?"":ae(t)||De(t)&&(t.toString===Vd||!de(t.toString))?xd(t)?yt(t.value):JSON.stringify(t,Md,2):String(t),Md=(t,e)=>xd(e)?Md(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[za(r,i)+" =>"]=s,n),{})}:Qo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>za(n))}:rn(e)?za(e):De(e)&&!ae(e)&&!Dd(e)?String(e):e,za=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class Ld{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ud(t){return new Ld(t)}function Fd(){return mt}function ay(t,e=!1){mt&&mt.cleanups.push(t)}let Ve;const Ka=new WeakSet;class jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),qd(this);const e=Ve,n=$t;Ve=this,$t=!0;try{return this.fn()}finally{Hd(this),Ve=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hc(e);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let Bd=0,Us,Fs;function $d(t,e=!1){if(t.flags|=8,e){t.next=Fs,Fs=t;return}t.next=Us,Us=t}function cc(){Bd++}function uc(){if(--Bd>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Us;){let e=Us;for(Us=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hc(r),ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xs))return;t.globalVersion=Xs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gl(t)){t.flags&=-3;return}const n=Ve,r=$t;Ve=t,$t=!0;try{qd(t);const s=t.fn(t._value);(e.version===0||jn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,$t=r,Hd(t),t.flags&=-3}}function hc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const Kd=[];function er(){Kd.push($t),$t=!1}function tr(){const t=Kd.pop();$t=t===void 0?!0:t}function uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Xs=0;class cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!$t||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new cy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Wd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){cc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uc()}}}function Wd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const yo=new WeakMap,pr=Symbol(""),ml=Symbol(""),Zs=Symbol("");function ct(t,e,n){if($t&&Ve){let r=yo.get(t);r||yo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new fc),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,i){const o=yo.get(t);if(!o){Xs++;return}const l=c=>{c&&c.trigger()};if(cc(),e==="clear")o.forEach(l);else{const c=ae(t),h=c&&oc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Zs||!rn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Zs)),e){case"add":c?h&&l(o.get("length")):(l(o.get(pr)),Hr(t)&&l(o.get(ml)));break;case"delete":c||(l(o.get(pr)),Hr(t)&&l(o.get(ml)));break;case"set":Hr(t)&&l(o.get(pr));break}}uc()}function uy(t,e){const n=yo.get(t);return n&&n.get(e)}function Nr(t){const e=Ae(t);return e===t?e:(ct(e,"iterate",Zs),Mt(t)?e:e.map(ut))}function ea(t){return ct(t=Ae(t),"iterate",Zs),t}const hy={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,ut)},concat(...t){return Nr(this).concat(...t.map(e=>ae(e)?Nr(e):e))},entries(){return Wa(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return un(this,"find",t,e,ut,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ga(this,"includes",t)},indexOf(...t){return Ga(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Ga(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...t){return ks(this,"push",t)},reduce(t,...e){return hh(this,"reduce",t,e)},reduceRight(t,...e){return hh(this,"reduceRight",t,e)},shift(){return ks(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return ks(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return ks(this,"unshift",t)},values(){return Wa(this,"values",ut)}};function Wa(t,e,n){const r=ea(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const fy=Array.prototype;function un(t,e,n,r,s,i){const o=ea(t),l=o!==t&&!Mt(t),c=o[e];if(c!==fy[e]){const p=c.apply(t,i);return l?ut(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function hh(t,e,n,r){const s=ea(t);let i=n;return s!==t&&(Mt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ut(l),c,t)}),s[e](i,...r)}function Ga(t,e,n){const r=Ae(t);ct(r,"iterate",Zs);const s=r[e](...n);return(s===-1||s===!1)&&gc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function ks(t,e,n=[]){er(),cc();const r=Ae(t)[e].apply(t,n);return uc(),tr(),r}const dy=rc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function py(t){rn(t)||(t=String(t));const e=Ae(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Qd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ay:Zd:i?Xd:Yd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=hy[n]))return c;if(n==="hasOwnProperty")return py}const l=Reflect.get(e,n,je(e)?e:r);return(rn(n)?Gd.has(n):dy(n))||(s||ct(e,"get",n),i)?l:je(l)?o&&oc(n)?l:l.value:De(l)?s?tp(l):pi(l):l}}class Jd extends Qd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=yr(i);if(!Mt(r)&&!yr(r)&&(i=Ae(i),r=Ae(r)),!ae(e)&&je(i)&&!je(r))return c?!1:(i.value=r,!0)}const o=ae(e)&&oc(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,je(e)?e:s);return e===Ae(s)&&(o?jn(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!Gd.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",ae(e)?"length":pr),Reflect.ownKeys(e)}}class gy extends Qd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const my=new Jd,_y=new gy,yy=new Jd(!0);const _l=t=>t,zi=t=>Reflect.getPrototypeOf(t);function vy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Hr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?_l:e?yl:ut;return!e&&ct(i,"iterate",c?ml:pr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ey(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(jn(s,l)&&ct(o,"get",s),ct(o,"get",l));const{has:c}=zi(o),h=e?_l:t?yl:ut;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(Ae(s),"iterate",pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(jn(s,l)&&ct(o,"has",s),ct(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?_l:t?yl:ut;return!t&&ct(c,"iterate",pr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return ft(n,t?{add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear")}:{add(s){!e&&!Mt(s)&&!yr(s)&&(s=Ae(s));const i=Ae(this);return zi(i).has.call(i,s)||(i.add(s),dn(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!yr(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=zi(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?jn(i,d)&&dn(o,"set",s,i):dn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=zi(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vy(s,t,e)}),n}function dc(t,e){const n=Ey(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Ty={get:dc(!1,!1)},Iy={get:dc(!1,!0)},wy={get:dc(!0,!1)};const Yd=new WeakMap,Xd=new WeakMap,Zd=new WeakMap,Ay=new WeakMap;function by(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ry(t){return t.__v_skip||!Object.isExtensible(t)?0:by(J_(t))}function pi(t){return yr(t)?t:pc(t,!1,my,Ty,Yd)}function ep(t){return pc(t,!1,yy,Iy,Xd)}function tp(t){return pc(t,!0,_y,wy,Zd)}function pc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ry(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Bn(t){return yr(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function gc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function mc(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Od(t,"__v_skip",!0),t}const ut=t=>De(t)?pi(t):t,yl=t=>De(t)?tp(t):t;function je(t){return t?t.__v_isRef===!0:!1}function gi(t){return np(t,!1)}function Sy(t){return np(t,!0)}function np(t,e){return je(t)?t:new Py(t,e)}class Py{constructor(e,n){this.dep=new fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||yr(e);e=r?e:Ae(e),jn(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function zr(t){return je(t)?t.value:t}const Cy={get:(t,e,n)=>e==="__v_raw"?t:zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rp(t){return Bn(t)?t:new Proxy(t,Cy)}function ky(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=Dy(t,n);return e}class Vy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uy(Ae(this._object),this._key)}}function Dy(t,e,n){const r=t[e];return je(r)?r:new Vy(t,e,n)}class Oy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return $d(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ny(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Oy(r,s,n)}const Wi={},vo=new WeakMap;let ur;function xy(t,e=!1,n=ur){if(n){let r=vo.get(n);r||vo.set(n,r=[]),r.push(t)}}function My(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Mt(H)||s===!1||s===0?pn(H,1):pn(H);let d,p,m,v,C=!1,V=!1;if(je(t)?(p=()=>t.value,C=Mt(t)):Bn(t)?(p=()=>h(t),C=!0):ae(t)?(V=!0,C=t.some(H=>Bn(H)||Mt(H)),p=()=>t.map(H=>{if(je(H))return H.value;if(Bn(H))return h(H);if(de(H))return c?c(H,2):H()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){er();try{m()}finally{tr()}}const H=ur;ur=d;try{return c?c(t,3,[v]):t(v)}finally{ur=H}}:p=Yt,e&&s){const H=p,ne=s===!0?1/0:s;p=()=>pn(H(),ne)}const D=Fd(),$=()=>{d.stop(),D&&D.active&&ic(D.effects,d)};if(i&&e){const H=e;e=(...ne)=>{H(...ne),$()}}let j=V?new Array(t.length).fill(Wi):Wi;const B=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ne=d.run();if(s||C||(V?ne.some((ge,A)=>jn(ge,j[A])):jn(ne,j))){m&&m();const ge=ur;ur=d;try{const A=[ne,j===Wi?void 0:V&&j[0]===Wi?[]:j,v];c?c(e,3,A):e(...A),j=ne}finally{ur=ge}}}else d.run()};return l&&l(B),d=new jd(p),d.scheduler=o?()=>o(B,!1):B,v=H=>xy(H,!1,d),m=d.onStop=()=>{const H=vo.get(d);if(H){if(c)c(H,4);else for(const ne of H)ne();vo.delete(d)}},e?r?B(!0):j=d.run():o?o(B.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function pn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))pn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(Qo(t)||Hr(t))t.forEach(r=>{pn(r,e,n)});else if(Dd(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function sn(t,e,n,r){if(de(t)){const s=mi(t,e,n,r);return s&&kd(s)&&s.catch(i=>{ta(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){er(),mi(i,null,10,[t,c,h]),tr();return}}Ly(t,n,s,r,o)}function Ly(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Wt=-1;const Kr=[];let Dn=null,Mr=0;const sp=Promise.resolve();let Eo=null;function na(t){const e=Eo||sp;return t?e.then(this?t.bind(this):t):e}function Uy(t){let e=Wt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=ei(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function _c(t){if(!(t.flags&1)){const e=ei(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=ei(n)?_t.push(t):_t.splice(Uy(e),0,t),t.flags|=1,ip()}}function ip(){Eo||(Eo=sp.then(ap))}function Fy(t){ae(t)?Kr.push(...t):Dn&&t.id===-1?Dn.splice(Mr+1,0,t):t.flags&1||(Kr.push(t),t.flags|=1),ip()}function fh(t,e,n=Wt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function op(t){if(Kr.length){const e=[...new Set(Kr)].sort((n,r)=>ei(n)-ei(r));if(Kr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Mr=0;Mr<Dn.length;Mr++){const n=Dn[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dn=null,Mr=0}}const ei=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ap(t){try{for(Wt=0;Wt<_t.length;Wt++){const e=_t[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<_t.length;Wt++){const e=_t[Wt];e&&(e.flags&=-2)}Wt=-1,_t.length=0,op(),Eo=null,(_t.length||Kr.length)&&ap()}}let At=null,lp=null;function To(t){const e=At;return At=t,lp=t&&t.type.__scopeId||null,e}function cp(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ih(-1);const i=To(e);let o;try{o=t(...s)}finally{To(i),r._d&&Ih(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(t,e){if(At===null)return t;const n=oa(At),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(er(),sn(c,n,8,[t.el,l,t,e]),tr())}}const jy=Symbol("_vte"),By=t=>t.__isTeleport;function yc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function up(t,e){return de(t)?ft({name:t.name},e,{setup:t}):t}function hp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Io(t,e,n,r,s=!1){if(ae(t)){t.forEach((C,V)=>Io(C,e&&(ae(e)?e[V]:e),n,r,s));return}if(js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Io(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===Ce?()=>!1:C=>Re(m,C);if(h!=null&&h!==c&&($e(h)?(d[h]=null,v(h)&&(p[h]=null)):je(h)&&(h.value=null)),de(c))mi(c,l,12,[o,d]);else{const C=$e(c),V=je(c);if(C||V){const D=()=>{if(t.f){const $=C?v(c)?p[c]:d[c]:c.value;s?ae($)&&ic($,i):ae($)?$.includes(i)||$.push(i):C?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,v(c)&&(p[c]=o)):V&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Pt(D,n)):D()}}}Xo().requestIdleCallback;Xo().cancelIdleCallback;const js=t=>!!t.type.__asyncLoader,fp=t=>t.type.__isKeepAlive;function $y(t,e){dp(t,"a",e)}function qy(t,e){dp(t,"da",e)}function dp(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fp(s.parent.vnode)&&Hy(r,e,n,s),s=s.parent}}function Hy(t,e,n,r){const s=ra(e,t,r,!0);pp(()=>{ic(r[e],s)},n)}function ra(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const l=_i(n),c=sn(e,n,t,o);return l(),tr(),c});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=et)=>{(!ni||t==="sp")&&ra(t,(...r)=>e(...r),n)},zy=In("bm"),vc=In("m"),Ky=In("bu"),Wy=In("u"),Gy=In("bum"),pp=In("um"),Qy=In("sp"),Jy=In("rtg"),Yy=In("rtc");function Xy(t,e=et){ra("ec",t,e)}const Zy="components";function gp(t,e){return tv(Zy,t,!0,e)||t}const ev=Symbol.for("v-ndc");function tv(t,e,n=!0,r=!1){const s=At||et;if(s){const i=s.type;{const l=qv(i,!1);if(l&&(l===e||l===Ut(e)||l===Yo(Ut(e))))return i}const o=dh(s[t]||i[t],e)||dh(s.appContext[t],e);return!o&&r?i:o}}function dh(t,e){return t&&(t[e]||t[Ut(e)]||t[Yo(Ut(e))])}function vl(t,e,n,r){let s;const i=n,o=ae(t);if(o||$e(t)){const l=o&&Bn(t);let c=!1;l&&(c=!Mt(t),t=ea(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?ut(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const El=t=>t?Up(t)?oa(t):El(t.parent):null,Bs=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_p(t),$forceUpdate:t=>t.f||(t.f=()=>{_c(t.update)}),$nextTick:t=>t.n||(t.n=na.bind(t.proxy)),$watch:t=>wv.bind(t)}),Qa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),nv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qa(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const d=Bs[e];let p,m;if(d)return e==="$attrs"&&ct(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qa(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ce&&Re(t,o)||Qa(e,o)||(l=i[0])&&Re(l,o)||Re(r,o)||Re(Bs,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ph(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function rv(t){const e=_p(t),n=t.proxy,r=t.ctx;Tl=!1,e.beforeCreate&&gh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:C,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:j,destroyed:B,unmounted:H,render:ne,renderTracked:ge,renderTriggered:A,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:b,components:R,directives:T,filters:Ge}=e;if(h&&sv(h,r,null),o)for(const ce in o){const _e=o[ce];de(_e)&&(r[ce]=_e.bind(n))}if(s){const ce=s.call(n,n);De(ce)&&(t.data=pi(ce))}if(Tl=!0,i)for(const ce in i){const _e=i[ce],Rt=de(_e)?_e.bind(n,n):de(_e.get)?_e.get.bind(n,n):Yt,Ft=!de(_e)&&de(_e.set)?_e.set.bind(n):Yt,Dt=Ct({get:Rt,set:Ft});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:xe=>Dt.value=xe})}if(l)for(const ce in l)mp(l[ce],r,n,ce);if(c){const ce=de(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(_e=>{ro(_e,ce[_e])})}d&&gh(d,t,"c");function ke(ce,_e){ae(_e)?_e.forEach(Rt=>ce(Rt.bind(n))):_e&&ce(_e.bind(n))}if(ke(zy,p),ke(vc,m),ke(Ky,v),ke(Wy,C),ke($y,V),ke(qy,D),ke(Xy,_),ke(Yy,ge),ke(Jy,A),ke(Gy,j),ke(pp,H),ke(Qy,y),ae(w))if(w.length){const ce=t.exposed||(t.exposed={});w.forEach(_e=>{Object.defineProperty(ce,_e,{get:()=>n[_e],set:Rt=>n[_e]=Rt})})}else t.exposed||(t.exposed={});ne&&t.render===Yt&&(t.render=ne),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),y&&hp(t)}function sv(t,e,n=Yt){ae(t)&&(t=Il(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gh(t,e,n){sn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mp(t,e,n,r){let s=r.includes(".")?Vp(n,r):()=>n[r];if($e(t)){const i=e[t];de(i)&&$s(s,i)}else if(de(t))$s(s,t.bind(n));else if(De(t))if(ae(t))t.forEach(i=>mp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&$s(s,i,t)}}function _p(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>wo(c,h,o,!0)),wo(c,e,o)),De(e)&&i.set(e,c),c}function wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wo(t,i,n,!0),s&&s.forEach(o=>wo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=iv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const iv={data:mh,props:_h,emits:_h,methods:Os,computed:Os,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Os,directives:Os,watch:av,provide:mh,inject:ov};function mh(t,e){return e?t?function(){return ft(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function ov(t,e){return Os(Il(t),Il(e))}function Il(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?ft(Object.create(null),t,e):e}function _h(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:ft(Object.create(null),ph(t),ph(e??{})):e}function av(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function yp(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lv=0;function cv(t,e){return function(r,s=null){de(r)||(r=ft({},r)),s!=null&&!De(s)&&(s=null);const i=yp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:lv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&de(d.install)?(o.add(d),d.install(h,...p)):de(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||vt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,d,m),c=!0,h._container=d,d.__vue_app__=h,oa(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=mr;mr=h;try{return d()}finally{mr=p}}};return h}}let mr=null;function ro(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=et||At;if(r||mr){const s=mr?mr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function uv(){return!!(et||At||mr)}const vp={},Ep=()=>Object.create(vp),Tp=t=>Object.getPrototypeOf(t)===vp;function hv(t,e,n,r=!1){const s={},i=Ep();t.propsDefaults=Object.create(null),Ip(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ep(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(sa(t.emitsOptions,m))continue;const v=e[m];if(c)if(Re(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const C=Ut(m);s[C]=wl(c,l,C,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{Ip(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=Rr(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=wl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&dn(t.attrs,"set","")}function Ip(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ls(c))continue;const h=e[c];let d;s&&Re(s,d=Ut(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:sa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||Ce;for(let d=0;d<i.length;d++){const p=i[d];n[p]=wl(s,c,p,h[p],t,!Re(h,p))}}return o}function wl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=_i(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const dv=new WeakMap;function wp(t,e,n=!1){const r=n?dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!de(t)){const d=p=>{c=!0;const[m,v]=wp(p,e,!0);ft(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,qr),qr;if(ae(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);yh(p)&&(o[p]=Ce)}else if(i)for(const d in i){const p=Ut(d);if(yh(p)){const m=i[d],v=o[p]=ae(m)||de(m)?{type:m}:ft({},m),C=v.type;let V=!1,D=!0;if(ae(C))for(let $=0;$<C.length;++$){const j=C[$],B=de(j)&&j.name;if(B==="Boolean"){V=!0;break}else B==="String"&&(D=!1)}else V=de(C)&&C.name==="Boolean";v[0]=V,v[1]=D,(V||Re(v,"default"))&&l.push(p)}}const h=[o,l];return De(t)&&r.set(t,h),h}function yh(t){return t[0]!=="$"&&!Ls(t)}const Ap=t=>t[0]==="_"||t==="$stable",Ec=t=>ae(t)?t.map(Qt):[Qt(t)],pv=(t,e,n)=>{if(e._n)return e;const r=cp((...s)=>Ec(e(...s)),n);return r._c=!1,r},bp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ap(s))continue;const i=t[s];if(de(i))e[s]=pv(s,i,r);else if(i!=null){const o=Ec(i);e[s]=()=>o}}},Rp=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},Sp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},gv=(t,e,n)=>{const r=t.slots=Ep();if(t.vnode.shapeFlag&32){const s=e._;s?(Sp(r,e,n),n&&Od(r,"_",s,!0)):bp(e,r)}else e&&Rp(t,e)},mv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Sp(s,e,n):(i=!e.$stable,bp(e,s)),o=e}else e&&(Rp(t,e),o={default:1});if(i)for(const l in s)!Ap(l)&&o[l]==null&&delete s[l]},Pt=kv;function _v(t){return yv(t)}function yv(t,e){const n=Xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Yt,insertStaticContent:C}=t,V=(E,I,S,N=null,L=null,x=null,W=void 0,z=null,q=!!I.dynamicChildren)=>{if(E===I)return;E&&!Vs(E,I)&&(N=O(E),xe(E,L,x,!0),E=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:F,ref:re,shapeFlag:Q}=I;switch(F){case ia:D(E,I,S,N);break;case vr:$(E,I,S,N);break;case Ya:E==null&&j(I,S,N,W);break;case xt:R(E,I,S,N,L,x,W,z,q);break;default:Q&1?ne(E,I,S,N,L,x,W,z,q):Q&6?T(E,I,S,N,L,x,W,z,q):(Q&64||Q&128)&&F.process(E,I,S,N,L,x,W,z,q,X)}re!=null&&L&&Io(re,E&&E.ref,x,I||E,!I)},D=(E,I,S,N)=>{if(E==null)r(I.el=l(I.children),S,N);else{const L=I.el=E.el;I.children!==E.children&&h(L,I.children)}},$=(E,I,S,N)=>{E==null?r(I.el=c(I.children||""),S,N):I.el=E.el},j=(E,I,S,N)=>{[E.el,E.anchor]=C(E.children,I,S,N,E.el,E.anchor)},B=({el:E,anchor:I},S,N)=>{let L;for(;E&&E!==I;)L=m(E),r(E,S,N),E=L;r(I,S,N)},H=({el:E,anchor:I})=>{let S;for(;E&&E!==I;)S=m(E),s(E),E=S;s(I)},ne=(E,I,S,N,L,x,W,z,q)=>{I.type==="svg"?W="svg":I.type==="math"&&(W="mathml"),E==null?ge(I,S,N,L,x,W,z,q):y(E,I,L,x,W,z,q)},ge=(E,I,S,N,L,x,W,z)=>{let q,F;const{props:re,shapeFlag:Q,transition:Z,dirs:le}=E;if(q=E.el=o(E.type,x,re&&re.is,re),Q&8?d(q,E.children):Q&16&&_(E.children,q,null,N,L,Ja(E,x),W,z),le&&lr(E,null,N,"created"),A(q,E,E.scopeId,W,N),re){for(const pe in re)pe!=="value"&&!Ls(pe)&&i(q,pe,null,re[pe],x,N);"value"in re&&i(q,"value",null,re.value,x),(F=re.onVnodeBeforeMount)&&Kt(F,N,E)}le&&lr(E,null,N,"beforeMount");const se=vv(L,Z);se&&Z.beforeEnter(q),r(q,I,S),((F=re&&re.onVnodeMounted)||se||le)&&Pt(()=>{F&&Kt(F,N,E),se&&Z.enter(q),le&&lr(E,null,N,"mounted")},L)},A=(E,I,S,N,L)=>{if(S&&v(E,S),N)for(let x=0;x<N.length;x++)v(E,N[x]);if(L){let x=L.subTree;if(I===x||Op(x.type)&&(x.ssContent===I||x.ssFallback===I)){const W=L.vnode;A(E,W,W.scopeId,W.slotScopeIds,L.parent)}}},_=(E,I,S,N,L,x,W,z,q=0)=>{for(let F=q;F<E.length;F++){const re=E[F]=z?On(E[F]):Qt(E[F]);V(null,re,I,S,N,L,x,W,z)}},y=(E,I,S,N,L,x,W)=>{const z=I.el=E.el;let{patchFlag:q,dynamicChildren:F,dirs:re}=I;q|=E.patchFlag&16;const Q=E.props||Ce,Z=I.props||Ce;let le;if(S&&cr(S,!1),(le=Z.onVnodeBeforeUpdate)&&Kt(le,S,I,E),re&&lr(I,E,S,"beforeUpdate"),S&&cr(S,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&d(z,""),F?w(E.dynamicChildren,F,z,S,N,Ja(I,L),x):W||_e(E,I,z,null,S,N,Ja(I,L),x,!1),q>0){if(q&16)b(z,Q,Z,S,L);else if(q&2&&Q.class!==Z.class&&i(z,"class",null,Z.class,L),q&4&&i(z,"style",Q.style,Z.style,L),q&8){const se=I.dynamicProps;for(let pe=0;pe<se.length;pe++){const Ee=se[pe],rt=Q[Ee],Qe=Z[Ee];(Qe!==rt||Ee==="value")&&i(z,Ee,rt,Qe,L,S)}}q&1&&E.children!==I.children&&d(z,I.children)}else!W&&F==null&&b(z,Q,Z,S,L);((le=Z.onVnodeUpdated)||re)&&Pt(()=>{le&&Kt(le,S,I,E),re&&lr(I,E,S,"updated")},N)},w=(E,I,S,N,L,x,W)=>{for(let z=0;z<I.length;z++){const q=E[z],F=I[z],re=q.el&&(q.type===xt||!Vs(q,F)||q.shapeFlag&70)?p(q.el):S;V(q,F,re,null,N,L,x,W,!0)}},b=(E,I,S,N,L)=>{if(I!==S){if(I!==Ce)for(const x in I)!Ls(x)&&!(x in S)&&i(E,x,I[x],null,L,N);for(const x in S){if(Ls(x))continue;const W=S[x],z=I[x];W!==z&&x!=="value"&&i(E,x,z,W,L,N)}"value"in S&&i(E,"value",I.value,S.value,L)}},R=(E,I,S,N,L,x,W,z,q)=>{const F=I.el=E?E.el:l(""),re=I.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:le}=I;le&&(z=z?z.concat(le):le),E==null?(r(F,S,N),r(re,S,N),_(I.children||[],S,re,L,x,W,z,q)):Q>0&&Q&64&&Z&&E.dynamicChildren?(w(E.dynamicChildren,Z,S,L,x,W,z),(I.key!=null||L&&I===L.subTree)&&Pp(E,I,!0)):_e(E,I,S,re,L,x,W,z,q)},T=(E,I,S,N,L,x,W,z,q)=>{I.slotScopeIds=z,E==null?I.shapeFlag&512?L.ctx.activate(I,S,N,W,q):Ge(I,S,N,L,x,W,q):Et(E,I,q)},Ge=(E,I,S,N,L,x,W)=>{const z=E.component=Uv(E,N,L);if(fp(E)&&(z.ctx.renderer=X),Fv(z,!1,W),z.asyncDep){if(L&&L.registerDep(z,ke,W),!E.el){const q=z.subTree=vt(vr);$(null,q,I,S)}}else ke(z,E,I,S,L,x,W)},Et=(E,I,S)=>{const N=I.component=E.component;if(Pv(E,I,S))if(N.asyncDep&&!N.asyncResolved){ce(N,I,S);return}else N.next=I,N.update();else I.el=E.el,N.vnode=I},ke=(E,I,S,N,L,x,W)=>{const z=()=>{if(E.isMounted){let{next:Q,bu:Z,u:le,parent:se,vnode:pe}=E;{const st=Cp(E);if(st){Q&&(Q.el=pe.el,ce(E,Q,W)),st.asyncDep.then(()=>{E.isUnmounted||z()});return}}let Ee=Q,rt;cr(E,!1),Q?(Q.el=pe.el,ce(E,Q,W)):Q=pe,Z&&no(Z),(rt=Q.props&&Q.props.onVnodeBeforeUpdate)&&Kt(rt,se,Q,pe),cr(E,!0);const Qe=Eh(E),Ot=E.subTree;E.subTree=Qe,V(Ot,Qe,p(Ot.el),O(Ot),E,L,x),Q.el=Qe.el,Ee===null&&Cv(E,Qe.el),le&&Pt(le,L),(rt=Q.props&&Q.props.onVnodeUpdated)&&Pt(()=>Kt(rt,se,Q,pe),L)}else{let Q;const{el:Z,props:le}=I,{bm:se,m:pe,parent:Ee,root:rt,type:Qe}=E,Ot=js(I);cr(E,!1),se&&no(se),!Ot&&(Q=le&&le.onVnodeBeforeMount)&&Kt(Q,Ee,I),cr(E,!0);{rt.ce&&rt.ce._injectChildStyle(Qe);const st=E.subTree=Eh(E);V(null,st,S,N,E,L,x),I.el=st.el}if(pe&&Pt(pe,L),!Ot&&(Q=le&&le.onVnodeMounted)){const st=I;Pt(()=>Kt(Q,Ee,st),L)}(I.shapeFlag&256||Ee&&js(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&E.a&&Pt(E.a,L),E.isMounted=!0,I=S=N=null}};E.scope.on();const q=E.effect=new jd(z);E.scope.off();const F=E.update=q.run.bind(q),re=E.job=q.runIfDirty.bind(q);re.i=E,re.id=E.uid,q.scheduler=()=>_c(re),cr(E,!0),F()},ce=(E,I,S)=>{I.component=E;const N=E.vnode.props;E.vnode=I,E.next=null,fv(E,I.props,N,S),mv(E,I.children,S),er(),fh(E),tr()},_e=(E,I,S,N,L,x,W,z,q=!1)=>{const F=E&&E.children,re=E?E.shapeFlag:0,Q=I.children,{patchFlag:Z,shapeFlag:le}=I;if(Z>0){if(Z&128){Ft(F,Q,S,N,L,x,W,z,q);return}else if(Z&256){Rt(F,Q,S,N,L,x,W,z,q);return}}le&8?(re&16&&Tt(F,L,x),Q!==F&&d(S,Q)):re&16?le&16?Ft(F,Q,S,N,L,x,W,z,q):Tt(F,L,x,!0):(re&8&&d(S,""),le&16&&_(Q,S,N,L,x,W,z,q))},Rt=(E,I,S,N,L,x,W,z,q)=>{E=E||qr,I=I||qr;const F=E.length,re=I.length,Q=Math.min(F,re);let Z;for(Z=0;Z<Q;Z++){const le=I[Z]=q?On(I[Z]):Qt(I[Z]);V(E[Z],le,S,null,L,x,W,z,q)}F>re?Tt(E,L,x,!0,!1,Q):_(I,S,N,L,x,W,z,q,Q)},Ft=(E,I,S,N,L,x,W,z,q)=>{let F=0;const re=I.length;let Q=E.length-1,Z=re-1;for(;F<=Q&&F<=Z;){const le=E[F],se=I[F]=q?On(I[F]):Qt(I[F]);if(Vs(le,se))V(le,se,S,null,L,x,W,z,q);else break;F++}for(;F<=Q&&F<=Z;){const le=E[Q],se=I[Z]=q?On(I[Z]):Qt(I[Z]);if(Vs(le,se))V(le,se,S,null,L,x,W,z,q);else break;Q--,Z--}if(F>Q){if(F<=Z){const le=Z+1,se=le<re?I[le].el:N;for(;F<=Z;)V(null,I[F]=q?On(I[F]):Qt(I[F]),S,se,L,x,W,z,q),F++}}else if(F>Z)for(;F<=Q;)xe(E[F],L,x,!0),F++;else{const le=F,se=F,pe=new Map;for(F=se;F<=Z;F++){const Je=I[F]=q?On(I[F]):Qt(I[F]);Je.key!=null&&pe.set(Je.key,F)}let Ee,rt=0;const Qe=Z-se+1;let Ot=!1,st=0;const bn=new Array(Qe);for(F=0;F<Qe;F++)bn[F]=0;for(F=le;F<=Q;F++){const Je=E[F];if(rt>=Qe){xe(Je,L,x,!0);continue}let Nt;if(Je.key!=null)Nt=pe.get(Je.key);else for(Ee=se;Ee<=Z;Ee++)if(bn[Ee-se]===0&&Vs(Je,I[Ee])){Nt=Ee;break}Nt===void 0?xe(Je,L,x,!0):(bn[Nt-se]=F+1,Nt>=st?st=Nt:Ot=!0,V(Je,I[Nt],S,null,L,x,W,z,q),rt++)}const _s=Ot?Ev(bn):qr;for(Ee=_s.length-1,F=Qe-1;F>=0;F--){const Je=se+F,Nt=I[Je],Ci=Je+1<re?I[Je+1].el:N;bn[F]===0?V(null,Nt,S,Ci,L,x,W,z,q):Ot&&(Ee<0||F!==_s[Ee]?Dt(Nt,S,Ci,2):Ee--)}}},Dt=(E,I,S,N,L=null)=>{const{el:x,type:W,transition:z,children:q,shapeFlag:F}=E;if(F&6){Dt(E.component.subTree,I,S,N);return}if(F&128){E.suspense.move(I,S,N);return}if(F&64){W.move(E,I,S,X);return}if(W===xt){r(x,I,S);for(let Q=0;Q<q.length;Q++)Dt(q[Q],I,S,N);r(E.anchor,I,S);return}if(W===Ya){B(E,I,S);return}if(N!==2&&F&1&&z)if(N===0)z.beforeEnter(x),r(x,I,S),Pt(()=>z.enter(x),L);else{const{leave:Q,delayLeave:Z,afterLeave:le}=z,se=()=>r(x,I,S),pe=()=>{Q(x,()=>{se(),le&&le()})};Z?Z(x,se,pe):pe()}else r(x,I,S)},xe=(E,I,S,N=!1,L=!1)=>{const{type:x,props:W,ref:z,children:q,dynamicChildren:F,shapeFlag:re,patchFlag:Q,dirs:Z,cacheIndex:le}=E;if(Q===-2&&(L=!1),z!=null&&Io(z,null,S,E,!0),le!=null&&(I.renderCache[le]=void 0),re&256){I.ctx.deactivate(E);return}const se=re&1&&Z,pe=!js(E);let Ee;if(pe&&(Ee=W&&W.onVnodeBeforeUnmount)&&Kt(Ee,I,E),re&6)zt(E.component,S,N);else{if(re&128){E.suspense.unmount(S,N);return}se&&lr(E,null,I,"beforeUnmount"),re&64?E.type.remove(E,I,S,X,N):F&&!F.hasOnce&&(x!==xt||Q>0&&Q&64)?Tt(F,I,S,!1,!0):(x===xt&&Q&384||!L&&re&16)&&Tt(q,I,S),N&&Me(E)}(pe&&(Ee=W&&W.onVnodeUnmounted)||se)&&Pt(()=>{Ee&&Kt(Ee,I,E),se&&lr(E,null,I,"unmounted")},S)},Me=E=>{const{type:I,el:S,anchor:N,transition:L}=E;if(I===xt){An(S,N);return}if(I===Ya){H(E);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:W,delayLeave:z}=L,q=()=>W(S,x);z?z(E.el,x,q):q()}else x()},An=(E,I)=>{let S;for(;E!==I;)S=m(E),s(E),E=S;s(I)},zt=(E,I,S)=>{const{bum:N,scope:L,job:x,subTree:W,um:z,m:q,a:F}=E;vh(q),vh(F),N&&no(N),L.stop(),x&&(x.flags|=8,xe(W,E,I,S)),z&&Pt(z,I),Pt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Tt=(E,I,S,N=!1,L=!1,x=0)=>{for(let W=x;W<E.length;W++)xe(E[W],I,S,N,L)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),S=I&&I[jy];return S?m(S):I};let J=!1;const G=(E,I,S)=>{E==null?I._vnode&&xe(I._vnode,null,null,!0):V(I._vnode||null,E,I,null,null,null,S),I._vnode=E,J||(J=!0,fh(),op(),J=!1)},X={p:V,um:xe,m:Dt,r:Me,mt:Ge,mc:_,pc:_e,pbc:w,n:O,o:t};return{render:G,hydrate:void 0,createApp:cv(G)}}function Ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pp(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=On(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Pp(o,l)),l.type===ia&&(l.el=o.el)}}function Ev(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Cp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cp(e)}function vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Tv=Symbol.for("v-scx"),Iv=()=>Xt(Tv);function $s(t,e,n){return kp(t,e,n)}function kp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=ft({},n),c=e&&r||!e&&i!=="post";let h;if(ni){if(i==="sync"){const v=Iv();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Yt,v.resume=Yt,v.pause=Yt,v}}const d=et;l.call=(v,C,V)=>sn(v,d,C,V);let p=!1;i==="post"?l.scheduler=v=>{Pt(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,C)=>{C?v():_c(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=My(t,e,l);return ni&&(h?h.push(m):c&&m()),m}function wv(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Vp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=_i(this),l=kp(s,i.bind(r),n);return o(),l}function Vp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Av=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function bv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&Av(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>$e(d)?d.trim():d)),o.number&&(s=n.map(_o)));let l,c=r[l=Ha(e)]||r[l=Ha(Ut(e))];!c&&i&&(c=r[l=Ha(Rr(e))]),c&&sn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(h,t,6,s)}}function Dp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!de(t)){const c=h=>{const d=Dp(h,e,!0);d&&(l=!0,ft(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):ft(o,i),De(t)&&r.set(t,o),o)}function sa(t,e){return!t||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Rr(e))||Re(t,e))}function Eh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:C,inheritAttrs:V}=t,D=To(t);let $,j;try{if(n.shapeFlag&4){const H=s||r,ne=H;$=Qt(h.call(ne,H,d,p,v,m,C)),j=l}else{const H=e;$=Qt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),j=e.props?l:Rv(l)}}catch(H){qs.length=0,ta(H,t,1),$=vt(vr)}let B=$;if(j&&V!==!1){const H=Object.keys(j),{shapeFlag:ne}=B;H.length&&ne&7&&(i&&H.some(sc)&&(j=Sv(j,i)),B=Xr(B,j,!1,!0))}return n.dirs&&(B=Xr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&yc(B,n.transition),$=B,To(D),$}const Rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Go(n))&&((e||(e={}))[n]=t[n]);return e},Sv=(t,e)=>{const n={};for(const r in t)(!sc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Th(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!sa(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Th(r,o,h):!0:!!o;return!1}function Th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function Cv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Op=t=>t.__isSuspense;function kv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Fy(t)}const xt=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),qs=[];let kt=null;function We(t=!1){qs.push(kt=t?null:[])}function Vv(){qs.pop(),kt=qs[qs.length-1]||null}let ti=1;function Ih(t,e=!1){ti+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function Np(t){return t.dynamicChildren=ti>0?kt||qr:null,Vv(),ti>0&&kt&&kt.push(t),t}function Ze(t,e,n,r,s,i){return Np(ie(t,e,n,r,s,i,!0))}function Dv(t,e,n,r,s){return Np(vt(t,e,n,r,s,!0))}function Ao(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const xp=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||je(t)||de(t)?{i:At,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xp(e),ref:e&&so(e),scopeId:lp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return l?(Tc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),ti>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const vt=Ov;function Ov(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ev)&&(t=vr),Ao(t)){const l=Xr(t,e,!0);return n&&Tc(l,n),ti>0&&!i&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag=-2,l}if(Hv(t)&&(t=t.__vccOpts),e){e=Nv(e);let{class:l,style:c}=e;l&&!$e(l)&&(e.class=lc(l)),De(c)&&(gc(c)&&!ae(c)&&(c=ft({},c)),e.style=ac(c))}const o=$e(t)?1:Op(t)?128:By(t)?64:De(t)?4:de(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function Nv(t){return t?gc(t)||Tp(t)?ft({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?xv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&xp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&yc(d,c.clone(d)),d}function Mp(t=" ",e=0){return vt(ia,null,t,e)}function Lp(t="",e=!1){return e?(We(),Dv(vr,null,t)):vt(vr,null,t)}function Qt(t){return t==null||typeof t=="boolean"?vt(vr):ae(t)?vt(xt,null,t.slice()):Ao(t)?On(t):vt(ia,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tp(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Mp(e)]):n=8);t.children=e,t.shapeFlag|=n}function xv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lc([e.class,r.class]));else if(s==="style")e.style=ac([e.style,r.style]);else if(Go(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){sn(t,e,7,[n,r])}const Mv=yp();let Lv=0;function Uv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mv,i={uid:Lv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(r,s),emitsOptions:Dp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bv.bind(null,i),t.ce&&t.ce(i),i}let et=null,bo,Al;{const t=Xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};bo=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Al=e("__VUE_SSR_SETTERS__",n=>ni=n)}const _i=t=>{const e=et;return bo(t),t.scope.on(),()=>{t.scope.off(),bo(e)}},wh=()=>{et&&et.scope.off(),bo(null)};function Up(t){return t.vnode.shapeFlag&4}let ni=!1;function Fv(t,e=!1,n=!1){e&&Al(e);const{props:r,children:s}=t.vnode,i=Up(t);hv(t,r,i,e),gv(t,s,n);const o=i?jv(t,e):void 0;return e&&Al(!1),o}function jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nv);const{setup:r}=n;if(r){er();const s=t.setupContext=r.length>1?$v(t):null,i=_i(t),o=mi(r,t,0,[t.props,s]),l=kd(o);if(tr(),i(),(l||t.sp)&&!js(t)&&hp(t),l){if(o.then(wh,wh),e)return o.then(c=>{Ah(t,c)}).catch(c=>{ta(c,t,0)});t.asyncDep=o}else Ah(t,o)}else Fp(t)}function Ah(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=rp(e)),Fp(t)}function Fp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=_i(t);er();try{rv(t)}finally{tr(),s()}}}const Bv={get(t,e){return ct(t,"get",""),t[e]}};function $v(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bv),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rp(mc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function qv(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Hv(t){return de(t)&&"__vccOpts"in t}const Ct=(t,e)=>Ny(t,e,ni);function jp(t,e,n){const r=arguments.length;return r===2?De(e)&&!ae(e)?Ao(e)?vt(t,null,[e]):vt(t,e):vt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ao(n)&&(n=[n]),vt(t,e,n))}const zv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bl;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{bl=bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Bp=bl?t=>bl.createHTML(t):t=>t,Kv="http://www.w3.org/2000/svg",Wv="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Rh=fn&&fn.createElement("template"),Gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(Kv,t):e==="mathml"?fn.createElementNS(Wv,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rh.innerHTML=Bp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Rh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qv=Symbol("_vtc");function Jv(t,e,n){const r=t[Qv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sh=Symbol("_vod"),Yv=Symbol("_vsh"),Xv=Symbol(""),Zv=/(^|;)\s*display\s*:/;function eE(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&io(r,l,"")}else for(const o in e)n[o]==null&&io(r,o,"");for(const o in n)o==="display"&&(i=!0),io(r,o,n[o])}else if(s){if(e!==n){const o=r[Xv];o&&(n+=";"+o),r.cssText=n,i=Zv.test(n)}}else e&&t.removeAttribute("style");Sh in t&&(t[Sh]=i?r.display:"",t[Yv]&&(r.display="none"))}const Ph=/\s*!important$/;function io(t,e,n){if(ae(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=tE(t,e);Ph.test(n)?t.setProperty(Rr(r),n.replace(Ph,""),"important"):t[r]=n}}const Ch=["Webkit","Moz","ms"],Xa={};function tE(t,e){const n=Xa[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return Xa[e]=r;r=Yo(r);for(let s=0;s<Ch.length;s++){const i=Ch[s]+r;if(i in t)return Xa[e]=i}return e}const kh="http://www.w3.org/1999/xlink";function Vh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kh,e.slice(6,e.length)):t.setAttributeNS(kh,e,n):n==null||i&&!Nd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function Dh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nd(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function fr(t,e,n,r){t.addEventListener(e,n,r)}function nE(t,e,n,r){t.removeEventListener(e,n,r)}const Oh=Symbol("_vei");function rE(t,e,n,r,s=null){const i=t[Oh]||(t[Oh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=sE(e);if(r){const h=i[e]=aE(r,s);fr(t,l,h,c)}else o&&(nE(t,l,o,c),i[e]=void 0)}}const Nh=/(?:Once|Passive|Capture)$/;function sE(t){let e;if(Nh.test(t)){e={};let r;for(;r=t.match(Nh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let Za=0;const iE=Promise.resolve(),oE=()=>Za||(iE.then(()=>Za=0),Za=Date.now());function aE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(lE(r,n.value),e,5,[r])};return n.value=t,n.attached=oE(),n}function lE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Jv(t,r,o):e==="style"?eE(t,n,r):Go(e)?sc(e)||rE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uE(t,e,r,o))?(Dh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?Dh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vh(t,e,r,o))};function uE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&$e(n)?!1:e in t}const Ro=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>no(e,n):e};function hE(t){t.target.composing=!0}function Mh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign"),Zr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wr]=Ro(s);const i=r||s.props&&s.props.type==="number";fr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=_o(l)),t[Wr](l)}),n&&fr(t,"change",()=>{t.value=t.value.trim()}),e||(fr(t,"compositionstart",hE),fr(t,"compositionend",Mh),fr(t,"change",Mh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wr]=Ro(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?_o(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},fE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qo(e);fr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?_o(So(o)):So(o));t[Wr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,na(()=>{t._assigning=!1})}),t[Wr]=Ro(r)},mounted(t,{value:e}){Lh(t,e)},beforeUpdate(t,e,n){t[Wr]=Ro(n)},updated(t,{value:e}){t._assigning||Lh(t,e)}};function Lh(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!Qo(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=So(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=oy(e,l)>-1}else o.selected=e.has(l);else if(Zo(So(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function So(t){return"_value"in t?t._value:t.value}const dE=["ctrl","shift","alt","meta"],pE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dE.some(n=>t[`${n}Key`]&&!e.includes(n))},Ic=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=pE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},gE=ft({patchProp:cE},Gv);let Uh;function mE(){return Uh||(Uh=_v(gE))}const $p=(...t)=>{const e=mE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_E(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _E(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yE(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qp;const aa=t=>qp=t,Hp=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function vE(){const t=Ud(!0),e=t.run(()=>gi({}));let n=[],r=[];const s=mc({install(i){aa(s),s._a=i,i.provide(Hp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const zp=()=>{};function Fh(t,e,n,r=zp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Fd()&&ay(s),s}function xr(t,...e){t.slice().forEach(n=>{n(...e)})}const EE=t=>t(),jh=Symbol(),el=Symbol();function Sl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Rl(s)&&Rl(r)&&t.hasOwnProperty(n)&&!je(r)&&!Bn(r)?t[n]=Sl(s,r):t[n]=r}return t}const TE=Symbol();function IE(t){return!Rl(t)||!Object.prototype.hasOwnProperty.call(t,TE)}const{assign:Vn}=Object;function wE(t){return!!(je(t)&&t.effect)}function AE(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=ky(n.state.value[t]);return Vn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=mc(Ct(()=>{aa(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=Kp(t,h,e,n,r,!0),c}function Kp(t,e,n={},r,s,i){let o;const l=Vn({actions:{}},n),c={deep:!0};let h,d,p=[],m=[],v;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),gi({});let V;function D(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Hs.patchFunction,storeId:t,events:v}):(Sl(r.state.value[t],_),y={type:Hs.patchObject,payload:_,storeId:t,events:v});const w=V=Symbol();na().then(()=>{V===w&&(h=!0)}),d=!0,xr(p,y,r.state.value[t])}const $=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{Vn(b,w)})}:zp;function j(){o.stop(),p=[],m=[],r._s.delete(t)}const B=(_,y="")=>{if(jh in _)return _[el]=y,_;const w=function(){aa(r);const b=Array.from(arguments),R=[],T=[];function Ge(ce){R.push(ce)}function Et(ce){T.push(ce)}xr(m,{args:b,name:w[el],store:ne,after:Ge,onError:Et});let ke;try{ke=_.apply(this&&this.$id===t?this:ne,b)}catch(ce){throw xr(T,ce),ce}return ke instanceof Promise?ke.then(ce=>(xr(R,ce),ce)).catch(ce=>(xr(T,ce),Promise.reject(ce))):(xr(R,ke),ke)};return w[jh]=!0,w[el]=y,w},H={_p:r,$id:t,$onAction:Fh.bind(null,m),$patch:D,$reset:$,$subscribe(_,y={}){const w=Fh(p,_,y.detached,()=>b()),b=o.run(()=>$s(()=>r.state.value[t],R=>{(y.flush==="sync"?d:h)&&_({storeId:t,type:Hs.direct,events:v},R)},Vn({},c,y)));return w},$dispose:j},ne=pi(H);r._s.set(t,ne);const A=(r._a&&r._a.runWithContext||EE)(()=>r._e.run(()=>(o=Ud()).run(()=>e({action:B}))));for(const _ in A){const y=A[_];if(je(y)&&!wE(y)||Bn(y))i||(C&&IE(y)&&(je(y)?y.value=C[_]:Sl(y,C[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=B(y,_);A[_]=w,l.actions[_]=y}}return Vn(ne,A),Vn(Ae(ne),A),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:_=>{D(y=>{Vn(y,_)})}}),r._p.forEach(_=>{Vn(ne,o.run(()=>_({store:ne,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(ne.$state,C),h=!0,d=!0,ne}/*! #__NO_SIDE_EFFECTS__ */function bE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=uv();return o=o||(c?Xt(Hp,null):null),o&&aa(o),o=qp,o._s.has(t)||(s?Kp(t,e,r,o):AE(t,r,o)),o._s.get(t)}return i.$id=t,i}const Sr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},RE={name:"App"},SE={id:"app"};function PE(t,e,n,r,s,i){const o=gp("router-view");return We(),Ze("div",SE,[e[0]||(e[0]=ie("h1",null,"Hello from App.vue",-1)),vt(o)])}const Wp=Sr(RE,[["render",PE],["__scopeId","data-v-e2053939"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof document<"u";function Gp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gp(t.default)}const be=Object.assign;function tl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const zs=()=>{},Ht=Array.isArray,Qp=/#/g,kE=/&/g,VE=/\//g,DE=/=/g,OE=/\?/g,Jp=/\+/g,NE=/%5B/g,xE=/%5D/g,Yp=/%5E/g,ME=/%60/g,Xp=/%7B/g,LE=/%7C/g,Zp=/%7D/g,UE=/%20/g;function wc(t){return encodeURI(""+t).replace(LE,"|").replace(NE,"[").replace(xE,"]")}function FE(t){return wc(t).replace(Xp,"{").replace(Zp,"}").replace(Yp,"^")}function Pl(t){return wc(t).replace(Jp,"%2B").replace(UE,"+").replace(Qp,"%23").replace(kE,"%26").replace(ME,"`").replace(Xp,"{").replace(Zp,"}").replace(Yp,"^")}function jE(t){return Pl(t).replace(DE,"%3D")}function BE(t){return wc(t).replace(Qp,"%23").replace(OE,"%3F")}function $E(t){return t==null?"":BE(t).replace(VE,"%2F")}function ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qE=/\/$/,HE=t=>t.replace(qE,"");function nl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=GE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ri(o)}}function zE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function KE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&es(e.matched[r],n.matched[s])&&eg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WE(t[n],e[n]))return!1;return!0}function WE(t,e){return Ht(t)?$h(t,e):Ht(e)?$h(e,t):t===e}function $h(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function GE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var si;(function(t){t.pop="pop",t.push="push"})(si||(si={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function QE(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HE(t)}const JE=/^[^#]+#/;function YE(t,e){return t.replace(JE,"#")+e}function XE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function ZE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qh(t,e){return(history.state?history.state.position-e:-1)+t}const Cl=new Map;function eT(t,e){Cl.set(t,e)}function tT(t){const e=Cl.get(t);return Cl.delete(t),e}let nT=()=>location.protocol+"//"+location.host;function tg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Bh(c,"")}return Bh(n,t)+r+s}function rT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=tg(t,location),C=n.value,V=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===C){o=null;return}D=V?m.position-V.position:0}else r(v);s.forEach($=>{$(n.value,C,{delta:D,type:si.pop,direction:D?D>0?Ks.forward:Ks.back:Ks.unknown})})};function c(){o=n.value}function h(m){s.push(m);const v=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:la()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Hh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?la():null}}function sT(t){const{history:e,location:n}=window,r={value:tg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:nT()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function o(c,h){const d=be({},e.state,Hh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=be({},s.value,e.state,{forward:c,scroll:la()});i(d.current,d,!0);const p=be({},Hh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function iT(t){t=QE(t);const e=sT(t),n=rT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:YE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oT(t){return typeof t=="string"||t&&typeof t=="object"}function ng(t){return typeof t=="string"||typeof t=="symbol"}const rg=Symbol("");var zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zh||(zh={}));function ts(t,e){return be(new Error,{type:t,[rg]:!0},e)}function hn(t,e){return t instanceof Error&&rg in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",aT={sensitive:!1,strict:!1,start:!0,end:!0},lT=/[.+*?^${}()[\]/\\]/g;function cT(t,e){const n=be({},aT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(lT,"\\$&"),v+=40;else if(m.type===1){const{value:C,repeatable:V,optional:D,regexp:$}=m;i.push({name:C,repeatable:V,optional:D});const j=$||Kh;if(j!==Kh){v+=10;try{new RegExp(`(${j})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+H.message)}}let B=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(B=D&&h.length<2?`(?:/${B})`:"/"+B),D&&(B+="?"),s+=B,v+=20,D&&(v+=-8),V&&(v+=-20),j===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",C=i[m-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:C,repeatable:V,optional:D}=v,$=C in h?h[C]:"";if(Ht($)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=Ht($)?$.join("/"):$;if(!j)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function uT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wh(r))return 1;if(Wh(s))return-1}return s.length-r.length}function Wh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hT={type:0,value:""},fT=/[a-zA-Z0-9_]/;function dT(t){if(!t)return[[]];if(t==="/")return[[hT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:fT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function pT(t,e,n){const r=cT(dT(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gT(t,e){const n=[],r=new Map;e=Yh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const C=!v,V=Qh(p);V.aliasOf=v&&v.record;const D=Yh(e,p),$=[V];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of H)$.push(Qh(be({},V,{components:v?v.record.components:V.components,path:ne,aliasOf:v?v.record:V})))}let j,B;for(const H of $){const{path:ne}=H;if(m&&ne[0]!=="/"){const ge=m.record.path,A=ge[ge.length-1]==="/"?"":"/";H.path=m.record.path+(ne&&A+ne)}if(j=pT(H,m,D),v?v.alias.push(j):(B=B||j,B!==j&&B.alias.push(j),C&&p.name&&!Jh(j)&&o(p.name)),ig(j)&&c(j),V.children){const ge=V.children;for(let A=0;A<ge.length;A++)i(ge[A],j,v&&v.children[A])}v=v||j}return B?()=>{o(B)}:zs}function o(p){if(ng(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=yT(p,n);n.splice(m,0,p),p.record.name&&!Jh(p)&&r.set(p.record.name,p)}function h(p,m){let v,C={},V,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ts(1,{location:p});D=v.record.name,C=be(Gh(m.params,v.keys.filter(B=>!B.optional).concat(v.parent?v.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Gh(p.params,v.keys.map(B=>B.name))),V=v.stringify(C)}else if(p.path!=null)V=p.path,v=n.find(B=>B.re.test(V)),v&&(C=v.parse(V),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!v)throw ts(1,{location:p,currentLocation:m});D=v.record.name,C=be({},m.params,p.params),V=v.stringify(C)}const $=[];let j=v;for(;j;)$.unshift(j.record),j=j.parent;return{name:D,path:V,params:C,matched:$,meta:_T($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Gh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:mT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function mT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _T(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Yh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;sg(t,e[i])<0?r=i:n=i+1}const s=vT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vT(t){let e=t;for(;e=e.parent;)if(ig(e)&&sg(t,e)===0)return e}function ig({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ET(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jp," "),o=i.indexOf("="),l=ri(o<0?i:i.slice(0,o)),c=o<0?null:ri(i.slice(o+1));if(l in e){let h=e[l];Ht(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Xh(t){let e="";for(let n in t){const r=t[n];if(n=jE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&Pl(i)):[r&&Pl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IT=Symbol(""),Zh=Symbol(""),Ac=Symbol(""),og=Symbol(""),kl=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(ts(4,{from:n,to:e})):m instanceof Error?c(m):oT(m)?c(ts(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function rl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Gp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Nn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=CE(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Nn(v,n,r,o,l,s)()}))}}return i}function ef(t){const e=Xt(Ac),n=Xt(og),r=Ct(()=>{const c=zr(t.to);return e.resolve(c)}),s=Ct(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(es.bind(null,d));if(m>-1)return m;const v=tf(c[h-2]);return h>1&&tf(d)===v&&p[p.length-1].path!==v?p.findIndex(es.bind(null,c[h-2])):m}),i=Ct(()=>s.value>-1&&ST(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&eg(n.params,r.value.params));function l(c={}){if(RT(c)){const h=e[zr(t.replace)?"replace":"push"](zr(t.to)).catch(zs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function wT(t){return t.length===1?t[0]:t}const AT=up({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ef,setup(t,{slots:e}){const n=pi(ef(t)),{options:r}=Xt(Ac),s=Ct(()=>({[nf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wT(e.default(n));return t.custom?i:jp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bT=AT;function RT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ST(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nf=(t,e,n)=>t??e??n,PT=up({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(kl),s=Ct(()=>t.route||r.value),i=Xt(Zh,0),o=Ct(()=>{let h=zr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ct(()=>s.value.matched[o.value]);ro(Zh,Ct(()=>o.value+1)),ro(IT,l),ro(kl,s);const c=gi();return $s(()=>[c.value,l.value,t.name],([h,d,p],[m,v,C])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!es(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return rf(n.default,{Component:m,route:h});const v=p.props[d],C=v?v===!0?h.params:typeof v=="function"?v(h):v:null,D=jp(m,be({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return rf(n.default,{Component:D,route:h})||D}}});function rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const CT=PT;function kT(t){const e=gT(t.routes,t),n=t.parseQuery||ET,r=t.stringifyQuery||Xh,s=t.history,i=Ds(),o=Ds(),l=Ds(),c=Sy(Cn);let h=Cn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=tl.bind(null,O=>""+O),p=tl.bind(null,$E),m=tl.bind(null,ri);function v(O,J){let G,X;return ng(O)?(G=e.getRecordMatcher(O),X=J):X=O,e.addRoute(X,G)}function C(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,J){if(J=be({},J||c.value),typeof O=="string"){const S=nl(n,O,J.path),N=e.resolve({path:S.path},J),L=s.createHref(S.fullPath);return be(S,N,{params:m(N.params),hash:ri(S.hash),redirectedFrom:void 0,href:L})}let G;if(O.path!=null)G=be({},O,{path:nl(n,O.path,J.path).path});else{const S=be({},O.params);for(const N in S)S[N]==null&&delete S[N];G=be({},O,{params:p(S)}),J.params=p(J.params)}const X=e.resolve(G,J),Ie=O.hash||"";X.params=d(m(X.params));const E=zE(r,be({},O,{hash:FE(Ie),path:X.path})),I=s.createHref(E);return be({fullPath:E,hash:Ie,query:r===Xh?TT(O.query):O.query||{}},X,{redirectedFrom:void 0,href:I})}function j(O){return typeof O=="string"?nl(n,O,c.value.path):be({},O)}function B(O,J){if(h!==O)return ts(8,{from:J,to:O})}function H(O){return A(O)}function ne(O){return H(be(j(O),{replace:!0}))}function ge(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let X=typeof G=="function"?G(O):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=j(X):{path:X},X.params={}),be({query:O.query,hash:O.hash,params:X.path!=null?{}:O.params},X)}}function A(O,J){const G=h=$(O),X=c.value,Ie=O.state,E=O.force,I=O.replace===!0,S=ge(G);if(S)return A(be(j(S),{state:typeof S=="object"?be({},Ie,S.state):Ie,force:E,replace:I}),J||G);const N=G;N.redirectedFrom=J;let L;return!E&&KE(r,X,G)&&(L=ts(16,{to:N,from:X}),Dt(X,X,!0,!1)),(L?Promise.resolve(L):w(N,X)).catch(x=>hn(x)?hn(x,2)?x:Ft(x):_e(x,N,X)).then(x=>{if(x){if(hn(x,2))return A(be({replace:I},j(x.to),{state:typeof x.to=="object"?be({},Ie,x.to.state):Ie,force:E}),J||N)}else x=R(N,X,!0,I,Ie);return b(N,X,x),x})}function _(O,J){const G=B(O,J);return G?Promise.reject(G):Promise.resolve()}function y(O){const J=An.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function w(O,J){let G;const[X,Ie,E]=VT(O,J);G=rl(X.reverse(),"beforeRouteLeave",O,J);for(const S of X)S.leaveGuards.forEach(N=>{G.push(Nn(N,O,J))});const I=_.bind(null,O,J);return G.push(I),Tt(G).then(()=>{G=[];for(const S of i.list())G.push(Nn(S,O,J));return G.push(I),Tt(G)}).then(()=>{G=rl(Ie,"beforeRouteUpdate",O,J);for(const S of Ie)S.updateGuards.forEach(N=>{G.push(Nn(N,O,J))});return G.push(I),Tt(G)}).then(()=>{G=[];for(const S of E)if(S.beforeEnter)if(Ht(S.beforeEnter))for(const N of S.beforeEnter)G.push(Nn(N,O,J));else G.push(Nn(S.beforeEnter,O,J));return G.push(I),Tt(G)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),G=rl(E,"beforeRouteEnter",O,J,y),G.push(I),Tt(G))).then(()=>{G=[];for(const S of o.list())G.push(Nn(S,O,J));return G.push(I),Tt(G)}).catch(S=>hn(S,8)?S:Promise.reject(S))}function b(O,J,G){l.list().forEach(X=>y(()=>X(O,J,G)))}function R(O,J,G,X,Ie){const E=B(O,J);if(E)return E;const I=J===Cn,S=Lr?history.state:{};G&&(X||I?s.replace(O.fullPath,be({scroll:I&&S&&S.scroll},Ie)):s.push(O.fullPath,Ie)),c.value=O,Dt(O,J,G,I),Ft()}let T;function Ge(){T||(T=s.listen((O,J,G)=>{if(!zt.listening)return;const X=$(O),Ie=ge(X);if(Ie){A(be(Ie,{replace:!0,force:!0}),X).catch(zs);return}h=X;const E=c.value;Lr&&eT(qh(E.fullPath,G.delta),la()),w(X,E).catch(I=>hn(I,12)?I:hn(I,2)?(A(be(j(I.to),{force:!0}),X).then(S=>{hn(S,20)&&!G.delta&&G.type===si.pop&&s.go(-1,!1)}).catch(zs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),_e(I,X,E))).then(I=>{I=I||R(X,E,!1),I&&(G.delta&&!hn(I,8)?s.go(-G.delta,!1):G.type===si.pop&&hn(I,20)&&s.go(-1,!1)),b(X,E,I)}).catch(zs)}))}let Et=Ds(),ke=Ds(),ce;function _e(O,J,G){Ft(O);const X=ke.list();return X.length?X.forEach(Ie=>Ie(O,J,G)):console.error(O),Promise.reject(O)}function Rt(){return ce&&c.value!==Cn?Promise.resolve():new Promise((O,J)=>{Et.add([O,J])})}function Ft(O){return ce||(ce=!O,Ge(),Et.list().forEach(([J,G])=>O?G(O):J()),Et.reset()),O}function Dt(O,J,G,X){const{scrollBehavior:Ie}=t;if(!Lr||!Ie)return Promise.resolve();const E=!G&&tT(qh(O.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return na().then(()=>Ie(O,J,E)).then(I=>I&&ZE(I)).catch(I=>_e(I,O,J))}const xe=O=>s.go(O);let Me;const An=new Set,zt={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:t,push:H,replace:ne,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ke.add,isReady:Rt,install(O){const J=this;O.component("RouterLink",bT),O.component("RouterView",CT),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>zr(c)}),Lr&&!Me&&c.value===Cn&&(Me=!0,H(s.location).catch(Ie=>{}));const G={};for(const Ie in Cn)Object.defineProperty(G,Ie,{get:()=>c.value[Ie],enumerable:!0});O.provide(Ac,J),O.provide(og,ep(G)),O.provide(kl,c);const X=O.unmount;An.add(O),O.unmount=function(){An.delete(O),An.size<1&&(h=Cn,T&&T(),T=null,c.value=Cn,Me=!1,ce=!1),X()}}};function Tt(O){return O.reduce((J,G)=>J.then(()=>y(G)),Promise.resolve())}return zt}function VT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>es(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>es(h,c))||s.push(c))}return[n,r,s]}const yi=bE("user",{state:()=>({currentUser:null}),actions:{async fetchCurrentUser(){try{const e=await(await fetch("/api/user")).json();this.currentUser=e}catch(t){console.error("Failed to fetch user:",t)}}}}),DT={data(){return{email:"",password:"",errorMessage:""}},methods:{async handleLogin(){await yi().login(this.email,this.password)?this.$router.push("/dashboard"):this.errorMessage="Invalid email or password"}}},OT={class:"login-container"},NT={key:0,class:"error"};function xT(t,e,n,r,s,i){const o=gp("router-link");return We(),Ze("div",OT,[ie("form",{onSubmit:e[2]||(e[2]=Ic((...l)=>i.handleLogin&&i.handleLogin(...l),["prevent"]))},[gr(ie("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.email=l),type:"email",placeholder:"Email",required:""},null,512),[[Zr,s.email]]),gr(ie("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",placeholder:"Password",required:""},null,512),[[Zr,s.password]]),e[3]||(e[3]=ie("button",{type:"submit"},"Login",-1)),s.errorMessage?(We(),Ze("p",NT,yt(s.errorMessage),1)):Lp("",!0)],32),vt(o,{to:"/register"},{default:cp(()=>e[4]||(e[4]=[Mp("Don't have an account? Register here")])),_:1})])}const MT=Sr(DT,[["render",xT],["__scopeId","data-v-39ab9aed"]]),LT={class:"dashboard"},UT={key:0},FT={key:1},jT={__name:"Dashboard",setup(t){const e=yi(),n=Ct(()=>e.currentUser),r=gi(null);return vc(async()=>{n.value||await e.fetchCurrentUser();try{const s=await fetch(`/api/stats/${e.currentUser.id}`);r.value=await s.json()}catch(s){console.error("Failed to load stats:",s)}}),(s,i)=>{var o;return We(),Ze("div",LT,[ie("h1",null,"Welcome, "+yt(((o=n.value)==null?void 0:o.name)||"User")+"!",1),r.value?(We(),Ze("section",UT,[i[0]||(i[0]=ie("h2",null,"Your Stats",-1)),ie("ul",null,[ie("li",null,"Steps Today: "+yt(r.value.steps),1),ie("li",null,"Calories Burned: "+yt(r.value.calories),1),ie("li",null,"Workout Time: "+yt(r.value.minutes)+" minutes",1)])])):(We(),Ze("section",FT,i[1]||(i[1]=[ie("p",null,"Loading stats...",-1)])))])}}},BT=Sr(jT,[["__scopeId","data-v-e4870a30"]]),$T=()=>{};var sf={};/**
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
 */const ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new HT;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zT=function(t){const e=ag(t);return lg.encodeByteArray(e,!0)},Po=function(t){return zT(t).replace(/\./g,"")},cg=function(t){try{return lg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WT=()=>KT().__FIREBASE_DEFAULTS__,GT=()=>{if(typeof process>"u"||typeof sf>"u")return;const t=sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cg(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return $T()||WT()||GT()||QT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ug=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hg=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},fg=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function eI(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iI(){return!eI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oI(){try{return typeof indexedDB=="object"}catch{return!1}}function aI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lI="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function cI(t,e){return t.replace(uI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(of(i)&&of(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function of(t){return t!==null&&typeof t=="object"}/**
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
 */function Ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sl),s.error===void 0&&(s.error=sl),s.complete===void 0&&(s.complete=sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sl(){}/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(t){return t===hr?void 0:t}function _I(t){return t.instantiationMode==="EAGER"}/**
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
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const vI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},EI=ye.INFO,TI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},II=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=TI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=II,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const wI=(t,e)=>e.some(n=>t instanceof n);let af,lf;function AI(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bI(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,Vl=new WeakMap,pg=new WeakMap,il=new WeakMap,Rc=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($n(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function SI(t){if(Vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vl.set(t,e)}let Dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PI(t){Dl=t(Dl)}function CI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ol(this),e,...n);return pg.set(r,e.sort?e.sort():[e]),$n(r)}:bI().includes(t)?function(...e){return t.apply(ol(this),e),$n(dg.get(this))}:function(...e){return $n(t.apply(ol(this),e))}}function kI(t){return typeof t=="function"?CI(t):(t instanceof IDBTransaction&&SI(t),wI(t,AI())?new Proxy(t,Dl):t)}function $n(t){if(t instanceof IDBRequest)return RI(t);if(il.has(t))return il.get(t);const e=kI(t);return e!==t&&(il.set(t,e),Rc.set(e,t)),e}const ol=t=>Rc.get(t);function VI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$n(o);return r&&o.addEventListener("upgradeneeded",c=>{r($n(o.result),c.oldVersion,c.newVersion,$n(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const DI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],al=new Map;function cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(al.get(e))return al.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return al.set(e,i),i}PI(t=>({...t,get:(e,n,r)=>cf(e,n)||t.get(e,n,r),has:(e,n)=>!!cf(e,n)||t.has(e,n)}));/**
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
 */class NI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",uf="0.11.5";/**
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
 */const _n=new bc("@firebase/app"),MI="@firebase/app-compat",LI="@firebase/analytics-compat",UI="@firebase/analytics",FI="@firebase/app-check-compat",jI="@firebase/app-check",BI="@firebase/auth",$I="@firebase/auth-compat",qI="@firebase/database",HI="@firebase/data-connect",zI="@firebase/database-compat",KI="@firebase/functions",WI="@firebase/functions-compat",GI="@firebase/installations",QI="@firebase/installations-compat",JI="@firebase/messaging",YI="@firebase/messaging-compat",XI="@firebase/performance",ZI="@firebase/performance-compat",ew="@firebase/remote-config",tw="@firebase/remote-config-compat",nw="@firebase/storage",rw="@firebase/storage-compat",sw="@firebase/firestore",iw="@firebase/vertexai",ow="@firebase/firestore-compat",aw="firebase",lw="11.6.1";/**
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
 */const Nl="[DEFAULT]",cw={[Ol]:"fire-core",[MI]:"fire-core-compat",[UI]:"fire-analytics",[LI]:"fire-analytics-compat",[jI]:"fire-app-check",[FI]:"fire-app-check-compat",[BI]:"fire-auth",[$I]:"fire-auth-compat",[qI]:"fire-rtdb",[HI]:"fire-data-connect",[zI]:"fire-rtdb-compat",[KI]:"fire-fn",[WI]:"fire-fn-compat",[GI]:"fire-iid",[QI]:"fire-iid-compat",[JI]:"fire-fcm",[YI]:"fire-fcm-compat",[XI]:"fire-perf",[ZI]:"fire-perf-compat",[ew]:"fire-rc",[tw]:"fire-rc-compat",[nw]:"fire-gcs",[rw]:"fire-gcs-compat",[sw]:"fire-fst",[ow]:"fire-fst-compat",[iw]:"fire-vertex","fire-js":"fire-js",[aw]:"fire-js-all"};/**
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
 */const Co=new Map,uw=new Map,xl=new Map;function hf(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(xl.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of Co.values())hf(n,t);for(const n of uw.values())hf(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const hw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new vi("app","Firebase",hw);/**
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
 */class fw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=lw;function gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=hg()),!n)throw qn.create("no-options");const i=Co.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new yI(s);for(const c of xl.values())o.addComponent(c);const l=new fw(n,r,o);return Co.set(s,l),l}function mg(t=Nl){const e=Co.get(t);if(!e&&t===Nl&&hg())return gg();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=cw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}ns(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dw="firebase-heartbeat-database",pw=1,ii="firebase-heartbeat-store";let ll=null;function _g(){return ll||(ll=VI(dw,pw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),ll}async function gw(t){try{const n=(await _g()).transaction(ii),r=await n.objectStore(ii).get(yg(t));return await n.done,r}catch(e){if(e instanceof wn)_n.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function ff(t,e){try{const r=(await _g()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,yg(t)),await r.done}catch(n){if(n instanceof wn)_n.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function yg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mw=1024,_w=30;class yw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ew(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=df();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>_w){const o=Tw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=df(),{heartbeatsToSend:r,unsentEntries:s}=vw(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _n.warn(n),""}}}function df(){return new Date().toISOString().substring(0,10)}function vw(t,e=mw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ew{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oI()?aI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pf(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}function Tw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Iw(t){ns(new Tr("platform-logger",e=>new NI(e),"PRIVATE")),ns(new Tr("heartbeat",e=>new yw(e),"PRIVATE")),Hn(Ol,uf,t),Hn(Ol,uf,"esm2017"),Hn("fire-js","")}Iw("");var ww="firebase",Aw="11.6.1";/**
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
 */Hn(ww,Aw,"app");var gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,vg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function y(){}y.prototype=_.prototype,A.D=_.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)T[Ge-2]=arguments[Ge];return _.prototype[b].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=A.g[0],y=A.g[1],b=A.g[2];var R=A.g[3],T=_+(R^y&(b^R))+w[0]+3614090360&4294967295;_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[3]+3250441966&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[7]+4249261313&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[11]+2304563134&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(R^y&(b^R))+w[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(b^_&(y^b))+w[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(y^R&(_^y))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=y+(_^b&(R^_))+w[15]+1236535329&4294967295,y=b+(T<<22&4294967295|T>>>10),T=_+(b^R&(y^b))+w[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[0]+3921069994&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[4]+3889429448&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[8]+1163531501&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(y^b))+w[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^b&(_^y))+w[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^y&(R^_))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(b^R))+w[12]+2368359562&4294967295,y=b+(T<<20&4294967295|T>>>12),T=_+(y^b^R)+w[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[14]+4259657740&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[10]+3200236656&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[6]+76029189&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(y^b^R)+w[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^b)+w[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^y)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=y+(b^R^_)+w[2]+3299628645&4294967295,y=b+(T<<23&4294967295|T>>>9),T=_+(b^(y|~R))+w[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[5]+4237533241&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[1]+2240044497&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[13]+1309151649&4294967295,y=b+(T<<21&4294967295|T>>>11),T=_+(b^(y|~R))+w[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~b))+w[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~y))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=y+(R^(b|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var y=_-this.blockSize,w=this.B,b=this.h,R=0;R<_;){if(b==0)for(;R<=y;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<_;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<_;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var y=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=y&255,y/=256;for(this.u(A),A=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)A[y++]=this.g[_]>>>w&255;return A};function i(A,_){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=_(A)}function o(A,_){this.h=_;for(var y=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==_||(y[b]=R,w=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var _=[],y=1,w=0;A>=y;w++)_[w]=A/y|0,y*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),_);8>R?(R=h(Math.pow(_,R)),w=w.j(R).add(h(T))):(w=w.j(y),w=w.add(h(T)))}return w}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();for(var A=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);A+=(0<=w?w:4294967296+w)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(V(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),y=this,w="";;){var b=H(y,_).g;y=$(y,b.j(_));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=b,C(y))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=$(this,A),V(A)?-1:C(A)?0:1};function D(A){for(var _=A.g.length,y=[],w=0;w<_;w++)y[w]=~A.g[w];return new o(y,~A.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0,b=0;b<=_;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,y[b]=T<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function $(A,_){return A.add(D(_))}t.j=function(A){if(C(this)||C(A))return p;if(V(this))return V(A)?D(this).j(D(A)):D(D(this).j(A));if(V(A))return D(this.j(D(A)));if(0>this.l(v)&&0>A.l(v))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,Ge=A.i(b)>>>16,Et=A.i(b)&65535;y[2*w+2*b]+=T*Et,j(y,2*w+2*b),y[2*w+2*b+1]+=R*Et,j(y,2*w+2*b+1),y[2*w+2*b+1]+=T*Ge,j(y,2*w+2*b+1),y[2*w+2*b+2]+=R*Ge,j(y,2*w+2*b+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function j(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function B(A,_){this.g=A,this.h=_}function H(A,_){if(C(_))throw Error("division by zero");if(C(A))return new B(p,p);if(V(A))return _=H(D(A),_),new B(D(_.g),D(_.h));if(V(_))return _=H(A,D(_)),new B(D(_.g),_.h);if(30<A.g.length){if(V(A)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=_;0>=w.l(A);)y=ne(y),w=ne(w);var b=ge(y,1),R=ge(w,1);for(w=ge(w,2),y=ge(y,2);!C(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(y),R=T),w=ge(w,1),y=ge(y,1)}return _=$(A,b.j(_)),new B(b,_)}for(b=p;0<=A.l(_);){for(y=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(y),T=R.j(_);V(T)||0<T.l(A);)y-=w,R=h(y),T=R.j(_);C(R)&&(R=m),b=b.add(R),A=$(A,T)}return new B(b,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&A.i(w);return new o(y,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|A.i(w);return new o(y,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^A.i(w);return new o(y,this.h^A.h)};function ne(A){for(var _=A.g.length+1,y=[],w=0;w<_;w++)y[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(y,A.h)}function ge(A,_){var y=_>>5;_%=32;for(var w=A.g.length-y,b=[],R=0;R<w;R++)b[R]=0<_?A.i(R+y)>>>_|A.i(R+y+1)<<32-_:A.i(R+y);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,zn=o}).apply(typeof gf<"u"?gf:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eg,Ns,Tg,oo,Ml,Ig,wg,Ag;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,P={next:function(){if(!g&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,P,k){for(var K=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)K[Pe-2]=arguments[Pe];return u.prototype[P].apply(g,K)}}function V(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=a.length||0,k=g.length||0;a.length=P+k;for(let K=0;K<k;K++)a[P+K]=g[K]}else a.push(g)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ne=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ge(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let k=0;k<y.length;k++)f=y[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Rt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ge{constructor(){this.h=this.g=null}add(u,f){const g=Et.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Et=new $(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,_e=!1,Rt=new Ge,Ft=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var u=Et;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_e=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function zt(a,u){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zt.aa.h.call(this)}}C(zt,Me);var Tt={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(a,u,f,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function X(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,u,f,g,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var K=I(a,u,g,P);return-1<K?(u=a[K],f||(u.fa=!1)):(u=new G(u,this.src,k,!!g,P),u.fa=f,a.push(u)),u};function E(a,u){var f=u.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(g,P,1),k&&(X(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function I(a,u,f,g){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function L(a,u,f,g,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(a,u[k],f,g,P);return null}return f=le(f),a&&a[O]?a.K(u,f,h(g)?!!g.capture:!1,P):x(a,u,f,!1,g,P)}function x(a,u,f,g,P,k){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[S]=Pe=new Ie(a)),f=Pe.add(u,f,g,K,k),f.proxy)return f;if(g=W(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)An||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function a(f){return u.call(a.src,a.listener,f)}const u=re;return a}function z(a,u,f,g,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(a,u[k],f,g,P);else g=h(g)?!!g.capture:!!g,f=le(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=I(k,f,g,P),-1<f&&(X(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,f,g,P)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])E(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Q(u))?(E(f,a),f.h==0&&(f.src=null,u[S]=null)):X(a)}}}function F(a){return a in N?N[a]:N[a]="on"+a}function re(a,u){if(a.da)a=!0;else{u=new zt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function Q(a){return a=a[S],a instanceof Ie?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function se(){xe.call(this),this.i=new Ie(this),this.M=this,this.F=null}C(se,xe),se.prototype[O]=!0,se.prototype.removeEventListener=function(a,u,f,g){z(this,a,u,f,g)};function pe(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Me(u,a);else if(u instanceof Me)u.target=u.target||a;else{var P=u;u=new Me(g,a),w(u,P)}if(P=!0,f)for(var k=f.length-1;0<=k;k--){var K=u.g=f[k];P=Ee(K,g,!0,u)&&P}if(K=u.g=a,P=Ee(K,g,!0,u)&&P,P=Ee(K,g,!1,u)&&P,f)for(k=0;k<f.length;k++)K=u.g=f[k],P=Ee(K,g,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)X(f[g]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},se.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ee(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==f){var Pe=K.listener,Ye=K.ha||K.src;K.fa&&E(a.i,K),P=Pe.call(Ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function rt(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Qe(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,Qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ot extends xe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){xe.call(this),this.h=a,this.g={}}C(st,xe);var bn=[];function _s(a){ge(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),_s(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=l.JSON.stringify,Nt=l.JSON.parse,Ci=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ca(){}Ca.prototype.h=null;function _u(a){return a.h||(a.h=a.i())}function yu(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){Me.call(this,"d")}C(ka,Me);function Va(){Me.call(this,"c")}C(Va,Me);var sr={},vu=null;function ki(){return vu=vu||new se}sr.La="serverreachability";function Eu(a){Me.call(this,sr.La,a)}C(Eu,Me);function vs(a){const u=ki();pe(u,new Eu(u))}sr.STAT_EVENT="statevent";function Tu(a,u){Me.call(this,sr.STAT_EVENT,a),this.stat=u}C(Tu,Me);function pt(a){const u=ki();pe(u,new Tu(u,a))}sr.Ma="timingevent";function Iu(a,u){Me.call(this,sr.Ma,a),this.size=u}C(Iu,Me);function Es(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function b_(a,u,f,g,P,k){a.info(function(){if(a.g)if(k)for(var K="",Pe=k.split("&"),Ye=0;Ye<Pe.length;Ye++){var we=Pe[Ye].split("=");if(1<we.length){var it=we[0];we=we[1];var ot=it.split("_");K=2<=ot.length&&ot[1]=="type"?K+(it+"="+we+"&"):K+(it+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+K})}function R_(a,u,f,g,P,k,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+k+" "+K})}function kr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+P_(a,f)+(g?" "+g:"")})}function S_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ts.prototype.info=function(){};function P_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Je(f)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Di(){}C(Di,Ca),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Da=new Di;function Rn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var bu={},Oa={};function Na(a,u,f){a.L=1,a.v=Mi(ln(u)),a.m=f,a.P=!0,Ru(a,null)}function Ru(a,u){a.F=Date.now(),Oi(a),a.A=ln(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ju(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Au,a.g=sh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Ot(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(bn[0]=P.toString()),P=bn);for(var k=0;k<P.length;k++){var K=L(f,P[k],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),vs(),b_(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const u=this.M;u&&cn(a)==3?u.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=cn(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Wu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Or?vs(3):vs(2)),xa(this);var f=this.g.Z();this.X=f;t:if(Su(this)){var g=Wu(this.g);a="";var P=g.length,k=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Is(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,R_(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ye=this.g;if((Pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Pe)){var we=Pe;break t}}we=null}if(f=we)kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,f);else{this.o=!1,this.s=3,pt(12),ir(this),Is(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<K.length;)if(jt=C_(this,K),jt==Oa){ot==4&&(this.s=4,pt(14),f=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==bu){this.s=4,pt(15),kr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else kr(this.i,this.l,jt,null),Ma(this,jt);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||K.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)kr(this.i,this.l,K,"[Invalid Chunked Response]"),ir(this),Is(this);else if(0<K.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),$a(it),it.M=!0,pt(11))}}else kr(this.i,this.l,K,null),Ma(this,K);ot==4&&ir(this),this.o&&!this.J&&(ot==4?eh(this.j,this):(this.o=!1,Oi(this)))}else K_(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),ir(this),Is(this)}}}catch{}finally{}};function Su(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function C_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Oa:(f=Number(u.substring(f,g)),isNaN(f)?bu:(g+=1,g+f>u.length?Oa:(u=u.slice(g,g+f),a.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,ir(this)};function Oi(a){a.S=Date.now()+a.I,Pu(a,a.I)}function Pu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Es(m(a.ba,a),u)}function xa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(S_(this.i,this.A),this.L!=2&&(vs(),pt(17)),ir(this),this.s=2,Is(this)):Pu(this,this.S-a)};function Is(a){a.j.G==0||a.J||eh(a.j,a)}function ir(a){xa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,_s(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ma(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||La(f.h,a))){if(!a.K&&La(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)$i(f),ji(f);else break e;Ba(f),pt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(m(f.Za,f),6e3));if(1>=Vu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((a.K||f.g==a)&&$i(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const it=we[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=we[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Or=we[5];Or!=null&&typeof Or=="number"&&0<Or&&(g=1.5*Or,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jt=a.g;if(jt){const Hi=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var k=g.h;k.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ua(k,k.h),k.h=null))}if(g.D){const qa=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(g.ya=qa,Oe(g.I,g.D,qa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=rh(g,g.J?g.ia:null,g.W),K.K){Du(g.h,K);var Pe=K,Ye=g.L;Ye&&(Pe.I=Ye),Pe.B&&(xa(Pe),Oi(Pe)),g.g=K}else Xu(g);0<f.i.length&&Bi(f)}else we[0]!="stop"&&we[0]!="close"||ar(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ar(f,7):ja(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}vs(4)}catch{}}var k_=class{constructor(a,u){this.g=a,this.map=u}};function Cu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ku(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vu(a){return a.h?1:a.g?a.g.size:0}function La(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ua(a,u){a.g?a.g.add(u):a.h=u}function Du(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return V(a.i)}function V_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function D_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Nu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=D_(a),g=V_(a),P=g.length,k=0;k<P;k++)u.call(void 0,g[k],f&&f[k],a)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),P=null;if(0<=g){var k=a[f].substring(0,g);P=a[f].substring(g+1)}else k=a[f];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Ni(this,a.j),this.o=a.o,this.g=a.g,xi(this,a.s),this.l=a.l;var u=a.i,f=new bs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Mu(this,f),this.m=a.m}else a&&(u=String(a).match(xu))?(this.h=!1,Ni(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),xi(this,u[4]),this.l=ws(u[5]||"",!0),Mu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(As(u,Lu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(As(u,Lu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(As(f,f.charAt(0)=="/"?M_:x_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",As(f,U_)),a.join("")};function ln(a){return new or(a)}function Ni(a,u,f){a.j=f?ws(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function xi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Mu(a,u,f){u instanceof bs?(a.i=u,F_(a.i,a.h)):(f||(u=As(u,L_)),a.i=new bs(u,a.h))}function Oe(a,u,f){a.i.set(u,f)}function Mi(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ws(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function As(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,N_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function N_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lu=/[#\/\?@]/g,x_=/[#\?:]/g,M_=/[#\?]/g,L_=/[#\?@]/g,U_=/#/g;function bs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sn(a){a.g||(a.g=new Map,a.h=0,a.i&&O_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=bs.prototype,t.add=function(a,u){Sn(this),this.i=null,a=Vr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Uu(a,u){Sn(a),u=Vr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Fu(a,u){return Sn(a),u=Vr(a,u),a.g.has(u)}t.forEach=function(a,u){Sn(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Sn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=a[g];for(let k=0;k<P.length;k++)f.push(u[g])}return f},t.V=function(a){Sn(this);let u=[];if(typeof a=="string")Fu(this,a)&&(u=u.concat(this.g.get(Vr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Sn(this),this.i=null,a=Vr(this,a),Fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ju(a,u,f){Uu(a,u),0<f.length&&(a.i=null,a.g.set(Vr(a,u),V(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var P=k;K[g]!==""&&(P+="="+encodeURIComponent(String(K[g]))),a.push(P)}}return this.i=a.join("&")};function Vr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function F_(a,u){u&&!a.j&&(Sn(a),a.i=null,a.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Uu(this,g),ju(this,P,f))},a)),a.j=u}function j_(a,u){const f=new Ts;if(l.Image){const g=new Image;g.onload=v(Pn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(Pn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(Pn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(Pn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function B_(a,u){const f=new Ts,g=new AbortController,P=setTimeout(()=>{g.abort(),Pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Pn(f,"TestPingServer: ok",!0,u):Pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Pn(f,"TestPingServer: error",!1,u)})}function Pn(a,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function $_(){this.g=new Ci}function q_(a,u,f){const g=f||"";try{Nu(a,function(P,k){let K=P;h(P)&&(K=Je(P)),u.push(g+k+"="+encodeURIComponent(K))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Li(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Li,Ca),Li.prototype.g=function(){return new Ui(this.l,this.j)},Li.prototype.i=function(a){return function(){return a}}({});function Ui(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ui,se),t=Ui.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Rs(this):Ss(this),this.readyState==3&&Bu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ss(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $u(a){let u="";return ge(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Fa(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$u(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Oe(a,u,f))}function Ue(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ue,se);var H_=/^https?$/i,z_=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?_u(this.o):_u(Da),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){qu(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(z_,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of f)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ku(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){qu(this,k)}};function qu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Hu(a),Fi(a)}function Hu(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Fi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},t.bb=function(){zu(this)};function zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)rt(a.Ea,0,a);else if(pe(a,"readystatechange"),cn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=K===0){var P=String(a.D).match(xu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!H_.test(P?P.toLowerCase():"")}f=g}if(f)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var k=2<cn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Hu(a)}}finally{Fi(a)}}}}function Fi(a,u){if(a.g){Ku(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{f.onreadystatechange=g}catch{}}}function Ku(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Nt(u)}};function Wu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function K_(a){const u={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var f=b(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[P]||[];u[P]=k,k.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Gu(a){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cu(a&&a.concurrentRequestLimit),this.Da=new $_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gu.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){pt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rh(this,null,this.W),Bi(this)};function ja(a){if(Qu(a),a.G==3){var u=a.U++,f=ln(a.I);if(Oe(f,"SID",a.K),Oe(f,"RID",u),Oe(f,"TYPE","terminate"),Cs(a,f),u=new Rn(a,a.j,u),u.L=2,u.v=Mi(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}nh(a)}function ji(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function Qu(a){ji(a),a.u&&(l.clearTimeout(a.u),a.u=null),$i(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bi(a){if(!ku(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||Ft(),_e||(ce(),_e=!0),Rt.add(u,a),a.B=0}}function W_(a,u){return Vu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Es(m(a.Ga,a,u),th(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Rn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Yu(this,P,u),f=ln(this.I),Oe(f,"RID",a),Oe(f,"CVER",22),this.D&&Oe(f,"X-HTTP-Session-Id",this.D),Cs(this,f),k&&(this.O?u="headers="+encodeURIComponent(String($u(k)))+"&"+u:this.m&&Fa(f,this.m,k)),Ua(this.h,P),this.Ua&&Oe(f,"TYPE","init"),this.P?(Oe(f,"$req",u),Oe(f,"SID","null"),P.T=!0,Na(P,f,null)):Na(P,f,u),this.G=2}}else this.G==3&&(a?Ju(this,a):this.i.length==0||ku(this.h)||Ju(this))};function Ju(a,u){var f;u?f=u.l:f=a.U++;const g=ln(a.I);Oe(g,"SID",a.K),Oe(g,"RID",f),Oe(g,"AID",a.T),Cs(a,g),a.m&&a.o&&Fa(g,a.m,a.o),f=new Rn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Yu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ua(a.h,f),Na(f,g,u)}function Cs(a,u){a.H&&ge(a.H,function(f,g){Oe(u,g,f)}),a.l&&Nu({},function(f,g){Oe(u,g,f)})}function Yu(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const K=["count="+f];k==-1?0<f?(k=P[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Pe=!0;for(let Ye=0;Ye<f;Ye++){let we=P[Ye].g;const it=P[Ye].map;if(we-=k,0>we)k=Math.max(0,P[Ye].g-100),Pe=!1;else try{q_(it,K,"req"+we+"_")}catch{g&&g(it)}}if(Pe){g=K.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Xu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||Ft(),_e||(ce(),_e=!0),Rt.add(u,a),a.v=0}}function Ba(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Es(m(a.Fa,a),th(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Es(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),ji(this),Zu(this))};function $a(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zu(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);Oe(u,"RID","rpc"),Oe(u,"SID",a.K),Oe(u,"AID",a.T),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(u,"TO",a.ja),Oe(u,"TYPE","xmlhttp"),Cs(a,u),a.m&&a.o&&Fa(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Mi(ln(u)),f.m=null,f.P=!0,Ru(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ji(this),Ba(this),pt(19))};function $i(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function eh(a,u){var f=null;if(a.g==u){$i(a),$a(a),a.g=null;var g=2}else if(La(a.h,u))f=u.D,Du(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=ki(),pe(g,new Iu(g,f)),Bi(a)}else Xu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&W_(a,u)||g==2&&Ba(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function th(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const P=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ni(g,"https"),Mi(g),P?j_(g.toString(),f):B_(g.toString(),f)}else pt(2);a.G=0,a.l&&a.l.sa(u),nh(a),Qu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function nh(a){if(a.G=0,a.ka=[],a.l){const u=Ou(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function rh(a,u,f){var g=f instanceof or?ln(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),xi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new or(null);g&&Ni(k,g),u&&(k.g=u),P&&xi(k,P),f&&(k.l=f),g=k}return f=a.D,u=a.ya,f&&u&&Oe(g,f,u),Oe(g,"VER",a.la),Cs(a,g),g}function sh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new Li({eb:f})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ih(){}t=ih.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qi(){}qi.prototype.g=function(a,u){return new St(a,u)};function St(a,u){se.call(this),this.g=new Gu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Dr(this)}C(St,se),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ja(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Je(a),a=f);u.i.push(new k_(u.Ya++,a)),u.G==3&&Bi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,St.aa.N.call(this)};function oh(a){ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(oh,ka);function ah(){Va.call(this),this.status=1}C(ah,Va);function Dr(a){this.g=a}C(Dr,ih),Dr.prototype.ua=function(){pe(this.g,"a")},Dr.prototype.ta=function(a){pe(this.g,new oh(a))},Dr.prototype.sa=function(a){pe(this.g,new ah)},Dr.prototype.ra=function(){pe(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Ag=function(){return new qi},wg=function(){return ki()},Ig=sr,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,oo=Vi,wu.COMPLETE="complete",Tg=wu,yu.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",se.prototype.listen=se.prototype.K,Ns=yu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Eg=Ue}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const mf="@firebase/firestore",_f="4.7.11";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let fs="11.6.1";/**
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
 */const Ir=new bc("@firebase/firestore");function Ur(){return Ir.logLevel}function Y(t,...e){if(Ir.logLevel<=ye.DEBUG){const n=e.map(Pc);Ir.debug(`Firestore (${fs}): ${t}`,...n)}}function yn(t,...e){if(Ir.logLevel<=ye.ERROR){const n=e.map(Pc);Ir.error(`Firestore (${fs}): ${t}`,...n)}}function rs(t,...e){if(Ir.logLevel<=ye.WARN){const n=e.map(Pc);Ir.warn(`Firestore (${fs}): ${t}`,...n)}}function Pc(t){if(typeof t=="string")return t;try{/**
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
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,bg(t,r,n)}function bg(t,e,n){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||bg(e,s,r)}function fe(t,e){return t}/**
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
 */class Rg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Rw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sw{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Rg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class Pw{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cw{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Pw(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kw{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Sg(){return new TextEncoder}/**
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
 */class Pg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Vw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ll(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return me(r,s);{const i=Sg(),o=Dw(i.encode(vf(t,n)),i.encode(vf(e,n)));return o!==0?o:me(r,s)}}n+=r>65535?2:1}return me(t.length,e.length)}function vf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Dw(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Ef=-62135596800,Tf=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Tf);return new He(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ef)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tf}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ef;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const If="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Gt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),s=Gt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):Ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Ne extends Gt{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Ow=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Gt{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Ow.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===If}static keyField(){return new tt([If])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */const oi=-1;function Nw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Gn(s,te.empty(),e)}function xw(t){return new Gn(t.readTime,t.key,oi)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(he.min(),te.empty(),oi)}static max(){return new Gn(he.max(),te.empty(),oi)}}function Mw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const Lw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ds(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Lw)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Fw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ps(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ua.le=-1;/**
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
 */const Cc=-1;function ha(t){return t==null}function ko(t){return t===0&&1/t==-1/0}function jw(t){return typeof t=="number"&&Number.isInteger(t)&&!ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Cg="";function Bw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wf(e)),e=$w(t.get(n),e);return wf(e)}function $w(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Cg:n+="";break;default:n+=i}}return n}function wf(t){return t+Cg+""}/**
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
 */function Af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(e){return new bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ze(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Vg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vg("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=qw.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */const Dg="server_timestamp",Og="__type__",Ng="__previous_value__",xg="__local_write_time__";function kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Og])===null||n===void 0?void 0:n.stringValue)===Dg}function fa(t){const e=t.mapValue.fields[Ng];return kc(e)?fa(e):e}function ai(t){const e=Qn(t.mapValue.fields[xg].timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Hw{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const Vo="(default)";class li{constructor(e,n){this.projectId=e,this.database=n||Vo}static empty(){return new li("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mg="__type__",zw="__max__",Ji={mapValue:{}},Lg="__vector__",Do="value";function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kc(t)?4:Ww(t)?9007199254740991:Kw(t)?10:11:oe(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qn(s.timestampValue),l=Qn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),l=Fe(i.doubleValue);return o===l?ko(o)===ko(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Af(o)!==Af(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!on(o[c],l[c])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function ci(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Rf(t.timestampValue,e.timestampValue);case 4:return Rf(ai(t),ai(e));case 5:return Ll(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Jn(i),c=Jn(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=me(l[h],c[h]);if(d!==0)return d}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=me(Fe(i.latitude),Fe(o.latitude));return l!==0?l:me(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},v=(l=p[Do])===null||l===void 0?void 0:l.arrayValue,C=(c=m[Do])===null||c===void 0?void 0:c.arrayValue,V=me(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Sf(v,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ji.mapValue&&o===Ji.mapValue)return 0;if(i===Ji.mapValue)return 1;if(o===Ji.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ll(c[p],d[p]);if(m!==0)return m;const v=is(l[c[p]],h[d[p]]);if(v!==0)return v}return me(c.length,d.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{Pe:n})}}function Rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Qn(t),r=Qn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Sf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function os(t){return Ul(t)}function Ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ul(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ul(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function ao(t){switch(Yn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fa(t);return e?16+ao(e):16;case 5:return 2*t.stringValue.length;case 6:return Jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ao(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return nr(r.fields,(i,o)=>{s+=i.length+ao(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function Fl(t){return!!t&&"integerValue"in t}function Vc(t){return!!t&&"arrayValue"in t}function Pf(t){return!!t&&"nullValue"in t}function Cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Kw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mg])===null||n===void 0?void 0:n.stringValue)===Lg}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ww(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===zw}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ws(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){nr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Ws(this.value))}}function Ug(t){const e=[];return nr(t.fields,(n,r)=>{const s=new tt([n]);if(lo(r)){const i=Ug(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,he.min(),he.min(),he.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,he.min(),he.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,he.min(),he.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(e,n){this.position=e,this.inclusive=n}}function kf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class No{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fg{}class qe extends Fg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Jw(e,n,r):n==="array-contains"?new Zw(e,r):n==="in"?new eA(e,r):n==="not-in"?new tA(e,r):n==="array-contains-any"?new nA(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yw(e,r):new Xw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Fg{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new an(e,n)}matches(e){return jg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jg(t){return t.op==="and"}function Bg(t){return Qw(t)&&jg(t)}function Qw(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function jl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+os(t.value);if(Bg(t))return t.filters.map(e=>jl(e)).join(",");{const e=t.filters.map(n=>jl(n)).join(",");return`${t.op}(${e})`}}function $g(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&$g(o,s.filters[l]),!0):!1}(t,e):void oe(19439)}function qg(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(qg).join(" ,")+"}"}(t):"Filter"}class Jw extends qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yw extends qe{constructor(e,n){super(e,"in",n),this.keys=Hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xw extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Zw extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vc(n)&&ci(n.arrayValue,this.value)}}class eA extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ci(this.value.arrayValue,n)}}class tA extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ci(this.value.arrayValue,n)}}class nA extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ci(this.value.arrayValue,r))}}/**
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
 */class rA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Df(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rA(t,e,n,r,s,i,o)}function Dc(t){const e=fe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.Ie=n}return e.Ie}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$g(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vf(t.startAt,e.startAt)&&Vf(t.endAt,e.endAt)}function Bl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class da{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function sA(t,e,n,r,s,i,o,l){return new da(t,e,n,r,s,i,o,l)}function zg(t){return new da(t)}function Of(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iA(t){return t.collectionGroup!==null}function Gs(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new No(i,r))}),n.has(tt.keyField().canonicalString())||e.Ee.push(new No(tt.keyField(),r))}return e.Ee}function Zt(t){const e=fe(t);return e.de||(e.de=oA(e,Gs(t))),e.de}function oA(t,e){if(t.limitType==="F")return Df(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)});const n=t.endAt?new Oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oo(t.startAt.position,t.startAt.inclusive):null;return Df(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $l(t,e,n){return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Oc(Zt(t),Zt(e))&&t.limitType===e.limitType}function Kg(t){return`${Dc(Zt(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qg(s)).join(", ")}]`),ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=kf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Gs(r),s)||r.endAt&&!function(o,l,c){const h=kf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Gs(r),s))}(t,e)}function aA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wg(t){return(e,n)=>{let r=!1;for(const s of Gs(t)){const i=lA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lA(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?is(c,h):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
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
 */class Pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kg(this.inner)}size(){return this.innerSize}}/**
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
 */const cA=new Le(te.comparator);function vn(){return cA}const Gg=new Le(te.comparator);function xs(...t){let e=Gg;for(const n of t)e=e.insert(n.key,n);return e}function Qg(t){let e=Gg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Qs()}function Jg(){return Qs()}function Qs(){return new Pr(t=>t.toString(),(t,e)=>t.isEqual(e))}const uA=new Le(te.comparator),hA=new ze(te.comparator);function ve(...t){let e=hA;for(const n of t)e=e.add(n);return e}const fA=new ze(me);function dA(){return fA}/**
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
 */function Nc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function Yg(t){return{integerValue:""+t}}function pA(t,e){return jw(e)?Yg(e):Nc(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function gA(t,e,n){return t instanceof xo?function(s,i){const o={fields:{[Og]:{stringValue:Dg},[xg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kc(i)&&(i=fa(i)),i&&(o.fields[Ng]=i),{mapValue:o}}(n,e):t instanceof ui?Zg(t,e):t instanceof hi?em(t,e):function(s,i){const o=Xg(s,i),l=Nf(o)+Nf(s.Re);return Fl(o)&&Fl(s.Re)?Yg(l):Nc(s.serializer,l)}(t,e)}function mA(t,e,n){return t instanceof ui?Zg(t,e):t instanceof hi?em(t,e):n}function Xg(t,e){return t instanceof Mo?function(r){return Fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xo extends ma{}class ui extends ma{constructor(e){super(),this.elements=e}}function Zg(t,e){const n=tm(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends ma{constructor(e){super(),this.elements=e}}function em(t,e){let n=tm(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Mo extends ma{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Nf(t){return Fe(t.integerValue||t.doubleValue)}function tm(t){return Vc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _A(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ui&&s instanceof ui||r instanceof hi&&s instanceof hi?ss(r.elements,s.elements,on):r instanceof Mo&&s instanceof Mo?on(r.Re,s.Re):r instanceof xo&&s instanceof xo}(t.transform,e.transform)}class yA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xc(t.key,qt.none()):new Ti(t.key,t.data,qt.none());{const n=t.data,r=wt.empty();let s=new ze(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rr(t.key,r,new Vt(s.toArray()),qt.none())}}function vA(t,e,n){t instanceof Ti?function(s,i,o){const l=s.value.clone(),c=Mf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,i,o){if(!co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Mf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(rm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof Ti?function(i,o,l,c){if(!co(i.precondition,o))return l;const h=i.value.clone(),d=Lf(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(i,o,l,c){if(!co(i.precondition,o))return l;const h=Lf(i.fieldTransforms,c,o),d=o.data;return d.setAll(rm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function EA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xg(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>_A(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ti extends _a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends _a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mf(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,mA(o,l,n[s]))}return r}function Lf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gA(i,o,e))}return r}class xc extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TA extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&vA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=nm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>xf(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>xf(n,r))}}class Mc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return uA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Mc(e,n,r,s)}}/**
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
 */class wA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,Te;function bA(t){switch(t){case U.OK:return oe(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function sm(t){if(t===void 0)return yn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Be.OK:return U.OK;case Be.CANCELLED:return U.CANCELLED;case Be.UNKNOWN:return U.UNKNOWN;case Be.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Be.INTERNAL:return U.INTERNAL;case Be.UNAVAILABLE:return U.UNAVAILABLE;case Be.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Be.NOT_FOUND:return U.NOT_FOUND;case Be.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Be.ABORTED:return U.ABORTED;case Be.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Be.DATA_LOSS:return U.DATA_LOSS;default:return oe(39323,{code:t})}}(Te=Be||(Be={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const RA=new zn([4294967295,4294967295],0);function Uf(t){const e=Sg().encode(t),n=new vg;return n.update(e),new Uint8Array(n.digest())}function Ff(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([n,r],0),new zn([s,i],0)]}class Lc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=zn.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(zn.fromNumber(r)));return s.compare(RA)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Uf(e),[r,s]=Ff(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Lc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Uf(e),[r,s]=Ff(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(he.min(),s,new Le(me),vn(),ve())}}class Ii{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ii(r,n,ve(),ve(),ve())}}/**
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
 */class uo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class im{constructor(e,n){this.targetId=e,this.Ce=n}}class om{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jf{constructor(){this.Fe=0,this.Me=Bf(),this.xe=nt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ve(),n=ve(),r=ve();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new Ii(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Bf()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class SA{constructor(e){this.ze=e,this.je=new Map,this.He=vn(),this.Je=Yi(),this.Ye=Yi(),this.Ze=new Le(me)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Bl(i))if(r===0){const o=new te(i.path);this.tt(n,o,ht.newNoDocument(o,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Jn(r).toUint8Array()}catch(c){if(c instanceof Vg)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Lc(o,s,i)}catch(c){return rs(c instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Bl(l.target)){const c=new te(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ht.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=ve();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new ya(e,n,this.Ze,this.He,r);return this.He=vn(),this.Je=Yi(),this.Ye=Yi(),this.Ze=new Le(me),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new jf,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ze(me),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ze(me),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new jf),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Yi(){return new Le(te.comparator)}function Bf(){return new Le(te.comparator)}const PA={asc:"ASCENDING",desc:"DESCENDING"},CA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kA={and:"AND",or:"OR"};class VA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||ha(e)?e:{value:e}}function Lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function am(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DA(t,e){return Lo(t,e.toTimestamp())}function en(t){return Se(!!t,49232),he.fromTimestamp(function(n){const r=Qn(n);return new He(r.seconds,r.nanos)}(t))}function Uc(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lm(t){const e=Ne.fromString(t);return Se(dm(e),10190,{key:e.toString()}),e}function zl(t,e){return Uc(t.databaseId,e.path)}function cl(t,e){const n=lm(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(um(n))}function cm(t,e){return Uc(t.databaseId,e)}function OA(t){const e=lm(t);return e.length===4?Ne.emptyPath():um(e)}function Kl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function um(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $f(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function NA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Se(d===void 0||typeof d=="string",58123),nt.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?U.UNKNOWN:sm(h.code);return new ee(d,h.message||"")}(o);n=new om(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cl(t,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):he.min(),l=new wt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new uo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cl(t,r.document),i=r.readTime?en(r.readTime):he.min(),o=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new uo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cl(t,r.document),i=r.removedTargetIds||[];n=new uo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AA(s,i),l=r.targetId;n=new im(l,o)}}return n}function xA(t,e){let n;if(e instanceof Ti)n={update:$f(t,e.key,e.value)};else if(e instanceof xc)n={delete:zl(t,e.key)};else if(e instanceof rr)n={update:$f(t,e.key,e.data),updateMask:HA(e.fieldMask)};else{if(!(e instanceof TA))return oe(16599,{ft:e.type});n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:DA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function MA(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(he.min())&&(o=en(i)),new yA(o,s.transformResults||[])}(n,e))):[]}function LA(t,e){return{documents:[cm(t,e.path)]}}function UA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cm(t,s);const i=function(h){if(h.length!==0)return fm(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:jr(m.field),direction:BA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ql(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function FA(t){let e=OA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=hm(p);return m instanceof an&&Bg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new No(Br(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ha(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Oo(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Oo(v,m)}(n.endAt)),sA(e,s,o,i,l,"F",c,h)}function jA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>hm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function BA(t){return PA[t]}function $A(t){return CA[t]}function qA(t){return kA[t]}function jr(t){return{fieldPath:t.canonicalString()}}function Br(t){return tt.fromServerFormat(t.fieldPath)}function fm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Cf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(Pf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(Pf(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:$A(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>fm(s));return r.length===1?r[0]:{compositeFilter:{op:qA(n.op),filters:r}}}(t):oe(54877,{filter:t})}function HA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,s,i=he.min(),o=he.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zA{constructor(e){this.wt=e}}function KA(t){const e=FA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$l(e,e.limit,"L"):e}/**
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
 */class WA{constructor(){this.yn=new GA}addToCollectionParentIndex(e,n){return this.yn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Gn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class GA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ne.comparator)).toArray()}}/**
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
 */const qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pm=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(pm,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class as{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new as(0)}static ir(){return new as(-1)}}/**
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
 */const Hf="LruGarbageCollector",QA=1048576;function zf([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class JA{constructor(e){this.cr=e,this.buffer=new ze(zf),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){Y(Hf,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ps(n)?Y(Hf,"Ignoring IndexedDB error during garbage collection: ",n):await ds(n)}await this.Ir(3e5)})}}class XA{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ua.le);const r=new JA(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(qf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qf):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ur()<=ye.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ZA(t,e){return new XA(t,e)}/**
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
 */class e0{constructor(){this.changes=new Pr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class n0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Js(r.mutation,s,Vt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=vn();const o=Qs(),l=function(){return Qs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof rr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Js(d.mutation,h,d.mutation.getFieldMask(),He.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new t0(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qs();let s=new Le((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Vt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Jg();d.forEach(m=>{if(!i.has(m)){const v=nm(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(dr());let l=oi,c=i;return o.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ve())).next(d=>({batchId:l,changes:Qg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new da(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let l=xs();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Js(d.mutation,h,Vt.empty(),He.now()),ga(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class r0{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return M.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:KA(s.bundledQuery),readTime:en(s.readTime)}}(n)),M.resolve()}}/**
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
 */class s0{constructor(){this.overlays=new Le(te.comparator),this.Or=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wA(n,r));let i=this.Or.get(n);i===void 0&&(i=ve(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
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
 */class i0{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Fc{constructor(){this.Nr=new ze(Ke.Br),this.Lr=new ze(Ke.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Ke(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new te(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new te(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=ve();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return te.comparator(e.key,n.key)||me(e.Gr,n.Gr)}static kr(e,n){return me(e.Gr,n.Gr)||te.comparator(e.key,n.key)}}/**
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
 */class o0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new ze(Ke.Br)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.zr=this.zr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Cc:this.Jn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const l=this.jr(o.Gr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(me);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],l=>{r=r.add(l.Gr)})}),M.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new te(i),0);let l=new ze(me);return this.zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Gr)),!0)},o),M.resolve(this.Jr(l))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return M.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Ke(n,0),s=this.zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class a0{constructor(e){this.Zr=e,this.docs=function(){return new Le(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const o=n.path,l=new te(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Mw(xw(d),r)<=0||(s.has(d.key)||ga(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}Xr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l0(this)}getSize(e){return M.resolve(this.size)}}class l0 extends e0{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class c0{constructor(e){this.persistence=e,this.ei=new Pr(n=>Dc(n),Oc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ti=0,this.ni=new Fc,this.targetCount=0,this.ri=as.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),M.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new as(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.ar(n),M.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ni.containsKey(n))}}/**
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
 */class gm{constructor(e,n){this.ii={},this.overlays={},this.si=new ua(0),this.oi=!1,this.oi=!0,this._i=new i0,this.referenceDelegate=e(this),this.ai=new c0(this),this.indexManager=new WA,this.remoteDocumentCache=function(s){return new a0(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new zA(n),this.ci=new r0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new o0(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new u0(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return M.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class u0 extends Uw{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Ti=new Fc,this.Ii=null}static Ei(e){return new jc(e)}get di(){if(this.Ii)return this.Ii;throw oe(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=te.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return M.or([()=>M.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Uo{constructor(e,n){this.persistence=e,this.Ri=new Pr(r=>Bw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ZA(this,n)}static Ei(e,n){return new Uo(e,n)}li(){}hi(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return M.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),M.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ao(e.data.value)),n}gr(e,n,r){return M.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bc(e,n.fromCache,r,s)}}/**
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
 */class h0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class f0{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return iI()?8:Fw(dt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new h0;return this.fs(e,n,o).next(l=>{if(i.result=l,this.Is)return this.gs(e,n,o,l.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(Ur()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),M.resolve()):(Ur()<=ye.DEBUG&&Y("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ur()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):M.resolve())}Rs(e,n){if(Of(n))return M.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$l(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.As.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ps(n,l);return this.ys(n,h,o,c.readTime)?this.Rs(e,$l(n,null,"F")):this.ws(e,h,n,c)}))})))}Vs(e,n,r,s){return Of(n)||s.isEqual(he.min())?M.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?M.resolve(null):(Ur()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.ws(e,o,n,Nw(s,oi)).next(l=>l))})}ps(e,n){let r=new ze(Wg(e));return n.forEach((s,i)=>{ga(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return Ur()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.As.getDocumentsMatchingQuery(e,n,Gn.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const $c="LocalStore",d0=3e8;class p0{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Le(me),this.Ds=new Pr(i=>Dc(i),Oc),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n0(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function g0(t,e,n,r){return new p0(t,e,n,r)}async function mm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:l}))})})}function m0(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let v=M.resolve();return m.forEach(C=>{v=v.next(()=>d.getEntry(c,C)).next(V=>{const D=h.docVersions.get(C);Se(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _m(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function _0(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.ai.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(nt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=d0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,v,d)&&l.push(n.ai.updateTargetData(i,v))});let c=vn(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(y0(i,o,e.documentUpdates).next(d=>{c=d.xs,h=d.Os})),!r.isEqual(he.min())){const d=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ss=s,i))}function y0(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y($c,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{xs:o,Os:s}})}function v0(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function E0(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function Wl(t,e,n){const r=fe(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;Y($c,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function Kf(t,e,n){const r=fe(t);let s=he.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=fe(c),m=p.Ds.get(d);return m!==void 0?M.resolve(p.Ss.get(m)):p.ai.getTargetData(h,d)}(r,o,Zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ve())).next(l=>(T0(r,aA(e),l),{documents:l,Ns:i})))}function T0(t,e,n){let r=t.vs.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Wf{constructor(){this.activeTargetIds=dA()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class I0{constructor(){this.So=new Wf,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class w0{vo(e){}shutdown(){}}/**
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
 */const Gf="ConnectivityMonitor";class Qf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){Y(Gf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){Y(Gf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xi=null;function Gl(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
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
 */const ul="RestConnection",A0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b0{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=Gl(),l=this.$o(e,n.toUriEncodedString());Y(ul,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(c,s,i),this.Ko(e,l,c,r).then(h=>(Y(ul,`Received RPC '${e}' ${o}: `,h),h),h=>{throw rs(ul,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=A0[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class R0{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const at="WebChannelConnection";class S0 extends b0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=Gl();return new Promise((o,l)=>{const c=new Eg;c.setWithCredentials(!0),c.listenOnce(Tg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oo.NO_ERROR:const d=c.getResponseJson();Y(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case oo.TIMEOUT:Y(at,`RPC '${e}' ${i} timed out`),l(new ee(U.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const p=c.getStatus();if(Y(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf($)>=0?$:U.UNKNOWN}(v.status);l(new ee(C,v.message))}else l(new ee(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(U.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{s_:e,streamId:i,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{Y(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}a_(e,n,r){const s=Gl(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ag(),l=wg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(at,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,v=!1;const C=new R0({Go:D=>{v?Y(at,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Y(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(at,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},zo:()=>p.close()}),V=(D,$,j)=>{D.listen($,B=>{try{j(B)}catch(H){setTimeout(()=>{throw H},0)}})};return V(p,Ns.EventType.OPEN,()=>{v||(Y(at,`RPC '${e}' stream ${s} transport opened.`),C.t_())}),V(p,Ns.EventType.CLOSE,()=>{v||(v=!0,Y(at,`RPC '${e}' stream ${s} transport closed`),C.r_())}),V(p,Ns.EventType.ERROR,D=>{v||(v=!0,rs(at,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.r_(new ee(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ns.EventType.MESSAGE,D=>{var $;if(!v){const j=D.data[0];Se(!!j,16349);const B=j,H=(B==null?void 0:B.error)||(($=B[0])===null||$===void 0?void 0:$.error);if(H){Y(at,`RPC '${e}' stream ${s} received error:`,H);const ne=H.status;let ge=function(y){const w=Be[y];if(w!==void 0)return sm(w)}(ne),A=H.message;ge===void 0&&(ge=U.INTERNAL,A="Unknown error status: "+ne+" with message "+H.message),v=!0,C.r_(new ee(ge,A)),p.close()}else Y(at,`RPC '${e}' stream ${s} received:`,j),C.i_(j)}}),V(l,Ig.STAT_EVENT,D=>{D.stat===Ml.PROXY?Y(at,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ml.NOPROXY&&Y(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function hl(){return typeof document<"u"?document:null}/**
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
 */function va(t){return new VA(t,!0)}/**
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
 */class ym{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Jf="PersistentStream";class vm{constructor(e,n,r,s,i,o,l,c){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new ym(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ee(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return Y(Jf,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(Y(Jf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P0 extends vm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=NA(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?en(o.readTime):he.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=Kl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Bl(c)?{documents:LA(i,c)}:{query:UA(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=am(i,o.resumeToken);const h=ql(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Lo(i,o.snapshotVersion.toTimestamp());const h=ql(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=jA(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=Kl(this.serializer),n.removeTarget=e,this.F_(n)}}class C0 extends vm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=MA(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=Kl(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xA(this.serializer,r))};this.F_(n)}}/**
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
 */class k0{}class V0 extends k0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Hl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(U.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(e,Hl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(U.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class D0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const wr="RemoteStore";class O0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(Y(wr,"Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.aa.add(4),await wi(h),h.la.set("Unknown"),h.aa.delete(4),await Ea(h)}(this))})}),this.la=new D0(r,s)}}async function Ea(t){if(Cr(t))for(const e of t.ua)await e(!0)}async function wi(t){for(const e of t.ua)await e(!1)}function Em(t,e){const n=fe(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Kc(n)?zc(n):gs(n).b_()&&Hc(n,e))}function qc(t,e){const n=fe(t),r=gs(n);n._a.delete(e),r.b_()&&Tm(n,e),n._a.size===0&&(r.b_()?r.v_():Cr(n)&&n.la.set("Unknown"))}function Hc(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).U_(e)}function Tm(t,e){t.ha.Ke(e),gs(t).K_(e)}function zc(t){t.ha=new SA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.la.ta()}function Kc(t){return Cr(t)&&!gs(t).w_()&&t._a.size>0}function Cr(t){return fe(t).aa.size===0}function Im(t){t.ha=void 0}async function N0(t){t.la.set("Online")}async function x0(t){t._a.forEach((e,n)=>{Hc(t,e)})}async function M0(t,e){Im(t),Kc(t)?(t.la.ia(e),zc(t)):t.la.set("Unknown")}async function L0(t,e,n){if(t.la.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s._a.delete(l),s.ha.removeTarget(l))}(t,e)}catch(r){Y(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fo(t,r)}else if(e instanceof uo?t.ha.Xe(e):e instanceof im?t.ha.ot(e):t.ha.nt(e),!n.isEqual(he.min()))try{const r=await _m(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ha.It(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i._a.get(h);d&&i._a.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i._a.get(c);if(!d)return;i._a.set(c,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),Tm(i,c);const p=new Fn(d.target,c,h,d.sequenceNumber);Hc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(wr,"Failed to raise snapshot:",r),await Fo(t,r)}}async function Fo(t,e,n){if(!ps(e))throw e;t.aa.add(1),await wi(t),t.la.set("Offline"),n||(n=()=>_m(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(wr,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Ea(t)})}function wm(t,e){return e().catch(n=>Fo(t,n,e))}async function Ta(t){const e=fe(t),n=Xn(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Cc;for(;U0(e);)try{const s=await v0(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,F0(e,s)}catch(s){await Fo(e,s)}Am(e)&&bm(e)}function U0(t){return Cr(t)&&t.oa.length<10}function F0(t,e){t.oa.push(e);const n=Xn(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Am(t){return Cr(t)&&!Xn(t).w_()&&t.oa.length>0}function bm(t){Xn(t).start()}async function j0(t){Xn(t).H_()}async function B0(t){const e=Xn(t);for(const n of t.oa)e.G_(n.mutations)}async function $0(t,e,n){const r=t.oa.shift(),s=Mc.from(r,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function q0(t,e){e&&Xn(t).W_&&await async function(r,s){if(function(o){return bA(o)&&o!==U.ABORTED}(s.code)){const i=r.oa.shift();Xn(r).D_(),await wm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),Am(t)&&bm(t)}async function Yf(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Y(wr,"RemoteStore received new credentials");const r=Cr(n);n.aa.add(3),await wi(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Ea(n)}async function H0(t,e){const n=fe(t);e?(n.aa.delete(2),await Ea(n)):e||(n.aa.add(2),await wi(n),n.la.set("Unknown"))}function gs(t){return t.Pa||(t.Pa=function(n,r,s){const i=fe(n);return i.Y_(),new P0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:N0.bind(null,t),Jo:x0.bind(null,t),Zo:M0.bind(null,t),Q_:L0.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),Kc(t)?zc(t):t.la.set("Unknown")):(await t.Pa.stop(),Im(t))})),t.Pa}function Xn(t){return t.Ta||(t.Ta=function(n,r,s){const i=fe(n);return i.Y_(),new C0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:j0.bind(null,t),Zo:q0.bind(null,t),z_:B0.bind(null,t),j_:$0.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Ta(t)):(await t.Ta.stop(),t.oa.length>0&&(Y(wr,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class Wc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Wc(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(t,e){if(yn("AsyncQueue",`${e}: ${t}`),ps(t))return new ee(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xf{constructor(){this.Ia=new Le(te.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):oe(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ls(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class z0{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class K0{constructor(){this.queries=Zf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Zf(),i.forEach((o,l)=>{for(const c of l.Ra)c.onError(r)})})(this,new ee(U.ABORTED,"Firestore shutting down"))}}function Zf(){return new Pr(t=>Kg(t),pa)}async function W0(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new z0,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Gc(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Qc(n)}async function G0(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Q0(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Ra)l.pa(s)&&(r=!0);o.Aa=s}}r&&Qc(n)}function J0(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Qc(t){t.fa.forEach(e=>{e.next()})}var Ql,ed;(ed=Ql||(Ql={})).ya="default",ed.Cache="cache";class Y0{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Ql.Cache}}/**
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
 */class Rm{constructor(e){this.key=e}}class Sm{constructor(e){this.key=e}}class X0{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=ve(),this.mutatedKeys=ve(),this.Ua=Wg(e),this.Ka=new Gr(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Xf,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=ga(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?C!==V&&(r.track({type:3,doc:v}),D=!0):this.ja(m,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.Ua(v,c)>0||h&&this.Ua(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(v?(o=o.add(v),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ka:o,za:r,ys:l,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((d,p)=>function(v,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:D})}};return V(v)-V(C)}(d.type,p.type)||this.Ua(d.doc,p.doc)),this.Ha(r),s=s!=null&&s;const l=n&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,h=c!==this.Qa;return this.Qa=c,o.length!==0||h?{snapshot:new ls(this.query,e.Ka,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Xf,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=ve(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new Sm(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new Rm(r))}),n}Xa(e){this.qa=e.Ns,this.$a=ve();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return ls.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Jc="SyncEngine";class Z0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eb{constructor(e){this.key=e,this.tu=!1}}class tb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Pr(l=>Kg(l),pa),this.iu=new Map,this.su=new Set,this.ou=new Le(te.comparator),this._u=new Map,this.au=new Fc,this.uu={},this.cu=new Map,this.lu=as.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function nb(t,e,n=!0){const r=Om(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Pm(r,e,n,!0),s}async function rb(t,e){const n=Om(t);await Pm(n,e,!0,!1)}async function Pm(t,e,n,r){const s=await E0(t.localStore,Zt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await sb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Em(t.remoteStore,s),l}async function sb(t,e,n,r,s){t.Pu=(p,m,v)=>async function(V,D,$,j){let B=D.view.Ga($);B.ys&&(B=await Kf(V.localStore,D.query,!1).then(({documents:A})=>D.view.Ga(A,B)));const H=j&&j.targetChanges.get(D.targetId),ne=j&&j.targetMismatches.get(D.targetId)!=null,ge=D.view.applyChanges(B,V.isPrimaryClient,H,ne);return nd(V,D.targetId,ge.Ya),ge.snapshot}(t,p,m,v);const i=await Kf(t.localStore,e,!0),o=new X0(e,i.Ns),l=o.Ga(i.documents),c=Ii.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);nd(t,n,h.Ya);const d=new Z0(e,n,o);return t.ru.set(e,d),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),h.snapshot}async function ib(t,e,n){const r=fe(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!pa(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qc(r.remoteStore,s.targetId),Jl(r,s.targetId)}).catch(ds)):(Jl(r,s.targetId),await Wl(r.localStore,s.targetId,!0))}async function ob(t,e){const n=fe(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qc(n.remoteStore,r.targetId))}async function ab(t,e,n){const r=pb(t);try{const s=await function(o,l){const c=fe(o),h=He.now(),d=l.reduce((v,C)=>v.add(C.key),ve());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=vn(),V=ve();return c.Cs.getEntries(v,d).next(D=>{C=D,C.forEach(($,j)=>{j.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(D=>{p=D;const $=[];for(const j of l){const B=EA(j,p.get(j.key).overlayedDocument);B!=null&&$.push(new rr(j.key,B,Ug(B.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,$,l)}).next(D=>{m=D;const $=D.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(v,D.batchId,$)})}).then(()=>({batchId:m.batchId,changes:Qg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.uu[o.currentUser.toKey()];h||(h=new Le(me)),h=h.insert(l,c),o.uu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ai(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Gc(s,"Failed to persist write");n.reject(i)}}async function Cm(t,e){const n=fe(t);try{const r=await _0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Se(o.tu,14607):s.removedDocuments.size>0&&(Se(o.tu,42227),o.tu=!1))}),await Ai(n,r,e)}catch(r){await ds(r)}}function td(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const l=o.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Ra)m.ga(l)&&(h=!0)}),h&&Qc(c)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lb(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Le(te.comparator);o=o.insert(i,ht.newNoDocument(i,he.min()));const l=ve().add(i),c=new ya(he.min(),new Map,new Le(me),o,l);await Cm(r,c),r.ou=r.ou.remove(i),r._u.delete(e),Yc(r)}else await Wl(r.localStore,e,!1).then(()=>Jl(r,e,n)).catch(ds)}async function cb(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await m0(n.localStore,e);Vm(n,r,null),km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(n,s)}catch(s){await ds(s)}}async function ub(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Vm(r,e,n),km(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ai(r,s)}catch(s){await ds(s)}}function km(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function Vm(t,e,n){const r=fe(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Jl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||Dm(t,r)})}function Dm(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(qc(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Yc(t))}function nd(t,e,n){for(const r of n)r instanceof Rm?(t.au.addReference(r.key,e),hb(t,r)):r instanceof Sm?(Y(Jc,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||Dm(t,r.key)):oe(19791,{Iu:r})}function hb(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(Y(Jc,"New document in limbo: "+n),t.su.add(r),Yc(t))}function Yc(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new te(Ne.fromString(e)),r=t.lu.next();t._u.set(r,new eb(n)),t.ou=t.ou.insert(n,r),Em(t.remoteStore,new Fn(Zt(zg(n.path)),r,"TargetPurposeLimboResolution",ua.le))}}async function Ai(t,e,n){const r=fe(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((l,c)=>{o.push(r.Pu(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bc.Ps(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(c,h){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.ls,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.hs,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!ps(p))throw p;Y($c,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.Ss.get(m),C=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(C);d.Ss=d.Ss.insert(m,V)}}}(r.localStore,i))}async function fb(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Y(Jc,"User change. New user:",e.toKey());const r=await mm(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(l=>{l.forEach(c=>{c.reject(new ee(U.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ai(n,r.Ms)}}function db(t,e){const n=fe(t),r=n._u.get(e);if(r&&r.tu)return ve().add(r.key);{let s=ve();const i=n.iu.get(e);if(!i)return s;for(const o of i){const l=n.ru.get(o);s=s.unionWith(l.view.Wa)}return s}}function Om(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=db.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lb.bind(null,e),e.nu.Q_=Q0.bind(null,e.eventManager),e.nu.Tu=J0.bind(null,e.eventManager),e}function pb(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ub.bind(null,e),e}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return g0(this.persistence,new f0,e.initialUser,this.serializer)}Ru(e){return new gm(jc.Ei,this.serializer)}Au(e){return new I0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class gb extends jo{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Se(this.persistence.referenceDelegate instanceof Uo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new YA(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new gm(r=>Uo.Ei(r,n),this.serializer)}}class Yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>td(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fb.bind(null,this.syncEngine),await H0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new K0}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new S0(i)}(e.databaseInfo);return function(i,o,l,c){return new V0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new O0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>td(this.syncEngine,n,0),function(){return Qf.C()?new Qf:new w0}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new tb(s,i,o,l,c,h);return d&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);Y(wr,"RemoteStore shutting down."),i.aa.add(5),await wi(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yl.provider={build:()=>new Yl};/**
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
 */class mb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Zn="FirestoreClient";class _b{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y(Zn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y(Zn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fl(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yb(t);Y(Zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Yf(e.remoteStore,s)),t._onlineComponents=e}async function yb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Zn,"Using user provided OfflineComponentProvider");try{await fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await fl(t,new jo)}}else Y(Zn,"Using default OfflineComponentProvider"),await fl(t,new gb(void 0));return t._offlineComponents}async function Nm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Zn,"Using user provided OnlineComponentProvider"),await rd(t,t._uninitializedComponentsProvider._online)):(Y(Zn,"Using default OnlineComponentProvider"),await rd(t,new Yl))),t._onlineComponents}function vb(t){return Nm(t).then(e=>e.syncEngine)}async function Eb(t){const e=await Nm(t),n=e.eventManager;return n.onListen=nb.bind(null,e.syncEngine),n.onUnlisten=ib.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ob.bind(null,e.syncEngine),n}function Tb(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new mb({next:m=>{d.yu(),o.enqueueAndForget(()=>G0(i,p)),m.fromCache&&c.source==="server"?h.reject(new ee(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Y0(l,d,{includeMetadataChanges:!0,Fa:!0});return W0(i,p)}(await Eb(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const sd=new Map;/**
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
 */function Mm(t,e,n){if(!n)throw new ee(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ib(t,e,n,r){if(e===!0&&r===!0)throw new ee(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function id(t){if(!te.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function od(t){if(te.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(t);throw new ee(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Lm="firestore.googleapis.com",ad=!0;class ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lm,this.ssl=ad}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ad;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QA)throw new ee(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ib("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bw;switch(r.type){case"firstParty":return new Cw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sd.get(n);r&&(Y("ComponentProvider","Removing Datastore"),sd.delete(n),r.terminate())}(this),Promise.resolve()}}function wb(t,e,n,r={}){var s;const i=(t=Ar(t,Ia))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Lm&&i.host!==l&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Er(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=lt.MOCK_USER;else{h=XT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new lt(p)}t._authCredentials=new Rw(new Rg(h,d))}}/**
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
 */class wa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wa(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Wn extends wa{constructor(e,n,r){super(e,n,zg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new te(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function cd(t,e,...n){if(t=bt(t),Mm("collection","path",e),t instanceof Ia){const r=Ne.fromString(e,...n);return od(r),new Wn(t,null,r)}{if(!(t instanceof Lt||t instanceof Wn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return od(r),new Wn(t.firestore,null,r)}}function Xl(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Pg.newId()),Mm("doc","path",e),t instanceof Ia){const r=Ne.fromString(e,...n);return id(r),new Lt(t,null,new te(r))}{if(!(t instanceof Lt||t instanceof Wn))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return id(r),new Lt(t.firestore,t instanceof Wn?t.converter:null,new te(r))}}/**
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
 */const ud="AsyncQueue";class hd{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new ym(this,"async_queue_retry"),this.ju=()=>{const r=hl();r&&Y(ud,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Kn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!ps(e))throw e;Y(ud,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,yn("INTERNAL UNHANDLED ERROR: ",fd(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=Wc.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&oe(47125,{ec:fd(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function fd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class bi extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hd(e),this._firestoreClient=void 0,await e}}}function Ab(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:Vo,s=Sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JT("firestore");i&&wb(s,...i)}return s}function Um(t){if(t._terminated)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bb(t),t._firestoreClient}function bb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new Hw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,xm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new _b(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(nt.fromBase64String(e))}catch(n){throw new ee(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zc{constructor(e){this._methodName=e}}/**
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
 */class eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Rb=/^__.*__$/;class Sb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}class Fm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{oc:t})}}class nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Bo(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(jm(this.oc)&&Rb.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class Pb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}dc(e,n,r,s=!1){return new nu({oc:e,methodName:n,Ec:r,path:tt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bm(t){const e=t._freezeSettings(),n=va(t._databaseId);return new Pb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cb(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);ru("Data must be an object, but it was:",o,r);const l=$m(r,o);let c,h;if(i.merge)c=new Vt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Zl(e,p,n);if(!o.contains(m))throw new ee(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Hm(d,m)||d.push(m)}c=new Vt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new Sb(new wt(l),c,h)}class ba extends Zc{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}function kb(t,e,n,r){const s=t.dc(1,e,n);ru("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();nr(r,(c,h)=>{const d=su(e,c,n);h=bt(h);const p=s.hc(d);if(h instanceof ba)i.push(d);else{const m=Ra(h,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Vt(i);return new Fm(o,l,s.fieldTransforms)}function Vb(t,e,n,r,s,i){const o=t.dc(1,e,n),l=[Zl(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Zl(e,i[m])),c.push(i[m+1]);const h=[],d=wt.empty();for(let m=l.length-1;m>=0;--m)if(!Hm(h,l[m])){const v=l[m];let C=c[m];C=bt(C);const V=o.hc(v);if(C instanceof ba)h.push(v);else{const D=Ra(C,V);D!=null&&(h.push(v),d.set(v,D))}}const p=new Vt(h);return new Fm(d,p,o.fieldTransforms)}function Ra(t,e){if(qm(t=bt(t)))return ru("Unsupported field value:",e,t),$m(t,e);if(t instanceof Zc)return function(r,s){if(!jm(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ra(l,s.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Lo(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(s.serializer,i)}}if(r instanceof eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:am(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tu)return function(o,l){return{mapValue:{fields:{[Mg]:{stringValue:Lg},[Do]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Tc("VectorValues must only contain numeric values.");return Nc(l.serializer,h)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Xc(r)}`)}(t,e)}function $m(t,e){const n={};return kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(t,(r,s)=>{const i=Ra(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function qm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof eu||t instanceof cs||t instanceof Lt||t instanceof Zc||t instanceof tu)}function ru(t,e,n){if(!qm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xc(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Zl(t,e,n){if((e=bt(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return su(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Db=new RegExp("[~\\*/\\[\\]]");function su(t,e,n){if(e.search(Db)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(U.INVALID_ARGUMENT,l+t+c)}function Hm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ob(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Km("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ob extends zm{data(){return super.data()}}function Km(t,e){return typeof e=="string"?su(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
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
 */function Nb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xb{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return nr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Do].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new tu(i)}convertGeoPoint(e){return new eu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Se(dm(r),9688,{name:e});const s=new li(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Mb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lb extends zm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Km("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ho extends Lb{data(e={}){return super.data(e)}}class Ub{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ho(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Fb(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}class jb extends xb{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function Bb(t){t=Ar(t,wa);const e=Ar(t.firestore,bi),n=Um(e),r=new jb(e);return Nb(t._query),Tb(n,t._query).then(s=>new Ub(e,r,t,s))}function $b(t,e,n,...r){t=Ar(t,Lt);const s=Ar(t.firestore,bi),i=Bm(s);let o;return o=typeof(e=bt(e))=="string"||e instanceof Aa?Vb(i,"updateDoc",t._key,e,n,r):kb(i,"updateDoc",t._key,e),iu(s,[o.toMutation(t._key,qt.exists(!0))])}function qb(t){return iu(Ar(t.firestore,bi),[new xc(t._key,qt.none())])}function Hb(t,e){const n=Ar(t.firestore,bi),r=Xl(t),s=Mb(t.converter,e);return iu(n,[Cb(Bm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function iu(t,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>ab(await vb(r),s,i)),i.promise}(Um(t),e)}(function(e,n=!0){(function(s){fs=s})(hs),ns(new Tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new bi(new Sw(r.getProvider("auth-internal")),new kw(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Hn(mf,_f,e),Hn(mf,_f,"esm2017")})();function ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zb=Wm,Gm=new vi("auth","Firebase",Wm());/**
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
 */const $o=new bc("@firebase/auth");function Kb(t,...e){$o.logLevel<=ye.WARN&&$o.warn(`Auth (${hs}): ${t}`,...e)}function fo(t,...e){$o.logLevel<=ye.ERROR&&$o.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function En(t,...e){throw au(t,...e)}function tn(t,...e){return au(t,...e)}function Qm(t,e,n){const r=Object.assign(Object.assign({},zb()),{[e]:n});return new vi("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return Qm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gm.create(t,...e)}function ue(t,e,...n){if(!t)throw au(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function Tn(t,e){t||gn(e)}/**
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
 */function ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wb(){return dd()==="http:"||dd()==="https:"}function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wb()||nI()||"connection"in navigator)?navigator.onLine:!0}function Qb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||rI()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lu(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xb=new Ri(3e4,6e4);function cu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,r,s={}){return Ym(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ei(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return tI()||(h.referrerPolicy="no-referrer"),Jm.fetch()(await Xm(t,t.config.apiHost,n,l),h)})}async function Ym(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jb),e);try{const s=new eR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw eo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qm(t,d,h);En(t,d)}}catch(s){if(s instanceof wn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Zb(t,e,n,r,s={}){const i=await ms(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?lu(t.config,s):`${t.config.apiScheme}://${s}`;return Yb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class eR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Xb.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function tR(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function qo(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nR(t,e=!1){const n=bt(t),r=await n.getIdToken(e),s=uu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(dl(s.auth_time)),issuedAtTime:Ys(dl(s.iat)),expirationTime:Ys(dl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dl(t){return Number(t)*1e3}function uu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cg(n);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pd(t){const e=uu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&rR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,qo(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zm(i.providerUserInfo):[],l=oR(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function iR(t){const e=bt(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zm(t){return t.map(e=>{var{providerId:n}=e,r=ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aR(t,e){const n=await Ym(t,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Xm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lR(t,e){return ms(t,"POST","/v2/accounts:revokeToken",cu(t,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qr;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function kn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nR(this,e)}reload(){return iR(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await fi(this,tR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:H,isAnonymous:ne,providerData:ge,stsTokenManager:A}=n;ue(B&&A,e,"internal-error");const _=Qr.fromJSON(this.name,A);ue(typeof B=="string",e,"internal-error"),kn(p,e.name),kn(m,e.name),ue(typeof H=="boolean",e,"internal-error"),ue(typeof ne=="boolean",e,"internal-error"),kn(v,e.name),kn(C,e.name),kn(V,e.name),kn(D,e.name),kn($,e.name),kn(j,e.name);const y=new Bt({uid:B,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:ne,photoURL:C,phoneNumber:v,tenantId:V,stsTokenManager:_,createdAt:$,lastLoginAt:j});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(w=>Object.assign({},w))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new Bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const gd=new Map;function mn(t){Tn(t instanceof Function,"Expected a class definition");let e=gd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gd.set(t,e),e)}/**
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
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e_.type="NONE";const md=e_;/**
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
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await qo(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(mn(md),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(md);const o=po(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const m=await qo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,d)}else p=Bt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Jr(i,e,r))}}/**
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
 */function _d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o_(e))return"Blackberry";if(a_(e))return"Webos";if(n_(e))return"Safari";if((e.includes("chrome/")||r_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function t_(t=dt()){return/firefox\//i.test(t)}function n_(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r_(t=dt()){return/crios\//i.test(t)}function s_(t=dt()){return/iemobile/i.test(t)}function i_(t=dt()){return/android/i.test(t)}function o_(t=dt()){return/blackberry/i.test(t)}function a_(t=dt()){return/webos/i.test(t)}function hu(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cR(t=dt()){var e;return hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uR(){return sI()&&document.documentMode===10}function l_(t=dt()){return hu(t)||i_(t)||a_(t)||o_(t)||/windows phone/i.test(t)||s_(t)}/**
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
 */function c_(t,e=[]){let n;switch(t){case"Browser":n=_d(dt());break;case"Worker":n=`${_d(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class hR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fR(t,e={}){return ms(t,"GET","/v2/passwordPolicy",cu(t,e))}/**
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
 */const dR=6;class pR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new hR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qo(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(_r(this));const n=e?bt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fR(this),n=new pR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fu(t){return bt(t)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mR(t){du=t}function _R(t){return du.loadJS(t)}function yR(){return du.gapiScript}function vR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ER(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function TR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IR(t,e,n){const r=fu(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=u_(e),{host:o,port:l}=wR(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Er(h,r.config.emulator)&&Er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,AR()}function u_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wR(t){const e=u_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vd(o)}}}function vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class h_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
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
 */async function Yr(t,e){return Zb(t,"POST","/v1/accounts:signInWithIdp",cu(t,e))}/**
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
 */const bR="http://localhost";class br extends h_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ou(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:bR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
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
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends Si{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class Ln extends Si{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */class Un extends Si{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=Ed(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ed(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zo extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function d_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function RR(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function SR(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await fi(t,d_(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=uu(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
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
 */async function PR(t,e,n=!1){if(Jt(t.app))return Promise.reject(_r(t));const r="signIn",s=await d_(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function CR(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function kR(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const Ko="__sak";/**
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
 */class p_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VR=1e3,DR=10;class g_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}g_.type="LOCAL";const OR=g_;/**
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
 */class m_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const __=m_;/**
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
 */function NR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await NR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=pu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function MR(t){nn().location.href=t}/**
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
 */function y_(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function LR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FR(){return y_()?self:null}/**
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
 */const v_="firebaseLocalStorageDb",jR=1,Wo="firebaseLocalStorage",E_="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function BR(){const t=indexedDB.deleteDatabase(v_);return new Pi(t).toPromise()}function nc(){const t=indexedDB.open(v_,jR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:E_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await BR(),e(await nc()))})})}async function Td(t,e,n){const r=Pa(t,!0).put({[E_]:e,value:n});return new Pi(r).toPromise()}async function $R(t,e){const n=Pa(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function Id(t,e){const n=Pa(t,!0).delete(e);return new Pi(n).toPromise()}const qR=800,HR=3;class T_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(FR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LR(),!this.activeServiceWorker)return;this.sender=new xR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await Td(e,Ko,"1"),await Id(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Td(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$R(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pa(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const zR=T_;new Ri(3e4,6e4);/**
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
 */function KR(t,e){return e?mn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gu extends h_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WR(t){return PR(t.auth,new gu(t),t.bypassAuthState)}function GR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),SR(n,new gu(t),t.bypassAuthState)}async function QR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),RR(n,new gu(t),t.bypassAuthState)}/**
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
 */class I_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WR;case"linkViaPopup":case"linkViaRedirect":return QR;case"reauthViaPopup":case"reauthViaRedirect":return GR;default:En(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JR=new Ri(2e3,1e4);class $r extends I_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}$r.currentPopupAction=null;/**
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
 */const YR="pendingRedirect",go=new Map;class XR extends I_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await ZR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZR(t,e){const n=nS(e),r=tS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eS(t,e){go.set(t._key(),e)}function tS(t){return mn(t._redirectPersistence)}function nS(t){return po(YR,t.config.apiKey,t.name)}async function rS(t,e,n=!1){if(Jt(t.app))return Promise.reject(_r(t));const r=fu(t),s=KR(r,e),o=await new XR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sS=10*60*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sS&&this.cachedEventUids.clear(),this.cachedEventUids.has(wd(e))}saveEventToCache(e){this.cachedEventUids.add(wd(e)),this.lastProcessedEventTime=Date.now()}}function wd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w_(t);default:return!1}}/**
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
 */async function aS(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
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
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cS=/^https?/;async function uS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aS(t);for(const n of e)try{if(hS(n))return}catch{}En(t,"unauthorized-domain")}function hS(t){const e=ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cS.test(n))return!1;if(lS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fS=new Ri(3e4,6e4);function Ad(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dS(t){return new Promise((e,n)=>{var r,s,i;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ad(),n(tn(t,"network-request-failed"))},timeout:fS.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const l=vR("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},_R(`${yR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw mo=null,e})}let mo=null;function pS(t){return mo=mo||dS(t),mo}/**
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
 */const gS=new Ri(5e3,15e3),mS="__/auth/iframe",_S="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ES(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lu(e,_S):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=vS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ei(r).slice(1)}`}async function TS(t){const e=await pS(t),n=nn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:ES(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{i(o)},gS.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const IS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,AS=600,bS="_blank",RS="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SS(t,e,n,r=wS,s=AS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},IS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=dt().toLowerCase();n&&(l=r_(h)?bS:n),t_(h)&&(e=e||RS,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(cR(h)&&l!=="_self")return PS(e||"",l),new bd(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new bd(p)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CS="__/auth/handler",kS="emulator/auth/handler",VS=encodeURIComponent("fac");async function Rd(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof f_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Si){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${VS}=${encodeURIComponent(c)}`:"";return`${DS(t)}?${Ei(l).slice(1)}${h}`}function DS({config:t}){return t.emulator?lu(t,kS):`https://${t.authDomain}/${CS}`}/**
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
 */const pl="webStorageSupport";class OS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=rS,this._overrideRedirectResult=eS}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rd(e,n,r,ec(),s);return SS(e,o,pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rd(e,n,r,ec(),s);return MR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TS(e),r=new iS(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pl,{type:pl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pl];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l_()||n_()||hu()}}const NS=OS;var Sd="@firebase/auth",Pd="1.10.1";/**
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
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LS(t){ns(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(t)},h=new gR(r,s,i,c);return TR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Tr("auth-internal",e=>{const n=fu(e.getProvider("auth").getImmediate());return(r=>new xS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Sd,Pd,MS(t)),Hn(Sd,Pd,"esm2017")}/**
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
 */const US=5*60,FS=fg("authIdTokenMaxAge")||US;let Cd=null;const jS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FS)return;const s=n==null?void 0:n.token;Cd!==s&&(Cd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BS(t=mg()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ER(t,{popupRedirectResolver:NS,persistence:[zR,OR,__]}),r=fg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jS(i.toString());kR(n,o,()=>o(n.currentUser)),CR(n,l=>o(l))}}const s=ug("auth");return s&&IR(n,`http://${s}`),n}function $S(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$S().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LS("Browser");const qS={apiKey:"your-api-key",authDomain:"your-auth-domain",projectId:"your-project-id",storageBucket:"your-storage-bucket",messagingSenderId:"your-msg-sender-id",appId:"your-app-id"},A_=gg(qS),to=Ab(A_);BS(A_);const HS={data(){return{users:[],newUser:{username:"",password:"",role:"user"},selectedUser:null}},methods:{async fetchUsers(){const t=cd(to,"users"),e=await Bb(t);this.users=e.docs.map(n=>({...n.data(),id:n.id}))},async addUser(){const{username:t,password:e,role:n}=this.newUser,r=await bcrypt.hash(e,10);await Hb(cd(to,"users"),{username:t,password:r,role:n,friends:[]}),this.newUser={username:"",password:"",role:"user"},this.fetchUsers()},async updateUser(){if(this.selectedUser){const t=Xl(to,"users",this.selectedUser.id);await $b(t,{username:this.selectedUser.username,role:this.selectedUser.role}),this.selectedUser=null,this.fetchUsers()}},async deleteUser(t){const e=Xl(to,"users",t);await qb(e),this.fetchUsers()},editUser(t){this.selectedUser={...t}}},created(){this.fetchUsers()}},zS=["onClick"],KS=["onClick"];function WS(t,e,n,r,s,i){return We(),Ze("div",null,[e[9]||(e[9]=ie("h2",null,"Admin Panel",-1)),ie("div",null,[e[6]||(e[6]=ie("h3",null,"Add New User",-1)),ie("form",{onSubmit:e[3]||(e[3]=Ic((...o)=>i.addUser&&i.addUser(...o),["prevent"]))},[gr(ie("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newUser.username=o),type:"text",placeholder:"Username",required:""},null,512),[[Zr,s.newUser.username]]),gr(ie("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.newUser.password=o),type:"password",placeholder:"Password",required:""},null,512),[[Zr,s.newUser.password]]),gr(ie("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.newUser.role=o)},e[4]||(e[4]=[ie("option",{value:"user"},"User",-1),ie("option",{value:"admin"},"Admin",-1)]),512),[[fE,s.newUser.role]]),e[5]||(e[5]=ie("button",{type:"submit"},"Add User",-1))],32)]),ie("div",null,[e[8]||(e[8]=ie("h3",null,"Users",-1)),ie("table",null,[e[7]||(e[7]=ie("thead",null,[ie("tr",null,[ie("th",null,"Username"),ie("th",null,"Role"),ie("th",null,"Actions")])],-1)),ie("tbody",null,[(We(!0),Ze(xt,null,vl(s.users,o=>(We(),Ze("tr",{key:o.id},[ie("td",null,yt(o.username),1),ie("td",null,yt(o.role),1),ie("td",null,[ie("button",{onClick:l=>i.editUser(o)},"Edit",8,zS),ie("button",{onClick:l=>i.deleteUser(o.id)},"Delete",8,KS)])]))),128))])])])])}const GS=Sr(HS,[["render",WS],["__scopeId","data-v-8c048f9a"]]),QS={data(){return{friends:[]}},methods:{async fetchFriends(){const t=yi();await t.fetchFriends(),this.friends=t.friends}},created(){this.fetchFriends()}};function JS(t,e,n,r,s,i){return We(),Ze("div",null,[e[0]||(e[0]=ie("h2",null,"Your Friends' Activities",-1)),(We(!0),Ze(xt,null,vl(s.friends,o=>(We(),Ze("div",{key:o.id},[ie("h3",null,yt(o.username),1),(We(!0),Ze(xt,null,vl(o.activities,l=>(We(),Ze("div",{key:l.id},[ie("p",null,yt(l.type)+" - "+yt(l.duration)+" mins",1)]))),128))]))),128))])}const YS=Sr(QS,[["render",JS]]),XS={__name:"Stats",setup(t){const e=gi({steps:0,calories:0,minutes:0});return vc(async()=>{try{const n=await fetch("/api/stats/1");e.value=await n.json()}catch(n){console.error("Failed to load stats:",n)}}),(n,r)=>(We(),Ze("section",null,[r[0]||(r[0]=ie("h2",null,"Your Stats",-1)),ie("ul",null,[ie("li",null,"Steps Today: "+yt(e.value.steps),1),ie("li",null,"Calories Burned: "+yt(e.value.calories),1),ie("li",null,"Workout Time: "+yt(e.value.minutes)+" minutes",1)])]))}},ZS=Sr(XS,[["__scopeId","data-v-624c3467"]]),eP={data(){return{email:"",password:"",error:""}},methods:{async register(){const t=yi();try{await t.register(this.email,this.password),this.$router.push("/dashboard")}catch(e){this.error=e.message||"Registration failed."}}}},tP={class:"register"},nP={key:0};function rP(t,e,n,r,s,i){return We(),Ze("div",tP,[e[4]||(e[4]=ie("h2",null,"Create an Account",-1)),ie("form",{onSubmit:e[2]||(e[2]=Ic((...o)=>i.register&&i.register(...o),["prevent"]))},[gr(ie("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),type:"email",placeholder:"Email",required:""},null,512),[[Zr,s.email]]),gr(ie("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),type:"password",placeholder:"Password",required:""},null,512),[[Zr,s.password]]),e[3]||(e[3]=ie("button",{type:"submit"},"Register",-1))],32),s.error?(We(),Ze("p",nP,yt(s.error),1)):Lp("",!0)])}const sP=Sr(eP,[["render",rP],["__scopeId","data-v-fb8af4a5"]]),iP=[{path:"/",component:MT},{path:"/register",name:"Register",component:sP},{path:"/dashboard",component:BT,meta:{requiresAuth:!0}},{path:"/admin",component:GS,meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:(t,e,n)=>{const r=yi();if(!r.currentUser||r.currentUser.role!=="admin")return n("/");n()}},{path:"/friends",component:YS,meta:{requiresAuth:!0}},{path:"/stats",component:ZS,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}],oP=kT({history:iT("/"),routes:iP}),mu=$p(Wp);console.log("Bootstrapping Vue app...");$p(Wp).mount("#app");mu.use(vE());mu.use(oP);mu.mount("#app");
//# sourceMappingURL=index-VsosukkA.js.map
