import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/TheHeader'
import Layout from '@/pages/Layout/Layout'
// import Footer from '@/components/footer/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    }
  ]
})
