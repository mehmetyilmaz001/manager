import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER } from '../actions/types'

const INITIAL_STATE = { 
    mail: '', 
    pass: '', 
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type){

        case EMAIL_CHANGED:
            return { ...state, email: action.payload}; // create new state object with current state object
        
        case PASS_CHANGED:
            return { ...state, pass: action.payload}; // create new state object with current state object    

        case LOGIN_USER:
            return { ...state, loading: true, error: '' } 

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload};

        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication failed.', loading: false};

        default:
            return state
    }
}