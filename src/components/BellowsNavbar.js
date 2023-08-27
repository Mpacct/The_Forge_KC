import React from 'react'
import bellowsLogo from '../assets/images/bellowsIcon.PNG'
import { Link } from 'react-router-dom'
import '../assets/styles/bellowsHeader.css';

function BellowsNavbar() {

    return (
        // <!-- Navbar -->
        <nav className="bellowsHeader navbar navbar-expand-lg fixed-top bg-light navbar-light">
            <div className="container">
                <img
                    id="MDB-logo"
                    src={bellowsLogo}
                    alt="The Bellows Logo"
                    draggable="false"
                    height="30"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="text-white nav-link mx-2"> Post </Link>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link mx-2" href="#!"><i className="fas fa-bell pe-2"></i>Alerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link mx-2" href="#!"><i className="fas fa-heart pe-2"></i>Trips</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="text-white btn btn-black btn-rounded" href="#!">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <!-- Navbar -->
    );
}

export default BellowsNavbar;