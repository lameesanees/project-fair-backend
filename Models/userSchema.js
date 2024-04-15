// schema maps to mongodb collection that can be used

// 1. import mongooose
const mongooose = require('mongoose')

// 2. schema connection
const userSchema = new mongooose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    livelink:{
        type:String,
    },
    profile:{
        type:String,
    }
})

//  3. create model
const users = mongooose.model('users',userSchema)
module.exports = users