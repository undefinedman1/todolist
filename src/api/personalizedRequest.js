import request from '../utils/request'

export const personalized =(data)=>{
    return request.get("/personalized",{data})
}

