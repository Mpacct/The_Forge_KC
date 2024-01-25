import React from 'react';
import BackgroundImage from "../assets/images/placeholder1.jpg"

function LandingPage() {

    return (
        <div >
            <body style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
            test
            </body>
            
        </div>
    );
}

export default LandingPage;