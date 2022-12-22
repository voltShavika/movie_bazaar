import {LOGIN_ERR, LOGIN_REQ, LOGIN_SUC, LOGOUT_REQ} from './actions'

const initialState = {
    loggedIn:false,
    user: {},
    loading:false,
    errors: []
}

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case LOGIN_REQ: return {
            ...state,
            loggedIn: false,
            user: {},
            userLoading: true
        }
        case LOGIN_SUC: return {
            ...state,
            loggedIn: true,
            user: action.payload,
            userLoading: false
        }
        case LOGIN_ERR: return {
            ...state,
            loggedIn: false,
            user: {},
            userLoading: false
        }
        case LOGOUT_REQ: return {
            ...state,
            loggedIn: false,
            user: {},
        }
        default: return state
    }

}
export default reducer;