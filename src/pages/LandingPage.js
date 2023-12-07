import React from 'react';
import BackgroundImage from "../assets/images/placeholder1.jpg"

function LandingPage() {

    return (
        <div style={{ backgroundImage: `url(${BackgroundImage})`, height: "100px"}}
        >
            test
        </div>
    );
}

export default LandingPage;