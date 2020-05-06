import React from 'react'

const Search = ({handleSearchSet, handleSearchChange, search}) => {
    return(
        <div>
            find countries
            <form onSubmit={handleSearchSet}>
                <input
                  value={search}
                  onChange={handleSearchChange}
                />
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default Search