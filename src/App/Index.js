import React from "react"
import './App.css';
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI"

const defaultTodos = [
  {text: "Cortar cebolla",  completed: true},
  {text: "Picar Tomate",  completed: false},
  {text: "Servir bebidas",  completed: false},
  {text: "Exprimir Limones",  completed: false}
]

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))

// localStorage.removeItem("TODOS_V1")



function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = React.useState("")

  const completedTodos = todos.filter(todo =>
    !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()

    return todoText.includes(searchText)
  })


  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
