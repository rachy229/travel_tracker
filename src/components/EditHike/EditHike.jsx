import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// MUI Imports
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function EditHike() {

    const dispatch = useDispatch();
    const history = useHistory();

    // selected hike from store
    const hikeToEdit = useSelector(store => store.hike.hikeToEdit);
    console.log('hikeToEdit', hikeToEdit);

    // selected trip from store
    // used for headings
    const thisTrip = useSelector(store => store.trip.thisTrip);


    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_HIKE_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    // updating this hike in the database, based on id
    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('hikeToEdit in handleSubmit', hikeToEdit)

        axios.put(`/api/hike/${hikeToEdit.id}`, hikeToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_HIKE_CLEAR' });

            history.push(`/hike-dashboard/${hikeToEdit.id}`); // back to hike dashboard
        })
        .catch(error => {
            console.log('error in EditHike handleSubmit: ', error);
        })
    }

    return(
        <div>
            
            {/* go back to the flight dashboard for this specific trip */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push(`/hike-dashboard/${hikeToEdit.id}}`)}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5' >Edit Hike!</Typography>

            <Box sx={{background: "#FDF6C3", p:4}} >
                <form onSubmit={handleSubmit}>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" placeholder="date" value={hikeToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Place:</InputLabel>
                        <Input placeholder="place" value={hikeToEdit.place} onChange={(event) => handleChange(event, 'place')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Details:</InputLabel>
                        <Input value={hikeToEdit.details} onChange={(event) => handleChange(event, 'details')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                    </Box>

                </form>
            </Box>
        </div>
    )
}

export default EditHike;