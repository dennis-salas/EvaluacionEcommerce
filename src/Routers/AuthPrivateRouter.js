import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { NavbarEcommerce } from '../components/NavbarEcommerce';
import { Footer } from '../components/Footer'
import { AppEcommerce } from '../container/AppEcommerce';
import { Product } from '../container/Product';
import { Cart } from '../container/Cart';
import { DetailProduct } from '../components/DetailProduct'


export const AuthPrivateRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <BrowserRouter>
                    <NavbarEcommerce />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={AppEcommerce}
                        />

                        <Route
                            exact
                            path="/Product"
                            component={Product}
                        />

                        <Route
                            exact
                            path="/Cart"
                            component={Cart}
                        />
                        <Route exact
                            path="/:name"
                            component={DetailProduct}
                        />
                        <Redirect to="/" />
                        <Footer />
                    </Switch>
                </BrowserRouter>
            </div>

        </div>
    )
}
