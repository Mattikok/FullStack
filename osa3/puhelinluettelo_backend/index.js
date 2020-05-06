const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
morgan.token('host', (req, res) => {
    if(req.method === 'POST'){
        return (
            JSON.stringify(req.body)
        )
    }
    
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host'))

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const getRandomId = () => {
    return Math.floor(Math.random() * (1000000 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
  }

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(`
    <div>
    <p>Phonebook has info on ${persons.length} people<p/>
    <p>${date.toString()}<p/>
    <div/>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const pers = persons.find(n=>n.id === id)
    if(pers){
        res.json(pers)
    }else{
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(n => n.id !== id)
  
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body || !body.number || !body.name){
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const name = body.name
    const number = body.number

    if(persons.some(n=>n.name===name)){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const pers = {
        name: name,
        number: number,
        id: getRandomId()
    }

    persons = persons.concat(pers)

    res.json(pers)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })