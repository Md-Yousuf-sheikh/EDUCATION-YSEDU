import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="py-5 top-header text-light">
                <div className="row container mx-auto">
                    <div className="col-4">
                        <h1 className="text-light text-start"><span className="text-danger">YS</span><span>EDU.</span></h1>
                        <p className="text-start">Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                    </div>

                    <div className="col-4 foot-nav ">
                        <i class="fas fa-angle-right"></i><Link className="foot-link" to="/home">Home</Link>
                        <i class="fas fa-angle-right"></i><Link className="foot-link" to="/courses">Courses</Link>
                        <i class="fas fa-angle-right"></i><Link className="foot-link" to="/teachers">Techers</Link>
                        <i class="fas fa-angle-right"></i><Link className="foot-link" to="/about">About</Link>
                    </div>

                    <div className="col-4">
                        <div class="template-demo">
                            <button type="button" class="btn btn-social-icon btn-facebook btn-rounded"><i class="fab fa-facebook-square"></i></button>
                            <button type="button" class="btn btn-social-icon btn-twitter btn-rounded"><i class="fab fa-twitter-square"></i></button>
                            <button type="button" class="btn btn-social-icon btn-dribbble btn-rounded"><i class="fab fa-dribbble-square"></i></button>
                            <button type="button" class="btn btn-social-icon btn-linkedin btn-rounded"><i class="fab fa-linkedin"></i></button>
                            <button type="button" class="btn btn-social-icon btn-instagram btn-rounded"><i class="fab fa-instagram-square"></i></button>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-dark py-3 ">
                <div className=" container">
                    <h6 className="text-light"><i class="fas fa-copyright"></i> FSEDU. All rights reserved.</h6>
                </div>
            </div>
        </div >
    );
};

export default Footer;