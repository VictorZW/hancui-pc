/**
 * 封装常用工具函数
 */

import moment from 'moment'

// 2020
export function getYear(date) {
  return moment(date).format('YYYY')
}

// 02-12
export function getDate(date) {
  return moment(date).format('MM-DD')
}
