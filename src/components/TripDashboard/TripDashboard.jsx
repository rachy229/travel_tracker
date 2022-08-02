import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TripDashboard() {

    const dispatch = useDispatch();

    const lodgingArray = useSelector(store => store.lodging);
    console.log('lodgingArray in TripDashboard',lodgingArray);

    const handleDelete = (id) => {
        console.log('id in handleDelete', id)
        dispatch({type: 'DELETE_LODGING', payload: id})
    }

    useEffect(() => {
        dispatch({ type: 'GET_LODGING'})
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
        </div>
    )
}

export default TripDashboard;