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

    const handleDelete = (trip) => {
        let result = confirm(`Delete your trip to ${trip.location}?`)
            if (result) {
                dispatch({type: 'DELETE_TRIP', payload: trip.id})
                // history.push('/trips')
            }
    }

    const handleEdit = (trip) => {
        dispatch({type: 'SET_EDIT_TRIP', payload: trip})
        
        history.push(`/edit-trip`)
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

    // const handleNewTrip = () => {
    //     history.push('/new-trip')
    // }

    return(
        <div>
            <h1>Trips!</h1>
            <div onClick={() => history.push('/new-trip')}>
                <button>Create A New Trip</button>
            </div>


                {tripArray.map(trip => (
                    <div key={trip.id} >
                        <div onClick={() => handleTripClick(trip)}>
                            <h2>{trip.location}</h2> 
                            <h4>{trip.start} - {trip.end}</h4>
                        </div>
                        <button type="delete" onClick={() => handleDelete(trip)}>Delete</button>
                        <button onClick={() => handleEdit(trip)}>Edit</button>
                    </div>
                    )
                )}
        </div>
    )
}

export default TripList;