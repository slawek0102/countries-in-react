import React from 'react';

import './CountryComponent.css';

export const CountryComponent = (props) => (
    <div className='country'>
        {props.country.name}
    </div>
);


