import{g as f}from"./chunk-HLCXOGAI.js";import{$ as s}from"./chunk-JS2KUDBR.js";import{ma as i,ra as n}from"./chunk-QXL2FZ7N.js";var a=class o{constructor(e){this.router=e}goUrl(e,t){if(e?.stopPropagation?.(),e?.preventDefault?.(),typeof t!="string"||!t)return;let r=t[0];if(r==="!")return;if(t==="@apply"){s.emit("CREATE_WEB");return}if(r==="@"){this.router.navigate([t.slice(1)]);return}r==="^"?window.open(t.slice(1),"_self"):window.open(t)}static \u0275fac=function(t){return new(t||o)(n(f))};static \u0275prov=i({token:o,factory:o.\u0275fac,providedIn:"root"})};export{a};
