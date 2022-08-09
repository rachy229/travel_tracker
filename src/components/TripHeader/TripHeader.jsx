import { useSelector } from "react-redux"

import './TripHeader.css'

function TripHeader() {

    const thisTrip = useSelector(store => store.trip.thisTrip);

    return(
        <div className="trip-header">
            <h1 className="trip-name">Trip to {thisTrip.location}</h1>
            <h3 className="trip-dates">{thisTrip.start} - {thisTrip.end}</h3>
        </div>
    )
}

export default TripHeader;