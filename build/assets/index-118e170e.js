import{j as d}from"./vendor-8a1e4858.js";import{am as n,dw as a}from"./index-7b7b97a2.js";import{T as u}from"./index-7c78daa6.js";const h=()=>{var e;const{data:{schedule:o,externalSchedule:s,view:l},loading:r}=n.useSchedule(),t=r?a.schedule:(e=s!=null?s:o)!==null&&e!==void 0?e:a.schedule;return d.jsx(u,{events:t.session.data,startDate:t.session.startDate,endDate:t.session.endDate,view:l,showDates:!1})};export{h as SessionSchedule,h as default};
