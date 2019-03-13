const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index')
})

app.get('/weather', (req, res) => {
  res.send({
    location: "Bangalore",
    forecast: "its gon rain today"
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000");
})