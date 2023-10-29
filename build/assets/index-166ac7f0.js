import{j as e,r as t}from"./vendor-4af360a6.js";import{cL as d,a2 as y,ar as N,F as j,T as _,cP as A,S as q,aw as k,d as w,N as i}from"./index-c25f9d36.js";const D=a=>{const{surname:o,name:r,patronymic:c,group:s,email:n,phone:l}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+r+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:n,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:l,editable:!0,required:!0},{title:"Причина предоставления академического отпуска",placeholder:"В соответствии с приказом о предоставлении академического отпуска",type:"select",width:"100%",value:null,fieldName:"reason",editable:!0,required:!0,items:[{id:"medical indications",title:"По медицинским показаниям"},{id:"personal circumstances",title:"По обстоятельствам личного характера"}]},{title:"Дата начала академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:null,fieldName:"begin_academic_leave_period",editable:!0,required:!0},{title:"Дата окончания академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:"",fieldName:"end_academic_leave_period",editable:!0,required:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0,placeholder:"Разъясните необходимость проживания в общежитии в период академического отпуска",required:!0}],hint:e.jsxs(e.Fragment,{children:["В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.",e.jsx("br",{}),e.jsx("br",{}),"Даты и причину необходимо указать в соответствии с приказом о предоставлении академического отпуска"]}),optionalCheckbox:{fieldName:"is_not_document",value:!1,title:"Нет подтверждающего документа",required:!1},documents:{files:[],fieldName:"docs",required:!1,maxFiles:1,allowedTypes:["application/pdf"]}}},L=()=>{var g;const[a,o]=t.useState(null),[r,c]=t.useState(d.kvdCert),[s,n]=t.useState(d.fluorographyCert),[l,h]=t.useState(d.vichRwCert),[u,C]=t.useState(d.graftCert),[m,f]=t.useState(!1),[v,x]=t.useState(!1),F=m??!1,{data:{dataUserApplication:p}}=y.useApplications(),b=!!a;if(t.useEffect(()=>{p&&o(D(p))},[p]),!b)return null;const S=[[{dataForm:a,setDataForm:o}],[{dataForm:r,setDataForm:c}],[{dataForm:s,setDataForm:n}],[{dataForm:l,setDataForm:h}],[{dataForm:u,setDataForm:C}]];return e.jsx(N,{isDone:F,children:e.jsxs(j,{children:[e.jsx(_,{size:4,align:"left",children:"Предоставление права проживания в период академического отпуска"}),e.jsx(A,{stagesConfig:S}),e.jsx(q,{text:"Отправить",action:()=>k(w.USG_GETHOSTEL_AO,[a,r,s,l,u],x,f),isLoading:v,completed:m,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:F,isActive:i(a)&&i(s)&&i(l)&&i(u)&&i(r)&&(((g=a.optionalCheckbox)==null?void 0:g.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
