import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Cart = (props) => {
    const course = props.cart;
    // console.log(course)
    const total = course.reduce((total, price) => total + price.price , 0);
    const totalPrice = Number(total).toFixed(2);
    return (
        <div className="text-center bg-dark text-warning p-1">
            <h2 className="text-warning">Selected Courses</h2>
            <hr className="bg-danger"/>
            <h5>Number of courses chosen: <span className="text-white">{course.length}</span></h5>
            {
                course.map(course => 
                <div className="d-flex">
                    <p className=''>✅</p>
                    <p className="mr-auto p-2"> {course.title}</p>
                    <p className="text-white p-2">Price: ${course.price}</p>
                </div>)
            }
            <hr className="bg-danger"/>
            <div className="d-flex">
                <h4 className="mr-auto p-2">Total : ${totalPrice}</h4>
            </div>
        </div>
    );
};

export default Cart;