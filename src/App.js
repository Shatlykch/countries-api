import NavBar from './components/NavBar.jsx';
import Home from './screens/Home.jsx'
import Countries from './screens/Countries.jsx';
import CountryDetail from './screens/CountryDetail.jsx';
import CountryCreate from './screens/CountryCreate.jsx';
import CountryEdit from './screens/CountryEdit.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountries } from './services/countries.js';
import './App.css';

function App () {
    const [countries, setCountries] = useState([])
  
    async function fetchCountries () {
        const allCountries = await getCountries()
        setCountries( allCountries )
    }
        
    useEffect( () => {
        fetchCountries()
    }, [] )
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home countries={countries}/>} />
        <Route path='/countries' element={<Countries countries={countries} />}/>
        <Route path="/countries/:id" element={<CountryDetail />} />
        <Route path="/add-country" element={<CountryCreate />} />
        <Route path='/countries/:id/edit' element={ <CountryEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;