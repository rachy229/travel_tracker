import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingArray = useSelector(store => store.lodging);
    // console.log('lodgingArray in TripDashboard',lodgingArray);

    const hikesArray = useSelector(store => store.hike);
    // console.log('hikesArray in TripDashboard', hikesArray);

    const flightsArray = useSelector(store => store.flight);
    // console.log('flightsArray in TripDashboard', flightsArray);

    const otherArray = useSelector(store => store.other);

    const tripId = useSelector(store => store.trip.tripId);
    console.log('tripId in TripDashboard', tripId);

    //DELETE HANDLE CLICKS
    const handleLodgingDelete = (id) => {
        // console.log('id in handleLodgingDelete', id)
        dispatch({type: 'DELETE_LODGING', payload: id})
    }

    const handleHikeDelete = (id) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_HIKE', payload: id})
    }

    const handleFlightDelete = (id) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_FLIGHT', payload: id})
    }

    const handleOtherDelete = (id) => {
        dispatch({type: 'DELETE_OTHER', payload: id})
    }


    //EDIT HANDLE CLICKS
    const handleLodgingEdit = (id) => {
        console.log('id in handleEdit', id)
        // dispatch({type: 'GET_THIS_LODGING', payload: id})
        dispatch({type: 'THIS_LODGING_ID', payload: id})
        history.push('/edit-lodging')
    }
    const handleHikeEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
    }

    const handleFlightEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
    }

    const handleOtherEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
    }

    const handleAddNewClick = (tripId) => {
        history.push(`/new`)
    }

    useEffect(() => {
        dispatch({ type: 'GET_LODGING', payload: tripId})
        dispatch({type: 'GET_HIKES', payload: tripId})
        dispatch({type: 'GET_FLIGHTS', payload: tripId})
        dispatch({type: 'GET_OTHER', payload: tripId})
    }, [])

    return(
        <div>
            <button onClick={() => history.push('/trips')}>Back</button>
            <h1>This is the dashboard!!</h1>

            <button onClick={handleAddNewClick}>Add Something New!</button>
            <div className="nav">
            <Link className="navLink" to="/user">
                Hikes
            </Link>
            </div>

            {lodgingArray.map(lodgingItem => (
                <div key={lodgingItem.id}>
                    <h4>Date: {lodgingItem.date}</h4>
                    <h4>Place: {lodgingItem.place}</h4>
                    <h4>Details: {lodgingItem.details}</h4>
                    <button onClick={() => handleLodgingEdit(lodgingItem.id)}>Edit</button>
                    <button onClick={() => handleLodgingDelete(lodgingItem.id)}>Delete</button>
                </div>
                )
            )}

            {hikesArray.map(hike => (
                <div key={hike.id}>
                    <h4>Date: {hike.date}</h4>
                    <h4>Place: {hike.place}</h4>
                    <h4>Details: {hike.details}</h4>
                    <button onClick={() => handleHikeEdit(hike.id)}>Edit</button>
                    <button onClick={() => handleHikeDelete(hike.id)}>Delete</button>
                </div>
                )
            )}

                {flightsArray.map(flight => (
                <div key={flight.id}>
                    <h4>Date: {flight.date}</h4>
                    <h4>Airline: {flight.airline}</h4>
                    <h4>Arrival Time: {flight.arrival_time}</h4>
                    <h4>Departure Time: {flight.departure_time}</h4>
                    <h4>Flight Number: {flight.flight_number}</h4>
                    <button onClick={() => handleFlightEdit(flight.id)}>Edit</button>
                    <button onClick={() => handleFlightDelete(flight.id)}>Delete</button>
                </div>
                )
            )}

            {otherArray.map(other => (
                <div key={other.id}>
                    <h4>Date: {other.date}</h4>
                    <h4>Place: {other.place}</h4>
                    <h4>Details: {other.details}</h4>
                    <button onClick={() => handleOtherEdit(other.id)}>Edit</button>
                    <button onClick={() => handleOtherDelete(other.id)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default TripDashboard;