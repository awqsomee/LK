import{r,j as L}from"./vendor-561dac3a.js";import{u as W}from"./index-da3e5de5.js";const z=({value:t,placeholder:o,loading:f,hintIcon:h,leftIcon:d,focusOn:x,width:S,transformRequest:a,setValue:g,request:H,onValueEmpty:i,customMask:j,onHintClick:l,size:p})=>{const[m,e]=r.useState([]),[u,s]=r.useState(!1);return r.useEffect(()=>{t.length>0?(s(!0),H(t).then(w=>{e(w.data.items.map(c=>{const n=a?a(c):c;return{id:n,title:n,value:n,icon:h}})),s(!1)}).catch(()=>{s(!1),e([])})):(s(!1),e([]),i==null||i())},[t]),L.jsx(W,{value:t,setValue:g,placeholder:o,hints:m,width:S??"180px",focusOn:x,leftIcon:d,loading:u&&f,onHintClick:l,customMask:j,size:p})};export{z as S};
