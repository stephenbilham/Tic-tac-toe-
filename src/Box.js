
import React, { Component } from 'react'
import rick from "./rick.png"
import morty from "./morty.png"
import blank from "./blank.png"

class Box extends Component {

    handleClick = () => {
        const{id, handleClick} = this.props
        return handleClick(id)
    }

    render() {
        return (
            <div onClick = {this.handleClick} className = "box">
                <img className = "face" src ={this.props.value === 0 ? blank: this.props.value === 1 ? rick : morty } alt = {blank}></img>
            </div>
        );
    }
}

export default Box;
