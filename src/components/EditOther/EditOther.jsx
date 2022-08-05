import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TripHeader from '../TripHeader/TripHeader';

function EditOther() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherToEdit = useSelector(store => store.other.otherToEdit);
    console.log('otherToEdit', otherToEdit);


    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_OTHER_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log('otherToEdit in handleSubmit', otherToEdit)

        axios.put(`/api/other/${otherToEdit.id}`, otherToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_OTHER_CLEAR' });

            history.push(`/other-dashboard/${otherToEdit.id}`); // back to other dashboard
        })
        .catch(error => {
            console.log('error in EditOther handleSubmit: ', error);
        })
    }

    return(
        <div>
            <TripHeader />
            
            {/* go back to the flight dashboard for this specific trip */}
            <button onClick={() => history.push(`/other-dashboard/${otherToEdit.id}}`)}>Back</button>

        <h1>Edit Other!</h1>
        <form onSubmit={handleSubmit}>
            <h4>Date:</h4>
            <input type="date" placeholder="date" value={otherToEdit.put_date} onChange={(event) => handleChange(event, 'put_date')} />

            <h4>Place:</h4>
            <input placeholder="Other" value={otherToEdit.place} onChange={(event) => handleChange(event, 'place')} />

            <h4>Details:</h4>
            <input value={otherToEdit.details} onChange={(event) => handleChange(event, 'details')} />

            <button type='submit' >Submit</button>
        </form>
    </div>
    )

}

export default EditOther;