import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LodgingForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);


    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_LODGING', payload: {date, place, details, lat, lng, tripId}});

        //send back to the dashboard
        history.push(`/dashboard/:id`)
        
        //clear inputs
        setDate('');
        setPlace('');
        setLat('');
        setLng('');
        setDetails('');
    }



    return(
        <div>
            {/* go back to the add new item page */}
            <button onClick={() => history.push('/new')}>Back</button>


            <h1>This is the lodging form</h1>
            <form onSubmit={handleSubmit}>
                <h4>Date:</h4>
                <input type="date" placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />

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