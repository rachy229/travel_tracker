import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// MUI imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

function EditTrip() {

    const dispatch = useDispatch();
    const history = useHistory();

    // selected trip, from store
    const tripToEdit = useSelector(store => store.trip.tripToEdit);
    // console.log('tripToEdit', tripToEdit);



    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_TRIP_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    // updating this trip, based on id
    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('tripToEdit in handleSubmit', tripToEdit)

        axios.put(`/api/trip/${tripToEdit.id}`, tripToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });

            history.push('/trips'); // back to trip list
        })
        .catch(error => {
            console.log('error in EditTrip handleSubmit: ', error);
        })
    }

    return(
        <div>
            {/* go back to the trip list */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

            <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Edit Trip to {tripToEdit.location}</Typography>
            
            <form onSubmit={handleSubmit}>
                
                <Box sx={{background: "#FDF6C3", p:4}} >

                    <Box sx={{marginLeft: 2}}>
                    <Box sx={{marginTop: 4}}>
                        <InputLabel >Start Date:</InputLabel>
                        <Input type="date" placeholder="date" value={tripToEdit.put_start_date} onChange={(event) => handleChange(event, 'put_start_date')} />
                    </Box>
        
                    <Box sx={{marginTop: 4}}>
                        <InputLabel >End Date:</InputLabel> 
                        <Input type="date" placeholder="date" value={tripToEdit.put_end_date} onChange={(event) => handleChange(event, 'put_end_date')} />
                    </Box>
        
                    <Box sx={{marginTop: 4}}>
                        <InputLabel >Place:</InputLabel>
                        <Input placeholder="place" value={tripToEdit.location} onChange={(event) => handleChange(event, 'location')} />
                    </Box>
        
                    <Box sx={{marginTop: 4}}>
                        <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                    </Box>
                </Box>
                </Box>

            </form>
        </div>
    )
}

export default EditTrip;