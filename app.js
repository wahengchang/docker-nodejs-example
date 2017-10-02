var express = require('express')
var resourceMonitorMiddleware = require('express-watcher').resourceMonitorMiddleware

var app = express()
app.use(resourceMonitorMiddleware)

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World! v2')
})

app.post('/hello', function (req, res) {
  res.json({
    name: 'hello',
    message: 'I am message'
  })
})


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
