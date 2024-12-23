import{p as l,e as U,x as i,s as r,r as g,j as t,n as h,bs as W,h as w,v as I,a5 as pe,K as ue,cN as me,c as xe}from"./vendor-8312535b.js";import{m as ge,n as he,d as V,o as fe,p as je,q as v,u as E,h as H,r as G,t as B,v as K,w as Q,x as Ce,y as Se,z as ye,D as we,b as ve,E as ke,G as p,K as j,H as $e,J as Ee,L as y,N as Ge,O as be,Q as Ie,R as Pe,U as Ne,V as Fe,X as De,M as Te,Y as Ae,Z as Le,_ as Re,P as Me,a0 as _e}from"./index-3ed27df5.js";import{e as P,s as ze,a as qe,b as X,c as C,d as Oe,f as N,h as Y,g as Ue,A as We,i as $,j as Ve,k as He,P as M}from"./student-6dfbf662.js";const Z=l({name:"addCompetition",sid:"ebmam4"}),k=U(e=>ge(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});i({and:[{clock:Z,target:k}],or:{sid:"-pbpeie"}});i({and:[{clock:k.failData,fn:e=>({message:he(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:V.evokePopUpMessage}],or:{sid:"-p9i84y"}});i({and:[{clock:k.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:V.evokePopUpMessage}],or:{sid:"-orwt5e"}});i({and:[{clock:k.doneData,target:P.load}],or:{sid:"-oabe5u"}});i({and:[{clock:k.doneData,target:fe.close}],or:{sid:"-nwkjbt"}});const Be=r.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Ke=()=>{const[e,s]=g.useState(""),n=()=>{Z({competitionName:e})};return t.jsxs(Be,{children:[t.jsx(je,{title:"Название",setValue:s,value:e}),t.jsx(v,{text:"Добавить",onClick:n})]})},Qe=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>t.jsx(v,{onClick:()=>P.remove(e),text:"Удалить"})}],Xe=r.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),Ye=r.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);r.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const Ze=()=>{const[e]=h([ze.$competitions]),{open:s}=E(),n=()=>{s(t.jsx(Ke,{}))};return g.useEffect(()=>{P.load()},[]),t.jsx(Ye,{children:t.jsxs(Xe,{children:[t.jsx(H,{align:"left",size:4,children:"Соревнования"}),t.jsx(v,{onClick:n,text:"Добавить соревнование"}),t.jsx(G,{data:e.map(o=>({name:o})),columns:Qe,onRowClick:()=>{}})]})})},Je=r.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var J=(e=>(e.Group="group.groupName",e.Course="course",e))(J||{});const _=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],et=()=>{var d,x,f;const[e,s]=h([qe.$filters,X.$isExam]),[n,o]=g.useState((x=(d=e["group.groupName"])==null?void 0:d.value)!=null?x:"");return t.jsxs(Je,{children:[t.jsx(B,{leftIcon:t.jsx(W,{}),placeholder:"Номер группы",value:n,setValue:o,customMask:K.groupMask,onValueEmpty:()=>C.addFilter({name:"group.groupName",value:""}),onHintClick:a=>{var S;return C.addFilter({name:"group.groupName",value:(S=a==null?void 0:a.id)!=null?S:"",strict:!0})},request:Q,size:"big"}),t.jsx(Ce,{items:_,size:"big",placeholder:"Курс",selected:(f=_.find(a=>{var S;return a.id===((S=e.course)==null?void 0:S.value)}))!=null?f:null,setSelected:a=>{if(a!=null&&a.id){C.addFilter({name:"course",value:a.id});return}C.addFilter({name:"course",value:""})}}),t.jsx(Se,{title:"Зачет",state:s,action:a=>Oe.setIsExam(a)})]})},F=l({name:"pageIndexChanged",sid:"-yqoz9l"}),ee=l({name:"pageLoaded",sid:"adwljo"}),tt=w(0,{name:"$page",sid:"ndbopj"}).on(F,(e,s)=>s);i({and:[{clock:ee,target:[N.load,ye.load]}],or:{sid:"8a9ft4"}});const te=l({name:"load",sid:"h6031v"}),se=I({and:{effect:async({currentUser:e})=>{var n;const{data:s}=await we((n=e==null?void 0:e.guid)!=null?n:"");return s.data},source:ve.user},or:{name:"loadFx",sid:"-fzko9u"}});i({and:[{clock:te,target:se}],or:{sid:"-b03ras"}});const st=w([],{name:"$myGroups",sid:"qqeqg2"}).on(se.doneData,(e,s)=>s);function z(){const[e]=h([st]);g.useEffect(()=>{te()},[]);const s=n=>{C.resetFilters(),C.addFilter({name:J.Group,value:n.groupName,strict:!0}),F(0)};return t.jsx(G,{onRowClick:s,data:e,columns:nt})}const nt=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],ot=(e,s)=>{let n=e;for(const o in s)n=n.replace(`:${o}`,s[o]);return n};r.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const at=r.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],ke.isNotMobile),it=({student:e})=>{const s=pe(),{close:n}=E(),o=()=>{s.push(ot(Ee,{studentId:e.studentGuid})),n()};return t.jsx(at,{children:t.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[t.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[t.jsx(j,{keyStr:"Группа",value:e.groupNumber}),t.jsx(j,{keyStr:"Баллы",value:e.totalPoints}),t.jsx(j,{keyStr:"Курс",value:e.course}),t.jsx(j,{keyStr:"ЛМС",value:e.lmsPoints}),t.jsx(j,{keyStr:"Группа здоровья",value:Y[e.healthGroup]}),t.jsx(j,{keyStr:"Специализация",value:Ue[e.specialization]})]}),t.jsx($e,{width:"100%",margin:"0"}),t.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(H,{align:"left",size:4,children:"Дата"}),t.jsx(We,{studentGuid:e.studentGuid})]}),t.jsx(v,{onClick:o,text:"Перейти к студенту",width:"100%"})]})})},rt=r.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),dt=r.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),lt=r(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),D=r.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&y.red.main),ct=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,s)=>t.jsx(D,{hasDebt:s.hasDebt,children:s.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"},{title:"Группа здоровья",showFull:!0,field:"healthGroup",priority:"two",render:e=>{const s=Y[e];return t.jsx("span",{children:s})}}],pt=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(D,{hasDebt:s.hasDebt,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],ne=l({name:"pageLoaded",sid:"-n45vlm"});i({and:[{clock:ne,target:N.load}],or:{sid:"t4c48d"}});const q=()=>{const{open:e}=E(),{students:s,totalCount:n,page:o,search:d,loading:x,isExam:f}=h({students:$.$pEStudents,loading:$.$loading,totalCount:$.$pEStudentsTotalCount,page:$.$pEStudentsPage,search:Ve.$search,isExam:X.$isExam});return g.useEffect(()=>{ne()},[]),t.jsx(rt,{children:t.jsxs(dt,{children:[t.jsxs(lt,{children:[t.jsx(Ge,{value:d,setValue:He.update,size:"big"}),t.jsx(et,{})]}),t.jsx(G,{loading:x,data:s,columns:f?pt:ct,onRowClick:a=>{e(t.jsx(it,{student:a}),a.fullName)}}),t.jsx(be,{condition:!0,align:"right",pages:Math.floor(n/Ie),currentPage:o,setCurrentPage:N.setPage})]})})},T=l({name:"endSemester",sid:"-50inz6"}),oe=l({name:"reset",sid:"-jpbmuk"}),b=U(async({studentId:e})=>(await Pe(e),{studentGuid:e}),{name:"endSemesterFx",sid:"yxjzgs"});var u=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(u||{});const m=w({},{name:"$statuses",sid:"-dggygt"}).reset(oe);i({and:[{clock:T,source:m,fn:(e,{studentId:s})=>({...e,[s]:"loading"}),target:m}],or:{sid:"77dp82"}});i({and:[{clock:b.doneData,source:m,fn:(e,{studentGuid:s})=>({...e,[s]:"success"}),target:m}],or:{sid:"7q2pec"}});i({and:[{clock:b.fail,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"error"}),target:m}],or:{sid:"88rpkm"}});i({and:[{clock:b.done,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"success"}),target:m}],or:{sid:"8rgpqw"}});i({and:[{clock:T,target:b}],or:{sid:"9lpedr"}});const ut={endSemester:T,reset:oe},ae={statuses:m},ie=l({name:"selectedGroupChanged",sid:"-yusgt0"}),re=l({name:"load",sid:"4qbbdm"}),A=l({name:"reset",sid:"g7h26n"}),de=l({name:"endSemesterForGroup",sid:"842241"}),L=w("",{name:"$selectedGroup",sid:"-n8kqn6"}).on(ie,(e,s)=>s).reset(A),R=I({and:{source:L,effect:async e=>{const{data:s}=await Ne(0,{group:{value:e}},200);return s.data.students}},or:{name:"loadFx",sid:"xfnq33"}});i({and:[{source:L,filter:Boolean,target:R}],or:{sid:"gule9"}});const le=w([],{name:"$pEStudents",sid:"-7tia7t"}).on(R.doneData,(e,s)=>s).reset(A),mt=ue({and:[R.pending,Boolean],or:{name:"$loading",sid:"ghro6d"}}),xt=I({and:{source:le,effect:async e=>{e.forEach(s=>ut.endSemester({studentId:s.studentGuid}))}},or:{name:"endSemesterForGroupFx",sid:"3q6tp7"}});i({and:[{clock:ae.statuses,filter:e=>Object.values(e).every(s=>s!==u.LOADING),target:re}],or:{sid:"10n6r9"}});i({and:[{clock:de,target:xt}],or:{sid:"1exu6n"}});const gt={load:re,reset:A,selectedGroupChanged:ie,endSemesterForGroup:de},ht={$loading:mt,$pEStudents:le,$selectedGroup:L},c={events:gt,stores:ht},ft={[u.LOADING]:"Загрузка",[u.ERROR]:"Не зачтено",[u.SUCCESS]:"Успешно"},jt={[u.LOADING]:t.jsx(Fe,{}),[u.ERROR]:t.jsx(me,{color:y.red.main}),[u.SUCCESS]:t.jsx(xe,{color:y.green.main})},Ct=r.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),St=()=>{const[e,s]=h([ae.statuses,c.stores.$pEStudents]);return t.jsx(p,{p:"30px",d:"column",jc:"space-between",children:s.map(n=>{var o,d;return t.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[t.jsx(Ct,{children:n.fullName}),t.jsxs(p,{gap:"8px",w:"auto",children:[t.jsx(De,{align:"center",children:ft[(o=e[n.studentGuid])!=null?o:u.LOADING]}),jt[(d=e[n.studentGuid])!=null?d:u.LOADING]]})]},n.studentGuid)})})},ce=l({name:"pageLoaded",sid:"4q0med"}),yt=l({name:"pageUnloaded",sid:"he5rd5"});i({and:[{clock:ce,target:c.events.load}],or:{sid:"74c8dr"}});i({and:[{clock:yt,target:c.events.reset}],or:{sid:"76jer7"}});const wt=r.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),vt=r.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);r(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const kt=r(p).withConfig({componentId:"sc-s6hadh-3"})([""]),$t=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(D,{hasDebt:s.hasDebtFromPreviousSemester,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],O=()=>{const{open:e,close:s}=E(),{students:n,loading:o,selectedGroup:d}=h({students:c.stores.$pEStudents,loading:c.stores.$loading,selectedGroup:c.stores.$selectedGroup}),x=!!(n.length&&!o&&d),f=()=>{Ae.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{c.events.endSemesterForGroup(),e(t.jsx(St,{}))},onReject:()=>{s(),c.events.reset()}})};return g.useEffect(()=>(ce(),()=>{c.events.reset()}),[]),t.jsxs(wt,{children:[!x&&t.jsx(Te,{type:"alert",children:"Выберите группу чтобы провести зачет"}),t.jsxs(vt,{children:[t.jsxs(kt,{d:"row",jc:"space-between",p:"8px",children:[t.jsx(B,{leftIcon:t.jsx(W,{}),placeholder:"Номер группы",value:d,setValue:c.events.selectedGroupChanged,customMask:K.groupMask,onValueEmpty:()=>c.events.selectedGroupChanged(""),onHintClick:a=>a&&c.events.selectedGroupChanged(a.id),request:Q,size:"big"}),x&&t.jsx(v,{text:`Завершить семестр для ${d}`,width:"210px",background:y.green.main,textColor:y.white.main,onClick:f})]}),x&&t.jsx(G,{loading:o,data:n,columns:$t})]})]})},It=()=>{const[e,s]=h([Le.peTeacher,tt]);g.useEffect(()=>{ee()},[]);const n=[M.AdminAccess,M.SuperUser].some(o=>{var d;return(d=e==null?void 0:e.permissions)==null?void 0:d.includes(o)})?[{title:"Студенты",content:t.jsx(q,{})},{title:"Управление",content:t.jsx(Ze,{})},{title:"Мои Группы",content:t.jsx(z,{})},{title:"Проведение зачета",content:t.jsx(O,{})}]:[{title:"Студенты",content:t.jsx(q,{})},{title:"Мои Группы",content:t.jsx(z,{})},{title:"Проведение зачета",content:t.jsx(O,{})}];return t.jsx(Re,{padding:"10px",children:t.jsx(Me,{children:t.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[t.jsx(_e,{appearance:!1,pages:n,currentPage:s,setCurrentPage:F}),n[s].content]})})})};export{It as default};
