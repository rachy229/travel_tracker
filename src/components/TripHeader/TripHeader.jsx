import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

import './TripHeader.css'

function TripHeader() {

    const thisTrip = useSelector(store => store.trip.thisTrip);

    return(
        <>
        <Box sx={{p:1, background: "#FF9D0A"}} />
        <Box sx={{p: 2, background: "#FDF6C3"}} >
            <Typography variant="h4" align="center" >Trip to {thisTrip.location}</Typography>
            <Typography sx={{m: 2}} align="center" >{thisTrip.start} - {thisTrip.end}</Typography>
        </Box>
        <Box sx={{p:1, background: "#FE5F55"}} />
        </>
    )
}

export default TripHeader;