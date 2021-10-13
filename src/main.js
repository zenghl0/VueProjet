import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'
import nprogress from 'nprogress'

axios.defaults.baseURL = 'http://127.0.0.1:8080/'
axios.interceptors.request.use(config =>{
  //console.log(config);
  nprogress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
//在response拦截器中，隐藏进度条nprogress.done()
axios.interceptors.response.use(config =>{
  nprogress.done()
  return config
})

Vue.use(ElementUI)

Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
