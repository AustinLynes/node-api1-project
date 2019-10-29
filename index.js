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
            if (!user) {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
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
    user_db.insert(user)
        .then(_user => {
            if (!_user.name || !use.bio) {
                res.status(400).json({
                    errorMessage: "Please provide name and bio for the user."
                })
            }
            res.status(201).json({ message: 'user created successfully!' })
        })
        .catch(() => {
            res.status(500).json({
                error: "The user information could not be retrieved."
            })
        })


})

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    user_db.findById(id)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "The user with the specified ID does not exist."
                })
            } else {
                user_db.remove(id)
                    .then(() => {
                        res.status(200).json({
                            message: `${user.name} has been deleted from the database`
                        })
                    })
                    .catch(() => {
                        res.status(500).json({
                            error: "The user could not be removed"
                        })
                    })
            }
        })
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    const newInfo = req.body
    user_db.findById(id)
        .then(user => {
            if (!user) {
                res.status(404).json(
                    { message: "The user with the specified ID does not exist." }
                )
            }
        })
        user_db.update(id, {...newInfo})
        .then(user=>{
            res
            .status(200)
            .json(user)
        })
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})