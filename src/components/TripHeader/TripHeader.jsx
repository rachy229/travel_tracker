import { useSelector } from "react-redux"

function TripHeader() {

    const thisTrip = useSelector(store => store.trip.thisTrip);

    return(
        <div>
            <h1>Trip to {thisTrip.location}</h1>
            <h3>{thisTrip.start} - {thisTrip.end}</h3>
        </div>
    )
}

export default TripHeader;