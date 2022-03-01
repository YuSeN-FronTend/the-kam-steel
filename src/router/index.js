import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout/index";
import home from "../views/home/index";
import pz from "../views/pz/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
