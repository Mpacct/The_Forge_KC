import React from 'react'

function BellowsHome() {

    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="card-img" src={mainPic} alt="Card image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h5 className="text-center">About Me</h5>
                        <p>My name is Marcus Paccapaniccia.  I'm a newly graduated Full Stack Web developer from a bootcamp through the University of Arizona. I have exceptional knowledge working with JavaScript, and have familiarity working with React, node.js, express.js, and more. I use these as a framework for developing exceptional products with the use of HTML, CSS, and database structures like MySQL and MongoDB.  This creates environments for people to truly enjoy themselves and find fulfillment in the spaces they visit and applications they use, such as through my fitness application I've produced with my team of developers, "Hello Workout". </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BellowsHome;