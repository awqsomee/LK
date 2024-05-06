import{j as i,s as j,r as l,F as S}from"./vendor-3b6459b9.js";import{a2 as k,cD as N,j as w,cE as z,a8 as A,a0 as F,W as D,cF as E,F as I,I as R,M as q,S as M,b as U,cG as W}from"./index-90e61e7c.js";const f=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],g=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],$=[{id:0,title:"ул. Михалковская, д. 7, корп. 3"},{id:1,title:"ул. Бориса Галушкина, д. 9"}],C=(e,t)=>{var d,n,c,p,s;const{fio:a,phone:o,email:r}=e,u=(n=(d=t==null?void 0:t.data[3])==null?void 0:d.value)==null?void 0:n.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:a,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:((c=t==null?void 0:t.data[1])==null?void 0:c.value)??o,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:((p=t==null?void 0:t.data[2])==null?void 0:p.value)??r,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:((s=t==null?void 0:t.data[3])==null?void 0:s.value)??null,fieldName:"address",type:"select",items:$,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:u===1?g:f,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:u===1?g:f,width:"100%",editable:!0,required:!0}],alert:i.jsx(i.Fragment,{children:"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!"}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"}]}},O=(e,t,a)=>{t(!0);const o=k(e);try{N(o),t(!1),a(!0)}catch(r){t(!1),w.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${r}`,type:"failure",time:3e4})}},P=j.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        padding: 0;
    }
`,G=()=>{var v,h,x;const[e,t]=l.useState(null),{data:a,error:o}=z.useSuperiorRoom(),[r,u]=l.useState(0),[d,n]=l.useState(!1),[c,p]=l.useState(!1),s=(d||!(a!=null&&a.is_avaliable))??!1,{data:{user:_}}=A.useUser();if((_==null?void 0:_.educationForm)!=="Очная")return i.jsx(F,{text:"Данный раздел недоступен для вашей формы обучения"});const m=W();return m?i.jsx(F,{text:m}):(l.useEffect(()=>{a&&t(C(a,e))},[a,r]),l.useEffect(()=>{var y,b;e&&u((b=(y=e==null?void 0:e.data[3])==null?void 0:y.value)==null?void 0:b.id)},[(v=e==null?void 0:e.data[3])==null?void 0:v.value]),i.jsx(D,{load:()=>E.getSuperiorRoomFx(),loading:!a,error:o,data:a,children:i.jsx(P,{isDone:s,children:!!e&&!!t&&i.jsxs(I,{children:[i.jsx(R,{...e,collapsed:s,setData:t}),i.jsxs(q,{title:"Информация по заявке",type:"info",icon:i.jsx(S,{}),visible:s,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",((h=e.data)==null?void 0:h[2]).value]}),i.jsx(M,{text:a!=null&&a.is_avaliable?"Отправить":"Отправлено",action:()=>O(e,p,n),isLoading:c,completed:d,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:U(e)&&(((x=e.optionalCheckbox)==null?void 0:x.value)??!0),popUpFailureMessage:s?(a==null?void 0:a.error_text)??"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{G as default};
