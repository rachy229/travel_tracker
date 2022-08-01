import React, { useEffect } from 'react';

function LodgingForm() {



    return(
        <div>
            <h1>This is the lodging form</h1>
            <form>
                <h4>Date:</h4>
                <input placeholder="date" />
                <h4>Place:</h4>
                <input placeholder="place" />
                <h4>Latitude:</h4>
                <input placeholder="latitude" />
                <h4>Longitude:</h4>
                <input placeholder="longitude" />
                <h4>Details:</h4>
                <input placeholder="details" />
            </form>
        </div>
    )
}

export default LodgingForm;