import{p as d,e as j,x as a,s as c,r as l,j as s,d as Ue,h as S,m as I,cK as pe,q as v,cL as me,bp as ge,v as K,a3 as Oe,J as Re,cM as qe,c as We}from"./vendor-905eebdf.js";import{p as x,d as p,m as $,n as A,o as u,h as M,q as Q,r as V,u as z,t as _,v as xe,w as he,x as fe,y as He,z as Be,b as Ke,D as Qe,E as h,K as F,G as Je,H as Xe,J as E,L as Ye,N as Ze,O as et,M as tt,Q as st,R as nt,U as at,P as ot,V as rt}from"./index-fb4b93f1.js";import{j as L,e as J,P as T,s as it,a as dt,b as je,c as C,d as ct,f as X,g as w,A as lt,h as D,i as ut,k as pt,S as mt,l as gt,m as xt,n as ie}from"./ui-9436b120.js";const ht=e=>`mutation addNewComp{
      createCompetition(input: ${L(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,ke=d({name:"addCompetition",sid:"ebmam4"}),N=j(async e=>await x(ht(e)),{name:"addCompetitionFx",sid:"-cvy5ax"});a({and:[{clock:ke,target:N}],or:{sid:"-pbpeie"}});a({and:[{clock:N.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-p9i84y"}});a({and:[{clock:N.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-orwt5e"}});a({and:[{clock:N.doneData,target:J.load}],or:{sid:"-oabe5u"}});a({and:[{clock:N.doneData,target:$.close}],or:{sid:"-nwkjbt"}});const ft=c.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),jt=()=>{const[e,t]=l.useState(""),n=()=>{ke({competitionName:e})};return s.jsxs(ft,{children:[s.jsx(A,{title:"Название",setValue:t,value:e}),s.jsx(u,{text:"Добавить",onClick:n})]})},H=d({name:"onSearch",sid:"fuixid"}),Se=d({name:"resetTeachers",sid:"-mgqjgd"}),ve=j(async e=>{const{employees:t}=(await Ue.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t},{name:"searchFx",sid:"mlfz2u"}),U=S(null,{name:"$search",sid:"-xofcmw"}).on(H,(e,t)=>t);I({sid:"hxcmlu",fn:()=>pe({source:a({and:[{source:U,filter:e=>e!==null}],or:{name:"source",sid:"icgzvh"}}),timeout:200,target:ve}),name:"none",method:"debounce"});a({and:[{source:U,filter:e=>e!==null}],or:{sid:"idantb"}});const kt=S([],{name:"$teachers",sid:"1k23iz"}).on(ve.doneData,(e,t)=>t);a({and:[{clock:Se,target:U.reinit}],or:{sid:"ig1ms4"}});const St=({onChange:e,onSearchChange:t})=>{const[n,i]=v([kt,U]),o=r=>{r!=null&&r.id&&e(r.id)};return l.useEffect(()=>(H(""),Se),[]),l.useEffect(()=>{i&&(t==null||t(i))},[i]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Q,{value:i??"",setValue:H,hints:n.map(r=>({id:r.guid,title:r.fullName,value:r.guid})),onHintClick:o})]})},vt=e=>`mutation addRole {
      givePermissionsToTeacher(
        input: { permissions: ${e.permission}, teacherGuid: "${e.teacherGuid}"  }
      ) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ye=d({name:"addPermission",sid:"-dbr3op"}),O=j(async e=>await x(vt(e)),{name:"addPermissionToTeacherFx",sid:"dklz3u"});a({and:[{clock:O.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"77lps0"}});a({and:[{clock:O.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"77g5rt"}});a({and:[{clock:ye,target:O}],or:{sid:"7p1krd"}});const yt=e=>`mutation createTeacher{
        createTeacher(
          input: ${L(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ce=d({name:"createTeacher",sid:"m0x5nn"}),b=j(async e=>{const{permission:t,...n}=e;return await x(yt(n)),e},{name:"createTeacherFx",sid:"-i2kv8n"});a({and:[{clock:b.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-ifnc2u"}});a({and:[{clock:b.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-hy1x3a"}});a({and:[{clock:b.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:ye}],or:{sid:"-hggi3q"}});a({and:[{clock:Ce,target:b}],or:{sid:"-glo0vi"}});a({and:[{clock:I({sid:"rqye9o",fn:()=>me({events:[b.doneData,O.doneData]}),name:"clock",method:"combineEvents"}),target:$.close}],or:{sid:"-gjgui2"}});const Ct=c.div.withConfig({componentId:"sc-1pcicfk-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;@media (max-width:800px){min-height:40vh;}"]),wt={[T.AdminAccess]:"Админ",[T.OnlineCourseAccess]:"Доступ к ЛМС",[T.SecretaryAccess]:"Секретарь",[T.DefaultAccess]:"Преподаватель"},$t=Object.entries(wt).map(([e,t])=>({title:t,id:e})),Et=()=>{const[e,t]=l.useState(""),[n,i]=l.useState(""),[o,r]=l.useState(null),m=()=>{Ce({fullName:e,teacherGuid:n,permission:o==null?void 0:o.id})};return s.jsxs(Ct,{children:[s.jsx(St,{onChange:i,onSearchChange:t}),s.jsx(V,{title:"Доступ",items:$t,setSelected:r,selected:o}),s.jsx(u,{text:"Добавить",onClick:m})]})},B=d({name:"onSearch",sid:"j7besz"}),we=d({name:"resetTeachers",sid:"-a9h86n"}),$e=j(async e=>{const{teachers:{items:t}}=await x(`
    query teachers {
      teachers(
          take: 100
          order: { fullName: ASC }
          where: { fullName: { contains: "${e}" } }
        ) {
          items {
            fullName
            teacherGuid
          }
        }
      }`);return t},{name:"searchFx",sid:"-b5w4ws"}),Y=S("",{name:"$search",sid:"r2pyev"}).on(B,(e,t)=>t);I({sid:"-9ahndp",fn:()=>pe({source:a({and:[{source:Y,filter:e=>e!==null}],or:{name:"source",sid:"7ggoek"}}),timeout:200,target:$e}),name:"none",method:"debounce"});const Nt=S([],{name:"$teachers",sid:"-7sjeeq"}).on($e.doneData,(e,t)=>t);a({and:[{clock:we,target:Y.reinit}],or:{sid:"-8tztkv"}});const bt=({onChange:e})=>{const[t,n]=v([Nt,Y]),i=o=>{o!=null&&o.id&&e(o.id)};return l.useEffect(()=>(B(""),we),[]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Q,{value:n,setValue:B,hints:t.map(o=>({id:o.teacherGuid,title:o.fullName,value:o.teacherGuid})),onHintClick:i})]})},Gt=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${L(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Pt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${L(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Z=d({name:"assignVisitValue",sid:"-h3per6"}),G=j(async({groupName:e,newVisitValue:t})=>await x(Pt({groupName:e,newVisitValue:t})),{name:"assignVisitValueFx",sid:"prgz95"});a({and:[{clock:G.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"t0dbhx"}});a({and:[{clock:G.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"thyqhh"}});a({and:[{clock:Z,target:G}],or:{sid:"tzk5h1"}});a({and:[{clock:G.doneData,target:$.close}],or:{sid:"udb0b2"}});const ee=d({name:"assignCurator",sid:"db01gr"}),R=j(async({groupName:e,teacherGuid:t})=>await x(Gt({groupName:e,teacherGuid:t})),{name:"assignCuratorFx",sid:"-u6x6r"});a({and:[{clock:ee,target:R}],or:{sid:"-odqzm8"}});a({and:[{clock:ee,target:Z}],or:{sid:"-o004s7"}});a({and:[{clock:R.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-nxsyer"}});a({and:[{clock:R.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-ng7jf7"}});a({and:[{clock:I({sid:"-7rq2ll",fn:()=>me({events:[R.doneData,G.doneData]}),name:"clock",method:"combineEvents"}),target:$.close}],or:{sid:"-mym4fn"}});const Ft=c.div.withConfig({componentId:"sc-1709s2v-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Tt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Dt=()=>{const[e,t]=l.useState(null),[n,i]=l.useState(""),[o,r]=l.useState(""),m=()=>{ee({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:o,teacherGuid:n})};return s.jsxs(Ft,{children:[s.jsx(A,{title:"Группа",setValue:r,value:o}),s.jsx(bt,{onChange:i}),s.jsx(V,{title:"Стоимость посещения",items:Tt,selected:e,setSelected:t}),s.jsx(u,{text:"Добавить",onClick:m})]})},It=c.div.withConfig({componentId:"sc-d9fl0b-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),At=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Mt=()=>{const[e,t]=l.useState(null),[n,i]=l.useState(""),o=()=>{Z({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:n})};return s.jsxs(It,{children:[s.jsx(A,{title:"Группа",setValue:i,value:n}),s.jsx(V,{title:"Стоимость",items:At,selected:e,setSelected:t}),s.jsx(u,{text:"Добавить",onClick:o})]})},Vt=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,Ee=d({name:"startNewSemester",sid:"-4hyemj"}),q=j(async e=>await x(Vt(e)),{name:"startNewSemesterFx",sid:"si3fvk"});a({and:[{clock:Ee,target:q}],or:{sid:"xfywbf"}});a({and:[{clock:q.doneData,target:$.close}],or:{sid:"xi62ov"}});a({and:[{clock:q.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"xkd92b"}});a({and:[{clock:q.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"y0v2v5"}});const zt={startNewSemester:Ee},_t=c.div.withConfig({componentId:"sc-g01kzf-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Lt=()=>{const[e,t]=l.useState(""),n=()=>{zt.startNewSemester(e)};return s.jsxs(_t,{children:[s.jsx(A,{title:"Новый семестр",setValue:t,value:e}),s.jsx(u,{text:"Начать новый семестр",onClick:n})]})},Ut=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,Ne=d({name:"updateStudentsList",sid:"aglp7o"}),P=j(async()=>await x(Ut()),{name:"updateStudentsListFx",sid:"-1bdzx1"});a({and:[{clock:Ne,target:P}],or:{sid:"-uw2dm7"}});a({and:[{clock:P.doneData,target:$.close}],or:{sid:"-utv78r"}});a({and:[{clock:P.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-uro0vb"}});a({and:[{clock:P.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:p.evokePopUpMessage}],or:{sid:"-ua2lvr"}});P.pending;const Ot=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(u,{onClick:()=>J.remove(e),text:"Удалить"})}],Rt=c.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),qt=c.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;gap:10px;"]),Wt=c.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]),Ht=()=>{const[e,t]=v([Ne,it.$competitions]),{open:n}=z(),i=()=>{n(s.jsx(Et,{}))},o=()=>{n(s.jsx(Dt,{}))},r=()=>{n(s.jsx(Mt,{}))},m=()=>{n(s.jsx(jt,{}))},y=()=>{n(s.jsx(Lt,{}))};return l.useEffect(()=>{J.load()},[]),s.jsxs(qt,{children:[s.jsxs(Wt,{children:[s.jsx(u,{onClick:i,text:"Добавить нового преподавателя"}),s.jsx(u,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(u,{onClick:o,text:"Назначить куратора"}),s.jsx(u,{onClick:r,text:"Назначить стоимость посещения"}),s.jsx(u,{onClick:y,text:"Начать новый семестр"})]}),s.jsxs(Rt,{children:[s.jsx(M,{align:"left",size:4,children:"Соревнования"}),s.jsx(u,{onClick:m,text:"Добавить соревнование"}),s.jsx(_,{data:t.map(Le=>({name:Le})),columns:Ot,onRowClick:()=>{}})]})]})},Bt=c.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var be=(e=>(e.Group="group.groupName",e.Course="course",e))(be||{});const de=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Kt=()=>{var o;const[e,t]=v([dt.$filters,je.$isExam]),[n,i]=l.useState(((o=e["group.groupName"])==null?void 0:o.value)??"");return s.jsxs(Bt,{children:[s.jsx(xe,{leftIcon:s.jsx(ge,{}),placeholder:"Номер группы",value:n,setValue:i,customMask:he.groupMask,onValueEmpty:()=>C.addFilter({name:"group.groupName",value:""}),onHintClick:r=>C.addFilter({name:"group.groupName",value:(r==null?void 0:r.id)??"",strict:!0}),request:fe,size:"big"}),s.jsx(V,{items:de,size:"big",placeholder:"Курс",selected:de.find(r=>{var m;return r.id===((m=e.course)==null?void 0:m.value)})??null,setSelected:r=>{if(r!=null&&r.id){C.addFilter({name:"course",value:r.id});return}C.addFilter({name:"course",value:""})}}),s.jsx(He,{title:"Зачет",state:t,action:r=>ct.setIsExam(r)})]})},te=d({name:"pageIndexChanged",sid:"-yqoz9l"}),Ge=d({name:"pageLoaded",sid:"adwljo"}),Qt=S(0,{name:"$page",sid:"ndbopj"}).on(te,(e,t)=>t);a({and:[{clock:Ge,target:[X.load,Be.load]}],or:{sid:"8a9ft4"}});const Jt=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,Pe=d({name:"load",sid:"hn1pg2"}),Fe=K({and:{effect:async({currentUser:e})=>(await x(Jt((e==null?void 0:e.guid)??""))).groups.items,source:Ke.user},or:{name:"loadFx",sid:"-fij1vn"}});a({and:[{clock:Pe,target:Fe}],or:{sid:"-b0njw5"}});const Xt=S([],{name:"$myGroups",sid:"gbf1rs"}).on(Fe.doneData,(e,t)=>t);function ce(){const[e]=v([Xt]);l.useEffect(()=>{Pe()},[]);const t=n=>{C.resetFilters(),C.addFilter({name:be.Group,value:n.groupName,strict:!0}),te(0)};return s.jsx(_,{onRowClick:t,data:e,columns:Yt})}const Yt=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],Zt=(e,t)=>{let n=e;for(const i in t)n=n.replace(`:${i}`,t[i]);return n};c.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const es=c.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],Qe.isNotMobile),ts=({student:e})=>{const t=Oe(),{close:n}=z(),i=()=>{t.push(Zt(Xe,{studentId:e.studentGuid})),n()};return s.jsx(es,{children:s.jsxs(h,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(h,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(F,{keyStr:"Группа",value:e.groupNumber}),s.jsx(F,{keyStr:"Баллы",value:w(e)}),s.jsx(F,{keyStr:"Курс",value:e.course}),s.jsx(F,{keyStr:"ЛМС",value:e.pointsHistory.reduce((o,r)=>o+r.points,0)})]}),s.jsx(Je,{width:"100%",margin:"0"}),s.jsxs(h,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(M,{align:"left",size:4,children:"Дата"}),s.jsx(lt,{studentGuid:e.studentGuid})]}),s.jsx(u,{onClick:i,text:"Перейти к студенту",width:"100%"})]})})},ss=c.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),ns=c.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),as=c(h).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),se=c.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&E.red.main),os=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(se,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>w(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((n,i)=>n+i.points,0)}],rs=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(se,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Te=d({name:"pageLoaded",sid:"-n45vlm"});a({and:[{clock:Te,target:X.load}],or:{sid:"t4c48d"}});const le=()=>{const{open:e}=z(),{students:t,totalCount:n,page:i,search:o,loading:r,isExam:m}=v({students:D.$pEStudents,loading:D.$loading,totalCount:D.$pEStudentsTotalCount,page:D.$pEStudentsPage,search:ut.$search,isExam:je.$isExam});return l.useEffect(()=>{Te()},[]),s.jsx(ss,{children:s.jsxs(ns,{children:[s.jsxs(as,{children:[s.jsx(Q,{value:o,setValue:pt.update,size:"big"}),s.jsx(Kt,{})]}),s.jsx(_,{loading:r,data:t,columns:m?rs:os,onRowClick:y=>{e(s.jsx(ts,{student:y}),y.fullName)}}),s.jsx(Ye,{condition:!0,align:"right",pages:Math.floor(n/mt),currentPage:i,setCurrentPage:X.setPage})]})})},is=e=>`mutation EndSemesterForStudent {
    archiveStudent (input: {studentGuid: "${e}"}){
      archivedStudentEntity {
        studentGuid
        fullName
      }
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,ne=d({name:"endSemester",sid:"-4jh1kz"}),De=d({name:"reset",sid:"-j8a0gd"}),W=j(async({studentId:e})=>(await x(is(e))).archivedStudentEntity,{name:"endSemesterFx",sid:"zelluz"});var f=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(f||{});const k=S({},{name:"$statuses",sid:"-dxikv0"}).reset(De);a({and:[{clock:ne,source:k,fn:(e,{studentId:t})=>({...e,[t]:"loading"}),target:k}],or:{sid:"6va864"}});a({and:[{clock:W.doneData,source:k,fn:(e,{studentGuid:t})=>({...e,[t]:"success"}),target:k}],or:{sid:"7piwsz"}});a({and:[{clock:W.fail,source:k,fn:(e,{params:t})=>({...e,[t.studentId]:"error"}),target:k}],or:{sid:"887wz9"}});a({and:[{clock:W.done,source:k,fn:(e,{params:t})=>({...e,[t.studentId]:"success"}),target:k}],or:{sid:"8qwx5j"}});a({and:[{clock:ne,target:W}],or:{sid:"9l5lse"}});const ds={endSemester:ne,reset:De},Ie={statuses:k},Ae=d({name:"selectedGroupChanged",sid:"-xwp80m"}),Me=d({name:"load",sid:"5oek60"}),ae=d({name:"reset",sid:"h5kaz1"}),Ve=d({name:"endSemesterForGroup",sid:"8r83mm"}),oe=S("",{name:"$selectedGroup",sid:"h3tjmh"}).on(Ae,(e,t)=>t).reset(ae),re=K({and:{source:oe,effect:async e=>{const{students:t}=await x(gt(0,xt({"group.groupName":{value:e??"",strict:!0}}),1e3));return t}},or:{name:"loadFx",sid:"ydqyvh"}});a({and:[{source:oe,filter:Boolean,target:re}],or:{sid:"ihz6c"}});const ze=S([],{name:"$pEStudents",sid:"3jkn8v"}).on(re.doneData,(e,t)=>t.items).reset(ae),cs=Re({and:[re.pending,Boolean],or:{name:"$loading",sid:"ruuln1"}}),ls=K({and:{source:ze,effect:async e=>{e.forEach(t=>ds.endSemester({studentId:t.studentGuid}))}},or:{name:"endSemesterForGroupFx",sid:"55bovs"}});a({and:[{clock:Ie.statuses,filter:e=>Object.values(e).every(t=>t!==f.LOADING),target:Me}],or:{sid:"1du8zx"}});a({and:[{clock:Ve,target:ls}],or:{sid:"1gl7yq"}});const us={load:Me,reset:ae,selectedGroupChanged:Ae,endSemesterForGroup:Ve},ps={$loading:cs,$pEStudents:ze,$selectedGroup:oe},g={events:us,stores:ps},ms={[f.LOADING]:"Загрузка",[f.ERROR]:"Не зачтено",[f.SUCCESS]:"Успешно"},gs={[f.LOADING]:s.jsx(Ze,{}),[f.ERROR]:s.jsx(qe,{color:E.red.main}),[f.SUCCESS]:s.jsx(We,{color:E.green.main})},xs=c.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),hs=()=>{const[e,t]=v([Ie.statuses,g.stores.$pEStudents]);return s.jsx(h,{p:"30px",d:"column",jc:"space-between",children:t.map(n=>s.jsxs(h,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(xs,{children:n.fullName}),s.jsxs(h,{gap:"8px",w:"auto",children:[s.jsx(et,{align:"center",children:ms[e[n.studentGuid]??f.LOADING]}),gs[e[n.studentGuid]??f.LOADING]]})]},n.studentGuid))})},_e=d({name:"pageLoaded",sid:"4q0med"}),fs=d({name:"pageUnloaded",sid:"he5rd5"});a({and:[{clock:_e,target:g.events.load}],or:{sid:"74c8dr"}});a({and:[{clock:fs,target:g.events.reset}],or:{sid:"76jer7"}});const js=c.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),ks=c.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);c(h).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const Ss=c(h).withConfig({componentId:"sc-s6hadh-3"})([""]),vs=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(se,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],ue=()=>{const{open:e,close:t}=z(),{students:n,loading:i,selectedGroup:o}=v({students:g.stores.$pEStudents,loading:g.stores.$loading,selectedGroup:g.stores.$selectedGroup}),r=!!(n.length&&!i&&o),m=()=>{st.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{g.events.endSemesterForGroup(),e(s.jsx(hs,{}))},onReject:()=>{t(),g.events.reset()}})};return l.useEffect(()=>(_e(),()=>{g.events.reset()}),[]),s.jsxs(js,{children:[!r&&s.jsx(tt,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(ks,{children:[s.jsxs(Ss,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(xe,{leftIcon:s.jsx(ge,{}),placeholder:"Номер группы",value:o,setValue:g.events.selectedGroupChanged,customMask:he.groupMask,onValueEmpty:()=>g.events.selectedGroupChanged(""),onHintClick:y=>y&&g.events.selectedGroupChanged(y.id),request:fe,size:"big"}),r&&s.jsx(u,{text:`Завершить семестр для ${o}`,width:"210px",background:E.green.main,textColor:E.white.main,onClick:m})]}),r&&s.jsx(_,{loading:i,data:n,columns:vs})]})]})},$s=()=>{const[e,t]=v([nt.peTeacher,Qt]);l.useEffect(()=>{Ge()},[]);const n=[ie.AdminAccess,ie.SuperUser].some(i=>{var o;return(o=e==null?void 0:e.permissions)==null?void 0:o.includes(i)})?[{title:"Студенты",content:s.jsx(le,{})},{title:"Управление",content:s.jsx(Ht,{})},{title:"Мои Группы",content:s.jsx(ce,{})},{title:"Проведение зачета",content:s.jsx(ue,{})}]:[{title:"Студенты",content:s.jsx(le,{})},{title:"Мои Группы",content:s.jsx(ce,{})},{title:"Проведение зачета",content:s.jsx(ue,{})}];return s.jsx(at,{padding:"10px",children:s.jsx(ot,{children:s.jsxs(h,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(rt,{appearance:!1,pages:n,currentPage:t,setCurrentPage:te}),n[t].content]})})})};export{$s as default};
