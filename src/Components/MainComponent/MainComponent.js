import React, {Component} from 'react';
import Button from 'material-ui/Button';

import './MainComponent.css'

import {CountryDetailsComponent} from "../CountryDetailsComponent/CountryDetailsComponent";
import {CountrySelectComponent} from '../CountrySelectComponent/CountrySelectComponent'
import {CountryBordersComponent} from '../CountryBordersComponent/CountryBordersComponent'
import {getDataFromAPI} from '../../utils/getDataFromAPI'

import {allCountriesHTTPAddress} from '../../ApplicationConstants/ApplicationConstants'


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
        const temp_alpha3Code = e.target.value;
        const countryDetails = this.findCountryDetails(temp_alpha3Code);


    };


    findCountryDetails = (alpha3Code) => {
        const allCountries = this.state.allCountries;
        // let name = '';
        // let capital = '';
        // let alpha3CodeBorders = [];
        // let longNameBorders = [];

        //Dane dot. wybranego Kraju
        const selectedCountry = allCountries.find(country => country.alpha3Code === alpha3Code);


        // .filter
        // alpha3CodeBorders.forEach((alpha3CodeBorder) => {
        //     allCountries.map((country) => {
        //         if (country.alpha3Code === alpha3CodeBorder) {
        //             longNameBorders.push(country.name)
        //         }
        //     })
        // });

        let borders = [];
        borders = allCountries.filter((country)=>{

            return country.name ===
        });

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
                <CountrySelectComponent countries={allCountries} changedSelectOption={this.changedSelectOption}/>
                <CountryDetailsComponent details={this.state}/>
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
