import React from 'react';

import './SelectCountryComponent.css'

export const SelectCountryComponent = (props) => (
    <div>
        <select onChange={props.changedSelectOption}>
            {props.countries.map((country)=>{
                return (
                    <option  value={country.alpha3Code} key={country.alpha3Code} >{country.name}</option>
                )
            })}
        </select>
    </div>
);
