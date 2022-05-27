import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const ToDoList = ({index, item, deleteItem, updateItem}) => {
    return (
        
        <div className="todo_item">
            <span>{index + 1}</span>
            <span>{item}</span>
            <span>
                <button className="edit_btn" onClick={()=>{updateItem(index)}}><FontAwesomeIcon icon={faPenToSquare} size="xs" /></button>
                <button className="delete_btn" onClick={()=>{deleteItem(index)}}><FontAwesomeIcon icon={faTrash} size="xs"/></button>
            </span>
        </div>
        
    )
}

export default ToDoList
