import{E as I,c as V,b as N,a as P}from"./el-button-b6ba8f12.js";import{u as T,_ as k,E as A,v as B,c as n}from"./useQuery-34896052.js";import"./el-select-3578db45.js";import"./el-tooltip-4ed993c7.js";import{d as z,a as D,c as M,e,w as l,P as S,g as $,V as L,f as a,x as Q,b as F,o as c,h as f,_ as K}from"./index-1c34affb.js";import{E as q}from"./el-message-box-49c5212e.js";const G={class:"footer"},H=z({__name:"index",setup(R){const g=()=>new Promise(s=>{setTimeout(()=>{s({total:Math.floor(Math.random()*1e3),list:Array.from({length:10}).map(()=>({date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:`CA 90036${new Date().getTime()}`,tag:"Home"}))})},1500)}),{total:b,loading:d,tableData:y,handleQuery:r}=T(g),[t,p]=D({userId:"",pageSize:10,pageNum:1}),m=()=>{p({...t,pageNum:1}),r(t)},v=()=>{q({type:"success",message:"申请成功"})},x=s=>{p({...t,...s}),r(t)};return r(t),(s,o)=>{const h=V,u=N,_=P,E=I,w=A,C=B;return c(),M("div",null,[e(E,{inline:!0,"label-suffix":":",onSubmit:o[2]||(o[2]=S(()=>{},["prevent"])),onKeydown:o[3]||(o[3]=$(i=>m(),["enter"]))},{default:l(()=>[e(u,{label:"用户ID"},{default:l(()=>[e(h,{modelValue:a(t).userId,"onUpdate:modelValue":o[0]||(o[0]=i=>a(t).userId=i),clearable:""},null,8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(_,{type:"primary",onClick:o[1]||(o[1]=i=>m()),loading:a(d)},{default:l(()=>[f("搜索")]),_:1},8,["loading"])]),_:1})]),_:1}),L((c(),Q(w,{data:a(y)},{default:l(()=>[e(a(n),{type:"index","min-width":"50",label:"序号"}),e(a(n),{prop:"date",label:"日期"}),e(a(n),{prop:"state",label:"所在州"}),e(a(n),{prop:"city",label:"城市"}),e(a(n),{prop:"address",label:"地址"}),e(a(n),{prop:"zip",label:"压缩类型"}),e(a(n),{prop:"tag",label:"标签"}),e(a(n),{label:"操作"},{default:l(()=>[e(_,{type:"primary",size:"default",onClick:v},{default:l(()=>[f("申请好友")]),_:1})]),_:1})]),_:1},8,["data"])),[[C,a(d)]]),F("div",G,[e(k,{pagination:a(t),total:a(b),onPageChange:x},null,8,["pagination","total"])])])}}});const Y=K(H,[["__scopeId","data-v-3e2e54a6"]]);export{Y as default};
