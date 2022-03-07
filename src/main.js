import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import * as echarts from "echarts";
import ElementUI from "element-ui";
import "../src/moken/api";
import "element-ui/lib/theme-chalk/index.css";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// 进度条
NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 200,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from , next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  next();
});
router.afterEach(() => {  
  NProgress.done()
})