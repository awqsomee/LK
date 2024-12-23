import{m as $,n as W,a4 as N,p as g,h,x as r,q as T,r as A,j as n,F as H,a2 as Y,a1 as G,s as J}from"./vendor-48260ac4.js";import{g as k,$ as y,d as V,B,F as q,G as _,V as K,h as X,M as Z,q as E,i as ee,S as te,p as I,L as ne}from"./index-7f995b81.js";import{c as ae}from"./create-checkbox-field-5e9782a4.js";const se=async()=>{new FormData().set("token",k());const{data:e}=await y.get(`?getChildren&token=${k()}`);return e},re=async t=>{const e=new FormData;e.set("token",k()),e.set("children",JSON.stringify(t));const{data:a}=await y.post("?saveChildren=1",e,{headers:{"Content-Type":"multipart/form-data"}});if(a.result!=="ok")throw new Error(a.errors);return a},ie=async({id:t})=>{const{data:e}=await y.get(`?deleteChildren=${t}&token=${k()}`);if(e.result!=="ok")throw new Error(e.errors);return e};function b(t){return!Number.isNaN(Number(t))}const m=$({sid:"enrs6o",fn:()=>W({handler:se}),name:"getChildrensQuery",method:"createQuery"}),p=$({sid:"mx4uph",fn:()=>N({handler:re}),name:"saveChildrensMutation",method:"createMutation"}),M=$({sid:"-6tjplu",fn:()=>N({handler:ie}),name:"deleteChildrenMutation",method:"createMutation"}),d=g({name:"pageMounted",sid:"e105tx"}),S=g({name:"addChildren",sid:"vq20kt"}),O=g({name:"editChildren",sid:"-z09dni"}),U=g({name:"childrensSaved",sid:"-adnm0b"}),F=g({name:"childrenDeleted",sid:"-96ogy1"}),de=h(0,{name:"$counter",sid:"-74wf4c"}).on(S,t=>t+1).reset(d),s=h([{fio:"",birthdate:"",id:"n0",created:new Date().toISOString()}],{name:"$newChildrens",sid:"m7jjrt"}).reset([d,p.finished.success]),z=h(!1,{name:"$isActive",sid:"-y11xyo"}).reset(d),L=h([],{name:"$allChildrens",sid:"-hsharx"}).reset(d),P=h(ce(14),{name:"$minDate",sid:"-u2pdam"}).reset(d),Q=h(oe(2),{name:"$maxDate",sid:"-2shav5"}).reset(d),D=ae({reset:d});r({and:[{clock:d,target:m.start}],or:{sid:"-bk0ip1"}});r({and:[{clock:S,source:{newChildrens:s,counter:de},fn:({newChildrens:t,counter:e})=>[...t,{fio:"",birthdate:"",id:"n"+e.toString(),created:new Date().toISOString()}],target:s}],or:{sid:"-bhtcbl"}});r({and:[{clock:F,filter:({id:t})=>b(t),target:M.start}],or:{sid:"-aldhba"}});r({and:[{clock:F,filter:(t,{id:e})=>!b(e),source:s,fn:(t,{id:e})=>t.filter(a=>a.id!==e),target:s}],or:{sid:"-a5z8p6"}});r({and:[{clock:O,source:s,fn:(t,{id:e,data:a})=>t.map(i=>i.id===e?{...i,...a}:i),target:s}],or:{sid:"-9odtpm"}});r({and:[{clock:[m.$data,s],source:{saved:m.$data,newChildrens:s},fn:({saved:t,newChildrens:e})=>[...t||[],...e],target:L}],or:{sid:"-968m4p"}});r({and:[{clock:U,source:s,target:p.start}],or:{sid:"-8o3ejs"}});r({and:[{clock:[s,D.value],source:{newChildrens:s,confirmed:D.value,minDate:P,maxDate:Q},fn:({newChildrens:t,confirmed:e,minDate:a,maxDate:i})=>t.every(o=>o.birthdate&&new Date(o.birthdate)>=new Date(a)&&new Date(o.birthdate)<=new Date(i)&&o.fio)&&e,target:z}],or:{sid:"-youmyr"}});r({and:[{clock:[p.$succeeded,M.$succeeded],target:m.start}],or:{sid:"-y4i90e"}});r({and:[{clock:p.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:V.evokePopUpMessage}],or:{sid:"-xqre6d"}});r({and:[{clock:M.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:V.evokePopUpMessage}],or:{sid:"-xatcyw"}});const c={childrens:L,confirmed:D.value,loading:m.$pending,saving:p.$pending,isActive:z,minDate:P,maxDate:Q},u={pageMounted:d,addChildren:S,saveChildrens:U,deleteChildren:F,editChildren:O,confirm:D.setValue};function oe(t){const e=new Date;return new Date(e.getFullYear()-t,e.getMonth(),e.getDate()+1).toISOString().split("T")[0]}function ce(t){const e=new Date;return new Date(e.getFullYear()-t,e.getMonth(),e.getDate()+2).toISOString().split("T")[0]}const pe=()=>{const[t,e,a,i,o,f,w,j,x]=T([u.pageMounted,c.loading,c.childrens,u.addChildren,u.saveChildrens,c.saving,c.isActive,c.confirmed,u.confirm]),[l,R]=A.useState(!1),C=l??!1;return A.useEffect(()=>{t()},[]),e?n.jsx(B,{isDone:C,children:n.jsx(q,{noHeader:!0,children:n.jsx(_,{w:"100%",jc:"center",ai:"center",children:n.jsx(K,{})})})}):n.jsx(B,{isDone:C,children:n.jsxs(q,{noHeader:!0,children:[n.jsx(X,{size:3,align:"left",children:"Состав семьи"}),n.jsx(Z,{type:"info",title:"Как заполнить",icon:n.jsx(H,{}),children:"Укажите ваших детей и внуков в возрасте от 2 до 14 лет"}),[...a].map(v=>n.jsx(le,{id:v.id,fio:v.fio,birthdate:v.birthdate},v.id)),n.jsx(E,{icon:n.jsx(Y,{}),text:"Добавить",onClick:()=>i(),background:"transparent"}),n.jsx(ee,{checked:j,setChecked:x,text:"Подтверждаю достоверность внесенных данных"}),n.jsx(te,{text:C?"Отправлено":"Отправить",action:()=>{o()},isLoading:f,completed:l,setCompleted:R,repeatable:!1,buttonSuccessText:"Отправлено",isDone:C,isActive:w,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},le=({id:t,fio:e,birthdate:a})=>{const[i,o,f,w,j]=T([c.saving,u.deleteChildren,u.editChildren,c.minDate,c.maxDate]),x=!b(t);return n.jsxs(ue,{children:[n.jsx(I,{placeholder:"ФИО",value:e,setValue:l=>{f({id:t,data:{fio:l,birthdate:a}})},required:!0,isActive:x}),n.jsx(I,{type:"date",placeholder:"Дата рождения",value:a,setValue:l=>{f({id:t,data:{fio:e,birthdate:l}})},required:!0,width:"30%",minWidth:"150px",isActive:x,minValue:w,maxValue:j}),n.jsx(E,{icon:n.jsx(G,{}),textColor:ne.red.main,onClick:()=>o({id:t}),background:"transparent",isActive:!i})]})},ue=J.div.withConfig({componentId:"sc-1tg60zq-0"})(["display:flex;align-items:flex-end;column-gap:5px;"]);export{pe as default};
