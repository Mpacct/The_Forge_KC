import React from 'react';
import BackgroundImage from "../assets/images/placeholder1.jpg"
import TheForgeHeader from "../components/TheForgeHeader"
import TheForgeAbout from "../components/TheForgeAbout";

function LandingPage() {

    return (
        <div >
            <body style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
                <TheForgeHeader />
                <TheForgeAbout />
            </body>
            
        </div>
    );
}

export default LandingPage;