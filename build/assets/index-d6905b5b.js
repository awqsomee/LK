import{s as x,K as I,cL as _,j as e,q as b,r as c,cM as W}from"./vendor-3c67dcca.js";import{l as q,P,m as K,n as w,A as Q,o as X,p as O,s as Y,e as Z,q as L,r as tt,t as et,u as it,v as nt,w as st,x as V,h as lt,g as ot}from"./student-f885b691.js";import{h as E,H as C,B as g,m as D,d as G,Q as dt,t as h,l as F,u as H,M as U,T as B,r as J,o as at,R as rt,J as ut,N as ct,U as pt,O as mt,V as vt,s as ht}from"./index-838f6833.js";const xt=x(E).withConfig({componentId:"sc-1qi5h46-0"})(["flex:1;"]),gt=x.div.withConfig({componentId:"sc-1qi5h46-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),ft=I({and:[C.peTeacher,q.pendingRemoveVisit,(t,l)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacherFullName"},...t!=null&&(o=t.permissions)!==null&&o!==void 0&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-7,d=[P.AdminAccess,P.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!l,onClick:()=>{K.removeVisit({id:i.id.toString()})}}):null}}]:[]]}],or:{name:"$peStudentVisitsColumns",sid:"bwdu0h"}}),St=()=>{var t;const[l,o,n]=b([w.$selectedStudent,ft,C.peTeacher]);return l?e.jsxs(gt,{children:[!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(Q,{studentGuid:l.studentGuid}),e.jsx(xt,{columns:o,data:l.visitsHistory})]}):null};var m=(t=>(t.Activist="Activist",t.Competition="Competition",t.ExternalFitness="ExternalFitness",t.GTO="GTO",t.InternalTeam="InternalTeam",t.OnlineWork="OnlineWork",t.Science="Science",t))(m||{});const z=[{id:m.Activist,title:"Активист"},{id:m.Competition,title:"Соревнование"},{id:m.GTO,title:"ГТО"},{id:m.InternalTeam,title:"Сборная"},{id:m.OnlineWork,title:"Работа в LMS"},{id:m.Science,title:"Научная работа"}],jt=I({and:[C.peTeacher,X.pendingRemoveAdditionPoints,(t,l)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"type",render:(n,a)=>{const i=z.find(({id:s})=>s===n);return(i==null?void 0:i.id)===m.Competition?a.comment:i==null?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five",render:(n,a)=>{const i=z.find(({id:s})=>s===a.workType);return(i==null?void 0:i.id)!==m.Competition?a.comment:null}},...t!=null&&(o=t.permissions)!==null&&o!==void 0&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-7,d=[P.AdminAccess,P.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!l,onClick:()=>O.removeAdditionPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$additionalPointsColumns",sid:"cv7zhj"}}),Ct=x.div.withConfig({componentId:"sc-xw90or-0"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),bt=()=>{const[t,l]=b([w.$selectedStudent,Y.$competitions]),[o,n]=c.useState(null),[a,i]=c.useState(new Date().toISOString()),[s,d]=c.useState(null),[r,u]=c.useState("0"),[$,f]=c.useState(""),T=()=>{var A;O.addAdditionPoints({comment:(s==null?void 0:s.id)===m.Competition?(A=o==null?void 0:o.title)!==null&&A!==void 0?A:"":$,date:F(a,"numeric"),points:Number(r),studentGuid:t==null?void 0:t.studentGuid,type:s==null?void 0:s.id})};c.useEffect(()=>{Z.load()},[]),c.useEffect(()=>{(s==null?void 0:s.id)===m.Competition&&r==="0"&&u("5"),(s==null?void 0:s.id)===m.InternalTeam&&r==="0"&&u("50")},[s==null?void 0:s.id]);const y=new Date(a),k=y.getDay()!==0&&y.getDay()!==1,M=l.map(A=>({id:A,title:A}));return e.jsxs(Ct,{children:[e.jsx(D,{width:"100%",size:"big",title:"Тип работ",items:z,selected:s,setSelected:d}),(s==null?void 0:s.id)===m.Competition&&e.jsx(D,{width:"100%",size:"big",title:"Соревнование",items:M,selected:o,setSelected:n}),e.jsx(G,{alertMessage:k?"":"Не допустимая дата",size:"big",title:"Дата",setValue:i,value:a,type:"date"}),e.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:u,value:r,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==m.Competition&&e.jsx(dt,{width:"100%",setValue:f,value:$,title:"Комментарий"}),e.jsx(g,{isActive:k,text:"Добавить",onClick:T,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},$t=x.div.withConfig({componentId:"sc-19i0iom-0"})(["display:flex;flex-direction:column;height:100%;gap:10px;"]),wt=x(E).withConfig({componentId:"sc-19i0iom-1"})(["flex:1;"]),At=()=>{var t;const[l,o,n]=b([w.$selectedStudent,jt,C.peTeacher]),{open:a}=H(),i=()=>{a(e.jsx(bt,{}),"Дополнительные баллы")};return l?e.jsxs($t,{children:[!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(g,{text:"Добавить дополнительные баллы",onClick:i,background:h.blue.main,textColor:h.white.main}),e.jsx(wt,{columns:o,data:l.pointsHistory})]}):null};var v=(t=>(t.FlexionAndExtensionOfArms="FlexionAndExtensionOfArms",t.JumpingRopeJumps="JumpingRopeJumps",t.Jumps="Jumps",t.PullUps="PullUps",t.ShuttleRun="ShuttleRun",t.Squats="Squats",t.Tilts="Tilts",t.TorsoLifts="TorsoLifts",t.Other="Other",t))(v||{});const R=[{id:v.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:v.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:v.Jumps,title:"Прыжок в длину"},{id:v.PullUps,title:"Подтягивания(Вис)"},{id:v.ShuttleRun,title:"Челночный бег"},{id:v.Squats,title:"Приседания"},{id:v.Tilts,title:"Наклон"},{id:v.TorsoLifts,title:"Подъемы туловища"},{id:v.Other,title:"Другое"}],Pt=x.div.withConfig({componentId:"sc-uipy8z-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;height:100%;"]),Tt=()=>{const t=b(w.$selectedStudent),[l,o]=c.useState(new Date().toISOString()),[n,a]=c.useState(null),[i,s]=c.useState("0"),[d,r]=c.useState(""),u=()=>{L.addRegulationPoints({date:F(l,"numeric"),points:Number(i),studentGuid:t==null?void 0:t.studentGuid,type:n==null?void 0:n.id,comment:(n==null?void 0:n.id)===v.Other&&d!=null?d:""})},$=new Date(l),f=$.getDay()!==0&&$.getDay()!==1;return e.jsxs(Pt,{children:[e.jsx(D,{width:"100%",size:"big",title:"Тип работ",items:R,selected:n,setSelected:a}),(n==null?void 0:n.id)===v.Other&&e.jsx(G,{width:"100%",size:"big",title:"Комментарий",setValue:r,value:d}),e.jsx(G,{alertMessage:f?"":"Не допустимая дата",size:"big",title:"Дата",setValue:o,value:l,type:"date",width:"100%"}),e.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:i,type:"number",stepSize:1,minValue:1}),e.jsx(g,{text:"Добавить",isActive:f,onClick:u,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},yt=x(E).withConfig({componentId:"sc-4mpo2k-0"})(["flex:1;"]),Gt=x.div.withConfig({componentId:"sc-4mpo2k-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),Dt=I({and:[C.peTeacher,tt.pendingRemoveRegulationPoints,(t,l)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"type",render:(n,a)=>{var i;return n===v.Other?a.comment:(i=R.find(({id:s})=>s===n))===null||i===void 0?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five"},...t!=null&&(o=t.permissions)!==null&&o!==void 0&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-30,d=[P.AdminAccess,P.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!l,onClick:()=>L.removeRegulationPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$regularPointsColumns",sid:"levsbz"}}),kt=()=>{var t;const[l,o,n]=b([w.$selectedStudent,Dt,C.peTeacher]),{open:a}=H(),i=l==null?void 0:l.totalPoints,s=()=>{a(e.jsx(Tt,{}),"Добавить норматив")},d=Number(i)<20;return l?e.jsxs(Gt,{children:[!l&&d&&e.jsx(U,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(g,{text:"Добавить норматив",onClick:s,background:h.blue.main,textColor:h.white.main,isActive:!d}),e.jsx(yt,{data:l.standardsHistory,columns:o})]}):null},N=[{title:"Посещения",content:e.jsx(St,{})},{title:"Нормативы ",content:e.jsx(kt,{})},{title:"Дополнительные баллы ",content:e.jsx(At,{})}],S=({label:t,value:l})=>e.jsxs(zt,{children:[e.jsx(B,{size:3,children:t}),e.jsx(It,{children:l})]}),zt=x.div.withConfig({componentId:"sc-bzc523-0"})(["display:flex;flex-direction:column;align-items:center;row-gap:4px;border-radius:4px;padding:12px;background-color:var(--theme-2);flex:1;"]),It=x.span.withConfig({componentId:"sc-bzc523-1"})([""]),_t=x.div.withConfig({componentId:"sc-1i85cbe-0"})(["margin-top:auto;width:100%;"]),j=[{id:"None",title:"-"},{id:"Basic",title:"Основная"},{id:"Preparatory",title:"Подготовительная"},{id:"SpecialA",title:"Специальная А"},{id:"SpecialB",title:"Специальная Б"},{id:"HealthLimitations",title:"ОВЗ"},{id:"Disabled",title:"Инвалид"}],Et={None:j[0],Basic:j[1],Preparatory:j[2],SpecialA:j[3],SpecialB:j[4],HealthLimitations:j[5],Disabled:j[6]},Vt=({studentGuid:t,healthGroup:l})=>{const[o,n]=c.useState(Et[l]),a=b(et.pendingSetHealthGroup),i=()=>{it.setHealthGroup({studentGuid:t,healthGroup:o.id})};return e.jsxs(J,{gap:"4px",ai:"flex-start",children:[e.jsx(D,{isActive:!a,size:"big",width:"100%",title:"Группа здоровья",items:j,selected:o,setSelected:n}),e.jsx(_t,{children:e.jsx(g,{isActive:!a,text:"Сменить группу здоровья",width:"100%",onClick:i,background:h.blue.main,textColor:h.white.main})})]})},Nt=x.div.withConfig({componentId:"sc-jh5rb1-0"})(["margin-top:auto;width:100%;"]),p=[{id:"None",title:"-"},{id:"Basketball",title:"Баскетбол"},{id:"Volleyball",title:"Волейбол"},{id:"Aerobics",title:"Аэробика"},{id:"PowerLiftingAndCrossfit",title:"Пауэрлифтинг и кроссфит"},{id:"StreetLiftingAndArmLifting",title:"Стритлифтинг и армлифтинг"},{id:"GeneralPhysicalTraining",title:"ОФП"},{id:"GeneralPhysicalTrainingGym",title:"ОФП (тренажерный зал)"},{id:"FootRoom",title:"Футзал"},{id:"SMG",title:"СМГ"},{id:"TableTennis",title:"СМГ настольный теннис"},{id:"NordicWalking",title:"СМГ скандинавская ходьба"},{id:"InternalTeam",title:"Сборная"}],Ot={None:p[0],Basketball:p[1],Volleyball:p[2],Aerobics:p[3],PowerLiftingAndCrossfit:p[4],StreetLiftingAndArmLifting:p[5],GeneralPhysicalTraining:p[6],GeneralPhysicalTrainingGym:p[7],FootRoom:p[8],SMG:p[9],TableTennis:p[10],NordicWalking:p[11],InternalTeam:p[12]},Lt=({studentGuid:t,specialization:l})=>{const[o,n]=c.useState(Ot[l]),[a]=b([nt.pendingSetSpecialization]),i=()=>{st.setSpecialization({studentGuid:t,specialization:o.id})};return e.jsxs(J,{gap:"4px",ai:"flex-start",children:[e.jsx(D,{isActive:!a,size:"big",width:"100%",title:"Специализация",items:p,selected:o,setSelected:n}),e.jsx(Nt,{children:e.jsx(g,{isActive:!a,text:"Сменить специализацию",width:"100%",onClick:i,background:h.blue.main,textColor:h.white.main})})]})},Bt=()=>{var t,l,o,n,a,i;const{studentId:s}=W(),[d,{currentUser:r},u,$,f]=b([w.$selectedStudent,ht.user,C.isLoading,w.$loading,C.peTeacher]),T=(r==null?void 0:r.user_status)==="staff"?s:(t=r==null?void 0:r.guid)!==null&&t!==void 0?t:"",[y,k]=c.useState(0);return c.useEffect(()=>(V.setCurrentStudentId(T),at.load(),()=>V.resetStudentId()),[T]),!d&&T&&!u&&!$?e.jsx(rt,{text:"Нет данных"}):d?e.jsx(ut,{padding:"10px",children:e.jsxs(ct,{children:[(r==null?void 0:r.user_status)==="stud"&&e.jsxs(U,{type:"info",children:[e.jsx("p",{children:"Баллы, выставленные за посещаемость занятий по физической культуре в течение семестра, находятся у преподавателей кафедры «Физическое воспитание»."}),e.jsx("p",{children:"В случае возникновения вопросов можно обратиться к ведущему преподавателю."})]}),e.jsx(B,{size:3,align:"left",children:d.fullName}),e.jsxs(pt,{children:[e.jsx(S,{label:"Группа",value:d.groupNumber}),e.jsx(S,{label:"Баллы",value:d.totalPoints.toString()}),e.jsx(S,{label:"Курс",value:d.course.toString()}),e.jsx(S,{label:"ЛМС",value:d.lmsPoints.toString()}),e.jsx(S,{label:"Куратор",value:(l=(o=d.curator)===null||o===void 0?void 0:o.fullName)!==null&&l!==void 0?l:"-"}),e.jsx(S,{label:"Группа здоровья",value:d.healthGroup==="None"?"-":`${lt[d.healthGroup]} (${(n=(a=d.healthGroupTeacher)===null||a===void 0?void 0:a.fullName)!==null&&n!==void 0?n:""})`}),e.jsx(S,{label:"Специализация",value:ot[d.specialization]}),e.jsx(S,{label:"Долг",value:d.hasDebt?"Есть":"Нет"})]}),!!(f!=null&&(i=f.permissions)!==null&&i!==void 0&&i.length)&&e.jsxs(e.Fragment,{children:[e.jsx(Lt,{studentGuid:d.studentGuid,specialization:d.specialization}),e.jsx(Vt,{studentGuid:d.studentGuid,healthGroup:d.healthGroup})]}),e.jsx(mt,{appearance:!1,pages:N,currentPage:y,setCurrentPage:k}),e.jsx(vt,{children:N[y].content})]})}):null};export{Bt as default};
