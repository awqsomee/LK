var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var D=(e,a,t)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,R=(e,a)=>{for(var t in a||(a={}))Q.call(a,t)&&D(e,t,a[t]);if(P)for(var t of P(a))X.call(a,t)&&D(e,t,a[t]);return e},H=(e,a)=>J(e,K(a));var N=(e,a,t)=>new Promise((h,i)=>{var o=n=>{try{r(t.next(n))}catch(c){i(c)}},l=n=>{try{r(t.throw(n))}catch(c){i(c)}},r=n=>n.done?h(n.value):Promise.resolve(n.value).then(o,l);r((t=t.apply(e,a)).next())});import{j as s,ax as Y,bP as Z,cu as ee,s as I,ay as se,D as $,cz as te,r as w,aw as ae,a6 as ne,cI as ie,bA as re,bB as oe,bE as le}from"./vendor-60fdf703.js";import{s as U,aG as ce,w as ue,v as de,aH as he,E as pe,S as G,d as C,ae as L,B as z,D as xe,aI as g,J as fe,aJ as Se,aK as ge,aL as me,x as ve,aM as W,aN as f,ag as _,aO as O,aP as T,aQ as Ee,aR as je,a0 as we,n as Ce,W as Me,P as ke,ay as Ie,aS as be,aT as ye,aU as Re,aV as _e}from"./index-27bbb5ce.js";import{E as Oe}from"./index-32efcc43.js";const Te=({value:e,setValue:a,onHintClick:t,onValueEmpty:h})=>{const i=/\d/.test(e),{data:{user:o}}=U.useUser(),l=r=>N(void 0,null,function*(){return i?yield de(r):yield he(r,"",1,20)});return s.jsx(ce,{value:e,width:"100%",setValue:a,onHintClick:t(i),placeholder:"Поиск",customMask:i?ue.groupMask:void 0,transformRequest:i?void 0:r=>r.fio,request:l,leftIcon:e.length===0?s.jsx(Y,{}):i?s.jsx(Z,{}):s.jsx(ee,{}),onValueEmpty:(o==null?void 0:o.user_status)==="staff"?h:void 0})},Ue=I(se).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?pe.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),Le=I.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ve=I.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Fe=({route:e,collapsed:a=!1,disabled:t=!1,isCurrent:h=!1})=>{if(!e)return s.jsx(G,{children:"Ссылка не определена"});const{path:i,title:o,icon:l,color:r,shortTitle:n}=e,c=u=>{if(t)return u.preventDefault()};return s.jsx(Ue,{collapsed:a,disabled:t,isCurrent:h,to:i,title:n!=null?n:o,color:r,onClick:c,children:s.jsxs(C,{gap:"8px",children:[s.jsx(Le,{children:l&&s.jsx(l,{})}),!a&&s.jsx(Ve,{isCurrent:h,children:n!=null?n:o})]})})},B=({handleReturnToMySchedule:e,baseSearchValue:a,handleValue:t,onHintClick:h,isSideMenuOpen:i})=>{const{data:{searchValue:o,filter:l}}=L.useSchedule(),r=$(),{data:{user:n}}=U.useUser(),c=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[i&&s.jsxs(s.Fragment,{children:[s.jsx(G,{children:"Группа или преподаватель"}),s.jsx(Te,{value:o,setValue:t,onHintClick:h})]}),a!==o&&s.jsx(z,{text:i&&"Мое расписание",onClick:e,icon:s.jsx(te,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(xe,{margin:"16px 0",width:"100%"}),s.jsx(C,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(g!==null&&g!==void 0?g:{}).map(u=>{const x=g[u],{id:m,path:S}=x,d=l?`${S}/${l}`:S;return m==="schedule-session"&&c?null:s.jsx(Fe,{collapsed:!i,isCurrent:r.pathname===d,route:H(R({},x),{path:d})},m)})})]})},Pe=()=>{var e,a;const{data:{user:t}}=U.useUser(),{data:{filter:h,view:i,errorInData:o}}=L.useSchedule(),{isTablet:l,isMobile:r}=fe(),[n,c]=w.useState(!0),u=$(),x=ae(),m=u.pathname!==Se,S=u.pathname.split("/"),d=S.length===4?S[S.length-1]:null,b=d?/\d/.test(d):!1,E=(t==null?void 0:t.user_status)==="staff"?(e=t==null?void 0:t.fullName)!==null&&e!==void 0?e:"":(a=t==null?void 0:t.group)!==null&&a!==void 0?a:"",M=u.pathname.includes(ge),y=u.pathname.includes(me),j=M||y,{open:k}=ve(),v=()=>{h&&x.push(O(T,{page:u.pathname.split("/")[2]})),f.setSearchValue(E),f.setFilter(""),f.resetExternalSchedule()};w.useLayoutEffect(()=>{i===W.month&&!j&&f.changeView(W.day)},[i,j]),w.useEffect(()=>{c(!(r||l))},[l,r]),w.useEffect(()=>{d?(f.setFilter(d),f.setSearchValue(d),b?_.getGroupScheduleFx({group:d}):_.getTeacherScheduleFx({fullName:d})):v()},[d]),w.useEffect(()=>()=>{f.resetExternalSchedule()},[]);const A=()=>{_.getScheduleFx(t)},V=()=>p=>{(p==null?void 0:p.id)===(t==null?void 0:t.group)&&v(),p!=null&&p.id&&(u.pathname.split("/")[2]==="retake"?x.push(O(T,{page:"current",filter:p.value})):x.push(O(T,{page:u.pathname.split("/")[2],filter:p.value})))},F=p=>{f.setSearchValue(p)};return{isSideMenuOpen:n,shouldShowSlider:m,isMobile:r,isSessionPage:M,baseSearchValue:E,showMonth:j,handleErrorClick:()=>{Ee.evokePopUpMessage({message:o,type:"failure",time:je.ten_seconds})},handleValue:F,onHintClick:V,handleReturnToMySchedule:v,handleLoad:A,handleOpenSideMenu:()=>{r?k(s.jsx(C,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(B,{isSideMenuOpen:!0,baseSearchValue:E,handleReturnToMySchedule:v,onHintClick:V,handleValue:F})})):c(p=>!p)}}},De=I.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",we.isMobile),He=e=>s.jsx(De,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(B,R({},e))}),Ae=()=>{const{data:{view:e,schedule:a,externalSchedule:t,errorInData:h},loading:i,error:o}=L.useSchedule(),{allRoutes:l}=Ce.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:c,baseSearchValue:u,isMobile:x,onHintClick:m,handleValue:S,handleReturnToMySchedule:d,handleLoad:b,handleOpenSideMenu:E,handleErrorClick:M}=Pe();return s.jsx(Me,{loading:i,load:b,error:o,data:i?t:a,children:s.jsx(ke,{topCenterElement:n&&s.jsx(Ie,{size:"small",sliderWidth:"240px",pages:c?be:ye,currentPage:e,appearance:!x,setCurrentPage:f.changeView}),topRightCornerElement:s.jsxs(C,{w:"fit-content",gap:"20px",children:[s.jsx(Oe,{visible:!!h,onClick:M}),s.jsx(z,{icon:x?s.jsx(ne,{}):s.jsx(ie,{}),width:"36px",height:"36px",onClick:E})]}),children:l&&s.jsxs(C,{gap:"16px",ai:"flex-start",children:[!x&&s.jsx(He,{isSideMenuOpen:r,baseSearchValue:u,handleReturnToMySchedule:d,onHintClick:m,handleValue:S}),s.jsxs(re,{children:[Object.keys(g!==null&&g!==void 0?g:{}).map(y=>{const{path:j,id:k}=g[y],v=_e[k];return s.jsx(oe,{path:j,children:s.jsx(v,{})},k)}),s.jsx(le,{to:Re})]})]})})})};export{Ae as default};
