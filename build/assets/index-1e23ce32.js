import{j as u}from"./vendor-84bdec13.js";import{bj as l,bX as t}from"./index-403d189d.js";import{T as d}from"./index-cdb61730.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(d,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
