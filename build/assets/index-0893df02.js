var b=Object.defineProperty,g=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))F.call(e,a)&&m(t,a,e[a]);if(d)for(var a of d(e))N.call(e,a)&&m(t,a,e[a]);return t},x=(t,e)=>g(t,j(e));import{r as o,j as l}from"./vendor-0c8c29fe.js";import{s as S,B as h,F as v,I as A,S as C,aj as E,j as y,c as I}from"./index-179b6f61.js";import{C as q}from"./error-fc84fcff.js";const B=t=>{const{surname:e,name:a,patronymic:s,group:r,email:i,phone:p}=t;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:e+" "+a+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:r,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},k=()=>{var n,c;const[t,e]=o.useState(null),{data:{dataUserApplication:a}}=S.useApplications(),[s,r]=o.useState(!1),[i,p]=o.useState(!1),u=s!=null?s:!1;return o.useEffect(()=>{a&&e(B(a))},[a]),new Date<new Date(2024,8,15)?l.jsx(q,{}):l.jsx(h,{isDone:u,children:!!t&&!!e&&l.jsxs(v,{children:[l.jsx(A,x(f({},t),{collapsed:u,setData:e})),l.jsx(C,{text:"Отправить",action:()=>E(y.USG_RELOCATION_INNER,[t],p,r),isLoading:i,completed:s,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:I(t)&&((c=(n=t.optionalCheckbox)==null?void 0:n.value)!=null?c:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{k as default};
