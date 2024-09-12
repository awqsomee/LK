import{j as t,af as d,r as s,M as u,F as x}from"./vendor-9c916fad.js";import{G as m,aq as h,an as g,ar as f,M as a,q as l,L as j,as as p,r as w,s as C,u as k,at as y,W as F,e as b,P as A}from"./index-b149c4f7.js";const T=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(e,i)=>{var n;return t.jsxs(m,{jc:"space-between",children:[e,!!((n=i==null?void 0:i.files_output)!=null&&n.length)&&i.files_output.map(o=>t.jsx("div",{onClick:r=>r.stopPropagation(),children:t.jsx(h,{text:o.fname,direction:"left",children:t.jsx(g,{icon:t.jsx(d,{}),background:"transparent",href:o==null?void 0:o.url})})},o.url))]})}},...c()],c=()=>[{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"165px",catalogs:[...Object.values(f).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(a,{type:e==="Готово"||e==="Выдано"||e==="Получено"||e==="Выполнена"?"success":e==="Отклонено"?"failure":"alert",title:e||"—",align:"center",icon:null})},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}],M=()=>[...c(),{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:e=>!!e.length&&t.jsx(l,{onClick:()=>E(e),text:"Скачать",background:"transparent",textColor:j.green.main,width:"100%"})}],E=e=>{e.map(i=>{const n=document.createElement("a");n.href=i.url,n.download=i.name,n.target="_blank",n.click(),n.remove()})},P=p(l),_=p(w),B=({isTeachers:e})=>{const{data:{listApplication:i,dataUserApplication:n}}=C.useApplications(),{open:o}=k(),r=s.useCallback(()=>{o(t.jsx(y,{isTeachers:e,currentFormEducation:n==null?void 0:n.educationForm}),"Создать заявку")},[]);return t.jsx(F,{load:()=>b.getApplicationsFx(),loading:!i,error:null,data:i,children:t.jsxs(A,{topRightCornerElement:t.jsx(P,{onClick:r,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(u,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0,tutorialModule:{id:"applications",step:3,params:{position:"bottom"}}}),children:[t.jsx(a,{type:"info",title:"Информация",icon:t.jsx(x,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:t.jsxs("p",{children:["Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом.",e&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),"Остальные Цифровые сервисы доступны"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=sprav",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})]})}),t.jsx(_,{loading:!i,columns:T(),columnsExtended:M(),data:i,maxOnPage:7,tutorialModule:{id:"applications",step:[0,1,2],params:{position:"top"}}})]})})},O=s.memo(B);export{O as T};
