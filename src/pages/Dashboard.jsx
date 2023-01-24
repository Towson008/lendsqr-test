// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthProvider';
import React from 'react'
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';


const Dashboard = () => {

  // const usersList = "";
  return <section>
    <Navbar />
     <h1>Welcome To Lendsqr </h1>
    <br />
    <div className="">{}</div>

    <Link to='/Userdetails'>
      <p>User Details</p>
    </Link>
  </section>
}

export default Dashboard