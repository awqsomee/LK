import{j as e,az as i,_ as S,cE as I,a as w,a2 as _,cF as P,b4 as B,r as c,s as L}from"./vendor-8a1e4858.js";import{L as p,a as A,F as O,B as r,G as T,M as N,b as R,c as F,D as U,C as z,d as D,O as K,u as Y,e as k,s as E,f as W,T as y,g as b,S as X,I as C,h as q,i as G,j as H}from"./index-4a477e8a.js";const V=()=>e.jsx("div",{className:"left",children:e.jsxs(p,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[e.jsx(A,{width:"50px",short:!0,className:"logo first"}),e.jsxs(p,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[e.jsx(i,{to:O,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(S,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(i,{to:T,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(I,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(i,{to:N,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(w,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(i,{to:R,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(w,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(i,{to:F,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(_,{}),text:"Тех. обслуживание",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),e.jsx(U,{}),e.jsx(i,{to:z,tabIndex:-1,children:e.jsx(r,{padding:"0",icon:e.jsx(P,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),e.jsx(D,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:e.jsx(B,{}),align:"left",padding:"0",width:"100%",href:`${K}/index.php`})]})}),$=()=>{const t=Y(),a=t.get("login"),s=t.get("password"),[o,h]=c.useState(a!=null?a:""),[n,x]=c.useState(s!=null?s:""),[g,u]=c.useState(!1),f=!!n&&!!o,l=k.login,m=new Date().getMonth()>=6&&new Date().getMonth()<=8,j=d=>{u(d.getModifierState("CapsLock")),d.key==="Enter"&&l({login:o,password:n})},v=d=>{k.changeSavePassword({savePassword:d})},M=()=>l({login:o,password:n});return c.useEffect(()=>{a&&s&&l({login:a,password:s})},[a,s]),{isSubmitActive:f,password:n,capsLock:g,login:o,showAbiturientMessage:m,handleSavePassword:v,handleKeyPress:j,handleLogin:M,setPassword:x,setLogin:h}},Q=()=>{var t;const{loading:a,error:s,data:o}=E.useUser(),{isSubmitActive:h,password:n,capsLock:x,login:g,showAbiturientMessage:u,handleKeyPress:f,handleSavePassword:l,handleLogin:m,setPassword:j,setLogin:v}=$();return e.jsx("div",{className:"right",onKeyDown:f,children:e.jsxs(p,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[e.jsx(A,{width:"50px",short:!0,className:"logo second"}),e.jsx(W,{jc:"space-between",children:e.jsx(y,{size:3,align:"left",children:"Личный кабинет"})}),u&&e.jsx(b,{type:"info",title:"Уважаемые абитуриенты!",children:e.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",e.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:e.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),e.jsxs(p,{gap:16,scroll:!1,children:[e.jsx(y,{size:4,align:"left",children:"Вход"}),e.jsx(X,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),e.jsx(b,{type:"failure",visible:!!s,children:s}),e.jsx(b,{type:"success",visible:(t=o==null?void 0:o.isAuthenticated)!==null&&t!==void 0?t:!1,children:"Вы вошли в аккаунт"}),e.jsx(C,{value:g,setValue:v,title:"Логин",placeholder:"Введите логин"}),e.jsx(C,{value:n,setValue:j,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:x?"Включен Capslock":void 0}),e.jsx(q,{text:"Оставаться в системе",checked:o.savePassword,setChecked:l})]}),e.jsx(G,{text:"Вход",action:m,isLoading:a,completed:!1,setCompleted:()=>null,isActive:h})]})})},J=L(H).withConfig({componentId:"sc-1o25f9n-0"})(["overflow:hidden;min-height:480px;transition:0.2s box-shadow;position:relative;background:",";.left,.right{height:100%;padding:22px;}.right{min-width:350px;width:350px;opacity:",";}.left{min-width:320px;width:320px;transition:0.2s background,0.2s opacity;background:",";padding-top:",";& > * > * > *:not(.logo){opacity:",";}}.logo{transform-origin:left;}.logo.first{z-index:100;animation:",";@keyframes logoMove{0%{position:absolute;top:22px;left:22px;transform:scale(1) translateY(0%) translateX(0%);}100%{position:absolute;top:50%;left:50%;transform:scale(2) translateY(-25%) translateX(-50%);}}}.logo.second{display:none;}@media (max-width:675px){max-width:400px;max-height:90%;flex-direction:column-reverse;overflow-y:auto;justify-content:flex-start;.right{opacity:1;& > * > * > *:not(.logo):not(button){opacity:",";}button{opacity:",";}}.left{padding-top:22px;}.logo.first{display:none;}.logo.second{display:block;z-index:100;animation:",";@keyframes logoMoveMobile{0%{position:absolute;top:22px;left:50%;transform:scale(1) translateY(0%) translateX(-50%);}100%{position:absolute;top:50%;left:50%;transform:scale(2) translateY(-25%) translateX(-50%);}}}.left,.right{width:100%;}}@media (max-width:400px){box-shadow:none;border-radius:0px;height:100%;max-height:100%;}"],({isAuthenticated:t})=>t?"var(--theme)":"var(--block)",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t?"var(--theme)":"var(--theme-1t)",({isAuthenticated:t})=>t?"60px":"22px",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t&&"logoMove 0.8s forwards ease-in-out",({isAuthenticated:t})=>+!t,({isAuthenticated:t})=>t&&"0",({isAuthenticated:t})=>t&&"logoMoveMobile 0.8s forwards ease-in-out"),Z=()=>{const{data:{isAuthenticated:t}}=E.useUser();return e.jsxs(J,{isAuthenticated:t!=null?t:!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[e.jsx(V,{}),e.jsx(Q,{})]})},ee=L.div.withConfig({componentId:"sc-1p41lbf-0"})(["width:100%;display:flex;justify-content:center;align-items:center;background:var(--theme);flex-direction:column;"]),oe=()=>e.jsx(ee,{children:e.jsx(Z,{})});export{oe as default};
