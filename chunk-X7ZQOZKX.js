import{b as H,c as B}from"./chunk-23I7JAYG.js";import{Q as y,R as U,S as W,X as $,Z,ba as P,eb as G,fb as q,gb as J,ua as Q}from"./chunk-G2JFIW4P.js";import{Cb as M,Db as T,Gc as V,Ib as l,La as I,Nb as O,Ob as m,Pa as x,Qb as F,Tc as A,Wc as z,Xb as C,ac as g,bc as u,cc as v,dc as w,ec as _,ga as a,la as N,lc as d,na as D,q as k,qb as c,qc as j,rc as L,sc as R,vb as s,w as E,x as f,xc as S,yc as b}from"./chunk-JQQRL62T.js";var oe=["switchElement"];function re(i,r){i&1&&v(0,"nz-icon",3)}function se(i,r){if(i&1&&(w(0),S(1),_()),i&2){let o=d(2);c(),b(o.nzCheckedChildren)}}function ae(i,r){if(i&1&&l(0,se,2,1,"ng-container",6),i&2){let o=d();m("nzStringTemplateOutlet",o.nzCheckedChildren)}}function ce(i,r){if(i&1&&(w(0),S(1),_()),i&2){let o=d(2);c(),b(o.nzUnCheckedChildren)}}function le(i,r){if(i&1&&l(0,ce,2,1,"ng-container",6),i&2){let o=d();m("nzStringTemplateOutlet",o.nzUnCheckedChildren)}}var de="switch",he=(()=>{let i,r=[],o=[];return class p{static{let e=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[W()],E(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,n)=>{t.nzSize=n}},metadata:e},r,o),e&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:e})}nzConfigService;host;ngZone;cdr;focusMonitor;directionality;_nzModuleName=de;isChecked=!1;onChange=()=>{};onTouched=()=>{};switchElement;nzLoading=!1;nzDisabled=!1;nzControl=!1;nzCheckedChildren=null;nzUnCheckedChildren=null;nzSize=f(this,r,"default");nzId=(f(this,o),null);dir="ltr";destroy$=new k;isNzDisableFirstChange=!0;updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,t,n,h,X,Y){this.nzConfigService=e,this.host=t,this.ngZone=n,this.cdr=h,this.focusMonitor=X,this.directionality=Y}ngOnInit(){this.directionality.change.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,y(this.host.nativeElement,"click").pipe(a(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),y(this.switchElement.nativeElement,"keydown").pipe(a(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:t}=e;t!==37&&t!==39&&t!==32&&t!==13||(e.preventDefault(),this.ngZone.run(()=>{t===37?this.updateValue(!1):t===39?this.updateValue(!0):(t===32||t===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(a(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static \u0275fac=function(t){return new(t||p)(s(U),s(x),s(I),s(A),s(Q),s(P))};static \u0275cmp=M({type:p,selectors:[["nz-switch"]],viewQuery:function(t,n){if(t&1&&j(oe,7),t&2){let h;L(h=R())&&(n.switchElement=h.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",z],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzControl:[2,"nzControl","nzControl",z],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],features:[V([{provide:J,useExisting:N(()=>p),multi:!0}])],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(g(0,"button",1,0)(2,"span",2),l(3,re,1,0,"nz-icon",3),u(),g(4,"span",4),l(5,ae,1,1,"ng-container")(6,le,1,1,"ng-container"),u(),v(7,"div",5),u()),t&2&&(F("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),m("disabled",n.nzDisabled)("nzWaveExtraNode",!0),O("id",n.nzId),c(3),C(n.nzLoading?3:-1),c(2),C(n.isChecked?5:6))},dependencies:[B,H,Z,$,q,G],encapsulation:2,changeDetection:0})}})(),je=(()=>{class i{static \u0275fac=function(K){return new(K||i)};static \u0275mod=T({type:i});static \u0275inj=D({imports:[he]})}return i})();export{he as a,je as b};
