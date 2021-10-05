import React from 'react';
import img from '../../images/about.png'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <div className="title-bann py-5 p-5">
                <div className="container mx-auto">
                    <h1>About</h1>
                    <strong className="text-light"><Link to="/home" className="text-light">Home</Link> / <Link to="/about" className="text-light">About Us</Link></strong>
                </div>
            </div>

            {/*  */}

            <div className="container mx-auto d-flex row py-5 ">
                <h1>Welcome to YSEDU</h1>
                <h6>Leran your favorite course full your derm </h6>

                <Fade left>
                    <div className="col-6 text-start mt-5">
                        <h4>Cost Effective</h4>
                        <p>Learnup is one of the cost effective learning centres from last decade.</p>
                        <h4>Improves Performance And Productivit</h4>
                        <p>Learnup helps learners to train quicker and the easiest way to increase performance.</p>
                        <h4>Saves Time</h4>
                        <p>Our instructor uploads the materials in time and shares the content with the learners in time.</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-6">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </Fade>

            </div>
        </>
    );
};

export default About;