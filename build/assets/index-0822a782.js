import{r,j as y}from"./vendor-5ea71f95.js";import{b9 as j,ba as N,b7 as h,s as _,bb as k,P as E,B as A,F as C,I as T,S as B,c as F}from"./index-fab43839.js";import{g as I,a as O}from"./get-default-subdivision-17957fb0.js";const w=async(a,i,s)=>{s(!1);const g=i.map(f=>{if(Array.isArray(f.data[0])){const e=f.data.map(u=>Object.assign({},...u==null?void 0:u.map(t=>{var x,d;const c={};return t!=null&&t.fieldName&&(c[t==null?void 0:t.fieldName]=(x=t==null?void 0:t.value)!=null&&x.title?(d=t==null?void 0:t.value)==null?void 0:d.title:t==null?void 0:t.value),c}))),n={};return n[a]=JSON.stringify(e),n}else return f.data.map(e=>{const n={};return e!=null&&e.fieldName&&(n[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(n[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(u=>u.title))),n})}).flat(),o=Object.assign({},...g),p=await j.sendBufferMedicalExaminationFx({employeeGuid:o.jobGuid,start:o.extra_examination_date,end:o.isRetirement?o.extra_examination_date_2:o.extra_examination_date});!(p!=null&&p.isError)&&s(!0)},G=a=>{const i=a.find(s=>s.fieldName==="isRetirement");return i!=null&&i.value&&i!=null&&i.value?{reason:"Compensation2"}:{reason:null}},R=(a,i,s,g,o,p,f,e,n,u)=>{const{surname:t,name:c,patronymic:x,subdivisions:d}=a,l=s?new Date(s):new Date,D=n||"",S=f||I(d),b=new Date(l.getTime()+24*60*60*1e3);return N(D)==="true"&&l.getDay()===5?b.setDate(l.getDate()+1):(l.getDay()===5||l.getDay()===6||l.getDay()===0)&&b.setDate(l.getDate()+(8-l.getDay())%7),{title:"Заявление о диспансеризации",data:[{title:"ФИО",value:t+" "+c+" "+x,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделение/должность",value:S,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:O(d),isSpecificSelect:!0,onChange:m=>{e(m),u(m.id)}},{title:"Дата прохождения диспансеризации",type:"date",value:s,fieldName:"extra_examination_date",editable:!0,onChange:m=>{g(m)},mask:!0,required:!0,maxValueLength:1,minValueInput:h(0)},{title:"Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого",type:"hr-checkbox",value:o||"",fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:m=>{p(m)}},{title:"Второй день отдыха",type:"date",value:b.toISOString().substr(0,10),fieldName:"extra_examination_date_2",editable:!1,mask:!0,required:!1,specialType:"Compensation2",maxValueLength:1},{title:"",type:"simple-text",value:D,fieldName:"jobGuid",visible:!1}]}},W=()=>{var m;const[a,i]=r.useState(null),[s,g]=r.useState(null),[o]=r.useState(null),[p,f]=r.useState(null),[e,n]=r.useState(null),[u,t]=r.useState(null),{data:{dataUserApplication:c,dataWorkerApplication:x}}=_.useApplications(),{loading:d}=k.useBufferMedicalExamination(),[l,D]=r.useState({}),[S,b]=r.useState(!1),v=S??!1;return r.useEffect(()=>{c&&x&&!d&&i(R(c,x,s,g,u,t,e,n,p,f))},[c,d,s,o,u]),r.useEffect(()=>{a&&c&&D(G(a.data))},[a]),y.jsx(E,{children:y.jsx(A,{isDone:v,children:!!a&&!!i&&y.jsxs(C,{children:[y.jsx(T,{...a,collapsed:v,setData:i,specialFieldsNameConfig:l}),y.jsx(B,{text:"Отправить",action:()=>w("",[a],b),isLoading:d,completed:S,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:F(a)&&(((m=a.optionalCheckbox)==null?void 0:m.value)??!0),alerts:!1})]})})})};export{W as default};
