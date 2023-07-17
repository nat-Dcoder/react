import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';

class App extends React.Component{
    render(){
        return(
            <div className='container'>
                <Header homeLink="Home"/>
            </div>
        )
    }
}
render(<App />, document.getElementById('root'));
