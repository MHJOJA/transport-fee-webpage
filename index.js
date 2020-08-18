const trannsportFee = require('./transportFee')

const express = require('express')
const bodyParser = require('body-parser')

//npm install --save  express-handlebars

const exphbs = require('express-handlebars')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.engine('handlebars',exphbs())
app.set('view engine','handlebars')
//after you added this restart the app

app.get('/', function(reg,res){
    res.render('index')
})

app.post('/fee', function(reg,res){
const  price = trannsportFee(reg.body.shift)
res.render('fee',{price})
})

//route that takes in a parameter

app.get('/fee/:time', function(reg,res){

    const theFee = trannsportFee(reg.params.time)
    res.send('The fee is: '+ theFee)
})

app.listen(3007,function(){
    console.log('App started on port 3007');
})
