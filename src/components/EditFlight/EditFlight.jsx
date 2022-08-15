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

function EditFlight() {

    const dispatch = useDispatch();
    const history = useHistory();

    // selected flight from the store
    const flightToEdit = useSelector(store => store.flight.flightToEdit);
    console.log('flightToEdit', flightToEdit);

    // selected trip from the store
    const thisTrip = useSelector(store => store.trip.thisTrip);


    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_FLIGHT_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    // updating the specific flight based on id
    const handleSubmit = (event) => {
        event.preventDefault;
        // console.log('flightToEdit in handleSubmit', flightToEdit)

        axios.put(`/api/flight/${flightToEdit.id}`, flightToEdit) 
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_FLIGHT_CLEAR' });

            history.push(`/flight-dashboard/${flightToEdit.id}`); // back to flight dashboard
        })
        .catch(error => {
            console.log('error in EditFlight handleSubmit: ', error);
        })
    }

    return(
        <div>
            {/* go back to the flight dashboard for this specific trip */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained"  onClick={() => history.push(`/flight-dashboard/${flightToEdit.id}}`)}>Back</Button>

            {/* Name and dates of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Edit Flight!</Typography>

            <Box sx={{background: "#FDF6C3", p:4}}>
                <form onSubmit={handleSubmit}>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" placeholder="date" value={flightToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Airline:</InputLabel>
                        <Input placeholder="Airline" value={flightToEdit.airline} onChange={(event) => handleChange(event, 'airline')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Departure Time:</InputLabel>
                        <Input type="time" value={flightToEdit.put_departure} onChange={(event) => handleChange(event, 'put_departure')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Arrival Time:</InputLabel>
                        <Input type="time" value={flightToEdit.put_arrival} onChange={(event) => handleChange(event, 'put_arrival')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Flight Number:</InputLabel>
                        <Input placeholder="Flight Number" value={flightToEdit.flight_number} onChange={(event) => handleChange(event, 'flight_number')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <Button sx={{background: "#2E4057", m:2}} variant="contained"  type='submit' >Submit</Button>
                    </Box>

                </form>
            </Box>
        </div>
    )
}

export default EditFlight;