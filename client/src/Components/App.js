import React from 'react';
import SideMenu from './SideMenu';
import Map from './Map';
import { useState } from 'react';

const Axios = require('axios');

const App = () => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getMap = () => {
        // setLoading(true)
        Axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            .then(res => setEventData(res.data.events))
            // .then(() => setLoading(false))
            .catch(err => console.log(err))

            // console.log(eventData)
    }
    getMap()

        return (
            <div className='app-container'>
                <SideMenu />
                <Map eventData={eventData} />
                {/* { !loading ? <Map eventData={eventData} /> : <h1>Loading...</h1> } */}
            </div>
        )
}

export default App;