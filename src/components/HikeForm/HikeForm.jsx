import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TripHeader from '../TripHeader/TripHeader';

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function HikeForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);
    // console.log('tripId in HikeForm', tripId);
    const thisTrip = useSelector(store => store.trip.thisTrip);

    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_HIKE', payload: {date, place, details, tripId}});

        //send back to the dashboard
        history.push(`/hike-dashboard/${tripId}`)
        
        //clear inputs
        setDate('');
        setPlace('');
        setDetails('');
    }

    const fillData = () => {
        setDate('2022-09-19');
        setPlace('Canyonlands National Park');
        setDetails('Syncline Loop trail. 8.3 miles');
    }

    return(
        <div>
            {/* <TripHeader /> */}

            {/* go back to the add new item page */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/new')}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

        <Typography onClick={fillData} sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5' >Add A New Hike!</Typography>
        
        <Box sx={{background: "#FDF6C3", p:4}} >
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

export default HikeForm;