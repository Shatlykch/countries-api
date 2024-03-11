import { useState, useEffect } from 'react';
import { getCountry, deleteCountry } from '../services/countries.js';
import { Link, useParams, useNavigate } from 'react-router-dom';

function CountryDetail() {
    const [country, setCountry] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    const fetchCountry = async () => {
        const oneCountry = await getCountry(id);
        setCountry(oneCountry);
    };

    useEffect(() => {
        fetchCountry();
    }, []);

    const handleDelete = async () => {
        await deleteCountry(id);
        navigate('/');
    };

    return (
        <div>
            {country.name && (
                <div>
                    <h1>{country.name}</h1>
                    <img src={country.flag} alt={country.name} />
                    <p>Capital: {country.capital}</p>
                    <p>Region: {country.region}</p>
                    <p>Language: {country.language}</p>
                    <p>Flag Icon: {country.flagIcon}</p>
                    <p>Currency: {country.currency}</p>
                    <p>Population: {country.population}</p>
                  
                    <div>
                        <Link to={`/countries/${id}/edit`}>
                            <button>EDIT</button>
                        </Link>
                        <button onClick={handleDelete}>DELETE</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CountryDetail;
