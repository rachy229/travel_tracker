import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TripHeader from '../TripHeader/TripHeader';

function EditFlight() {

    const dispatch = useDispatch();
    const history = useHistory();

    const flightToEdit = useSelector(store => store.flight.flightToEdit);
    console.log('flightToEdit', flightToEdit);


    function handleChange(event, property) {
        dispatch({ 
                    type: 'EDIT_FLIGHT_ONCHANGE', 
                    payload: { property: property, value: event.target.value }
                });
    
    }

    const handleSubmit = () => {
        event.preventDefault;
        console.log('flightToEdit in handleSubmit', flightToEdit)

        axios.put(`/api/flight/${flightToEdit.id}`, flightToEdit)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_FLIGHT_CLEAR' });

            history.push('/flight-dashboard'); // back to flight dashboard
        })
        .catch(error => {
            console.log('error in EditFlight handleSubmit: ', error);
        })
    }

    return(
        <div>
            <TripHeader />
            
            {/* go back to the add new item page */}
            <button onClick={() => history.push(`/flight-dashboard/${flightToEdit.id}}`)}>Back</button>

        <h1>Edit Flight!</h1>
        <form onSubmit={handleSubmit}>
            <h4>Date:</h4>
            <input type="date" placeholder="date" value={flightToEdit.date} onChange={(event) => handleChange(event, 'date')} />

            <h4>Airline:</h4>
            <input placeholder="Airline" value={flightToEdit.airline} onChange={(event) => setAirline(event, 'airline')} />

            <h4>Departure Time:</h4>
            <input type="time" value={flightToEdit.departure} onChange={(event) => setDeparture(event, 'departure_time')} />

            <h4>Arrival Time:</h4>
            <input type="time" value={flightToEdit.arrival} onChange={(event) => setArrival(event, 'arrival_time')} />

            <h4>Flight Number:</h4>
            <input placeholder="Flight Number" value={flightToEdit.flight_number} onChange={(event) => setFlightNum(event, 'flight_number')} />

            <button type='submit' >Submit</button>
        </form>
    </div>
    )

}

export default EditFlight;