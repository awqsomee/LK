var be=Object.defineProperty,Ie=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var K=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&K(e,n,t[n]);if(H)for(var n of H(t))De.call(t,n)&&K(e,n,t[n]);return e},$=(e,t)=>Ie(e,Pe(t));var y=(e,t,n)=>new Promise((o,i)=>{var x=c=>{try{r(n.next(c))}catch(z){i(z)}},j=c=>{try{r(n.throw(c))}catch(z){i(z)}},r=c=>c.done?o(c.value):Promise.resolve(c.value).then(x,j);r((n=n.apply(e,t)).next())});import{p as d,e as ee,x as a,s as l,r as S,j as s,i as C,bP as te,h as w,O as D,k as se,cV as Ne,av as L,g as Te,cW as _e,c as Ae,aw as ze}from"./vendor-60fdf703.js";import{l as Le,m as ne,e as Re,n as Me,o as Oe,S as Ue,s as We}from"./model-407eac61.js";import{c$ as qe,aQ as oe,c_ as Ve,I as Be,B as b,x as N,T as ae,b5 as T,aG as ie,w as re,v as de,b3 as He,d2 as Ke,o as Qe,aZ as Ze,E as G,d as p,S as Xe,f as Ye,aD as Je,a0 as et,K as k,D as tt,d3 as st,bo as nt,d4 as ot,j as at,P as it,ay as rt}from"./index-e6036b0c.js";import{h as R,g as dt,p as le,q as ce,r as v,t as I,n as ue,o as lt,A as ct,P as Q}from"./student-b841687e.js";const pe=d({name:"addCompetition",sid:"ebmam4"}),P=ee(e=>Le(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});a({and:[{clock:pe,target:P}],or:{sid:"-pbpeie"}});a({and:[{clock:P.failData,fn:e=>({message:qe(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:oe.evokePopUpMessage}],or:{sid:"-p9i84y"}});a({and:[{clock:P.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:oe.evokePopUpMessage}],or:{sid:"-orwt5e"}});a({and:[{clock:P.doneData,target:R.load}],or:{sid:"-oabe5u"}});a({and:[{clock:P.doneData,target:Ve.close}],or:{sid:"-nwkjbt"}});const ut=l.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),pt=()=>{const[e,t]=S.useState(""),n=()=>{pe({competitionName:e})};return s.jsxs(ut,{children:[s.jsx(Be,{title:"Название",setValue:t,value:e}),s.jsx(b,{text:"Добавить",onClick:n})]})},mt=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(b,{onClick:()=>R.remove(e),text:"Удалить"})}],xt=l.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),gt=l.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);l.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const ft=()=>{const[e]=C([dt.$competitions]),{open:t}=N(),n=()=>{t(s.jsx(pt,{}))};return S.useEffect(()=>{R.load()},[]),s.jsx(gt,{children:s.jsxs(xt,{children:[s.jsx(ae,{align:"left",size:4,children:"Соревнования"}),s.jsx(b,{onClick:n,text:"Добавить соревнование"}),s.jsx(T,{data:e.map(o=>({name:o})),columns:mt,onRowClick:()=>{}})]})})};var h=(e=>(e.Group="group.groupName",e.Course="course",e))(h||{});const ht=l.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]),Z=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],vt=()=>{var e,t,n;const[o,i]=C([fe.$filters,xe.$isExam]),[x,j]=S.useState((e=(t=o[h.Group])===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:"");return s.jsxs(ht,{children:[s.jsx(ie,{leftIcon:s.jsx(te,{}),placeholder:"Номер группы",value:x,setValue:j,customMask:re.groupMask,onValueEmpty:()=>E.addFilter({name:h.Group,value:""}),onHintClick:r=>{var c;return E.addFilter({name:h.Group,value:(c=r==null?void 0:r.id)!==null&&c!==void 0?c:"",strict:!0})},request:de,size:"big"}),s.jsx(He,{items:Z,size:"big",placeholder:"Курс",selected:(n=Z.find(r=>{var c;return r.id===((c=o[h.Course])===null||c===void 0?void 0:c.value)}))!==null&&n!==void 0?n:null,setSelected:r=>{if(r!=null&&r.id){E.addFilter({name:h.Course,value:r.id});return}E.addFilter({name:h.Course,value:""})}}),s.jsx(Ke,{title:"Зачет",state:i,action:r=>$t.setIsExam(r)})]})},me=d({name:"setIsExam",sid:"-cnkvj2"}),jt=w(!1,{name:"$isExam",sid:"dm910h"}).on(me,(e,t)=>t),xe={$isExam:jt},$t={setIsExam:me},ge=d({name:"addFilter",sid:"-vft0zv"}),M=d({name:"resetFilters",sid:"4bj7cf"}),F=w({},{name:"$filters",sid:"-hvw8r2"}).on(le.$search,(e,t)=>$(f({},e),{fullName:{value:t}})).on(ge,(e,{name:t,value:n,strict:o})=>{const i=f({},e);return n?$(f({},i),{[t]:{value:n,strict:o}}):(delete i[t],i)});a({and:[{clock:M,target:F.reinit}],or:{sid:"-piv7wv"}});a({and:[{clock:M,fn:()=>"",target:ce.update}],or:{sid:"-pgo1jf"}});const _=D({and:{source:{page:v.$pEStudentsPage,filters:F},effect:n=>y(void 0,[n],function*({filters:e,page:t}){const{data:o}=yield ne(t,e);return o.data})},or:{name:"loadPageFx",sid:"-aw3990"}});se({sid:"-oiksr1",fn:()=>Ne({source:L({and:[v.$pEStudentsPage,F],or:{name:"source",sid:"-5zq2o4"}}),timeout:200,target:I.load}),name:"none",method:"debounce"});a({and:[{clock:I.load,target:_}],or:{sid:"-o4a5bn"}});se({sid:"-o22yy7",fn:()=>Te({clock:F,target:v.$pEStudentsPage}),name:"none",method:"reset"});a({and:[{clock:_.doneData,fn:({students:e})=>e,target:v.$pEStudents}],or:{sid:"-noc446"}});a({and:[{clock:_.doneData,fn:({totalCount:e})=>e,target:v.$pEStudentsTotalCount}],or:{sid:"-nkhjyn"}});const St=L({and:[_.pending,Boolean],or:{name:"$loading",sid:"-ie5qgx"}}),fe={$loading:St,$filters:F},E={addFilter:ge,resetFilters:M},O=d({name:"pageIndexChanged",sid:"-yqoz9l"}),he=d({name:"pageLoaded",sid:"adwljo"}),Ct=w(0,{name:"$page",sid:"ndbopj"}).on(O,(e,t)=>t);a({and:[{clock:he,target:[I.load,Re.load]}],or:{sid:"8a9ft4"}});const ve=d({name:"load",sid:"h6031v"}),je=D({and:{effect:e=>y(void 0,null,function*(){var t;const{data:n}=yield Me((t=e==null?void 0:e.guid)!==null&&t!==void 0?t:"");return n.data}),source:Qe.user},or:{name:"loadFx",sid:"-fzko9u"}});a({and:[{clock:ve,target:je}],or:{sid:"-b17chi"}});const wt=w([],{name:"$myGroups",sid:"fudfdl"}).on(je.doneData,(e,t)=>t);function X(){const[e]=C([wt]);S.useEffect(()=>{ve()},[]);const t=n=>{E.resetFilters(),E.addFilter({name:h.Group,value:n.groupName,strict:!0}),O(0)};return s.jsx(T,{onRowClick:t,data:e,columns:yt})}const yt=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],U=d({name:"endSemester",sid:"-50inz6"}),$e=d({name:"reset",sid:"-jpbmuk"}),A=ee(t=>y(void 0,[t],function*({studentId:e}){return yield Oe(e),{studentGuid:e}}),{name:"endSemesterFx",sid:"yxjzgs"});var m=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(m||{});const g=w({},{name:"$statuses",sid:"-dggygt"}).reset($e);a({and:[{clock:U,source:g,fn:(e,{studentId:t})=>$(f({},e),{[t]:"loading"}),target:g}],or:{sid:"77dp82"}});a({and:[{clock:A.doneData,source:g,fn:(e,{studentGuid:t})=>$(f({},e),{[t]:"success"}),target:g}],or:{sid:"7q2pec"}});a({and:[{clock:A.fail,source:g,fn:(e,{params:t})=>$(f({},e),{[t.studentId]:"error"}),target:g}],or:{sid:"88rpkm"}});a({and:[{clock:A.done,source:g,fn:(e,{params:t})=>$(f({},e),{[t.studentId]:"success"}),target:g}],or:{sid:"8rgpqw"}});a({and:[{clock:U,target:A}],or:{sid:"9lpedr"}});const kt={endSemester:U,reset:$e},Se={statuses:g},Ce=d({name:"selectedGroupChanged",sid:"s0aw4"}),we=d({name:"load",sid:"9ilxxu"}),W=d({name:"reset",sid:"-j31by1"}),ye=d({name:"endSemesterForGroup",sid:"-nt1qon"}),q=w("",{name:"$selectedGroup",sid:"490386"}).on(Ce,(e,t)=>t).reset(W),V=D({and:{source:q,effect:e=>y(void 0,null,function*(){const{data:t}=yield ne(0,{group:{value:e}},200);return t.data.students})},or:{name:"loadFx",sid:"-ss5zzd"}});a({and:[{source:q,filter:Boolean,target:V}],or:{sid:"w37rbd"}});const ke=w([],{name:"$pEStudents",sid:"dtxsun"}).on(V.doneData,(e,t)=>t).reset(W),Et=L({and:[V.pending,Boolean],or:{name:"$loading",sid:"-tlarrn"}}),Gt=D({and:{source:ke,effect:e=>y(void 0,null,function*(){e.forEach(t=>kt.endSemester({studentId:t.studentGuid}))})},or:{name:"endSemesterForGroupFx",sid:"-xi1del"}});a({and:[{clock:Se.statuses,filter:e=>Object.values(e).every(t=>t!==m.LOADING),target:we}],or:{sid:"wn0cod"}});a({and:[{clock:ye,target:Gt}],or:{sid:"x1b03r"}});const bt={load:we,reset:W,selectedGroupChanged:Ce,endSemesterForGroup:ye},It={$loading:Et,$pEStudents:ke,$selectedGroup:q},u={events:bt,stores:It},Pt={[m.LOADING]:"Загрузка",[m.ERROR]:"Не зачтено",[m.SUCCESS]:"Успешно"},Ft={[m.LOADING]:s.jsx(Ze,{}),[m.ERROR]:s.jsx(_e,{color:G.red.main}),[m.SUCCESS]:s.jsx(Ae,{color:G.green.main})},Dt=l.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),Nt=()=>{const[e,t]=C([Se.statuses,u.stores.$pEStudents]);return s.jsx(p,{p:"30px",d:"column",jc:"space-between",children:t.map(n=>{var o,i;return s.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(Dt,{children:n.fullName}),s.jsxs(p,{gap:"8px",w:"auto",children:[s.jsx(Xe,{align:"center",children:Pt[(o=e[n.studentGuid])!==null&&o!==void 0?o:m.LOADING]}),Ft[(i=e[n.studentGuid])!==null&&i!==void 0?i:m.LOADING]]})]},n.studentGuid)})})},Tt=l.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),_t=l.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),At=l(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),B=l.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&G.red.main),zt=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],Ee=d({name:"pageLoaded",sid:"4q0med"}),Lt=d({name:"pageUnloaded",sid:"he5rd5"});a({and:[{clock:Ee,target:u.events.load}],or:{sid:"74c8dr"}});a({and:[{clock:Lt,target:u.events.reset}],or:{sid:"76jer7"}});const Rt=l.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),Mt=l.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);l(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const Ot=l(p).withConfig({componentId:"sc-s6hadh-3"})([""]),Y=()=>{const{open:e,close:t}=N(),{students:n,loading:o,selectedGroup:i}=C({students:u.stores.$pEStudents,loading:u.stores.$loading,selectedGroup:u.stores.$selectedGroup}),x=!!(n.length&&!o&&i),j=()=>{Je.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{u.events.endSemesterForGroup(),e(s.jsx(Nt,{}))},onReject:()=>{t(),u.events.reset()}})};return S.useEffect(()=>(Ee(),()=>{u.events.reset()}),[]),s.jsxs(Rt,{children:[!x&&s.jsx(Ye,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Mt,{children:[s.jsxs(Ot,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(ie,{leftIcon:s.jsx(te,{}),placeholder:"Номер группы",value:i,setValue:u.events.selectedGroupChanged,customMask:re.groupMask,onValueEmpty:()=>u.events.selectedGroupChanged(""),onHintClick:r=>r&&u.events.selectedGroupChanged(r.id),request:de,size:"big"}),x&&s.jsx(b,{text:`Завершить семестр для ${i}`,width:"210px",background:G.green.main,textColor:G.white.main,onClick:j})]}),x&&s.jsx(T,{loading:o,data:n,columns:zt})]})]})},Ut=(e,t)=>{let n=e;for(const o in t)n=n.replace(`:${o}`,t[o]);return n};l.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const Wt=l.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],et.isNotMobile),qt=({student:e})=>{const t=ze(),{close:n}=N(),o=()=>{t.push(Ut(st,{studentId:e.studentGuid})),n()};return s.jsx(Wt,{children:s.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(k,{keyStr:"Группа",value:e.groupNumber}),s.jsx(k,{keyStr:"Баллы",value:e.totalPoints}),s.jsx(k,{keyStr:"Курс",value:e.course}),s.jsx(k,{keyStr:"ЛМС",value:e.lmsPoints}),s.jsx(k,{keyStr:"Группа здоровья",value:ue[e.healthGroup]}),s.jsx(k,{keyStr:"Специализация",value:lt[e.specialization]})]}),s.jsx(tt,{width:"100%",margin:"0"}),s.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(ae,{align:"left",size:4,children:"Дата"}),s.jsx(ct,{studentGuid:e.studentGuid})]}),s.jsx(b,{onClick:o,text:"Перейти к студенту",width:"100%"})]})})},Vt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebt,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"},{title:"Группа здоровья",showFull:!0,field:"healthGroup",priority:"two",render:e=>{const t=ue[e];return s.jsx("span",{children:t})}}],Bt=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(B,{hasDebt:t.hasDebt,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],Ge=d({name:"pageLoaded",sid:"-n45vlm"});a({and:[{clock:Ge,target:I.load}],or:{sid:"t4c48d"}});const J=()=>{const{open:e}=N(),{students:t,totalCount:n,page:o,search:i,loading:x,isExam:j}=C({students:v.$pEStudents,loading:fe.$loading,totalCount:v.$pEStudentsTotalCount,page:v.$pEStudentsPage,search:le.$search,isExam:xe.$isExam});return S.useEffect(()=>{Ge()},[]),s.jsx(Tt,{children:s.jsxs(_t,{children:[s.jsxs(At,{children:[s.jsx(nt,{value:i,setValue:ce.update,size:"big"}),s.jsx(vt,{})]}),s.jsx(T,{loading:x,data:t,columns:j?Bt:Vt,onRowClick:r=>{e(s.jsx(qt,{student:r}),r.fullName)}}),s.jsx(ot,{condition:!0,align:"right",pages:Math.floor(n/Ue),currentPage:o,setCurrentPage:I.setPage})]})})},Yt=()=>{const[e,t]=C([We.peTeacher,Ct]);S.useEffect(()=>{he()},[]);const n=[Q.AdminAccess,Q.SuperUser].some(o=>{var i;return e==null||(i=e.permissions)===null||i===void 0?void 0:i.includes(o)})?[{title:"Студенты",content:s.jsx(J,{})},{title:"Управление",content:s.jsx(ft,{})},{title:"Мои Группы",content:s.jsx(X,{})},{title:"Проведение зачета",content:s.jsx(Y,{})}]:[{title:"Студенты",content:s.jsx(J,{})},{title:"Мои Группы",content:s.jsx(X,{})},{title:"Проведение зачета",content:s.jsx(Y,{})}];return s.jsx(at,{padding:"10px",children:s.jsx(it,{children:s.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(rt,{appearance:!1,pages:n,currentPage:t,setCurrentPage:O}),n[t].content]})})})};export{Yt as default};
