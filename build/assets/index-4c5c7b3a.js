import{p as x,e as k,x as l,h as j,u as v,r as f,n as B,j as u}from"./vendor-0d3de025.js";import{b1 as E,b2 as F,aW as A,b3 as P,b4 as w,s as N,B as O,F as S,I as _,S as W,j as $,c as D,b5 as G}from"./index-1f51b962.js";const I=x({name:"loadBufferPartTimeEmployment",sid:"rqpj9r"}),q=x({name:"sendBufferPartTimeEmployment",sid:"-1vo25s"}),h=k(async()=>{const{data:t}=await E.get(`InternalPartTime.GetAllHistory?PersonalGuid=${F(A()??"").IndividualGuid}`);return t.orders},{name:"loadBufferPartTimeEmploymentFx",sid:"lptsxp"});l({and:[{clock:I,target:h}],or:{sid:"-bwsfri"}});const c=k(async t=>(await E.post("Weekend.AddWeekend",t)).data,{name:"sendBufferPartTimeEmploymentFx",sid:"-26c53s"});l({and:[{clock:q,target:c}],or:{sid:"-bguek1"}});const T=j([],{name:"$bufferPartTimeEmploymentOrders",sid:"-rtc3mi"}),H=c.pending;l({and:[{clock:h.doneData,target:T}],or:{sid:"-bdjmzv"}});l({and:[{clock:c.doneData,fn:t=>{const s=t;return s.isError?{message:s.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:P.evokePopUpMessage}],or:{sid:"-azss5u"}});l({and:[{clock:c.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:P.evokePopUpMessage}],or:{sid:"-a29byt"}});const J={useBufferPartTimeEmployment:()=>({data:v(T),loading:v(H)})},L=(t,s)=>{const{surname:o,name:n,patronymic:r}=t;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:o+" "+n+" "+r,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:s,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},U=async(t,s,o)=>{o(!1);const n=s.map(m=>{if(Array.isArray(m.data[0])){const e=m.data.map(d=>Object.assign({},...d==null?void 0:d.map(a=>{var b,g;const y={};return a!=null&&a.fieldName&&(y[a==null?void 0:a.fieldName]=(b=a==null?void 0:a.value)!=null&&b.title?(g=a==null?void 0:a.value)==null?void 0:g.title:a==null?void 0:a.value),y}))),i={};return i[t]=JSON.stringify(e),i}else return m.data.map(e=>{const i={};return e!=null&&e.fieldName&&(i[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(d=>d.title))),i})}).flat(),r=Object.assign({},...n);!(await w.sendBufferHolidayWorkFx({employeeGuid:r.jobGuid,dates:[{date:r.holiday_work_date,dayOff:r.extra_holiday_date?r.extra_holiday_date:null,hours:+r.holiday_work_hours}]})).isError&&o(!0)},M=()=>{var i;const[t,s]=f.useState(null),{data:{dataUserApplication:o}}=N.useApplications(),{loading:n}=J.useBufferPartTimeEmployment(),[r,p]=f.useState(!1),m=r??!1,e=B(G);return f.useEffect(()=>{o&&!n&&s(L(o,e))},[o,n]),u.jsx(O,{isDone:m,children:!!t&&!!s&&u.jsxs(S,{children:[u.jsx(_,{...t,collapsed:m,setData:s}),u.jsx(W,{text:"Отправить",action:()=>U($.HOLIDAY_WORK,[t],p),isLoading:n,completed:r,setCompleted:p,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:D(t)&&(((i=t.optionalCheckbox)==null?void 0:i.value)??!0)})]})})};export{M as default};
