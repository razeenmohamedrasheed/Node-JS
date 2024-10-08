const express = require('express')
const task = require('./routes/tasks')
const app = express()

app.use('/api/tasks',task)

app.listen(3000,()=>{
    console.log("Node Running")
})