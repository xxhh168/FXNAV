import{d,q as w}from"./chunk-NY37UJG5.js";import{$ as y,Hb as S}from"./chunk-QWP4DFWQ.js";import{Bd as c,Cd as v,Id as l,Jd as k,Ud as u,Wd as m,f as _,fe as a,g as b,ie as h}from"./chunk-AC2XWZQF.js";var p=_(k());function A(e){function o(r){return!(r.ownVisible&&!u)}e=e.filter(o);for(let r=0;r<e.length;r++){let t=e[r];Array.isArray(t.nav)&&(t.nav=t.nav.filter(o),A(t.nav))}return e}function T(){return b(this,null,function*(){if(m)return;function e(t){t.forEach(i=>{a.push(i)}),y.emit("WEB_FINISH"),window.__FINISHED__=!0}let o=A(a);if(a.splice(0,a.length),!u)return e(o);if(window.localStorage.getItem(l.s_url)!==c.datetime){let t=[l.token,l.isDark,l.authCode,l.location],i=window.localStorage.length;for(let n=0;n<i;n++){let f=window.localStorage.key(n);t.includes(f)||window.localStorage.removeItem(f)}window.localStorage.setItem(l.s_url,c.datetime),p.default.removeItem(l.website),e(o),u&&setTimeout(()=>{y.emit("NOTIFICATION",{type:"success",title:h("_buildSuccess"),content:c.datetime,config:{nzDuration:0}})},1e3);return}try{let t=(yield p.default.getItem(l.website))||o;e(t)}catch{e(o)}})}function g(e){return e=e||a,m?S({content:JSON.stringify(e),path:v}):p.default.setItem(l.website,e)}function F(e){e||=a;let{id:o}=d(),{oneIndex:r,twoIndex:t}=w(o),i=!e[r].nav[t].collapsed;return e[r].nav[t].collapsed=i,e[r].nav[t].nav.map(n=>(n.collapsed=i,n)),m||g(e),i}function H(e){let o=!1;function r(t){for(let i=0;i<t.length;i++){let n=t[i];if(n.name){if(n.id===e){o=!0,t.splice(i,1);break}continue}Array.isArray(n.nav)&&(n.nav=n.nav.filter(f=>f.name&&f.id===e?(o=!0,!1):!0),r(n.nav))}}if(r(a),o){g(a);let{q:t}=d();t&&window.location.reload()}return o}function q(e,o){let r=Object.keys(o),t=!1;function i(n){for(let f=0;f<n.length;f++){let s=n[f];if(s.name){if(s.id===e){t=!0;for(let I of r)s[I]=o[I];break}continue}Array.isArray(s.nav)&&i(s.nav)}}return i(a),g(a),t}export{T as a,g as b,F as c,H as d,q as e};
