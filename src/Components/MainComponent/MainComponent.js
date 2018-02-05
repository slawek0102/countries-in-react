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
            selectedCountry: {
                name: 'name',
                capital: 'capital',
                alpha3Code: 'alpha3Code',
                borders: ['borders', 'borders']
            },
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
        const {allCountries} = this.state;

        const selectedCountry = allCountries.find(country => country.alpha3Code === alpha3Code);
        const selectedCountryBorders = allCountries.filter((country) =>
            selectedCountry.borders.find(border => border === country.alpha3Code)
        ).map(country => country.name);

        this.setState({
            selectedCountry: {
                ...this.state.selectedCountry,
                alpha3Code: alpha3Code,
                name: selectedCountry.name,
                capital: selectedCountry.capital,
                borders: selectedCountryBorders
            }
        })
    };


    render() {

        const {allCountries} = this.state;
        console.log('moj state', this.state)
        return (
            <div>
                <SelectCountryComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>

                <SelectedCountryDetailsComponent details={this.state.selectedCountry}/>


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
