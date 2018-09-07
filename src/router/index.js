import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/TheHeader'
import Layout from '@/pages/Layout/Layout'
import IndexEdit from '@/pages/edit/IndexEdit'
// import Footer from '@/components/footer/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/edit',
      name: 'indexEdit',
      component: IndexEdit
    }
  ]
})
