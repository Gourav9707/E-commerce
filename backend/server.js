const express=require('express')
const productRoute=require('./routes/productRoutes')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const {notFound,errorHandler}=require('./middlewares/errorMiddlewares')

dotenv.config();

connectDB();

const app=express()

app.get('/',(req,res)=>{
    res.send('API is  running...')
})

app.use('/api/products',productRoute)

app.use(notFound)

app.use(errorHandler)

const port=process.env.PORT||5000

app.listen(port, console.log(`Server begins in ${port} in ${process.env.MODE}`))