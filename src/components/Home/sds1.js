// import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./index.css"
import wall_e_modal from "../../assets/imgs/wall_e_modal.png";
const Home = () => {

    return (
        <>
            <section>
                <div className="container bg-primary rounded-3 shadow-lg p-3 mt-5 mb-5">
                    {/* heading */}
                    <div className="heading">
                        <h1 className='text-center'>MCA STUDENT DETAILS
                        </h1>
                    </div>
                    {/* row */}
                    <div className="row">
                        {/* cards col */}
                        <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                            <div className="row my-2">
                                {/* card-1 */}
                                <div className="col-6 hover_to_info_1">
                                    <Link className="nav-link" to="/">
                                        <div className="card card-1 wallet ms-auto">
                                            <div className="overlay"></div>
                                            <div className="circle">
                                                <div className=' dept fw-bold z-1'>MCA I</div>
                                            </div>
                                            {/* <h2 className=''>MCA I</h2> */}
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 hover_info hi_1">
                                    <div className="info_div">
                                        <h2 className='text-center'>MCA I</h2>
                                        <p className='text-center'>Click here to view MCA I details</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-6 hover_info hi_2">
                                    <div className="info_div">
                                        <h2 className='text-center'>MCA I</h2>
                                        <p className='text-center'>Click here to view MCA I details</p>
                                    </div>
                                </div>
                                {/* card-2 */}
                                <div className="col-6 hover_to_info_2">
                                    <Link className="nav-link" to="/Mca_1">
                                        <div className="card card-2 wallet me-auto">
                                            <div className="overlay"></div>
                                            <div className="circle">
                                                <div className=' dept fw-bold z-1'>MCA II</div>
                                            </div>
                                            {/* <h2 className=''>MCA II</h2> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* hero image */}
                        <div className="col-lg-6 col-sm-12 col-md-12 my-2">
                            <div className="hero-image d-flex justify-content-center align-items-center h-100 w-100">
                                <img src={wall_e_modal} alt="nallaruku-la" className='img-fluid w-50 ' id="hero_img" />
                                <div className="glow">u r gay</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
};

export default Home;
