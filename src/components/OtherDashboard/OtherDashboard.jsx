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

function OtherDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherArray = useSelector(store => store.other.otherArray);

    const tripId = useSelector(store => store.trip.tripId);

    const user = useSelector(store => store.user);


    const handleOtherDelete = (id, tripId) => {
        dispatch({type: 'DELETE_OTHER', payload: {id, tripId}})
    }

    const handleOtherEdit = (other) => {
        dispatch({type: 'SET_EDIT_OTHER', payload: other})
        
        history.push('/edit-other')
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


                {otherArray.map(other => (
                    <div key={other.id}>
            <Card sx={{ maxWidth: 345, m:2, background: lime[300] }} >
                        <Typography fontWeight={'bold'} variant="body1" color="text.primary" align="center" marginTop={1}>
                            {other.pretty_date}
                        </Typography>
                        <Typography fontWeight={'medium'} variant="body1" color="text.primary" align="center" margin={2}>
                            {other.place}
                        </Typography>
                        <Typography variant="body2" color="text.primary" align="left" marginLeft={4}>
                            {other.details}
                        </Typography>

                        {user.clearance === 2 ? (
                            <div align="center">
                                <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => handleOtherEdit(other)}>Edit</Button>
                                <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => handleOtherDelete(other.id, tripId)}>Delete</Button>
                            </div>
                        ) : (
                            <></>
                        )}
            </Card>

                    </div>
                    )
                )}
        </div>
    )
}

export default OtherDashboard;