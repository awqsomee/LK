var be=Object.defineProperty,Ie=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var Q=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Q(e,n,t[n]);if(H)for(var n of H(t))Ne.call(t,n)&&Q(e,n,t[n]);return e},$=(e,t)=>Ie(e,Fe(t));var y=(e,t,n)=>new Promise((o,i)=>{var x=c=>{try{r(n.next(c))}catch(z){i(z)}},v=c=>{try{r(n.throw(c))}catch(z){i(z)}},r=c=>c.done?o(c.value):Promise.resolve(c.value).then(x,v);r((n=n.apply(e,t)).next())});import{p as d,e as ee,x as a,s as l,r as S,j as s,i as C,bQ as te,h as w,O as N,k as se,cY as De,aw as L,g as Te,cZ as _e,c as Ae,ax as ze}from"./vendor-8a1e4858.js";import{l as Le,m as ne,e as Re,n as Me,o as Oe,S as Ue,s as qe}from"./model-f3c7340a.js";import{c$ as We,p as oe,c_ as Ve,I as Be,B as b,R as D,T as ae,b4 as T,aO as ie,Q as re,N as de,w as He,d2 as Qe,q as Ke,r as Xe,X as G,f as p,S as Ye,g as Ze,aL as Je,a8 as et,K as k,D as tt,d3 as st,bn as nt,d4 as ot,k as at,P as it,aG as rt}from"./index-7ba18bcb.js";import{h as R,g as dt,p as le,q as ce,r as j,t as I,n as ue,o as lt,A as ct,P as K}from"./student-901452bf.js";const pe=d({name:"addCompetition",sid:"ebmam4"}),F=ee(e=>Le(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});a({and:[{clock:pe,target:F}],or:{sid:"-pbpeie"}});a({and:[{clock:F.failData,fn:e=>({message:We(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:oe.evokePopUpMessage}],or:{sid:"-p9i84y"}});a({and:[{clock:F.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:oe.evokePopUpMessage}],or:{sid:"-orwt5e"}});a({and:[{clock:F.doneData,target:R.load}],or:{sid:"-oabe5u"}});a({and:[{clock:F.doneData,target:Ve.close}],or:{sid:"-nwkjbt"}});const ut=l.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),pt=()=>{const[e,t]=S.useState(""),n=()=>{pe({competitionName:e})};return s.jsxs(ut,{children:[s.jsx(Be,{title:"Название",setValue:t,value:e}),s.jsx(b,{text:"Добавить",onClick:n})]})},mt=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(b,{onClick:()=>R.remove(e),text:"Удалить"})}],xt=l.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),gt=l.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);l.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const ft=()=>{const[e]=C([dt.$competitions]),{open:t}=D(),n=()=>{t(s.jsx(pt,{}))};return S.useEffect(()=>{R.load()},[]),s.jsx(gt,{children:s.jsxs(xt,{children:[s.jsx(ae,{align:"left",size:4,children:"Соревнования"}),s.jsx(b,{onClick:n,text:"Добавить соревнование"}),s.jsx(T,{data:e.map(o=>({name:o})),columns:mt,onRowClick:()=>{}})]})})};var h=(e=>(e.Group="group.groupName",e.Course="course",e))(h||{});const ht=l.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]),X=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],jt=()=>{var e,t,n;const[o,i]=C([fe.$filters,xe.$isExam]),[x,v]=S.useState((e=(t=o[h.Group])===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:"");return s.jsxs(ht,{children:[s.jsx(ie,{leftIcon:s.jsx(te,{}),placeholder:"Номер группы",value:x,setValue:v,customMask:re.groupMask,onValueEmpty:()=>E.addFilter({name:h.Group,value:""}),onHintClick:r=>{var c;return E.addFilter({name:h.Group,value:(c=r==null?void 0:r.id)!==null&&c!==void 0?c:"",strict:!0})},request:de,size:"big"}),s.jsx(He,{items:X,size:"big",placeholder:"Курс",selected:(n=X.find(r=>{var c;return r.id===((c=o[h.Course])===null||c===void 0?void 0:c.value)}))!==null&&n!==void 0?n:null,setSelected:r=>{if(r!=null&&r.id){E.addFilter({name:h.Course,value:r.id});return}E.addFilter({name:h.Course,value:""})}}),s.jsx(Qe,{title:"Зачет",state:i,action:r=>$t.setIsExam(r)})]})},me=d({name:"setIsExam",sid:"-cnkvj2"}),vt=w(!1,{name:"$isExam",sid:"dm910h"}).on(me,(e,t)=>t),xe={$isExam:vt},$t={setIsExam:me},ge=d({name:"addFilter",sid:"-vft0zv"}),M=d({name:"resetFilters",sid:"4bj7cf"}),P=w({},{name:"$filters",sid:"-hvw8r2"}).on(le.$search,(e,t)=>$(f({},e),{fullName:{value:t}})).on(ge,(e,{name:t,value:n,strict:o})=>{const i=f({},e);return n?$(f({},i),{[t]:{value:n,strict:o}}):(delete i[t],i)});a({and:[{clock:M,target:P.reinit}],or:{sid:"-piv7wv"}});a({and:[{clock:M,fn:()=>"",target:ce.update}],or:{sid:"-pgo1jf"}});const _=N({and:{source:{page:j.$pEStudentsPage,filters:P},effect:n=>y(void 0,[n],function*({filters:e,page:t}){const{data:o}=yield ne(t,e);return o.data})},or:{name:"loadPageFx",sid:"-aw3990"}});se({sid:"-oiksr1",fn:()=>De({source:L({and:[j.$pEStudentsPage,P],or:{name:"source",sid:"-5zq2o4"}}),timeout:200,target:I.load}),name:"none",method:"debounce"});a({and:[{clock:I.load,target:_}],or:{sid:"-o4a5bn"}});se({sid:"-o22yy7",fn:()=>Te({clock:P,target:j.$pEStudentsPage}),name:"none",method:"reset"});a({and:[{clock:_.doneData,fn:({students:e})=>e,target:j.$pEStudents}],or:{sid:"-noc446"}});a({and:[{clock:_.doneData,fn:({totalCount:e})=>e,target:j.$pEStudentsTotalCount}],or:{sid:"-nkhjyn"}});const St=L({and:[_.pending,Boolean],or:{name:"$loading",sid:"-ie5qgx"}}),fe={$loading:St,$filters:P},E={addFilter:ge,resetFilters:M},O=d({name:"pageIndexChanged",sid:"-yqoz9l"}),he=d({name:"pageLoaded",sid:"adwljo"}),Ct=w(0,{name:"$page",sid:"ndbopj"}).on(O,(e,t)=>t);a({and:[{clock:he,target:[I.load,Re.load]}],or:{sid:"8a9ft4"}});const je=d({name:"load",sid:"h6031v"}),ve=N({and:{effect:e=>y(void 0,null,function*(){var t;const{data:n}=yield Me((t=e==null?void 0:e.guid)!==null&&t!==void 0?t:"");return n.data}),source:Ke.user},or:{name:"loadFx",sid:"-fzko9u"}});a({and:[{clock:je,target:ve}],or:{sid:"-b17chi"}});const wt=w([],{name:"$myGroups",sid:"fudfdl"}).on(ve.doneData,(e,t)=>t);function Y(){const[e]=C([wt]);S.useEffect(()=>{je()},[]);const t=n=>{E.resetFilters(),E.addFilter({name:h.Group,value:n.groupName,strict:!0}),O(0)};return s.jsx(T,{onRowClick:t,data:e,columns:yt})}const yt=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],U=d({name:"endSemester",sid:"-50inz6"}),$e=d({name:"reset",sid:"-jpbmuk"}),A=ee(t=>y(void 0,[t],function*({studentId:e}){return yield Oe(e),{studentGuid:e}}),{name:"endSemesterFx",sid:"yxjzgs"});var m=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(m||{});const g=w({},{name:"$statuses",sid:"-dggygt"}).reset($e);a({and:[{clock:U,source:g,fn:(e,{studentId:t})=>$(f({},e),{[t]:"loading"}),target:g}],or:{sid:"77dp82"}});a({and:[{clock:A.doneData,source:g,fn:(e,{studentGuid:t})=>$(f({},e),{[t]:"success"}),target:g}],or:{sid:"7q2pec"}});a({and:[{clock:A.fail,source:g,fn:(e,{params:t})=>$(f({},e),{[t.studentId]:"error"}),target:g}],or:{sid:"88rpkm"}});a({and:[{clock:A.done,source:g,fn:(e,{params:t})=>$(f({},e),{[t.studentId]:"success"}),target:g}],or:{sid:"8rgpqw"}});a({and:[{clock:U,target:A}],or:{sid:"9lpedr"}});const kt={endSemester:U,reset:$e},Se={statuses:g},Ce=d({name:"selectedGroupChanged",sid:"s0aw4"}),we=d({name:"load",sid:"9ilxxu"}),q=d({name:"reset",sid:"-j31by1"}),ye=d({name:"endSemesterForGroup",sid:"-nt1qon"}),W=w("",{name:"$selectedGroup",sid:"490386"}).on(Ce,(e,t)=>t).reset(q),V=N({and:{source:W,effect:e=>y(void 0,null,function*(){const{data:t}=yield ne(0,{group:{value:e}},200);return t.data.students})},or:{name:"loadFx",sid:"-ss5zzd"}});a({and:[{source:W,filter:Boolean,target:V}],or:{sid:"w37rbd"}});const ke=w([],{name:"$pEStudents",sid:"dtxsun"}).on(V.doneData,(e,t)=>t).reset(q),Et=L({and:[V.pending,Boolean],or:{name:"$loading",sid:"-tlarrn"}}),Gt=N({and:{source:ke,effect:e=>y(void 0,null,function*(){e.forEach(t=>kt.endSemester({studentId:t.studentGuid}))})},or:{name:"endSemesterForGroupFx",sid:"-xi1del"}});a({and:[{clock:Se.statuses,filter:e=>Object.values(e).every(t=>t!==m.LOADING),target:we}],or:{sid:"wn0cod"}});a({and:[{clock:ye,target:Gt}],or:{sid:"x1b03r"}});const bt={load:we,reset:q,selectedGroupChanged:Ce,endSemesterForGroup:ye},It={$loading:Et,$pEStudents:ke,$selectedGroup:W},u={events:bt,stores:It},Ft={[m.LOADING]:"Загрузка",[m.ERROR]:"Не зачтено",[m.SUCCESS]:"Успешно"},Pt={[m.LOADING]:s.jsx(Xe,{}),[m.ERROR]:s.jsx(_e,{color:G.red.main}),[m.SUCCESS]:s.jsx(Ae,{color:G.green.main})},Nt=l.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),Dt=()=>{const[e,t]=C([Se.statuses,u.stores.$pEStudents]);return s.jsx(p,{p:"30px",d:"column",jc:"space-between",children:t.map(n=>{var o,i;return s.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(Nt,{children:n.fullName}),s.jsxs(p,{gap:"8px",w:"auto",children:[s.jsx(Ye,{align:"center",children:Ft[(o=e[n.studentGuid])!==null&&o!==void 0?o:m.LOADING]}),Pt[(i=e[n.studentGuid])!==null&&i!==void 0?i:m.LOADING]]})]},n.studentGuid)})})},Tt=l.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),_t=l.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),At=l(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),B=l.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&G.red.main),zt=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],Ee=d({name:"pageLoaded",sid:"4q0med"}),Lt=d({name:"pageUnloaded",sid:"he5rd5"});a({and:[{clock:Ee,target:u.events.load}],or:{sid:"74c8dr"}});a({and:[{clock:Lt,target:u.events.reset}],or:{sid:"76jer7"}});const Rt=l.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),Mt=l.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);l(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const Ot=l(p).withConfig({componentId:"sc-s6hadh-3"})([""]),Z=()=>{const{open:e,close:t}=D(),{students:n,loading:o,selectedGroup:i}=C({students:u.stores.$pEStudents,loading:u.stores.$loading,selectedGroup:u.stores.$selectedGroup}),x=!!(n.length&&!o&&i),v=()=>{Je.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{u.events.endSemesterForGroup(),e(s.jsx(Dt,{}))},onReject:()=>{t(),u.events.reset()}})};return S.useEffect(()=>(Ee(),()=>{u.events.reset()}),[]),s.jsxs(Rt,{children:[!x&&s.jsx(Ze,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Mt,{children:[s.jsxs(Ot,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(ie,{leftIcon:s.jsx(te,{}),placeholder:"Номер группы",value:i,setValue:u.events.selectedGroupChanged,customMask:re.groupMask,onValueEmpty:()=>u.events.selectedGroupChanged(""),onHintClick:r=>r&&u.events.selectedGroupChanged(r.id),request:de,size:"big"}),x&&s.jsx(b,{text:`Завершить семестр для ${i}`,width:"210px",background:G.green.main,textColor:G.white.main,onClick:v})]}),x&&s.jsx(T,{loading:o,data:n,columns:zt})]})]})},Ut=(e,t)=>{let n=e;for(const o in t)n=n.replace(`:${o}`,t[o]);return n};l.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const qt=l.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],et.isNotMobile),Wt=({student:e})=>{const t=ze(),{close:n}=D(),o=()=>{t.push(Ut(st,{studentId:e.studentGuid})),n()};return s.jsx(qt,{children:s.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(k,{keyStr:"Группа",value:e.groupNumber}),s.jsx(k,{keyStr:"Баллы",value:e.totalPoints}),s.jsx(k,{keyStr:"Курс",value:e.course}),s.jsx(k,{keyStr:"ЛМС",value:e.lmsPoints}),s.jsx(k,{keyStr:"Группа здоровья",value:ue[e.healthGroup]}),s.jsx(k,{keyStr:"Специализация",value:lt[e.specialization]})]}),s.jsx(tt,{width:"100%",margin:"0"}),s.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(ae,{align:"left",size:4,children:"Дата"}),s.jsx(ct,{studentGuid:e.studentGuid})]}),s.jsx(b,{onClick:o,text:"Перейти к студенту",width:"100%"})]})})},Vt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebt,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"},{title:"Группа здоровья",showFull:!0,field:"healthGroup",priority:"two",render:e=>{const t=ue[e];return s.jsx("span",{children:t})}}],Bt=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebt,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],Ge=d({name:"pageLoaded",sid:"-n45vlm"});a({and:[{clock:Ge,target:I.load}],or:{sid:"t4c48d"}});const J=()=>{const{open:e}=D(),{students:t,totalCount:n,page:o,search:i,loading:x,isExam:v}=C({students:j.$pEStudents,loading:fe.$loading,totalCount:j.$pEStudentsTotalCount,page:j.$pEStudentsPage,search:le.$search,isExam:xe.$isExam});return S.useEffect(()=>{Ge()},[]),s.jsx(Tt,{children:s.jsxs(_t,{children:[s.jsxs(At,{children:[s.jsx(nt,{value:i,setValue:ce.update,size:"big"}),s.jsx(jt,{})]}),s.jsx(T,{loading:x,data:t,columns:v?Bt:Vt,onRowClick:r=>{e(s.jsx(Wt,{student:r}),r.fullName)}}),s.jsx(ot,{condition:!0,align:"right",pages:Math.floor(n/Ue),currentPage:o,setCurrentPage:I.setPage})]})})},Zt=()=>{const[e,t]=C([qe.peTeacher,Ct]);S.useEffect(()=>{he()},[]);const n=[K.AdminAccess,K.SuperUser].some(o=>{var i;return e==null||(i=e.permissions)===null||i===void 0?void 0:i.includes(o)})?[{title:"Студенты",content:s.jsx(J,{})},{title:"Управление",content:s.jsx(ft,{})},{title:"Мои Группы",content:s.jsx(Y,{})},{title:"Проведение зачета",content:s.jsx(Z,{})}]:[{title:"Студенты",content:s.jsx(J,{})},{title:"Мои Группы",content:s.jsx(Y,{})},{title:"Проведение зачета",content:s.jsx(Z,{})}];return s.jsx(at,{padding:"10px",children:s.jsx(it,{children:s.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(rt,{appearance:!1,pages:n,currentPage:t,setCurrentPage:O}),n[t].content]})})})};export{Zt as default};
