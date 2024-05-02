import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tambahdata from "../views/Tambahdata.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import Detailproduct from "../views/Detailproduct.vue";
import Dasboard from "../views/Dasboard.vue";
import Adminproject from "../views/Adminproject.vue";
import editProduct from "../views/EditProduct.vue"
import Adminkontak from "../views/Adminkontak.vue";
import editkontak from "../views/Editkontak.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/tambah",
        name: "tambah",
        component: Tambahdata,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: editProduct,
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
        path: "/detail",
        name: "detail",
        component: Detailproduct,
    },
    {
        path: "/dasboard",
        name: "dasboard",
        component: Dasboard,
    },
    {
        path: "/admin",
        name: "admin",
        component: Adminproject,
    },
    {
      path: "/datakontak",
      name: "data",
      component: Adminkontak,
    },
    {
      path: "/editkontak/:id",
      name: "editkontak",
      component: editkontak,
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