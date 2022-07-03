const express = require('express')
const consign = require('consign')

const app = express()

consign({ cwd: 'src', verbose: false })
    .include('./config/middleware.js')
    .into(app)

app.get('/', (req, res) => {
    res.status(200).send()
})

app.get('/users', (req, res) => {
    const users = [
        { name: 'John Doe', email: 'john@mail.com' },
    ]
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    res.status(201).json(req.body)
})

module.exports = app