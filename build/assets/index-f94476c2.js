var j=Object.defineProperty,S=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))C.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>S(e,h(t));import{r as o,j as i}from"./vendor-33947725.js";import{s as E,dj as N,B as v,F as A,I as f,S as D,aj as B,j as M,c as F}from"./index-5c2dce5e.js";const _=e=>{const{phone:t,email:a}=e;return{title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}},I=()=>{const[e,t]=o.useState(null),[a,u]=o.useState(null),[l,d]=o.useState(!1),[g,x]=o.useState(!1),s=l!=null?l:!1,{data:{dataUserApplication:r}}=E.useApplications();return o.useEffect(()=>{r&&(t(_(r)),u(N({config:{title:"Предоставление справок о группе здоровья",issueDateFieldName:"date_of_issue",organizationFieldName:"organization",docsFieldName:"docs"}})))},[r]),i.jsx(v,{isDone:s,children:!!e&&!!a&&i.jsxs(A,{noHeader:!0,children:[i.jsx(f,c(n({},e),{collapsed:s,setData:t})),i.jsx(f,c(n({},a),{collapsed:s,setData:u})),i.jsx(D,{text:s?"Отправлено":"Отправить",action:()=>B(M.MEDICAL_CERT_086,[e,a],x,d,!0),isLoading:g,completed:l,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:F(e)&&F(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
