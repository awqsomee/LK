var h=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,N=(a,e)=>{for(var t in e||(e={}))k.call(e,t)&&v(a,t,e[t]);if(b)for(var t of b(e))S.call(e,t)&&v(a,t,e[t]);return a},x=(a,e)=>_(a,g(e));var j=(a,e,t)=>new Promise((n,o)=>{var d=l=>{try{i(t.next(l))}catch(u){o(u)}},r=l=>{try{i(t.throw(l))}catch(u){o(u)}},i=l=>l.done?n(l.value):Promise.resolve(l.value).then(d,r);i((t=t.apply(a,e)).next())});import{r as c,cM as A,j as y}from"./vendor-0c8c29fe.js";import{b5 as F,b8 as w,s as D,b9 as O,B,F as C,I as H,S as W,j as q,c as E}from"./index-179b6f61.js";const G=(a,e,t)=>j(void 0,null,function*(){t(!1);const n=e.map(r=>{if(Array.isArray(r.data[0])){const i=r.data.map(u=>Object.assign({},...u==null?void 0:u.map(s=>{var f,p;const m={};return s!=null&&s.fieldName&&(m[s==null?void 0:s.fieldName]=(f=s==null?void 0:s.value)!=null&&f.title?(p=s==null?void 0:s.value)==null?void 0:p.title:s==null?void 0:s.value),m}))),l={};return l[a]=JSON.stringify(i),l}else return r.data.map(i=>{var u,s;const l={};return i!=null&&i.fieldName&&(l[(u=i==null?void 0:i.fieldName)!=null?u:""]=typeof i.value!="object"?i==null?void 0:i.value:i.value.title),i.type==="multiselect"&&(l[(s=i==null?void 0:i.fieldName)!=null?s:""]=JSON.stringify(i==null?void 0:i.value.map(m=>m.title))),l})}).flat(),o=Object.assign({},...n);!(yield F.sendBufferHolidayWorkFx({employeeGuid:o.jobGuid,dates:[{date:o.holiday_work_date,dayOff:o.extra_holiday_date?o.extra_holiday_date:null,hours:+o.holiday_work_hours}]})).isError&&t(!0)}),I=a=>{const e=a.find(n=>n.fieldName==="compensation");let t=null;return e!=null&&e.value&&(e==null?void 0:e.value).title==="Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"&&(t="Compensation"),{compensation:t}},R=(a,e,t)=>{const{surname:n,name:o,patronymic:d}=a;return{title:"Заявление о привлечении к работе в выходной день",data:[{title:"ФИО",type:"simple-text",value:n+" "+o+" "+d,fieldName:"fio",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:e[t].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:e[t].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Дата привлечения к работе",type:"date",value:null,fieldName:"holiday_work_date",editable:!0,mask:!0,required:!0,minValueInput:w(0)},{title:"Количество часов",type:"select",fieldName:"holiday_work_hours",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"}]},{title:"Причина",value:"Служебная необходимость",fieldName:"reason",editable:!0,mask:!0,required:!0},{title:"Вид компенсации",type:"select",fieldName:"compensation",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Оплатить работу в выходной день в двойном размере"},{id:1,title:"Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"}]},{title:"Дата дополнительного дня отдыха",type:"date",value:"",fieldName:"extra_holiday_date",editable:!0,mask:!0,required:!1,specialType:"Compensation"},{title:"",type:"simple-text",value:e[t].jobGuid.toString(),fieldName:"jobGuid",visible:!1}]}},K=()=>{var f,p;const[a,e]=c.useState(null),{data:{dataUserApplication:t,dataWorkerApplication:n}}=D.useApplications(),{loading:o}=O.useBufferHolidayWork(),[d,r]=c.useState(!1),[i,l]=c.useState({}),u=d!=null?d:!1,{id:s}=A(),m=+s;return c.useEffect(()=>{t&&n&&!o&&e(R(t,n,m))},[t,m,o]),c.useEffect(()=>{a&&t&&l(I(a.data))},[a]),y.jsx(B,{isDone:u,children:!!a&&!!e&&y.jsxs(C,{children:[y.jsx(H,x(N({},a),{collapsed:u,setData:e,specialFieldsNameConfig:i})),y.jsx(W,{text:"Отправить",action:()=>G(q.HOLIDAY_WORK,[a],r),isLoading:o,completed:d,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:E(a)&&((p=(f=a.optionalCheckbox)==null?void 0:f.value)!=null?p:!0),alerts:!1})]})})};export{K as default};
