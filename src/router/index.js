import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/HomePage.vue";
import Fashion from "@/views/FashionPage.vue";
import Art from "@/views/ArtSuppliesPage.vue";
import Digital from "@/views/DigitalGoodsPage.vue";
import Cosmetics from "@/views/CosmeticsPage.vue";
import Tools from "@/views/ToolsPage.vue";
import HomeSupplies from "@/views/HomeSuppliesPage.vue";
import Fav from "@/views/FavPage.vue";
import Child from "@/views/ChildPage.vue";
import Product from "@/views/ProductPage.vue";
import Shop from "@/views/StorePage.vue";
import MyAccount from "@/views/MyAccountPage.vue";
import Brands from "@/views/BrandsPage.vue";
import Blog from "@/views/BlogPage.vue";
import Cart from "@/views/CartPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: 'homePageRoute', component: Home },
    { path: "/product-category/مد-و-پوشاک", name: 'fashionPageRoute', component: Fashion },
    { path: "/product-category/لوازم-تحریر-هنر", name: 'artPageRoute', component: Art },
    { path: "/product-category/کالای-دیجیتال/:slug?", name: 'digitalPageRoute', component: Digital },
    { path: "/product-category/آرایشی-بهداشتی/:slug?", name: 'cosmeticsPageRoute', component: Cosmetics },
    { path: "/product-category/ابزارآلات/:slug?", name: 'toolsPageRoute', component: Tools },
    { path: "/product-category/خانه-آشپزخانه/:slug?", name: 'homeSuppliesPageRoute', component: HomeSupplies },
    { path: "/product-category/کودک-نوزاد", name: 'childPageRoute', component: Child },
    { path: "/negarshop/my-account/negar-favs", name: 'favPageRoute', component: Fav },
    { path: "/Product/:slug", name: 'productPageRoute', component: Product },
    { path: "/shop", name: 'shopPageRoute', component: Shop },
    { path: "/myAccount", name: 'myAccountPageRoute', component: MyAccount },
    { path: "/brands", name: 'brandsPageRoute', component: Brands },
    { path: "/blog", name: 'blogPageRoute', component: Blog },
    { path: "/cart", name: 'cartPageRoute', component: Cart },
    { path: "/:catchAll(.*)", redirect: '/' }
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
