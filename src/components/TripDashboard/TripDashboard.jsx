import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

//MUI Imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//imported components
import './TripDashboard.css';

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    //info for selected trip, used for header
    const thisTrip = useSelector(store => store.trip.thisTrip);
    // console.log('thisTrip in TripDashboard', thisTrip);

    const tripId = useSelector(store => store.trip.tripId);

    // info of logged in user, used to conditonally render edit and delete buttons
    const user = useSelector(store => store.user);
    // console.log('user in tripdashboard', user);

    return(
        <div>

        <Box>
                {user.clearance === 2 ? (
            
                    // If the user is an admin, show them the "Add New Trip Button"
                        <Box>
                            <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>

                            <Button sx={{background: "#2E4057", m: 2}} variant="contained" onClick={() => history.push('/new')}>Add Something New!</Button>
                        </Box>

                    ) : (

                        <Box>
                            <Button sx={{background: "#6F1A07", marginBottom:1, marginLeft:1}} variant="contained" onClick={() => history.push('/trips')}>Back</Button>
                        </Box>
                    )
                }
                
                <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
                <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>
            </Box>


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

    )
}

export default TripDashboard;