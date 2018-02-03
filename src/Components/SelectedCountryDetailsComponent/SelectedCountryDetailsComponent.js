import React from 'react';
import './SelectedCountryDetailsComponent.css';

export const SelectedCountryDetailsComponent = (props) => (
    <div className='country-details'>
      <h3>Name: {props.details.name}</h3>
      <div>Capital: {props.details.capital}</div>
      <div>Country Code: {props.details.alpha3Code}</div>
    </div>
);




