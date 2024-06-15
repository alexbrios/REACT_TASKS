import React from "react";
import "./Index.css"
import { TodoContext } from "../TodoContext/Index"

function TodoForm () {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const [newTodoValue, setTodoNewValue] = React.useState()

    const onSubmit =(event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel =() => {
        setOpenModal(false)
    }

    const onChange =(event) => {
        setTodoNewValue(event.target.value)
    }

    return (
        <form onSumbti={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar Cebolla"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                    onClick={onSubmit}
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }