var T=Object.defineProperty;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(a,n,e)=>n in a?T(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,g=(a,n)=>{for(var e in n||(n={}))_.call(n,e)&&h(a,e,n[e]);if(f)for(var e of f(n))B.call(n,e)&&h(a,e,n[e]);return a};var j=(a,n,e)=>new Promise((d,r)=>{var i=l=>{try{s(e.next(l))}catch(c){r(c)}},t=l=>{try{s(e.throw(l))}catch(c){r(c)}},s=l=>l.done?d(l.value):Promise.resolve(l.value).then(i,t);s((e=e.apply(a,n)).next())});import{s as N,j as o,r as v,aH as E}from"./vendor-fdf02817.js";import{al as L,am as U,an as A,i as H,T as $,S as w,ao as I,L as F,K as P,b6 as R,bD as p,E as u,s as K,W as O,j as q,P as G,B as J,c as y,D as Q,b4 as X}from"./index-2172af78.js";const Y=()=>j(void 0,null,function*(){return(yield L.get(`?getVacations&token=${U()}`)).data}),V=A({api:{get:Y},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),Z=N(H).withConfig({componentId:"sc-13iobzb-0"})(["border-radius:var(--brLight);background:var(--block-content);position:relative;.background{font-size:6em;position:absolute;bottom:0px;right:10px;font-weight:bold;opacity:0.5;}.content{height:100%;display:flex;align-items:flex-end;}"]),b=({children:a,title:n,text:e,width:d,height:r,background:i,padding:t})=>o.jsxs(Z,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:d!=null?d:"15vw",minHeight:r!=null?r:"150px",maxHeight:r!=null?r:"150px",padding:t,children:[o.jsx($,{size:4,align:"left",children:n}),o.jsx(w,{visible:!!e,fontSize:"0.9em",children:I(e!=null?e:"",60)}),i&&o.jsx("div",{className:"background",children:i}),a&&o.jsx("div",{className:"content",children:a})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},ee=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],te=a=>{const{division:n,post:e,vacations:d,allActualVacationPeriods:r,allPlannedVacationPeriods:i,allUnusedVacationPeriods:t}=oe(a);return o.jsxs(o.Fragment,{children:[o.jsxs(F,{children:[o.jsx(P,{keyStr:"Подразделение",value:n}),o.jsx(P,{keyStr:"Должность",value:e})]}),o.jsx(R,{columns:ee,data:d,footer:()=>({allPlannedVacationPeriods:m(i),allActualVacationPeriods:m(r),allUnusedVacationPeriods:m(t)})})]})};function m(a){return`Всего: ${a} ${p(Math.trunc(a||0),x)}`}function oe(a){const{fact:n,plan:e,unused:d,division:r,post:i}=a;return{division:r,post:i,vacations:ae(n,e,d),allActualVacationPeriods:n.reduce((t,{numdays:s})=>(t+=+s,t),0),allPlannedVacationPeriods:e.reduce((t,{numdays:s})=>(t+=+s,t),0),allUnusedVacationPeriods:d.reduce((t,{numdays:s})=>(t+=+s,t),0)}}function ae(a,n,e){const d=Math.max(a.length,n.length,e.length),r=[];for(let i=0;i<d;i++){const t=a[i],s=n[i],l=e[i],c={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},S=u(t==null?void 0:t.from,"numeric"),C=u(t==null?void 0:t.to,"numeric"),D=u(s==null?void 0:s.from,"numeric"),W=u(s==null?void 0:s.to,"numeric"),z=u(l==null?void 0:l.from,"numeric"),M=u(l==null?void 0:l.to,"numeric");t&&(c.actualVacationPeriods=`${S} - ${C} (${t.numdays} ${p(Number(t.numdays)||0,x)})`),s&&(c.plannedVacationPeriods=`${D} - ${W} (${s.numdays} ${p(Number(s.numdays)||0,x)})`),l&&(c.unusedVacationPeriods=`${z} - ${M} (${l.numdays} ${p(Math.trunc(Number(l.numdays))||0,x)})`),r.push(c)}return r}const k={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/ProizvodstvennyiM%86_kalendar_2025_dlya_pyatidnevki.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/ProizvodstvennyiM%86_kalendar_2025_dlya_shestidnevki.PDF"},ne=()=>{var a;const{data:{user:n}}=K.useUser(),{data:e,error:d}=V.selectors.useData(),r=v.useMemo(()=>(e==null?void 0:e.map((l,c)=>({id:c,title:l.division})))||[],[e]),[i,t]=v.useState((a=r[0])!==null&&a!==void 0?a:{});v.useEffect(()=>{i!=null&&i.id||t(r[0])},[i==null?void 0:i.id,t,r]);const s=e==null?void 0:e[Number((i==null?void 0:i.id)||0)];return o.jsx(O,{load:V.effects.getFx,error:d,data:e,children:o.jsx(q,{alignItems:"flex-start",children:o.jsxs(G,{topRightCornerElement:o.jsx(J,{onClick:()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vacation")},text:"Заполнить график",background:"var(--reallyBlue)",textColor:"#fff",icon:o.jsx(E,{}),minWidth:"35px",height:"36px"}),children:[o.jsx(w,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2025 год"}),o.jsxs(F,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[o.jsx(b,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:o.jsx(y,{onClick:()=>null,href:k.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),o.jsx(b,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:o.jsx(y,{onClick:()=>null,href:k.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),o.jsx(Q,{}),o.jsx($,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(n!=null&&n.id)&&o.jsx(X,{width:"fit-content",items:r,selected:i,setSelected:t}),s&&o.jsx(te,g({},s))]})})})},le=()=>o.jsx(ne,{});export{le as default};
