var x=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&c(t,s,e[s]);if(d)for(var s of d(e))j.call(e,s)&&c(t,s,e[s]);return t},p=(t,e)=>g(t,h(e));import{s as F,j as a,r as o}from"./vendor-8a1e4858.js";import{bv as S,bz as v,t as A,bA as y,i as B,d6 as M,d1 as C,bB as D}from"./index-4256834b.js";const E=t=>({title:"Отправить документы воинского учета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0,maxFileSizeInMegaBytes:10},alert:a.jsxs("p",{children:["Прикрепите сканы документов для воинского учета (все заполненные страницы):",a.jsxs(I,{children:[a.jsx("li",{children:"удостоверение гражданина, подлежащего призыву; "}),a.jsx("li",{children:"военный билет;"})]})]})}),I=F.ul.withConfig({componentId:"sc-6ucomu-0"})(["padding-left:1rem;"]),N=()=>{var t;const[e,s]=o.useState(null),[l,n]=o.useState(!1),[m,f]=o.useState(!1),i=l!=null?l:!1,{data:{dataUserApplication:r}}=S.useApplications();return o.useEffect(()=>{r&&s(E(r))},[r]),a.jsx(v,{isDone:i,children:!!e&&!!s&&a.jsxs(A,{noHeader:!0,children:[a.jsx(y,p(u({},e),{collapsed:i,setData:s})),a.jsx(B,{text:i?"Отправлено":"Отправить",action:()=>M(C.MILDOCS,[e],f,n),isLoading:m,completed:l,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:D(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
