require('dotenv').config()

const db = require('../models'),
  express = require('express'),
  router = express.Router(),
  axios = require('axios');
  
  const redirect = encodeURIComponent(`http://localhost:${process.env.PORT || 3001}/api/discord/callback`)
  const redirectLol = encodeURIComponent('http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify')

module.exports = router => {

  router.get("/login", (req, res, next) => {
    res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redirectLol}`)
    //res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`)
  })


}