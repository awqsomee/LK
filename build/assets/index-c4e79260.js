import{r,j as n}from"./vendor-48260ac4.js";import{g as c,a as u}from"./get-default-subdivision-17957fb0.js";import{s as d,B as m,F as f,I as h,S as b,aj as x,A as S,c as g}from"./index-b7ca9b2e.js";const _=e=>{const{surname:t,name:s,patronymic:a,subdivisions:i}=e;return{title:"Запрос на изменение внутреннего телефона",data:[{title:"ФИО",fieldName:"fio",value:t+" "+s+" "+a,editable:!1},{title:"Подразделение/должность",value:c(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:u(i),isSpecificSelect:!0},{fieldName:"phone_inner",title:"Внутренний телефон",type:"innerPhone",value:"",mask:!0,required:!0},{fieldName:"show_inner_phone_inner",title:"Показывать внутренний телефон внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_inner_phone_outer",title:"Показывать внутренний телефон на сайте",type:"checkbox",value:!1}]}},A=()=>{const[e,t]=r.useState(null),[s,a]=r.useState(!1),[i,p]=r.useState(!1),o=s??!1,{data:{dataUserApplication:l}}=d.useApplications();return r.useEffect(()=>{l&&t(_(l))},[l]),n.jsx(m,{isDone:o,children:!!e&&!!t&&n.jsxs(f,{noHeader:!0,children:[n.jsx(h,{...e,collapsed:o,setData:t}),n.jsx(b,{text:o?"Отправлено":"Отправить",action:()=>x(S.EDIT_PHONEBOOK_INNER_PHONE,[e],p,a,!0),isLoading:i,completed:s,setCompleted:a,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:g(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
