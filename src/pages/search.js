import React from 'react'
import { useSelector } from 'react-redux'

export default function Search() {
  const {movies} = useSelector((state)=>state.movie) 
  return (
    <div className='container'>
      <input className='form-control' type="text"/>
      {
        movies.map((movie,i)=>{
          return (
            <div className='col-md-2' key={i}>
              <p>{movie[i].title}</p>
              <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} height="100" />
              <p>{movie[i].vote_average}</p>


            </div>
          )

        })
      }


    </div>
  )
}
