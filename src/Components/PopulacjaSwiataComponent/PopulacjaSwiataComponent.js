import React from 'react';

import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {getDataFromAPI} from '../../utils/getDataFromAPI'

import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


import './PopulacjaSwiatComponent.css';


export const PopulacjaSwiataComponent = (props) => {
    const {countries, sliderValue, handleSlider, radioButtonGroupOnChange, radioButtonValue, approvePopulationButton, populationOnInputText, population} = props;


    return (
        <Tabs>
            <Tab label="Total Population">
                <div>
                    <Paper className='b-paper b-country' zDepth={3}>
                        Total: {formatPopulation(totalPopulation(countries))}
                    </Paper>
                </div>
            </Tab>
            <Tab label="Population by Countries">
                <div className='textField'>
                    <TextField hintText='Enter population'
                               onChange={populationOnInputText}/>
                </div>
                <div className='aprovePopulationButton'>
                    <RaisedButton label="Approve" primary={true} onClick={approvePopulationButton}/>
                </div>
                <div>
                    {countries.filter(country => country.population > population * 0.7 && country.population < population * 1.3
                    ).map((country) => {
                        return (
                            <Paper className='b-paper' zDepth={3} key={country.name}>
                                <div className='b-country'><span><img src={country.flag} alt=""/></span>{country.name}</div>
                                <div>Population: {formatPopulation(country.population)}</div>
                            </Paper>
                        )
                    })}
                </div>
            </Tab>
            <Tab label="Countries & number of borders">
                <div>
                    <p>Wyszukiwana liczba granic {sliderValue} i wiecej.</p>

                    <Slider
                        min={0}
                        max={15}
                        step={1}
                        value={sliderValue}
                        onChange={handleSlider}
                        className='b-slider'
                    />

                    <p>Hemispheres</p>
                    <RadioButtonGroup className='Hemispheres' name="Hemispheres" defaultSelected="both"
                                      onChange={(e) => radioButtonGroupOnChange(e)}>

                        <RadioButton
                            className="Hemispheres__RadioButton"
                            value="both"
                            label="Both"
                        />
                        <RadioButton
                            className="Hemispheres__RadioButton"
                            value="north"
                            label="North"
                        />
                        <RadioButton
                            className="Hemispheres__RadioButton"
                            value="south"
                            label="South"
                        />
                    </RadioButtonGroup>


                    <div>
                        {
                            countries.filter((country) =>
                                country.borders.length >= sliderValue && country
                            ).filter((country) => {
                                switch (radioButtonValue) {
                                    case 'both':
                                        return country;
                                    case 'north':
                                        return country.latlng[0] >= 0;
                                    case 'south':
                                        return country.latlng[0] < 0;
                                }
                            }).map((country) => {
                                return (
                                    <Paper className='b-paper' zDepth={3} key={country.name}>
                                        <div className='b-country'>{country.name}</div>
                                        <div>Population: {formatPopulation(country.population)}</div>
                                    </Paper>
                                )
                            })
                        }
                    </div>
                </div>
            </Tab>
        </Tabs>
    )
};


const formatPopulation = (population) => {
    let counter = 0;

    const reversedStringPopulationArray = population.toString().split("").reverse();

    return reversedStringPopulationArray.map((digit) => {
        counter++;
        if (counter > 3) {
            counter = 1;
            return digit + ' ';
        } else {
            return digit
        }
    }).reverse()
};

const totalPopulation = (countries) => {
    return countries.reduce((a, country) => {
        return a + country.population;
    }, 0)
};


