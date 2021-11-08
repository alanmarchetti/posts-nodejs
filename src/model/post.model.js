const mongoose = require('mongoose');

//Schema from Posts
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = mongoose.model('Post', PostSchema);

