import{s as k,n as j,j as e,cM as D,r as x,D as M,M as u}from"./vendor-5ea71f95.js";import{a as d,g as P,b as f}from"./article-d6303f4a.js";import{bn as g,G as i,V as v,h as r,u as y,_ as I,P as S,X as z,q as c,r as m}from"./index-fab43839.js";import"./create-checkbox-field-8ef8ba39.js";const B=()=>{const t=j(d.details),{isMobile:l}=g();return t?e.jsx(i,{d:"column",gap:"0.5rem",mw:"calc(800px + 1rem)",children:e.jsxs(i,{gap:"1rem",ai:"flex-start",d:l?"column":"row",children:[e.jsx(p,{title:"Scopus",titles:t.titles.scopus,data:t.data.scopus}),e.jsx(p,{title:"WoS",titles:t.titles.wos,data:t.data.wos})]})}):e.jsx(i,{jc:"center",children:e.jsx(v,{})})},p=({title:t,titles:l,data:s})=>{const{isMobile:a}=g();return e.jsxs(i,{w:a?"100%":"50%",ai:"flex-start",d:"column",$wrap:!0,gap:"1rem",children:[e.jsx(r,{align:"left",size:2,children:t}),Object.entries(l).map(([n,o])=>e.jsx(E,{title:o,data:s[n]},n))]})},E=({title:t,data:l})=>l?e.jsxs(i,{ai:"flex-start",d:"column",gap:"0.5rem",children:[e.jsx(r,{align:"left",size:4,children:t}),e.jsx(W,{children:l})]}):null,W=k.p.withConfig({componentId:"sc-12wg6tg-0"})(["word-wrap:break-word;max-width:100%;"]),q=()=>{const{open:t}=y(),{id:l}=D(),[s,a,n,o]=j([d.article,d.loading,f.pageMounted,f.getDetailsClicked]),[h,w]=x.useState(P());x.useEffect(()=>{n(l)},[]);const C=()=>{o(l),t(e.jsx(B,{}),"Полная информация о статье")};return a?null:s?e.jsxs(S,{outerPadding:"10px",children:[e.jsx(r,{align:"left",size:2,children:s==null?void 0:s.articleTitle}),e.jsxs(i,{jc:"space-between",ai:"flex-start",children:[e.jsxs(z,{align:"left",children:["ID публикации: ",s==null?void 0:s.id]}),e.jsx(c,{onClick:()=>{w(b=>[...b,{title:"Новое поле",field:"",showFull:!0}])},text:"Добавить поле",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"150px",height:"36px",icon:e.jsx(u,{})})]}),e.jsx(m,{loading:a,columns:h,data:[s],maxOnPage:7}),e.jsx(r,{align:"left",size:2,children:"Список авторов из Московского Политеха"}),e.jsx(m,{loading:a,columns:F,data:null,maxOnPage:7}),e.jsx(c,{onClick:()=>{},text:"Добавить",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(u,{}),minWidth:"35px",height:"36px",isActive:!1}),e.jsx(i,{w:"100%",jc:"center",children:e.jsx(c,{onClick:C,text:"Отобразить все поля данных",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px"})})]}):e.jsx(I,{size:"60px",text:"Ничего не было найдено",image:e.jsx(M,{})})},F=[{title:"№",field:"index"},{title:"Фамилия",field:"surname"},{title:"Имя",field:"fistname"},{title:"Отчество",field:"patronymic"},{title:"Структурное подразделение",field:"division"},{title:"Факультет",field:"faculty"},{title:"WoS researcherID",field:"wosId"},{title:"Scopus authorID",field:"scopusId"}];export{q as default};
