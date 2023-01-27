const Router=require('express')
const brandController=require('../controller/brandController')
const checkRole=require('../middleware/checkRoleMiddleware')
const router=new Router()

router.post('/',checkRole('ADMIN'),brandController.create)
router.get('/',brandController.getAll)


module.exports=router