import{p as d,e as O,x as a,s as i,r as x,j as t,q as g,bs as U,h as S,v as b,a5 as ce,K as le,cN as pe,c as ue}from"./vendor-9c916fad.js";import{m as me,n as xe,d as W,o as ge,p as fe,q as y,u as k,h as V,r as E,t as H,v as B,w as K,x as he,y as je,z as Ce,D as Se,b as ye,E as we,G as p,K as v,H as ve,J as $e,L as C,N as ke,O as Ee,Q as Ge,R as be,U as Ie,V as Pe,X as Ne,M as Fe,Y as De,Z as Te,_ as Ae,P as Le,a0 as Re}from"./index-dc58d1cc.js";import{e as I,s as Me,a as _e,b as Q,c as h,d as qe,f as P,A as ze,g as $,h as Oe,i as Ue,P as R}from"./ui-499b78f2.js";const X=d({name:"addCompetition",sid:"ebmam4"}),w=O(e=>me(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});a({and:[{clock:X,target:w}],or:{sid:"-pbpeie"}});a({and:[{clock:w.failData,fn:e=>({message:xe(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:W.evokePopUpMessage}],or:{sid:"-p9i84y"}});a({and:[{clock:w.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:W.evokePopUpMessage}],or:{sid:"-orwt5e"}});a({and:[{clock:w.doneData,target:I.load}],or:{sid:"-oabe5u"}});a({and:[{clock:w.doneData,target:ge.close}],or:{sid:"-nwkjbt"}});const We=i.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Ve=()=>{const[e,s]=x.useState(""),n=()=>{X({competitionName:e})};return t.jsxs(We,{children:[t.jsx(fe,{title:"Название",setValue:s,value:e}),t.jsx(y,{text:"Добавить",onClick:n})]})},He=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>t.jsx(y,{onClick:()=>I.remove(e),text:"Удалить"})}],Be=i.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),Ke=i.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);i.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const Qe=()=>{const[e]=g([Me.$competitions]),{open:s}=k(),n=()=>{s(t.jsx(Ve,{}))};return x.useEffect(()=>{I.load()},[]),t.jsx(Ke,{children:t.jsxs(Be,{children:[t.jsx(V,{align:"left",size:4,children:"Соревнования"}),t.jsx(y,{onClick:n,text:"Добавить соревнование"}),t.jsx(E,{data:e.map(r=>({name:r})),columns:He,onRowClick:()=>{}})]})})},Xe=i.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var Y=(e=>(e.Group="group.groupName",e.Course="course",e))(Y||{});const M=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Ye=()=>{var l;const[e,s]=g([_e.$filters,Q.$isExam]),[n,r]=x.useState(((l=e["group.groupName"])==null?void 0:l.value)??"");return t.jsxs(Xe,{children:[t.jsx(H,{leftIcon:t.jsx(U,{}),placeholder:"Номер группы",value:n,setValue:r,customMask:B.groupMask,onValueEmpty:()=>h.addFilter({name:"group.groupName",value:""}),onHintClick:o=>h.addFilter({name:"group.groupName",value:(o==null?void 0:o.id)??"",strict:!0}),request:K,size:"big"}),t.jsx(he,{items:M,size:"big",placeholder:"Курс",selected:M.find(o=>{var f;return o.id===((f=e.course)==null?void 0:f.value)})??null,setSelected:o=>{if(o!=null&&o.id){h.addFilter({name:"course",value:o.id});return}h.addFilter({name:"course",value:""})}}),t.jsx(je,{title:"Зачет",state:s,action:o=>qe.setIsExam(o)})]})},N=d({name:"pageIndexChanged",sid:"-yqoz9l"}),Z=d({name:"pageLoaded",sid:"adwljo"}),Ze=S(0,{name:"$page",sid:"ndbopj"}).on(N,(e,s)=>s);a({and:[{clock:Z,target:[P.load,Ce.load]}],or:{sid:"8a9ft4"}});const J=d({name:"load",sid:"h6031v"}),ee=b({and:{effect:async({currentUser:e})=>{const{data:s}=await Se((e==null?void 0:e.guid)??"");return s.data},source:ye.user},or:{name:"loadFx",sid:"-fzko9u"}});a({and:[{clock:J,target:ee}],or:{sid:"-b03ras"}});const Je=S([],{name:"$myGroups",sid:"qqeqg2"}).on(ee.doneData,(e,s)=>s);function _(){const[e]=g([Je]);x.useEffect(()=>{J()},[]);const s=n=>{h.resetFilters(),h.addFilter({name:Y.Group,value:n.groupName,strict:!0}),N(0)};return t.jsx(E,{onRowClick:s,data:e,columns:et})}const et=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],tt=(e,s)=>{let n=e;for(const r in s)n=n.replace(`:${r}`,s[r]);return n};i.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const st=i.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],we.isNotMobile),nt=({student:e})=>{const s=ce(),{close:n}=k(),r=()=>{s.push(tt($e,{studentId:e.studentGuid})),n()};return t.jsx(st,{children:t.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[t.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[t.jsx(v,{keyStr:"Группа",value:e.groupNumber}),t.jsx(v,{keyStr:"Баллы",value:e.totalPoints}),t.jsx(v,{keyStr:"Курс",value:e.course}),t.jsx(v,{keyStr:"ЛМС",value:e.lmsPoints})]}),t.jsx(ve,{width:"100%",margin:"0"}),t.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(V,{align:"left",size:4,children:"Дата"}),t.jsx(ze,{studentGuid:e.studentGuid})]}),t.jsx(y,{onClick:r,text:"Перейти к студенту",width:"100%"})]})})},ot=i.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),at=i.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),it=i(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),F=i.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&C.red.main),rt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebt,children:s.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"}],dt=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebtFromPreviousSemester,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],te=d({name:"pageLoaded",sid:"-n45vlm"});a({and:[{clock:te,target:P.load}],or:{sid:"t4c48d"}});const q=()=>{const{open:e}=k(),{students:s,totalCount:n,page:r,search:l,loading:o,isExam:f}=g({students:$.$pEStudents,loading:$.$loading,totalCount:$.$pEStudentsTotalCount,page:$.$pEStudentsPage,search:Oe.$search,isExam:Q.$isExam});return x.useEffect(()=>{te()},[]),t.jsx(ot,{children:t.jsxs(at,{children:[t.jsxs(it,{children:[t.jsx(ke,{value:l,setValue:Ue.update,size:"big"}),t.jsx(Ye,{})]}),t.jsx(E,{loading:o,data:s,columns:f?dt:rt,onRowClick:j=>{e(t.jsx(nt,{student:j}),j.fullName)}}),t.jsx(Ee,{condition:!0,align:"right",pages:Math.floor(n/Ge),currentPage:r,setCurrentPage:P.setPage})]})})},D=d({name:"endSemester",sid:"-50inz6"}),se=d({name:"reset",sid:"-jpbmuk"}),G=O(async({studentId:e})=>(await be(e),{studentGuid:e}),{name:"endSemesterFx",sid:"yxjzgs"});var u=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(u||{});const m=S({},{name:"$statuses",sid:"-dggygt"}).reset(se);a({and:[{clock:D,source:m,fn:(e,{studentId:s})=>({...e,[s]:"loading"}),target:m}],or:{sid:"77dp82"}});a({and:[{clock:G.doneData,source:m,fn:(e,{studentGuid:s})=>({...e,[s]:"success"}),target:m}],or:{sid:"7q2pec"}});a({and:[{clock:G.fail,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"error"}),target:m}],or:{sid:"88rpkm"}});a({and:[{clock:G.done,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"success"}),target:m}],or:{sid:"8rgpqw"}});a({and:[{clock:D,target:G}],or:{sid:"9lpedr"}});const ct={endSemester:D,reset:se},ne={statuses:m},oe=d({name:"selectedGroupChanged",sid:"-yusgt0"}),ae=d({name:"load",sid:"4qbbdm"}),T=d({name:"reset",sid:"g7h26n"}),ie=d({name:"endSemesterForGroup",sid:"842241"}),A=S("",{name:"$selectedGroup",sid:"-n8kqn6"}).on(oe,(e,s)=>s).reset(T),L=b({and:{source:A,effect:async e=>{const{data:s}=await Ie(0,{group:{value:e}},200);return s.data.students}},or:{name:"loadFx",sid:"xfnq33"}});a({and:[{source:A,filter:Boolean,target:L}],or:{sid:"gule9"}});const re=S([],{name:"$pEStudents",sid:"-7tia7t"}).on(L.doneData,(e,s)=>s).reset(T),lt=le({and:[L.pending,Boolean],or:{name:"$loading",sid:"ghro6d"}}),pt=b({and:{source:re,effect:async e=>{e.forEach(s=>ct.endSemester({studentId:s.studentGuid}))}},or:{name:"endSemesterForGroupFx",sid:"3q6tp7"}});a({and:[{clock:ne.statuses,filter:e=>Object.values(e).every(s=>s!==u.LOADING),target:ae}],or:{sid:"10n6r9"}});a({and:[{clock:ie,target:pt}],or:{sid:"1exu6n"}});const ut={load:ae,reset:T,selectedGroupChanged:oe,endSemesterForGroup:ie},mt={$loading:lt,$pEStudents:re,$selectedGroup:A},c={events:ut,stores:mt},xt={[u.LOADING]:"Загрузка",[u.ERROR]:"Не зачтено",[u.SUCCESS]:"Успешно"},gt={[u.LOADING]:t.jsx(Pe,{}),[u.ERROR]:t.jsx(pe,{color:C.red.main}),[u.SUCCESS]:t.jsx(ue,{color:C.green.main})},ft=i.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),ht=()=>{const[e,s]=g([ne.statuses,c.stores.$pEStudents]);return t.jsx(p,{p:"30px",d:"column",jc:"space-between",children:s.map(n=>t.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[t.jsx(ft,{children:n.fullName}),t.jsxs(p,{gap:"8px",w:"auto",children:[t.jsx(Ne,{align:"center",children:xt[e[n.studentGuid]??u.LOADING]}),gt[e[n.studentGuid]??u.LOADING]]})]},n.studentGuid))})},de=d({name:"pageLoaded",sid:"4q0med"}),jt=d({name:"pageUnloaded",sid:"he5rd5"});a({and:[{clock:de,target:c.events.load}],or:{sid:"74c8dr"}});a({and:[{clock:jt,target:c.events.reset}],or:{sid:"76jer7"}});const Ct=i.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),St=i.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);i(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const yt=i(p).withConfig({componentId:"sc-s6hadh-3"})([""]),wt=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebtFromPreviousSemester,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],z=()=>{const{open:e,close:s}=k(),{students:n,loading:r,selectedGroup:l}=g({students:c.stores.$pEStudents,loading:c.stores.$loading,selectedGroup:c.stores.$selectedGroup}),o=!!(n.length&&!r&&l),f=()=>{De.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{c.events.endSemesterForGroup(),e(t.jsx(ht,{}))},onReject:()=>{s(),c.events.reset()}})};return x.useEffect(()=>(de(),()=>{c.events.reset()}),[]),t.jsxs(Ct,{children:[!o&&t.jsx(Fe,{type:"alert",children:"Выберите группу чтобы провести зачет"}),t.jsxs(St,{children:[t.jsxs(yt,{d:"row",jc:"space-between",p:"8px",children:[t.jsx(H,{leftIcon:t.jsx(U,{}),placeholder:"Номер группы",value:l,setValue:c.events.selectedGroupChanged,customMask:B.groupMask,onValueEmpty:()=>c.events.selectedGroupChanged(""),onHintClick:j=>j&&c.events.selectedGroupChanged(j.id),request:K,size:"big"}),o&&t.jsx(y,{text:`Завершить семестр для ${l}`,width:"210px",background:C.green.main,textColor:C.white.main,onClick:f})]}),o&&t.jsx(E,{loading:r,data:n,columns:wt})]})]})},Et=()=>{const[e,s]=g([Te.peTeacher,Ze]);x.useEffect(()=>{Z()},[]);const n=[R.AdminAccess,R.SuperUser].some(r=>{var l;return(l=e==null?void 0:e.permissions)==null?void 0:l.includes(r)})?[{title:"Студенты",content:t.jsx(q,{})},{title:"Управление",content:t.jsx(Qe,{})},{title:"Мои Группы",content:t.jsx(_,{})},{title:"Проведение зачета",content:t.jsx(z,{})}]:[{title:"Студенты",content:t.jsx(q,{})},{title:"Мои Группы",content:t.jsx(_,{})},{title:"Проведение зачета",content:t.jsx(z,{})}];return t.jsx(Ae,{padding:"10px",children:t.jsx(Le,{children:t.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[t.jsx(Re,{appearance:!1,pages:n,currentPage:s,setCurrentPage:N}),n[s].content]})})})};export{Et as default};
