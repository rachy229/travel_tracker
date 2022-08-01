import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TripDashboard() {

    const dispatch = useDispatch();

    const lodgingArray = useSelector(store => store.lodging);
    console.log('lodgingArray in TripDashboard',lodgingArray);

    useEffect(() => {
        dispatch({ type: 'GET_LODGING'})
    }, [])

    return(
        <div>
            <h1>This is the dashboard!!</h1>
        </div>
    )
}

export default TripDashboard;