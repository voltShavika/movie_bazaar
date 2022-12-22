import React from 'react'

export default function MovieSlider({movies}) {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    movies.map((movie, i) => {
                        if(i == 0){
                            return (<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide" + i} key={i}></button>)
                        }
                        else{
                            return (<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} aria-label={"Slide" + i} key={i}></button>)
                        }
                    })
                }
            </div>
            <div className="carousel-inner">
                {
                    movies.map((movie, i) => {
                        if(i == 0){
                            return(
                                <div className="carousel-item active" key={i}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-block w-100" alt="..." /> 
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>{movie.title}</h2>
                                    </div>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div className="carousel-item" key={i}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-block w-100" alt="..." /> 
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>{movie.title}</h2>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
