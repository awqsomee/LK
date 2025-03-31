var S=Object.defineProperty,$=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var v=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))j.call(t,s)&&v(e,s,t[s]);if(h)for(var s of h(t))B.call(t,s)&&v(e,s,t[s]);return e},w=(e,t)=>$(e,D(t));import{r,cG as C,j as m}from"./vendor-fdf02817.js";import{al as g,am as k,bz as q,bA as x,bx as E,W as P,b1 as A,b2 as W,bB as L,h as M,bC as T}from"./index-2172af78.js";import{s as G}from"./send-form-44f8daf5.js";import{c as I}from"./create-form-store-2e81b270.js";const z=e=>g.get(`?getPhoneBookData=${e}&token=${k()}`),H=e=>{const t=new FormData;t.set("token",k()),t.set("setPhoneBookData","1");for(const[s,l]of Object.entries(e))t.set(s,l);return g.post("?setPhoneBookData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},_=I({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:z,post:H}}),O=(e,t)=>{var s,l,u,n,i,a;return{title:"Актуализируйте контактные данные",data:[{fieldName:"guid_staff",title:"Подразделение/должность",value:t.guid_staff,width:"100",required:!0,type:"text",visible:!1},{fieldName:"",title:`${t.subdivision} (${t.post})`,value:`${t.subdivision} (${t.post})`,width:"100",required:!0,type:"text-header",visible:!0},{fieldName:"site",title:"Адрес рабочего места",type:"select",value:q(x,e.site),items:x,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер кабинета",type:"cabinet",mask:!0,value:e.aud_number,editable:!0,required:!0},{fieldName:"email_staff",title:"Корпоративная электронная почта",type:"email",value:e.email_staff,required:!0},{title:"Показывать рабочий email внутри Личного кабинета",fieldName:"show_email_inner",type:"checkbox",value:(s=e.show_email_inner)!==null&&s!==void 0?s:!0},{title:"Показывать рабочий email на сайте",fieldName:"show_email_outer",type:"checkbox",value:(l=e.show_email_outer)!==null&&l!==void 0?l:!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Показывать служебный мобильный телефон внутри Личного кабинета",fieldName:"show_tel_mob_staff_inner",type:"checkbox",value:(u=e.show_tel_mob_staff_inner)!==null&&u!==void 0?u:!0},{title:"Показывать служебный мобильный телефон на сайте",fieldName:"show_tel_mob_staff_outer",type:"checkbox",value:(n=e.show_tel_mob_staff_outer)!==null&&n!==void 0?n:!0},{title:"Внутренний телефон",type:"innerPhone",value:e==null?void 0:e.tel_staff,mask:!0,fieldName:"tel_staff",minValueLength:4},{title:"Показывать внутренний телефон внутри Личного кабинета",fieldName:"show_tel_staff_inner",type:"checkbox",value:(i=e.show_tel_staff_inner)!==null&&i!==void 0?i:!0},{title:"Показывать внутренний телефон на сайте",fieldName:"show_tel_staff_outer",type:"checkbox",value:(a=e.show_tel_staff_outer)!==null&&a!==void 0?a:!0}]}},Q=()=>{const[e,t]=r.useState(null),[s,l]=r.useState(!1),[u,n]=r.useState(!1),{guid:i}=C(),a=s!=null?s:!1,[f,p]=r.useState(i),{data:d,error:y}=_.selectors.useForm(),{data:{dataUserApplication:o}}=E.useApplications();return r.useEffect(()=>{o&&p(i||(o==null?void 0:o.subdivisions[0].guid_staff))},[o]),r.useEffect(()=>{if(d&&f){var c;const F=o==null||(c=o.subdivisions)===null||c===void 0?void 0:c.find(N=>N.guid_staff===f);t(O(d,F))}},[f,d]),r.useEffect(()=>()=>{_.events.clearStore()},[]),f?m.jsx(P,{load:()=>{_.effects.getFormFx(f)},data:o&&d,error:y,children:m.jsx(A,{isDone:a,children:!!e&&m.jsxs(W,{noHeader:!0,children:[m.jsx(L,w(b({},e),{collapsed:a,setData:t})),m.jsx(M,{text:a?"Отправлено":"Отправить",action:()=>G(e,_.effects.postFormFx,n,_.events.changeCompleted),isLoading:u,completed:s,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:T(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}):null};export{Q as default};
