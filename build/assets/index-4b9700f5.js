import{s as x,r as c,i as C,j as e,aw as I,cM as _,cI as q}from"./vendor-8a1e4858.js";import{s as J,e as X,a as K,b as Q,c as Y,P as T,d as Z,f as y,A as ee,W as m,g as te,h as ie,i as R,j as ne,R as v,k as W,l as se,m as E,n as oe,o as le}from"./student-4bf020c2.js";import{f as L,w as k,B as g,X as h,b4 as V,I as G,v as de,V as H,R as B,g as F,T as O,q as ae,a4 as re,k as ue,P as ce,b5 as pe,aG as me,b6 as ve}from"./index-5bf1da28.js";import{s as b,e as he}from"./model-bf81cee8.js";const xe=x.div.withConfig({componentId:"sc-1i85cbe-0"})(["margin-top:auto;width:100%;"]),j=[{id:"None",title:"-"},{id:"Basic",title:"Основная"},{id:"Preparatory",title:"Подготовительная"},{id:"SpecialA",title:"Специальная А"},{id:"SpecialB",title:"Специальная Б"},{id:"HealthLimitations",title:"ОВЗ"},{id:"Disabled",title:"Инвалид"}],ge={None:j[0],Basic:j[1],Preparatory:j[2],SpecialA:j[3],SpecialB:j[4],HealthLimitations:j[5],Disabled:j[6]},fe=({studentGuid:t,healthGroup:o})=>{const[l,n]=c.useState(ge[o]),a=C(J.pendingSetHealthGroup),i=()=>{X.setHealthGroup({studentGuid:t,healthGroup:l.id})};return e.jsxs(L,{gap:"4px",ai:"flex-start",children:[e.jsx(k,{isActive:!a,size:"big",width:"100%",title:"Группа здоровья",items:j,selected:l,setSelected:n}),e.jsx(xe,{children:e.jsx(g,{isActive:!a,text:"Сменить группу здоровья",width:"100%",onClick:i,background:h.blue.main,textColor:h.white.main})})]})},Se=x.div.withConfig({componentId:"sc-jh5rb1-0"})(["margin-top:auto;width:100%;"]),p=[{id:"None",title:"-"},{id:"Basketball",title:"Баскетбол"},{id:"Volleyball",title:"Волейбол"},{id:"Aerobics",title:"Аэробика"},{id:"PowerLiftingAndCrossfit",title:"Пауэрлифтинг и кроссфит"},{id:"StreetLiftingAndArmLifting",title:"Стритлифтинг и армлифтинг"},{id:"GeneralPhysicalTraining",title:"ОФП"},{id:"GeneralPhysicalTrainingGym",title:"ОФП (тренажерный зал)"},{id:"FootRoom",title:"Футзал"},{id:"SMG",title:"СМГ"},{id:"TableTennis",title:"СМГ настольный теннис"},{id:"NordicWalking",title:"СМГ скандинавская ходьба"},{id:"InternalTeam",title:"Сборная"}],je={None:p[0],Basketball:p[1],Volleyball:p[2],Aerobics:p[3],PowerLiftingAndCrossfit:p[4],StreetLiftingAndArmLifting:p[5],GeneralPhysicalTraining:p[6],GeneralPhysicalTrainingGym:p[7],FootRoom:p[8],SMG:p[9],TableTennis:p[10],NordicWalking:p[11],InternalTeam:p[12]},be=({studentGuid:t,specialization:o})=>{const[l,n]=c.useState(je[o]),[a]=C([K.pendingSetSpecialization]),i=()=>{Q.setSpecialization({studentGuid:t,specialization:l.id})};return e.jsxs(L,{gap:"4px",ai:"flex-start",children:[e.jsx(k,{isActive:!a,size:"big",width:"100%",title:"Специализация",items:p,selected:l,setSelected:n}),e.jsx(Se,{children:e.jsx(g,{isActive:!a,text:"Сменить специализацию",width:"100%",onClick:i,background:h.blue.main,textColor:h.white.main})})]})},Ce=I({and:[b.peTeacher,Y.pendingRemoveVisit,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacherFullName"},...t!=null&&(l=t.permissions)!==null&&l!==void 0&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-7,d=[T.AdminAccess,T.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{Z.removeVisit({id:i.id.toString()})}}):null}}]:[]]}],or:{name:"$peStudentVisitsColumns",sid:"bwdu0h"}}),$e=x(V).withConfig({componentId:"sc-1qi5h46-0"})(["flex:1;"]),ye=x.div.withConfig({componentId:"sc-1qi5h46-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),we=()=>{var t;const[o,l,n]=C([y.$selectedStudent,Ce,b.peTeacher]);return o?e.jsxs(ye,{children:[!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(ee,{studentGuid:o.studentGuid}),e.jsx($e,{columns:l,data:o.visitsHistory})]}):null},z=[{id:m.Activist,title:"Активист"},{id:m.Competition,title:"Соревнование"},{id:m.GTO,title:"ГТО"},{id:m.InternalTeam,title:"Сборная"},{id:m.OnlineWork,title:"Работа в LMS"},{id:m.Science,title:"Научная работа"}],Te=x.div.withConfig({componentId:"sc-xw90or-0"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),Pe=()=>{const[t,o]=C([y.$selectedStudent,te.$competitions]),[l,n]=c.useState(null),[a,i]=c.useState(new Date().toISOString()),[s,d]=c.useState(null),[r,u]=c.useState("0"),[$,f]=c.useState(""),P=()=>{var w;R.addAdditionPoints({comment:(s==null?void 0:s.id)===m.Competition?(w=l==null?void 0:l.title)!==null&&w!==void 0?w:"":$,date:H(a,"numeric"),points:Number(r),studentGuid:t==null?void 0:t.studentGuid,type:s==null?void 0:s.id})};c.useEffect(()=>{ie.load()},[]),c.useEffect(()=>{(s==null?void 0:s.id)===m.Competition&&r==="0"&&u("5"),(s==null?void 0:s.id)===m.InternalTeam&&r==="0"&&u("50")},[s==null?void 0:s.id]);const A=new Date(a),D=A.getDay()!==0&&A.getDay()!==1,U=o.map(w=>({id:w,title:w}));return e.jsxs(Te,{children:[e.jsx(k,{width:"100%",size:"big",title:"Тип работ",items:z,selected:s,setSelected:d}),(s==null?void 0:s.id)===m.Competition&&e.jsx(k,{width:"100%",size:"big",title:"Соревнование",items:U,selected:l,setSelected:n}),e.jsx(G,{alertMessage:D?"":"Не допустимая дата",size:"big",title:"Дата",setValue:i,value:a,type:"date"}),e.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:u,value:r,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==m.Competition&&e.jsx(de,{width:"100%",setValue:f,value:$,title:"Комментарий"}),e.jsx(g,{isActive:D,text:"Добавить",onClick:P,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},Ae=I({and:[b.peTeacher,ne.pendingRemoveAdditionPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"type",render:(n,a)=>{const i=z.find(({id:s})=>s===n);return(i==null?void 0:i.id)===m.Competition?a.comment:i==null?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five",render:(n,a)=>{const i=z.find(({id:s})=>s===a.workType);return(i==null?void 0:i.id)!==m.Competition?a.comment:null}},...t!=null&&(l=t.permissions)!==null&&l!==void 0&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-7,d=[T.AdminAccess,T.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>R.removeAdditionPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$additionalPointsColumns",sid:"dauol7"}}),Ge=x.div.withConfig({componentId:"sc-19i0iom-0"})(["display:flex;flex-direction:column;height:100%;gap:10px;"]),ke=x(V).withConfig({componentId:"sc-19i0iom-1"})(["flex:1;"]),De=()=>{var t;const[o,l,n]=C([y.$selectedStudent,Ae,b.peTeacher]),{open:a}=B(),i=()=>{a(e.jsx(Pe,{}),"Дополнительные баллы")};return o?e.jsxs(Ge,{children:[!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(g,{text:"Добавить дополнительные баллы",onClick:i,background:h.blue.main,textColor:h.white.main}),e.jsx(ke,{columns:l,data:o.pointsHistory})]}):null},M=[{id:v.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:v.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:v.Jumps,title:"Прыжок в длину"},{id:v.PullUps,title:"Подтягивания(Вис)"},{id:v.ShuttleRun,title:"Челночный бег"},{id:v.Squats,title:"Приседания"},{id:v.Tilts,title:"Наклон"},{id:v.TorsoLifts,title:"Подъемы туловища"},{id:v.Other,title:"Другое"}],ze=x.div.withConfig({componentId:"sc-uipy8z-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;height:100%;"]),Ie=()=>{const t=C(y.$selectedStudent),[o,l]=c.useState(new Date().toISOString()),[n,a]=c.useState(null),[i,s]=c.useState("0"),[d,r]=c.useState(""),u=()=>{W.addRegulationPoints({date:H(o,"numeric"),points:Number(i),studentGuid:t==null?void 0:t.studentGuid,type:n==null?void 0:n.id,comment:(n==null?void 0:n.id)===v.Other&&d!=null?d:""})},$=new Date(o),f=$.getDay()!==0&&$.getDay()!==1;return e.jsxs(ze,{children:[e.jsx(k,{width:"100%",size:"big",title:"Тип работ",items:M,selected:n,setSelected:a}),(n==null?void 0:n.id)===v.Other&&e.jsx(G,{width:"100%",size:"big",title:"Комментарий",setValue:r,value:d}),e.jsx(G,{alertMessage:f?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:o,type:"date",width:"100%"}),e.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:i,type:"number",stepSize:1,minValue:1}),e.jsx(g,{text:"Добавить",isActive:f,onClick:u,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},_e=I({and:[b.peTeacher,se.pendingRemoveRegulationPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"type",render:(n,a)=>{var i;return n===v.Other?a.comment:(i=M.find(({id:s})=>s===n))===null||i===void 0?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five"},...t!=null&&(l=t.permissions)!==null&&l!==void 0&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,a)=>{const i=a,s=_(new Date(i.date),new Date)<-30,d=[T.AdminAccess,T.SuperUser].some(r=>{var u;return t==null||(u=t.permissions)===null||u===void 0?void 0:u.includes(r)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||d?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>W.removeRegulationPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$regularPointsColumns",sid:"-pdiefx"}}),Ve=x(V).withConfig({componentId:"sc-4mpo2k-0"})(["flex:1;"]),Ee=x.div.withConfig({componentId:"sc-4mpo2k-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),Ne=()=>{var t;const[o,l,n]=C([y.$selectedStudent,_e,b.peTeacher]),{open:a}=B(),i=o==null?void 0:o.totalPoints,s=()=>{a(e.jsx(Ie,{}),"Добавить норматив")},d=Number(i)<20;return o?e.jsxs(Ee,{children:[!o&&d&&e.jsx(F,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!(n!=null&&(t=n.permissions)!==null&&t!==void 0&&t.length)&&e.jsx(g,{text:"Добавить норматив",onClick:s,background:h.blue.main,textColor:h.white.main,isActive:!d}),e.jsx(Ve,{data:o.standardsHistory,columns:l})]}):null},N=[{title:"Посещения",content:e.jsx(we,{})},{title:"Нормативы ",content:e.jsx(Ne,{})},{title:"Дополнительные баллы ",content:e.jsx(De,{})}],S=({label:t,value:o})=>e.jsxs(Re,{children:[e.jsx(O,{size:3,children:t}),e.jsx(We,{children:o})]}),Re=x.div.withConfig({componentId:"sc-bzc523-0"})(["display:flex;flex-direction:column;align-items:center;row-gap:4px;border-radius:4px;padding:12px;background-color:var(--theme-2);flex:1;"]),We=x.span.withConfig({componentId:"sc-bzc523-1"})([""]),Oe=()=>{var t,o,l,n,a,i;const{studentId:s}=q(),[d,r,u,$,f]=C([y.$selectedStudent,ae.user,b.isLoading,y.$loading,b.peTeacher]),P=(r==null?void 0:r.user_status)==="staff"?s:(t=r==null?void 0:r.guid)!==null&&t!==void 0?t:"",[A,D]=c.useState(0);return c.useEffect(()=>(E.setCurrentStudentId(P),he.load(),()=>E.resetStudentId()),[P]),!d&&P&&!u&&!$?e.jsx(re,{text:"Нет данных"}):d?e.jsx(ue,{padding:"10px",children:e.jsxs(ce,{children:[(r==null?void 0:r.user_status)==="stud"&&e.jsxs(F,{type:"info",children:[e.jsx("p",{children:"Баллы, выставленные за посещаемость занятий по физической культуре в течение семестра, находятся у преподавателей кафедры «Физическое воспитание»."}),e.jsx("p",{children:"В случае возникновения вопросов можно обратиться к ведущему преподавателю."})]}),e.jsx(O,{size:3,align:"left",children:d.fullName}),e.jsxs(pe,{children:[e.jsx(S,{label:"Группа",value:d.groupNumber}),e.jsx(S,{label:"Баллы",value:d.totalPoints.toString()}),e.jsx(S,{label:"Курс",value:d.course.toString()}),e.jsx(S,{label:"ЛМС",value:d.lmsPoints.toString()}),e.jsx(S,{label:"Куратор",value:(o=(l=d.curator)===null||l===void 0?void 0:l.fullName)!==null&&o!==void 0?o:"-"}),e.jsx(S,{label:"Группа здоровья",value:d.healthGroup==="None"?"-":`${oe[d.healthGroup]} (${(n=(a=d.healthGroupTeacher)===null||a===void 0?void 0:a.fullName)!==null&&n!==void 0?n:""})`}),e.jsx(S,{label:"Специализация",value:le[d.specialization]}),e.jsx(S,{label:"Долг",value:d.hasDebt?"Есть":"Нет"})]}),!!(f!=null&&(i=f.permissions)!==null&&i!==void 0&&i.length)&&e.jsxs(e.Fragment,{children:[e.jsx(be,{studentGuid:d.studentGuid,specialization:d.specialization}),e.jsx(fe,{studentGuid:d.studentGuid,healthGroup:d.healthGroup})]}),e.jsx(me,{appearance:!1,pages:N,currentPage:A,setCurrentPage:D}),e.jsx(ve,{children:N[A].content})]})}):null};export{Oe as default};
