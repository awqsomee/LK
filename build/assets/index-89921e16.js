import{r as e,j as s}from"./vendor-4355a046.js";import{cQ as T,cR as c,s as U,a6 as w,Z as B,cS as k,cT as q,cU as G,B as L,F as M,T as O,cV as _,S as H,aM as V,m as W,b as l}from"./index-65c2a6d9.js";const z=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],I=t=>{const{surname:n,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:z},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:T}]}},Q=()=>{var x;const[t,n]=e.useState(null),[r,d]=e.useState(c.kvdCert),[o,u]=e.useState(c.fluorographyCert),[i,v]=e.useState(c.vichRwCert),[m,D]=e.useState(c.graftCert),{data:{dataUserApplication:p}}=U.useApplications(),{data:{user:f}}=w.useUser(),[F,S]=e.useState(!1),[A,j]=e.useState(!1),[C,R]=e.useState(null),[a,h]=e.useState(null),[g,y]=e.useState(null),b=F??!1,E=!!t&&!!a&&!!C&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(B,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(I(p)),R(k()),h(q()),y(G()))},[p]),!E)return null;const N=[[{dataForm:t,setDataForm:n}],[{dataForm:a,setDataForm:h}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:y}]];return s.jsx(L,{isDone:b,children:s.jsxs(M,{children:[s.jsx(O,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),s.jsx(_,{stagesConfig:N}),s.jsx(H,{text:"Отправить",action:()=>V(W.USG_GETHOSTEL_O,[t,a,C,g,r,o,i,m],j,S),isLoading:A,completed:F,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:l(t)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((x=a==null?void 0:a.documents)!=null&&x.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Q as default};
