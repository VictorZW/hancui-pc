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
