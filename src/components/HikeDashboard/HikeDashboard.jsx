import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TripDashboard from "../TripDashboard/TripDashboard";

function HikeDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const hikesArray = useSelector(store => store.hike);
    // console.log('hikesArray in TripDashboard', hikesArray);

    const tripId = useSelector(store => store.trip.tripId);


    const handleHikeDelete = (id) => {
        // console.log('id in handleHikeDelete', id)
        dispatch({type: 'DELETE_HIKE', payload: id})
    }

    const handleHikeEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_HIKE', payload: id})
        // dispatch({type: 'THIS_HIKE_ID', payload: id})
        // history.push('/edit-hike')
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
                    <button onClick={() => handleHikeEdit(hike.id)}>Edit</button>
                    <button onClick={() => handleHikeDelete(hike.id)}>Delete</button>
                </div>
                )
            )}

        </div>
    )
}

export default HikeDashboard;