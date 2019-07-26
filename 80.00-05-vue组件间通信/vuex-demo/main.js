import Vue from 'vue'
import store from './store'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  store,//注册上vuex的store: 所有组件对象都多一个属性$store
}).$mount('#app')

