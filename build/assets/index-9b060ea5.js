import{s as E,r as i,u as y,j as e,R as N}from"./vendor-84bdec13.js";import{ce as c,a2 as z,U as S,aW as A,a4 as D,h as F,M as p,n as g,S as I}from"./index-403d189d.js";const L="Физическое лицо с указанными данными не найдено",b=E.span.withConfig({componentId:"sc-1rezql9-0"})(["display:flex;margin:0 auto;gap:5px;text-align:center;"]),B=()=>{const[a,u]=i.useState(""),[o,x]=i.useState(""),d=y(c.getLoginEuzFx.pending),[m,h]=i.useState(!1),{data:{loginEuz:s}}=z.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},f=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(b,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(S,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(A,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:f,noAppearanceInMobile:!0,children:[e.jsx(D,{}),e.jsx(F,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(I,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:h,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===L&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{B as default};
