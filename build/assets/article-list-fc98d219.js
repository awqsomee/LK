import{a5 as h,n as x,r as f,j as e,M as g}from"./vendor-249420f4.js";import{N as j,aO as C,r as u,B as i}from"./index-72b1dbf4.js";import{e as c,s as a}from"./article-11c06f25.js";import{S as k}from"./index-981eb441.js";import"./create-checkbox-field-cd726a82.js";const w=()=>{const t=h(),[l,o]=x([c.pageMounted,a.columns]);return f.useEffect(()=>{l()},[]),e.jsxs(j,{outerPadding:"10px",height:"100%",children:[e.jsx(b,{}),e.jsx(k,{columns:o,onRowClick:r=>{t.push(C+`/${r.id}`)}})]})},b=()=>{const[t,l,o,r,m]=x([c.selectArticle,a.selectedArticles,a.articles,a.columns,c.setColumns]),[p,n]=f.useState(!1);return e.jsxs(u,{jc:"space-between",w:"100%",children:[e.jsxs(u,{gap:"1.5rem",children:[e.jsx(i,{onClick:()=>{p?(o.map((d,s)=>{l.has(s)&&t(s)}),n(!1)):(o.map((d,s)=>{l.has(s)||t(s)}),n(!0))},text:"Выбрать все",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px"}),e.jsx(i,{onClick:()=>{},text:"Экспорт отчета",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px",isActive:!1})]}),e.jsx(i,{onClick:()=>{m([...r,{title:"Новое поле",field:"",showFull:!0}])},text:"Добавить поле",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"150px",height:"36px",icon:e.jsx(g,{})})]})};export{w as default};
