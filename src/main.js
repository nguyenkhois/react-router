import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Products from './products';
import About from './about';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/about' component={About}/>
        </Switch>
    </div>
);

export default Main;