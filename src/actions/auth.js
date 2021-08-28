import { types } from '../types/types';
import { firebase, google } from '../firebase/firebase-config';
import { startLoading, finishLoading } from './actionError'
import Swal from 'sweetalert2'


export const login = (uid, displayName) => ({
    type: types.Login,
    payload: {
        uid,
        displayName
    }
});

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(
                    login(user.uid, user.displayName)

                )
            });

    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(startLoading)
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading)
            })
    }
}

export const startRegister = (name, lastName, email, password) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                );
                console.log(user)
                Swal.fire({
                    position: 'top-center',
                    text: 'Usuario Creado',
                    icon: 'success',
                    title: user.displayName, lastName,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'error al realizar el registro',
                    footer: ''
                })

            })

    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})
