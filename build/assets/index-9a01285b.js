import{r as e,j as t}from"./vendor-33947725.js";import{d7 as N,d8 as u,s as B,ai as U,a2 as k,d9 as q,da as T,db as _,B as G,F as L,h as O,dc as H,S as M,aj as W,j as $,c as l}from"./index-03c4ccbf.js";import{C as z}from"./error-51a7ce15.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=r=>{const{surname:a,name:n,patronymic:o,group:c,email:i,phone:m}=r;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:a+" "+n+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:c,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:m,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},Q=()=>{var r;const[a,n]=e.useState(null),[o,c]=e.useState(u.kvdCert),[i,m]=e.useState(u.fluorographyCert),[p,x]=e.useState(u.vichRwCert),[f,D]=e.useState(u.graftCert),{data:{dataUserApplication:g}}=B.useApplications(),{data:{user:F}}=U.useUser(),[d,S]=e.useState(!1),[j,A]=e.useState(!1),[h,w]=e.useState(null),[s,v]=e.useState(null),[C,y]=e.useState(null),b=d!=null?d:!1,E=!!a&&!!s&&!!h&&!!C;if((F==null?void 0:F.educationForm)!=="Очная")return t.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{g&&(n(K(g)),w(q()),v(T()),y(_()))},[g]),!E)return null;if(new Date<new Date(2024,8,15))return t.jsx(z,{});const R=[[{dataForm:a,setDataForm:n}],[{dataForm:s,setDataForm:v}],[{dataForm:o,setDataForm:c}],[{dataForm:i,setDataForm:m}],[{dataForm:p,setDataForm:x}],[{dataForm:f,setDataForm:D}],[{dataForm:C,setDataForm:y}]];return t.jsx(G,{isDone:b,children:t.jsxs(L,{children:[t.jsx(O,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),t.jsx(H,{stagesConfig:R}),t.jsx(M,{text:"Отправить",action:()=>W($.USG_GETHOSTEL_O,[a,s,h,C,o,i,p,f],A,S),isLoading:j,completed:d,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:l(a)&&l(i)&&l(p)&&l(f)&&l(o)&&!!(s!=null&&(r=s.documents)!==null&&r!==void 0&&r.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Q as default};
