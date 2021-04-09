import request from '@/untils/request'
export const text1=function(){
      return request({
           url:'/category',
           method:'get'
       })

}
