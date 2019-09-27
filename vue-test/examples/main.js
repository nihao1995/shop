import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import router from './router'

import store from './components/store'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US';
import './index.less'


Vue.use(VueRouter)

Vue.use(iView, { locale });
Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

