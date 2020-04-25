const path = require('path')

const expressEdge = require('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const Post = require('./database/models/Post')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog')

app.use(express.static('public'))

app.use(expressEdge.engine)

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async(req, res) => {

	const posts = await Post.find({})
	res.render('index', {
		posts
	})

})

app.get('/posts/new', (req, res) => {

	res.render('create')

})

app.post('/posts/store', (req, res) => {

	Post.create(req.body, (error, post) => {

		res.redirect('/')
	})

})

app.get('/about', (req, res) => {

	res.render('about')

})

app.get('/post/:id', async(req, res) => {

	const post = await Post.finById( req.params.id )

	res.render('post', { post })

})

app.get('/contact', (req, res) => {

	res.render('contact')

})

app.listen(4000, () => {

	console.log('App listening on Port 4000')

})