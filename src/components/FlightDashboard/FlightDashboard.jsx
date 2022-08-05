import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import TripDashboard from "../TripDashboard/TripDashboard";

function FlightDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const flightsArray = useSelector(store => store.flight.flightReducer);

    const tripId = useSelector(store => store.trip.tripId);


    const handleFlightDelete = (id, tripId) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_FLIGHT', payload: {id, tripId}})
    }

    const handleFlightEdit = (flight) => {
        dispatch({type: 'SET_EDIT_FLIGHT', payload: flight})
        
        history.push('/edit-flight')
    }

    useEffect(() => {
        dispatch({type: 'GET_FLIGHTS', payload: tripId})
    }, [])

    return(
        <div>
            <TripDashboard />


                    {/* <h4>Date: {flight.pretty_date}</h4>
                    <h4>Airline: {flight.airline}</h4>
                    <h4>Arrival Time: {flight.put_arrival}</h4>
                    <h4>Departure Time: {flight.put_departure}</h4>
                    <h4>Flight Number: {flight.flight_number}</h4>
                    <button onClick={() => handleFlightEdit(flight)}>Edit</button>
                    <button onClick={() => handleFlightDelete(flight.id, tripId)}>Delete</button>
                </div>
                )
            )} */}

            {flightsArray.map(flight => (
                <div key={flight.id}>
                        <Card sx={{ maxWidth: 345, m:2, background: lime[300] }} >

                            <Typography fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                                {flight.pretty_date}
                            </Typography>
                            <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                                {flight.airline}
                            </Typography>
                            <Typography variant="body2" color="text.primary" align="center">
                                Departure:  {flight.put_departure}
                            </Typography>
                            <Typography variant="body2" color="text.primary" align="center">
                            Arrival:  {flight.put_arrival}
                            </Typography>
                            <Typography variant="body2" color="text.primary" align="left" marginLeft={4}>
                                {flight.flight_number}
                            </Typography>

                            <div align="center">
                                <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => handleHikeEdit(hike)}>Edit</Button>
                                <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => handleHikeDelete(hike.id, tripId)}>Delete</Button>
                            </div>
                        </Card>
                    </div>
                    )
                )}
        </div>
    )
}

export default FlightDashboard;