const mongoose = require('mongoose')
const DB_URL = "mongodb://localhost:27017/api_first_practise"


async function connecion() {
    console.log("i am coming in connection...")
    const connect =await mongoose.connect(DB_URL,{
        useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true
        })

    if (connect) {
        console.log("momgodb is connectecd...")
    }
    else {
        console.log("error in connection...")
    }

}
module.exports = connecion