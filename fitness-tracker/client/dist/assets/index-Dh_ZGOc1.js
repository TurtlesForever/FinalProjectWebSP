(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},Zr=[],sn=()=>{},wv=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jl=t=>t.startsWith("onUpdate:"),pt=Object.assign,$l=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iv=Object.prototype.hasOwnProperty,Pe=(t,e)=>Iv.call(t,e),ce=Array.isArray,es=t=>Ci(t)==="[object Map]",_a=t=>Ci(t)==="[object Set]",Wh=t=>Ci(t)==="[object Date]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",fn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Sp=t=>(Ve(t)||pe(t))&&pe(t.then)&&pe(t.catch),Pp=Object.prototype.toString,Ci=t=>Pp.call(t),Av=t=>Ci(t).slice(8,-1),Cp=t=>Ci(t)==="[object Object]",ql=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bv=/-(\w)/g,qt=ya(t=>t.replace(bv,(e,n)=>n?n.toUpperCase():"")),Rv=/\B([A-Z])/g,Lr=ya(t=>t.replace(Rv,"-$1").toLowerCase()),va=ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),vc=ya(t=>t?`on${va(t)}`:""),Qn=(t,e)=>!Object.is(t,e),yo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const Ea=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?Ov(r):Hl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ve(t))return t}const Sv=/;(?![^(]*\))/g,Pv=/:([^]+)/,Cv=/\/\*[^]*?\*\//g;function Ov(t){const e={};return t.replace(Cv,"").split(Sv).forEach(n=>{if(n){const r=n.split(Pv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zl(t){let e="";if(ze(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=zl(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dv=Bl(kv);function kp(t){return!!t||t===""}function Nv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ta(t[r],e[r]);return n}function Ta(t,e){if(t===e)return!0;let n=Wh(t),r=Wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?Nv(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ta(t[o],e[o]))return!1}}return String(t)===String(e)}function Vv(t,e){return t.findIndex(n=>Ta(n,e))}const Dp=t=>!!(t&&t.__v_isRef===!0),on=t=>ze(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===Pp||!pe(t.toString))?Dp(t)?on(t.value):JSON.stringify(t,Np,2):String(t),Np=(t,e)=>Dp(e)?Np(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ec(r,i)+" =>"]=s,n),{})}:_a(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ec(n))}:fn(e)?Ec(e):Ve(e)&&!ce(e)&&!Cp(e)?String(e):e,Ec=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xp(t){return new Vp(t)}function Mp(){return yt}function xv(t,e=!1){yt&&yt.cleanups.push(t)}let Ne;const Tc=new WeakSet;class Lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tc.has(this)&&(Tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qh(this),Bp(this);const e=Ne,n=Wt;Ne=this,Wt=!0;try{return this.fn()}finally{jp(this),Ne=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gl(e);this.deps=this.depsTail=void 0,Qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let Up=0,Ys,Xs;function Fp(t,e=!1){if(t.flags|=8,e){t.next=Xs,Xs=t;return}t.next=Ys,Ys=t}function Kl(){Up++}function Wl(){if(--Up>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gl(r),Mv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fi))return;t.globalVersion=fi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Wc(t)){t.flags&=-3;return}const n=Ne,r=Wt;Ne=t,Wt=!0;try{Bp(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Wt=r,jp(t),t.flags&=-3}}function Gl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const qp=[];function lr(){qp.push(Wt),Wt=!1}function ur(){const t=qp.pop();Wt=t===void 0?!0:t}function Qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let fi=0;class Lv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Wt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Lv(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Hp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,fi++,this.notify(e)}notify(e){Kl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wl()}}}function Hp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Hp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mo=new WeakMap,Ar=Symbol(""),Gc=Symbol(""),di=Symbol("");function ut(t,e,n){if(Wt&&Ne){let r=Mo.get(t);r||Mo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ql),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Mo.get(t);if(!o){fi++;return}const c=l=>{l&&l.trigger()};if(Kl(),e==="clear")o.forEach(c);else{const l=ce(t),u=l&&ql(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===di||!fn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(di)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ar)),es(t)&&c(o.get(Gc)));break;case"delete":l||(c(o.get(Ar)),es(t)&&c(o.get(Gc)));break;case"set":es(t)&&c(o.get(Ar));break}}Wl()}function Uv(t,e){const n=Mo.get(t);return n&&n.get(e)}function Hr(t){const e=Re(t);return e===t?e:(ut(e,"iterate",di),jt(t)?e:e.map(ht))}function wa(t){return ut(t=Re(t),"iterate",di),t}const Fv={__proto__:null,[Symbol.iterator](){return wc(this,Symbol.iterator,ht)},concat(...t){return Hr(this).concat(...t.map(e=>ce(e)?Hr(e):e))},entries(){return wc(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return yn(this,"every",t,e,void 0,arguments)},filter(t,e){return yn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return yn(this,"find",t,e,ht,arguments)},findIndex(t,e){return yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ic(this,"includes",t)},indexOf(...t){return Ic(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return Ic(this,"lastIndexOf",t)},map(t,e){return yn(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Jh(this,"reduce",t,e)},reduceRight(t,...e){return Jh(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return yn(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return wc(this,"values",ht)}};function wc(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Bv=Array.prototype;function yn(t,e,n,r,s,i){const o=wa(t),c=o!==t&&!jt(t),l=o[e];if(l!==Bv[e]){const p=l.apply(t,i);return c?ht(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ht(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Jh(t,e,n,r){const s=wa(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ht(c),l,t)}),s[e](i,...r)}function Ic(t,e,n){const r=Re(t);ut(r,"iterate",di);const s=r[e](...n);return(s===-1||s===!1)&&Xl(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function $s(t,e,n=[]){lr(),Kl();const r=Re(t)[e].apply(t,n);return Wl(),ur(),r}const jv=Bl("__proto__,__v_isRef,__isVue"),zp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function $v(t){fn(t)||(t=String(t));const e=Re(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xv:Jp:i?Qp:Gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=Fv[n]))return l;if(n==="hasOwnProperty")return $v}const c=Reflect.get(e,n,qe(e)?e:r);return(fn(n)?zp.has(n):jv(n))||(s||ut(e,"get",n),i)?c:qe(c)?o&&ql(n)?c:c.value:Ve(c)?s?Xp(c):Oi(c):c}}class Wp extends Kp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Pr(i);if(!jt(r)&&!Pr(r)&&(i=Re(i),r=Re(r)),!ce(e)&&qe(i)&&!qe(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&ql(n)?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,qe(e)?e:s);return e===Re(s)&&(o?Qn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!zp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",ce(e)?"length":Ar),Reflect.ownKeys(e)}}class qv extends Kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hv=new Wp,zv=new qv,Kv=new Wp(!0);const Qc=t=>t,ao=t=>Reflect.getPrototypeOf(t);function Wv(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Qc:e?Jc:ht;return!e&&ut(i,"iterate",l?Gc:Ar),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gv(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(Qn(s,c)&&ut(o,"get",s),ut(o,"get",c));const{has:l}=ao(o),u=e?Qc:t?Jc:ht;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(Re(s),"iterate",Ar),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(Qn(s,c)&&ut(o,"has",s),ut(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),u=e?Qc:t?Jc:ht;return!t&&ut(l,"iterate",Ar),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return pt(n,t?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!e&&!jt(s)&&!Pr(s)&&(s=Re(s));const i=Re(this);return ao(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!Pr(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=ao(o);let u=c.call(o,s);u||(s=Re(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Qn(i,f)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=ao(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Tn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wv(s,t,e)}),n}function Jl(t,e){const n=Gv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Qv={get:Jl(!1,!1)},Jv={get:Jl(!1,!0)},Yv={get:Jl(!0,!1)};const Gp=new WeakMap,Qp=new WeakMap,Jp=new WeakMap,Xv=new WeakMap;function Zv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eE(t){return t.__v_skip||!Object.isExtensible(t)?0:Zv(Av(t))}function Oi(t){return Pr(t)?t:Yl(t,!1,Hv,Qv,Gp)}function Yp(t){return Yl(t,!1,Kv,Jv,Qp)}function Xp(t){return Yl(t,!0,zv,Yv,Jp)}function Yl(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=eE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Jn(t){return Pr(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Xl(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Zl(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Op(t,"__v_skip",!0),t}const ht=t=>Ve(t)?Oi(t):t,Jc=t=>Ve(t)?Xp(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function eu(t){return Zp(t,!1)}function tE(t){return Zp(t,!0)}function Zp(t,e){return qe(t)?t:new nE(t,e)}class nE{constructor(e,n){this.dep=new Ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||Pr(e);e=r?e:Re(e),Qn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function ts(t){return qe(t)?t.value:t}const rE={get:(t,e,n)=>e==="__v_raw"?t:ts(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function em(t){return Jn(t)?t:new Proxy(t,rE)}function sE(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=oE(t,n);return e}class iE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uv(Re(this._object),this._key)}}function oE(t,e,n){const r=t[e];return qe(r)?r:new iE(t,e,n)}class aE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new aE(r,s,n)}const lo={},Lo=new WeakMap;let vr;function lE(t,e=!1,n=vr){if(n){let r=Lo.get(n);r||Lo.set(n,r=[]),r.push(t)}}function uE(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:jt(H)||s===!1||s===0?wn(H,1):wn(H);let f,p,m,y,b=!1,O=!1;if(qe(t)?(p=()=>t.value,b=jt(t)):Jn(t)?(p=()=>u(t),b=!0):ce(t)?(O=!0,b=t.some(H=>Jn(H)||jt(H)),p=()=>t.map(H=>{if(qe(H))return H.value;if(Jn(H))return u(H);if(pe(H))return l?l(H,2):H()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){lr();try{m()}finally{ur()}}const H=vr;vr=f;try{return l?l(t,3,[y]):t(y)}finally{vr=H}}:p=sn,e&&s){const H=p,Z=s===!0?1/0:s;p=()=>wn(H(),Z)}const S=Mp(),B=()=>{f.stop(),S&&S.active&&$l(S.effects,f)};if(i&&e){const H=e;e=(...Z)=>{H(...Z),B()}}let U=O?new Array(t.length).fill(lo):lo;const j=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const Z=f.run();if(s||b||(O?Z.some((oe,I)=>Qn(oe,U[I])):Qn(Z,U))){m&&m();const oe=vr;vr=f;try{const I=[Z,U===lo?void 0:O&&U[0]===lo?[]:U,y];l?l(e,3,I):e(...I),U=Z}finally{vr=oe}}}else f.run()};return c&&c(j),f=new Lp(p),f.scheduler=o?()=>o(j,!1):j,y=H=>lE(H,!1,f),m=f.onStop=()=>{const H=Lo.get(f);if(H){if(l)l(H,4);else for(const Z of H)Z();Lo.delete(f)}},e?r?j(!0):U=f.run():o?o(j.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function wn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qe(t))wn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(_a(t)||es(t))t.forEach(r=>{wn(r,e,n)});else if(Cp(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(t,e,n,r){try{return r?t(...r):t()}catch(s){Ia(s,e,n)}}function dn(t,e,n,r){if(pe(t)){const s=ki(t,e,n,r);return s&&Sp(s)&&s.catch(i=>{Ia(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function Ia(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){lr(),ki(i,null,10,[t,l,u]),ur();return}}hE(t,n,s,r,o)}function hE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let en=-1;const ns=[];let Bn=null,Kr=0;const tm=Promise.resolve();let Uo=null;function Aa(t){const e=Uo||tm;return t?e.then(this?t.bind(this):t):e}function fE(t){let e=en+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=pi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function tu(t){if(!(t.flags&1)){const e=pi(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=pi(n)?vt.push(t):vt.splice(fE(e),0,t),t.flags|=1,nm()}}function nm(){Uo||(Uo=tm.then(sm))}function dE(t){ce(t)?ns.push(...t):Bn&&t.id===-1?Bn.splice(Kr+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),nm()}function Yh(t,e,n=en+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rm(t){if(ns.length){const e=[...new Set(ns)].sort((n,r)=>pi(n)-pi(r));if(ns.length=0,Bn){Bn.push(...e);return}for(Bn=e,Kr=0;Kr<Bn.length;Kr++){const n=Bn[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,Kr=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sm(t){try{for(en=0;en<vt.length;en++){const e=vt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<vt.length;en++){const e=vt[en];e&&(e.flags&=-2)}en=-1,vt.length=0,rm(),Uo=null,(vt.length||ns.length)&&sm()}}let Rt=null,im=null;function Fo(t){const e=Rt;return Rt=t,im=t&&t.type.__scopeId||null,e}function om(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cf(-1);const i=Fo(e);let o;try{o=t(...s)}finally{Fo(i),r._d&&cf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zs(t,e){if(Rt===null)return t;const n=Pa(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function _r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(lr(),dn(l,n,8,[t.el,c,t,e]),ur())}}const pE=Symbol("_vte"),mE=t=>t.__isTeleport;function nu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,nu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function am(t,e){return pe(t)?pt({name:t.name},e,{setup:t}):t}function cm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Bo(t,e,n,r,s=!1){if(ce(t)){t.forEach((b,O)=>Bo(b,e&&(ce(e)?e[O]:e),n,r,s));return}if(ei(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Bo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,m=Re(p),y=p===ke?()=>!1:b=>Pe(m,b);if(u!=null&&u!==l&&(ze(u)?(f[u]=null,y(u)&&(p[u]=null)):qe(u)&&(u.value=null)),pe(l))ki(l,c,12,[o,f]);else{const b=ze(l),O=qe(l);if(b||O){const S=()=>{if(t.f){const B=b?y(l)?p[l]:f[l]:l.value;s?ce(B)&&$l(B,i):ce(B)?B.includes(i)||B.push(i):b?(f[l]=[i],y(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else b?(f[l]=o,y(l)&&(p[l]=o)):O&&(l.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,Dt(S,n)):S()}}}Ea().requestIdleCallback;Ea().cancelIdleCallback;const ei=t=>!!t.type.__asyncLoader,lm=t=>t.type.__isKeepAlive;function gE(t,e){um(t,"a",e)}function _E(t,e){um(t,"da",e)}function um(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)lm(s.parent.vnode)&&yE(r,e,n,s),s=s.parent}}function yE(t,e,n,r){const s=ba(e,t,r,!0);hm(()=>{$l(r[e],s)},n)}function ba(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const c=Di(n),l=dn(e,n,t,o);return c(),ur(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=tt)=>{(!gi||t==="sp")&&ba(t,(...r)=>e(...r),n)},vE=On("bm"),EE=On("m"),TE=On("bu"),wE=On("u"),IE=On("bum"),hm=On("um"),AE=On("sp"),bE=On("rtg"),RE=On("rtc");function SE(t,e=tt){ba("ec",t,e)}const PE="components";function fm(t,e){return OE(PE,t,!0,e)||t}const CE=Symbol.for("v-ndc");function OE(t,e,n=!0,r=!1){const s=Rt||tt;if(s){const i=s.type;{const c=vT(i,!1);if(c&&(c===e||c===qt(e)||c===va(qt(e))))return i}const o=Xh(s[t]||i[t],e)||Xh(s.appContext[t],e);return!o&&r?i:o}}function Xh(t,e){return t&&(t[e]||t[qt(e)]||t[va(qt(e))])}function Yc(t,e,n,r){let s;const i=n,o=ce(t);if(o||ze(t)){const c=o&&Jn(t);let l=!1;c&&(l=!jt(t),t=wa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Xc=t=>t?Vm(t)?Pa(t):Xc(t.parent):null,ti=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>pm(t),$forceUpdate:t=>t.f||(t.f=()=>{tu(t.update)}),$nextTick:t=>t.n||(t.n=Aa.bind(t.proxy)),$watch:t=>XE.bind(t)}),Ac=(t,e)=>t!==ke&&!t.__isScriptSetup&&Pe(t,e),kE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ac(r,e))return o[e]=1,r[e];if(s!==ke&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==ke&&Pe(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const f=ti[e];let p,m;if(f)return e==="$attrs"&&ut(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&Pe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Pe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ac(s,e)?(s[e]=n,!0):r!==ke&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ke&&Pe(t,o)||Ac(e,o)||(c=i[0])&&Pe(c,o)||Pe(r,o)||Pe(ti,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function DE(t){const e=pm(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&ef(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:b,activated:O,deactivated:S,beforeDestroy:B,beforeUnmount:U,destroyed:j,unmounted:H,render:Z,renderTracked:oe,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:R,components:P,directives:T,filters:Je}=e;if(u&&NE(u,r,null),o)for(const ue in o){const ve=o[ue];pe(ve)&&(r[ue]=ve.bind(n))}if(s){const ue=s.call(n,n);Ve(ue)&&(t.data=Oi(ue))}if(Zc=!0,i)for(const ue in i){const ve=i[ue],Ot=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):sn,Ht=!pe(ve)&&pe(ve.set)?ve.set.bind(n):sn,Mt=Bt({get:Ot,set:Ht});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Le=>Mt.value=Le})}if(c)for(const ue in c)dm(c[ue],r,n,ue);if(l){const ue=pe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ve=>{vo(ve,ue[ve])})}f&&ef(f,t,"c");function De(ue,ve){ce(ve)?ve.forEach(Ot=>ue(Ot.bind(n))):ve&&ue(ve.bind(n))}if(De(vE,p),De(EE,m),De(TE,y),De(wE,b),De(gE,O),De(_E,S),De(SE,_),De(RE,oe),De(bE,I),De(IE,U),De(hm,H),De(AE,v),ce(A))if(A.length){const ue=t.exposed||(t.exposed={});A.forEach(ve=>{Object.defineProperty(ue,ve,{get:()=>n[ve],set:Ot=>n[ve]=Ot})})}else t.exposed||(t.exposed={});Z&&t.render===sn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),v&&cm(t)}function NE(t,e,n=sn){ce(t)&&(t=el(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ef(t,e,n){dn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dm(t,e,n,r){let s=r.includes(".")?Pm(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&ni(s,i)}else if(pe(t))ni(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>dm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&ni(s,i,t)}}function pm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>jo(l,u,o,!0)),jo(l,e,o)),Ve(e)&&i.set(e,l),l}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=VE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const VE={data:tf,props:nf,emits:nf,methods:Ks,computed:Ks,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Ks,directives:Ks,watch:ME,provide:tf,inject:xE};function tf(t,e){return e?t?function(){return pt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function xE(t,e){return Ks(el(t),el(e))}function el(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?pt(Object.create(null),t,e):e}function nf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:pt(Object.create(null),Zh(t),Zh(e??{})):e}function ME(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function mm(){return{app:null,config:{isNativeTag:wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LE=0;function UE(t,e){return function(r,s=null){pe(r)||(r=pt({},r)),s!=null&&!Ve(s)&&(s=null);const i=mm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:LE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:TT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||Et(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,Pa(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(dn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=br;br=u;try{return f()}finally{br=p}}};return u}}let br=null;function vo(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=tt||Rt;if(r||br){const s=br?br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function FE(){return!!(tt||Rt||br)}const gm={},_m=()=>Object.create(gm),ym=t=>Object.getPrototypeOf(t)===gm;function BE(t,e,n,r=!1){const s={},i=_m();t.propsDefaults=Object.create(null),vm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ra(t.emitsOptions,m))continue;const y=e[m];if(l)if(Pe(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const b=qt(m);s[b]=tl(l,c,b,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{vm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Pe(e,p)&&((f=Lr(p))===p||!Pe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=tl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Tn(t.attrs,"set","")}function vm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Js(l))continue;const u=e[l];let f;s&&Pe(s,f=qt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ra(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=tl(s,l,p,u[p],t,!Pe(u,p))}}return o}function tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Di(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}const $E=new WeakMap;function Em(t,e,n=!1){const r=n?$E:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,y]=Em(p,e,!0);pt(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,Zr),Zr;if(ce(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);rf(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=qt(f);if(rf(p)){const m=i[f],y=o[p]=ce(m)||pe(m)?{type:m}:pt({},m),b=y.type;let O=!1,S=!0;if(ce(b))for(let B=0;B<b.length;++B){const U=b[B],j=pe(U)&&U.name;if(j==="Boolean"){O=!0;break}else j==="String"&&(S=!1)}else O=pe(b)&&b.name==="Boolean";y[0]=O,y[1]=S,(O||Pe(y,"default"))&&c.push(p)}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function rf(t){return t[0]!=="$"&&!Js(t)}const Tm=t=>t[0]==="_"||t==="$stable",ru=t=>ce(t)?t.map(nn):[nn(t)],qE=(t,e,n)=>{if(e._n)return e;const r=om((...s)=>ru(e(...s)),n);return r._c=!1,r},wm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tm(s))continue;const i=t[s];if(pe(i))e[s]=qE(s,i,r);else if(i!=null){const o=ru(i);e[s]=()=>o}}},Im=(t,e)=>{const n=ru(e);t.slots.default=()=>n},Am=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},HE=(t,e,n)=>{const r=t.slots=_m();if(t.vnode.shapeFlag&32){const s=e._;s?(Am(r,e,n),n&&Op(r,"_",s,!0)):wm(e,r)}else e&&Im(t,e)},zE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Am(s,e,n):(i=!e.$stable,wm(e,s)),o=e}else e&&(Im(t,e),o={default:1});if(i)for(const c in s)!Tm(c)&&o[c]==null&&delete s[c]},Dt=iT;function KE(t){return WE(t)}function WE(t,e){const n=Ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=sn,insertStaticContent:b}=t,O=(E,w,C,x=null,F=null,M=null,G=void 0,K=null,z=!!w.dynamicChildren)=>{if(E===w)return;E&&!qs(E,w)&&(x=V(E),Le(E,F,M,!0),E=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:q,ref:se,shapeFlag:J}=w;switch(q){case Sa:S(E,w,C,x);break;case Cr:B(E,w,C,x);break;case Rc:E==null&&U(w,C,x,G);break;case Ft:P(E,w,C,x,F,M,G,K,z);break;default:J&1?Z(E,w,C,x,F,M,G,K,z):J&6?T(E,w,C,x,F,M,G,K,z):(J&64||J&128)&&q.process(E,w,C,x,F,M,G,K,z,ee)}se!=null&&F&&Bo(se,E&&E.ref,M,w||E,!w)},S=(E,w,C,x)=>{if(E==null)r(w.el=c(w.children),C,x);else{const F=w.el=E.el;w.children!==E.children&&u(F,w.children)}},B=(E,w,C,x)=>{E==null?r(w.el=l(w.children||""),C,x):w.el=E.el},U=(E,w,C,x)=>{[E.el,E.anchor]=b(E.children,w,C,x,E.el,E.anchor)},j=({el:E,anchor:w},C,x)=>{let F;for(;E&&E!==w;)F=m(E),r(E,C,x),E=F;r(w,C,x)},H=({el:E,anchor:w})=>{let C;for(;E&&E!==w;)C=m(E),s(E),E=C;s(w)},Z=(E,w,C,x,F,M,G,K,z)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),E==null?oe(w,C,x,F,M,G,K,z):v(E,w,F,M,G,K,z)},oe=(E,w,C,x,F,M,G,K)=>{let z,q;const{props:se,shapeFlag:J,transition:te,dirs:le}=E;if(z=E.el=o(E.type,M,se&&se.is,se),J&8?f(z,E.children):J&16&&_(E.children,z,null,x,F,bc(E,M),G,K),le&&_r(E,null,x,"created"),I(z,E,E.scopeId,G,x),se){for(const me in se)me!=="value"&&!Js(me)&&i(z,me,null,se[me],M,x);"value"in se&&i(z,"value",null,se.value,M),(q=se.onVnodeBeforeMount)&&Xt(q,x,E)}le&&_r(E,null,x,"beforeMount");const ie=GE(F,te);ie&&te.beforeEnter(z),r(z,w,C),((q=se&&se.onVnodeMounted)||ie||le)&&Dt(()=>{q&&Xt(q,x,E),ie&&te.enter(z),le&&_r(E,null,x,"mounted")},F)},I=(E,w,C,x,F)=>{if(C&&y(E,C),x)for(let M=0;M<x.length;M++)y(E,x[M]);if(F){let M=F.subTree;if(w===M||Om(M.type)&&(M.ssContent===w||M.ssFallback===w)){const G=F.vnode;I(E,G,G.scopeId,G.slotScopeIds,F.parent)}}},_=(E,w,C,x,F,M,G,K,z=0)=>{for(let q=z;q<E.length;q++){const se=E[q]=K?jn(E[q]):nn(E[q]);O(null,se,w,C,x,F,M,G,K)}},v=(E,w,C,x,F,M,G)=>{const K=w.el=E.el;let{patchFlag:z,dynamicChildren:q,dirs:se}=w;z|=E.patchFlag&16;const J=E.props||ke,te=w.props||ke;let le;if(C&&yr(C,!1),(le=te.onVnodeBeforeUpdate)&&Xt(le,C,w,E),se&&_r(w,E,C,"beforeUpdate"),C&&yr(C,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&f(K,""),q?A(E.dynamicChildren,q,K,C,x,bc(w,F),M):G||ve(E,w,K,null,C,x,bc(w,F),M,!1),z>0){if(z&16)R(K,J,te,C,F);else if(z&2&&J.class!==te.class&&i(K,"class",null,te.class,F),z&4&&i(K,"style",J.style,te.style,F),z&8){const ie=w.dynamicProps;for(let me=0;me<ie.length;me++){const we=ie[me],st=J[we],Ye=te[we];(Ye!==st||we==="value")&&i(K,we,st,Ye,F,C)}}z&1&&E.children!==w.children&&f(K,w.children)}else!G&&q==null&&R(K,J,te,C,F);((le=te.onVnodeUpdated)||se)&&Dt(()=>{le&&Xt(le,C,w,E),se&&_r(w,E,C,"updated")},x)},A=(E,w,C,x,F,M,G)=>{for(let K=0;K<w.length;K++){const z=E[K],q=w[K],se=z.el&&(z.type===Ft||!qs(z,q)||z.shapeFlag&70)?p(z.el):C;O(z,q,se,null,x,F,M,G,!0)}},R=(E,w,C,x,F)=>{if(w!==C){if(w!==ke)for(const M in w)!Js(M)&&!(M in C)&&i(E,M,w[M],null,F,x);for(const M in C){if(Js(M))continue;const G=C[M],K=w[M];G!==K&&M!=="value"&&i(E,M,K,G,F,x)}"value"in C&&i(E,"value",w.value,C.value,F)}},P=(E,w,C,x,F,M,G,K,z)=>{const q=w.el=E?E.el:c(""),se=w.anchor=E?E.anchor:c("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:le}=w;le&&(K=K?K.concat(le):le),E==null?(r(q,C,x),r(se,C,x),_(w.children||[],C,se,F,M,G,K,z)):J>0&&J&64&&te&&E.dynamicChildren?(A(E.dynamicChildren,te,C,F,M,G,K),(w.key!=null||F&&w===F.subTree)&&bm(E,w,!0)):ve(E,w,C,se,F,M,G,K,z)},T=(E,w,C,x,F,M,G,K,z)=>{w.slotScopeIds=K,E==null?w.shapeFlag&512?F.ctx.activate(w,C,x,G,z):Je(w,C,x,F,M,G,z):Tt(E,w,z)},Je=(E,w,C,x,F,M,G)=>{const K=E.component=pT(E,x,F);if(lm(E)&&(K.ctx.renderer=ee),mT(K,!1,G),K.asyncDep){if(F&&F.registerDep(K,De,G),!E.el){const z=K.subTree=Et(Cr);B(null,z,w,C)}}else De(K,E,w,C,F,M,G)},Tt=(E,w,C)=>{const x=w.component=E.component;if(rT(E,w,C))if(x.asyncDep&&!x.asyncResolved){ue(x,w,C);return}else x.next=w,x.update();else w.el=E.el,x.vnode=w},De=(E,w,C,x,F,M,G)=>{const K=()=>{if(E.isMounted){let{next:J,bu:te,u:le,parent:ie,vnode:me}=E;{const it=Rm(E);if(it){J&&(J.el=me.el,ue(E,J,G)),it.asyncDep.then(()=>{E.isUnmounted||K()});return}}let we=J,st;yr(E,!1),J?(J.el=me.el,ue(E,J,G)):J=me,te&&yo(te),(st=J.props&&J.props.onVnodeBeforeUpdate)&&Xt(st,ie,J,me),yr(E,!0);const Ye=of(E),Lt=E.subTree;E.subTree=Ye,O(Lt,Ye,p(Lt.el),V(Lt),E,F,M),J.el=Ye.el,we===null&&sT(E,Ye.el),le&&Dt(le,F),(st=J.props&&J.props.onVnodeUpdated)&&Dt(()=>Xt(st,ie,J,me),F)}else{let J;const{el:te,props:le}=w,{bm:ie,m:me,parent:we,root:st,type:Ye}=E,Lt=ei(w);yr(E,!1),ie&&yo(ie),!Lt&&(J=le&&le.onVnodeBeforeMount)&&Xt(J,we,w),yr(E,!0);{st.ce&&st.ce._injectChildStyle(Ye);const it=E.subTree=of(E);O(null,it,C,x,E,F,M),w.el=it.el}if(me&&Dt(me,F),!Lt&&(J=le&&le.onVnodeMounted)){const it=w;Dt(()=>Xt(J,we,it),F)}(w.shapeFlag&256||we&&ei(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&Dt(E.a,F),E.isMounted=!0,w=C=x=null}};E.scope.on();const z=E.effect=new Lp(K);E.scope.off();const q=E.update=z.run.bind(z),se=E.job=z.runIfDirty.bind(z);se.i=E,se.id=E.uid,z.scheduler=()=>tu(se),yr(E,!0),q()},ue=(E,w,C)=>{w.component=E;const x=E.vnode.props;E.vnode=w,E.next=null,jE(E,w.props,x,C),zE(E,w.children,C),lr(),Yh(E),ur()},ve=(E,w,C,x,F,M,G,K,z=!1)=>{const q=E&&E.children,se=E?E.shapeFlag:0,J=w.children,{patchFlag:te,shapeFlag:le}=w;if(te>0){if(te&128){Ht(q,J,C,x,F,M,G,K,z);return}else if(te&256){Ot(q,J,C,x,F,M,G,K,z);return}}le&8?(se&16&&wt(q,F,M),J!==q&&f(C,J)):se&16?le&16?Ht(q,J,C,x,F,M,G,K,z):wt(q,F,M,!0):(se&8&&f(C,""),le&16&&_(J,C,x,F,M,G,K,z))},Ot=(E,w,C,x,F,M,G,K,z)=>{E=E||Zr,w=w||Zr;const q=E.length,se=w.length,J=Math.min(q,se);let te;for(te=0;te<J;te++){const le=w[te]=z?jn(w[te]):nn(w[te]);O(E[te],le,C,null,F,M,G,K,z)}q>se?wt(E,F,M,!0,!1,J):_(w,C,x,F,M,G,K,z,J)},Ht=(E,w,C,x,F,M,G,K,z)=>{let q=0;const se=w.length;let J=E.length-1,te=se-1;for(;q<=J&&q<=te;){const le=E[q],ie=w[q]=z?jn(w[q]):nn(w[q]);if(qs(le,ie))O(le,ie,C,null,F,M,G,K,z);else break;q++}for(;q<=J&&q<=te;){const le=E[J],ie=w[te]=z?jn(w[te]):nn(w[te]);if(qs(le,ie))O(le,ie,C,null,F,M,G,K,z);else break;J--,te--}if(q>J){if(q<=te){const le=te+1,ie=le<se?w[le].el:x;for(;q<=te;)O(null,w[q]=z?jn(w[q]):nn(w[q]),C,ie,F,M,G,K,z),q++}}else if(q>te)for(;q<=J;)Le(E[q],F,M,!0),q++;else{const le=q,ie=q,me=new Map;for(q=ie;q<=te;q++){const Xe=w[q]=z?jn(w[q]):nn(w[q]);Xe.key!=null&&me.set(Xe.key,q)}let we,st=0;const Ye=te-ie+1;let Lt=!1,it=0;const Nn=new Array(Ye);for(q=0;q<Ye;q++)Nn[q]=0;for(q=le;q<=J;q++){const Xe=E[q];if(st>=Ye){Le(Xe,F,M,!0);continue}let Ut;if(Xe.key!=null)Ut=me.get(Xe.key);else for(we=ie;we<=te;we++)if(Nn[we-ie]===0&&qs(Xe,w[we])){Ut=we;break}Ut===void 0?Le(Xe,F,M,!0):(Nn[Ut-ie]=q+1,Ut>=it?it=Ut:Lt=!0,O(Xe,w[Ut],C,null,F,M,G,K,z),st++)}const Cs=Lt?QE(Nn):Zr;for(we=Cs.length-1,q=Ye-1;q>=0;q--){const Xe=ie+q,Ut=w[Xe],zi=Xe+1<se?w[Xe+1].el:x;Nn[q]===0?O(null,Ut,C,zi,F,M,G,K,z):Lt&&(we<0||q!==Cs[we]?Mt(Ut,C,zi,2):we--)}}},Mt=(E,w,C,x,F=null)=>{const{el:M,type:G,transition:K,children:z,shapeFlag:q}=E;if(q&6){Mt(E.component.subTree,w,C,x);return}if(q&128){E.suspense.move(w,C,x);return}if(q&64){G.move(E,w,C,ee);return}if(G===Ft){r(M,w,C);for(let J=0;J<z.length;J++)Mt(z[J],w,C,x);r(E.anchor,w,C);return}if(G===Rc){j(E,w,C);return}if(x!==2&&q&1&&K)if(x===0)K.beforeEnter(M),r(M,w,C),Dt(()=>K.enter(M),F);else{const{leave:J,delayLeave:te,afterLeave:le}=K,ie=()=>r(M,w,C),me=()=>{J(M,()=>{ie(),le&&le()})};te?te(M,ie,me):me()}else r(M,w,C)},Le=(E,w,C,x=!1,F=!1)=>{const{type:M,props:G,ref:K,children:z,dynamicChildren:q,shapeFlag:se,patchFlag:J,dirs:te,cacheIndex:le}=E;if(J===-2&&(F=!1),K!=null&&Bo(K,null,C,E,!0),le!=null&&(w.renderCache[le]=void 0),se&256){w.ctx.deactivate(E);return}const ie=se&1&&te,me=!ei(E);let we;if(me&&(we=G&&G.onVnodeBeforeUnmount)&&Xt(we,w,E),se&6)Yt(E.component,C,x);else{if(se&128){E.suspense.unmount(C,x);return}ie&&_r(E,null,w,"beforeUnmount"),se&64?E.type.remove(E,w,C,ee,x):q&&!q.hasOnce&&(M!==Ft||J>0&&J&64)?wt(q,w,C,!1,!0):(M===Ft&&J&384||!F&&se&16)&&wt(z,w,C),x&&Ue(E)}(me&&(we=G&&G.onVnodeUnmounted)||ie)&&Dt(()=>{we&&Xt(we,w,E),ie&&_r(E,null,w,"unmounted")},C)},Ue=E=>{const{type:w,el:C,anchor:x,transition:F}=E;if(w===Ft){Dn(C,x);return}if(w===Rc){H(E);return}const M=()=>{s(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:K}=F,z=()=>G(C,M);K?K(E.el,M,z):z()}else M()},Dn=(E,w)=>{let C;for(;E!==w;)C=m(E),s(E),E=C;s(w)},Yt=(E,w,C)=>{const{bum:x,scope:F,job:M,subTree:G,um:K,m:z,a:q}=E;sf(z),sf(q),x&&yo(x),F.stop(),M&&(M.flags|=8,Le(G,E,w,C)),K&&Dt(K,w),Dt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},wt=(E,w,C,x=!1,F=!1,M=0)=>{for(let G=M;G<E.length;G++)Le(E[G],w,C,x,F)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),C=w&&w[pE];return C?m(C):w};let Y=!1;const Q=(E,w,C)=>{E==null?w._vnode&&Le(w._vnode,null,null,!0):O(w._vnode||null,E,w,null,null,null,C),w._vnode=E,Y||(Y=!0,Yh(),rm(),Y=!1)},ee={p:O,um:Le,m:Mt,r:Ue,mt:Je,mc:_,pc:ve,pbc:A,n:V,o:t};return{render:Q,hydrate:void 0,createApp:UE(Q)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function GE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&bm(o,c)),c.type===Sa&&(c.el=o.el)}}function QE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rm(e)}function sf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const JE=Symbol.for("v-scx"),YE=()=>an(JE);function ni(t,e,n){return Sm(t,e,n)}function Sm(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=pt({},n),l=e&&r||!e&&i!=="post";let u;if(gi){if(i==="sync"){const y=YE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=sn,y.resume=sn,y.pause=sn,y}}const f=tt;c.call=(y,b,O)=>dn(y,f,b,O);let p=!1;i==="post"?c.scheduler=y=>{Dt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,b)=>{b?y():tu(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=uE(t,e,c);return gi&&(u?u.push(m):l&&m()),m}function XE(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Pm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Di(this),c=Sm(s,i.bind(r),n);return o(),c}function Pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ZE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function eT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&ZE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ze(f)?f.trim():f)),o.number&&(s=n.map(xo)));let c,l=r[c=vc(e)]||r[c=vc(qt(e))];!l&&i&&(l=r[c=vc(Lr(e))]),l&&dn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(u,t,6,s)}}function Cm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=Cm(u,e,!0);f&&(c=!0,pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):pt(o,i),Ve(t)&&r.set(t,o),o)}function Ra(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Lr(e))||Pe(t,e))}function of(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:b,inheritAttrs:O}=t,S=Fo(t);let B,U;try{if(n.shapeFlag&4){const H=s||r,Z=H;B=nn(u.call(Z,H,f,p,y,m,b)),U=c}else{const H=e;B=nn(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),U=e.props?c:tT(c)}}catch(H){ri.length=0,Ia(H,t,1),B=Et(Cr)}let j=B;if(U&&O!==!1){const H=Object.keys(U),{shapeFlag:Z}=j;H.length&&Z&7&&(i&&H.some(jl)&&(U=nT(U,i)),j=cs(j,U,!1,!0))}return n.dirs&&(j=cs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&nu(j,n.transition),B=j,Fo(S),B}const tT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},nT=(t,e)=>{const n={};for(const r in t)(!jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?af(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ra(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?af(r,o,u):!0:!!o;return!1}function af(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ra(n,i))return!0}return!1}function sT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Om=t=>t.__isSuspense;function iT(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):dE(t)}const Ft=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Cr=Symbol.for("v-cmt"),Rc=Symbol.for("v-stc"),ri=[];let Vt=null;function At(t=!1){ri.push(Vt=t?null:[])}function oT(){ri.pop(),Vt=ri[ri.length-1]||null}let mi=1;function cf(t,e=!1){mi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function km(t){return t.dynamicChildren=mi>0?Vt||Zr:null,oT(),mi>0&&Vt&&Vt.push(t),t}function Nt(t,e,n,r,s,i){return km(_e(t,e,n,r,s,i,!0))}function aT(t,e,n,r,s){return km(Et(t,e,n,r,s,!0))}function $o(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const Dm=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||qe(t)||pe(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function _e(t,e=null,n=null,r=0,s=null,i=t===Ft?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dm(e),ref:e&&Eo(e),scopeId:im,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return c?(su(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),mi>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Et=cT;function cT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===CE)&&(t=Cr),$o(t)){const c=cs(t,e,!0);return n&&su(c,n),mi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(ET(t)&&(t=t.__vccOpts),e){e=lT(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=zl(c)),Ve(l)&&(Xl(l)&&!ce(l)&&(l=pt({},l)),e.style=Hl(l))}const o=ze(t)?1:Om(t)?128:mE(t)?64:Ve(t)?4:pe(t)?2:0;return _e(t,e,n,r,s,o,i,!0)}function lT(t){return t?Xl(t)||ym(t)?pt({},t):t:null}function cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?hT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Dm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&nu(f,l.clone(f)),f}function Nm(t=" ",e=0){return Et(Sa,null,t,e)}function uT(t="",e=!1){return e?(At(),aT(Cr,null,t)):Et(Cr,null,t)}function nn(t){return t==null||typeof t=="boolean"?Et(Cr):ce(t)?Et(Ft,null,t.slice()):$o(t)?jn(t):Et(Sa,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function su(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),su(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ym(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[Nm(e)]):n=8);t.children=e,t.shapeFlag|=n}function hT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zl([e.class,r.class]));else if(s==="style")e.style=Hl([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){dn(t,e,7,[n,r])}const fT=mm();let dT=0;function pT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fT,i={uid:dT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Em(r,s),emitsOptions:Cm(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eT.bind(null,i),t.ce&&t.ce(i),i}let tt=null,qo,nl;{const t=Ea(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qo=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),nl=e("__VUE_SSR_SETTERS__",n=>gi=n)}const Di=t=>{const e=tt;return qo(t),t.scope.on(),()=>{t.scope.off(),qo(e)}},lf=()=>{tt&&tt.scope.off(),qo(null)};function Vm(t){return t.vnode.shapeFlag&4}let gi=!1;function mT(t,e=!1,n=!1){e&&nl(e);const{props:r,children:s}=t.vnode,i=Vm(t);BE(t,r,i,e),HE(t,s,n);const o=i?gT(t,e):void 0;return e&&nl(!1),o}function gT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kE);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?yT(t):null,i=Di(t),o=ki(r,t,0,[t.props,s]),c=Sp(o);if(ur(),i(),(c||t.sp)&&!ei(t)&&cm(t),c){if(o.then(lf,lf),e)return o.then(l=>{uf(t,l)}).catch(l=>{Ia(l,t,0)});t.asyncDep=o}else uf(t,o)}else xm(t)}function uf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=em(e)),xm(t)}function xm(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Di(t);lr();try{DE(t)}finally{ur(),s()}}}const _T={get(t,e){return ut(t,"get",""),t[e]}};function yT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_T),slots:t.slots,emit:t.emit,expose:e}}function Pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(em(Zl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}})):t.proxy}function vT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function ET(t){return pe(t)&&"__vccOpts"in t}const Bt=(t,e)=>cE(t,e,gi);function Mm(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ce(e)?$o(e)?Et(t,null,[e]):Et(t,e):Et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$o(n)&&(n=[n]),Et(t,e,n))}const TT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const hf=typeof window<"u"&&window.trustedTypes;if(hf)try{rl=hf.createPolicy("vue",{createHTML:t=>t})}catch{}const Lm=rl?t=>rl.createHTML(t):t=>t,wT="http://www.w3.org/2000/svg",IT="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,ff=En&&En.createElement("template"),AT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(wT,t):e==="mathml"?En.createElementNS(IT,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ff.innerHTML=Lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ff.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bT=Symbol("_vtc");function RT(t,e,n){const r=t[bT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const df=Symbol("_vod"),ST=Symbol("_vsh"),PT=Symbol(""),CT=/(^|;)\s*display\s*:/;function OT(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&To(r,c,"")}else for(const o in e)n[o]==null&&To(r,o,"");for(const o in n)o==="display"&&(i=!0),To(r,o,n[o])}else if(s){if(e!==n){const o=r[PT];o&&(n+=";"+o),r.cssText=n,i=CT.test(n)}}else e&&t.removeAttribute("style");df in t&&(t[df]=i?r.display:"",t[ST]&&(r.display="none"))}const pf=/\s*!important$/;function To(t,e,n){if(ce(n))n.forEach(r=>To(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kT(t,e);pf.test(n)?t.setProperty(Lr(r),n.replace(pf,""),"important"):t[r]=n}}const mf=["Webkit","Moz","ms"],Sc={};function kT(t,e){const n=Sc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Sc[e]=r;r=va(r);for(let s=0;s<mf.length;s++){const i=mf[s]+r;if(i in t)return Sc[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function _f(t,e,n,r,s,i=Dv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n):n==null||i&&!kp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function yf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Tr(t,e,n,r){t.addEventListener(e,n,r)}function DT(t,e,n,r){t.removeEventListener(e,n,r)}const vf=Symbol("_vei");function NT(t,e,n,r,s=null){const i=t[vf]||(t[vf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=VT(e);if(r){const u=i[e]=LT(r,s);Tr(t,c,u,l)}else o&&(DT(t,c,o,l),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function VT(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let Pc=0;const xT=Promise.resolve(),MT=()=>Pc||(xT.then(()=>Pc=0),Pc=Date.now());function LT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(UT(r,n.value),e,5,[r])};return n.value=t,n.attached=MT(),n}function UT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,FT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?RT(t,r,o):e==="style"?OT(t,n,r):ga(e)?jl(e)||NT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BT(t,e,r,o))?(yf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_f(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?yf(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_f(t,e,r,o))};function BT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&ze(n)?!1:e in t}const Ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>yo(e,n):e};function jT(t){t.target.composing=!0}function wf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign"),zo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rs]=Ho(s);const i=r||s.props&&s.props.type==="number";Tr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=xo(c)),t[rs](c)}),n&&Tr(t,"change",()=>{t.value=t.value.trim()}),e||(Tr(t,"compositionstart",jT),Tr(t,"compositionend",wf),Tr(t,"change",wf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rs]=Ho(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?xo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},$T={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=_a(e);Tr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xo(Ko(o)):Ko(o));t[rs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Aa(()=>{t._assigning=!1})}),t[rs]=Ho(r)},mounted(t,{value:e}){If(t,e)},beforeUpdate(t,e,n){t[rs]=Ho(n)},updated(t,{value:e}){t._assigning||If(t,e)}};function If(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!_a(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ko(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Vv(e,c)>-1}else o.selected=e.has(c);else if(Ta(Ko(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ko(t){return"_value"in t?t._value:t.value}const qT=["ctrl","shift","alt","meta"],HT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qT.some(n=>t[`${n}Key`]&&!e.includes(n))},Um=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=HT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},zT=pt({patchProp:FT},AT);let Af;function KT(){return Af||(Af=KE(zT))}const Fm=(...t)=>{const e=KT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=GT(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,WT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function WT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function GT(t){return ze(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Bm;const Ca=t=>Bm=t,jm=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var si;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(si||(si={}));function QT(){const t=xp(!0),e=t.run(()=>eu({}));let n=[],r=[];const s=Zl({install(i){Ca(s),s._a=i,i.provide(jm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const $m=()=>{};function bf(t,e,n,r=$m){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Mp()&&xv(s),s}function zr(t,...e){t.slice().forEach(n=>{n(...e)})}const JT=t=>t(),Rf=Symbol(),Cc=Symbol();function il(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];sl(s)&&sl(r)&&t.hasOwnProperty(n)&&!qe(r)&&!Jn(r)?t[n]=il(s,r):t[n]=r}return t}const YT=Symbol();function XT(t){return!sl(t)||!Object.prototype.hasOwnProperty.call(t,YT)}const{assign:Fn}=Object;function ZT(t){return!!(qe(t)&&t.effect)}function ew(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=sE(n.state.value[t]);return Fn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Zl(Bt(()=>{Ca(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=qm(t,u,e,n,r,!0),l}function qm(t,e,n={},r,s,i){let o;const c=Fn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],y;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),eu({});let O;function S(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:si.patchFunction,storeId:t,events:y}):(il(r.state.value[t],_),v={type:si.patchObject,payload:_,storeId:t,events:y});const A=O=Symbol();Aa().then(()=>{O===A&&(u=!0)}),f=!0,zr(p,v,r.state.value[t])}const B=i?function(){const{state:v}=n,A=v?v():{};this.$patch(R=>{Fn(R,A)})}:$m;function U(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(_,v="")=>{if(Rf in _)return _[Cc]=v,_;const A=function(){Ca(r);const R=Array.from(arguments),P=[],T=[];function Je(ue){P.push(ue)}function Tt(ue){T.push(ue)}zr(m,{args:R,name:A[Cc],store:Z,after:Je,onError:Tt});let De;try{De=_.apply(this&&this.$id===t?this:Z,R)}catch(ue){throw zr(T,ue),ue}return De instanceof Promise?De.then(ue=>(zr(P,ue),ue)).catch(ue=>(zr(T,ue),Promise.reject(ue))):(zr(P,De),De)};return A[Rf]=!0,A[Cc]=v,A},H={_p:r,$id:t,$onAction:bf.bind(null,m),$patch:S,$reset:B,$subscribe(_,v={}){const A=bf(p,_,v.detached,()=>R()),R=o.run(()=>ni(()=>r.state.value[t],P=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:si.direct,events:y},P)},Fn({},l,v)));return A},$dispose:U},Z=Oi(H);r._s.set(t,Z);const I=(r._a&&r._a.runWithContext||JT)(()=>r._e.run(()=>(o=xp()).run(()=>e({action:j}))));for(const _ in I){const v=I[_];if(qe(v)&&!ZT(v)||Jn(v))i||(b&&XT(v)&&(qe(v)?v.value=b[_]:il(v,b[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=j(v,_);I[_]=A,c.actions[_]=v}}return Fn(Z,I),Fn(Re(Z),I),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:_=>{S(v=>{Fn(v,_)})}}),r._p.forEach(_=>{Fn(Z,o.run(()=>_({store:Z,app:r._a,pinia:r,options:c})))}),b&&i&&n.hydrate&&n.hydrate(Z.$state,b),u=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function Hm(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=FE();return o=o||(l?an(jm,null):null),o&&Ca(o),o=Bm,o._s.has(t)||(s?qm(t,e,r,o):ew(t,r,o)),o._s.get(t)}return i.$id=t,i}const Es=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tw={name:"App"},nw={id:"app"};function rw(t,e,n,r,s,i){const o=fm("router-view");return At(),Nt("div",nw,[e[0]||(e[0]=_e("h1",null,"Hello from App.vue",-1)),Et(o)])}const zm=Es(tw,[["render",rw],["__scopeId","data-v-e2053939"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Km(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Km(t.default)}const Se=Object.assign;function Oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const ii=()=>{},Qt=Array.isArray,Wm=/#/g,iw=/&/g,ow=/\//g,aw=/=/g,cw=/\?/g,Gm=/\+/g,lw=/%5B/g,uw=/%5D/g,Qm=/%5E/g,hw=/%60/g,Jm=/%7B/g,fw=/%7C/g,Ym=/%7D/g,dw=/%20/g;function iu(t){return encodeURI(""+t).replace(fw,"|").replace(lw,"[").replace(uw,"]")}function pw(t){return iu(t).replace(Jm,"{").replace(Ym,"}").replace(Qm,"^")}function ol(t){return iu(t).replace(Gm,"%2B").replace(dw,"+").replace(Wm,"%23").replace(iw,"%26").replace(hw,"`").replace(Jm,"{").replace(Ym,"}").replace(Qm,"^")}function mw(t){return ol(t).replace(aw,"%3D")}function gw(t){return iu(t).replace(Wm,"%23").replace(cw,"%3F")}function _w(t){return t==null?"":gw(t).replace(ow,"%2F")}function _i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yw=/\/$/,vw=t=>t.replace(yw,"");function kc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Iw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:_i(o)}}function Ew(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ls(e.matched[r],n.matched[s])&&Xm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ww(t[n],e[n]))return!1;return!0}function ww(t,e){return Qt(t)?Pf(t,e):Qt(e)?Pf(e,t):t===e}function Pf(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Iw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function Aw(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vw(t)}const bw=/^[^#]+#/;function Rw(t,e){return t.replace(bw,"#")+e}function Sw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function Pw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Sw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cf(t,e){return(history.state?history.state.position-e:-1)+t}const al=new Map;function Cw(t,e){al.set(t,e)}function Ow(t){const e=al.get(t);return al.delete(t),e}let kw=()=>location.protocol+"//"+location.host;function Zm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Sf(l,"")}return Sf(n,t)+r+s}function Dw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=Zm(t,location),b=n.value,O=e.value;let S=0;if(m){if(n.value=y,e.value=m,o&&o===b){o=null;return}S=O?m.position-O.position:0}else r(y);s.forEach(B=>{B(n.value,b,{delta:S,type:yi.pop,direction:S?S>0?oi.forward:oi.back:oi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(Se({},m.state,{scroll:Oa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function Nw(t){const{history:e,location:n}=window,r={value:Zm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:kw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){const f=Se({},e.state,Of(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Se({},s.value,e.state,{forward:l,scroll:Oa()});i(f.current,f,!0);const p=Se({},Of(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Vw(t){t=Aw(t);const e=Nw(t),n=Dw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:Rw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xw(t){return typeof t=="string"||t&&typeof t=="object"}function eg(t){return typeof t=="string"||typeof t=="symbol"}const tg=Symbol("");var kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kf||(kf={}));function us(t,e){return Se(new Error,{type:t,[tg]:!0},e)}function vn(t,e){return t instanceof Error&&tg in t&&(e==null||!!(t.type&e))}const Df="[^/]+?",Mw={sensitive:!1,strict:!1,start:!0,end:!0},Lw=/[.+*?^${}()[\]/\\]/g;function Uw(t,e){const n=Se({},Mw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Lw,"\\$&"),y+=40;else if(m.type===1){const{value:b,repeatable:O,optional:S,regexp:B}=m;i.push({name:b,repeatable:O,optional:S});const U=B||Df;if(U!==Df){y+=10;try{new RegExp(`(${U})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${b}" (${U}): `+H.message)}}let j=O?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=S&&u.length<2?`(?:/${j})`:"/"+j),S&&(j+="?"),s+=j,y+=20,S&&(y+=-8),O&&(y+=-20),U===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",b=i[m-1];p[b.name]=y&&b.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:b,repeatable:O,optional:S}=y,B=b in u?u[b]:"";if(Qt(B)&&!O)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const U=Qt(B)?B.join("/"):B;if(!U)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Fw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ng(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Fw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nf(r))return 1;if(Nf(s))return-1}return s.length-r.length}function Nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Bw={type:0,value:""},jw=/[a-zA-Z0-9_]/;function $w(t){if(!t)return[[]];if(t==="/")return[[Bw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:jw.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function qw(t,e,n){const r=Uw($w(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hw(t,e){const n=[],r=new Map;e=Lf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const b=!y,O=xf(p);O.aliasOf=y&&y.record;const S=Lf(e,p),B=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of H)B.push(xf(Se({},O,{components:y?y.record.components:O.components,path:Z,aliasOf:y?y.record:O})))}let U,j;for(const H of B){const{path:Z}=H;if(m&&Z[0]!=="/"){const oe=m.record.path,I=oe[oe.length-1]==="/"?"":"/";H.path=m.record.path+(Z&&I+Z)}if(U=qw(H,m,S),y?y.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),b&&p.name&&!Mf(U)&&o(p.name)),rg(U)&&l(U),O.children){const oe=O.children;for(let I=0;I<oe.length;I++)i(oe[I],U,y&&y.children[I])}y=y||U}return j?()=>{o(j)}:ii}function o(p){if(eg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=Ww(p,n);n.splice(m,0,p),p.record.name&&!Mf(p)&&r.set(p.record.name,p)}function u(p,m){let y,b={},O,S;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw us(1,{location:p});S=y.record.name,b=Se(Vf(m.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Vf(p.params,y.keys.map(j=>j.name))),O=y.stringify(b)}else if(p.path!=null)O=p.path,y=n.find(j=>j.re.test(O)),y&&(b=y.parse(O),S=y.record.name);else{if(y=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!y)throw us(1,{location:p,currentLocation:m});S=y.record.name,b=Se({},m.params,p.params),O=y.stringify(b)}const B=[];let U=y;for(;U;)B.unshift(U.record),U=U.parent;return{name:S,path:O,params:b,matched:B,meta:Kw(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kw(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Lf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ww(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ng(t,e[i])<0?r=i:n=i+1}const s=Gw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Gw(t){let e=t;for(;e=e.parent;)if(rg(e)&&ng(t,e)===0)return e}function rg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gm," "),o=i.indexOf("="),c=_i(o<0?i:i.slice(0,o)),l=o<0?null:_i(i.slice(o+1));if(c in e){let u=e[c];Qt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Uf(t){let e="";for(let n in t){const r=t[n];if(n=mw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&ol(i)):[r&&ol(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Yw=Symbol(""),Ff=Symbol(""),ou=Symbol(""),sg=Symbol(""),cl=Symbol("");function Hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(us(4,{from:n,to:e})):m instanceof Error?l(m):xw(m)?l(us(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Dc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Km(l)){const f=(l.__vccOpts||l)[e];f&&i.push($n(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=sw(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&$n(y,n,r,o,c,s)()}))}}return i}function Bf(t){const e=an(ou),n=an(sg),r=Bt(()=>{const l=ts(t.to);return e.resolve(l)}),s=Bt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ls.bind(null,f));if(m>-1)return m;const y=jf(l[u-2]);return u>1&&jf(f)===y&&p[p.length-1].path!==y?p.findIndex(ls.bind(null,l[u-2])):m}),i=Bt(()=>s.value>-1&&nI(n.params,r.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&Xm(n.params,r.value.params));function c(l={}){if(tI(l)){const u=e[ts(t.replace)?"replace":"push"](ts(t.to)).catch(ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Xw(t){return t.length===1?t[0]:t}const Zw=am({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bf,setup(t,{slots:e}){const n=Oi(Bf(t)),{options:r}=an(ou),s=Bt(()=>({[$f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Xw(e.default(n));return t.custom?i:Mm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eI=Zw;function tI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,rI=am({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(cl),s=Bt(()=>t.route||r.value),i=an(Ff,0),o=Bt(()=>{let u=ts(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Bt(()=>s.value.matched[o.value]);vo(Ff,Bt(()=>o.value+1)),vo(Yw,c),vo(cl,s);const l=eu();return ni(()=>[l.value,c.value,t.name],([u,f,p],[m,y,b])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!ls(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return qf(n.default,{Component:m,route:u});const y=p.props[f],b=y?y===!0?u.params:typeof y=="function"?y(u):y:null,S=Mm(m,Se({},b,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return qf(n.default,{Component:S,route:u})||S}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sI=rI;function iI(t){const e=Hw(t.routes,t),n=t.parseQuery||Qw,r=t.stringifyQuery||Uf,s=t.history,i=Hs(),o=Hs(),c=Hs(),l=tE(Ln);let u=Ln;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Oc.bind(null,V=>""+V),p=Oc.bind(null,_w),m=Oc.bind(null,_i);function y(V,Y){let Q,ee;return eg(V)?(Q=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,Q)}function b(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function O(){return e.getRoutes().map(V=>V.record)}function S(V){return!!e.getRecordMatcher(V)}function B(V,Y){if(Y=Se({},Y||l.value),typeof V=="string"){const C=kc(n,V,Y.path),x=e.resolve({path:C.path},Y),F=s.createHref(C.fullPath);return Se(C,x,{params:m(x.params),hash:_i(C.hash),redirectedFrom:void 0,href:F})}let Q;if(V.path!=null)Q=Se({},V,{path:kc(n,V.path,Y.path).path});else{const C=Se({},V.params);for(const x in C)C[x]==null&&delete C[x];Q=Se({},V,{params:p(C)}),Y.params=p(Y.params)}const ee=e.resolve(Q,Y),Ae=V.hash||"";ee.params=f(m(ee.params));const E=Ew(r,Se({},V,{hash:pw(Ae),path:ee.path})),w=s.createHref(E);return Se({fullPath:E,hash:Ae,query:r===Uf?Jw(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:w})}function U(V){return typeof V=="string"?kc(n,V,l.value.path):Se({},V)}function j(V,Y){if(u!==V)return us(8,{from:Y,to:V})}function H(V){return I(V)}function Z(V){return H(Se(U(V),{replace:!0}))}function oe(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let ee=typeof Q=="function"?Q(V):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Se({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function I(V,Y){const Q=u=B(V),ee=l.value,Ae=V.state,E=V.force,w=V.replace===!0,C=oe(Q);if(C)return I(Se(U(C),{state:typeof C=="object"?Se({},Ae,C.state):Ae,force:E,replace:w}),Y||Q);const x=Q;x.redirectedFrom=Y;let F;return!E&&Tw(r,ee,Q)&&(F=us(16,{to:x,from:ee}),Mt(ee,ee,!0,!1)),(F?Promise.resolve(F):A(x,ee)).catch(M=>vn(M)?vn(M,2)?M:Ht(M):ve(M,x,ee)).then(M=>{if(M){if(vn(M,2))return I(Se({replace:w},U(M.to),{state:typeof M.to=="object"?Se({},Ae,M.to.state):Ae,force:E}),Y||x)}else M=P(x,ee,!0,w,Ae);return R(x,ee,M),M})}function _(V,Y){const Q=j(V,Y);return Q?Promise.reject(Q):Promise.resolve()}function v(V){const Y=Dn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let Q;const[ee,Ae,E]=oI(V,Y);Q=Dc(ee.reverse(),"beforeRouteLeave",V,Y);for(const C of ee)C.leaveGuards.forEach(x=>{Q.push($n(x,V,Y))});const w=_.bind(null,V,Y);return Q.push(w),wt(Q).then(()=>{Q=[];for(const C of i.list())Q.push($n(C,V,Y));return Q.push(w),wt(Q)}).then(()=>{Q=Dc(Ae,"beforeRouteUpdate",V,Y);for(const C of Ae)C.updateGuards.forEach(x=>{Q.push($n(x,V,Y))});return Q.push(w),wt(Q)}).then(()=>{Q=[];for(const C of E)if(C.beforeEnter)if(Qt(C.beforeEnter))for(const x of C.beforeEnter)Q.push($n(x,V,Y));else Q.push($n(C.beforeEnter,V,Y));return Q.push(w),wt(Q)}).then(()=>(V.matched.forEach(C=>C.enterCallbacks={}),Q=Dc(E,"beforeRouteEnter",V,Y,v),Q.push(w),wt(Q))).then(()=>{Q=[];for(const C of o.list())Q.push($n(C,V,Y));return Q.push(w),wt(Q)}).catch(C=>vn(C,8)?C:Promise.reject(C))}function R(V,Y,Q){c.list().forEach(ee=>v(()=>ee(V,Y,Q)))}function P(V,Y,Q,ee,Ae){const E=j(V,Y);if(E)return E;const w=Y===Ln,C=Wr?history.state:{};Q&&(ee||w?s.replace(V.fullPath,Se({scroll:w&&C&&C.scroll},Ae)):s.push(V.fullPath,Ae)),l.value=V,Mt(V,Y,Q,w),Ht()}let T;function Je(){T||(T=s.listen((V,Y,Q)=>{if(!Yt.listening)return;const ee=B(V),Ae=oe(ee);if(Ae){I(Se(Ae,{replace:!0,force:!0}),ee).catch(ii);return}u=ee;const E=l.value;Wr&&Cw(Cf(E.fullPath,Q.delta),Oa()),A(ee,E).catch(w=>vn(w,12)?w:vn(w,2)?(I(Se(U(w.to),{force:!0}),ee).then(C=>{vn(C,20)&&!Q.delta&&Q.type===yi.pop&&s.go(-1,!1)}).catch(ii),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(w,ee,E))).then(w=>{w=w||P(ee,E,!1),w&&(Q.delta&&!vn(w,8)?s.go(-Q.delta,!1):Q.type===yi.pop&&vn(w,20)&&s.go(-1,!1)),R(ee,E,w)}).catch(ii)}))}let Tt=Hs(),De=Hs(),ue;function ve(V,Y,Q){Ht(V);const ee=De.list();return ee.length?ee.forEach(Ae=>Ae(V,Y,Q)):console.error(V),Promise.reject(V)}function Ot(){return ue&&l.value!==Ln?Promise.resolve():new Promise((V,Y)=>{Tt.add([V,Y])})}function Ht(V){return ue||(ue=!V,Je(),Tt.list().forEach(([Y,Q])=>V?Q(V):Y()),Tt.reset()),V}function Mt(V,Y,Q,ee){const{scrollBehavior:Ae}=t;if(!Wr||!Ae)return Promise.resolve();const E=!Q&&Ow(Cf(V.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return Aa().then(()=>Ae(V,Y,E)).then(w=>w&&Pw(w)).catch(w=>ve(w,V,Y))}const Le=V=>s.go(V);let Ue;const Dn=new Set,Yt={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:O,resolve:B,options:t,push:H,replace:Z,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:De.add,isReady:Ot,install(V){const Y=this;V.component("RouterLink",eI),V.component("RouterView",sI),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ts(l)}),Wr&&!Ue&&l.value===Ln&&(Ue=!0,H(s.location).catch(Ae=>{}));const Q={};for(const Ae in Ln)Object.defineProperty(Q,Ae,{get:()=>l.value[Ae],enumerable:!0});V.provide(ou,Y),V.provide(sg,Yp(Q)),V.provide(cl,l);const ee=V.unmount;Dn.add(V),V.unmount=function(){Dn.delete(V),Dn.size<1&&(u=Ln,T&&T(),T=null,l.value=Ln,Ue=!1,ue=!1),ee()}}};function wt(V){return V.reduce((Y,Q)=>Y.then(()=>v(Q)),Promise.resolve())}return Yt}function oI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ls(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ls(u,l))||s.push(l))}return[n,r,s]}function ig(t,e){return function(){return t.apply(e,arguments)}}const{toString:aI}=Object.prototype,{getPrototypeOf:au}=Object,{iterator:ka,toStringTag:og}=Symbol,Da=(t=>e=>{const n=aI.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=t=>(t=t.toLowerCase(),e=>Da(e)===t),Na=t=>e=>typeof e===t,{isArray:Ts}=Array,vi=Na("undefined");function cI(t){return t!==null&&!vi(t)&&t.constructor!==null&&!vi(t.constructor)&&St(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ag=Jt("ArrayBuffer");function lI(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ag(t.buffer),e}const uI=Na("string"),St=Na("function"),cg=Na("number"),Va=t=>t!==null&&typeof t=="object",hI=t=>t===!0||t===!1,wo=t=>{if(Da(t)!=="object")return!1;const e=au(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(og in t)&&!(ka in t)},fI=Jt("Date"),dI=Jt("File"),pI=Jt("Blob"),mI=Jt("FileList"),gI=t=>Va(t)&&St(t.pipe),_I=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||St(t.append)&&((e=Da(t))==="formdata"||e==="object"&&St(t.toString)&&t.toString()==="[object FormData]"))},yI=Jt("URLSearchParams"),[vI,EI,TI,wI]=["ReadableStream","Request","Response","Headers"].map(Jt),II=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ni(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ts(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function lg(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ug=t=>!vi(t)&&t!==wr;function ll(){const{caseless:t}=ug(this)&&this||{},e={},n=(r,s)=>{const i=t&&lg(e,s)||s;wo(e[i])&&wo(r)?e[i]=ll(e[i],r):wo(r)?e[i]=ll({},r):Ts(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ni(arguments[r],n);return e}const AI=(t,e,n,{allOwnKeys:r}={})=>(Ni(e,(s,i)=>{n&&St(s)?t[i]=ig(s,n):t[i]=s},{allOwnKeys:r}),t),bI=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),RI=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},SI=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&au(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},PI=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},CI=t=>{if(!t)return null;if(Ts(t))return t;let e=t.length;if(!cg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},OI=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&au(Uint8Array)),kI=(t,e)=>{const r=(t&&t[ka]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},DI=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},NI=Jt("HTMLFormElement"),VI=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Hf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),xI=Jt("RegExp"),hg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ni(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},MI=t=>{hg(t,(e,n)=>{if(St(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(St(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},LI=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ts(t)?r(t):r(String(t).split(e)),n},UI=()=>{},FI=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function BI(t){return!!(t&&St(t.append)&&t[og]==="FormData"&&t[ka])}const jI=t=>{const e=new Array(10),n=(r,s)=>{if(Va(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Ts(r)?[]:{};return Ni(r,(o,c)=>{const l=n(o,s+1);!vi(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},$I=Jt("AsyncFunction"),qI=t=>t&&(Va(t)||St(t))&&St(t.then)&&St(t.catch),fg=((t,e)=>t?setImmediate:e?((n,r)=>(wr.addEventListener("message",({source:s,data:i})=>{s===wr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),wr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",St(wr.postMessage)),HI=typeof queueMicrotask<"u"?queueMicrotask.bind(wr):typeof process<"u"&&process.nextTick||fg,zI=t=>t!=null&&St(t[ka]),D={isArray:Ts,isArrayBuffer:ag,isBuffer:cI,isFormData:_I,isArrayBufferView:lI,isString:uI,isNumber:cg,isBoolean:hI,isObject:Va,isPlainObject:wo,isReadableStream:vI,isRequest:EI,isResponse:TI,isHeaders:wI,isUndefined:vi,isDate:fI,isFile:dI,isBlob:pI,isRegExp:xI,isFunction:St,isStream:gI,isURLSearchParams:yI,isTypedArray:OI,isFileList:mI,forEach:Ni,merge:ll,extend:AI,trim:II,stripBOM:bI,inherits:RI,toFlatObject:SI,kindOf:Da,kindOfTest:Jt,endsWith:PI,toArray:CI,forEachEntry:kI,matchAll:DI,isHTMLForm:NI,hasOwnProperty:Hf,hasOwnProp:Hf,reduceDescriptors:hg,freezeMethods:MI,toObjectSet:LI,toCamelCase:VI,noop:UI,toFiniteNumber:FI,findKey:lg,global:wr,isContextDefined:ug,isSpecCompliantForm:BI,toJSONObject:jI,isAsyncFn:$I,isThenable:qI,setImmediate:fg,asap:HI,isIterable:zI};function ge(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}D.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const dg=ge.prototype,pg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{pg[t]={value:t}});Object.defineProperties(ge,pg);Object.defineProperty(dg,"isAxiosError",{value:!0});ge.from=(t,e,n,r,s,i)=>{const o=Object.create(dg);return D.toFlatObject(t,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),ge.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const KI=null;function ul(t){return D.isPlainObject(t)||D.isArray(t)}function mg(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function zf(t,e,n){return t?t.concat(e).map(function(s,i){return s=mg(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function WI(t){return D.isArray(t)&&!t.some(ul)}const GI=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function xa(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,S){return!D.isUndefined(S[O])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(s))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(D.isDate(b))return b.toISOString();if(!l&&D.isBlob(b))throw new ge("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(b)||D.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function f(b,O,S){let B=b;if(b&&!S&&typeof b=="object"){if(D.endsWith(O,"{}"))O=r?O:O.slice(0,-2),b=JSON.stringify(b);else if(D.isArray(b)&&WI(b)||(D.isFileList(b)||D.endsWith(O,"[]"))&&(B=D.toArray(b)))return O=mg(O),B.forEach(function(j,H){!(D.isUndefined(j)||j===null)&&e.append(o===!0?zf([O],H,i):o===null?O:O+"[]",u(j))}),!1}return ul(b)?!0:(e.append(zf(S,O,i),u(b)),!1)}const p=[],m=Object.assign(GI,{defaultVisitor:f,convertValue:u,isVisitable:ul});function y(b,O){if(!D.isUndefined(b)){if(p.indexOf(b)!==-1)throw Error("Circular reference detected in "+O.join("."));p.push(b),D.forEach(b,function(B,U){(!(D.isUndefined(B)||B===null)&&s.call(e,B,D.isString(U)?U.trim():U,O,m))===!0&&y(B,O?O.concat(U):[U])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return y(t),e}function Kf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function cu(t,e){this._pairs=[],t&&xa(t,this,e)}const gg=cu.prototype;gg.append=function(e,n){this._pairs.push([e,n])};gg.toString=function(e){const n=e?function(r){return e.call(this,r,Kf)}:Kf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function QI(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _g(t,e,n){if(!e)return t;const r=n&&n.encode||QI;D.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=D.isURLSearchParams(e)?e.toString():new cu(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Wf{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const yg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},JI=typeof URLSearchParams<"u"?URLSearchParams:cu,YI=typeof FormData<"u"?FormData:null,XI=typeof Blob<"u"?Blob:null,ZI={isBrowser:!0,classes:{URLSearchParams:JI,FormData:YI,Blob:XI},protocols:["http","https","file","blob","url","data"]},lu=typeof window<"u"&&typeof document<"u",hl=typeof navigator=="object"&&navigator||void 0,eA=lu&&(!hl||["ReactNative","NativeScript","NS"].indexOf(hl.product)<0),tA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",nA=lu&&window.location.href||"http://localhost",rA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lu,hasStandardBrowserEnv:eA,hasStandardBrowserWebWorkerEnv:tA,navigator:hl,origin:nA},Symbol.toStringTag,{value:"Module"})),dt={...rA,...ZI};function sA(t,e){return xa(t,new dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return dt.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function iA(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function oA(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function vg(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&D.isArray(s)?s.length:o,l?(D.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!D.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&D.isArray(s[o])&&(s[o]=oA(s[o])),!c)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,s)=>{e(iA(r),s,n,0)}),n}return null}function aA(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Vi={transitional:yg,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=D.isObject(e);if(i&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return s?JSON.stringify(vg(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sA(e,this.formSerializer).toString();if((c=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return xa(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),aA(e)):e}],transformResponse:[function(e){const n=this.transitional||Vi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(c){if(o)throw c.name==="SyntaxError"?ge.from(c,ge.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dt.classes.FormData,Blob:dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{Vi.headers[t]={}});const cA=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lA=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&cA[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Gf=Symbol("internals");function zs(t){return t&&String(t).trim().toLowerCase()}function Io(t){return t===!1||t==null?t:D.isArray(t)?t.map(Io):String(t)}function uA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const hA=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Nc(t,e,n,r,s){if(D.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function fA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function dA(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Pt=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,u){const f=zs(l);if(!f)throw new Error("header name must be a non-empty string");const p=D.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||l]=Io(c))}const o=(c,l)=>D.forEach(c,(u,f)=>i(u,f,l));if(D.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(D.isString(e)&&(e=e.trim())&&!hA(e))o(lA(e),n);else if(D.isObject(e)&&D.isIterable(e)){let c={},l,u;for(const f of e){if(!D.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[u=f[0]]=(l=c[u])?D.isArray(l)?[...l,f[1]]:[l,f[1]]:f[1]}o(c,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=zs(e),e){const r=D.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return uA(s);if(D.isFunction(n))return n.call(this,s,r);if(D.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=zs(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Nc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=zs(o),o){const c=D.findKey(r,o);c&&(!n||Nc(r,r[c],c,n))&&(delete r[c],s=!0)}}return D.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Nc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return D.forEach(this,(s,i)=>{const o=D.findKey(r,i);if(o){n[o]=Io(s),delete n[i];return}const c=e?fA(i):String(i).trim();c!==i&&delete n[i],n[c]=Io(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Gf]=this[Gf]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=zs(o);r[c]||(dA(s,o),r[c]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}};Pt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Pt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(Pt);function Vc(t,e){const n=this||Vi,r=e||n,s=Pt.from(r.headers);let i=r.data;return D.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Eg(t){return!!(t&&t.__CANCEL__)}function ws(t,e,n){ge.call(this,t??"canceled",ge.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(ws,ge,{__CANCEL__:!0});function Tg(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function pA(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function mA(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),f=r[i];o||(o=u),n[s]=l,r[s]=u;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const y=f&&u-f;return y?Math.round(m*1e3/y):void 0}}function gA(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const f=Date.now(),p=f-n;p>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const Wo=(t,e,n=3)=>{let r=0;const s=mA(50,250);return gA(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),f=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&f?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(p)},n)},Qf=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Jf=t=>(...e)=>D.asap(()=>t(...e)),_A=dt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,dt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(dt.origin),dt.navigator&&/(msie|trident)/i.test(dt.navigator.userAgent)):()=>!0,yA=dt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vA(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function EA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wg(t,e,n){let r=!vA(e);return t&&(r||n==!1)?EA(t,e):e}const Yf=t=>t instanceof Pt?{...t}:t;function Or(t,e){e=e||{};const n={};function r(u,f,p,m){return D.isPlainObject(u)&&D.isPlainObject(f)?D.merge.call({caseless:m},u,f):D.isPlainObject(f)?D.merge({},f):D.isArray(f)?f.slice():f}function s(u,f,p,m){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u,p,m)}else return r(u,f,p,m)}function i(u,f){if(!D.isUndefined(f))return r(void 0,f)}function o(u,f){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function c(u,f,p){if(p in e)return r(u,f);if(p in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,f,p)=>s(Yf(u),Yf(f),p,!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(f){const p=l[f]||s,m=p(t[f],e[f],f);D.isUndefined(m)&&p!==c||(n[f]=m)}),n}const Ig=t=>{const e=Or({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;e.headers=o=Pt.from(o),e.url=_g(wg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let l;if(D.isFormData(n)){if(dt.hasStandardBrowserEnv||dt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...f]=l?l.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...f].join("; "))}}if(dt.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&_A(e.url))){const u=s&&i&&yA.read(i);u&&o.set(s,u)}return e},TA=typeof XMLHttpRequest<"u",wA=TA&&function(t){return new Promise(function(n,r){const s=Ig(t);let i=s.data;const o=Pt.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:u}=s,f,p,m,y,b;function O(){y&&y(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function B(){if(!S)return;const j=Pt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),Z={data:!c||c==="text"||c==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:j,config:t,request:S};Tg(function(I){n(I),O()},function(I){r(I),O()},Z),S=null}"onloadend"in S?S.onloadend=B:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(B)},S.onabort=function(){S&&(r(new ge("Request aborted",ge.ECONNABORTED,t,S)),S=null)},S.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,t,S)),S=null},S.ontimeout=function(){let H=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const Z=s.transitional||yg;s.timeoutErrorMessage&&(H=s.timeoutErrorMessage),r(new ge(H,Z.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&D.forEach(o.toJSON(),function(H,Z){S.setRequestHeader(Z,H)}),D.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),c&&c!=="json"&&(S.responseType=s.responseType),u&&([m,b]=Wo(u,!0),S.addEventListener("progress",m)),l&&S.upload&&([p,y]=Wo(l),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(f=j=>{S&&(r(!j||j.type?new ws(null,t,S):j),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const U=pA(s.url);if(U&&dt.protocols.indexOf(U)===-1){r(new ge("Unsupported protocol "+U+":",ge.ERR_BAD_REQUEST,t));return}S.send(i||null)})},IA=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const f=u instanceof Error?u:this.reason;r.abort(f instanceof ge?f:new ws(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new ge(`timeout ${e} of ms exceeded`,ge.ETIMEDOUT))},e);const c=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>D.asap(c),l}},AA=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},bA=async function*(t,e){for await(const n of RA(t))yield*AA(n,e)},RA=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Xf=(t,e,n,r)=>{const s=bA(t,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:f}=await s.next();if(u){c(),l.close();return}let p=f.byteLength;if(n){let m=i+=p;n(m)}l.enqueue(new Uint8Array(f))}catch(u){throw c(u),u}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},Ma=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ag=Ma&&typeof ReadableStream=="function",SA=Ma&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),bg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},PA=Ag&&bg(()=>{let t=!1;const e=new Request(dt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Zf=64*1024,fl=Ag&&bg(()=>D.isReadableStream(new Response("").body)),Go={stream:fl&&(t=>t.body)};Ma&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Go[e]&&(Go[e]=D.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ge(`Response type '${e}' is not supported`,ge.ERR_NOT_SUPPORT,r)})})})(new Response);const CA=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(dt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await SA(t)).byteLength},OA=async(t,e)=>{const n=D.toFiniteNumber(t.getContentLength());return n??CA(e)},kA=Ma&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:l,responseType:u,headers:f,withCredentials:p="same-origin",fetchOptions:m}=Ig(t);u=u?(u+"").toLowerCase():"text";let y=IA([s,i&&i.toAbortSignal()],o),b;const O=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let S;try{if(l&&PA&&n!=="get"&&n!=="head"&&(S=await OA(f,r))!==0){let Z=new Request(e,{method:"POST",body:r,duplex:"half"}),oe;if(D.isFormData(r)&&(oe=Z.headers.get("content-type"))&&f.setContentType(oe),Z.body){const[I,_]=Qf(S,Wo(Jf(l)));r=Xf(Z.body,Zf,I,_)}}D.isString(p)||(p=p?"include":"omit");const B="credentials"in Request.prototype;b=new Request(e,{...m,signal:y,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:B?p:void 0});let U=await fetch(b);const j=fl&&(u==="stream"||u==="response");if(fl&&(c||j&&O)){const Z={};["status","statusText","headers"].forEach(v=>{Z[v]=U[v]});const oe=D.toFiniteNumber(U.headers.get("content-length")),[I,_]=c&&Qf(oe,Wo(Jf(c),!0))||[];U=new Response(Xf(U.body,Zf,I,()=>{_&&_(),O&&O()}),Z)}u=u||"text";let H=await Go[D.findKey(Go,u)||"text"](U,t);return!j&&O&&O(),await new Promise((Z,oe)=>{Tg(Z,oe,{data:H,headers:Pt.from(U.headers),status:U.status,statusText:U.statusText,config:t,request:b})})}catch(B){throw O&&O(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,t,b),{cause:B.cause||B}):ge.from(B,B&&B.code,t,b)}}),dl={http:KI,xhr:wA,fetch:kA};D.forEach(dl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ed=t=>`- ${t}`,DA=t=>D.isFunction(t)||t===null||t===!1,Rg={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!DA(n)&&(r=dl[(o=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ed).join(`
`):" "+ed(i[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:dl};function xc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ws(null,t)}function td(t){return xc(t),t.headers=Pt.from(t.headers),t.data=Vc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Rg.getAdapter(t.adapter||Vi.adapter)(t).then(function(r){return xc(t),r.data=Vc.call(t,t.transformResponse,r),r.headers=Pt.from(r.headers),r},function(r){return Eg(r)||(xc(t),r&&r.response&&(r.response.data=Vc.call(t,t.transformResponse,r.response),r.response.headers=Pt.from(r.response.headers))),Promise.reject(r)})}const Sg="1.9.0",La={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{La[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const nd={};La.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Sg+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new ge(s(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!nd[o]&&(nd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};La.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function NA(t,e,n){if(typeof t!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new ge("option "+i+" must be "+l,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+i,ge.ERR_BAD_OPTION)}}const Ao={assertOptions:NA,validators:La},Zt=Ao.validators;let Rr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Wf,response:new Wf}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ao.assertOptions(r,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),s!=null&&(D.isFunction(s)?n.paramsSerializer={serialize:s}:Ao.assertOptions(s,{encode:Zt.function,serialize:Zt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ao.assertOptions(n,{baseUrl:Zt.spelling("baseURL"),withXsrfToken:Zt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&D.merge(i.common,i[n.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=Pt.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(n)===!1||(l=l&&O.synchronous,c.unshift(O.fulfilled,O.rejected))});const u=[];this.interceptors.response.forEach(function(O){u.push(O.fulfilled,O.rejected)});let f,p=0,m;if(!l){const b=[td.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,u),m=b.length,f=Promise.resolve(n);p<m;)f=f.then(b[p++],b[p++]);return f}m=c.length;let y=n;for(p=0;p<m;){const b=c[p++],O=c[p++];try{y=b(y)}catch(S){O.call(this,S);break}}try{f=td.call(this,y)}catch(b){return Promise.reject(b)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(e){e=Or(this.defaults,e);const n=wg(e.baseURL,e.url,e.allowAbsoluteUrls);return _g(n,e.params,e.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(e){Rr.prototype[e]=function(n,r){return this.request(Or(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(Or(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Rr.prototype[e]=n(),Rr.prototype[e+"Form"]=n(!0)});let VA=class Pg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new ws(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Pg(function(s){e=s}),cancel:e}}};function xA(t){return function(n){return t.apply(null,n)}}function MA(t){return D.isObject(t)&&t.isAxiosError===!0}const pl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pl).forEach(([t,e])=>{pl[e]=t});function Cg(t){const e=new Rr(t),n=ig(Rr.prototype.request,e);return D.extend(n,Rr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Cg(Or(t,s))},n}const je=Cg(Vi);je.Axios=Rr;je.CanceledError=ws;je.CancelToken=VA;je.isCancel=Eg;je.VERSION=Sg;je.toFormData=xa;je.AxiosError=ge;je.Cancel=je.CanceledError;je.all=function(e){return Promise.all(e)};je.spread=xA;je.isAxiosError=MA;je.mergeConfig=Or;je.AxiosHeaders=Pt;je.formToJSON=t=>vg(D.isHTMLForm(t)?new FormData(t):t);je.getAdapter=Rg.getAdapter;je.HttpStatusCode=pl;je.default=je;const{Axios:sk,AxiosError:ik,CanceledError:ok,isCancel:ak,CancelToken:ck,VERSION:lk,all:uk,Cancel:hk,isAxiosError:fk,spread:dk,toFormData:pk,AxiosHeaders:mk,HttpStatusCode:gk,formToJSON:_k,getAdapter:yk,mergeConfig:vk}=je,Og=Hm("user",{state:()=>({user:null}),actions:{async register(t,e){try{const n=await je.post("/api/register",{username:t,password:e});this.user=n.data.user}catch(n){console.error("Registration failed",n)}},async login(t,e){try{const n=await je.post("/api/login",{username:t,password:e});this.user=n.data.user}catch(n){console.error("Login failed",n)}}}}),LA={data(){return{email:"",password:"",errorMessage:""}},methods:{async handleLogin(){await Og().login(this.email,this.password)?this.$router.push("/dashboard"):this.errorMessage="Invalid email or password"}}},UA={class:"login-container"},FA={key:0,class:"error"};function BA(t,e,n,r,s,i){const o=fm("router-link");return At(),Nt("div",UA,[_e("form",{onSubmit:e[2]||(e[2]=Um((...c)=>i.handleLogin&&i.handleLogin(...c),["prevent"]))},[Zs(_e("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>s.email=c),type:"email",placeholder:"Email",required:""},null,512),[[zo,s.email]]),Zs(_e("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>s.password=c),type:"password",placeholder:"Password",required:""},null,512),[[zo,s.password]]),e[3]||(e[3]=_e("button",{type:"submit"},"Login",-1)),s.errorMessage?(At(),Nt("p",FA,on(s.errorMessage),1)):uT("",!0)],32),Et(o,{to:"/register"},{default:om(()=>e[4]||(e[4]=[Nm("Don't have an account? Register here")])),_:1})])}const jA=Es(LA,[["render",BA],["__scopeId","data-v-39ab9aed"]]),$A={name:"Dashboard"};function qA(t,e,n,r,s,i){return At(),Nt("div",null,e[0]||(e[0]=[_e("h1",null,"Dashboard",-1)]))}const HA=Es($A,[["render",qA],["__scopeId","data-v-5cf61ac2"]]),zA=()=>{};var rd={};/**
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
 */const kg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},KA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new WA;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const b=u<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GA=function(t){const e=kg(t);return Dg.encodeByteArray(e,!0)},Qo=function(t){return GA(t).replace(/\./g,"")},Ng=function(t){try{return Dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JA=()=>QA().__FIREBASE_DEFAULTS__,YA=()=>{if(typeof process>"u"||typeof rd>"u")return;const t=rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ng(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return zA()||JA()||YA()||XA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vg=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZA=t=>{const e=Vg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xg=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config},Mg=t=>{var e;return(e=Ua())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function tb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function rb(){var t;const e=(t=Ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ib(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ob(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ab(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cb(){return!rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lb(){try{return typeof indexedDB=="object"}catch{return!1}}function ub(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hb="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hb,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new kn(s,c,r)}}function fb(t,e){return t.replace(db,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const db=/\{\$([^}]+)}/g;function pb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sd(i)&&sd(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sd(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mb(t,e){const n=new gb(t,e);return n.subscribe.bind(n)}class gb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_b(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _b(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Er="[DEFAULT]";/**
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
 */class yb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eb(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vb(t){return t===Er?void 0:t}function Eb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const wb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ib=Ee.INFO,Ab={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},bb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ab[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Ib,this._logHandler=bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Rb=(t,e)=>e.some(n=>t instanceof n);let id,od;function Sb(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,ml=new WeakMap,Ug=new WeakMap,Lc=new WeakMap,hu=new WeakMap;function Cb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,t)}).catch(()=>{}),hu.set(e,t),e}function Ob(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kb(t){gl=t(gl)}function Db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return Ug.set(r,e.sort?e.sort():[e]),Yn(r)}:Pb().includes(t)?function(...e){return t.apply(Uc(this),e),Yn(Lg.get(this))}:function(...e){return Yn(t.apply(Uc(this),e))}}function Nb(t){return typeof t=="function"?Db(t):(t instanceof IDBTransaction&&Ob(t),Rb(t,Sb())?new Proxy(t,gl):t)}function Yn(t){if(t instanceof IDBRequest)return Cb(t);if(Lc.has(t))return Lc.get(t);const e=Nb(t);return e!==t&&(Lc.set(t,e),hu.set(e,t)),e}const Uc=t=>hu.get(t);function Vb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const xb=["get","getKey","getAll","getAllKeys","count"],Mb=["put","add","delete","clear"],Fc=new Map;function ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Mb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xb.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Fc.set(e,i),i}kb(t=>({...t,get:(e,n,r)=>ad(e,n)||t.get(e,n,r),has:(e,n)=>!!ad(e,n)||t.has(e,n)}));/**
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
 */class Lb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ub(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",cd="0.11.5";/**
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
 */const bn=new uu("@firebase/app"),Fb="@firebase/app-compat",Bb="@firebase/analytics-compat",jb="@firebase/analytics",$b="@firebase/app-check-compat",qb="@firebase/app-check",Hb="@firebase/auth",zb="@firebase/auth-compat",Kb="@firebase/database",Wb="@firebase/data-connect",Gb="@firebase/database-compat",Qb="@firebase/functions",Jb="@firebase/functions-compat",Yb="@firebase/installations",Xb="@firebase/installations-compat",Zb="@firebase/messaging",eR="@firebase/messaging-compat",tR="@firebase/performance",nR="@firebase/performance-compat",rR="@firebase/remote-config",sR="@firebase/remote-config-compat",iR="@firebase/storage",oR="@firebase/storage-compat",aR="@firebase/firestore",cR="@firebase/vertexai",lR="@firebase/firestore-compat",uR="firebase",hR="11.6.1";/**
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
 */const yl="[DEFAULT]",fR={[_l]:"fire-core",[Fb]:"fire-core-compat",[jb]:"fire-analytics",[Bb]:"fire-analytics-compat",[qb]:"fire-app-check",[$b]:"fire-app-check-compat",[Hb]:"fire-auth",[zb]:"fire-auth-compat",[Kb]:"fire-rtdb",[Wb]:"fire-data-connect",[Gb]:"fire-rtdb-compat",[Qb]:"fire-fn",[Jb]:"fire-fn-compat",[Yb]:"fire-iid",[Xb]:"fire-iid-compat",[Zb]:"fire-fcm",[eR]:"fire-fcm-compat",[tR]:"fire-perf",[nR]:"fire-perf-compat",[rR]:"fire-rc",[sR]:"fire-rc-compat",[iR]:"fire-gcs",[oR]:"fire-gcs-compat",[aR]:"fire-fst",[lR]:"fire-fst-compat",[cR]:"fire-vertex","fire-js":"fire-js",[uR]:"fire-js-all"};/**
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
 */const Jo=new Map,dR=new Map,vl=new Map;function ld(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(vl.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Jo.values())ld(n,t);for(const n of dR.values())ld(n,t);return!0}function fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const pR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new xi("app","Firebase",pR);/**
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
 */class mR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=hR;function Fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});if(n||(n=xg()),!n)throw Xn.create("no-options");const i=Jo.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Xn.create("duplicate-app",{appName:s})}const o=new Tb(s);for(const l of vl.values())o.addComponent(l);const c=new mR(n,r,o);return Jo.set(s,c),c}function Bg(t=yl){const e=Jo.get(t);if(!e&&t===yl&&xg())return Fg();if(!e)throw Xn.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let s=(r=fR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(c.join(" "));return}hs(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gR="firebase-heartbeat-database",_R=1,Ei="firebase-heartbeat-store";let Bc=null;function jg(){return Bc||(Bc=Vb(gR,_R,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function yR(t){try{const n=(await jg()).transaction(Ei),r=await n.objectStore(Ei).get($g(t));return await n.done,r}catch(e){if(e instanceof kn)bn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function ud(t,e){try{const r=(await jg()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(e,$g(t)),await r.done}catch(n){if(n instanceof kn)bn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function $g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vR=1024,ER=30;class TR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ER){const o=AR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hd(),{heartbeatsToSend:r,unsentEntries:s}=wR(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function hd(){return new Date().toISOString().substring(0,10)}function wR(t,e=vR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lb()?ub().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fd(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function AR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function bR(t){hs(new Dr("platform-logger",e=>new Lb(e),"PRIVATE")),hs(new Dr("heartbeat",e=>new TR(e),"PRIVATE")),Zn(_l,cd,t),Zn(_l,cd,"esm2017"),Zn("fire-js","")}bR("");var RR="firebase",SR="11.6.1";/**
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
 */Zn(RR,SR,"app");var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var er,qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(A,R,P){for(var T=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)T[Je-2]=arguments[Je];return _.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var A=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)A[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)A[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],R=I.g[2];var P=I.g[3],T=_+(P^v&(R^P))+A[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[1]+3905402710&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[5]+1200080426&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[9]+2336552879&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[13]+4254626195&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(R^P&(v^R))+A[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[6]+3225465664&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[10]+38016083&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[14]+3275163606&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[2]+4243563512&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(v^R^P)+A[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[8]+2272392833&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[4]+1272893353&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[0]+3936430074&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[12]+3873151461&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(R^(v|~P))+A[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[7]+1126891415&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[3]+2399980690&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[15]+4264355552&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[11]+3174756917&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,A=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=v;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<_;)if(A[R++]=I.charCodeAt(P++),R==this.blockSize){s(this,A),R=0;break}}else for(;P<_;)if(A[R++]=I[P++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var A=0;32>A;A+=8)I[v++]=this.g[_]>>>A&255;return I};function i(I,_){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function o(I,_){this.h=_;for(var v=[],A=!0,R=I.length-1;0<=R;R--){var P=I[R]|0;A&&P==_||(v[R]=P,A=!1)}this.g=v}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return S(u(-I));for(var _=[],v=1,A=0;I>=v;A++)_[A]=I/v|0,v*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return S(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),A=p,R=0;R<I.length;R+=8){var P=Math.min(8,I.length-R),T=parseInt(I.substring(R,R+P),_);8>P?(P=u(Math.pow(_,P)),A=A.j(P).add(u(T))):(A=A.j(v),A=A.add(u(T)))}return A}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-S(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var A=this.i(v);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(O(this))return"-"+S(this).toString(I);for(var _=u(Math.pow(I,6)),v=this,A="";;){var R=H(v,_).g;v=B(v,R.j(_));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=R,b(v))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=B(this,I),O(I)?-1:b(I)?0:1};function S(I){for(var _=I.g.length,v=[],A=0;A<_;A++)v[A]=~I.g[A];return new o(v,~I.h).add(m)}t.abs=function(){return O(this)?S(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0,R=0;R<=_;R++){var P=A+(this.i(R)&65535)+(I.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=T>>>16,P&=65535,T&=65535,v[R]=T<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(I,_){return I.add(S(_))}t.j=function(I){if(b(this)||b(I))return p;if(O(this))return O(I)?S(this).j(S(I)):S(S(this).j(I));if(O(I))return S(this.j(S(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var P=this.i(A)>>>16,T=this.i(A)&65535,Je=I.i(R)>>>16,Tt=I.i(R)&65535;v[2*A+2*R]+=T*Tt,U(v,2*A+2*R),v[2*A+2*R+1]+=P*Tt,U(v,2*A+2*R+1),v[2*A+2*R+1]+=T*Je,U(v,2*A+2*R+1),v[2*A+2*R+2]+=P*Je,U(v,2*A+2*R+2)}for(A=0;A<_;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=_;A<2*_;A++)v[A]=0;return new o(v,0)};function U(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function j(I,_){this.g=I,this.h=_}function H(I,_){if(b(_))throw Error("division by zero");if(b(I))return new j(p,p);if(O(I))return _=H(S(I),_),new j(S(_.g),S(_.h));if(O(_))return _=H(I,S(_)),new j(S(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;0>=A.l(I);)v=Z(v),A=Z(A);var R=oe(v,1),P=oe(A,1);for(A=oe(A,2),v=oe(v,2);!b(A);){var T=P.add(A);0>=T.l(I)&&(R=R.add(v),P=T),A=oe(A,1),v=oe(v,1)}return _=B(I,R.j(_)),new j(R,_)}for(R=p;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(v),T=P.j(_);O(T)||0<T.l(I);)v-=A,P=u(v),T=P.j(_);b(P)&&(P=m),R=R.add(P),I=B(I,T)}return new j(R,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)&I.i(A);return new o(v,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)|I.i(A);return new o(v,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)^I.i(A);return new o(v,this.h^I.h)};function Z(I){for(var _=I.g.length+1,v=[],A=0;A<_;A++)v[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(v,I.h)}function oe(I,_){var v=_>>5;_%=32;for(var A=I.g.length-v,R=[],P=0;P<A;P++)R[P]=0<_?I.i(P+v)>>>_|I.i(P+v+1)<<32-_:I.i(P+v);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,er=o}).apply(typeof dd<"u"?dd:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hg,Ws,zg,bo,El,Kg,Wg,Gg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,N){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[k].apply(g,W)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const k=a.length||0,N=g.length||0;a.length=k+N;for(let W=0;W<N;W++)a[k+W]=g[W]}else a.push(g)}}class B{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var Z=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function oe(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Je{constructor(){this.h=this.g=null}add(h,d){const g=Tt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Tt=new B(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ve=!1,Ot=new Je,Ht=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var h=Tt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function Yt(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{H(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yt.aa.h.call(this)}}b(Yt,Ue);var wt={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,h,d,g,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=w(a,h,g,k);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new Q(h,this.src,N,!!g,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(g,k,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,h,d,g){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),x={};function F(a,h,d,g,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)F(a,h[N],d,g,k);return null}return d=le(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,k):M(a,h,d,!1,g,k)}function M(a,h,d,g,k,N){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,Oe=J(a);if(Oe||(a[C]=Oe=new Ae(a)),d=Oe.add(h,d,g,W,N),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Dn||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=se;return a}function K(a,h,d,g,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)K(a,h[N],d,g,k);else g=u(g)?!!g.capture:!!g,d=le(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=w(N,d,g,k),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,d,g,k)),(d=-1<a?h[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(q(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=J(h))?(E(d,a),d.h==0&&(d.src=null,h[C]=null)):ee(a)}}}function q(a){return a in x?x[a]:x[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new Yt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&z(a),a=d.call(g,h)}return a}function J(a){return a=a[C],a instanceof Ae?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ie(){Le.call(this),this.i=new Ae(this),this.M=this,this.F=null}b(ie,Le),ie.prototype[V]=!0,ie.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function me(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var k=h;h=new Ue(g,a),A(h,k)}if(k=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];k=we(W,g,!0,h)&&k}if(W=h.g=a,k=we(W,g,!0,h)&&k,k=we(W,g,!1,h)&&k,d)for(N=0;N<d.length;N++)W=h.g=d[N],k=we(W,g,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ie.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function we(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var Oe=W.listener,Ze=W.ha||W.src;W.fa&&E(a.i,W),k=Oe.call(Ze,g)!==!1&&k}}return k&&!g.defaultPrevented}function st(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ye(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Lt extends Le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(a){Le.call(this),this.h=a,this.g={}}b(it,Le);var Nn=[];function Cs(a){oe(a.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},a),a.g={}}it.prototype.N=function(){it.aa.N.call(this),Cs(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=c.JSON.stringify,Ut=c.JSON.parse,zi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function sc(){}sc.prototype.h=null;function nh(a){return a.h||(a.h=a.i())}function rh(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ic(){Ue.call(this,"d")}b(ic,Ue);function oc(){Ue.call(this,"c")}b(oc,Ue);var dr={},sh=null;function Ki(){return sh=sh||new ie}dr.La="serverreachability";function ih(a){Ue.call(this,dr.La,a)}b(ih,Ue);function ks(a){const h=Ki();me(h,new ih(h))}dr.STAT_EVENT="statevent";function oh(a,h){Ue.call(this,dr.STAT_EVENT,a),this.stat=h}b(oh,Ue);function gt(a){const h=Ki();me(h,new oh(h,a))}dr.Ma="timingevent";function ah(a,h){Ue.call(this,dr.Ma,a),this.size=h}b(ah,Ue);function Ds(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ns(){this.g=!0}Ns.prototype.xa=function(){this.g=!1};function Zy(a,h,d,g,k,N){a.info(function(){if(a.g)if(N)for(var W="",Oe=N.split("&"),Ze=0;Ze<Oe.length;Ze++){var be=Oe[Ze].split("=");if(1<be.length){var ot=be[0];be=be[1];var at=ot.split("_");W=2<=at.length&&at[1]=="type"?W+(ot+"="+be+"&"):W+(ot+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function ev(a,h,d,g,k,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+W})}function Br(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+nv(a,d)+(g?" "+g:"")})}function tv(a,h){a.info(function(){return"TIMEOUT: "+h})}Ns.prototype.info=function(){};function nv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return Xe(d)}catch{return h}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ac;function Gi(){}b(Gi,sc),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},ac=new Gi;function Vn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var uh={},cc={};function lc(a,h,d){a.L=1,a.v=Xi(gn(h)),a.m=d,a.P=!0,hh(a,null)}function hh(a,h){a.F=Date.now(),Qi(a),a.A=gn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),bh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new lh,a.g=qh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Lt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Nn[0]=k.toString()),k=Nn);for(var N=0;N<k.length;N++){var W=F(d,k[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ks(),Zy(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const at=_n(this.g);var h=this.g.Ba();const qr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Dh(this.g)))){this.J||at!=4||h==7||(h==8||0>=qr?ks(3):ks(2)),uc(this);var d=this.g.Z();this.X=d;t:if(fh(this)){var g=Dh(this.g);a="";var k=g.length,N=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Vs(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,ev(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Ze=this.g;if((Oe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Oe)){var be=Oe;break t}}be=null}if(d=be)Br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hc(this,d);else{this.o=!1,this.s=3,gt(12),pr(this),Vs(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<W.length;)if(zt=rv(this,W),zt==cc){at==4&&(this.s=4,gt(14),d=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==uh){this.s=4,gt(15),Br(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Br(this.i,this.l,zt,null),hc(this,zt);if(fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||W.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Br(this.i,this.l,W,"[Invalid Chunked Response]"),pr(this),Vs(this);else if(0<W.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),_c(ot),ot.M=!0,gt(11))}}else Br(this.i,this.l,W,null),hc(this,W);at==4&&pr(this),this.o&&!this.J&&(at==4?Fh(this.j,this):(this.o=!1,Qi(this)))}else Ev(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),pr(this),Vs(this)}}}catch{}finally{}};function fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function rv(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?cc:(d=Number(h.substring(d,g)),isNaN(d)?uh:(g+=1,g+d>h.length?cc:(h=h.slice(g,g+d),a.C=g+d,h)))}Vn.prototype.cancel=function(){this.J=!0,pr(this)};function Qi(a){a.S=Date.now()+a.I,dh(a,a.I)}function dh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ds(m(a.ba,a),h)}function uc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(tv(this.i,this.A),this.L!=2&&(ks(),gt(17)),pr(this),this.s=2,Vs(this)):dh(this,this.S-a)};function Vs(a){a.j.G==0||a.J||Fh(a.j,a)}function pr(a){uc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Cs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function hc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||fc(d.h,a))){if(!a.K&&fc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)so(d),no(d);else break e;gc(d),gt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ds(m(d.Za,d),6e3));if(1>=gh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gr(d,11)}else if((a.K||d.g==a)&&so(d),!U(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let be=k[h];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const ot=be[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=be[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const qr=be[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zt=a.g;if(zt){const oo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var N=g.h;N.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(dc(N,N.h),N.h=null))}if(g.D){const yc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(g.ya=yc,xe(g.I,g.D,yc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=$h(g,g.J?g.ia:null,g.W),W.K){_h(g.h,W);var Oe=W,Ze=g.L;Ze&&(Oe.I=Ze),Oe.B&&(uc(Oe),Qi(Oe)),g.g=W}else Lh(g);0<d.i.length&&ro(d)}else be[0]!="stop"&&be[0]!="close"||gr(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?gr(d,7):mc(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}ks(4)}catch{}}var sv=class{constructor(a,h){this.g=a,this.map=h}};function ph(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gh(a){return a.h?1:a.g?a.g.size:0}function fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function dc(a,h){a.g?a.g.add(h):a.h=h}function _h(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ph.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function iv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function ov(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function vh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=ov(a),g=iv(a),k=g.length,N=0;N<k;N++)h.call(void 0,g[N],d&&d[N],a)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function av(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var N=a[d].substring(0,g);k=a[d].substring(g+1)}else N=a[d];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,Ji(this,a.j),this.o=a.o,this.g=a.g,Yi(this,a.s),this.l=a.l;var h=a.i,d=new Ls;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Th(this,d),this.m=a.m}else a&&(h=String(a).match(Eh))?(this.h=!1,Ji(this,h[1]||"",!0),this.o=xs(h[2]||""),this.g=xs(h[3]||"",!0),Yi(this,h[4]),this.l=xs(h[5]||"",!0),Th(this,h[6]||"",!0),this.m=xs(h[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ms(h,wh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ms(h,wh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ms(d,d.charAt(0)=="/"?uv:lv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ms(d,fv)),a.join("")};function gn(a){return new mr(a)}function Ji(a,h,d){a.j=d?xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Yi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Th(a,h,d){h instanceof Ls?(a.i=h,dv(a.i,a.h)):(d||(h=Ms(h,hv)),a.i=new Ls(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function Xi(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,cv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wh=/[#\/\?@]/g,lv=/[#\?:]/g,uv=/[#\?]/g,hv=/[#\?@]/g,fv=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&av(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ls.prototype,t.add=function(a,h){xn(this),this.i=null,a=jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ih(a,h){xn(a),h=jr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ah(a,h){return xn(a),h=jr(a,h),a.g.has(h)}t.forEach=function(a,h){xn(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let N=0;N<k.length;N++)d.push(h[g])}return d},t.V=function(a){xn(this);let h=[];if(typeof a=="string")Ah(this,a)&&(h=h.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return xn(this),this.i=null,a=jr(this,a),Ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function bh(a,h,d){Ih(a,h),0<d.length&&(a.i=null,a.g.set(jr(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var k=N;W[g]!==""&&(k+="="+encodeURIComponent(String(W[g]))),a.push(k)}}return this.i=a.join("&")};function jr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function dv(a,h){h&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Ih(this,g),bh(this,k,d))},a)),a.j=h}function pv(a,h){const d=new Ns;if(c.Image){const g=new Image;g.onload=y(Mn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Mn,d,"TestLoadImage: error",!1,h,g),g.onabort=y(Mn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Mn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function mv(a,h){const d=new Ns,g=new AbortController,k=setTimeout(()=>{g.abort(),Mn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(k),N.ok?Mn(d,"TestPingServer: ok",!0,h):Mn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Mn(d,"TestPingServer: error",!1,h)})}function Mn(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function gv(){this.g=new zi}function _v(a,h,d){const g=d||"";try{vh(a,function(k,N){let W=k;u(k)&&(W=Xe(k)),h.push(g+N+"="+encodeURIComponent(W))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Zi(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Zi,sc),Zi.prototype.g=function(){return new eo(this.l,this.j)},Zi.prototype.i=function(a){return function(){return a}}({});function eo(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(eo,ie),t=eo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Us(this):Fs(this),this.readyState==3&&Rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Qa=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sh(a){let h="";return oe(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function pc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Sh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function Be(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Be,ie);var yv=/^https?$/i,vv=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ac.g(),this.v=this.o?nh(this.o):nh(ac),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Ph(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vv,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ph(this,N)}};function Ph(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ch(a),to(a)}function Ch(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),to(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),to(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Oh(this):this.bb())},t.bb=function(){Oh(this)};function Oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)st(a.Ea,0,a);else if(me(a,"readystatechange"),_n(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var k=String(a.D).match(Eh)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),g=!yv.test(k?k.toLowerCase():"")}d=g}if(d)me(a,"complete"),me(a,"success");else{a.m=6;try{var N=2<_n(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Ch(a)}}finally{to(a)}}}}function to(a,h){if(a.g){kh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||me(a,"ready");try{d.onreadystatechange=g}catch{}}}function kh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ev(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=R(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Nh(a){this.Aa=0,this.i=[],this.j=new Ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ph(a&&a.concurrentRequestLimit),this.Da=new gv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){gt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=$h(this,null,this.W),ro(this)};function mc(a){if(Vh(a),a.G==3){var h=a.U++,d=gn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),js(a,d),h=new Vn(a,a.j,h),h.L=2,h.v=Xi(gn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=qh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Qi(h)}jh(a)}function no(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Vh(a){no(a),a.u&&(c.clearTimeout(a.u),a.u=null),so(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ro(a){if(!mh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||Ht(),ve||(ue(),ve=!0),Ot.add(h,a),a.B=0}}function Tv(a,h){return gh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ds(m(a.Ga,a,h),Bh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Vn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mh(this,k,h),d=gn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),js(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Sh(N)))+"&"+h:this.m&&pc(d,this.m,N)),dc(this.h,k),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),k.T=!0,lc(k,d,null)):lc(k,d,h),this.G=2}}else this.G==3&&(a?xh(this,a):this.i.length==0||mh(this.h)||xh(this))};function xh(a,h){var d;h?d=h.l:d=a.U++;const g=gn(a.I);xe(g,"SID",a.K),xe(g,"RID",d),xe(g,"AID",a.T),js(a,g),a.m&&a.o&&pc(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Mh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dc(a.h,d),lc(d,g,h)}function js(a,h){a.H&&oe(a.H,function(d,g){xe(h,g,d)}),a.l&&vh({},function(d,g){xe(h,g,d)})}function Mh(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=k[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Oe=!0;for(let Ze=0;Ze<d;Ze++){let be=k[Ze].g;const ot=k[Ze].map;if(be-=N,0>be)N=Math.max(0,k[Ze].g-100),Oe=!1;else try{_v(ot,W,"req"+be+"_")}catch{g&&g(ot)}}if(Oe){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Lh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||Ht(),ve||(ue(),ve=!0),Ot.add(h,a),a.v=0}}function gc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ds(m(a.Fa,a),Bh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ds(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),no(this),Uh(this))};function _c(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Uh(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),js(a,h),a.m&&a.o&&pc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Xi(gn(h)),d.m=null,d.P=!0,hh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,no(this),gc(this),gt(19))};function so(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fh(a,h){var d=null;if(a.g==h){so(a),_c(a),a.g=null;var g=2}else if(fc(a.h,h))d=h.D,_h(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Ki(),me(g,new ah(g,d)),ro(a)}else Lh(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&Tv(a,h)||g==2&&gc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function Bh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function gr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new mr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ji(g,"https"),Xi(g),k?pv(g.toString(),d):mv(g.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(h),jh(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function jh(a){if(a.G=0,a.ka=[],a.l){const h=yh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function $h(a,h,d){var g=d instanceof mr?gn(d):new mr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Yi(g,g.s);else{var k=c.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new mr(null);g&&Ji(N,g),h&&(N.g=h),k&&Yi(N,k),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&xe(g,d,h),xe(g,"VER",a.la),js(a,g),g}function qh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new Zi({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function io(){}io.prototype.g=function(a,h){return new kt(a,h)};function kt(a,h){ie.call(this),this.g=new Nh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $r(this)}b(kt,ie),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){mc(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xe(a),a=d);h.i.push(new sv(h.Ya++,a)),h.G==3&&ro(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,kt.aa.N.call(this)};function zh(a){ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(zh,ic);function Kh(){oc.call(this),this.status=1}b(Kh,oc);function $r(a){this.g=a}b($r,Hh),$r.prototype.ua=function(){me(this.g,"a")},$r.prototype.ta=function(a){me(this.g,new zh(a))},$r.prototype.sa=function(a){me(this.g,new Kh)},$r.prototype.ra=function(){me(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Gg=function(){return new io},Wg=function(){return Ki()},Kg=dr,El={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,bo=Wi,ch.COMPLETE="complete",zg=ch,rh.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ws=rh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Hg=Be}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});const pd="@firebase/firestore",md="4.7.11";/**
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
 */let As="11.6.1";/**
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
 */const Nr=new uu("@firebase/firestore");function Gr(){return Nr.logLevel}function X(t,...e){if(Nr.logLevel<=Ee.DEBUG){const n=e.map(du);Nr.debug(`Firestore (${As}): ${t}`,...n)}}function Rn(t,...e){if(Nr.logLevel<=Ee.ERROR){const n=e.map(du);Nr.error(`Firestore (${As}): ${t}`,...n)}}function fs(t,...e){if(Nr.logLevel<=Ee.WARN){const n=e.map(du);Nr.warn(`Firestore (${As}): ${t}`,...n)}}function du(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qg(t,r,n)}function Qg(t,e,n){let r=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function Ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Qg(e,s,r)}function de(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class CR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Jg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class kR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function VR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Yg(){return new TextEncoder}/**
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
 */class Xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=VR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Tl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=Yg(),o=xR(i.encode(_d(t,n)),i.encode(_d(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function _d(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function xR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const yd=-62135596800,vd=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vd);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yd)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vd}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new We(0,0))}static max(){return new fe(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ed="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),s=tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(e).compare(tn.extractNumericId(n)):Tl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return er.fromString(e.substring(4,e.length-2))}}class Me extends tn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const MR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends tn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return MR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ed}static keyField(){return new nt([Ed])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Me.fromString(e))}static fromName(e){return new re(Me.fromString(e).popFirst(5))}static empty(){return new re(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Me(e.slice()))}}/**
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
 */const Ti=-1;function LR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new rr(s,re.empty(),e)}function UR(t){return new rr(t.readTime,t.key,Ti)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(fe.min(),re.empty(),Ti)}static max(){return new rr(fe.max(),re.empty(),Ti)}}function FR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const BR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bs(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==BR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $R(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fa.le=-1;/**
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
 */const pu=-1;function Ba(t){return t==null}function Yo(t){return t===0&&1/t==-1/0}function qR(t){return typeof t=="number"&&Number.isInteger(t)&&!Yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zg="";function HR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Td(e)),e=zR(t.get(n),e);return Td(e)}function zR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Zg:n+="";break;default:n+=i}}return n}function Td(t){return t+Zg+""}/**
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
 */function wd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ho(this.root,e,this.comparator,!0)}}class ho{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Ge(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class t_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new t_("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const KR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=KR.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const n_="server_timestamp",r_="__type__",s_="__previous_value__",i_="__local_write_time__";function mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[r_])===null||n===void 0?void 0:n.stringValue)===n_}function ja(t){const e=t.mapValue.fields[s_];return mu(e)?ja(e):e}function wi(t){const e=sr(t.mapValue.fields[i_].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class WR{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}const Xo="(default)";class Ii{constructor(e,n){this.projectId=e,this.database=n||Xo}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database===Xo}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const o_="__type__",GR="__max__",fo={mapValue:{}},a_="__vector__",Zo="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:JR(t)?9007199254740991:QR(t)?10:11:ae(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),c=sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),c=$e(i.doubleValue);return o===c?Yo(o)===Yo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(wd(o)!==wd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function Ai(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=$e(i.integerValue||i.doubleValue),l=$e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Ad(t.timestampValue,e.timestampValue);case 4:return Ad(wi(t),wi(e));case 5:return Tl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ir(i),l=ir(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ye(c[u],l[u]);if(f!==0)return f}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ye($e(i.latitude),$e(o.latitude));return c!==0?c:ye($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},y=(c=p[Zo])===null||c===void 0?void 0:c.arrayValue,b=(l=m[Zo])===null||l===void 0?void 0:l.arrayValue,O=ye(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:bd(y,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fo.mapValue&&o===fo.mapValue)return 0;if(i===fo.mapValue)return 1;if(o===fo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Tl(l[p],f[p]);if(m!==0)return m;const y=ps(c[l[p]],u[f[p]]);if(y!==0)return y}return ye(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{Pe:n})}}function Ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=sr(t),r=sr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function bd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ps(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ms(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wl(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function Ro(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ja(t);return e?16+Ro(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ro(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return hr(r.fields,(i,o)=>{s+=i.length+Ro(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function Il(t){return!!t&&"integerValue"in t}function gu(t){return!!t&&"arrayValue"in t}function Rd(t){return!!t&&"nullValue"in t}function Sd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function QR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[o_])===null||n===void 0?void 0:n.stringValue)===a_}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===GR}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!So(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ai(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());So(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(ai(this.value))}}function c_(t){const e=[];return hr(t.fields,(n,r)=>{const s=new nt([n]);if(So(r)){const i=c_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,fe.min(),fe.min(),fe.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,fe.min(),fe.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,fe.min(),fe.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ea{constructor(e,n){this.position=e,this.inclusive=n}}function Pd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function YR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class l_{}class Ke extends l_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new n0(e,r):n==="in"?new r0(e,r):n==="not-in"?new s0(e,r):n==="array-contains-any"?new i0(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e0(e,r):new t0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ps(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends l_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new mn(e,n)}matches(e){return u_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function u_(t){return t.op==="and"}function h_(t){return XR(t)&&u_(t)}function XR(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Al(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(h_(t))return t.filters.map(e=>Al(e)).join(",");{const e=t.filters.map(n=>Al(n)).join(",");return`${t.op}(${e})`}}function f_(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof mn?function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&f_(o,s.filters[c]),!0):!1}(t,e):void ae(19439)}function d_(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(d_).join(" ,")+"}"}(t):"Filter"}class ZR extends Ke{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class e0 extends Ke{constructor(e,n){super(e,"in",n),this.keys=p_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t0 extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=p_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class n0 extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gu(n)&&Ai(n.arrayValue,this.value)}}class r0 extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ai(this.value.arrayValue,n)}}class s0 extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ai(this.value.arrayValue,n)}}class i0 extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class o0{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new o0(t,e,n,r,s,i,o)}function _u(t){const e=de(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Al(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.Ie=n}return e.Ie}function yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!f_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cd(t.startAt,e.startAt)&&Cd(t.endAt,e.endAt)}function bl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $a{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function a0(t,e,n,r,s,i,o,c){return new $a(t,e,n,r,s,i,o,c)}function m_(t){return new $a(t)}function kd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function c0(t){return t.collectionGroup!==null}function ci(t){const e=de(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ge(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ta(i,r))}),n.has(nt.keyField().canonicalString())||e.Ee.push(new ta(nt.keyField(),r))}return e.Ee}function cn(t){const e=de(t);return e.de||(e.de=l0(e,ci(t))),e.de}function l0(t,e){if(t.limitType==="F")return Od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ta(s.field,i)});const n=t.endAt?new ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ea(t.startAt.position,t.startAt.inclusive):null;return Od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rl(t,e,n){return new $a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qa(t,e){return yu(cn(t),cn(e))&&t.limitType===e.limitType}function g_(t){return`${_u(cn(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>d_(s)).join(", ")}]`),Ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Pd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,c,l){const u=Pd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,ci(r),s))}(t,e)}function u0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function __(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=h0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function h0(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ps(l,u):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}/**
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
 */const f0=new Fe(re.comparator);function Sn(){return f0}const y_=new Fe(re.comparator);function Gs(...t){let e=y_;for(const n of t)e=e.insert(n.key,n);return e}function v_(t){let e=y_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return li()}function E_(){return li()}function li(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const d0=new Fe(re.comparator),p0=new Ge(re.comparator);function Te(...t){let e=p0;for(const n of t)e=e.add(n);return e}const m0=new Ge(ye);function g0(){return m0}/**
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
 */function vu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yo(e)?"-0":e}}function T_(t){return{integerValue:""+t}}function _0(t,e){return qR(e)?T_(e):vu(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function y0(t,e,n){return t instanceof na?function(s,i){const o={fields:{[r_]:{stringValue:n_},[i_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mu(i)&&(i=ja(i)),i&&(o.fields[s_]=i),{mapValue:o}}(n,e):t instanceof bi?I_(t,e):t instanceof Ri?A_(t,e):function(s,i){const o=w_(s,i),c=Dd(o)+Dd(s.Re);return Il(o)&&Il(s.Re)?T_(c):vu(s.serializer,c)}(t,e)}function v0(t,e,n){return t instanceof bi?I_(t,e):t instanceof Ri?A_(t,e):n}function w_(t,e){return t instanceof ra?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class na extends za{}class bi extends za{constructor(e){super(),this.elements=e}}function I_(t,e){const n=b_(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ri extends za{constructor(e){super(),this.elements=e}}function A_(t,e){let n=b_(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class ra extends za{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Dd(t){return $e(t.integerValue||t.doubleValue)}function b_(t){return gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function E0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bi&&s instanceof bi||r instanceof Ri&&s instanceof Ri?ds(r.elements,s.elements,pn):r instanceof ra&&s instanceof ra?pn(r.Re,s.Re):r instanceof na&&s instanceof na}(t.transform,e.transform)}class T0{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function R_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eu(t.key,Gt.none()):new Li(t.key,t.data,Gt.none());{const n=t.data,r=bt.empty();let s=new Ge(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fr(t.key,r,new xt(s.toArray()),Gt.none())}}function w0(t,e,n){t instanceof Li?function(s,i,o){const c=s.value.clone(),l=Vd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(s,i,o){if(!Po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Vd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(S_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof Li?function(i,o,c,l){if(!Po(i.precondition,o))return c;const u=i.value.clone(),f=xd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(i,o,c,l){if(!Po(i.precondition,o))return c;const u=xd(i.fieldTransforms,l,o),f=o.data;return f.setAll(S_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function I0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=w_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Nd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,o)=>E0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fr extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function S_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vd(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,v0(o,c,n[s]))}return r}function xd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,y0(i,o,e))}return r}class Eu extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A0 extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&w0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=E_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=R_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Nd(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Nd(n,r))}}class Tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return d0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tu(e,n,r,s)}}/**
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
 */class R0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class S0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ie;function P0(t){switch(t){case $.OK:return ae(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function P_(t){if(t===void 0)return Rn("GRPC error has no .code"),$.UNKNOWN;switch(t){case He.OK:return $.OK;case He.CANCELLED:return $.CANCELLED;case He.UNKNOWN:return $.UNKNOWN;case He.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case He.INTERNAL:return $.INTERNAL;case He.UNAVAILABLE:return $.UNAVAILABLE;case He.UNAUTHENTICATED:return $.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case He.NOT_FOUND:return $.NOT_FOUND;case He.ALREADY_EXISTS:return $.ALREADY_EXISTS;case He.PERMISSION_DENIED:return $.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case He.ABORTED:return $.ABORTED;case He.OUT_OF_RANGE:return $.OUT_OF_RANGE;case He.UNIMPLEMENTED:return $.UNIMPLEMENTED;case He.DATA_LOSS:return $.DATA_LOSS;default:return ae(39323,{code:t})}}(Ie=He||(He={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C0=new er([4294967295,4294967295],0);function Md(t){const e=Yg().encode(t),n=new qg;return n.update(e),new Uint8Array(n.digest())}function Ld(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new er([n,r],0),new er([s,i],0)]}class wu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=er.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(er.fromNumber(r)));return s.compare(C0)===1&&(s=new er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Md(e),[r,s]=Ld(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=Md(e),[r,s]=Ld(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wa(fe.min(),s,new Fe(ye),Sn(),Te())}}class Ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ui(r,n,Te(),Te(),Te())}}/**
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
 */class Co{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class C_{constructor(e,n){this.targetId=e,this.Ce=n}}class O_{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ud{constructor(){this.Fe=0,this.Me=Fd(),this.xe=rt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Ui(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Fd()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class O0{constructor(e){this.ze=e,this.je=new Map,this.He=Sn(),this.Je=po(),this.Ye=po(),this.Ze=new Fe(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(bl(i))if(r===0){const o=new re(i.path);this.tt(n,o,ft.newNoDocument(o,fe.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ir(r).toUint8Array()}catch(l){if(l instanceof t_)return fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new wu(o,s,i)}catch(l){return fs(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&bl(c.target)){const l=new re(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,ft.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this._t(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Wa(e,n,this.Ze,this.He,r);return this.He=Sn(),this.Je=po(),this.Ye=po(),this.Ze=new Fe(ye),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ud,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Ge(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ge(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ud),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function po(){return new Fe(re.comparator)}function Fd(){return new Fe(re.comparator)}const k0={asc:"ASCENDING",desc:"DESCENDING"},D0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N0={and:"AND",or:"OR"};class V0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sl(t,e){return t.useProto3Json||Ba(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function x0(t,e){return sa(t,e.toTimestamp())}function ln(t){return Ce(!!t,49232),fe.fromTimestamp(function(n){const r=sr(n);return new We(r.seconds,r.nanos)}(t))}function Iu(t,e){return Pl(t,e).canonicalString()}function Pl(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D_(t){const e=Me.fromString(t);return Ce(L_(e),10190,{key:e.toString()}),e}function Cl(t,e){return Iu(t.databaseId,e.path)}function jc(t,e){const n=D_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(V_(n))}function N_(t,e){return Iu(t.databaseId,e)}function M0(t){const e=D_(t);return e.length===4?Me.emptyPath():V_(e)}function Ol(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Bd(t,e,n){return{name:Cl(t,e),fields:n.value.mapValue.fields}}function L0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?$.UNKNOWN:P_(u.code);return new ne(f,u.message||"")}(o);n=new O_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jc(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):fe.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Co(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jc(t,r.document),i=r.readTime?ln(r.readTime):fe.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Co([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jc(t,r.document),i=r.removedTargetIds||[];n=new Co([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new S0(s,i),c=r.targetId;n=new C_(c,o)}}return n}function U0(t,e){let n;if(e instanceof Li)n={update:Bd(t,e.key,e.value)};else if(e instanceof Eu)n={delete:Cl(t,e.key)};else if(e instanceof fr)n={update:Bd(t,e.key,e.data),updateMask:W0(e.fieldMask)};else{if(!(e instanceof A0))return ae(16599,{ft:e.type});n={verify:Cl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ra)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:x0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function F0(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(fe.min())&&(o=ln(i)),new T0(o,s.transformResults||[])}(n,e))):[]}function B0(t,e){return{documents:[N_(t,e.path)]}}function j0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N_(t,s);const i=function(u){if(u.length!==0)return M_(mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Jr(m.field),direction:H0(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Sl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function $0(t){let e=M0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=x_(p);return m instanceof mn&&h_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new ta(Yr(b.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ba(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new ea(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new ea(y,m)}(n.endAt)),a0(e,s,o,i,c,"F",l,u)}function q0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function H0(t){return k0[t]}function z0(t){return D0[t]}function K0(t){return N0[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return nt.fromServerFormat(t.fieldPath)}function M_(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Sd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(Rd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(Rd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:z0(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(s=>M_(s));return r.length===1?r[0]:{compositeFilter:{op:K0(n.op),filters:r}}}(t):ae(54877,{filter:t})}function W0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,s,i=fe.min(),o=fe.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class G0{constructor(e){this.wt=e}}function Q0(t){const e=$0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
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
 */class J0{constructor(){this.yn=new Y0}addToCollectionParentIndex(e,n){return this.yn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Y0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Me.comparator)).toArray()}}/**
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
 */const jd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U_=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(U_,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class gs{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new gs(0)}static ir(){return new gs(-1)}}/**
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
 */const $d="LruGarbageCollector",X0=1048576;function qd([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class Z0{constructor(e){this.cr=e,this.buffer=new Ge(qd),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){X($d,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?X($d,"Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.Ir(3e5)})}}class tS{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Fa.le);const r=new Z0(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(jd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jd):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Gr()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function nS(t,e){return new tS(t,e)}/**
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
 */class rS{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class iS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ui(r.mutation,s,xt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Sn();const o=li(),c=function(){return li()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof fr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ui(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new sS(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=li();let s=new Fe((o,c)=>o-c),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||xt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=E_();f.forEach(m=>{if(!i.has(m)){const y=R_(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):c0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Ir());let c=Ti,l=i;return o.next(u=>L.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(f=>({batchId:c,changes:v_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const u=function(p,m){return new $a(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let c=Gs();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&ui(f.mutation,u,xt.empty(),We.now()),Ha(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class oS{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return L.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:Q0(s.bundledQuery),readTime:ln(s.readTime)}}(n)),L.resolve()}}/**
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
 */class aS{constructor(){this.overlays=new Fe(re.comparator),this.Or=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Ir(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ir(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Ir(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R0(n,r));let i=this.Or.get(n);i===void 0&&(i=Te(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
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
 */class cS{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Au{constructor(){this.Nr=new Ge(Qe.Br),this.Lr=new Ge(Qe.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Qe(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new re(new Me([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new re(new Me([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=Te();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return re.comparator(e.key,n.key)||ye(e.Gr,n.Gr)}static kr(e,n){return ye(e.Gr,n.Gr)||re.comparator(e.key,n.key)}}/**
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
 */class lS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new Ge(Qe.Br)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?pu:this.Jn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const c=this.jr(o.Gr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ye);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{r=r.add(c.Gr)})}),L.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new re(i),0);let c=new Ge(ye);return this.zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Gr)),!0)},o),L.resolve(this.Jr(c))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return L.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Qe(n,0),s=this.zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uS{constructor(e){this.Zr=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FR(UR(f),r)<=0||(s.has(f.key)||Ha(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}Xr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hS(this)}getSize(e){return L.resolve(this.size)}}class hS extends rS{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class fS{constructor(e){this.persistence=e,this.ei=new Ur(n=>_u(n),yu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.ti=0,this.ni=new Au,this.targetCount=0,this.ri=gs.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),L.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.ar(n),L.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ni.containsKey(n))}}/**
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
 */class F_{constructor(e,n){this.ii={},this.overlays={},this.si=new Fa(0),this.oi=!1,this.oi=!0,this._i=new cS,this.referenceDelegate=e(this),this.ai=new fS(this),this.indexManager=new J0,this.remoteDocumentCache=function(s){return new uS(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new G0(n),this.ci=new oS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new lS(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new dS(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return L.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class dS extends jR{constructor(e){super(),this.currentSequenceNumber=e}}class bu{constructor(e){this.persistence=e,this.Ti=new Au,this.Ii=null}static Ei(e){return new bu(e)}get di(){if(this.Ii)return this.Ii;throw ae(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=re.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return L.or([()=>L.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class ia{constructor(e,n){this.persistence=e,this.Ri=new Ur(r=>HR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nS(this,n)}static Ei(e,n){return new ia(e,n)}li(){}hi(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return L.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),L.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ro(e.data.value)),n}gr(e,n,r){return L.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ru(e,n.fromCache,r,s)}}/**
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
 */class pS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mS{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return cb()?8:$R(mt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new pS;return this.fs(e,n,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,n,o,c.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(Gr()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),L.resolve()):(Gr()<=Ee.DEBUG&&X("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Gr()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):L.resolve())}Rs(e,n){if(kd(n))return L.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ps(n,c);return this.ys(n,u,o,l.readTime)?this.Rs(e,Rl(n,null,"F")):this.ws(e,u,n,l)}))})))}Vs(e,n,r,s){return kd(n)||s.isEqual(fe.min())?L.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?L.resolve(null):(Gr()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.ws(e,o,n,LR(s,Ti)).next(c=>c))})}ps(e,n){let r=new Ge(__(e));return n.forEach((s,i)=>{Ha(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return Gr()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.As.getDocumentsMatchingQuery(e,n,rr.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Su="LocalStore",gS=3e8;class _S{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Fe(ye),this.Ds=new Ur(i=>_u(i),yu),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iS(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function yS(t,e,n,r){return new _S(t,e,n,r)}async function B_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:c}))})})}function vS(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let y=L.resolve();return m.forEach(b=>{y=y.next(()=>f.getEntry(l,b)).next(O=>{const S=u.docVersions.get(b);Ce(S!==null,48541),O.version.compareTo(S)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function j_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function ES(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(O,S,B){return O.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=gS?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,y,f)&&c.push(n.ai.updateTargetData(i,y))});let l=Sn(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(TS(i,o,e.documentUpdates).next(f=>{l=f.xs,u=f.Os})),!r.isEqual(fe.min())){const f=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ss=s,i))}function TS(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Su,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{xs:o,Os:s}})}function wS(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=pu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function kl(t,e,n){const r=de(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rs(o))throw o;X(Su,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function Hd(t,e,n){const r=de(t);let s=fe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),m=p.Ds.get(f);return m!==void 0?L.resolve(p.Ss.get(m)):p.ai.getTargetData(u,f)}(r,o,cn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Te())).next(c=>(AS(r,u0(e),c),{documents:c,Ns:i})))}function AS(t,e,n){let r=t.vs.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class zd{constructor(){this.activeTargetIds=g0()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bS{constructor(){this.So=new zd,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new zd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RS{vo(e){}shutdown(){}}/**
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
 */const Kd="ConnectivityMonitor";class Wd{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){X(Kd,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){X(Kd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mo=null;function Dl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
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
 */const $c="RestConnection",SS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PS{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=Dl(),c=this.$o(e,n.toUriEncodedString());X($c,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(e,c,l,r).then(u=>(X($c,`Received RPC '${e}' ${o}: `,u),u),u=>{throw fs($c,`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",r),u})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=SS[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class CS{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const ct="WebChannelConnection";class OS extends PS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=Dl();return new Promise((o,c)=>{const l=new Hg;l.setWithCredentials(!0),l.listenOnce(zg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bo.NO_ERROR:const f=l.getResponseJson();X(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case bo.TIMEOUT:X(ct,`RPC '${e}' ${i} timed out`),c(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const p=l.getStatus();if(X(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const b=function(S){const B=S.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(B)>=0?B:$.UNKNOWN}(y.status);c(new ne(b,y.message))}else c(new ne($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne($.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{s_:e,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{X(ct,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(ct,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}a_(e,n,r){const s=Dl(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gg(),c=Wg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ct,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,y=!1;const b=new CS({Go:S=>{y?X(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(X(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ct,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},zo:()=>p.close()}),O=(S,B,U)=>{S.listen(B,j=>{try{U(j)}catch(H){setTimeout(()=>{throw H},0)}})};return O(p,Ws.EventType.OPEN,()=>{y||(X(ct,`RPC '${e}' stream ${s} transport opened.`),b.t_())}),O(p,Ws.EventType.CLOSE,()=>{y||(y=!0,X(ct,`RPC '${e}' stream ${s} transport closed`),b.r_())}),O(p,Ws.EventType.ERROR,S=>{y||(y=!0,fs(ct,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),b.r_(new ne($.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ws.EventType.MESSAGE,S=>{var B;if(!y){const U=S.data[0];Ce(!!U,16349);const j=U,H=(j==null?void 0:j.error)||((B=j[0])===null||B===void 0?void 0:B.error);if(H){X(ct,`RPC '${e}' stream ${s} received error:`,H);const Z=H.status;let oe=function(v){const A=He[v];if(A!==void 0)return P_(A)}(Z),I=H.message;oe===void 0&&(oe=$.INTERNAL,I="Unknown error status: "+Z+" with message "+H.message),y=!0,b.r_(new ne(oe,I)),p.close()}else X(ct,`RPC '${e}' stream ${s} received:`,U),b.i_(U)}}),O(c,Kg.STAT_EVENT,S=>{S.stat===El.PROXY?X(ct,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===El.NOPROXY&&X(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.n_()},0),b}}function qc(){return typeof document<"u"?document:null}/**
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
 */function Ga(t){return new V0(t,!0)}/**
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
 */class $_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Gd="PersistentStream";class q_{constructor(e,n,r,s,i,o,c,l){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new $_(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ne($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return X(Gd,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(X(Gd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kS extends q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=L0(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?ln(o.readTime):fe.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=Ol(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=bl(l)?{documents:B0(i,l)}:{query:j0(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=k_(i,o.resumeToken);const u=Sl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){c.readTime=sa(i,o.snapshotVersion.toTimestamp());const u=Sl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=q0(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=Ol(this.serializer),n.removeTarget=e,this.F_(n)}}class DS extends q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=F0(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=Ol(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>U0(this.serializer,r))};this.F_(n)}}/**
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
 */class NS{}class VS extends NS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Pl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne($.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,Pl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne($.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class xS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Rn(n),this.ea=!1):X("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Vr="RemoteStore";class MS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(X(Vr,"Restarting streams for network reachability change."),await async function(l){const u=de(l);u.aa.add(4),await Fi(u),u.la.set("Unknown"),u.aa.delete(4),await Qa(u)}(this))})}),this.la=new xS(r,s)}}async function Qa(t){if(Fr(t))for(const e of t.ua)await e(!0)}async function Fi(t){for(const e of t.ua)await e(!1)}function H_(t,e){const n=de(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),ku(n)?Ou(n):Ss(n).b_()&&Cu(n,e))}function Pu(t,e){const n=de(t),r=Ss(n);n._a.delete(e),r.b_()&&z_(n,e),n._a.size===0&&(r.b_()?r.v_():Fr(n)&&n.la.set("Unknown"))}function Cu(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).U_(e)}function z_(t,e){t.ha.Ke(e),Ss(t).K_(e)}function Ou(t){t.ha=new O0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.la.ta()}function ku(t){return Fr(t)&&!Ss(t).w_()&&t._a.size>0}function Fr(t){return de(t).aa.size===0}function K_(t){t.ha=void 0}async function LS(t){t.la.set("Online")}async function US(t){t._a.forEach((e,n)=>{Cu(t,e)})}async function FS(t,e){K_(t),ku(t)?(t.la.ia(e),Ou(t)):t.la.set("Unknown")}async function BS(t,e,n){if(t.la.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(t,e)}catch(r){X(Vr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof Co?t.ha.Xe(e):e instanceof C_?t.ha.ot(e):t.ha.nt(e),!n.isEqual(fe.min()))try{const r=await j_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(u);f&&i._a.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),z_(i,l);const p=new Wn(f.target,l,u,f.sequenceNumber);Cu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(Vr,"Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Rs(e))throw e;t.aa.add(1),await Fi(t),t.la.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Vr,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Qa(t)})}function W_(t,e){return e().catch(n=>oa(t,n,e))}async function Ja(t){const e=de(t),n=ar(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:pu;for(;jS(e);)try{const s=await wS(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,$S(e,s)}catch(s){await oa(e,s)}G_(e)&&Q_(e)}function jS(t){return Fr(t)&&t.oa.length<10}function $S(t,e){t.oa.push(e);const n=ar(t);n.b_()&&n.W_&&n.G_(e.mutations)}function G_(t){return Fr(t)&&!ar(t).w_()&&t.oa.length>0}function Q_(t){ar(t).start()}async function qS(t){ar(t).H_()}async function HS(t){const e=ar(t);for(const n of t.oa)e.G_(n.mutations)}async function zS(t,e,n){const r=t.oa.shift(),s=Tu.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ja(t)}async function KS(t,e){e&&ar(t).W_&&await async function(r,s){if(function(o){return P0(o)&&o!==$.ABORTED}(s.code)){const i=r.oa.shift();ar(r).D_(),await W_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(t,e),G_(t)&&Q_(t)}async function Qd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X(Vr,"RemoteStore received new credentials");const r=Fr(n);n.aa.add(3),await Fi(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Qa(n)}async function WS(t,e){const n=de(t);e?(n.aa.delete(2),await Qa(n)):e||(n.aa.add(2),await Fi(n),n.la.set("Unknown"))}function Ss(t){return t.Pa||(t.Pa=function(n,r,s){const i=de(n);return i.Y_(),new kS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:LS.bind(null,t),Jo:US.bind(null,t),Zo:FS.bind(null,t),Q_:BS.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),ku(t)?Ou(t):t.la.set("Unknown")):(await t.Pa.stop(),K_(t))})),t.Pa}function ar(t){return t.Ta||(t.Ta=function(n,r,s){const i=de(n);return i.Y_(),new DS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:qS.bind(null,t),Zo:KS.bind(null,t),z_:HS.bind(null,t),j_:zS.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Ja(t)):(await t.Ta.stop(),t.oa.length>0&&(X(Vr,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class Du{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Du(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Rs(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jd{constructor(){this.Ia=new Fe(re.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new _s(e,n,ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GS{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class QS{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Yd(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(r)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function Yd(){return new Ur(t=>g_(t),qa)}async function JS(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new GS,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Nu(o,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Vu(n)}async function YS(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(r=!0);o.Aa=s}}r&&Vu(n)}function ZS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function Vu(t){t.fa.forEach(e=>{e.next()})}var Nl,Xd;(Xd=Nl||(Nl={})).ya="default",Xd.Cache="cache";class eP{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Nl.Cache}}/**
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
 */class J_{constructor(e){this.key=e}}class Y_{constructor(e){this.key=e}}class tP{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Te(),this.mutatedKeys=Te(),this.Ua=__(e),this.Ka=new ss(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Jd,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=Ha(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;m&&y?m.data.isEqual(y.data)?b!==O&&(r.track({type:3,doc:y}),S=!0):this.ja(m,y)||(r.track({type:2,doc:y}),S=!0,(l&&this.Ua(y,l)>0||u&&this.Ua(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),S=!0):m&&!y&&(r.track({type:1,doc:m}),S=!0,(l||u)&&(c=!0)),S&&(y?(o=o.add(y),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:c,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(y,b){const O=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:S})}};return O(y)-O(b)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(r),s=s!=null&&s;const c=n&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,u=l!==this.Qa;return this.Qa=l,o.length!==0||u?{snapshot:new _s(this.query,e.Ka,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Jd,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Te(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new Y_(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new J_(r))}),n}Xa(e){this.qa=e.Ns,this.$a=Te();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return _s.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const xu="SyncEngine";class nP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rP{constructor(e){this.key=e,this.tu=!1}}class sP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Ur(c=>g_(c),qa),this.iu=new Map,this.su=new Set,this.ou=new Fe(re.comparator),this._u=new Map,this.au=new Au,this.uu={},this.cu=new Map,this.lu=gs.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function iP(t,e,n=!0){const r=ry(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await X_(r,e,n,!0),s}async function oP(t,e){const n=ry(t);await X_(n,e,!0,!1)}async function X_(t,e,n,r){const s=await IS(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await aP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&H_(t.remoteStore,s),c}async function aP(t,e,n,r,s){t.Pu=(p,m,y)=>async function(O,S,B,U){let j=S.view.Ga(B);j.ys&&(j=await Hd(O.localStore,S.query,!1).then(({documents:I})=>S.view.Ga(I,j)));const H=U&&U.targetChanges.get(S.targetId),Z=U&&U.targetMismatches.get(S.targetId)!=null,oe=S.view.applyChanges(j,O.isPrimaryClient,H,Z);return ep(O,S.targetId,oe.Ya),oe.snapshot}(t,p,m,y);const i=await Hd(t.localStore,e,!0),o=new tP(e,i.Ns),c=o.Ga(i.documents),l=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ep(t,n,u.Ya);const f=new nP(e,n,o);return t.ru.set(e,f),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function cP(t,e,n){const r=de(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!qa(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pu(r.remoteStore,s.targetId),Vl(r,s.targetId)}).catch(bs)):(Vl(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function lP(t,e){const n=de(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pu(n.remoteStore,r.targetId))}async function uP(t,e,n){const r=_P(t);try{const s=await function(o,c){const l=de(o),u=We.now(),f=c.reduce((y,b)=>y.add(b.key),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=Sn(),O=Te();return l.Cs.getEntries(y,f).next(S=>{b=S,b.forEach((B,U)=>{U.isValidDocument()||(O=O.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(S=>{p=S;const B=[];for(const U of c){const j=I0(U,p.get(U.key).overlayedDocument);j!=null&&B.push(new fr(U.key,j,c_(j.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,B,c)}).next(S=>{m=S;const B=S.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(y,S.batchId,B)})}).then(()=>({batchId:m.batchId,changes:v_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.uu[o.currentUser.toKey()];u||(u=new Fe(ye)),u=u.insert(c,l),o.uu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Bi(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=Nu(s,"Failed to persist write");n.reject(i)}}async function Z_(t,e){const n=de(t);try{const r=await ES(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Ce(o.tu,14607):s.removedDocuments.size>0&&(Ce(o.tu,42227),o.tu=!1))}),await Bi(n,r,e)}catch(r){await bs(r)}}function Zd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.Ra)m.ga(c)&&(u=!0)}),u&&Vu(l)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hP(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Fe(re.comparator);o=o.insert(i,ft.newNoDocument(i,fe.min()));const c=Te().add(i),l=new Wa(fe.min(),new Map,new Fe(ye),o,c);await Z_(r,l),r.ou=r.ou.remove(i),r._u.delete(e),Mu(r)}else await kl(r.localStore,e,!1).then(()=>Vl(r,e,n)).catch(bs)}async function fP(t,e){const n=de(t),r=e.batch.batchId;try{const s=await vS(n.localStore,e);ty(n,r,null),ey(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bi(n,s)}catch(s){await bs(s)}}async function dP(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ce(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);ty(r,e,n),ey(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bi(r,s)}catch(s){await bs(s)}}function ey(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function ty(t,e,n){const r=de(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||ny(t,r)})}function ny(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(Pu(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Mu(t))}function ep(t,e,n){for(const r of n)r instanceof J_?(t.au.addReference(r.key,e),pP(t,r)):r instanceof Y_?(X(xu,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||ny(t,r.key)):ae(19791,{Iu:r})}function pP(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(X(xu,"New document in limbo: "+n),t.su.add(r),Mu(t))}function Mu(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new re(Me.fromString(e)),r=t.lu.next();t._u.set(r,new rP(n)),t.ou=t.ou.insert(n,r),H_(t.remoteStore,new Wn(cn(m_(n.path)),r,"TargetPurposeLimboResolution",Fa.le))}}async function Bi(t,e,n){const r=de(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((c,l)=>{o.push(r.Pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ru.Ps(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,m=>L.forEach(m.ls,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>L.forEach(m.hs,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Rs(p))throw p;X(Su,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ss.get(m),b=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(b);f.Ss=f.Ss.insert(m,O)}}}(r.localStore,i))}async function mP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X(xu,"User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new ne($.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bi(n,r.Ms)}}function gP(t,e){const n=de(t),r=n._u.get(e);if(r&&r.tu)return Te().add(r.key);{let s=Te();const i=n.iu.get(e);if(!i)return s;for(const o of i){const c=n.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}function ry(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hP.bind(null,e),e.nu.Q_=XS.bind(null,e.eventManager),e.nu.Tu=ZS.bind(null,e.eventManager),e}function _P(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dP.bind(null,e),e}class aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return yS(this.persistence,new mS,e.initialUser,this.serializer)}Ru(e){return new F_(bu.Ei,this.serializer)}Au(e){return new bS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aa.provider={build:()=>new aa};class yP extends aa{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Ce(this.persistence.referenceDelegate instanceof ia,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eS(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new F_(r=>ia.Ei(r,n),this.serializer)}}class xl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mP.bind(null,this.syncEngine),await WS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QS}()}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=function(i){return new OS(i)}(e.databaseInfo);return function(i,o,c,l){return new VS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new MS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Zd(this.syncEngine,n,0),function(){return Wd.C()?new Wd:new RS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new sP(s,i,o,c,l,u);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X(Vr,"RemoteStore shutting down."),i.aa.add(5),await Fi(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xl.provider={build:()=>new xl};/**
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
 */class vP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const cr="FirestoreClient";class EP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),X(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TP(t);X(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qd(e.remoteStore,s)),t._onlineComponents=e}async function TP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(cr,"Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new aa)}}else X(cr,"Using default OfflineComponentProvider"),await Hc(t,new yP(void 0));return t._offlineComponents}async function sy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(cr,"Using user provided OnlineComponentProvider"),await tp(t,t._uninitializedComponentsProvider._online)):(X(cr,"Using default OnlineComponentProvider"),await tp(t,new xl))),t._onlineComponents}function wP(t){return sy(t).then(e=>e.syncEngine)}async function IP(t){const e=await sy(t),n=e.eventManager;return n.onListen=iP.bind(null,e.syncEngine),n.onUnlisten=cP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lP.bind(null,e.syncEngine),n}function AP(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new vP({next:m=>{f.yu(),o.enqueueAndForget(()=>YS(i,p)),m.fromCache&&l.source==="server"?u.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new eP(c,f,{includeMetadataChanges:!0,Fa:!0});return JS(i,p)}(await IP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const np=new Map;/**
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
 */function oy(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bP(t,e,n,r){if(e===!0&&r===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!re.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sp(t){if(re.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function xr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lu(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ay="firestore.googleapis.com",ip=!0;class op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ay,this.ssl=ip}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ip;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<X0)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new op({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new op(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PR;switch(r.type){case"firstParty":return new DR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=np.get(n);r&&(X("ComponentProvider","Removing Datastore"),np.delete(n),r.terminate())}(this),Promise.resolve()}}function RP(t,e,n,r={}){var s;const i=(t=xr(t,Ya))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==ay&&i.host!==c&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!kr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=lt.MOCK_USER;else{u=tb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new lt(p)}t._authCredentials=new CR(new Jg(u,f))}}/**
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
 */class Xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xa(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class nr extends Xa{constructor(e,n,r){super(e,n,m_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new re(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function ca(t,e,...n){if(t=Ct(t),oy("collection","path",e),t instanceof Ya){const r=Me.fromString(e,...n);return sp(r),new nr(t,null,r)}{if(!(t instanceof $t||t instanceof nr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return sp(r),new nr(t.firestore,null,r)}}function Si(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=Xg.newId()),oy("doc","path",e),t instanceof Ya){const r=Me.fromString(e,...n);return rp(r),new $t(t,null,new re(r))}{if(!(t instanceof $t||t instanceof nr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return rp(r),new $t(t.firestore,t instanceof nr?t.converter:null,new re(r))}}/**
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
 */const ap="AsyncQueue";class cp{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new $_(this,"async_queue_retry"),this.ju=()=>{const r=qc();r&&X(ap,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new tr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Rs(e))throw e;X(ap,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Rn("INTERNAL UNHANDLED ERROR: ",lp(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=Du.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ae(47125,{ec:lp(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function lp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ji extends Ya{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cp(e),this._firestoreClient=void 0,await e}}}function SP(t,e){const n=typeof t=="object"?t:Bg(),r=typeof t=="string"?t:Xo,s=fu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ZA("firestore");i&&RP(s,...i)}return s}function cy(t){if(t._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PP(t),t._firestoreClient}function PP(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new WR(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,iy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new EP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(rt.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Uu{constructor(e){this._methodName=e}}/**
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
 */class Fu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class Bu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const CP=/^__.*__$/;class OP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}class ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{oc:t})}}class ju{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return la(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(uy(this.oc)&&CP.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class kP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(e)}dc(e,n,r,s=!1){return new ju({oc:e,methodName:n,Ec:r,path:nt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hy(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new kP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DP(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);$u("Data must be an object, but it was:",o,r);const c=fy(r,o);let l,u;if(i.merge)l=new xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Ml(e,p,n);if(!o.contains(m))throw new ne($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);py(f,m)||f.push(m)}l=new xt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new OP(new bt(c),l,u)}class ec extends Uu{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function NP(t,e,n,r){const s=t.dc(1,e,n);$u("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();hr(r,(l,u)=>{const f=qu(e,l,n);u=Ct(u);const p=s.hc(f);if(u instanceof ec)i.push(f);else{const m=tc(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new xt(i);return new ly(o,c,s.fieldTransforms)}function VP(t,e,n,r,s,i){const o=t.dc(1,e,n),c=[Ml(e,r,n)],l=[s];if(i.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ml(e,i[m])),l.push(i[m+1]);const u=[],f=bt.empty();for(let m=c.length-1;m>=0;--m)if(!py(u,c[m])){const y=c[m];let b=l[m];b=Ct(b);const O=o.hc(y);if(b instanceof ec)u.push(y);else{const S=tc(b,O);S!=null&&(u.push(y),f.set(y,S))}}const p=new xt(u);return new ly(f,p,o.fieldTransforms)}function tc(t,e){if(dy(t=Ct(t)))return $u("Unsupported field value:",e,t),fy(t,e);if(t instanceof Uu)return function(r,s){if(!uy(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=tc(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof Fu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ys)return{bytesValue:k_(s.serializer,r._byteString)};if(r instanceof $t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bu)return function(o,c){return{mapValue:{fields:{[o_]:{stringValue:a_},[Zo]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Tc("VectorValues must only contain numeric values.");return vu(c.serializer,u)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Lu(r)}`)}(t,e)}function fy(t,e){const n={};return e_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(t,(r,s)=>{const i=tc(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Fu||t instanceof ys||t instanceof $t||t instanceof Uu||t instanceof Bu)}function $u(t,e,n){if(!dy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Lu(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Ml(t,e,n){if((e=Ct(e))instanceof Za)return e._internalPath;if(typeof e=="string")return qu(t,e);throw la("Field path arguments must be of type string or ",t,!1,void 0,n)}const xP=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(xP)>=0)throw la(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Za(...e.split("."))._internalPath}catch{throw la(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function la(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne($.INVALID_ARGUMENT,c+t+l)}function py(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class my{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MP extends my{data(){return super.data()}}function gy(t,e){return typeof e=="string"?qu(t,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
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
 */function LP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UP{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Zo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>$e(o.doubleValue));return new Bu(i)}convertGeoPoint(e){return new Fu($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ja(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=sr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Ce(L_(r),9688,{name:e});const s=new Ii(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function FP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BP extends my{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends BP{data(e={}){return super.data(e)}}class jP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new go(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new go(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:$P(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $P(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}class qP extends UP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function _y(t){t=xr(t,Xa);const e=xr(t.firestore,ji),n=cy(e),r=new qP(e);return LP(t._query),AP(n,t._query).then(s=>new jP(e,r,t,s))}function yy(t,e,n,...r){t=xr(t,$t);const s=xr(t.firestore,ji),i=hy(s);let o;return o=typeof(e=Ct(e))=="string"||e instanceof Za?VP(i,"updateDoc",t._key,e,n,r):NP(i,"updateDoc",t._key,e),Hu(s,[o.toMutation(t._key,Gt.exists(!0))])}function vy(t){return Hu(xr(t.firestore,ji),[new Eu(t._key,Gt.none())])}function Ey(t,e){const n=xr(t.firestore,ji),r=Si(t),s=FP(t.converter,e);return Hu(n,[DP(hy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Hu(t,e){return function(r,s){const i=new tr;return r.asyncQueue.enqueueAndForget(async()=>uP(await wP(r),s,i)),i.promise}(cy(t),e)}(function(e,n=!0){(function(s){As=s})(Is),hs(new Dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ji(new OR(r.getProvider("auth-internal")),new NR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Zn(pd,md,e),Zn(pd,md,"esm2017")})();function zu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HP=Ty,wy=new xi("auth","Firebase",Ty());/**
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
 */const ua=new uu("@firebase/auth");function zP(t,...e){ua.logLevel<=Ee.WARN&&ua.warn(`Auth (${Is}): ${t}`,...e)}function ko(t,...e){ua.logLevel<=Ee.ERROR&&ua.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function Pn(t,...e){throw Ku(t,...e)}function un(t,...e){return Ku(t,...e)}function Iy(t,e,n){const r=Object.assign(Object.assign({},HP()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return Iy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ku(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wy.create(t,...e)}function he(t,e,...n){if(!t)throw Ku(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Cn(t,e){t||In(e)}/**
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
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KP(){return up()==="http:"||up()==="https:"}function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KP()||ib()||"connection"in navigator)?navigator.onLine:!0}function GP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=nb()||ob()}get(){return WP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wu(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ay{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YP=new $i(3e4,6e4);function Gu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,r,s={}){return by(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return sb()||(u.referrerPolicy="no-referrer"),Ay.fetch()(await Ry(t,t.config.apiHost,n,c),u)})}async function by(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QP),e);try{const s=new ZP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _o(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Iy(t,f,u);Pn(t,f)}}catch(s){if(s instanceof kn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function XP(t,e,n,r,s={}){const i=await Ps(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ry(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Wu(t.config,s):`${t.config.apiScheme}://${s}`;return JP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ZP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),YP.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function eC(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function ha(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tC(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=Qu(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hi(zc(s.auth_time)),issuedAtTime:hi(zc(s.iat)),expirationTime:hi(zc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function Qu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ng(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hp(t){const e=Qu(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&nC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,ha(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sy(i.providerUserInfo):[],c=iC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ul(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function sC(t){const e=Ct(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sy(t){return t.map(e=>{var{providerId:n}=e,r=zu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oC(t,e){const n=await by(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ry(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ay.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aC(t,e){return Ps(t,"POST","/v2/accounts:revokeToken",Gu(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=hp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new is;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Un(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tC(this,e)}reload(){return sC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Pi(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:H,isAnonymous:Z,providerData:oe,stsTokenManager:I}=n;he(j&&I,e,"internal-error");const _=is.fromJSON(this.name,I);he(typeof j=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),he(typeof H=="boolean",e,"internal-error"),he(typeof Z=="boolean",e,"internal-error"),Un(y,e.name),Un(b,e.name),Un(O,e.name),Un(S,e.name),Un(B,e.name),Un(U,e.name);const v=new Kt({uid:j,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:Z,photoURL:b,phoneNumber:y,tenantId:O,stsTokenManager:_,createdAt:B,lastLoginAt:U});return oe&&Array.isArray(oe)&&(v.providerData=oe.map(A=>Object.assign({},A))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new is;c.updateFromIdToken(r);const l=new Kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const fp=new Map;function An(t){Cn(t instanceof Function,"Expected a class definition");let e=fp.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fp.set(t,e),e)}/**
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
 */class Py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Py.type="NONE";const dp=Py;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ha(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(An(dp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(dp);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ha(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Kt._fromGetAccountInfoResponse(e,m,f)}else p=Kt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new os(i,e,r))}}/**
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
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vy(e))return"Blackberry";if(xy(e))return"Webos";if(Oy(e))return"Safari";if((e.includes("chrome/")||ky(e))&&!e.includes("edge/"))return"Chrome";if(Ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cy(t=mt()){return/firefox\//i.test(t)}function Oy(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ky(t=mt()){return/crios\//i.test(t)}function Dy(t=mt()){return/iemobile/i.test(t)}function Ny(t=mt()){return/android/i.test(t)}function Vy(t=mt()){return/blackberry/i.test(t)}function xy(t=mt()){return/webos/i.test(t)}function Ju(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cC(t=mt()){var e;return Ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lC(){return ab()&&document.documentMode===10}function My(t=mt()){return Ju(t)||Ny(t)||xy(t)||Vy(t)||/windows phone/i.test(t)||Dy(t)}/**
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
 */function Ly(t,e=[]){let n;switch(t){case"Browser":n=pp(mt());break;case"Worker":n=`${pp(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */class uC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hC(t,e={}){return Ps(t,"GET","/v2/passwordPolicy",Gu(t,e))}/**
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
 */const fC=6;class dC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new uC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ha(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Sr(this));const n=e?Ct(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new dC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yu(t){return Ct(t)}class mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=mb(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mC(t){Xu=t}function gC(t){return Xu.loadJS(t)}function _C(){return Xu.gapiScript}function yC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vC(t,e){const n=fu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function EC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TC(t,e,n){const r=Yu(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uy(e),{host:o,port:c}=wC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(kr(u,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,IC()}function Uy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wC(t){const e=Uy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gp(o)}}}function gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
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
 */async function as(t,e){return XP(t,"POST","/v1/accounts:signInWithIdp",Gu(t,e))}/**
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
 */const AC="http://localhost";class Mr extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:AC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */class By{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qi extends By{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends qi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class zn extends qi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Kn extends qi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=_p(r);return new vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_p(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class da extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new da(e,n,r,s)}}function jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(t,i,e,r):i})}async function bC(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
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
 */async function RC(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Sr(r));const s="reauthenticate";try{const i=await Pi(t,jy(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Qu(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
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
 */async function SC(t,e,n=!1){if(rn(t.app))return Promise.reject(Sr(t));const r="signIn",s=await jy(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function PC(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function CC(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}const pa="__sak";/**
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
 */class $y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OC=1e3,kC=10;class qy extends $y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=My(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qy.type="LOCAL";const DC=qy;/**
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
 */class Hy extends $y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hy.type="SESSION";const zy=Hy;/**
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
 */function NC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await NC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function Zu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class VC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Zu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function xC(t){hn().location.href=t}/**
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
 */function Ky(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UC(){return Ky()?self:null}/**
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
 */const Wy="firebaseLocalStorageDb",FC=1,ma="firebaseLocalStorage",Gy="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function BC(){const t=indexedDB.deleteDatabase(Wy);return new Hi(t).toPromise()}function Fl(){const t=indexedDB.open(Wy,FC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ma,{keyPath:Gy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await BC(),e(await Fl()))})})}async function yp(t,e,n){const r=rc(t,!0).put({[Gy]:e,value:n});return new Hi(r).toPromise()}async function jC(t,e){const n=rc(t,!1).get(e),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function vp(t,e){const n=rc(t,!0).delete(e);return new Hi(n).toPromise()}const $C=800,qC=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(UC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new VC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fl();return await yp(e,pa,"1"),await vp(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const HC=Qy;new $i(3e4,6e4);/**
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
 */function zC(t,e){return e?An(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eh extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KC(t){return SC(t.auth,new eh(t),t.bypassAuthState)}function WC(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),RC(n,new eh(t),t.bypassAuthState)}async function GC(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),bC(n,new eh(t),t.bypassAuthState)}/**
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
 */class Jy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KC;case"linkViaPopup":case"linkViaRedirect":return GC;case"reauthViaPopup":case"reauthViaRedirect":return WC;default:Pn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QC=new $i(2e3,1e4);class Xr extends Jy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QC.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const JC="pendingRedirect",No=new Map;class YC extends Jy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await XC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XC(t,e){const n=tO(e),r=eO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZC(t,e){No.set(t._key(),e)}function eO(t){return An(t._redirectPersistence)}function tO(t){return Do(JC,t.config.apiKey,t.name)}async function nO(t,e,n=!1){if(rn(t.app))return Promise.reject(Sr(t));const r=Yu(t),s=zC(r,e),o=await new YC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rO=10*60*1e3;class sO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ep(e))}saveEventToCache(e){this.cachedEventUids.add(Ep(e)),this.lastProcessedEventTime=Date.now()}}function Ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yy(t);default:return!1}}/**
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
 */async function oO(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
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
 */const aO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cO=/^https?/;async function lO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oO(t);for(const n of e)try{if(uO(n))return}catch{}Pn(t,"unauthorized-domain")}function uO(t){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cO.test(n))return!1;if(aO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hO=new $i(3e4,6e4);function Tp(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fO(t){return new Promise((e,n)=>{var r,s,i;function o(){Tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tp(),n(un(t,"network-request-failed"))},timeout:hO.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const c=yC("iframefcb");return hn()[c]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},gC(`${_C()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function dO(t){return Vo=Vo||fO(t),Vo}/**
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
 */const pO=new $i(5e3,15e3),mO="__/auth/iframe",gO="emulator/auth/iframe",_O={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vO(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wu(e,gO):`https://${t.config.authDomain}/${mO}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=yO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function EO(t){const e=await dO(t),n=hn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:vO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_O,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},pO.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const TO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wO=500,IO=600,AO="_blank",bO="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RO(t,e,n,r=wO,s=IO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},TO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=mt().toLowerCase();n&&(c=ky(u)?AO:n),Cy(u)&&(e=e||bO,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,b])=>`${m}${y}=${b},`,"");if(cC(u)&&c!=="_self")return SO(e||"",c),new wp(null);const p=window.open(e||"",c,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new wp(p)}function SO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PO="__/auth/handler",CO="emulator/auth/handler",OO=encodeURIComponent("fac");async function Ip(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof By){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof qi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${OO}=${encodeURIComponent(l)}`:"";return`${kO(t)}?${Mi(c).slice(1)}${u}`}function kO({config:t}){return t.emulator?Wu(t,CO):`https://${t.authDomain}/${PO}`}/**
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
 */const Kc="webStorageSupport";class DO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zy,this._completeRedirectFn=nO,this._overrideRedirectResult=ZC}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ip(e,n,r,Ll(),s);return RO(e,o,Zu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ip(e,n,r,Ll(),s);return xC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EO(e),r=new sO(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return My()||Oy()||Ju()}}const NO=DO;var Ap="@firebase/auth",bp="1.10.1";/**
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
 */class VO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MO(t){hs(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ly(t)},u=new pC(r,s,i,l);return EC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new Dr("auth-internal",e=>{const n=Yu(e.getProvider("auth").getImmediate());return(r=>new VO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Ap,bp,xO(t)),Zn(Ap,bp,"esm2017")}/**
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
 */const LO=5*60,UO=Mg("authIdTokenMaxAge")||LO;let Rp=null;const FO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UO)return;const s=n==null?void 0:n.token;Rp!==s&&(Rp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BO(t=Bg()){const e=fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vC(t,{popupRedirectResolver:NO,persistence:[HC,DC,zy]}),r=Mg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=FO(i.toString());CC(n,o,()=>o(n.currentUser)),PC(n,c=>o(c))}}const s=Vg("auth");return s&&TC(n,`http://${s}`),n}function jO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MO("Browser");const $O={apiKey:"your-api-key",authDomain:"your-auth-domain",projectId:"your-project-id",storageBucket:"your-storage-bucket",messagingSenderId:"your-msg-sender-id",appId:"your-app-id"},Xy=Fg($O),Gn=SP(Xy);BO(Xy);const qO={data(){return{users:[],newUser:{username:"",password:"",role:"user"},selectedUser:null}},methods:{async fetchUsers(){const t=ca(Gn,"users"),e=await _y(t);this.users=e.docs.map(n=>({...n.data(),id:n.id}))},async addUser(){const{username:t,password:e,role:n}=this.newUser,r=await bcrypt.hash(e,10);await Ey(ca(Gn,"users"),{username:t,password:r,role:n,friends:[]}),this.newUser={username:"",password:"",role:"user"},this.fetchUsers()},async updateUser(){if(this.selectedUser){const t=Si(Gn,"users",this.selectedUser.id);await yy(t,{username:this.selectedUser.username,role:this.selectedUser.role}),this.selectedUser=null,this.fetchUsers()}},async deleteUser(t){const e=Si(Gn,"users",t);await vy(e),this.fetchUsers()},editUser(t){this.selectedUser={...t}}},created(){this.fetchUsers()}},HO=["onClick"],zO=["onClick"];function KO(t,e,n,r,s,i){return At(),Nt("div",null,[e[9]||(e[9]=_e("h2",null,"Admin Panel",-1)),_e("div",null,[e[6]||(e[6]=_e("h3",null,"Add New User",-1)),_e("form",{onSubmit:e[3]||(e[3]=Um((...o)=>i.addUser&&i.addUser(...o),["prevent"]))},[Zs(_e("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newUser.username=o),type:"text",placeholder:"Username",required:""},null,512),[[zo,s.newUser.username]]),Zs(_e("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.newUser.password=o),type:"password",placeholder:"Password",required:""},null,512),[[zo,s.newUser.password]]),Zs(_e("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.newUser.role=o)},e[4]||(e[4]=[_e("option",{value:"user"},"User",-1),_e("option",{value:"admin"},"Admin",-1)]),512),[[$T,s.newUser.role]]),e[5]||(e[5]=_e("button",{type:"submit"},"Add User",-1))],32)]),_e("div",null,[e[8]||(e[8]=_e("h3",null,"Users",-1)),_e("table",null,[e[7]||(e[7]=_e("thead",null,[_e("tr",null,[_e("th",null,"Username"),_e("th",null,"Role"),_e("th",null,"Actions")])],-1)),_e("tbody",null,[(At(!0),Nt(Ft,null,Yc(s.users,o=>(At(),Nt("tr",{key:o.id},[_e("td",null,on(o.username),1),_e("td",null,on(o.role),1),_e("td",null,[_e("button",{onClick:c=>i.editUser(o)},"Edit",8,HO),_e("button",{onClick:c=>i.deleteUser(o.id)},"Delete",8,zO)])]))),128))])])])])}const WO=Es(qO,[["render",KO],["__scopeId","data-v-8c048f9a"]]),GO={data(){return{friends:[]}},methods:{async fetchFriends(){const t=Og();await t.fetchFriends(),this.friends=t.friends}},created(){this.fetchFriends()}};function QO(t,e,n,r,s,i){return At(),Nt("div",null,[e[0]||(e[0]=_e("h2",null,"Your Friends' Activities",-1)),(At(!0),Nt(Ft,null,Yc(s.friends,o=>(At(),Nt("div",{key:o.id},[_e("h3",null,on(o.username),1),(At(!0),Nt(Ft,null,Yc(o.activities,c=>(At(),Nt("div",{key:c.id},[_e("p",null,on(c.type)+" - "+on(c.duration)+" mins",1)]))),128))]))),128))])}const JO=Es(GO,[["render",QO]]),YO=Hm("activity",{state:()=>({activities:[]}),actions:{async fetchActivities(){const t=await _y(ca(Gn,"activities"));this.activities=t.docs.map(e=>({...e.data(),id:e.id}))},async addActivity(t,e,n,r){await Ey(ca(Gn,"activities"),{user:t,type:e,duration:n,calories:r,date:new Date}),this.fetchActivities()},async updateActivity(t,e){const n=Si(Gn,"activities",t);await yy(n,e),this.fetchActivities()},async deleteActivity(t){const e=Si(Gn,"activities",t);await vy(e),this.fetchActivities()}}}),XO={computed:{totalActivities(){return this.activities.length},totalDuration(){return this.activities.reduce((t,e)=>t+e.duration,0)},totalCalories(){return this.activities.reduce((t,e)=>t+e.calories,0)}},data(){return{activities:[]}},methods:{async fetchActivities(){const t=YO();this.activities=t.activities}},created(){this.fetchActivities()}};function ZO(t,e,n,r,s,i){return At(),Nt("div",null,[e[0]||(e[0]=_e("h2",null,"Activity Statistics",-1)),_e("p",null,"Total Activities: "+on(i.totalActivities),1),_e("p",null,"Total Duration: "+on(i.totalDuration)+" minutes",1),_e("p",null,"Total Calories: "+on(i.totalCalories)+" kcal",1)])}const ek=Es(XO,[["render",ZO]]),tk=iI({history:Vw("/"),routes:[{path:"/",component:jA},{path:"/dashboard",component:HA,meta:{requiresAuth:!0}},{path:"/admin",component:WO,meta:{requiresAuth:!0,requiresAdmin:!0}},{path:"/friends",component:JO,meta:{requiresAuth:!0}},{path:"/stats",component:ek,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]}),th=Fm(zm);console.log("Bootstrapping Vue app...");Fm(zm).mount("#app");th.use(QT());th.use(tk);th.mount("#app");
//# sourceMappingURL=index-Dh_ZGOc1.js.map
