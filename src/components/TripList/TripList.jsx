import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';

function TripList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripArray = useSelector(store => store.trip.tripReducer);
    console.log('tripArray', tripArray);

    const handleDelete = (id) => {
        dispatch({type: 'DELETE_TRIP', payload: id})
    }

    const handleTripClick = (trip) => {
        console.log('trip in handleTripClick', trip)
        history.push(`/dashboard/${trip.id}`)
        dispatch({type: 'SET_TRIP_ID', payload: trip.id})
        dispatch({type: 'SELECT_TRIP', payload: trip})
    }

    useEffect(() => {
        dispatch({type: 'GET_TRIPS'});
    }, [])

    return(
        <div>
            <h1>Trips!</h1>
            <button onClick={() => history.push('/new-trip')}>Create A New Trip</button>


                {tripArray.map(trip => (
                    <div key={trip.id} onClick={() => handleTripClick(trip)}>
                        <h2>{trip.location}</h2> 
                        <h4>{trip.start} - {trip.end}</h4>
                        <button onClick={() => handleDelete(trip.id)}>Delete</button>
                    </div>
                    )
                )}
        </div>
    )
}

export default TripList;