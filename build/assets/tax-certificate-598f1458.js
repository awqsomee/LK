import{s as m,j as e,aK as f,cI as p,i as h,cH as g,r as v}from"./vendor-8a1e4858.js";import{f as r,X as y,T as o,dg as b,Z as k,ee as c,r as S,a4 as w,W as z,P as D,K as a,b4 as d}from"./index-54a7c16c.js";const T=({children:i,title:t})=>e.jsxs(_,{d:"column",w:"fit-content",gap:"0.5rem",jc:"flex-start",p:"0.5rem",children:[e.jsx(C,{children:e.jsx(o,{size:5,align:"left",children:t!=null?t:"Документы"})}),i]}),_=m(r).withConfig({componentId:"sc-1pt65bl-0"})(["position:relative;border:1px solid ",";border-radius:0.5rem;"],y.grey.transparent3),C=m.div.withConfig({componentId:"sc-1pt65bl-1"})(["position:absolute;top:-0.6lh;left:0.5rem;background:var(--block);@media (max-width:766px){background:var(--theme);}"]),x=({link:i,title:t})=>e.jsx("a",{href:i,style:{width:290,zIndex:1},children:e.jsx(b,{children:e.jsxs("div",{className:"file-body",children:[e.jsx("div",{className:"image-container",children:e.jsx(f,{})}),e.jsx("div",{className:"name-and-size",children:e.jsx("b",{className:"file-name",children:t})})]})})}),N=()=>{const{id:i}=p(),{isTablet:t}=k(),[u,l]=h([c.pageMounted,c.certificatesLoading]),s=g(c.certificates,n=>n==null?void 0:n.find(j=>j.id===i));return v.useEffect(()=>{u()},[i]),l?e.jsx(r,{h:"100%",d:"column",ai:"center",jc:"center",children:e.jsx(S,{})}):s?e.jsx(z,{data:!0,load:()=>{},error:null,children:e.jsx(D,{children:e.jsxs(r,{d:"column",gap:"2rem",ai:"flex-start",children:[e.jsxs(T,{children:[e.jsx(x,{link:s.cert_file_stamp,title:"Печатная форма Справки в ФНС"}),e.jsx(x,{link:s.cert_file_sign,title:"Электронная подпись"})]}),e.jsxs(r,{d:"column",ai:"flex-start",children:[e.jsx(a,{keyStr:"Дата справки",value:s.cert_date}),e.jsx(a,{keyStr:"Год",value:s.year}),e.jsx(a,{keyStr:"Очная форма",value:s.is_full_time?"Да":"Нет"}),e.jsx(a,{keyStr:"Плательщик",value:s.payer}),e.jsx(a,{keyStr:"Номер справки",value:s.number}),e.jsx(a,{keyStr:"Номер корректировки",value:s.correction}),e.jsx(a,{keyStr:"Подписант",value:s.signatory})]}),e.jsxs(r,{gap:"2rem",d:t?"column":"row",ai:"flex-start",children:[e.jsxs(r,{d:"column",gap:"0.5rem",jc:"space-between",h:"100%",children:[e.jsx(o,{size:4,align:"left",bottomGap:t?"0":"1lh",children:"Список договоров к справке"}),e.jsx(d,{loading:l,innerPadding:"0.33rem",fontSize:"0.75rem",columns:[{title:"Номер договора",field:"contractNumber"},{title:"Дата договора",field:"contractDate"}],data:s.contracts})]}),e.jsxs(r,{d:"column",gap:"0.5rem",children:[e.jsx(o,{size:4,align:"left",children:"Список оплат с редакциями к договору к справке (договор, доп.соглашение)"}),e.jsx(d,{loading:l,innerPadding:"0.33rem",fontSize:"0.75rem",columns:[{title:"Дата оплаты",field:"paymentDate"},{title:"Сумма оплаты",field:"summ"},{title:"Тип редакции",field:"versionType"},{title:"Дата редакции",field:"versionDate"}],data:s.payments})]})]})]})})}):e.jsx(r,{h:"100%",d:"column",ai:"center",jc:"center",children:e.jsx(w,{text:"Справка не найдена"})})};export{N as default};
