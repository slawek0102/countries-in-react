import React from 'react';
import './SelectedCountryDetailsComponent.css';

export const SelectedCountryDetailsComponent = (props) => (
    <div className='country-details'>
      <h3>Name: {props.details.name}</h3>
      <div>Capital: {props.details.capital}</div>
        {props.details.borders.map((border)=>{

            return (<div>{border}</div>)

        })}
    </div>
);




