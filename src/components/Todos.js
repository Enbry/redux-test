import React from 'react';
import { deleteTodo, completeTodo } from '../actions';
import { Todo } from './Todo';
import { useDispatch } from 'react-redux';

export const Todos = ({todos}) => {

  // Initialisation du dispatch pour envoyer les actions à notre reducer
  const dispatch = useDispatch();

  const listTodos = todos.map(item => {
    return (
      <Todo
        key={item.id}
        item={item}
        checkboxAction={() => dispatch(completeTodo(item))}
        buttonAction={() => dispatch(deleteTodo(item))}
      />
    );
  });
  
  return (
    <div className="todos">
      <h2>Mes tâches</h2>
      {listTodos}
    </div>
  );
}

export default Todos;
