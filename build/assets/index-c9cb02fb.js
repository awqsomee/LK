import{j as d}from"./vendor-249420f4.js";import{bz as c,cb as a}from"./index-72b1dbf4.js";import{T as i}from"./index-09026299.js";const h=()=>{var t;const{data:{schedule:o,externalSchedule:s,view:r},loading:n}=c.useSchedule(),e=n?a.schedule:(t=s!=null?s:o)!=null?t:a.schedule;return d.jsx(i,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:r,showDates:!1})};export{h as SessionSchedule,h as default};
