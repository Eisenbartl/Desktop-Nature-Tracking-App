import GoogleMapReact from 'google-map-react';
import React from 'react'
const Axios = require('axios');

const Map = ({ center, zoom }) => {

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys='AIzaSyDM2JgDRLD1jmwcNf-GVAwEEdixjsdYuFQ'
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;