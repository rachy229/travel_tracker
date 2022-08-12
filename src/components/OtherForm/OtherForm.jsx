import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TripHeader from '../TripHeader/TripHeader';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function OtherForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);
    const thisTrip = useSelector(store => store.trip.thisTrip);

    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({type: 'POST_OTHER', payload: {date, place, details, tripId}});

        //send back to the dashboard
        history.push(`/other-dashboard/:id`)
        
        //clear inputs
        setDate('');
        setPlace('');
        setDetails('');
    }

    return(
        <div>
            {/* <TripHeader /> */}

            {/* go back to the add new item page */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/new')}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

        <Typography sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Add Something Else!</Typography>
        <Box sx={{background: "#FDF6C3", p:4}}>
            <form onSubmit={handleSubmit}>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Date:</InputLabel>
                    <Input type="date" placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Place:</InputLabel>
                    <Input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Details:</InputLabel>
                    <Input placeholder="details" value={details} onChange={(event) => setDetails(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                </Box>
            </form>
        </Box>
    </div>
    )

}

export default OtherForm;