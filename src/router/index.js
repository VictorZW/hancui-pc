import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Products from '@/pages/Products'
import ProductsDetail from '@/pages/ProductsDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/ProductsDetail',
      name: 'ProductsDetail',
      component: ProductsDetail
    }
  ]
})
