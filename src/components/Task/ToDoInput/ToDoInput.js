import React, { useState, useRef } from "react";

import Button from "../../UI/Button/Button";
import styles from "./ToDoInput.module.css";

const ToDoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef(null);

  const toDoInputChangeHandler = (event) => {
    console.log(event);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddToDo(enteredValue);
    
    setEnteredValue('');
    inputRef.current.focus();
    event.target.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Things to do</label>
        <input ref={inputRef} type="text" onChange={toDoInputChangeHandler} />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ToDoInput;
