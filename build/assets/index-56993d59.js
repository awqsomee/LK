import{j as c}from"./vendor-0d3de025.js";import{bT as d,cu as t}from"./index-1f51b962.js";import{T as n}from"./index-266411ff.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=d.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,u=e.semestr.endDate;return c.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:u})};export{S as default};
