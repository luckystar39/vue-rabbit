import request from '@/utils/http'
import { id } from 'element-plus/es/locale/index.mjs'

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}