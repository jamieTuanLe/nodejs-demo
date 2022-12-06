const app = require('./backend/app')
const http = require('http')

const server = http.createServer(app)
server.listen(8080)