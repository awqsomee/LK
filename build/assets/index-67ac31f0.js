import{s as E,r as i,u as y,j as e,R as N}from"./vendor-9c916fad.js";import{cw as c,ag as z,_ as S,b9 as b,ak as w,h as A,M as p,p as g,S as D}from"./index-dc58d1cc.js";const F="Физическое лицо с указанными данными не найдено",I=E.span.withConfig({componentId:"sc-1rezql9-0"})(["display:flex;margin:0 auto;gap:5px;text-align:center;"]),v=()=>{const[a,u]=i.useState(""),[o,x]=i.useState(""),d=y(c.getLoginEuzFx.pending),[m,h]=i.useState(!1),{data:{loginEuz:s}}=z.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},f=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(I,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(S,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(b,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:f,noAppearanceInMobile:!0,children:[e.jsx(w,{}),e.jsx(A,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(D,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:h,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===F&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{v as default};
