import{j as u}from"./vendor-48260ac4.js";import{bR as l,cs as t}from"./index-d3095a88.js";import{T as c}from"./index-8c0899a5.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(c,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
