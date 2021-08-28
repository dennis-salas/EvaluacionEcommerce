import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { Spinner } from "react-bootstrap";
import { AuthRoute } from './AuthRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { login } from '../actions/auth'
import { AuthPrivateRouter } from './AuthPrivateRouter'

const AppRouter = () => {
    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)

            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden"> Cargando...</span>
            </Spinner>
        )
    }


    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={AuthRoute}
                    isAuthenticated={isLooggedIn}
                />

                <PrivateRoute
                    exact
                    path="/"
                    component={AuthPrivateRouter}
                    isAuthenticated={isLooggedIn}
                />

                <Redirect to="/auth/Login" />


            </Switch>
        </Router>
    )
}

export default AppRouter
