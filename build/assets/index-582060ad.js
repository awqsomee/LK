var E=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_=(t,e)=>{for(var i in e||(e={}))T.call(e,i)&&h(t,i,e[i]);if(N)for(var i of N(e))B.call(e,i)&&h(t,i,e[i]);return t},k=(t,e)=>A(t,C(e));import{r as c,j as D}from"./vendor-31894644.js";import{b9 as F,ba as I,b7 as O,s as w,bb as G,P as R,B as q,F as J,I as M,S as W,c as L}from"./index-0f8b6250.js";import{g as V,a as P}from"./get-default-subdivision-17957fb0.js";const H=async(t,e,i)=>{i(!1);const y=e.map(m=>{if(Array.isArray(m.data[0])){const a=m.data.map(o=>Object.assign({},...o==null?void 0:o.map(s=>{var x,d;const u={};return s!=null&&s.fieldName&&(u[s==null?void 0:s.fieldName]=(x=s==null?void 0:s.value)!=null&&x.title?(d=s==null?void 0:s.value)==null?void 0:d.title:s==null?void 0:s.value),u}))),n={};return n[t]=JSON.stringify(a),n}else return m.data.map(a=>{var o,s;const n={};return a!=null&&a.fieldName&&(n[(o=a==null?void 0:a.fieldName)!=null?o:""]=typeof a.value!="object"?a==null?void 0:a.value:a.value.title),a.type==="multiselect"&&(n[(s=a==null?void 0:a.fieldName)!=null?s:""]=JSON.stringify(a==null?void 0:a.value.map(u=>u.title))),n})}).flat(),l=Object.assign({},...y),p=await F.sendBufferMedicalExaminationFx({employeeGuid:l.jobGuid,start:l.extra_examination_date,end:l.isRetirement?l.extra_examination_date_2:l.extra_examination_date});!(p!=null&&p.isError)&&i(!0)},U=t=>{const e=t.find(i=>i.fieldName==="isRetirement");return e!=null&&e.value&&e!=null&&e.value?{reason:"Compensation2"}:{reason:null}},$=(t,e,i,y,l,p,m,a,n,o)=>{const{surname:s,name:u,patronymic:x,subdivisions:d}=t,r=i?new Date(i):new Date,S=n||"",b=m||V(d),g=new Date(r.getTime()+24*60*60*1e3);return I(S)==="true"&&r.getDay()===5?g.setDate(r.getDate()+1):(r.getDay()===5||r.getDay()===6||r.getDay()===0)&&g.setDate(r.getDate()+(8-r.getDay())%7),{title:"Заявление о диспансеризации",data:[{title:"ФИО",value:s+" "+u+" "+x,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделение/должность",value:b,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:P(d),isSpecificSelect:!0,onChange:f=>{a(f),o(f.id)}},{title:"Дата прохождения диспансеризации",type:"date",value:i,fieldName:"extra_examination_date",editable:!0,onChange:f=>{y(f)},mask:!0,required:!0,maxValueLength:1,minValueInput:O(0)},{title:"Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого",type:"hr-checkbox",value:l||"",fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:f=>{p(f)}},{title:"Второй день отдыха",type:"date",value:g.toISOString().substr(0,10),fieldName:"extra_examination_date_2",editable:!1,mask:!0,required:!1,specialType:"Compensation2",maxValueLength:1},{title:"",type:"simple-text",value:S,fieldName:"jobGuid",visible:!1}]}},Y=()=>{var f,j;const[t,e]=c.useState(null),[i,y]=c.useState(null),[l]=c.useState(null),[p,m]=c.useState(null),[a,n]=c.useState(null),[o,s]=c.useState(null),{data:{dataUserApplication:u,dataWorkerApplication:x}}=w.useApplications(),{loading:d}=G.useBufferMedicalExamination(),[r,S]=c.useState({}),[b,g]=c.useState(!1),v=b!=null?b:!1;return c.useEffect(()=>{u&&x&&!d&&e($(u,x,i,y,o,s,a,n,p,m))},[u,d,i,l,o]),c.useEffect(()=>{t&&u&&S(U(t.data))},[t]),D.jsx(R,{children:D.jsx(q,{isDone:v,children:!!t&&!!e&&D.jsxs(J,{children:[D.jsx(M,k(_({},t),{collapsed:v,setData:e,specialFieldsNameConfig:r})),D.jsx(W,{text:"Отправить",action:()=>H("",[t],g),isLoading:d,completed:b,setCompleted:g,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:L(t)&&((j=(f=t.optionalCheckbox)==null?void 0:f.value)!=null?j:!0),alerts:!1})]})})})};export{Y as default};
