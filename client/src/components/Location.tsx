import { SlLocationPin } from "react-icons/sl";


import './location.css';

const Location = () => {

    return(
        <div className="location_container">
            <div className="location_icon">
                <SlLocationPin />
            </div>
            <div className="location_title">
                <h2>Ubicación</h2>
            </div>
            <div className="location_desc">
                <p>
                    Condominio Vila del Lago,
                </p>
                <p>
                    Coyol. Alajuela.
                </p>
            </div>
        </div>
    )
}

export default Location;