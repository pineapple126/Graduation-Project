import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/custom-component"; // 注册自定义组件
import axios from "axios";
import "@/styles/animate.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/reset.css";

Vue.use(ElementUI, { size: "small" });
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
