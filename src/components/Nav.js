
import React,{Component}from 'react'
import{NavLink} from 'react-router-dom'
import image1 from '../images/image1.jpg'
import '../css/dashboard.css'




class Nav extends Component{

    render(){
        return(
             <header>   
                        <nav className="py-4 bg-dpGreen"></nav>
                        <nav className="navbar navbar-expand-md navbar-light bg-white shadow"  id="navbar-example3">
                            <div className="container-fluid ">
                                <NavLink to="" className="navbar-brand fw-bold text-info " href="#">
                                    <img src={image1} alt="" width="30" height="24" className="d-inline-block align-text-top mx-3"/>
                                    Inotech Startup
                                </NavLink>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse justify-content-end align-items-end" id="nav">
                                    <ul className="navbar-nav my-1 fw-bold" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link active  " aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink to="" className="nav-link  dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>
                                            <ul className="dropdown-menu " aria-labelledby="#dropdownMenu2">
                                                <li><NavLink to="#" className="dropdown-item">Plomberie</NavLink></li>
                                                <li><NavLink to="#" className="dropdown-item">Plomberie</NavLink></li>
                                                <li><NavLink to="#" className="dropdown-item">Plomberie</NavLink></li>
                                                <li><NavLink to="#" className="dropdown-item">Plomberie</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="#" className="nav-link">About us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/#contact" className="nav-link">Contact us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link">Sign In</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link">Sign Up</NavLink>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
    </header>
    
)
}
}
export default Nav