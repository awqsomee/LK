import{r as t,j as a}from"./vendor-60fdf703.js";import{bw as c,b0 as p,b1 as u,f as m,h as d,bB as f}from"./index-e6036b0c.js";const x=()=>({title:"Оформить дополнительное соглашение к договору об обучении",data:[]}),j=()=>{const[o,i]=t.useState(null),[e,l]=t.useState(!1),[n]=t.useState(!1),s=e!=null?e:!1,{data:{dataUserApplication:r}}=c.useApplications();return t.useEffect(()=>{r&&i(x())},[r]),a.jsx(p,{isDone:s,children:!!o&&!!i&&a.jsxs(u,{children:[a.jsx(m,{title:"Информация по заявке",type:"info",visible:!s,children:"Данный вид услуги доступен только для студентов, обучающихся на платной договорной основе."}),a.jsx(d,{text:s?"Отправлено":"Отправить",action:()=>null,isLoading:n,completed:e,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:f(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{j as default};
