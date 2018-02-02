const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const schemaPost = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    destination: {
        type: String
    },
    schedule: {
        type: String
    }
})
const Post = mongoose.model('Post', schemaPost);
module.exports = Post