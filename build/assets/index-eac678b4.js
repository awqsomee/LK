var _=Object.defineProperty,B=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var E=(s,t,e)=>t in s?_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,v=(s,t)=>{for(var e in t||(t={}))P.call(t,e)&&E(s,e,t[e]);if(k)for(var e of k(t))U.call(t,e)&&E(s,e,t[e]);return s},S=(s,t)=>B(s,N(t));var D=(s,t,e)=>new Promise((l,o)=>{var u=a=>{try{f(e.next(a))}catch(i){o(i)}},d=a=>{try{f(e.throw(a))}catch(i){o(i)}},f=a=>a.done?l(a.value):Promise.resolve(a.value).then(u,d);f((e=e.apply(s,t)).next())});import{r as p,j as r,F as W}from"./vendor-3c67dcca.js";import{ae as w,e as z,L as I,I as L,M as R,T as G,l as J,S as O,ac as $,R as q,W as H,J as K,F as Q,af as V}from"./index-838f6833.js";import{g as X}from"./get-method-obstaing-bad4fac3.js";const Y=(s,t,e,l,o)=>D(void 0,null,function*(){e(!0);const u=w(s);try{o?yield t(S(v({},u),{formId:o})):yield t(v({},u)),e(!1),l({completed:!0})}catch(d){e(!1),z.evokePopUpMessage({message:`${d}`,type:"failure",time:3e4})}}),Z=({model:s,getForm:t,successMessage:e,outerForm:l,isAvailableToSend:o=!0,repeatable:u=!0,formId:d,isSpecialField:f})=>{var a,i,m;const{data:n,completed:F}=s.selectors.useForm(),[x,h]=p.useState(!1),[c,C]=p.useState(null),[g,M]=p.useState({}),j=(a=F||!o)!==null&&a!==void 0?a:!1;return p.useEffect(()=>{n&&C(l!=null?l:t(n))},[n]),p.useEffect(()=>{f&&c&&n&&M(X(c.data))},[c]),!c||!C?r.jsx(I,{}):r.jsxs(r.Fragment,{children:[r.jsx(L,S(v({},c),{collapsed:j&&!u,setData:C,specialFieldsNameConfig:g})),r.jsx(R,{title:"Информация по заявке",type:"info",icon:r.jsx(W,{}),visible:j&&!!e,children:e}),(n==null?void 0:n.last_update)&&r.jsxs(G,{size:5,children:["Дата последней отправки: ",J(n.last_update)]}),r.jsx(O,{text:o?"Отправить":"Отправлено",action:()=>Y(c,s.effects.postFormFx,h,s.events.changeCompleted,d),isLoading:x,completed:F,setCompleted:T=>s.events.changeCompleted({completed:T}),buttonSuccessText:"Отправлено",repeatable:u,isDone:j&&!u,isActive:$(c,g)&&((i=(m=c.optionalCheckbox)===null||m===void 0?void 0:m.value)!==null&&i!==void 0?i:!0),popUpFailureMessage:j?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},se=({model:s,getForm:t,successMessage:e,goBack:l,pageAvailability:o,isAvailableToSend:u=!0,repeatable:d=!0,formId:f,isSpecialField:a=!1,title:i})=>{var m;const{data:n,error:F}=s.selectors.useForm(),[x,h]=p.useState(null);if((m=!!o&&!(o!=null&&o.isAvailable))!==null&&m!==void 0&&m){var c;return r.jsx(q,{text:(c=o==null?void 0:o.text)!==null&&c!==void 0?c:"Вам не доступен этот раздел"})}return p.useEffect(()=>{n&&h(t(n))},[n]),r.jsx(H,{load:()=>s.effects.getFormFx(),error:F,data:x,children:r.jsx(K,{children:!!x&&!!h&&r.jsxs(Q,{children:[r.jsx(V,{text:l,visible:!!l}),i&&r.jsx("h2",{children:i}),r.jsx(Z,{model:s,successMessage:e,isAvailableToSend:u,repeatable:d,getForm:t,outerForm:x,formId:f,isSpecialField:a})]})})})};export{se as T};
