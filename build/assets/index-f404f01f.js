var b=Object.defineProperty,y=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&p(t,a,e[a]);if(o)for(var a of o(e))x.call(e,a)&&p(t,a,e[a]);return t},m=(t,e)=>y(t,F(e));import{r as i,j as n}from"./vendor-8a1e4858.js";import{ec as S,bv as g,bz as A,t as h,bA as q,i as D,d6 as j,d1 as E,bB as I}from"./index-8977d86c.js";const T=[{id:0,title:"по собственному желанию"},{id:1,title:"за академическую неуспеваемость"},{id:2,title:"за неоплату обучения"},{id:3,title:"в связи с переводом"},{id:4,title:"отчисление с расторжением договора"}],B=t=>({title:"Отчисление по инициативе обучающегося",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Причина отчисления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:T},{title:"Перевод в",fieldName:"toVuz",value:"",editable:!0,required:!0,specialType:"universityTransfer"},{title:"Количество листов документов, подтверждающих возможность перевода:",type:"text",fieldName:"num_sheets",value:null,specialType:"universityTransfer",editable:!0,required:!0},{title:"Дата отчисления c:",type:"date",fieldName:"time-before",value:"",minValueInput:S(0),editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),C=t=>{const e=t.find(l=>l.fieldName==="reason");let a=null;return e!=null&&e.value&&(e==null?void 0:e.value).id===3&&(a="universityTransfer"),{reason_independently_deducted:a}},L=()=>{const[t,e]=i.useState(null),[a,l]=i.useState({}),[s,u]=i.useState(!1),[f,v]=i.useState(!1),r=s!=null?s:!1,{data:{dataUserApplication:d}}=g.useApplications();return i.useEffect(()=>{d&&e(B(d))},[d]),i.useEffect(()=>{t&&d&&l(C(t.data))},[t]),n.jsx(A,{isDone:r,children:!!t&&!!e&&n.jsxs(h,{children:[n.jsx(q,m(c({},t),{collapsed:r,setData:e,specialFieldsNameConfig:a})),n.jsx(D,{text:r?"Отправлено":"Отправить",action:()=>j(E.CRS_EXPULSION,[t],v,u),isLoading:f,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:I(t,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
