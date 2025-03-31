var ce=Object.defineProperty,le=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,t,i)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))ue.call(t,i)&&J(e,i,t[i]);if(V)for(var i of V(t))pe.call(t,i)&&J(e,i,t[i]);return e},m=(e,t)=>le(e,de(t));var P=(e,t,i)=>new Promise((l,n)=>{var r=c=>{try{a(i.next(c))}catch(h){n(h)}},s=c=>{try{a(i.throw(c))}catch(h){n(h)}},a=c=>c.done?l(c.value):Promise.resolve(c.value).then(r,s);a((i=i.apply(e,t)).next())});import{p as fe,e as O,h as he,l as k,s as f,i as B,j as o,r as d,bb as xe,B as ge,ax as me,cG as ve,ay as we}from"./vendor-fdf02817.js";import{al as I,am as $,p as je,bD as w,H as j,bE as q,a9 as Se,T,bF as be,S as v,bG as G,E as S,B as Y,bH as Ne,bI as ye,bJ as K,d as z,a_ as Te,Z as R,s as X,c as Q,h as ee,Y as ke,aR as De,W as Ce,P as Fe,I as Ie,b4 as $e,R as Ae,bK as Ee}from"./index-2172af78.js";import{D as Me}from"./test-database-message-50863021.js";const te=()=>I.get(`?getNotification&token=${$()}`),Pe=e=>I.get(`?viewNotification=${e}&token=${$()}`),Le=Object.freeze(Object.defineProperty({__proto__:null,get:te,view:Pe},Symbol.toStringTag,{value:"Module"})),oe=()=>I.get(`?getDocList&token=${$()}`).then(e=>m(u({},e),{data:e.data.map(t=>m(u({},t),{document:!0}))})),Be=e=>I.get(`?viewDoc=${e}&token=${$()}`),ze=Object.freeze(Object.defineProperty({__proto__:null,get:oe,view:Be},Symbol.toStringTag,{value:"Module"})),Z={type:null,personalNotifications:null,error:null,completed:!1},Re=()=>({data:k(y).personalNotifications,loading:k(N.pending),error:k(y).error,completed:k(y).completed}),Oe=()=>k(y).type,_e=fe({name:"changeCompleted",sid:"vr0j8g"}),ie=O(e=>e,{name:"setNotificationsType",sid:"-m97y8b"}),N=O(()=>P(void 0,null,function*(){const{type:e}=y.getState();if(e==="notifications")try{return(yield te()).data}catch(t){throw new Error(t)}try{return{docs:(yield oe()).data}}catch(t){throw new Error(t)}}),{name:"getPersonalNotificationsFx",sid:"pa84d1"}),C=O(e=>P(void 0,null,function*(){const{type:t}=y.getState(),i=t==="notifications"?Le:ze;try{return yield i.view(e),"ok"}catch(l){throw new Error("Ошибка загрузки данных")}}),{name:"viewPersonalNotificationsFx",sid:"-64tonw"}),y=he(Z,{name:"$personalNotificationsStore",sid:"53pwkb"}).on(ie,(e,t)=>m(u({},e),{type:t})).on(N,e=>m(u({},e),{error:null})).on(N.doneData,(e,t)=>m(u({},e),{personalNotifications:t})).on(N.failData,(e,t)=>m(u({},e),{error:t.message})).on(C.doneData,e=>u({},e)).on(C.failData,(e,t)=>m(u({},e),{error:t.message})).on(_e,(e,t)=>m(u({},e),{completed:t.completed})).on(je.userGuid,()=>u({},Z));C.doneData.watch(()=>N());const se={usePersonalNotifications:Re,useType:Oe},b={setNotificationsType:ie,getPersonalNotificationsFx:N,viewPersonalNotificationsFx:C},Ue=(e,t,i)=>{const l={};let n=[];const r=s=>{if("document"in s){const{viewed:A,name:g}=s,D=(g==null?void 0:g.includes(e))||!e.length;return t==="all"&&D?!0:!A&&t!=="all"&&D}const{viewed:a,post:c,event:h}=s,x=(h==null?void 0:h.includes(e))||(c==null?void 0:c.includes(e))||!e.length;return t==="all"&&x?!0:!a&&t!=="all"&&x};return Object.entries(i).map(([s,a])=>{n=[],a.map(c=>{r(c)&&n.push(c)}),l[s]=n}),l},We=e=>{const t=new Date().getTime()-new Date(e).getTime(),i=Math.floor(t/1e3);if(i<60&&i>=1)return`${i} ${w(i,He)}`;const l=Math.floor(i/60);if(l<60&&l>=1)return`${l} ${w(l,Ve)}`;const n=Math.floor(l/60);if(n<24&&n>=1)return`${n} ${w(n,Je)}`;const r=Math.floor(n/24);if(r>=1&&r<7)return`${r} ${w(r,Ge)}`;const s=Math.floor(r/7);if(s>=1&&s<4)return`${s} ${w(s,Ye)}`;const a=Math.floor(r/30);if(a>=1&&a<12)return`${a} ${w(a,Ke)}`;const c=Math.floor(r/365);return`${c} ${w(c,Ze)}`},He={zero:"секунд",one:"секунду",twoToFour:"секунды",fiveToNine:"секунд"},Ve={zero:"минут",one:"минута",twoToFour:"минуты",fiveToNine:"минут"},Je={zero:"часов",one:"час",twoToFour:"часа",fiveToNine:"часов"},Ge={zero:"дней",one:"день",twoToFour:"дня",fiveToNine:"дней"},Ye={zero:"недель",one:"неделя",twoToFour:"недели",fiveToNine:"недель"},Ke={zero:"месяцев",one:"месяц",twoToFour:"месяца",fiveToNine:"месяцев"},Ze={zero:"лет",one:"год",twoToFour:"года",fiveToNine:"лет"},_=f.div.withConfig({componentId:"sc-rnm93p-0"})(["display:flex;flex-direction:column;gap:10px;width:100%;"]),ne=f.div.withConfig({componentId:"sc-rnm93p-1"})(["font-style:normal;font-weight:500;font-size:15px;line-height:18px;"]),qe=({allowance:e})=>{const t=B(q.allowanceStatusChanged),i=B(Se.userSettings);return e?o.jsxs(Xe,{children:[o.jsxs(_,{children:[o.jsxs(T,{align:"left",size:3,children:[e.paymentIdentifier,", ",e.position]}),e.orderStatus&&e.selfApprovalStatus==="Approved"&&o.jsx(T,{align:"left",size:4,children:be[e.orderStatus]}),e.selfApprovalStatus==="Approved"&&o.jsx(v,{fontSize:"1em",color:"var(--greenMain)",children:G[e.selfApprovalStatus]}),(e.selfApprovalStatus==="Declined"||e.selfApprovalStatus==="Expired")&&o.jsx(v,{fontSize:"1em",color:"var(--redMain)",children:G[e.selfApprovalStatus]}),o.jsxs(T,{align:"left",size:5,children:["Инициатор: ",e.initiatorName]}),o.jsxs(T,{align:"left",size:5,children:["Источник: ",e.sourceOfFunding]}),o.jsxs(T,{align:"left",size:5,children:["Сумма: ",e.sum," руб."]}),o.jsxs(v,{children:["Период: ",S(e.startDate,"numeric")," -"," ",S(e.endDate,"numeric")," "]}),o.jsxs(v,{children:["Дата: ",S(e.issueDate,"numeric")]})]}),(e.selfApprovalStatus==="Unknown"||e.selfApprovalStatus==="InProgress")&&o.jsxs(o.Fragment,{children:[o.jsxs(Qe,{children:[o.jsx(Y,{text:"Отказаться",onClick:()=>t({allowanceId:e.allowanceId,isConfirmed:!1}),background:j.red.main,textColor:"white",height:"35px",width:"100%",isActive:!0}),o.jsx(Y,{text:"Согласиться",onClick:()=>t({allowanceId:e.allowanceId,isConfirmed:!0}),background:j.green.main,textColor:"white",height:"35px",width:"100%",isActive:!0})]}),o.jsx(et,{isLightTheme:(i==null?void 0:i.appearance.theme)===Ne.Light,children:o.jsxs(v,{children:["Подтвердите надбавку в течение 1 дня."," ",ye(e.confirmationEndDate)&&`Осталось ${We(e.confirmationEndDate)}`]})})]})]}):null},Xe=f.div.withConfig({componentId:"sc-ceiafc-0"})(["position:relative;width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);min-height:70px;display:flex;flex-direction:column;align-items:flex-end;overflow:hidden;"]),Qe=f.div.withConfig({componentId:"sc-ceiafc-1"})(["display:flex;gap:8px;margin:0.5rem 0;width:300px;@media (max-width:768px){max-width:100%;width:100%;}@media (max-width:380px){margin:1.5rem 0;}"]),et=f.div.withConfig({componentId:"sc-ceiafc-2"})(["position:absolute;bottom:0;background-color:",";width:100%;color:",";left:0;text-align:center;"],j.orange.transparent3,({isLightTheme:e})=>e?j.orange.dark3:j.orange.light3),tt=({searchQuery:e,filter:t})=>{const[i,l,n]=B([K.personalAllowances.data,K.personalAllowances.loading,q.personalAllowancesMounted]);d.useEffect(()=>{n()},[]);const r=d.useMemo(()=>{const s=e?i==null?void 0:i.filter(a=>a.position.includes(e)||a.paymentIdentifier.includes(e)||a.sourceOfFunding.includes(e)):i;return t&&(t==null?void 0:t.id)==="unread"?s==null?void 0:s.filter(a=>a.selfApprovalStatus==="Unknown"||a.selfApprovalStatus==="InProgress"):s},[i,e,t]);return l?o.jsx(z,{h:"100%",d:"column",ai:"center",jc:"center",children:o.jsx(Te,{})}):o.jsxs(z,{d:"column",gap:"8px",p:"0.25rem",children:[o.jsx(Me,{}),r?r.length>0?r.map(s=>o.jsx(qe,{allowance:s},s.allowanceId)):o.jsx(R,{text:"Нет надбавок"}):o.jsx(R,{text:"Произошла ошибка"})]})},F=(e,t,i)=>{switch(e){case"Female":return i;default:return t}},ot=f.div.withConfig({componentId:"sc-1g1tw42-0"})(["display:flex;width:100%;align-items:center;justify-content:space-between;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;@media (max-width:768px){flex-direction:column;}"]),it=f.div.withConfig({componentId:"sc-1g1tw42-1"})(["display:flex;gap:10px;align-self:end;@media (max-width:768px){width:100%;gap:20px;}"]),st=({data:e})=>{const{data:{user:t}}=X.useUser(),[i,l]=d.useState(!1),[n,r]=d.useState(!1);return o.jsxs(ot,{children:[o.jsxs(_,{children:[o.jsx(ne,{children:e.event||e.post}),e.startDate&&e.endDate!=="0000-00-00"?o.jsxs(v,{children:["Период: ",S(e.startDate,"numeric")," - ",S(e.endDate,"numeric")]}):o.jsxs(v,{children:["Дата: ",S(e.startDate,"numeric")]})]}),o.jsxs(it,{children:[e.file&&o.jsx(Q,{href:e.file,onClick:()=>null,text:"Скачать",width:"150px",icon:o.jsx(xe,{}),height:"35px",minHeight:"30px",background:j.grey.transparent2}),o.jsx(ee,{text:e.viewed?F(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{l(!0),b.viewPersonalNotificationsFx(e.id),l(!1),r(!0)},height:"35px",width:"150px",buttonSuccessText:F(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},nt=f.div.withConfig({componentId:"sc-168uakk-0"})(["width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;display:flex;flex-direction:column;align-items:flex-end;"]),rt=f.div.withConfig({componentId:"sc-168uakk-1"})(["display:flex;gap:8px;margin-top:5px;width:300px;@media (max-width:768px){max-width:100%;width:100%;}"]),at=({data:e})=>{const{data:{user:t}}=X.useUser(),[i,l]=d.useState(!1),[n,r]=d.useState(!1),s=()=>{try{l(!0),b.viewPersonalNotificationsFx(e.id),ke.clearById({id:`studdoc-${e.id}`,pageId:"doclist"}),l(!1),r(!0)}catch(a){De.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return o.jsxs(nt,{children:[o.jsxs(_,{children:[o.jsx(ne,{children:e.name}),e.date&&o.jsxs(v,{children:["Дата: ",S(e.date,"numeric")]})]}),o.jsxs(rt,{children:[e.link&&o.jsx(Q,{href:e.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:o.jsx(ge,{}),height:"35px",minHeight:"30px",background:j.grey.transparent2}),o.jsx(ee,{text:e.viewed?F(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:s,height:"35px",width:"100%",buttonSuccessText:F(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},L=({listNotification:e})=>{const t=se.useType();return o.jsx(z,{d:"column",gap:"8px",children:e.length?e.map(i=>t==="notifications"?o.jsx(st,{data:i},i.id):o.jsx(at,{data:i},i.id)):o.jsx(R,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},ct=f.div.withConfig({componentId:"sc-xrueg0-0"})(["display:flex;justify-content:center;gap:10px;width:100%;"]),lt=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],dt=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],gt=({docsType:e})=>{const t=me(),{type:i}=ve(),l=p=>t.push(Ee+"/"+p),{data:n,error:r}=se.usePersonalNotifications(),[s,a]=d.useState(),[c,h]=d.useState(""),[x,A]=d.useState({id:"all",title:"Все"}),[g,D]=d.useState({id:"all",title:"Все"});d.useEffect(()=>{a(JSON.parse(JSON.stringify(n)))},[n]),d.useEffect(()=>{if(n){var p;a(Ue(c,(p=x==null?void 0:x.id)!==null&&p!==void 0?p:"",JSON.parse(JSON.stringify(n))))}},[x,c]),d.useEffect(()=>{b.setNotificationsType(i),b.getPersonalNotificationsFx()},[i]);const re=p=>{l(p)},U=d.useMemo(()=>{const p=(n==null?void 0:n.vacation)||[],W=(n==null?void 0:n.businesstrip)||[],H=(n==null?void 0:n.fire)||[];switch(g==null?void 0:g.id){case"all":return[...p,...W,...H].sort((E,M)=>{const ae=E.notificationType==="docs"?new Date(E.date):new Date(E.startDate||"");return(M.notificationType==="docs"?new Date(M.date):new Date(M.startDate||"")).getTime()<ae.getTime()?-1:1});case"vacation":return p;case"fire":return H;case"businesstrip":return W;default:return[]}},[n,g]);return o.jsx(Ce,{load:()=>{b.setNotificationsType(i),b.getPersonalNotificationsFx()},error:r,data:s,children:o.jsxs(Fe,{children:[o.jsxs(ct,{children:[o.jsx(Ie,{value:c,setValue:h,placeholder:"Поиск",leftIcon:o.jsx(we,{})}),o.jsx($e,{items:i==="notifications"?dt:lt,selected:i==="notifications"?g:x,setSelected:i==="notifications"?D:A})]}),e?(s==null?void 0:s.docs)&&o.jsx(L,{listNotification:s==null?void 0:s.docs}):o.jsx(Ae,{onChangePage:re,currentPage:i==="allowances"?2:i==="notifications"?1:0,pages:[{id:"docs",title:"Приказы",content:(s==null?void 0:s.docs)&&o.jsx(L,{listNotification:s==null?void 0:s.docs})},{id:"notifications",title:"Кадровые уведомления",content:U.length?o.jsx(L,{listNotification:U}):void 0},{id:"allowances",title:"Надбавки",content:o.jsx(tt,{filter:x,searchQuery:c})}]})]})})};export{gt as N};
