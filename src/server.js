const express = require('express')
const routes = require('./routes/routes')

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(routes)



server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})