import{g as t}from"./get-divisions-96cfa1b1.js";import{T as i}from"./consts-e6e5e9f0.js";const a=()=>[{title:"Название улицы, номер дома, номер квартиры",value:"",fieldName:"post_street",editable:!0,required:!0,specialType:"postMethod"},{title:"Название населенного пункта (города, поселка и т.п.)",value:"",fieldName:"post_city",editable:!0,required:!0,specialType:"postMethod"},{title:"Название района",value:"",fieldName:"post_district",editable:!0,specialType:"postMethod"},{title:"Название республики, края, области, автономного округа (области)",value:"",fieldName:"post_region",editable:!0,required:!0,specialType:"postMethod"},{title:"Название страны",value:"",fieldName:"post_country",editable:!0,required:!0,specialType:"postMethod"},{title:"Индекс",value:"",fieldName:"post_index",editable:!0,required:!0,specialType:"postMethod"}],d=({divisions_crs:e})=>[{title:"Выберите отделение МФЦ, где желаете получить готовый документ:",required:!0,type:"radio",fieldName:"structural-subdivision",value:null,editable:!0,items:t(e),isSpecificRadio:!0,specialType:"personalMethod"}],s=()=>[{title:"Способ получения справки",type:"select",width:"100%",fieldName:"method_obtaining",value:null,editable:!0,required:!0,items:i}];export{d as a,a as b,s as g};
