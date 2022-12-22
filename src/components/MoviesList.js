import React from 'react'
import MovieCard from './MovieCard'

export default function MoviesList({loading, movies, type}) {
  return (
    <div>
        {
            loading && 
            <div className='text-center'>
                <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        <div className='row'>
            {
                movies.map((movie, i)=>{
                    return(
                        <div className='col-md-2 col-sm-4' key={i}>
                            <MovieCard movie={movie} i={i} type={type}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
