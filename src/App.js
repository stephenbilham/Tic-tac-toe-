

import React, { Component } from 'react'
import './App.css';
import Board from './Board'
import Box from './Box'
import Functions from './Functions'

class App extends Component{
    constructor (props) {
        super(props)

        this.state = {
            boxes: Array(9).fill(null),
            history: []
        }
    }

    handleReset = () => {
        let { history, boxes } = this.state


        this.setState(
            {boxes: Array(9).fill(null),
            history: [],}
        )
    }

    render() {
        let {boxes, xTurn, history} = this.state
        return (
          <div className="App">
          <h1> Tic Tac Toe!!</h1>
            <Board
            boxes = {boxes}
            history = {history}
            />
            <button onClick = {this.handleReset}> Reset.. </button>
          </div>
        );
      }
    }


export default App;
