const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('build'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(5500,()=>{
    console.log('server started')
})