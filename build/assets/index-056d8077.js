var b=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var c=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,m=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&c(a,t,e[t]);if(d)for(var t of d(e))F.call(e,t)&&c(a,t,e[t]);return a},p=(a,e)=>h(a,v(e));import{r as u,j as o}from"./vendor-8a1e4858.js";import{d$ as y,bv as N,bz as C,t as S,bA as A,i as k,d6 as q,d1 as B,bB as j}from"./index-8a3ccb59.js";import{C as I}from"./error-47067000.js";const M=[{value:!1,title:"Общественная",files:[],maxFiles:1,required:!1,fieldName:"society",checkboxCondition:"straight",maxFileSizeInMegaBytes:3},{value:!1,title:"Научная",files:[],maxFileSizeInMegaBytes:3,maxFiles:1,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:1,required:!1,fieldName:"sport",maxFileSizeInMegaBytes:3,checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:1,required:!1,maxFileSizeInMegaBytes:3,fieldName:"creativity",checkboxCondition:"straight"}],z=a=>{const{surname:e,name:t,patronymic:l,group:s,email:i,phone:r}=a;return{title:"Подача заявок доступна до 30.06.2024",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:y},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!1},{title:"Участие во внеучебной деятельности (Общий объем файлов - 1мб.)",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:M,width:"10%",editable:!0},{title:"Комментарий",placeholder:"Укажите необходимость переселения",type:"textarea",fieldName:"comment",value:"",editable:!0,required:!0}],hint:"Приложите грамоты, дипломы и другие документы, подтверждающие Вашу активную деятельность в университете."}},L=()=>{var a,e;const[t,l]=u.useState(null),{data:{dataUserApplication:s}}=N.useApplications(),[i,r]=u.useState(!1),[f,x]=u.useState(!1),n=i!=null?i:!1;return u.useEffect(()=>{s&&l(z(s))},[s]),new Date<new Date(2024,8,15)?o.jsx(I,{}):o.jsx(C,{isDone:n,children:!!t&&!!l&&o.jsxs(S,{children:[o.jsx(A,p(m({},t),{collapsed:n,setData:l})),o.jsx(k,{text:"Отправить",action:()=>q(B.USG_RELOCATION,[t],x,r,!1),isLoading:f,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:j(t)&&((a=(e=t.optionalCheckbox)===null||e===void 0?void 0:e.value)!==null&&a!==void 0?a:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
