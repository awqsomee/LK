var i=(e,s,o)=>new Promise((p,r)=>{var f=c=>{try{g(o.next(c))}catch(v){r(v)}},V=c=>{try{g(o.throw(c))}catch(v){r(v)}},g=c=>c.done?p(c.value):Promise.resolve(c.value).then(f,V);g((o=o.apply(e,s)).next())});import{p as n,e as d,x as t,h as m,av as te,r as j,i as se,cT as ae,cU as ne,j as b}from"./vendor-60fdf703.js";import{c_ as M,c$ as l,aQ as a,d as oe,I as ie,B as de,z as C,E as G}from"./index-ea554b7a.js";import{a as ce,r as re,b as le,c as ge,d as me,f as ue,g as pe,h as fe,i as ve,j as ke,k as xe,s as Se}from"./model-22cbfa0c.js";const O=n({name:"addVisit",sid:"3ybve7"}),I=n({name:"removeVisit",sid:"w1vlkj"}),u=d(e=>i(void 0,null,function*(){return yield ce(e),e}),{name:"addVisitFx",sid:"-lbpib"}),k=d(s=>i(void 0,[s],function*({id:e}){return yield re(e),e}),{name:"removeVisitFx",sid:"-wpy18p"}),$e=k.pending,Pe=u.pending;t({and:[{clock:O,target:u}],or:{sid:"-tzueuh"}});t({and:[{clock:u.doneData,target:M.close}],or:{sid:"-txn8h1"}});t({and:[{clock:u.failData,fn:e=>({message:l(e,"Не удалось добавить посещение"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-tvg23l"}});t({and:[{clock:u.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-tey8ar"}});t({and:[{clock:I,target:k}],or:{sid:"-sygehx"}});t({and:[{clock:k.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-skpjnw"}});t({and:[{clock:k.failData,fn:e=>({message:l(e,"Не удалось удалить посещение"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-sfrebn"}});const De={addVisit:O,removeVisit:I},h={addVisitFx:u,removeVisitFx:k},Ae={pendingRemoveVisit:$e,pendingAddVisit:Pe},ye=n({name:"load",sid:"-k4a96v"}),H=n({name:"setPage",sid:"r22ga"}),he=m(0,{name:"$pEStudentsPage",sid:"vmf1st"}).on(H,(e,s)=>s),z=m([],{name:"$pEStudents",sid:"-lxn8fl"}),Fe=m(0,{name:"$pEStudentsTotalCount",sid:"-a9fkzg"});t({and:[{clock:h.addVisitFx.doneData,source:z,filter:(e,{studentGuid:s})=>e.some(o=>o.studentGuid===s),fn:(e,s)=>{const o=JSON.parse(JSON.stringify(e)),p=o.find(r=>r.studentGuid===s.studentGuid);return++p.visits,o},target:z}],or:{sid:"quri1a"}});const Je={load:ye,setPage:H},Be={$pEStudents:z,$pEStudentsPage:he,$pEStudentsTotalCount:Fe},J=n({name:"addAdditionPoints",sid:"-gfwajq"}),B=n({name:"removeAdditionPoints",sid:"s7fafn"}),x=d(s=>i(void 0,[s],function*({id:e}){yield le(e)}),{name:"removeAdditionPointsFx",sid:"-yz8fw7"});t({and:[{clock:B,target:x}],or:{sid:"-8u8zpu"}});const we=x.pending,S=d(e=>i(void 0,null,function*(){return yield ge(e),e}),{name:"addAdditionPointsFx",sid:"htakn7"});t({and:[{clock:J,target:S}],or:{sid:"-8dr5x0"}});t({and:[{clock:S.doneData,target:M.close}],or:{sid:"-8bjzjk"}});t({and:[{clock:S.doneData,fn:()=>({message:"Баллы добавлены",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-7xt4pj"}});t({and:[{clock:S.failData,fn:e=>({message:l(e,"Не удалось добавить баллы"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-7suzda"}});t({and:[{clock:x.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-7cd5kg"}});t({and:[{clock:x.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-6vvbrm"}});const Le={addAdditionPoints:J,removeAdditionPoints:B},E={addAdditionPointsFx:S,removeAdditionPointsFx:x},_e={pendingRemoveAdditionPoints:we},L=n({name:"addRegulationPoints",sid:"r944lm"}),_=n({name:"removeRegulationPoints",sid:"2sncem"}),$=d(s=>i(void 0,[s],function*({id:e}){yield me(e)}),{name:"removeRegulationPointsFx",sid:"-krrp8n"});t({and:[{clock:_,target:$}],or:{sid:"mz5r9q"}});const Ve=$.pending,P=d(e=>i(void 0,null,function*(){return yield ue(e),e}),{name:"addRegulationPointsFx",sid:"-dsdequ"});t({and:[{clock:L,target:P}],or:{sid:"nfnl2k"}});t({and:[{clock:P.doneData,target:M.close}],or:{sid:"nhurg0"}});t({and:[{clock:P.doneData,fn:()=>({message:"Норматив добавлен",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"nvlma1"}});t({and:[{clock:P.failData,fn:e=>({message:l(e,"Не удалось добавить норматив"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"o0jrma"}});t({and:[{clock:$.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"oh1lf4"}});t({and:[{clock:$.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:a.evokePopUpMessage}],or:{sid:"oxjf7y"}});const Ne={addRegulationPoints:L,removeRegulationPoints:_},q={addRegulationPointsFx:P,removeRegulationPointsFx:$},Te={pendingRemoveRegulationPoints:Ve},N=n({name:"setHealthGroup",sid:"8b83ja"}),D=d(e=>i(void 0,null,function*(){return yield pe(e),e}),{name:"setHealthGroupFx",sid:"a5qgdx"}),Ue=D.pending;t({and:[{clock:N,target:D}],or:{sid:"-fydy6l"}});t({and:[{clock:D.failData,fn:e=>({message:l(e,"Не удалось добавить группу здоровья"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-fw6rt5"}});t({and:[{clock:D.doneData,fn:()=>({message:"Группа здоровья добавлена",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-ffoy0b"}});const Qe={setHealthGroup:N},be={setHealthGroupFx:D},Ke={pendingSetHealthGroup:Ue},T=n({name:"setSpecialization",sid:"hrz73m"}),A=d(e=>i(void 0,null,function*(){return yield fe(e),e}),{name:"setSpecializationFx",sid:"-aw52yn"}),ze=A.pending;t({and:[{clock:T,target:A}],or:{sid:"-4x6l4a"}});t({and:[{clock:A.failData,fn:e=>({message:l(e,"Не удалось добавить специализацию"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-4uzequ"}});t({and:[{clock:A.doneData,fn:()=>({message:"Специализация добавлена",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"-4ehky0"}});const We={setSpecialization:T},Me={setSpecializationFx:A},Xe={pendingSetSpecialization:ze},Q=n({name:"setCurrentStudentId",sid:"-yi431d"}),K=n({name:"resetStudentId",sid:"b5joy3"}),W=n({name:"reload",sid:"-4igy6g"}),F=d(e=>i(void 0,null,function*(){const{data:s}=yield ve(e);return s.data}),{name:"loadCurrentStudent",sid:"-htqwl5"});t({and:[{clock:Q,target:F}],or:{sid:"-e9batg"}});const R=m(null,{name:"$selectedStudent",sid:"ffg61i"}).reset(K),Re=te({and:[h.addVisitFx.pending,F.pending,Boolean],or:{name:"$loading",sid:"4dn8ye"}});t({and:[{clock:[h.addVisitFx.doneData,h.removeVisitFx.doneData,be.setHealthGroupFx.doneData,Me.setSpecializationFx.doneData,E.addAdditionPointsFx.doneData,E.removeAdditionPointsFx.doneData,q.addRegulationPointsFx.doneData,q.removeRegulationPointsFx.doneData],target:W}],or:{sid:"-dugusp"}});t({and:[{clock:W,source:R,filter:e=>!!e,fn:e=>e.studentGuid,target:F}],or:{sid:"-ds9of9"}});t({and:[{clock:F.doneData,target:R}],or:{sid:"-dcvft5"}});const Ye={$selectedStudent:R,$loading:Re},Ze={setCurrentStudentId:Q,resetStudentId:K},X=n({name:"load",sid:"-1nsq63"}),Y=n({name:"remove",sid:"wecpac"}),Z=d(()=>i(void 0,null,function*(){const{data:e}=yield ke();return e.competitions}),{name:"loadFx",sid:"-d34r01"}),w=d(e=>i(void 0,null,function*(){return yield xe(e),e}),{name:"removeFx",sid:"y5v9by"});t({and:[{clock:Y,target:w}],or:{sid:"q9j9ts"}});t({and:[{clock:w.failData,fn:e=>({message:l(e,"Не удалось удалить соревнование"),type:"failure",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"qna4nt"}});t({and:[{clock:w.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:a.evokePopUpMessage}],or:{sid:"r3rygn"}});t({and:[{clock:X,target:Z}],or:{sid:"r8q3sw"}});const je=m([],{name:"$competitions",sid:"dxwaax"}).on(Z.doneData,(e,s)=>s).on(w.doneData,(e,s)=>e.filter(o=>o!==s)),et={load:X,remove:Y},tt={$competitions:je},ee=n({name:"update",sid:"iz30uk"}),Ce=m("",{name:"$search",sid:"-irv9i1"}).on(ee,(e,s)=>s),st={update:ee},at={$search:Ce};var Ge=(e=>(e.Activist="Activist",e.Competition="Competition",e.ExternalFitness="ExternalFitness",e.GTO="GTO",e.InternalTeam="InternalTeam",e.OnlineWork="OnlineWork",e.Science="Science",e))(Ge||{}),Ee=(e=>(e.FlexionAndExtensionOfArms="FlexionAndExtensionOfArms",e.JumpingRopeJumps="JumpingRopeJumps",e.Jumps="Jumps",e.PullUps="PullUps",e.ShuttleRun="ShuttleRun",e.Squats="Squats",e.Tilts="Tilts",e.TorsoLifts="TorsoLifts",e.Other="Other",e))(Ee||{}),y=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(y||{});const nt=({studentGuid:e})=>{const[s,o]=j.useState(new Date().toISOString()),[p,r]=se([Ae.pendingAddVisit,Se.peTeacher]),f=new Date(s),V=[y.AdminAccess,y.SuperUser,y.SecretaryAccess].some(v=>{var U;return r==null||(U=r.permissions)===null||U===void 0?void 0:U.includes(v)}),g=(ae(f,{start:ne(new Date,1),end:new Date})||V)&&f.getDay()!==0&&f.getDay()!==1;j.useEffect(()=>{o(new Date().toISOString())},[e]);const c=()=>{De.addVisit({studentGuid:e,date:C(s,"numeric")})};return b.jsxs(oe,{gap:"4px",ai:"flex-start",children:[b.jsx(ie,{alertMessage:g?"":"Не допустимая дата",type:"date",setValue:o,value:s,hideCross:!0}),b.jsx(de,{isActive:g&&!p,text:`Добавить посещение ${C(s,"numeric")}`,onClick:c,width:"100%",background:G.blue.main,textColor:G.white.main})]})},ot={None:"-",Basic:"Основная",SpecialA:"Специальная А",SpecialB:"Специальная Б",Preparatory:"Подготовительная",HealthLimitations:"ОВЗ",Disabled:"Инвалид"},it={None:"-",Basketball:"Баскетбол",Volleyball:"Волейбол",Aerobics:"Аэробика",PowerLiftingAndCrossfit:"Пауэрлифтинг и кроссфит",StreetLiftingAndArmLifting:"Стритлифтинг и армлифтинг",GeneralPhysicalTraining:"ОФП",GeneralPhysicalTrainingGym:"ОФП (тренажерный зал)",FootRoom:"Футзал",SMG:"СМГ",TableTennis:"СМГ настольный теннис",NordicWalking:"СМГ скандинавская ходьба",InternalTeam:"Сборная"};export{nt as A,y as P,Ee as R,Ge as W,Xe as a,We as b,Ae as c,De as d,Qe as e,Ye as f,tt as g,et as h,Le as i,_e as j,Ne as k,Te as l,Ze as m,ot as n,it as o,at as p,st as q,Be as r,Ke as s,Je as t};
