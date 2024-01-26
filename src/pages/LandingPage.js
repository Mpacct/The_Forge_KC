import React from 'react';
import TheForgeHeader from "../components/TheForgeHeader";
import TheForgeAbout from "../components/TheForgeAbout";
import TheForgeHours from "../components/TheForgeHours";
import TheForgeContact from "../components/TheForgeContact";

function LandingPage() {

    return (
        <div >
            <body className='bg-dark'>
                <TheForgeHeader />
                <TheForgeAbout />
                <TheForgeHours />
                <TheForgeContact />
            </body>
            
        </div>
    );
}

export default LandingPage;