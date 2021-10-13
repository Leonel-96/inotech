import React ,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addProduct} from '../store/actions/productAction'
import Nav_Product from './Nav_Product';
import Footer from './Footer'
import '../css/dashboard.css'
import T5 from '../images/T5.jpg'
import T6 from '../images/T6.jpg'
import T9 from '../images/T9.jpg'
import Jo1 from '../images/Jo1.jpg'
import Jo2 from '../images/Jo2.jpg'
import Jo3 from '../images/Jo3.jpg'
import {FaStar, FaAngleRight, FaShoppingBag, FaMobile,FaRedhat, FaHeartbeat, FaPlane, FaAppleAlt, FaTabletAlt, FaLaptop, FaTv, FaClipboard, FaMedkit, FaCouch,FaXbox} from 'react-icons/fa'



class Dashboard extends Component {
    render(){
        console.log('Dash_display',this.props.products);
    return (
        <div className="bg-grey">
            <Nav_Product/>

            <section className="p-5 mt-2">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                                <div className="row row justify-content-between">
                                        <div className="w-18 bg-white rounded-1 d-none d-md-block d-md-none d-lg-block py-4 ps-2">
                                            <div className="text-muted d-flex justify-content-start ps-4 align-items-center "><h5 className="fw-bold">Inotech Startup</h5></div>
                                            <ul className="nav-list-item">
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted  px-2"><FaAppleAlt/><span className="ms-3 fs-12">Building material</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaTabletAlt/><span className="ms-3 fs-12">Phones & Tablets</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaCouch/><span className="ms-3 fs-12">Home & Office</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaLaptop/><span className="ms-3 fs-12">Computing</span>  </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaTv/><span className="ms-3 fs-12">Electronics</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaRedhat/><span className="ms-3 fs-12">Fashion</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaXbox/><span className="ms-3 fs-12">Gaming</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaMedkit/><span className="ms-3 fs-12">Health & Beauty</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaClipboard/><span className="ms-3 fs-12">Others</span> </NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="demo" className="carousel carousel-light slide w-64 col-sm-12" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button"  data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button"  data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button"  data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval="800">
                                                    <img src={Jo1} className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="700">
                                                    <img src={Jo2} className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={Jo3} className="d-block w-100" alt="..."/>
                                                </div>
                                            </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                        </div>
                                    
                                        <div className="w-18 rounded-1  d-none d-md-block d-md-none d-lg-block bg-white py-4 ps-2">
                                            <ul className="nav-list-item">
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaRedhat/><span className="ms-3 fs-12">Fashion</span> </NavLink>
                                                </li>
                                                <li className="nav-item position-relative">
                                                    <NavLink to="" className="nav-link text-muted fs-12 px-2"><FaXbox/><span className="ms-3 fs-12">Gaming</span> </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                        </div>
                    </div>  
                </div>
            </section>

            <section className="px-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                       <div className="col-lg-9">
                               <div className="row row justify-content-between">
                                    <div className= "w-24 py-3 rounded-1 bg-white"><span className="ms-1 icon-circle-1"><FaShoppingBag className="icon-size text-white"/></span></div>
                                    <div className=" w-24 py-3 rounded-1 bg-white"><span className="ms-1 icon-circle-2"><FaMobile className="icon-size text-white"/></span></div>
                                    <div className=" w-24 py-3 rounded-1 bg-white"><span className="ms-1 icon-circle-3"><FaHeartbeat className="icon-size text-white"/></span></div>
                                    <div className=" w-24 py-3 rounded-1 bg-white"><span className="ms-1 icon-circle-4"><FaPlane className="icon-size text-white"/></span></div>
                               </div>
                       </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 rounded-2 mb-5 px-0 bg-white">
                            <div className="text-white fw-bold bg-purple py-2 px-4 d-flex justify-content-between position-relative rounded-top">
                                <span className="pt-2">Produits</span>
                                <span className=""><NavLink to="/stock" className="nav-link text-white position-relative">See More<FaAngleRight className="position-absolute top-50 end-0 translate-middle-y"/></NavLink></span>
                                
                            </div>

                            <div className="d-md-flex justify-content-around overflow-auto p-3 ">

                                {this.props.products.map((product,index)=>(
                                    <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                        <div className="cart-img">
                                            <img src={product.image} alt="" className="d-block w-100"/>
                                        </div>
                                        <div className="cart-body">
                                            <h6 className="text-muted">{product.prod_name} </h6>
                                            <p className="text-muted">{product.description}</p>
                                            <p className="text-muted fw-bold">{product.price} FCFA</p>
                                            <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 rounded-2  px-0 bg-white">
                            <div className="text-white fw-bold bg-purple py-2 px-4  h-30 d-flex justify-content-between rounded-top mb-2">
                                <span className="pt-2">Categories</span>
                                <span className=""><NavLink to="" className="nav-link text-white position-relative">See More<FaAngleRight className="position-absolute top-50 end-0 translate-middle-y"/></NavLink></span>
                            </div>

                            <div className="d-md-flex justify-content-around overflow-auto p-3">
                                <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                    <div className="cart-img">
                                        <img src={T9} alt="..." className="d-block w-100"/>
                                    </div>
                                    <div className="cart-body">
                                        <h6 className="text-muted">Tuyaux</h6>
                                        <p className="text-muted">tempor incididunt ut labore et dolore magna</p>
                                        <p className="text-muted fw-bold">$1500</p>
                                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                    </div>
                                </NavLink>
                                <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                    <div className="cart-img">
                                        <img src={T6} alt="" className="d-block w-100"/>
                                    </div>
                                    <div className="cart-body">
                                        <h6 className="text-muted">Tuyaux</h6>
                                        <p className="text-muted">tempor incididunt ut labore et dolore magna</p>
                                        
                                        <p className="text-muted fw-bold">$1500</p>
                                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                        
                                    </div>
                                </NavLink>
                                <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                    <div className="cart-img">
                                        <img src={T5} alt="" className="d-block w-100"/>
                                    </div>
                                    <div className="cart-body">
                                        <h6 className="text-muted">Tuyaux</h6>
                                        <p className="text-muted">tempor incididunt ut labore et dolore magna</p>
                                        <p className="text-muted fw-bold">$1500</p>
                                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                    </div>
                                </NavLink>
                                <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                    <div className="cart-img">
                                        <img src="" alt="" className="d-block w-100"/>
                                    </div>
                                    <div className="cart-body">
                                        <h6 className="text-muted">Tuyaux</h6>
                                        <p className="text-muted">tempor incididunt ut labore et dolore magna</p>
                                        <p className="text-muted fw-bold">$1500</p>
                                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                    </div>
                                </NavLink>
                                <NavLink to="" className="col-sm-8 w-19 shadow-cart link-item">
                                    <div className="cart-img">
                                        <img src="" alt="" className="d-block w-100"/>
                                    </div>
                                    <div className="cart-body">
                                        <h6 className="text-muted">Tuyaux</h6>
                                        <p className="text-muted">tempor incididunt ut labore et dolore magna</p>
                                        <p className="text-muted fw-bold">$1500</p>
                                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
            <Footer/>
            
        </div>       
    )
}
}
function mapStateToProps(state){
    return{
        products:state.products
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addProduct
    },dispatch)
}
export default connect (mapStateToProps, mapDispatchToProps)(Dashboard)
