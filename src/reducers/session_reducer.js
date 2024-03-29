
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullObj = Object.freeze({
    id: null
});

const sessionReducer = (oldState = nullObj, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const { id } = action.currentUser;
            return merge({}, { id })
        case LOGOUT_CURRENT_USER:
            return nullObj;
        default:
            return oldState;
    }
}

export default sessionReducer;