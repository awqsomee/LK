import{s as f,K as D,cO as k,j as e,q as b,r as u,cM as B}from"./vendor-48260ac4.js";import{l as _,P as A,m as U,n as v,A as K,o as Z,p as L,s as Q,e as X,q as N,r as Y,t as tt,u as et,v as it,w as st,x as O,h as nt,g as ot}from"./student-2947c91e.js";import{r as I,Z as h,q as S,x as G,p as w,a1 as lt,L as g,l as F,u as H,M as at,h as J,G as M,z as dt,a2 as rt,_ as ct,P as ut,a3 as mt,a0 as pt,a4 as xt,b as gt}from"./index-9ba9ab5c.js";const ft=f(I).withConfig({componentId:"sc-1qi5h46-0"})(["flex:1;"]),ht=f.div.withConfig({componentId:"sc-1qi5h46-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),St=D({and:[h.peTeacher,_.pendingRemoveVisit,(t,n)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacherFullName"},...(o=t==null?void 0:t.permissions)!=null&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,a)=>{const s=a,i=k(new Date(s.date),new Date)<-7,d=[A.AdminAccess,A.SuperUser].some(c=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(c)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||d?e.jsx(S,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>{U.removeVisit({id:s.id.toString()})}}):null}}]:[]]}],or:{name:"$peStudentVisitsColumns",sid:"bwdu0h"}}),jt=()=>{var l;const[t,n,o]=b([v.$selectedStudent,St,h.peTeacher]);return t?e.jsxs(ht,{children:[!!((l=o==null?void 0:o.permissions)!=null&&l.length)&&e.jsx(K,{studentGuid:t.studentGuid}),e.jsx(ft,{columns:n,data:t.visitsHistory})]}):null};var m=(t=>(t.Activist="Activist",t.Competition="Competition",t.ExternalFitness="ExternalFitness",t.GTO="GTO",t.InternalTeam="InternalTeam",t.OnlineWork="OnlineWork",t.Science="Science",t))(m||{});const z=[{id:m.Activist,title:"Активист"},{id:m.ExternalFitness,title:"Внешний фитнес"},{id:m.Competition,title:"Соревнование"},{id:m.GTO,title:"ГТО"},{id:m.InternalTeam,title:"Сборная"},{id:m.OnlineWork,title:"Работа в LMS"},{id:m.Science,title:"Научная работа"}],Ct=D({and:[h.peTeacher,Z.pendingRemoveAdditionPoints,(t,n)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"type",render:(l,a)=>{const s=z.find(({id:i})=>i===l);return(s==null?void 0:s.id)===m.Competition?a.comment:s==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five",render:(l,a)=>{const s=z.find(({id:i})=>i===a.workType);return(s==null?void 0:s.id)!==m.Competition?a.comment:null}},...(o=t==null?void 0:t.permissions)!=null&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,a)=>{const s=a,i=k(new Date(s.date),new Date)<-7,d=[A.AdminAccess,A.SuperUser].some(c=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(c)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||d?e.jsx(S,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>L.removeAdditionPoints({id:s.id.toString()})}):null}}]:[]]}],or:{name:"$additionalPointsColumns",sid:"cv7zhj"}}),bt=f.div.withConfig({componentId:"sc-xw90or-0"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),vt=()=>{const[t,n]=b([v.$selectedStudent,Q.$competitions]),[o,l]=u.useState(null),[a,s]=u.useState(new Date().toISOString()),[i,d]=u.useState(null),[c,r]=u.useState("0"),[j,$]=u.useState(""),q=()=>{L.addAdditionPoints({comment:(i==null?void 0:i.id)===m.Competition?(o==null?void 0:o.title)??"":j,date:F(a,"numeric"),points:Number(c),studentGuid:t==null?void 0:t.studentGuid,type:i==null?void 0:i.id})};u.useEffect(()=>{X.load()},[]),u.useEffect(()=>{(i==null?void 0:i.id)===m.Competition&&c==="0"&&r("5"),(i==null?void 0:i.id)===m.InternalTeam&&c==="0"&&r("50")},[i==null?void 0:i.id]);const T=new Date(a),E=T.getDay()!==0&&T.getDay()!==1,W=n.map(V=>({id:V,title:V}));return e.jsxs(bt,{children:[e.jsx(G,{width:"100%",size:"big",title:"Тип работ",items:z,selected:i,setSelected:d}),(i==null?void 0:i.id)===m.Competition&&e.jsx(G,{width:"100%",size:"big",title:"Соревнование",items:W,selected:o,setSelected:l}),e.jsx(w,{alertMessage:E?"":"Не допустимая дата",size:"big",title:"Дата",setValue:s,value:a,type:"date"}),e.jsx(w,{width:"100%",size:"big",title:"Количество баллов",setValue:r,value:c,type:"number",stepSize:1,minValue:1}),(i==null?void 0:i.id)!==m.Competition&&e.jsx(lt,{width:"100%",setValue:$,value:j,title:"Комментарий"}),e.jsx(S,{isActive:E,text:"Добавить",onClick:q,background:g.blue.main,textColor:g.white.main,width:"100%"})]})},Pt=f.div.withConfig({componentId:"sc-19i0iom-0"})(["display:flex;flex-direction:column;height:100%;gap:10px;"]),At=f(I).withConfig({componentId:"sc-19i0iom-1"})(["flex:1;"]),wt=()=>{var s;const[t,n,o]=b([v.$selectedStudent,Ct,h.peTeacher]),{open:l}=H(),a=()=>{l(e.jsx(vt,{}),"Дополнительные баллы")};return t?e.jsxs(Pt,{children:[!!((s=o==null?void 0:o.permissions)!=null&&s.length)&&e.jsx(S,{text:"Добавить дополнительные баллы",onClick:a,background:g.blue.main,textColor:g.white.main}),e.jsx(At,{columns:n,data:t.pointsHistory})]}):null};var x=(t=>(t.FlexionAndExtensionOfArms="FlexionAndExtensionOfArms",t.JumpingRopeJumps="JumpingRopeJumps",t.Jumps="Jumps",t.PullUps="PullUps",t.ShuttleRun="ShuttleRun",t.Squats="Squats",t.Tilts="Tilts",t.TorsoLifts="TorsoLifts",t.Other="Other",t))(x||{});const R=[{id:x.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:x.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:x.Jumps,title:"Прыжок в длину"},{id:x.PullUps,title:"Подтягивания(Вис)"},{id:x.ShuttleRun,title:"Челночный бег"},{id:x.Squats,title:"Приседания"},{id:x.Tilts,title:"Наклон"},{id:x.TorsoLifts,title:"Подъемы туловища"},{id:x.Other,title:"Другое"}],Gt=f.div.withConfig({componentId:"sc-uipy8z-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;height:100%;"]),$t=()=>{const t=b(v.$selectedStudent),[n,o]=u.useState(new Date().toISOString()),[l,a]=u.useState(null),[s,i]=u.useState("0"),[d,c]=u.useState(""),r=()=>{N.addRegulationPoints({date:F(n,"numeric"),points:Number(s),studentGuid:t==null?void 0:t.studentGuid,type:l==null?void 0:l.id,comment:(l==null?void 0:l.id)===x.Other?d??"":""})},j=new Date(n),$=j.getDay()!==0&&j.getDay()!==1;return e.jsxs(Gt,{children:[e.jsx(G,{width:"100%",size:"big",title:"Тип работ",items:R,selected:l,setSelected:a}),(l==null?void 0:l.id)===x.Other&&e.jsx(w,{width:"100%",size:"big",title:"Комментарий",setValue:c,value:d}),e.jsx(w,{alertMessage:$?"":"Не допустимая дата",size:"big",title:"Дата",setValue:o,value:n,type:"date",width:"100%"}),e.jsx(w,{width:"100%",size:"big",title:"Количество баллов",setValue:i,value:s,type:"number",stepSize:1,minValue:1}),e.jsx(S,{text:"Добавить",isActive:$,onClick:r,background:g.blue.main,textColor:g.white.main,width:"100%"})]})},zt=f(I).withConfig({componentId:"sc-4mpo2k-0"})(["flex:1;"]),Dt=f.div.withConfig({componentId:"sc-4mpo2k-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),kt=D({and:[h.peTeacher,Y.pendingRemoveRegulationPoints,(t,n)=>{var o;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"type",render:(l,a)=>{var s;return l===x.Other?a.comment:(s=R.find(({id:i})=>i===l))==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five"},...(o=t==null?void 0:t.permissions)!=null&&o.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,a)=>{const s=a,i=k(new Date(s.date),new Date)<-30,d=[A.AdminAccess,A.SuperUser].some(c=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(c)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||d?e.jsx(S,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>N.removeRegulationPoints({id:s.id.toString()})}):null}}]:[]]}],or:{name:"$regularPointsColumns",sid:"levsbz"}}),It=()=>{var d;const[t,n,o]=b([v.$selectedStudent,kt,h.peTeacher]),{open:l}=H(),a=t==null?void 0:t.totalPoints,s=()=>{l(e.jsx($t,{}),"Добавить норматив")},i=Number(a)<20;return t?e.jsxs(Dt,{children:[!t&&i&&e.jsx(at,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((d=o==null?void 0:o.permissions)!=null&&d.length)&&e.jsx(S,{text:"Добавить норматив",onClick:s,background:g.blue.main,textColor:g.white.main,isActive:!i}),e.jsx(zt,{data:t.standardsHistory,columns:n})]}):null},y=[{title:"Посещения",content:e.jsx(jt,{})},{title:"Нормативы ",content:e.jsx(It,{})},{title:"Дополнительные баллы ",content:e.jsx(wt,{})}],C=({label:t,value:n})=>e.jsxs(Tt,{children:[e.jsx(J,{size:3,children:t}),e.jsx(Et,{children:n})]}),Tt=f.div.withConfig({componentId:"sc-bzc523-0"})(["display:flex;flex-direction:column;align-items:center;row-gap:4px;border-radius:4px;padding:12px;background-color:var(--theme-2);flex:1;"]),Et=f.span.withConfig({componentId:"sc-bzc523-1"})([""]),Vt=f.div.withConfig({componentId:"sc-1i85cbe-0"})(["margin-top:auto;width:100%;"]),P=[{id:"None",title:"-"},{id:"Basic",title:"Основная"},{id:"Preparatory",title:"Подготовительная"},{id:"Special",title:"Специальная"},{id:"HealthLimitations",title:"ОВЗ"}],Ot={None:P[0],Basic:P[1],Preparatory:P[2],Special:P[3],HealthLimitations:P[4]},yt=({studentGuid:t,studentGroup:n,healthGroup:o})=>{const[l,a]=u.useState(Ot[o]),[s,i]=b([tt.pendingSetHealthGroup,h.peTeacher]),d=i==null?void 0:i.groups.includes(n),c=()=>{et.setHealthGroup({studentGuid:t,healthGroup:l.id})};return e.jsxs(M,{gap:"4px",ai:"flex-start",children:[e.jsx(G,{isActive:!!d&&!s,size:"big",width:"100%",title:"Группа здоровья",items:P,selected:l,setSelected:a}),e.jsx(Vt,{children:e.jsx(S,{isActive:!!d&&!s,text:"Сменить группу здоровья",width:"100%",onClick:c,background:g.blue.main,textColor:g.white.main})})]})},Lt=f.div.withConfig({componentId:"sc-jh5rb1-0"})(["margin-top:auto;width:100%;"]),p=[{id:"None",title:"-"},{id:"Basketball",title:"Баскетбол"},{id:"Volleyball",title:"Волейбол"},{id:"Aerobics",title:"Аэробика"},{id:"PowerLiftingAndCrossfit",title:"Пауэрлифтинг и кроссфит"},{id:"StreetLiftingAndArmLifting",title:"Стритлифтинг и армлифтинг"},{id:"GeneralPhysicalTraining",title:"ОФП"},{id:"GeneralPhysicalTrainingGym",title:"ОФП (тренажерный зал)"},{id:"FootRoom",title:"Футзал"},{id:"SMG",title:"СМГ"},{id:"TableTennis",title:"СМГ настольный теннис"},{id:"NordicWalking",title:"СМГ скандинавская ходьба"}],Nt={None:p[0],Basketball:p[1],Volleyball:p[2],Aerobics:p[3],PowerLiftingAndCrossfit:p[4],StreetLiftingAndArmLifting:p[5],GeneralPhysicalTraining:p[6],GeneralPhysicalTrainingGym:p[7],FootRoom:p[8],SMG:p[9],TableTennis:p[10],NordicWalking:p[11]},Ft=({studentGuid:t,specialization:n})=>{const[o,l]=u.useState(Nt[n]),[a]=b([it.pendingSetSpecialization]),s=()=>{st.setSpecialization({studentGuid:t,specialization:o.id})};return e.jsxs(M,{gap:"4px",ai:"flex-start",children:[e.jsx(G,{isActive:!a,size:"big",width:"100%",title:"Специализация",items:p,selected:o,setSelected:l}),e.jsx(Lt,{children:e.jsx(S,{isActive:!a,text:"Сменить специализацию",width:"100%",onClick:s,background:g.blue.main,textColor:g.white.main})})]})},Rt=()=>{var r,j;const{studentId:t}=B(),[n,{currentUser:o},l,a,s]=b([v.$selectedStudent,gt.user,h.isLoading,v.$loading,h.peTeacher]),i=(o==null?void 0:o.user_status)==="staff"?t:(o==null?void 0:o.guid)??"",[d,c]=u.useState(0);return u.useEffect(()=>(O.setCurrentStudentId(i),dt.load(),()=>O.resetStudentId()),[i]),!n&&i&&!l&&!a?e.jsx(rt,{text:"Нет данных"}):n?e.jsx(ct,{padding:"10px",children:e.jsxs(ut,{children:[e.jsx(J,{size:3,align:"left",children:n.fullName}),e.jsxs(mt,{children:[e.jsx(C,{label:"Группа",value:n.groupNumber}),e.jsx(C,{label:"Баллы",value:n.totalPoints.toString()}),e.jsx(C,{label:"Курс",value:n.course.toString()}),e.jsx(C,{label:"ЛМС",value:n.lmsPoints.toString()}),e.jsx(C,{label:"Куратор",value:((r=n.curator)==null?void 0:r.fullName)??"-"}),e.jsx(C,{label:"Группа здоровья",value:nt[n.healthGroup]}),e.jsx(C,{label:"Специализация",value:ot[n.specialization]}),e.jsx(C,{label:"Долг",value:n.hasDebt?"Есть":"Нет"})]}),!!((j=s==null?void 0:s.permissions)!=null&&j.length)&&e.jsxs(e.Fragment,{children:[e.jsx(Ft,{studentGuid:n.studentGuid,specialization:n.specialization}),e.jsx(yt,{studentGuid:n.studentGuid,studentGroup:n.groupNumber,healthGroup:n.healthGroup})]}),e.jsx(pt,{appearance:!1,pages:y,currentPage:d,setCurrentPage:c}),e.jsx(xt,{children:y[d].content})]})}):null};export{Rt as default};
