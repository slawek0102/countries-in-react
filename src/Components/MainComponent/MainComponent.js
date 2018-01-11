import React, {Component} from 'react';
import axios from 'axios';

import './MainComponent.css'
import {InputComponent} from '../InputComponent/InputComponent'


export class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.state = {
            countries: []
        }
    }


    changeCountryHandler = (event) => {
        let country = 'https://restcountries.eu/rest/v2/name/' + event.target.value;

        if (event.target.value.length >= 2) {
            axios.get(country)
                .then(function (response) {
                    let {data: chosenCountry} = response;
                    // let newCountries = this.state.countries.concat(response.data);

                    //NIE ROZUMIEM CZEMY PONIZSZY KOD NIE DZIALA ????
                    // this.setState({
                    //     countries: []
                    // }, function () {
                    //     console.log(this.state)
                    // });

                    console.log(chosenCountry)

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>
                <InputComponent changeCountryHandler={this.changeCountryHandler}/>
                <div>Wpisz np Poland, Germany, etc...</div>
            </div>
        );
    }
}

