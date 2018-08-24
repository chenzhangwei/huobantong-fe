// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Icon, Container, Input, Button, Badge, Menu, Dropdown, DropdownMenu, DropdownItem, Submenu, MenuItem,
  MenuItemGroup, Row, Col, CarouselItem, Carousel, Popover, Tooltip} from 'element-ui'
import axios from 'axios'
import vueResource from 'vue-resource'
import { post, fetch, patch, put } from './utils/http'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Icon)
Vue.use(Container)
Vue.use(Input)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(vueResource)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(VueLazyLoad, {
  error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2612369302,4190983231&fm=27&gp=0.jpg',
  loading: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2612369302,4190983231&fm=27&gp=0.jpg'
})

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
