var f=Object.defineProperty,P=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var O=(i,t,l)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l,p=(i,t)=>{for(var l in t||(t={}))D.call(t,l)&&O(i,l,t[l]);if(I)for(var l of I(t))v.call(t,l)&&O(i,l,t[l]);return i},k=(i,t)=>P(i,g(t));import{j as e,bb as U,s as j,r as _,az as w,aH as H,F as G}from"./vendor-8a1e4858.js";import{A as Y}from"./consts-efab0afd.js";import{f as A,d as y,g as u,S as R,B as S,X as B,a2 as C,bN as V,bO as W,bP as K,bQ as X,bR as z,bS as Q,bT as $,bU as Z,bV as q,bW as J,bX as tt,bY as it,bZ as et,b_ as lt,b$ as nt,c0 as st,c1 as at,c2 as rt,c3 as ot,c4 as ct,c5 as Et,c6 as dt,c7 as _t,c8 as At,c9 as Tt,ca as x,cb as It,cc as Ot,cd as pt,ce as kt,cf as Ct,cg as Nt,ch as ut,ci as Rt,cj as St,ck as s,cl as N,cm as xt,cn as ht,co as Mt,cp as h,bK as Lt,cq as mt,cr as Ft,cs as bt,ct as ft,cu as Pt,aB as gt,aA as Dt,cv as vt,cw as Ut,cx as jt,cy as wt,cz as Ht,cA as Gt,cB as Yt,cC as yt,cD as Bt,cE as Vt,cF as Wt,cG as Kt,cH as Xt,cI as zt,cJ as Qt,cK as $t,cL as Zt,cM as qt,cN as Jt,cO as ti,cP as ii,cQ as ei,cR as li,cS as ni,cT as si,cU as ai,cV as ri,cW as oi,cX as ci,R as M,s as Ei,z as di,T as _i,a4 as Ai,a7 as L,b4 as Ti,bv as Ii,W as Oi,o as pi,P as ki}from"./index-4256834b.js";import{T as Ci}from"./index-25a1de01.js";const Ni=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(i,t)=>{var l;return e.jsxs(A,{jc:"space-between",children:[i,!!(t!=null&&(l=t.files_output)!==null&&l!==void 0&&l.length)&&t.files_output.map(a=>e.jsx("div",{onClick:r=>r.stopPropagation(),children:e.jsx(Ci,{text:a.fname,direction:"left",children:e.jsx(y,{icon:e.jsx(U,{}),background:"transparent",href:a==null?void 0:a.url})})},a.url))]})}},...m()],m=()=>{var i;return[{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"165px",catalogs:[...(i=Object.values(Y).map((t,l)=>({id:l.toString(),title:t})))!==null&&i!==void 0?i:[]],render:t=>e.jsx(u,{type:t==="Готово"||t==="Выдано"||t==="Получено"||t==="Выполнена"?"success":t==="Отклонено"?"failure":"alert",title:t||"—",align:"center",icon:null})},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}]},ui=()=>[...m(),{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:i=>i.length?i.map(t=>e.jsxs(A,{jc:"space-between",children:[e.jsx(R,{children:t.fname}),e.jsx(S,{onClick:()=>Ri(t),text:"Скачать",background:"transparent",textColor:B.green.main,width:"100%"})]},t.url)):"-"}],Ri=i=>{const t=document.createElement("a");t.href=i.url,t.download=i.fname,t.target="_blank",t.click(),t.remove()},Si=(i,t)=>t.reduce((l,a)=>{const r=a.links.filter(E=>C(E.title).includes(C(i)));return r.length&&l.push({title:a.title,links:r}),l},[]),xi=({studentFinance:i})=>[{title:"Многофункциональный центр",links:[{link:V,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:W,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:K,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:X,title:"Справка-вызов"},{link:z,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Q,title:"Запрос на изменение персональных данных"},{link:$,title:"Запрос на восстановление магнитного пропуска"},{link:Z,title:"Уточнение паспортных данных"},{link:q,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:J,title:"Предоставление каникул в связи с окончанием университета"},{link:tt,title:"Предоставление академического отпуска"},{link:it,title:"Выход из академического отпуска"},{link:et,title:"Отчисление по инициативе обучающегося"},{link:lt,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:nt,title:"Предоставление медицинских справок для проживающих в общежитии"},{link:st,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:at,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:rt,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:ot,title:"Предоставление права проживания льготной категории граждан"},{link:ct,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Et,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:dt,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:_t,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:At,title:"Расторжение договора найма"},{link:Tt,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:x,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:It,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Ot,title:"Заявка на материальную помощь"},{link:pt,title:"Оформить социальную стипендию"},{link:kt,title:i==="С оплатой обучения"?"Конкурс на назначение стипендии Московского Политеха":"Конкурс на назначение повышенной государственной академической стипендии",exceptionalFormEducationList:["Очно-заочная","Заочная"],exceptionalDegreeLevelList:["Аспирантура"]}]},{title:"Мобилизационный отдел",links:[{link:Ct,title:"Отправить документы воинского учета"},{link:Nt,title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу (форма 10)"},{link:ut,title:"Заказать справку об обучении для студентов в военкомат (форма 4)",description:"Доступна после заполнения формы № 10"},{link:Rt,title:"Заказать справку об обучении для аспирантов в военкомат (форма 5)",description:"Доступна после заполнения формы № 10"},{link:St,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Отдел платных образовательных услуг"+(s?" (Сервис временно недоступен)":""),disabled:s,links:[{link:N,title:"Оформить дополнительное соглашение к договору об обучении"},{link:N,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:xt,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:ht,title:"Предоставление справок о группе здоровья"},{link:Mt,title:"Контактные данные родителей"},{link:h,title:"Техническая эксплуатация"},{link:Lt,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:s,links:[{link:mt,title:"Трудоустройство студентов"}]}],hi=i=>[{title:"Цифровые сервисы",links:[{link:Ft,title:"Справка с места работы"},{link:bt,title:"Справка с места работы для предоставления в визовый центр"},{link:ft,title:"Справка о количестве неиспользованных дней отпуска"},{disabled:s,link:Pt,title:"Запрос на увеличение лимита проверок в системе «Антиплагиат»"}]},{title:"Телефонный справочник",links:[...Li(i),{link:gt,title:"Запрос на изменение внутреннего телефона"},{link:Dt,title:"Запрос на изменение корпоративной электронной почты"}]},...Mi(),{title:"Прочее",links:[{link:h,title:"Техническая эксплуатация"}]}],Mi=()=>[{title:"Цифровые сервисы (в разработке)",disabled:s,links:[{link:vt,title:"Справка о стаже работы"},{link:Ut,title:"Копия трудовой книжки"},{link:jt,title:"Копии документов из личного дела"},{link:wt,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:s,title:"Общее",links:[{link:Ht,title:"Актуализация контактных данных"}]},{title:"ИТ-обслуживание",links:[{link:Gt,title:"Получение нового компьютерного оборудования"},{link:Yt,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:yt,title:"Обслуживание принтеров, МФУ"},{link:Bt,title:"Вопрос по СЭД Directum и 1С"},{link:Vt,title:"Вопрос по Личному кабинету"},{link:Wt,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:s,links:[{link:Kt,title:"Справка по форме 2-НДФЛ"},{link:Xt,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:zt,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Qt,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:s,links:[{link:$t,title:"Предоставление права проживания в жилом помещении"},{link:Zt,title:"Временное размещение гостей в студгородке"},{link:qt,title:"Проход гостей на территорию студенческого городка"},{link:Jt,title:"Переселение"},{link:ti,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:s,links:[{link:ii,title:"Выдача пропуска (повторная)"},{link:ei,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:s,links:[{link:li,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:s,links:[{link:ni,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:s,links:[{link:si,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:s,links:[{link:ai,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:ri,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:s,links:[{link:oi,title:"Произвольный запрос"},{link:x,title:"Вступить в Профсоюз",isExternalLink:!0}]}],Li=i=>i.head_div&&i.head_div.length>0?[{link:ci,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],mi=(i,t)=>!(t!=null&&t.length)||!i?!0:!(t!=null&&t.includes(i)),Fi=(i,t)=>!(t!=null&&t.length)||!i?!0:!(t!=null&&t.includes(i)),bi=j.div.withConfig({componentId:"sc-1i4ujt1-0"})(["@media (min-width:1001px){width:100%;max-width:900px;min-width:900px;max-height:600px;}display:flex;flex-direction:column;height:70vh;.list{padding:5px;margin-top:10px;overflow-y:auto;height:100%;.links-wrapper{display:flex;flex-wrap:wrap;gap:10px;.link-list{display:flex;flex-direction:column;width:calc(50% - 5px);background:var(--block);box-shadow:var(--block-shadow);padding:10px;border-radius:var(--brLight);.links{display:flex;flex-direction:column;gap:10px;font-size:0.9em;& a{text-decoration:none;color:var(--blue);}.disabled-link{cursor:not-allowed;opacity:0.5;text-decoration:none;pointer-events:none;}}}}}@media (max-width:800px){.list{.links-wrapper{.link-list{width:100%;}}}}"]),fi=({isTeachers:i=!1,currentFormEducation:t,currentDegreeLevel:l})=>{const{close:a}=M(),{data:{user:r}}=Ei.useUser(),E=(i&&r?hi(r):xi({studentFinance:r==null?void 0:r.finance})).map(o=>{const n=o.links.filter(d=>!d.disabled);return k(p({},o),{links:n})}),[T,F]=_.useState(""),[c,b]=_.useState(E);return e.jsxs(bi,{children:[e.jsx(di,{whereToSearch:E,searchEngine:Si,setResult:b,placeholder:"Поиск заявок",setExternalValue:F}),e.jsx("div",{className:"list",children:e.jsxs("div",{className:"links-wrapper",children:[(c!=null?c:E).map(o=>{if(!o.disabled)return e.jsxs("div",{className:"link-list",children:[e.jsx(_i,{size:4,align:"left",bottomGap:!0,children:o.title}),e.jsx("div",{className:"links",children:o.links.map((n,d)=>{if(!(n.disabled||!mi(t,n.exceptionalFormEducationList)||!Fi(l,n.exceptionalDegreeLevelList)))return n.isExternalLink?e.jsx("a",{href:n.link,target:n.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:n.title},n.link+d):e.jsxs(A,{d:"column",ai:"flex-start",children:[e.jsx(w,{to:n.link,onClick:a,children:n.title},n.link+d),n.description&&e.jsx(R,{children:n.description})]})})})]},o.title)}),!(c!=null&&c.length)&&!!T.length&&e.jsx(Ai,{text:`По запросу ${T} ничего не найдено`})]})})]})},Pi=L(S),gi=L(Ti),Di=({isTeachers:i})=>{const{data:{listApplication:t,dataUserApplication:l}}=Ii.useApplications(),{open:a}=M(),r=_.useCallback(()=>{a(e.jsx(fi,{isTeachers:i,currentFormEducation:l==null?void 0:l.educationForm,currentDegreeLevel:l==null?void 0:l.degreeLevel}),"Создать заявку")},[]);return e.jsx(Oi,{load:()=>pi.getApplicationsFx(),loading:!t,error:null,data:t,children:e.jsxs(ki,{topRightCornerElement:e.jsx(Pi,{onClick:r,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(H,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0,tutorialModule:{id:"applications",step:3,params:{position:"bottom"}}}),children:[e.jsx(u,{type:"info",title:"Информация",icon:e.jsx(G,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:e.jsxs("p",{children:["Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом.",i&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),"Остальные Цифровые сервисы доступны"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=sprav",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})]})}),e.jsx(gi,{loading:!t,columns:Ni(),columnsExtended:ui(),data:t,maxOnPage:7,tutorialModule:{id:"applications",step:[0,1,2],params:{position:"top"}}})]})})},Gi=_.memo(Di);export{Gi as T};
