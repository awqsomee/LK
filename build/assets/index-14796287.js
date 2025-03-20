var H=Object.defineProperty,L=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var R=(e,a,t)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))q.call(a,t)&&R(e,t,a[t]);if(E)for(var t of E(a))z.call(a,t)&&R(e,t,a[t]);return e},v=(e,a)=>L(e,U(a));var k=(e,a,t)=>new Promise((o,l)=>{var u=s=>{try{n(t.next(s))}catch(d){l(d)}},i=s=>{try{n(t.throw(s))}catch(d){l(d)}},n=s=>s.done?o(s.value):Promise.resolve(s.value).then(u,i);n((t=t.apply(e,a)).next())});import{p as N,h as G,k as D,f as I,x as y,i as W,r as m,j as c}from"./vendor-60fdf703.js";import{al as $,ak as P,aQ as Q,by as X,bw as Y,b0 as J,b1 as K,bA as h,h as V,e8 as Z,d1 as ee,bB as C}from"./index-ea554b7a.js";const te=e=>k(void 0,null,function*(){const a=new FormData;a.set("token",$());for(const[o,l]of Object.entries(e))a.set(o,l);const{data:t}=yield P.post(`?saveFamilyContacts=1&token=${$()}`,a,{headers:{"Content-Type":"multipart/form-data"}});if(t.result!=="ok")throw new Error(t.error_text);return t}),ae=()=>k(void 0,null,function*(){return(yield P.get(`?getFamilyContacts&token=${$()}`)).data}),B=N({name:"getContacts",sid:"-vkg98w"}),O=N({name:"saveContacts",sid:"zdvs7"}),A=N({name:"formCompleted",sid:"-legib6"}),se=G(!1,{name:"$completed",sid:"yhj3np"}).on(A,(e,a)=>a),x=D({sid:"-kw7m1y",fn:()=>I({handler:ae}),name:"getFamilyContactsQuery",method:"createQuery"}),F=D({sid:"-3lw42o",fn:()=>I({handler:te}),name:"saveFamilyContactsMutation",method:"createQuery"});y({and:[{clock:B,target:x.start}],or:{sid:"-di6jlk"}});y({and:[{clock:O,target:F.start}],or:{sid:"-dfzd84"}});y({and:[{clock:F.$succeeded,fn:()=>({message:"Данные успешно сохранены",type:"success"}),target:Q.evokePopUpMessage}],or:{sid:"-d28ie3"}});y({and:[{clock:F.$succeeded,target:A}],or:{sid:"-cmah6m"}});y({and:[{clock:F.$failed,fn:()=>({message:"Не удалось сохранить данные. Попробуйте еще раз",type:"failure"}),target:Q.evokePopUpMessage}],or:{sid:"-ck3at6"}});const w={contacts:x.$data,completed:se,loading:x.$pending},j={getContacts:B,saveContacts:O,formCompleted:A},oe=e=>e.some(a=>a.data.some(t=>Array.isArray(t)?t.some(o=>o.value):typeof t=="boolean"?t:t.value)),M=[{id:0,title:"Брат"},{id:1,title:"Сестра"},{id:2,title:"Бабушка"},{id:3,title:"Дедушка"},{id:4,title:"Тетя"},{id:5,title:"Дядя"},{id:6,title:"Другое"}],le=(e,{email:a,phone:t})=>({title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}),T=(e,a,{m_fio:t,m_phone:o,m_job:l,f_fio:u,f_phone:i,f_job:n})=>({title:`Контактные данные родителей (${e})`,data:[{title:"Телефон",value:e==="Мать"?o:i,fieldName:a+"phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:e==="Мать"?t:u,fieldName:a+"fio",width:"100%",editable:!0},{title:"Место работы",value:e==="Мать"?l:n,fieldName:a+"job",width:"100%",editable:!0}]}),ie=({relative:e,r_phone:a,r_fio:t,r_job:o})=>({title:"Контактные данные родственников",data:[{title:"Член семьи",value:X(M,e),fieldName:"relative",type:"select",items:M,width:"100%",editable:!0},{title:"Телефон",value:a,fieldName:"r_phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:t,fieldName:"r_fio",width:"100%",editable:!0},{title:"Место работы",value:o,fieldName:"r_job",width:"100%",editable:!0}]}),ne="m_",re="f_",ue=()=>{const[e,a,t,o,l,u]=W([w.contacts,j.getContacts,j.saveContacts,w.loading,w.completed,j.formCompleted]),[i,n]=m.useState(null),[s,d]=m.useState(null),[p,_]=m.useState(null),[f,S]=m.useState(null),r=l!=null?l:!1,{data:{dataUserApplication:b}}=Y.useApplications();return m.useEffect(()=>{a()},[]),m.useEffect(()=>{b&&e&&(n(le(b,e)),d(T("Мать",ne,e)),_(T("Отец",re,e)),S(ie(e)))},[b,e]),c.jsx(J,{isDone:r,children:!!i&&!!s&&!!p&&!!f&&c.jsxs(K,{noHeader:!0,children:[c.jsx(h,v(g({},i),{collapsed:r,setData:n})),c.jsx(h,v(g({},s),{collapsed:r,setData:d})),c.jsx(h,v(g({},p),{collapsed:r,setData:_})),c.jsx(h,v(g({},f),{collapsed:r,setData:S})),c.jsx(V,{text:r?"Отправлено":"Отправить",action:()=>{t(Z(ee.FAMILY_CONTACTS,[i,s,p,f]))},isLoading:o,completed:l,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:C(i)&&C(s)&&C(p)&&C(f)&&oe([s,p,f]),popUpFailureMessage:"Для отправки формы необходимо, чтобы хотя бы одно поле было заполнено",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ue as default};
