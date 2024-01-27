import React from 'react';
import TheForgeHeader from "../components/TheForgeHeader";
import TheForgeAbout from "../components/TheForgeAbout";
import TheForgeHours from "../components/TheForgeHours";
import TheForgeContact from "../components/TheForgeContact";
import TheForgeGCandMenu from "../components/TheForgeGCandMenu";

function LandingPage() {

    return (
        <div >
            <body className='bg-dark'>
                <TheForgeHeader />
                <TheForgeAbout />
                <TheForgeHours />
                <TheForgeContact />
                <TheForgeGCandMenu/>
            </body>
            
        </div>
    );
}

export default LandingPage;