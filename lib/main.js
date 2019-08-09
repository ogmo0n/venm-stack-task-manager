import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@/assets/css/styles.css";
Vue.config.productionTip = false;
new Vue({
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  }
}).$mount("#app");