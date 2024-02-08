import React from 'react';
import { Link } from 'react-router-dom';

function ForgeContact() {

    return (
        <div className="container-fluid text-white">
            <div className='row'>
                <div className='col-6'>
                    <h1>Private Events</h1>
                    <p>Sample text about private events!</p>
                    <Link to="/contact"><button type="button" className="btn btn-secondary">Book Now</button></Link>
                </div>
                
                <div className='col-6'>
                    <h1>Contact Us</h1>
                    <p>Sample text about contacting!</p>
                    <Link to="/contact"><button type="button" className="btn btn-secondary">Contact Us</button></Link>
                </div>

            </div>

        </div>
    );
}

export default ForgeContact;