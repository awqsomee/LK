var B=Object.defineProperty,E=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,F=(t,e)=>{for(var s in e||(e={}))M.call(e,s)&&g(t,s,e[s]);if(m)for(var s of m(e))P.call(e,s)&&g(t,s,e[s]);return t},v=(t,e)=>E(t,C(e));import{r as a,cM as W,j as n}from"./vendor-00bea631.js";import{$ as x,g as S,s as A,a as T,W as y,B as I,F as L,I as $,S as w,c as G}from"./index-d824e111.js";import{s as H}from"./send-form-4d8662f8.js";import{c as O}from"./create-form-store-40f66aad.js";const R=t=>x.get(`?getPhoneBookData=${t}&token=${S()}`),U=t=>{const e=new FormData;e.set("token",S()),e.set("setPhoneBookData","1");for(const[s,u]of Object.entries(t))e.set(s,u);return x.post("?setPhoneBookData=1",e,{headers:{"Content-Type":"multipart/form-data"}})},i=O({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:R,post:U}}),Q=()=>{const[t,e]=a.useState(null),[s,u]=a.useState(!1),[h,k]=a.useState(!1),{guid:f}=W(),c=s!=null?s:!1,[r,p]=a.useState(f),{data:l,error:D}=i.selectors.useForm(),{data:{dataUserApplication:o}}=A.useApplications();return a.useEffect(()=>{o&&p(f||(o==null?void 0:o.subdivisions[0].guid_staff))},[o]),a.useEffect(()=>{if(l&&r){var d;const j=o==null||(d=o.subdivisions)===null||d===void 0?void 0:d.find(b=>b.guid_staff===r);e(T(l,j))}},[r,l]),a.useEffect(()=>()=>{i.events.clearStore()},[]),r?n.jsx(y,{load:()=>{i.effects.getFormFx(r)},data:o&&l,error:D,children:n.jsx(I,{isDone:c,children:!!t&&n.jsxs(L,{noHeader:!0,children:[n.jsx($,v(F({},t),{collapsed:c,setData:e})),n.jsx(w,{text:c?"Отправлено":"Отправить",action:()=>H(t,i.effects.postFormFx,k,i.events.changeCompleted),isLoading:h,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:G(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}):null};export{Q as default};
