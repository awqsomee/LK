import{j as d}from"./vendor-5ea71f95.js";import{bZ as u,cA as t}from"./index-fab43839.js";import{T as n}from"./index-90fcaef0.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=u.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,c=e.semestr.endDate;return d.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:c})};export{S as default};
