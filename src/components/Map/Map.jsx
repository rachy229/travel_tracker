import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import mapboxgl from '!mapbox-gl'; 
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';




function Map(lodgingItem) {

    const lodgingArray = useSelector(store => store.lodging.lodgingArray);

    const thisLodging = useSelector(store => store.lodging.thisLodging);
    console.log(thisLodging)

    const history = useHistory();




mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaHkyMjkiLCJhIjoiY2w2NTYwb3F5MnhuYjNjbzEyam84MzkzcCJ9.uLkhGXRBZOcb2rzrggZePQ';

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(thisLodging.longitude);
const [lat, setLat] = useState(thisLodging.latitude);
const [zoom, setZoom] = useState(9);

// setLat(Number(thisLodging.lat));
// console.log('lat:', lat);

// setLng(Number(thisLodging.lng));
// console.log('lng:', lng);
// const marker = new mapboxgl.Marker({
//     color: ('#eb34cc')

//     })
//     .setLngLat([Number(thisLodging.longitude), Number(thisLodging.latitude)])
//     .addTo(map);

useEffect(() => {

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        })

    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });
        });

    return (
        <Card>

    <Button onClick={() => history.push(`/lodging-dashboard/${thisLodging.id}`)}>Back</Button>


                {/* lat and lng bar */}
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>

            <div>
                <div ref={mapContainer} className="map-container" />
            </div>

        </Card>

    );
}

export default Map;