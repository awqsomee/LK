var D=Object.defineProperty,_=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var g=(e,s,t)=>s in e?D(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,k=(e,s)=>{for(var t in s||(s={}))L.call(s,t)&&g(e,t,s[t]);if(S)for(var t of S(s))M.call(s,t)&&g(e,t,s[t]);return e},E=(e,s)=>_(e,z(s));import{r as l,j as o,F as N}from"./vendor-60fdf703.js";import{aZ as W,bA as I,f as P,T as U,z as b,h as G,bB as O,Y as R,W as Y,j as Z,b1 as q,k as w}from"./index-aa7cb4ff.js";import{s as H}from"./send-form-730d59b7.js";import{g as J}from"./get-method-obstaing-bad4fac3.js";const K=({model:e,getForm:s,successMessage:t,outerForm:i,isAvailableToSend:a=!0,repeatable:d=!0,formId:j,isSpecialField:h})=>{var f,u,c;const{data:r,completed:p}=e.selectors.useForm(),[m,x]=l.useState(!1),[n,v]=l.useState(null),[C,T]=l.useState({}),F=(f=p||!a)!==null&&f!==void 0?f:!1;return l.useEffect(()=>{r&&v(i!=null?i:s(r))},[r]),l.useEffect(()=>{h&&n&&r&&T(J(n.data))},[n]),!n||!v?o.jsx(W,{}):o.jsxs(o.Fragment,{children:[o.jsx(I,E(k({},n),{collapsed:F&&!d,setData:v,specialFieldsNameConfig:C})),o.jsx(P,{title:"Информация по заявке",type:"info",icon:o.jsx(N,{}),visible:F&&!!t,children:t}),(r==null?void 0:r.last_update)&&o.jsxs(U,{size:5,children:["Дата последней отправки: ",b(r.last_update)]}),o.jsx(G,{text:a?"Отправить":"Отправлено",action:()=>H(n,e.effects.postFormFx,x,e.events.changeCompleted,j),isLoading:m,completed:p,setCompleted:B=>e.events.changeCompleted({completed:B}),buttonSuccessText:"Отправлено",repeatable:d,isDone:F&&!d,isActive:O(n,C)&&((u=(c=n.optionalCheckbox)===null||c===void 0?void 0:c.value)!==null&&u!==void 0?u:!0),popUpFailureMessage:F?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},y=({model:e,getForm:s,successMessage:t,goBack:i,pageAvailability:a,isAvailableToSend:d=!0,repeatable:j=!0,formId:h,isSpecialField:f=!1,title:u})=>{var c;const{data:r,error:p}=e.selectors.useForm(),[m,x]=l.useState(null);if((c=!!a&&!(a!=null&&a.isAvailable))!==null&&c!==void 0&&c){var n;return o.jsx(R,{text:(n=a==null?void 0:a.text)!==null&&n!==void 0?n:"Вам не доступен этот раздел"})}return l.useEffect(()=>{r&&x(s(r))},[r]),o.jsx(Y,{load:()=>e.effects.getFormFx(),error:p,data:m,children:o.jsx(Z,{children:!!m&&!!x&&o.jsxs(q,{children:[o.jsx(w,{text:i,visible:!!i}),u&&o.jsx("h2",{children:u}),o.jsx(K,{model:e,successMessage:t,isAvailableToSend:d,repeatable:j,getForm:s,outerForm:m,formId:h,isSpecialField:f})]})})})};export{y as T};
