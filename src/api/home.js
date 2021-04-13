import request from '@/network/request'
export const gethomemultidata=function(){
      return request({
           url:'/home/multidata',
           method:'get'
       })

}
export const GetHomeGoods = function(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}