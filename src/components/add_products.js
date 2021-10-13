import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { addProduct} from '../store/actions/productAction'
import Sidebar from './sidebar'

 class Add_products extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                prod_name:'',
                category:'',
                description:'',
                image:'',
                price:'',
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
                this.props.addProduct(this.state);
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
                                    <h3 className="text-muted fw-bold text-capitalize py-2">Add products</h3>
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="prod_name">Product name</label>
                                    <input type="text" id="prod_name" name="prod_name" placeholder="Enter Product name" onChange={this.handleChange}  required className={"form-control py-2"} /> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="category">Product categories</label>
                                    <select id="category" name="category" className="form-select" onChange={this.handleChange}>
                                        <option value="1">Electronique</option>
                                        <option value="2">Telephone & Tablettes</option>
                                        <option value="3">Jeux Video</option>
                                        <option value="4">Informatique</option>
                                        <option value="5">Plomberie</option>
                                    </select> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="image">Product Image</label>
                                    <input id="image" type="file" name="image" placeholder="Enter Product image" onChange={this.handleChange} className="form-control"/> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" className="form-control py-2" onChange={this.handleChange} rows="5" ></textarea> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="prod_name">Date</label>
                                    <input type="date" id="date" name="date" placeholder="Enter date" onChange={this.handleChange}  required className={"form-control py-2"} /> 
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="price">Price</label>
                                    <input id="price" type="number"  name="price" placeholder="Price" onChange={this.handleChange} className="form-control py-2"/> 
                                </div>
                                <button className="btn btn-info text-white py-2 my-4">Create Product</button>
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
        addProduct
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Add_products);
