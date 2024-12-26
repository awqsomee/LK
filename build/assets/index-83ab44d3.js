import{j as s,L as W,bs as N,ce as G,s as k,aa as $,a6 as F,bw as z,r as j,a5 as q,cI as A,d5 as B,co as J,cp as K,aW as Q}from"./vendor-5ea71f95.js";import{ai as U,t as X,v as Z,w as Y,cn as ee,L as se,X as H,G as w,bZ as _,q as D,H as te,co as v,bn as ae,cp as ne,cq as re,cr as ie,u as oe,cs as V,ct as x,b$ as R,cu as O,cv as T,d as ce,cw as le,E as de,aJ as ue,W as he,P as pe,a1 as xe,cx as fe,cy as Se,cz as ge}from"./index-fab43839.js";import{E as me}from"./index-03c527cb.js";const Ee=({value:e,setValue:l,onHintClick:c,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=U.useUser(),u=async r=>t?await Y(r):await ee(r,"",1,20);return s.jsx(X,{value:e,width:"100%",setValue:l,onHintClick:c(t),placeholder:"Поиск",customMask:t?Z.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(W,{}):t?s.jsx(N,{}):s.jsx(G,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k($).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?se.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),we=k.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ce=k.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Me=({route:e,collapsed:l=!1,disabled:c=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(c)return S.preventDefault()};return s.jsx(je,{collapsed:l,disabled:c,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(w,{gap:"8px",children:[s.jsx(we,{children:u}),!l&&s.jsx(Ce,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:l,handleValue:c,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=_.useSchedule(),r=F(),{data:{user:n}}=U.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:c,onHintClick:d})]}),l!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(w,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(v??{}).map(S=>{const h=v[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Me,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},ve=()=>{const{data:{user:e}}=U.useUser(),{data:{filter:l,view:c,errorInData:d}}=_.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=q(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",C=n.pathname.includes(re),b=n.pathname.includes(ie),E=C||b,{open:I}=oe(),m=()=>{l&&p.push(O(T,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{c===V.month&&!E&&x.changeView(V.day)},[c,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?R.getGroupScheduleFx({group:i}):R.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const y=()=>{R.getScheduleFx(e)},M=()=>o=>{(o==null?void 0:o.id)===(e==null?void 0:e.group)&&m(),o!=null&&o.id&&(n.pathname.split("/")[2]==="retake"?p.push(O(T,{page:"current",filter:o.value})):p.push(O(T,{page:n.pathname.split("/")[2],filter:o.value})))},L=o=>{x.setSearchValue(o)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:C,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{ce.evokePopUpMessage({message:d,type:"failure",time:le.ten_seconds})},handleValue:L,onHintClick:M,handleReturnToMySchedule:m,handleLoad:y,handleOpenSideMenu:()=>{a?I(s.jsx(w,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:M,handleValue:L})})):r(o=>!o)}}},ke=k.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",de.isMobile),be=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Ue=()=>{const{data:{view:e,schedule:l,externalSchedule:c,errorInData:d},loading:t,error:a}=_.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:C,handleOpenSideMenu:b,handleErrorClick:E}=ve();return s.jsx(he,{loading:t,load:C,error:a,data:t?c:l,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(w,{w:"fit-content",gap:"20px",children:[s.jsx(me,{visible:!!d,onClick:E}),s.jsx(D,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:b})]}),children:u&&s.jsxs(w,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(be,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(J,{children:[Object.keys(v??{}).map(I=>{const{path:m,id:y,Component:M}=v[I];return s.jsx(K,{path:m,children:s.jsx(M,{})},y)}),s.jsx(Q,{to:ge})]})]})})})};export{Ue as default};
