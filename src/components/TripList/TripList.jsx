import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';

function TripList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripArray = useSelector(store => store.trip);
    console.log('tripArray', tripArray);

    const handleDelete = (id) => {
        dispatch({type: 'DELETE_TRIP', payload: id})
    }

    const handleTripClick = (id) => {
        console.log('trip id in handleTripClick', id)
    }

    useEffect(() => {
        dispatch({type: 'GET_TRIPS'});
    }, [])

    return(
        <div>
            <h1>Trips!</h1>
            <button onClick={() => history.push('/new-trip')}>Create A New Trip</button>


                {tripArray.map(trip => (
                    <div key={trip.id} onClick={() => handleTripClick(trip.id)}>
                        <h2>{trip.location}</h2> 
                        <h4>{trip.start_date} - {trip.end_date}</h4>
                        <button onClick={() => handleDelete(trip.id)}>Delete</button>
                    </div>
                    )
                )}
        </div>
    )
}

export default TripList;