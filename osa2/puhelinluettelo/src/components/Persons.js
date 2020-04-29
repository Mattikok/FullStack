import React from 'react'
import Person from './Person'

const Persons = ({persons, newFilter}) => {


    return(
        <div>
            {persons
            .filter(({name}) => name.toLowerCase().includes(newFilter))
            .map((person) =>
                <Person key={person.name} person={person}/>
            )}
        </div>
    )

}

export default Persons;