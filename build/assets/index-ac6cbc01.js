import{r as t,j as l}from"./vendor-48260ac4.js";import{s as p,B as c,F as f,I as g,S as b,aj as F,j as x,c as S}from"./index-77abc1a4.js";import{g as N,a as v}from"./get-method-obtaining-fields-d90ec444.js";import{g as h}from"./get-student-subdivisions-5a2f2c8d.js";import{g as y}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const j=[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:3,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}],A=[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}],q=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"},{id:4,title:"4"},{id:5,title:"5"},{id:6,title:"6"},{id:7,title:"7"},{id:8,title:"8"},{id:9,title:"9"}],O=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...N(),...h(e),...v(),{title:"Документ",type:"select",width:"100",fieldName:"document",value:null,editable:!0,required:!0,items:j},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100",items:A},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:q},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),k=()=>{const[e,a]=t.useState(null),[d,r]=t.useState(!1),[u,n]=t.useState(!1),[o,m]=t.useState({}),i=d??!1,{data:{dataUserApplication:s}}=p.useApplications();return t.useEffect(()=>{s&&a(O(s))},[s]),t.useEffect(()=>{e&&s&&m(y(e.data))},[e]),l.jsx(c,{isDone:i,children:!!e&&!!a&&l.jsxs(f,{children:[l.jsx(g,{...e,collapsed:i,setData:a,specialFieldsNameConfig:o}),l.jsx(b,{text:i?"Отправлено":"Отправить",action:()=>F(x.OKID_LICAKKRED,[e],n,r),isLoading:u,completed:d,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:S(e,o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{k as default};
