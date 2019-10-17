
import React, { Component } from 'react'
import './App.css';
import {Box} from './Box.js'
import Functions from './Functions'
import {findWinner} from './Functions.js'
import {allBoxesClicked} from './Functions.js'
import {changePlayer} from './Functions.js'

class Board extends Component{
    constructor (props) {
        super(props)

        this.state = {
            xTurn: true,
            history: [],
            boxes: Array(9).fill(null),
            noTurn: true,
        }
    }


    handleOnClick = (index) => {
        let { history, boxes, noTurn, yesTurn } = this.state
        boxes.value = index

        if (boxes[index] == null) {
            if (findWinner(boxes)){
                return
            }
            if (allBoxesClicked(boxes) === true) {
                return
            }


            boxes[index] = this.state.xTurn ? 'X': 'O'
            history.push(this.state.xTurn ? 'X': 'O')

            this.setState({
                boxes: boxes,
                history: history,
                xTurn: !this.state.xTurn,
                noTurn: false,
            })
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

    const winner = findWinner(this.state.boxes)
    const isFilled = allBoxesClicked(this.state.boxes)

    let status

        if (winner) {
            status = `The winner is ${winner}!`
        } else if(!winner && isFilled) {
            status = 'Game drawn!'
        } else {
            status = `It is ${(this.state.xTurn ? 'X' : 'O')}'s turn.`
        }

        return (
          <div className="App">
              <h2>{status}</h2>
                <div className= "boardSize" >
                    <Box
                    onClick = { () => this.handleOnClick(0)}
                    value = {this.state.boxes[0]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(1)}
                    value = {this.state.boxes[1]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(2)}
                    value = {this.state.boxes[2]}
                    />
                    <br />
                    <Box
                    onClick = { () => this.handleOnClick(3)}
                    value = {this.state.boxes[3]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(4)}
                    value = {this.state.boxes[4]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(5)}
                    value = {this.state.boxes[5]}
                    />
                    <br />
                    <Box
                    onClick = { () => this.handleOnClick(6)}
                    value = {this.state.boxes[6]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(7)}
                    value = {this.state.boxes[7]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(8)}
                    value = {this.state.boxes[8]}
                    />
                    <br />
                </div>
                <button onClick = {this.handleReset}> Restart Game </button>
          </div>
        );
      }
};


export default Board;
