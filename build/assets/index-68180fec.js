var x=Object.defineProperty,g=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))h.call(e,s)&&u(t,s,e[s]);if(c)for(var s of c(e))F.call(e,s)&&u(t,s,e[s]);return t},p=(t,e)=>g(t,j(e));import{s as S,j as a,r as o}from"./vendor-33947725.js";import{s as v,B as b,F as A,I as y,S as B,aj as I,j as M,c as C}from"./index-1e8fb889.js";const D=t=>({title:"Отправить документы воинского учета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0,maxFileSizeInMegaBytes:10},alert:a.jsxs("p",{children:["Прикрепите сканы документов для воинского учета (все заполненные страницы):",a.jsxs(E,{children:[a.jsx("li",{children:"удостоверение гражданина, подлежащего призыву; "}),a.jsx("li",{children:"военный билет;"})]})]})}),E=S.ul.withConfig({componentId:"sc-6ucomu-0"})(["padding-left:1rem;"]),N=()=>{var t;const[e,s]=o.useState(null),[l,n]=o.useState(!1),[m,f]=o.useState(!1),i=l!=null?l:!1,{data:{dataUserApplication:r}}=v.useApplications();return o.useEffect(()=>{r&&s(D(r))},[r]),a.jsx(b,{isDone:i,children:!!e&&!!s&&a.jsxs(A,{noHeader:!0,children:[a.jsx(y,p(d({},e),{collapsed:i,setData:s})),a.jsx(B,{text:i?"Отправлено":"Отправить",action:()=>I(M.MILDOCS,[e],f,n),isLoading:m,completed:l,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:C(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
