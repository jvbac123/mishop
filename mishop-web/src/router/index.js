import {createRouter, createWebHashHistory} from "vue-router";
import main from "./mainlayout";

const routes=[
    {path:"/vite" ,component:()=>import('../views/vite.vue') },
    {path:"/product" ,component:()=>import('../views/product/product.vue') },
    main,
    {path:"/" ,redirect:"/main" },


]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;