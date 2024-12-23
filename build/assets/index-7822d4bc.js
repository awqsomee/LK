var M=Object.defineProperty,O=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var N=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&N(e,o,t[o]);if(w)for(var o of w(t))H.call(t,o)&&N(e,o,t[o]);return e},v=(e,t)=>O(e,P(t));var y=(e,t,o)=>new Promise((i,l)=>{var c=s=>{try{r(o.next(s))}catch(n){l(n)}},d=s=>{try{r(o.throw(s))}catch(n){l(n)}},r=s=>s.done?i(s.value):Promise.resolve(s.value).then(c,d);r((o=o.apply(e,t)).next())});import{p as W,e as $,S as B,h as L,f as _,j as a,s as G,r as f,F as J}from"./vendor-d78621d5.js";import{$ as I,g as T,b as K,cR as Q,al as V,d as X,ai as Y,a2 as z,k as Z,W as ee,F as te,I as oe,M as se,S as ae,c as ie,cS as re}from"./index-9478e959.js";const le=()=>I.get(`?getRequestHighComfort&token=${T()}`),ne=e=>{const t=new FormData;t.set("token",T()),t.set("postRequestHighComfort","1");for(const[o,i]of Object.entries(e))t.set(o,i);return I.post("?postRequestHighComfort=1",t,{headers:{"Content-Type":"multipart/form-data"}})},D={superiorRoom:null,error:null},ue=()=>({data:_(C).superiorRoom,loading:_(g.pending),error:_(C).error}),de=W({name:"postSuperiorRoom",sid:"8fhu4k"}),ce=$(e=>y(void 0,null,function*(){}),{name:"postSuperiorRoomFx",sid:"-fra7ot"});B({from:de,to:ce});const g=$(()=>y(void 0,null,function*(){try{return(yield le()).data}catch(e){throw new Error("Не удалось загрузить раздел")}}),{name:"getSuperiorRoomFx",sid:"drkyz"}),C=L(D,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(g,e=>v(m({},e),{error:null})).on(g.doneData,(e,t)=>v(m({},e),{superiorRoom:t})).on(g.failData,(e,t)=>v(m({},e),{error:t.message})).on(K.userGuid,()=>m({},D)),pe={useSuperiorRoom:ue},me={getSuperiorRoomFx:g},A=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],E=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],fe=[{id:0,title:"ул. Бориса Галушкина, д. 9"},{id:1,title:"ул. Михалковская, д. 7, корп. 3"},{id:2,title:"ул. Малая Семеновская, д. 12"}],he=[{value:!1,title:"Общественная",files:[],maxFiles:10,required:!1,fieldName:"society",checkboxCondition:"straight"},{value:!1,title:"Научная",files:[],maxFiles:10,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:10,required:!1,fieldName:"sport",checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:10,required:!1,fieldName:"creativity",checkboxCondition:"straight"}],xe=(e,t)=>{var d,r,s,n,u,p,h,x;const{fio:o,phone:i,email:l}=e,c=(r=(d=t==null?void 0:t.data[3])==null?void 0:d.value)==null?void 0:r.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:o,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:(n=(s=t==null?void 0:t.data[1])==null?void 0:s.value)!=null?n:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:(p=(u=t==null?void 0:t.data[2])==null?void 0:u.value)!=null?p:l,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:(x=(h=t==null?void 0:t.data[3])==null?void 0:h.value)!=null?x:null,fieldName:"address",type:"select",items:fe,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:c===0?E:A,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:c===0?E:A,width:"100%",editable:!0,required:!0},{title:"Участие во внеучебной деятельности",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:he,width:"100%",editable:!0}],alert:a.jsx(a.Fragment,{children:Q}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"},{title:"Приказ № 15-АХД от 10.10.2023 (ул. Бориса Галушкина, д. 9)",link:"https://mospolytech.ru/upload/medialibrary/5d3/k1eyzf9xk6x6rgi8hq1l83fcz941ve94/razmer-platy-za-dopuslugu-10102023.PDF",type:"document"}]}},ve=(e,t,o)=>{t(!0);const i=V(e);try{ne(i),t(!1),o(!0)}catch(l){t(!1),X.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${l}`,type:"failure",time:3e4})}},ge=G.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;align-items:",";justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:e})=>e?"center":"flex-start",({isDone:e})=>e&&"100%"),be=()=>{var x,F,b,S,k,R;const[e,t]=f.useState(null),{data:o,error:i}=pe.useSuperiorRoom(),[l,c]=f.useState(0),[d,r]=f.useState(!1),[s,n]=f.useState(!1),u=(x=d||!(o!=null&&o.is_avaliable))!=null?x:!1,{data:{user:p}}=Y.useUser();if((p==null?void 0:p.educationForm)!=="Очная")return a.jsx(z,{text:"Данный раздел недоступен для вашей формы обучения"});const h=re();return Z&&h?a.jsx(z,{text:h}):(f.useEffect(()=>{o&&t(xe(o,e))},[o,l]),f.useEffect(()=>{var j,q;e&&c((q=(j=e==null?void 0:e.data[3])==null?void 0:j.value)==null?void 0:q.id)},[(F=e==null?void 0:e.data[3])==null?void 0:F.value]),a.jsx(ee,{load:()=>me.getSuperiorRoomFx(),loading:!o,error:i,data:o,children:a.jsx(ge,{isDone:u,children:!!e&&!!t&&a.jsxs(te,{children:[a.jsx(oe,v(m({},e),{collapsed:u,setData:t})),a.jsxs(se,{title:"Информация по заявке",type:"info",icon:a.jsx(J,{}),visible:u,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",((b=e.data)==null?void 0:b[2]).value]}),a.jsx(ae,{text:o!=null&&o.is_avaliable?"Отправить":"Отправлено",action:()=>ve(e,n,r),isLoading:s,completed:d,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:ie(e)&&((k=(S=e.optionalCheckbox)==null?void 0:S.value)!=null?k:!0),popUpFailureMessage:u?(R=o==null?void 0:o.error_text)!=null?R:"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{be as default};
