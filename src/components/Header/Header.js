import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="top-header py-2">
                <div className="row container mx-auto">
                    <div className="col-6 info-link">
                        <div className="float-start">
                            <span className="text-light mx-2 "><i className="fas fa-envelope mx-2"></i> info@exmpole.com</span>
                            <span className="text-light mx-2"><i className="fas fa-phone-alt mx-2"></i> +0132-528-8569</span>
                        </div>
                    </div>
                    <div className="col-6 text-light">
                        <div className="float-end">
                            <span><i class="fas fa-sign-in-alt text-danger"></i> Login</span> / <span>Register</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav bare */}
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <div className="container">
                    <Link className="navbar-brand fw-bolder" to="/home"><span className="text-danger">YS</span>EDU.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/courses">COURSES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/teachers">TECHERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about">ABOUT</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;