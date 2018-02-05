import React from 'react';
import './SelectedCountryDetailsComponent.css';

export const SelectedCountryDetailsComponent = (props) => (
    <div className='country-details'>
      <h4>Name: {props.details.name}</h4>
      <h4>Capital: {props.details.capital}</h4>

        {props.details.borders.map((border)=>{
            return (<div key={border}>Border: {border}</div>)
        })}
    </div>
);




