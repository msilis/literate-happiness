import React from 'react';

import TaskItem from '../TaskItem/TaskItem';
import './ToDoList.css';

const ToDoList = props => {
  return (
    <ul className="toDo-list">
      {props.items.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
        >
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default ToDoList;
