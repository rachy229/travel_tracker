import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";

function FlightDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const flightsArray = useSelector(store => store.flight.flightReducer);

    const tripId = useSelector(store => store.trip.tripId);


    const handleFlightDelete = (id, tripId) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_FLIGHT', payload: {id, tripId}})
    }

    const handleFlightEdit = (flight) => {
        dispatch({type: 'SET_EDIT_FLIGHT', payload: flight})
        
        history.push('/edit-flight')
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
                    <h4>Arrival Time: {flight.put_arrival}</h4>
                    <h4>Departure Time: {flight.put_departure}</h4>
                    <h4>Flight Number: {flight.flight_number}</h4>
                    <button onClick={() => handleFlightEdit(flight)}>Edit</button>
                    <button onClick={() => handleFlightDelete(flight.id, tripId)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default FlightDashboard;