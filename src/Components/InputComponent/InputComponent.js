import React from 'react';

import './InputComponentCSS.css';

export const InputComponent = (props) => (
    <div>
        <input type="text" placeholder='Enter the Country Name' onChange={props.changeCountryHandler}/>
    </div>
);


