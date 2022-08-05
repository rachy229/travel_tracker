import React, { useState } from 'react';
import { useSelector } from 'react-redux';
    import { useDispatch } from 'react-redux';
    import { useHistory } from 'react-router-dom';
    import axios from 'axios';

function EditTrip() {

    const dispatch = useDispatch();
    const history = useHistory();

    
    const tripToEdit = useSelector(store => store.trip.tripToEdit);
    console.log('tripToEdit', tripToEdit);



    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_TRIP_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('tripToEdit in handleSubmit', tripToEdit)

        axios.put(`/api/trip/${tripToEdit.id}`, tripToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });

            history.push('/trips'); // back to trip list
        })
        .catch(error => {
            console.log('error in EditTrip handleSubmit: ', error);
        })
    }

    return(
        <div>
        {/* go back to the trip list */}
        <button onClick={() => history.push('/trips')}>Back</button>

    <h1>Edit Trip to </h1>
    <form onSubmit={handleSubmit}>
        <h4>Start Date:</h4>
        <input type="date" placeholder="date" value={tripToEdit.start_date} onChange={(event) => handleChange(event, 'start')} />

        <h4>End Date:</h4>
        <input type="date" placeholder="date" value={tripToEdit.end_date} onChange={(event) => handleChange(event, 'end')} />

        <h4>Place:</h4>
        <input placeholder="place" value={tripToEdit.location} onChange={(event) => handleChange(event, 'location')} />

        <button type='submit' >Submit</button>
    </form>
</div>
    )
}

export default EditTrip;