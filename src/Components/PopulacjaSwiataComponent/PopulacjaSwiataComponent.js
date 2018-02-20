import React from 'react';
import Paper from 'material-ui/Paper';

import './PopulacjaSwiatComponent.css';

export const PopulacjaSwiataComponent = (props) => {

    const {countries} = props;

    return (
        <div>
            {countries.map((country)=>{
                return (<Paper className='b-paper' zDepth={2}>{country.name} Population {country.population}</Paper>)
            })}
        </div>
    )
};
