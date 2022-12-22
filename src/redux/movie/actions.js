import axios from "axios";

const token = "3c6c020b04b6365e6342daab4ae7ff96"

export const change_query = "change_query";

export const fetch_movie_req = "fetch_movie_req"
export const fetch_movie_succ = "fetch_movie_succ"
export const fetch_movie_err = "fetch_movie_err"

export const search_movie_req = "search_movie_req"
export const search_movie_succ = "search_movie_succ"
export const search_movie_err = "search_movie_err"

export const setQuery = (query) => {
    return {
        type: change_query,
        payload: query
    }
}


export const fetchMovieReq  = ()=>{
    return{
        type:fetch_movie_req
    }
}

export const fetchMovieSucc  = (movies)=>{
    return{
        type:fetch_movie_succ,
        payload:movies

    }
}

export const fetchMovieErr  = (errors)=>{
    return{
        type:fetch_movie_err,
        payload:errors
    }
}

export const callTrendingMoviesApi = ()=>{
    return (dispatch)=>{
        dispatch(fetchMovieReq())
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key="+token).then((res)=>{
            console.log(res.data.results[0]);
            dispatch(fetchMovieSucc(res.data.results))
        }).catch((e)=>{
            dispatch(fetchMovieErr(["Something went wrong"]))

        })


    }
}


export const searchMovieReq  = (page)=>{
    return{
        type: search_movie_req,
        payload: page
    }
}

export const searchMovieSucc  = (movies, total_pages)=>{
    return{
        type: search_movie_succ,
        payload: {
            totalPages: total_pages,
            movies: movies
        }
    }
}

export const searchMovieErr  = (error)=>{
    return{
        type: search_movie_err,
        payload: error
    }
}

export const callSearchMovieApi = (query, page)=>{
    return (dispatch)=>{
        dispatch(searchMovieReq(page))
        axios({
            method: 'GET',
            url: "https://api.themoviedb.org/3/search/movie",
            params: {
                api_key: token,
                language: "en-US",
                page: page,
                include_adult: false,
                query: query
            }
        }).then((res)=>{
            console.log(res.data);
            dispatch(searchMovieSucc(res.data.results, res.data.total_pages))

        }).catch((e)=>{
            return dispatch(searchMovieErr("Something went wrong"));
        })
    }
}

