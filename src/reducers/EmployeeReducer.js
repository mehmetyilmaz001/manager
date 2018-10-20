import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';


const INITIAL_STATE = {
    loading: true,
    data: null
};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload};
        default:
            return state
    }
}