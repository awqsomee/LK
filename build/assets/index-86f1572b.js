import{j as s,L as G,bs as $,ce as q,s as I,aa as z,a6 as D,bw as A,r as w,a5 as B,cI as J,cU as K,co as Q,cp as X,aW as Y}from"./vendor-8312535b.js";import{ai as L,t as Z,v as ee,w as se,ch as te,L as ae,X as P,G as C,bT as V,q as W,H as ne,ci as b,bx as re,cj as ie,ck as ce,cl as oe,u as le,cm as H,cn as x,bV as U,co as O,cp as _,d as de,cq as ue,E as he,aJ as pe,W as xe,P as fe,a0 as Se,cr as ge,cs as me,ct as Ee}from"./index-3ed27df5.js";import{E as je}from"./index-d959c17f.js";const we=({value:e,setValue:l,onHintClick:o,onValueEmpty:d})=>{const a=/\d/.test(e),{data:{user:n}}=L.useUser(),u=async r=>a?await se(r):await te(r,"",1,20);return s.jsx(Z,{value:e,width:"100%",setValue:l,onHintClick:o(a),placeholder:"Поиск",customMask:a?ee.groupMask:void 0,transformRequest:a?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(G,{}):a?s.jsx($,{}):s.jsx(q,{}),onValueEmpty:(n==null?void 0:n.user_status)==="staff"?d:void 0})},Ce=I(z).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?ae.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),Me=I.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),ke=I.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),ve=({route:e,collapsed:l=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(P,{children:"Ссылка не определена"});const{path:a,title:n,icon:u,color:r,shortTitle:t}=e,h=f=>{if(o)return f.preventDefault()};return s.jsx(Ce,{collapsed:l,disabled:o,isCurrent:d,to:a,title:t!=null?t:n,color:r,onClick:h,children:s.jsxs(C,{gap:"8px",children:[s.jsx(Me,{children:u}),!l&&s.jsx(ke,{isCurrent:d,children:t!=null?t:n})]})})},N=({handleReturnToMySchedule:e,baseSearchValue:l,handleValue:o,onHintClick:d,isSideMenuOpen:a})=>{var f;const{data:{searchValue:n,filter:u}}=V.useSchedule(),r=D(),{data:{user:t}}=L.useUser(),h=(t==null?void 0:t.user_status)==="staff";return s.jsxs(s.Fragment,{children:[a&&s.jsxs(s.Fragment,{children:[s.jsx(P,{children:"Группа или преподаватель"}),s.jsx(we,{value:n,setValue:o,onHintClick:d})]}),l!==n&&s.jsx(W,{text:a&&"Мое расписание",onClick:e,icon:s.jsx(A,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(ne,{margin:"16px 0",width:"100%"}),s.jsx(C,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys((f=b)!=null?f:{}).map(p=>{const i=b[p],{id:m,path:S}=i,g=u?`${S}/${u}`:S;return m==="schedule-session"&&h?null:s.jsx(ve,{collapsed:!a,isCurrent:r.pathname===g,route:{...i,path:g}},m)})})]})},be=()=>{var T,F;const{data:{user:e}}=L.useUser(),{data:{filter:l,view:o,errorInData:d}}=V.useSchedule(),{isTablet:a,isMobile:n}=re(),[u,r]=w.useState(!0),t=D(),h=B(),f=t.pathname!==ie,p=t.pathname.split("/"),i=p.length===4?p[p.length-1]:null,m=i?/\d/.test(i):!1,S=(e==null?void 0:e.user_status)==="staff"?(T=e==null?void 0:e.fullName)!=null?T:"":(F=e==null?void 0:e.group)!=null?F:"",g=t.pathname.includes(ce),R=t.pathname.includes(oe),j=g||R,{open:M}=le(),E=()=>{l&&h.push(O(_,{page:t.pathname.split("/")[2]})),x.setSearchValue(S),x.setFilter(""),x.resetExternalSchedule()};w.useLayoutEffect(()=>{o===H.month&&!j&&x.changeView(H.day)},[o,j]),w.useEffect(()=>{r(!(n||a))},[a,n]),w.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),m?U.getGroupScheduleFx({group:i}):U.getTeacherScheduleFx({fullName:i})):E()},[i]),w.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const y=()=>{U.getScheduleFx(e)},k=()=>c=>{(c==null?void 0:c.id)===(e==null?void 0:e.group)&&E(),c!=null&&c.id&&(t.pathname.split("/")[2]==="retake"?h.push(O(_,{page:"current",filter:c.value})):h.push(O(_,{page:t.pathname.split("/")[2],filter:c.value})))},v=c=>{x.setSearchValue(c)};return{isSideMenuOpen:u,shouldShowSlider:f,isMobile:n,isSessionPage:g,baseSearchValue:S,showMonth:j,handleErrorClick:()=>{de.evokePopUpMessage({message:d,type:"failure",time:ue.ten_seconds})},handleValue:v,onHintClick:k,handleReturnToMySchedule:E,handleLoad:y,handleOpenSideMenu:()=>{n?M(s.jsx(C,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(N,{isSideMenuOpen:!0,baseSearchValue:S,handleReturnToMySchedule:E,onHintClick:k,handleValue:v})})):r(c=>!c)}}},Ie=I.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",he.isMobile),Re=e=>s.jsx(Ie,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(N,{...e})}),Ve=()=>{var M;const{data:{view:e,schedule:l,externalSchedule:o,errorInData:d},loading:a,error:n}=V.useSchedule(),{allRoutes:u}=pe.useMenu(),{isSideMenuOpen:r,shouldShowSlider:t,showMonth:h,baseSearchValue:f,isMobile:p,onHintClick:i,handleValue:m,handleReturnToMySchedule:S,handleLoad:g,handleOpenSideMenu:R,handleErrorClick:j}=be();return s.jsx(xe,{loading:a,load:g,error:n,data:a?o:l,children:s.jsx(fe,{topCenterElement:t&&s.jsx(Se,{size:"small",sliderWidth:"240px",pages:h?ge:me,currentPage:e,appearance:!p,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(C,{w:"fit-content",gap:"20px",children:[s.jsx(je,{visible:!!d,onClick:j}),s.jsx(W,{icon:p?s.jsx(J,{}):s.jsx(K,{}),width:"36px",height:"36px",onClick:R})]}),children:u&&s.jsxs(C,{gap:"16px",ai:"flex-start",children:[!p&&s.jsx(Re,{isSideMenuOpen:r,baseSearchValue:f,handleReturnToMySchedule:S,onHintClick:i,handleValue:m}),s.jsxs(Q,{children:[Object.keys((M=b)!=null?M:{}).map(E=>{const{path:y,id:k,Component:v}=b[E];return s.jsx(X,{path:y,children:s.jsx(v,{})},k)}),s.jsx(Y,{to:Ee})]})]})})})};export{Ve as default};
