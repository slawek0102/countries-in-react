import React from 'react';

import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


import './PopulacjaSwiatComponent.css';

export const PopulacjaSwiataComponent = (props) => {

    const {countries, sliderValue, handleSlider} = props;

    console.log("PROPS:", sliderValue)

    return (

        <Tabs>
            <Tab label="Total Population">
                < div>
                    <Paper className='b-paper b-country' zDepth={3}>
                        Total: {formatPopulation(totalPopulation(countries))}
                    </Paper>
                </div>
            </Tab>
            <Tab label="Population by Countries">
                <div>
                    {countries.map((country) => {
                        return (
                            <Paper className='b-paper' zDepth={3} key={country.name}>
                                <div className='b-country'>{country.name}</div>
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

                    <div>

                        {
                            countries.filter((country) => {
                              if (country.borders.length >= sliderValue) {return country}

                            }).map((country) => {
                                console.log(country)
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
    return countries.map(country => country.population)
        .reduce((a, b) => {
            return a + b;
        }, 0)
};