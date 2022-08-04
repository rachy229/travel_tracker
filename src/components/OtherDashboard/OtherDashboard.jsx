import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";

function OtherDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherArray = useSelector(store => store.other);

    const tripId = useSelector(store => store.trip.tripId);


    const handleOtherDelete = (id) => {
        dispatch({type: 'DELETE_OTHER', payload: id})
    }

    const handleOtherEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
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
                    <button onClick={() => handleOtherEdit(other.id)}>Edit</button>
                    <button onClick={() => handleOtherDelete(other.id)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default OtherDashboard;