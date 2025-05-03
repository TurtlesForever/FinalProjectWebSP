import{l as o}from"./index-BLfcvYJG.js";const r=o.create({baseURL:"http://localhost:10000/api"});r.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});export{r as A};
//# sourceMappingURL=api-BOpwtc0M.js.map
