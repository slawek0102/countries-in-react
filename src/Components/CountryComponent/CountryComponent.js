import React from 'react';

import './CountryComponent.css';

export const CountryComponent = (props) => (
    <div className='country'>
        <div>{props.country.name}</div>
    </div>
);


