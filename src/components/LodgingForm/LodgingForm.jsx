import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TripHeader from '../TripHeader/TripHeader';

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function LodgingForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);
    const thisTrip = useSelector(store => store.trip.thisTrip);


    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_LODGING', payload: {date, place, details, lat, lng, tripId}});

        //send back to the dashboard
        history.push(`/lodging-dashboard/${tripId}`)
        
        //clear inputs
        setDate('');
        setPlace('');
        setLat('');
        setLng('');
        setDetails('');
    }
    
    const fillData = () => {
        setDate('2022-09-19');
        setPlace('Lone Mesa');
        setLat('38.644');
        setLng('-109.82');
        setDetails('dispersed camping outside Moab. Stayed here several times');
    }



    return(
        <div>
            {/* <TripHeader /> */}
            
            {/* go back to the add new item page */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/new')}>Back</Button>

            {/* Date and Place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Typography onClick={fillData} sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Add New Lodging!</Typography>

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
                        <InputLabel>Latitude:</InputLabel>
                        <Input placeholder="latitude" value={lat} onChange={(event) => setLat(event.target.value)} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel>Longitude:</InputLabel>
                        <Input placeholder="longitude" value={lng} onChange={(event) => setLng(event.target.value)} />
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

export default LodgingForm;