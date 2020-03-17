import React from 'react'

import ReactMapboxGl from 'react-mapbox-gl';
import { REACT_APP_MAPBOX_SECRET_KEY } from '../../env';
import MapFeature from './Feature';

const center = [-73.985197, 40.758888]; // Times Square

const Map = ReactMapboxGl({
    accessToken: REACT_APP_MAPBOX_SECRET_KEY
})

export default function MapView() {
    const layout = {
        'icon-image': 'marker',
    };
    return (
        <Map
            style="mapbox://styles/nikarc/ck7taghyp1pfe1jmolj0mmxfd"
            center={center}
            zoom={[15]}
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}>
            <MapFeature layout={layout} coordinates={center} />
        </Map>
    )
}
