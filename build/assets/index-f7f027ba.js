var U=Object.defineProperty,F=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var L=(e,i,s)=>i in e?U(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,E=(e,i)=>{for(var s in i||(i={}))O.call(i,s)&&L(e,s,i[s]);if(I)for(var s of I(i))Y.call(i,s)&&L(e,s,i[s]);return e},P=(e,i)=>F(e,H(i));import{r as x,j as t,az as _,s as u,i as g,R as A,cJ as Z}from"./vendor-8a1e4858.js";import{s as m,Z as V,f as p,T as D,a5 as X,B as q,X as h,a6 as b,a7 as y,L as G,a8 as k,a9 as J,aa as K,ab as Q,ac as ee,ad as te,ae as ie,af as se,ag as B,ah as oe,ai as le,S as ne,y as W,D as R,aj as N,ak as T,al as ae,am as re,an as de,ao as ce,ap as ue,k as he,aq as xe,ar as C,W as pe}from"./index-5bf1da28.js";import{a as M,A as ge}from"./alert-item-7c61e258.js";import{E as me}from"./index-b24f2bc7.js";import{B as fe}from"./index-fd3c1b00.js";import"./is-valid-url-08a91344.js";import"./index-ebbac366.js";const ve=()=>{var e;const{preparedData:i,loading:s}=M.selectors.useData(),{data:{user:o}}=m.useUser(),n=i==null||(e=i[new Date().getFullYear()])===null||e===void 0?void 0:e.slice(0,3),{isMobile:r}=V();return x.useEffect(()=>{i||M.effects.getFx()},[]),t.jsxs(p,{d:"column",children:[t.jsxs(D,{size:4,bottomGap:!0,align:"left",children:["Последние новости",t.jsx(_,{to:X,children:t.jsx(q,{width:"50px",height:"15px",background:h.blue.transparent3,textColor:h.blue.light1,text:"Ещё"})})]}),t.jsxs(p,{gap:"10px",d:r?"column":"row",children:[s&&t.jsxs(p,{d:"column",gap:"8px",children:[t.jsx(b,{}),t.jsx(b,{}),t.jsx(b,{})]}),n==null?void 0:n.map((l,a)=>t.jsx(ge,{isNew:a===0&&(o==null?void 0:o.hasAlerts),news:l,orientation:r?"horizontal":"vertical"},l.id))]})]})},we=y(G),je=u.div.withConfig({componentId:"sc-d7nkj6-0"})(["--time-width:30px;position:relative;width:100%;max-width:calc(50% - 5px);height:156px;padding:6px;border-radius:14px;background:var(--theme-2);","{--time-width:35px;min-width:100%;}"],k.isMobile),be=u.div.withConfig({componentId:"sc-d7nkj6-1"})(["height:100%;width:100%;overflow-y:auto;border-radius:10px;scroll-snap-type:y mandatory;& > *:not(:last-child){margin-bottom:6px;}& > *{background-color:var(--theme);scroll-snap-align:center;color:var(--text);}","{::-webkit-scrollbar{display:none;}}"],k.isNotMobile);u.div.withConfig({componentId:"sc-d7nkj6-2"})(["position:absolute;top:22px;right:22px;color:",";"],h.red.main);const Ce=()=>{const{listRef:e,noSchedule:i,loading:s,schedule:o,isEnded:n,hasNoSchedule:r,errorInData:l,handleOpenModal:a,handleErrorClick:c}=J();return r?null:t.jsxs(je,{noSchedule:i||s,children:[i&&!s&&t.jsx(K,{errorInData:!!l}),s&&t.jsx(Q,{}),t.jsx(me,{visible:!!l,topRightConrer:!0,onClick:c}),!i&&!s&&t.jsxs(be,{ref:e,children:[o==null?void 0:o.map(d=>x.createElement(ee,P(E({nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:te(o,d,!0),onClick:a,isCurrentEvent:ie(d,!0),leftShift:0,quantity:1},d),{key:d.title+d.weekday+d.dateInterval}))),n&&t.jsx(se,{})]})]})},ye=()=>{const e=g(B.userSettings),i=e==null?void 0:e.homePage.hasSchedule,s=e==null?void 0:e.homePage.hasPayment;return t.jsxs(we,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!i||!!s,tutorialModule:{id:"home",step:4,params:{position:"top"}},children:[i&&t.jsx(Ce,{}),s&&t.jsx(oe,{})]})},ke=u(_).withConfig({componentId:"sc-1v3jjcv-0"})(["width:100%;height:100%;max-width:",";display:flex;align-items:center;flex-direction:column;position:relative;gap:10px;.subtext{font-size:0.72rem;transition:0.2s;color:var(--text);}@media (min-width:1001px){padding-top:15px;&:hover{background-color:",";}&:hover .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:hover .icon{transform:scale(1.1) translateY(12px);}&:hover .notification-circle{opacity:0;}}","{&:active .icon{transform:scale(1.1) translateY(6px);}&:active .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:active{background-color:",";}min-width:calc(25% - 10px);max-width:calc(25% - 10px);height:50px;gap:3px;.icon{transform:scale(0.8);}.subtext{font-size:0.6rem;}}"],({amount:e})=>e>6&&"93.25px",({color:e})=>e,k.isTablet,({color:e})=>e),z=({item:e,amount:i})=>{const{icon:s,color:o,path:n,title:r,notifications:l,menuPath:a}=e;return t.jsxs(ke,{to:a!=null?a:n,color:h[o!=null?o:"blue"].transparent3,amount:i,children:[t.jsx(le,{badge:l==null?void 0:l.toString(),color:o!=null?o:"blue",size:35,children:s&&t.jsx(s,{})}),t.jsx(ne,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:r})]})},Se=u.div.withConfig({componentId:"sc-jcv4cx-0"})(["width:100%;display:flex;align-items:center;max-width:750px;border-radius:var(--brLight);background:var(--block);box-shadow:var(--very-mild-shadow);overflow-y:hidden;height:",";@media (max-width:1000px){height:",";}"],({componentHeight:e})=>e&&e>33?"120px":e&&e>10?"110px":"100px",({componentHeight:e})=>e&&e>33?"100px":e&&e>10?"90px":"75px"),$e=({links:e,forwardedRef:i})=>{const s=Object.keys(e),{allRoutes:o}=W.useMenu(),[n,r]=x.useState(0);if(!o)return null;x.useEffect(()=>{var a,c;const d=s.reduce((S,$)=>{var f,v,w,j;return((f=(v=e[S].title)===null||v===void 0?void 0:v.length)!==null&&f!==void 0?f:0)>((w=(j=e[$].title)===null||j===void 0?void 0:j.length)!==null&&w!==void 0?w:0)?S:$});r((a=(c=e[d].title)===null||c===void 0?void 0:c.length)!==null&&a!==void 0?a:0)},[s]);const l=Object.keys(e).length;return t.jsxs(Se,{ref:i,componentHeight:n,children:[s.map((a,c)=>t.jsxs(A.Fragment,{children:[t.jsx(z,{amount:l,item:e[a]}),c!==s.length-1&&t.jsx(R,{direction:"vertical",margin:"10px 0",width:"70%"})]},a)),t.jsx(R,{direction:"vertical",margin:"10px 0",width:"70%"}),t.jsx(z,{amount:l,item:o.all})]})},Ie=y($e),Le=({onClick:e,children:i,show:s,hasBorder:o,borderPadding:n})=>s?t.jsx(Ee,{onClick:e,hasBorder:o,borderPadding:n,children:i}):null,Ee=u.button.withConfig({componentId:"sc-199uhyx-0"})(["border:none;display:flex;cursor:pointer;place-content:center;width:100%;display:flex;align-items:center;gap:16px;max-width:750px;border-radius:var(--brLight);background:var(--block);box-shadow:var(--very-mild-shadow);overflow-y:hidden;height:75px;background:linear-gradient( 270deg,#5f6dec 0%,#19e0b0 66%,#1bef89 100% ),linear-gradient(90deg,#34aaff 0%,#19e0b0 53%,#1bef89 100%);font-family:'Montserrat';font-style:normal;font-weight:600;font-size:16px;line-height:12px;text-align:center;color:#ffffff;"]),Pe=()=>{const[e,i,s,o]=g([N.tutorialState,T.setHeroVisited,T.increasedInteractions,N.interactions]);return x.useEffect(()=>{e===null&&o<5&&s()},[]),t.jsxs(Le,{onClick:()=>{i(!1)},show:e===null&&o<5,children:["Начать обучение ",t.jsx(Z,{size:25})]})},Re=u.div.withConfig({componentId:"sc-1ftunim-0"})(["width:100%;padding-top:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;@media (max-width:1000px){padding-top:153px;}"]),Ne=({forwardedRef:e})=>{const{data:{user:i}}=m.useUser(),{homeRoutes:s}=W.useMenu(),o=g(B.userSettings),n=o==null?void 0:o.homePage.hasNews,r=g(ae.$paymentsStore),{data:{schedule:l}}=re.useSchedule();return x.useEffect(()=>{r||de.getPayments()},[r]),x.useEffect(()=>{l||ce.getScheduleFx(i)},[l]),s?t.jsxs(Re,{children:[t.jsx(ue,{tutorialModule:{id:"home",step:1,params:{position:"bottom"}}}),t.jsx(Ie,{tutorialModule:{id:"home",step:2,params:{position:"bottom"}},links:s}),t.jsx(Pe,{}),t.jsx(he,{children:t.jsxs(fe,{forwardedRef:e,noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[t.jsxs(p,{children:[t.jsx(D,{size:2,align:"left",width:"100%",children:"Главная"}),t.jsx(xe,{})]}),t.jsx(ye,{}),!!n&&t.jsx(ve,{})]})})]}):null},Te=y(Ne),Me=u.div.withConfig({componentId:"sc-13zh6dc-0"})(["width:100%;height:200px;position:absolute;top:0;left:0;background:",";@keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}z-index:-1;overflow:hidden;svg{position:absolute;opacity:0.05;z-index:0;}svg:nth-child(1){transform:scale(4) rotate(287deg) translate(390px,190px);}svg:nth-child(2){transform:scale(2) rotate(15deg) translate(522px,-410px);}svg:nth-child(3){transform:scale(3) rotate(30deg) translate(75.9px,179px);}svg:nth-child(4){transform:scale(2) rotate(60deg) translate(75.9px,159px);}.circle{width:100px;height:100px;position:absolute;border-radius:100%;z-index:1;background:",";}.circle.c2{transform:translate(814px,110px) scale(1.4);}.circle.c3{transform:translate(203px,-70px) scale(3);}.circle.c4{transform:translate(353px,3px) scale(01);z-index:-1;}.circle.c5{transform:translate(1236px,10px) scale(0.8);}"],({main:e,dark:i})=>`linear-gradient(119deg, ${e}, ${i})`,({light:e,dark:i})=>`linear-gradient(283deg, ${e}, ${i})`),ze=()=>{var e,i,s,o,n,r;const{data:{user:l}}=m.useUser(),a=(e=C((i=l==null?void 0:l.fullName)!==null&&i!==void 0?i:"","dark1"))!==null&&e!==void 0?e:h.blue.dark2,c=(s=C((o=l==null?void 0:l.fullName)!==null&&o!==void 0?o:"","main"))!==null&&s!==void 0?s:h.blue.main,d=(n=C((r=l==null?void 0:l.fullName)!==null&&r!==void 0?r:"","light1"))!==null&&n!==void 0?n:h.blue.light2;return t.jsxs(Me,{light:d,main:c,dark:a,children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:d})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("div",{className:"circle c2"}),t.jsx("div",{className:"circle c3"}),t.jsx("div",{className:"circle c4"}),t.jsx("div",{className:"circle c5"})]})},_e=A.memo(ze),Ye=()=>{const{data:{user:e},error:i}=m.useUser();return e?t.jsxs(pe,{loading:!e,load:()=>null,error:i,data:e,children:[t.jsx(_e,{}),t.jsx(Te,{tutorialModule:{id:"home",step:0,params:{position:"top"}}})]}):null};export{Ye as default};
