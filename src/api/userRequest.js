import request from '../utils/request'

export const getUsers =()=>{
    return  request.post("/users/getAccountList")
}

export const addUser =(data)=>{
    console.log(data);
    return  request.post("/users/accountadd",{data})
}

export const delUser =(params)=>{
    return  request.get("/users/delAccount",{params})
}