import{p as w,h as D,m as A,I as E,x as u,n as P,r,j as l}from"./vendor-0d3de025.js";import{f as B,g as k,$ as I,d as R,s as O,B as Q,F as H,I as f,S as L,dd as U,j as q,c as g}from"./index-1f51b962.js";const S=[{id:0,title:"Брат"},{id:1,title:"Сестра"},{id:2,title:"Бабушка"},{id:3,title:"Дедушка"},{id:4,title:"Тетя"},{id:5,title:"Дядя"},{id:6,title:"Другое"}],z=(e,{email:t,phone:a})=>({title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:a,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:t,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}),_=(e,t,{m_fio:a,m_phone:s,m_job:i,f_fio:y,f_phone:n,f_job:p})=>({title:`Контактные данные родителей (${e})`,data:[{title:"Телефон",value:e==="Мать"?s:n,fieldName:t+"phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:e==="Мать"?a:y,fieldName:t+"fio",width:"100%",editable:!0},{title:"Место работы",value:e==="Мать"?i:p,fieldName:t+"job",width:"100%",editable:!0}]}),G=({relative:e,r_phone:t,r_fio:a,r_job:s})=>({title:"Контактные данные родственников",data:[{title:"Член семьи",value:B(S,e),fieldName:"relative",type:"select",items:S,width:"100%",editable:!0},{title:"Телефон",value:t,fieldName:"r_phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:a,fieldName:"r_fio",width:"100%",editable:!0},{title:"Место работы",value:s,fieldName:"r_job",width:"100%",editable:!0}]}),W=e=>e.some(t=>t.data.some(a=>Array.isArray(a)?a.some(s=>s.value):typeof a=="boolean"?a:a.value)),X=async e=>{const t=new FormData;t.set("token",k());for(const[s,i]of Object.entries(e))t.set(s,i);const{data:a}=await I.post(`?saveFamilyContacts=1&token=${k()}`,t,{headers:{"Content-Type":"multipart/form-data"}});if(a.result!=="ok")throw new Error(a.error_text);return a},Y=async()=>(await I.get(`?getFamilyContacts&token=${k()}`)).data,M=w({name:"getContacts",sid:"-vkg98w"}),T=w({name:"saveContacts",sid:"zdvs7"}),$=w({name:"formCompleted",sid:"-legib6"}),J=D(!1,{name:"$completed",sid:"yhj3np"}).on($,(e,t)=>t),b=A({sid:"-kw7m1y",fn:()=>E({handler:Y}),name:"getFamilyContactsQuery",method:"createQuery"}),v=A({sid:"-3lw42o",fn:()=>E({handler:X}),name:"saveFamilyContactsMutation",method:"createQuery"});u({and:[{clock:M,target:b.start}],or:{sid:"-di6jlk"}});u({and:[{clock:T,target:v.start}],or:{sid:"-dfzd84"}});u({and:[{clock:v.$succeeded,fn:()=>({message:"Данные успешно сохранены",type:"success"}),target:R.evokePopUpMessage}],or:{sid:"-d28ie3"}});u({and:[{clock:v.$succeeded,target:$}],or:{sid:"-cmah6m"}});u({and:[{clock:v.$failed,fn:()=>({message:"Не удалось сохранить данные. Попробуйте еще раз",type:"failure"}),target:R.evokePopUpMessage}],or:{sid:"-ck3at6"}});const C={contacts:b.$data,completed:J,loading:b.$pending},F={getContacts:M,saveContacts:T,formCompleted:$},K="m_",V="f_",te=()=>{const[e,t,a,s,i,y]=P([C.contacts,F.getContacts,F.saveContacts,C.loading,C.completed,F.formCompleted]),[n,p]=r.useState(null),[c,j]=r.useState(null),[d,x]=r.useState(null),[m,N]=r.useState(null),o=i??!1,{data:{dataUserApplication:h}}=O.useApplications();return r.useEffect(()=>{t()},[]),r.useEffect(()=>{h&&e&&(p(z(h,e)),j(_("Мать",K,e)),x(_("Отец",V,e)),N(G(e)))},[h,e]),l.jsx(Q,{isDone:o,children:!!n&&!!c&&!!d&&!!m&&l.jsxs(H,{noHeader:!0,children:[l.jsx(f,{...n,collapsed:o,setData:p}),l.jsx(f,{...c,collapsed:o,setData:j}),l.jsx(f,{...d,collapsed:o,setData:x}),l.jsx(f,{...m,collapsed:o,setData:N}),l.jsx(L,{text:o?"Отправлено":"Отправить",action:()=>{a(U(q.FAMILY_CONTACTS,[n,c,d,m]))},isLoading:s,completed:i,setCompleted:y,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:g(n)&&g(c)&&g(d)&&g(m)&&W([c,d,m]),popUpFailureMessage:"Для отправки формы необходимо, чтобы хотя бы одно поле было заполнено",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{te as default};
