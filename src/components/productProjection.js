import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import '../css/index.css';
import {FaStar} from 'react-icons/fa';
import Footer from './Footer';
import Nav_Product from './Nav_Product';
import T9 from '../images/T9.jpg';




class ProductProjection extends Component {

    render(){

        return(

            
            <div>
                    <Nav_Product/>   
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 my-5 d-flex justify-content-center">
                                <NavLink to="#" className="col-lg-4 my-3 link-item">
                                    <div className="">
                                        <img src={T9} alt="" width="400" height="340" className=""/>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <p className="text-muted fw-bold  me-2 fs-12">Product name:</p>
                                        <p className="text-muted fw-bold fs-12">Tuyaux PVC</p>
                                    </div>
                                    <div className="d-flex ">
                                        <p className="text-muted fw-bold me-2 fs-12">Categories: </p>
                                        <p className="text-muted fw-bold fs-12">Plomberie</p>
                                    </div>
                                    <div className="">
                                        <p className="text-muted fw-bold fs-12">Descriptions:</p>
                                        <h4 className="text-muted fw-bold fs-12">Eléments de construction et évacuation de très bonne qualité </h4>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted  fs-12"><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted fw-bold me-2 fs-12">Prices :</p>
                                        <p className="text-muted fw-bold fs-12 fw-bolder">$3500</p>
                                    </div>
                                    <div className="d-flex">
                                        <NavLink to="" className="col-lg-12 btn bg-orange btn-lg fs-12 text-white rounded-3">Buy</NavLink>
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

function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({

    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductProjection)