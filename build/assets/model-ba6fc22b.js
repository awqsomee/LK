var S=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,u=(t,e)=>{for(var o in e||(e={}))T.call(e,o)&&l(t,o,e[o]);if(g)for(var o of g(e))x.call(e,o)&&l(t,o,e[o]);return t},m=(t,e)=>b(t,f(e));var v=(t,e,o)=>new Promise((a,p)=>{var $=n=>{try{r(o.next(n))}catch(i){p(i)}},N=n=>{try{r(o.throw(n))}catch(i){p(i)}},r=n=>n.done?a(n.value):Promise.resolve(n.value).then($,N);r((o=o.apply(t,e)).next())});import{p as A,O as F,bO as P,x as h}from"./vendor-8a1e4858.js";import{bM as s,q as k,e as C}from"./index-28c96bb4.js";const G=40,_=t=>{const e={};return t["group.groupName"]&&(e.groupNumber=t["group.groupName"].value),t.group&&(e.groupNumber=t.group.value),t.fullName&&(e.fullName=t.fullName.value),t.course&&(e.course=t.course.value),e},V=(t,e,o=G)=>s.get("/student",{params:u({page:t+1,pageSize:o},_(e))}),q=t=>s.get(`/student/${t}`),w=t=>s.post("/points/visit",t),y=t=>s.delete(`/points/visit/${t}`),D=t=>s.post("/points/other",t),H=t=>s.delete(`/points/other/${t}`),I=t=>s.post("/points/standard",t),M=t=>s.delete(`/points/standard/${t}`),Z=t=>s.post("/competition",{competitionName:t}),B=t=>s.delete("/competition",{params:{competitionName:t}}),J=()=>s.get("/competition"),z=t=>s.get(`/teacher/${t}`),K=t=>s.get("/group",{params:{curatorGuid:t}}),Q=t=>s.post("/student/archive",{studentGuid:t}),W=t=>s.post("/student/health-group",t),X=t=>s.post("/student/specialization",t),d=A({name:"load",sid:"-j15bef"}),c=F({and:{effect:t=>v(void 0,null,function*(){var e,o;const{data:a}=yield z((e=t==null?void 0:t.guid)!==null&&e!==void 0?e:"");return m(u({},a.data),{id:(o=t==null?void 0:t.guid)!==null&&o!==void 0?o:""})}),source:k.user},or:{name:"loadFx",sid:"-eig4dk"}}),E=P(c,null,{name:"$peTeacher",sid:"-sc8v1a"});h({and:[{clock:C.authenticated,target:d}],or:{sid:"10va54"}});h({and:[{clock:d,target:c}],or:{sid:"1em4z5"}});const j=c.pending,Y={load:d},U={peTeacher:E,isLoading:j};export{G as S,w as a,H as b,D as c,M as d,Y as e,I as f,W as g,X as h,q as i,J as j,B as k,Z as l,V as m,K as n,Q as o,y as r,U as s};
