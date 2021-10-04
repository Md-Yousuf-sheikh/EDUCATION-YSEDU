import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="title-bann py-5 p-5">
                <div className="container">
                    <h1>Not Found</h1>
                    <strong className="text-light"><Link to="/home" className="text-light">Home</Link> / <Link to="*" className="text-light">Not Fonud</Link></strong>
                </div>
            </div>
            <div className="d-flex justify-content-center align-content-center py-5">
                <h1 className="py-5 my-5">404 Page Not Found !</h1>
            </div>
        </div>
    );
};

export default NotFound;