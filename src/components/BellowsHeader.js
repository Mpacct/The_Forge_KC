import React from 'react'
import '../assets/styles/bellowsHeader.css';
import BellowsNavbar from './BellowsNavbar';

function BellowsHeader() {

    return (
        <header className="py-5">
            <div>
                
                <BellowsNavbar />
            </div>
        </header>
    );
}

export default BellowsHeader;