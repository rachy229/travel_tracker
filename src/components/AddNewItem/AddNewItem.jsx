import { useHistory } from "react-router-dom"
import TripHeader from "../TripHeader/TripHeader";

function AddNewItem() {

    const history = useHistory();

    const goToHike = () => {
        history.push('/hike');
    }

    const goToLodging = () => {
        history.push('/lodging')
    }

    const goToFlight = () => {
        history.push('/flight');
    }

    const goToOther = () => {
        history.push('/other');
    }
    return(

        <div>
            <button onClick={() => history.push('/dashboard/:id')}>Back</button>
            <TripHeader />

            <h2>Add Something!</h2>
            <button onClick={goToHike}>Hike</button>
            <button onClick={goToLodging}>Lodging</button>
            <button onClick={goToFlight}>Flight</button>
            <button onClick={goToOther}>Other</button>
        </div>
    )
}

export default AddNewItem;