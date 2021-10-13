import React ,{Component} from 'react'
import '../css/index.css'
import T21 from '../images/T21.jpg'
import T7 from '../images/T7.jpg'
import T9 from '../images/T9.jpg'
import T10 from '../images/T10.jpg'
import T3 from '../images/T3.jpg'

import{FaAward, FaCogs, FaDesktop, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../css/index.css'
import Nav from './Nav'
import Footer from './Footer'



class Home extends Component{


    render(){

        return(
       
            <div>
              <Nav/>
                  <section className="container-fluid">
                    <div className="row justify-content-center align-items-center images">
                        <div className="col-sm-10 text-center">
                            
                            <h1 className="h1 display-2 fw-bolder text-capitalize text-info">Inotech Startup</h1>

                            <h2 className="fw-bold text-light fst-italic mx-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</h2>

                            <NavLink to="#" className="btn btn-primary btn-md  m-2">Contact us </NavLink>
                            <NavLink to="#" className="btn btn-danger btn-md  m-2">Join us</NavLink>
                        </div>   
                    </div>
                    
                </section>

                <section className="bg-light p-3">

                   <div className="container-fluid">
                        <div className="row mb-4">
                            <div className="col text-center">
                                <h2 className="text-info display-2">
                                    Categories
                                </h2>
                                <p className="lead text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labor
                                </p>
                                
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-4 text-center my-2">
                                <FaDesktop className="text-info icon-desk"></FaDesktop>
                                <h2 className="text-secondary fw-bold">Developement</h2>
                                <p className="text-muted m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                <NavLink to="" className="btn btn-outline-info btn-md text-info bg-light">Learn more</NavLink>
                            </div>

                            <div className="col-lg-4 text-center my-2">
                            
                                <FaAward className="text-info icon-desk"></FaAward>
                                <h2 className="text-secondary fw-bold">Design</h2>
                                <p className="text-muted m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                <NavLink to="" className="btn btn-outline-info btn-md text-info bg-light">Learn more</NavLink>

                            </div>

                            <div className="col-lg-4 text-center my-2">
                                <FaCogs className="text-info icon-desk"></FaCogs>
                                <h2 className="text-secondary fw-bold">Creativity</h2>
                                <p className="text-muted m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                <NavLink to="" className="btn btn-outline-info btn-md text-info bg-light">Learn more</NavLink>
                            </div>
                            
                        </div>
                   </div>

                </section>
                <section className="p-5">
                    <div className="container-fluid">
                    <div className="row mb-4">
                            <div className="col text-center">
                                <h2 className="text-info display-2">
                                    Projects
                                </h2>
                                <p className="lead text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labor
                                </p>
                                
                            </div>
                        </div>
                        <div className="row row mb-4">

                            <div className="col-lg-3 col-sm-6">

                                <img src={T21} className="img-thumbnail" alt=""/>
                                <h3 className="text-info my-3">Project 1</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="col-lg-3 col-sm-6">

                                <img src={T7} className="img-thumbnail" alt=""/>
                                <h3 className="text-info my-3">Project 2</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="col-lg-3 col-sm-6">

                                <img src={T9} className="img-thumbnail" alt=""/>
                                <h3 className="text-info my-3">Project 3</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="col-lg-3 col-sm-6">

                                <img src={T10} className="img-thumbnail" alt=""/>
                                <h3 className="text-info my-3">Project 4</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-sm-5 p-5 bg-secondary">
                    <div className="container-fluid">
                    <div className="row mb-4">
                            <div className="col text-center">
                                <h2 className="text-info display-2">
                                    Team
                                </h2>
                                <p className="lead text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labor
                                </p>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <img src={T3} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h3 className="text-muted">Leonel Sidjou </h3>
                                        </div>
                                        <div className="card-subtitle">
                                            <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                        </div>
                                        <div className="float-end">
                                            <NavLink to="">
                                                <FaFacebook className="text-primary icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaTwitter className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaLinkedin className="linked icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaInstagram className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaYoutube className="text-danger icon-card"/>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img src={T3} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h3 className="text-muted">Tom kean</h3>
                                        </div>
                                        <div className="card-subtitle">
                                            <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                        </div>
                                        <div className="float-end">
                                            <NavLink to="">
                                                <FaFacebook className="text-primary icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaTwitter className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaLinkedin className="linked icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaInstagram className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaYoutube className="text-danger icon-card"/>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <img src={T3} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h3 className="text-muted">Paul Harry</h3>
                                        </div>
                                        <div className="card-subtitle">
                                            <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                        </div>
                                        <div className="float-end">
                                            <NavLink to="">
                                                <FaFacebook className="text-primary icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaTwitter className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaLinkedin className="linked icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaInstagram className="text-info icon-card"/>
                                            </NavLink>
                                            <NavLink to="">
                                                <FaYoutube className="text-danger icon-card"/>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light p-5">
                    <div className="container-fluid">

                        <div className="row mb-4">
                            <div className="col text-center">
                                <h1 className="text-info display-2">
                                    Contact
                                </h1>
                                <p className="lead text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labor
                                </p>
                                
                            </div>
                        </div>

                        <div className="row justify-content-center">
                           <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="text-center text-secondary">
                                <h2 className="">Got a question ?</h2>
                                <p>Stay tuned</p>
                            </div>
                            <NavLink to="" name="contact"></NavLink>
                             <form id="contact" className="text-muted">
                                    <div className="form-group my-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="form-control"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="5" className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-info text-white" type="submit"> Submit</button>
                                </form>
                           </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>

            
              

       
        )
    }
}
export default Home