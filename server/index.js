const express = require('express')
const app =express()

require('./database/connection')()

const userRouter = require('./router/user')

const signupRouter = require('./router/signup')
const  signinRouter= require('./router/login')


app.use(express.json())

app.get('/api',(req,res)=>{
    res.send(" / is working..")
})

app.use('/user',userRouter)

app.use('/signup',signupRouter)
app.use('/login',signinRouter)



app.listen(5000,()=>{
    console.log("app is listening...")
}
)