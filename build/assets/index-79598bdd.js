import{p as x,e as k,x as d,h as j,u as v,r as y,n as B,j as c}from"./vendor-8312535b.js";import{b1 as E,b2 as F,aW as A,b3 as P,b4 as w,s as N,B as O,F as S,I as _,S as W,j as $,c as D,b5 as G}from"./index-3ed27df5.js";const I=x({name:"loadBufferPartTimeEmployment",sid:"rqpj9r"}),q=x({name:"sendBufferPartTimeEmployment",sid:"-1vo25s"}),h=k(async()=>{var s;const{data:a}=await E.get(`InternalPartTime.GetAllHistory?PersonalGuid=${F((s=A())!=null?s:"").IndividualGuid}`);return a.orders},{name:"loadBufferPartTimeEmploymentFx",sid:"lptsxp"});d({and:[{clock:I,target:h}],or:{sid:"-bwsfri"}});const p=k(async a=>(await E.post("Weekend.AddWeekend",a)).data,{name:"sendBufferPartTimeEmploymentFx",sid:"-26c53s"});d({and:[{clock:q,target:p}],or:{sid:"-bguek1"}});const T=j([],{name:"$bufferPartTimeEmploymentOrders",sid:"-rtc3mi"}),H=p.pending;d({and:[{clock:h.doneData,target:T}],or:{sid:"-bdjmzv"}});d({and:[{clock:p.doneData,fn:a=>{const s=a;return s.isError?{message:s.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:P.evokePopUpMessage}],or:{sid:"-azss5u"}});d({and:[{clock:p.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:P.evokePopUpMessage}],or:{sid:"-a29byt"}});const J={useBufferPartTimeEmployment:()=>({data:v(T),loading:v(H)})},L=(a,s)=>{const{surname:n,name:m,patronymic:r}=a;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:n+" "+m+" "+r,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:s,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},U=async(a,s,n)=>{n(!1);const m=s.map(u=>{if(Array.isArray(u.data[0])){const e=u.data.map(o=>Object.assign({},...o==null?void 0:o.map(t=>{var b,g;const l={};return t!=null&&t.fieldName&&(l[t==null?void 0:t.fieldName]=(b=t==null?void 0:t.value)!=null&&b.title?(g=t==null?void 0:t.value)==null?void 0:g.title:t==null?void 0:t.value),l}))),i={};return i[a]=JSON.stringify(e),i}else return u.data.map(e=>{var o,t;const i={};return e!=null&&e.fieldName&&(i[(o=e==null?void 0:e.fieldName)!=null?o:""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(i[(t=e==null?void 0:e.fieldName)!=null?t:""]=JSON.stringify(e==null?void 0:e.value.map(l=>l.title))),i})}).flat(),r=Object.assign({},...m);!(await w.sendBufferHolidayWorkFx({employeeGuid:r.jobGuid,dates:[{date:r.holiday_work_date,dayOff:r.extra_holiday_date?r.extra_holiday_date:null,hours:+r.holiday_work_hours}]})).isError&&n(!0)},M=()=>{var i,o;const[a,s]=y.useState(null),{data:{dataUserApplication:n}}=N.useApplications(),{loading:m}=J.useBufferPartTimeEmployment(),[r,f]=y.useState(!1),u=r!=null?r:!1,e=B(G);return y.useEffect(()=>{n&&!m&&s(L(n,e))},[n,m]),c.jsx(O,{isDone:u,children:!!a&&!!s&&c.jsxs(S,{children:[c.jsx(_,{...a,collapsed:u,setData:s}),c.jsx(W,{text:"Отправить",action:()=>U($.HOLIDAY_WORK,[a],f),isLoading:m,completed:r,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:D(a)&&((o=(i=a.optionalCheckbox)==null?void 0:i.value)!=null?o:!0)})]})})};export{M as default};
