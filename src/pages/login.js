import React, {useEffect} from 'react'
import Container from '../components/Container'
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth'
import auth from '../base'
import { useDispatch, useSelector } from 'react-redux'
import { loginErr, loginReq, loginSuc,  logoutReq } from '../redux/user/actions';
import { Navigate } from 'react-router-dom'

export default function Login() {
  const {loading, loggedIn, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
	}

  const handleLogout = () => {
      signOut(auth)
      dispatch(logoutReq())
  }

  useEffect(()=> {
    dispatch(loginReq())
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>  {
            console.log("User", currentUser);
            if(currentUser != null){
                dispatch(loginSuc(currentUser));
            }else{
                dispatch(loginErr())
            }
    });
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Container>
      <div className='container'>
      {
          loggedIn
          ?
          <Navigate to="/movies" />
          :
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div className="card p-5 mt-5">
                <div className='text-center'>
                  <h3>Please Login to continue</h3>
                  <br/>
                  <button onClick={handleGoogleSignIn} className="btn btn-outline-primary" type="submit">Google Signin</button>
                </div>
              </div>
            </div>

          </div>
          
      }
        
      </div>
    </Container>
  )
}
