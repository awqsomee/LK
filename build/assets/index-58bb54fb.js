var x=Object.defineProperty,h=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))C.call(t,a)&&p(e,a,t[a]);return e},d=(e,t)=>h(e,S(t));import{r as i,j as o}from"./vendor-8a1e4858.js";import{bv as v,eb as A,bz as E,t as N,bA as f,i as D,d6 as B,d1 as M,bB as b}from"./index-7b7b97a2.js";const _=e=>{const{phone:t,email:a}=e;return{title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}},z=()=>{const[e,t]=i.useState(null),[a,u]=i.useState(null),[l,c]=i.useState(!1),[F,g]=i.useState(!1),s=l!=null?l:!1,{data:{dataUserApplication:r}}=v.useApplications();return i.useEffect(()=>{r&&(t(_(r)),u(A({config:{title:"Предоставление справок о группе здоровья",issueDateFieldName:"date_of_issue",organizationFieldName:"organization",docsFieldName:"docs"}})))},[r]),o.jsx(E,{isDone:s,children:!!e&&!!a&&o.jsxs(N,{noHeader:!0,children:[o.jsx(f,d(n({},e),{collapsed:s,setData:t})),o.jsx(f,d(n({},a),{collapsed:s,setData:u})),o.jsx(D,{text:s?"Отправлено":"Отправить",action:()=>B(M.MEDICAL_CERT_086,[e,a],g,c,!0),isLoading:F,completed:l,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:b(e)&&b(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{z as default};
