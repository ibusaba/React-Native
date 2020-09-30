import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            console.log("THE COMMENTS ARE BEING ADDED HERE -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-", action.payload)
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;

            return { ...state, comments: state.comments.concat(comment) };


        default:
            return state;
    }
};