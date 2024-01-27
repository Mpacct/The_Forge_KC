import React from 'react';
import { Link } from 'react-router-dom';

function ForgeGCandMenu() {

    return (
        <div className="container-fluid text-white">
            <div className='row'>
                <div className='col-6'>
                    <h1>Gift Cards Available!</h1>
                    <p>Giftcards are purchasable through the link below.  Get yours today!</p>
                    <a href="https://www.toasttab.com/the-forge-117-s-elm-st/giftcards" target="_blank"><button type="button" className="btn btn-secondary">Purchase Now</button></a>
                </div>
                <div className='col-6'>
                    <h1>Current Menu</h1>
                    <p>Visit our Facebook to view our current Menu of speciality drinks and cocktails!</p>
                    <a href= "https://www.facebook.com/profile.php?id=61553761737784" target="_blank"><button type="button" className="btn btn-secondary">The Forge Facebook</button></a>
                </div>

            </div>

        </div>
    );
}

export default ForgeGCandMenu;