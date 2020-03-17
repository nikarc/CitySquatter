import React, { Component } from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import MapPopup from './MapPopup';

export default class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showPopup: false
        };
    }

    _onClick () {
        this.setState((state) => ({ showPopup: !state.showPopup }));
    }

    render () {
        const {
            type,
            layout,
            coordinates
        } = this.props;

        const {
            showPopup,
        } = this.state;

        return (
            <div>
                <Layer
                    type={type || 'symbol'}
                    layout={layout || { "icon-image": "harbor-15" }}>
                    <Feature
                        coordinates={coordinates || [0,0]}
                        onClick={this._onClick.bind(this)}/>
                </Layer>
                <MapPopup
                    show={showPopup}
                    coords={coordinates}>
                    <p><em>this is a popup</em></p>
                </MapPopup>
            </div>
        )
    }
}
