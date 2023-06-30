import React from 'react';
import { useState } from 'react';
import dummydata from '../../dummydata/dummydata';
import Course from '../courses/Course';
import Cart from '../Cart/Cart';
import 'bootstrap/dist/css/bootstrap.css';

const CourseInfo = () => {
    const courses = [...dummydata]
    // console.log(courses)
    const [course, setCourse] = useState(courses);
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Cart cart={cart} key={cart.id}></Cart>
                </div>
                <div className="col-md-8">
                <h1>Courses Available</h1>
                    {
                        course.map(course => <Course course={course} addToCart={addToCart} key={course.id}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;