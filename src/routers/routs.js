// I will be work on this letter 

import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    }
])