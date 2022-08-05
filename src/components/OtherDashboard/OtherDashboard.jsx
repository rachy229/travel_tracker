import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";

function OtherDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherArray = useSelector(store => store.other.otherArray);

    const tripId = useSelector(store => store.trip.tripId);


    const handleOtherDelete = (id, tripId) => {
        dispatch({type: 'DELETE_OTHER', payload: {id, tripId}})
    }

    const handleOtherEdit = (other) => {
        dispatch({type: 'SET_EDIT_OTHER', payload: other})
        
        history.push('/edit-other')
    }


        useEffect(() => {
        dispatch({type: 'GET_OTHER', payload: tripId})
    }, [])
    return(
        <div>

            <TripDashboard />

            {otherArray.map(other => (
                <div key={other.id}>
                    <h4>Date: {other.pretty_date}</h4>
                    <h4>Place: {other.place}</h4>
                    <h4>Details: {other.details}</h4>
                    <button onClick={() => handleOtherEdit(other)}>Edit</button>
                    <button onClick={() => handleOtherDelete(other.id, tripId)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default OtherDashboard;