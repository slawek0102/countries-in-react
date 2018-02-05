import React from 'react';
import './SelectedCountryDetailsComponent.css';

import Paper from 'material-ui/Paper';


export const SelectedCountryDetailsComponent = (props) => (
    <div>
        {/*<Paper>*/}

            <Paper>
                <p>Name: {props.details.name}</p>
                <p>Capital: {props.details.capital}</p>
            </Paper>

            <Paper>
                {props.details.borders.map((border) => {
                    return (<div key={border}>Border: {border}</div>)
                })}
            </Paper>

        {/*</Paper>*/}
    </div>
);




