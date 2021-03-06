import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Collection from "../views/Collection.vue";
import DealAlert from "../views/DealAlert.vue";

import Login from "../views/login/Login.vue";
import SignUp from "../views/login/SignUp.vue";
import ResetPassword from "../views/login/ResetPassword.vue";
import ForgotPassword from "../views/login/ForgotPassword.vue";

import ProfilePage from "../views/ProfilePage.vue";
import Security from "../views/Security.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { layout: "MainLayout", showOnHeader: true },
    },
    {
        path: "/collection",
        name: "Collection",
        component: Collection,
        meta: { layout: "MainLayout", showOnHeader: true },
    },
    {
        path: "/deal-alert",
        name: "Deal Alert",
        component: DealAlert,
        meta: { layout: "MainLayout", showOnHeader: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { layout: "LoginLayout" },
    },
    {
        path: "/signUp",
        name: "SignUp",
        component: SignUp,
        meta: { layout: "LoginLayout" },
    },
    {
        path: "/resetPassword",
        name: "ResetPassword",
        component: ResetPassword,
        meta: { layout: "LoginLayout" },
    },
    {
        path: "/forgotPassword",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: { layout: "LoginLayout" },
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
        meta: { layout: "MainLayout", showOnHeader: true },
    },
    {
        path: "/security",
        name: "Security",
        component: Security,
        meta: { layout: "MainLayout" },
    },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
