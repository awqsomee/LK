var f=Object.defineProperty,x=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var n=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&n(e,a,t[a]);if(u)for(var a of u(t))y.call(t,a)&&n(e,a,t[a]);return e},p=(e,t)=>x(e,A(t));import{r as s,j as l}from"./vendor-33947725.js";import{s as F,B as S,F as v,I as h,S as j,aj as N,j as g,c as q}from"./index-1e8fb889.js";const T=[{id:0,title:"изменение сроков"},{id:1,title:"продление сроков"}],E=[{id:0,title:"промежуточная аттестация"},{id:1,title:"государственная итоговая аттестация (итоговая аттестация)"}],B=e=>({title:"Продление промежуточной аттестации или ГИА",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Тип заявления",type:"select",fieldName:"srok",width:"100",value:null,required:!0,editable:!0,items:T},{title:"Вид аттестации",type:"select",fieldName:"type-attestation",width:"100",value:null,required:!0,editable:!0,items:E},{title:"Причина продления, в связи с",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0},{title:"Количество листов подтверждающих документов",type:"text",fieldName:"num_sheets",value:null,editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),w=()=>{const[e,t]=s.useState(null),[a,o]=s.useState(!1),[c,m]=s.useState(!1),i=a!=null?a:!1,{data:{dataUserApplication:r}}=F.useApplications();return s.useEffect(()=>{r&&t(B(r))},[r]),l.jsx(S,{isDone:i,children:!!e&&!!t&&l.jsxs(v,{children:[l.jsx(h,p(d({},e),{collapsed:i,setData:t})),l.jsx(j,{text:i?"Отправлено":"Отправить",action:()=>N(g.CRS_ATTESTAT,[e],m,o),isLoading:c,completed:a,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:q(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
