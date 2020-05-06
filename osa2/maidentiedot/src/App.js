import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Search from './components/Search'

function App() {
  const [data, setData] = useState([])
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [showCountries, setShowCountries] = useState([])

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  useEffect(() => {axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setData(response.data)
    })}
    ,[])

  const handleSearchSet = (event) => {
    event.preventDefault()
    setCountries(data.filter(({name}) => name.toLowerCase().includes(search)))
  }

  return (
    <div>
      <Search 
      handleSearchSet={handleSearchSet}
      handleSearchChange={handleSearchChange}
      search={search}
      />
      <Countries
      handleSearchSet={handleSearchSet}
      handleSearchChange={handleSearchChange} 
      countries={countries}
      setSearch={setSearch}
      />
    </div>
  )
}

export default App;
