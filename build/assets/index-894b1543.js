var f=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))v.call(e,t)&&p(a,t,e[t]);if(c)for(var t of c(e))y.call(e,t)&&p(a,t,e[t]);return a},m=(a,e)=>b(a,x(e));import{r,j as o}from"./vendor-8a1e4858.js";import{bv as S,bz as h,t as A,bA as F,i as g,d6 as N,d1 as _,bB as j}from"./index-54a7c16c.js";const E=[{id:0,title:"Сведения о поступлении в образовательную организацию"},{id:1,title:"Сведения об отчислении из образовательной организации"},{id:2,title:"Сведения об уходе в академический отпуск"},{id:3,title:"Сведения о выходе из академического отпуска"}],k=a=>{const{surname:e,name:t,patronymic:l,email:u,phone:d,divisions_crs:s}=a;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+l,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:d,required:!0},{title:"Email",type:"email",fieldName:"email",value:u,editable:!0,required:!0},{title:"Выберите подразделение",value:null,type:"select",fieldName:"stuctural_subdivision",items:s.map(i=>({id:+i.id,title:i.name+" "+i.contact})),width:"100%",editable:!0,required:!0,isSpecificSelect:!0},{title:"Запрашиваемые документы",value:null,type:"select",fieldName:"doc_type",items:E,width:"100%",editable:!0,required:!0},{title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",value:!1,type:"checkbox",fieldName:"to_commissariats_or_courts",width:"100%",editable:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},I=()=>{const[a,e]=r.useState(null),[t,l]=r.useState(!1),[u,d]=r.useState(!1),s=t!=null?t:!1,{data:{dataUserApplication:i}}=S.useApplications();return r.useEffect(()=>{i&&e(k(i))},[i]),o.jsx(h,{isDone:s,children:!!a&&!!e&&o.jsxs(A,{noHeader:!0,children:[o.jsx(F,m(n({},a),{collapsed:s,setData:e})),o.jsx(g,{text:s?"Отправлено":"Отправить",action:()=>N(_.MILITARY_COPIES,[a],d,l),isLoading:u,completed:t,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:j(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
