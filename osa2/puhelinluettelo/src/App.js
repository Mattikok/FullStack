import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value.toLowerCase())
    }

    const addPerson = (event) => {
        event.preventDefault()
        //check if person is already included
        if(persons.some(({name}) => newName === name)){
            window.alert(`${newName} is already added to the phonebook`)
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }
        
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }
  
    return (
      <div>
        <h2>Phonebook</h2>

        <Filter 
        handleFilterChange={handleFilterChange} 
        newFilter={newFilter}
        />

        <h3>add a new</h3>

        <PersonForm 
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        />

        <h3>Numbers</h3>

        <Persons persons={persons} newFilter={newFilter}/>

      </div>
    )
  
  }
  
  export default App