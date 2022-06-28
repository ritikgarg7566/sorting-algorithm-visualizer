import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Inner from './Inner'
import Complete from './front/Complete';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
              <Route path='/' element={<Complete/>} />
              <Route path='/inner' element={<Inner/>} />
            </Routes>
        </Router>
      </div>
    )
  }
}
