import React from 'react';
import { Link } from 'react-router-dom';

function CountryIcon({ country }) {
    return (
        <Link to={`/countries/${country._id}`}>
            <div className='country-card'>
                <img className='country-flag' src={country.flag} alt={country.name} />
                <div className='country-name'>{country.name}</div>
            </div>
        </Link>
    );
}

export default CountryIcon;
