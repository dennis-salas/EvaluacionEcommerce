
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import { NavbarEcommerce } from '../components/NavbarEcommerce';
import { Footer } from '../components/Footer'
import { AppEcommerce } from '../container/AppEcommerce';
import { Product } from '../container/Product';
import { DetailProduct } from '../components/DetailProduct';
import { Cart } from '../container/Cart'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarEcommerce />
            <Switch>
                <Route exact path="/" component={AppEcommerce} />
                <Route exact path="/Product" component={Product} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/:name" component={DetailProduct} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter