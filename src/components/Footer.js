import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


class Footer extends React.Component{

    render(){

        return(
            <section className="">
                <div className="container-fluid">
                    <div className="row justify-content-center bg-dark">
                        <div className="d-flex justify-content-center">
                        <span className="text-light fs-12 py-2">Subscribe to our newsletter to get updates on our latest offers!</span>
                            <form className="d-flex justify-content-center col-lg-6 p-5">
                                
                                <div className="me-2">
                                    
                                    <input type="email" name="email" className="form-control fs-12 rounded-3" placeholder="Enter E-mail Address"/>
                                </div>
                                
                                   <div><button type="submit" className="btn btn-outline-light me-2 rounded-3 fs-12">MALE</button></div> 
                                   <div><button type="submit" className="btn btn-outline-light rounded-3 fs-12">FEMALE</button></div>
                               
                            </form>
                        </div>
                    </div>
                    <div className="row bg-black h-75">
                        <div className="col text-center">
                            <h2 className="text-white text-capitalize p-3">Inotech Startup</h2>
                            <p className=" text-light fw-light fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            <div className="d-flex justify-content-center">
                                <NavLink to="" className="mx-3 text-light mx-3">
                                    <FaFacebook className="icon-card"/>
                                </NavLink>
                                <NavLink to="" className="mx-3 text-light mx-3">
                                    <FaTwitter className=" icon-card"/>
                                </NavLink>
                                <NavLink to="" className="mx-3 text-light mx-3">
                                    <FaLinkedinIn className="icon-card"/>
                                </NavLink>
                                <NavLink to="" className="mx-3 text-light mx-3">
                                    <FaInstagram className="icon-card"/>
                                </NavLink>
                                <NavLink to="" className="mx-3 text-light mx-3">
                                    <FaYoutube className="icon-card"/>
                                </NavLink>
                            </div>
                            <p className="text-light py-4 fs-12"> &copy; Copyright 2021 Joas leonel Inotech Startup All right reserved  </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer