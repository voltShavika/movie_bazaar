import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MoviesList from './MoviesList'
import { callSearchMovieApi } from '../redux/movie/actions';


export default function SearchSection({loading, movies}) {
    const {query, page, totalPages} = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(callSearchMovieApi(query, page + 1));
    }
    return (
    <>
        <h2>Search Results</h2>
        <hr/>
        <MoviesList loading={loading} movies={movies} type="search" />
        {
            page < totalPages && 
            <div className='text-center'>
                <button className='btn btn-outline-warning' onClick={handleLoadMore}>Load More</button>
            </div>
        }
    </>
    )
}
