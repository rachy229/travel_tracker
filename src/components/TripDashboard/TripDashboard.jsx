import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

function TripDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();


    return(
        <div>
            <button onClick={() => history.push('/trips')}>Back</button>
            <h1>This is the dashboard!!</h1>

            <button onClick={() => history.push('/new')}>Add Something New!</button>

            <div className="nav">
                <Link className="navLink" to="/hike-dashboard/:id">
                    Hikes
                </Link>

                <Link className="navLink" to="/flight-dashboard/:id">
                    Flights
                </Link>

                <Link className="navLink" to="/lodging-dashboard/:id">
                    Lodging
                </Link>

                <Link className="navLink" to="/other-dashboard/:id">
                    Other
                </Link>
            </div>

        </div>

    )
}

export default TripDashboard;