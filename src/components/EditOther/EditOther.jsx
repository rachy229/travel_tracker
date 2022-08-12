import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TripHeader from '../TripHeader/TripHeader';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function EditOther() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherToEdit = useSelector(store => store.other.otherToEdit);
    console.log('otherToEdit', otherToEdit);

    const thisTrip = useSelector(store => store.trip.thisTrip);

    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_OTHER_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('otherToEdit in handleSubmit', otherToEdit)

        axios.put(`/api/other/${otherToEdit.id}`, otherToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_OTHER_CLEAR' });

            history.push(`/other-dashboard/${otherToEdit.id}`); // back to other dashboard
        })
        .catch(error => {
            console.log('error in EditOther handleSubmit: ', error);
        })
    }

    return(
        <div>
            
            {/* go back to the flight dashboard for this specific trip */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push(`/other-dashboard/${otherToEdit.id}}`)}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>


            <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Edit Other!</Typography>

            <Box sx={{background: "#FDF6C3", p:4}}>
                <form onSubmit={handleSubmit}>
                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" placeholder="date" value={otherToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Place:</InputLabel>
                        <Input placeholder="Other" value={otherToEdit.place} onChange={(event) => handleChange(event, 'place')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Details:</InputLabel>
                        <Input value={otherToEdit.details} onChange={(event) => handleChange(event, 'details')} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <Button type='submit' >Submit</Button>
                    </Box>
                </form>
            </Box>
    </div>
    )
}

export default EditOther;