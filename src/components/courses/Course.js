import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props)
    const {title,description, author, price} = props.course;
    return (
        <div className='card'>

        <div className="col-md-4 float-left p-3">
            <h5 className='title'>{title}</h5>
            <div className='des'>{description}</div>
            <p><small className="text-secondary">By {author}</small></p>
            <h3 className="text-danger">${price}</h3>
            <button className="btn btn-success" onClick={() => props.addToCart(props.course)}>Enroll</button>
        </div>
        </div>
    );
};

export default Course;