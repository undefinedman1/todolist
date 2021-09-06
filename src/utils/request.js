import { extend } from "umi-request";

const request = extend({
    prefix: "http://jacklv.cn:3000",
    timeout:2000,
    errorHandler:error=>{
        console.log("请求失败",error);
    }
})

export default request