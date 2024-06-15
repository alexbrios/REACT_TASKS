import './Index.css';
import { TodoContext } from '../TodoContext/Index';
import React from 'react';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <button className="CreateTodoButton"
        onClick={(event) => {
            setOpenModal(!openModal)
        }}
        >+</button>
    )
}

export { CreateTodoButton }