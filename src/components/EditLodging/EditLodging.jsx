import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import TripHeader from '../TripHeader/TripHeader';

function EditLodging() {

    const dispatch = useDispatch();
    const history = useHistory();

    const lodgingToEdit = useSelector(store => store.lodging.lodgingToEdit);

    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_LODGING_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('lodgingToEdit in handleSubmit', lodgingToEdit)

        axios.put(`/api/lodging/${lodgingToEdit.id}`, lodgingToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_LODGING_CLEAR' });

            history.push(`/lodging-dashboard/${lodgingToEdit.id}`); // back to other dashboard
        })
        .catch(error => {
            console.log('error in EditLodging handleSubmit: ', error);
        })
    }


    return(
        <div>
            <TripHeader />
            
            {/* go back to the flight dashboard for this specific trip */}
            <button onClick={() => history.push(`/lodging-dashboard/${lodgingToEdit.id}}`)}>Back</button>

            <h1>Edit Lodging!</h1>
            <form onSubmit={handleSubmit}>
                <h4>Date:</h4>
                <input type="date" placeholder="date" value={lodgingToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />

                <h4>Place:</h4>
                <input placeholder="place" value={lodgingToEdit.place} onChange={(event) => handleChange(event, 'place')} />

                <h4>Latitude:</h4>
                <input placeholder="latitude" value={lodgingToEdit.latitude} onChange={(event) => handleChange(event, 'latitude')} />

                <h4>Longitude:</h4>
                <input placeholder="longitude" value={lodgingToEdit.longitude} onChange={(event) => handleChange(event, 'longitude')} />

                <h4>Details:</h4>
                <input placeholder="details" value={lodgingToEdit.details} onChange={(event) => handleChange(event, 'details')} />

                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default EditLodging;