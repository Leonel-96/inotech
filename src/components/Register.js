import React ,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { register} from '../store/actions/userAction'
import Nav from './Nav';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const emailRegex =  RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const passwordRegex = RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/);
const telephoneRegex = RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);



class Register extends Component{

    constructor(props){

        super(props);

        this.state = {
                firstname:'',
                lastname:'',
                email:'',
                address:'',
                dateOfBirth:'',
                telephone:'',
                password:'',
                confirmPassword:'',
                formErrors:{
                    firstname:'',
                    lastname:'',
                    email:'',
                    telephone:'',
                    password:'',
                    confirmPassword:''
                }
        }

    }

    

    handleSubmit= (e) =>{
        e.preventDefault()
       
        let formErrors = this.state.formErrors

        for( let i = 0 ;i < this.props.users.length ; i++){

          if (this.state.email === this.props.users[i].email){
                        formErrors.email ='This user already exist'
                    };
        }

        if(formErrors.email === ''){
            this.props.register(this.state)
        }


        

        this.setState({
            formErrors
        })




    }

            handleChange =(e)=>{

                const target = e.target
                const value = target.value
                const name = target.name

                let formErrors = this.state.formErrors

            switch (name) {
                
                case 'firstname':
                    formErrors.firstname = value.length < 3 && value.length > 0 ? 'Minimum 3 characters required' : "";
                    break;
                case 'lastname':
                    formErrors.lastname = value.length < 3 && value.length > 0 ? 'Minimum 3 characters required' : "";
                    break;
                case 'email':
                    formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address';
                    break;
                case 'telephone':
                    formErrors.telephone = telephoneRegex.test(value) ? '': 'Please enter a 10 digit phone number';
                    break;      
                case 'password':
                    formErrors.password = passwordRegex.test(value) ? '' : 'Minimum 8 characters 1 uppercase & lowercase character 1-number 1-special character required';
                    break;
                case 'confirmPassword':
                    formErrors.confirmPassword = this.state.confirmPassword.value === this.state.password.value ? '' : 'Confirm password is not valid';
                    break;         
                default:
                    break;
            }

            this.setState({
                formErrors, 
                [name]: value
            }, () => console.log( this.state) );
        }


    render(){

        const {formErrors} =this.state;
        console.log('Result:',formErrors)
        return(
       
            <div>
        
             <Nav/>
             <section>

                    <div className="container-fluid p-6">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10 my-5">
                            <h2 className="text-orange fw-bold my-3"> Create Account</h2>

                            <form className="row" onSubmit={this.handleSubmit}>

                                    <div className="form-floating my-3 col-lg-6">
                                        
                                        <input type="text" className="form-control border-0 border-bottom px-2" id="uname" placeholder="Firstname...." name="firstname" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="uname">Firstname</label>
                                        {formErrors.firstname.length > 0 &&(<span className="text-danger fs-12 fst-italic"> {formErrors.firstname}</span>)}
                                    </div>

                                    <div className="form-floating my-3 col-lg-6">
                                        
                                        <input type="text" className="form-control border-0 border-bottom px-2" id="lastname" placeholder="Lastname...." name="lastname" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="lastname">Lastname</label>
                                        {formErrors.lastname.length > 0 &&(<span className="text-danger fs-12 fst-italic"> {formErrors.lastname}</span>)}
                                    </div>
                                    <div className="form-floating my-3 col-lg-12">
                                        
                                        <input type="email" className="form-control border-0 border-bottom px-2" id="email" placeholder="Email...." name="email" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="email">Email Address</label>
                                        <div className="valid-feedback">Valid.</div>
                                        <span className="text-danger fs-12 fst-italic"> {formErrors.email}</span>
                                    </div>
                                    <div className="form-floating my-3 col-lg-6">
                                        <input type="date" className="form-control border-0 border-bottom px-2" id="dateOfBirth" placeholder="Date of birth" name="dateOfBirth" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="dateOfBirth">Date of Birth</label>
                                    </div>
                                    <div className="form-floating my-3 col-lg-6">
                                    
                                        <input type="text" className="form-control border-0 border-bottom px-2" id="address" placeholder="Address...." name="address" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="address">Address</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        
                                        <input type="tel" className="form-control border-0 border-bottom px-2" id="telephone" placeholder="Telephone...." name="telephone" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="telephone">Phone number</label>
                                        <span className="text-danger fs-12 fst-italic"> {formErrors.telephone}</span>
                                    </div>
                                    <div className="form-floating my-3">         
                                        <input type="password" className="form-control border-0 border-bottom px-2" id="pwd" placeholder="Password...." name="password" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="pwd" >Password</label>
                                        <span className="text-danger fs-12 fst-italic"> {formErrors.password}</span>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type="password" className="form-control border-0 border-bottom px-2" id="con-pwd" placeholder="Confirm password...." name="confirmPassword" required onChange={this.handleChange}/>
                                        <label className="text-muted" htmlFor="pwd" >Confirm-password</label>
                                        <span className="text-danger fs-12 fst-italic"> {formErrors.confirmPassword}</span>
                                    </div>
                                    <div className="form-group form-check my-3">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="remember" required onChange={this.handleChange}/> I agree on blabla.
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Check this checkbox to continue.</div>
                                        </label>
                                    </div>
                                    <div className="form-group my-3">
                                        <button type="submit" className="btn bg-orange col-lg-12 btn-lg text-white fs-12">Create account</button>
                                    </div>

                                    <div className="my-3 col-lg-12">
                                        <p className="text-center">Already have an account ?</p>
                                        <NavLink to="/login" className="nav-link text-center">LOGIN</NavLink>
                                    </div>
                                    
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
function mapStateToProps(state){
    return {
        users:state.users
    }
}

function mapDispatchToProps(dispatch){  
    return bindActionCreators({
        register
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);