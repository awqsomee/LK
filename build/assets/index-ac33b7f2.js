var G=Object.defineProperty;var T=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&N(e,n,t[n]);if(T)for(var n of T(t))X.call(t,n)&&N(e,n,t[n]);return e};var j=(e,t,n)=>new Promise((r,i)=>{var m=s=>{try{h(n.next(s))}catch(c){i(c)}},f=s=>{try{h(n.throw(s))}catch(c){i(c)}},h=s=>s.done?r(s.value):Promise.resolve(s.value).then(m,f);h((n=n.apply(e,t)).next())});import{m as M,I as Z,a4 as V,p as C,h as p,x as o,n as z,r as q,j as a,F as ee,a2 as te,a1 as ne,s as ae}from"./vendor-249420f4.js";import{g as $,$ as S,e as L,aa as E,F as O,r as se,L as re,T as ie,M as de,B as P,C as oe,S as ce,d as U,t as le}from"./index-72b1dbf4.js";import{c as ue}from"./create-checkbox-field-cd726a82.js";const he=()=>j(void 0,null,function*(){new FormData().set("token",$());const{data:t}=yield S.get(`?getChildren&token=${$()}`);return t}),me=e=>j(void 0,null,function*(){const t=new FormData;t.set("token",$()),t.set("children",JSON.stringify(e));const{data:n}=yield S.post("?saveChildren=1",t,{headers:{"Content-Type":"multipart/form-data"}});if(n.result!=="ok")throw new Error(n.errors);return n}),ge=t=>j(void 0,[t],function*({id:e}){const{data:n}=yield S.get(`?deleteChildren=${e}&token=${$()}`);if(n.result!=="ok")throw new Error(n.errors);return n});function F(e){return!Number.isNaN(Number(e))}const x=M({sid:"enrs6o",fn:()=>Z({handler:he}),name:"getChildrensQuery",method:"createQuery"}),v=M({sid:"mx4uph",fn:()=>V({handler:me}),name:"saveChildrensMutation",method:"createMutation"}),A=M({sid:"-6tjplu",fn:()=>V({handler:ge}),name:"deleteChildrenMutation",method:"createMutation"}),l=C({name:"pageMounted",sid:"e105tx"}),B=C({name:"addChildren",sid:"vq20kt"}),Q=C({name:"editChildren",sid:"-z09dni"}),R=C({name:"childrensSaved",sid:"-adnm0b"}),I=C({name:"childrenDeleted",sid:"-96ogy1"}),pe=p(0,{name:"$counter",sid:"-74wf4c"}).on(B,e=>e+1).reset(l),d=p([{fio:"",birthdate:"",id:"n0",created:new Date().toISOString()}],{name:"$newChildrens",sid:"m7jjrt"}).reset([l,v.finished.success]),W=p(!1,{name:"$isActive",sid:"-y11xyo"}).reset(l),H=p([],{name:"$allChildrens",sid:"-hsharx"}).reset(l),Y=p(xe(14),{name:"$minDate",sid:"-u2pdam"}).reset(l),_=p(fe(2),{name:"$maxDate",sid:"-2shav5"}).reset(l),y=ue({reset:l});o({and:[{clock:l,target:x.start}],or:{sid:"-bk0ip1"}});o({and:[{clock:B,source:{newChildrens:d,counter:pe},fn:({newChildrens:e,counter:t})=>[...e,{fio:"",birthdate:"",id:"n"+t.toString(),created:new Date().toISOString()}],target:d}],or:{sid:"-bhtcbl"}});o({and:[{clock:I,filter:({id:e})=>F(e),target:A.start}],or:{sid:"-aldhba"}});o({and:[{clock:I,filter:(e,{id:t})=>!F(t),source:d,fn:(e,{id:t})=>e.filter(n=>n.id!==t),target:d}],or:{sid:"-a5z8p6"}});o({and:[{clock:Q,source:d,fn:(e,{id:t,data:n})=>e.map(r=>r.id===t?b(b({},r),n):r),target:d}],or:{sid:"-9odtpm"}});o({and:[{clock:[x.$data,d],source:{saved:x.$data,newChildrens:d},fn:({saved:e,newChildrens:t})=>[...e||[],...t],target:H}],or:{sid:"-968m4p"}});o({and:[{clock:R,source:d,target:v.start}],or:{sid:"-8o3ejs"}});o({and:[{clock:[d,y.value],source:{newChildrens:d,confirmed:y.value,minDate:Y,maxDate:_},fn:({newChildrens:e,confirmed:t,minDate:n,maxDate:r})=>e.every(i=>i.birthdate&&new Date(i.birthdate)>=new Date(n)&&new Date(i.birthdate)<=new Date(r)&&i.fio)&&t,target:W}],or:{sid:"-youmyr"}});o({and:[{clock:[v.$succeeded,A.$succeeded],target:x.start}],or:{sid:"-y4i90e"}});o({and:[{clock:v.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:L.evokePopUpMessage}],or:{sid:"-xqre6d"}});o({and:[{clock:A.$succeeded,fn:()=>({type:"success",message:"Данные сохранены"}),target:L.evokePopUpMessage}],or:{sid:"-xatcyw"}});const u={childrens:H,confirmed:y.value,loading:x.$pending,saving:v.$pending,isActive:W,minDate:Y,maxDate:_},g={pageMounted:l,addChildren:B,saveChildrens:R,deleteChildren:I,editChildren:Q,confirm:y.setValue};function fe(e){const t=new Date;return new Date(t.getFullYear()-e,t.getMonth(),t.getDate()+1).toISOString().split("T")[0]}function xe(e){const t=new Date;return new Date(t.getFullYear()-e,t.getMonth(),t.getDate()+2).toISOString().split("T")[0]}const $e=()=>{var e;const[t,n,r,i,m,f,h,s,c]=z([g.pageMounted,u.loading,u.childrens,g.addChildren,g.saveChildrens,u.saving,u.isActive,u.confirmed,g.confirm]),[k,J]=q.useState(!1),D=k!=null?k:!1;return q.useEffect(()=>{t()},[]),n?a.jsx(E,{isDone:D,children:a.jsx(O,{noHeader:!0,children:a.jsx(se,{w:"100%",jc:"center",ai:"center",children:a.jsx(re,{})})})}):a.jsx(E,{isDone:D,children:a.jsxs(O,{noHeader:!0,children:[a.jsx(ie,{size:3,align:"left",children:"Состав семьи"}),a.jsx(de,{type:"info",title:"Как заполнить",icon:a.jsx(ee,{}),children:"Укажите ваших детей и внуков в возрасте от 2 до 14 лет"}),(e=[...r])===null||e===void 0?void 0:e.map(w=>a.jsx(Ce,{id:w.id,fio:w.fio,birthdate:w.birthdate},w.id)),a.jsx(P,{icon:a.jsx(te,{}),text:"Добавить",onClick:()=>i(),background:"transparent"}),a.jsx(oe,{checked:s,setChecked:c,text:"Подтверждаю достоверность внесенных данных"}),a.jsx(ce,{text:D?"Отправлено":"Отправить",action:()=>{m()},isLoading:f,completed:k,setCompleted:J,repeatable:!1,buttonSuccessText:"Отправлено",isDone:D,isActive:h,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Ce=({id:e,fio:t,birthdate:n})=>{const[r,i,m,f,h]=z([u.saving,g.deleteChildren,g.editChildren,u.minDate,u.maxDate]),s=!F(e);return a.jsxs(ve,{children:[a.jsx(U,{placeholder:"ФИО",value:t,setValue:c=>{m({id:e,data:{fio:c,birthdate:n}})},required:!0,isActive:s}),a.jsx(U,{type:"date",placeholder:"Дата рождения",value:n,setValue:c=>{m({id:e,data:{fio:t,birthdate:c}})},required:!0,width:"30%",minWidth:"150px",isActive:s,minValue:f,maxValue:h}),a.jsx(P,{icon:a.jsx(ne,{}),textColor:le.red.main,onClick:()=>i({id:e}),background:"transparent",isActive:!r})]})},ve=ae.div.withConfig({componentId:"sc-1tg60zq-0"})(["display:flex;align-items:flex-end;column-gap:5px;"]);export{$e as default};
