//Now we will have to respond to actions
import * as actions from '../actions/postsActions';
export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

//for each action, we will make a case
// that returns the entire state plus whatever change
// we are making it to
// for example GET_POSTS, for ex. all we want to do is tell the app to set loading
// to true;

export default function postsReducer(state = initialState, action){
    switch(action.type){
        case actions.GET_POSTS:
            return {
                ...state,
                loading: true
            }
            case actions.GET_POSTS_SUCCESS:
                return{
                    posts: action.payload,
                    loading: false,
                    hasErrors: false
                }
            case actions.GET_POSTS_FAILURE:
                return{
                    ...state,
                    loading: false,
                    hasErrors: true
                }
        default:
            return state
    }
}