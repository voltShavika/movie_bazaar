import React from 'react'
import store from "./redux/store.js"
import {Provider} from 'react-redux'

import Login from './pages/login'
import Home from './pages/home'
import Search from './pages/search'
import MovieDescription from './pages/description'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom' ;

function App(){
  return(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/movies/:index" element={<MovieDescription/>}></Route>
          <Route exact path="/search" element={<Search/>}></Route>
        </Routes>
      </Router>
    </Provider>
  )

}

export default App;