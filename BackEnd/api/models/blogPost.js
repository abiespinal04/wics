const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    post:String,
    // telephone: {type:Number, required: true}

})

module.exports = mongoose.model('postSchema', postSchema);