const express=require('express')
const signinRouter= express.Router()

signinRouter.get('/',(req,res)=>{
    res.send("login / router is working...")
})

module.exports = signinRouter
