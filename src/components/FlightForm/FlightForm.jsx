import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function FlightForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    // id for the selected trip, sets the foreign key of the new flight
    const tripId = useSelector(store => store.trip.tripId);
    // info for the selected trip, used for the heading
    const thisTrip = useSelector(store => store.trip.thisTrip);

    //input local states
    const [date, setDate] = useState('');
    const [airline, setAirline] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival]= useState('');
    const [flightNum, setFlightNum] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('departure in handleSubmit', departure);
        console.log('arrival in handleSubmit', arrival);

        dispatch({type: 'POST_FLIGHT', payload: {date, airline, departure, arrival, flightNum, tripId}});

        //send back to the dashboard
        history.push(`/flight-dashboard/:id`)
        
        //clear inputs
        setDate('');
        setAirline('');
        setDeparture('');
        setArrival('');
        setFlightNum('');
    }

    //used during presentation to prefill form.
    const fillData = () => {
        setDate('2022-09-18');
        setAirline('Spirit');
        setDeparture('07:00');
        setArrival('08:26');
        setFlightNum('S224');
    }

    return(
        <div>
            {/* <TripHeader /> */}
            
            {/* go back to the add new item page */}
            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/new')}>Back</Button>

            {/* Date and place of current trip */}
            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

        {/* onClick used to prefill data during presentation */}
        <Typography onClick={fillData} sx={{background: "#FF9D0A", p: 2}} align='center' variant='h5'>Add A New Flight!</Typography>
        <Box sx={{background: "#FDF6C3", p:4}}>
            <form onSubmit={handleSubmit}>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Date:</InputLabel>
                    <Input type="date" placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Airline:</InputLabel>
                    <Input placeholder="Airline" value={airline} onChange={(event) => setAirline(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Departure Time:</InputLabel>
                    <Input type="time" value={departure} onChange={(event) => setDeparture(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Arrival Time:</InputLabel>
                    <Input type="time" value={arrival} onChange={(event) => setArrival(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <InputLabel>Flight Number:</InputLabel>
                    <Input placeholder="Flight Number" value={flightNum} onChange={(event) => setFlightNum(event.target.value)} />
                </Box>

                <Box sx={{marginTop: 4}}>
                    <Button sx={{background: "#2E4057", m:2}} variant="contained" type='submit' >Submit</Button>
                </Box>

            </form>
        </Box>
    </div>
    )

}

export default FlightForm;