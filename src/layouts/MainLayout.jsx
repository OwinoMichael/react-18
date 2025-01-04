import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar.jsx';
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <JobListings/>
        <ViewAllJobs/>
    </>
  )
}

export default MainLayout