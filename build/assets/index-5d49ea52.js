import{p as z,e as q,S as D,h as C,f as h,j as s,s as A,r,F as E}from"./vendor-0d3de025.js";import{$ as w,g as N,b as $,cR as I,al as T,d as M,ai as O,a2 as b,k as P,W as U,F as H,I as W,M as B,S as L,c as G,cS as J}from"./index-1027833d.js";const K=()=>w.get(`?getRequestHighComfort&token=${N()}`),Q=e=>{const t=new FormData;t.set("token",N()),t.set("postRequestHighComfort","1");for(const[o,i]of Object.entries(e))t.set(o,i);return w.post("?postRequestHighComfort=1",t,{headers:{"Content-Type":"multipart/form-data"}})},S={superiorRoom:null,error:null},V=()=>({data:h(k).superiorRoom,loading:h(d.pending),error:h(k).error}),X=z({name:"postSuperiorRoom",sid:"8fhu4k"}),Y=q(async e=>{},{name:"postSuperiorRoomFx",sid:"-fra7ot"});D({from:X,to:Y});const d=q(async()=>{try{return(await K()).data}catch{throw new Error("Не удалось загрузить раздел")}},{name:"getSuperiorRoomFx",sid:"drkyz"}),k=C(S,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(d,e=>({...e,error:null})).on(d.doneData,(e,t)=>({...e,superiorRoom:t})).on(d.failData,(e,t)=>({...e,error:t.message})).on($.userGuid,()=>({...S})),Z={useSuperiorRoom:V},ee={getSuperiorRoomFx:d},R=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],j=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],te=[{id:0,title:"ул. Бориса Галушкина, д. 9"},{id:1,title:"ул. Михалковская, д. 7, корп. 3"},{id:2,title:"ул. Малая Семеновская, д. 12"}],oe=[{value:!1,title:"Общественная",files:[],maxFiles:10,required:!1,fieldName:"society",checkboxCondition:"straight"},{value:!1,title:"Научная",files:[],maxFiles:10,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:10,required:!1,fieldName:"sport",checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:10,required:!1,fieldName:"creativity",checkboxCondition:"straight"}],se=(e,t)=>{var n,u,p,m,a;const{fio:o,phone:i,email:l}=e,c=(u=(n=t==null?void 0:t.data[3])==null?void 0:n.value)==null?void 0:u.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:o,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:((p=t==null?void 0:t.data[1])==null?void 0:p.value)??i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:((m=t==null?void 0:t.data[2])==null?void 0:m.value)??l,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:((a=t==null?void 0:t.data[3])==null?void 0:a.value)??null,fieldName:"address",type:"select",items:te,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:c===0?j:R,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:c===0?j:R,width:"100%",editable:!0,required:!0},{title:"Участие во внеучебной деятельности",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:oe,width:"100%",editable:!0}],alert:s.jsx(s.Fragment,{children:I}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"},{title:"Приказ № 15-АХД от 10.10.2023 (ул. Бориса Галушкина, д. 9)",link:"https://mospolytech.ru/upload/medialibrary/5d3/k1eyzf9xk6x6rgi8hq1l83fcz941ve94/razmer-platy-za-dopuslugu-10102023.PDF",type:"document"}]}},ae=(e,t,o)=>{t(!0);const i=T(e);try{Q(i),t(!1),o(!0)}catch(l){t(!1),M.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${l}`,type:"failure",time:3e4})}},ie=A.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;align-items:",";justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:e})=>e?"center":"flex-start",({isDone:e})=>e&&"100%"),ne=()=>{var v,g,y;const[e,t]=r.useState(null),{data:o,error:i}=Z.useSuperiorRoom(),[l,c]=r.useState(0),[n,u]=r.useState(!1),[p,m]=r.useState(!1),a=(n||!(o!=null&&o.is_avaliable))??!1,{data:{user:f}}=O.useUser();if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(b,{text:"Данный раздел недоступен для вашей формы обучения"});const x=J();return P&&x?s.jsx(b,{text:x}):(r.useEffect(()=>{o&&t(se(o,e))},[o,l]),r.useEffect(()=>{var _,F;e&&c((F=(_=e==null?void 0:e.data[3])==null?void 0:_.value)==null?void 0:F.id)},[(v=e==null?void 0:e.data[3])==null?void 0:v.value]),s.jsx(U,{load:()=>ee.getSuperiorRoomFx(),loading:!o,error:i,data:o,children:s.jsx(ie,{isDone:a,children:!!e&&!!t&&s.jsxs(H,{children:[s.jsx(W,{...e,collapsed:a,setData:t}),s.jsxs(B,{title:"Информация по заявке",type:"info",icon:s.jsx(E,{}),visible:a,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",((g=e.data)==null?void 0:g[2]).value]}),s.jsx(L,{text:o!=null&&o.is_avaliable?"Отправить":"Отправлено",action:()=>ae(e,m,u),isLoading:p,completed:n,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:G(e)&&(((y=e.optionalCheckbox)==null?void 0:y.value)??!0),popUpFailureMessage:a?(o==null?void 0:o.error_text)??"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{ne as default};
