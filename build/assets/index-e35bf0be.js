import{j as u}from"./vendor-60fdf703.js";import{ae as d,dv as r}from"./index-040a4e16.js";import{T as n}from"./index-adc376dd.js";const i=()=>{var e;const{data:{schedule:a,externalSchedule:t,view:l},loading:o}=d.useSchedule(),s=o?r.schedule:(e=t!=null?t:a)!==null&&e!==void 0?e:r.schedule;return u.jsx(n,{showDates:!0,events:s.week,view:l,startDate:s.semestr.startDate,endDate:s.semestr.endDate})};export{i as default};
