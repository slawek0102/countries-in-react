import React from 'react';

import './CountryDetailsComponent.css';

export const CountryDetailsComponent = (props) => (
    <div className='country-details'>
        <div>Capital {props.country.capital} </div>
        <div>Flag {props.country.flag}</div>
        <div>Region {props.country.region}</div>
        <div>Population {props.country.population}</div>

    </div>
);


