import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'todos'}>todos</Link></li>
                <li><Link to={'albums'}>albums</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export {MainPage};