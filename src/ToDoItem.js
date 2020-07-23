import React from "react";
import db from './firebase';

function ToDoItem (props) {
  return (
    <div
    
      onClick = {event => db.collection('items').doc(props.todoItem.id).delete()} 
    >
      <li>{props.todoItem.todoItem}</li>
    </div>
  );
}

export default ToDoItem ;