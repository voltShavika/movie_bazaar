import React from 'react'
import store from "./redux/store.js"
import {Provider} from 'react-redux'


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from 'react-router-dom' ;

import Login from './pages/Login';
import Dashboard from './pages/Dashboard.js'
import MovieDescription from './pages/Description'

function App(){
  return(
    <Provider store={store}>
      <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/movies" element={<Dashboard/>}></Route>
          <Route exact path="/movies/:index" element={<MovieDescription/>}></Route>
          <Route exact path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </Provider>
  )

}

export default App;