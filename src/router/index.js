import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Products from '@/pages/Products'
import ProductsDetail from '@/pages/ProductsDetail'
import AboutUS from '@/pages/AboutUS'
import NewsListPage from '@/pages/NewsListPage'
import NewsDetailPage from '@/pages/NewsDetailPage'
import TrainingPage from '@/pages/TrainingPage'
import AromatherapistHomePage from '@/pages/AromatherapistHomePage'
import PersonalPage from '@/pages/PersonalPage'
import LibraryPage from '@/pages/LibraryPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        hideHeader: false,
        hideFooter: true,
        keepAlive: false
      }
    },
    {
      path: '/Products/:type',
      name: 'Products',
      component: Products,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/ProductsDetail/:id',
      name: 'ProductsDetail',
      component: ProductsDetail,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/AboutUS',
      name: 'AboutUS',
      component: AboutUS,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/NewsListPage/:type',
      name: 'NewsListPage',
      component: NewsListPage,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/NewsDetailPage/:id',
      name: 'NewsDetailPage',
      component: NewsDetailPage,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/TrainingPage',
      name: 'TrainingPage',
      component: TrainingPage,
      meta: {
        hideHeader: false,
        hideFooter: false
      }
    },
    {
      path: '/AromatherapistHomePage',
      name: 'AromatherapistHomePage',
      component: AromatherapistHomePage,
      meta: {
        hideHeader: false,
        hideFooter: true
      }
    },
    {
      path: '/PersonalPage/:id',
      name: 'PersonalPage',
      component: PersonalPage,
      meta: {
        hideHeader: false,
        hideFooter: true
      }
    },
    {
      path: '/LibraryPage',
      name: 'LibraryPage',
      component: LibraryPage,
      meta: {
        hideHeader: false,
        hideFooter: true
      }
    }
  ]
})
