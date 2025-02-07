import{j as e,s as l,q as f,F as k}from"./vendor-93473b96.js";import{aC as b,h as x,M as _,aG as w,dd as h,u as y,W as S,P as I,K as m,q as M,R as p,H as v,bU as C}from"./index-7eec75d1.js";import{B as d}from"./BoldText-b3e3b754.js";import{i as $}from"./is-valid-url-08a91344.js";const u=b(({forwardedRef:r,children:s})=>e.jsx("div",{ref:r,children:s})),z=l.div.withConfig({componentId:"sc-1cht09s-0"})(["width:100%;height:","vh;transition:height 0.2s ease-out;"],({height:r})=>r),P=l.div.withConfig({componentId:"sc-19bjbnv-0"})(["width:100%;display:flex;justify-content:space-between;padding:8px 0;box-sizing:border-box;border-radius:var(--brLight);font-size:0.9rem;font-weight:",";span{font-weight:bold;color:",";}"],({bold:r})=>r?600:400,({color:r})=>r),c=({score:r,title:s,bold:t,scoreText:i,color:o})=>e.jsxs(P,{bold:t,color:o!=null?o:r>=60?"var(--green)":"var(--red)",children:[e.jsx("div",{children:s}),e.jsxs("div",{children:[e.jsx("span",{children:r}),i&&e.jsxs("span",{children:[" (",i,")"]})]})]}),N=l.div.withConfig({componentId:"sc-19nk7rm-0"})([""]),T=({data:r})=>{var s,t,i,o;const[n,a,j]=[Number.parseInt((s=r==null?void 0:r.current_att1)!==null&&s!==void 0?s:"0"),Number.parseInt((t=r==null?void 0:r.current_att2)!==null&&t!==void 0?t:"0"),Number.parseInt((i=r==null?void 0:r.current_att_mid)!==null&&i!==void 0?i:"0")],g=Number.parseInt((o=r==null?void 0:r.last_semestr_balls)!==null&&o!==void 0?o:"0");return e.jsxs(N,{children:[e.jsx(x,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),e.jsxs(_,{type:"failure",visible:(r==null?void 0:r.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",g,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",r==null?void 0:r.arrear," баллов."]}),e.jsx(c,{title:"Первая аттестация",score:n,color:"var(--text)"}),e.jsx(c,{title:"Вторая аттестация",score:a,color:"var(--text)"}),e.jsx(c,{title:"Промежуточная аттестация",score:j,color:"var(--text)"})]})},F=()=>e.jsxs("p",{children:[e.jsx("br",{}),"Стартовала регистрация на проекты 2024/25 года обучения! График:",e.jsx("br",{}),"28.06 – публикация витрины проектов;",e.jsx("br",{}),"01.07…05.07 – собеседование на приоритетные проекты;",e.jsx("br",{}),"08.07…12.07 – запись на все проекты.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"1. Знакомство с проектами"}),e.jsx("br",{}),"С 12:00 28.06 открыты:",e.jsx("br",{}),"– наш основной"," ",e.jsx("a",{href:"http://projects.mospolytech.ru",target:"_blank",rel:"noreferrer",children:"сайт-витрина"}),";",e.jsx("br",{}),"– вспомогательный"," ",e.jsx("a",{href:"https://t.me/+EFpB2aSMFbk5YzYy",target:"_blank",rel:"noreferrer",children:"ТГ-канал-витрина"}),";",e.jsx("br",{}),"–"," ",e.jsx("a",{href:"https://t.me/cpd_projects",target:"_blank",rel:"noreferrer",children:"ТГ-канал для общения"})," ","с инициаторами проектов и потенциальными участниками.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"2. Ответственность за выбор"}),e.jsx("br",{}),"Внимательно посмотрите описания и видеовизитки проектов. Сделайте осознанный выбор! Именно выбранный проект Вы будете реализовывать весь следующий учебный год. Изменить этот выбор будет нельзя!",e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"3. Регистрация на проекты"}),e.jsx("br",{}),"Регистрация доступна только в"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=projects",target:"_blank",rel:"noreferrer",children:"старой версии ЛК"})," ","в разделе «Проектная деятельность».",e.jsx("br",{}),"Запись будет проходить пофакультетно, с 9:30 до 18:30:",e.jsx("br",{}),"пн, 08.07: транспортный факультет;",e.jsx("br",{}),"вт, 09.07: факультет машиностроения;",e.jsx("br",{}),"ср, 10.07: факультет информационных технологий;",e.jsx("br",{}),"чт, 11.07: факультет урбанистики и городского хозяйства + полиграфический институт + факультет химической технологии и биотехнологии;",e.jsx("br",{}),"пт, 12.07: факультет экономики и управления + институт графики и искусства книги + институт издательского дела и журналистики.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"4. Приоритетные проекты"}),e.jsx("br",{}),"Приоритетные проекты отличаются высокой степенью участия индустриальных партнёров, что повышает шансы на прохождение производственной практики, стажировку и трудоустройство.",e.jsx("br",{})," К приоритетным относятся все проекты тематик «Стратегические» и «Научные», а также 37 проектов приоритетных направлений развития университета: электромобилестроение, технологии сенсорики, програмное обеспечение технических систем, интеллектуальные системы управления, высокоавтоматизированное машиностроение. Запись на эти 37 проектов будет осуществляться только после анкетирования."," ",e.jsx("a",{href:"https://forms.gle/j3fuYf5rzDi4Q9cU6",target:"_blank",rel:"noreferrer",children:"Форма для анкетирования"})," ","будет разблокирована с 01.07 по 05.07. Результат будет выслан на электронную почту, которую Вы укажете при анкетировании. Приоритет будет у студентов с рейтингом «две звезды».",e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"Желаем удачи!"})]}),G=()=>e.jsx(_,{lineHeight:"1.5rem",fontSize:"0.86rem",type:"info",title:e.jsx(d,{children:"Уважаемые студенты!"}),children:e.jsx(F,{})}),L=l.div.withConfig({componentId:"sc-4hfwok-0"})([""]),B=({data:r})=>{var s,t;return e.jsxs(L,{children:[e.jsx(x,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),e.jsx(c,{title:"Набрано баллов",score:Number.parseInt((s=r==null?void 0:r.last_semestr_balls)!==null&&s!==void 0?s:"0"),scoreText:(t=r==null?void 0:r.last_semestr_result)!==null&&t!==void 0?t:""})]})},D=l.div.withConfig({componentId:"sc-1drw3nr-0"})(["max-width:400px;line-height:1.6rem;"]),q=({data:r})=>{const s=r==null?void 0:r.project_info.split(" ");return e.jsx(D,{children:s==null?void 0:s.map(t=>$(t)?e.jsx("a",{href:t,children:w(t,30)}):t+" ")})},A=({data:r})=>{var s,t,i,o;const n=Number.parseInt((s=r==null?void 0:r.arrear_balls)!==null&&s!==void 0?s:"0"),a=Number.parseInt((t=r==null?void 0:r.current_semestr_balls)!==null&&t!==void 0?t:"0");return e.jsxs("div",{children:[e.jsx(x,{size:4,align:"left",bottomGap:!0,children:"Итог"}),(r==null?void 0:r.arrear)!=="0"&&e.jsx(c,{title:"Баллы в счет погашения долга ",score:n,scoreText:(i=r==null?void 0:r.arrear_result)!==null&&i!==void 0?i:"",color:(r==null?void 0:r.arrear_result)==="зачтено"?"var(--green)":"var(--red)"}),e.jsx(c,{title:"За текущий семестр баллов ",score:a,scoreText:(o=r==null?void 0:r.current_semestr_result)!==null&&o!==void 0?o:""})]})},O=()=>{var r,s;const{data:t,loading:i,error:o}=h.selectors.useData(),[n]=f([C.currentModule]),{open:a}=y(),j=()=>{a(e.jsx(q,{data:t}),"Информация")};return e.jsx(S,{load:()=>h.effects.getFx("1"),loading:i||!1,error:o||null,data:t,children:e.jsx(R,{children:e.jsxs(I,{children:[e.jsx(G,{}),e.jsxs(U,{tutorialModule:{id:"stud-project-activity",step:0,params:{position:"top"}},children:[e.jsxs(u,{tutorialModule:{id:"stud-project-activity",step:1,params:{position:"top"}},children:[e.jsx(m,{fontSize:"0.85rem",children:"Вам назначен проект"}),e.jsx(x,{size:3,align:"left",bottomGap:!0,children:(r=t==null?void 0:t.project)!==null&&r!==void 0?r:"-"}),e.jsxs(m,{children:["Тематика проекта: ",(s=t==null?void 0:t.project_theme)!==null&&s!==void 0?s:"-",e.jsx("br",{}),"Подпроект: ",t!=null&&t.subproject.length?t==null?void 0:t.subproject:"-",e.jsx("br",{}),"Куратор: ",(t==null?void 0:t.curator.length)===0?"-":t==null?void 0:t.curator]}),e.jsx(M,{icon:e.jsx(k,{}),onClick:j,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"})]}),e.jsx(p,{width:"100%",margin:"16px 0"}),e.jsx(u,{tutorialModule:{id:"stud-project-activity",step:2,params:{position:"top"}},children:e.jsx(T,{data:t})}),(t==null?void 0:t.last_semestr_result)!=="Данные отсутствуют"&&e.jsxs(e.Fragment,{children:[e.jsx(p,{width:"100%",margin:"16px 0"}),e.jsx(u,{tutorialModule:{id:"stud-project-activity",step:3,params:{position:"top"}},children:e.jsx(B,{data:t})})]}),e.jsx(p,{width:"100%",margin:"16px 0"}),e.jsx(u,{tutorialModule:{id:"stud-project-activity",step:(t==null?void 0:t.last_semestr_result)!=="Данные отсутствуют"?4:3,params:{position:"top"}},children:e.jsx(A,{data:t})})]}),e.jsx(z,{height:n!=null&&n.completed?0:10})]})})})},R=l.div.withConfig({componentId:"sc-1kqiekm-0"})(["h3{background:",";background:linear-gradient(to right,"," 0%,"," 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}@media (max-width:1000px){padding:0px;}"],v.blue.main,v.blue.main,v.pink.main),E=l.div.withConfig({componentId:"sc-1kqiekm-1"})(["width:100%;"]),U=b(({forwardedRef:r,children:s})=>e.jsx(E,{ref:r,children:s}));export{O as default};
