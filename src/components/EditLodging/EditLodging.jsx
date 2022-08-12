import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import TripHeader from '../TripHeader/TripHeader';

function EditLodging() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingToEdit = useSelector(store => store.lodging.lodgingToEdit);
    const thisTrip = useSelector(store => store.trip.thisTrip);

    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_LODGING_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('lodgingToEdit in handleSubmit', lodgingToEdit)

        axios.put(`/api/lodging/${lodgingToEdit.id}`, lodgingToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_LODGING_CLEAR' });

            history.push(`/lodging-dashboard/${lodgingToEdit.id}`); // back to other dashboard
        })
        .catch(error => {
            console.log('error in EditLodging handleSubmit: ', error);
        })
    }


    return(
        <div>
            
            {/* go back to the flight dashboard for this specific trip */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push(`/lodging-dashboard/${lodgingToEdit.id}}`)}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Edit Lodging!</Typography>

            <Box sx={{background: "#FDF6C3", p:4}} >
                <form onSubmit={handleSubmit}>
                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" placeholder="date" value={lodgingToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Place:</InputLabel>
                        <Input placeholder="place" value={lodgingToEdit.place} onChange={(event) => handleChange(event, 'place')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Latitude:</InputLabel>
                        <Input placeholder="latitude" value={lodgingToEdit.latitude} onChange={(event) => handleChange(event, 'latitude')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Longitude:</InputLabel>
                        <Input placeholder="longitude" value={lodgingToEdit.longitude} onChange={(event) => handleChange(event, 'longitude')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Details:</InputLabel>
                        <Input placeholder="details" value={lodgingToEdit.details} onChange={(event) => handleChange(event, 'details')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                    </Box>

                </form>
            </Box>
        </div>
    )
}

export default EditLodging;