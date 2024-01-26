import React from 'react';
import logo from '../assets/images/The_Forge_Logo.png';

function BellowsHeader() {

    return (
        <header className='pt-4'>
            <div className='text-center'>
                <img src={logo} alt="Logo" style={{ width: `25vh` }}/>;
            </div>
        </header>
    );
}

export default BellowsHeader;