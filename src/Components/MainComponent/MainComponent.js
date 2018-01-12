// https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/


import React, {Component} from 'react';
import axios from 'axios';

import './MainComponent.css'
import {InputComponent} from '../InputComponent/InputComponent'
import {CountryComponent} from "../CountryComponent/CountryComponent";
import {CountryDetailsComponent} from "../CountryDetailsComponent/CountryDetailsComponent";


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

        if (event.target.value.length >= 0) {
            axios.get(country)
                .then(function (response) {
                    let {data: chosenCountries} = response;
                    return chosenCountries
                }).then((chosenCountries) => {
                    //Czy aby na pewno musze tworzyc nowy obiekt? Nie wystarczy setState((countries: chosenCountries)}?
                    let newCountries = [...this.state.countries];
                        newCountries = chosenCountries;
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
                {this.state.countries.map((country)=>{
                    return <CountryComponent country = {country} key={country.alpha3Code}/>
                })}

                {this.state.countries.length===1 ? <CountryDetailsComponent country={this.state.countries[0]} /> : null}

            </div>
        );
    }
}

