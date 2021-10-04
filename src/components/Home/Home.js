import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../images/banner.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseHome.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="home-banner py-5 d-flex">
                <div className="container mx-auto row ">
                    <div className="col-6">
                        <h1 className="text-uppercase lh-base text-light text-start " >Choose The Right Course <br /> of  for Education <br /> <span className="text-danger">YS</span>EDU. </h1>
                        <p className="text-start mb-5 fs-5 text-light text-capitalize">Join our course and create all kinds of benefits yourself in a different dimension and stay with us.</p>
                        <Link to="/courses"><button className="btn btn-danger fw-bold px-5 py-2 mt-5 float-start ">Enroll Now <i class="fas fa-chevron-right px-2"></i></button></Link>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid " src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className="py-5 container ">
                <h1 className="pb-2">Most Populer Courses</h1>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            courses.map(cor => <div class="col">
                                <div class="card">
                                    <img src={cor.img} style={{ height: "250px" }} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{cor.name}</h5>
                                        <p class="card-text"></p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <button className="btn btn-outline-danger px-5 fw-bold py-2 mt-3 ">More Courses <i class="fas fa-angle-double-right"></i></button>
            </div>

        </div>
    );
};

export default Home;