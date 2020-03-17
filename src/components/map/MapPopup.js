import React, { Component } from 'react';
import { Popup } from 'react-mapbox-gl';

export default class MapPopup extends Component {
    render() {
        const { coords, show, children } = this.props;
        const style = {
            display: !show ? 'none' : ''
        };
        return (
            <Popup
                style={style}
                offset={{ bottom: [0, -15] }}
                coordinates={coords || [0,0]}>
                {children}
            </Popup>
        );
    }
}
