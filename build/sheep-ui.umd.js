(function(n,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis!="undefined"?globalThis:n||self,t(n["sheep-ui"]={},n.Vue))})(this,function(n,t){"use strict";const d={type:{type:String,default:"secondary"},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},tag:{type:String,default:"button"},block:{type:Boolean,default:!1}},r="s",c="_sheep",p=e=>{var s,a;const o=t.getCurrentInstance(),l=(a=(s=o==null?void 0:o.appContext.config.globalProperties[c])==null?void 0:s.classPrefix)!=null?a:r;return e?`${l}-${e}`:l};function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!t.isVNode(e)}var u=t.defineComponent({name:"SButton",props:d,setup(e,{slots:o}){const{type:l,size:s,disabled:a,loading:v,block:m}=t.toRefs(e),i=p("btn"),C=t.computed(()=>[i,`${i}--${l.value}`,`${i}--${s.value}`,`${m.value?"s-btn--block":""}`]);return()=>{const{tag:B}=e,f=o.default?o.default():"\u6309\u94AE";return t.createVNode(B,{class:C.value,disabled:a.value},b(f)?f:{default:()=>[f]})}}}),g={install(e){e.component(u.name,u)}};const y=[g];var S={install(e){y.forEach(o=>e.use(o))}};n.Button=u,n.default=S,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});