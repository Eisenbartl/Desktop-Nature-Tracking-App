import React from 'react';
import SideMenu from './SideMenu';
import Map from './Map';

const Axios = require('axios');

const App = () => {
    const getMap = () => {
        Axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            .then(res => console.log(res.data.events))
            .catch(err => console.log(err))
    }
    getMap()

        return (
            <div>
                <SideMenu />
                <Map />
            </div>
        )
}

export default App;