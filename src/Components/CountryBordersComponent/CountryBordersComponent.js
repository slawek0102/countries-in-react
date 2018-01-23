import React from 'react';

// import './CountryDetailsComponent.css';

export const CountryBordersComponent = (props) => (
    <div className='country-details'>
        {console.log(props)}
        <div>Country Borders: {props.border}</div>
    </div>
);


