import{j as c}from"./vendor-48260ac4.js";import{bT as d,cu as t}from"./index-7f995b81.js";import{T as n}from"./index-f752299f.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=d.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,u=e.semestr.endDate;return c.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:u})};export{S as default};
