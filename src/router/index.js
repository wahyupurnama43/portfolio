import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Contact from "../views/Contact.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active",
    routes
});

export default router;