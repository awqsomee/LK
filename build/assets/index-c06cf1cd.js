import{j as e,r as t}from"./vendor-48260ac4.js";import{cN as d,s as S,B as j,F as y,h as N,cR as _,S as A,aj as q,j as D,c as l}from"./index-2b8fcb1d.js";import{C as w}from"./error-e0d8582f.js";const E=a=>{const{surname:o,name:r,patronymic:c,group:s,email:n,phone:i}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+r+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:n,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления академического отпуска",placeholder:"В соответствии с приказом о предоставлении академического отпуска",type:"select",width:"100%",value:null,fieldName:"reason",editable:!0,required:!0,items:[{id:"medical indications",title:"По медицинским показаниям"},{id:"personal circumstances",title:"По обстоятельствам личного характера"}]},{title:"Дата начала академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:null,fieldName:"begin_academic_leave_period",editable:!0,required:!0},{title:"Дата окончания академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:"",fieldName:"end_academic_leave_period",editable:!0,required:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0,placeholder:"Разъясните необходимость проживания в общежитии в период академического отпуска",required:!0}],hint:e.jsxs(e.Fragment,{children:["В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.",e.jsx("br",{}),e.jsx("br",{}),"Даты и причину необходимо указать в соответствии с приказом о предоставлении академического отпуска"]}),optionalCheckbox:{fieldName:"is_not_document",value:!1,title:"Нет подтверждающего документа",required:!1},documents:{files:[],fieldName:"docs",required:!1,maxFiles:1,allowedTypes:["application/pdf"]}}},T=()=>{const[a,o]=t.useState(null),[r,c]=t.useState(d.kvdCert),[s,n]=t.useState(d.fluorographyCert),[i,g]=t.useState(d.vichRwCert),[u,h]=t.useState(d.graftCert),[p,f]=t.useState(!1),[C,v]=t.useState(!1),F=p??!1,{data:{dataUserApplication:m}}=S.useApplications(),x=!!a;if(t.useEffect(()=>{m&&o(E(m))},[m]),!x)return null;if(new Date<new Date(2024,8,15))return e.jsx(w,{});const b=[[{dataForm:a,setDataForm:o}],[{dataForm:r,setDataForm:c}],[{dataForm:s,setDataForm:n}],[{dataForm:i,setDataForm:g}],[{dataForm:u,setDataForm:h}]];return e.jsx(j,{isDone:F,children:e.jsxs(y,{children:[e.jsx(N,{size:4,align:"left",children:"Предоставление права проживания в период академического отпуска"}),e.jsx(_,{stagesConfig:b}),e.jsx(A,{text:"Отправить",action:()=>q(D.USG_GETHOSTEL_AO,[a,r,s,i,u],v,f),isLoading:C,completed:p,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:F,isActive:l(a)&&l(s)&&l(i)&&l(u)&&l(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
