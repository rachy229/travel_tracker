import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

// imported components
import './TripForm.css';

function TripForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    
    //input local states
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [place, setPlace] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({type: 'POST_TRIP', payload: {startDate, endDate, place}});

        history.push(`/trips`)
        
        //clear inputs
        setStartDate('');
        setEndDate('');
        setPlace('');
    }

    const fillData = () => {
        setStartDate('2022-09-18');
        setEndDate('2022-10-03');
        setPlace('Utah');
    }

    return(
        <div>
            <Box >
                {/* go back to the trip list */}
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

                <Typography onClick={fillData} sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'> Add A New Trip!</Typography>
            </Box>

        <form onSubmit={handleSubmit}>
            <Box sx={{background: "#FDF6C3", p:4}} >
                <Box sx={{marginLeft: 2}}>
                    <Box sx={{marginTop: 4}}>
                        <InputLabel >Start Date:</InputLabel>
                        <Input className='form-input' type="date" placeholder="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                    </Box>
                    
                    <Box sx={{marginTop: 4}}>
                        <InputLabel >End Date:</InputLabel> 
                        <Input className='form-input' type="date" placeholder="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                    </Box>

                    <Box sx={{marginTop: 4}}>
                        <InputLabel >Place:</InputLabel>
                        <Input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />
                    </Box>
                    </Box>

                <Box sx={{marginTop: 4}}>
                    <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                </Box>
            </Box>

        </form>
</div>
    )
}

export default TripForm;