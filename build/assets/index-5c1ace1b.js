import{ax as P,j as e,bw as M,cK as b,bu as F,s,r as O,R as z,az as I,T as N,bt as H,bE as K}from"./vendor-8a1e4858.js";import{f as k,g as U,T as C,az as T,aA as $,aB as G,aC as X,aD as J,D as W,K as Q,S as A,s as _,k as q,j as V,aE as Y,aF as Z,aw as ee,aG as te,aH as ie,B as w,X as g,aI as y,aJ as se,aK as ne,aL as ae,e as oe,u as re,y as de,a4 as le,W as ce,aM as xe}from"./index-7ba18bcb.js";import{B}from"./index-8dc3481a.js";const pe=({user:t})=>{var i;const a=P();return e.jsxs(k,{d:"column",gap:"1rem",children:[e.jsx(U,{type:"info",children:"Корпоративную электронную почту и внутренний телефон можно изменить, отправив запрос в техническую поддержку."}),(i=t.subdivisions)===null||i===void 0?void 0:i.map((r,o)=>e.jsxs(k,{d:"column",gap:"8px",ai:"flex-start",children:[e.jsx(C,{align:"left",size:3,children:r.subdivision}),e.jsx(C,{align:"left",size:4,children:r.post}),e.jsx(T,{title:"Корпоративная электронная почта",icon:e.jsx(M,{}),description:t==null?void 0:t.email_staff,rightIcon:e.jsx(b,{}),onClick:()=>a.push($)}),e.jsx(T,{title:"Внутренний телефон",icon:e.jsx(F,{}),description:r.phone_inner,rightIcon:e.jsx(b,{}),onClick:()=>a.push(G)}),e.jsx(X,{}),e.jsx(J,{subDivisionGuidStaff:r.guid_staff}),o<t.subdivisions.length-1&&e.jsx(W,{margin:"16px 0",width:"100%"})]},o))]})},he=t=>t==="Male"?"Мужской":"Женский",S=O.memo(ge),ue=s.div.withConfig({componentId:"sc-p4s4cd-0"})(["width:100%;"]);function ge({user:t}){const{status:i,sex:a,birthday:r,code:o,faculty:m,course:j,group:l,specialty:d,specialization:h,degreeLength:f,educationForm:v,finance:c,degreeLevel:D,enterYear:L,subdivisions:x,authorIDs:p}=t,R=[{key:"Статус",value:i},{key:"Пол",value:he(a)},{key:"Дата рождения",value:r},{key:"Код студента",value:o},{key:"Факультет",value:m},{key:"Курс",value:j},{key:"Группа",value:l},{key:"Направление",value:d},{key:"Специализация",value:h},{key:"Срок обучения",value:f},{key:"Форма обучения",value:v},{key:"Вид финансирования",value:c},{key:"Сведения о трудоустройстве",value:!!(x!=null&&x.length)&&(x==null?void 0:x.map((n,u)=>e.jsxs(z.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[n.subdivision&&e.jsxs("div",{children:["Подразделение: ",n.subdivision]}),n.post&&e.jsxs("div",{children:["Должность: ",n.post]}),n.wage&&n.jobType&&e.jsxs("div",{children:["Ставка: ",n.wage,"; ",n.jobType]})]}),u<x.length-1&&e.jsx(W,{margin:"16px 0",width:"100%"})]},u)))},{key:"Уровень образования",value:D},{key:"Год набора",value:L},{key:"Авторские идентификаторы",value:!!p&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[p.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",p.wosReasearcher]}),p.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",p.scopus]}),p.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",p.eLibrary]})]})}];return e.jsx(ue,{children:R.map(({key:n,value:u})=>!!u&&e.jsx(Q,{keyStr:n,value:u,direction:typeof u=="object"?"vertical":"horizontal"},n))})}const me=s.div.withConfig({componentId:"sc-guqxj3-0"})(["display:flex;flex-direction:column;gap:16px;"]),je=s.div.withConfig({componentId:"sc-guqxj3-1"})([""]),fe=({orders:t})=>e.jsxs(me,{children:[!(t!=null&&t.length)&&e.jsx(A,{children:"Нет приказов"}),t==null?void 0:t.map(i=>e.jsx(je,{children:i},i))]}),ve=O.memo(fe),we=({pages:t,currentPage:i})=>{const{data:{user:a}}=_.useUser();return a?e.jsx(q,{padding:"0 0 10px 0",children:e.jsx(B,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:t[i]})}):null},ye=s.header.withConfig({componentId:"sc-saq8wx-0"})(["width:100%;padding-top:100px;position:relative;margin:0 auto;display:flex;flex-direction:column;align-items:center;color:var(--text);svg{min-width:30px;}@media (max-width:1000px){padding:auto;display:flex;align-items:center;justify-content:center;& > .info{display:none;}}"]);s.div.withConfig({componentId:"sc-saq8wx-1"})(["width:",";height:",";border-radius:",";position:absolute;top:",";left:",";z-index:-1;box-shadow:0 0 10px #00000003;background-color:",";"],({width:t})=>t+"px",({height:t})=>t+"px",({borderRadius:t})=>t+"px",({top:t})=>t+"%",({left:t})=>t+"%",({color:t})=>t);const be=s.div.withConfig({componentId:"sc-saq8wx-2"})(["width:100%;display:flex;gap:10px;flex-wrap:wrap;a{width:calc(50% - 5px);}button{font-size:0.7rem;span{margin-top:8px;margin-bottom:-8px;}}@media (max-width:1000px){flex-wrap:nowrap;button{height:42px;}}"]),Ie=s.div.withConfig({componentId:"sc-saq8wx-3"})(["margin-bottom:15px;height:fit-content;width:100%;text-align:center;display:flex;flex-direction:column;justify-content:flex-end;gap:4px;b{font-size:1.2rem;}@media (max-width:1000px){& > .info{display:none;}}"]),ke=s.div.withConfig({componentId:"sc-saq8wx-4"})(["margin-top:50px;width:100%;"]),Ce=s.div.withConfig({componentId:"sc-saq8wx-5"})(["display:flex;gap:12px;align-items:center;width:100%;max-width:750px;@media (max-width:1000px){flex-direction:column;}"]),E=s(V).withConfig({componentId:"sc-saq8wx-6"})(["padding:12px;position:relative;@media (max-width:1000px){max-width:100%;}"]),Te=s.div.withConfig({componentId:"sc-saq8wx-7"})(["position:absolute;left:50%;top:-30%;transform:translateX(-50%);"]),Se=({pages:t,user:i,currentPage:a,setCurrentPage:r})=>{const{fullName:o,avatar:m,user_status:j,degreeLevel:l}=i,d=j==="stud"?"Студент":"Сотрудник",h=()=>{ae.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:oe.logout})};return e.jsxs(ye,{children:[e.jsx(Y,{fullName:o,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(Ce,{children:[e.jsxs(E,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(Te,{children:e.jsx(Z,{name:o,avatar:m,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(ke,{children:[e.jsxs(Ie,{children:[e.jsx("b",{children:o}),e.jsx(A,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(ee,{words:[d,l!=null?l:""]})})]}),e.jsx(te,{sliderWidth:"100%",pages:t,currentPage:a,setCurrentPage:r,appearance:!1})]})]}),e.jsx(E,{maxWidth:"250px",height:"fit-content",children:e.jsxs(be,{children:[e.jsx(I,{to:ie,children:e.jsx(w,{background:g.white.transparent2,icon:e.jsx(y,{width:"30px",background:g.grey.main,children:e.jsx(N,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(se,{type:"v-button"}),e.jsx(I,{to:ne,children:e.jsx(w,{background:g.white.transparent2,icon:e.jsx(y,{width:"30px",background:g.purple.main,children:e.jsx(H,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(w,{background:g.white.transparent2,icon:e.jsx(y,{width:"30px",background:g.red.main,children:e.jsx(K,{})}),text:"Выйти",height:"73px",onClick:h,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},Ee=s.div.withConfig({componentId:"sc-1aqajbb-0"})(["display:flex;flex-direction:column;gap:12px;width:100%;align-items:center;"]),Ae=()=>{const{data:{user:t},error:i}=_.useUser(),a=P(),o=re().get("page"),{allRoutes:m}=de.useMenu();if(!t||!m)return null;if(i)return e.jsx(le,{text:i});const j=[{title:"Учетная карточка",content:e.jsx(S,{user:t}),id:"userCard"},{title:"Приказы",content:e.jsx(ve,{orders:t.orders}),id:"orders"}],l=[{title:"Учетная карточка",content:e.jsx(S,{user:t}),id:"userCard"},{title:"Контактные данные",content:e.jsx(pe,{user:t}),id:"contactDetails"}],d=t.user_status==="stud"?j:l,h=d.findIndex(c=>c.id===o)||0,f=h===-1?0:h,v=c=>{a.push({search:`?page=${d[c].id}`})};return e.jsx(ce,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(Ee,{children:[e.jsx(Se,{user:t,currentPage:f,setCurrentPage:v,pages:d}),e.jsx(q,{children:e.jsx(B,{height:"100%",maxWidth:"750px",children:e.jsx(xe,{})})}),e.jsx(we,{currentPage:f,pages:d.map(c=>c.content)})]})})};export{Ae as default};
