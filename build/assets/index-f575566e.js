import{s as E,r as i,u as y,j as e,R as N}from"./vendor-60fdf703.js";import{l as c,s as z,j as I,k as A,T as B,f as p,I as g,h as D}from"./index-27bbb5ce.js";import{B as F}from"./index-89ac9570.js";const L="Физическое лицо с указанными данными не найдено",S=E.span.withConfig({componentId:"sc-1rezql9-0"})(["display:flex;margin:0 auto;gap:5px;text-align:center;"]),w=()=>{const[a,u]=i.useState(""),[o,x]=i.useState(""),d=y(c.getLoginEuzFx.pending),[m,f]=i.useState(!1),{data:{loginEuz:s}}=z.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},h=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(S,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(I,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(F,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:h,noAppearanceInMobile:!0,children:[e.jsx(A,{}),e.jsx(B,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(D,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:f,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===L&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{w as default};
