/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react"

function TodoItem(props) {
    
    let completeStyle = {
        color: 'gray',
        textDecoration: 'line-through'
    }
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={ props.item.completed ? completeStyle : null } >{props.item.text}</p>
        </div>
    )
}

export default TodoItem