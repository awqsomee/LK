import{s as k,i as j,j as e,cF as v,r as x,w as D,aG as u}from"./vendor-60fdf703.js";import{a as d,b as f,g as P}from"./article-37a935ed.js";import{J as g,d as l,aZ as y,T as n,x as S,Y as B,P as I,S as M,B as c,b5 as m}from"./index-6facb166.js";import"./create-checkbox-field-00e2296f.js";const z=()=>{const t=j(d.details),{isMobile:i}=g();return t?e.jsx(l,{d:"column",gap:"0.5rem",mw:"calc(800px + 1rem)",children:e.jsxs(l,{gap:"1rem",ai:"flex-start",d:i?"column":"row",children:[t.data.scopus&&e.jsx(p,{title:"Scopus",titles:t.titles.scopus,data:t.data.scopus}),t.data.wos&&e.jsx(p,{title:"WoS",titles:t.titles.wos,data:t.data.wos})]})}):e.jsx(l,{jc:"center",children:e.jsx(y,{})})},p=({title:t,titles:i,data:s})=>{const{isMobile:a}=g();return e.jsxs(l,{w:a?"100%":"50%",ai:"flex-start",d:"column",$wrap:!0,gap:"1rem",children:[e.jsx(n,{align:"left",size:2,children:t}),Object.entries(i).map(([r,o])=>e.jsx(E,{title:o,data:s[r]},r))]})},E=({title:t,data:i})=>i?e.jsxs(l,{ai:"flex-start",d:"column",gap:"0.5rem",children:[e.jsx(n,{align:"left",size:4,children:t}),e.jsx(F,{children:i})]}):null,F=k.p.withConfig({componentId:"sc-12wg6tg-0"})(["word-wrap:break-word;max-width:100%;"]),G=()=>{const{open:t}=S(),{id:i}=v(),[s,a,r,o]=j([d.article,d.loading,f.pageMounted,f.getDetailsClicked]),[h,w]=x.useState(P());x.useEffect(()=>{r(i)},[]);const C=()=>{o(i),t(e.jsx(z,{}),"Полная информация о статье")};return a?null:s?e.jsxs(I,{outerPadding:"10px",children:[e.jsx(n,{align:"left",size:2,children:s==null?void 0:s.articleTitle}),e.jsxs(l,{jc:"space-between",ai:"flex-start",children:[e.jsxs(M,{align:"left",children:["ID публикации: ",s==null?void 0:s.id]}),e.jsx(c,{onClick:()=>{w(b=>[...b,{title:"Новое поле",field:"",showFull:!0}])},text:"Добавить поле",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"150px",height:"36px",icon:e.jsx(u,{})})]}),e.jsx(m,{loading:a,columns:h,data:[s],maxOnPage:7}),e.jsx(n,{align:"left",size:2,children:"Список авторов из Московского Политеха"}),e.jsx(m,{loading:a,columns:W,data:null,maxOnPage:7}),e.jsx(c,{onClick:()=>{},text:"Добавить",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(u,{}),minWidth:"35px",height:"36px",isActive:!1}),e.jsx(l,{w:"100%",jc:"center",children:e.jsx(c,{onClick:C,text:"Отобразить все поля данных",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px"})})]}):e.jsx(B,{size:"60px",text:"Ничего не было найдено",image:e.jsx(D,{})})},W=[{title:"№",field:"index"},{title:"Фамилия",field:"surname"},{title:"Имя",field:"fistname"},{title:"Отчество",field:"patronymic"},{title:"Структурное подразделение",field:"division"},{title:"Факультет",field:"faculty"},{title:"WoS researcherID",field:"wosId"},{title:"Scopus authorID",field:"scopusId"}];export{G as default};
