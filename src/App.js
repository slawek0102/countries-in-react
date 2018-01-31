import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import {MainComponent} from "./Components/MainComponent/MainComponent";

class App extends Component {

    render() {
        return (
            <div className='App'>
                <MuiThemeProvider>
                    <MainComponent/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
