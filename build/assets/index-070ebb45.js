var x=Object.defineProperty,h=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))C.call(t,a)&&p(e,a,t[a]);return e},d=(e,t)=>h(e,S(t));import{r as o,j as i}from"./vendor-60fdf703.js";import{bw as A,e9 as E,b0 as N,b1 as v,bA as f,h as D,d6 as w,d1 as B,bB as b}from"./index-27bbb5ce.js";const M=e=>{const{phone:t,email:a}=e;return{title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}},L=()=>{const[e,t]=o.useState(null),[a,u]=o.useState(null),[l,c]=o.useState(!1),[F,g]=o.useState(!1),s=l!=null?l:!1,{data:{dataUserApplication:r}}=A.useApplications();return o.useEffect(()=>{r&&(t(M(r)),u(E({config:{title:"Предоставление справок о группе здоровья",issueDateFieldName:"date_of_issue",organizationFieldName:"organization",docsFieldName:"docs"}})))},[r]),i.jsx(N,{isDone:s,children:!!e&&!!a&&i.jsxs(v,{noHeader:!0,children:[i.jsx(f,d(n({},e),{collapsed:s,setData:t})),i.jsx(f,d(n({},a),{collapsed:s,setData:u})),i.jsx(D,{text:s?"Отправлено":"Отправить",action:()=>w(B.MEDICAL_CERT_086,[e,a],g,c,!0),isLoading:F,completed:l,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:b(e)&&b(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
