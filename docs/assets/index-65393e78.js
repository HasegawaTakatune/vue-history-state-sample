import{d as i,o as d,c as u,a,t as f,b as l,u as m,F as g,R as y,e as h,r as v}from"./index-0e3030ec.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const b={class:"greetings"},x={class:"green"},A=i({__name:"HelloWorld",props:{msg:null},setup(r){return(o,s)=>(d(),u("div",b,[a("h1",x,f(r.msg),1)]))}});const _=(r,o)=>{const s=r.__vccOpts||r;for(const[n,e]of o)s[n]=e;return s},L=_(A,[["__scopeId","data-v-d854f1db"]]),N={class:"wrapper"},O=i({__name:"App",setup(r){return(o,s)=>(d(),u(g,null,[a("header",null,[a("div",N,[l(L,{msg:"Vue history storage sample"})])]),l(m(y))],64))}});const V=_(O,[["__scopeId","data-v-e8f8c486"]]);const p=h(V);p.use(v);p.mount("#app");