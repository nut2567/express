const express = require('express');
const path = require('path');
const fs = require('fs');
// const path  = require('path');
const app = express();
app.get('/',(require,res)=>{
    // res.send('help me pit')
    res.sendFile(path.join(__dirname,'page','home.html'))
})

// app.use(express.static(path.join(__dirname, 'page')));

app.listen(4200, () => { console.log('server runing') });