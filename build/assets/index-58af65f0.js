import{r as n,j as e,F as E}from"./vendor-561dac3a.js";import{R as T,I as g,M as D,T as M,m as k,S as B,b as I,a0 as L,W as N,X as W,F as z,a1 as P}from"./index-da3e5de5.js";import{s as R}from"./send-form-965ec291.js";import{g as U}from"./get-method-obstaing-c0726de9.js";const _=({model:r,getForm:f,successMessage:x,outerForm:d,isAvailableToSend:t=!0,repeatable:a=!0,formId:F,isSpecialField:i})=>{var h;const{data:o,completed:u}=r.selectors.useForm(),[m,l]=n.useState(!1),[s,c]=n.useState(null),[j,S]=n.useState({}),p=(u||!t)??!1;return n.useEffect(()=>{o&&c(d??f(o))},[o]),n.useEffect(()=>{i&&s&&o&&S(U(s.data))},[s]),!s||!c?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsx(g,{...s,collapsed:p&&!a,setData:c,specialFieldsNameConfig:j}),e.jsx(D,{title:"Информация по заявке",type:"info",icon:e.jsx(E,{}),visible:p&&!!x,children:x}),(o==null?void 0:o.last_update)&&e.jsxs(M,{size:5,children:["Дата последней отправки: ",k(o.last_update)]}),e.jsx(B,{text:t?"Отправить":"Отправлено",action:()=>R(s,r.effects.postFormFx,l,r.events.changeCompleted,F),isLoading:m,completed:u,setCompleted:C=>r.events.changeCompleted({completed:C}),buttonSuccessText:"Отправлено",repeatable:a,isDone:p&&!a,isActive:I(s,j)&&(((h=s.optionalCheckbox)==null?void 0:h.value)??!0),popUpFailureMessage:p?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},w=({model:r,getForm:f,successMessage:x,goBack:d,pageAvailability:t,isAvailableToSend:a=!0,repeatable:F=!0,formId:i,isSpecialField:o=!1,title:u})=>{const{data:m,error:l}=r.selectors.useForm(),[s,c]=n.useState(null);return(!!t&&!(t!=null&&t.isAvailable))??!1?e.jsx(L,{text:(t==null?void 0:t.text)??"Вам не доступен этот раздел"}):(n.useEffect(()=>{m&&c(f(m))},[m]),e.jsx(N,{load:()=>r.effects.getFormFx(),error:l,data:s,children:e.jsx(W,{children:!!s&&!!c&&e.jsxs(z,{children:[e.jsx(P,{text:d,visible:!!d}),u&&e.jsx("h2",{children:u}),e.jsx(_,{model:r,successMessage:x,isAvailableToSend:a,repeatable:F,getForm:f,outerForm:s,formId:i,isSpecialField:o})]})})}))};export{w as T};
