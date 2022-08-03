    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { useHistory } from 'react-router-dom';

function TripForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    //input local states
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [place, setPlace] = useState('');

    const handleSubmit = () => {
        dispatch({type: 'POST_TRIP', payload: {startDate, endDate, place}});
        
        //clear inputs
        setStartDate('');
        setEndDate('');
        setPlace('');
    }

    return(
        <div>
        {/* go back to the trip list */}
        <button onClick={() => history.push('/trips')}>Back</button>

    <h1>Add Something Cool!</h1>
    <form onSubmit={handleSubmit}>
        <h4>Start Date:</h4>
        <input type="date" placeholder="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />

        <h4>End Date:</h4>
        <input type="date" placeholder="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />

        <h4>Place:</h4>
        <input placeholder="place" value={place} onChange={(event) => setPlace(event.target.value)} />

        <button type='submit' >Submit</button>
    </form>
</div>
    )
}

export default TripForm;