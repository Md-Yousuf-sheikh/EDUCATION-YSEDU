import React from 'react';

const Teacher = (props) => {
    const { name, exp, catagory, img } = props.teacher;
    return (
        <div class="col" >
            <div class="card h-100">
                <img src={img} class="card-img-top" style={{ height: "280px" }} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{catagory}</p>
                    <p class="card-text">Exprince: {exp} Year</p>
                </div>
            </div>
        </div >
    );
};

export default Teacher;