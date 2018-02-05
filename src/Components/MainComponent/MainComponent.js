import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import './MainComponent.css'

import {SelectedCountryDetailsComponent} from "../SelectedCountryDetailsComponent/SelectedCountryDetailsComponent";
import {SelectCountryComponent} from '../SelectCountryComponent/SelectCountryComponent'
import {getDataFromAPI} from '../../utils/getDataFromAPI'

import {allCountriesHTTPAddress} from '../../const/const';

export class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCountries: [],
            selectedCountry: {
                name: '',
                capital: '',
                alpha3Code: '',
                borders: []
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
        return (
            <div>

                <Paper className='paper'>
                    <SelectCountryComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>
                </Paper>

                <Paper className='paper'>
                    <SelectedCountryDetailsComponent details={this.state.selectedCountry}/>
                </Paper>



            </div>
        );

    }
}
