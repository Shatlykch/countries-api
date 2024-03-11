import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountry, editCountry } from '../services/countries.js';


function CountryEdit () {
    const [country, setCountry] = useState({
        name: "",
        capital: "",
        region: "",
        language: "",
        flagIcon: "",
        currency: "",
        population: 0,
        flag: "",
    });

    let { id } = useParams();
    let navigate = useNavigate();

    async function fetchCountry () {
        const oneCountry = await getCountry( id )
        setCountry( oneCountry )
    };

    useEffect( () => {
        fetchCountry()
    }, [] )

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        await editCountry( id, country );
        navigate( `/countries/${id}` );

    }

        const handleChange = ( e ) => {
            const { name, value } = e.target;
        
            setCountry( ( prevCountry ) => ( {
                ...prevCountry, [name]: value,
            
            } ) );
        }
    
        return (
            <div>
                <h1>Add a Country in our Database!</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Please add your country name'
                        name='name'
                        value={country.name}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add capital city'
                        name='capital'
                        value={country.capital}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add region'
                        name='region'
                        value={country.region}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add language'
                        name='language'
                        value={country.language}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add Flag Icon'
                        name='flagIcon'
                        value={country.flagIcon}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add currency'
                        name='currency'
                        value={country.currency}
                        onChange={handleChange}
                    />

                    <input
                        type='number'
                        placeholder='Please add population'
                        name='population'
                        value={country.population}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Please add flag'
                        name='flag'
                        value={country.flag}
                        onChange={handleChange}
                    />

                    <button type='submit'>Edit Country!</button>
                </form>
            </div>
        )
    }

export default CountryEdit;


