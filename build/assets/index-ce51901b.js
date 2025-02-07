var N=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var p=(l,t,e)=>t in l?N(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,m=(l,t)=>{for(var e in t||(t={}))k.call(t,e)&&p(l,e,t[e]);if(c)for(var e of c(t))H.call(t,e)&&p(l,e,t[e]);return l},f=(l,t)=>h(l,x(t));import{r as a,j as r}from"./vendor-93473b96.js";import{b6 as o,s as S,B as g,F as q,I,S as j,aj as A,j as C,c as E}from"./index-7eec75d1.js";const T=l=>{const t=l.find(i=>i.fieldName==="reason");let e=null;if(t!=null&&t.value){const i=t==null?void 0:t.value;i.title==="Сопровождение детей младшего школьного возраста в школу в первый день учебного года"||i.title==="Стаж работы в Университете от 20 до 25 лет"?e="collHoliday1":i.title==="Стаж работы в Университете от 25 до 30 лет"?e="collHoliday2":i.title==="Двое и более детей в возрасте до 14 лет"||i.title==="В случаях рождения ребенка, регистрации брака, смерти близких родственников"||i.title==="Стаж работы в Университете от 30 до 35 лет"?e="collHoliday3":i.title==="Стаж работы в Университете свыше 35 лет"?e="collHoliday4":(i.title==="Одиноким матерям/отцам"||i.title==="Ребенок-инвалид в возрасте до 18 лет")&&(e="collHoliday5")}return{reasonExtraHoliday:e}},D=l=>{const{surname:t,name:e,patronymic:i}=l;return{title:"Заявление о предоставлении дополнительного оплачиваемого отпуска",data:[{title:"ФИО",value:t+" "+e+" "+i,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:null,fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:null,fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Основание для получения дополнительного отпуска",type:"select",fieldName:"reason",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Двое и более детей в возрасте до 14 лет"},{id:1,title:"Ребенок-инвалид в возрасте до 18 лет"},{id:2,title:"Одиноким матерям/отцам"},{id:3,title:"В случаях рождения ребенка, регистрации брака, смерти близких родственников"},{id:4,title:"Сопровождение детей младшего школьного возраста в школу в первый день учебного года"},{id:5,title:"Стаж работы в Университете от 20 до 25 лет"},{id:6,title:"Стаж работы в Университете от 25 до 30 лет"},{id:7,title:"Стаж работы в Университете от 30 до 35 лет"},{id:8,title:"Стаж работы в Университете свыше 35 лет"}]},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday1",editable:!0,mask:!0,required:!0,diff:0,specialType:"collHoliday1",minValueInput:o(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday2",editable:!0,mask:!0,required:!0,diff:1,specialType:"collHoliday2",minValueInput:o(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday3",editable:!0,mask:!0,required:!0,diff:2,specialType:"collHoliday3",minValueInput:o(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday4",editable:!0,mask:!0,required:!0,diff:3,specialType:"collHoliday4",minValueInput:o(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday5",editable:!0,mask:!0,required:!0,diff:4,specialType:"collHoliday5",minValueInput:o(14)},{title:"Место работы",type:"select",fieldName:"employment",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное"},{id:1,title:"По внутреннему совместительству"}]}],documents:{files:[],required:!0,fieldName:"holidayCollFiles",maxFiles:10}}},M=()=>{var l,t;const[e,i]=a.useState(null),{data:{dataUserApplication:s}}=S.useApplications(),[d,n]=a.useState(!1),[y,v]=a.useState(!1),[b,F]=a.useState({}),u=d!=null?d:!1;return a.useEffect(()=>{s&&i(D(s))},[s]),a.useEffect(()=>{e&&s&&F(T(e.data))},[e]),r.jsx(g,{isDone:u,children:!!e&&!!i&&r.jsxs(q,{children:[r.jsx(I,f(m({},e),{collapsed:u,setData:i,specialFieldsNameConfig:b})),r.jsx(j,{text:"Отправить",action:()=>A(C.DISMISSAL,[e],v,n),isLoading:y,completed:d,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:E(e)&&((l=(t=e.optionalCheckbox)===null||t===void 0?void 0:t.value)!==null&&l!==void 0?l:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
