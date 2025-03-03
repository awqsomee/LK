import{s as m,j as e,aJ as f,cF as p,i as h,dn as g,r as v}from"./vendor-60fdf703.js";import{d as a,E as y,T as d,dg as b,J as k,ec as c,aZ as S,Y as w,W as z,P as D,K as r,b5 as o}from"./index-5cf38ea0.js";const T=({children:i,title:t})=>e.jsxs(_,{d:"column",w:"fit-content",gap:"0.5rem",jc:"flex-start",p:"0.5rem",children:[e.jsx(C,{children:e.jsx(d,{size:5,align:"left",children:t!=null?t:"Документы"})}),i]}),_=m(a).withConfig({componentId:"sc-1pt65bl-0"})(["position:relative;border:1px solid ",";border-radius:0.5rem;"],y.grey.transparent3),C=m.div.withConfig({componentId:"sc-1pt65bl-1"})(["position:absolute;top:-0.6lh;left:0.5rem;background:var(--block);@media (max-width:766px){background:var(--theme);}"]),x=({link:i,title:t})=>e.jsx("a",{href:i,style:{width:290,zIndex:1},children:e.jsx(b,{children:e.jsxs("div",{className:"file-body",children:[e.jsx("div",{className:"image-container",children:e.jsx(f,{})}),e.jsx("div",{className:"name-and-size",children:e.jsx("b",{className:"file-name",children:t})})]})})}),E=()=>{const{id:i}=p(),{isTablet:t}=k(),[u,n]=h([c.pageMounted,c.certificatesLoading]),s=g(c.certificates,l=>l==null?void 0:l.find(j=>j.id===i));return v.useEffect(()=>{u()},[i]),n?e.jsx(a,{h:"100%",d:"column",ai:"center",jc:"center",children:e.jsx(S,{})}):s?e.jsx(z,{data:!0,load:()=>{},error:null,children:e.jsx(D,{children:e.jsxs(a,{d:"column",gap:"2rem",ai:"flex-start",children:[e.jsxs(T,{children:[e.jsx(x,{link:s.cert_file_stamp,title:"Печатная форма Справки в ФНС"}),e.jsx(x,{link:s.cert_file_sign,title:"Электронная подпись"})]}),e.jsxs(a,{d:"column",ai:"flex-start",children:[e.jsx(r,{keyStr:"Дата справки",value:s.cert_date}),e.jsx(r,{keyStr:"Год",value:s.year}),e.jsx(r,{keyStr:"Очная форма",value:s.is_full_time?"Да":"Нет"}),e.jsx(r,{keyStr:"Плательщик",value:s.payer}),e.jsx(r,{keyStr:"Номер справки",value:s.number}),e.jsx(r,{keyStr:"Номер корректировки",value:s.correction}),e.jsx(r,{keyStr:"Подписант",value:s.signatory})]}),e.jsxs(a,{gap:"2rem",d:t?"column":"row",ai:"flex-start",children:[e.jsxs(a,{d:"column",gap:"0.5rem",jc:"space-between",h:"100%",children:[e.jsx(d,{size:4,align:"left",bottomGap:t?"0":"1lh",children:"Список договоров к справке"}),e.jsx(o,{loading:n,innerPadding:"0.33rem",fontSize:"0.75rem",columns:[{title:"Номер договора",field:"contractNumber"},{title:"Дата договора",field:"contractDate"}],data:s.contracts})]}),e.jsxs(a,{d:"column",gap:"0.5rem",children:[e.jsx(d,{size:4,align:"left",children:"Список оплат с редакциями к договору к справке (договор, доп.соглашение)"}),e.jsx(o,{loading:n,innerPadding:"0.33rem",fontSize:"0.75rem",columns:[{title:"Дата оплаты",field:"paymentDate"},{title:"Сумма оплаты",field:"summ"},{title:"Тип редакции",field:"versionType"},{title:"Дата редакции",field:"versionDate"}],data:s.payments})]})]})]})})}):e.jsx(a,{h:"100%",d:"column",ai:"center",jc:"center",children:e.jsx(w,{text:"Справка не найдена"})})};export{E as default};
