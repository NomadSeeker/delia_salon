import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";


import '../styles/navbar.css';
import { useState } from "react";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="header_container" >
            <div className="header_logo">
                    Delia's Salon
            </div>
            <div className={`menu_btn`} onClick={handleShowMenu}>
                <span>{showMenu ? "Close" : "Menu"}</span>
            </div>
            <nav className="nav_container">
                
                <div className={`nav_menu ${showMenu ? 'active' : ''}`}>
                    <div className="close_menu" onClick={handleShowMenu} >
                        <IoCloseSharp />
                    </div>
                    <ul className="nav_list">
                        <li>
                            <NavLink to="/especialidades" onClick={handleShowMenu}>
                                Especialidades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contacto">
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="cita">
                                Citas
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    );
}

export default Navbar;