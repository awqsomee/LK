import{r as e,j as t}from"./vendor-48260ac4.js";import{c_ as N,c$ as d,s as B,ai as U,a2 as k,d0 as q,d1 as T,d2 as _,B as G,F as L,h as O,d3 as H,S as M,aj as W,j as $,c as l}from"./index-078ea5cc.js";import{C as z}from"./error-df9cf883.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=a=>{const{surname:n,name:r,patronymic:u,group:o,email:c,phone:i}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+u,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},Q=()=>{var b;const[a,n]=e.useState(null),[r,u]=e.useState(d.kvdCert),[o,c]=e.useState(d.fluorographyCert),[i,v]=e.useState(d.vichRwCert),[m,D]=e.useState(d.graftCert),{data:{dataUserApplication:p}}=B.useApplications(),{data:{user:f}}=U.useUser(),[F,C]=e.useState(!1),[j,A]=e.useState(!1),[S,w]=e.useState(null),[s,h]=e.useState(null),[g,y]=e.useState(null),x=F??!1,E=!!a&&!!s&&!!S&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return t.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(K(p)),w(q()),h(T()),y(_()))},[p]),!E)return null;if(new Date<new Date(2024,8,15))return t.jsx(z,{});const R=[[{dataForm:a,setDataForm:n}],[{dataForm:s,setDataForm:h}],[{dataForm:r,setDataForm:u}],[{dataForm:o,setDataForm:c}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:y}]];return t.jsx(G,{isDone:x,children:t.jsxs(L,{children:[t.jsx(O,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),t.jsx(H,{stagesConfig:R}),t.jsx(M,{text:"Отправить",action:()=>W($.USG_GETHOSTEL_O,[a,s,S,g,r,o,i,m],A,C),isLoading:j,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:l(a)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((b=s==null?void 0:s.documents)!=null&&b.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Q as default};
