var B=(e,i,n)=>new Promise((r,s)=>{var o=p=>{try{d(n.next(p))}catch(c){s(c)}},b=p=>{try{d(n.throw(p))}catch(c){s(c)}},d=p=>p.done?r(p.value):Promise.resolve(p.value).then(o,b);d((n=n.apply(e,i)).next())});import{s as l,j as t,du as H,dv as V,r as f,R as X,dw as K}from"./vendor-8a1e4858.js";import{as as J,at as Z,a2 as g,V as D,dV as v,dW as A,R as Q,f as u,ai as ee,dX as te,S as j,aw as ne,dY as ie,T as y,K as h,bh as re,D as se,aN as I,a6 as P,au as oe,X as m,dZ as O,s as ae,W as de,P as ce,w as le,a4 as E,z as ue}from"./index-4256834b.js";const pe=i=>B(void 0,[i],function*({semestr:e}){var n;return(n=yield J.get(`?getAcademicPerformance&semestr=${e}&token=${Z()}`))===null||n===void 0||(n=n.data)===null||n===void 0?void 0:n.academicPerformance}),C=(e,i)=>{const n=new Date(e).getMonth();return n>1&&n<8?+i*2:+i*2-1},xe=e=>{const i=C(new Date().toISOString(),e),n=[];for(let r=1;r<=i;r++)n.push({id:r,title:`${r} семестр`});return n.push({id:-1,title:"Все семестры"}),n};function $(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}function W(e,i){const n=e+Math.floor((i-1)/2);return`${n}/${n+1}`}function ge(e,i,n){return n===-1?e.filter(r=>(r==null?void 0:r.year)===W(i,Number(r.semestr))):e==null?void 0:e.filter(r=>(r==null?void 0:r.year)===W(i,n))}const he=(e,i)=>$(i.filter(n=>g(n.name).includes(g(e))||g(n.teacher).includes(g(e))||g(D(n.exam_date)).includes(g(e))||g(n.bill_num).includes(g(e)))),z=(e,i)=>{if(e){var n;return i?v[e]||v.default:((n=v[e])===null||n===void 0?void 0:n.main)||v.default.main}else return"var(--grey)"},me=e=>e.split(" ").reduce((i,n,r)=>(r===0?i.push(n):i.push(`${n[0]}.`),i),[]).join(" "),fe=l.div.withConfig({componentId:"sc-1mqkodv-0"})(["display:flex;align-items:center;justify-content:center;color:",";width:",";height:22px;min-width:22px;min-height:22px;border-radius:50%;svg{width:100%;height:100%;}"],({grade:e})=>z(e),({superWide:e})=>e?"105px":"22px"),je=({grade:e})=>t.jsx(fe,{grade:e,superWide:e==="Не явился",children:e==="Не явился"?e:e&&(A[e]>2?t.jsx(H,{}):t.jsx(V,{}))}),be=l.div.withConfig({componentId:"sc-blq100-0"})(["width:100%;display:flex;min-height:60px;align-items:center;justify-content:space-between;padding:15px 0;box-sizing:border-box;cursor:pointer;opacity:",";"],({isGraded:e})=>e?1:.4),ve=l.div.withConfig({componentId:"sc-blq100-1"})(["display:flex;margin-right:10px;font-weight:500;hyphens:auto;@media (max-width:1000px){min-width:0px;}"]),ke=l.strong.withConfig({componentId:"sc-blq100-2"})(["color:",";font-weight:600;width:",";display:flex;justify-content:flex-end;"],({color:e})=>e,({superWide:e})=>e?"105px":"30px"),we=({item:e,type:i})=>{const{open:n}=Q(),{name:r,grade:s}=e,o=z(s),b=()=>e.grade&&n(t.jsx(Ce,{item:e,color:z(s,!0)}));return t.jsxs(be,{onClick:b,isGraded:!!e.grade,children:[t.jsxs(u,{gap:"16px",children:[t.jsx(ee,{color:o,borderRadius:"9px",children:te(r)}),t.jsxs(u,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(ve,{children:r}),t.jsx(j,{children:t.jsx(ne,{words:[me(e.teacher),D(e.exam_date)]})})]})]}),t.jsx(ke,{color:o,superWide:s==="Не явился",children:i==="Зачет"?t.jsx(je,{grade:s}):s==="Не явился"?"Не явился":s&&A[s]})]})},Se=l.div.withConfig({componentId:"sc-7hxibl-0"})(["width:400px;@media (max-width:800px){width:100%;}"]),ye=l.div.withConfig({componentId:"sc-7hxibl-1"})(["margin:20px 0;"]),Ce=({item:e,color:i})=>t.jsxs(Se,{children:[t.jsx(ie,{subjectName:e.name,color:i,noPadding:!0}),t.jsx(ye,{children:t.jsx(y,{size:3,align:"left",children:e.name})}),t.jsx(h,{keyStr:"Курс",value:e.course}),t.jsx(h,{keyStr:"Форма аттестации",value:e.exam_type}),t.jsx(h,{keyStr:"Дата проведения",value:D(e.exam_date)}),t.jsx(h,{keyStr:"Оценка",value:e.grade}),t.jsx(h,{keyStr:"Номер ведомости",value:e.bill_num}),t.jsx(h,{keyStr:"Семестр",value:C(e.exam_date,+e.course)}),t.jsx(h,{keyStr:"Кафедра",value:e.chair}),t.jsx(h,{keyStr:"Преподаватель",value:t.jsx(re,{id:void 0,type:"staff",name:e.teacher}),direction:"vertical"})]}),Ie=({items:e,type:i})=>t.jsx(t.Fragment,{children:e.map((n,r)=>t.jsxs(X.Fragment,{children:[t.jsx(we,{item:n,type:i}),r!==e.length-1&&t.jsx(se,{margin:"0",width:"100%"})]},n.id))}),ze=f.memo(Ie),De=({items:e,loading:i})=>{var n;return e?i?t.jsxs(u,{d:"column",ai:"flex-start",gap:"12px",children:[t.jsx(I,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(P,{quantity:5,avatarShape:"rect"}),t.jsx(I,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(P,{quantity:10,avatarShape:"rect"})]}):t.jsx(u,{d:"column",gap:"20px",children:(n=Object.keys(e))===null||n===void 0?void 0:n.map(r=>t.jsxs(u,{d:"column",children:[t.jsxs(y,{size:3,align:"left",width:"fit-content",children:[r,t.jsx(j,{children:e[r].length})]}),t.jsx(ze,{items:e[r]||[],type:r,loading:i})]},r))}):null},Ae=f.memo(De),q=oe({api:{get:pe},prepareData:$});function $e(e){const i={5:0,4:0,3:0,2:0},n=e.filter(r=>!!r.grade&&r.exam_type!=="Зачет").length;return e.forEach(({grade:r,exam_type:s})=>{s!=="Зачет"&&r!==void 0&&i[A[r]]++}),n===0?i:Object.keys(i).reduce((r,s)=>(r[+s]=i[+s]/n,r),{})}const _e=l.div.withConfig({componentId:"sc-1gg99m8-0"})(["overflow:hidden;width:100%;display:flex;gap:2px;height:10px;background:var(--block-content);"]),k=l.div.withConfig({componentId:"sc-1gg99m8-1"})(["width:",";height:10px;background:",";display:flex;border-radius:2px;justify-content:center;align-items:center;color:#fff;font-weight:500;display:",";"],({percent:e})=>`calc(${e} * 100%)`,({color:e})=>e,({percent:e})=>e===0&&"none"),w=l(u).withConfig({componentId:"sc-1gg99m8-2"})(["opacity:",";"],({percentage:e})=>e===0&&"0.2"),S=l.div.withConfig({componentId:"sc-1gg99m8-3"})(["min-width:10px;width:10px;height:10px;border-radius:2px;background:",";"],({color:e})=>e),Fe=({data:e,loading:i})=>{if(!e)return null;if(i)return t.jsx(I,{margin:"0",shape:"rect",size:{width:"100%",height:"12px"}});const n=$e(e);return t.jsxs(u,{d:"column",gap:"10px",children:[t.jsxs(_e,{children:[t.jsx(k,{percent:n[5],color:m.green.main}),t.jsx(k,{percent:n[4],color:m.blue.main}),t.jsx(k,{percent:n[3],color:m.orange.main}),t.jsx(k,{percent:n[2],color:m.red.main})]}),t.jsxs(u,{gap:"30px",children:[t.jsxs(w,{percentage:n[5],gap:"4px",w:"fit-content",children:[t.jsx(S,{color:m.green.main}),t.jsxs(j,{children:["5 - ",(n[5]*100).toFixed(1),"%"]})]}),t.jsxs(w,{percentage:n[4],gap:"4px",w:"fit-content",children:[t.jsx(S,{color:m.blue.main}),t.jsxs(j,{children:["4 - ",(n[4]*100).toFixed(1),"%"]})]}),t.jsxs(w,{percentage:n[3],gap:"4px",w:"fit-content",children:[t.jsx(S,{color:m.orange.main}),t.jsxs(j,{children:["3 - ",(n[3]*100).toFixed(1),"%"]})]}),t.jsxs(w,{percentage:n[2],gap:"4px",w:"fit-content",children:[t.jsx(S,{color:m.red.main}),t.jsxs(j,{children:["2 - ",(n[2]*100).toFixed(1),"%"]})]})]})]})},Ne=l.div.withConfig({componentId:"sc-1p3ekrb-0"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#246655,#46b99b,#46a4b9);background-size:600% 600%;-webkit-animation:AStudentBackground 10s ease infinite;-moz-animation:AStudentBackground 10s ease infinite;animation:AStudentBackground 10s ease infinite;img{filter:drop-shadow(2px 4px 25px black);}@-webkit-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),Be=l.div.withConfig({componentId:"sc-1p3ekrb-1"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#243766,#4657b9,#46a4b9,#5d46b9);background-size:800% 800%;-webkit-animation:AnimationName 10s ease infinite;-moz-animation:AnimationName 10s ease infinite;animation:AnimationName 10s ease infinite;@-webkit-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),Pe=e=>{if(!e)return"empty";let i=0,n=!1;for(let r=0;r<e.length;r++){const{grade:s}=e[r];if(!s)return"empty";s!=="Отлично"&&s!=="Хорошо"&&s!=="Зачтено"&&(n=!0),s!=="Зачтено"&&s!=="Отлично"&&i++}return n?"empty":i===1?"almost":i>1?"empty":"a-student"},Oe=({data:e})=>{const i=Pe(e);return i==="empty"?null:i==="almost"?t.jsxs(Be,{children:[t.jsxs(u,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(y,{size:3,align:"left",children:"Почти отличник"}),t.jsx(j,{fontSize:"1rem",children:"В следующий раз повезет"})]}),t.jsx(O,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):t.jsxs(Ne,{children:[t.jsxs(u,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(y,{size:3,align:"left",children:"В этом семестре ты отличник!"}),t.jsx(j,{fontSize:"1rem",children:"Наши поздравления!"})]}),t.jsx(O,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},Me=()=>{var e,i;const{data:n,loading:r,error:s}=q.selectors.useData(),{data:{user:o}}=ae.useUser(),b=f.useMemo(()=>{var a;return xe((a=o==null?void 0:o.course)!==null&&a!==void 0?a:0)},[o]),[d,p]=f.useState({id:C(new Date().toString(),(e=o==null?void 0:o.course)!==null&&e!==void 0?e:1),title:C(new Date().toString(),(i=o==null?void 0:o.course)!==null&&i!==void 0?i:1).toString()+" семестр"}),[c,M]=f.useState(null),_=c&&!Object.keys(c!=null?c:{}).find(a=>(a==null?void 0:a.length)!==0)&&!r,T=`${(d==null?void 0:d.id)!==-1?d==null?void 0:d.id:""}`,F=a=>{q.effects.getFx({semestr:a?`${(a==null?void 0:a.id)!==-1?a==null?void 0:a.id:""}`:T})},[x,L]=f.useState(null),[R,G]=f.useState(null);f.useEffect(()=>{if(o&&n){const a=Number(d==null?void 0:d.id),Y=Number(o==null?void 0:o.enterYear.split("/")[0]),N=ge(n,Y,a);L(N),G($(N))}},[n]);const U=(x==null?void 0:x.length)===0&&!r;return t.jsx(de,{loading:r,load:F,error:s,data:x,children:t.jsx(ce,{topRightCornerElement:!!(o!=null&&o.id)&&t.jsx(le,{onClick:F,width:"150px",items:b,selected:d,setSelected:p}),children:U||!x?t.jsx(E,{text:"Данных за этот семестр нет, попробуйте другой!"}):t.jsxs(t.Fragment,{children:[!c&&!r&&t.jsx(Oe,{data:x}),t.jsx(ue,{whereToSearch:x,searchEngine:he,setResult:M,placeholder:"Поиск предметов",loadingOnType:!0}),_&&t.jsx(E,{text:"По данному запросу ничего не найдено",image:t.jsx(K,{})}),!_&&t.jsxs(u,{d:"column",gap:"40px",children:[t.jsx(Fe,{data:x,loading:r}),t.jsx(Ae,{items:c!=null?c:R,loading:r})]})]})})})};export{Me as default};
