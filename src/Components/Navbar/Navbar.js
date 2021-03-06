import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/blogger-logo1.jpg'
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#nav">
      <img className='' src={logo} alt="" width="100px" height="50px" class="d-inline-block align-text-top"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav me-auto text-dark">
        <li class="nav-item">
        <NavLink
                className="Nav_link text-dark mx-3 decoration"
                to="/home"
                activeClassName="selected"
              >
                Home
              </NavLink>
        </li>
        <li class="nav-item">
       
        <NavLink
                className="Nav_link text-dark mx-3 decoration"
                to="/newsfeed"
                activeClassName="selected"
              >
                Newsfeed
              </NavLink>
        </li>
        <li class="nav-item">
       
        <NavLink
                className="Nav_link text-dark mx-3 decoration"
                to="/contact"
                activeClassName="selected"
              >
                Contact
              </NavLink>
             
        <NavLink
                className="Nav_link text-dark mx-3 decoration"
                to="/registration"
                activeClassName="selected"
              >
                Registration
              </NavLink>
        </li>
        
        {
            user.email&&
            <Link to="/dashboard">
              <button className="btn btn btn-outline-danger me-3">Dashboard</button>
            </Link>
          }
            <li className="nav-item nav-text text-dark">Welcome: { user?.displayName}</li>
            {
             (user.photoURL && user.email) &&  <img
             src={user?.photoURL}
             height="40px"
             style={{ borderRadius: "50%" }}
             width="40px"
             alt=""
             className="pull-left img-circle login"
           />
           }
          </ul>
          
        <div className='ms-auto'>
          
        {user.email ? (
             
             <div>
               <button
               onClick={logOut}
               className="btn btn btn-dark "
               type=""
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Logout
             </button>
             </div>
           ) : (
             <NavLink to="/login">
               <button
                 className="btn btn-dark mx-auto"
                 type=""
                 data-bs-toggle="tooltip"
                 data-bs-placement="bottom"
               >
                 Login
               </button>
             </NavLink>
           )}
        </div>
           
        
       </div>
    </div>
</nav>
        </div>
    );
};

export default Navbar;