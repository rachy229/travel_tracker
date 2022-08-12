import { useHistory } from "react-router-dom"
import TripHeader from "../TripHeader/TripHeader";

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';
import { useSelector } from "react-redux";

function AddNewItem() {

    const history = useHistory();

    const thisTrip = useSelector(store => store.trip.thisTrip);

    const goToHike = () => {
        history.push('/hike');
    }

    const goToLodging = () => {
        history.push('/lodging')
    }

    const goToFlight = () => {
        history.push('/flight');
    }

    const goToOther = () => {
        history.push('/other');
    }
    return(

        <div>
            
            <Box>
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/dashboard/:id')}>Back</Button>
            </Box>
            {/* <TripHeader /> */}

            <Typography sx={{marginTop:1}} variant="h6" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 1}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>

            <Typography sx={{background: "#FF9D0A", p: 2}} align="center" variant="h5" >Add Something!</Typography>

            <Box sx={{p:2, background: "#FDF6C3"}}>
                <Button sx={{background: "#2E4057", m:1}} variant="contained" onClick={goToHike}>Hike</Button>
                <Button sx={{background: "#2E4057", m:1}} variant="contained" onClick={goToLodging}>Lodging</Button>
                <Button sx={{background: "#2E4057", m:1}} variant="contained" onClick={goToFlight}>Flight</Button>
                <Button sx={{background: "#2E4057", m:1}} variant="contained" onClick={goToOther}>Other</Button>
            </Box>
        </div>
    )
}

export default AddNewItem;