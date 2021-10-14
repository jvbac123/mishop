const main = {
    path: "/main",
    component: () => import('../views/MainLayout.vue'),
    children: [
        {
            path: "/",
            component: () => import('../views/home/home.vue'),
            icon:"wap-home-o",
            title: "主页"

        },
        {
            path: "/b",
            component: () => import('../views/vite.vue'),
            icon:"cluster",
            title: "分类"
        },
        {
            path: "/c", component: () => import('../components/HelloWorld.vue'),
            icon:"shopping-cart-o",
            title: "购物车"
        },
        {
            path: "/d", component: () => import('../views/vite.vue'),
            icon:"manager-o",
            title: "我的"
        }
    ]
}

//    <van-tabbar-item icon="home-o">主页</van-tabbar-item>
//     <van-tabbar-item icon="search">分类</van-tabbar-item>
//     <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
//     <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
export default main