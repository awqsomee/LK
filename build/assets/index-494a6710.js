import{r as a,j as r}from"./vendor-48260ac4.js";import{b7 as s,s as f,B as y,F as v,I as b,S as N,aj as x,j as h,c as H}from"./index-7f995b81.js";const S=l=>{const{surname:i,name:t,patronymic:e}=l;return{title:"Заявление о предоставлении дополнительного оплачиваемого отпуска",data:[{title:"ФИО",value:i+" "+t+" "+e,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:null,fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:null,fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Основание для получения дополнительного отпуска",type:"select",fieldName:"reason",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Двое и более детей в возрасте до 14 лет"},{id:1,title:"Ребенок-инвалид в возрасте до 18 лет"},{id:2,title:"Одиноким матерям/отцам"},{id:3,title:"В случаях рождения ребенка, регистрации брака, смерти близких родственников"},{id:4,title:"Сопровождение детей младшего школьного возраста в школу в первый день учебного года"},{id:5,title:"Стаж работы в Университете от 20 до 25 лет"},{id:6,title:"Стаж работы в Университете от 25 до 30 лет"},{id:7,title:"Стаж работы в Университете от 30 до 35 лет"},{id:8,title:"Стаж работы в Университете свыше 35 лет"}]},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday1",editable:!0,mask:!0,required:!0,diff:0,specialType:"collHoliday1",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday2",editable:!0,mask:!0,required:!0,diff:1,specialType:"collHoliday2",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday3",editable:!0,mask:!0,required:!0,diff:2,specialType:"collHoliday3",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday4",editable:!0,mask:!0,required:!0,diff:3,specialType:"collHoliday4",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday5",editable:!0,mask:!0,required:!0,diff:4,specialType:"collHoliday5",minValueInput:s(14)},{title:"Место работы",type:"select",fieldName:"employment",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное"},{id:1,title:"По внутреннему совместительству"}]}],documents:{files:[],required:!0,fieldName:"holidayCollFiles",maxFiles:10}}},F=l=>{const i=l.find(e=>e.fieldName==="reason");let t=null;if(i!=null&&i.value){const e=i==null?void 0:i.value;e.title==="Сопровождение детей младшего школьного возраста в школу в первый день учебного года"||e.title==="Стаж работы в Университете от 20 до 25 лет"?t="collHoliday1":e.title==="Стаж работы в Университете от 25 до 30 лет"?t="collHoliday2":e.title==="Двое и более детей в возрасте до 14 лет"||e.title==="В случаях рождения ребенка, регистрации брака, смерти близких родственников"||e.title==="Стаж работы в Университете от 30 до 35 лет"?t="collHoliday3":e.title==="Стаж работы в Университете свыше 35 лет"?t="collHoliday4":(e.title==="Одиноким матерям/отцам"||e.title==="Ребенок-инвалид в возрасте до 18 лет")&&(t="collHoliday5")}return{reasonExtraHoliday:t}},q=()=>{var o;const[l,i]=a.useState(null),{data:{dataUserApplication:t}}=f.useApplications(),[e,d]=a.useState(!1),[c,n]=a.useState(!1),[p,m]=a.useState({}),u=e??!1;return a.useEffect(()=>{t&&i(S(t))},[t]),a.useEffect(()=>{l&&t&&m(F(l.data))},[l]),r.jsx(y,{isDone:u,children:!!l&&!!i&&r.jsxs(v,{children:[r.jsx(b,{...l,collapsed:u,setData:i,specialFieldsNameConfig:p}),r.jsx(N,{text:"Отправить",action:()=>x(h.DISMISSAL,[l],n,d),isLoading:c,completed:e,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:H(l)&&(((o=l.optionalCheckbox)==null?void 0:o.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{q as default};
