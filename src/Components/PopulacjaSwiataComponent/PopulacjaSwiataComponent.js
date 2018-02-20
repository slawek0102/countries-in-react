import React from 'react';
import Paper from 'material-ui/Paper';

import './PopulacjaSwiatComponent.css';

export const PopulacjaSwiataComponent = (props) => {

    const {countries} = props;

    return (
        <div>
            {countries.map((country) => {
                return (<Paper className='b-paper' zDepth={3}>
                    <div className='b-country'>{country.name}</div>
                    <div> {formatCountryPopulation(country.population)}</div>
                </Paper>)
            })}
        </div>
    )
};


let formatCountryPopulation = (population) =>{

    let licznik = 1;

      const reversedStringPopulationArray = population.toString().split("").reverse();

       return reversedStringPopulationArray.map((digit)=>{
           if (licznik >3){
               licznik =2;
               return digit + ' ';
           } else {
               licznik ++;
               return digit
           }
      }).reverse()
};