import{
    change_query,
    fetch_movie_err,fetch_movie_req,fetch_movie_succ,
    search_movie_req, search_movie_succ, search_movie_err
} from './actions';

const initialState = {
    movies: [],
    errors: [],
    loading: false,
    searchMovies: [],
    searchLoading: false,
    searchError: null,
    page: null,
    totalPages: 1000,
    query: ""
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case change_query: return {
            ...state,
            query: action.payload
        }
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
        case search_movie_req: return{
            ...state,
            page: action.payload,
            searchLoading:true,
            searchError: null
        }
        case search_movie_succ:return {
            ...state,
            searchLoading:false,
            searchError: null,
            totalPages: action.payload.totalPages,
            searchMovies: state.page == 1 ? [...action.payload.movies] : [...state.searchMovies, ...action.payload.movies]
        }
        case search_movie_err : return {
            ...state,
            searchLoading:false,
            searchError: action.payload,
        }
        default: return state
    }

}

export default reducer;