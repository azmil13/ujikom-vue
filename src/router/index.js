import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Galery from "../views/Galery.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import Detailproduct from "../views/Detailproduct.vue"
import Menyatu from "../components/Menyatu.vue";
import Dashboard from "../views/Dashboard.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/galery",
        name: "Galery",
        component: Galery,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/menyatu",
        name: "Menyatu",
        component: Menyatu,
    },
    {
        path: "/detail",
        name: "Detailproduct",
        component: Detailproduct,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;