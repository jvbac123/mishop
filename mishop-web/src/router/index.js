import {createRouter, createWebHashHistory} from "vue-router";
import main from "./mainlayout";

const routes = [
    {path: "/vite", component: () => import('../views/vite.vue')},
    {path: "/product",title:"商品详情", component: () => import('../views/product/product.vue') },
    {path: "/login",  component: ()=>import('../views/user/login.vue')},

    main,
    {path: "/",  redirect: "/main"},


]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;