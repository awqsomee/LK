import{r as e,j as t}from"./vendor-8a1e4858.js";import{k as n,l as r,T as c,g as m,I as x,i as p}from"./index-8977d86c.js";import{B as u}from"./index-90dc08c1.js";const h=()=>{const[s,a]=e.useState(""),[i]=e.useState(!1),[l,o]=e.useState(!1);return t.jsx(n,{background:"var(--theme)",children:t.jsxs(u,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",children:[t.jsx(r,{}),t.jsx(c,{size:4,align:"left",children:"Забыли пароль ЕУЗ"}),t.jsx(m,{type:"info",title:"Восстановление доступа через ЕУЗ",children:"Данный сервис позволит сбросить пароль для единой учетной записи (ЕУЗ). Ссылка для сброса пароля будет отправлена на вашу почту. Восстановление доступа к личному кабинету возможно только в том случае, если в аккаунте был указан адрес электронной почты и вы заходили в него по ЕУЗ. В остальных случаях обращайтесь на почту help@mospolytech.ru, при этом укажите в сообщении свои ФИО полностью, дату рождения, место работы или учебную группу."}),t.jsx(x,{value:s,setValue:a,title:"E-mail, указанный в личном кабинете:",placeholder:"E-mail, указанный в личном кабинете:"}),t.jsx(p,{text:"Восстановить доступ",action:()=>null,isLoading:i,completed:l,setCompleted:o,isActive:!!s.length})]})})};export{h as default};
