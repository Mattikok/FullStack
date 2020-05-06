import React from 'react'

const Person = ({person, delPerson})=>{
    return(
    <p>{person.name} {person.number} <button onClick={delPerson}>delete</button> </p>)
}

export default Person