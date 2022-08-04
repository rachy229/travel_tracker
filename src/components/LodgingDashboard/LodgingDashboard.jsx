import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";


function LodgingDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingArray = useSelector(store => store.lodging);

    const tripId = useSelector(store => store.trip.tripId);
    

    const handleLodgingDelete = (id) => {
        // console.log('id in handleLodgingDelete', id)
        dispatch({type: 'DELETE_LODGING', payload: id})
    }

    const handleLodgingEdit = (id) => {
        // console.log('id in handleEdit', id)
        // // dispatch({type: 'GET_THIS_LODGING', payload: id})
        // dispatch({type: 'THIS_LODGING_ID', payload: id})
        // history.push('/edit-lodging')
    }

        useEffect(() => {
        dispatch({ type: 'GET_LODGING', payload: tripId})
    }, [])

    return(
        <div>

            <TripDashboard />

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
        </div>
    )
}
export default LodgingDashboard;