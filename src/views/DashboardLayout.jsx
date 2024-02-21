import React from 'react';
import SideNavigation from './../components/SideNavigation';
import Navigation from './../components/Navigation';
import Home from './Home';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className="flex h-screen">
            <div>
                <SideNavigation />
            </div>
            <div className='w-full px-4'>
                <Navigation />
                <Outlet />
            </div>

        </div>
    );
}

export default DashboardLayout;
