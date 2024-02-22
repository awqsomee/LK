import{r as f,bR as v,j as c}from"./vendor-4355a046.js";import{aI as b,aL as N,s as x,aN as h,B as j,F as _,I as g,S as k,m as S,b as A}from"./index-af042de3.js";const F=async(i,a,s)=>{s(!1);const o=a.map(d=>{if(Array.isArray(d.data[0])){const e=d.data.map(u=>Object.assign({},...u==null?void 0:u.map(t=>{var p,y;const m={};return t!=null&&t.fieldName&&(m[t==null?void 0:t.fieldName]=(p=t==null?void 0:t.value)!=null&&p.title?(y=t==null?void 0:t.value)==null?void 0:y.title:t==null?void 0:t.value),m}))),n={};return n[i]=JSON.stringify(e),n}else return d.data.map(e=>{const n={};return e!=null&&e.fieldName&&(n[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(n[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(u=>u.title))),n})}).flat(),l=Object.assign({},...o);!(await b.sendBufferHolidayWorkFx({employeeGuid:l.jobGuid,dates:[{date:l.holiday_work_date,dayOff:l.extra_holiday_date?l.extra_holiday_date:null,hours:+l.holiday_work_hours}]})).isError&&s(!0)},w=i=>{const a=i.find(o=>o.fieldName==="compensation");let s=null;return a!=null&&a.value&&(a==null?void 0:a.value).title==="Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"&&(s="Compensation"),{compensation:s}},D=(i,a,s)=>{const{surname:o,name:l,patronymic:r}=i;return{title:"Заявление о привлечении к работе в выходной день",data:[{title:"ФИО",type:"simple-text",value:o+" "+l+" "+r,fieldName:"fio",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:a[s].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:a[s].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Дата привлечения к работе",type:"date",value:null,fieldName:"holiday_work_date",editable:!0,mask:!0,required:!0,minValueInput:N(0)},{title:"Количество часов",type:"select",fieldName:"holiday_work_hours",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"}]},{title:"Причина",value:"Служебная необходимость",fieldName:"reason",editable:!0,mask:!0,required:!0},{title:"Вид компенсации",type:"select",fieldName:"compensation",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Оплатить работу в выходной день в двойном размере"},{id:1,title:"Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха"}]},{title:"Дата дополнительного дня отдыха",type:"date",value:"",fieldName:"extra_holiday_date",editable:!0,mask:!0,required:!1,specialType:"Compensation"},{title:"",type:"simple-text",value:a[s].jobGuid.toString(),fieldName:"jobGuid",visible:!1}]}},C=()=>{var p;const[i,a]=f.useState(null),{data:{dataUserApplication:s,dataWorkerApplication:o}}=x.useApplications(),{loading:l}=h.useBufferHolidayWork(),[r,d]=f.useState(!1),[e,n]=f.useState({}),u=r??!1,{id:t}=v(),m=+t;return f.useEffect(()=>{s&&o&&!l&&a(D(s,o,m))},[s,m,l]),f.useEffect(()=>{i&&s&&n(w(i.data))},[i]),c.jsx(j,{isDone:u,children:!!i&&!!a&&c.jsxs(_,{children:[c.jsx(g,{...i,collapsed:u,setData:a,specialFieldsNameConfig:e}),c.jsx(k,{text:"Отправить",action:()=>F(S.HOLIDAY_WORK,[i],d),isLoading:l,completed:r,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:A(i)&&(((p=i.optionalCheckbox)==null?void 0:p.value)??!0),alerts:!1})]})})};export{C as default};
