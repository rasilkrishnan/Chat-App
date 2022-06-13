var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]

app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) =>{
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})






























// const { response } = require("express");
// var express = require("express");
// var bodyParser = require("body-parser")
// var app = express() // setup reference to a variable from an instance of express

// app.use(express.static(__dirname))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// // creating placeholder message list as an array
// var messages = [
//     {name: "Rasil", message: "Hi"},
//     {name: "Sena", message: "Hello"}
// ]

// app.get("/messages", (req,res) =>{ // /message is the endpoint ----callback will take in request and then give us reference to repond
//     res.send(messages)
// } )

// app.post("/messages", (req,res) =>{
//     //console.log(req.body)
//     messages.push(req.body)   // Adding new messages we got to the messages array
//     res.sendStatus(200)
// } )



// var server = app.listen(3000, () => {
//     console.log("server is listening on port", server.address().port)
// });
