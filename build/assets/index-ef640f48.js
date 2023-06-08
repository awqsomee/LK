import{d as b,h as D,aK as j,bd as w,r as t,j as a}from"./vendor-1714f5a3.js";import{$ as y,m as z,Q as E,be as c,R as M,F as R,I as d,C as q,S as $,V as A,k as L,q as n}from"./index-a5eecfde.js";const B=()=>y.get(`?getRequestMedicalCertificate&token=${z()}`),x=b(),N=D(async()=>(await B()).data);j({clock:x,target:N});w(N,null);const I={load:x},T=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],W=e=>{const{phone:s,email:i}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:s,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:i,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:T,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},G=()=>{const[e,s]=t.useState(null),[i,u]=t.useState(null),[o,m]=t.useState(null),[l,f]=t.useState(null),[F,v]=t.useState(!1),[r,p]=t.useState(null),[h,_]=t.useState(!1),[k,S]=t.useState(!1),C=h??!1,{data:{dataUserApplication:g}}=E.useApplications();return t.useEffect(()=>{g&&s(W(g))},[g]),t.useEffect(()=>{I.load(),u(c({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),m(c({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),f(c({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),p(c({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),a.jsx(M,{isDone:!1,children:a.jsxs(R,{children:[e&&s&&a.jsx(d,{...e,setData:s}),i&&u&&a.jsx(d,{...i,setData:u}),o&&m&&a.jsx(d,{...o,setData:m}),l&&f&&a.jsx(d,{...l,setData:f}),r&&p&&a.jsx(d,{...r,setData:p}),a.jsx(q,{checked:F,setChecked:v,text:"Я подтверждаю подлинность предоставленных документов"}),a.jsx($,{text:C?"Отправлено":"Отправить",action:()=>{A(L.MEDICAL_CERT,[e,i,o,l,r],S,_)},isLoading:k,completed:h,setCompleted:_,repeatable:!1,buttonSuccessText:"Отправлено",isDone:C,isActive:!!F&&!!e&&!!o&&!!l&&!!r&&!!i&&n(e)&&n(o)&&n(l)&&n(r)&&n(i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{G as default};
