var g=Object.defineProperty,h=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(s,e,t)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,f=(s,e)=>{for(var t in e||(e={}))F.call(e,t)&&m(s,t,e[t]);if(p)for(var t of p(e))j.call(e,t)&&m(s,t,e[t]);return s},v=(s,e)=>h(s,A(e));import{j as a,i as N,r as d}from"./vendor-8a1e4858.js";import{d$ as S,q as y,bv as L,e5 as q,ck as w,a4 as C,bz as D,t as O,bA as B,i as E,d6 as R,d1 as T,bB as _}from"./index-5bf1da28.js";const M=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"}],U=s=>{const{surname:e,name:t,patronymic:l,group:i,email:o,phone:r}=s;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:S},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:M}],hint:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Прикрепите расписку из приемной комиссии о подаче документов для поступления"}),a.jsx("br",{}),a.jsx("p",{children:"Подача заявок будет доступна до 07.08.2024 включительно"})]}),documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["pdf"]}}},I=()=>{var s,e,t;const l=N(y.user),[i,o]=d.useState(null),{data:{dataUserApplication:r}}=L.useApplications(),[u,c]=d.useState(!1),[x,b]=d.useState(!1),n=u!=null?u:!1;return d.useEffect(()=>{r&&o(U(r))},[r]),!["4","5","6"].includes((s=l==null?void 0:l.course)!==null&&s!==void 0?s:"")&&!(l!=null&&(e=l.status)!==null&&e!==void 0&&(e=e.toLocaleLowerCase())!==null&&e!==void 0&&e.includes("окончил"))&&!((l==null||(t=l.degreeLevel)===null||t===void 0?void 0:t.toLocaleLowerCase())==="магистратура"&&(l==null?void 0:l.course)==="2")?a.jsx(q,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}):w&&new Date>new Date("2024 Aug 08")?a.jsx(C,{text:"Подача заявок закончилась"}):a.jsx(D,{isDone:n,children:!!i&&!!o&&a.jsxs(O,{noHeader:!0,children:[a.jsx(B,v(f({},i),{collapsed:n,setData:o})),a.jsx(E,{text:"Отправить",action:()=>R(T.ACCOMMODATION_FOR_GRADUATES,[i],b,c,!1),isLoading:x,completed:u,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:_(i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
