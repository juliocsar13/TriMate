const mongoose = require('mongoose')
const Schema  = mongoose.Schema();


const schemaPost = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        defaultValue: new Date()
    },
    destination: {
        type: String,
        optional: false
    },
    schedule: {
        type: Date,
        optional: false
    }
})
mongoose.model('Post', schemaPost);