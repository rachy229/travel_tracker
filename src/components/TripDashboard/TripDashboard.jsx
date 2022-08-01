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
            {lodgingArray.map(lodgingItem => (
                <div key={lodgingItem.id}>
                    <h4>Date: {lodgingItem.date}</h4>
                    <h4>Place: {lodgingItem.place}</h4>
                    <h4>Details: {lodgingItem.details}</h4>
                </div>

            )

            )}
        </div>
    )
}

export default TripDashboard;