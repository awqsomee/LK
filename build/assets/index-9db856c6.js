import{r as n,j as e,F as E}from"./vendor-905eebdf.js";import{N as g,I as D,M,h as N,l as T,S as k,c as B,Y as I,W as L,U,F as W,a4 as z}from"./index-fb4b93f1.js";import{s as P}from"./send-form-75b6e0f4.js";import{g as _}from"./get-method-obstaing-c0726de9.js";const G=({model:r,getForm:f,successMessage:x,outerForm:d,isAvailableToSend:t=!0,repeatable:a=!0,formId:F,isSpecialField:i})=>{var h;const{data:o,completed:u}=r.selectors.useForm(),[m,l]=n.useState(!1),[s,c]=n.useState(null),[j,S]=n.useState({}),p=(u||!t)??!1;return n.useEffect(()=>{o&&c(d??f(o))},[o]),n.useEffect(()=>{i&&s&&o&&S(_(s.data))},[s]),!s||!c?e.jsx(g,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{...s,collapsed:p&&!a,setData:c,specialFieldsNameConfig:j}),e.jsx(M,{title:"Информация по заявке",type:"info",icon:e.jsx(E,{}),visible:p&&!!x,children:x}),(o==null?void 0:o.last_update)&&e.jsxs(N,{size:5,children:["Дата последней отправки: ",T(o.last_update)]}),e.jsx(k,{text:t?"Отправить":"Отправлено",action:()=>P(s,r.effects.postFormFx,l,r.events.changeCompleted,F),isLoading:m,completed:u,setCompleted:C=>r.events.changeCompleted({completed:C}),buttonSuccessText:"Отправлено",repeatable:a,isDone:p&&!a,isActive:B(s,j)&&(((h=s.optionalCheckbox)==null?void 0:h.value)??!0),popUpFailureMessage:p?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},w=({model:r,getForm:f,successMessage:x,goBack:d,pageAvailability:t,isAvailableToSend:a=!0,repeatable:F=!0,formId:i,isSpecialField:o=!1,title:u})=>{const{data:m,error:l}=r.selectors.useForm(),[s,c]=n.useState(null);return(!!t&&!(t!=null&&t.isAvailable))??!1?e.jsx(I,{text:(t==null?void 0:t.text)??"Вам не доступен этот раздел"}):(n.useEffect(()=>{m&&c(f(m))},[m]),e.jsx(L,{load:()=>r.effects.getFormFx(),error:l,data:s,children:e.jsx(U,{children:!!s&&!!c&&e.jsxs(W,{children:[e.jsx(z,{text:d,visible:!!d}),u&&e.jsx("h2",{children:u}),e.jsx(G,{model:r,successMessage:x,isAvailableToSend:a,repeatable:F,getForm:f,outerForm:s,formId:i,isSpecialField:o})]})})}))};export{w as T};
