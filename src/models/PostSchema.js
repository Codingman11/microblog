const moment = require('moment');
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    text: {
		type: String,
		required: true
	},
	date: {
        type: Date,
        createdAt: new Date()
    }
});

module.exports = mongoose.model('Posts', PostSchema);
