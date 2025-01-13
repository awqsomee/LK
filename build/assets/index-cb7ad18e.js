import{r as e,j as i}from"./vendor-3c67dcca.js";import{ad as L,cK as f,cN as U,aa as G,F as O,T as I,cO as K,S as W,ab as $,cI as z,ac as t}from"./index-838f6833.js";import{C as H}from"./error-c4a6df04.js";const V=s=>{const{surname:o,name:a,patronymic:n,group:l,email:r,phone:d}=s;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+a+" "+n,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},Y=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],J=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Y,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),Q=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),X=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Z=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),ee=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),te=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),se=()=>{var s,o;const[a,n]=e.useState(null),{data:{dataUserApplication:l}}=L.useApplications(),[r,d]=e.useState(!1),[R,k]=e.useState(!1),[u,S]=e.useState(null),[P,q]=e.useState(null),b=r!=null?r:!1,[g,A]=e.useState(f.kvdCert),[F,M]=e.useState(f.fluorographyCert),[C,_]=e.useState(f.vichRwCert),[y,j]=e.useState(f.graftCert),[h,v]=e.useState(null),[m,x]=e.useState(null),[c,w]=e.useState(null),[p,N]=e.useState(null),[D,T]=e.useState(null),B=!!a&&!!u&&!!P&&!!h&&!!m&&!!c&&!!p&&!!D;if(e.useEffect(()=>{l&&(n(V(l)),S(J()),q(U()),v(Q()),x(X()),w(Z()),N(ee()),T(te()))},[l]),!B)return null;if(new Date<new Date(2024,8,15))return i.jsx(H,{});const E=[[{dataForm:a,setDataForm:n}],[{dataForm:u,setDataForm:S}],[{dataForm:g,setDataForm:A}],[{dataForm:F,setDataForm:M}],[{dataForm:C,setDataForm:_}],[{dataForm:y,setDataForm:j}],[{dataForm:h,setDataForm:v},{dataForm:m,setDataForm:x},{dataForm:c,setDataForm:w},{dataForm:p,setDataForm:N},{dataForm:D,setDataForm:T}]];return i.jsx(G,{isDone:b,children:i.jsxs(O,{children:[i.jsx(I,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),i.jsx(K,{stagesConfig:E}),i.jsx(W,{text:"Отправить",action:()=>$(z.USG_GETHOSTEL_FAMILY,[a,u,g,F,C,y,h,m,c,p],k,d),isLoading:R,completed:r,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:((s=(o=a.optionalCheckbox)===null||o===void 0?void 0:o.value)!==null&&s!==void 0?s:!0)&&t(a)&&t(u)&&t(g)&&t(F)&&t(C)&&t(y)&&t(m)&&t(c)&&t(p)&&t(D),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{se as default};
