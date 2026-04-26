// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
import { install } from 'element-plus'

export const lazyPlugin = {
  // 懒加载指令逻辑
  install (app) {
    app.directive('img-lazy',{
      mounted (el,binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value 指令等于后面绑定的表达式的值 图片url
        
        const { stop } =  useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting);
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
}