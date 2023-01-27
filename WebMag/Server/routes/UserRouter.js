const Router=require('express')
const userController=require('../controller/userController')
const authMiddleWare=require('../middleware/authMiddleWare')
const router=new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.loghin)
router.get('/auth', authMiddleWare, userController.check)

module.exports = router