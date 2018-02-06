import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import './MainComponent.css'

import {SelectedCountryDetailsComponent} from "../SelectedCountryDetailsComponent/SelectedCountryDetailsComponent";
import {SelectCountryComponent} from '../SelectCountryComponent/SelectCountryComponent'
import {getDataFromAPI} from '../../utils/getDataFromAPI'
import {GoogleMapComponent} from '../GoogleMapComponent/GoogleMapComponent'

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
                borders: [],
                latlng: [-30, -30]
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
                borders: selectedCountryBorders,
                latlng: selectedCountry.latlng
            }
        })
    };


    render() {
        console.log(this.state.selectedCountry.latlng)
        const {allCountries} = this.state;
        return (
            <div>
                <Paper className='paper'>
                    <SelectCountryComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>
                </Paper>

                <Paper className='paper'>
                    <SelectedCountryDetailsComponent details={this.state.selectedCountry}/>
                </Paper>

                <Paper className='paper'>
                    <GoogleMapComponent isMarkerShown lat={this.state.selectedCountry.latlng[0]}
                                        lng={this.state.selectedCountry.latlng[1]}/>
                </Paper>
            </div>
        );

    }
}
