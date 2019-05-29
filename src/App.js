import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNav from './Components/AppNav';

import Home from './Routes/Home';
import Establishments from './Routes/Establishments';
import Specials from './Routes/Specials';
import Admin from './Routes/Admin';

import './Styles/App.scss';

function App() {
    return (
        <div className="App">
            <div className="App-background"></div>
            <Router>
                <div className="App-background"></div>
                <AppNav />
                <Route path="/" exact component={Home} />
                <Route path="/establishments/" component={Establishments} />
                <Route path="/specials/" component={Specials} />
<<<<<<< HEAD
                <Route path="/admin/" component={Admin} />
=======
>>>>>>> 463339f053096eee3934477b4730c48bb5adc348
            </Router>
        </div>
    );
}

export default App;
