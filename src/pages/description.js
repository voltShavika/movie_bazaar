import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate, useParams, useSearchParams} from 'react-router-dom'
import Container from '../components/Container';
import MoviesList from '../components/MoviesList';

export default function Description() {
  const [searchParams] = useSearchParams();
  const {index} = useParams();
  const {loggedIn} = useSelector(state => state.user);
  const {movies, searchMovies}  = useSelector((state)=>state.movie)

  console.log(searchParams.get("type"));
  const movie = searchParams.get("type") == "search"?searchMovies[index]:movies[index]
  console.log(movie);
  return (
    <Container>
      {
        !loggedIn && <Navigate to="/" />
      }
      {
        movie && 
        <>
          <div
            className="bg-image p-5 shadow-1-strong rounded mb-5 text-white"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: "400px"
            }}
          ></div>
          <div style={{color: "white"}}>
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <div className='text-center'>
                  <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} height="300"/>
                </div>
              </div>
              <div className='col-md-9 col-sm-6'>
                <h1>{movie.title}</h1>
                <h5>{movie.release_date}</h5>
                <hr/>
                <h6>Description:</h6>
                <p>{movie.overview}</p>
                <hr/>
                <h6>Ratings: <span className='ms-2 badge bg-success'>{movie.vote_average}</span></h6>
                <h6>Vote Counts: <span className='ms-2 badge bg-warning'>{movie.vote_count}</span></h6>
              </div>
            </div>
            <br/>
            <hr/>
            <h3>More Popular Movies</h3>
            <br/>
            <MoviesList movies={movies.slice(0,6)} type="trending" />
          </div>
        </>
      }
      
    </Container>
    
  )
}
