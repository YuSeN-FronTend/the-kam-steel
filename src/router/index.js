import Vue from "vue";
import VueRouter from "vue-router";

import layout from "../layout/index";
import home from "../views/dataCenter/home";
import compare from "../views/dataCenter/compare";
import login from "../views/login";
import EquinManage from "../views/EquinManage/index";
import derive from "../views/dataCenter/derive";
import control from "../views/dataCenter/control"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: login,
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
        path: "/compare",
        name: "compare",
        component: compare,
      },
      {
        path: "/EquinManage",
        name: "EquinManage",
        component: EquinManage,
      },
      {
        path: "/derive",
        name: "derive",
        component: derive,
      },
      {
        path: "/control",
        name: "control",
        component: control
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
