var J=Object.defineProperty;var I=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var q=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,y=(t,e)=>{for(var n in e||(e={}))_.call(e,n)&&q(t,n,e[n]);if(I)for(var n of I(e))K.call(e,n)&&q(t,n,e[n]);return t};var w=(t,e,n)=>new Promise((i,d)=>{var m=s=>{try{h(n.next(s))}catch(r){d(r)}},f=s=>{try{h(n.throw(s))}catch(r){d(r)}},h=s=>s.done?i(s.value):Promise.resolve(s.value).then(m,f);h((n=n.apply(t,e)).next())});import{m as b,I as X,a4 as O,p as C,h as p,x as c,n as U,r as N,j as a,F as Z,a2 as ee,a1 as te,s as ne}from"./vendor-0c8c29fe.js";import{g as j,$ as M,d as z,B as T,F as V,G as ae,V as se,h as re,M as ie,q as L,i as de,S as oe,p as E,L as ce}from"./index-179b6f61.js";import{c as le}from"./create-checkbox-field-46223999.js";const ue=()=>w(void 0,null,function*(){new FormData().set("token",j());const{data:e}=yield M.get(`?getChildren&token=${j()}`);return e}),he=t=>w(void 0,null,function*(){const e=new FormData;e.set("token",j()),e.set("children",JSON.stringify(t));const{data:n}=yield M.post("?saveChildren=1",e,{headers:{"Content-Type":"multipart/form-data"}});if(n.result!=="ok")throw new Error(n.errors);return n}),me=e=>w(void 0,[e],function*({id:t}){const{data:n}=yield M.get(`?deleteChildren=${t}&token=${j()}`);if(n.result!=="ok")throw new Error(n.errors);return n});function S(t){return!Number.isNaN(Number(t))}const x=b({sid:"enrs6o",fn:()=>X({handler:ue}),name:"getChildrensQuery",method:"createQuery"}),v=b({sid:"mx4uph",fn:()=>O({handler:he}),name:"saveChildrensMutation",method:"createMutation"}),F=b({sid:"-6tjplu",fn:()=>O({handler:me}),name:"deleteChildrenMutation",method:"createMutation"}),l=C({name:"pageMounted",sid:"e105tx"}),A=C({name:"addChildren",sid:"vq20kt"}),P=C({name:"editChildren",sid:"-z09dni"}),Q=C({name:"childrensSaved",sid:"-adnm0b"}),B=C({name:"childrenDeleted",sid:"-96ogy1"}),ge=p(0,{name:"$counter",sid:"-74wf4c"}).on(A,t=>t+1).reset(l),o=p([{fio:"",birthdate:"",id:"n0",created:new Date().toISOString()}],{name:"$newChildrens",sid:"m7jjrt"}).reset([l,v.finished.success]),R=p(!1,{name:"$isActive",sid:"-y11xyo"}).reset(l),W=p([],{name:"$allChildrens",sid:"-hsharx"}).reset(l),H=p(fe(14),{name:"$minDate",sid:"-u2pdam"}).reset(l),Y=p(pe(2),{name:"$maxDate",sid:"-2shav5"}).reset(l),$=le({reset:l});c({and:[{clock:l,target:x.start}],or:{sid:"-bk0ip1"}});c({and:[{clock:A,source:{newChildrens:o,counter:ge},fn:({newChildrens:t,counter:e})=>[...t,{fio:"",birthdate:"",id:"n"+e.toString(),created:new Date().toISOString()}],target:o}],or:{sid:"-bhtcbl"}});c({and:[{clock:B,filter:({id:t})=>S(t),target:F.start}],or:{sid:"-aldhba"}});c({and:[{clock:B,filter:(t,{id:e})=>!S(e),source:o,fn:(t,{id:e})=>t.filter(n=>n.id!==e),target:o}],or:{sid:"-a5z8p6"}});c({and:[{clock:P,source:o,fn:(t,{id:e,data:n})=>t.map(i=>i.id===e?y(y({},i),n):i),target:o}],or:{sid:"-9odtpm"}});c({and:[{clock:[x.$data,o],source:{saved:x.$data,newChildrens:o},fn:({saved:t,newChildrens:e})=>[...t||[],...e],target:W}],or:{sid:"-968m4p"}});c({and:[{clock:Q,source:o,target:v.start}],or:{sid:"-8o3ejs"}});c({and:[{clock:[o,$.value],source:{newChildrens:o,confirmed:$.value,minDate:H,maxDate:Y},fn:({newChildrens:t,confirmed:e,minDate:n,maxDate:i})=>t.every(d=>d.birthdate&&new Date(d.birthdate)>=new Date(n)&&new Date(d.birthdate)<=new Date(i)&&d.fio)&&e,target:R}],or:{sid:"-youmyr"}});c({and:[{clock:[v.$succeeded,F.$succeeded],target:x.start}],or:{sid:"-y4i90e"}});c({and:[{clock:v.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:z.evokePopUpMessage}],or:{sid:"-xqre6d"}});c({and:[{clock:F.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:z.evokePopUpMessage}],or:{sid:"-xatcyw"}});const u={childrens:W,confirmed:$.value,loading:x.$pending,saving:v.$pending,isActive:R,minDate:H,maxDate:Y},g={pageMounted:l,addChildren:A,saveChildrens:Q,deleteChildren:B,editChildren:P,confirm:$.setValue};function pe(t){const e=new Date;return new Date(e.getFullYear()-t,e.getMonth(),e.getDate()+1).toISOString().split("T")[0]}function fe(t){const e=new Date;return new Date(e.getFullYear()-t,e.getMonth(),e.getDate()+2).toISOString().split("T")[0]}const je=()=>{const[t,e,n,i,d,m,f,h,s]=U([g.pageMounted,u.loading,u.childrens,g.addChildren,g.saveChildrens,u.saving,u.isActive,u.confirmed,g.confirm]),[r,G]=N.useState(!1),k=r!=null?r:!1;return N.useEffect(()=>{t()},[]),e?a.jsx(T,{isDone:k,children:a.jsx(V,{noHeader:!0,children:a.jsx(ae,{w:"100%",jc:"center",ai:"center",children:a.jsx(se,{})})})}):a.jsx(T,{isDone:k,children:a.jsxs(V,{noHeader:!0,children:[a.jsx(re,{size:3,align:"left",children:"Состав семьи"}),a.jsx(ie,{type:"info",title:"Как заполнить",icon:a.jsx(Z,{}),children:"Укажите ваших детей и внуков в возрасте от 2 до 14 лет"}),[...n].map(D=>a.jsx(xe,{id:D.id,fio:D.fio,birthdate:D.birthdate},D.id)),a.jsx(L,{icon:a.jsx(ee,{}),text:"Добавить",onClick:()=>i(),background:"transparent"}),a.jsx(de,{checked:h,setChecked:s,text:"Подтверждаю достоверность внесенных данных"}),a.jsx(oe,{text:k?"Отправлено":"Отправить",action:()=>{d()},isLoading:m,completed:r,setCompleted:G,repeatable:!1,buttonSuccessText:"Отправлено",isDone:k,isActive:f,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},xe=({id:t,fio:e,birthdate:n})=>{const[i,d,m,f,h]=U([u.saving,g.deleteChildren,g.editChildren,u.minDate,u.maxDate]),s=!S(t);return a.jsxs(Ce,{children:[a.jsx(E,{placeholder:"ФИО",value:e,setValue:r=>{m({id:t,data:{fio:r,birthdate:n}})},required:!0,isActive:s}),a.jsx(E,{type:"date",placeholder:"Дата рождения",value:n,setValue:r=>{m({id:t,data:{fio:e,birthdate:r}})},required:!0,width:"30%",minWidth:"150px",isActive:s,minValue:f,maxValue:h}),a.jsx(L,{icon:a.jsx(te,{}),textColor:ce.red.main,onClick:()=>d({id:t}),background:"transparent",isActive:!i})]})},Ce=ne.div.withConfig({componentId:"sc-1tg60zq-0"})(["display:flex;align-items:flex-end;column-gap:5px;"]);export{je as default};
