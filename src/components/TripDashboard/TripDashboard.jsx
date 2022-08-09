import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TripHeader from "../TripHeader/TripHeader";

import './TripDashboard.css';

import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const thisTrip = useSelector(store => store.trip.thisTrip);
    console.log('thisTrip in TripDashboard', thisTrip);

    const tripId = useSelector(store => store.trip.tripId);

    const user = useSelector(store => store.user);
    console.log('user in tripdashboard', user);

    return(
        <div>


            {user.clearance === 2 ? (
            
            <div>
            <div className="trip-dashboard-buttons">
                <Button sx={{background: lime[600], m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

                <Button sx={{background: lime[600], m:2}} variant="contained" onClick={() => history.push('/new')}>Add Something New!</Button>
            </div>

                <TripHeader />

            <div className="category-nav">
                <Link className="categoryLink" to="/hike-dashboard/:id">
                    Hikes
                </Link>

                <Link className="categoryLink" to="/flight-dashboard/:id">
                    Flights
                </Link>

                <Link className="categoryLink" to="/lodging-dashboard/:id">
                    Lodging
                </Link>

                <Link className="categoryLink" to="/other-dashboard/:id">
                    Other
                </Link>
            </div>
            </div>

            ) : (
                <div>
            <Button sx={{background: orange[700], m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

            <TripHeader />

                <div className="nav">
                <Link className="categoryLink" to="/hike-dashboard/:id">
                    Hikes
                </Link>

                <Link className="categoryLink" to="/flight-dashboard/:id">
                    Flights
                </Link>

                <Link className="categoryLink" to="/lodging-dashboard/:id">
                    Lodging
                </Link>

                <Link className="categoryLink" to="/other-dashboard/:id">
                    Other
                </Link>
            </div>
            </div>
            )
}

        </div>

    )
}

export default TripDashboard;