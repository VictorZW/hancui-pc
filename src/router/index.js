import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Products from '@/pages/Products'
import ProductsDetail from '@/pages/ProductsDetail'
import AboutUS from '@/pages/AboutUS'
import NewsListPage from '@/pages/NewsListPage'
import NewsDetailPage from '@/pages/NewsDetailPage'
import TrainingPage from '@/pages/TrainingPage'

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
    },
    {
      path: '/AboutUS',
      name: 'AboutUS',
      component: AboutUS
    },
    {
      path: '/NewsListPage',
      name: 'NewsListPage',
      component: NewsListPage
    },
    {
      path: '/NewsDetailPage',
      name: 'NewsDetailPage',
      component: NewsDetailPage
    },
    {
      path: '/TrainingPage',
      name: 'TrainingPage',
      component: TrainingPage
    }
  ]
})
