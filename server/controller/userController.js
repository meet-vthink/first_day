const getUser =(req,res)=>{
    res.send(" user router is working... ")
}

const createUser=(req,res)=>{
    
    const name=req.body.name
res.json({name})

}

module.exports={getUser,createUser}