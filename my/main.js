// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Menu, Layout, Input, Icon, Select, Cascader, Form, Tooltip,Checkbox} from 'ant-design-vue'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/menu/style/css'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/input/style/css'
import 'ant-design-vue/lib/icon/style/css'
import 'ant-design-vue/lib/select/style/css'
import 'ant-design-vue/lib/cascader/style/css'
import 'ant-design-vue/lib/form/style/css'
import 'ant-design-vue/lib/tooltip/style/css'
import 'ant-design-vue/lib/checkbox/style/css'
import axios from 'axios'

Vue.prototype.$myAxios = axios
Vue.use(Button)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Checkbox)
Vue.config.productionTip = false
Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 2) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
