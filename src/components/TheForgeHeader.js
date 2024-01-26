import React from 'react';
import logo from '../assets/images/The_Forge_Logo.png';
import BackgroundImage from "../assets/images/placeholder1.jpg"

function ForgeHeader() {

    return (
        <header className='pt-4' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
            <div className='text-center'>
                <img src={logo} alt="Logo" style={{ width: `25vh` }}/>;
            </div>
        </header>
    );
}

export default ForgeHeader;