import { Action } from '@remix-run/router';
import{
    fetch_movie_err,fetch_movie_req,fetch_movie_succ
} from './actions';

const initialState={
    movies: [],
    errors: [],
    loading: false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case fetch_movie_req: return{
            ...state,
            loading:true,
            errors:[]
        }
        case fetch_movie_succ:return {
            ...state,
            loading:false,
            errors:[],
            movies: [...action.payload]
        }
        case fetch_movie_err : return {
            ...state,
            loading:false,
            errors:[...action.payload]
        }
        default: return state
    }

}

export default reducer;