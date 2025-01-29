import{s as v,j as e,al as w,c as S,q as p,r as j,X as A,cM as D}from"./vendor-33947725.js";import{ai as $,aw as k,u as h,bC as g,J as d,M,S as F,R as I,K as P,l as m,q as x,H as o,bD as C,p as y,bn as T,h as N,W as B,P as _,ay as L,bE as R,bF as l,bG as b}from"./index-03c4ccbf.js";const H=v.div.withConfig({componentId:"sc-18w06yl-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;row-gap:10px;& > span{line-height:1.7rem;}@media (min-width:1001px){max-width:400px;}"]),G=()=>{const{data:{user:r}}=$.useUser();return e.jsx(H,{children:(r==null?void 0:r.user_status)==="stud"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),e.jsx(k,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",e.jsx("br",{}),e.jsx("b",{children:e.jsx("a",{href:"tel:+7(495) 223-05-23,1130",children:"+7 (495) 223-05-23 доб.1130"})}),"или написать письмо на",e.jsx("br",{}),e.jsx("a",{href:"mailto:ok@mospolytech.ru",children:e.jsx("b",{children:"ok@mospolytech.ru"})})]})})},U=v.div.withConfig({componentId:"sc-icbwkn-0"})([".info-text{margin:16px 0;line-height:1.7rem;}b{font-weight:600;}"]),E=({children:r,handleSubmit:i,data:s,done:t,completed:a,loading:n})=>{const{open:c}=h(),u=g.changeCompleted;return s?e.jsxs(U,{children:[e.jsxs(d,{gap:"8px",children:[(s==null?void 0:s.file)&&e.jsx(k,{href:s.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:e.jsx(w,{})}),e.jsx(M,{type:"success",icon:e.jsx(S,{}),title:"Успешно подписано",visible:s.status||t,align:"center"})]}),e.jsx("div",{className:"info-text",children:r}),!s.status&&!t&&e.jsx(F,{text:!s.status&&!t?"Подписать":"Подписано",action:i,isLoading:n,completed:a,isDone:t||s.status,setCompleted:u,isActive:!s.status&&!t,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(s.status||t)&&e.jsxs(e.Fragment,{children:[e.jsx(I,{margin:"16px 0",width:"100%"}),e.jsxs(P,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",m(s.date||new Date),","," ",s.time||`${new Date().getHours()}:${new Date().getMinutes()}`,e.jsx("br",{}),s.fio]})]}),!s.status&&!t&&e.jsx(d,{jc:"center",children:e.jsx(x,{onClick:()=>c(e.jsx(G,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:o.grey.main})})]}):null},z=({next:r,guid:i})=>{const{close:s}=h(),[t]=p([C.signAgreement]),[a,n]=j.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(y,{placeholder:"Код",value:a,setValue:n}),e.jsxs(d,{jc:"space-between",p:"8px 0 0 0",children:[e.jsx(x,{text:"Отмена",onClick:()=>{s()},textColor:o.red.main,background:"transparent",hoverBackground:o.red.transparent3}),e.jsx(x,{text:"Подтвердить",onClick:()=>{t({clientGuid:i,clientPass:a}),r()},textColor:o.blue.main,background:"transparent",hoverBackground:o.blue.transparent3})]})]})},O=({next:r,guid:i,defaultEmail:s})=>{const{close:t}=h(),[a]=p([C.sendCodes]),[n,c]=j.useState(s);return e.jsxs(e.Fragment,{children:[e.jsx(y,{type:"email",placeholder:"E-mail заказчика",value:n,setValue:c}),e.jsxs(d,{jc:"space-between",p:"8px 0 0 0",children:[e.jsx(x,{text:"Отмена",onClick:()=>{t()},textColor:o.red.main,background:"transparent",hoverBackground:o.red.transparent3}),e.jsx(x,{text:"Подтвердить",onClick:()=>{a({clientEmail:n,clientGuid:i}),r()},textColor:o.blue.main,background:"transparent",hoverBackground:o.blue.transparent3})]})]})},V=({guid:r,email:i})=>{const[s,t]=j.useState(0),{close:a}=h(),{isMobile:n,isTablet:c}=T();return e.jsxs(d,{w:n||c?"100%":"600px",d:"column",children:[e.jsx(N,{align:"left",size:3,width:"530px",children:W[s]}),e.jsxs(d,{d:"column",gap:"24px",children:[s===0&&e.jsx(O,{guid:r,defaultEmail:i,next:()=>{t(1)}}),s===1&&e.jsx(z,{guid:r,next:()=>{a(),t(0)}})]})]})},W=["Введите e-mail заказчика","Введите код, полученный на почту"],X=()=>{var r;const i=A(),[s,t,a]=p([l.$electronicInteractionStore,l.$error,l.$loading]),{type:n}=D(),c=()=>g.getElectronicInteraction();return e.jsx(B,{load:c,loading:a,error:t,data:s,loadEveryVisit:!0,children:e.jsx(_,{children:s!=null&&(r=s.clients)!==null&&r!==void 0&&r.length&&s.clients.length>0?e.jsx(L,{currentPage:n==="third-party"?1:0,onChangePage:u=>i.push(R+`/${u}`),pages:[{id:"personal",title:"Персональное соглашение",content:e.jsx(f,{})},{id:"third-party",title:"Соглашение для третьей стороны",content:e.jsx(q,{})}]}):e.jsx(f,{})})})},f=()=>{const[r,i,s,t]=p([l.$done,l.$completed,l.$workerLoading,l.$electronicInteractionStore]);return t?e.jsx(E,{done:r,data:t,completed:i,loading:s,handleSubmit:()=>{g.postElectronicInteraction()},children:e.jsxs("div",{className:"info-text",children:["Я, ",e.jsx("b",{children:t.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),t.passSer," ",t.passNum,", выдан ",m(t.passDate)," ",t.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),t.bdate,e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),t.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),t.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})}):null},q=()=>{var r;const{open:i}=h(),[s,t,a]=p([l.$electronicInteractionStore,b.signAgreement.$succeeded,b.signAgreement.$pending]);return s?e.jsx(e.Fragment,{children:(r=s.clients)===null||r===void 0?void 0:r.map(n=>e.jsx(E,{completed:t,done:t,loading:a,data:n,handleSubmit:()=>{i(e.jsx(V,{guid:n.guid,email:n.email}))},children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"info-text",children:["Я, ",e.jsx("b",{children:n.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),n.passSer," ",n.passNum,", выдан ",m(n.passDate)," ",n.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),n.bdate,e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),n.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),n.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})})},n.guid))}):null};export{X as default};
