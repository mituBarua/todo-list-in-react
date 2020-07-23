import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  
  
  useEffect(() => {
    ///this code fire whn app.js loads

    db.collection('items').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setItems(snapshot.docs.map(doc => ({id: doc.id ,todoItem: doc.data().todoItem})))
    })
  },[]);
  const addTodo = (event) => {
    //this will happen when we click button
    event.preventDefault(); //prevent from refreshing
    
    db.collection('items').add({
      todoItem:inputText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInputText(''); //clear up the input after clicking add todo button

  }

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }

  // function addItem() {
  //   setItems(prevItems => {
  //     return [...prevItems, inputText];
  //   });
  //   setInputText("");
  // }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input value={inputText} onChange={event => setInputText(event.target.value)} />
        <button disabled ={!inputText} type="submit" onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
       {/* <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))} 
        </ul>  */}

        <ul>
        {
          items.map((todoItem ,index) => (
           <ToDoItem 
            key={index}
            id={index}
           todoItem={todoItem}
           onChecked={deleteItem}
           />
          ))
        }
       
       </ul>
      </div>
    </div>
  );
}

export default App;
