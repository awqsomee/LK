import{j as e,ay as r,_ as S,cD as _,a as w,cE as I,b3 as P,r as c,s as C}from"./vendor-60fdf703.js";import{L as p,a as A,F as O,B as l,G as B,M as R,b as T,D as U,C as D,c as F,O as N,u as z,e as k,s as E,d as K,T as y,f as b,S as Y,I as L,g as X,h as q,i as G}from"./index-f39231fe.js";const H=()=>e.jsx("div",{className:"left",children:e.jsxs(p,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[e.jsx(A,{width:"50px",short:!0,className:"logo first"}),e.jsxs(p,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[e.jsx(r,{to:O,tabIndex:-1,children:e.jsx(l,{padding:"0",icon:e.jsx(S,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(r,{to:B,tabIndex:-1,children:e.jsx(l,{padding:"0",icon:e.jsx(_,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(r,{to:R,tabIndex:-1,children:e.jsx(l,{padding:"0",icon:e.jsx(w,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(r,{to:T,tabIndex:-1,children:e.jsx(l,{padding:"0",icon:e.jsx(w,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(U,{}),e.jsx(r,{to:D,tabIndex:-1,children:e.jsx(l,{padding:"0",icon:e.jsx(I,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),e.jsx(F,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:e.jsx(P,{}),align:"left",padding:"0",width:"100%",href:`${N}/index.php`})]})}),V=()=>{const t=z(),a=t.get("login"),s=t.get("password"),[o,h]=c.useState(a!=null?a:""),[n,x]=c.useState(s!=null?s:""),[g,u]=c.useState(!1),f=!!n&&!!o,i=k.login,m=new Date().getMonth()>=6&&new Date().getMonth()<=8,j=d=>{u(d.getModifierState("CapsLock")),d.key==="Enter"&&i({login:o,password:n})},v=d=>{k.changeSavePassword({savePassword:d})},M=()=>i({login:o,password:n});return c.useEffect(()=>{a&&s&&i({login:a,password:s})},[a,s]),{isSubmitActive:f,password:n,capsLock:g,login:o,showAbiturientMessage:m,handleSavePassword:v,handleKeyPress:j,handleLogin:M,setPassword:x,setLogin:h}},W=()=>{var t;const{loading:a,error:s,data:o}=E.useUser(),{isSubmitActive:h,password:n,capsLock:x,login:g,showAbiturientMessage:u,handleKeyPress:f,handleSavePassword:i,handleLogin:m,setPassword:j,setLogin:v}=V();return e.jsx("div",{className:"right",onKeyDown:f,children:e.jsxs(p,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[e.jsx(A,{width:"50px",short:!0,className:"logo second"}),e.jsx(K,{jc:"space-between",children:e.jsx(y,{size:3,align:"left",children:"Личный кабинет"})}),u&&e.jsx(b,{type:"info",title:"Уважаемые абитуриенты!",children:e.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",e.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:e.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),e.jsxs(p,{gap:16,scroll:!1,children:[e.jsx(y,{size:4,align:"left",children:"Вход"}),e.jsx(Y,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),e.jsx(b,{type:"failure",visible:!!s,children:s}),e.jsx(b,{type:"success",visible:(t=o==null?void 0:o.isAuthenticated)!==null&&t!==void 0?t:!1,children:"Вы вошли в аккаунт"}),e.jsx(L,{value:g,setValue:v,title:"Логин",placeholder:"Введите логин"}),e.jsx(L,{value:n,setValue:j,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:x?"Включен Capslock":void 0}),e.jsx(X,{text:"Оставаться в системе",checked:o.savePassword,setChecked:i})]}),e.jsx(q,{text:"Вход",action:m,isLoading:a,completed:!1,setCompleted:()=>null,isActive:h})]})})},$=C(G).withConfig({componentId:"sc-1o25f9n-0"})(["overflow:hidden;min-height:480px;transition:0.2s box-shadow;position:relative;background:",";.left,.right{height:100%;padding:22px;}.right{min-width:350px;width:350px;opacity:",";}.left{min-width:320px;width:320px;transition:0.2s background,0.2s opacity;background:",";padding-top:",";& > * > * > *:not(.logo){opacity:",";}}.logo{transform-origin:left;}.logo.first{z-index:100;animation:",";@keyframes logoMove{0%{position:absolute;top:22px;left:22px;transform:scale(1) translateY(0%) translateX(0%);}100%{position:absolute;top:50%;left:50%;transform:scale(2) translateY(-25%) translateX(-50%);}}}.logo.second{display:none;}@media (max-width:675px){max-width:400px;max-height:90%;flex-direction:column-reverse;overflow-y:auto;justify-content:flex-start;.right{opacity:1;& > * > * > *:not(.logo):not(button){opacity:",";}button{opacity:",";}}.left{padding-top:22px;}.logo.first{display:none;}.logo.second{display:block;z-index:100;animation:",";@keyframes logoMoveMobile{0%{position:absolute;top:22px;left:50%;transform:scale(1) translateY(0%) translateX(-50%);}100%{position:absolute;top:50%;left:50%;transform:scale(2) translateY(-25%) translateX(-50%);}}}.left,.right{width:100%;}}@media (max-width:400px){box-shadow:none;border-radius:0px;height:100%;max-height:100%;}"],({isAuthenticated:t})=>t?"var(--theme)":"var(--block)",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t?"var(--theme)":"var(--theme-1t)",({isAuthenticated:t})=>t?"60px":"22px",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t&&"logoMove 0.8s forwards ease-in-out",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t&&"0",({isAuthenticated:t})=>t&&"logoMoveMobile 0.8s forwards ease-in-out"),Q=()=>{const{data:{isAuthenticated:t}}=E.useUser();return e.jsxs($,{isAuthenticated:t!=null?t:!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[e.jsx(H,{}),e.jsx(W,{})]})},J=C.div.withConfig({componentId:"sc-1p41lbf-0"})(["width:100%;display:flex;justify-content:center;align-items:center;background:var(--theme);flex-direction:column;"]),te=()=>e.jsx(J,{children:e.jsx(Q,{})});export{te as default};
