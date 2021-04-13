import axios from 'axios'
const service =axios.create({//创建axios实列
    baseURL:'/api',
    timeout:1000,
}
)
service.interceptors.request.use(config=>{//axios的request拦截器
return config},
err=>console.log(err)
)
service.interceptors.response.use(res=>{
    return res.data
},
err=>console.log(err))
export default service