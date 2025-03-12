import{aw as y,r as c,i as d,j as e,aG as C,s as w}from"./vendor-60fdf703.js";import{ec as r,W as T,P as b,d as i,T as a,b3 as Y,B as E,aD as R,b5 as _,ed as k}from"./index-6facb166.js";const f=new Date().getFullYear();function P(){return Array.from({length:f-2006},(t,s)=>({id:s,title:(f-s).toString()}))}const l=P(),z=()=>{const n=y(),[t,s]=c.useState(l[0]),[p,m,g]=d([r.pageMounted,r.certificates,r.certificatesLoading]),[x,o,h]=d([r.presentYears,r.certificatedRequested,r.createCertificateLoading]);return c.useEffect(()=>{p()},[]),e.jsx(T,{data:!0,load:()=>{},error:null,children:e.jsx(b,{children:e.jsxs(i,{d:"column",gap:"2rem",p:"1rem 0 0 0",ai:"flex-start",children:[e.jsxs(i,{d:"column",gap:"0.5rem",children:[e.jsx(a,{size:3,align:"left",children:"Заказать справку в ФНС"}),e.jsxs(i,{gap:"1rem",jc:"space-between",ai:"flex-end",children:[e.jsx(Y,{title:"Год",items:l,selected:t,setSelected:s,isActive:l.length>1,required:!0,width:"10rem",placeholder:"Выберите год"}),e.jsx(E,{text:"Заказать",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(C,{}),disabled:!t,loading:h,onClick:()=>{if(t){if(x.has(t.title)){R.evokeConfirm({message:e.jsxs(i,{d:"column",gap:"0.5rem",ai:"flex-start",children:[e.jsx(a,{align:"left",size:4,children:"Справка за выбранный год уже сформирована."}),e.jsx(u,{children:"Если вы уверены, что есть причина для формирования справки с корректировкой, например: изменились состав оплат или личные документы, тогда запрос на новую версию справки будет отправлен."}),e.jsx(u,{children:"Отправить?"})]}),onConfirm:()=>{o({year:t.title}),close()}});return}o({year:t.title}),close()}}})]})]}),e.jsxs(i,{d:"column",gap:"0.5rem",children:[e.jsx(a,{size:3,align:"left",children:"Справки в ФНС"}),e.jsx(_,{loading:g,innerPadding:"0.5rem",columns:[{title:"Дата справки",field:"cert_date",priority:"one"},{title:"Номер справки",field:"number",priority:"four"},{title:"Номер корректировки",field:"correction",priority:"two"},{title:"Отчетный год",field:"year",priority:"one"},{title:"Плательщик",field:"payer",priority:"four"},{title:"Подписант",field:"signatory",priority:"four"},{title:"Очная форма",field:"is_full_time",priority:"four"},{title:"Сумма справки",field:"summ",priority:"three"}],data:m,onRowClick:j=>n.push(k+"/"+j.id)})]})]})})})},u=w.p.withConfig({componentId:"sc-19e5w1d-0"})(["font-size:1rem;line-height:1.45rem;"]);export{z as default};
