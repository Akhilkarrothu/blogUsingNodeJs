const mongoose = require('mongoose')

const Postschema = new mongoose.Schema({

	title: String,

	description: String,

	content: String
})

const Post = mongoose.model('Post', Postschema)

module.exports = Post