const uuid=require('uuid')
const path=require('path')
const {Device,DeviceInfo}=require('../models/models')
const apiError=require('../error/apiError')
class DeviceController{
    async create(req,res,next){
        try{
             let {name,price,brandId,typeId,info}=req.body
             const {img}=req.files
             let fileName = uuid.v4()+'.jpg'
             img.mv(path.resolve(__dirname,'..','static',fileName))
            const device= await Device.create({name,price,typeId,brandId,img:fileName})
            console.log(typeId,brandId)
            if(info){

                 info=JSON.parse(info)
                 info.forEach(i=>
                     DeviceInfo.create(
                         {
                             name:i.title,
                             description:i.description,
                             deviceId:device.id
                         })
                 )
             }
             res.json(device)
        }catch (e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {brandId,typeId,limit,page}=req.query
        page=page || 1
        limit=limit || 9
        let offset=page*limit-limit
        let devices;
        if(!typeId && !brandId){
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(typeId && !brandId){
            devices = await Device.findAndCountAll({where: {typeId},limit,offset})
        }
        if(!typeId && brandId){
            devices = await Device.findAndCountAll({where: {brandId},limit,offset})
        }
        if(typeId && brandId){
            devices = await Device.findAndCountAll({where: {typeId,brandId},limit,offset})
        }
        return res.json(devices)
    }
    async getOne(req,res){
        const {id}=req.params
        const device=await Device.findOne({where:{id},
        include:[{model:DeviceInfo, as: 'info'}]
        },
        )
        return res.json(device)
    }

}

module.exports=new DeviceController()