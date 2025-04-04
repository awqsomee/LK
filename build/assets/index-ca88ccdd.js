import{r as e,j as r}from"./vendor-8a1e4858.js";import{bv as L,e0 as f,e3 as U,bz as G,t as z,T as O,e4 as W,i as $,d6 as H,d1 as I,bB as t}from"./index-28c96bb4.js";import{C as K}from"./error-3d7172fc.js";const V=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Y=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),J=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Q=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),X=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Z=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],ee=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Z,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),te=s=>{const{surname:o,name:a,patronymic:n,group:l,email:i,phone:d}=s;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+a+" "+n,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},se=()=>{var s,o;const[a,n]=e.useState(null),{data:{dataUserApplication:l}}=L.useApplications(),[i,d]=e.useState(!1),[R,k]=e.useState(!1),[u,D]=e.useState(null),[P,q]=e.useState(null),S=i!=null?i:!1,[g,A]=e.useState(f.kvdCert),[F,M]=e.useState(f.fluorographyCert),[C,_]=e.useState(f.vichRwCert),[y,j]=e.useState(f.graftCert),[h,v]=e.useState(null),[m,x]=e.useState(null),[c,w]=e.useState(null),[p,T]=e.useState(null),[b,N]=e.useState(null),B=!!a&&!!u&&!!P&&!!h&&!!m&&!!c&&!!p&&!!b;if(e.useEffect(()=>{l&&(n(te(l)),D(ee()),q(U()),v(V()),x(Y()),w(J()),T(Q()),N(X()))},[l]),!B)return null;if(new Date<new Date(2024,8,15))return r.jsx(K,{});const E=[[{dataForm:a,setDataForm:n}],[{dataForm:u,setDataForm:D}],[{dataForm:g,setDataForm:A}],[{dataForm:F,setDataForm:M}],[{dataForm:C,setDataForm:_}],[{dataForm:y,setDataForm:j}],[{dataForm:h,setDataForm:v},{dataForm:m,setDataForm:x},{dataForm:c,setDataForm:w},{dataForm:p,setDataForm:T},{dataForm:b,setDataForm:N}]];return r.jsx(G,{isDone:S,children:r.jsxs(z,{children:[r.jsx(O,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),r.jsx(W,{stagesConfig:E}),r.jsx($,{text:"Отправить",action:()=>H(I.USG_GETHOSTEL_FAMILY,[a,u,g,F,C,y,h,m,c,p],k,d),isLoading:R,completed:i,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:((s=(o=a.optionalCheckbox)===null||o===void 0?void 0:o.value)!==null&&s!==void 0?s:!0)&&t(a)&&t(u)&&t(g)&&t(F)&&t(C)&&t(y)&&t(m)&&t(c)&&t(p)&&t(b),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{se as default};
