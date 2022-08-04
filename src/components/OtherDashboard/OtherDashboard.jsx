import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { pink, red, lime, amber } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import TripDashboard from "../TripDashboard/TripDashboard";

function OtherDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherArray = useSelector(store => store.other);

    const tripId = useSelector(store => store.trip.tripId);


    const handleOtherDelete = (id, tripId) => {
        dispatch({type: 'DELETE_OTHER', payload: {id, tripId}})
    }

    const handleOtherEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
    }


        useEffect(() => {
        dispatch({type: 'GET_OTHER', payload: tripId})
    }, [])

    const CustomizedButton = styled(Button)`
    color: ##eeff41;

    :hover {
        color: ##c6ff00;
    }
    `;
    return(
        <div>

            <TripDashboard />

            <Card sx={{ maxWidth: 345, m:2, background: pink[500] }} >
                {otherArray.map(other => (
                    <div key={other.id}>
                        <Typography variant="body1" color="text.primary" align="center">
                            Date: {other.pretty_date}
                        </Typography>
                        <Typography variant="body1" color="text.primary" align="center">
                            Place: {other.place}
                        </Typography>
                        <Typography variant="body1" color="text.primary" align="center">
                            Details: {other.details}
                        </Typography>

                        <Button variant="constrained" onClick={() => handleOtherEdit(other.id)}>Edit</Button>

                        <Button variant="contained" onClick={() => handleOtherDelete(other.id, tripId)}>Delete</Button>
                    </div>
                    )
                )}
            </Card>
        </div>
    )
}

export default OtherDashboard;