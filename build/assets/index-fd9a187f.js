import{s as E,r as i,o as y,j as e,R as N}from"./vendor-f1fdae2f.js";import{c5 as v,cv as c,V as S,v as z,aW as A,R as D,T as F,M as p,g,S as L}from"./index-c9a56a5b.js";const R="Физическое лицо с указанными данными не найдено",b=E.span`
    display: flex;
    margin: 0 auto;
    gap: 5px;
    text-align: center;
`,P=()=>{const[a,u]=i.useState(""),[o,x]=i.useState("");v();const d=y(c.getLoginEuzFx.pending),[m,h]=i.useState(!1),{data:{loginEuz:s}}=S.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},f=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(b,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(z,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(A,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:f,noAppearanceInMobile:!0,children:[e.jsx(D,{}),e.jsx(F,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(L,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:h,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===R&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{P as default};
