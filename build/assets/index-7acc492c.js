var f=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(e,t,i)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&u(e,i,t[i]);if(o)for(var i of o(t))y.call(t,i)&&u(e,i,t[i]);return e},p=(e,t)=>b(e,v(t));import{j as l,r as s}from"./vendor-3c67dcca.js";import{ad as h,aa as F,F as g,I as N,S as _,ab as q,cI as S,ac as j}from"./index-c3cf5352.js";const A=[{id:0,title:"Экзамен"},{id:1,title:"Дифференцированный зачет"},{id:2,title:"Курсовой проект"},{id:3,title:"Курсовую работу"},{id:4,title:"Практику"}],O=[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"},{id:8,title:"9"},{id:9,title:"10"},{id:10,title:"11"},{id:11,title:"12"},{id:12,title:"13"}],w=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"}],D=[{id:0,title:"Удовлетворительно"},{id:1,title:"Хорошо"}],E=[{id:0,title:"2022/2023"},{id:0,title:"2021/2022"},{id:1,title:"2020/2021"},{id:3,title:"2019/2020"},{id:4,title:"2018/2019"},{id:5,title:"2017/2018"},{id:6,title:"2016/2017"}],k=e=>({title:"Заявление на пересдачу для получения диплома с отличием",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу разрешить мне для получения диплома с отличием пересдать",fieldName:"type_exam",value:"",type:"select",width:"100%",editable:!0,required:!0,items:A},{title:"Дисциплина",fieldName:"name_discipline",value:"",type:"text",editable:!0,required:!0},{title:"Семестр",fieldName:"semester_number",value:"",type:"select",width:"100%",editable:!0,required:!0,items:O},{title:"Форма обучения",fieldName:"form_training",value:"",type:"select",width:"100%",editable:!0,required:!0,items:w},{title:"Учебный год",fieldName:"academic_year_of_delivery",value:"",type:"select",width:"100%",editable:!0,required:!0,items:E},{title:"Полученная оценка",fieldName:"received_assessment",value:"",type:"select",width:"100%",editable:!0,required:!0,items:D}],alert:l.jsx("p",{children:"В соответствии с положением о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в Московском политехническом университете в порядке исключения допускается пересдача одного зачета или экзамена на последнем году обучения с целью получения диплома с отличием."})}),T=()=>{const[e,t]=s.useState(null),[i,r]=s.useState(!1),[m,c]=s.useState(!1),a=i!=null?i:!1,{data:{dataUserApplication:d}}=h.useApplications();return s.useEffect(()=>{d&&t(k(d))},[d]),l.jsx(F,{isDone:a,children:!!e&&!!t&&l.jsxs(g,{children:[l.jsx(N,p(n({},e),{collapsed:a,setData:t})),l.jsx(_,{text:a?"Отправлено":"Отправить",action:()=>q(S.DIPL_OTL,[e],c,r),isLoading:m,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:j(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
