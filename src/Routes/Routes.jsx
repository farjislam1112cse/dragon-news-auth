import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlaout from '../Pages/Layout/Mainlaout';
import Home from '../Pages/Home/Home';


const MycreatedRoute = createBrowserRouter([
 {
    path:"/",
    element:<Mainlaout></Mainlaout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
 }
 

])

export default MycreatedRoute;