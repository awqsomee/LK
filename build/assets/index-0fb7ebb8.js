var A=Object.defineProperty,q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var P=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,I=(e,a)=>{for(var t in a||(a={}))Z.call(a,t)&&P(e,t,a[t]);if(D)for(var t of D(a))K.call(a,t)&&P(e,t,a[t]);return e},H=(e,a)=>q(e,X(a));var N=(e,a,t)=>new Promise((h,i)=>{var o=n=>{try{r(t.next(n))}catch(c){i(c)}},l=n=>{try{r(t.throw(n))}catch(c){i(c)}},r=n=>n.done?h(n.value):Promise.resolve(n.value).then(o,l);r((t=t.apply(e,a)).next())});import{j as s,ay as Y,bQ as J,cv as ee,s as b,az as se,D as $,cA as te,r as C,ax as ae,a7 as ne,cL as ie,bB as re,bC as oe,bF as le}from"./vendor-8a1e4858.js";import{s as U,aO as ce,Q as ue,N as de,aP as he,X as pe,S as G,f as w,am as L,B as z,D as xe,aQ as g,Z as fe,aR as Se,aS as ge,aT as me,R as ve,aU as W,aV as f,ao as _,aW as O,aX as T,p as Ee,aY as je,a8 as Ce,y as we,W as Me,P as ke,aG as be,aZ as Re,a_ as ye,a$ as Ie,b0 as _e}from"./index-54a7c16c.js";import{E as Oe}from"./index-5ce991fb.js";const Te=({value:e,setValue:a,onHintClick:t,onValueEmpty:h})=>{const i=/\d/.test(e),{data:{user:o}}=U.useUser(),l=r=>N(void 0,null,function*(){return i?yield de(r):yield he(r,"",1,20)});return s.jsx(ce,{value:e,width:"100%",setValue:a,onHintClick:t(i),placeholder:"Поиск",customMask:i?ue.groupMask:void 0,transformRequest:i?void 0:r=>r.fio,request:l,leftIcon:e.length===0?s.jsx(Y,{}):i?s.jsx(J,{}):s.jsx(ee,{}),onValueEmpty:(o==null?void 0:o.user_status)==="staff"?h:void 0})},Ue=b(se).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?pe.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),Le=b.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ve=b.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Fe=({route:e,collapsed:a=!1,disabled:t=!1,isCurrent:h=!1})=>{if(!e)return s.jsx(G,{children:"Ссылка не определена"});const{path:i,title:o,icon:l,color:r,shortTitle:n}=e,c=u=>{if(t)return u.preventDefault()};return s.jsx(Ue,{collapsed:a,disabled:t,isCurrent:h,to:i,title:n!=null?n:o,color:r,onClick:c,children:s.jsxs(w,{gap:"8px",children:[s.jsx(Le,{children:l&&s.jsx(l,{})}),!a&&s.jsx(Ve,{isCurrent:h,children:n!=null?n:o})]})})},B=({handleReturnToMySchedule:e,baseSearchValue:a,handleValue:t,onHintClick:h,isSideMenuOpen:i})=>{const{data:{searchValue:o,filter:l}}=L.useSchedule(),r=$(),{data:{user:n}}=U.useUser(),c=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[i&&s.jsxs(s.Fragment,{children:[s.jsx(G,{children:"Группа или преподаватель"}),s.jsx(Te,{value:o,setValue:t,onHintClick:h})]}),a!==o&&s.jsx(z,{text:i&&"Мое расписание",onClick:e,icon:s.jsx(te,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(xe,{margin:"16px 0",width:"100%"}),s.jsx(w,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(g!==null&&g!==void 0?g:{}).map(u=>{const x=g[u],{id:m,path:S}=x,d=l?`${S}/${l}`:S;return m==="schedule-session"&&c?null:s.jsx(Fe,{collapsed:!i,isCurrent:r.pathname===d,route:H(I({},x),{path:d})},m)})})]})},De=()=>{var e,a;const{data:{user:t}}=U.useUser(),{data:{filter:h,view:i,errorInData:o}}=L.useSchedule(),{isTablet:l,isMobile:r}=fe(),[n,c]=C.useState(!0),u=$(),x=ae(),m=u.pathname!==Se,S=u.pathname.split("/"),d=S.length===4?S[S.length-1]:null,R=d?/\d/.test(d):!1,E=(t==null?void 0:t.user_status)==="staff"?(e=t==null?void 0:t.fullName)!==null&&e!==void 0?e:"":(a=t==null?void 0:t.group)!==null&&a!==void 0?a:"",M=u.pathname.includes(ge),y=u.pathname.includes(me),j=M||y,{open:k}=ve(),v=()=>{h&&x.push(O(T,{page:u.pathname.split("/")[2]})),f.setSearchValue(E),f.setFilter(""),f.resetExternalSchedule()};C.useLayoutEffect(()=>{i===W.month&&!j&&f.changeView(W.day)},[i,j]),C.useEffect(()=>{c(!(r||l))},[l,r]),C.useEffect(()=>{d?(f.setFilter(d),f.setSearchValue(d),R?_.getGroupScheduleFx({group:d}):_.getTeacherScheduleFx({fullName:d})):v()},[d]),C.useEffect(()=>()=>{f.resetExternalSchedule()},[]);const Q=()=>{_.getScheduleFx(t)},V=()=>p=>{(p==null?void 0:p.id)===(t==null?void 0:t.group)&&v(),p!=null&&p.id&&(u.pathname.split("/")[2]==="retake"?x.push(O(T,{page:"current",filter:p.value})):x.push(O(T,{page:u.pathname.split("/")[2],filter:p.value})))},F=p=>{f.setSearchValue(p)};return{isSideMenuOpen:n,shouldShowSlider:m,isMobile:r,isSessionPage:M,baseSearchValue:E,showMonth:j,handleErrorClick:()=>{Ee.evokePopUpMessage({message:o,type:"failure",time:je.ten_seconds})},handleValue:F,onHintClick:V,handleReturnToMySchedule:v,handleLoad:Q,handleOpenSideMenu:()=>{r?k(s.jsx(w,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(B,{isSideMenuOpen:!0,baseSearchValue:E,handleReturnToMySchedule:v,onHintClick:V,handleValue:F})})):c(p=>!p)}}},Pe=b.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",Ce.isMobile),He=e=>s.jsx(Pe,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(B,I({},e))}),Qe=()=>{const{data:{view:e,schedule:a,externalSchedule:t,errorInData:h},loading:i,error:o}=L.useSchedule(),{allRoutes:l}=we.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:c,baseSearchValue:u,isMobile:x,onHintClick:m,handleValue:S,handleReturnToMySchedule:d,handleLoad:R,handleOpenSideMenu:E,handleErrorClick:M}=De();return s.jsx(Me,{loading:i,load:R,error:o,data:i?t:a,children:s.jsx(ke,{topCenterElement:n&&s.jsx(be,{size:"small",sliderWidth:"240px",pages:c?Re:ye,currentPage:e,appearance:!x,setCurrentPage:f.changeView}),topRightCornerElement:s.jsxs(w,{w:"fit-content",gap:"20px",children:[s.jsx(Oe,{visible:!!h,onClick:M}),s.jsx(z,{icon:x?s.jsx(ne,{}):s.jsx(ie,{}),width:"36px",height:"36px",onClick:E})]}),children:l&&s.jsxs(w,{gap:"16px",ai:"flex-start",children:[!x&&s.jsx(He,{isSideMenuOpen:r,baseSearchValue:u,handleReturnToMySchedule:d,onHintClick:m,handleValue:S}),s.jsxs(re,{children:[Object.keys(g!==null&&g!==void 0?g:{}).map(y=>{const{path:j,id:k}=g[y],v=_e[k];return s.jsx(oe,{path:j,children:s.jsx(v,{})},k)}),s.jsx(le,{to:Ie})]})]})})})};export{Qe as default};
