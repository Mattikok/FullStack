import React from 'react'

const Flag = ({country}) => {

    const source = country.flag
    return(
        <img src={source} alt={`failed to load ${country.name} flag`} width="300" height="200"/>
    )
}

export default Flag
