import{j as e,r}from"./vendor-48260ac4.js";import{cM as n,s as p,k as c,a2 as m,B as f,F as x,I as h,S as F,aj as j,j as A,c as b}from"./index-2b8fcb1d.js";const g=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"}],S=t=>{const{surname:a,name:s,patronymic:l,group:i,email:o,phone:u}=t;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:a+" "+s+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:u,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:n},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:g}],hint:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Прикрепите расписку из приемной комиссии о подаче документов для поступления"}),e.jsx("br",{}),e.jsx("p",{children:"Подача заявок будет доступна до 07.08.2024 включительно"})]}),documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["application/pdf"]}}},y=()=>{const[t,a]=r.useState(null),{data:{dataUserApplication:s}}=p.useApplications(),[l,i]=r.useState(!1),[o,u]=r.useState(!1),d=l??!1;return r.useEffect(()=>{s&&a(S(s))},[s]),c&&new Date>new Date("2024 Aug 08")?e.jsx(m,{text:"Подача заявок закончилась"}):e.jsx(f,{isDone:d,children:!!t&&!!a&&e.jsxs(x,{noHeader:!0,children:[e.jsx(h,{...t,collapsed:d,setData:a}),e.jsx(F,{text:"Отправить",action:()=>j(A.ACCOMMODATION_FOR_GRADUATES,[t],u,i,!1),isLoading:o,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:b(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{y as default};
