import React, {Component} from 'react';
// import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';

import './MainComponent.css'

import {SelectedCountryDetailsComponent} from "../SelectedCountryDetailsComponent/SelectedCountryDetailsComponent";
import {SelectCountryComponent} from '../SelectCountryComponent/SelectCountryComponent'
import {CountryBordersComponent} from '../CountryBordersComponent/CountryBordersComponent'
import {getDataFromAPI} from '../../utils/getDataFromAPI'

import {allCountriesHTTPAddress} from '../../const/const';


export class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCountries: [],
            name: '',
            capital: '',
            alpha3Code: '',
            borders: []
        }
    }

    componentDidMount = () => {
        getDataFromAPI(allCountriesHTTPAddress).then((data) => {
            this.setState({allCountries: data})
        })
    };

    changedSelectOption = (e) => {
        e.preventDefault();
        const alpha3Code = e.target.value;

            const allCountries = this.state.allCountries;
            const selectedCountry = allCountries.find(country => country.alpha3Code === alpha3Code);


        const borders = allCountries.filter((country) =>
            selectedCountry.borders.find(border => border === country.alpha3Code)
        );

        console.log('Moje granice', borders);

        this.setState(() => {
            return {
                alpha3Code: selectedCountry.alpha3Code,
                name: selectedCountry.name,
                capital: selectedCountry.capital,
                // borders: longNameBorders
            };
        });
    };


    render() {
        const {allCountries} = this.state;
        return (
            <div>
                <SelectCountryComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>

                <SelectedCountryDetailsComponent details={this.state}/>



                {/*{this.state.borders.map((border) => {*/}
                {/*return (*/}
                {/*<div>*/}

                {/*<CountryBordersComponent border={border}/>*/}
                {/*</div>*/}
                {/*)*/}
                {/*})}*/}
            </div>
        );
    }
}
