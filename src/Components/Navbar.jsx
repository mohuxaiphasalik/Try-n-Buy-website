import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>	<div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/" >
                                <h4 className='nav-logo'>Try-n-Buy</h4></Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="#">Categories</a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="#">Learn More</a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2 search-box" type="search" placeholder="Search" aria-label="Search"></input>
                                            <button className="btn  my-2 my-sm-0 search-btn" type="submit">Search</button>
                                        </form>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping nav-fa"></i></a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="#"><i className="fa-solid fa-user  nav-fa"></i></a>
                                    </li>
                                </ul>

                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;