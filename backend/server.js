const express=require('express')
const products=require('./data/products')
const dotenv=require('dotenv')

dotenv.config();

const app=express()

app.get('/',(req,res)=>{
    res.send('API is  running...')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=>p.id===req.params.id)
    res.json(product)
})

const port=process.env.PORT||5000

app.listen(port, console.log(`Server begins in ${port} in ${process.env.MODE}`))