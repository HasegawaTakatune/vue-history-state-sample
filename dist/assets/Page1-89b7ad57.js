import{d as m,f as p,g as u,c,a as e,w as o,v as i,o as d,r as f}from"./index-eb170188.js";import{H as l}from"./HistoryStorage-dace9654.js";const N=e("h1",null,"ステップ１",-1),_={class:"input-wrapper"},k=e("label",{for:"last-name"},"苗字",-1),v={class:"input-wrapper"},x=e("label",{for:"first-name"},"名前 ",-1),g={class:"input-wrapper"},h=e("label",{for:"nick-name"},"ニックネーム ",-1),V=m({__name:"Page1",setup(w){const t=p({firstName:"",lastName:"",nickName:""}),r=()=>{l.Save(t),f.push({name:"page2"})};return u(()=>{const s=l.Get();t.firstName=(s==null?void 0:s.firstName)??"",t.lastName=(s==null?void 0:s.lastName)??"",t.nickName=(s==null?void 0:s.nickName)??""}),(s,a)=>(d(),c("div",null,[N,e("div",_,[k,o(e("input",{type:"text",id:"last-name","onUpdate:modelValue":a[0]||(a[0]=n=>t.lastName=n)},null,512),[[i,t.lastName]])]),e("div",v,[x,o(e("input",{type:"text",id:"first-name","onUpdate:modelValue":a[1]||(a[1]=n=>t.firstName=n)},null,512),[[i,t.firstName]])]),e("div",g,[h,o(e("input",{type:"text",id:"nick-name","onUpdate:modelValue":a[2]||(a[2]=n=>t.nickName=n)},null,512),[[i,t.nickName]])]),e("button",{onClick:r},"次へ")]))}});export{V as default};
