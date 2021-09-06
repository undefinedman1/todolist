import request from '../utils/request'

export const login_qr_key =()=>{
    return request.post("/login/qr/key")
}

export const login_qr_create =(data)=>{
    return request.post("/login/qr/create",{data})
}

export const login_qr_check =(params)=>{
    return request.get('/login/qr/check',{params})
}