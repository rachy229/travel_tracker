import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import mapboxgl from '!mapbox-gl'; 
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';

import TripHeader from '../TripHeader/TripHeader';
import TripDashboard from '../TripDashboard/TripDashboard';




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
        <>

            <Box sx={{ background: "#b74c22"}} >
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push(`/lodging-dashboard/${thisLodging.id}`)}>Back</Button>
            </Box>

            <TripHeader />

            <Box sx={{p: 2, background: "#6F1A07"}}>
            </Box>

            <Card sx={{m: 2, background: "#BB4711"}}>


                <Typography sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "5px solid #FF9D0A"}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                    {thisLodging.pretty_date}
                </Typography>





                <CardMedia sx={{background: "#FDF6C3", p:2, m: 2}}>
            <Box sx={{background: "#7ebea5", borderRadius:1, m: 2}}>
            <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                    {thisLodging.place}
                </Typography>
                </Box>

                    {/* lat and lng bar */}
                    <div className="sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>

                    <div>
                        <div ref={mapContainer} className="map-container" />
                    </div>
                </CardMedia>

            </Card>
            </>
    );
}

export default Map;