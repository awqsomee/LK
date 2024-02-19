import{j as e,V as c,z as p,F as d}from"./vendor-4355a046.js";import{ai as u,aj as x,G as h,ad as f,ak as s,M as o,s as m,u as g,W as j,al as w,P as y,q as F,v as k,am as v}from"./index-65c2a6d9.js";function A({children:i,direction:t,text:n,width:r}){return e.jsxs(u,{direction:t,children:[e.jsx(x,{width:r,children:n}),i]})}const C=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(i,t)=>{var n;return e.jsxs(h,{jc:"space-between",children:[i,!!((n=t==null?void 0:t.files_output)!=null&&n.length)&&t.files_output.map(r=>e.jsx("div",{onClick:a=>a.stopPropagation(),children:e.jsx(A,{text:r.fname,direction:"left",children:e.jsx(f,{icon:e.jsx(c,{}),background:"transparent",href:r==null?void 0:r.url})})},r.url))]})}},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(s).map((i,t)=>({id:t.toString(),title:i}))??[]],render:i=>{const t=T(i);return e.jsx(o,{type:t==="Готово"?"success":t==="Отклонено"?"failure":"alert",title:t||"—",align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}],T=i=>{switch(i){case"На рассмотрении":return s.pending;case"Принято в работу":return s.pending;case"Получено":return s.ready;default:return i}},M=({isTeachers:i})=>{const{data:{listApplication:t,dataUserApplication:n},error:r}=m.useApplications(),{open:a}=g(),l=()=>{a(e.jsx(v,{isTeachers:i,currentFormEducation:n==null?void 0:n.educationForm}),"Создать заявку")};return e.jsx(j,{load:()=>w.getApplicationsFx(),loading:!t,error:r,data:t,children:e.jsxs(y,{topRightCornerElement:e.jsx(F,{onClick:l,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(p,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[e.jsx(o,{type:"info",title:"Информация",icon:e.jsx(d,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),e.jsx(k,{loading:!t,columns:C(),data:t,maxOnPage:7})]})})};export{M as T};
