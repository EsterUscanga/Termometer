const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO.listen(server)

app.use(express.static(__dirname + '/public'))

server.listen(3000, function(){
  console.log('server listening on por 3000')
})

// serial communication
const Serialport = require('serialport')

const Readline = Serialport.parsers.Readline;

const port = new Serialport('/dev/ttyACM0', {
  baudRate: 9600
})

const parser = port.pipe(new Readline({ delimeter: '\r\n'}))

parser.on('open', function (){
  console.log('connection is oppened')
})

parser.on('data', function (data){
  let temp = parseInt(data, 10) + "°C"
  //console.log(temp)
  io.emit('temp', data)
})

port.on('error', function(err){
  console.log(err)
})