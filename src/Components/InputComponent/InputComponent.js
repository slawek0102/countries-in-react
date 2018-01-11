import React from 'react';

import './InputComponentCSS.css';

export const InputComponent = (props) => (
    <div>
        <input type="text" onChange={props.changeCountryHandler}/>
    </div>
);


