var g=Object.defineProperty,h=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))j.call(t,a)&&p(e,a,t[a]);return e},d=(e,t)=>h(e,C(t));import{r as o,j as i}from"./vendor-fdf02817.js";import{bx as E,e9 as N,b1 as v,b2 as A,bB as f,h as D,d7 as B,d2 as M,bC as b}from"./index-2172af78.js";const _=e=>{const{phone:t,email:a}=e;return{title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}},L=()=>{const[e,t]=o.useState(null),[a,u]=o.useState(null),[l,c]=o.useState(!1),[x,F]=o.useState(!1),s=l!=null?l:!1,{data:{dataUserApplication:r}}=E.useApplications();return o.useEffect(()=>{r&&(t(_(r)),u(N({config:{title:"Предоставление справок о группе здоровья",issueDateFieldName:"date_of_issue",organizationFieldName:"organization",docsFieldName:"docs"}})))},[r]),i.jsx(v,{isDone:s,children:!!e&&!!a&&i.jsxs(A,{noHeader:!0,children:[i.jsx(f,d(n({},e),{collapsed:s,setData:t})),i.jsx(f,d(n({},a),{collapsed:s,setData:u})),i.jsx(D,{text:s?"Отправлено":"Отправить",action:()=>B(M.MEDICAL_CERT_086,[e,a],F,c,!0),isLoading:x,completed:l,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:b(e)&&b(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
