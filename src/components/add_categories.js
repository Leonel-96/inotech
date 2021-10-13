import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { addCategories} from '../store/actions/categoryAction'
import Sidebar from './sidebar'

 class Add_categories extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                cat_name:'',
                description:'',
                date:'',
        }
    }
    
              
            handleChange =(e)=>{

                const target = e.target;
                const name = target.name;

                this.setState({
                    [name]:target.value
                })
            }

            handleSubmit=(e)=>{
                e.preventDefault();
                this.props.addCategories(this.state);
            }



    render() {
        console.log(this.state)
        return (
            
            <div>   
                <Sidebar>
                    <div className="container-fluid">
                        <div className=" row justify-content-center">
                            <form className="col-md-9" onSubmit={this.handleSubmit}>
                                <div className="my-3 py-2">
                                    <h3 className="text-muted fw-bold text-capitalize py-2">Add Categories</h3>
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="prod_name">Category name</label>
                                    <input type="text" id="cat_name" name="cat_name" placeholder="Enter Category name" onChange={this.handleChange}  required className={"form-control py-2"} /> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" className="form-control py-2" onChange={this.handleChange} rows="5" ></textarea> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="prod_name">Date</label>
                                    <input type="date" id="date" name="date" placeholder="Enter date" onChange={this.handleChange}  required className={"form-control py-2"} /> 
                                </div>
                                <button className="btn btn-info text-white py-2 my-4">Create Category</button>
                            </form>
                        </div>
                    </div>         
                </Sidebar>

            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){  
    return bindActionCreators({
        addCategories
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Add_categories);
