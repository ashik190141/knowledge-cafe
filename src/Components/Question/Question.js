import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='blog-ans'>
                <p>1. Difference Between Props and State?</p> 
                <p>The state is owned locally, and the component itself updates it. Props are owned and read only by a parent.</p>
            </div>
            <div className='blog-ans'>
                <p>2. How does useState work?</p>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.</p>
            </div>
            <div className='blog-ans'>
                <p>3. Purpose of useEffect other than fetching data?</p>
                <p>The useEffect in react js allows to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
            </div>
            <div className='blog-ans'>
                <p>4. How Does React work?</p>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. </p>
            </div>
        </div>
    );
};

export default Question;