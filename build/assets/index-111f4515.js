import{p as W,e as B,S as X,h as Y,f as k,j as l,s as Z,r as u,a0 as ee}from"./vendor-9c916fad.js";import{$ as G,g as J,b as te,f as T,d as ie,W as le,F as re,h as se,M as oe,l as ne,I as m,i as ae,S as ue}from"./index-dc58d1cc.js";const ce=()=>G.get(`?getCheckData&token=${J()}`),de=e=>{const t=new FormData;t.set("token",J()),t.set("saveCheckData","1");for(const[r,o]of Object.entries(e))t.set(r,o);return G.post("?saveCheckData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},R={teacherDataVerification:null,error:null,completed:!1},fe=()=>({data:k(C).teacherDataVerification,loading:k(q.pending),error:k(C).error,completed:k(C).completed}),H=W({name:"postTeacherDataVerification",sid:"-jc1rtz"}),K=W({name:"changeCompleted",sid:"6vr460"}),me=B(async e=>{try{return(await de(e)).data}catch{throw new Error("Не удалось загрузить раздел")}},{name:"postTeacherDataVerificationFx",sid:"b8s0pe"});X({from:H,to:me});const q=B(async()=>{try{return(await ce()).data}catch{throw new Error("Не удалось войти")}},{name:"getTeacherDataVerificationFx",sid:"6736yk"}),C=Y(R,{name:"$teacherDataVerificationStore",sid:"-t2u8dj"}).on(q,e=>({...e,error:null})).on(q.doneData,(e,t)=>({...e,teacherDataVerification:t})).on(q.failData,(e,t)=>({...e,error:t.message})).on(K,(e,t)=>({...e,completed:t.completed})).on(te.userGuid,()=>({...R})),pe={useTeacherDataVerification:fe},he={getTeacherDataVerificationFx:q},A={postTeacherDataVerification:H,changeCompleted:K},ve=e=>{let t,r,o,h,c;c=Math.floor(e/1e3),h=Math.floor(c/60),c=c%60,o=Math.floor(h/60),h=h%60,r=Math.floor(o/24),o=o%24,t=Math.floor(r/30),r=r%30;const n=Math.floor(t/12);return t=t%12,{year:n,month:t,day:r,hour:o,minute:h,second:c}},ge=(e,t)=>{const r=e.sex==="Мужской",o=ve(new Date().getTime()-new Date(e.bdate).getTime()).year;return{title:"Воинская служба",hint:l.jsxs(l.Fragment,{children:["При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).",l.jsx("br",{}),l.jsx("br",{}),"Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером."]}),data:[],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"armyFiles",maxFiles:10},optionalCheckbox:{fieldName:"army_doc_none",title:"Документ о воинской службе отсутствует",value:o>=66?!0:!r&&(e==null?void 0:e.army_doc_none),required:!0,visible:!r||o>=66},confirmed:t}},xe=(e,t)=>({title:"Контактные данные",hint:"Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.",data:[{fieldName:"tel_mob_private",title:"Мобильный телефон (личный)",type:"tel",value:(e==null?void 0:e.tel_mob_private)??"",required:!0,mask:!0,autocomplete:!1},{fieldName:"tel_mob_staff",title:"Мобильный телефон (рабочий)",type:"tel",value:(e==null?void 0:e.tel_mob_staff)??"",mask:!0,autocomplete:!1},{fieldName:"tel_staff",title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:(e==null?void 0:e.tel_staff)??"",autocomplete:!1},{fieldName:"email_private",title:"Личный e-mail",type:"email",value:(e==null?void 0:e.email_private)??"",required:!0,autocomplete:!1},{fieldName:"email_staff",title:"Рабочий e-mail",type:"email",value:(e==null?void 0:e.email_staff)??"",autocomplete:!1}],confirmed:t}),_e=(e,t)=>({title:"Инвалидность",hint:"Необходимо приложить скан-копию справки об инвалидности",data:[],optionalCheckbox:{fieldName:"is_not_invalid",value:e==null?void 0:e.is_not_invalid,title:"Нет документа об инвалидности",required:!0},documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1},confirmed:t}),Ne=(e,t)=>({title:"Водительское удостоверение",hint:"При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон",data:[],optionalCheckbox:{fieldName:"dr_lic_none",title:"Водительское удостоверение отсутствует",value:e.dr_lic_none,required:!0},documents:{files:[],required:!0,fieldName:"driveLicenseFiles",maxFiles:2},confirmed:t}),be=(e,t)=>({title:"Образование",hint:"Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения",data:[{fieldName:"edu_doc",title:"Вид документа",value:e==null?void 0:e.edu_doc,width:"100%"},{fieldName:"edu_level",title:"Уровень образования",value:e.edu_level,width:"100%"},{fieldName:"edu_org",title:"Учебное заведение",value:(e==null?void 0:e.edu_org)??"",required:!0},{fieldName:"edu_spec",title:"Квалификация",value:(e==null?void 0:e.edu_spec)??"",required:!0},{fieldName:"edu_doc_num",title:"Серия и номер",value:(e==null?void 0:e.edu_doc_num)??"",required:!0},{fieldName:"edu_year",title:"Дата выдачи",value:(e==null?void 0:e.edu_year)??"",type:"date",required:!1}],documents:{files:[],required:!0,fieldName:"educationFiles",maxFiles:5},confirmed:t}),S=[{id:"mother",title:"Мать"},{id:"father",title:"Отец"},{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"sister",title:"Сестра"},{id:"brother",title:"Брат"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],ye=(e,t)=>{var r;return{title:"Состав семьи",hint:"Необходимо указать актуальную информацию о ближайших родственниках",data:[...((r=e.family)==null?void 0:r.map(o=>[{fieldName:"relation",title:"Степень родства",value:T(S,o.relation),type:"select",items:S,width:"100%"},{fieldName:"fio",title:"ФИО",value:o.fio,required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:o.bdate,type:"date",required:!0,width:"30%"}]))??[]],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:S,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:e.family_none,required:!0},confirmed:t}},U=e=>{switch(e){case"Мужской":return[{id:"single",title:"Холост"},{id:"married",title:"Женат"},{id:"divorced",title:"Разведен"},{id:"widow",title:"Вдовец"}];case"Женский":return[{id:"single",title:"Не замужем"},{id:"married",title:"Замужем"},{id:"divorced",title:"Разведена"},{id:"widow",title:"Вдова"}];default:return[{id:"single",title:"Холост/Не замужем"},{id:"married",title:"Женат/Замужем"},{id:"divorced",title:"Разведен/Разведена"},{id:"widow",title:"Вдовец/Вдова"}]}},De=(e,t)=>({title:"Семейное положение",hint:"Необходимо указать актуальную информацию",data:[{fieldName:"familyStatus",title:"",value:T(U(e.sex),e.familyStatus),type:"select",items:U(e.sex),width:"100%"}],confirmed:t}),F=[{id:"a",title:"Читаю и перевожу со словарем"},{id:"b",title:"Читаю и могу объясняться"},{id:"с",title:"Владею свободно"}],we=(e,t)=>{var r;return{title:"Знание иностранных языков",hint:"Необходимо указать иностранные языки и степень владения ими",data:[...((r=e.languages)==null?void 0:r.map(o=>[{fieldName:"language",title:"Язык",required:!0,value:o.language},{fieldName:"level",title:"Уровень владения",value:T(F,o.level),type:"select",items:F,width:"100%"}]))??[]],default:[[{fieldName:"language",title:"Язык",required:!0,value:"Английский"},{fieldName:"level",title:"Уровень владения",value:F[0],type:"select",items:F,width:"100%"}]],addNew:!0,confirmed:t}},je=(e,t)=>({title:"Проживание",hint:"Необходимо указать фактический адрес проживания",data:[{fieldName:"loc_addr",title:"Адрес проживания",value:(e==null?void 0:e.loc_addr)??"",required:!0},{fieldName:"loc_date",title:"Дата начала проживания",value:(e==null?void 0:e.loc_date)??"",type:"date",required:!0}],optionalCheckbox:{fieldName:"loc_match_reg",title:"Адрес проживания совпадает с адресом регистрации",value:e.loc_match_reg,required:!0},confirmed:t}),qe=(e,t)=>({title:"Паспортные данные",hint:"Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.",data:[{fieldName:"",title:"Вид документа",value:e==null?void 0:e.pass_type,width:"100%"},{fieldName:"pass_ser",title:"Серия",value:(e==null?void 0:e.pass_ser)??"",required:!0},{fieldName:"pass_num",title:"Номер",value:(e==null?void 0:e.pass_num)??"",required:!0},{fieldName:"pass_div",title:"Кем выдан",value:(e==null?void 0:e.pass_div)??"",required:!0},{fieldName:"pass_date",title:"Дата выдачи",value:(e==null?void 0:e.pass_date)??"",required:!0,type:"date"},{fieldName:"pass_div_code",title:"Код подразделения",value:(e==null?void 0:e.pass_div_code)??"",required:!0},{fieldName:"pass_citizenship",title:"Гражданство",value:(e==null?void 0:e.pass_citizenship)??"",required:!1}],documents:{files:[],required:!0,fieldName:"passportFiles",maxFiles:1},confirmed:t}),ke=(e,t)=>({title:"Личные данные",hint:"Необходимо приложить скан-копию документа, подтверждающего изменения",data:[{fieldName:"fio",title:"ФИО",value:(e==null?void 0:e.fio)??"",required:!0},{fieldName:"sex",title:"Пол",value:(e==null?void 0:e.sex)??"",required:!0},{fieldName:"bdate",title:"Дата рождения",value:(e==null?void 0:e.bdate)??"",required:!0,type:"date"},{fieldName:"bplace",title:"Место рождения",value:(e==null?void 0:e.bplace)??"",required:!0}],documents:{files:[],required:!0,fieldName:"personalFiles",maxFiles:2},confirmed:t}),Fe=(e,t)=>({title:"Регистрация",hint:"Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.",data:[{fieldName:"reg_addr",title:"Адрес регистрации",value:(e==null?void 0:e.reg_addr)??"",required:!0},{fieldName:"reg_date",title:"Дата регистрации",value:(e==null?void 0:e.reg_date)??"",type:"date",required:!0}],documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:2},optionalCheckbox:{fieldName:"reg_none",title:"Регистрация отсутствует",value:!1},confirmed:t}),Ce=(e,t)=>{t(!0);const r=e.map(n=>{if(Array.isArray(n.data[0])){const i=n.data.map(p=>Object.assign({},...p==null?void 0:p.map(s=>{var v,j;const w={};return s!=null&&s.fieldName&&(w[s==null?void 0:s.fieldName]=(v=s==null?void 0:s.value)!=null&&v.title?(j=s==null?void 0:s.value)==null?void 0:j.title:s==null?void 0:s.value),w}))),d={},a=n.title=="Состав семьи"?"family":"langs";return d[a]=JSON.stringify(i),d}else return n.data.map(i=>{var a;const d={};return i!=null&&i.fieldName&&(d[(i==null?void 0:i.fieldName)??""]=typeof i.value!="object"?i==null?void 0:i.value:((a=i.value)==null?void 0:a.title)??null),d})}).flat(),o=e.map(n=>{var d,a;const i={};if((d=n.documents)!=null&&d.fieldName)for(let p=0;p<n.documents.files.length;p++)i[((a=n.documents)==null?void 0:a.fieldName)+`[${p}]`]=n.documents.files[p];return i}),h=e.map(n=>{var d,a;const i={};return(d=n.optionalCheckbox)!=null&&d.fieldName&&(i[(a=n.optionalCheckbox)==null?void 0:a.fieldName]=n.optionalCheckbox.value),i}),c=Object.assign({},...r,...o,...h);try{A.postTeacherDataVerification(c),t(!1),A.changeCompleted({completed:!0})}catch(n){t(!1),ie.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${n}`,type:"failure",time:3e4})}},Se=Z.div.withConfig({componentId:"sc-1g5zkfe-0"})(["display:flex;align-items:flex-start;justify-content:center;width:100%;padding:10px;color:var(--text);.data-verification-block{width:100%;height:100%;max-width:600px;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);display:flex;flex-direction:column;row-gap:20px;}@media (max-width:1000px){padding:50px 0;.data-verification-block{box-shadow:none;}}"]),Oe=()=>{const{data:e,error:t,completed:r}=pe.useTeacherDataVerification(),[o,h]=u.useState(!1),[c,n]=u.useState(null),[i,d]=u.useState(null),[a,p]=u.useState(null),[s,w]=u.useState(null),[v,j]=u.useState(null),[g,O]=u.useState(null),[x,V]=u.useState(null),[_,E]=u.useState(null),[N,M]=u.useState(null),[b,L]=u.useState(null),[y,$]=u.useState(null),[D,I]=u.useState(null),f=!!(e!=null&&e.validated),[P,z]=u.useState(!1);return u.useEffect(()=>{z(!1)},[!!(D!=null&&D.confirmed),!!(N!=null&&N.confirmed),!!(c!=null&&c.confirmed),!!(y!=null&&y.confirmed),!!(_!=null&&_.confirmed),!!(g!=null&&g.confirmed),!!(v!=null&&v.confirmed),!!(s!=null&&s.confirmed),!!(i!=null&&i.confirmed),!!(b!=null&&b.confirmed),!!(x!=null&&x.confirmed),!!(a!=null&&a.confirmed)]),u.useEffect(()=>{e&&(n(ke(e,f)),p(xe(e,f)),E(qe(e,f)),L(Fe(e,f)),$(je(e,f)),d(De(e,f)),w(ye(e,f)),O(be(e,f)),V(we(e,f)),M(Ne(e,f)),j(_e(e,f)),I(ge(e,f)))},[e]),l.jsx(le,{load:()=>he.getTeacherDataVerificationFx(),loading:!e,error:t,data:e,children:c&&a&&_&&b&&y&&i&&s&&g&&x&&N&&v&&D?l.jsx(Se,{children:l.jsxs(re,{children:[l.jsx(se,{size:3,align:"left",bottomGap:!0,children:"Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения"}),l.jsx(oe,{type:"success",title:`Данные успешно отправлены ${ne((e==null?void 0:e.valid_date)??new Date)}`,icon:l.jsx(ee,{}),visible:f}),l.jsx(m,{...c,setData:n,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...a,setData:p,divider:!0,defaultOpenArea:!1}),l.jsx(m,{..._,setData:E,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...b,setData:L,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...y,setData:$,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...i,setData:d,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...s,setData:w,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...g,setData:O,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...x,setData:V,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...N,setData:M,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...v,setData:j,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...D,setData:I,divider:!0,defaultOpenArea:!1}),l.jsxs(l.Fragment,{children:[l.jsx(ae,{checked:P,setChecked:z,text:"Я подтверждаю корректность указанных данных"}),l.jsx(ue,{text:r?"Отправлено":"Отправить",action:()=>Ce([D,N,c,y,_,g,v,s,i,b,x,a],h),isLoading:o,completed:r,setCompleted:Q=>A.changeCompleted({completed:Q}),isDone:r,buttonSuccessText:"Отправлено",repeatable:!0,isActive:!!P,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были подтверждены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})]})}):null})};export{Oe as default};
