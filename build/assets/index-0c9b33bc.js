import{j as l}from"./vendor-9c916fad.js";import{bz as n,cb as s}from"./index-d52b7320.js";import{T as d}from"./index-3469d3a3.js";const h=()=>{const{data:{schedule:t,externalSchedule:a,view:o},loading:r}=n.useSchedule(),e=r?s.schedule:a??t??s.schedule;return l.jsx(d,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:o,showDates:!1})};export{h as SessionSchedule,h as default};
