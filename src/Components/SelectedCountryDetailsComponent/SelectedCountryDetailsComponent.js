import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './SelectedCountryDetailsComponent.css';

export const SelectedCountryDetailsComponent = (props) => {
    return (<div>
        <Paper>
            <p>Name: {props.details.name}</p>
            <p>Capital: {props.details.capital}</p>
        </Paper>

        {props.details.borders.map((border) => {

            console.log('Moje propsy', props)

            return (
                    <RaisedButton
                        key = {border}
                        label= {border}
                        className='b-button_borders'
                        onClick={props.changeCountryButtonClick(border)}
                    />
            )
        })}

    </div>)
}


