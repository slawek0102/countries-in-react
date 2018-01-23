import React from 'react';

import './CountryDetailsComponent.css';

export const CountryDetailsComponent = (props) => (
    <div className='country-details'>
      <div>Name: {props.details.name}</div>
      <div>Capital: {props.details.capital}</div>
      <div>Country Code: {props.details.alpha3Code}</div>
    </div>
);


