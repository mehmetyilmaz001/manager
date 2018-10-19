import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = ({prop, value}) => {
    return{
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}


export const employeeCreate = ({name, phone, shift}) => {

    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => 
            { 
                Actions.employeeList({ type: 'reset' }); // type: 'reset'  this option prevenets back button creation on employee list screen
                dispatch({ type: EMPLOYEE_CREATE})
                
            }) 
    }
    
}


export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch( {type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()} );
            });
    }
}