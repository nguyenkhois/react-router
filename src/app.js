import React from 'react';

import Menu from './menu';
import Main from './main';

/* --- You can using this code too --
const App = () => (
    <div>
        <Menu/>
        <Main/>
    </div>
);

export default App;
*/

export default class App extends React.Component{
    //Do stuff
    
    //Render
    render(){
        return(
            <div>
                <h1>Simple React-Router example</h1>
                <Menu/>
                <Main/>
            </div>
        );
    }
};
