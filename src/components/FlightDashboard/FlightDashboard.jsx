import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import TripDashboard from "../TripDashboard/TripDashboard";

function FlightDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const flightsArray = useSelector(store => store.flight.flightReducer);
    const user = useSelector(store => store.user);


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

            {flightsArray.map((flight) => 
                
                // user.clearance === 2 ? (

                <div key={flight.id}>
                        <Card sx={{ maxWidth: 345, m:2, background: "#BB4711" }} >

                            <Typography sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "5px solid #FF9D0A"}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                                {flight.pretty_date}
                            </Typography>

                            <CardContent sx={{background: "#FDF6C3"}}>
                                <Box sx={{borderRadius: 1, background: "#7ebea5", marginLeft: 2, marginRight: 2}} >
                                    <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center">
                                        {flight.airline}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" align="center">
                                        {flight.flight_number}
                                    </Typography>
                                </Box>

                                <CardContent sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "8px double #FE5F55"}}>
                                    <Typography variant="body2" color="text.primary" align="center">
                                        Departure:  {flight.put_departure}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" align="center">
                                    Arrival:  {flight.put_arrival}
                                    </Typography>
                                </CardContent>
                            </CardContent>

                        {user.clearance === 2 ? (
                            <div align="center">
                                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => handleFlightEdit(flight)}>Edit</Button>
                                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => handleFlightDelete(flight.id, tripId)}>Delete</Button>
                            </div>
                        ) : (
                            <Box sx={{p: 2}}/>
                        )}


                        </Card>
                    </div>

                )}
        </div>
    )
}

export default FlightDashboard;