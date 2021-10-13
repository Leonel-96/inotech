import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { FaRegTrashAlt, FaPencilAlt,FaPlus } from 'react-icons/fa'
import {addCategories} from '../store/actions/categoryAction'
import Sidebar from './sidebar'


class View_Categories extends Component {
    render() {
        return (
            <div>
                    <Sidebar>
                        <div className="container-fluid">
                                <div className=" row justify-content-center">
                                    <div className="col-lg-11">
                                    <div className="my-3"><h3 className="text-muted fw-bold py-2">List of Categories</h3></div>
                                    <div className="mb-4"><NavLink to="/add-products" className="nav-link fw-bold py-3 h5 text-primary text-hover"><FaPlus className="fs-14"/>  Add Categories</NavLink></div>
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Categories Name</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th>Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                { this.props.categories.map((category,index) =>(

                                                    <tr>
                                                        <th>{index}</th>
                                                        <td>{category.cat_name}</td>
                                                        <td>{category.description}</td>
                                                        <td>{category.date}</td>
                                                        <td className="d-flex justify-content-around">
                                                            <button type="button" className="btn btn-primary"><FaPencilAlt/></button>
                                                            <button type="button" className="btn btn-danger"><FaRegTrashAlt/></button>
                                                        </td>
                                                    </tr>

                                                ))}
                                                
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

    return{
        categories: state.categories
    }
}
function mapDispatchToProps(dispatch){

    return bindActionCreators({
        addCategories
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(View_Categories)
