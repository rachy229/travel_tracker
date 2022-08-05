import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TripDashboard from "../TripDashboard/TripDashboard";


function LodgingDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingArray = useSelector(store => store.lodging.lodgingArray);

    const tripId = useSelector(store => store.trip.tripId);
    console.log('trip id in LodgingDashboard', tripId)

    const lodgingToEdit = useSelector(store => store.lodging.lodgingToEdit);

    const handleLodgingDelete = (id, tripId) => {
        console.log('tripId in handleLodgingDelete', tripId);
        dispatch({type: 'DELETE_LODGING', payload: {id, tripId}});
    }

    const handleLodgingEdit = (lodging) => {
        dispatch({type: 'SET_EDIT_LODGING', payload: lodging});
        
        history.push('/edit-lodging');
    }

        useEffect(() => {
        dispatch({ type: 'GET_LODGING', payload: tripId});
    }, [])

    return(
        <div>

            <TripDashboard />

            {lodgingArray.map(lodgingItem => (
                <div key={lodgingItem.id}>
                    <h4>Date: {lodgingItem.pretty_date}</h4>
                    <h4>Place: {lodgingItem.place}</h4>
                    <h4>Details: {lodgingItem.details}</h4>
                    <button onClick={() => handleLodgingEdit(lodgingItem)}>Edit</button>
                    <button onClick={() => handleLodgingDelete(lodgingItem.id, tripId)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}
export default LodgingDashboard;