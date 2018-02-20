import React from 'react';
import Paper from 'material-ui/Paper';

import './PopulacjaSwiatComponent.css';

export const PopulacjaSwiataComponent = (props) => {

    const {countries} = props;

    return (
        <div>
            <Paper className='b-paper b-country' zDepth={3}>
                Total: {formatPopulation(totalPopulation(countries))}
            </Paper>

            {countries.map((country) => {
                return (
                    <Paper className='b-paper' zDepth={3} key = {country.name}>
                        <div className='b-country'>{country.name}</div>
                        <div>Population: {formatPopulation(country.population)}</div>
                    </Paper>
                )
            })}
        </div>
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