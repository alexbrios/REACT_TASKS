import React from "react"
import "./index.css"
import { TodoContext } from "../TodoContext/Index"

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    return (
        <h1 className="TodoCounter">
            Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> TAREAS
        </h1>
    )
}

export { TodoCounter }