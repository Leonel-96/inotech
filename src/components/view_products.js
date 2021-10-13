import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FaRegTrashAlt, FaPencilAlt,FaPlus } from 'react-icons/fa'
import Sidebar from './sidebar'
import {addProduct} from '../store/actions/productAction'


class View_products extends Component {

    render() {
        console.log('Produits',this.props.products);
        return (
            <div>
                    <Sidebar>
                            <div className="container-fluid">
                                <div className=" row justify-content-center">
                                    <div className="col-lg-11">
                                    <div className="my-3"><h3 className="text-muted fw-bold py-2">List of products</h3></div>
                                    <div className="mb-4"><NavLink to="/add-products" className="nav-link fw-bold py-3 h5 text-primary text-hover"><FaPlus className="fs-14"/>  Add products</NavLink></div>
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Products Name</th>
                                                    <th>Products Categories</th>
                                                    <th>Products Image</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th>Date</th>
                                                    <th>Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {  this.props.products.map((product,index) => (

                                                <tr>
                                                    <th>{index}</th>
                                                    <td>{product.prod_name}</td>
                                                    <td>{product.category}</td>
                                                    <td>{product.image}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.date}</td>
                                                    <td className="d-flex justify-content-around">
                                                        <button type="button" className="btn btn-primary"><FaPencilAlt/></button>
                                                        <button type="button" className="btn btn-danger"><FaRegTrashAlt/></button>
                                                    </td>
                                                </tr>
                                                
                                            ))  }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>
                    </Sidebar>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        products:state.products
    }
}

function mapDispatchToProps(dispatch){  
    return bindActionCreators({
        addProduct
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(View_products);
