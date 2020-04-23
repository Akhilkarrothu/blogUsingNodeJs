const path = require('path')

const expressEdge = require('express-edge')

const express = require('express')

const app = new express()

app.use(express.static('public'))

app.use(expressEdge)

app.set('views' `${__dirname}/views`)

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/post', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/contact', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.listen(4000, () => {

	console.log('App listening on Port 4000')

})