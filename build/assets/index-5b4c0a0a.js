import{j as e,r as t}from"./vendor-60fdf703.js";import{d_ as n,bw as S,b0 as y,b1 as j,T as _,e2 as N,h as A,d6 as q,d1 as w,bB as i}from"./index-27bbb5ce.js";import{C as D}from"./error-f3410369.js";const E=a=>{const{surname:o,name:r,patronymic:u,group:s,email:c,phone:l}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+r+" "+u,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:l,editable:!0,required:!0},{title:"Причина предоставления академического отпуска",placeholder:"В соответствии с приказом о предоставлении академического отпуска",type:"select",width:"100%",value:null,fieldName:"reason",editable:!0,required:!0,items:[{id:"medical indications",title:"По медицинским показаниям"},{id:"personal circumstances",title:"По обстоятельствам личного характера"}]},{title:"Дата начала академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:null,fieldName:"begin_academic_leave_period",editable:!0,required:!0},{title:"Дата окончания академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:"",fieldName:"end_academic_leave_period",editable:!0,required:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0,placeholder:"Разъясните необходимость проживания в общежитии в период академического отпуска",required:!0}],hint:e.jsxs(e.Fragment,{children:["В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.",e.jsx("br",{}),e.jsx("br",{}),"Даты и причину необходимо указать в соответствии с приказом о предоставлении академического отпуска"]}),optionalCheckbox:{fieldName:"is_not_document",value:!1,title:"Нет подтверждающего документа",required:!1},documents:{files:[],fieldName:"docs",required:!1,maxFiles:1,allowedTypes:["pdf"]}}},L=()=>{const[a,o]=t.useState(null),[r,u]=t.useState(n.kvdCert),[s,c]=t.useState(n.fluorographyCert),[l,F]=t.useState(n.vichRwCert),[m,h]=t.useState(n.graftCert),[d,f]=t.useState(!1),[C,b]=t.useState(!1),g=d!=null?d:!1,{data:{dataUserApplication:p}}=S.useApplications(),v=!!a;if(t.useEffect(()=>{p&&o(E(p))},[p]),!v)return null;if(new Date<new Date(2024,8,15))return e.jsx(D,{});const x=[[{dataForm:a,setDataForm:o}],[{dataForm:r,setDataForm:u}],[{dataForm:s,setDataForm:c}],[{dataForm:l,setDataForm:F}],[{dataForm:m,setDataForm:h}]];return e.jsx(y,{isDone:g,children:e.jsxs(j,{children:[e.jsx(_,{size:4,align:"left",children:"Предоставление права проживания в период академического отпуска"}),e.jsx(N,{stagesConfig:x}),e.jsx(A,{text:"Отправить",action:()=>q(w.USG_GETHOSTEL_AO,[a,r,s,l,m],b,f),isLoading:C,completed:d,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:g,isActive:i(a)&&i(s)&&i(l)&&i(m)&&i(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
