/**
 * @Author: zhangwei
 * @Date: 2020/4/12 10:42 AM
 * @desc:
 **/
import axios from 'axios'
import { Message } from 'element-ui'

axios.interceptors.request.use(config => config, error => Promise.reject(error))
axios.interceptors.response.use(res => {
    console.log(res.data)
    if (res.data.success) {
      return res.data
    } else {
      Message({
        message: res.data.error_msg,
        showClose: true,
        type: 'error'
      })
      return Promise.reject(res.data.error_msg)
    }
  },
  err => {
    console.log('err1', err);
    Message({
      message: '服务器无响应，请重试！',
      showClose: true,
      type: 'error'
    })
    return Promise.reject(err)
  }
)

export default axios
