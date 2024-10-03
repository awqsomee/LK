import{s as r,j as t,d5 as N,d6 as q,r as u,R as T,d7 as L}from"./vendor-48260ac4.js";import{$ as W,g as M,au as R,bg as l,l as C,cE as I,cF as f,u as H,G as c,bA as J,cG as K,X as h,bh as U,cH as X,h as k,K as p,cI as V,H as Q,bu as S,bz as F,L as x,cJ as B,ai as Y,W as Z,P as ee,x as te,a2 as D,b4 as ne}from"./index-0474be1f.js";const ie=async({semestr:e})=>{var i,n;return(n=(i=await W.get(`?getAcademicPerformance&semestr=${e}&token=${M()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance};function O(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const _=R({api:{get:ie},prepareData:O}),y=(e,i)=>{const n=new Date(e).getMonth();return n>1&&n<8?+i*2:+i*2-1},se=e=>{const i=y(new Date().toISOString(),e),n=[];for(let o=1;o<=i;o++)n.push({id:o,title:`${o} семестр`});return n.push({id:-1,title:"Все семестры"}),n},oe=(e,i)=>O(i.filter(n=>l(n.name).includes(l(e))||l(n.teacher).includes(l(e))||l(C(n.exam_date)).includes(l(e))||l(n.bill_num).includes(l(e))));function re(e){const i={5:0,4:0,3:0,2:0},n=e.filter(o=>!!o.grade&&o.exam_type!=="Зачет").length;return e.forEach(({grade:o,exam_type:s})=>{s!=="Зачет"&&o!==void 0&&i[I[o]]++}),n===0?i:Object.keys(i).reduce((o,s)=>(o[+s]=i[+s]/n,o),{})}const ae=2.7;r.div.withConfig({componentId:"sc-4d34xq-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;& .center{position:absolute;left:50%;transform:translate(-50%,-50%);font-weight:500;opacity:0.8;display:block;}& svg{width:","px;height:","px;& g{& circle{fill:none;stroke-width:",";stroke:var(--almostTransparentOpposite);transform:translate(10px,10px);transition:0.3s;}&:nth-child(2) circle{transition:0.3s;stroke-dasharray:","px;}}}@media (max-width:1000px){width:200px;}"],({width:e})=>e,({width:e})=>e,({width:e})=>e/10,({width:e})=>e*ae);r.div.withConfig({componentId:"sc-1pecv8n-0"})(["display:flex;gap:16px;@media (max-width:330px){flex-direction:column;align-items:center;}"]);r.div.withConfig({componentId:"sc-1pecv8n-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:1000px){width:200px;}"]);r.div.withConfig({componentId:"sc-1pecv8n-2"})(["position:absolute;left:50%;top:120%;transform:translate(-50%,0%);display:flex;align-items:center;"]);const v=(e,i)=>e?i?f[e]||f.default:f[e].main||f.default.main:"var(--grey)",ce=e=>e.split(" ").reduce((i,n,o)=>(o===0?i.push(n):i.push(`${n[0]}.`),i),[]).join(" "),de=r.div.withConfig({componentId:"sc-1mqkodv-0"})(["display:flex;align-items:center;justify-content:center;color:",";width:",";height:22px;min-width:22px;min-height:22px;border-radius:50%;svg{width:100%;height:100%;}"],({grade:e})=>v(e),({superWide:e})=>e?"105px":"22px"),le=({grade:e})=>t.jsx(de,{grade:e,superWide:e==="Не явился",children:e==="Не явился"?e:e&&(I[e]>2?t.jsx(N,{}):t.jsx(q,{}))}),pe=r.div.withConfig({componentId:"sc-blq100-0"})(["width:100%;display:flex;min-height:60px;align-items:center;justify-content:space-between;padding:15px 0;box-sizing:border-box;cursor:pointer;opacity:",";"],({isGraded:e})=>e?1:.4),xe=r.div.withConfig({componentId:"sc-blq100-1"})(["display:flex;margin-right:10px;font-weight:500;hyphens:auto;@media (max-width:1000px){min-width:0px;}"]),he=r.strong.withConfig({componentId:"sc-blq100-2"})(["color:",";font-weight:600;width:",";display:flex;justify-content:flex-end;"],({color:e})=>e,({superWide:e})=>e?"105px":"30px"),ue=({item:e,type:i})=>{const{open:n}=H(),{name:o,grade:s}=e,g=v(s),d=()=>e.grade&&n(t.jsx(fe,{item:e,color:v(s,!0)}));return t.jsxs(pe,{onClick:d,isGraded:!!e.grade,children:[t.jsxs(c,{gap:"16px",children:[t.jsx(J,{color:g,borderRadius:"9px",children:K(o)}),t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(xe,{children:o}),t.jsx(h,{children:t.jsx(U,{words:[ce(e.teacher),C(e.exam_date)]})})]})]}),t.jsx(he,{color:g,superWide:s==="Не явился",children:i==="Зачет"?t.jsx(le,{grade:s}):s==="Не явился"?"Не явился":s&&I[s]})]})},ge=r.div.withConfig({componentId:"sc-7hxibl-0"})(["width:400px;@media (max-width:800px){width:100%;}"]),me=r.div.withConfig({componentId:"sc-7hxibl-1"})(["margin:20px 0;"]),fe=({item:e,color:i})=>t.jsxs(ge,{children:[t.jsx(X,{subjectName:e.name,color:i,noPadding:!0}),t.jsx(me,{children:t.jsx(k,{size:3,align:"left",children:e.name})}),t.jsx(p,{keyStr:"Курс",value:e.course}),t.jsx(p,{keyStr:"Форма аттестации",value:e.exam_type}),t.jsx(p,{keyStr:"Дата проведения",value:C(e.exam_date)}),t.jsx(p,{keyStr:"Оценка",value:e.grade}),t.jsx(p,{keyStr:"Номер ведомости",value:e.bill_num}),t.jsx(p,{keyStr:"Семестр",value:y(e.exam_date,+e.course)}),t.jsx(p,{keyStr:"Кафедра",value:e.chair}),t.jsx(p,{keyStr:"Преподаватель",value:t.jsx(V,{id:void 0,type:"staff",name:e.teacher}),direction:"vertical"})]}),je=({items:e,type:i})=>t.jsx(t.Fragment,{children:e.map((n,o)=>t.jsxs(T.Fragment,{children:[t.jsx(ue,{item:n,type:i}),o!==e.length-1&&t.jsx(Q,{margin:"0",width:"100%"})]},n.id))}),be=u.memo(je),we=({items:e,loading:i})=>{var n;return e?i?t.jsxs(c,{d:"column",ai:"flex-start",gap:"12px",children:[t.jsx(S,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(F,{quantity:5,avatarShape:"rect"}),t.jsx(S,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(F,{quantity:10,avatarShape:"rect"})]}):t.jsx(c,{d:"column",gap:"20px",children:(n=Object.keys(e))==null?void 0:n.map(o=>t.jsxs(c,{d:"column",children:[t.jsxs(k,{size:3,align:"left",width:"fit-content",children:[o,t.jsx(h,{children:e[o].length})]}),t.jsx(be,{items:e[o]||[],type:o,loading:i})]},o))}):null},ke=u.memo(we),ye=r.div.withConfig({componentId:"sc-1gg99m8-0"})(["overflow:hidden;width:100%;display:flex;gap:2px;height:10px;background:var(--block-content);"]),j=r.div.withConfig({componentId:"sc-1gg99m8-1"})(["width:",";height:10px;background:",";display:flex;border-radius:2px;justify-content:center;align-items:center;color:#fff;font-weight:500;display:",";"],({percent:e})=>`calc(${e} * 100%)`,({color:e})=>e,({percent:e})=>e===0&&"none"),b=r(c).withConfig({componentId:"sc-1gg99m8-2"})(["opacity:",";"],({percentage:e})=>e===0&&"0.2"),w=r.div.withConfig({componentId:"sc-1gg99m8-3"})(["min-width:10px;width:10px;height:10px;border-radius:2px;background:",";"],({color:e})=>e),Se=({data:e,loading:i})=>{if(!e)return null;if(i)return t.jsx(S,{margin:"0",shape:"rect",size:{width:"100%",height:"12px"}});const n=re(e);return t.jsxs(c,{d:"column",gap:"10px",children:[t.jsxs(ye,{children:[t.jsx(j,{percent:n[5],color:x.green.main}),t.jsx(j,{percent:n[4],color:x.blue.main}),t.jsx(j,{percent:n[3],color:x.orange.main}),t.jsx(j,{percent:n[2],color:x.red.main})]}),t.jsxs(c,{gap:"30px",children:[t.jsxs(b,{percentage:n[5],gap:"4px",w:"fit-content",children:[t.jsx(w,{color:x.green.main}),t.jsxs(h,{children:["5 - ",(n[5]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[4],gap:"4px",w:"fit-content",children:[t.jsx(w,{color:x.blue.main}),t.jsxs(h,{children:["4 - ",(n[4]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[3],gap:"4px",w:"fit-content",children:[t.jsx(w,{color:x.orange.main}),t.jsxs(h,{children:["3 - ",(n[3]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[2],gap:"4px",w:"fit-content",children:[t.jsx(w,{color:x.red.main}),t.jsxs(h,{children:["2 - ",(n[2]*100).toFixed(1),"%"]})]})]})]})},ve=r.div.withConfig({componentId:"sc-1p3ekrb-0"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#246655,#46b99b,#46a4b9);background-size:600% 600%;-webkit-animation:AStudentBackground 10s ease infinite;-moz-animation:AStudentBackground 10s ease infinite;animation:AStudentBackground 10s ease infinite;img{filter:drop-shadow(2px 4px 25px black);}@-webkit-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),Ce=r.div.withConfig({componentId:"sc-1p3ekrb-1"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#243766,#4657b9,#46a4b9,#5d46b9);background-size:800% 800%;-webkit-animation:AnimationName 10s ease infinite;-moz-animation:AnimationName 10s ease infinite;animation:AnimationName 10s ease infinite;@-webkit-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),Ie=e=>{if(!e)return"empty";let i=0,n=!1;for(let o=0;o<e.length;o++){const{grade:s}=e[o];if(!s)return"empty";s!=="Отлично"&&s!=="Хорошо"&&s!=="Зачтено"&&(n=!0),s!=="Зачтено"&&s!=="Отлично"&&i++}return n?"empty":i===1?"almost":i>1?"empty":"a-student"},ze=({data:e})=>{const i=Ie(e);return i==="empty"?null:i==="almost"?t.jsxs(Ce,{children:[t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(k,{size:3,align:"left",children:"Почти отличник"}),t.jsx(h,{fontSize:"1rem",children:"В следующий раз повезет"})]}),t.jsx(B,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):t.jsxs(ve,{children:[t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(k,{size:3,align:"left",children:"В этом семестре ты отличник!"}),t.jsx(h,{fontSize:"1rem",children:"Наши поздравления!"})]}),t.jsx(B,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},Be=()=>{const{data:e,preparedData:i,loading:n,error:o}=_.selectors.useData(),{data:{user:s}}=Y.useUser(),g=u.useMemo(()=>se((s==null?void 0:s.course)??0),[s]),[d,$]=u.useState({id:y(new Date().toString(),(s==null?void 0:s.course)??1),title:y(new Date().toString(),(s==null?void 0:s.course)??1).toString()+" семестр"}),[m,P]=u.useState(null),E=(e==null?void 0:e.length)===0&&!n,z=m&&!Object.keys(m??{}).find(a=>(a==null?void 0:a.length)!==0)&&!n,G=`${(d==null?void 0:d.id)!==-1?d==null?void 0:d.id:""}`,A=a=>{_.effects.getFx({semestr:a?`${(a==null?void 0:a.id)!==-1?a==null?void 0:a.id:""}`:G})};return t.jsx(Z,{loading:n,load:A,error:o,data:e,children:t.jsx(ee,{topRightCornerElement:!!(s!=null&&s.id)&&t.jsx(te,{onClick:A,width:"150px",items:g,selected:d,setSelected:$}),children:E||!e?t.jsx(D,{text:"Данных за этот семестр нет, попробуйте другой!"}):t.jsxs(t.Fragment,{children:[!m&&!n&&t.jsx(ze,{data:e}),t.jsx(ne,{whereToSearch:e,searchEngine:oe,setResult:P,placeholder:"Поиск предметов",loadingOnType:!0}),z&&t.jsx(D,{text:"По данному запросу ничего не найдено",image:t.jsx(L,{})}),!z&&t.jsxs(c,{d:"column",gap:"40px",children:[t.jsx(Se,{data:e,loading:n}),t.jsx(ke,{items:m??i,loading:n})]})]})})})};export{Be as default};
