import{j as s,L as W,bs as N,ce as G,s as v,aa as $,a6 as F,bw as z,r as j,a5 as q,cI as A,cU as B,co as K,cp as Q,aW as X}from"./vendor-48260ac4.js";import{ai as T,t as J,v as Y,w as Z,c0 as ee,L as se,X as H,G as w,bB as _,q as D,H as te,c1 as k,bc as ae,c2 as ne,c3 as re,c4 as ie,u as ce,c5 as V,c6 as x,bD as y,c7 as U,c8 as O,d as oe,c9 as le,E as de,aA as ue,W as he,P as pe,a0 as xe,ca as fe,cb as Se,cc as ge}from"./index-681e9271.js";import{E as me}from"./index-933fa77d.js";const Ee=({value:e,setValue:l,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=T.useUser(),u=async r=>t?await Z(r):await ee(r,"",1,20);return s.jsx(J,{value:e,width:"100%",setValue:l,onHintClick:o(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(W,{}):t?s.jsx(N,{}):s.jsx(G,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=v($).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?se.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),we=v.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ce=v.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Me=({route:e,collapsed:l=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:l,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(w,{gap:"8px",children:[s.jsx(we,{children:u}),!l&&s.jsx(Ce,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:l,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=_.useSchedule(),r=F(),{data:{user:n}}=T.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),l!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(w,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(k??{}).map(S=>{const h=k[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Me,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},ke=()=>{const{data:{user:e}}=T.useUser(),{data:{filter:l,view:o,errorInData:d}}=_.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=q(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",C=n.pathname.includes(re),b=n.pathname.includes(ie),E=C||b,{open:I}=ce(),m=()=>{l&&p.push(U(O,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===V.month&&!E&&x.changeView(V.day)},[o,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?y.getGroupScheduleFx({group:i}):y.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const R=()=>{y.getScheduleFx(e)},M=()=>c=>{(c==null?void 0:c.id)===(e==null?void 0:e.group)&&m(),c!=null&&c.id&&(n.pathname.split("/")[2]==="retake"?p.push(U(O,{page:"current",filter:c.value})):p.push(U(O,{page:n.pathname.split("/")[2],filter:c.value})))},L=c=>{x.setSearchValue(c)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:C,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{oe.evokePopUpMessage({message:d,type:"failure",time:le.ten_seconds})},handleValue:L,onHintClick:M,handleReturnToMySchedule:m,handleLoad:R,handleOpenSideMenu:()=>{a?I(s.jsx(w,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:M,handleValue:L})})):r(c=>!c)}}},ve=v.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",de.isMobile),be=e=>s.jsx(ve,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Te=()=>{const{data:{view:e,schedule:l,externalSchedule:o,errorInData:d},loading:t,error:a}=_.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:C,handleOpenSideMenu:b,handleErrorClick:E}=ke();return s.jsx(he,{loading:t,load:C,error:a,data:t?o:l,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(w,{w:"fit-content",gap:"20px",children:[s.jsx(me,{visible:!!d,onClick:E}),s.jsx(D,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:b})]}),children:u&&s.jsxs(w,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(be,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(K,{children:[Object.keys(k??{}).map(I=>{const{path:m,id:R,Component:M}=k[I];return s.jsx(Q,{path:m,children:s.jsx(M,{})},R)}),s.jsx(X,{to:ge})]})]})})})};export{Te as default};
