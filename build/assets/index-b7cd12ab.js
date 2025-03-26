var M=Object.defineProperty,U=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&w(t,o,e[o]);if($)for(var o of $(e))H.call(e,o)&&w(t,o,e[o]);return t},b=(t,e)=>U(t,W(e));var S=(t,e,o)=>new Promise((r,n)=>{var a=s=>{try{i(o.next(s))}catch(c){n(c)}},u=s=>{try{i(o.throw(s))}catch(c){n(c)}},i=s=>s.done?r(s.value):Promise.resolve(s.value).then(a,u);i((o=o.apply(t,e)).next())});import{p as L,e as E,bF as P,h as Q,l as R,j as l,s as V,r as f,F as Y,ay as G}from"./vendor-60fdf703.js";import{ak as I,al as z,o as J,dQ as K,dR as X,d0 as Z,aQ as ee,s as te,Y as q,ch as oe,W as ie,b1 as ae,bA as le,f as re,dS as se,h as ne,bB as de}from"./index-cb5e8a53.js";const ue=()=>I.get(`?getRequestHighComfort&token=${z()}`),ce=t=>{const e=new FormData;e.set("token",z()),e.set("postRequestHighComfort","1");for(const[o,r]of Object.entries(t))e.set(o,r);return I.post("?postRequestHighComfort=1",e,{headers:{"Content-Type":"multipart/form-data"}})},C={superiorRoom:null,error:null},pe=()=>({data:R(D).superiorRoom,loading:R(g.pending),error:R(D).error}),me=L({name:"postSuperiorRoom",sid:"8fhu4k"}),ve=E(t=>S(void 0,null,function*(){}),{name:"postSuperiorRoomFx",sid:"-fra7ot"});P({from:me,to:ve});const g=E(()=>S(void 0,null,function*(){try{return(yield ue()).data}catch(t){throw new Error("Не удалось загрузить раздел")}}),{name:"getSuperiorRoomFx",sid:"drkyz"}),D=Q(C,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(g,t=>b(v({},t),{error:null})).on(g.doneData,(t,e)=>b(v({},t),{superiorRoom:e})).on(g.failData,(t,e)=>b(v({},t),{error:e.message})).on(J.userGuid,()=>v({},C)),fe={useSuperiorRoom:pe},he={getSuperiorRoomFx:g},O="Подача заявок открыта с 12:00 4 марта до 12:00 9 марта!",xe=t=>{const e=new Date;return e<new Date(K)?O:e>new Date(X)?"Подача заявок закрыта":""},_=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],N=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],A=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],T=[{id:2,title:"Трое в комнате"}],be=[{id:"bg",title:"ул. Бориса Галушкина, д. 9"},{id:"m",title:"ул. Михалковская, д. 7, корп. 3"},{id:"ms",title:"ул. Малая Семеновская, д. 12"},{id:"pk",title:"ул. Павла Корчагина, д. 22, к.2"}],ge=[{value:!1,title:"Общественная",files:[],maxFiles:10,required:!0,fieldName:"society",checkboxCondition:"straight"},{value:!1,title:"Научная",files:[],maxFiles:10,required:!0,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:10,required:!0,fieldName:"sport",checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:10,required:!0,fieldName:"creativity",checkboxCondition:"straight"}],ke=(t,e)=>{var o,r,n,a,u,i,s,c,h;const{fio:k,phone:y,email:F}=t,d=e==null||(o=e.data[3])===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o.id,p=e==null||(r=e.data[7])===null||r===void 0?void 0:r.value,x=e==null||(n=e.optionalCheckbox)===null||n===void 0?void 0:n.value;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:k,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:(a=e==null||(u=e.data[1])===null||u===void 0?void 0:u.value)!==null&&a!==void 0?a:y,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:(i=e==null||(s=e.data[2])===null||s===void 0?void 0:s.value)!==null&&i!==void 0?i:F,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:(c=e==null||(h=e.data[3])===null||h===void 0?void 0:h.value)!==null&&c!==void 0?c:null,fieldName:"address",type:"select",items:be,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:d==="bg"?N:d==="pk"?T:d==="ms"?A:_,width:"100%",editable:!!d,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:d==="bg"?N:d==="pk"?T:d==="ms"?A:_,width:"100%",editable:!!d,required:!0},{title:"Участие во внеучебной деятельности",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:ge,width:"100%",editable:!0,required:!1},{title:"Необходимые документы приложены",type:"checkbox",value:!!p,fieldName:"",editable:!0,required:!0}],alert:l.jsx(l.Fragment,{children:O}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:l.jsxs(l.Fragment,{children:["С"," ",l.jsx("a",{href:"https://mospolytech.ru/upload/medialibrary/dcd/aj5km0q67pkjw737j8g5hynmz2dfhlxb/Prikaz-_1564_OD-ot-28.12.2024-Ob-utverzhdenii-razmerov-platy-za-dopolnitelnuyu-uslugu.pdf",target:"_blank",rel:"noreferrer",children:"приказом"})," ","об утверждении размеров платы за дополнительную услугу в студенческом городке от 28.12.2024 N1564-ОД ознакомлен(а)"]}),value:!!x,fieldName:"",editable:!0}}},ye=(t,e,o)=>{e(!0);const r=Z(t);try{ce(r),e(!1),o(!0)}catch(n){e(!1),ee.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${n}`,type:"failure",time:3e4})}},Fe=V.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:t})=>t&&"100%"),$e=()=>{var t,e,o,r,n;const[a,u]=f.useState(null),{data:i,error:s}=fe.useSuperiorRoom(),[c,h]=f.useState(0),[k,y]=f.useState(!1),[F,d]=f.useState(!1),p=(t=k||!(i!=null&&i.is_avaliable))!==null&&t!==void 0?t:!1,{data:{user:x}}=te.useUser();if((x==null?void 0:x.educationForm)!=="Очная")return l.jsx(q,{text:"Данный раздел недоступен для вашей формы обучения"});const j=xe();return oe&&j?l.jsx(q,{text:j}):(f.useEffect(()=>{i&&u(ke(i,a))},[i,c]),f.useEffect(()=>{if(a){var m;h(a==null||(m=a.data[3])===null||m===void 0||(m=m.value)===null||m===void 0?void 0:m.id)}},[a==null||(e=a.data[3])===null||e===void 0?void 0:e.value]),l.jsx(ie,{load:()=>he.getSuperiorRoomFx(),loading:!i,error:s,data:i,children:l.jsx(Fe,{isDone:p,children:!!a&&!!u&&l.jsxs(ae,{children:[l.jsx(le,b(v({},a),{collapsed:p,setData:u})),l.jsx(re,{title:"Информация по заявке",type:"info",icon:l.jsx(Y,{}),visible:p,children:l.jsxs("p",{children:["Ваша заявка направлена на рассмотрение жилищной комиссии. С результатами распределения мест и датой заселения можно будет ознакомиться 14 марта в Личном кабинете в разделе"," ",l.jsx(G,{to:se,children:"«Список нуждающихся в общежитии»"}),"."]})}),l.jsx(ne,{text:i!=null&&i.is_avaliable?"Отправить":"Отправлено",action:()=>ye(a,d,y),isLoading:F,completed:k,setCompleted:y,repeatable:!1,buttonSuccessText:"Отправлено",isDone:p,isActive:de(a)&&((o=(r=a.optionalCheckbox)===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:!0),popUpFailureMessage:p?(n=i==null?void 0:i.error_text)!==null&&n!==void 0?n:"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{$e as default};
