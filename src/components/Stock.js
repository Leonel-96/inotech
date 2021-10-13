import React, { Component } from 'react';
import Footer from '../components/Footer';
import Nav_Product from './Nav_Product';
import T9 from '../images/T9.jpg';
import {FaStar} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class Stock extends Component {

    render() {
        return (
            <div>
                <Nav_Product/>
                
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 my-5 row row justify-content-center">
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted text-capitalize fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3  mt-3">
                                        <div className="d-flex ">
                                            <p className="text-muted  fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted text-capitalize fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                        <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="#" className="col-lg-3 my-3 mx-3 link-item shadow rounded-3">
                                    <div className="">
                                        <img src={T9} alt=""  height="200" className="w-100"/>
                                    </div>
                                    <div className="px-3 mt-3">
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold  me-2 fs-12">Product name :</p>
                                            <p className="text-muted fw-bold fs-12">Tuyaux PVC</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted fw-bold me-2 fs-12">Categories : </p>
                                            <p className="text-muted fw-bold fs-12">Plomberie</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted fs-12"> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="text-muted  fw-bold">$3500</p>
                                        </div>
                                    </div>
                                </NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
