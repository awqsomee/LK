import{r as f,bR as v,j as m}from"./vendor-4355a046.js";import{aT as j,aL as p,s as N,aU as _,B as x,F as h,I as S,S as g,m as D,b as A}from"./index-6fcf584f.js";const I=async(i,o,s)=>{s(!1);const n=o.map(u=>{if(Array.isArray(u.data[0])){const e=u.data.map(r=>Object.assign({},...r==null?void 0:r.map(t=>{var y,b;const c={};return t!=null&&t.fieldName&&(c[t==null?void 0:t.fieldName]=(y=t==null?void 0:t.value)!=null&&y.title?(b=t==null?void 0:t.value)==null?void 0:b.title:t==null?void 0:t.value),c}))),l={};return l[i]=JSON.stringify(e),l}else return u.data.map(e=>{const l={};return e!=null&&e.fieldName&&(l[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(l[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(r=>r.title))),l})}).flat(),a=Object.assign({},...n);!(await j.sendBufferHolidayTransferFx({employeeGuid:a.jobGuid,reason:a.reason,period:{from:{startDate:a.holiday_old_start,endDate:a.holiday_old_end},to:{startDate:a.holiday_new_start,endDate:a.holiday_new_end}}})).isError&&s(!0)},F=(i,o,s)=>{const{surname:n,name:a,patronymic:d}=i;return{title:"Заявление о переносе отпуска",data:[{title:"ФИО",type:"simple-text",value:n+" "+a+" "+d,fieldName:"fio",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:o[s].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:o[s].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Начало отпуска до переноса:",type:"date",value:"",fieldName:"holiday_old_start",editable:!0,mask:!0,required:!0,minValueInput:p(0)},{title:"",type:"simple-text",value:o[s].jobGuid.toString(),fieldName:"jobGuid"},{title:"Окончание отпуска до переноса:",type:"date",value:"",fieldName:"holiday_old_end",editable:!0,mask:!0,required:!0,minValueInput:p(0)},{title:"Начало отпуска после переноса:",type:"date",value:"",fieldName:"holiday_new_start",editable:!0,mask:!0,required:!0,minValueInput:p(5)},{title:"Окончание отпуска после переноса:",type:"date",value:"",fieldName:"holiday_new_end",editable:!0,mask:!0,required:!0,minValueInput:p(5)},{title:"Причина",type:"select",fieldName:"reason",value:"",editable:!0,required:!0,width:"100%",items:[{id:0,title:"Семейные обстоятельства"},{id:1,title:"Рабочая необходимость"}]}]}},w=()=>{var t;const[i,o]=f.useState(null),{data:{dataUserApplication:s,dataWorkerApplication:n}}=N.useApplications(),{loading:a}=_.useBufferHolidayTransfer(),[d,u]=f.useState(!1),e=d??!1,{id:l}=v(),r=+l;return f.useEffect(()=>{s&&n&&!a&&o(F(s,n,r))},[s,r,a]),m.jsx(x,{isDone:e,children:!!i&&!!o&&m.jsxs(h,{children:[m.jsx(S,{...i,collapsed:e,setData:o}),m.jsx(g,{text:"Отправить",action:()=>I(D.DISMISSAL,[i],u),isLoading:a,completed:d,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:e,isActive:A(i)&&(((t=i.optionalCheckbox)==null?void 0:t.value)??!0),alerts:!1})]})})};export{w as default};
