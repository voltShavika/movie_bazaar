import axios from "axios";

const token = "3c6c020b04b6365e6342daab4ae7ff96"

export const fetch_movie_req = "fetch_movie_req"
export const fetch_movie_succ = "fetch_movie_succ"
export const fetch_movie_err = "fetch_movie_err"

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


