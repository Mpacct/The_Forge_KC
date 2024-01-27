import React from 'react';

function ForgeHours() {

    return (
        <div className=''>
            <div className='text-white'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <h1 className='col-3 text-center'>Come and see us!</h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-1'>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Thursday</li>
                                <li>Friday</li>
                                <li>Saturday</li>
                            </ul>
                        </div>
                        <div className='col-1'>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>5pm - 1am</li>
                                <li>5pm - 1am</li>
                                <li>3pm - 1am</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgeHours;