import{E as C,c as E,b as I,a as N}from"./el-button-40e47406.js";import{u as T,_ as V,E as B,v as P,c as n}from"./el-message-6c40d66f.js";import"./el-select-bb785d0c.js";import"./el-tooltip-4ed993c7.js";import{d as k,a as A,c as S,e as t,w as l,a9 as $,g as z,J as D,f as e,v as L,b as M,o as _,h as Q,_ as F}from"./index-b12d39e2.js";const K={class:"footer"},q=k({__name:"index",setup(G){const c=()=>new Promise(s=>{setTimeout(()=>{s({total:Math.floor(Math.random()*1e3),list:Array.from({length:10}).map(()=>({date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:`CA 90036${new Date().getTime()}`,tag:"Home"}))})},1500)}),{total:f,loading:d,tableData:g,handleQuery:r}=T(c),[a,p]=A({userId:"",pageSize:10,pageNum:1}),m=()=>{p({...a,pageNum:1}),r(a)},b=s=>{p({...a,...s}),r(a)};return r(a),(s,o)=>{const v=E,u=I,y=N,x=C,h=B,w=P;return _(),S("div",null,[t(x,{inline:!0,"label-suffix":":",onSubmit:o[2]||(o[2]=$(()=>{},["prevent"])),onKeydown:o[3]||(o[3]=z(i=>m(),["enter"]))},{default:l(()=>[t(u,{label:"好友昵称"},{default:l(()=>[t(v,{modelValue:e(a).userId,"onUpdate:modelValue":o[0]||(o[0]=i=>e(a).userId=i),clearable:"",placeholder:"请输入好友昵称"},null,8,["modelValue"])]),_:1}),t(u,null,{default:l(()=>[t(y,{type:"primary",onClick:o[1]||(o[1]=i=>m()),loading:e(d)},{default:l(()=>[Q("搜索")]),_:1},8,["loading"])]),_:1})]),_:1}),D((_(),L(h,{data:e(g)},{default:l(()=>[t(e(n),{type:"index","min-width":"50",label:"序号"}),t(e(n),{prop:"date",label:"日期"}),t(e(n),{prop:"state",label:"所在州"}),t(e(n),{prop:"city",label:"城市"}),t(e(n),{prop:"address",label:"地址"}),t(e(n),{prop:"zip",label:"压缩类型"}),t(e(n),{prop:"tag",label:"标签"})]),_:1},8,["data"])),[[w,e(d)]]),M("div",K,[t(V,{pagination:e(a),total:e(f),onPageChange:b},null,8,["pagination","total"])])])}}});const O=F(q,[["__scopeId","data-v-c607019f"]]);export{O as default};
