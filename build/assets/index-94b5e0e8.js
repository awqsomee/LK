import{r as e,j as a}from"./vendor-2bd70a0f.js";import{cJ as n,ah as _,Z as k,N as q,cK as T,cL as U,cM as w,ar as B,F as L,T as G,cN as M,S as J,ax as K,d as W,J as s}from"./index-bc77f324.js";const Z=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],z=t=>{const{surname:l,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:l+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Z},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},O=()=>{var x;const[t,l]=e.useState(null),[r,d]=e.useState(n.kvdCert),[o,u]=e.useState(n.fluorographyCert),[i,v]=e.useState(n.vichRwCert),[c,D]=e.useState(n.graftCert),{data:{dataUserApplication:m}}=_.useApplications(),{data:{user:p}}=k.useUser(),[F,C]=e.useState(!1),[A,N]=e.useState(!1),[y,j]=e.useState(null),[f,S]=e.useState(null),[g,b]=e.useState(null),h=F??!1,E=!!t&&!!g&&!!y&&!!f;if((p==null?void 0:p.educationForm)!=="Недоступен")return a.jsx(q,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{m&&(l(z(m)),j(T()),b(U()),S(w()))},[m]),!E)return null;const R=[[{dataForm:t,setDataForm:l}],[{dataForm:g,setDataForm:b}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:v}],[{dataForm:c,setDataForm:D}],[{dataForm:f,setDataForm:S}]];return a.jsx(B,{isDone:h,children:a.jsxs(L,{children:[a.jsx(G,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:R}),a.jsx(J,{text:"Отправить",action:()=>K(W.USG_GETHOSTEL_Z,[t,g,y,f,r,o,i,c],N,C),isLoading:A,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&(((x=t.optionalCheckbox)==null?void 0:x.value)??!0)&&s(t)&&s(o)&&s(i)&&s(c)&&s(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{O as default};
