var ee=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var j=(t,e,a)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))ie.call(e,a)&&j(t,a,e[a]);if(T)for(var a of T(e))ne.call(e,a)&&j(t,a,e[a]);return t},h=(t,e)=>te(t,ae(e));var P=(t,e,a)=>new Promise((i,r)=>{var n=s=>{try{o(a.next(s))}catch(v){r(v)}},c=s=>{try{o(a.throw(s))}catch(v){r(v)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(n,c);o((a=a.apply(t,e)).next())});import{dn as re,dp as _,dq as S,dr as b,ds as oe,dt as w,p as ue,e as I,bG as le,h as se,l as W,q as R,j as u,s as de,r as m,F as ce,az as ve}from"./vendor-8a1e4858.js";import{as as X,at as Y,q as me,dR as B,dS as Q,d0 as pe,p as fe,s as ge,a4 as q,ck as he,W as be,t as we,bA as ye,g as Ge,dT as ke,dU as xe,i as Ne,bB as Me}from"./index-5bf1da28.js";const Fe=()=>X.get(`?getRequestHighComfort&token=${Y()}`),Pe=t=>{const e=new FormData;e.set("token",Y()),e.set("postRequestHighComfort","1");for(const[a,i]of Object.entries(t))e.set(a,i);return X.post("?postRequestHighComfort=1",e,{headers:{"Content-Type":"multipart/form-data"}})};function z(t,e,a){re(2,arguments);var i=_(t,a),r=_(e,a);return i.getTime()===r.getTime()}function y(t,e){if(t.one!==void 0&&e===1)return t.one;var a=e%10,i=e%100;return a===1&&i!==11?t.singularNominative.replace("{{count}}",String(e)):a>=2&&a<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function l(t){return function(e,a){return a!=null&&a.addSuffix?a.comparison&&a.comparison>0?t.future?y(t.future,e):"через "+y(t.regular,e):t.past?y(t.past,e):y(t.regular,e)+" назад":y(t.regular,e)}}var Se={lessThanXSeconds:l({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:l({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,a){return a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:l({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:l({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:l({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:l({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:l({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:l({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:l({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:l({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:l({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:l({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:l({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:l({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:l({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},We=function(e,a,i){return Se[e](a,i)};const Re=We;var De={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},$e={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Ce={any:"{{date}}, {{time}}"},Te={date:S({formats:De,defaultWidth:"full"}),time:S({formats:$e,defaultWidth:"full"}),dateTime:S({formats:Ce,defaultWidth:"any"})};const je=Te;var $=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function _e(t){var e=$[t];switch(t){case 0:return"'в прошлое "+e+" в' p";case 1:case 2:case 4:return"'в прошлый "+e+" в' p";case 3:case 5:case 6:return"'в прошлую "+e+" в' p"}}function E(t){var e=$[t];return t===2?"'во "+e+" в' p":"'в "+e+" в' p"}function qe(t){var e=$[t];switch(t){case 0:return"'в следующее "+e+" в' p";case 1:case 2:case 4:return"'в следующий "+e+" в' p";case 3:case 5:case 6:return"'в следующую "+e+" в' p"}}var ze={lastWeek:function(e,a,i){var r=e.getUTCDay();return z(e,a,i)?E(r):_e(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,a,i){var r=e.getUTCDay();return z(e,a,i)?E(r):qe(r)},other:"P"},Ee=function(e,a,i,r){var n=ze[e];return typeof n=="function"?n(a,i,r):n};const Ae=Ee;var He={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},Le={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},Oe={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},Ue={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},Ve={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},Ie={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},Xe={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},Ye=function(e,a){var i=Number(e),r=a==null?void 0:a.unit,n;return r==="date"?n="-е":r==="week"||r==="minute"||r==="second"?n="-я":n="-й",i+n},Be={ordinalNumber:Ye,era:b({values:He,defaultWidth:"wide"}),quarter:b({values:Le,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:b({values:Oe,defaultWidth:"wide",formattingValues:Ue,defaultFormattingWidth:"wide"}),day:b({values:Ve,defaultWidth:"wide"}),dayPeriod:b({values:Ie,defaultWidth:"any",formattingValues:Xe,defaultFormattingWidth:"wide"})};const Qe=Be;var Je=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,Ke=/\d+/i,Ze={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},et={any:[/^д/i,/^н/i]},tt={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},at={any:[/1/i,/2/i,/3/i,/4/i]},it={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},nt={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},rt={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},ot={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},ut={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},lt={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},st={ordinalNumber:oe({matchPattern:Je,parsePattern:Ke,valueCallback:function(e){return parseInt(e,10)}}),era:w({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),quarter:w({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:w({matchPatterns:it,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any"}),day:w({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any"})};const dt=st;var ct={code:"ru",formatDistance:Re,formatLong:je,formatRelative:Ae,localize:Qe,match:dt,options:{weekStartsOn:1,firstWeekContainsDate:1}};const D=ct,A={superiorRoom:null,error:null},vt=()=>({data:W(H).superiorRoom,loading:W(G.pending),error:W(H).error}),mt=ue({name:"postSuperiorRoom",sid:"8fhu4k"}),pt=I(t=>P(void 0,null,function*(){}),{name:"postSuperiorRoomFx",sid:"-fra7ot"});le({from:mt,to:pt});const G=I(()=>P(void 0,null,function*(){try{return(yield Fe()).data}catch(t){throw new Error("Не удалось загрузить раздел")}}),{name:"getSuperiorRoomFx",sid:"drkyz"}),H=se(A,{name:"$superiorRoomStore",sid:"-qtf9jq"}).on(G,t=>h(f({},t),{error:null})).on(G.doneData,(t,e)=>h(f({},t),{superiorRoom:e})).on(G.failData,(t,e)=>h(f({},t),{error:e.message})).on(me.userGuid,()=>f({},A)),ft={useSuperiorRoom:vt},gt={getSuperiorRoomFx:G},ht=t=>{const e=t.find(i=>i.fieldName==="address");let a=null;return e!=null&&e.value&&(e==null?void 0:e.value).id!=="pk"&&(a="not_dorm11"),{reason_academic:a}},J=`Подача заявок открыта с ${R(new Date(B),"HH:mm d MMMM",{locale:D})} до ${R(new Date(Q),"HH:mm d MMMM",{locale:D})}!`,bt=t=>{const e=new Date;return e<new Date(B)?J:e>new Date(Q)?"Подача заявок закрыта":""},L=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],O=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],U=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"},{id:3,title:"Семейная комната"}],V=[{id:2,title:"Трое в комнате"}],wt=[{id:"ms",title:"Общежитие № 1, г. Москва, ул. Малая Семеновская, д. 12"},{id:"m",title:"Общежитие № 5, г. Москва, ул. Михалковская, д. 7, к. 3"},{id:"bg",title:"Общежитие № 6, г. Москва, ул. Бориса Галушкина, д. 9"},{id:"pk",title:"Общежитие № 11, г. Москва, ул. Павла Корчагина, д. 22А, к. 2"}],yt=(t,e)=>{var a,i,r,n,c,o,s,v;const{fio:N,phone:k,email:x}=t,d=e==null||(a=e.data[3])===null||a===void 0||(a=a.value)===null||a===void 0?void 0:a.id,M=e==null||(i=e.optionalCheckbox)===null||i===void 0?void 0:i.value;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:N,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:(r=e==null||(n=e.data[1])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:k,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:(c=e==null||(o=e.data[2])===null||o===void 0?void 0:o.value)!==null&&c!==void 0?c:x,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:(s=e==null||(v=e.data[3])===null||v===void 0?void 0:v.value)!==null&&s!==void 0?s:null,fieldName:"address",type:"select",items:wt,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:d==="bg"?O:d==="pk"?V:d==="ms"?U:L,width:"100%",editable:!!d,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:d==="bg"?O:d==="pk"?V:d==="ms"?U:L,width:"100%",editable:!!d,required:!0,specialType:"not_dorm11"}],alert:u.jsx(u.Fragment,{children:J}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:u.jsxs(u.Fragment,{children:["С"," ",u.jsx("a",{href:"https://mospolytech.ru/upload/medialibrary/dcd/aj5km0q67pkjw737j8g5hynmz2dfhlxb/Prikaz-_1564_OD-ot-28.12.2024-Ob-utverzhdenii-razmerov-platy-za-dopolnitelnuyu-uslugu.pdf",target:"_blank",rel:"noreferrer",children:"приказом"})," ","об утверждении размеров платы за дополнительную услугу в студенческом городке от 28.12.2024 N1564-ОД ознакомлен(а)"]}),value:!!M,fieldName:"",editable:!0}}},Gt=(t,e,a)=>{e(!0);const i=pe(t);try{Pe(i),e(!1),a(!0)}catch(r){e(!1),fe.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${r}`,type:"failure",time:3e4})}},kt=de.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:t})=>t&&"100%"),Ft=()=>{var t,e,a,i,r;const[n,c]=m.useState(null),{data:o,error:s}=ft.useSuperiorRoom(),[v,N]=m.useState(0),[k,x]=m.useState(!1),[d,M]=m.useState(!1),[K,Z]=m.useState({}),g=(t=k||!(o!=null&&o.is_avaliable))!==null&&t!==void 0?t:!1,{data:{user:F}}=ge.useUser();if((F==null?void 0:F.educationForm)!=="Очная")return u.jsx(q,{text:"Данный раздел недоступен для вашей формы обучения"});const C=bt();return he&&C?u.jsx(q,{text:C}):(m.useEffect(()=>{o&&c(yt(o,n))},[o,v]),m.useEffect(()=>{if(n){var p;N(n==null||(p=n.data[3])===null||p===void 0||(p=p.value)===null||p===void 0?void 0:p.id)}},[n==null||(e=n.data[3])===null||e===void 0?void 0:e.value]),m.useEffect(()=>{n&&Z(ht(n.data))},[n]),u.jsx(be,{load:()=>gt.getSuperiorRoomFx(),loading:!o,error:s,data:o,children:u.jsx(kt,{isDone:g,children:!!n&&!!c&&u.jsxs(we,{children:[u.jsx(ye,h(f({},n),{collapsed:g,setData:c,specialFieldsNameConfig:K})),u.jsx(Ge,{title:"Информация по заявке",type:"info",icon:u.jsx(ce,{}),visible:g,children:u.jsxs("p",{children:["Ваша заявка направлена на рассмотрение жилищной комиссии. С результатами распределения мест и датой заселения можно будет ознакомиться"," ",R(new Date(ke),"d MMMM",{locale:D})," в Личном кабинете в разделе ",u.jsx(ve,{to:xe,children:"«Список нуждающихся в общежитии»"}),"."]})}),u.jsx(Ne,{text:o!=null&&o.is_avaliable?"Отправить":"Отправлено",action:()=>Gt(n,M,x),isLoading:d,completed:k,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:g,isActive:Me(n)&&((a=(i=n.optionalCheckbox)===null||i===void 0?void 0:i.value)!==null&&a!==void 0?a:!0),popUpFailureMessage:g?(r=o==null?void 0:o.error_text)!==null&&r!==void 0?r:"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{Ft as default};
