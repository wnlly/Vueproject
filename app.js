const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

var proxy = require('http-proxy-middleware')

let lunbo = require('./router.js/lunbo.js')



var options = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};






app.use('/api',lunbo)
app.listen(3000,function(){
    console.log('the server is running ')
})