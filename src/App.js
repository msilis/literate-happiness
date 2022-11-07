import React, { useState } from "react";

import ToDoList from "./components/Task/ToDoList/ToDoList";
import ToDoInput from "./components/Task/ToDoInput/ToDoInput";
import "./App.css";

const App = () => {
  const [toDo, setToDo] = useState([]);

  const addToDoHandler = (enteredText) => {
    setToDo((prevToDos) => {
      const updatedToDos = [...prevToDos];
      updatedToDos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedToDos;
    });
  };

  const deleteItemHandler = (taskId) => {
    setToDo((prevToDos) => {
      const updatedToDos = prevToDos.filter((task) => task.id !== taskId);
      return updatedToDos;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>Nothing to do! You're free!</p>
  );

  let footerInfo = (
    <p style={{ textAlign: "center"}}></p>
  );

  if (toDo.length > 0) {
    content = (
      <ToDoList items={toDo} onDeleteItem={deleteItemHandler} />
    );
    footerInfo = (<p style={{ textAlign: 'center'}}>Click task to delete.</p>)
  }

  

  return (
    
    <div>
      <section id="toDo-form">
        <ToDoInput onAddToDo={addToDoHandler} />
      </section>
      <section id="tasks">{content}</section>
      <section>{footerInfo}</section>
    </div>
  );
};

export default App;
