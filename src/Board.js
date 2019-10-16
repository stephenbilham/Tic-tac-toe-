
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
            xTurn: true
        }
    }


handleOnClick = (index) => {
    let { boxes, history } = this.props

    console.log(boxes);
    console.log(this.state.xTurn);
    console.log(history);



    if (findWinner(boxes || boxes[index])){
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
        xTurn: !this.state.xTurn
    })
}


    render() {

    const winner = findWinner(this.props.boxes)
    const isFilled = allBoxesClicked(this.props.boxes)

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
                    <Box
                    onClick = { () => this.handleOnClick(0)}
                    value = {this.props.boxes[0]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(1)}
                    value = {this.props.boxes[1]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(2)}
                    value = {this.props.boxes[2]}
                    />
                    <br />
                    <Box
                    onClick = { () => this.handleOnClick(3)}
                    value = {this.props.boxes[3]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(4)}
                    value = {this.props.boxes[4]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(5)}
                    value = {this.props.boxes[5]}
                    />
                    <br />
                    <Box
                    onClick = { () => this.handleOnClick(6)}
                    value = {this.props.boxes[6]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(7)}
                    value = {this.props.boxes[7]}
                    />
                    <Box
                    onClick = { () => this.handleOnClick(8)}
                    value = {this.props.boxes[8]}
                    />
                    <br />
          </div>
        );
      }
};


export default Board;
