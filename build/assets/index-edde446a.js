var P=Object.defineProperty,U=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var D=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&D(t,o,e[o]);if($)for(var o of $(e))W.call(e,o)&&D(t,o,e[o]);return t},f=(t,e)=>U(t,H(e));var b=(t,e,o)=>new Promise((r,s)=>{var d=l=>{try{i(o.next(l))}catch(a){s(a)}},u=l=>{try{i(o.throw(l))}catch(a){s(a)}},i=l=>l.done?r(l.value):Promise.resolve(l.value).then(d,u);i((o=o.apply(t,e)).next())});import{p as B,e as z,bF as L,h as Q,l as F,j as n,s as G,r as m,F as Y}from"./vendor-60fdf703.js";import{ak as A,al as E,o as J,dQ as K,dR as V,d0 as X,aQ as Z,s as ee,Y as j,ch as te,W as oe,b1 as ie,bA as ae,f as le,h as re,bB as se}from"./index-040a4e16.js";const ne=()=>A.get(`?getRequestHighComfort&token=${E()}`),de=t=>{const e=new FormData;e.set("token",E()),e.set("postRequestHighComfort","1");for(const[o,r]of Object.entries(t))e.set(o,r);return A.post("?postRequestHighComfort=1",e,{headers:{"Content-Type":"multipart/form-data"}})},w={superiorRoom:null,error:null},ue=()=>({data:F(q).superiorRoom,loading:F(h.pending),error:F(q).error}),ce=B({name:"postSuperiorRoom",sid:"8fhu4k"}),pe=z(t=>b(void 0,null,function*(){}),{name:"postSuperiorRoomFx",sid:"-fra7ot"});L({from:ce,to:pe});const h=z(()=>b(void 0,null,function*(){try{return(yield ne()).data}catch(t){throw new Error("Не удалось загрузить раздел")}}),{name:"getSuperiorRoomFx",sid:"drkyz"}),q=Q(w,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(h,t=>f(p({},t),{error:null})).on(h.doneData,(t,e)=>f(p({},t),{superiorRoom:e})).on(h.failData,(t,e)=>f(p({},t),{error:e.message})).on(J.userGuid,()=>p({},w)),me={useSuperiorRoom:ue},ve={getSuperiorRoomFx:h},T="Подача заявок открыта с 12:00 26 июня до 12:00 28 июня!",fe=t=>{const e=new Date;return e<new Date(K)?T:e>new Date(V)?"Подача заявок закрыта":""},C=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],N=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],he=[{id:0,title:"ул. Бориса Галушкина, д. 9"},{id:1,title:"ул. Михалковская, д. 7, корп. 3"},{id:2,title:"ул. Малая Семеновская, д. 12"}],xe=[{value:!1,title:"Общественная",files:[],maxFiles:10,required:!1,fieldName:"society",checkboxCondition:"straight"},{value:!1,title:"Научная",files:[],maxFiles:10,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:10,required:!1,fieldName:"sport",checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:10,required:!1,fieldName:"creativity",checkboxCondition:"straight"}],_e=(t,e)=>{var o,r,s,d,u,i,l;const{fio:a,phone:_,email:g}=t,x=e==null||(o=e.data[3])===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:a,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:(r=e==null||(s=e.data[1])===null||s===void 0?void 0:s.value)!==null&&r!==void 0?r:_,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:(d=e==null||(u=e.data[2])===null||u===void 0?void 0:u.value)!==null&&d!==void 0?d:g,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:(i=e==null||(l=e.data[3])===null||l===void 0?void 0:l.value)!==null&&i!==void 0?i:null,fieldName:"address",type:"select",items:he,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:x===0?N:C,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:x===0?N:C,width:"100%",editable:!0,required:!0},{title:"Участие во внеучебной деятельности",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:xe,width:"100%",editable:!0}],alert:n.jsx(n.Fragment,{children:T}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"},{title:"Приказ № 15-АХД от 10.10.2023 (ул. Бориса Галушкина, д. 9)",link:"https://mospolytech.ru/upload/medialibrary/5d3/k1eyzf9xk6x6rgi8hq1l83fcz941ve94/razmer-platy-za-dopuslugu-10102023.PDF",type:"document"}]}},ge=(t,e,o)=>{e(!0);const r=X(t);try{de(r),e(!1),o(!0)}catch(s){e(!1),Z.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${s}`,type:"failure",time:3e4})}},ye=G.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;align-items:",";justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:t})=>t?"center":"flex-start",({isDone:t})=>t&&"100%"),ke=()=>{var t,e,o,r,s,d,u;const[i,l]=m.useState(null),{data:a,error:_}=me.useSuperiorRoom(),[g,x]=m.useState(0),[S,k]=m.useState(!1),[I,O]=m.useState(!1),v=(t=S||!(a!=null&&a.is_avaliable))!==null&&t!==void 0?t:!1,{data:{user:y}}=ee.useUser();if((y==null?void 0:y.educationForm)!=="Очная")return n.jsx(j,{text:"Данный раздел недоступен для вашей формы обучения"});const R=fe();return te&&R?n.jsx(j,{text:R}):(m.useEffect(()=>{a&&l(_e(a,i))},[a,g]),m.useEffect(()=>{if(i){var c;x(i==null||(c=i.data[3])===null||c===void 0||(c=c.value)===null||c===void 0?void 0:c.id)}},[i==null||(e=i.data[3])===null||e===void 0?void 0:e.value]),n.jsx(oe,{load:()=>ve.getSuperiorRoomFx(),loading:!a,error:_,data:a,children:n.jsx(ye,{isDone:v,children:!!i&&!!l&&n.jsxs(ie,{children:[n.jsx(ae,f(p({},i),{collapsed:v,setData:l})),n.jsxs(le,{title:"Информация по заявке",type:"info",icon:n.jsx(Y,{}),visible:v,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",(o=((r=i.data)===null||r===void 0?void 0:r[2]).value)===null||o===void 0?void 0:o.toString()]}),n.jsx(re,{text:a!=null&&a.is_avaliable?"Отправить":"Отправлено",action:()=>ge(i,O,k),isLoading:I,completed:S,setCompleted:k,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:se(i)&&((s=(d=i.optionalCheckbox)===null||d===void 0?void 0:d.value)!==null&&s!==void 0?s:!0),popUpFailureMessage:v?(u=a==null?void 0:a.error_text)!==null&&u!==void 0?u:"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{ke as default};
