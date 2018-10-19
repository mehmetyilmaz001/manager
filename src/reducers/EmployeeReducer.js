import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';


const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            
            return action.payload;
        default:
            return state
    }
}