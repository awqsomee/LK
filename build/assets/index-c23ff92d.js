import{s as e,j as n}from"./vendor-60fdf703.js";function s(t){switch(t){case"up":return"translate(0, -30px)";case"down":return"translate(0, 30px)";case"left":return"translate(-30px, 0)";case"right":return"translate(135px, 0)"}}const a=e.div.withConfig({componentId:"sc-amccvs-0"})(["position:relative;width:fit-content;height:fit-content;display:flex;align-items:center;flex-direction:",";&:hover > div{transform:",";opacity:1;}"],({direction:t})=>t==="left"?"row-reverse":"row",({direction:t})=>s(t)),c=e.div.withConfig({componentId:"sc-amccvs-1"})(["pointer-events:none;padding:6px 10px;border-radius:var(--brLight);background:#000000b9;color:#fff;font-weight:400;position:absolute;transform:translate(0,0);transition:0.2s;opacity:0;font-size:0.8em;text-align:center;max-width:",";"],({width:t})=>t!=null?t:"fit-content");function l({children:t,direction:o,text:i,width:r}){return n.jsxs(a,{direction:o,children:[n.jsx(c,{width:r,children:i}),t]})}export{l as T};
