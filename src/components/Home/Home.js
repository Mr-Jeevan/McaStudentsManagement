// import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./index.css"

const Home = () => {

    return (
        <>
            <div className='container '>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>Student Management System</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <Link className="nav-link" to="/">
                            <div className="card wallet ms-auto">
                                <div className="overlay"></div>
                                <div className="circle">
                                    <div className=' count z-1'>0</div>
                                </div>
                                <h2 className=''>MCA I</h2>
                            </div>
                        </Link>

                    </div>

                    <div className="col-6">
                        <Link className="nav-link" to="/Mca_1">
                            <div className="card wallet me-auto">
                                <div className="overlay"></div>
                                <div className="circle">
                                    <div className=' count z-1'>69</div>
                                </div>
                                <h2 className=''>MCA II</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
