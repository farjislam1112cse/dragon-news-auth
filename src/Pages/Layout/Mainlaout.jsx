import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Mainlaout = () => {
    return (
        <div>
        
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlaout;