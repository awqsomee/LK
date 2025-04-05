import{j as e,r as t}from"./vendor-8a1e4858.js";import{e0 as n,bv as S,bz as y,t as j,T as N,e4 as _,i as A,d6 as q,d1 as D,bB as l}from"./index-5bf1da28.js";import{C as w}from"./error-3443d5a6.js";const E=a=>{const{surname:o,name:r,patronymic:u,group:s,email:c,phone:i}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+r+" "+u,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления академического отпуска",placeholder:"В соответствии с приказом о предоставлении академического отпуска",type:"select",width:"100%",value:null,fieldName:"reason",editable:!0,required:!0,items:[{id:"medical indications",title:"По медицинским показаниям"},{id:"personal circumstances",title:"По обстоятельствам личного характера"}]},{title:"Дата начала академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:null,fieldName:"begin_academic_leave_period",editable:!0,required:!0},{title:"Дата окончания академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:"",fieldName:"end_academic_leave_period",editable:!0,required:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0,placeholder:"Разъясните необходимость проживания в общежитии в период академического отпуска",required:!0}],hint:e.jsxs(e.Fragment,{children:["В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.",e.jsx("br",{}),e.jsx("br",{}),"Даты и причину необходимо указать в соответствии с приказом о предоставлении академического отпуска"]}),optionalCheckbox:{fieldName:"is_not_document",value:!1,title:"Нет подтверждающего документа",required:!1},documents:{files:[],fieldName:"docs",required:!1,maxFiles:1,allowedTypes:["pdf"]}}},L=()=>{const[a,o]=t.useState(null),[r,u]=t.useState(n.kvdCert),[s,c]=t.useState(n.fluorographyCert),[i,F]=t.useState(n.vichRwCert),[m,C]=t.useState(n.graftCert),[d,f]=t.useState(!1),[h,v]=t.useState(!1),g=d!=null?d:!1,{data:{dataUserApplication:p}}=S.useApplications(),b=!!a;if(t.useEffect(()=>{p&&o(E(p))},[p]),!b)return null;if(new Date<new Date(2024,8,15))return e.jsx(w,{});const x=[[{dataForm:a,setDataForm:o}],[{dataForm:r,setDataForm:u}],[{dataForm:s,setDataForm:c}],[{dataForm:i,setDataForm:F}],[{dataForm:m,setDataForm:C}]];return e.jsx(y,{isDone:g,children:e.jsxs(j,{children:[e.jsx(N,{size:4,align:"left",children:"Предоставление права проживания в период академического отпуска"}),e.jsx(_,{stagesConfig:x}),e.jsx(A,{text:"Отправить",action:()=>q(D.USG_GETHOSTEL_AO,[a,r,s,i,m],v,f),isLoading:h,completed:d,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:g,isActive:l(a)&&l(s)&&l(i)&&l(m)&&l(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
