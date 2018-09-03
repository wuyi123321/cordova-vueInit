
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
Vue.config.productionTip = false;

let app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#0FA0FA");//设置statusbar颜色
  },
};
app.initialize();
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
