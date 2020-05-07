import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import ErrorNotifi from './components/ErrorNotifi'

const App = () => {

    
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')
    const [ errorMessage, setErrorMessage] = useState(null)
    const [ infoMessage, setInfoMessage] = useState(null)

    //load data from server
    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])

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
        let id = -1
        if(persons.some(({name}) => newName === name)){
            // eslint-disable-next-line no-undef
            if(!window.confirm(`Number for ${newName} already exists, do you want to replace it?`)){
                return
            }
            id = persons.find(({name}) => newName === name).id
            const newPers = persons.find(n => n.id === id)
            const changePers = {...newPers, number: newNumber}
            personService
                .create(changePers, id)
                .then(newPers => {
                    setPersons(persons.filter(n => n.id !== id).concat(newPers))
                    setInfoMessage(`Changed number for ${newPers.name} to ${newPers.number}`)
                    setNewName('')
                    setNewNumber('')
                    setTimeout(() => {
                        setInfoMessage(null)}, 2000
                    )
                })
                .catch(error => {
                    setErrorMessage(error.response.data.error)
                    setTimeout(() => {
                        setErrorMessage(null)}, 5000
                    )
                    return
                })
            
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }

        personService
            .create(personObject, id)
            .then((response) => {
                setPersons(persons.concat(response))
                setInfoMessage(`Added ${newName}`)
                setNewName('')
                setNewNumber('')
                setTimeout(() => {
                    setInfoMessage(null)}, 2000
                )
            })
            .catch(error => {
                setErrorMessage(error.response.data.error)
                setTimeout(() => {
                    setErrorMessage(null)}, 5000
                )
            })
        
    }
    
    const delPerson = (id) => {
        const name = persons.find(n => n.id === id).name
        // eslint-disable-next-line no-undef
        if(!window.confirm(`Do you really want to remove ${name}?`)){
            return
        }
        personService
            .delet(id)
            .then(() =>{
                setPersons(persons.filter(n => n.id !== id))
            })
            .catch(() => {
                setErrorMessage(`Could not remove person with id ${id}`)
                setTimeout(() => setErrorMessage(null), 2000)
            })
    }

  
    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={infoMessage}/>
            <ErrorNotifi message={errorMessage}/>

            <Filter 
                handleFilterChange={handleFilterChange} 
                newFilter={newFilter}
            />

            <h3>Add a new</h3>

            <PersonForm 
                addPerson={addPerson}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newName={newName}
                newNumber={newNumber}
            />

            <h3>Numbers</h3>

            <Persons 
                persons={persons} 
                newFilter={newFilter}
                delPerson={delPerson}
            />

        </div>
    )
  
}
  
export default App