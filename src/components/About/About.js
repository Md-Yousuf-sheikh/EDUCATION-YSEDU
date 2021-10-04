import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="">
            <div className="title-bann py-5 p-5">
                <div className="container mx-auto">
                    <h1>About</h1>
                    <strong className="text-light"><Link to="/home" className="text-light">Home</Link> / <Link to="/about" className="text-light">About Us</Link></strong>
                </div>
            </div>

            {/*  */}
            <div className="container mx-auto d-flex row">

                <div className="col-5 border-end">
                    <h1 className="text-centar py-3"><span className="text-danger">YS</span>EDU.</h1>
                    <h6 className="text-start m-3">The reason behind creating this course is that you can do any course so that you can learn the job well and that is why it is designed to be done by a good skilled teacher. By doing this you can join. If you want, we will take you far ahead. If you stay with us like this, then you will stay with us all the time. We will give you many more free courses. You will see and hear. Keep in touch with our skilled teachers. Thank you.</h6>
                </div>
                <div className="col-7">
                    <form className="m-3">
                        <h2>Contact Us</h2>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Entr your email.." />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Entr your password.." />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" placeholder="Message..." rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary px-5 my-3 flout-end">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;