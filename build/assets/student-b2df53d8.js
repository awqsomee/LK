import{p as a,e as i,x as t,h as c,v as re,m as le,cP as ge,K as w,r as C,q as me,cQ as ue,cR as pe,j as F}from"./vendor-9c916fad.js";import{a5 as fe,a6 as ke,o as b,n as r,d as n,U as ve,a7 as $e,a8 as xe,a9 as ye,aa as Pe,ab as De,ac as Se,ad as Ae,ae as Fe,af as he,Z as we,G as be,p as Ve,q as Re,l as G,L as E}from"./index-b149c4f7.js";const T=a({name:"addVisit",sid:"3ybve7"}),O=a({name:"removeVisit",sid:"w1vlkj"}),l=i(async e=>(await fe(e),e),{name:"addVisitFx",sid:"-lbpib"}),m=i(async({id:e})=>(await ke(e),e),{name:"removeVisitFx",sid:"-wpy18p"}),Ue=m.pending,Me=l.pending;t({and:[{clock:T,target:l}],or:{sid:"-tzueuh"}});t({and:[{clock:l.doneData,target:b.close}],or:{sid:"-txn8h1"}});t({and:[{clock:l.failData,fn:e=>({message:r(e,"Не удалось добавить посещение"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-tvg23l"}});t({and:[{clock:l.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-tey8ar"}});t({and:[{clock:O,target:m}],or:{sid:"-sygehx"}});t({and:[{clock:m.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-skpjnw"}});t({and:[{clock:m.failData,fn:e=>({message:r(e,"Не удалось удалить посещение"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-sfrebn"}});const ze={addVisit:T,removeVisit:O},y={addVisitFx:l,removeVisitFx:m},je={pendingRemoveVisit:Ue,pendingAddVisit:Me},_=a({name:"update",sid:"-tu363b"}),qe=c("",{name:"$search",sid:"gw0gkq"}).on(_,(e,s)=>s),Ce={update:_},Ge={$search:qe},B=a({name:"addFilter",sid:"3pahp2"}),V=a({name:"resetFilters",sid:"sk6sju"}),L=c({},{name:"$filters",sid:"im200n"}).on(Ge.$search,(e,s)=>({...e,fullName:{value:s}})).on(B,(e,{name:s,value:o,strict:g})=>{const d={...e};return o?{...d,[s]:{value:o,strict:g}}:(delete d[s],d)});t({and:[{clock:V,target:L.reinit}],or:{sid:"-drxh28"}});t({and:[{clock:V,fn:()=>"",target:Ce.update}],or:{sid:"-dpqaos"}});const R={$filters:L},Ze={addFilter:B,resetFilters:V},N=a({name:"setIsExam",sid:"shha4n"}),Ee=c(!1,{name:"$isExam",sid:"4al1my"}).on(N,(e,s)=>s),Xe={$isExam:Ee},Ye={setIsExam:N},U=a({name:"load",sid:"-ip5e0a"}),W=a({name:"setPage",sid:"266xmv"}),M=c(0,{name:"$pEStudentsPage",sid:"x1jwze"}).on(W,(e,s)=>s).on(R.$filters,()=>0),P=re({and:{source:{page:M,filters:R.$filters},effect:async({filters:e,page:s})=>{const{data:o}=await ve(s,e);return o.data}},or:{name:"loadPageFx",sid:"-u9ar2s"}});le({sid:"-mlc78y",fn:()=>ge({source:w({and:[M,R.$filters],or:{name:"source",sid:"-ne89m1"}}),timeout:200,target:U}),name:"none",method:"debounce"});t({and:[{clock:U,target:P}],or:{sid:"-mil8a5"}});const h=c([],{name:"$pEStudents",sid:"-a7h5qn"}).on(P.doneData,(e,s)=>s.students),Ie=c(0,{name:"$pEStudentsTotalCount",sid:"-hptisk"}).on(P.doneData,(e,s)=>s.totalCount),He=w({and:[P.pending,Boolean],or:{name:"$loading",sid:"-way26q"}});t({and:[{clock:y.addVisitFx.doneData,source:h,filter:(e,{studentGuid:s})=>e.some(o=>o.studentGuid===s),fn:(e,s)=>{const o=JSON.parse(JSON.stringify(e)),g=o.find(d=>d.studentGuid===s.studentGuid);return++g.visits,o},target:h}],or:{sid:"-m36zo1"}});const et={load:U,setPage:W},tt={$loading:He,$pEStudents:h,$pEStudentsPage:M,$pEStudentsTotalCount:Ie},J=a({name:"addAdditionPoints",sid:"-gfwajq"}),K=a({name:"removeAdditionPoints",sid:"s7fafn"}),u=i(async({id:e})=>{await $e(e)},{name:"removeAdditionPointsFx",sid:"-yz8fw7"});t({and:[{clock:K,target:u}],or:{sid:"-8u8zpu"}});const Te=u.pending,p=i(async e=>(await xe(e),e),{name:"addAdditionPointsFx",sid:"htakn7"});t({and:[{clock:J,target:p}],or:{sid:"-8dr5x0"}});t({and:[{clock:p.doneData,target:b.close}],or:{sid:"-8bjzjk"}});t({and:[{clock:p.doneData,fn:()=>({message:"Баллы добавлены",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-7xt4pj"}});t({and:[{clock:p.failData,fn:e=>({message:r(e,"Не удалось добавить баллы"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-7suzda"}});t({and:[{clock:u.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-7cd5kg"}});t({and:[{clock:u.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-6vvbrm"}});const st={addAdditionPoints:J,removeAdditionPoints:K},I={addAdditionPointsFx:p,removeAdditionPointsFx:u},at={pendingRemoveAdditionPoints:Te},Q=a({name:"addRegulationPoints",sid:"r944lm"}),Z=a({name:"removeRegulationPoints",sid:"2sncem"}),f=i(async({id:e})=>{await ye(e)},{name:"removeRegulationPointsFx",sid:"-krrp8n"});t({and:[{clock:Z,target:f}],or:{sid:"mz5r9q"}});const Oe=f.pending,k=i(async e=>(await Pe(e),e),{name:"addRegulationPointsFx",sid:"-dsdequ"});t({and:[{clock:Q,target:k}],or:{sid:"nfnl2k"}});t({and:[{clock:k.doneData,target:b.close}],or:{sid:"nhurg0"}});t({and:[{clock:k.doneData,fn:()=>({message:"Норматив добавлен",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"nvlma1"}});t({and:[{clock:k.failData,fn:e=>({message:r(e,"Не удалось добавить норматив"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"o0jrma"}});t({and:[{clock:f.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"oh1lf4"}});t({and:[{clock:f.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:n.evokePopUpMessage}],or:{sid:"oxjf7y"}});const nt={addRegulationPoints:Q,removeRegulationPoints:Z},H={addRegulationPointsFx:k,removeRegulationPointsFx:f},ot={pendingRemoveRegulationPoints:Oe},X=a({name:"setSpecialization",sid:"hrz73m"}),v=i(async e=>(await De(e),e),{name:"setSpecializationFx",sid:"-aw52yn"}),_e=v.pending;t({and:[{clock:X,target:v}],or:{sid:"-4x6l4a"}});t({and:[{clock:v.failData,fn:e=>({message:r(e,"Не удалось добавить специализацию"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-4uzequ"}});t({and:[{clock:v.doneData,fn:()=>({message:"Специализация добавлена",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-4ehky0"}});const it={setSpecialization:X},Be={setSpecializationFx:v},dt={pendingSetSpecialization:_e},Y=a({name:"setHealthGroup",sid:"8b83ja"}),$=i(async e=>(await Se(e),e),{name:"setHealthGroupFx",sid:"a5qgdx"}),Le=$.pending;t({and:[{clock:Y,target:$}],or:{sid:"-fydy6l"}});t({and:[{clock:$.failData,fn:e=>({message:r(e,"Не удалось добавить группу здоровья"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-fw6rt5"}});t({and:[{clock:$.doneData,fn:()=>({message:"Группа здоровья добавлена",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"-ffoy0b"}});const ct={setHealthGroup:Y},Ne={setHealthGroupFx:$},rt={pendingSetHealthGroup:Le},ee=a({name:"setCurrentStudentId",sid:"-yi431d"}),te=a({name:"resetStudentId",sid:"b5joy3"}),se=a({name:"reload",sid:"-4igy6g"}),D=i(async e=>{const{data:s}=await Ae(e);return s.data},{name:"loadCurrentStudent",sid:"-htqwl5"});t({and:[{clock:ee,target:D}],or:{sid:"-e9batg"}});const z=c(null,{name:"$selectedStudent",sid:"ffg61i"}).reset(te),We=w({and:[y.addVisitFx.pending,D.pending,Boolean],or:{name:"$loading",sid:"4dn8ye"}});t({and:[{clock:[y.addVisitFx.doneData,y.removeVisitFx.doneData,Ne.setHealthGroupFx.doneData,Be.setSpecializationFx.doneData,I.addAdditionPointsFx.doneData,I.removeAdditionPointsFx.doneData,H.addRegulationPointsFx.doneData,H.removeRegulationPointsFx.doneData],target:se}],or:{sid:"-dugusp"}});t({and:[{clock:se,source:z,filter:e=>!!e,fn:e=>e.studentGuid,target:D}],or:{sid:"-ds9of9"}});t({and:[{clock:D.doneData,target:z}],or:{sid:"-dcvft5"}});const lt={$selectedStudent:z,$loading:We},gt={setCurrentStudentId:ee,resetStudentId:te},ae=a({name:"load",sid:"-1nsq63"}),ne=a({name:"remove",sid:"wecpac"}),oe=i(async()=>{const{data:e}=await Fe();return e.competitions},{name:"loadFx",sid:"-d34r01"}),S=i(async e=>(await he(e),e),{name:"removeFx",sid:"y5v9by"});t({and:[{clock:ne,target:S}],or:{sid:"q9j9ts"}});t({and:[{clock:S.failData,fn:e=>({message:r(e,"Не удалось удалить соревнование"),type:"failure",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"qna4nt"}});t({and:[{clock:S.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:n.evokePopUpMessage}],or:{sid:"r3rygn"}});t({and:[{clock:ae,target:oe}],or:{sid:"r8q3sw"}});const Je=c([],{name:"$competitions",sid:"dxwaax"}).on(oe.doneData,(e,s)=>s).on(S.doneData,(e,s)=>e.filter(o=>o!==s)),mt={load:ae,remove:ne},ut={$competitions:Je};var x=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(x||{});const pt=({studentGuid:e})=>{const[s,o]=C.useState(new Date().toISOString()),[g,d]=me([je.pendingAddVisit,we.peTeacher]),A=new Date(s),ie=[x.AdminAccess,x.SuperUser,x.SecretaryAccess].some(ce=>{var q;return(q=d==null?void 0:d.permissions)==null?void 0:q.includes(ce)}),j=(ue(A,{start:pe(new Date,1),end:new Date})||ie)&&A.getDay()!==0&&A.getDay()!==1;C.useEffect(()=>{o(new Date().toISOString())},[e]);const de=()=>{ze.addVisit({studentGuid:e,date:G(s,"numeric")})};return F.jsxs(be,{gap:"4px",ai:"flex-start",children:[F.jsx(Ve,{alertMessage:j?"":"Не допустимая дата",type:"date",setValue:o,value:s,hideCross:!0}),F.jsx(Re,{isActive:j&&!g,text:`Добавить посещение ${G(s,"numeric")}`,onClick:de,width:"100%",background:E.blue.main,textColor:E.white.main})]})},ft={None:"-",Basic:"Основная",Special:"Специальная",Preparatory:"Подготовительная",HealthLimitations:"ОВЗ"},kt={None:"-",Basketball:"Баскетбол",Volleyball:"Волейбол",Aerobics:"Аэробика",PowerLiftingAndCrossfit:"Пауэрлифтинг и кроссфит",StreetLiftingAndArmLifting:"Стритлифтинг и армлифтинг",GeneralPhysicalTraining:"ОФП",GeneralPhysicalTrainingGym:"ОФП (тренажерный зал)",FootRoom:"Футзал",SMG:"СМГ",TableTennis:"СМГ настольный теннис",NordicWalking:"СМГ скандинавская ходьба"};export{pt as A,x as P,R as a,Xe as b,Ze as c,Ye as d,mt as e,et as f,kt as g,ft as h,tt as i,Ge as j,Ce as k,je as l,ze as m,lt as n,at as o,st as p,nt as q,ot as r,ut as s,rt as t,ct as u,dt as v,it as w,gt as x};
