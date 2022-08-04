import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function OtherForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);

    //input local states
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_OTHER', payload: {date, place, details, tripId}});
        
        //clear inputs
        setDate('');
        setPlace('');
        setDetails('');
    }

    return(
        <div>
            {/* go back to the add new item page */}
            <button onClick={() => history.push('/new')}>Back</button>

        <h1>Add Something Cool!</h1>
        <form onSubmit={handleSubmit}>
            <h4>Date:</h4>
            <input type="date" placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />

            <h4>Place:</h4>
            <input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />

            <h4>Details:</h4>
            <input placeholder="details" value={details} onChange={(event) => setDetails(event.target.value)} />

            <button type='submit' >Submit</button>
        </form>
    </div>
    )

}

export default OtherForm;