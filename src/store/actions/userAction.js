import { userConstants } from '../constants/userConstants'


// export const userActions = {

//     login,
//     register,
// };

export function login (user){
    console.log("hello");
    return{
        
        type: userConstants.LOGIN,
        payload:{
            email: user.email,
            password: user.password
        }
    }

}

export function register (user){

    return{
        type: userConstants.REGISTER,
        payload:{
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                address: user.address,
                telephone: user.telephone,
                dateOfBirth: user.dateOfBirth,
                password: user.password,
                confirmPassword: user.confirmPassword
        }

    }

}