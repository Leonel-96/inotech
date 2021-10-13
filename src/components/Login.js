import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import { connect, } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../store/actions/userAction'
import Nav from './Nav'
import Footer from './Footer'
import '../css/index.css'
import '../css/login.css'




class Login extends Component{

      state = {
            users:{
                email:'',
                password:'',
                formErrors:{
                    email:"",
                    password:"",
                }
            }
        }


     handleSubmit = (e) =>{

        e.preventDefault();

        let formErrors =this.state.formErrors;

        if( this.state.email && this.state.password){
            for (  let i= 0; i < this.props.users.length; i++){
                    if(this.state.email === this.props.users[i].email && this.state.password === this.props.users[i].password ){
                        this.props.history.push("/dashboard");
                    }
                    else{
                         formErrors.email = 'Email Address or password is invalid';
                         console.log('Daf:',formErrors.email);
                    }
                
            }   
        }    
    }

    handleChange = (e) =>{

        const target = e.target;
        const name = target.name;
        this.setState({
            [name]:target.value
        })
    }

    render(){
    console.log("Login:",this.props);
        return(

           

            <section>
                <Nav/>
                
                <section>

                    <div className="container-fluid p-6">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8 col-sm-10 my-5">
                            <h2 className="text-orange fw-bold my-3"> Sign In</h2>

                            <form className="row" onSubmit={this.handleSubmit}>

                                <div className="form-floating my-3">
                                    <input type="email" id="email" value={this.state.email} name="email" placeholder="Enter E-mail Address"  onChange={this.handleChange} className= {"form-control border-0 border-bottom  px-4 fs-12"} />
                                    <label htmlFor="email" className="text-muted fs-12">Email Address</label>
                                    <span className="fs-11 text-danger"> {}</span>
                                </div>

                                <div className="form-floating my-3">
                                    <input type="password" id="password" value={this.state.password} name="password" placeholder="Enter password"  onChange={this.handleChange} className= {"form-control border-0 border-bottom  px-4 fs-12"} />
                                    <label htmlFor="password" className="text-muted fs-12" >Password</label>
                                </div>

                                <div className="d-flex flex-column py-2">
                                    <button type="submit" className="btn bg-orange text-white py-2 my-3 fs-12 rounded-2"> LOGIN</button>
                                    <NavLink to="/register" className="btn bg-orange text-white py-2 fs-12 rounded-2">CREATE AN ACCOUNT</NavLink>
                                </div>
                            
                                <p className="text-secondary text-center my-5">
                                    <NavLink to="/register" className="link text-secondary">Forgot password ?</NavLink>
                                </p>
                                    
                            </form>
                            </div>
                        </div>
                    </div>
            
            </section>
            <Footer/>
            </section>
            

            

        )
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

function mapDispatchToProps(dispatch){  
    return bindActionCreators({
        login
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
