require('dotenv').config()
const express=require('express')
const sequelize=require('./db')
const PORT=process.env.PORT
const models=require('./models/models')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const router=require('./routes/index')
const errHandler=require('./middleware/ErrorhandlingMiddleWare')
const path=require('path')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)
app.options('*', cors())
//Prelucrarea erorilor
app.use(errHandler)
const start=async ()=>{
    try{
       await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{console.log('Server is running on port %d',PORT)})
    }catch (e){
        console.log(e.toString())
    }
}

start()
