
import React, { Component } from 'react'

export const Box = (props) => {
    return (
            <button onClick = {props.onClick} className = "buttonOne" style = {{padding: "60px"}}>
            {props.value}
            </button>
    )
}
