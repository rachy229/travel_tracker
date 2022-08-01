import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function LodgingForm() {

    const dispatch = useDispatch();

    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'SET_LODGING', payload: {date, place, details, lat, lng}});
        
        //clear inputs
        setDate('');
        setPlace('');
        setLat('');
        setLng('');
        setDetails('');
    }



    return(
        <div>
            <h1>This is the lodging form</h1>
            <form onSubmit={handleSubmit}>
                <h4>Date:</h4>
                <input placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />

                <h4>Place:</h4>
                <input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />

                <h4>Latitude:</h4>
                <input placeholder="latitude" value={lat} onChange={(event) => setLat(event.target.value)} />

                <h4>Longitude:</h4>
                <input placeholder="longitude" value={lng} onChange={(event) => setLng(event.target.value)} />

                <h4>Details:</h4>
                <input placeholder="details" value={details} onChange={(event) => setDetails(event.target.value)} />

                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default LodgingForm;