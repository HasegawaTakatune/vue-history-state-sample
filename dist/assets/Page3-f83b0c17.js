import{d as i,f as p,g as b,c as d,a as o,w as a,v as r,o as u,r as c}from"./index-eb170188.js";import{H as m}from"./HistoryStorage-dace9654.js";const _=o("h1",null,"ステップ３",-1),h={class:"input-wrapper"},f=o("label",{for:"hobby"},"趣味",-1),y={class:"input-wrapper"},v=o("label",{for:"memo"},"趣味",-1),k=i({__name:"Page3",setup(x){const e=p({hobby:"",memo:""}),l=()=>{m.Save(e),c.push({name:"page1"})};return b(()=>{const t=m.Get();e.hobby=(t==null?void 0:t.hobby)??"",e.memo=(t==null?void 0:t.memo)??""}),(t,s)=>(u(),d("div",null,[_,o("div",h,[f,a(o("input",{type:"text",id:"hobby","onUpdate:modelValue":s[0]||(s[0]=n=>e.hobby=n)},null,512),[[r,e.hobby]])]),o("div",y,[v,a(o("textarea",{id:"memo",cols:"30",rows:"10","onUpdate:modelValue":s[1]||(s[1]=n=>e.memo=n)},null,512),[[r,e.memo]])]),o("button",{onClick:l},"最初へ戻る")]))}});export{k as default};
