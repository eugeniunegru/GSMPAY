const {BasketDevice,Basket,Device} = require("../models/models");

class BasketController{
    async create(req,res){
        const {userId,deviceId}=req.body
        const basket=await Basket.findOne({where: {userId}})
        const basketDev=await BasketDevice.create({basket,deviceId})
        return res.json(basketDev)
    }
    async getAll(req,res){
        const userId=req.params
         let {id}=await Basket.findOne({where:userId})
         const basketDev=await BasketDevice.findAll({
             include:{model:Device,required:true},
             where: {basketId:id}
             })
         return res.json(basketDev)
        //return res.json({message:"OK!"})
    }
}

module.exports=new BasketController()