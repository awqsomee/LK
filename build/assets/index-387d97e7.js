import{r as e,j as a}from"./vendor-60fdf703.js";import{d_ as u,bw as R,s as q,Y as w,d$ as B,e0 as T,e1 as U,b0 as $,b1 as G,T as L,e2 as M,h as W,d6 as z,d1 as H,bB as s}from"./index-154347a0.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=o=>{const{surname:r,name:t,patronymic:n,group:i,email:c,phone:l}=o;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:r+" "+t+" "+n,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:l,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},V=()=>{var o,r;const[t,n]=e.useState(null),[i,c]=e.useState(u.kvdCert),[l,x]=e.useState(u.fluorographyCert),[m,D]=e.useState(u.vichRwCert),[p,A]=e.useState(u.graftCert),{data:{dataUserApplication:f}}=R.useApplications(),{data:{user:g}}=q.useUser(),[d,C]=e.useState(!1),[_,j]=e.useState(!1),[v,k]=e.useState(null),[F,y]=e.useState(null),[b,h]=e.useState(null),S=d!=null?d:!1,N=!!t&&!!b&&!!v&&!!F;if((g==null?void 0:g.educationForm)!=="Недоступен")return a.jsx(w,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{f&&(n(K(f)),k(B()),h(T()),y(U()))},[f]),!N)return null;const E=[[{dataForm:t,setDataForm:n}],[{dataForm:b,setDataForm:h}],[{dataForm:i,setDataForm:c}],[{dataForm:l,setDataForm:x}],[{dataForm:m,setDataForm:D}],[{dataForm:p,setDataForm:A}],[{dataForm:F,setDataForm:y}]];return a.jsx($,{isDone:S,children:a.jsxs(G,{children:[a.jsx(L,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:E}),a.jsx(W,{text:"Отправить",action:()=>z(H.USG_GETHOSTEL_Z,[t,b,v,F,i,l,m,p],j,C),isLoading:_,completed:d,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:s(t)&&((o=(r=t.optionalCheckbox)===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:!0)&&s(t)&&s(l)&&s(m)&&s(p)&&s(i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{V as default};
