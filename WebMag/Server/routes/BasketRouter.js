const Router=require('express')
const basketController=require('../controller/basketController')
const checkRole=require('../middleware/checkRoleMiddleware')
const router=new Router()

router.post('/',checkRole('ADMIN'),basketController.create)
router.get('/:userId',checkRole('ADMIN'),basketController.getAll)


module.exports=router