import{r as i,q as x,cM as g,j as r}from"./vendor-48260ac4.js";import{s as S,aV as b,B as j,F as N,I as F,S as y,j as h,c as R,aW as T}from"./index-9ba9ab5c.js";import{s as A}from"./send-hr-form-work-transfer-049178cf.js";const D=(t,e,s)=>{const{surname:o,name:a,patronymic:l}=t;return{title:"Заявление на изменение ставки",data:[{title:"ФИО",value:o+" "+a+" "+l,fieldName:"fio",type:"simple-text"},{title:"",type:"simple-text",value:e[s].jobGuid.toString(),fieldName:"jobGuid"},{title:"Должность",type:"simple-text",fieldName:"post",value:e[s].jobTitle.toString()},{title:"Подразделение",type:"simple-text",value:e[s].subDivision.toString(),fieldName:"subDivision"},{title:"Текущая ставка",type:"simple-text",value:e[s].rate.toString(),fieldName:"currentRate"},{title:"Желаемая ставка",type:"select",fieldName:"newRate",value:"",editable:!0,required:!0,width:"100%",items:[{id:0,title:"0.25"},{id:1,title:"0.5"},{id:2,title:"1"}]}]}},B=t=>{const e=t.find(s=>s.fieldName==="employment");return e!=null&&e.value&&(e==null?void 0:e.value).title==="По совместительству"?{reason:"PartTime"}:{reason:null}},E=()=>{var u;const[t,e]=i.useState(null),{data:{dataUserApplication:s,dataWorkerApplication:o}}=S.useApplications(),{loading:a}=b.useBufferWorkTransfer(),[l,c]=i.useState(!1),[m,f]=i.useState({}),d=x(T),n=l??!1,{id:v}=g(),p=+v;return i.useEffect(()=>{t&&s&&f(B(t.data))},[t]),i.useEffect(()=>{s&&o&&!a&&e(D(s,o,p))},[s,p,a]),r.jsx(j,{isDone:n,children:!!t&&!!e&&r.jsxs(N,{children:[r.jsx(F,{...t,collapsed:n,setData:e,specialFieldsNameConfig:m}),r.jsx(y,{text:"Отправить",action:()=>A(h.HOLIDAY_WORK,[t],c,d),isLoading:a,completed:l,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:R(t)&&(((u=t.optionalCheckbox)==null?void 0:u.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{E as default};
