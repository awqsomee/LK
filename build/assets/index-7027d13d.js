var Fe=Object.defineProperty;var $=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var N=(t,s,l)=>s in t?Fe(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,R=(t,s)=>{for(var l in s||(s={}))Pe.call(s,l)&&N(t,l,s[l]);if($)for(var l of $(s))Se.call(s,l)&&N(t,l,s[l]);return t};var Y=(t,s,l)=>new Promise((x,v)=>{var g=u=>{try{k(l.next(u))}catch(h){v(h)}},f=u=>{try{k(l.throw(u))}catch(h){v(h)}},k=u=>u.done?x(u.value):Promise.resolve(u.value).then(g,f);k((l=l.apply(t,s)).next())});import{p as K,k as Oe,N as Ge,x as d,d as De,i,r as j,j as e,s as Ee}from"./vendor-8a1e4858.js";import{du as C,e6 as Me,e7 as Q,e8 as We,n as W,p as _e,bz as Ie,t as Be,D as ze,I as _,w as qe,T as I,h as a,v as Te,g as J,f as X,S as Z,dp as U,q as ee,i as He,d1 as Le,e9 as $e}from"./index-7ba18bcb.js";import{c as n}from"./create-checkbox-field-d0ba0451.js";const r=K({name:"pageMounted",sid:"-um5wlw"}),te=K({name:"sendForm",sid:"-l315zu"}),se=C(),ce=C(),ie=C(),o=Me(),Ne=C({reset:r}),A=n({reset:[r,o.value]}),y=n({reset:[r,o.value]}),V=n({reset:[r,o.value]}),b=n({reset:[r,o.value]}),w=n({reset:[r,o.value]}),F=n({reset:[r,o.value]}),P=n({reset:[r,o.value]}),le=n({reset:[r,o.value]}),S=n({reset:[r,o.value]}),O=n({reset:[r,o.value]}),G=n({reset:[r,o.value]}),D=n({reset:[r,o.value]}),E=n({reset:[r,o.value]}),M=n({reset:[r,o.value]}),Re=Q({reset:r}),Ye=Q({reset:r}),re=n({reset:[r,o.value]}),ae=n({reset:r}),m=Oe({sid:"uyo2d2",fn:()=>Ge({handler:t=>Y(void 0,null,function*(){const s=yield We(t);if(s.result==="ok")return"ok";throw new Error(s.error_text)})}),name:"sendFormMutation",method:"createMutation"});d({and:[{clock:r,source:W.applications,fn:({dataUserApplication:t})=>{if(!t)return"";const{surname:s,name:l,patronymic:x}=t;return s+" "+l+" "+x},target:se.setValue}],or:{sid:"-35drkr"}});d({and:[{clock:r,source:W.applications,fn:({dataUserApplication:t})=>(t==null?void 0:t.phone)||"",target:ce.setValue}],or:{sid:"awh7uz"}});d({and:[{clock:r,source:W.applications,fn:({dataUserApplication:t})=>(t==null?void 0:t.email)||"",target:ie.setValue}],or:{sid:"b0vklv"}});d({and:[{clock:[A.setValue,y.setValue,V.setValue,F.setValue,P.setValue,le.setValue,S.setValue,O.setValue,G.setValue,b.setValue,w.setValue,D.setValue,E.setValue,M.setValue],source:[A.value,y.value,V.value,F.value,P.value,S.value,O.value,G.value,b.value,w.value,D.value,E.value,M.value],fn:t=>t.some(s=>s),target:re.setValue}],or:{sid:"bgtltc"}});d({and:[{clock:te,target:m.start}],or:{sid:"bvo1u3"}});d({and:[{clock:m.finished.success,fn:()=>!0,target:ae.setValue}],or:{sid:"bxv87j"}});d({and:[{clock:m.finished.failure,fn:({error:t})=>({message:De.isAxiosError(t)?"Не удалось подписать соглашение":t.message,type:"failure"}),target:_e.evokePopUpMessage}],or:{sid:"cc5vmx"}});const Je={loading:m.$pending},ne={pageMounted:r,sendForm:te},c={fio:se,tel:ce,email:ie,typeOfActivity:o,listOfAchievements:Ne,consecutiveExcellentGradesCheck:A,projectAwardCheck:y,academicCompetitionWinnerCheck:V,participationCheck:F,infoSupportCheck:P,youthParticipationCheck:le,culturalCreativeAwardCheck:S,publicWorkPresentationCheck:O,publicCulturalActivityCheck:G,researchAwardOrGrantCheck:b,scientificPublicationCheck:w,sportsAwardCheck:D,sportsParticipationCheck:E,gtoGoldBadgeCheck:M,files:Re,bankDetails:Ye,criteria:re,completed:ae},Ke=[{id:0,title:"Учебная деятельность"},{id:1,title:"Научно-исследовательская деятельность"},{id:2,title:"Общественная деятельность"},{id:3,title:"Культурно-творческая деятельность"},{id:4,title:"Спортивная деятельность"}],Vt=()=>{const t=i(ne.pageMounted),{value:s}=i(c.completed);return j.useEffect(()=>{t()},[]),e.jsx(Ie,{isDone:s!=null?s:!1,children:e.jsxs(Be,{noHeader:!0,children:[e.jsx(Qe,{}),e.jsx(Xe,{}),e.jsx(Ze,{}),e.jsx(ze,{}),e.jsx(vt,{}),e.jsx(Ue,{}),e.jsx(et,{}),e.jsx(kt,{}),e.jsx(ft,{}),e.jsx(jt,{}),e.jsx(Ct,{})]})})};function Qe(){const{value:t,setValue:s}=i(c.fio);return e.jsx(_,{title:"ФИО",placeholder:"ФИО",value:t,setValue:s,isActive:!1})}function Xe(){const{value:t,setValue:s}=i(c.tel);return e.jsx(_,{title:"Телефон",placeholder:"Телефон",value:t,setValue:s,type:"tel",mask:!0,required:!0})}function Ze(){const{value:t,setValue:s}=i(c.email);return e.jsx(_,{title:"Email",placeholder:"Email",value:t,setValue:s,type:"email"})}function Ue(){const[t,s]=i([c.typeOfActivity.value,c.typeOfActivity.setValue]);return e.jsx(qe,{title:"Вид деятельности",items:Ke,selected:t,setSelected:s,required:!0,width:"100%",placeholder:"Вид деятельности"})}function et(){const{value:t}=i(c.typeOfActivity);return t?e.jsxs(e.Fragment,{children:[e.jsx(I,{align:"left",size:5,required:!0,children:"Укажите соответствие достижений одному или нескольким из следующих критериев"}),t.id===0?e.jsxs(e.Fragment,{children:[e.jsx(tt,{}),e.jsx(st,{}),e.jsx(ct,{})]}):t.id===1?e.jsxs(e.Fragment,{children:[e.jsx(it,{}),e.jsx(lt,{})]}):t.id===2?e.jsxs(e.Fragment,{children:[e.jsx(rt,{}),e.jsx(at,{}),e.jsx(nt,{})]}):t.id===3?e.jsxs(e.Fragment,{children:[e.jsx(ot,{}),e.jsx(ut,{}),e.jsx(dt,{})]}):t.id===4?e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),e.jsx(pt,{}),e.jsx(xt,{})]}):null]}):null}function tt(){const{value:t,setValue:s}=i(c.consecutiveExcellentGradesCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Получение студентом в течение не менее 2-х следующих друг за другом промежуточных аттестаций, предшествующих назначению повышенной государственной академической стипендии, только оценок «отлично»"})}function st(){const{value:t,setValue:s}=i(c.projectAwardCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Получение студентом в течение года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты проектной деятельности и (или) опытно-конструкторской работы"})}function ct(){const{value:t,setValue:s}=i(c.academicCompetitionWinnerCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Признание студента победителем или призером международной, всероссийской, ведомственной или региональной олимпиады, конкурса, соревнования, состязания или иного мероприятия, направленных на выявление учебных достижений студентов, проведенных в течение года, предшествующего назначению повышенной государственной академической стипендии"})}function it(){const{value:t,setValue:s}=i(c.researchAwardOrGrantCheck);return e.jsx(a,{checked:t,setChecked:s,text:e.jsxs(e.Fragment,{children:["Получение студентом в течение года, предшествующего назначению повышенной государственной академической стипендии:"," ",e.jsxs(p,{children:[e.jsx("li",{children:"награды (приза) за результаты научно-исследовательской работы, проводимой студентом;"}),e.jsx("li",{children:"документа, удостоверяющего исключительное право студента на достигнутый им научный (научно-методический, научно-технический, научно-творческий) результат интеллектуальной деятельности (патент, свидетельство);"}),e.jsx("li",{children:"гранта на выполнение научно-исследовательской работы"})]})]})})}function lt(){const{value:t,setValue:s}=i(c.scientificPublicationCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Наличие у студента публикации в научном (учебно-научном, учебно-методическом) международном, всероссийском, ведомственном или региональном издании, в издании федеральной государственной образовательной организации высшего образования или иной организации в течение года, предшествующего назначению повышенной государственной академической стипендии"})}function rt(){const{value:t,setValue:s}=i(c.participationCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Систематическое участие студента в течение года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, организуемой федеральной государственной образовательной организацией высшего образования или с ее участием, подтверждаемое документально"})}function at(){const{value:t,setValue:s}=i(c.infoSupportCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Систематическое участие студента в течение года, предшествующего назначению повышенной государственной академической стипендии, в деятельности по информационному обеспечению общественно значимых мероприятий, общественной жизни федеральной государственной образовательной организации высшего образования, подтверждаемое документально"})}function nt(){const{value:t,setValue:s}=i(c.infoSupportCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Систематическое участие студента в течение года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности, направленной на формирование у детей и молодежи общероссийской гражданской идентичности, патриотизма и гражданской ответственности, культуры межнационального (межэтнического) и межконфессионального общения, организуемой субъектами, осуществляющими деятельность в сфере молодежной политики, подтверждаемое документально"})}function ot(){const{value:t,setValue:s}=i(c.culturalCreativeAwardCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Получение студентом в течение года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты культурно-творческой деятельности, осуществленной им в рамках деятельности, проводимой федеральной государственной образовательной организацией высшего образования или иной организацией, в том числе в рамках конкурса, смотра и иного аналогичного международного, всероссийского, ведомственного, регионального мероприятия, подтверждаемое документально"})}function ut(){const{value:t,setValue:s}=i(c.publicWorkPresentationCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Публичное представление студентом в течение года, предшествующего назначению повышенной государственной академической стипендии, созданного им произведения литературы или искусства (литературного произведения, драматического, музыкально-драматического произведения, сценарного произведения, хореографического произведения, пантомимы, музыкального произведения с текстом или без текста, аудиовизуального произведения, произведения живописи, скульптуры, графики, дизайна, графического рассказа, комикса, другого произведения изобразительного искусства, произведения декоративно-прикладного, сценографического искусства, произведения архитектуры, градостроительства, садово-паркового искусства, в том числе в виде проекта, чертежа, изображения, макета, фотографического произведения, произведения, полученного способом, аналогичным фотографии, географической, геологической, другой карты, плана, эскиза, пластического произведения, относящегося к географии, топографии и другим наукам, а также другого произведения), подтверждаемое документально"})}function dt(){const{value:t,setValue:s}=i(c.publicCulturalActivityCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Систематическое участие студента в течение года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) публичной культурно-творческой деятельности воспитательного, пропагандистского характера и иной общественно значимой публичной культурно-творческой деятельности, подтверждаемое документально"})}function ht(){const{value:t,setValue:s}=i(c.sportsAwardCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Получение студентом в течение года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты спортивной деятельности, осуществленной им в рамках спортивных международных, всероссийских, ведомственных, региональных мероприятий, проводимых федеральной государственной образовательной организацией высшего образования или иной организацией"})}function pt(){const{value:t,setValue:s}=i(c.sportsParticipationCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Систематическое участие студента в течение года, предшествующего назначению повышенной государственной академической стипендии, в спортивных мероприятиях воспитательного, пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях, подтверждаемое документально"})}function xt(){const{value:t,setValue:s}=i(c.gtoGoldBadgeCheck);return e.jsx(a,{checked:t,setChecked:s,text:"Выполнение нормативов и требований золотого знака отличия «Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне»(ГТО) соответствующей возрастной группы на дату назначения повышенной государственной академической стипендии"})}function kt(){const{value:t,setValue:s}=i(c.listOfAchievements);return e.jsx(Te,{title:"Перечислите достижения в выбранном виде деятельности",placeholder:"Перечислите достижения в выбранном виде деятельности",value:t,setValue:s,required:!0,maxLength:2e3})}function vt(){const{value:t}=i(c.typeOfActivity);return t?e.jsxs(J,{type:"info",children:["Присоединить файлы, не более трех:",t.id===0?e.jsxs(p,{children:[e.jsx("li",{children:"служебная записка от кафедры, УНИР и др. структурных подразделений;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===1?e.jsxs(p,{children:[e.jsx("li",{children:"служебная записка от кафедры, УНИР и др. структурных подразделений;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"список научных трудов, публикаций, выступлений;"}),e.jsx("li",{children:"публикации;"}),e.jsx("li",{children:"документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===2?e.jsxs(p,{children:[e.jsx("li",{children:"выписка из решения профсоюзной организации университета;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===3?e.jsxs(p,{children:[e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===4?e.jsxs(p,{children:[e.jsx("li",{children:"выписка из решения профсоюзной организации университета;"}),e.jsx("li",{children:"служебная записка от кафедры «Физическое воспитание»;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"документы, подтверждающие разряды, звания;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):null]}):e.jsx(J,{type:"info",children:"Выберите вид деятельности:"})}function ft(){const{value:t,setValue:s}=i(c.files);return e.jsxs(X,{d:"column",gap:"0.5rem",children:[e.jsx(I,{size:5,align:"left",required:!0,children:"Приложите файлы, подтверждающие перечень достижений (дипломы, сертификаты, свидетельства и иные)"}),e.jsx(Z,{children:"Прикрепите документы многостраничными файлами в формате PDF (не более 3-х файлов) по каждому виду деятельности"}),e.jsx(U,{files:t,setFiles:s,isActive:!0,maxFiles:3,formats:["pdf"]})]})}function jt(){const{value:t,setValue:s}=i(c.bankDetails),l=i(ee.user);return(l==null?void 0:l.finance)!=="С оплатой обучения"?null:e.jsxs(X,{d:"column",gap:"0.5rem",children:[e.jsx(I,{size:5,align:"left",required:!0,children:"Прикрепите файл с банковскими реквизитами карты для зачисления стипендии*"}),e.jsxs(Z,{children:["Важно! Карта должна быть открыта на имя студента, участвующего в конкурсе, с платежной системой"," ",e.jsx("strong",{children:"МИР следующих банков: Сбербанк, ВТБ или Газпромбанк"})]}),e.jsx(U,{files:t,setFiles:s,isActive:!0,maxFiles:1,formats:["pdf","jpeg","jpg","png"]})]})}function Ct(){const{value:t,setValue:s}=i(c.completed),l=i(ee.user),[x,v,g,f,k,u,h,oe,ue,de,he,pe,xe,ke,ve,fe,je,Ce,me,ge,Ae,B,z,ye]=i([Je.loading,ne.sendForm,c.fio.value,c.tel.value,c.email.value,c.typeOfActivity.value,c.listOfAchievements.value,c.consecutiveExcellentGradesCheck.value,c.projectAwardCheck.value,c.academicCompetitionWinnerCheck.value,c.researchAwardOrGrantCheck.value,c.scientificPublicationCheck.value,c.participationCheck.value,c.infoSupportCheck.value,c.youthParticipationCheck.value,c.culturalCreativeAwardCheck.value,c.publicWorkPresentationCheck.value,c.publicCulturalActivityCheck.value,c.sportsAwardCheck.value,c.sportsParticipationCheck.value,c.gtoGoldBadgeCheck.value,c.files.value,c.bankDetails.value,c.criteria.value]),[q,Ve]=j.useState(!1),[T,be]=j.useState(!1),[H,we]=j.useState(!1),L=t!=null?t:!1;return e.jsxs(e.Fragment,{children:[e.jsx(a,{checked:q,setChecked:Ve,text:"Подтверждаю достоверность указанных мной сведений"}),e.jsx(a,{checked:T,setChecked:be,text:"Даю согласие на обработку персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ"}),e.jsx(a,{checked:H,setChecked:we,text:(l==null?void 0:l.finance)==="С оплатой обучения"?e.jsxs(e.Fragment,{children:["С"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Polozhenie_o_Stipendii_Moskovskogo_Politeha_platnoe.pdf",target:"_blank",rel:"noreferrer",children:"Положением"})," ","о стипендии Московского Политеха ознакомлен(а)"]}):e.jsxs(e.Fragment,{children:["С"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf",target:"_blank",rel:"noreferrer",children:"Порядком"})," ","приема документов на ПГАС ознакомлен"]})}),e.jsx(He,{text:L?"Отправлено":"Отправить",action:()=>{v({formId:Le.HIGH_SCHOLARSHIP,args:R({fio:g,tel:f,email:k,"type-of-activity":u==null?void 0:u.title,"list-of-achievements":h,"consecutive-excellent-grades-check":oe,"project-award-check":ue,"academic-competition-winner-check":de,"research-award-or-grant-check":he,"scientific-publication-check":pe,"participation-check":xe,"info-support-check":ke,"youth-participation-check":ve,"cultural-creative-award-check":fe,"public-work-presentation-check":je,"public-cultural-activity-check":Ce,"sports-award-check":me,"sports-participation-check":ge,"gto-gold-badge-check":Ae},$e([...B,...z]))})},isLoading:x,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:L,isActive:q&&H&&T&&!!f&&!!u&&!!h&&!!B.length&&((l==null?void 0:l.finance)!=="С оплатой обучения"||!!z.length)&&!!ye,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})}const p=Ee.ul.withConfig({componentId:"sc-1izr456-0"})(["margin-left:1rem;"]);export{Vt as default};
