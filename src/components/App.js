import React , {Component} from 'react'
import {BrowserRouter , Switch ,Route} from 'react-router-dom'
import Home from './Home'
import Dashboard from './dashboard'
import Register from './Register'
import Login from './Login'
import Add_products from './add_products'
import View_products from './view_products'
import Add_categories from './add_categories'
import View_Categories from './view_categories'
import Sidebar from './sidebar'
import ProductProjection from './productProjection'
import Stock from './Stock'


class App extends Component{

    render(){

        return(
            <section>
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/" component={ Home} />
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={ Register} />
                        <Route exact path="/dashboard" component={ Dashboard} />
                        <Route exact path="/add-products" component={ Add_products} />
                        <Route exact path="/add-categories" component={ Add_categories} />
                        <Route exact path="/view-products" component={ View_products} />
                        <Route exact path="/view-categories" component={ View_Categories} />
                        <Route exact path="/sidebar" component={ Sidebar} />
                        <Route exact path="/product-projection" component={ProductProjection}/>
                        <Route exact path="/stock" component={Stock}/>            
                    </Switch>
                </BrowserRouter>
            </section>
        )
    }
}

export default App