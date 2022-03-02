import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout/index";
import home from "../views/home/index";
import pz from "../views/pz/index";
import login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/layout",
    name: "layout",
    component: layout,
    children: [
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/pz",
        name: "pz",
        component: pz,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
