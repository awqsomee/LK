import{r as t,j as o}from"./vendor-a2a65e85.js";import{cK as d,ad as j,cL as A,cM as E,aa as N,F as R,T,cO as B,S as I,ac as l,ab as k,cI as w}from"./index-6bf86a52.js";const L=[{id:0,title:"дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей"},{id:1,title:"дети-инвалиды, инвалиды I и II групп, инвалиды с детства"},{id:2,title:"подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне"},{id:3,title:"инвалиды вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветераны боевых действий"},{id:4,title:"являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» – «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» – «в» пункта 3 статьи 51 Федерального закона от 28.03.1998 N 53-ФЗ «О воинской обязанности и военной службе"},{id:5,title:"получившие государственную социальную помощь"}],U=e=>{const{surname:r,name:a,patronymic:m,group:s,email:u,phone:i}=e;return{title:"Контактная информация",hint:"Необходимо прикрепить документ, подтверждающий соответствие льготной категории",data:[{title:"ФИО",fieldName:"fio",value:r+" "+a+" "+m,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Отношусь к льготной категории граждан:",fieldName:"category",value:"",type:"select",width:"100%",editable:!0,required:!0,items:L}]}},M=()=>{const[e,r]=t.useState(null),[a,m]=t.useState(d.kvdCert),[s,u]=t.useState(d.fluorographyCert),[i,y]=t.useState(d.vichRwCert),[n,b]=t.useState(d.graftCert),{data:{dataUserApplication:p}}=j.useApplications(),[c,g]=t.useState(!1),[f,C]=t.useState(null),[F,S]=t.useState(null),[v,x]=t.useState(!1),h=c!=null?c:!1;t.useEffect(()=>{p&&(r(U(p)),C(A()),S(E()))},[p]);const D=()=>k(w.USG_GETHOSTEL_BENEFIT,[e,F,f,a,s,i,n],x,g);return o.jsx(N,{isDone:h,children:!!e&&!!r&&!!F&&!!f&&o.jsxs(R,{children:[o.jsx(T,{size:4,align:"left",children:"Предоставление права проживания льготной категории граждан"}),o.jsx(B,{stagesConfig:[[{dataForm:e,setDataForm:r}],[{dataForm:f,setDataForm:C}],[{dataForm:F,setDataForm:S}],[{dataForm:a,setDataForm:m},{dataForm:s,setDataForm:u},{dataForm:i,setDataForm:y},{dataForm:n,setDataForm:b}]]}),o.jsx(I,{text:"Отправить",action:()=>D(),isLoading:v,completed:c,setCompleted:g,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:!!s&&!!i&&!!n&&!!a&&l(e)&&l(s)&&l(i)&&l(n)&&l(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
