import{d as P,p as o,h as d,m as q,a4 as z,x as u,q as a,r as I,j as i}from"./vendor-48260ac4.js";import{cQ as f,e as C,d as R,B as W,F as G,a1 as H,p as g,x as j,h as O,b0 as Q,S as J}from"./index-77abc1a4.js";const K="https://api.mospolytech.ru/config",X=P.create({baseURL:K}),Y=async t=>{const e=new FormData;e.append("note",t.note),e.append("name",t.name),e.append("phone",t.phone),e.append("email",t.email),e.append("locationId",t.location.id),e.append("stackId",t.stack.id),e.append("file",t.files[0]);const{data:n}=await X.post("/robot",e,{headers:{"Content-Type":"multipart/form-data"}});return n},c=o({name:"pageMounted",sid:"ygwyh4"}),$=o({name:"sendForm",sid:"gwkue4"}),k=o({name:"setFiles",sid:"yw5hci"}),F=o({name:"setName",sid:"crkkvu"}),b=o({name:"setPhone",sid:"fv3bys"}),N=o({name:"setEmail",sid:"h49kip"}),v=o({name:"setNote",sid:"nq529n"}),S=o({name:"setStack",sid:"-h47dth"}),M=o({name:"setLocation",sid:"ldhemb"}),w=d([],{name:"$files",sid:"szt0m0"}).on(k,(t,e)=>e).reset(c),_=d("",{name:"$note",sid:"hqvmor"}).on(v,(t,e)=>e).reset(c),y=d("",{name:"$name",sid:"-8ak1bh"}).on(F,(t,e)=>e).on(f.applications,(t,{dataUserApplication:e})=>{if(!e)return"";const{name:n,surname:m,patronymic:p}=e;return`${n} ${m} ${p}`}),B=d("",{name:"$phone",sid:"3tiv7w"}).on(b,(t,e)=>e).on(f.applications,(t,{dataUserApplication:e})=>(e==null?void 0:e.phone)??""),E=d("",{name:"$email",sid:"fyqeua"}).on(N,(t,e)=>e).on(f.applications,(t,{dataUserApplication:e})=>(e==null?void 0:e.email)??""),L=d(null,{name:"$stack",sid:"-hsox3p"}).on(S,(t,e)=>e).reset(c),D=d(null,{name:"$location",sid:"r0fcgs"}).on(M,(t,e)=>e).reset(c),T=d("",{name:"$applicationNumber",sid:"asehjt"}).reset(c),r=q({sid:"81qzfe",fn:()=>z({handler:Y}),name:"sendFormMutation",method:"createMutation"});u({and:[{clock:c,target:[r.reset,C.getUserDataApplicationsFx]}],or:{sid:"pshut6"}});u({and:[{clock:$,source:{files:w,name:y,phone:B,email:E,note:_,stack:L,location:D},fn:({files:t,name:e,phone:n,email:m,note:p,stack:h,location:x})=>({files:t,name:e,phone:n,email:m,note:p,stack:h,location:x}),target:r.start}],or:{sid:"pup16m"}});u({and:[{clock:r.finished.success,fn:({result:t})=>t.applicationNumber,target:T}],or:{sid:"r9twd7"}});u({and:[{clock:r.$failed,fn:()=>({message:"Произошла ошибка. Попробуйте позднее",type:"failure"}),target:R.evokePopUpMessage}],or:{sid:"rp84zb"}});const l={pageMounted:c,setFiles:k,setName:F,setPhone:b,setEmail:N,setNote:v,setStack:S,setLocation:M,sendForm:$},s={files:w,note:_,name:y,phone:B,email:E,stack:L,location:D,loading:r.$pending,done:r.$succeeded,applicationNumber:T},ce=()=>{const[t,e,n]=a([l.pageMounted,s.done,s.applicationNumber]);return I.useEffect(()=>{t()},[]),i.jsx(W,{isDone:e,children:i.jsx(G,{noHeader:!0,children:e?i.jsxs(i.Fragment,{children:["Спасибо! Ваш номер заявки ",n,"."]}):i.jsxs(i.Fragment,{children:[i.jsx(Z,{}),i.jsx(A,{}),i.jsx(U,{}),i.jsx(ee,{}),i.jsx(te,{}),i.jsx(ie,{}),i.jsx(se,{}),i.jsx(ne,{})]})})})},Z=()=>{const[t,e]=a([s.note,l.setNote]);return i.jsx(H,{placeholder:"Опишите проблему и точное местоположение",required:!0,title:"Опишите проблему и точное местоположение",value:t,setValue:e})},A=()=>{const[t,e]=a([s.name,l.setName]);return i.jsx(g,{title:"ФИО",required:!0,value:t,setValue:e})},U=()=>{const[t,e]=a([s.phone,l.setPhone]);return i.jsx(g,{title:"Контактный телефон",required:!0,value:t,setValue:e})},ee=()=>{const[t,e]=a([s.email,l.setEmail]);return i.jsx(g,{title:"Email для уведомлений",value:t,setValue:e})},te=()=>{const[t,e]=a([s.location,l.setLocation]);return i.jsx(j,{title:"Локация",required:!0,width:"100%",items:oe,selected:t,setSelected:e,withSearch:!0})},ie=()=>{const[t,e]=a([s.stack,l.setStack]);return i.jsx(j,{title:"Отдел",required:!0,width:"100%",items:ae,selected:t,setSelected:e,withSearch:!0})},se=()=>{const[t,e]=a([s.files,l.setFiles]);return i.jsxs(i.Fragment,{children:[i.jsx(O,{size:4,align:"left",bottomGap:"5px",children:"Фотография"}),i.jsx(Q,{files:t,setFiles:e,isActive:!0})]})},ne=()=>{const[t,e,n,m,p,h,x,V]=a([l.sendForm,s.done,s.loading,s.note,s.name,s.phone,s.location,s.stack]);return i.jsx(J,{text:e?"Отправлено":"Отправить",action:t,isLoading:n,completed:e,setCompleted:()=>{},repeatable:!1,buttonSuccessText:"Отправлено",isDone:e,isActive:!!m&&!!p&&!!h&&!!x&&!!V,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})},oe=[{id:"1679",title:"Б. Семеновская 38; Корпус А"},{id:"1680",title:"Б. Семеновская 38; Корпус Б"},{id:"1681",title:"Б. Семеновская 38; Корпус В"},{id:"1682",title:"Б. Семеновская 38; Корпус Н"},{id:"1683",title:"Б. Семеновская 38; Корпус НД"},{id:"1684",title:"М. Семеновская 12; Общежитие №1"},{id:"1685",title:"7-я Парковая 9/26; Общежитие №2"},{id:"1686",title:"11-я Парковая 36 стр.2; Спорт зал"},{id:"1865",title:"ул. Большая Семеновская 38"},{id:"1866",title:"ул. Малая Семеновская 12 стр.2"},{id:"1867",title:"ул. 7-я Парковая 9/26"},{id:"1868",title:"ул. 11-я Парковая 36 стр.2"},{id:"1869",title:"ул. Лефортовский вал 26"},{id:"1870",title:"ул. Лефортовский вал 26; Учебный корпус"},{id:"1873",title:"ул. Садовая - Спасская 4, стр.1"},{id:"1875",title:"ул. Садовая - Спасская 4, стр.3"},{id:"1877",title:"ул. Садовая - Спасская 4, стр.4"},{id:"1879",title:"ул. Садовая - Спасская 4, стр.5"},{id:"1881",title:"ул. Бориса Галушкина 9"},{id:"1882",title:"ул. Бориса Галушкина 9; Общежитие №6"},{id:"1885",title:"ул. Рижский проезд 15, к.2"},{id:"1888",title:"ул. Прянишникова, 2А, к.1"},{id:"1889",title:"ул. Прянишникова, 2А, к.1; Учебный корпус"},{id:"1890",title:"ул. Прянишникова, 2А, к.2"},{id:"1891",title:"ул. Прянишникова, 2А, к.2; Учебный корпус"},{id:"1892",title:"ул. Прянишникова, 2А, к.3"},{id:"1893",title:"ул. Прянишникова, 2А, к.3; Учебный корпус"},{id:"1894",title:"ул. Михалковская, 7, стр. 4"},{id:"1895",title:"ул. Михалковская, 7, стр. 4; Учебный корпус"},{id:"1896",title:"ул. Михалковская, 7, стр. 2"},{id:"1897",title:"ул. Михалковская, 7, стр. 2; Учебный корпус"},{id:"1898",title:"ул. Михалковская, 7, стр. 3"},{id:"1899",title:"ул. Михалковская, 7, к.3"},{id:"1900",title:"ул. 800-летия Москвы, 28, к.1"},{id:"1901",title:"ул. 800-летия Москвы, 28, к.1; Общежитие № 4"},{id:"1902",title:"ул. 1-й Балтийский переулок, 6/21, к.3"},{id:"1903",title:"ул. 1-й Балтийский переулок, 6/21, к.3; Общежитие № 10"},{id:"1907",title:"ул. Автозаводская, д.16, стр.2 (2-х этаж. пристр.)"},{id:"1908",title:"ул. Автозаводская, д.16, стр.4 (корп3)"},{id:"1909",title:"ул. Автозаводская, д.16, стр.5 (корп4)"},{id:"1910",title:"ул. 1-ая Дубровская, д.16А, стр.1"},{id:"1911",title:"ул. 1-ая Дубровская, д.16А, стр.1; Учебный корпус"},{id:"1912",title:"ул. 1-ая Дубровская, д.16А, стр. 2"},{id:"1913",title:"ул. 1-ая Дубровская, д.16А, стр. 2; Учебный корпус"},{id:"5084",title:"ул. Прянишникова 2А"},{id:"5085",title:"ул. Михалковская, 7"},{id:"5095",title:"ул. Павла Корчагина 22 стр.1, 2, 3"},{id:"5101",title:"ул. Павла Корчагина 22 стр.2"},{id:"5102",title:"ул. Павла Корчагина 22 стр.1"},{id:"5103",title:"ул. Павла Корчагина 22 стр.3"},{id:"5104",title:"ул. Павла Корчагина 22 стр.5"},{id:"5105",title:"ул. Павла Корчагина 22 стр.6"},{id:"5106",title:"ул. Павла Корчагина 20а, к.3 Общежитие №7"},{id:"5107",title:"ул. Садовая - Спасская 4, стр.2; Учебный корпус"},{id:"5108",title:"ул. Садовая - Спасская 4, стр.6"},{id:"5109",title:"ул. Садовая - Спасская 4, стр.8"},{id:"5110",title:"ул. Садовая - Спасская 6, стр.1"},{id:"5111",title:"ул. Рижский проезд 15, к.1"},{id:"5857",title:"ул. Автозаводская 16 (корп.1,2)"},{id:"5858",title:"ул. Автозаводская 16 стр 1 (корп5)"},{id:"5863",title:"ул. Павла Корчагина 22а, к.2, общежитие №11"}],ae=[{id:"348",title:"Сантехника"},{id:"349",title:"Электрика"},{id:"350",title:"Плотники"},{id:"378",title:"Лифты"},{id:"379",title:"Уборка"},{id:"481",title:"Техническая поддержка"},{id:"488",title:"Диспетчер"},{id:"489",title:"Охрана"}];export{ce as default};
