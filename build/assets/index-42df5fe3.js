import{r as e,j as i}from"./vendor-fdf02817.js";import{bx as L,d$ as f,e2 as U,b1 as G,b2 as $,T as O,e3 as W,h as z,d7 as H,d2 as I,bC as t}from"./index-2172af78.js";import{C as K}from"./error-2efd576c.js";const V=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Y=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),J=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Q=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),X=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Z=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],ee=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Z,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),te=s=>{const{surname:o,name:a,patronymic:n,group:l,email:r,phone:d}=s;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+a+" "+n,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},se=()=>{var s,o;const[a,n]=e.useState(null),{data:{dataUserApplication:l}}=L.useApplications(),[r,d]=e.useState(!1),[R,k]=e.useState(!1),[u,D]=e.useState(null),[P,q]=e.useState(null),S=r!=null?r:!1,[g,A]=e.useState(f.kvdCert),[F,M]=e.useState(f.fluorographyCert),[C,_]=e.useState(f.vichRwCert),[y,j]=e.useState(f.graftCert),[h,x]=e.useState(null),[m,v]=e.useState(null),[c,w]=e.useState(null),[p,T]=e.useState(null),[b,N]=e.useState(null),B=!!a&&!!u&&!!P&&!!h&&!!m&&!!c&&!!p&&!!b;if(e.useEffect(()=>{l&&(n(te(l)),D(ee()),q(U()),x(V()),v(Y()),w(J()),T(Q()),N(X()))},[l]),!B)return null;if(new Date<new Date(2024,8,15))return i.jsx(K,{});const E=[[{dataForm:a,setDataForm:n}],[{dataForm:u,setDataForm:D}],[{dataForm:g,setDataForm:A}],[{dataForm:F,setDataForm:M}],[{dataForm:C,setDataForm:_}],[{dataForm:y,setDataForm:j}],[{dataForm:h,setDataForm:x},{dataForm:m,setDataForm:v},{dataForm:c,setDataForm:w},{dataForm:p,setDataForm:T},{dataForm:b,setDataForm:N}]];return i.jsx(G,{isDone:S,children:i.jsxs($,{children:[i.jsx(O,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),i.jsx(W,{stagesConfig:E}),i.jsx(z,{text:"Отправить",action:()=>H(I.USG_GETHOSTEL_FAMILY,[a,u,g,F,C,y,h,m,c,p],k,d),isLoading:R,completed:r,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:((s=(o=a.optionalCheckbox)===null||o===void 0?void 0:o.value)!==null&&s!==void 0?s:!0)&&t(a)&&t(u)&&t(g)&&t(F)&&t(C)&&t(y)&&t(m)&&t(c)&&t(p)&&t(b),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{se as default};
