import{j as e,i as c,r as p,aG as g}from"./vendor-60fdf703.js";import{S as h}from"./index-fdd1ef98.js";import{s as i,e as l,g as j}from"./article-884cc4ab.js";import{J as r,d as n,T as x,b4 as d,x as m,h as w,P as b,B as u}from"./index-3e2d0793.js";import"./create-checkbox-field-00e2296f.js";const v=()=>{const{isMobile:s}=r();return e.jsxs(n,{d:"column",gap:"0.5rem",mw:"calc(800px + 1rem)",children:[e.jsxs(n,{gap:"1rem",ai:"flex-start",d:s?"column":"row",children:[e.jsx(S,{}),e.jsx(M,{})]}),e.jsx(k,{})]})},S=()=>{const{isMobile:s}=r(),[o,t]=c([i.scopusFile,l.setScopusFile]);return e.jsxs(n,{d:"column",w:s?"100%":"50%",mw:s?"100%":"400px",children:[e.jsx(x,{size:4,align:"left",children:"Scopus"}),e.jsx(d,{files:o,isActive:!0,setFiles:t,maxFiles:1,formats:["csv"]})]})},M=()=>{const{isMobile:s}=r(),[o,t]=c([i.wosFile,l.setWosFile]);return e.jsxs(n,{d:"column",w:s?"100%":"50%",mw:s?"100%":"400px",children:[e.jsx(x,{size:4,align:"left",children:"WoS"}),e.jsx(d,{files:o,isActive:!0,setFiles:t,maxFiles:1,formats:["csv"]})]})},k=()=>{const{close:s}=m(),[o,t,f,a,F]=c([i.scopusFile,i.wosFile,l.uploadFiles,i.filesUploaded,i.uploadLoading]);return p.useEffect(()=>{a&&s()},[a]),e.jsx(w,{text:"Загрузить",action:()=>{f({scopusFile:o[0],wosFile:t[0]})},completed:a,isLoading:F,popUpFailureMessage:"Необходимо загрузить оба файла!",background:"var(--reallyBlue)",height:"36px",width:"108px",isActive:o.length>0&&t.length>0})},I=()=>{const{open:s}=m(),[o,t]=c([l.pageMounted,l.modalOpened]);return p.useEffect(()=>{o()},[]),e.jsxs(b,{outerPadding:"10px",height:"100%",topRightCornerElement:e.jsx(u,{onClick:()=>{t(),s(e.jsx(v,{}),"Загрузить данные")},text:"Загрузить",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(g,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[e.jsx(h,{columns:j()}),e.jsx(n,{jc:"flex-end",w:"100%",children:e.jsx(u,{onClick:()=>{},text:"Сохранить",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px",isActive:!1})})]})};export{I as default};
