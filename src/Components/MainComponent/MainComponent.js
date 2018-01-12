import React, {Component} from 'react';
import axios from 'axios';

import './MainComponent.css'
import {InputComponent} from '../InputComponent/InputComponent'


export class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.state = {
            countries: ['Poland']
        }
    }


    changeCountryHandler = (event) => {



        let country = 'https://restcountries.eu/rest/v2/name/' + event.target.value;

        if (event.target.value.length >= 2) {

            axios.get(country)
                .then(function (response) {
                    let {data: chosenCountries} = response;
                    return chosenCountries
                }).then((chosenCountries)=>{
                let newCountries = this.state.countries.concat(chosenCountries);

                this.setState({
                    countries: newCountries
                }, function () {
                    console.log(this.state)
                });
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <div>
                <InputComponent changeCountryHandler={this.changeCountryHandler}/>
                <div>Wpisz np Poland, Germany, etc...</div>
            </div>
        );
    }
}

