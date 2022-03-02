import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout/index";
import EquinManage from "../views/EquinManage/index"
import Data from "../views/Data/index"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: layout,
    component:layout,

  },
  {
    path: "/layout",
    name: "layout",
    component: layout,
    children:[
      {
        path: "/",
        name: "Data",
        component: Data,
      },
      {
        path: "/EquinManage",
        name: "EquinManage",
        component: EquinManage,
      },
      {
        path: "/Data",
        name: "Data",
        component: Data,
      }
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
