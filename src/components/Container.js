import React, { useState, useCallback, useRef } from 'react'
import _debounce from 'lodash/debounce'
import { callSearchMovieApi, setQuery } from '../redux/movie/actions';
import { useDispatch, useSelector } from 'react-redux';
import {signOut} from 'firebase/auth'

import auth from '../base'
import {logoutReq } from '../redux/user/actions';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { entries } from 'lodash';

export default function Container({children, home}) {
    const {loggedIn, user} = useSelector(state => state.user);
    const {query, page, totalPages, searchLoading} = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDebounceFn = (inputQuery) => {
        if(inputQuery.length > 0){
            dispatch(callSearchMovieApi(inputQuery, 1))  // default to page 1
        }
    }

    const debounceFn = useCallback(_debounce(handleDebounceFn, 500), [])

    const handleChange = (e) => {
        dispatch(setQuery(e.target.value));
        debounceFn(e.target.value);
    }

    const handleLogout = () => {
        signOut(auth)
        dispatch(logoutReq());
    }

    return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {
                    loggedIn
                    ?
                        <Link to="/movies" className='navbar-brand'>Movie Bazar</Link>
                    :
                        <Link to="/" className='navbar-brand'>Movie Bazar</Link>

                }
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <li className="nav-item">
                            {
                                loggedIn
                                &&
                                <button onClick={handleLogout} className="btn btn-outline-danger" type="submit">Logout</button>
                            }
                        </li>
                    </ul>
                {
                    home &&
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" value={query} placeholder="Search" onChange={handleChange}/> 
                    </form>
                }
                
                </div>
            </div>
        </nav>
        <div className='container-fluid bg-dark' style={{minHeight: "700px"}}>
            {children}
        </div>
    </>
    )
}
