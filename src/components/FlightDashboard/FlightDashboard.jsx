import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";

function FlightDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const flightsArray = useSelector(store => store.flight);

    const tripId = useSelector(store => store.trip.tripId);


    const handleFlightDelete = (id) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_FLIGHT', payload: id})
    }

    const handleFlightEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
    }

    useEffect(() => {
        dispatch({type: 'GET_FLIGHTS', payload: tripId})
    }, [])

    return(
        <div>
            <TripDashboard />

            {flightsArray.map(flight => (
                <div key={flight.id}>
                    <h4>Date: {flight.pretty_date}</h4>
                    <h4>Airline: {flight.airline}</h4>
                    <h4>Arrival Time: {flight.arrival_time}</h4>
                    <h4>Departure Time: {flight.departure_time}</h4>
                    <h4>Flight Number: {flight.flight_number}</h4>
                    <button onClick={() => handleFlightEdit(flight.id)}>Edit</button>
                    <button onClick={() => handleFlightDelete(flight.id)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default FlightDashboard;