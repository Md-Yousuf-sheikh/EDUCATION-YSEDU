import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./minCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <div className="title-bann py-5 p-5">
                <div className="container">
                    <h1>Our Courses</h1>
                    <strong className="text-light"><Link to="/home" className="text-light">Home</Link> / <Link to="/courses" className="text-light">Courses</Link></strong>
                </div>
            </div>
            {/* Our Courses */}
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4 my-3  container mx-auto">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;