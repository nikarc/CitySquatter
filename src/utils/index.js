import { ol } from 'react-openlayers';

export const fromLonLat = (val = [0, 0]) => ol.proj.transform(val, 'EPSG:4326', 'EPSG:3857');
