import{r as e,j as m}from"./vendor-48260ac4.js";import{f as x,ag as C,ah as j,ai as A,B as E,F as k,I as y,S as B,aj as _,A as D,c as P}from"./index-9ba9ab5c.js";const F=(t=[])=>t.map(s=>({id:s.guid,title:s.name})),O=(t,s,l,h,r,S,u,f,d,g,c,b,i)=>{const o=F(t.head_div);return{title:"Внесение изменений данных подразделения в телефонном справочнике",data:[{fieldName:"guid",title:"Наименование подразделения",value:x(o,s)||F(t.head_div)[0],onChange:a=>l(a.title),editable:o.length>1,width:"100",required:!0,type:"select",items:o,isSpecificSelect:!0},{fieldName:"email",value:h,onChange:r,title:"Общая корпоративная электронная почта",type:"email"},{fieldName:"phone_direct",title:"Общий прямой телефон",type:"tel",value:S,onChange:u,mask:!0},{fieldName:"phone_inner",title:"Общий внутренний телефон",type:"innerPhone",value:f,onChange:d,mask:!0},{fieldName:"address",title:"Адрес рабочего места",type:"select",value:x(C,g),items:C,onChange:a=>{c(a.title),i(j(a.title))},width:"100",editable:!0,required:!0},{fieldName:"room",title:"Номер кабинета",type:"cabinet",mask:!0,value:b,onChange:i,editable:!0,required:!0}]}},M=()=>{const[t,s]=e.useState(null),[l,h]=e.useState(""),[r,S]=e.useState(""),[u,f]=e.useState(""),[d,g]=e.useState(""),[c,b]=e.useState(""),[i,o]=e.useState(""),[a,v]=e.useState(!1),[I,N]=e.useState(!1),p=a??!1,{data:{user:n}}=A.useUser();return e.useEffect(()=>{n&&s(O(n,l,h,r,S,u,f,d,g,c,b,i,o))},[n==null?void 0:n.guid,l,r,u,d,c,i]),m.jsx(E,{isDone:p,children:!!t&&!!s&&m.jsxs(k,{noHeader:!0,children:[m.jsx(y,{...t,collapsed:p,setData:s}),m.jsx(B,{text:p?"Отправлено":"Отправить",action:()=>_(D.EDIT_PHONEBOOK_SUBDIVISION,[t],N,v,!0),isLoading:I,completed:a,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:p,isActive:P(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
