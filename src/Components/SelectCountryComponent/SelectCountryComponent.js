import React from 'react';

import './SelectCountryComponent.css'
import AutoComplete from 'material-ui/AutoComplete'

export const SelectCountryComponent = (props) => {

    return (<div>
        <AutoComplete
            // hintText="Country Name"
            floatingLabelText="Country Name"
            dataSource={props.countries.map(country => country.name)}
            // onUpdateInput={this.handleUpdateInput}
        />
    </div>)
};
