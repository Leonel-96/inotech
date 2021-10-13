import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome,FaUser,FaSignOutAlt,FaRegQuestionCircle,FaSearch} from 'react-icons/fa';
import T2  from '../images/T2.jpg'
export default class Nav_Product extends Component {
    render() {
        return (
            <div>
                <section>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dpGreen py-4 "></nav>
                    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
                        <div className="container-fluid py-2">
                                    <NavLink to="" className="navbar-brand fw-bold text-info  w-25" >
                                        <img src={T2} alt="" width="30" height="24" className="d-inline-block align-text-top mx-3"/>
                                        Inotech Startup
                                    </NavLink>
                                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse" id="nav">
                                
                                        <form className="col-lg-6 d-none d-lg-flex me-auto">
                                                <div className="position-relative me-2 w-75">
                                                    <input type="search" className="form-control ps-5 py-2 rounded-3 fs-12  text-muted" placeholder="Search products, brands and categories"/> <FaSearch className="position-absolute top-50 start-0 ms-2 translate-middle-y text-muted"/> 
                                                </div>
                                                <button type="submit" className="btn bg-orange text-white  rounded-2">Search</button>
                                        </form>
                                        <ul className="navbar-nav fs-12 text-muted">
                                            <li className="nav-item ">  
                                                <NavLink to="/" className="nav-link active position-relative ps-3" aria-current="page"><FaHome className="position-absolute top-50 start-0 translate-middle"/>Dashboard</NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink to="/" className="nav-link position-relative ps-3 mx-3"><FaUser className="position-absolute top-50 start-0 translate-middle"/>Login</NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink to="/" className="nav-link position-relative ps-3 me-3"><FaRegQuestionCircle className="position-absolute top-50 start-0 translate-middle"/>Help</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/" className="nav-link position-relative ps-3 "><FaSignOutAlt className="position-absolute top-50 start-0 translate-middle"/>Sign Up</NavLink>
                                            </li>
                                        </ul>
                                </div> 
                        </div>
                    </nav>
                </section>
            </div>
        )
    }
}
