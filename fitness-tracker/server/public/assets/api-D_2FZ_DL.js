import{q as o}from"./index-CI88hFqb.js";const r=o.create({baseURL:"http://localhost:10000/api"});r.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});export{r as A};
//# sourceMappingURL=api-D_2FZ_DL.js.map
