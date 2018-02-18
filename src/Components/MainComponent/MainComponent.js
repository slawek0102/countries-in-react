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

    handleUpdateInput = (value) => {
        const {allCountries} = this.state;

        const selectedCountry = allCountries.find(country => country.name === value);
        if (selectedCountry != null) {
            const selectedCountryBorders = allCountries.filter((country) =>
                selectedCountry.borders.find(border => border === country.alpha3Code)
            ).map(country => country.name);

            this.setState({
                selectedCountry: {
                    ...this.state.selectedCountry,
                    name: selectedCountry.name,
                    capital: selectedCountry.capital,
                    borders: selectedCountryBorders,
                    latlng: selectedCountry.latlng
                }
            })
        }
    };


    detailsToDisplay = () => {
        return (
            <div>
                <Paper className='paper'>
                    <SelectedCountryDetailsComponent details={this.state.selectedCountry}/>
                </Paper>

                <Paper className='paper'>
                    <GoogleMapComponent isMarkerShown latlng={this.state.selectedCountry.latlng}/>
                </Paper>
            </div>
        )
    };


    render() {
        const {allCountries} = this.state;
        return (
            <div>
                <Paper className='paper'>
                    <SelectCountryComponent countries={allCountries}
                                            handleUpdateInput={this.handleUpdateInput}
                    />
                </Paper>

                {this.state.selectedCountry.name ? this.detailsToDisplay() :null}

            </div>
        );

    }
}





