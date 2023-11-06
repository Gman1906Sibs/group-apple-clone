import React from "react";
import "./Navbar.css";
import Logo from "../assets/icons/Logo.svg";
import Menu from "../assets/icons/Menu.svg";
import Home from "../assets/icons/Home.png";
import Basket from "../assets/icons/Basket.svg";
import Logout from "../assets/icons/Logout.svg";
import { Link } from "react-router-dom";

function Navbar(){
    
    return (
        <nav className="navbar">
            <div className="nav-upper">
            <Link to="/"><img src={Logo} alt="Logo Button" className="nav-icon"/></Link>
            <Link><img src={Menu} alt="Menu Button" className="nav-icon"/></Link>
            <Link><img src={Home} alt="Home Button" className="nav-icon"/></Link>
            <Link><img src={Basket} alt="Basket Button" className="nav-icon"/></Link>
            </div>
            <div className="nav-lower">
                <Link><img src={Logout} alt="Logout Button" className="nav-icon"/></Link>
            </div>
        </nav>
	);
}

export default Navbar;