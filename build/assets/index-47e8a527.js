var j=Object.defineProperty,B=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,F=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&C(t,s,e[s]);if(x)for(var s of x(e))P.call(e,s)&&C(t,s,e[s]);return t},I=(t,e)=>B(t,_(e));import{r as a,j as m}from"./vendor-8a1e4858.js";import{d5 as M,bx as N,by as k,s as O,bz as U,t as q,bA as T,i as w,d6 as H,bu as L,bB as V}from"./index-7b7b97a2.js";const y=(t=[])=>t.map(e=>({id:e.guid,title:e.name})),W=t=>{const e=M(t);return e?e+" ":""},z=(t,e,s,b,r,h,u,S,d,g,c,f,n)=>{const o=y(t.head_div);return{title:"Внесение изменений данных подразделения в телефонном справочнике",data:[{fieldName:"guid",title:"Наименование подразделения",value:N(o,e)||y(t.head_div)[0],onChange:i=>s(i.title),editable:o.length>1,width:"100",required:!0,type:"select",items:o,isSpecificSelect:!0},{fieldName:"email",value:b,onChange:r,title:"Общая корпоративная электронная почта",type:"email"},{fieldName:"phone_direct",title:"Общий прямой телефон",type:"tel",value:h,onChange:u,mask:!0},{fieldName:"phone_inner",title:"Общий внутренний телефон",type:"innerPhone",value:S,onChange:d,mask:!0},{fieldName:"address",title:"Адрес рабочего места",type:"select",value:N(k,g),items:k,onChange:i=>{c(i.title),n(W(i.title))},width:"100",editable:!0,required:!0},{fieldName:"room",title:"Номер кабинета",type:"cabinet",mask:!0,value:f,onChange:n,editable:!0,required:!0}]}},J=()=>{const[t,e]=a.useState(null),[s,b]=a.useState(""),[r,h]=a.useState(""),[u,S]=a.useState(""),[d,g]=a.useState(""),[c,f]=a.useState(""),[n,o]=a.useState(""),[i,v]=a.useState(!1),[A,E]=a.useState(!1),p=i!=null?i:!1,{data:{user:l}}=O.useUser();return a.useEffect(()=>{l&&e(z(l,s,b,r,h,u,S,d,g,c,f,n,o))},[l==null?void 0:l.guid,s,r,u,d,c,n]),m.jsx(U,{isDone:p,children:!!t&&!!e&&m.jsxs(q,{noHeader:!0,children:[m.jsx(T,I(F({},t),{collapsed:p,setData:e})),m.jsx(w,{text:p?"Отправлено":"Отправить",action:()=>H(L.EDIT_PHONEBOOK_SUBDIVISION,[t],E,v,!0),isLoading:A,completed:i,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:p,isActive:V(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{J as default};
