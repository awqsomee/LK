import{aw as h,i as x,r as f,j as e,aG as g}from"./vendor-60fdf703.js";import{S as j}from"./index-fdd1ef98.js";import{e as c,s as a}from"./article-884cc4ab.js";import{P as C,du as k,d as u,B as i}from"./index-3e2d0793.js";import"./create-checkbox-field-00e2296f.js";const A=()=>{const t=h(),[l,o]=x([c.pageMounted,a.columns]);return f.useEffect(()=>{l()},[]),e.jsxs(C,{outerPadding:"10px",height:"100%",children:[e.jsx(b,{}),e.jsx(j,{columns:o,onRowClick:r=>{t.push(k+`/${r.id}`)}})]})},b=()=>{const[t,l,o,r,m]=x([c.selectArticle,a.selectedArticles,a.articles,a.columns,c.setColumns]),[p,n]=f.useState(!1);return e.jsxs(u,{jc:"space-between",w:"100%",children:[e.jsxs(u,{gap:"1.5rem",children:[e.jsx(i,{onClick:()=>{p?(o.map((d,s)=>{l.has(s)&&t(s)}),n(!1)):(o.map((d,s)=>{l.has(s)||t(s)}),n(!0))},text:"Выбрать все",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px"}),e.jsx(i,{onClick:()=>{},text:"Экспорт отчета",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px",isActive:!1})]}),e.jsx(i,{onClick:()=>{m([...r,{title:"Новое поле",field:"",showFull:!0}])},text:"Добавить поле",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"150px",height:"36px",icon:e.jsx(g,{})})]})};export{A as default};
