import{s as V,j as t,r as u}from"./vendor-9cc634b6.js";import{$,n as z,t as F,B as W,T as j,u as b,v as _,w as k,K as h,x as C,y as x,l as c,z as D,W as T,P as B,L as m,g as L,H as N}from"./index-74590cb5.js";const M=async()=>(await $.get(`?getVacations&token=${z()}`)).data,g=F({api:{get:M},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),E=V(W)`
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
`,f=({children:s,title:n,text:i,width:r,height:a,background:e,padding:o})=>t.jsxs(E,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:r??"15vw",minHeight:a??"150px",maxHeight:a??"150px",padding:o,children:[t.jsx(j,{size:4,align:"left",children:n}),t.jsx(b,{visible:!!i,fontSize:"0.9em",children:_(i??"",60)}),e&&t.jsx("div",{className:"background",children:e}),s&&t.jsx("div",{className:"content",children:s})]}),p={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},A=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0}],H=s=>{const{division:n,post:i,vacations:r,allActualVacationPeriods:a,allPlannedVacationPeriods:e}=U(s);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{children:[t.jsx(h,{keyStr:"Подразделение",value:n}),t.jsx(h,{keyStr:"Должность",value:i})]}),t.jsx(C,{columns:A,data:r,footer:()=>({allPlannedVacationPeriods:v(e),allActualVacationPeriods:v(a)})})]})};function v(s){return`Всего: ${s} ${x(s??0,p)}`}function U(s){const{fact:n,plan:i,division:r,post:a}=s;return{division:r,post:a,vacations:K(n,i),allActualVacationPeriods:n.reduce((e,{numdays:o})=>(e+=+o,e),0),allPlannedVacationPeriods:i.reduce((e,{numdays:o})=>(e+=+o,e),0)}}function K(s,n){const i=Math.max(s.length,n.length),r=[];for(let a=0;a<i;a++){const e=s[a],o=n[a],l={actualVacationPeriods:"",plannedVacationPeriods:""},d=c(e==null?void 0:e.from,"numeric"),P=c(e==null?void 0:e.to,"numeric"),w=c(o==null?void 0:o.from,"numeric"),S=c(o==null?void 0:o.to,"numeric");e&&(l.actualVacationPeriods=`${d} - ${P} (${e.numdays} ${x(Number(e.numdays)||0,p)})`),o&&(l.plannedVacationPeriods=`${w} - ${S} (${o.numdays} ${x(Number(o.numdays)||0,p)})`),r.push(l)}return r}const y={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_pyatidnevnya_rabochaya_nedelya.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_shestidnevnaya_rabochaya_nedelya.pdf"},R=()=>{const{data:{user:s}}=D.useUser(),{data:n,error:i}=g.selectors.useData(),r=u.useMemo(()=>(n==null?void 0:n.map((l,d)=>({id:d,title:l.division})))||[],[n]),[a,e]=u.useState(r[0]??{});u.useEffect(()=>{a!=null&&a.id||e(r[0])},[a==null?void 0:a.id,e,r]);const o=n==null?void 0:n[Number((a==null?void 0:a.id)||0)];return t.jsx(T,{load:g.effects.getFx,error:i,data:n,children:t.jsxs(B,{children:[t.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2023 год"}),t.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[t.jsx(f,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:t.jsx(m,{onClick:()=>null,href:y.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),t.jsx(f,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:t.jsx(m,{onClick:()=>null,href:y.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),t.jsx(L,{}),t.jsx(j,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&t.jsx(N,{width:"fit-content",items:r,selected:a,setSelected:e}),o&&t.jsx(H,{...o})]})})},q=()=>t.jsx(R,{});export{q as default};
