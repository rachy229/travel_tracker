import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TripDashboard from "../TripDashboard/TripDashboard";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import userReducer from "../../redux/reducers/user.reducer";

function HikeDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const hikesArray = useSelector(store => store.hike.hikesArray);
    console.log('hikesArray in TripDashboard', hikesArray);

    const tripId = useSelector(store => store.trip.tripId);

    const user = useSelector(store => store.user);
    console.log('user', user);

    const handleHikeDelete = (id, tripId) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_HIKE', payload: {id, tripId}})
    }

    const handleHikeEdit = (hike) => {
        dispatch({type: 'SET_EDIT_HIKE', payload: hike})
        
        history.push('/edit-hike')
        console.log('clearance', user.clearance);
    }

    useEffect(() => {
        dispatch({type: 'GET_HIKES', payload: tripId})
    }, [])

    return(
        <div>

                        <TripDashboard />
                {hikesArray.map(hike => (
                    <div key={hike.id}>
                        <Card sx={{ maxWidth: 345, m:2, background: "#BB4711"}} >

                            <Typography sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "5px solid #FF9D0A"}} fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                                {hike.pretty_date}
                            </Typography>
                        <CardContent sx={{background: "#FDF6C3"}} >
                        <Box  sx={{m:2, borderRadius: 1, background: "#BBDDD6"}} >
                            <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" >
                                {hike.place}
                            </Typography>
                        </Box>
                            <Typography sx={{borderRadius:2, m:2, p:2, background: "#FDF6C3", border: "2px solid #BBDDD6"}} variant="body2" color="text.primary" align="left" marginLeft={4}>
                                {hike.details}
                            </Typography>
                        </CardContent>

                            {user.clearance === 2 ? (
                            <div align="center">
                                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => handleHikeEdit(hike)}>Edit</Button>
                                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => handleHikeDelete(hike.id, tripId)}>Delete</Button>
                            </div>
                            ) : (
                                <Box sx={{p: 2}}/>
                            )}
                        </Card>
                    </div>
                    )
                )}
        </div>
    )
}

export default HikeDashboard;