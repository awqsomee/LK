var b=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))j.call(t,s)&&p(e,s,t[s]);if(n)for(var s of n(t))g.call(t,s)&&p(e,s,t[s]);return e},c=(e,t)=>x(e,f(t));import{j as a,r as l}from"./vendor-60fdf703.js";import{bw as F,b0 as S,b1 as h,bA as A,h as E,d6 as v,d1 as R,bB as B}from"./index-b011310d.js";const k=e=>({title:"Запрос на восстановление магнитного пропуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу восстановить мой магнитный пропуск в связи с:",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0}],alert:a.jsxs(a.Fragment,{children:["1. Заполнить это заявление.",a.jsx("br",{}),"2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.",a.jsx("br",{}),"3. Предоставить заявление в бюро пропусков (Центральная проходная).",a.jsx("br",{}),"4. Получить готовый пропуск в бюро пропусков (Центральная проходная).",a.jsx("br",{}),a.jsx("br",{}),"Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления."]})}),N=()=>{const[e,t]=l.useState(null),[s,i]=l.useState(!1),[d,m]=l.useState(!1),r=s!=null?s:!1,{data:{dataUserApplication:o}}=F.useApplications();return l.useEffect(()=>{o&&t(k(o))},[o]),a.jsx(S,{isDone:r,children:!!e&&!!t&&a.jsxs(h,{children:[a.jsx(A,c(u({},e),{collapsed:r,setData:t})),a.jsx(E,{text:r?"Отправлено":"Отправить",action:()=>v(R.PROPUSK_RESTORE,[e],m,i),isLoading:d,completed:s,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:B(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
