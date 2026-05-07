import request from '@/utils/http'
import { id } from 'element-plus/es/locale/index.mjs'

export const getDeail = (id) => {
  return request ({
    url: '/goods',
    params: {
      id
    }
  })
}