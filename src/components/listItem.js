import React, { Component } from 'react'

const ListItem = (props) =>{
    return (
        <div>
            <li>{props.text}</li>
            <button onClick={props.delete}>&times;</button>
        </div>
    )
}

export default ListItem;