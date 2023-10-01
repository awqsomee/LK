import{s as w,j as e,r as u}from"./vendor-2bd70a0f.js";import{z as $,E as _,Q as z,R as F,T as y,U as b,V as W,X as k,K as h,j as C,Y as x,l as c,Z as D,W as T,r as N,t as B,_ as g,D as E,i as L}from"./index-bc77f324.js";const M=async()=>(await $.get(`?getVacations&token=${_()}`)).data,m=z({api:{get:M},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),U=w(F)`
    border-radius: var(--brLight);
    background: var(--block-content);
    position: relative;

    .background {
        font-size: 6em;
        position: absolute;
        bottom: 0px;
        right: 10px;
        font-weight: bold;
        /* transform: rotate(-35deg); */
        opacity: 0.5;
    }
    .content {
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
`,f=({children:s,title:n,text:i,width:r,height:a,background:t,padding:o})=>e.jsxs(U,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:r??"15vw",minHeight:a??"150px",maxHeight:a??"150px",padding:o,children:[e.jsx(y,{size:4,align:"left",children:n}),e.jsx(b,{visible:!!i,fontSize:"0.9em",children:W(i??"",60)}),t&&e.jsx("div",{className:"background",children:t}),s&&e.jsx("div",{className:"content",children:s})]}),p={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},A=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0}],R=s=>{const{division:n,post:i,vacations:r,allActualVacationPeriods:a,allPlannedVacationPeriods:t}=H(s);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(h,{keyStr:"Подразделение",value:n}),e.jsx(h,{keyStr:"Должность",value:i})]}),e.jsx(C,{columns:A,data:r,footer:()=>({allPlannedVacationPeriods:v(t),allActualVacationPeriods:v(a)})})]})};function v(s){return`Всего: ${s} ${x(s??0,p)}`}function H(s){const{fact:n,plan:i,division:r,post:a}=s;return{division:r,post:a,vacations:I(n,i),allActualVacationPeriods:n.reduce((t,{numdays:o})=>(t+=+o,t),0),allPlannedVacationPeriods:i.reduce((t,{numdays:o})=>(t+=+o,t),0)}}function I(s,n){const i=Math.max(s.length,n.length),r=[];for(let a=0;a<i;a++){const t=s[a],o=n[a],l={actualVacationPeriods:"",plannedVacationPeriods:""},d=c(t==null?void 0:t.from,"numeric"),P=c(t==null?void 0:t.to,"numeric"),V=c(o==null?void 0:o.from,"numeric"),S=c(o==null?void 0:o.to,"numeric");t&&(l.actualVacationPeriods=`${d} - ${P} (${t.numdays} ${x(Number(t.numdays)||0,p)})`),o&&(l.plannedVacationPeriods=`${V} - ${S} (${o.numdays} ${x(Number(o.numdays)||0,p)})`),r.push(l)}return r}const j={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_pyatidnevnya_rabochaya_nedelya.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_shestidnevnaya_rabochaya_nedelya.pdf"},K=()=>{const{data:{user:s}}=D.useUser(),{data:n,error:i}=m.selectors.useData(),r=u.useMemo(()=>(n==null?void 0:n.map((l,d)=>({id:d,title:l.division})))||[],[n]),[a,t]=u.useState(r[0]??{});u.useEffect(()=>{a!=null&&a.id||t(r[0])},[a==null?void 0:a.id,t,r]);const o=n==null?void 0:n[Number((a==null?void 0:a.id)||0)];return e.jsx(T,{load:m.effects.getFx,error:i,data:n,children:e.jsx(N,{alignItems:"flex-start",children:e.jsxs(B,{children:[e.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2023 год"}),e.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[e.jsx(f,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:e.jsx(g,{onClick:()=>null,href:j.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),e.jsx(f,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:e.jsx(g,{onClick:()=>null,href:j.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),e.jsx(E,{}),e.jsx(y,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&e.jsx(L,{width:"fit-content",items:r,selected:a,setSelected:t}),o&&e.jsx(R,{...o})]})})})},X=()=>e.jsx(K,{});export{X as default};
