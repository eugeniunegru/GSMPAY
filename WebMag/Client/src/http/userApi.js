import {$host,$authHost} from "./index";
import jwt_decode from "jwt-decode";
export  const registration=async (email,password)=>{
    const response=await $host.post('api/user/registration',{email,password,role:'ADMIN'})
    localStorage.setItem('token',response.data.token)
    return jwt_decode(response.data.token)
}

export  const login=async (email,password)=>{
    try{
        const response=await $host.post('api/user/login',{email,password})
        localStorage.setItem('token',response.data.token)
        return jwt_decode(response.data.token)
    }catch (e) {
        console.log(e.message)
    }

}

export  const check=async ()=>{
    try {
        const response=await $authHost.get('api/user/auth')
        localStorage.setItem('token',response.data.token)
        return jwt_decode(response.data.token)
    }catch (e) {
        console.log(e)
    }
}