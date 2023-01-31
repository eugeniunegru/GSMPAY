import {$host,$authHost} from "./index";

export  const createType=async (type)=>{
    const response=await $authHost.post('api/type',type)
    return response.data
}

export  const fetchType=async ()=>{
    const response=await $host.get('api/type')
    return response.data
}
export  const createBrand=async (brand)=>{
    const response=await $authHost.post('api/brand',brand)
    return response.data
}

export  const fetchBrand=async ()=>{
    const response=await $host.get('api/brand')
    return response.data
}
export  const createDevice=async (device)=>{
    const response=await $authHost.post('api/device',device)
     return response.data
}

export  const fetchDevices=async (brandId,typeId,page,limit=5)=>{
    const response=await $host.get('api/device',{
        params:{
            brandId,typeId,page,limit
        }
    })
    return response.data
}
export  const fetchOneDevice=async (id)=>{
    const response=await $host.get('api/device/'+id)
    return response.data
}
export  const createBasket=async (userId,deviceId)=>{
    const response=await $authHost.post('api/basket',userId,deviceId)
    return response.data
}

export  const fetchBasket=async (userId)=>{
    const response=await $authHost.get('api/basket/' + userId)
    return response.data
}