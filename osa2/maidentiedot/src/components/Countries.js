import React from 'react'
import Country from './Country'
import CountryBut from './CountryBut'

const Countries = ({countries}) => {

    if(countries.length > 10){
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if(countries.length === 1){
        return(
            <div>
                <Country country={countries[0]}/>
            </div>
        )
    }

    return(
        <div>
            {countries.map((country) =>
            <CountryBut country={country}/>
            )}
        </div>
    )
}

export default Countries