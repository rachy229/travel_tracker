import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingArray = useSelector(store => store.lodging);
    console.log('lodgingArray in TripDashboard',lodgingArray);

    const hikesArray = useSelector(store => store.hike);
    console.log('hikesArray in TripDashboard', hikesArray);

    const handleDelete = (id) => {
        console.log('id in handleDelete', id)
        dispatch({type: 'DELETE_LODGING', payload: id})
    }

    const handleEdit = (id) => {
        console.log('id in handleEdit', id)
        // dispatch({type: 'GET_THIS_LODGING', payload: id})
        dispatch({type: 'THIS_LODGING_ID', payload: id})
        history.push('/edit-lodging')
    }

    useEffect(() => {
        dispatch({ type: 'GET_LODGING'})
        dispatch({type: 'GET_HIKES'})
    }, [])

    return(
        <div>
            <h1>This is the dashboard!!</h1>
            {lodgingArray.map(lodgingItem => (
                <div key={lodgingItem.id}>
                    <h4>Date: {lodgingItem.date}</h4>
                    <h4>Place: {lodgingItem.place}</h4>
                    <h4>Details: {lodgingItem.details}</h4>
                    <button onClick={() => handleEdit(lodgingItem.id)}>Edit</button>
                    <button onClick={() => handleDelete(lodgingItem.id)}>Delete</button>
                </div>
                )
            )}

            {hikesArray.map(hike => (
                <div key={hike.id}>
                    <h4>Date: {hike.date}</h4>
                    <h4>Place: {hike.place}</h4>
                    <h4>Details: {hike.details}</h4>
                    <button onClick={() => handleEdit(hike.id)}>Edit</button>
                    <button onClick={() => handleDelete(hike.id)}>Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default TripDashboard;