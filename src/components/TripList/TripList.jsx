import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

function TripList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripArray = useSelector(store => store.trip.tripReducer);
    console.log('tripArray', tripArray);
    const user = useSelector(store => store.user);
    console.log('clearance', user.clearance)

    const handleDelete = (trip) => {
        let result = confirm(`Delete your trip to ${trip.location}?`)
            if (result) {
                dispatch({type: 'DELETE_TRIP', payload: trip.id})
                // history.push('/trips')
            }
    }

    const handleEdit = (trip) => {
        dispatch({type: 'SET_EDIT_TRIP', payload: trip})
        
        history.push(`/edit-trip`)
    }

    const handleTripClick = (trip) => {
        console.log('trip in handleTripClick', trip)

        history.push(`/dashboard/${trip.id}`)

        dispatch({type: 'SET_TRIP_ID', payload: trip.id})
        dispatch({type: 'SELECT_TRIP', payload: trip})
    }

    useEffect(() => {
        dispatch({type: 'GET_TRIPS'});
    }, [])

    // const handleNewTrip = () => {
    //     history.push('/new-trip')
    // }


    return(
        <div>
            <h1>Trips!</h1>
            {user.clearance === 2 ?(
            <div onClick={() => history.push('/new-trip')}>
            <Button sx={{background: orange[700], m:2}} variant="contained" >Create A New Trip</Button>
            </div>
            ) : (
                <></>
            )}


                {/* {tripArray.map(trip => (
                    <div key={trip.id} >
                        <div onClick={() => handleTripClick(trip)}>
                            <h2>{trip.location}</h2> 
                            <h4>{trip.start} - {trip.end}</h4>
                        </div>
                        <button type="delete" onClick={() => handleDelete(trip)}>Delete</button>
                        <button onClick={() => handleEdit(trip)}>Edit</button>
                    </div>
                    )
                )} */}

                {tripArray.map((trip) => 

                // user.clearance === 2 ? (

                    <div key={trip.id} >
                        <Card sx={{ maxWidth: 345, m:2, background: lime[700] }} >

                        <div onClick={() => handleTripClick(trip)}>
                            <Typography sx={{borderRadius:2, m:2, p:2, background: amber[300]}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                                {trip.location}
                            </Typography>
                            <CardContent sx={{background: lime[100]}} >
                            <Typography sx={{borderRadius:2, m:2, p:2, background: amber[50]}} fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                                {trip.start} - {trip.end}
                            </Typography>
                            </CardContent>
                        </div>

                        {user.clearance === 2 ? (

                            <div align="center">
                                <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => handleEdit(trip)}>Edit</Button>
                                <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => handleDelete(trip)}>Delete</Button>
                            </div>
                        ) : (
                            <></>
                        )}
                        </Card>
                    </div>

				// ) : (

                //     <div key={trip.id} >
                //     <Card sx={{ maxWidth: 345, m:2, background: lime[300] }} >

                //     <div onClick={() => handleTripClick(trip)}>
                //         <Typography fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                //             {trip.location}
                //         </Typography>
                //         <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                //             {trip.start} - {trip.end}
                //         </Typography>
                //     </div>
                //     </Card>
                //     </div>
                // )
    )}
        </div>
    )
}

export default TripList;