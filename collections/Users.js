const mongoose = require('mongoose')
const Schema  = mongoose.Schema();

const schemaUser = new Schema({
    fistName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    nationality:{
        type:String
    },
    birthday:{
        type:Date,
        optional:false
    },
    description:{
        type:String
    },
    createdAt: {
        type: Date,
        defaultValue: new Date()
    }

});


mongoose.model('User', schemaUser);