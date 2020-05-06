import React from 'react'
import Person from './Person'

const Persons = ({persons, newFilter, delPerson}) => {


    return(
        <div>
            {persons
            .filter(({name}) => name.toLowerCase().includes(newFilter))
            .map((person) =>
                <Person 
                key={person.name} 
                person={person}
                delPerson={()=> delPerson(person.id)}
                />
            )}
        </div>
    )

}

export default Persons;