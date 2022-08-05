import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TripHeader from '../TripHeader/TripHeader';

function EditHike() {

    const dispatch = useDispatch();
    const history = useHistory();

    const hikeToEdit = useSelector(store => store.hike.hikeToEdit);
    console.log('hikeToEdit', hikeToEdit);


    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_HIKE_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = () => {
        event.preventDefault;
        console.log('hikeToEdit in handleSubmit', hikeToEdit)

        axios.put(`/api/hike/${hikeToEdit.id}`, hikeToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_HIKE_CLEAR' });

            history.push(`/hike-dashboard/${hikeToEdit.id}`); // back to hike dashboard
        })
        .catch(error => {
            console.log('error in EditHike handleSubmit: ', error);
        })
    }

    return(
        <div>
            <TripHeader />
            
            {/* go back to the flight dashboard for this specific trip */}
            <button onClick={() => history.push(`/hike-dashboard/${hikeToEdit.id}}`)}>Back</button>

        <h1>Edit Hike!</h1>
        <form onSubmit={handleSubmit}>
            <h4>Date:</h4>
            <input type="date" placeholder="date" value={hikeToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />

            <h4>Place:</h4>
            <input placeholder="Airline" value={hikeToEdit.place} onChange={(event) => handleChange(event, 'place')} />

            <h4>Details:</h4>
            <input type="time" value={hikeToEdit.details} onChange={(event) => handleChange(event, 'details')} />

            <button type='submit' >Submit</button>
        </form>
    </div>
    )

}

export default EditFlight;