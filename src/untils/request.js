import axios from 'axios'
const service =axios.create({
    baseURL:'/api',
    timeout:1000,
}
)
service.interceptors.request.use(config=>{
return config},
err=>console.log(err)
)
export default service