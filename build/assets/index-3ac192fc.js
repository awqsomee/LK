var b=Object.defineProperty,N=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var n=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))F.call(e,a)&&n(t,a,e[a]);if(u)for(var a of u(e))A.call(e,a)&&n(t,a,e[a]);return t},p=(t,e)=>N(t,x(e));import{j as l,r as i}from"./vendor-60fdf703.js";import{bw as g,b0 as h,b1 as S,bA as y,h as q,d6 as j,d1 as C,bB as E}from"./index-154347a0.js";const R=t=>{const e=t.find(s=>s.fieldName==="reason");let a=null;return e!=null&&e.value&&(e==null?void 0:e.value).title==="обстоятельства личного характера"&&(a="personalNature"),{reason_academic:a}},B=[{id:0,title:"медицинские показания"},{id:1,title:"призыв на военную службу"},{id:2,title:"обстоятельства личного характера"}],k=t=>({title:"Предоставление академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Срок предоставления c:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Причина предоставления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:B},{title:"Академический отпуск по обстоятельствам личного характера необходим по следующей(-им) причине(-ам):",type:"textarea",fieldName:"pers-cases",value:"",editable:!0,placeholder:"укажите причины личного характера",specialType:"personalNature",required:!0},{title:"Количество листов подтверждающих документов",type:"text",fieldName:"num_sheets",value:null,editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],hint:l.jsx(l.Fragment,{children:"В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы."}),documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),_=()=>{const[t,e]=i.useState(null),[a,s]=i.useState(!1),[m,f]=i.useState(!1),[d,v]=i.useState({}),r=a!=null?a:!1,{data:{dataUserApplication:o}}=g.useApplications();return i.useEffect(()=>{o&&e(k(o))},[o]),i.useEffect(()=>{t&&o&&v(R(t.data))},[t]),l.jsx(h,{isDone:r,children:!!t&&!!e&&l.jsxs(S,{children:[l.jsx(y,p(c({},t),{collapsed:r,setData:e,specialFieldsNameConfig:d})),l.jsx(q,{text:r?"Отправлено":"Отправить",action:()=>j(C.CRS_ACADEMVAC,[t],f,s),isLoading:m,completed:a,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:E(t,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{_ as default};
