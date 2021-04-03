import axios  from "axios";


export  default  function  request(config) {

  let  axiosInstance = axios.create({
     baseURL:'',
     timeout:5000
    });

  //请求拦截器
  axiosInstance.interceptors.request.use((config)=>{
      return config
  })

  //响应拦截器
  axiosInstance.interceptors.response.use(result=>{
       return result
  })

  return axiosInstance(config)
}