import React from 'react';

const NotFound = () => {
    return (
        <div className='absolute flex items-center justify-center  gap-12 z-1000 bg-black top-0 left-0 right-0 bottom-0'>
            <h1 className='text-white'>404 - Page Not Found</h1>
            <p className='text-white'>|</p>
            <a className="text-white" href="/">Go back to Home</a>
        </div>
    );
};

export default NotFound;
