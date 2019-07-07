require('dotenv').config()

const express = require('express'),
  app = express(),
  morgan = require('morgan'),
  path = require('path'),
  PORT = process.env.PORT || 3001,
  db = require('./models')

app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

require("./routes")(app)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`✔ Server now on port ${PORT}!`)
  })
})