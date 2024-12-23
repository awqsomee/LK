var T=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))P.call(t,o)&&w(e,o,t[o]);if(q)for(var o of q(t))U.call(t,o)&&w(e,o,t[o]);return e},f=(e,t)=>M(e,O(t));import{p as H,e as E,S as W,h as B,f as y,j as s,s as L,r as n,F as G}from"./vendor-31894644.js";import{$,g as I,b as J,cR as K,al as Q,d as V,ai as X,a2 as N,k as Y,W as Z,F as ee,I as te,M as oe,S as se,c as ae,cS as ie}from"./index-0f8b6250.js";const re=()=>$.get("?getRequestHighComfort&token=".concat(I())),le=e=>{const t=new FormData;t.set("token",I()),t.set("postRequestHighComfort","1");for(const[o,i]of Object.entries(e))t.set(o,i);return $.post("?postRequestHighComfort=1",t,{headers:{"Content-Type":"multipart/form-data"}})},z={superiorRoom:null,error:null},ne=()=>({data:y(D).superiorRoom,loading:y(h.pending),error:y(D).error}),ue=H({name:"postSuperiorRoom",sid:"8fhu4k"}),de=E(async e=>{},{name:"postSuperiorRoomFx",sid:"-fra7ot"});W({from:ue,to:de});const h=E(async()=>{try{return(await re()).data}catch(e){throw new Error("Не удалось загрузить раздел")}},{name:"getSuperiorRoomFx",sid:"drkyz"}),D=B(z,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(h,e=>f(l({},e),{error:null})).on(h.doneData,(e,t)=>f(l({},e),{superiorRoom:t})).on(h.failData,(e,t)=>f(l({},e),{error:t.message})).on(J.userGuid,()=>l({},z)),ce={useSuperiorRoom:ne},pe={getSuperiorRoomFx:h},C=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],A=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],me=[{id:0,title:"ул. Бориса Галушкина, д. 9"},{id:1,title:"ул. Михалковская, д. 7, корп. 3"},{id:2,title:"ул. Малая Семеновская, д. 12"}],fe=[{value:!1,title:"Общественная",files:[],maxFiles:10,required:!1,fieldName:"society",checkboxCondition:"straight"},{value:!1,title:"Научная",files:[],maxFiles:10,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:10,required:!1,fieldName:"sport",checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:10,required:!1,fieldName:"creativity",checkboxCondition:"straight"}],he=(e,t)=>{var d,c,v,g,a,r,p,m;const{fio:o,phone:i,email:u}=e,x=(c=(d=t==null?void 0:t.data[3])==null?void 0:d.value)==null?void 0:c.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:o,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:(g=(v=t==null?void 0:t.data[1])==null?void 0:v.value)!=null?g:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:(r=(a=t==null?void 0:t.data[2])==null?void 0:a.value)!=null?r:u,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:(m=(p=t==null?void 0:t.data[3])==null?void 0:p.value)!=null?m:null,fieldName:"address",type:"select",items:me,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:x===0?A:C,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:x===0?A:C,width:"100%",editable:!0,required:!0},{title:"Участие во внеучебной деятельности",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:fe,width:"100%",editable:!0}],alert:s.jsx(s.Fragment,{children:K}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"},{title:"Приказ № 15-АХД от 10.10.2023 (ул. Бориса Галушкина, д. 9)",link:"https://mospolytech.ru/upload/medialibrary/5d3/k1eyzf9xk6x6rgi8hq1l83fcz941ve94/razmer-platy-za-dopuslugu-10102023.PDF",type:"document"}]}},xe=(e,t,o)=>{t(!0);const i=Q(e);try{le(i),t(!1),o(!0)}catch(u){t(!1),V.evokePopUpMessage({message:"Не удалось отправить форму. Ошибка: ".concat(u),type:"failure",time:3e4})}},ve=L.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;align-items:",";justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:e})=>e?"center":"flex-start",({isDone:e})=>e&&"100%"),Fe=()=>{var m,_,F,b,S,k;const[e,t]=n.useState(null),{data:o,error:i}=ce.useSuperiorRoom(),[u,x]=n.useState(0),[d,c]=n.useState(!1),[v,g]=n.useState(!1),a=(m=d||!(o!=null&&o.is_avaliable))!=null?m:!1,{data:{user:r}}=X.useUser();if((r==null?void 0:r.educationForm)!=="Очная")return s.jsx(N,{text:"Данный раздел недоступен для вашей формы обучения"});const p=ie();return Y&&p?s.jsx(N,{text:p}):(n.useEffect(()=>{o&&t(he(o,e))},[o,u]),n.useEffect(()=>{var R,j;e&&x((j=(R=e==null?void 0:e.data[3])==null?void 0:R.value)==null?void 0:j.id)},[(_=e==null?void 0:e.data[3])==null?void 0:_.value]),s.jsx(Z,{load:()=>pe.getSuperiorRoomFx(),loading:!o,error:i,data:o,children:s.jsx(ve,{isDone:a,children:!!e&&!!t&&s.jsxs(ee,{children:[s.jsx(te,f(l({},e),{collapsed:a,setData:t})),s.jsxs(oe,{title:"Информация по заявке",type:"info",icon:s.jsx(G,{}),visible:a,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",((F=e.data)==null?void 0:F[2]).value]}),s.jsx(se,{text:o!=null&&o.is_avaliable?"Отправить":"Отправлено",action:()=>xe(e,g,c),isLoading:v,completed:d,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:ae(e)&&((S=(b=e.optionalCheckbox)==null?void 0:b.value)!=null?S:!0),popUpFailureMessage:a?(k=o==null?void 0:o.error_text)!=null?k:"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{Fe as default};
