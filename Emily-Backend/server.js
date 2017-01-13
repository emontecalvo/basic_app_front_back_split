const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/user')
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Emily')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-user', (req, res) => {

  const user = new User()

  user.name = req.body.name
  user.age = 26
  user.location = 'Vancouver, BC'

  user.save((err, user) => {
      if (err)
          res.send(err)

      User.find((err, users) => {
        if(err) {
          res.send(err)
        } else {
          res.json(users)
        }
      })
  });
})

app.get('/users', (req, res) => {

  User.find((err, users) => {
    if(err) {
      res.send(err)
    } else {
      res.json(users)
    }
  })

})

app.listen(8080, () => console.log('Woooo the server is up and running!'))
