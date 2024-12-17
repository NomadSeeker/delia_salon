
import { CiMobile3 } from "react-icons/ci";

import './contact.css';

const Contact = () => {

    return (
        <>
            <div className="contact_container">
                <div className="contact_icon">
                    <span><CiMobile3 /></span>
                </div>

                <div>
                    <h2 className="contact_title">Contacto</h2>
                </div>
                <div className="contact_desc">
                    <p>8554-1170</p>
                </div>
            </div>
        </>
    );
}

export default Contact;