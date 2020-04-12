/**
 * @Author: zhangwei
 * @Date: 2020/4/12 11:03 AM
 * @desc:
 **/
import axios from './http'

import { BaseUrl } from './base'

// 首页第一屏banner接口
export const homapageBannerApi = params =>
  axios.get(`${BaseUrl}/api/banner/list`, { params })

// 产品分类
export const productCateApi = params =>
  axios.get(`${BaseUrl}/api/product/cate`, { params })

// 芳疗师列表
export const teacherListApi = params =>
  axios.get(`${BaseUrl}/api/teacher/list`, { params })

// 产品列表
export const productListApi = params =>
  axios.get(`${BaseUrl}/api/product/list`, { params })

// 产品详情
export const productDetailApi = params =>
  axios.get(`${BaseUrl}/api/product/detail`, { params })

// 资讯列表
export const newsListApi = params =>
  axios.get(`${BaseUrl}/api/news/list`, { params })

// 资讯详情
export const newsDetailApi = params =>
  axios.get(`${BaseUrl}/api/news/detail`, { params })
