import React, { Component } from 'react'
import { FaAngleRight, FaHome, FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../css/sidebar.css'
import '../css/dashboard.css'
import '../css/add_product.css'
import image2 from '../images/image2.jpg'

export default class sidebar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-warning py-2" id="navbar-example3">
                    <div className="container-fluid p-0">
                        <div className="col-lg-2 text-center">
                            <NavLink to="/dashboard" className="navbar-brand text-light fw-bold py-3">
                                <img src={image2} alt="..."  width="30" height="24" className="me-3"/>
                                Inotech Startup
                            </NavLink>
                        </div>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse justify-content-end align-items-end col-lg-10 bg-warning" id="nav">
                            <ul className="navbar-nav"  data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                                <li className="nav-item"><NavLink to="" className="nav-link text-white">Home</NavLink></li>
                                <li className="nav-item"><NavLink to="" className="nav-link text-white">Home</NavLink></li>
                                <li className="nav-item"><NavLink to="" className="nav-link text-white">Home</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="">
                    <div className="container-fluid">
                        <div className="row vh-100">
                            <div className="col-lg-2  bg-dark">
                                <ul className="navbar-nav flex-column mt-3"  data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                                    <li className="nav-item dropdown py-2 ">
                                        <NavLink to="" className="nav-link px-5 text-white fw-bold position-relative fs-12"><FaHome className="position-absolute start-0 top-50 translate-middle-y"/>Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown py-2">
                                        <NavLink to="" className="nav-link px-5 text-white fw-bold position-relative fs-12"><FaUserCircle className="position-absolute start-0 top-50 translate-middle-y"/>Profile</NavLink>
                                    </li>
                                    <li className="nav-item dropdown py-2 ">
                                        <NavLink to="" className="nav-link px-5 dropdown-toggle fw-bold text-white position-relative fs-12" id="sidebarDropdown" data-bs-toggle="dropdown"><FaHome className="position-absolute start-0 top-50 translate-middle-y"/> Products <FaAngleRight className="position-absolute end-0 top-50 translate-middle-y"/></NavLink>
                                        <ul className="dropdown-menu py-0 bg-primary w-100 fw-bold" aria-labelledBy="sidebarDropdown">
                                            <li className="px-2"><NavLink to="/view-products" className="py-2 nav-link fs-12 text-white">View products</NavLink></li>
                                            <li className="px-2"><NavLink to="/add-products" className="py-2 nav-link fs-12 text-white">Add products</NavLink></li>
                                            <li className="px-2"><NavLink to="" className="py-2 nav-link fs-12 text-white">Update products</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown py-2">
                                        <NavLink to="" role="button" data-bs-toggle="dropdown" className="nav-link px-5 dropdown-toggle fw-bold text-white position-relative fs-12"><FaHome className="position-absolute start-0 top-50 translate-middle-y"/> Categories <FaAngleRight className="position-absolute end-0 top-50 translate-middle-y"/></NavLink>
                                        <ul className="dropdown-menu py-0 bg-primary w-100 fw-bold">
                                            <li className="px-2"><NavLink to="/view-categories" className="py-2 nav-link fs-12 text-white">View categories</NavLink></li>
                                            <li className="px-2"><NavLink to="/add-categories" className="py-2 nav-link fs-12 text-white">Add categories</NavLink></li>
                                            <li className="px-2"><NavLink to="" className="py-2 nav-link fs-12 text-white">Update categories</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-10">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
