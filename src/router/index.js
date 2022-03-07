import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout/index";
import home from "../views/dataCenter/home";
import compare from "../views/dataCenter/compare";
import login from "../views/login";
<<<<<<< HEAD
import EquinManage from "../views/EquinManage/index";
import derive from "../views/dataCenter/derive";
import control from "../views/dataCenter/control"
=======
import EquinManage from "../views/ConfigServer/EquinManage/index"
import create from "../views/ConfigServer/EquinManage/create"
import EquinType from "../views/ConfigServer/EquinType/index"
>>>>>>> 0a0dab6521efd28409ef8c155e3035da453f806e

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
<<<<<<< HEAD
        path: "/derive",
        name: "derive",
        component: derive,
      },
      {
        path: "/control",
        name: "control",
        component: control
      }
=======
        path: "/create",
        name: "create",
        component: create,
      },
      {
        path: "/EquinType",
        name: "EquinType",
        component: EquinType,
      },

 
>>>>>>> 0a0dab6521efd28409ef8c155e3035da453f806e
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
