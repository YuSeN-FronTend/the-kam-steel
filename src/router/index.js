import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
import layout from "../layout/index";
import home from "../views/home/index";
import pz from "../views/pz/index";
import login from "../views/login";

=======
import layout from "../views/layout/index";
import EquinManage from "../views/EquinManage/index"
import Data from "../views/Data/index"
>>>>>>> d24b65eb7c21776f76b4ddd8e69599cd4170d706
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
<<<<<<< HEAD
    name: "login",
    component: login,
=======
    name: layout,
    component:layout,

>>>>>>> d24b65eb7c21776f76b4ddd8e69599cd4170d706
  },
  {
    path: "/layout",
    name: "layout",
    component: layout,
<<<<<<< HEAD
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
=======
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
>>>>>>> d24b65eb7c21776f76b4ddd8e69599cd4170d706
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
