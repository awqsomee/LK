import{j as n}from"./vendor-60fdf703.js";import{ae as c,dv as a}from"./index-6facb166.js";import{T as m}from"./index-8117019c.js";const S=()=>{var e;const{data:{schedule:r,externalSchedule:t,view:l},loading:o}=c.useSchedule(),s=o?a.schedule:(e=t!=null?t:r)!==null&&e!==void 0?e:a.schedule,d=s.semestr.startDate,u=s.semestr.endDate;return n.jsx(m,{showDates:!1,events:s.semestr.data,view:l,startDate:d,endDate:u})};export{S as default};
