import React, {Component} from 'react';
import axios from 'axios';

import './MainComponent.css'


import {CountryDetailsComponent} from "../CountryDetailsComponent/CountryDetailsComponent";
import {CountrySelectComponent} from '../CountrySelectComponent/CountrySelectComponent'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCountries: [],
            name: 'NameJajo',
            capital: 'CapitalJano',
            alpha3Code: 'Alpha3Jajo',
            borders: []
        }
    }
    componentDidMount = () => {
        axios.get("https://restcountries.eu/rest/v2/all")
        // axios.get("http://localhost:3001/rest/country/all")
            .then((response) => {
                this.setState({
                    allCountries: response.data
                })
            }).catch((error) => {
            console.error(error)
        })
    };

    changedSelectOption = (e) => {
        const temp_alpha3Code = e.target.value;

        const countryDetails = this.findCountryDetails(temp_alpha3Code);

        this.setState(() => {
            return {alpha3Code: temp_alpha3Code};
        });
    };

    findCountryDetails = (alpha3Code)=>{
        console.log('FindCountryDetails',alpha3Code);

    };


    render() {
        const {allCountries} = this.state;
        return (
            <div>
                <CountrySelectComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>
                <CountryDetailsComponent details={this.state}/>
            </div>
        );
    }
}
