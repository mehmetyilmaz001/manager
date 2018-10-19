import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday',
    employees: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value}
        
        case EMPLOYEE_CREATE:
            return INITIAL_STATE; // Clear form values after employee create action with empty state object
        
        default:
            return state;
    }
}