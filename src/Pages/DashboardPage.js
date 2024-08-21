import React, { useState } from 'react'
import Dashboard from '../Component/Dashboard/Dashboard';
import Navbar from '../Component/Navbar/Navbar';

const DashboardPage = () => {
  const [showNavbar,setShowNavbar] = useState(false);
  return (
    <div style={{display:"flex"}}>
    <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
    <Dashboard setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default DashboardPage