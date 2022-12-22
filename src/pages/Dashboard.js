import React, {useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container'
import { callSearchMovieApi, callTrendingMoviesApi } from '../redux/movie/actions';
import MovieCard from '../components/MovieCard';
import TrendingSection from '../components/TrendingSection';
import MoviesList from '../components/MoviesList'
import SearchSection from '../components/SearchSection';

export default function Dashboard() {
    const {loggedIn} = useSelector(state => state.user)
    const {movies, loading, errors} = useSelector((state)=>state.movie);
    const {query, page, totalPages, searchMovies, searchLoading, searchError} = useSelector((state) => state.movie)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(callTrendingMoviesApi());
    },[])

    return (
        <Container home>
            {
                !loggedIn
                ?
                    <Navigate to="/" />
                :
                    <div className='container pb-5' style={{color: "white"}}>
                    {
                        query.length < 1
                        ?
                            <TrendingSection loading={loading} movies={movies} />
                        :
                        <>
                            <SearchSection loading={searchLoading} movies={searchMovies} />
                        </>
                    }
            </div>
            }
            
        </Container>
    )
}
