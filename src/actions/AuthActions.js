import firebase from 'firebase';
import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS , LOGIN_USER_FAILED, LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}


export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    }
}


export const loginUser = ({mail, pass}) => {
    return (dispatch) => {

        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(mail, pass)
        .then(user => {
           logginUserSuccess(dispatch, user)
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(mail, pass)
            .then(user => {
               logginUserSuccess(dispatch, user)
            }).catch(() => {
                loginUserFailed(dispatch);
            })
        });
    }
};


const loginUserFailed = (dispatch) => {
    dispatch({type: LOGIN_USER_FAILED});
}

const logginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    //Navigate to main scene. Function comes from the routes scene key name
    Actions.main();
};