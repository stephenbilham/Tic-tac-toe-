
import React, { Component } from 'react'

export const Box = (props) => {
    return (
        <button onClick = {props.onClick} style = {{padding: '40px'}}>
            {props.value}
        </button>
    )
}
