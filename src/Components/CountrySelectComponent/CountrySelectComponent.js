import React from 'react';

export const CountrySelectComponent = (props) => (
    <div>
        <select  onChange={props.changedSelectOption}>
            {props.countries.map((country)=>{
                return (
                    <option  value={country.alpha3Code} key={country.alpha3Code} >{country.name}</option>
                )
            })}
        </select>
    </div>
);


