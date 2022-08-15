import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//Mapbox import
import mapboxgl from '!mapbox-gl'; 

//MUI imports
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';


function Map(lodgingItem) {

    const history = useHistory();


    const lodgingArray = useSelector(store => store.lodging.lodgingArray);

    //selected lodging item
    const thisLodging = useSelector(store => store.lodging.thisLodging);
    // console.log(thisLodging)

    //selected trip, used for headings
    const thisTrip = useSelector(store => store.trip.thisTrip);





    mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaHkyMjkiLCJhIjoiY2w2NTYwb3F5MnhuYjNjbzEyam84MzkzcCJ9.uLkhGXRBZOcb2rzrggZePQ';

    // setting default values for map
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

            <Box >
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push(`/lodging-dashboard/${thisLodging.id}`)}>Back</Button>
            </Box>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Card sx={{m: 2, background: "#BB4711"}}>


                <Typography sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "5px solid #FF9D0A"}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                    {thisLodging.pretty_date}
                </Typography>





                <CardMedia sx={{background: "#FDF6C3", p:2, m: 2}}>
                    <Box sx={{background: "#BBDDD6", borderRadius:1, m: 2}}>
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