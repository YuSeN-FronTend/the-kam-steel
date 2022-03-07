import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout/index";
import home from "../views/home/index";
import pz from "../views/pz/index";
import login from "../views/login";
import EquinManage from "../views/ConfigServer/EquinManage/index"
import create from "../views/ConfigServer/EquinManage/create"
import EquinType from "../views/ConfigServer/EquinType/index"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: login,
    component:login,

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

      {
        path: "/EquinManage",
        name: "EquinManage",
        component: EquinManage,
      },
      {
        path: "/create",
        name: "create",
        component: create,
      },
      {
        path: "/EquinType",
        name: "EquinType",
        component: EquinType,
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
