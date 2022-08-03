import { useHistory } from "react-router-dom"

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
            <h1>Add Something!</h1>
            <button onClick={goToHike}>Hike</button>
            <button onClick={goToLodging}>Lodging</button>
            <button onClick={goToFlight}>Flight</button>
            <button onClick={goToOther}>Other</button>
        </div>
    )
}

export default AddNewItem;