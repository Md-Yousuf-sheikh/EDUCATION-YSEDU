import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <div className="title-bann py-5 p-5">
                <div className="container mx-auto">
                    <h1>Techers</h1>
                    <strong className="text-light"><Link to="/home" className="text-light">Home</Link> / <Link to="/teachers" className="text-light">Teacher</Link></strong>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-3">
                {
                    teachers.map(teacher => <Teacher key={teachers.id} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;