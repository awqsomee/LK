var v=Object.defineProperty,N=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(t,e,i)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e)=>{for(var i in e||(e={}))T.call(e,i)&&p(t,i,e[i]);if(u)for(var i of u(e))S.call(e,i)&&p(t,i,e[i]);return t},m=(t,e)=>N(t,b(e));import{r as d,j as s}from"./vendor-8a1e4858.js";import{bv as E,bz as _,t as F,bA as q,i as h,d6 as g,d1 as x,bB as A}from"./index-7ba18bcb.js";const L=t=>{const e=t.find(l=>l.fieldName==="currently-employed");let i=null;if(e!=null&&e.value){const l=e==null?void 0:e.value;l.title==="0"&&(i="employed"),l.title==="1"&&(i="unemployed")}return{reason:i}},R=[{id:"1",title:"Банковская сфера"},{id:"2",title:"Биотехнология"},{id:"3",title:"Городское хозяйство, ЖКХ"},{id:"4",title:"Государственная служба"},{id:"5",title:"Дизайн, графика, живопись"},{id:"6",title:"Добывающая отрасль, нефть, газ"},{id:"7",title:"Журналистика и СМИ"},{id:"8",title:"Издательское дело"},{id:"9",title:"IT-сфера"},{id:"10",title:"Металлургия, металлообработка"},{id:"11",title:"Полиграфическое и упаковочное производство"},{id:"12",title:"Продажи"},{id:"13",title:"Строительство, эксплуатация зданий и сооружений, проектирование"},{id:"14",title:"Машиностроение"},{id:"15",title:"Наука, образование"},{id:"16",title:"Транспорт"},{id:"17",title:"Химическое производство"},{id:"18",title:"Экология и природопользование"},{id:"19",title:"Электроника, приборостроение"},{id:"20",title:"Энергетика"},{id:"21",title:"Другое (строка для заполнения)"}],j=[{id:"1",title:"До 30 тыс. рублей"},{id:"2",title:"30 – 50 тыс. рублей"},{id:"3",title:"50 – 70 тыс. рублей"},{id:"4",title:"70 – 100 тыс. рублей"},{id:"5",title:"Более 100 тыс. рублей"}],C=[{id:"1",title:"Менее 100 человек"},{id:"2",title:"100 – 250 человек"},{id:"3",title:"251 - 1000 человек"},{id:"4",title:"1001 – 5000 человек"},{id:"5",title:"Более 5000 человек"}],M=t=>({title:"Трудоустройство",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Трудоустроены ли Вы в настоящее время?",type:"radio",fieldName:"currently-employed",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}]},{title:"Требуется ли Вам содействие в поиске места трудоустройства?",type:"radio",fieldName:"need_employment_help",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"unemployed"},{title:"Укажите наименование организации, в которой Вы трудоустроены (например, ООО «Ромашка»)",fieldName:"org_name",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Укажите занимаемую должность",fieldName:"job_title",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Вы работаете по специальности, получаемой в университете?",type:"radio",fieldName:"work_in_university",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{fieldName:"additional_info",title:"Дополнительная информация о месте трудоустройства",type:"text-header",visible:!0,value:"Дополнительная информация о месте трудоустройства",specialType:"employed"},{title:"Являетесь ли Вы самозанятым или индивидуальным предпринимателем?",type:"radio",fieldName:"self-employed-or-individual-entrepreneur",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{title:"Входит ли организация, в которой вы трудоустроены в ОПК (оборонно-промышленный комплекс)?",type:"radio",fieldName:"mic",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{title:"Укажите адрес организации",fieldName:"org_address",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Телефон организации",type:"tel",mask:!0,fieldName:"org_phone",editable:!0,required:!0,value:"",specialType:"employed"},{title:"Электронная почта организации",type:"email",fieldName:"org_email",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Укажите сферу деятельности организации, в которой Вы трудоустроены",type:"select",width:"100%",value:null,items:R,fieldName:"theme",required:!0,specialType:"employed"},{title:"Укажите диапазон Вашей среднемесячной заработной платы? ",type:"select",width:"100%",value:null,items:j,fieldName:"theme",required:!0,specialType:"employed"},{title:"Укажите численность работников организации, в которой Вы работаете?",type:"select",width:"100%",value:null,items:C,fieldName:"theme",required:!0,specialType:"employed"}]}),B=()=>{const[t,e]=d.useState(null),[i,l]=d.useState(!1),[n,c]=d.useState(!1),[y,f]=d.useState({}),a=i!=null?i:!1,{data:{dataUserApplication:r}}=E.useApplications();return d.useEffect(()=>{r&&e(M(r))},[r]),d.useEffect(()=>{t&&r&&f(L(t.data))},[t]),s.jsx(_,{isDone:a,children:!!t&&!!e&&s.jsxs(F,{children:[s.jsx(q,m(o({},t),{collapsed:a,setData:e,specialFieldsNameConfig:y})),s.jsx(h,{text:a?"Отправлено":"Отправить",action:()=>g(x.STUD_EMPLOYMENT,[t],c,l),isLoading:n,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:A(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{B as default};
