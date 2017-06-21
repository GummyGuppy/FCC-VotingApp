const express = require('express'),
      ejs = require('ejs'),
      path = require('path')


const app = express()


//set view engine//set view engine
app.engine('ejs', require('express-ejs-extend'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  res.render('login')

})



app.listen(3000, () => {
  console.log('started server on port 3000')
})
