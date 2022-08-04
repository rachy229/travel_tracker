import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FlightForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const tripId = useSelector(store => store.trip.tripId);

    //input local states
    const [date, setDate] = useState('');
    const [airline, setAirline] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival]= useState('');
    const [flightNum, setFlightNum] = useState('');

    const handleSubmit = () => {
        console.log('departure in handleSubmit', departure);
        console.log('arrival in handleSubmit', arrival);

        dispatch({type: 'POST_FLIGHT', payload: {date, airline, departure, arrival, flightNum, tripId}});

        //send back to the dashboard
        history.push(`/dashboard/:id`)
        
        //clear inputs
        setDate('');
        setAirline('');
        setDeparture('');
        setArrival('');
        setFlightNum('');
    }

    return(
        <div>
            {/* go back to the add new item page */}
            <button onClick={() => history.push('/new')}>Back</button>

        <h1>Add A New Flight!</h1>
        <form onSubmit={handleSubmit}>
            <h4>Date:</h4>
            <input type="date" placeholder="date" value={date} onChange={(event) => setDate(event.target.value)} />

            <h4>Airline:</h4>
            <input placeholder="Airline" value={airline} onChange={(event) => setAirline(event.target.value)} />

            <h4>Departure Time:</h4>
            <input type="time" value={departure} onChange={(event) => setDeparture(event.target.value)} />

            <h4>Arrival Time:</h4>
            <input type="time" value={arrival} onChange={(event) => setArrival(event.target.value)} />

            <h4>Flight Number:</h4>
            <input placeholder="Flight Number" value={flightNum} onChange={(event) => setFlightNum(event.target.value)} />

            <button type='submit' >Submit</button>
        </form>
    </div>
    )

}

export default FlightForm;