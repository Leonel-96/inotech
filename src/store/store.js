import { createStore } from 'redux';
import rootReducer from '../store/reducers/rootReducer'
import usersData from '../usersData';


const data = {
    users: usersData,
    products:[],
    categories:[],
};

export default function configureStore(initialState = data){

        return createStore(
            rootReducer,
            initialState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
        );
};

 

