import{p as k,h as C,m as pe,a4 as me,x as h,d as je,q as i,r as D,j as e,s as fe}from"./vendor-48260ac4.js";import{cT as Ce,cA as B,d as Ae,B as ge,F as Ve,M as V,H as ye,p as A,x as we,a1 as Fe,cU as be,G as Pe,i as u,cB as Ee,cK as z,S as Se,j as Oe,cV as Ge}from"./index-1682acd6.js";const a=({defaultValue:t,reset:s}={})=>{const r=k({name:"setValue",sid:"-gzj7gd"}),o=C(t??!1,{name:"$store",sid:"-dvoezu"}).on(r,(x,d)=>d);return s&&(Array.isArray(s),o.reset(s)),{value:o,setValue:r}};function Me({reset:t}={}){const s=k({name:"setValue",sid:"z0dsf1"}),r=C([],{name:"$store",sid:"x0kp80"}).on(s,(o,x)=>x);return t&&(Array.isArray(t),r.reset(t)),{value:r,setValue:s}}const p=({defaultValue:t,reset:s}={})=>{const r=k({name:"setValue",sid:"-dtr6w4"}),o=C(t??"",{name:"$store",sid:"-iu1id1"}).on(r,(x,d)=>d);return s&&(Array.isArray(s),o.reset(s)),{value:o,setValue:r}},_e=({defaultValue:t,reset:s}={})=>{const r=k({name:"setValue",sid:"7mqusq"}),o=C(t??null,{name:"$store",sid:"-jr9j7n"}).on(r,(x,d)=>d);return s&&(Array.isArray(s),o.reset(s)),{value:o,setValue:r}},l=k({name:"pageMounted",sid:"-um5wlw"}),L=k({name:"sendForm",sid:"-l315zu"}),R=p(),K=p(),N=p(),n=_e(),We=p({reset:l}),y=a({reset:[l,n.value]}),w=a({reset:[l,n.value]}),F=a({reset:[l,n.value]}),j=a({reset:[l,n.value]}),f=p({reset:[l,n.value]}),b=a({reset:[l,n.value]}),P=a({reset:[l,n.value]}),E=a({reset:[l,n.value]}),S=a({reset:[l,n.value]}),O=a({reset:[l,n.value]}),G=a({reset:[l,n.value]}),M=a({reset:[l,n.value]}),_=a({reset:[l,n.value]}),W=a({reset:[l,n.value]}),$=a({reset:[l,n.value]}),$e=Me({reset:l}),J=a({reset:[l,n.value]}),Q=a({reset:[l,n.value]}),X=a({reset:l}),g=pe({sid:"wdsxjn",fn:()=>me({handler:async t=>{const s=await Ce(t);if(s.result==="ok")return"ok";throw new Error(s.error_text)}}),name:"sendFormMutation",method:"createMutation"});h({and:[{clock:l,source:B.applications,fn:({dataUserApplication:t})=>{if(!t)return"";const{surname:s,name:r,patronymic:o}=t;return s+" "+r+" "+o},target:R.setValue}],or:{sid:"-33qdso"}});h({and:[{clock:l,source:B.applications,fn:({dataUserApplication:t})=>(t==null?void 0:t.phone)||"",target:K.setValue}],or:{sid:"ay4ln2"}});h({and:[{clock:l,source:B.applications,fn:({dataUserApplication:t})=>(t==null?void 0:t.email)||"",target:N.setValue}],or:{sid:"be2muj"}});h({and:[{clock:[j.setValue,f.setValue],source:[j.value,f.value],fn:t=>t.every(s=>!!s),target:Q.setValue}],or:{sid:"bu0o20"}});h({and:[{clock:[y.setValue,w.setValue,F.setValue,j.setValue,f.setValue,E.setValue,S.setValue,O.setValue,G.setValue,M.setValue,b.setValue,P.setValue,_.setValue,W.setValue,$.setValue],source:[y.value,w.value,F.value,Q.value,E.value,S.value,O.value,G.value,M.value,b.value,P.value,_.value,W.value,$.value],fn:t=>t.some(s=>s),target:J.setValue}],or:{sid:"bxbfm6"}});h({and:[{clock:L,target:g.start}],or:{sid:"cc5vmx"}});h({and:[{clock:g.finished.success,fn:()=>!0,target:X.setValue}],or:{sid:"ced20d"}});h({and:[{clock:g.finished.failure,fn:({error:t})=>({message:je.isAxiosError(t)?"Не удалось подписать соглашение":t.message,type:"failure"}),target:Ae.evokePopUpMessage}],or:{sid:"csnpfr"}});const Be={loading:g.$pending},Y={pageMounted:l,sendForm:L},c={fio:R,tel:K,email:N,typeOfActivity:n,listOfAchievements:We,consecutiveExcellentGradesCheck:y,projectAwardCheck:w,academicCompetitionWinnerCheck:F,consecutiveExcellentAssessmentsCheck:j,consecutiveExcellentAssessmentsAmount:f,participationCheck:E,infoSupportCheck:S,culturalCreativeAwardCheck:O,publicWorkPresentationCheck:G,publicCulturalActivityCheck:M,researchAwardOrGrantCheck:b,scientificPublicationCheck:P,sportsAwardCheck:_,sportsParticipationCheck:W,gtoGoldBadgeCheck:$,files:$e,criteria:J,completed:X},Ie=[{id:0,title:"Учебная деятельность"},{id:1,title:"Научно-исследовательская деятельность"},{id:2,title:"Общественная деятельность"},{id:3,title:"Культурно-творческая деятельность"},{id:4,title:"Спортивная деятельность"}],dt=()=>{const t=i(Y.pageMounted),{value:s}=i(c.completed);return D.useEffect(()=>{t()},[]),e.jsx(ge,{isDone:s??!1,children:e.jsxs(Ve,{noHeader:!0,children:[e.jsxs(V,{type:"alert",children:["Сервис предназначен:",e.jsxs(v,{children:[e.jsx("li",{children:"для подачи документов на участие в конкурсе на назначение повышенной государственной академической стипендии для обучающихся на бюджетной основе обучения;"}),e.jsx("li",{children:"для подачи документов на участие в конкурсе на назначение Стипендии Московского Политеха для обучающихся на платной основе обучения."})]})]}),e.jsx(qe,{}),e.jsx(He,{}),e.jsx(Te,{}),e.jsx(ye,{}),e.jsx(nt,{}),e.jsx(ze,{}),e.jsx(De,{}),e.jsx(Le,{}),e.jsx(at,{}),e.jsx(rt,{})]})})};function qe(){const{value:t,setValue:s}=i(c.fio);return e.jsx(A,{title:"ФИО",placeholder:"ФИО",value:t,setValue:s,isActive:!1})}function He(){const{value:t,setValue:s}=i(c.tel);return e.jsx(A,{title:"Телефон",placeholder:"Телефон",value:t,setValue:s,type:"tel",mask:!0,required:!0})}function Te(){const{value:t,setValue:s}=i(c.email);return e.jsx(A,{title:"Email",placeholder:"Email",value:t,setValue:s,type:"email"})}function ze(){const[t,s]=i([c.typeOfActivity.value,c.typeOfActivity.setValue]);return e.jsx(we,{title:"Вид деятельности",items:Ie,selected:t,setSelected:s,required:!0,width:"100%",placeholder:"Вид деятельности"})}function De(){const{value:t,setValue:s}=i(c.listOfAchievements);return e.jsx(Fe,{title:"Перечень достижений в выбранном виде деятельности",placeholder:"Перечень достижений в выбранном виде деятельности",value:t,setValue:s,required:!0})}function Le(){const{value:t}=i(c.typeOfActivity);return t?e.jsxs(e.Fragment,{children:[e.jsx(be,{visible:!0,title:"Критерии"}),t.id===0?e.jsxs(e.Fragment,{children:[e.jsx(Re,{}),e.jsx(Ke,{}),e.jsx(Ne,{}),e.jsxs(Pe,{gap:"2rem",jc:"flex-start",children:[e.jsx(Je,{}),e.jsx(Qe,{}),"(справочно)"]})]}):t.id===1?e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx(Ye,{})]}):t.id===2?e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(Ue,{})]}):t.id===3?e.jsxs(e.Fragment,{children:[e.jsx(et,{}),e.jsx(tt,{}),e.jsx(st,{})]}):t.id===4?e.jsxs(e.Fragment,{children:[e.jsx(ct,{}),e.jsx(it,{}),e.jsx(lt,{})]}):null]}):null}function Re(){const{value:t,setValue:s}=i(c.consecutiveExcellentGradesCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Получение студентом в течение не менее 2-х следующих друг за другом промежуточных аттестаций, предшествующих назначению повышенной государственной академической стипендии, только оценок «отлично»"})}function Ke(){const{value:t,setValue:s}=i(c.projectAwardCheck);return e.jsx(u,{checked:t,setChecked:s,text:"получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты в проектной деятельности и (или) опытно-конструкторской работы"})}function Ne(){const{value:t,setValue:s}=i(c.academicCompetitionWinnerCheck);return e.jsx(u,{checked:t,setChecked:s,text:"признание студента победителем или призёром международной, всероссийской, ведомственной или региональной олимпиады, конкурса, соревнования, состязания или иного мероприятия, направленных на выявление учебных достижений студентов, проведённых в течение 1 года, предшествующих назначению повышенной государственной академической стипендии"})}function Je(){const{value:t,setValue:s}=i(c.consecutiveExcellentAssessmentsCheck);return e.jsx(u,{checked:t,setChecked:s,text:"количество сданных промежуточных аттестаций подряд на «отлично»:"})}function Qe(){const{value:t,setValue:s}=i(c.consecutiveExcellentAssessmentsAmount);return e.jsx(A,{placeholder:"Количество",value:t,setValue:s,type:"email",required:!0,width:"20%",minWidth:"135px"})}function Xe(){const{value:t,setValue:s}=i(c.researchAwardOrGrantCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии награды (приза) за результаты научно-исследовательской работы, проводимой студентом; документа, удостоверяющего исключительное право студента на достигнутый им научный (научно-методический, научно-технический, научно-творческий) результат интеллектуальной деятельности (патент, свидетельство); гранта на выполнение научно-исследовательской работы"})}function Ye(){const{value:t,setValue:s}=i(c.scientificPublicationCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Наличие у студента публикации в научном (учебно-научном, учебно-методическом) международном, всероссийском, ведомственном или региональном издании, в издании федеральной государственной образовательной организации высшего образования или иной организации в течение 1 года, предшествующего назначению повышенной государственной академической стипендии"})}function Ze(){const{value:t,setValue:s}=i(c.participationCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, организуемой федеральной государственной образовательной организацией высшего образования или с её участием, подтверждаемое документально"})}function Ue(){const{value:t,setValue:s}=i(c.infoSupportCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в деятельности по информационному обеспечению общественно значимых мероприятий, общественной жизни федеральной государственной образовательной организации высшего образования, подтверждаемое документально"})}function et(){const{value:t,setValue:s}=i(c.culturalCreativeAwardCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты культурно-творческой деятельности, осуществленной им в рамках деятельности, проводимой федеральной государственной образовательной организацией высшего образования или иной организацией, в том числе в рамках конкурса, смотра и иного аналогичного международного, всероссийского, ведомственного, регионального мероприятия, подтверждаемое документально"})}function tt(){const{value:t,setValue:s}=i(c.publicWorkPresentationCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Публичное представление в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, созданного им произведения литературы или искусства (литературного произведения, драматического, музыкально-драматического произведения, сценарного произведения, хореографического произведения, пантомимы, музыкального произведения с текстом или без текста, аудиовизуального произведения, произведения живописи, скульптуры, графики, дизайна, графического рассказа, комикса, другого произведения изобразительного искусства, произведения декоративно-прикладного, сценографического искусства, произведения архитектуры, градостроительства, садово-паркового искусства, в том числе в виде проекта, чертежа, изображения, макета, фотографического произведения, произведения, полученного способом, аналогичным фотографии, географической, геологической, другой карты, плана, эскиза, пластического произведения, относящегося к географии, топографии и другим наукам, а также другого произведения), подтверждаемое документально"})}function st(){const{value:t,setValue:s}=i(c.publicCulturalActivityCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) публичной культурно-творческой деятельности воспитательного, пропагандистского характера и иной общественно значимой публичной культурно-творческой деятельности, подтверждаемое документально"})}function ct(){const{value:t,setValue:s}=i(c.sportsAwardCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Получение студентом в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты спортивной деятельности, осуществленной им в рамках спортивных международных, всероссийских, ведомственных, региональных мероприятий, проводимых федеральной государственной образовательной организацией высшего образования или иной организацией"})}function it(){const{value:t,setValue:s}=i(c.sportsParticipationCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в спортивных мероприятия воспитательного, пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях, подтверждаемое документально"})}function lt(){const{value:t,setValue:s}=i(c.gtoGoldBadgeCheck);return e.jsx(u,{checked:t,setChecked:s,text:"Выполнение нормативов и требований золотого знака отличия «Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО) соответствующей возрастной группы на дату назначения повышенной государственной академической стипендии"})}function nt(){const{value:t}=i(c.typeOfActivity);return t?e.jsxs(V,{type:"info",children:["Присоединить файлы, не более трех:",t.id===0?e.jsxs(v,{children:[e.jsx("li",{children:"служебная записка от кафедры, УНИР и др. структурных подразделений;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===1?e.jsxs(v,{children:[e.jsx("li",{children:"служебная записка от кафедры, УНИР и др. структурных подразделений;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"список научных трудов, публикаций, выступлений;"}),e.jsx("li",{children:"публикации;"}),e.jsx("li",{children:"документы, подтверждающие участие в конференциях, конкурсах, олимпиадах, мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===2?e.jsxs(v,{children:[e.jsx("li",{children:"выписка из решения профсоюзной организации университета;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===3?e.jsxs(v,{children:[e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"свидетельство;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):t.id===4?e.jsxs(v,{children:[e.jsx("li",{children:"выписка из решения профсоюзной организации университета;"}),e.jsx("li",{children:"служебная записка от кафедры «Физическое воспитание»;"}),e.jsx("li",{children:"диплом;"}),e.jsx("li",{children:"грамота;"}),e.jsx("li",{children:"документы, подтверждающие разряды, звания;"}),e.jsx("li",{children:"документы, подтверждающие участие в мероприятиях;"}),e.jsx("li",{children:"иные документы, подтверждающие достижения студента."})]}):null]}):e.jsx(V,{type:"info",children:"Выберите вид деятельности:"})}function at(){const{value:t,setValue:s}=i(c.files);return e.jsx(Ee,{files:t,setFiles:s,isActive:!0,maxFiles:3,formats:["application/pdf"]})}function rt(){const{value:t,setValue:s}=i(c.completed),[r,o,x,d,Z,m,I,U,ee,te,se,ce,ie,le,ne,ae,re,oe,ue,de,he,xe,q,ve]=i([Be.loading,Y.sendForm,c.fio.value,c.tel.value,c.email.value,c.typeOfActivity.value,c.listOfAchievements.value,c.consecutiveExcellentGradesCheck.value,c.projectAwardCheck.value,c.academicCompetitionWinnerCheck.value,c.consecutiveExcellentAssessmentsCheck.value,c.consecutiveExcellentAssessmentsAmount.value,c.researchAwardOrGrantCheck.value,c.scientificPublicationCheck.value,c.participationCheck.value,c.infoSupportCheck.value,c.culturalCreativeAwardCheck.value,c.publicWorkPresentationCheck.value,c.publicCulturalActivityCheck.value,c.sportsAwardCheck.value,c.sportsParticipationCheck.value,c.gtoGoldBadgeCheck.value,c.files.value,c.criteria.value]),[H,ke]=D.useState(!1),T=t??!1;return e.jsxs(e.Fragment,{children:[e.jsx(z,{title:"Порядок подачи",link:"https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf",type:"document"}),e.jsx(z,{title:"Положение",link:"https://e.mospolytech.ru/old/storage/files/Polozhenie_o_Stipendii_Moskovskogo_Politeha_platnoe.pdf",type:"document"}),e.jsx(u,{checked:H,setChecked:ke,text:"С Порядком подачи и Положением ознакомлен"}),e.jsx(Se,{text:T?"Отправлено":"Отправить",action:()=>{o({formId:Oe.HIGH_SCHOLARSHIP,args:{fio:x,tel:d,email:Z,"type-of-activity":m==null?void 0:m.title,"list-of-achievements":I,"consecutive-excellent-grades-check":U,"project-award-check":ee,"academic-competition-winner-check":te,"consecutive-excellent-assessments-check":se,"consecutive-excellent-assessments-amount":ce,"research-award-or-grant-check":ie,"scientific-publication-check":le,"participation-check":ne,"info-support-check":ae,"cultural-creative-award-check":re,"public-work-presentation-check":oe,"public-cultural-activity-check":ue,"sports-award-check":de,"sports-participation-check":he,"gto-gold-badge-check":xe,...Ge(q)}})},isLoading:r,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:T,isActive:H&&!!d&&!!m&&!!I&&!!q.length&&!!ve,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})}const v=fe.ul.withConfig({componentId:"sc-1izr456-0"})(["margin-left:1rem;"]);export{dt as default};
