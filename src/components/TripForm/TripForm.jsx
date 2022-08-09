    import React, { useState } from 'react';
import { useSelector } from 'react-redux';
    import { useDispatch } from 'react-redux';
    import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
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
            <div className='form-header'>
                {/* go back to the trip list */}
                <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

                <h1 className='form-title'>Add A New Trip!</h1>
            </div>
    <form onSubmit={handleSubmit}>
        <h4>Start Date:</h4>
        <input className='form-input' type="date" placeholder="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />

        <h4>End Date:</h4> 
        <input className='form-input' type="date" placeholder="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />


        <h4>Place:</h4>
        <input size='small' placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />


        <Button sx={{background: orange[700], m:2}} variant="contained" type='submit' >Submit</Button>


    </form>
</div>
    )
}

export default TripForm;