var S=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))F.call(e,s)&&u(t,s,e[s]);return t},c=(t,e)=>b(t,h(e));import{r as l,j as o}from"./vendor-60fdf703.js";import{bw as g,b0 as v,b1 as A,bA as j,h as I,d6 as N,d1 as q,bB as B}from"./index-b011310d.js";const E=[{id:0,title:"Являющиеся детьми-сиротами и детьми, оставшимися без попечения родителей, лицами из числа детей-сирот и детей, оставшихся без попечения родителей, лицами, потерявшими в период обучения обоих родителей или единственного родителя, детьми-инвалидами"},{id:1,title:"Являющиеся инвалидами I и II групп, инвалидами с детства"},{id:2,title:"Подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне"},{id:3,title:"Являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также студентам из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» - «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» - «в» пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ «О воинской обязанности и военной службе»"},{id:4,title:"Получившие государственную социальную помощь"}],k=t=>({title:"Оформление социальной стипендии",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Основание для получения социальной стипендии:",type:"select",fieldName:"reason",value:null,width:"100",items:E,editable:!0,required:!0}],hint:"После получения положительного решения необходимо прийти в Профком за распечатанным заявлением и принести с собой все необходимые документы",documents:{files:[],fieldName:"docs",required:!0,maxFiles:4}}),w=()=>{var t;const[e,s]=l.useState(null),[a,n]=l.useState(!1),[m,f]=l.useState(!1),i=a!=null?a:!1,{data:{dataUserApplication:r}}=g.useApplications();return l.useEffect(()=>{r&&s(k(r))},[r]),o.jsx(v,{isDone:i,children:!!e&&!!s&&o.jsxs(A,{children:[o.jsx(j,c(p({},e),{collapsed:i,setData:s})),o.jsx(I,{text:i?"Отправлено":"Отправить",action:()=>N(q.PR_SOCSTIP,[e],f,n),isLoading:m,completed:a,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:B(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
