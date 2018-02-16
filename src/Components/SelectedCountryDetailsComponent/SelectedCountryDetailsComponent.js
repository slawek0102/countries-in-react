import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './SelectedCountryDetailsComponent.css';

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
            // return (<Paper style={style} zdepth={5} key={border}>{border}</Paper>)


            return (
                    <RaisedButton key = {border} label= {border} />
            )
        })}

    </div>)
}


