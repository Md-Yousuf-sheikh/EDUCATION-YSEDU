
import React from 'react';
import './Course.css'
import Fade from 'react-reveal/Fade';
import Rating from 'react-rating';

const Course = (props) => {
    console.log(props.course);
    const { img, name, desc, lessons, overView, price, ratting, student } = props.course;
    return (
        <Fade left>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" style={{ height: '250px' }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <div className="d-flex justify-content-between px-5">
                            <h6 className="text-danger">Price: {price} $</h6>
                            <h6 className="student-color">Student: <i class="fas fa-user-friends"></i> <sup>{student}</sup></h6>
                        </div>
                        <div className="d-flex justify-content-between px-5">
                            <h6 className="lesson-color">Lesson: <i class="fas fa-book-open"></i> <sup>{lessons}</sup></h6>
                            <h6 className="star-color"><Rating
                                initialRating={ratting}
                                emptySymbol={<i class="far fa-star"></i>}
                                placeholderSymbol={<i class="fas fa-star-half-alt"></i>}
                                fullSymbol={<i class="fas fa-star"></i>}
                                readonly
                            /></h6>
                        </div>
                        <p>{desc}</p>
                        <button className="btn btn-danger px-5 py-2" >Enroll </button>
                    </div>
                </div>
            </div>

        </Fade>

    );
};

export default Course;