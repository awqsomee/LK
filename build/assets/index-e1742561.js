import{j as u}from"./vendor-48260ac4.js";import{bB as d,cd as t}from"./index-0474be1f.js";import{T as l}from"./index-47cd5954.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=d.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(l,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
