const express = require('express')
const app = express()
const sass = require('node-sass')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('dist'))
app.use(express.static('public'))

app.get('/', function(req, res){
	res.render('index')
})

app.get('/indexFull', function(req, res){
	res.render('indexFull')
})

app.listen(port, () => 
	console.log(`o aplicativo esta escutando no endereçoç localhost:${port}`
))