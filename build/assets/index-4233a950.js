import{r as e,j as t}from"./vendor-60fdf703.js";import{j as n,k as r,T as c,f as m,I as x,h as p}from"./index-f39231fe.js";import{B as u}from"./index-64df78a5.js";const g=()=>{const[s,a]=e.useState(""),[o]=e.useState(!1),[i,l]=e.useState(!1);return t.jsx(n,{background:"var(--theme)",children:t.jsxs(u,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",children:[t.jsx(r,{}),t.jsx(c,{size:4,align:"left",children:"Забыли пароль ЕУЗ"}),t.jsx(m,{type:"info",title:"Восстановление доступа через ЕУЗ",children:"Данный сервис позволит сбросить пароль для единой учетной записи (ЕУЗ). Ссылка для сброса пароля будет отправлена на вашу почту. Восстановление доступа к личному кабинету возможно только в том случае, если в аккаунте был указан адрес электронной почты и вы заходили в него по ЕУЗ. В остальных случаях обращайтесь на почту help@mospolytech.ru, при этом укажите в сообщении свои ФИО полностью, дату рождения, место работы или учебную группу."}),t.jsx(x,{value:s,setValue:a,title:"E-mail, указанный в личном кабинете:",placeholder:"E-mail, указанный в личном кабинете:"}),t.jsx(p,{text:"Восстановить доступ",action:()=>null,isLoading:o,completed:i,setCompleted:l,isActive:!!s.length})]})})};export{g as default};
