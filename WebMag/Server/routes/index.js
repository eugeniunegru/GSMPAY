const Router=require('express')
const router=new Router()
const deviceRouter=require('./DeviceRouter')
const brandRouter=require('./BrandRouter')
const typeRouter=require('./TypeRouter')
const userRouter=require('./UserRouter')

router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports=router