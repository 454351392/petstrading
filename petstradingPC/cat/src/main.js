import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import TopNav from '@/components/TopNav.vue'
import TopNavs from '@/components/TopNavs.vue'
import TopNavu from '@/components/TopNavu.vue'
import SideNav from '@/components/SideNav.vue'
import SideNavp from '@/components/SideNavp.vue'
import Footer from '@/components/Footer.vue'



import Cattype from '@/components/style_tag/cat_type.vue'
import Hotprosmall from '@/components/style_tag/hotpro_small.vue'
import Goodadvise from '@/components/style_tag/good_advise.vue'
import Secondpage from '@/components/style_tag/second_page.vue'

Vue.component('top-nav', TopNav)
Vue.component('top-navs', TopNavs)
Vue.component('top-navu', TopNavu)
Vue.component('side-nav', SideNav)
Vue.component('side-navp', SideNavp)
Vue.component('my-footer',Footer)



Vue.component('cat-type', Cattype)
Vue.component('hotpro-small', Hotprosmall)
Vue.component('good-advise', Goodadvise)
Vue.component('second-page', Secondpage)
Vue.use(ElementUI);
Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://192.168.7.171:47'
axios.defaults.baseURL = 'http://localhost:47'
axios.defaults.withCredentials = true;     //跨域请求带cookie
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
