var m=(t,e,s)=>new Promise((l,i)=>{var n=c=>{try{r(s.next(c))}catch(T){i(T)}},h=c=>{try{r(s.throw(c))}catch(T){i(T)}},r=c=>c.done?l(c.value):Promise.resolve(c.value).then(n,h);r((s=s.apply(t,e)).next())});import{j as M,b9 as N,d as G,p as o,h as u,e as J,k as W,N as X,x as d,f as _}from"./vendor-8a1e4858.js";import{c as j}from"./create-checkbox-field-d0ba0451.js";import{ds as ee,dt as Q,du as k,p as P}from"./index-7ba18bcb.js";const te=()=>[{title:"Название публикации",field:"articleTitle",width:"150px",showFull:!0,align:"center"},{title:"Авторы",field:"authors",width:"130px",showFull:!0,align:"center"},{title:"Год",field:"publicationYear",width:"100px",align:"center",sort:!0,search:!0},{title:"Издательство",field:"publisher",showFull:!0,align:"center",sort:!0,search:!0},{title:"Номер страницы",field:"pageNumber",width:"120px",render:t=>t||"-",showFull:!0,align:"center"},{title:"Scopus",field:"isScopus",width:"115px",align:"center",render:t=>t&&M.jsx(N,{}),sort:!0,search:!0},{title:"WoS",field:"isWoS",width:"110px",align:"center",render:t=>t&&M.jsx(N,{}),sort:!0,search:!0},{title:"Тип",showFull:!0,field:"publicationType",align:"center"},{title:"Количество цитирований",field:"quotesCount",showFull:!0,width:"165px",align:"center",sort:!0,search:!0},{title:"DOI",field:"doi",showFull:!0,align:"center"},{title:"Источник финансирования",field:"fundingSource",showFull:!0,width:"170px",align:"center"}],se="https://api.mospolytech.ru/lk/science/",p=G.create({baseURL:se});p.interceptors.request.use(ee);p.interceptors.response.use(t=>m(void 0,null,function*(){var e;return(t==null||(e=t.data)===null||e===void 0||(e=e.errors)===null||e===void 0||(e=e[0])===null||e===void 0||(e=e.extensions)===null||e===void 0?void 0:e.code)==="AUTH_NOT_AUTHENTICATED"?yield Q(p)(t):t}),Q(p));const ie=s=>m(void 0,[s],function*({scopusFile:t,wosFile:e}){const l=new FormData;l.append("scopusFile",t),l.append("wosFile",e);const{data:i}=yield p.post("/data",l,{headers:{"Content-Type":"multipart/form-data"}});return i}),le=t=>m(void 0,null,function*(){const{data:e}=yield p.post("/article/all",t);return e}),oe=t=>m(void 0,null,function*(){const{data:e}=yield p.get(`/article/${t}`);return e.data}),ae=t=>m(void 0,null,function*(){const{data:{data:e,titles:s}}=yield p.get(`/article/${t}/details`),l=(e==null?void 0:e.scopus)&&A(e.scopus),i=(e==null?void 0:e.wos)&&A(e.wos);return{titles:{scopus:A(s.scopus),wos:A(s.wos)},data:{scopus:l,wos:i}}});function A(t){return Object.keys(t).reduce((e,s)=>(e[s.toLowerCase()]=t[s],e),{})}const ne={publicationYear:"PublicationYear",publisher:"SourceTitle",isScopus:"IsScopus",isWoS:"IsWoS",quotesCount:"QuotesCount"},re=30,a=o({name:"pageMounted",sid:"-nyvv9i"}),U=o({name:"tableOpened",sid:"-9d12pl"}),w=o({name:"modalOpened",sid:"-1o83cr"}),Y=o({name:"setScopusFile",sid:"-bh0ron"}),O=o({name:"setWosFile",sid:"-c50cvc"}),R=o({name:"uploadFiles",sid:"bzqn36"}),V=o({name:"selectArticle",sid:"92mkkj"}),z=o({name:"setColumns",sid:"eksrx7"}),ce=o({name:"getArticles",sid:"z9fdq4"}),H=o({name:"fetchArticles",sid:"-jq4br7"}),B=o({name:"sortPressed",sid:"qkj2ye"}),C=o({name:"filtersApplied",sid:"-gztca8"}),S=o({name:"filtersReset",sid:"-78ambh"}),L=u(!1,{name:"$filtersApplied",sid:"-cy6sv"}).on(C,()=>!0).on(S,()=>!1).reset([a]),f=J(l=>m(void 0,[l],function*({offset:t,sorts:e,filters:s}){return yield le({limit:re,offset:t,sorts:e?e.map(({field:i,order:n})=>({field:ne[i],order:n})):null,filters:s})}),{name:"fetchArticlesFx",sid:"fo0r6b"}),F=k({reset:a}),b=k({reset:a}),$=k({reset:a}),x=k({reset:a}),y=j({reset:a}),q=j({reset:a}),g=W({sid:"pssul1",fn:()=>X({handler:ie}),name:"uploadArticleMutation",method:"createMutation"}),v=u(null,{name:"$sorts",sid:"-npterm"}).on(B,(t,e)=>{if(!t)return[{field:e,order:"ASC"}];const s=t.find(i=>i.field===e),l=t.filter(i=>i.field!==e);return s?s.order==="ASC"?[...l,{field:e,order:"DESC"}]:l.length?l:null:[...t,{field:e,order:"ASC"}]}).reset(a),ue=u([],{name:"$articles",sid:"-p3q035"}).on(f.doneData,(t,{data:e})=>[...t,...e]).reset([v,C,S]),D=u(0,{name:"$totalCount",sid:"-yplae5"}).on(f.doneData,(t,{totalCount:e})=>e);d({and:[{clock:f.doneData,source:D,filter:(t,{totalCount:e})=>t!==e,fn:(t,{totalCount:e})=>e,target:D}],or:{sid:"-byl6hx"}});const de=u(new Set,{name:"$selectedArticles",sid:"-ymt6xl"}).on(V,(t,e)=>{const s=new Set(t);return s.has(e)?s.delete(e):s.add(e),s}).reset(a),pe=u([],{name:"$scopusFile",sid:"-dcqa4h"}).on(Y,(t,e)=>e).reset([g.finished.success,w]),fe=u([],{name:"$wosFile",sid:"-3rupqm"}).on(O,(t,e)=>e).reset(g.finished.success,w),he=u(!1,{name:"$filesUploaded",sid:"is0o9i"}).on(g.finished.success,()=>!0).reset(w),me=u(te(),{name:"$columns",sid:"9yu9hx"}).on(z,(t,e)=>e).reset(a);d({and:[{clock:U,fn:()=>({offset:0,sorts:null,filters:null}),target:f}],or:{sid:"kxgcev"}});d({and:[{clock:H,source:{pending:f.inFlight,filtersApplied:L,sorts:v,isWoSCheck:q.value,isScopusCheck:y.value,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value},filter:({pending:t})=>!t,fn:({sorts:t,filtersApplied:e,isWoSCheck:s,isScopusCheck:l,articleTitle:i,publicationYear:n,publisher:h,quotesCount:r},{startIndex:c})=>({offset:c,sorts:t,filters:e?[...i?[{field:"ArticleTitle",operation:"Like",value:i}]:[],...s?[{field:"IsWoS",operation:"Eq",value:s}]:[],...l?[{field:"IsScopus",operation:"Eq",value:l}]:[],...n?[{field:"PublicationYear",operation:"Eq",value:Number(n)}]:[],...h?[{field:"SourceTitle",operation:"Like",value:h}]:[],...r?[{field:"QuotesCount",operation:"Eq",value:Number(r)}]:[]]:null}),target:f}],or:{sid:"ldy67p"}});d({and:[{clock:[v,C,S],source:{sorts:v,filtersApplied:L,isWoSCheck:q.value,isScopusCheck:y.value,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value},fn:({sorts:t,filtersApplied:e,isWoSCheck:s,isScopusCheck:l,publicationYear:i,publisher:n,quotesCount:h,articleTitle:r})=>({offset:0,sorts:t,filters:e?[...r?[{field:"ArticleTitle",operation:"Like",value:r}]:[],...s?[{field:"IsWoS",operation:"Eq",value:s}]:[],...l?[{field:"IsScopus",operation:"Eq",value:l}]:[],...i?[{field:"PublicationYear",operation:"Eq",value:Number(i)}]:[],...n?[{field:"SourceTitle",operation:"Like",value:n}]:[],...h?[{field:"QuotesCount",operation:"Eq",value:Number(h)}]:[]]:null}),target:f}],or:{sid:"o87wkv"}});d({and:[{clock:R,target:g.start}],or:{sid:"-ygmdyh"}});d({and:[{clock:g.finished.success,fn:()=>({message:"Статья успешно загружена",type:"success"}),target:P.evokePopUpMessage}],or:{sid:"-yef7l1"}});d({and:[{clock:g.finished.failure,fn:()=>({message:"Произошла ошибка",type:"failure"}),target:P.evokePopUpMessage}],or:{sid:"-xyh6dk"}});const we={articles:ue,articlesLoading:f.inFlight,totalCount:D,selectedArticles:de,filesUploaded:he,scopusFile:pe,wosFile:fe,uploadLoading:g.$pending,columns:me,sorts:v,filtersApplied:L,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value,isScopusCheck:y.value,isWoSCheck:q.value},Ce={tableOpened:U,pageMounted:a,selectArticle:V,uploadFiles:R,modalOpened:w,setScopusFile:Y,setWosFile:O,setColumns:z,getArticles:ce,fetchArticles:H,sortPressed:B,setArticleTitle:F.setValue,setPublicationYear:b.setValue,setPublisher:$.setValue,setQuotesCount:x.setValue,setIsScopusCheck:y.setValue,setIsWoSCheck:q.setValue,filtersApplied:C,filtersReset:S},K=o({name:"getDetailsClicked",sid:"xxk06l"}),Z=o({name:"pageMounted",sid:"-5pxjrw"}),E=W({sid:"k0ppeo",fn:()=>_({handler:oe}),name:"getArticleQuery",method:"createQuery"}),I=W({sid:"-vdnnzx",fn:()=>_({handler:ae}),name:"getArticleDetailsQuery",method:"createQuery"});d({and:[{clock:Z,target:E.start}],or:{sid:"hiv5ll"}});d({and:[{clock:K,target:I.start}],or:{sid:"hl2bz1"}});const Se={pageMounted:Z,getDetailsClicked:K},Fe={article:E.$data,details:I.$data,loading:E.$pending,detailsLoading:I.$pending};export{re as T,Fe as a,Se as b,Ce as e,te as g,we as s};
