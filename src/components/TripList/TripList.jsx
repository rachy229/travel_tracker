import { useHistory } from "react-router-dom"

function TripList() {

    const history = useHistory();

    return(
        <div>
            <h1>Trips!</h1>
            <button onClick={() => history.push('/new-trip')}>Create A New Trip</button>
        </div>
    )
}

export default TripList;