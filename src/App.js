

import React, { Component } from 'react'
import './App.css';
import Board from './Board'
import Box from './Box'
import Functions from './Functions'

class App extends Component{

    render() {
        return (
          <div className="App" style = {{textAlign: 'center'}}>
          <h1> Tic Tac Toe!!</h1>
            <Board />
          </div>
        );
      }
    }


export default App;
