var B=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var D=(e,n,s)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,y=(e,n)=>{for(var s in n||(n={}))X.call(n,s)&&D(e,s,n[s]);if(H)for(var s of H(n))Q.call(n,s)&&D(e,s,n[s]);return e},P=(e,n)=>J(e,K(n));var N=(e,n,s)=>new Promise((h,i)=>{var o=a=>{try{r(s.next(a))}catch(c){i(c)}},l=a=>{try{r(s.throw(a))}catch(c){i(c)}},r=a=>a.done?h(a.value):Promise.resolve(a.value).then(o,l);r((s=s.apply(e,n)).next())});import{j as t,ao as Y,bj as Z,ce as ee,s as k,Y as se,V as $,bw as te,r as w,X as ne,cI as ae,d4 as ie,cp as re,cq as oe,aO as le}from"./vendor-33947725.js";import{ai as U,t as ce,v as ue,w as de,cm as he,H as pe,K as q,J as C,bX as V,q as G,R as xe,cn as g,bm as fe,co as Se,cp as ge,cq as me,u as ve,cr as W,cs as f,bZ as O,ct as _,cu as T,d as Ee,cv as je,O as we,aJ as Ce,W as Me,P as ke,a0 as be,cw as Ie,cx as Re,cy as ye}from"./index-5c2dce5e.js";import{E as Oe}from"./index-0972e366.js";const _e=({value:e,setValue:n,onHintClick:s,onValueEmpty:h})=>{const i=/\d/.test(e),{data:{user:o}}=U.useUser(),l=r=>N(void 0,null,function*(){return i?yield de(r):yield he(r,"",1,20)});return t.jsx(ce,{value:e,width:"100%",setValue:n,onHintClick:s(i),placeholder:"Поиск",customMask:i?ue.groupMask:void 0,transformRequest:i?void 0:r=>r.fio,request:l,leftIcon:e.length===0?t.jsx(Y,{}):i?t.jsx(Z,{}):t.jsx(ee,{}),onValueEmpty:(o==null?void 0:o.user_status)==="staff"?h:void 0})},Te=k(se).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?pe.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),Ue=k.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ve=k.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Le=({route:e,collapsed:n=!1,disabled:s=!1,isCurrent:h=!1})=>{if(!e)return t.jsx(q,{children:"Ссылка не определена"});const{path:i,title:o,icon:l,color:r,shortTitle:a}=e,c=u=>{if(s)return u.preventDefault()};return t.jsx(Te,{collapsed:n,disabled:s,isCurrent:h,to:i,title:a!=null?a:o,color:r,onClick:c,children:t.jsxs(C,{gap:"8px",children:[t.jsx(Ue,{children:l}),!n&&t.jsx(Ve,{isCurrent:h,children:a!=null?a:o})]})})},z=({handleReturnToMySchedule:e,baseSearchValue:n,handleValue:s,onHintClick:h,isSideMenuOpen:i})=>{const{data:{searchValue:o,filter:l}}=V.useSchedule(),r=$(),{data:{user:a}}=U.useUser(),c=(a==null?void 0:a.user_status)==="staff";return t.jsxs(t.Fragment,{children:[i&&t.jsxs(t.Fragment,{children:[t.jsx(q,{children:"Группа или преподаватель"}),t.jsx(_e,{value:o,setValue:s,onHintClick:h})]}),n!==o&&t.jsx(G,{text:i&&"Мое расписание",onClick:e,icon:t.jsx(te,{}),background:"var(--block)",textColor:"var(--blue)"}),t.jsx(xe,{margin:"16px 0",width:"100%"}),t.jsx(C,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(g!==null&&g!==void 0?g:{}).map(u=>{const x=g[u],{id:m,path:S}=x,d=l?`${S}/${l}`:S;return m==="schedule-session"&&c?null:t.jsx(Le,{collapsed:!i,isCurrent:r.pathname===d,route:P(y({},x),{path:d})},m)})})]})},Fe=()=>{var e,n;const{data:{user:s}}=U.useUser(),{data:{filter:h,view:i,errorInData:o}}=V.useSchedule(),{isTablet:l,isMobile:r}=fe(),[a,c]=w.useState(!0),u=$(),x=ne(),m=u.pathname!==Se,S=u.pathname.split("/"),d=S.length===4?S[S.length-1]:null,b=d?/\d/.test(d):!1,E=(s==null?void 0:s.user_status)==="staff"?(e=s==null?void 0:s.fullName)!==null&&e!==void 0?e:"":(n=s==null?void 0:s.group)!==null&&n!==void 0?n:"",M=u.pathname.includes(ge),I=u.pathname.includes(me),j=M||I,{open:R}=ve(),v=()=>{h&&x.push(_(T,{page:u.pathname.split("/")[2]})),f.setSearchValue(E),f.setFilter(""),f.resetExternalSchedule()};w.useLayoutEffect(()=>{i===W.month&&!j&&f.changeView(W.day)},[i,j]),w.useEffect(()=>{c(!(r||l))},[l,r]),w.useEffect(()=>{d?(f.setFilter(d),f.setSearchValue(d),b?O.getGroupScheduleFx({group:d}):O.getTeacherScheduleFx({fullName:d})):v()},[d]),w.useEffect(()=>()=>{f.resetExternalSchedule()},[]);const A=()=>{O.getScheduleFx(s)},L=()=>p=>{(p==null?void 0:p.id)===(s==null?void 0:s.group)&&v(),p!=null&&p.id&&(u.pathname.split("/")[2]==="retake"?x.push(_(T,{page:"current",filter:p.value})):x.push(_(T,{page:u.pathname.split("/")[2],filter:p.value})))},F=p=>{f.setSearchValue(p)};return{isSideMenuOpen:a,shouldShowSlider:m,isMobile:r,isSessionPage:M,baseSearchValue:E,showMonth:j,handleErrorClick:()=>{Ee.evokePopUpMessage({message:o,type:"failure",time:je.ten_seconds})},handleValue:F,onHintClick:L,handleReturnToMySchedule:v,handleLoad:A,handleOpenSideMenu:()=>{r?R(t.jsx(C,{d:"column",gap:"8px",ai:"flex-start",children:t.jsx(z,{isSideMenuOpen:!0,baseSearchValue:E,handleReturnToMySchedule:v,onHintClick:L,handleValue:F})})):c(p=>!p)}}},He=k.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",we.isMobile),De=e=>t.jsx(He,{isSideMenuOpen:e.isSideMenuOpen,children:t.jsx(z,y({},e))}),ze=()=>{const{data:{view:e,schedule:n,externalSchedule:s,errorInData:h},loading:i,error:o}=V.useSchedule(),{allRoutes:l}=Ce.useMenu(),{isSideMenuOpen:r,shouldShowSlider:a,showMonth:c,baseSearchValue:u,isMobile:x,onHintClick:m,handleValue:S,handleReturnToMySchedule:d,handleLoad:b,handleOpenSideMenu:E,handleErrorClick:M}=Fe();return t.jsx(Me,{loading:i,load:b,error:o,data:i?s:n,children:t.jsx(ke,{topCenterElement:a&&t.jsx(be,{size:"small",sliderWidth:"240px",pages:c?Ie:Re,currentPage:e,appearance:!x,setCurrentPage:f.changeView}),topRightCornerElement:t.jsxs(C,{w:"fit-content",gap:"20px",children:[t.jsx(Oe,{visible:!!h,onClick:M}),t.jsx(G,{icon:x?t.jsx(ae,{}):t.jsx(ie,{}),width:"36px",height:"36px",onClick:E})]}),children:l&&t.jsxs(C,{gap:"16px",ai:"flex-start",children:[!x&&t.jsx(De,{isSideMenuOpen:r,baseSearchValue:u,handleReturnToMySchedule:d,onHintClick:m,handleValue:S}),t.jsxs(re,{children:[Object.keys(g!==null&&g!==void 0?g:{}).map(I=>{const{path:j,id:R,Component:v}=g[I];return t.jsx(oe,{path:j,children:t.jsx(v,{})},R)}),t.jsx(le,{to:ye})]})]})})})};export{ze as default};
