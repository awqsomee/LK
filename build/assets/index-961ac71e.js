var f=Object.defineProperty,x=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,c=(t,e)=>{for(var s in e||(e={}))F.call(e,s)&&p(t,s,e[s]);if(n)for(var s of n(e))j.call(e,s)&&p(t,s,e[s]);return t},m=(t,e)=>x(t,h(e));import{j as a,r}from"./vendor-33947725.js";import{d7 as A,s as b,k as g,a2 as S,B as v,F as N,I as y,S as q,aj as D,j as O,c as w}from"./index-03c4ccbf.js";const E=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"}],B=t=>{const{surname:e,name:s,patronymic:l,group:i,email:o,phone:d}=t;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:e+" "+s+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:A},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:E}],hint:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Прикрепите расписку из приемной комиссии о подаче документов для поступления"}),a.jsx("br",{}),a.jsx("p",{children:"Подача заявок будет доступна до 07.08.2024 включительно"})]}),documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["pdf"]}}},U=()=>{const[t,e]=r.useState(null),{data:{dataUserApplication:s}}=b.useApplications(),[l,i]=r.useState(!1),[o,d]=r.useState(!1),u=l!=null?l:!1;return r.useEffect(()=>{s&&e(B(s))},[s]),g&&new Date>new Date("2024 Aug 08")?a.jsx(S,{text:"Подача заявок закончилась"}):a.jsx(v,{isDone:u,children:!!t&&!!e&&a.jsxs(N,{noHeader:!0,children:[a.jsx(y,m(c({},t),{collapsed:u,setData:e})),a.jsx(q,{text:"Отправить",action:()=>D(O.ACCOMMODATION_FOR_GRADUATES,[t],d,i,!1),isLoading:o,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:w(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
