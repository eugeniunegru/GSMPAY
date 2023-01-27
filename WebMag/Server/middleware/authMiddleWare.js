const jwt=require('jsonwebtoken')
module.exports=function (req,res,next){

        if(req.method === "OPTIONS"){
              next()
          }
              try{
                  let token=req.headers.authorization
                      token=token.split(' ')[1]

                   if(!token) {
                       return res.status(401).json({message: "Nu sunteti autorizat!!"})
                   }
                       const decoded = jwt.verify(token, process.env.SECRET_KEY)
                       req.user=decoded
                     next()
              }catch (e) {
                  res.status(401).json({message:"Nu sunteti autorizat err!!"})
              }
          next()
    }