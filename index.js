const express = require('express');
const path = require('path');
const logger = require('./middleWare');
const http = require('http');

const app = express();
// app.get('/', (request, res) => {
//     // res.send('help me pit')
//     res.sendFile(path.join(__dirname, 'page', 'home.html'))
// })

app.use(express.static(path.join(__dirname, 'page')));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/user',require('./api/user'));

app.use((request, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
});


app.use(logger);

app.listen(4200, () => { console.log('server runing') });