import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TripHeader from "../TripHeader/TripHeader";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const thisTrip = useSelector(store => store.trip.thisTrip);
    console.log('thisTrip in TripDashboard', thisTrip);

    const tripId = useSelector(store => store.trip.tripId);

    return(
        <div>

            <TripHeader />

            <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

            <Button sx={{background: pink[400], m:2}} variant="contained" onClick={() => history.push('/new')}>Add Something New!</Button>

            <div className="nav">
                <Link className="navLink" to="/hike-dashboard/:id">
                    Hikes
                </Link>

                <Link className="navLink" to="/flight-dashboard/:id">
                    Flights
                </Link>

                <Link className="navLink" to="/lodging-dashboard/:id">
                    Lodging
                </Link>

                <Link className="navLink" to="/other-dashboard/:id">
                    Other
                </Link>
            </div>

        </div>

    )
}

export default TripDashboard;