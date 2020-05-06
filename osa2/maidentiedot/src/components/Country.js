import React from 'react'
import Language from'./Language'
import Flag from './Flag'

const Country = ({country}) => {
    
    return(
        <div>
            <h1>{country.name}</h1>
            <div>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
            </div>
            <h3>languages</h3>
            <ul>
                {country
                .languages
                .map(({name}) => 
                    <Language key={name}name={name}/>
                )}
            </ul>
            <Flag country={country}/>
        </div>
    )
}

export default Country