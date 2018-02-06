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

    const lat = Number(props.details.latlng[0]);
    const lng = Number(props.details.latlng[1])


    return (<div>
        <Paper>
            <p>Name: {props.details.name}</p>
            <p>Capital: {props.details.capital}</p>
            <p>{lat} {lng}</p>
        </Paper>

        {props.details.borders.map((border) => {
            return (<Paper style={style} zdepth={5} key={border}>{border}</Paper>)
        })}

        <GoogleMapComponent isMarkerShown lat ={lat} lng ={lng} />

    </div>)
}


