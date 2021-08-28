import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../container/Login'
import { Register } from '../container/Register'

export const AuthRoute = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route
                        exact
                        path="/auth/Login"
                        component={Login}
                    />

                    <Route
                        exact
                        path="/auth/register"
                        component={Register}
                    />

                    <Redirect to="/auth/Login" />

                </Switch>
            </div>

        </div>
    )
}