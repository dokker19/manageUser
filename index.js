// index.js

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

//DB setting

mongoose.connect("mongodb+srv://" + "DBUser" + ":" + "qwer1023" + "@cluster0.ua005ww.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;
db.once('open', () => {
    console.log('DB connected')
})
db.on('error', (err) => {
    console.log('DB ERROR: ', err)
})

//view engine
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))

//other settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    //CORS
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET POST PUT DELETE')
    res.header('Access-Control-Allow-Headers', 'content-type')
    next()
})


//Routing
app.use('/', require('./routes/home'));
app.use('/users', require('./routes/users'))

//Port setting
const port = 3000;
app.listen(port, () => {
    console.log('server on! http://localhost:' + port)
})