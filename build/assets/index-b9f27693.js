var F=(e,t,s)=>new Promise((r,d)=>{var h=m=>{try{f(s.next(m))}catch(k){d(k)}},x=m=>{try{f(s.throw(m))}catch(k){d(k)}},f=m=>m.done?r(m.value):Promise.resolve(m.value).then(h,x);f((s=s.apply(e,t)).next())});import{d as z,p as a,h as c,m as A,a4 as q,x as j,n as o,r as R,j as i}from"./vendor-249420f4.js";import{cx as $,a$ as H,e as W,aa as G,F as Q,Q as U,d as g,m as v,T as J,aI as K,S as O}from"./index-72b1dbf4.js";const X="https://api.mospolytech.ru/lk",Y=z.create({baseURL:X}),Z=e=>F(void 0,null,function*(){const t=new FormData;t.append("note",e.note),t.append("name",e.name),t.append("phone",e.phone),t.append("email",e.email),t.append("locationId",e.location.id),t.append("stackId",e.stack.id),t.append("file",e.files[0]);const{data:s}=yield Y.post("/ksuto",t,{headers:{"Content-Type":"multipart/form-data"}});return s.data}),p=a({name:"pageMounted",sid:"ygwyh4"}),N=a({name:"sendForm",sid:"gwkue4"}),b=a({name:"setFiles",sid:"yw5hci"}),M=a({name:"setName",sid:"crkkvu"}),S=a({name:"setPhone",sid:"fv3bys"}),_=a({name:"setEmail",sid:"h49kip"}),w=a({name:"setNote",sid:"nq529n"}),E=a({name:"setStack",sid:"-h47dth"}),y=a({name:"setLocation",sid:"ldhemb"}),T=c([],{name:"$files",sid:"szt0m0"}).on(b,(e,t)=>t).reset(p),B=c("",{name:"$note",sid:"hqvmor"}).on(w,(e,t)=>t).reset(p),L=c("",{name:"$name",sid:"-8ak1bh"}).on(M,(e,t)=>t).on($.applications,(e,{dataUserApplication:t})=>{if(!t)return"";const{name:s,surname:r,patronymic:d}=t;return`${s} ${r} ${d}`}),I=c("",{name:"$phone",sid:"3tiv7w"}).on(S,(e,t)=>t).on($.applications,(e,{dataUserApplication:t})=>{var s;return(s=t==null?void 0:t.phone)!=null?s:""}),D=c("",{name:"$email",sid:"fyqeua"}).on(_,(e,t)=>t).on($.applications,(e,{dataUserApplication:t})=>{var s;return(s=t==null?void 0:t.email)!=null?s:""}),V=c(null,{name:"$stack",sid:"-hsox3p"}).on(E,(e,t)=>t).reset(p),C=c(null,{name:"$location",sid:"r0fcgs"}).on(y,(e,t)=>t).reset(p),P=c("",{name:"$applicationNumber",sid:"asehjt"}).reset(p),u=A({sid:"81qzfe",fn:()=>q({handler:Z}),name:"sendFormMutation",method:"createMutation"});j({and:[{clock:p,target:[u.reset,H.getUserDataApplicationsFx]}],or:{sid:"pshut6"}});j({and:[{clock:N,source:{files:T,name:L,phone:I,email:D,note:B,stack:V,location:C},fn:({files:e,name:t,phone:s,email:r,note:d,stack:h,location:x})=>({files:e,name:t,phone:s,email:r,note:d,stack:h,location:x}),target:u.start}],or:{sid:"pup16m"}});j({and:[{clock:u.finished.success,fn:({result:e})=>e.applicationNumber,target:P}],or:{sid:"r9twd7"}});j({and:[{clock:u.$failed,fn:()=>({message:"Произошла ошибка. Попробуйте позднее",type:"failure"}),target:W.evokePopUpMessage}],or:{sid:"rp84zb"}});const l={pageMounted:p,setFiles:b,setName:M,setPhone:S,setEmail:_,setNote:w,setStack:E,setLocation:y,sendForm:N},n={files:T,note:B,name:L,phone:I,email:D,stack:V,location:C,loading:u.$pending,done:u.$succeeded,applicationNumber:P},ut=()=>{const[e,t,s]=o([l.pageMounted,n.done,n.applicationNumber]);return R.useEffect(()=>{e()},[]),i.jsx(G,{isDone:t,children:i.jsx(Q,{noHeader:!0,children:t?i.jsxs(i.Fragment,{children:["Спасибо! Ваш номер заявки ",s,"."]}):i.jsxs(i.Fragment,{children:[i.jsx(tt,{}),i.jsx(et,{}),i.jsx(it,{}),i.jsx(st,{}),i.jsx(nt,{}),i.jsx(at,{}),i.jsx(ot,{}),i.jsx(lt,{})]})})})},tt=()=>{const[e,t]=o([n.note,l.setNote]);return i.jsx(U,{placeholder:"Опишите проблему и точное местоположение",required:!0,title:"Опишите проблему и точное местоположение",value:e,setValue:t})},et=()=>{const[e,t]=o([n.name,l.setName]);return i.jsx(g,{title:"ФИО",required:!0,value:e,setValue:t})},it=()=>{const[e,t]=o([n.phone,l.setPhone]);return i.jsx(g,{title:"Контактный телефон",required:!0,value:e,setValue:t})},st=()=>{const[e,t]=o([n.email,l.setEmail]);return i.jsx(g,{title:"Email для уведомлений",value:e,setValue:t})},nt=()=>{const[e,t]=o([n.location,l.setLocation]);return i.jsx(v,{title:"Локация",required:!0,width:"100%",items:dt,selected:e,setSelected:t,withSearch:!0})},at=()=>{const[e,t]=o([n.stack,l.setStack]);return i.jsx(v,{title:"Отдел",required:!0,width:"100%",items:ct,selected:e,setSelected:t,withSearch:!0})},ot=()=>{const[e,t]=o([n.files,l.setFiles]);return i.jsxs(i.Fragment,{children:[i.jsx(J,{size:4,align:"left",bottomGap:"5px",children:"Фотография"}),i.jsx(K,{files:e,setFiles:t,isActive:!0})]})},lt=()=>{const[e,t,s,r,d,h,x,f]=o([l.sendForm,n.done,n.loading,n.note,n.name,n.phone,n.location,n.stack]);return i.jsx(O,{text:t?"Отправлено":"Отправить",action:e,isLoading:s,completed:t,setCompleted:()=>{},repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:!!r&&!!d&&!!h&&!!x&&!!f,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})},dt=[{id:"1679",title:"Б. Семеновская 38; Корпус А"},{id:"1680",title:"Б. Семеновская 38; Корпус Б"},{id:"1681",title:"Б. Семеновская 38; Корпус В"},{id:"1682",title:"Б. Семеновская 38; Корпус Н"},{id:"1683",title:"Б. Семеновская 38; Корпус НД"},{id:"1684",title:"М. Семеновская 12; Общежитие №1"},{id:"1685",title:"7-я Парковая 9/26; Общежитие №2"},{id:"1686",title:"11-я Парковая 36 стр.2; Спорт зал"},{id:"1865",title:"ул. Большая Семеновская 38"},{id:"1866",title:"ул. Малая Семеновская 12 стр.2"},{id:"1867",title:"ул. 7-я Парковая 9/26"},{id:"1868",title:"ул. 11-я Парковая 36 стр.2"},{id:"1869",title:"ул. Лефортовский вал 26"},{id:"1870",title:"ул. Лефортовский вал 26; Учебный корпус"},{id:"1873",title:"ул. Садовая - Спасская 4, стр.1"},{id:"1875",title:"ул. Садовая - Спасская 4, стр.3"},{id:"1877",title:"ул. Садовая - Спасская 4, стр.4"},{id:"1879",title:"ул. Садовая - Спасская 4, стр.5"},{id:"1881",title:"ул. Бориса Галушкина 9"},{id:"1882",title:"ул. Бориса Галушкина 9; Общежитие №6"},{id:"1885",title:"ул. Рижский проезд 15, к.2"},{id:"1888",title:"ул. Прянишникова, 2А, к.1"},{id:"1889",title:"ул. Прянишникова, 2А, к.1; Учебный корпус"},{id:"1890",title:"ул. Прянишникова, 2А, к.2"},{id:"1891",title:"ул. Прянишникова, 2А, к.2; Учебный корпус"},{id:"1892",title:"ул. Прянишникова, 2А, к.3"},{id:"1893",title:"ул. Прянишникова, 2А, к.3; Учебный корпус"},{id:"1894",title:"ул. Михалковская, 7, стр. 4"},{id:"1895",title:"ул. Михалковская, 7, стр. 4; Учебный корпус"},{id:"1896",title:"ул. Михалковская, 7, стр. 2"},{id:"1897",title:"ул. Михалковская, 7, стр. 2; Учебный корпус"},{id:"1898",title:"ул. Михалковская, 7, стр. 3"},{id:"1899",title:"ул. Михалковская, 7, к.3"},{id:"1900",title:"ул. 800-летия Москвы, 28, к.1"},{id:"1901",title:"ул. 800-летия Москвы, 28, к.1; Общежитие № 4"},{id:"1902",title:"ул. 1-й Балтийский переулок, 6/21, к.3"},{id:"1903",title:"ул. 1-й Балтийский переулок, 6/21, к.3; Общежитие № 10"},{id:"1907",title:"ул. Автозаводская, д.16, стр.2 (2-х этаж. пристр.)"},{id:"1908",title:"ул. Автозаводская, д.16, стр.4 (корп3)"},{id:"1909",title:"ул. Автозаводская, д.16, стр.5 (корп4)"},{id:"1910",title:"ул. 1-ая Дубровская, д.16А, стр.1"},{id:"1911",title:"ул. 1-ая Дубровская, д.16А, стр.1; Учебный корпус"},{id:"1912",title:"ул. 1-ая Дубровская, д.16А, стр. 2"},{id:"1913",title:"ул. 1-ая Дубровская, д.16А, стр. 2; Учебный корпус"},{id:"5084",title:"ул. Прянишникова 2А"},{id:"5085",title:"ул. Михалковская, 7"},{id:"5095",title:"ул. Павла Корчагина 22 стр.1, 2, 3"},{id:"5101",title:"ул. Павла Корчагина 22 стр.2"},{id:"5102",title:"ул. Павла Корчагина 22 стр.1"},{id:"5103",title:"ул. Павла Корчагина 22 стр.3"},{id:"5104",title:"ул. Павла Корчагина 22 стр.5"},{id:"5105",title:"ул. Павла Корчагина 22 стр.6"},{id:"5106",title:"ул. Павла Корчагина 20а, к.3 Общежитие №7"},{id:"5107",title:"ул. Садовая - Спасская 4, стр.2; Учебный корпус"},{id:"5108",title:"ул. Садовая - Спасская 4, стр.6"},{id:"5109",title:"ул. Садовая - Спасская 4, стр.8"},{id:"5110",title:"ул. Садовая - Спасская 6, стр.1"},{id:"5111",title:"ул. Рижский проезд 15, к.1"},{id:"5857",title:"ул. Автозаводская 16 (корп.1,2)"},{id:"5858",title:"ул. Автозаводская 16 стр 1 (корп5)"},{id:"5863",title:"ул. Павла Корчагина 22а, к.2, общежитие №11"}],ct=[{id:"348",title:"Сантехника"},{id:"349",title:"Электрика"},{id:"350",title:"Плотники"},{id:"378",title:"Лифты"},{id:"379",title:"Уборка"},{id:"481",title:"Техническая поддержка"},{id:"488",title:"Диспетчер"},{id:"489",title:"Охрана"}];export{ut as default};
