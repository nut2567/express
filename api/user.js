const e = require('express');
const { request } = require('express');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const user = [{
    id: 001,
    name: 'B1',
    email: 'B1@gmail.com'
}]




router.get('/', (request, res) => {
    res.json(user)
})

router.get('/:id', (request, res) => {
    let fuser = user.filter(item => item.id === parseInt(request.params.id))
    res.json(fuser)
})
router.post('/', (request, res) => {
    // res.send(request.body);


    if (!request.body.name) {
        return res.status(400).json({ message: 'please input name' })
    } else {
        const newUser = {
            id: uuid.v4(),
            name: request.body.name,
            email: request.body.email || null
        }
        user.push(newUser);
        return res.status(200).json(user)
    }
})
router.put('/:id', (request, res) => {
    if (!request.body.name) {
        return res.status(400).json({ message: 'please input name' })
    }
    let tUser = user.find((item, index) => {
        if (item.id == parseInt(request.params.id)) {
            user[index].name = request.body.name
            user[index].email = request.body.email||item.email
            return true;
        }
        return false;
    })
    return res.status(200).json(tUser)
})

router.delete('/:id',(reques,res)=>{    
    let obj =  {message : 'not do any thing'}
    user.filter((item)=>{
        obj.message = item.id==request.params.id?'deleted':obj.message;
        return item.id != parseInt(request.params.id);
    })
    return res.status(200).json(obj);
})
module.exports = router;