import{d as l,e as u}from"./index-b7ca9b2e.js";import{p as f,e as g,x as d,h as x,u as a}from"./vendor-48260ac4.js";const w=({defaultStore:i,api:s})=>{const n=i,F=()=>({data:a(c).data,loading:a(o.pending),error:a(c).error,completed:a(c).completed}),m=f({name:"changeCompleted",sid:"8d4ys9"}),r=g(async e=>{const t=await s.post(e);if(t.data.result!=="ok")throw new Error(t.data.error_text);return t.data},{name:"postFormFx",sid:"bm6r7m"});d({and:[{clock:r.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:l.evokePopUpMessage}],or:{sid:"-f764dw"}}),d({and:[{clock:r.failData,fn:e=>({message:`${e.message}`,type:"failure"}),target:l.evokePopUpMessage}],or:{sid:"-er836f"}}),d({and:[{clock:r.doneData,target:u.getApplicationsFx}],or:{sid:"-eba1yy"}});const o=g(async e=>{if(s.get)try{return{...(await s.get(e)).data}}catch(t){throw new Error(t)}return n.data},{name:"getFormFx",sid:"5lxgfo"}),p=f({name:"clearStore",sid:"-ejj22f"}),c=x(n,{name:"$formStore",sid:"3nz7k3"}).on(o,e=>({...e,error:null})).on(o.doneData,(e,t)=>({...e,data:t})).on(o.failData,(e,t)=>({...e,error:t.message})).on(m,(e,t)=>({...e,completed:t.completed})).on(p,()=>({...n}));return{selectors:{useForm:F},effects:{getFormFx:o,postFormFx:r},events:{changeCompleted:m,clearStore:p}}};export{w as c};
