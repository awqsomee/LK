import{j as u}from"./vendor-9c916fad.js";import{bB as d,cd as t}from"./index-dc58d1cc.js";import{T as l}from"./index-9934aa8a.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=d.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(l,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
