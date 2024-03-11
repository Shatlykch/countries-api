import {useState} from "react";

function Home ( { countries } ) { 
    const [search, setSearch] = useState("")
    const [filteredCountries, setFilteredCountries] = useState( [] )
    
    function handleClick () {
        const countriesFound = countries.filter( ( country ) => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        } )
        
        setFilteredCountries(countriesFound)
    }

    return (
        <div className="home-h1">
            <h1
                className='home'>WELCOME TO COUNTRY APP!
            </h1>
            <input className="search-input"
                type='text'
                placeholder='Please type country name'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                <button onClick={handleClick} className="search-button">Search</button>
            </div>
            <div>
                {filteredCountries.map( ( country ) => (
                    <div className="search">
                        <h1>{country.name}</h1>
                        <img src={country.flag} alt={country.name} />
                        <p>Capital: {country.capital}</p>
                        <p>Region: {country.region}</p>
                        <p>Language: {country.language}</p>
                        <p>Flag Icon: {country.flagIcon}</p>
                        <p>Currency: {country.currency}</p>
                        <p>Population: {country.population}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
