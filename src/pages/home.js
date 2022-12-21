import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { callTrendingMoviesApi } from '../redux/movie/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {
    const {movies, loading, errors} = useSelector((state)=>state.movie);
    const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(callTrendingMoviesApi());
   },[])
   
    return (
        <div className='container'>
            <div className='row'>
                {
                    loading && 
                    <div className='text-center'>
                        <div className="spinner-border text-warning" role="status">
                           <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    movies.map((movie,i)=>{
                        return(
                            <div className='col-md-2 col-sm-4' key={i}>
                                <p>{movie.title}</p>
                                <p>{movie.vote_average}</p>
                                <Link to={"/movies/"+i}>
                                    <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} height="100" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
