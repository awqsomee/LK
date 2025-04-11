var x=(e,t,s)=>new Promise((a,r)=>{var i=p=>{try{l(s.next(p))}catch(h){r(h)}},u=p=>{try{l(s.throw(p))}catch(h){r(h)}},l=p=>p.done?a(p.value):Promise.resolve(p.value).then(i,u);l((s=s.apply(e,t)).next())});import{d as ne,p as d,h as g,bO as k,k as j,N as oe,f as w,x as $,cG as ae,i as c,r as ie,j as n,cH as re}from"./vendor-8a1e4858.js";import{n as F,o as B,p as ce,q as de,f as le,r as pe,k as ue,t as me,l as ve,T as he,v as ge,I as A,w as L,i as $e}from"./index-4256834b.js";const ye="https://api.mospolytech.ru/ticketsservice",N=ne.create({baseURL:ye}),fe=e=>x(void 0,null,function*(){var t,s,a,r;const i=new FormData;i.append("ApplicantName",e.applicantName),i.append("Description",e.description),i.append("ServiceAreaId",e.serviceAreaId),i.append("ServiceId",e.serviceId),i.append("ServiceCategoryId",e.serviceCategoryId),i.append("Phone",(t=e.phone)!==null&&t!==void 0?t:""),i.append("Location",(s=e.location)!==null&&s!==void 0?s:""),i.append("Room",(a=e.room)!==null&&a!==void 0?a:""),i.append("Email",(r=e.email)!==null&&r!==void 0?r:"");const{data:u}=yield N.post("/tickets",i,{headers:{"Content-Type":"multipart/form-data"}});return u}),xe=()=>x(void 0,null,function*(){const{data:e}=yield N.get("/handbooks/locations");return e}),je=()=>x(void 0,null,function*(){const{data:e}=yield N.get("/handbooks/service-areas");return e}),Se=t=>x(void 0,[t],function*({serviceArea:e}){const{data:s}=yield N.get(`/handbooks/${e}`);return s}),m=d({name:"pageMounted",sid:"c5fr4t"}),M=d({name:"sendForm",sid:"-dc3oa1"}),E=d({name:"setFiles",sid:"-521qo1"}),Q=d({name:"setName",sid:"3yh40o"}),q=d({name:"setPhone",sid:"-hbpn1l"}),R=d({name:"setEmail",sid:"-8nd6m0"}),V=d({name:"setNote",sid:"azuum"}),C=d({name:"setServiceType",sid:"se3d14"}),P=d({name:"setServiceId",sid:"wut57c"}),D=d({name:"setService",sid:"dv3frd"}),z=d({name:"setLocation",sid:"fnth5a"}),U=d({name:"setRoom",sid:"epp4qo"}),G=g([],{name:"$files",sid:"7o5dze"}).on(E,(e,t)=>t).reset(m),H=g("",{name:"$note",sid:"hv8y42"}).on(V,(e,t)=>t).reset(m),O=g("",{name:"$name",sid:"newouw"}).on(Q,(e,t)=>t).on(F.applications,(e,{dataUserApplication:t})=>{if(!t)return"";const{name:s,surname:a,patronymic:r}=t;return`${s} ${a} ${r}`}),W=g("",{name:"$phone",sid:"4dnykb"}).on(q,(e,t)=>t).on(F.applications,(e,{dataUserApplication:t})=>{var s;return(s=t==null?void 0:t.phone)!==null&&s!==void 0?s:""}),J=g("",{name:"$email",sid:"e03nsa"}).on(R,(e,t)=>t).on(F.applications,(e,{dataUserApplication:t})=>{var s;return(s=t==null?void 0:t.email)!==null&&s!==void 0?s:""}),T=k(C,null,{name:"$serviceType",sid:"-u2770n"}).reset(m),ke=k(P,null,{name:"$serviceId",sid:"-r202nb"}).reset(m),K=k(D,null,{name:"$service",sid:"x108et"}).reset([m,T]),X=k(U,"",{name:"$room",sid:"-ati4pj"}).reset(m),Y=g(null,{name:"$location",sid:"-gtyhi"}).on(z,(e,t)=>t).reset(m),Z=g("",{name:"$applicationNumber",sid:"-d4zgb5"}).reset(m),y=j({sid:"1f87w0",fn:()=>oe({handler:fe}),name:"sendFormMutation",method:"createMutation"}),_=j({sid:"-svpciu",fn:()=>w({handler:xe}),name:"locationsQuery",method:"createQuery"}),b=j({sid:"j139hu",fn:()=>w({handler:je}),name:"serviceAreasQuery",method:"createQuery"}),S=j({sid:"t6qo74",fn:()=>w({handler:Se}),name:"servicesQuery",method:"createQuery"});$({and:[{clock:m,target:[y.reset,B.getUserDataApplicationsFx,_.start,b.start]}],or:{sid:"-y6uhel"}});$({and:[{clock:$({and:[{clock:T,filter:Boolean}],or:{name:"clock",sid:"-sp5ly6"}}),fn:({id:e})=>({serviceArea:e.toString()}),target:S.start}],or:{sid:"-xt3mkk"}});$({and:[{clock:M,source:{services:S.$data,files:G,name:O,phone:W,email:J,note:H,serviceType:T,service:K,location:Y,room:X},filter:({serviceType:e,service:t,services:s,name:a,phone:r,email:i,location:u,room:l})=>!!a&&!!r&&!!i&&!!e&&!!s&&!!t&&!!u&&!!l,fn:({services:e,files:t,name:s,phone:a,email:r,note:i,service:u,location:l,room:p,serviceType:h})=>{var f,I;const ee=(f=(I=e.find(te=>te.items.find(se=>se.id===u.id.toString())))===null||I===void 0?void 0:I.id)!==null&&f!==void 0?f:"";return{applicantName:s,description:i,email:r,phone:a,location:l==null?void 0:l.title,room:p,files:t,serviceAreaId:h.id.toString(),serviceId:u.id.toString(),serviceCategoryId:ee}},target:y.start}],or:{sid:"-xayezn"}});$({and:[{clock:y.finished.success,fn:({result:e})=>e.ticketId,target:Z}],or:{sid:"fnw3hx"}});$({and:[{clock:y.$failed,fn:()=>({message:"Произошла ошибка. Попробуйте позднее",type:"failure"}),target:ce.evokePopUpMessage}],or:{sid:"g3ac41"}});const v={pageMounted:m,setFiles:E,setName:Q,setPhone:q,setEmail:R,setNote:V,setServiceType:C,setServiceId:P,setService:D,setLocation:z,setRoom:U,sendForm:M},o={locations:_.$data,serviceAreas:b.$data,services:S.$data,servicesLoading:S.$pending,pageLoading:j({sid:"wo8mot",fn:()=>ae(_.$pending,b.$pending,B.getUserDataApplicationsFx.pending),name:"pageLoading",method:"or"}),files:G,note:H,name:O,phone:W,email:J,serviceType:T,serviceId:ke,service:K,location:Y,room:X,loading:y.$pending,done:y.$succeeded,applicationNumber:Z},Qe=()=>{const[e,t,s,a]=c([v.pageMounted,o.done,o.applicationNumber,o.pageLoading]),r=c(de.isAuthenticated);return ie.useEffect(()=>{e()},[]),a?n.jsx(le,{h:"100%",d:"column",ai:"center",jc:"center",children:n.jsx(pe,{})}):n.jsx(ue,{padding:"1rem",style:{overflow:"auto",alignItems:"start"},children:n.jsxs(me,{noHeader:!0,children:[!r&&n.jsx(ve,{}),n.jsx(he,{size:4,align:"left",children:"Техническое обслуживание"}),t?n.jsxs(n.Fragment,{children:["Спасибо! Ваш номер заявки ",s,"."]}):n.jsxs(n.Fragment,{children:[n.jsx(Ne,{}),n.jsx(Te,{}),n.jsx(Ie,{}),n.jsx(_e,{}),n.jsx(be,{}),n.jsx(we,{}),n.jsx(Fe,{}),n.jsx(Ae,{}),n.jsx(Le,{})]})]})})},Ae=()=>{const[e,t]=c([o.note,v.setNote]);return n.jsx(ge,{placeholder:"Опишите проблему и точное местоположение",required:!0,title:"Описание заявки",value:e,setValue:t})},Ne=()=>{const[e,t]=c([o.name,v.setName]);return n.jsx(A,{title:"Фамилия Имя Отчество",placeholder:"Введите ФИО",required:!0,value:e,setValue:t})},Te=()=>{const[e,t]=c([o.phone,v.setPhone]);return n.jsx(A,{title:"Контактный телефон (сотовый в формате +7-ххх-ххх-хх-хх или внутренний в формате хххх)",placeholder:"Введите контактный телефон",type:"tel",value:e,setValue:t,required:!0})},Ie=()=>{const[e,t]=c([o.email,v.setEmail]);return n.jsx(A,{title:"Адрес электронной почты",placeholder:"Введите адрес электронной почты",value:e,type:"email",setValue:t,required:!0})},_e=()=>{const[e]=c([o.serviceAreas]),[t,s]=c([o.serviceType,v.setServiceType]);return n.jsx(L,{title:"Выберите направление заявки",placeholder:"Выберите направление заявки",required:!0,isActive:!!e,width:"100%",items:e||[],selected:t,setSelected:s})},be=()=>{const[e,t]=c([o.serviceType,o.services]),[s,a]=c([o.service,v.setService]);return n.jsx(L,{title:"Выберите необходимый сервис",placeholder:"Начните вводить название сервиса",isActive:!!e&&!!t,required:!0,width:"100%",items:t||[],selected:s,setSelected:a,withSearch:!0})},we=()=>{const[e,t]=c([o.location,v.setLocation]),s=re(o.locations,a=>{var r;return(r=a==null?void 0:a.map(i=>({id:i.name,title:i.name})))!==null&&r!==void 0?r:[]});return c([o.serviceType]),n.jsx(L,{title:"Локация, где необходимо выполнить заявку",placeholder:"Начните вводить локацию",required:!0,width:"100%",isActive:!!(s!=null&&s.length),items:s!=null?s:[],selected:e,setSelected:t,withSearch:!0})},Fe=()=>{const[e,t]=c([o.room,v.setRoom]);return c([o.serviceType]),n.jsx(A,{title:"№ аудитории",placeholder:"Введите № аудитории",value:e,setValue:t,required:!0})},Le=()=>{const[e,t,s,a,r,i,u,l,p,h,f]=c([v.sendForm,o.done,o.loading,o.note,o.name,o.phone,o.email,o.serviceType,o.service,o.location,o.room]);return n.jsx($e,{text:t?"Отправлено":"Отправить",action:e,isLoading:s,completed:t,setCompleted:()=>{},repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:!!a&&!!r&&!!i&&!!u&&!!l&&!!p&&!!h&&!!f,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})};export{Qe as default};
