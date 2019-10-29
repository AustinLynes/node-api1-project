// implement your API here
const express = require('express')
const server = express()
const port = 5000
const user_db = require('./data/db')
server.use(express.json())

server.get('/', (req, res) => {
    res.send('Welcome to the node-api1-project!')
})

server.get('/api/users', (req, res) => {
    user_db.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({
                errorMessage: 'the user information could not be retrieved...'
            })
        })
})

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    user_db.findById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(() => {
            res.status(500).json({
                errorMessage: 'user could not be found with the given id'
            })
        })
})

server.post('/api/users/', (req, res) => {
    const user = req.body
    const users = user_db.find()
    console.log(req.body)
    if(user.name !== undefined || user.bio !== undefined){
        user_db.insert(user)
        .then(_user =>{
            res.status(201).json({message:'user created successfully!'})
        })
        .catch(()=>{
            res.status(500).json({errorMessage:'some information was not found...'})
        })
    }else{
        res.status(400).json({
            errorMessage:'information is not unidentified'
        })
    }
   
})


server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})