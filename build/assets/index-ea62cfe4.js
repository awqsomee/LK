import{r as e,j as a}from"./vendor-33947725.js";import{d8 as u,s as R,ai as q,a2 as B,d9 as U,da as w,db as T,B as G,F as L,h as $,dc as M,S as W,aj as z,j as H,c as s}from"./index-03c4ccbf.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=o=>{const{surname:r,name:t,patronymic:n,group:i,email:c,phone:l}=o;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:r+" "+t+" "+n,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:l,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},V=()=>{var o,r;const[t,n]=e.useState(null),[i,c]=e.useState(u.kvdCert),[l,x]=e.useState(u.fluorographyCert),[m,j]=e.useState(u.vichRwCert),[p,D]=e.useState(u.graftCert),{data:{dataUserApplication:f}}=R.useApplications(),{data:{user:g}}=q.useUser(),[d,v]=e.useState(!1),[A,_]=e.useState(!1),[b,k]=e.useState(null),[F,y]=e.useState(null),[C,S]=e.useState(null),h=d!=null?d:!1,N=!!t&&!!C&&!!b&&!!F;if((g==null?void 0:g.educationForm)!=="Недоступен")return a.jsx(B,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{f&&(n(K(f)),k(U()),S(w()),y(T()))},[f]),!N)return null;const E=[[{dataForm:t,setDataForm:n}],[{dataForm:C,setDataForm:S}],[{dataForm:i,setDataForm:c}],[{dataForm:l,setDataForm:x}],[{dataForm:m,setDataForm:j}],[{dataForm:p,setDataForm:D}],[{dataForm:F,setDataForm:y}]];return a.jsx(G,{isDone:h,children:a.jsxs(L,{children:[a.jsx($,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:E}),a.jsx(W,{text:"Отправить",action:()=>z(H.USG_GETHOSTEL_Z,[t,C,b,F,i,l,m,p],_,v),isLoading:A,completed:d,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&((o=(r=t.optionalCheckbox)===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:!0)&&s(t)&&s(l)&&s(m)&&s(p)&&s(i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{V as default};
