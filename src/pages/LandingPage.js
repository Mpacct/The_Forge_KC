import React from 'react';
import BackgroundImage from "../assets/images/placeholder1.jpg"
import TheForgeHeader from "../components/TheForgeHeader"

function LandingPage() {

    return (
        <div >
            <body style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
                <TheForgeHeader />
            test
            </body>
            
        </div>
    );
}

export default LandingPage;