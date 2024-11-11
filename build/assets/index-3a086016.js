import{r as d,j as s}from"./vendor-48260ac4.js";import{s as c,B as n,F as y,I as f,S as v,aj as N,j as S,c as T}from"./index-078ea5cc.js";const E=[{id:"1",title:"Банковская сфера"},{id:"2",title:"Биотехнология"},{id:"3",title:"Городское хозяйство, ЖКХ"},{id:"4",title:"Государственная служба"},{id:"5",title:"Дизайн, графика, живопись"},{id:"6",title:"Добывающая отрасль, нефть, газ"},{id:"7",title:"Журналистика и СМИ"},{id:"8",title:"Издательское дело"},{id:"9",title:"IT-сфера"},{id:"10",title:"Металлургия, металлообработка"},{id:"11",title:"Полиграфическое и упаковочное производство"},{id:"12",title:"Продажи"},{id:"13",title:"Строительство, эксплуатация зданий и сооружений, проектирование"},{id:"14",title:"Машиностроение"},{id:"15",title:"Наука, образование"},{id:"16",title:"Транспорт"},{id:"17",title:"Химическое производство"},{id:"18",title:"Экология и природопользование"},{id:"19",title:"Электроника, приборостроение"},{id:"20",title:"Энергетика"},{id:"21",title:"Другое (строка для заполнения)"}],b=[{id:"1",title:"До 30 тыс. рублей"},{id:"2",title:"30 – 50 тыс. рублей"},{id:"3",title:"50 – 70 тыс. рублей"},{id:"4",title:"70 – 100 тыс. рублей"},{id:"5",title:"Более 100 тыс. рублей"}],_=[{id:"1",title:"Менее 100 человек"},{id:"2",title:"100 – 250 человек"},{id:"3",title:"251 - 1000 человек"},{id:"4",title:"1001 – 5000 человек"},{id:"5",title:"Более 5000 человек"}],q=e=>({title:"Трудоустройство",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Трудоустроены ли Вы в настоящее время?",type:"radio",fieldName:"currently-employed",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}]},{title:"Требуется ли Вам содействие в поиске места трудоустройства?",type:"radio",fieldName:"need_employment_help",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"unemployed"},{title:"Укажите наименование организации, в которой Вы трудоустроены (например, ООО «Ромашка»)",fieldName:"org_name",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Укажите занимаемую должность",fieldName:"job_title",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Вы работаете по специальности, получаемой в университете?",type:"radio",fieldName:"work_in_university",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{fieldName:"additional_info",title:"Дополнительная информация о месте трудоустройства",type:"text-header",visible:!0,value:"Дополнительная информация о месте трудоустройства",specialType:"employed"},{title:"Являетесь ли Вы самозанятым или индивидуальным предпринимателем?",type:"radio",fieldName:"self-employed-or-individual-entrepreneur",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{title:"Входит ли организация, в которой вы трудоустроены в ОПК (оборонно-промышленный комплекс)?",type:"radio",fieldName:"mic",value:null,editable:!0,required:!0,isSpecificRadio:!0,items:[{id:0,title:"Да"},{id:1,title:"Нет"}],specialType:"employed"},{title:"Укажите адрес организации",fieldName:"org_address",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Телефон организации",type:"tel",mask:!0,fieldName:"org_phone",editable:!0,required:!0,value:"",specialType:"employed"},{title:"Электронная почта организации",type:"email",fieldName:"org_email",value:"",editable:!0,required:!0,specialType:"employed"},{title:"Укажите сферу деятельности организации, в которой Вы трудоустроены",type:"select",width:"100%",value:null,items:E,fieldName:"theme",required:!0,specialType:"employed"},{title:"Укажите диапазон Вашей среднемесячной заработной платы? ",type:"select",width:"100%",value:null,items:b,fieldName:"theme",required:!0,specialType:"employed"},{title:"Укажите численность работников организации, в которой Вы работаете?",type:"select",width:"100%",value:null,items:_,fieldName:"theme",required:!0,specialType:"employed"}]}),h=e=>{const t=e.find(i=>i.fieldName==="currently-employed");let l=null;if(t!=null&&t.value){const i=t==null?void 0:t.value;i.title==="0"&&(l="employed"),i.title==="1"&&(l="unemployed")}return{reason:l}},x=()=>{const[e,t]=d.useState(null),[l,i]=d.useState(!1),[u,p]=d.useState(!1),[o,m]=d.useState({}),a=l??!1,{data:{dataUserApplication:r}}=c.useApplications();return d.useEffect(()=>{r&&t(q(r))},[r]),d.useEffect(()=>{e&&r&&m(h(e.data))},[e]),s.jsx(n,{isDone:a,children:!!e&&!!t&&s.jsxs(y,{children:[s.jsx(f,{...e,collapsed:a,setData:t,specialFieldsNameConfig:o}),s.jsx(v,{text:a?"Отправлено":"Отправить",action:()=>N(S.STUD_EMPLOYMENT,[e],p,i),isLoading:u,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:T(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{x as default};
