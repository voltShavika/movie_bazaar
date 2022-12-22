import React, {useRef, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard'
import { callSearchMovieApi } from '../redux/movie/actions';

export default function MoviesList({loading, movies, type}) {
    const {searchLoading, query, page, totalPages} = useSelector(state => state.movie)
    const dispatch = useDispatch();

    const observer = useRef();
    const lastMovieElementRef = useCallback(node => {
        if(type == "trending") return;
        if(searchLoading) return;
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && (page < totalPages)){
                console.log("Visible now");
                dispatch(callSearchMovieApi(query, page + 1));
            }
        })
        if(node) observer.current.observe(node);
    }, [page, searchLoading]);
  return (
    <div>
        <div className='row'>
            {
                movies.map((movie, i)=>{
                    if(i + 1 == movies.length){
                        return (
                            <div ref={lastMovieElementRef} className='col-md-2 col-sm-4' key={i}>
                                <MovieCard movie={movie} i={i} type={type}/>
                            </div>
                        )
                    }else{
                        return (
                            <div className='col-md-2 col-sm-4' key={i}>
                                <MovieCard movie={movie} i={i} type={type}/>
                            </div>
                        )
                    }
                    
                })
            }
        </div>
        {
            loading && 
            <div className='text-center'>
                <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
    </div>
  )
}
