    import React, { useState } from 'react';
import { useSelector } from 'react-redux';
    import { useDispatch } from 'react-redux';
    import { useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';


    import './TripForm.css';

function TripForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);

    //input local states
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [place, setPlace] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_TRIP', payload: {startDate, endDate, place}});

        history.push(`/trips`)
        
        //clear inputs
        setStartDate('');
        setEndDate('');
        setPlace('');
    }

    return(
        <div>
            <Box >
                {/* go back to the trip list */}
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

                <Typography sx={{background: "#FF9D0A"}} align='center' variant='h5'> Add A New Trip!</Typography>
            </Box>

        <form onSubmit={handleSubmit}>
            <Box sx={{background: "#FDF6C3"}} >
                <Box sx={{marginLeft: 2}}>
                    <InputLabel >Start Date:</InputLabel>
                    <Input className='form-input' type="date" placeholder="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />

                    <InputLabel >End Date:</InputLabel> 
                    <Input className='form-input' type="date" placeholder="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />


                    <InputLabel >Place:</InputLabel>
                    <Input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />
                </Box>

                <Box>
                    <Button sx={{background: "#6F1A07", m:2}} variant="contained" type='submit' >Submit</Button>
                </Box>
            </Box>

        </form>
</div>
    )
}

export default TripForm;