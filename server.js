const express = require('express')
const app = require('express')()
const server = require('http').createServer(app)

/**
 * 打包后，可以用这个来当服务器，测试打包的结果
 */

server.listen(8888)
app.use(express.static('./dist'))
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})