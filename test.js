const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

/*
Post.find({

	title: 'Na second post ra'

}, (error, posts) => {

	console.log(error, posts)

})
*/


/*Post.findByIdAndUpdate("5ea33dc66e05462c5b892495", {

	title: 'Naku istam ayina post ra'

}, (error, post) => {

	console.log(error, post)

})*/

/*
Post.create({

	title: 'Na second post ra',

	description: 'edho sodhi le avasarama',

	content: 'sodhi amma sodhi.'

}, (error, post) => {

	console.log(error, post)

})*/

Post.find({}, (error, posts) => {

	console.log(error, posts)

})
