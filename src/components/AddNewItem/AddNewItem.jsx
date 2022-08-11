import { useHistory } from "react-router-dom"
import TripHeader from "../TripHeader/TripHeader";

import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pink, red, lime, amber, orange } from '@mui/material/colors';

function AddNewItem() {

    const history = useHistory();

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
            
            <Box sx={{background: "#b74c22"}}>
                <Button sx={{background: "#6F1A07", m:2}} variant="contained" onClick={() => history.push('/dashboard/:id')}>Back</Button>
            </Box>
            <TripHeader />

            <Typography align="center" variant="h5" >Add Something!</Typography>

            <Box sx={{p:2, m:2}}>
                <Button sx={{background: orange[700], m:1}} variant="contained" onClick={goToHike}>Hike</Button>
                <Button sx={{background: orange[700], m:1}} variant="contained" onClick={goToLodging}>Lodging</Button>
                <Button sx={{background: orange[700], m:1}} variant="contained" onClick={goToFlight}>Flight</Button>
                <Button sx={{background: orange[700], m:1}} variant="contained" onClick={goToOther}>Other</Button>
            </Box>
        </div>
    )
}

export default AddNewItem;