import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieCard({movie, i, type}) {
  return (
    <>
        <div className="card bg-dark">
            <Link to={`/movies/${i}?type=${type}`}>
                <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} className="card-img-top" />
            </Link>
            <h3 style={{marginTop: "5px", marginLeft: "5px", zIndex: 5, position: "absolute"}}>
                <span className='badge rounded-pill bg-success'>
                    {movie.vote_average.toFixed(1)}
                </span>
            </h3>
            <div className="card-body">
                
            </div>
        </div>
    </>
  )
}
