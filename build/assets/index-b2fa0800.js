var te=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var A=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))ae.call(t,a)&&A(e,a,t[a]);if(_)for(var a of _(t))re.call(t,a)&&A(e,a,t[a]);return e},F=(e,t)=>ne(e,oe(t));import{s as d,j as n,r as w,da as se,i as ie,R as U}from"./vendor-8a1e4858.js";import{dx as V,dy as le,dz as M,f as b,a8 as p,X as ce,dA as de,dB as he,Z as G,ae as Y,dC as pe,dD as O,dE as K,dF as W,dG as ue,a4 as P,dH as ge,ad as xe,dI as me,dJ as fe,dK as ve,ag as De,bG as B,dL as ye,S as X,dM as we,R as be,dN as Ce,V as ke,dO as je,dP as Ie,aV as Ee,aU as Me}from"./index-7ba18bcb.js";const Se=d.div.withConfig({componentId:"sc-x00y62-0"})(["display:flex;align-items:center;gap:4px;margin:0 auto;width:fit-content;"]),$=d.div.withConfig({componentId:"sc-x00y62-1"})(["width:6px;height:6px;border-radius:10px;background:",";@media (max-width:768px){width:5px;height:5px;}"],({background:e})=>e),q=({subjects:e})=>e?n.jsx(Se,{children:e.map(t=>n.jsx($,{background:t.color.main},t.startTime))}):null,Te=()=>{const e=new Date;let t=V(e);e.getDay()===0&&(t=le(e,1));const a=Object.keys(M).reduce((o,s)=>(o[M[s].short]="",o),{});for(let o=0;o<6;o++){const s=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),a[Object.keys(a)[o]]=s}return a},L=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},R=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",Oe=d(b).withConfig({componentId:"sc-r08hxa-0"})(["padding-left:var(--time-width);"]),We=d.div.withConfig({componentId:"sc-r08hxa-1"})(["width:100%;font-weight:500;height:44px;border-radius:4px;font-size:0.86rem;cursor:pointer;&:hover{background:var(--theme-3);}&::before,&::after{content:'';display:",";height:calc(100% - 64px);top:54px;width:1.5px;position:absolute;background:var(--theme-4);}&::after{right:0;}","{font-size:0.8rem;height:",";&::after,&::before{top:90px;height:calc(100% - 100px);}}"],({showColumns:e})=>e?"block":"none",p.isMobile,({showDates:e})=>e?"80px":"50px"),Le=d(b).withConfig({componentId:"sc-r08hxa-2"})(["margin:2px 0;","{flex-direction:column;margin:6px 0;}"],p.isMobile),Re=d.span.withConfig({componentId:"sc-r08hxa-3"})(["margin-left:auto;margin-right:",";background:",";color:",";padding:5px;border-radius:25px;","{margin-right:auto;padding:4px;}"],({showDates:e})=>e?"0":"auto",({showDates:e})=>!e&&L,({showDates:e})=>e?"var(--grey)":R,p.isMobile),Ne=d.span.withConfig({componentId:"sc-r08hxa-4"})(["height:26px;min-width:26px;display:flex;justify-content:center;align-items:center;border-radius:100px;margin-right:auto;margin-left:2px;background:",";color:",";font-weight:",";","{margin-left:auto;margin-top:4px;font-size:",";}"],L,R,({isCurrent:e,isCurrentChosenDay:t})=>e&&t&&"600",p.isMobile,({isCurrent:e})=>e&&"0.8rem"),N=({showDates:e,showColumns:t,currentChosenDay:a,onDayClick:o,events:s})=>{const i=Te();return n.jsx(Oe,{jc:"space-between",children:Object.keys(i).map((r,c)=>{const l=i[r],h=c===a;return n.jsxs(We,{showDates:e,showColumns:t,onClick:o&&(()=>o==null?void 0:o(c)),children:[n.jsxs(Le,{children:[n.jsx(Re,{isCurrent:+l===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:r}),e&&n.jsx(Ne,{isCurrentChosenDay:h,isCurrent:+l===new Date().getDate(),children:l})]}),s&&e&&n.jsx(q,{subjects:s[Object.keys(s)[c]]}),s&&!e&&s[Object.keys(s)[c]].length>0&&n.jsx(b,{jc:"center",children:n.jsx($,{background:ce.grey.main})})]},r)})})},J=({interval:e,showDates:t,events:a,onDayClick:o})=>{const s=e[0]*60,i=de();return{handleOpenModal:he(),onDayClick:o,shift:s,showDates:t,interval:e,events:a,scale:i}},H=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,_e=({events:e,currentChosenDay:t,showDates:a=!0,interval:o=[0,23]})=>{const{isSmallDesktop:s}=G(),{scale:i,shift:r,events:c,handleOpenModal:l}=J({interval:o,events:e}),[h,f]=w.useState(null),[m,y]=w.useState(H(t)),x=w.useRef(null);w.useEffect(()=>{if(e){var g;const D=Object.keys(e!=null?e:{})[m],Z=(g=e[D].find(ee=>Y(ee,!0)))!==null&&g!==void 0?g:null;f(Z)}else f(null)},[e]);const v=h?`${h.startTime} - ${pe(h.startTime,h.duration)}`:"9:00",u=w.useCallback(g=>{s?l(g):f(g)},[s]),C=g=>{const D=Math.floor(g.currentTarget.scrollLeft/g.currentTarget.clientWidth);y(D)},k=g=>{x.current&&(x.current.scrollLeft=x.current.clientWidth*g)};return w.useLayoutEffect(()=>{k(H(t))},[x,t]),{currentDay:m,events:c,carouselRef:x,interval:o,scale:i,shift:r,showDates:a,chosenEvent:h,timeInterval:v,currentChosenDay:t,handleDayClick:k,handleCarouselScroll:C,onEventClick:u}},Q=d(b).withConfig({componentId:"sc-1j7u930-0"})(["--time-width:55px;","{--time-width:35px;}"],p.isMobile),Ae=d(Q).withConfig({componentId:"sc-7ftixr-0"})(["height:",";","{height:",";}","{height:",";}"],O,p.isTablet,K,p.isMobile,W),ze=d.div.withConfig({componentId:"sc-7ftixr-1"})(["min-width:340px;max-width:340px;height:calc(100vh - 220px);z-index:10;background:var(--block-content);border-radius:10px;top:0;overflow:hidden auto;box-shadow:var(--block-shadow);","{display:none;}"],p.isSmallDesktop),Fe=d.div.withConfig({componentId:"sc-7ftixr-2"})(["overflow-y:hidden;overflow-x:auto;height:100%;width:100%;gap:32px;display:flex;scroll-snap-type:x mandatory;&{.calendar-wrapper{scroll-snap-align:center;min-width:100%;}}"]),Be=e=>{var t;const{currentDay:a,events:o,carouselRef:s,interval:i,scale:r,shift:c,chosenEvent:l,showDates:h,timeInterval:f,handleDayClick:m,handleCarouselScroll:y,onEventClick:x}=_e(e);return n.jsxs(Ae,{d:"column",gap:"12px",children:[n.jsx(N,{onDayClick:m,currentChosenDay:a,showDates:h,showColumns:!1,events:o}),n.jsxs(b,{h:"100%",gap:"18px",children:[n.jsx(Fe,{onScroll:y,ref:s,children:Object.keys(o!=null?o:{}).map((v,u)=>{const C=o==null?void 0:o[v];return n.jsx(ue,{events:C,interval:i,scale:r,weekday:u+1,currentDay:a,shift:c,onEventClick:x},v)})}),n.jsx(ze,{children:l?n.jsx(ge,{isNextEvent:xe(o==null?void 0:o.saturday,l,!0),timeInterval:f,color:l.color,name:l.title,place:l.place,link:l.link,groups:l.groups,weekday:l.weekday,teachers:l.people,dateInterval:l.dateInterval,rooms:(t=l.rooms)!==null&&t!==void 0?t:[],isCurrentEvent:Y(l,!0)}):n.jsx(P,{text:"Ничего не выбрано",image:n.jsx(se,{})})})]})]})},He=d(Q).withConfig({componentId:"sc-i4bgmk-0"})(["height:",";position:relative;","{height:",";}","{height:",";}"],O,p.isTablet,K,p.isMobile,W),Ue=e=>{const{handleOpenModal:t,onDayClick:a,shift:o,scale:s,showDates:i,interval:r,events:c}=J(e);return n.jsxs(He,{d:"column",children:[n.jsx(N,{onDayClick:a,showDates:i,showColumns:!0,events:c}),n.jsxs(me,{children:[n.jsx(fe,{interval:r,scale:s}),Object.keys(M).map((l,h)=>n.jsx(ve,{showTime:!1,weekDay:h+1,shortInfo:!0,events:c==null?void 0:c[l],scale:s,shift:o,currentEvent:null,interval:r,onClick:t},l))]})]})},S=e=>{const t=new Date(e),a=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(a))},j=(e,t)=>{const o=(t.getTime()-e.getTime())/(1e3*3600*24);return o-Math.floor(o/6.55)+1},Ve=d.div.withConfig({componentId:"sc-vbnflc-0"})(["width:100%;display:flex;flex-direction:column;height:",";position:relative;","{height:",";}"],O,p.isMobile,W),Ge=d.div.withConfig({componentId:"sc-vbnflc-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;border-left:1px solid var(--theme-3);border-top:1px solid var(--theme-3);border-bottom:1px solid var(--theme-3);overflow-y:auto;scroll-snap-type:y mandatory;scroll-padding-top:100px;","{&::-webkit-scrollbar{display:none;}}","{border:none;scroll-padding-top:50px;}"],p.isMiddleDesktop,p.isMobile),Ye=d.div.withConfig({componentId:"sc-vbnflc-2"})(["padding:6px;width:1000px;max-width:calc(100% / 6);height:calc((100vh / 6) - 6px);background:transparent;border-right:1px solid var(--almostTransparentOpposite);border-bottom:1px solid var(--almostTransparentOpposite);display:flex;flex-direction:column;align-items:center;opacity:",";background:",";scroll-snap-align:center;","{padding:12px;gap:4px;height:calc((100vw / 6) - 5.5px);border-right:none;}"],({disabled:e})=>e?"0.4":"1",({disabled:e})=>e?"var(--theme-1t)":"transparent",p.isMobile),Ke=d.div.withConfig({componentId:"sc-vbnflc-3"})(["width:100%;font-size:0.9rem;font-weight:500;display:flex;align-items:center;","{justify-content:center;}"],p.isMobile),Pe=d.div.withConfig({componentId:"sc-vbnflc-4"})(["height:26px;width:26px;display:flex;justify-content:center;align-items:center;border-radius:30px;background:",";color:",";"],L,R),Xe=d.div.withConfig({componentId:"sc-vbnflc-5"})(["position:sticky;width:100%;height:50px;font-size:1.2rem;font-weight:500;top:0px;padding:10px;z-index:100;margin:4px 0;background:var(--block);","{background:var(--theme);}"],p.isMobile),$e=d(b).withConfig({componentId:"sc-oret8h-0"})(["padding:4px;border-radius:4px;cursor:pointer;&:hover{filter:brightness(0.92);}"]),qe=d.div.withConfig({componentId:"sc-oret8h-1"})(["font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.8rem;opacity:0.8;color:",";"],({textColor:e})=>e),Je=e=>{const{title:t,color:a,onClick:o,startTime:s}=e,i=ie(De.userSettings),r=(i==null?void 0:i.appearance.theme)===B.Light?a.dark3:a.light3,c=(i==null?void 0:i.appearance.theme)===B.Light?a.transparent3:a.transparent2,l=()=>o==null?void 0:o(e);return n.jsxs($e,{textColor:r,background:c,gap:"6px",onClick:l,children:[n.jsx(ye,{isCurrentEvent:!1,color:a}),n.jsx(qe,{textColor:r,children:t}),n.jsx(X,{fontSize:"0.7rem",children:s})]})},T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),I=4,Qe=(e,t)=>{const a=we(t);return a==="sunday"?[]:e==null?void 0:e[a].filter(o=>o.endDate?t>=o.startDate&&t<=o.endDate:T(o.startDate,t))},Ze=({daysAmount:e,startDate:t,events:a,addOneOnWeekends:o,handleEventClick:s,disabled:i=!1})=>{if(e<0||isNaN(e))return n.jsx(P,{text:"Неправильная длина календаря"});const r=new Date(t),{isMobile:c}=G(),{open:l}=be(),h=(f,m)=>()=>{l(n.jsx(Ie,{isCurrentDay:!1,dayEvents:f,day:m}),m)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,m)=>{var y,x,v;if(m!==0)r.getDay()===6&&o?r.setDate(r.getDate()+2):r.setDate(r.getDate()+1);else if(r.getDay()===0)return null;const u=Qe(a,r),C=S(r),k=r.getDay()===1&&C.getMonth()!==r.getMonth(),g=C.getMonth()===r.getMonth()&&m===0&&r.getDay()===1||r.getDay()===1&&r.getDate()===1;return n.jsxs(U.Fragment,{children:[(g||k)&&n.jsx(Xe,{children:Ce(k?S(r).toLocaleDateString("ru-RU",{month:"long"}):r.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(Ye,{disabled:i,onClick:h(u,ke(r)),children:[n.jsxs(Ke,{children:[n.jsxs(Pe,{isCurrentChosenDay:T(r,new Date),isCurrent:T(r,new Date),children:[je(r.getDate())," "]}),!c&&r.getDate()===1&&r.toLocaleDateString("ru-RU",{month:"short"})]}),!c&&n.jsxs(b,{d:"column",ai:"flex-start",gap:"0px",children:[u==null||(y=u.slice(0,I))===null||y===void 0?void 0:y.map(D=>n.jsx(Je,F(z({},D),{onClick:s}),D.title+D.startTime+D.dateInterval)),((x=u==null?void 0:u.length)!==null&&x!==void 0?x:0)>I&&n.jsxs(X,{children:["И еще ",((v=u==null?void 0:u.length)!==null&&v!==void 0?v:0)-I]})]}),c&&n.jsx(q,{subjects:u})]})]},r.toLocaleDateString("ru-RU"))})})},E=U.memo(Ze),et=({events:e,startDate:t,endDate:a,onDayClick:o})=>{const s=new Date(t),i=new Date(a),r=V(s),c=i.getDay()!==0?S(i):i,l=j(s,i);return n.jsxs(Ve,{children:[n.jsx(N,{showColumns:!1,events:null,onDayClick:o}),n.jsxs(Ge,{children:[n.jsx(E,{daysAmount:j(r,s)-1,startDate:r,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx(E,{daysAmount:l,startDate:s,events:e,addOneOnWeekends:!0}),n.jsx(E,{daysAmount:j(i,c)-1,startDate:new Date(i.getFullYear(),i.getMonth(),i.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},at=({events:e,view:t,showDates:a,startDate:o,endDate:s})=>{const[i,r]=w.useState(void 0),c=h=>{Ee.changeView(Me.day),r(h)},l=[n.jsx(Be,{currentChosenDay:i,events:e,interval:[9,22],showDates:a},"day"),n.jsx(Ue,{events:e,interval:[9,22],showDates:a,onDayClick:c},"week"),n.jsx(et,{events:e,startDate:o,endDate:s,onDayClick:c},"month")];return n.jsx(n.Fragment,{children:l[t]})};export{at as T};
