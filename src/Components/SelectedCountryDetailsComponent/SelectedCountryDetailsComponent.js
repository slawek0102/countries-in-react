import React from 'react';
import Paper from 'material-ui/Paper';

import './SelectedCountryDetailsComponent.css';
import {GoogleMapComponent} from '../GoogleMapComponent/GoogleMapComponent'

const style = {
    height: 50,
    width: 300,
    paddingTop: 25,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 'normal'
};


export const SelectedCountryDetailsComponent = (props) => {
    return (<div>
        <Paper>
            <p>Name: {props.details.name}</p>
            <p>Capital: {props.details.capital}</p>
        </Paper>

        {props.details.borders.map((border) => {
            return (<Paper style={style} zDepth={5} key={border}>{border}</Paper>)
        })}

        <GoogleMapComponent isMarkerShown/>

    </div>)
}


