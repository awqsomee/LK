import{j as e,n as a,r as p,M as g}from"./vendor-a2a65e85.js";import{aN as r,r as l,T as x,aI as d,u as m,S as h,N as j,B as u}from"./index-6bf86a52.js";import{s as i,e as n,g as w}from"./article-e25cd04f.js";import{S as v}from"./index-10715062.js";import"./create-checkbox-field-bf544b3d.js";const S=()=>{const{isMobile:s}=r();return e.jsxs(l,{d:"column",gap:"0.5rem",mw:"calc(800px + 1rem)",children:[e.jsxs(l,{gap:"1rem",ai:"flex-start",d:s?"column":"row",children:[e.jsx(b,{}),e.jsx(M,{})]}),e.jsx(k,{})]})},b=()=>{const{isMobile:s}=r(),[o,t]=a([i.scopusFile,n.setScopusFile]);return e.jsxs(l,{d:"column",w:s?"100%":"50%",mw:s?"100%":"400px",children:[e.jsx(x,{size:4,align:"left",children:"Scopus"}),e.jsx(d,{files:o,isActive:!0,setFiles:t,maxFiles:1,formats:["csv"]})]})},M=()=>{const{isMobile:s}=r(),[o,t]=a([i.wosFile,n.setWosFile]);return e.jsxs(l,{d:"column",w:s?"100%":"50%",mw:s?"100%":"400px",children:[e.jsx(x,{size:4,align:"left",children:"WoS"}),e.jsx(d,{files:o,isActive:!0,setFiles:t,maxFiles:1,formats:["csv"]})]})},k=()=>{const{close:s}=m(),[o,t,f,c,F]=a([i.scopusFile,i.wosFile,n.uploadFiles,i.filesUploaded,i.uploadLoading]);return p.useEffect(()=>{c&&s()},[c]),e.jsx(h,{text:"Загрузить",action:()=>{f({scopusFile:o[0],wosFile:t[0]})},completed:c,isLoading:F,popUpFailureMessage:"Необходимо загрузить оба файла!",background:"var(--reallyBlue)",height:"36px",width:"108px",isActive:o.length>0&&t.length>0})},A=()=>{const{open:s}=m(),[o,t]=a([n.pageMounted,n.modalOpened]);return p.useEffect(()=>{o()},[]),e.jsxs(j,{outerPadding:"10px",height:"100%",topRightCornerElement:e.jsx(u,{onClick:()=>{t(),s(e.jsx(S,{}),"Загрузить данные")},text:"Загрузить",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(g,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[e.jsx(v,{columns:w()}),e.jsx(l,{jc:"flex-end",w:"100%",children:e.jsx(u,{onClick:()=>{},text:"Сохранить",background:"var(--reallyBlue)",textColor:"#fff",minWidth:"35px",height:"36px",isActive:!1})})]})};export{A as default};
