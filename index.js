const express = require('express');
const path = require('path');
const logger = require('./middleWare');
const http = require('http');

const app = express();
app.get('/', (request, res) => {
    // res.send('help me pit')
    res.sendFile(path.join(__dirname, 'page', 'home.html'))
})

app.use(express.static(path.join(__dirname, 'page'), {
    setHeaders: (res, path, stat) => {
        res.set('Content-Type', 'application/javascript');
    }
}));
app.use((request, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
});


const user = [{
    id: 001,
    name: 'B1',
    email: 'B1@gmail.com'
}]



app.use(logger);

app.get('/api/user', (request, res) => {
    res.json(user)
})

app.get('/api/user/:id', (request, res) => {
    let fuser = user.filter(item => item.id === parseInt(request.params.id))
    res.json(fuser)
})

app.listen(4200, () => { console.log('server runing') });