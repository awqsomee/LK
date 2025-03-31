var qe=Object.defineProperty,Qe=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var de=(e,t,s)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,p=(e,t)=>{for(var s in t||(t={}))le.call(t,s)&&de(e,s,t[s]);if(N)for(var s of N(t))ce.call(t,s)&&de(e,s,t[s]);return e},u=(e,t)=>Qe(e,Ve(t));var pe=(e,t)=>{var s={};for(var a in e)le.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&N)for(var a of N(e))t.indexOf(a)<0&&ce.call(e,a)&&(s[a]=e[a]);return s};var R=(e,t,s)=>new Promise((a,i)=>{var r=l=>{try{o(s.next(l))}catch(c){i(c)}},d=l=>{try{o(s.throw(l))}catch(c){i(c)}},o=l=>l.done?a(l.value):Promise.resolve(l.value).then(r,d);o((s=s.apply(e,t)).next())});import{p as E,h as k,aw as I,O as Ce,k as w,aF as Ke,N as Xe,f as Ye,aB as Je,aC as Ze,aD as Ge,x as f,aE as et,a$ as B,a_ as ye,aX as W,j as n,cL as Me,cM as ke,s as h,az as tt,bQ as Ie,b3 as ee,i as m,aK as J,cN as st,cO as K,cP as nt,cQ as at,cr as it,bh as ot,r as x,ax as rt,cR as dt,cS as lt,R as ct,cT as pt,b0 as ht,bB as ut,bC as gt}from"./vendor-fdf02817.js";import{X as he,b9 as L,ba as g,bb as xt,p as C,bc as mt,bd as ft,e as $e,be as Z,H as U,ab as vt,bf as D,bg as _e,ay as Fe,d as b,S as te,aG as X,B as O,bh as G,aR as jt,N as wt,bi as Se,T as Te,bj as bt,a_ as Ct,E as $,y as se,bk as yt,bl as Mt,a0 as ne,bm as ue,az as kt,W as ge,v as xe,w as me,x as fe,bn as It,aH as $t,bo as _t,a1 as ae,bp as Ft,D as St,bq as Tt,br as Et,bs as Lt,bt as zt}from"./index-2172af78.js";import{B as Nt}from"./index-222fbb64.js";import{T as H}from"./index-b5510049.js";import{p as ve}from"./index-4d75424b.js";const Rt=({chats:e,search:t})=>e.filter(s=>{var a;return he(((a=s.opponent)===null||a===void 0?void 0:a.name)+s.lastmessage.text+s.lastmessage.datetime+s.subject).includes(he(t))}),Ee=E({name:"setSearch",sid:"-3oydq8"}),Le=k("",{name:"$search",sid:"-rqcw3l"}).on(Ee,(e,t)=>t),Pt=I({and:[L.chats.$data,Le,(e,t)=>!t||!e?e:Rt({search:t,chats:e})],or:{name:"$foundChats",sid:"-w695fw"}}),Dt={setSearch:Ee},ze={search:Le,foundChats:Pt},ie=e=>e?`${e.name} ${e.surname}`:"",oe=E({name:"resendErrorMessage",sid:"-j6vf9f"}),Ne=Ce({and:{source:g.selectedChatId,effect:e=>R(void 0,null,function*(){if(!e)throw new Error("Чат не выбран");const t=new AbortController;w({sid:"-ag8f97",fn:()=>Ke(()=>{t.abort()}),name:"none",method:"onAbort"});let s=0;for(;s<3;){const{data:a}=yield xt(e,t.signal),i=!(a!=null&&a.map);if(a&&!i)return a.reverse();s++}throw new Error("Не удалось загрузить сообщения")})},or:{name:"getChatMessagesFx",sid:"-vtascx"}}),Ot=Ce({and:{source:[g.selectedChatId,C.user],effect:(a,i)=>R(void 0,[a,i],function*([e,t],s){if(!e)throw new Error("Чат не выбран");const r=t,d=yield mt(u(p({},s),{chatId:e}));return u(p({},d),{currentUser:r})})},or:{name:"addChatMessageFx",sid:"-8xd7jw"}}),y=w({sid:"4jrlxz",fn:()=>Xe({handler:Ot}),name:"addMessageMutation",method:"createMutation"}),M=w({sid:"vwkfuy",fn:()=>Ye({handler:Ne,enabled:ft.$visible}),name:"chatMessagesQuery",method:"createQuery"});w({sid:"-8klqd8",fn:()=>Je(M,{strategy:"TAKE_LATEST"}),name:"none",method:"concurrency"});w({sid:"-87eo4k",fn:()=>Ze(M,{adapter:w({sid:"53m8po",fn:()=>Ge({maxEntries:10,maxAge:"60sec"}),name:"adapter",method:"sessionStorageCache"}),purge:$e.logout}),name:"none",method:"cache"});f({and:[{clock:g.selectedChatId,target:M.reset}],or:{sid:"-83k3z1"}});const{tick:Ht}=w({sid:"-eto2mu",fn:()=>et({timeout:6e4,start:Z.set,stop:$e.logout}),name:"none",method:"interval"});f({and:[{clock:Ht,target:M.start}],or:{sid:"-7lyozh"}});const _=k({},{name:"$inProgressChatsMessages",sid:"t11gzj"}),F=k({},{name:"$errorChatsMessages",sid:"6cq9m2"}),At=I({and:[_,g.selectedChatId,(e,t)=>{var s;return(s=e[t!=null?t:""])!==null&&s!==void 0?s:[]}],or:{name:"$inProgressChatMessages",sid:"-uvi455"}}),Re=I({and:[F,g.selectedChatId,(e,t)=>{var s;return(s=e[t!=null?t:""])!==null&&s!==void 0?s:[]}],or:{name:"$errorChatMessages",sid:"-pm9xmc"}}),re=k({},{name:"$isFirstFetchedChats",sid:"7ddxse"}).on(Ne.done,(e,{params:t})=>{const s=t;return e[s.id]?e:u(p({},e),{[s.id]:!0})}),Bt=I({and:[re,g.selectedChatId,(e,t)=>{var s;return(s=e[t!=null?t:""])!==null&&s!==void 0?s:!1}],or:{name:"$isFirstFetched",sid:"-kgmmld"}});f({and:[{clock:C.user,target:re.reinit}],or:{sid:"rijqk5"}});f({and:[{clock:y.started,source:{inProgressChatsMessages:_,user:C.user},fn:({inProgressChatsMessages:e,user:t},{params:s})=>{var a,i,r;return u(p({},e),{[s.chatId]:[...(a=e[s.chatId])!==null&&a!==void 0?a:[],{datetime:B(Date.now()),html:s.text,readed:!1,readed_opponent:!1,files:(i=s.files)!==null&&i!==void 0?i:[],author_id:(r=t==null?void 0:t.id.toString())!==null&&r!==void 0?r:"",author_name:ie(t),msg_id:s.localId}]})},target:_}],or:{sid:"rkqwxl"}});f({and:[{clock:y.finished.finally,source:_,fn:(e,{params:t})=>u(p({},e),{[t.chatId]:e[t.chatId].filter(({msg_id:s})=>s!==t.localId)}),target:_}],or:{sid:"sys6xg"}});f({and:[{clock:y.finished.failure,source:{errorChatsMessages:F,user:C.user},fn:({errorChatsMessages:e,user:t},{params:s})=>{var a,i,r;return u(p({},e),{[s.chatId]:[...(a=e[s.chatId])!==null&&a!==void 0?a:[],{datetime:B(Date.now()),html:s.text,readed_opponent:!1,readed:!0,files:(i=s.files)!==null&&i!==void 0?i:[],author_id:(r=t==null?void 0:t.id.toString())!==null&&r!==void 0?r:"",author_name:ie(t),msg_id:s.localId}]})},target:F}],or:{sid:"tu4gr1"}});f({and:[{clock:oe,source:{errorChatMessages:Re,chatId:g.selectedChatId},filter:({errorChatMessages:e},{msg_id:t})=>!!e.some(({msg_id:s})=>s===t),fn:({errorChatMessages:e,chatId:t},{msg_id:s})=>{var a,i;const r=e.find(({msg_id:d})=>d===s);return{chatId:t,localId:s,text:(a=r==null?void 0:r.html)!==null&&a!==void 0?a:"",files:(i=r==null?void 0:r.files)!==null&&i!==void 0?i:[]}},target:y.start}],or:{sid:"uwm2ab"}});f({and:[{clock:oe,source:{errorChatsMessages:F,chatId:g.selectedChatId},filter:({chatId:e})=>!!e,fn:({chatId:e,errorChatsMessages:t},{msg_id:s})=>u(p({},t),{[e]:t[e].filter(({msg_id:a})=>a!==s)}),target:F}],or:{sid:"-sfbl67"}});w({sid:"-rf160d",fn:()=>ye(M,{on:y,by:{success:({query:e,mutation:t})=>{if(e&&"result"in e){var s,a,i;const{currentUser:r}=t.result,d={datetime:B(Date.now()),html:t.params.text,readed:!0,readed_opponent:!1,files:(s=(a=t.params.files)===null||a===void 0?void 0:a.map(o=>({name:o.name,url:""})))!==null&&s!==void 0?s:[],author_id:(i=r==null?void 0:r.id.toString())!==null&&i!==void 0?i:"",author_name:ie(r),msg_id:t.params.localId};return{result:[...e.result,d],refetch:!0,error:null}}return{result:null,refetch:!0,error:null}}}}),name:"none",method:"update"});w({sid:"-pjy9mb",fn:()=>ye(L.chats,{on:y,by:{success:({query:e,mutation:t})=>{if(e&&"result"in e){var s,a;const i={datetime:B(Date.now()),html:t.params.text,readed:!0,readed_opponent:!0,files:(s=(a=t.params.files)===null||a===void 0?void 0:a.map(r=>({name:r.name,url:""})))!==null&&s!==void 0?s:[],from:"you",text:W(t.params.text,{allowedTags:[]})};return{result:e.result.map(r=>r.id===t.params.chatId?u(p({},r),{lastmessage:i}):r),refetch:!0,error:null}}return{result:null,refetch:!0,error:null}}}}),name:"none",method:"update"});f({and:[{clock:g.selectedChat,filter:Boolean,target:M.refresh}],or:{sid:"-dqdict"}});const A={chatMessages:M},Pe={addMessage:y},S={errorChatMessages:Re,inProgressChatMessages:At,isFirstFetched:Bt,isFirstFetchedChats:re},Wt={resendErrorMessage:oe},De=E({name:"changed",sid:"y46nz0"}),Oe=E({name:"sended",sid:"-67181"}),T=k({},{name:"$chatsMessage",sid:"wydyrf"});f({and:[{clock:De,source:{selectedChatId:g.selectedChatId,chatsMessage:T},filter:({selectedChatId:e})=>!!e,fn:({chatsMessage:e,selectedChatId:t},s)=>u(p({},e),{[t]:s}),target:T}],or:{sid:"59yzc0"}});const He=I({and:[T,g.selectedChatId,(e,t)=>{var s;return t?(s=e[t])!==null&&s!==void 0?s:{text:"",files:[]}:{text:"",files:[]}}],or:{name:"$currentMessage",sid:"-y9pnxk"}});f({and:[{clock:Oe,source:{message:He,chatId:g.selectedChatId},fn:({chatId:e,message:t})=>u(p({chatId:e},t),{localId:new Date().getTime().toString()}),target:Pe.addMessage.start}],or:{sid:"jtinwe"}});f({and:[{clock:Pe.addMessage.started,source:{selectedChatId:g.selectedChatId,chatsMessage:T},filter:({selectedChatId:e})=>!!e,fn:({chatsMessage:e,selectedChatId:t})=>u(p({},e),{[t]:{text:"",files:[]}}),target:T}],or:{sid:"kr243f"}});const Ut={currentMessage:He},P={changed:De,sended:Oe},qt=I({and:[A.chatMessages.$data,S.errorChatMessages,S.inProgressChatMessages,(e,t,s)=>[...e!=null?e:[],...t.map(a=>u(p({},a),{status:"error"})),...s.map(a=>u(p({},a),{status:"inProgress"}))]],or:{name:"$allChatMessages",sid:"-9487ro"}}),Qt={messages:qt},Ae=e=>new Date(e).toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"}),Vt=({lastMessage:e})=>e.from==="you"?e.readed_opponent?n.jsx(H,{direction:"left",text:"Прочитано",children:n.jsx(Me,{})}):n.jsx(H,{direction:"left",text:"Отправлено",children:n.jsx(ke,{})}):null,Kt=h(tt).withConfig({componentId:"sc-1319ptr-0"})(["text-decoration:none;.chat-item-content{display:flex;align-items:center;justify-content:center;width:100%;height:76px;color:",";padding:0 20px;background:",";overflow:hidden;position:relative;&:hover{filter:brightness(0.95);}.name-and-message{display:flex;flex-direction:column;justify-content:center;width:100%;min-width:250px;.subject{font-size:0.67em;opacity:0.85;background:var(--almostTransparent);padding:2px 4px;border-radius:4px;font-weight:600;width:fit-content;}& b{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.85em;font-weight:500;}.last-message{width:100%;font-size:0.75em;opacity:0.7;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}.sent-time{min-height:30px;width:100%;display:flex;align-items:flex-start;justify-content:flex-end;font-size:0.8em;opacity:0.6;font-weight:500;}}"],({isChosen:e})=>e?"#fff":"var(--text)",({isChosen:e})=>e?U.blue.main:"var(--block-content)");function Be({size:e,marginRight:t}){return n.jsx(vt,{marginRight:t,borderRadius:"100%",size:e!=null?e:25,color:"lightBlue",children:n.jsx(Ie,{})})}const Xt=h(Nt).withConfig({componentId:"sc-2lmu2t-0"})(["min-width:20px;width:20px;height:20px;border-radius:100%;"]),Yt=e=>{const t=new Date(e);return new Date().getTime()-t.getTime()>36e5*24?t.toLocaleDateString("ru-RU"):Ae(t)},Jt=e=>{var t,s,a,i,r,d;const o=(t=ee(D))===null||t===void 0?void 0:t.params,l=m(S.isFirstFetchedChats),c={name:(s=(a=e.opponent)===null||a===void 0?void 0:a.name)!==null&&s!==void 0?s:"",avatar:(i=(r=e.opponent)===null||r===void 0?void 0:r.avatar)!==null&&i!==void 0?i:"",width:"40px",height:"40px",marginRight:"12px",notifications:void 0},v=e.lastmessage.from==="you"?"Вы: "+e.lastmessage.text:e.lastmessage.text,q=e.subject.split(" ")[0]==="Группе"&&e.lastmessage.from==="you",Q=Yt(e.lastmessage.datetime),z=!!l[e.id];return n.jsx(Kt,{to:_e+`/${e.id}`,isChosen:(o==null?void 0:o.chatId)===e.id,isOpen:!0,children:n.jsxs("div",{className:"chat-item-content",children:[q?n.jsx(Be,{size:40,marginRight:"7px"}):n.jsx(Fe,p({},c)),n.jsx(n.Fragment,{children:n.jsxs("div",{className:"name-and-message",children:[e.subject&&n.jsx("span",{className:"subject",children:e.subject}),((d=e.opponent)===null||d===void 0?void 0:d.name)&&n.jsxs(b,{jc:"space-between",w:"100%",gap:"8px",children:[n.jsx("b",{children:e.opponent.name}),n.jsxs(b,{gap:"4px",w:"fit-content",children:[n.jsx(Vt,{lastMessage:e.lastmessage}),n.jsx(te,{fontSize:"0.7rem",children:Q})]})]}),n.jsxs(b,{gap:"6px",children:[n.jsx("div",{className:"last-message",children:v}),n.jsx(Xt,{visible:!e.lastmessage.readed&&!z,children:"1"})]})]})})]})})},Zt=h.div.withConfig({componentId:"sc-1nhr3r-0"})(["display:flex;align-items:center;padding:10px;.name-and-message{display:flex;flex-direction:column;justify-content:center;}"]),j=()=>n.jsxs(Zt,{children:[n.jsx(X,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0 7px 0 0"}),n.jsxs("div",{className:"name-and-message",children:[n.jsx(X,{shape:"rect",size:{width:"150px",height:"12px"},margin:"2px 0"}),n.jsx(X,{shape:"rect",size:{width:"70px",height:"10px"},margin:"0"})]})]}),Gt=e=>R(void 0,null,function*(){const t=window.URL.createObjectURL(new Blob([e])),s=document.createElement("a");s.href=t,s.setAttribute("download",e.name),document.body.appendChild(s),s.click()}),es={pdf:n.jsx(st,{color:"#c54646"}),docx:n.jsx(J,{}),doc:n.jsx(J,{}),jpeg:n.jsx(K,{}),jpg:n.jsx(K,{}),png:n.jsx(K,{})},ts=({file:e,isYourMessage:t})=>{var s,a;const i=(s=e.name.split(".").pop())!==null&&s!==void 0?s:"doc",r=d=>{d.stopPropagation(),"url"in e&&e.url&&window.open(e.url,"_blank"),e instanceof File&&Gt(e)};return n.jsx(ss,{onClick:r,children:n.jsxs("div",{className:"file-body",children:[n.jsx("div",{className:"image-container",children:(a=es[i])!==null&&a!==void 0?a:n.jsx(J,{})}),n.jsx("div",{className:"name-and-size",children:n.jsx("b",{className:"file-name",style:{color:t?U.white.main:"var(--text)"},children:e.name})})]})})},ss=h.div.withConfig({componentId:"sc-zdi5bn-0"})(["width:100%;padding:6px;display:flex;justify-content:space-between;align-items:center;background:",";border-radius:var(--brLight);overflow:hidden;cursor:pointer;&:hover{filter:brightness(0.95);}.file-body{display:flex;gap:8px;align-items:center;cursor:pointer;.name-and-size{display:flex;flex-direction:column;.file-name{font-size:0.8em;word-break:break-all;font-weight:500;}}.image-container{padding:8px;display:flex;align-items:center;justify-content:center;background:var(--theme);border-radius:var(--brLight);svg{width:20px;height:20px;}}}"],U.grey.transparent2),ns=({message:e})=>n.jsxs(b,{gap:"8px",d:"column",children:[n.jsx(O,{text:"Копировать",icon:n.jsx(nt,{}),width:"100%",align:"left",background:"transparent",onClick:()=>{var t;navigator.clipboard.writeText((t=W(e.html,{allowedTags:[]}))!==null&&t!==void 0?t:""),G.close(),jt.evokePopUpMessage({message:"Сообщение скопировано",type:"info"})}}),e.status==="error"&&n.jsx(O,{text:"Повторить",icon:n.jsx(at,{}),width:"100%",align:"left",background:"transparent",onClick:()=>{Wt.resendErrorMessage(e),G.close()}})]}),as=({message:e})=>{const[t]=m([C.user]);return e.status==="inProgress"?n.jsx(it,{className:"icon"}):e.status==="error"?n.jsx(ot,{className:"icon red"}):e.author_id===(t==null?void 0:t.id.toString())&&e.readed_opponent||e.author_id!==(t==null?void 0:t.id.toString())?n.jsx(H,{text:"Прочитано",direction:"left",children:n.jsx(Me,{className:"icon"})}):n.jsx(H,{text:"Отправлено",direction:"left",children:n.jsx(ke,{className:"icon"})})};function is(e){return e.replace(/(https?:\/\/[^\s|)|<]+)/g,'<a href="$1">$1</a>')}const os=({name:e,message:t,isLast:s})=>{const[a]=m([C.user]),i=Ae(t.datetime),{isMobile:r}=wt(),d=t.author_id===(a==null?void 0:a.id.toString()),o=l=>{"tagName"in l.target&&l.target.tagName==="A"||G.open({e:l,content:n.jsx(ns,{message:t}),height:70})};return n.jsx(rs,{onClick:r?o:void 0,isYourMessage:d,isLast:s,onContextMenu:o,children:n.jsxs("div",{className:"name-and-message",children:[n.jsx("div",{className:"name-and-time",children:n.jsx("b",{children:e})}),n.jsx("span",{className:"message",dangerouslySetInnerHTML:{__html:W(is(t.html))}}),!!t.files.length&&n.jsx(b,{d:"column",className:"files",gap:"4px",children:t.files.map(l=>n.jsx(ts,{isYourMessage:d,file:l},l.name))}),n.jsxs(b,{jc:"flex-end",gap:"4px",h:"2px",children:[n.jsx(te,{fontSize:"0.65rem",children:i}),n.jsx(as,{message:t})]})]})})},rs=h.div.withConfig({componentId:"sc-1wk8wcw-0"})(["display:flex;align-items:flex-end;padding:",";.message-avatar{width:32px;height:32px;position:sticky;bottom:0px;top:0px;}.name-and-message{display:flex;flex-direction:column;gap:8px;background:",";color:",";padding:12px;border-radius:",";margin-left:16px;max-width:430px;width:100%;position:relative;&::before{content:'';display:",";position:absolute;width:12px;height:17px;bottom:0px;left:-12px;background:",";}&::after{content:'';display:",";position:absolute;width:16px;height:25px;bottom:0px;left:-16px;border-radius:0 0 30px;background:var(--block);}a{text-decoration:underline;color:",";}.name-and-time{b{color:",";font-size:0.8em;margin-bottom:5px;margin-right:10px;font-weight:600;}span{font-size:0.7em;opacity:0.8;}}.message{font-size:0.85em;word-break:break-word;line-height:1.3rem;ul,li{margin-left:1em;}& p{line-height:1.4rem;}}.red{color:",";}}@media (max-width:1000px){.name-and-message{max-width:80%;}}"],({isLast:e})=>e?"4px 0 4px 0":"4px 0",({isYourMessage:e})=>e?"var(--reallyBlue)":"var(--message-item)",({isYourMessage:e})=>e?"#fff":"var(--text)",({isLast:e})=>e?"10px 10px 10px 0":"10px",({isLast:e})=>e?"block":"none",({isYourMessage:e})=>e?"var(--reallyBlue)":"var(--message-item)",({isLast:e})=>e?"block":"none",({isYourMessage:e})=>e?"#fff":"",({isYourMessage:e})=>e?"#fff":"var(--text)",U.red.main),ds=({forwardedRef:e})=>{const[t,s,a]=m([L.chats.$pending,ze.foundChats,Se.isFirstFetched]);return t&&!a?n.jsxs(je,{children:[n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{})]}):n.jsxs(je,{ref:e,children:[!(s!=null&&s.length)&&n.jsx(Te,{size:3,children:"Нет чатов"}),s==null?void 0:s.map(i=>x.createElement(Jt,u(p({},i),{key:i.id})))]})},je=h.div.withConfig({componentId:"sc-1eual6l-0"})(["overflow-y:auto;height:100%;"]),ls=()=>{var e,t,s,a,i,r,d;const[o,l,c]=m([g.selectedChat,L.chats.$pending,Se.isFirstFetched]),v=x.useRef(null),q=rt(),Q=()=>{q.push(_e)},z=(o==null||(e=o.opponent)===null||e===void 0?void 0:e.status)==="сотрудник",V=l&&!c;return n.jsxs(cs,{ref:v,children:[n.jsx(O,{icon:n.jsx(dt,{}),onClick:Q,background:"transparent"}),((o==null||(t=o.opponent)===null||t===void 0?void 0:t.id)||V)&&n.jsx(bt,{id:o==null||(s=o.opponent)===null||s===void 0?void 0:s.id,type:z?"staff":"stud",avatar:o==null||(a=o.opponent)===null||a===void 0?void 0:a.avatar,name:(i=o==null||(r=o.opponent)===null||r===void 0?void 0:r.name)!==null&&i!==void 0?i:"",loading:V,group:z||o==null||(d=o.opponent)===null||d===void 0?void 0:d.data}),!V&&!!(o!=null&&o.subject.length)&&n.jsxs(b,{gap:"8px",w:"fit-content",children:[n.jsx(Be,{}),n.jsx(te,{style:{color:"var(--text)",whiteSpace:"nowrap"},children:o==null?void 0:o.subject})]})]})},cs=h.div.withConfig({componentId:"sc-n06mxd-0"})(["width:100%;height:50px;display:flex;align-items:center;padding:8px 10px;position:relative;border-bottom:1px solid #00000024;background:var(--block-content);"]),we=e=>{e!=null&&e.current&&e.current.scrollTo({top:e.current.scrollHeight,behavior:"auto"})},ps=()=>{const e=x.useRef(null),t=x.useRef(!1),[s,a,i,r,d]=m([A.chatMessages.$data,A.chatMessages.$pending,S.isFirstFetched,S.inProgressChatMessages,g.selectedChatId]),o=a&&!i;return x.useLayoutEffect(()=>{if(!e.current)return;const l=e.current.scrollTop+e.current.clientHeight>=e.current.scrollHeight;s&&(!t.current||l)&&!o&&we(e)},[s]),x.useEffect(()=>{t.current=!1},[d]),x.useEffect(()=>{if(e.current){const l=()=>{t.current||(t.current=!0)};return e.current.addEventListener("scroll",l),()=>{var c;(c=e.current)===null||c===void 0||c.removeEventListener("scroll",l)}}},[]),x.useEffect(()=>{we(e)},[r,s==null?void 0:s.length]),n.jsx(hs,{"data-is-loading":o,ref:e,children:o?n.jsx(Ct,{}):n.jsx(fs,{})})},hs=h.div.withConfig({componentId:"sc-1pr0rlx-0"})(["width:100%;position:relative;overflow-y:auto;flex:1;padding:10px;.loading-circle{max-height:40px;}&[data-is-loading='true']{display:flex;justify-content:center;align-items:center;}@media (max-width:1000px){button{position:fixed;right:20px;bottom:70px;border-radius:100%;}}"]),us=({chat:e,currentUser:t,messages:s})=>{const a={};let i=0,r="";return s.forEach((d,o,l)=>{var c;if((((c=l[o-1])===null||c===void 0?void 0:c.author_name)!==d.author_name||$(l[o-1].datetime)!==$(d.datetime)||!l[o-1])&&i++,a[i])a[i].messages.push(d);else{var v;a[i]={messages:[d],avatar:((v=e.opponent)===null||v===void 0?void 0:v.id)!==d.author_id.toString()?t.avatar:e.opponent.avatar,date:$(d.datetime)!==r?$(d.datetime):null},r=$(d.datetime)}}),a},gs=h.div.withConfig({componentId:"sc-14w8ekg-0"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--text);opacity:0.5;font-weight:500;font-size:0.86em;gap:4px;svg{width:100px;height:100px;}"]),We=({message:e="Выберите чат"})=>n.jsxs(gs,{children:[n.jsx(lt,{}),n.jsx("span",{children:e})]}),xs=h.div.withConfig({componentId:"sc-1qy6g0w-0"})(["margin-top:30px;margin-bottom:10px;color:var(--text);position:sticky;top:10px;z-index:10;display:flex;align-items:center;justify-content:center;span{background:var(--theme);padding:6px 12px;border-radius:var(--brSemi);display:inline-block;font-weight:500;font-size:0.8rem;color:var(--theme-mild-opposite);}"]),ms=({date:e})=>e?n.jsx(xs,{children:n.jsx("span",{children:e})}):null,fs=()=>{const{open:e}=se(),[t,s,a,i]=m([Qt.messages,g.selectedChat,A.chatMessages.$pending,C.user]),r=d=>{var o,l,c,v;!s||d.author_id===(i==null?void 0:i.id.toString())||e((s==null||(o=s.opponent)===null||o===void 0?void 0:o.status)==="сотрудник"?n.jsx(yt,p({},s.opponent)):n.jsx(Mt,u(p({},s==null?void 0:s.opponent),{id:(l=s.opponent)===null||l===void 0?void 0:l.id,name:(c=(v=s.opponent)===null||v===void 0?void 0:v.name)!==null&&c!==void 0?c:""})))};return!s||!i||!t?null:n.jsxs(vs,{children:[(t==null?void 0:t.length)===0&&!a&&n.jsx(We,{message:"Нет сообщений"}),Object.values(us({chat:s,messages:t,currentUser:i})).map(d=>n.jsxs(ct.Fragment,{children:[n.jsx(ms,{date:d.date}),n.jsxs("div",{className:"messages-section",children:[n.jsx("div",{className:"message-avatar",children:n.jsx(Fe,{name:d.messages[0].author_name.split(" ").reverse().join(" "),avatar:d.avatar,width:"32px",height:"32px",marginRight:"0",onClick:()=>r(d.messages[0])})}),n.jsx("div",{className:"messages",children:d.messages.map((o,l)=>n.jsx(os,{name:o.author_name,message:o,isLast:l===d.messages.length-1},o.msg_id))})]})]},d.date+s.id+d.messages[0].msg_id))]})},vs=h.div.withConfig({componentId:"sc-90i0cx-0"})(["padding:20px 5px;min-height:100%;display:flex;flex-direction:column;justify-content:flex-end;.messages-section{position:relative;display:flex;align-items:flex-end;width:100%;.messages{width:100%;}}.message-avatar{width:32px;height:32px;position:sticky;bottom:7px;margin-bottom:10px;cursor:pointer;}@media (max-width:1000px){padding:10px 0px;}"]);h.div.withConfig({componentId:"sc-93e00n-0"})(["@media (min-width:1001px){width:500px;height:500px;}"]);const js=ne(ds),ws=ne(a=>{var i=a,{forwardedRef:e,children:t}=i,s=pe(i,["forwardedRef","children"]);return n.jsx(b,u(p({ref:e},s),{children:t}))}),Ue=E({name:"setSearchMode",sid:"-4x5h57"}),bs=k(null,{name:"$searchMode",sid:"-gp6rgs"}).on(Ue,(e,t)=>t),Cs={searchMode:bs},be={setSearchMode:Ue},Y=[{title:"Сотрудники",id:"employee"},{title:"Студенты",id:"student"},{title:"Группа",id:"group"}],ys=()=>{const[e,t]=m([C.user,Cs.searchMode]),{open:s}=se(),[a,i]=x.useState(""),{$items:r,$isPending:d}=m(ue),{$items:o,$isPending:l}=m(ve);return x.useEffect(()=>{e&&be.setSearchMode(e.user_status==="stud"?"employee":"student")},[e]),x.useEffect(()=>{i("")},[t]),e?n.jsxs(Ms,{children:[n.jsx(kt,{pages:Y,currentPage:Y.findIndex(({id:c})=>c===t),setCurrentPage:c=>be.setSearchMode(Y[c].id),appearance:!1}),t=="student"&&n.jsx(ge,{load:function(){},loading:l,error:null,data:o,children:n.jsx(xe,{searchPlaceholder:"Поиск студентов",paginationList:ve,filterRequest:me,filterPlaceholder:"Группа",defaultFilter:"",customMask:fe.groupMask})}),t=="employee"&&n.jsx(ge,{load:function(){},loading:d,error:null,data:r,children:n.jsx(xe,{searchPlaceholder:"Поиск сотрудников",paginationList:ue,filterRequest:It,defaultFilter:"",filterPlaceholder:"Подразделения"})}),t=="group"&&n.jsx($t,{width:"100%",leftIcon:n.jsx(Ie,{}),placeholder:"Номер группы",value:a,setValue:i,customMask:fe.groupMask,onHintClick:c=>{s(n.jsx(_t,{group:c.id}),"Группа")},request:me,size:"big"})]}):null},Ms=h.div.withConfig({componentId:"sc-1d1vs0j-0"})(["display:flex;flex-direction:column;gap:8px;min-height:700px;min-width:50dvw;"]),ks=h.button.withConfig({componentId:"sc-dpors2-0"})(["width:fit-content;padding:0 12px;height:36px;background:var(--search);border-radius:var(--brLight);display:flex;align-items:center;gap:8px;border:none;font-weight:500;cursor:pointer;color:var(--text);svg{width:18px;height:18px;}&:hover{filter:brightness(0.98);}"]),Is=({forwardedRef:e})=>{const{open:t}=se(),s=()=>{t(n.jsx(ys,{}),"Новое сообщение")};return n.jsxs(ks,{ref:e,onClick:s,children:[n.jsx(pt,{}),"Написать"]})},$s=ne(Is),_s=()=>{var e;const t=(e=ee(D))===null||e===void 0?void 0:e.params,{search:s}=m(ze);return n.jsxs(Fs,{isOpen:!0,chatId:t==null?void 0:t.chatId,children:[n.jsxs(Ss,{children:[n.jsx(Te,{size:3,align:"left",children:"Чаты"}),n.jsx($s,{tutorialModule:{id:"chat",step:1}})]}),n.jsx(ws,{gap:"4px",p:"0 14px",d:"column",tutorialModule:{id:"chat",step:2},children:n.jsx(Ft,{value:s,setValue:Dt.setSearch,placeholder:"Поиск чатов"})}),n.jsx(St,{margin:"10px auto"}),n.jsx(js,{tutorialModule:{id:"chat",step:0}})]})},Fs=h.div.withConfig({componentId:"sc-csffye-0"})(["min-width:",";width:",";transition:0.2s width,0.2s min-width,0.2s padding,0.2s opacity;height:100%;color:var(--text);border-radius:20px 0 0 20px;overflow:hidden;border-right:1px solid #00000018;display:flex;flex-direction:column;background:var(--block-content);","{padding:0;border-radius:0;width:",";min-width:",";opacity:",";}"],({isOpen:e})=>e?"350px":"115px",({isOpen:e})=>e?"350px":"115px",ae.isTablet,({chatId:e})=>e?"0":"100%",({chatId:e})=>e?"0":"100%",({chatId:e})=>e?"0":"1"),Ss=h.div.withConfig({componentId:"sc-csffye-1"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding:14px;.collapse-button{min-width:30px;height:30px;padding:2px;background:transparent;svg{width:17px;height:17px;}}@media (max-width:1000px){.collapse-button{display:none;}}"]);h.div.withConfig({componentId:"sc-csffye-2"})(["display:flex;flex-direction:row;gap:8px;"]);const Ts=()=>{const[e,t]=m([Ut.currentMessage,g.selectedChat]),s=a=>{P.changed(u(p({},e),{files:[...e.files,...a]}))};return t!=null&&t.subject&&t.lastmessage.from==="opponent"?null:n.jsxs(Es,{children:[n.jsxs(Ls,{children:[n.jsx(Et,{setFiles:s}),n.jsx(Lt,{value:e.text,setValue:a=>P.changed(u(p({},e),{text:a})),placeholder:"Введите сообщение..."},t==null?void 0:t.id),n.jsx(O,{icon:n.jsx(ht,{}),onClick:()=>P.sended(),background:"transparent",isActive:!!W(e.text,{allowedTags:[]}).trim()})]}),n.jsx(zs,{hideHeader:!0,files:e.files,setFiles:a=>{P.changed(u(p({},e),{files:a}))}})]})},Es=h.div.withConfig({componentId:"sc-1wrnb99-0"})(["display:flex;flex-direction:column;background:var(--block-content);padding:8px 16px;border-top:1px solid #00000018;gap:8px;max-width:100%;"]),Ls=h.div.withConfig({componentId:"sc-1wrnb99-1"})(["display:flex;align-items:flex-end;gap:8px;"]),zs=h(Tt).withConfig({componentId:"sc-1wrnb99-2"})(["padding:0 48px 0 46px;","{padding:0;}"],ae.isMobile),Ns=()=>n.jsxs(Rs,{children:[n.jsx(ls,{}),n.jsx(ps,{}),n.jsx(Ts,{})]}),Rs=h.div.withConfig({componentId:"sc-1xn0ric-0"})(["width:100%;display:flex;flex-direction:column;position:relative;border-radius:20px;& > img{position:absolute;width:200px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.4;}"]),Us=()=>{var e;const t=(e=ee(D))===null||e===void 0?void 0:e.params,{data:s}=m(L.chats);return x.useEffect(()=>{zt.load()},[]),x.useEffect(()=>{if(!(t!=null&&t.chatId)){Z.reset();return}Z.set(t.chatId)},[t==null?void 0:t.chatId,s]),n.jsxs(Ps,{children:[n.jsx(_s,{}),!(t!=null&&t.chatId)&&n.jsx(We,{}),n.jsx(ut,{children:n.jsx(gt,{path:D,children:n.jsx(Ns,{})})})]})},Ps=h.div.withConfig({componentId:"sc-182b33p-0"})(["display:flex;height:90%;max-width:1100px;margin:40px auto;background:var(--block);box-shadow:var(--very-mild-shadow);border-radius:12px;overflow:hidden;","{margin:0;height:100%;border-radius:0;max-width:100%;}"],ae.isSmallDesktop);export{Us as default};
