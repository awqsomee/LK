import{s as i,j as e,F as m}from"./vendor-4af360a6.js";import{T as c,M as u,a7 as g,x,cQ as h,U as f,u as d,W as _,t as v,V as p,B as k,D as j}from"./index-c25f9d36.js";import{i as S}from"./is-valid-url-08a91344.js";const w=i.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    box-sizing: border-box;
    border-radius: var(--brLight);
    font-size: 0.9rem;
    font-weight: ${({bold:r})=>r?600:400};

    span {
        font-weight: bold;
        color: ${({color:r})=>r};
    }
`,l=({score:r,title:s,bold:t,scoreText:n,color:o})=>e.jsxs(w,{bold:t,color:o??(r>=60?"var(--green)":"var(--red)"),children:[e.jsx("div",{children:s}),e.jsxs("div",{children:[e.jsx("span",{children:r}),n&&e.jsxs("span",{children:[" (",n,")"]})]})]}),y=i.div``,a=({data:r})=>{const[s,t,n]=[Number.parseInt((r==null?void 0:r.current_att1)??"0"),Number.parseInt((r==null?void 0:r.current_att2)??"0"),Number.parseInt((r==null?void 0:r.current_att_mid)??"0")],o=Number.parseInt((r==null?void 0:r.last_semestr_balls)??"0");return e.jsxs(y,{children:[e.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),e.jsxs(u,{type:"failure",visible:(r==null?void 0:r.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",o,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",60-o," баллов."]}),e.jsx(l,{title:"Первая аттестация",score:s,color:"var(--text)"}),e.jsx(l,{title:"Вторая аттестация",score:t,color:"var(--text)"}),e.jsx(l,{title:"Промежуточная аттестация",score:n,color:"var(--text)"})]})},I=i.div``,M=({data:r})=>e.jsxs(I,{children:[e.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),e.jsx(l,{title:"Набрано баллов",score:Number.parseInt((r==null?void 0:r.last_semestr_balls)??"0"),scoreText:(r==null?void 0:r.last_semestr_result)??""})]}),C=i.div`
    max-width: 400px;
    line-height: 1.6rem;
`,P=({data:r})=>{const s=r==null?void 0:r.project_info.split(" ");return e.jsx(C,{children:s==null?void 0:s.map(t=>S(t)?e.jsx("a",{href:t,children:g(t,30)}):t+" ")})},L=({data:r})=>{const s=Number.parseInt((r==null?void 0:r.arrear_balls)??"0"),t=Number.parseInt((r==null?void 0:r.current_semestr_balls)??"0");return e.jsxs("div",{children:[e.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Итог"}),e.jsx(l,{title:"За прошлый семестр баллов ",score:s,scoreText:(r==null?void 0:r.arrear_result)??""}),e.jsx(l,{title:"За текущий семестр баллов ",score:t,scoreText:(r==null?void 0:r.current_semestr_result)??""})]})},z=()=>e.jsxs("p",{children:["Дорогие первокурсники! Центр проектной деятельности поздравляет вас с началом занятий. Первое занятие по проектной деятельности состоится онлайн в понедельник, 18.09, начало — в 14:30.",e.jsx("br",{})," Запись трансляции:"," ",e.jsx("a",{href:"https://www.youtube.com/watch?v=cBO1qojfK2o",target:"_blank",rel:"noreferrer",children:"https://www.youtube.com/watch?v=cBO1qojfK2o"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"https://study.mospolytech.ru/design",target:"_blank",rel:"noreferrer",children:"Описание сфер дизайна"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSXXeOtNLltMVN6oPXUoM7_5FjUg26p3GoFhaclhr_ozVMpfLigaEdm4ju9Zlr8f3YFX3RM38eKlCXv/pubhtml?gid=0&single=true",target:"_blank",rel:"noreferrer",children:"Расписание занятий по дисциплине «Введение в проектную деятельность» (1 курс)"}),e.jsx("br",{}),e.jsx("br",{}),"Ожидайте появления информации о проектах первого семестра."]}),N=()=>e.jsxs("p",{children:["Уважаемые студенты!",e.jsx("br",{}),e.jsx("br",{}),"Центр проектной деятельности приглашает вас выбрать проекты, которые вы будете реализовывать в рамках дисциплины «Проектная деятельность» в 2023-2024 учебном году.",e.jsx("br",{}),e.jsx("br",{}),"Порядок действий для выбора проектов:",e.jsx("br",{}),e.jsx("br",{}),"1. Для знакомства с проектами мы создали для вас:",e.jsx("br",{}),"• Сайт-витрину:"," ",e.jsx("a",{href:"http://projects.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:"http://projects.mospolytech.ru/"}),e.jsx("br",{}),"• Телеграм-канал, где вы можете задать вопросы инициаторам проектов, общаться с потенциальными участниками проектов:"," ",e.jsx("a",{href:"https://t.me/cpd_projects",target:"_blank",rel:"noreferrer",children:"https://t.me/cpd_projects"}),e.jsx("br",{}),e.jsx("br",{}),"2. Регистрация на проекты:",e.jsx("br",{}),"10 июля в 14:00 регистрация будет открыта студентам с рейтингом 2**;",e.jsx("br",{}),"12 июля с 14:00 регистрация будет открыта студентам с рейтингом 2** и 1*;",e.jsx("br",{}),"14 июля с 14:00 регистрация будет открыта всем студентам;",e.jsx("br",{}),"16 июля в 23:59 регистрация завершится.",e.jsx("br",{}),e.jsx("br",{}),"Подробная информация:"," ",e.jsx("a",{href:"https://vk.com/wall-78395495_2038",target:"_blank",rel:"noreferrer",children:"https://vk.com/wall-78395495_2038"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSybcuU7Cv0_IGEg8sP7LD_mxQYu3akGUj_xxKX-5gXtdqcwAeDhtWRM8d4WGqscS3_LIQBWUThqoXk/pubhtml?gid=0&single=true",target:"_blank",rel:"noreferrer",children:"Расписание занятий по проектной деятельности"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub",target:"_blank",rel:"noreferrer",children:"Регламент начисления баллов"})]}),X=({course:r})=>{if(!r)return null;const s=r==="1";return e.jsx(u,{lineHeight:"1.5rem",fontSize:"0.86rem",type:"info",title:s?"Информация для студентов 1 курса!":"Вниманию студентов 2-4 курсов!",children:s?e.jsx(z,{}):e.jsx(N,{})})},A=i.div`
    h3 {
        background: ${x.blue.main};
        background: linear-gradient(to right, ${x.blue.main} 0%, ${x.pink.main} 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1000px) {
        padding: 0px;
    }
`,F=i.div`
    width: 100%;
`,B=()=>{const{data:r,loading:s,error:t}=h.selectors.useData(),{data:{user:n}}=f.useUser(),{open:o}=d(),b=()=>{o(e.jsx(P,{data:r}),"Информация")};return e.jsx(_,{load:()=>h.effects.getFx("1"),loading:s||!1,error:t||null,data:r,children:e.jsx(A,{children:e.jsxs(v,{children:[e.jsx(X,{course:n==null?void 0:n.course}),e.jsxs(F,{children:[e.jsx(p,{fontSize:"0.85rem",children:"Вам назначен проект"}),e.jsx(c,{size:3,align:"left",bottomGap:!0,children:(r==null?void 0:r.project)??"-"}),e.jsxs(p,{children:["Тематика проекта: ",(r==null?void 0:r.project_theme)??"-",e.jsx("br",{}),"Подпроект: ",r!=null&&r.subproject.length?r==null?void 0:r.subproject:"-",e.jsx("br",{}),"Куратор: ",(r==null?void 0:r.curator.length)===0?"-":r==null?void 0:r.curator]}),e.jsx(k,{icon:e.jsx(m,{}),onClick:b,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"}),e.jsx(j,{width:"100%",margin:"16px 0"}),e.jsx(a,{data:r}),e.jsx(j,{width:"100%",margin:"16px 0"}),e.jsx(M,{data:r}),e.jsx(j,{width:"100%",margin:"16px 0"}),e.jsx(L,{data:r})]})]})})})};export{B as default};
