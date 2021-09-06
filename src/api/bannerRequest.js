import request from '../utils/request'

export const banner = (data)=>{
    return request.get("/banner",{data})
}