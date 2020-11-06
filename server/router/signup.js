const express=require('express')
const signuprouter= express.Router()

signuprouter.get('/',(req,res)=>{
    res.send("signup / router is working...")
})

module.exports = signuprouter
