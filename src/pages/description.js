import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

export default function Description() {
  const {index} = useParams();
  const {movies}  = useSelector((state)=>state.movie)
  return (
    <div className='container-fluid'>
      <img src={"https://image.tmdb.org/t/p/original/"+movies[index].backdrop_path} width="100%" height="300"/>
      <h3>{movies[index].title}</h3>
      <p>{movies[index].overview}</p>
      <h3>{movies[index].original_language}</h3>
      <img src={"https://image.tmdb.org/t/p/original/"+movies[index].poster_path} height="300"/>
      
    </div>
  )
}
