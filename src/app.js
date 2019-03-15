const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
	title: 'Weather',
	name: 'Harsha'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
	title: 'About Me',
	name: 'Harsha'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
	helpText: "Some Helpful Text",
	title: 'Help',
	name: 'Harsha'
  })
})

app.get('/weather', (req, res) => {
  res.send({
	location: "Bangalore",
	forecast: "its gon rain today"
  })
})

app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must provide a search term.'
		})
	}

	console.log(req.query.search)
	res.send({
		products: []
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Harsha',
		errorMessage: 'Help Article Not Found.'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Harsha',
		errorMessage: 'Page Not Found.'
	})
})

app.listen(3000, () => {
  console.log("Server is up on port 3000");
})