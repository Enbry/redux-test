import React from 'react';
import { Todos } from './components/Todos';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { useSelector } from 'react-redux';

const App = () => {

  // Récupérer les éléments du state global (équivalent à notre mapStateToProps) -->le hook useSelector (dispo dans React Redux)
  // useSelector => state global // useState => state local
  
  const todos = useSelector(state => state.todos );  
  
  return (
    <div className="App">
      <header>
        <span role="img" aria-label="">🧠</span>
        <h1>Taskinator</h1>
        <span role="img" aria-label="">🤖</span>
      </header>
      <div className="container">
        <AddTodo />

        <Todos todos={todos} />
      </div>
    </div>
  );
  
}

export default App;