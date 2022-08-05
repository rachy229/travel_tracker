import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TripDashboard from "../TripDashboard/TripDashboard";

function HikeDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const hikesArray = useSelector(store => store.hike.hikesArray);
    // console.log('hikesArray in TripDashboard', hikesArray);

    const tripId = useSelector(store => store.trip.tripId);


    const handleHikeDelete = (id, tripId) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_HIKE', payload: {id, tripId}})
    }

    const handleHikeEdit = (hike) => {
        dispatch({type: 'SET_EDIT_HIKE', payload: hike})
        
        history.push('/edit-hike')
    }

    useEffect(() => {
        dispatch({type: 'GET_HIKES', payload: tripId})
    }, [])

    return(
        <div>

            <TripDashboard />
            {/* <button onClick={() => history.push(`/new`)}>Add Something New!</button>
            <div className="nav">
            <button className="navLink" onClick={() => dispatch({type: 'GET_HIKES', payload: tripId})}>
                Hikes
            </button>

            </div> */}

            {hikesArray.map(hike => (
                <div key={hike.id}>
                    <h4>Date: {hike.pretty_date}</h4>
                    <h4>Place: {hike.place}</h4>
                    <h4>Details: {hike.details}</h4>
                    <button onClick={() => handleHikeEdit(hike)}>Edit</button>
                    <button onClick={() => handleHikeDelete(hike.id, tripId)}>Delete</button>
                </div>
                )
            )}

        </div>
    )
}

export default HikeDashboard;