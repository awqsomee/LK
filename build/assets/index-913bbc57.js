import{r as d,j as v}from"./vendor-4355a046.js";import{aR as k,aL as A,s as I,aS as w,P as B,B as F,F as H,I as O,S as P,b as T}from"./index-15c11f6c.js";import{g as q,a as E}from"./get-default-subdivision-17957fb0.js";const G=async(i,s,o)=>{o(!1);const g=s.map(n=>{if(Array.isArray(n.data[0])){const e=n.data.map(r=>Object.assign({},...r==null?void 0:r.map(t=>{var c,y;const f={};return t!=null&&t.fieldName&&(f[t==null?void 0:t.fieldName]=(c=t==null?void 0:t.value)!=null&&c.title?(y=t==null?void 0:t.value)==null?void 0:y.title:t==null?void 0:t.value),f}))),u={};return u[i]=JSON.stringify(e),u}else return n.data.map(e=>{const u={};return e!=null&&e.fieldName&&(u[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(u[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(r=>r.title))),u})}).flat(),a=Object.assign({},...g);a.holiday_type=="Ежегодный (основной) оплачиваемый отпуск"?a.holiday_type=1:a.holiday_type=="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"?a.holiday_type=2:a.holiday_type=="Отпуск без сохранения заработной платы"?a.holiday_type=3:a.holiday_type=="Отпуск по коллективному договору"&&(a.holiday_type=4),!(await k.sendBufferHolidayPlanningFx({employeeGuid:a.jobGuid,type:a.holiday_type,start:a.holiday_start,end:a.holiday_end})).isError&&o(!0)},J=i=>{const s=i.find(o=>o.fieldName==="holiday_type");return s!=null&&s.value&&(s==null?void 0:s.value).title==="Отпуск по коллективному договору"?{coll_dog:"collDog"}:{coll_dog:null}},R=(i,s,o,g,a,p,n,e,u,r,t,f,c,y)=>{const{surname:m,name:_,patronymic:h,subdivisions:b}=i,D=o||new Date().toISOString(),N=a||new Date().toISOString(),j=n||"",S=c||"",x=t||q(b);return{title:"Заявление о предоставлении отпуска",data:[{title:"ФИО",type:"simple-text",value:m+" "+_+" "+h,fieldName:"fio",visible:!0},{title:"Подразделение/должность",value:x,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:E(b),isSpecificSelect:!0,onChange:l=>{f(l),y(l.id)}},{title:"Вид отпуска",type:"select",fieldName:"holiday_type",value:u,editable:!0,required:!0,onChange:l=>{r(l)},width:"100%",items:[{id:0,title:"Ежегодный (основной) оплачиваемый отпуск"},{id:1,title:"Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"},{id:2,title:"Отпуск без сохранения заработной платы"},{id:3,title:"Отпуск по коллективному договору"}]},{title:"Категория для предоставления отпуска",type:"select",fieldName:"holiday_type_coll",value:j,editable:!0,required:!0,onChange:l=>{const C=new Date(Date.parse(D));C.setDate(C.getDate()+5),e(l),p(A(l?+l.data:0,C.toString()))},width:"100%",specialType:"collDog",items:[{id:0,title:"Работникам, имеющим двоих и более детей в возрасте до 14 лет",data:3},{id:1,title:"Работникам, имеющим ребенка-инвалида в возрасте до 18 лет",data:5},{id:2,title:"Одиноким матерям (отцам)",data:5},{id:3,title:"Работникам в случаях рождения ребенка, регистрации брака, смерти близких родственников",data:3},{id:4,title:"Работникам, сопровождающим детей младшего школьного возраста в школу в первый день учебного года",data:1},{id:5,title:"Работникам, имеющим общий стаж работы в Университете от 20 до 25 лет",data:1},{id:6,title:"Работникам, имеющим общий стаж работы в Университете от 25 до 30 лет",data:2},{id:7,title:"Работникам, имеющим общий стаж работы в Университете от 30 до 35 лет",data:3},{id:8,title:"Работникам, имеющим общий стаж работы в Университете свыше 35 лет",data:4}]},{title:"Начало отпуска:",type:"date",value:o,fieldName:"holiday_start",editable:!0,mask:!0,onChange:l=>{g(l),p(l)},required:!0,minValueInput:A(5)},{title:"",type:"simple-text",value:S,fieldName:"jobGuid",visible:!1},{title:"Окончание отпуска:",type:"date",value:N,fieldName:"holiday_end",editable:!0,mask:!0,required:!0,onChange:l=>{p(l)},minValueInput:a||A(0),maxValueInput:A(n?+n.data:365,D)}]}},U=()=>{var x;const[i,s]=d.useState(null),[o,g]=d.useState(null),[a,p]=d.useState(null),[n,e]=d.useState(null),[u,r]=d.useState(null),[t,f]=d.useState(null),[c,y]=d.useState(null),{data:{dataUserApplication:m,dataWorkerApplication:_}}=I.useApplications(),{loading:h}=w.useBufferHolidayPlanning(),[b,D]=d.useState({}),[N,j]=d.useState(!1),S=N??!1;return d.useEffect(()=>{m&&_&&!h&&s(R(m,_,o,g,u,r,t,f,c,y,n,e,a,p))},[m,h,o,t,c,a,n]),d.useEffect(()=>{i&&m&&D(J(i.data))},[i]),v.jsx(B,{children:v.jsx(F,{isDone:S,children:!!i&&!!s&&v.jsxs(H,{children:[v.jsx(O,{...i,collapsed:S,setData:s,specialFieldsNameConfig:b}),v.jsx(P,{text:"Отправить",action:()=>G("",[i],j),isLoading:h,completed:N,setCompleted:j,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:T(i,b)&&(((x=i.optionalCheckbox)==null?void 0:x.value)??!0),alerts:!1})]})})})};export{U as default};
