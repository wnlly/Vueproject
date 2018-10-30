const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

let lunbo = require('./router.js/lunbo.js')




app.use('/api',lunbo)


app.listen(3000,function(){
    console.log('the server is running ')
})