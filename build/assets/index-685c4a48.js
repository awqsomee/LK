import{s as E,j as e,r as t}from"./vendor-48260ac4.js";import{s as R,B as A,F as T,h as L,M as B,cR as P,S as k,aj as U,j as I,c as a}from"./index-681e9271.js";const W=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"В разводе"},{id:3,title:"Вдовец"}],z=[{id:0,title:"Начальный"},{id:1,title:"Базовый"},{id:2,title:"Со словарем"},{id:3,title:"Разговорный"},{id:4,title:"Свободно"}],G=[{id:0,title:"Cреднее общее"},{id:1,title:"Cреднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],H=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Брат"},{id:2,title:"Сестра"}],Y=[{id:0,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:1,title:"Военный билет"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Справка взамен военного билета"}],J=l=>{const{surname:s,name:r,patronymic:o,email:d,phone:n,birthday:u}=l;return{title:"Персональные данные",data:[{title:"ФИО",fieldName:"fio",value:s+" "+r+" "+o,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:n,required:!0},{title:"Email",type:"email",fieldName:"email",value:d,editable:!0,required:!0},{title:"Дата рождения",fieldName:"birth_date",type:"date",value:u,editable:!0,required:!0},{title:"Место рождения",fieldName:"birth_place",value:"",editable:!0,required:!0,hint:"Республика, край, область, район, город, населенный пункт"},{title:"Состояние в браке",value:null,fieldName:"marital_status",type:"select",items:W,width:"100%",editable:!0,required:!0}]}},K=()=>({title:"Владение иностранными языками",id:"foreign_languages",data:[],default:[[{fieldName:"lang",title:"Иностранный язык",value:"",editable:!0,width:"50%"},{fieldName:"proficiency",title:"Степень владения",value:null,type:"select",items:z,width:"50%",editable:!0}]],addNew:!0}),O=()=>({title:"Образование и профессия",data:[{title:"Образование",fieldName:"",value:"Образование",type:"text-header",visible:!0},{title:"Уровень образования",value:null,fieldName:"education",type:"select",items:G,width:"100%",editable:!0,required:!0},{title:"Наименование образовательной организации",fieldName:"edu_name",value:"",editable:!0,required:!0},{title:"Квалификация",fieldName:"edu_qualification",value:"",editable:!0},{title:"Специальность, направление подготовки",fieldName:"edu_specialty",value:"",editable:!0},{title:"Серия и номер диплома, свидетельства",fieldName:"edu_document",value:"",editable:!0,required:!0},{title:"Год окончания",fieldName:"edu_graduation_year",value:"",type:"number",editable:!0,required:!0},{title:"Профессия",fieldName:"",value:"Профессия",type:"text-header",visible:!0},{title:"Основная",fieldName:"prof_main",value:"",editable:!0},{title:"Дополнительная",fieldName:"prof_add",value:"",editable:!0}]}),Q=()=>({title:"Состав семьи",id:"family_members",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:H,width:"100%",required:!0},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"birth_date",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{title:"Близкие родственники отсутствуют",fieldName:"no_family_members",value:!1}}),V=()=>({title:"Адрес места жительства",data:[{title:"Адрес места жительства в соответствии с регистрацией",fieldName:"reg_address",value:"",hint:"Область, город, улица, дом, корпус, квартира",editable:!0,required:!0},{title:"Индекс",fieldName:"reg_index",value:"",editable:!0,required:!0,width:"40%"},{fieldName:"reg_date",title:"Дата регистрации по месту жительства",value:"",editable:!0,type:"date",required:!0},{title:"Адрес места жительства фактический",fieldName:"act_address",value:"",editable:!0,required:!0},{title:"Индекс",fieldName:"act_index",value:"",hint:"Область, город, улица, дом, корпус, квартира",editable:!0,required:!0,width:"40%"},{fieldName:"act_date",title:"Дата начала проживания",value:"",editable:!0,type:"date",required:!0}],documents:{files:[],fieldName:"address_doc",required:!0,maxFiles:1,allowedTypes:["application/pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsx(y,{children:e.jsx("li",{children:"документ для временной регистрации;"})})]})}),j=()=>({title:"Водительское удостоверение",data:[{fieldName:"driver_series",title:"Серия",value:"",editable:!0,width:"40%"},{fieldName:"driver_number",title:"Номер",value:"",editable:!0,width:"40%"},{fieldName:"driver_category",title:"Категории ТС",value:"",editable:!0},{fieldName:"drivers_date_of_issue",title:"Дата выдачи",value:"",type:"date",editable:!0,width:"40%"}]}),X=()=>({title:"Паспортные данные",data:[{fieldName:"passport_series",title:"Серия",value:"",editable:!0,required:!0,width:"40%"},{fieldName:"passport_number",title:"Номер",value:"",editable:!0,required:!0,width:"40%"},{title:"Кем выдан",type:"textarea",fieldName:"passport_issued_by",value:"",editable:!0},{fieldName:"passport_date_of_issue",title:"Дата выдачи",value:"",type:"date",editable:!0,required:!0,width:"40%"},{fieldName:"passport_division_code",title:"Код подразделения",value:"",editable:!0,required:!0,width:"40%"}],documents:{files:[],fieldName:"passport_doc",required:!0,maxFiles:1,allowedTypes:["application/pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsx(y,{children:e.jsx("li",{children:"паспорт (стр. 1-2 и регистрацию);"})})]})}),Z=()=>({title:"Сведения воинского учета",data:[{fieldName:"military_enlistment_office",title:"Наименование военного комиссариата по месту жительства",value:"",required:!0,editable:!0},{fieldName:"military_document_type",title:"Вид документа",value:null,type:"select",items:Y,width:"100%",required:!0,editable:!0},{fieldName:"military_series",title:"Серия",value:"",editable:!0,width:"40%"},{fieldName:"military_number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"military_issued_by",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"military_date_of_issue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"military_doc",required:!0,maxFiles:1,allowedTypes:["application/pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsxs(y,{children:[e.jsx("li",{children:"удостоверение гражданина, подлежащего призыву;"}),e.jsx("li",{children:"военный билет."})]})]})}),y=E.ul.withConfig({componentId:"sc-1xd645o-0"})(["padding-left:1rem;"]),te=()=>{var F;const[l,s]=t.useState(null),[r,o]=t.useState(null),[d,n]=t.useState(null),[u,_]=t.useState(null),[m,h]=t.useState(null),[i,f]=t.useState(null),[c,N]=t.useState(null),[p,g]=t.useState(null),[b,x]=t.useState(!1),[S,D]=t.useState(!1),{data:{dataUserApplication:v}}=R.useApplications();t.useEffect(()=>{v&&(s(J(v)),o(K()),n(O()),_(Q()),h(V()),f(j()),N(X()),g(Z()))},[v]);const C=t.useMemo(()=>{var q,w;return((w=(q=i==null?void 0:i.data[0])==null?void 0:q.value)==null?void 0:w.id)!==0},[(F=i==null?void 0:i.data[0])==null?void 0:F.value]);if(t.useEffect(()=>{i&&f(j())},[C]),!l||!r||!d||!u||!m||!i||!c||!p)return null;const M=[[{dataForm:l,setDataForm:s}],[{dataForm:r,setDataForm:o}],[{dataForm:d,setDataForm:n}],[{dataForm:u,setDataForm:_}],[{dataForm:m,setDataForm:h}],[{dataForm:i,setDataForm:f}],[{dataForm:c,setDataForm:N}],[{dataForm:p,setDataForm:g}]];return e.jsx(A,{isDone:!1,children:e.jsxs(T,{noHeader:!0,children:[e.jsx(L,{size:3,align:"left",children:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу (форма 10)"}),e.jsx(B,{type:"info",children:"Сервис предназначен для постановки на воинский учет обучающихся - граждан, пребывающих в запасе и граждан, подлежащих призыву."}),e.jsx(P,{stagesConfig:M}),e.jsx(k,{text:b?"Отправлено":"Отправить",action:()=>U(I.MILITARY_REG,[l,r,d,u,m,i,c,p],D,x),isLoading:S,completed:b,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:a(l)&&a(r)&&a(d)&&a(u)&&a(m)&&a(i)&&a(c)&&a(p),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{te as default};
