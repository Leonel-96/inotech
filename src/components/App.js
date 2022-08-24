import React , {Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home';
// import Dashboard from './dashboard'
// import Register from './Register'
// import Add_products from './add_products'
// import View_products from './view_products'
// import Add_categories from './add_categories'
// import View_Categories from './view_categories'
import Sidebar from './sidebar'
import ProductProjection from './productProjection'
import Stock from './Stock'


class App extends Component{

    render(){

        return(
            <section>
                <BrowserRouter >
                
                        <Route exact path="/" component={ Home} />
                        {/* <Route  path="/login" component={Login}/>
                        <Route  path="/register" component={ Register} />
                        <Route  path="/dashboard" component={ Dashboard} />
                        <Route  path="/add-products" component={ Add_products} />
                        <Route  path="/add-categories" component={ Add_categories} />
                        <Route  path="/view-products" component={ View_products} />
                        <Route  path="/view-categories" component={ View_Categories} /> */}
                        <Route  path="/sidebar" component={ Sidebar} />
                        <Route  path="/product-projection" component={ProductProjection}/>
                        <Route  path="/stock" component={Stock}/>            
                
                </BrowserRouter>
            </section>
        )
    }
}

export default App