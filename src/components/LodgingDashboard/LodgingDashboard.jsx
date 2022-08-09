import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import mapboxgl from '!mapbox-gl'; 

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import TripDashboard from "../TripDashboard/TripDashboard";
import LodgingItem from "../LodgingItem/LodgingItem";


function LodgingDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingArray = useSelector(store => store.lodging.lodgingArray);

    const tripId = useSelector(store => store.trip.tripId);
    console.log('trip id in LodgingDashboard', tripId)

    const lodgingToEdit = useSelector(store => store.lodging.lodgingToEdit);

    const user = useSelector(store => store.user);

    const handleLodgingDelete = (id, tripId) => {
        console.log('tripId in handleLodgingDelete', tripId);
        dispatch({type: 'DELETE_LODGING', payload: {id, tripId}});
    }

    const handleLodgingEdit = (lodging) => {
        dispatch({type: 'SET_EDIT_LODGING', payload: lodging});
        
        history.push('/edit-lodging');
    }

        useEffect(() => {
        dispatch({ type: 'GET_LODGING', payload: tripId});
    }, [])

    const handleMapClick = (lodging) => {
        dispatch({type: 'SET_THIS_LODGING', payload: lodging});

        history.push('/map')
    }


    return(
        <div>

            <TripDashboard />

                {lodgingArray.map(lodgingItem => (
                    <div key={lodgingItem.id}>
                        <Card sx={{ maxWidth: 345, m:2, background: lime[700] }} >

                            <Typography sx={{borderRadius:2, m:2, p:2, background: amber[300]}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                                {lodgingItem.pretty_date}
                            </Typography>
                            <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                                {lodgingItem.place}
                            </Typography>


                            <CardMedia sx={{p:2, background: lime[300]}} align="center" >
                            <img onClick={() => handleMapClick(lodgingItem)} src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-l+ff00ae(${lodgingItem.longitude},${Number(lodgingItem.latitude)})/${Number(lodgingItem.longitude)},${Number(lodgingItem.latitude)},9.04,0/300x200?access_token=pk.eyJ1IjoicmFjaHkyMjkiLCJhIjoiY2w2NTYwb3F5MnhuYjNjbzEyam84MzkzcCJ9.uLkhGXRBZOcb2rzrggZePQ`} />
                            </CardMedia>

                            <Typography sx={{borderRadius:2, m:2, p:2, background: amber[50]}} variant="body2" color="text.primary" align="left" marginLeft={4}>
                                {lodgingItem.details}
                            </Typography>

                            {user.clearance === 2 ? (
                                <div align="center">
                                    <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => handleLodgingEdit(lodgingItem)}>Edit</Button>
                                    <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => handleLodgingDelete(lodgingItem.id, tripId)}>Delete</Button>
                                </div>
                            ) : (
                                <></>
                            )}
                        </Card>
                    </div>  
                    // <LodgingItem lodgingItem={lodgingItem} />
                    )
                )}
        </div>
    )
}
export default LodgingDashboard;