import{s as $,j as t,r as u}from"./vendor-e9654bfa.js";import{$ as w,r as z,y as F,z as W,T as j,D as b,H as _,J as k,K as h,j as D,N as p,l as c,O as C,W as T,Q as N,R as m,U as B,g as L}from"./index-c2d11f9e.js";const M=async()=>(await w.get(`?getVacations&token=${z()}`)).data,g=F({api:{get:M},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),E=$(W)`
    border-radius: var(--brLight);
    background: var(--form);
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
`,f=({children:s,title:n,text:i,width:r,height:a,background:e,padding:o})=>t.jsxs(E,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:r??"15vw",minHeight:a??"150px",maxHeight:a??"150px",padding:o,children:[t.jsx(j,{size:4,align:"left",children:n}),t.jsx(b,{visible:!!i,fontSize:"0.9em",children:_(i??"",60)}),e&&t.jsx("div",{className:"background",children:e}),s&&t.jsx("div",{className:"content",children:s})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},U=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0}],A=s=>{const{division:n,post:i,vacations:r,allActualVacationPeriods:a,allPlannedVacationPeriods:e}=H(s);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{children:[t.jsx(h,{keyStr:"Подразделение",value:n}),t.jsx(h,{keyStr:"Должность",value:i})]}),t.jsx(D,{columns:U,data:r,footer:()=>({allPlannedVacationPeriods:v(e),allActualVacationPeriods:v(a)})})]})};function v(s){return`Всего: ${s} ${p(s??0,x)}`}function H(s){const{fact:n,plan:i,division:r,post:a}=s;return{division:r,post:a,vacations:R(n,i),allActualVacationPeriods:n.reduce((e,{numdays:o})=>(e+=+o,e),0),allPlannedVacationPeriods:i.reduce((e,{numdays:o})=>(e+=+o,e),0)}}function R(s,n){const i=Math.max(s.length,n.length),r=[];for(let a=0;a<i;a++){const e=s[a],o=n[a],l={actualVacationPeriods:"",plannedVacationPeriods:""},d=c(e==null?void 0:e.from,"numeric"),P=c(e==null?void 0:e.to,"numeric"),S=c(o==null?void 0:o.from,"numeric"),V=c(o==null?void 0:o.to,"numeric");e&&(l.actualVacationPeriods=`${d} - ${P} (${e.numdays} ${p(Number(e.numdays)||0,x)})`),o&&(l.plannedVacationPeriods=`${S} - ${V} (${o.numdays} ${p(Number(o.numdays)||0,x)})`),r.push(l)}return r}const y={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_pyatidnevnya_rabochaya_nedelya.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_shestidnevnaya_rabochaya_nedelya.pdf"},K=()=>{const{data:{user:s}}=C.useUser(),{data:n,error:i}=g.selectors.useData(),r=u.useMemo(()=>(n==null?void 0:n.map((l,d)=>({id:d,title:l.division})))||[],[n]),[a,e]=u.useState(r[0]??{});u.useEffect(()=>{a!=null&&a.id||e(r[0])},[a==null?void 0:a.id,e,r]);const o=n==null?void 0:n[Number((a==null?void 0:a.id)||0)];return t.jsx(T,{load:g.effects.getFx,error:i,data:n,children:t.jsxs(N,{children:[t.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2023 год"}),t.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[t.jsx(f,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:t.jsx(m,{onClick:()=>null,href:y.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),t.jsx(f,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:t.jsx(m,{onClick:()=>null,href:y.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),t.jsx(B,{}),t.jsx(j,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&t.jsx(L,{width:"fit-content",items:r,selected:a,setSelected:e}),o&&t.jsx(A,{...o})]})})},J=()=>t.jsx(K,{});export{J as default};
