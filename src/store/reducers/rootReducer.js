import { combineReducers } from 'redux'
import productReducer  from '../reducers/productReducer'
import userReducer from '../reducers/userReducer'
import categoryReducer from '../reducers/categoryReducer'


const rootReducer = combineReducers({

    products:productReducer,
    users:userReducer,
    categories:categoryReducer,
})

export default rootReducer




