import{r as m,j as c}from"./vendor-9cc634b6.js";import{ai as b,aj as g,a as y,_ as N,a0 as S,F as j,I as x,S as k,m as _,r as A,ak as D}from"./index-74590cb5.js";import{e as F}from"./index-d8648a25.js";const h=async(i,a,s,u)=>{s(!0);const n=a.map(o=>{if(Array.isArray(o.data[0])){const e=o.data.map(d=>Object.assign({},...d==null?void 0:d.map(t=>{var f,v;const p={};return t!=null&&t.fieldName&&(p[t==null?void 0:t.fieldName]=(f=t==null?void 0:t.value)!=null&&f.title?(v=t==null?void 0:t.value)==null?void 0:v.title:t==null?void 0:t.value),p}))),r={};return r[i]=JSON.stringify(e),r}else return o.data.map(e=>{const r={};return e!=null&&e.fieldName&&(r[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(r[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(d=>d.title))),r})}).flat(),l=Object.assign({},...n);try{const o={guid:b(JSON.parse(g()||"{}")).IndividualGuid,jobGuid:l.jobGuid,dateOfDismissal:l.last_day,isSendMail:l.get_tk=="По почте",isRetirement:l.reason=="Выходом на пенсию",address:l.get_tk_address};await F.postApplicationFx(o),s(!1),u(!0)}catch{s(!1),y.evokePopUpMessage({message:"Форма отправлена успешно",type:"success",time:3e4})}},O=i=>{const a=i.find(u=>u.fieldName==="get_tk");let s=null;return a!=null&&a.value&&(a==null?void 0:a.value).title==="По почте"&&(s="Address"),{get_tk:s}},q=(i,a,s)=>{const{surname:u,name:n,patronymic:l}=i;return{title:"Заявление на увольнение",data:[{title:"ФИО",value:u+" "+n+" "+l,fieldName:"fio",mask:!0,editable:!1,required:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:a[s].jobTitle.toString(),visible:!0},{title:"Структурное подразделение",type:"simple-text",value:a[s].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"",type:"simple-text",value:a[s].jobGuid.toString(),fieldName:"jobGuid",visible:!1},{title:"Ставка",type:"simple-text",value:a[s].rate.toString(),fieldName:"reate",visible:!0},{title:"Вид места работы",type:"simple-text",value:a[s].rate.toString(),fieldName:"jobType",visible:!0},{title:"Дата увольнения (последний рабочий день)",type:"date",value:"",fieldName:"last_day",editable:!0,mask:!0,required:!0},{title:"Причина (В связи с...)",type:"text",value:null,fieldName:"reason",editable:!0,mask:!0,required:!0},{title:"Способ получения трудовой книжки",type:"select",fieldName:"get_tk",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Очно"},{id:1,title:"По почте"}]},{title:"Адрес для отправки трудовой книжки",value:"",fieldName:"get_tk_address",editable:!0,mask:!0,required:!1,specialType:"Address"},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}]}},T=()=>{var f;const[i,a]=m.useState(null),{data:{dataUserApplication:s,dataWorkerApplication:u}}=N.useApplications(),[n,l]=m.useState(!1),[o,e]=m.useState(!1),[r,d]=m.useState({}),t=n??!1,p=D();return m.useEffect(()=>{s&&u&&a(q(s,u,p))},[s,p]),m.useEffect(()=>{i&&s&&d(O(i.data))},[i]),c.jsx(S,{isDone:t,children:!!i&&!!a&&c.jsxs(j,{children:[c.jsx(x,{...i,collapsed:t,setData:a,specialFieldsName:r}),c.jsx(k,{text:"Отправить",action:()=>h(_.DISMISSAL,[i],e,l),isLoading:o,completed:n,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:A(i)&&(((f=i.optionalCheckbox)==null?void 0:f.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
