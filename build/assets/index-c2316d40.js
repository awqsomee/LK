var b=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(t,e,i)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,c=(t,e)=>{for(var i in e||(e={}))x.call(e,i)&&n(t,i,e[i]);if(u)for(var i of u(e))g.call(e,i)&&n(t,i,e[i]);return t},p=(t,e)=>h(t,v(e));import{r,j as s}from"./vendor-60fdf703.js";import{bw as N,b0 as F,b1 as _,bA as j,h as q,d6 as y,d1 as A,bB as S}from"./index-154347a0.js";const E=[{id:0,title:"Сироты или оставшиеся без попечения родителей"},{id:1,title:"Инвалиды"},{id:2,title:"Члены многодетной семьи"},{id:3,title:"Имеющие на иждивении ребёнка"},{id:4,title:"Участники военных действий"},{id:5,title:"Родители – инвалиды, пенсионеры"},{id:6,title:"Члены неполной семьи"},{id:7,title:"Хроническое заболевание"}],k=[{id:0,title:"Выплату прошу производить наличным путем"},{id:1,title:"Выплату производить безналичным путем на расчетный счет открытый в ПАО Сбербанк:"}],w=t=>({title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Основание для получения дотации",fieldName:"justification_grant",value:"",type:"select",width:"100%",editable:!0,required:!0,items:E},{title:"Прошу назначить меня на получение материальной поддержки остронуждающимся студентам в связи с тем, что:",fieldName:"reason",value:"",editable:!0,required:!0,placeholder:"Укажите причину"},{title:"Номер членского профсоюзного билета",fieldName:"union_card_number",value:"",editable:!0,required:!0},{title:"Адрес по месту регистрации:",fieldName:"registration_address",value:"",editable:!0,required:!0,placeholder:"(индекс, область, город, улица, дом, корпус, квартира)"},{title:"Гражданин иностранного государства",fieldName:"is_foreigner",type:"checkbox",value:"",editable:!0},{title:"Способ выплаты",fieldName:"payment_method",value:"",type:"select",width:"100%",editable:!0,required:!0,items:k},{title:"Расчетный счет, 20 цифр",fieldName:"payment_account",value:"",width:"100%",editable:!0,placeholder:""}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0},alert:"Загрузите документы, подтверждающие право на получение дотации"}),O=()=>{var t;const[e,i]=r.useState(null),[a,o]=r.useState(!1),[m,f]=r.useState(!1),l=a!=null?a:!1,{data:{dataUserApplication:d}}=N.useApplications();return r.useEffect(()=>{d&&i(w(d))},[d]),s.jsx(F,{isDone:l,children:!!e&&!!i&&s.jsxs(_,{children:[s.jsx(j,p(c({},e),{collapsed:l,setData:i})),s.jsx(q,{text:l?"Отправлено":"Отправить",action:()=>y(A.PR_DONATE,[e],f,o),isLoading:m,completed:a,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:S(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{O as default};
