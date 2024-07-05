import{s as d,R as L,j as e,q as u,r as x,cS as U,a8 as y,F as B,c as D}from"./vendor-84bdec13.js";import{a2 as g,b0 as b,J as h,b1 as S,b2 as I,D as f,b3 as F,b4 as _,b5 as O,b6 as Y,b7 as H,b8 as q,b9 as Z,ac as C,ah as G,ba as v,bb as j,Y as V,O as T,bc as X,aP as J,o as z,bd as K,M as Q,be as A,bf as ee,E as m,h as $,bg as te,bh as w,bi as se,am as W,G as E,bj as ie,bk as ne,bl as ae,bm as oe,U as re,aW as le,bn as ce,W as de}from"./index-403d189d.js";import{E as he}from"./index-58cddc6a.js";import{a as P,A as xe}from"./alert-item-b21499b9.js";import"./is-valid-url-08a91344.js";const pe=d.div.withConfig({componentId:"sc-13zh6dc-0"})(["width:100%;height:200px;position:absolute;top:0;left:0;background:",";@keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}z-index:-1;overflow:hidden;svg{position:absolute;opacity:0.05;z-index:0;}svg:nth-child(1){transform:scale(4) rotate(287deg) translate(390px,190px);}svg:nth-child(2){transform:scale(2) rotate(15deg) translate(522px,-410px);}svg:nth-child(3){transform:scale(3) rotate(30deg) translate(75.9px,179px);}svg:nth-child(4){transform:scale(2) rotate(60deg) translate(75.9px,159px);}.circle{width:100px;height:100px;position:absolute;border-radius:100%;z-index:1;background:",";}.circle.c2{transform:translate(814px,110px) scale(1.4);}.circle.c3{transform:translate(203px,-70px) scale(3);}.circle.c4{transform:translate(353px,3px) scale(01);z-index:-1;}.circle.c5{transform:translate(1236px,10px) scale(0.8);}"],({main:t,dark:s})=>`linear-gradient(119deg, ${t}, ${s})`,({light:t,dark:s})=>`linear-gradient(283deg, ${t}, ${s})`),ue=()=>{const{data:{user:t}}=g.useUser(),s=b((t==null?void 0:t.fullName)??"","dark1")??h.blue.dark2,i=b((t==null?void 0:t.fullName)??"","main")??h.blue.main,n=b((t==null?void 0:t.fullName)??"","light1")??h.blue.light2;return e.jsxs(pe,{light:n,main:i,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:n})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},me=L.memo(ue),ge=({onClick:t,children:s,show:i,hasBorder:n,borderPadding:a})=>i?e.jsx(fe,{onClick:t,hasBorder:n,borderPadding:a,children:s}):null,fe=d.button.withConfig({componentId:"sc-1sg7aqk-0"})(["border:none;display:flex;cursor:pointer;place-content:center;width:100%;display:flex;align-items:center;gap:16px;max-width:750px;border-radius:var(--brLight);background:var(--block);box-shadow:var(--very-mild-shadow);overflow-y:hidden;height:75px;background:linear-gradient( 270deg,#5f6dec 0%,#19e0b0 66%,#1bef89 100% ),linear-gradient(90deg,#34aaff 0%,#19e0b0 53%,#1bef89 100%);font-family:'Montserrat';font-style:normal;font-weight:600;font-size:16px;line-height:12px;text-align:center;color:#ffffff;"]),be=()=>{const[t,s,i,n]=u([S.tutorialState,I.setHeroVisited,I.increasedInteractions,S.interactions]);return x.useEffect(()=>{t===null&&n<5&&i()},[]),e.jsxs(ge,{onClick:()=>{s(!1)},show:t===null&&n<5,children:["Начать обучение ",e.jsx(U,{size:25})]})},je=d.div.withConfig({componentId:"sc-d7nkj6-0"})(["--time-width:30px;position:relative;width:100%;max-width:calc(50% - 5px);height:156px;padding:6px;border-radius:14px;background:var(--theme-2);","{--time-width:35px;min-width:100%;}"],f.isMobile),we=d.div.withConfig({componentId:"sc-d7nkj6-1"})(["height:100%;width:100%;overflow-y:auto;border-radius:10px;scroll-snap-type:y mandatory;& > *:not(:last-child){margin-bottom:6px;}& > *{background-color:var(--theme);scroll-snap-align:center;color:var(--text);}","{::-webkit-scrollbar{display:none;}}"],f.isNotMobile);d.div.withConfig({componentId:"sc-d7nkj6-2"})(["position:absolute;top:22px;right:22px;color:",";"],h.red.main);const ve=()=>{const{listRef:t,noSchedule:s,loading:i,schedule:n,isEnded:a,hasNoSchedule:r,errorInData:o,handleOpenModal:l,handleErrorClick:p}=F();return r?null:e.jsxs(je,{noSchedule:s||i,children:[s&&!i&&e.jsx(_,{errorInData:!!o}),i&&e.jsx(O,{}),e.jsx(he,{visible:!!o,topRightConrer:!0,onClick:p}),!s&&!i&&e.jsxs(we,{ref:t,children:[n==null?void 0:n.map(c=>x.createElement(Y,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:H(n,c,!0),onClick:l,isCurrentEvent:q(c,!0),leftShift:0,quantity:1,...c,key:c.title+c.weekday+c.dateInterval})),a&&e.jsx(Z,{})]})]})},ye=C(G),k=d.div.withConfig({componentId:"sc-1nwdjlx-0"})(["max-width:400px;min-width:calc(100% / 3);width:100%;height:156px;background:var(--theme-2);border-radius:15px;padding:6px;display:flex;align-items:center;gap:6px;.payment-info{width:100%;height:100%;background:var(--block);border-radius:11px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;position:relative;.top-info{a{position:absolute;top:6px;right:6px;}}}","{width:100%;min-width:100%;max-width:100%;}"],f.isMobile),Ce=()=>e.jsx(k,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(j,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(j,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(j,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),ke=()=>e.jsx(k,{children:e.jsx(V,{text:"Ошибка ",size:"70px"})}),M=({data:t,balance:s,section:i})=>{if(!t.length)return null;const{qr_current:n,qr_total:a}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx(T,{children:i}),e.jsx(X,{size:"middle",debt:s}),e.jsx(y,{to:J,children:e.jsx(z,{icon:e.jsx(B,{}),background:"transparent"})})]}),s>0&&e.jsx(K,{qr_current:n,qr_total:a}),s<=0&&e.jsx(Q,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(D,{})})]})},N=t=>t.some(s=>Number(s.balance_currdate)>0)?t.reduce((s,i)=>Number(i.balance_currdate)>0?Number(i.balance_currdate)+s:s,0):t.reduce((s,i)=>Number(i.balance_currdate)+s,0),Se=({forwardedRef:t})=>{const[s,i]=u([v.$paymentsStore,v.$error]);if(i)return e.jsx(ke,{});if(!s)return e.jsx(Ce,{});if(s&&!s.dormitory.length&&!s.education.length)return null;const n=N(s==null?void 0:s.dormitory),a=N(s==null?void 0:s.education),r=n>0||a>0;return e.jsxs(k,{ref:t,background:r?"red":"green",children:[e.jsx(M,{data:s.dormitory,balance:n,section:"Общежитие"}),e.jsx(M,{data:s.education,balance:a,section:"Обучение"})]})},Ie=()=>{const t=u(A.userSettings),s=t==null?void 0:t.homePage.hasSchedule,i=t==null?void 0:t.homePage.hasPayment;return e.jsxs(ye,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!s||!!i,tutorialModule:{id:"home",step:4,params:{position:"top"}},children:[s&&e.jsx(ve,{}),i&&e.jsx(Se,{})]})},Ee=()=>{var r;const{preparedData:t,loading:s}=P.selectors.useData(),{data:{user:i}}=g.useUser(),n=(r=t==null?void 0:t[new Date().getFullYear()])==null?void 0:r.slice(0,3),{isMobile:a}=ee();return x.useEffect(()=>{t||P.effects.getFx()},[]),e.jsxs(m,{d:"column",children:[e.jsxs($,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(y,{to:te,children:e.jsx(z,{width:"50px",height:"15px",background:h.blue.transparent3,textColor:h.blue.light1,text:"Ещё"})})]}),e.jsxs(m,{gap:"10px",d:a?"column":"row",children:[s&&e.jsxs(m,{d:"column",gap:"8px",children:[e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{})]}),n==null?void 0:n.map((o,l)=>e.jsx(xe,{isNew:l===0&&(i==null?void 0:i.hasAlerts),news:o,orientation:a?"horizontal":"vertical"},o.id))]})]})},Pe=d(y).withConfig({componentId:"sc-1v3jjcv-0"})(["width:100%;height:100%;max-width:",";display:flex;align-items:center;flex-direction:column;position:relative;gap:10px;.subtext{font-size:0.72rem;transition:0.2s;color:var(--text);}@media (min-width:1001px){padding-top:15px;&:hover{background-color:",";}&:hover .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:hover .icon{transform:scale(1.1) translateY(12px);}&:hover .notification-circle{opacity:0;}}","{&:active .icon{transform:scale(1.1) translateY(6px);}&:active .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:active{background-color:",";}min-width:calc(25% - 10px);max-width:calc(25% - 10px);height:50px;gap:3px;.icon{transform:scale(0.8);}.subtext{font-size:0.6rem;}}"],({amount:t})=>t>6&&"93.25px",({color:t})=>t,f.isTablet,({color:t})=>t),R=({item:t,amount:s})=>{const{icon:i,color:n,path:a,title:r,notifications:o,menuPath:l}=t;return e.jsxs(Pe,{to:l??a,color:h[n].transparent3,amount:s,children:[e.jsx(se,{badge:o==null?void 0:o.toString(),color:n,size:35,children:i}),e.jsx(T,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:r})]})},Me=d.div.withConfig({componentId:"sc-jcv4cx-0"})(["width:100%;display:flex;align-items:center;max-width:750px;border-radius:var(--brLight);background:var(--block);box-shadow:var(--very-mild-shadow);overflow-y:hidden;height:",";@media (max-width:1000px){height:",";}"],({componentHeight:t})=>t&&t>33?"120px":t&&t>10?"110px":"100px",({componentHeight:t})=>t&&t>33?"100px":t&&t>10?"90px":"75px"),Ne=({links:t,forwardedRef:s})=>{const i=Object.keys(t),{allRoutes:n}=W.useMenu(),[a,r]=x.useState(0);if(!n)return null;x.useEffect(()=>{const l=i.reduce((p,c)=>t[p].title.length>t[c].title.length?p:c);r(t[l].title.length)},[i]);const o=Object.keys(t).length;return e.jsxs(Me,{ref:s,componentHeight:a,children:[i.map((l,p)=>e.jsxs(L.Fragment,{children:[e.jsx(R,{amount:o,item:t[l]}),p!==i.length-1&&e.jsx(E,{direction:"vertical",margin:"10px 0",width:"70%"})]},l)),e.jsx(E,{direction:"vertical",margin:"10px 0",width:"70%"}),e.jsx(R,{amount:o,item:n.all})]})},Re=C(Ne),Le=d.div.withConfig({componentId:"sc-1ftunim-0"})(["width:100%;padding-top:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;@media (max-width:1000px){padding-top:153px;}"]),Te=({forwardedRef:t})=>{const{data:{user:s}}=g.useUser(),{homeRoutes:i}=W.useMenu(),n=u(A.userSettings),a=n==null?void 0:n.homePage.hasNews,r=u(v.$paymentsStore),{data:{schedule:o}}=ie.useSchedule();return x.useEffect(()=>{r||ne.getPayments()},[r]),x.useEffect(()=>{o||ae.getScheduleFx(s)},[o]),i?e.jsxs(Le,{children:[e.jsx(oe,{tutorialModule:{id:"home",step:1,params:{position:"bottom"}}}),e.jsx(Re,{tutorialModule:{id:"home",step:2,params:{position:"bottom"}},links:i}),e.jsx(be,{}),e.jsx(re,{children:e.jsxs(le,{forwardedRef:t,noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(m,{children:[e.jsx($,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(ce,{})]}),e.jsx(Ie,{}),!!a&&e.jsx(Ee,{})]})})]}):null},ze=C(Te),De=()=>{const{data:{user:t},error:s}=g.useUser();return t?e.jsxs(de,{loading:!t,load:()=>null,error:s,data:t,children:[e.jsx(me,{}),e.jsx(ze,{tutorialModule:{id:"home",step:0,params:{position:"top"}}})]}):null};export{De as default};
