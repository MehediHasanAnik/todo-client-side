import React from 'react';
import Social from '../Social/Social';

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-3'>Welcome to the ToDo App!</h1>
            <h2 className='text-center text-primary mt-5'>Sign In With Google TO See More</h2>
            <Social />
        </div>
    );
};

export default Home;