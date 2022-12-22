import userEvent from '@testing-library/user-event'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieSlider from './MovieSlider'
import MoviesList from './MoviesList'

export default function TrendingSection({loading, movies}) {
    const {user} = useSelector(state => state.user)
    return (
    <div>
        <h2>Hey, {user.displayName} !</h2>
        <h4>What are you gonna watch today?</h4>
        <hr/>
        <MovieSlider movies={movies} />
        <br/><br/>
        <MoviesList loading={loading} movies={movies} type="trending" />
    </div>
    )
}
