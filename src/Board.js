
import React, { Component } from 'react';
import './App.css';
import Box from './Box.js';
import Functions from './Functions';
import {findWinner} from './Functions.js';
import {allBoxesClicked} from './Functions.js';
import {changePlayer} from './Functions.js';
import winningConditions from './winningConditions.js'

let boxes = Array(9).fill(0);
let player1 = [];
let player2 = [];
let winningPlayer = 0



class Board extends Component{
    constructor (props) {
        super(props)

        this.state = {
            player1Turn: true,
            gameOver: false
        }
    }

    handleClick = (index) => {
        if(boxes[index] != 0){
            return
        }
        let {player1Turn,gameOver} = this.state
        if(gameOver){
            return
        }
        boxes[index] = player1Turn ? 1 : 2

        if(player1Turn) {
            player1.push(index)   
        } else {
            player2.push(index)
        }

        let curPlayerWon = this.findIfWinner()
        if(curPlayerWon){
            winningPlayer = player1Turn ? 1 : 2
            this.setState({gameOver:true})
        } else {
            this.setState({player1Turn: !player1Turn})
        }
    }

    findIfWinner = () => {
        let {player1Turn} = this.state
        let playerBoxes = player1Turn ? player1 : player2
        let playerWon = true
        for(let i = 0; i < winningConditions.length; i++){
            let winningCondition = winningConditions[i] //e.g [0,1,2]
            playerWon = true
            for(let j = 0; j < 3; j++){
                let curBox = winningCondition[j] //[0,1,2] curBox => number 
                if(!playerBoxes.includes(curBox)){
                    playerWon = false
                    break
                }
            }
            if(playerWon){
                break
            }
        }
        return playerWon
    }

    getTitleText = () => { 
        let {player1Turn,gameOver} = this.state
        if(gameOver){
            return winningPlayer === 1 ? "Rick Wins!" : "Morty's wins!"
        }
        else {
            return player1Turn ? `It's your turn Rick` : `It's your Morty`
        }
    }

    handleReset = () => {
        boxes = Array(9).fill(0)
        player1 = [];
        player2 = [];
        winningPlayer = 0
        this.setState({player1Turn:true, gameOver: false})
    }

    render() {
        let grid = boxes.map((box, i ) => {
            return (
                <Box key={i.toString()} id={i} value={box} handleClick={this.handleClick}/>
            )
        })
        return (
            <div>
                <h2>{this.getTitleText()}</h2>
                    <div className= "grid" >
                        {grid}
                    </div>
                <button id = 'resetButton' onClick = {this.handleReset}> Restart Game </button>
            </div>
        );
    }
};


export default Board;
