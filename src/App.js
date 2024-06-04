import React from "react"
import './App.css';
import { TodoItem } from './TodoItem/Index';
import { TodoCounter } from './TodoCounter/Index';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: "Cortar cebolla",  completed: false},
  {text: "Picar Tomate",  completed: false},
  {text: "Servir bebidas",  completed: false},
  {text: "Exprimir Limones",  completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter
        completed={2}
        total={5}
      />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
